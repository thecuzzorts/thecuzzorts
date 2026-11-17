// node --test .github/scripts/planes/tracker.test.mjs
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { createAirportIndex, emptyDb, step } from "./tracker.mjs";

const airports = JSON.parse(readFileSync(new URL("./airports.json", import.meta.url), "utf8"));
const index = createAirportIndex(airports);
const fleet = [{ tail: "N15RL", hex: "a0c958" }];
const MIN = 60_000;
const T0 = Date.UTC(2026, 10, 17, 14, 0);

const rec = (lat, lon, alt, gs, extra = {}) => ({
  a0c958: { hex: "a0c958", lat, lon, alt_baro: alt, gs, track: 90, seen_pos: 0, ...extra },
});

function run(db, polls) {
  const events = [];
  const finished = [];
  for (const [t, records] of polls) {
    const out = step(db, fleet, records, t, index);
    events.push(...out.events);
    finished.push(...out.finished);
  }
  return { events, finished };
}

test("ground at KSPI, fly, land at KCMI", () => {
  const db = emptyDb();
  const { events, finished } = run(db, [
    [T0, rec(39.8441, -89.6779, "ground", 0)],
    [T0 + 5 * MIN, rec(39.85, -89.6, 4500, 220)],
    [T0 + 15 * MIN, rec(39.95, -88.9, 31000, 450)],
    [T0 + 30 * MIN, rec(40.04, -88.33, 2100, 140)],
    [T0 + 35 * MIN, rec(40.0398, -88.2762, "ground", 30)],
  ]);
  assert.deepEqual(events.map((e) => e.type), ["takeoff", "landing"]);
  const [flight] = db.flights;
  assert.equal(flight.from.code, "KSPI");
  assert.equal(flight.from.approx, false);
  assert.equal(flight.to.code, "KCMI");
  assert.equal(flight.lost, false);
  assert.equal(flight.maxAlt, 31000);
  assert.equal(finished.length, 1);
  assert.equal(db.aircraft.a0c958.status, "ground");
  assert.equal(db.aircraft.a0c958.ground.code, "KCMI");
  assert.deepEqual(db.active, {});
});

test("signal lost low near the field closes as a landing there", () => {
  const db = emptyDb();
  run(db, [
    [T0, rec(39.8441, -89.6779, "ground", 0)],
    [T0 + 3 * MIN, rec(39.9, -89.5, 9000, 300)],
    [T0 + 25 * MIN, rec(40.03, -88.35, 1800, 130, { baro_rate: -700 })],
    [T0 + 28 * MIN, {}],
    [T0 + 33 * MIN, {}],
  ]);
  const [flight] = db.flights;
  assert.equal(flight.to.code, "KCMI");
  assert.equal(flight.to.approx, true);
  assert.equal(flight.lost, false);
  assert.ok(flight.end);
  // The next departure starts from the assumed field.
  run(db, [[T0 + 3 * 60 * MIN, rec(40.05, -88.28, 1200, 140)]]);
  assert.equal(db.flights[0].from.code, "KCMI");
});

test("coverage gap at altitude, then reappears: same flight", () => {
  const db = emptyDb();
  run(db, [
    [T0, rec(39.8441, -89.6779, "ground", 0)],
    [T0 + 5 * MIN, rec(39.9, -89.4, 12000, 320)],
    [T0 + 20 * MIN, rec(38.5, -86.0, 41000, 480)],
    [T0 + 60 * MIN, {}],
  ]);
  assert.equal(db.flights[0].lost, true);
  assert.equal(db.flights[0].to, null);
  assert.ok(db.flights[0].lostNear);
  run(db, [
    [T0 + 80 * MIN, rec(36.2, -81.0, 39000, 470)],
    [T0 + 100 * MIN, rec(35.22, -80.95, "ground", 20)],
  ]);
  assert.equal(db.flights.length, 1);
  assert.equal(db.flights[0].from.code, "KSPI");
  assert.equal(db.flights[0].to.code, "KCLT");
  assert.equal(db.flights[0].lost, false);
});

test("first seen at cruise has no guessed origin", () => {
  const db = emptyDb();
  run(db, [[T0, rec(41.5, -85.0, 43000, 480)]]);
  assert.equal(db.flights[0].from, null);
  assert.ok(db.flights[0].firstNear);
  assert.equal(db.flights[0].startApprox, true);
});

test("stale positions do not count", () => {
  const db = emptyDb();
  run(db, [[T0, rec(41.5, -85.0, 43000, 480, { seen_pos: 600 })]]);
  assert.equal(db.flights.length, 0);
  assert.equal(db.aircraft.a0c958.status, "unseen");
});
