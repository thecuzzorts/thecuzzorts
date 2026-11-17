// Flight detection for /planes. Pure functions, no I/O, so they can be tested
// with recorded fixes. collect.mjs does the fetching and writing.

const NM_PER_RAD = 3440.065;
const MIN = 60_000;
const HOUR = 60 * MIN;

// A fix older than this is not a current position.
export const STALE_FIX_MS = 60_000;
// With no position for this long, an open flight is closed.
export const LOST_CLOSE_MS = 30 * MIN;
// Low and near an airport when the signal went quiet: close sooner.
export const LOW_LOST_CLOSE_MS = 6 * MIN;
// A flight that ended in a signal gap and reappears in the air is reopened.
export const REOPEN_MS = 3 * HOUR;
export const KEEP_FLIGHTS_MS = 400 * 24 * HOUR;

export function distanceNm(aLat, aLon, bLat, bLon) {
  const toRad = Math.PI / 180;
  const dLat = (bLat - aLat) * toRad;
  const dLon = (bLon - aLon) * toRad;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(aLat * toRad) * Math.cos(bLat * toRad) * Math.sin(dLon / 2) ** 2;
  return 2 * NM_PER_RAD * Math.asin(Math.min(1, Math.sqrt(h)));
}

// airports: [code, name, lat, lon, elev, city, region][]
export function createAirportIndex(airports) {
  // Bucket by whole degree so lookups stay quick with ~11k rows.
  const buckets = new Map();
  for (const row of airports) {
    const key = `${Math.floor(row[2])},${Math.floor(row[3])}`;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(row);
  }
  return {
    nearest(lat, lon, maxNm = 60) {
      const span = Math.min(6, Math.ceil(maxNm / 50) + 1);
      let best = null;
      let bestNm = Infinity;
      const baseLat = Math.floor(lat);
      const baseLon = Math.floor(lon);
      for (let dy = -span; dy <= span; dy += 1) {
        for (let dx = -span; dx <= span; dx += 1) {
          const rows = buckets.get(`${baseLat + dy},${baseLon + dx}`);
          if (!rows) continue;
          for (const row of rows) {
            const nm = distanceNm(lat, lon, row[2], row[3]);
            if (nm < bestNm) {
              best = row;
              bestNm = nm;
            }
          }
        }
      }
      if (!best || bestNm > maxNm) return null;
      return { row: best, nm: bestNm };
    },
  };
}

function place(hit, approx) {
  if (!hit) return null;
  const [code, name, lat, lon, elev, city, region] = hit.row;
  return {
    code,
    name,
    city: city || "",
    region: region || "",
    lat,
    lon,
    elev,
    nm: Math.round(hit.nm * 10) / 10,
    approx: Boolean(approx),
  };
}

// Turn one readsb-style aircraft record into a compact fix.
export function toFix(record, nowMs) {
  if (!record || typeof record.lat !== "number" || typeof record.lon !== "number") return null;
  const seenPos = typeof record.seen_pos === "number" ? record.seen_pos : record.seen || 0;
  const onGround = record.alt_baro === "ground";
  const fix = {
    t: Math.round(nowMs - seenPos * 1000),
    lat: Math.round(record.lat * 1e5) / 1e5,
    lon: Math.round(record.lon * 1e5) / 1e5,
    alt: onGround ? 0 : typeof record.alt_baro === "number" ? record.alt_baro : record.alt_geom ?? null,
    ground: onGround,
    gs: typeof record.gs === "number" ? Math.round(record.gs) : null,
    trk: typeof record.track === "number" ? Math.round(record.track) : typeof record.true_heading === "number" ? Math.round(record.true_heading) : null,
    vs: typeof record.baro_rate === "number" ? record.baro_rate : typeof record.geom_rate === "number" ? record.geom_rate : null,
  };
  if (typeof record.mach === "number") fix.mach = record.mach;
  if (typeof record.tas === "number") fix.tas = record.tas;
  if (typeof record.ias === "number") fix.ias = record.ias;
  if (record.squawk) fix.sq = record.squawk;
  if (record.flight && record.flight.trim()) fix.cs = record.flight.trim();
  if (typeof record.oat === "number") fix.oat = record.oat;
  if (typeof record.nav_altitude_mcp === "number") fix.sel = record.nav_altitude_mcp;
  return fix;
}

