// Cloudflare Worker behind /planes.
//
//   cron, every minute   poll the ADS-B feeds, run the flight logic, store the db in D1
//   GET /planes.json      the stored db with a fresh (<= 10 s old) poll applied on top
//   GET /tracks/<id>.json a finished flight's track
//
// The positions are public ADS-B data, so responses are open to any origin.

import airports from "./airports.json";
import fleetFile from "../../../planes/data/aircraft.json";
import { compact, createAirportIndex, emptyDb, step } from "./tracker.mjs";

const fleet = fleetFile.aircraft.map((p) => ({ ...p, hex: p.hex.toLowerCase() }));
const LIVE_TTL_MS = 10_000;
const SEED_URL = "https://raw.githubusercontent.com/thecuzzorts/thecuzzorts/planes-data/planes.json";
const UA = "thecuzzorts-planes/2.0 (+https://www.thecuzzorts.com/planes/)";

const SOURCES = [
  { name: "adsb.fi", url: (hexes) => `https://opendata.adsb.fi/api/v2/hex/${hexes.join(",")}` },
  { name: "adsb.lol", url: (hexes) => `https://api.adsb.lol/v2/hex/${hexes.join(",")}` },
];

// Built once when the isolate starts, so it doesn't count against each run's CPU time.
const airportIndex = createAirportIndex(airports);
const index = () => airportIndex;

// One upstream request per isolate per LIVE_TTL_MS, however many viewers poll.
let live = null;
let liveInFlight = null;

async function poll(env) {
  const hexes = fleet.map((p) => p.hex);
  const errors = [];
  // ADSB_URL (local testing only) replaces both feeds with one readsb-style endpoint.
  const sources = env.ADSB_URL ? [{ name: "test", url: (h) => `${env.ADSB_URL}${h.join(",")}` }] : SOURCES;
  for (const source of sources) {
    try {
      const response = await fetch(source.url(hexes), {
        headers: { "user-agent": UA, accept: "application/json" },
        signal: AbortSignal.timeout(8_000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const body = await response.json();
      if (!Array.isArray(body.ac)) throw new Error("no ac array");
      const records = {};
      for (const ac of body.ac) if (ac && ac.hex) records[ac.hex.toLowerCase()] = ac;
      return { source: source.name, now: typeof body.now === "number" ? body.now : Date.now(), records };
    } catch (error) {
      errors.push(`${source.name}: ${error.message}`);
    }
  }
  throw new Error(errors.join("; "));
}

async function livePoll(env) {
  if (live && Date.now() - live.fetchedAt < LIVE_TTL_MS) return live;
  if (!liveInFlight) {
    liveInFlight = poll(env)
      .then((result) => (live = { ...result, fetchedAt: Date.now() }))
      .finally(() => (liveInFlight = null));
  }
  return liveInFlight;
}

// Creates the table on first use, so a fresh D1 database needs no setup step.
let tableReady = null;
function ensureTable(env) {
  tableReady ||= env.DB.prepare(
    "CREATE TABLE IF NOT EXISTS kv (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated INTEGER NOT NULL)",
  )
    .run()
    .catch((error) => {
      tableReady = null;
      throw error;
    });
  return tableReady;
}

async function readDb(env) {
  await ensureTable(env);
  const row = await env.DB.prepare("SELECT value FROM kv WHERE key = 'planes'").first();
  if (row) {
    try {
      const db = JSON.parse(row.value);
      if (db && db.version === 1) return db;
    } catch {
      // fall through to a fresh db
    }
  }
  return null;
}

async function seedDb(env) {
  if (env.ADSB_URL) return emptyDb();
  // Carry over what the old GitHub Action collected, if it is there.
  try {
    const response = await fetch(SEED_URL, { headers: { "user-agent": UA } });
    if (response.ok) {
      const db = await response.json();
      if (db && db.version === 1) return db;
    }
  } catch {
    // start empty
  }
  return emptyDb();
}

function withFleet(db) {
  db.fleet = fleet.map(({ tail, hex, type, model, year, color }) => ({ tail, hex, type, model, year, color }));
  return db;
}

async function collect(env) {
  const db = (await readDb(env)) || (await seedDb(env));
  const result = await poll(env);
  db.source = result.source;
  const { finished, events } = step(db, fleet, result.records, result.now, index());
  const statements = [
    env.DB.prepare("INSERT OR REPLACE INTO kv (key, value, updated) VALUES ('planes', ?1, ?2)").bind(
      JSON.stringify(withFleet(compact(db, db.updated))),
      result.now,
    ),
  ];
  for (const track of finished) {
    statements.push(
      env.DB.prepare("INSERT OR REPLACE INTO kv (key, value, updated) VALUES (?1, ?2, ?3)").bind(
        `track:${track.id}`,
        JSON.stringify(track),
        result.now,
      ),
    );
  }
  await env.DB.batch(statements);
  live = { ...result, fetchedAt: Date.now() };
  for (const e of events) console.log(`${e.type} ${e.tail} ${e.from || e.to || ""}`.trim());
  return db;
}

const CORS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, OPTIONS",
  "access-control-max-age": "86400",
};

function json(body, status = 200) {
  return new Response(typeof body === "string" ? body : JSON.stringify(body), {
    status,
    headers: { ...CORS, "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
}

async function planes(env) {
  const db = (await readDb(env)) || withFleet(emptyDb());
  try {
    const result = await livePoll(env);
    if (result.now > (db.updated || 0)) {
      // Apply the fresh poll to a copy. Only the cron writes to storage.
      db.source = result.source;
      step(db, fleet, result.records, result.now, index());
    }
  } catch (error) {
    db.liveError = error.message;
  }
  return json(withFleet(compact(db, db.updated)));
}

async function track(env, id) {
  if (!/^[A-Z0-9]+-\d{8}-\d{4}$/.test(id)) return json({ error: "bad id" }, 400);
  await ensureTable(env);
  const row = await env.DB.prepare("SELECT value FROM kv WHERE key = ?1").bind(`track:${id}`).first();
  if (!row) return json({ error: "not found" }, 404);
  return new Response(row.value, {
    headers: { ...CORS, "content-type": "application/json; charset=utf-8", "cache-control": "public, max-age=86400" },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
    if (request.method !== "GET") return json({ error: "method not allowed" }, 405);
    const { pathname } = new URL(request.url);
    if (pathname === "/planes.json") return planes(env);
    const match = pathname.match(/^\/tracks\/([^/]+)\.json$/);
    if (match) return track(env, decodeURIComponent(match[1]));
    if (pathname === "/") return json({ ok: true, endpoints: ["/planes.json", "/tracks/<id>.json"] });
    return json({ error: "not found" }, 404);
  },

  async scheduled(_controller, env, ctx) {
    ctx.waitUntil(
      collect(env).catch((error) => {
        console.error(`collect failed: ${error.message}`);
      }),
    );
  },
};
