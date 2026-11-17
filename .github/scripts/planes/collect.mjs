// Polls public ADS-B feeds for the /planes fleet and keeps planes.json and
// per-flight tracks in a data directory (a checkout of the planes-data branch).
//
//   node .github/scripts/planes/collect.mjs --data ./data [--seconds 285] [--interval 30] [--push]
//
// While nothing is flying it polls once and exits. While a plane is in the air it keeps
// polling every --interval seconds until --seconds have passed, pushing about once a minute.
// --push commits the data directory as a single parentless commit and force-pushes it
// to the planes-data branch, so the branch never grows a long history.

import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { compact, createAirportIndex, emptyDb, step } from "./tracker.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../../..");

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return fallback;
  const next = process.argv[i + 1];
  return next && !next.startsWith("--") ? next : true;
}

const dataDir = resolve(String(arg("data", join(repoRoot, "planes-data"))));
const runSeconds = Number(arg("seconds", 285));
const intervalSeconds = Number(arg("interval", 30));
const push = Boolean(arg("push", false));
const fixturePath = arg("fixture", null);

const fleetFile = JSON.parse(readFileSync(join(repoRoot, "planes/data/aircraft.json"), "utf8"));
const fleet = fleetFile.aircraft;
const index = createAirportIndex(JSON.parse(readFileSync(join(here, "airports.json"), "utf8")));

const SOURCES = [
  { name: "adsb.fi", url: (hexes) => `https://opendata.adsb.fi/api/v2/hex/${hexes.join(",")}` },
  { name: "adsb.lol", url: (hexes) => `https://api.adsb.lol/v2/hex/${hexes.join(",")}` },
];

async function fetchRecords() {
  const hexes = fleet.map((p) => p.hex.toLowerCase());
  const errors = [];
  for (const source of SOURCES) {
    try {
      const response = await fetch(source.url(hexes), {
        headers: { "user-agent": "thecuzzorts-planes/1.0 (+https://www.thecuzzorts.com/planes/)" },
        signal: AbortSignal.timeout(12_000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const body = await response.json();
      if (!Array.isArray(body.ac)) throw new Error("no ac array");
      const now = typeof body.now === "number" ? body.now : Date.now();
      const records = {};
      for (const ac of body.ac) if (ac && ac.hex) records[ac.hex.toLowerCase()] = ac;
      return { source: source.name, now, records };
    } catch (error) {
      errors.push(`${source.name}: ${error.message}`);
    }
  }
  throw new Error(errors.join("; "));
}

function readDb() {
  const file = join(dataDir, "planes.json");
  if (!existsSync(file)) return emptyDb();
  try {
    const db = JSON.parse(readFileSync(file, "utf8"));
    return db && db.version === 1 ? db : emptyDb();
  } catch {
    return emptyDb();
  }
}

function writeDb(db, finished) {
  mkdirSync(join(dataDir, "tracks"), { recursive: true });
  for (const track of finished) {
    writeFileSync(join(dataDir, "tracks", `${track.id}.json`), JSON.stringify(track));
  }
  db.fleet = fleet.map(({ tail, hex, type, model, year, color }) => ({ tail, hex, type, model, year, color }));
  writeFileSync(join(dataDir, "planes.json"), JSON.stringify(compact(db, db.updated)));
}

function git(...args) {
  return execFileSync("git", ["-C", dataDir, ...args], { encoding: "utf8" }).trim();
}

function pushData(message) {
  git("add", "-A");
  const tree = git("write-tree");
  const commit = git("commit-tree", tree, "-m", message);
  git("push", "--force", "--quiet", "origin", `${commit}:refs/heads/planes-data`);
  console.log(`pushed ${commit.slice(0, 7)}: ${message}`);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const deadline = Date.now() + runSeconds * 1000;
  let db = readDb();
  let lastPush = 0;
  let pendingPush = false;
  let lastSource = null;
  const fixture = fixturePath ? JSON.parse(readFileSync(String(fixturePath), "utf8")) : null;
  let fixtureStep = 0;

  for (;;) {
    let poll;
    try {
      if (fixture) {
        if (fixtureStep >= fixture.length) break;
        poll = { source: "fixture", ...fixture[fixtureStep] };
        fixtureStep += 1;
      } else {
        poll = await fetchRecords();
      }
    } catch (error) {
      console.error(`poll failed: ${error.message}`);
      poll = null;
    }

    let flying = false;
    if (poll) {
      lastSource = poll.source;
      db.source = poll.source;
      const { events, finished } = step(db, fleet, poll.records, poll.now, index);
      writeDb(db, finished);
      pendingPush = true;
      for (const e of events) console.log(`${new Date(poll.now).toISOString()} ${e.type} ${e.tail} ${e.from || e.to || ""}`.trim());
      flying = Object.keys(db.active).length > 0;
      const status = fleet.map((p) => `${p.tail}:${db.aircraft[p.hex].status}`).join(" ");
      console.log(`${new Date(poll.now).toISOString()} ${poll.source} ${status}`);

      if (push && (events.length || Date.now() - lastPush >= 55_000 || !flying)) {
        pushData(events.length ? events.map((e) => `${e.type} ${e.tail}`).join(", ") : `update ${status}`);
        lastPush = Date.now();
        pendingPush = false;
      }
    }

    if (fixture) continue;
    if (!flying && poll) break;
    if (Date.now() + intervalSeconds * 1000 > deadline) break;
    await sleep(intervalSeconds * 1000);
  }

  if (push && pendingPush) pushData(`update via ${lastSource}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