function aboveField(fix, index) {
  if (fix.ground) return 0;
  if (typeof fix.alt !== "number") return null;
  const near = index.nearest(fix.lat, fix.lon, 15);
  const elev = near ? near.row[4] : 0;
  return fix.alt - elev;
}

export function isAirborne(fix, index) {
  if (fix.ground) return false;
  const agl = aboveField(fix, index);
  if (fix.gs != null && fix.gs >= 50) return true;
  return agl != null && agl > 500;
}

export function emptyDb() {
  return { version: 1, updated: 0, source: null, aircraft: {}, active: {}, flights: [] };
}

function flightId(tail, startMs) {
  const d = new Date(startMs);
  const pad = (n) => String(n).padStart(2, "0");
  return `${tail}-${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

function pathPoint(fix) {
  return [fix.t, fix.lat, fix.lon, typeof fix.alt === "number" ? fix.alt : null, fix.gs];
}

function pathLength(path) {
  let total = 0;
  for (let i = 1; i < path.length; i += 1) {
    total += distanceNm(path[i - 1][1], path[i - 1][2], path[i][1], path[i][2]);
  }
  return total;
}

function summarizeActive(summary, path) {
  summary.points = path.length;
  summary.distNm = Math.round(pathLength(path));
  let maxAlt = summary.maxAlt || 0;
  for (const p of path) if (typeof p[3] === "number" && p[3] > maxAlt) maxAlt = p[3];
  summary.maxAlt = maxAlt;
}

// Apply one poll to the db. `records` maps hex -> readsb record (or is missing).
// Returns { db, events, finished } where finished holds tracks to write.
export function step(db, fleet, records, nowMs, index) {
  const events = [];
  const finished = [];
  db.updated = nowMs;

  for (const plane of fleet) {
    const hex = plane.hex.toLowerCase();
    const state =
      db.aircraft[hex] ||
      (db.aircraft[hex] = { tail: plane.tail, status: "unseen", last: null, lastSeen: null, ground: null, flight: null });
    state.tail = plane.tail;

    const fix = toFix(records[hex], nowMs);
    const fresh = fix && nowMs - fix.t <= STALE_FIX_MS;
    const activeId = state.flight;
    const active = activeId ? db.active[hex] : null;
    const summary = activeId ? db.flights.find((f) => f.id === activeId) : null;

    if (fresh) {
      state.last = fix;
      state.lastSeen = fix.t;
      const airborne = isAirborne(fix, index);

      if (airborne) {
        state.status = "air";
        if (!active || !summary) {
          openFlight(db, plane, state, fix, nowMs, index, events);
        } else {
          const path = active.path;
          const prev = path[path.length - 1];
          if (!prev || fix.t - prev[0] >= 15_000) path.push(pathPoint(fix));
          summarizeActive(summary, path);
          if (fix.cs) summary.callsign = fix.cs;
        }
      } else {
        state.status = "ground";
        const at = place(index.nearest(fix.lat, fix.lon, 8), false);
        if (active && summary) {
          active.path.push(pathPoint({ ...fix, alt: at ? at.elev : 0 }));
          closeFlight(db, state, summary, active, fix.t, at, false, finished, events);
        }
        if (!state.ground || !at || state.ground.code !== at.code) {
          state.ground = at ? { ...at, since: fix.t } : { code: null, name: null, lat: fix.lat, lon: fix.lon, since: fix.t };
        }
        state.ground.seen = fix.t;
      }
      continue;
    }

    // No current position.
    state.status = active ? "lost" : "unseen";
    if (!active || !summary) continue;
    const last = state.last;
    const quietFor = nowMs - (last ? last.t : summary.start);
    const agl = last ? aboveField(last, index) : null;
    const nearField = last ? index.nearest(last.lat, last.lon, 12) : null;
    const descending = last && (last.vs == null || last.vs <= 300);
    const lowNearField = agl != null && agl < 3000 && nearField && descending;
    if (quietFor >= LOST_CLOSE_MS || (lowNearField && quietFor >= LOW_LOST_CLOSE_MS)) {
      let to = null;
      if (last) {
        const hit = index.nearest(last.lat, last.lon, agl != null && agl < 5000 ? 25 : 0);
        to = place(hit, true);
      }
      const lostNear = last ? place(index.nearest(last.lat, last.lon, 250), true) : null;
      closeFlight(db, state, summary, active, last ? last.t : nowMs, to, true, finished, events, lostNear);
      state.status = "unseen";
      if (to) state.ground = { ...to, since: last.t, seen: null, assumed: true };
    }
  }

  const cutoff = nowMs - KEEP_FLIGHTS_MS;
  db.flights = db.flights.filter((f) => (f.end || nowMs) >= cutoff);
  db.flights.sort((a, b) => b.start - a.start);
  return { db, events, finished };
}

function openFlight(db, plane, state, fix, nowMs, index, events) {
  const hex = plane.hex.toLowerCase();

  // A flight that ended in a signal gap a short while ago and comes back in the air
  // was never on the ground. Pick it back up.
  const recent = db.flights.find((f) => f.hex === hex);
  if (recent && recent.lost && recent.end && fix.t - recent.end <= REOPEN_MS && recent.track) {
    recent.lost = false;
    recent.end = null;
    recent.to = null;
    delete recent.lostNear;
    db.active[hex] = { id: recent.id, path: recent.track.slice() };
    delete recent.track;
    recent.reopen = true;
    db.active[hex].path.push(pathPoint(fix));
    summarizeActive(recent, db.active[hex].path);
    state.flight = recent.id;
    events.push({ type: "resume", tail: plane.tail, id: recent.id });
    return;
  }

  const agl = aboveField(fix, index) ?? fix.alt ?? 0;
  const climbedFor = agl > 1500 ? Math.round((agl / 2500) * MIN) : 0;
  let start = fix.t - climbedFor;
  let startApprox = climbedFor > 0;
  const groundSeen = state.ground && (state.ground.seen || state.ground.since);
  if (groundSeen && groundSeen > start) {
    start = groundSeen;
    startApprox = true;
  }
  if (groundSeen && fix.t - groundSeen < 3 * MIN) startApprox = false;

  // Planes leave from where they last landed. Use that if it is plausible
  // for the time that has passed, otherwise the airport nearest the first fix.
  let from = null;
  const g = state.ground;
  if (g && g.code && g.since && fix.t - (g.seen || g.since) < 14 * 24 * HOUR) {
    const elapsedH = Math.max(0, (fix.t - (g.seen || g.since)) / HOUR);
    const reach = 25 + elapsedH * 520;
    if (distanceNm(g.lat, g.lon, fix.lat, fix.lon) <= reach) {
      from = { code: g.code, name: g.name, city: g.city, region: g.region, lat: g.lat, lon: g.lon, elev: g.elev, approx: Boolean(g.assumed) };
    }
  }
  let firstNear = null;
  if (!from && agl < 3000) {
    from = place(index.nearest(fix.lat, fix.lon, 15), agl >= 1500);
  }
  if (!from) {
    // First seen well up in the air: say where, not a guessed origin.
    firstNear = place(index.nearest(fix.lat, fix.lon, 250), true);
    startApprox = true;
  }

  const id = flightId(plane.tail, start);
  const summary = {
    id,
    hex,
    tail: plane.tail,
    start,
    startApprox,
    end: null,
    from,
    to: null,
    lost: false,
    maxAlt: typeof fix.alt === "number" ? fix.alt : 0,
    distNm: 0,
    points: 1,
  };
  if (firstNear) summary.firstNear = firstNear;
  if (fix.cs) summary.callsign = fix.cs;
  db.flights.unshift(summary);
  db.active[hex] = { id, path: [pathPoint(fix)] };
  state.flight = id;
  state.ground = null;
  events.push({ type: "takeoff", tail: plane.tail, id, from: from && from.code });
}

function closeFlight(db, state, summary, active, endMs, to, lost, finished, events, lostNear) {
  summarizeActive(summary, active.path);
  summary.end = endMs;
  summary.to = to;
  summary.lost = Boolean(lost) && !to;
  if (lostNear && !to) summary.lostNear = lostNear;
  if (summary.lost) summary.track = active.path; // kept inline so it can be reopened
  finished.push({ id: summary.id, hex: summary.hex, tail: summary.tail, path: active.path });
  delete db.active[summary.hex];
  state.flight = null;
  events.push({ type: lost ? "lost" : "landing", tail: summary.tail, id: summary.id, to: to && to.code });
}

// Before writing, drop inline tracks from reopened-window flights that aged out.
export function compact(db, nowMs) {
  for (const f of db.flights) {
    if (f.track && f.end && nowMs - f.end > REOPEN_MS) {
      delete f.track;
      f.lost = !f.to;
    }
  }
  return db;
}
