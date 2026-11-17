// Builds airports.json for the /planes history collector from OurAirports data.
//
//   curl -sSLO https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/airports.csv
//   curl -sSLO https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/runways.csv
//   node .github/scripts/planes/build-airports.mjs airports.csv runways.csv
//
// Keeps open airports with at least one hard-surface runway of 3,000 ft or more,
// since that is where a Citation can land. Rows are
// [code, name, lat, lon, elevation_ft, city, region].

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const [airportsPath, runwaysPath] = process.argv.slice(2);
if (!airportsPath || !runwaysPath) {
  console.error("usage: build-airports.mjs airports.csv runways.csv");
  process.exit(1);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        field += '"';
        i += 1;
      } else if (ch === '"') {
        quoted = false;
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (ch !== "\r") {
      field += ch;
    }
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  const header = rows.shift();
  return rows.map((cells) => Object.fromEntries(header.map((key, i) => [key, cells[i] ?? ""])));
}

const HARD = /^(asp|asph|con|conc|pem|bit|tar|met|paved|hard|cop|bitum|asfalt|asphalt|concrete)/i;

const longest = new Map();
for (const runway of parseCsv(readFileSync(runwaysPath, "utf8"))) {
  if (runway.closed === "1") continue;
  if (!HARD.test(runway.surface.trim())) continue;
  const length = Number(runway.length_ft) || 0;
  const ref = runway.airport_ref;
  if (length > (longest.get(ref) || 0)) longest.set(ref, length);
}

const out = [];
for (const airport of parseCsv(readFileSync(airportsPath, "utf8"))) {
  if (!["large_airport", "medium_airport", "small_airport"].includes(airport.type)) continue;
  if ((longest.get(airport.id) || 0) < 3000) continue;
  const lat = Number(airport.latitude_deg);
  const lon = Number(airport.longitude_deg);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
  const code = airport.icao_code || airport.gps_code || airport.ident;
  out.push([
    code,
    airport.name,
    Math.round(lat * 1e4) / 1e4,
    Math.round(lon * 1e4) / 1e4,
    Number(airport.elevation_ft) || 0,
    airport.municipality,
    airport.iso_region,
  ]);
}

const target = join(dirname(fileURLToPath(import.meta.url)), "airports.json");
writeFileSync(target, `[\n${out.map((row) => JSON.stringify(row)).join(",\n")}\n]\n`);
console.log(`wrote ${out.length} airports to ${target}`);
