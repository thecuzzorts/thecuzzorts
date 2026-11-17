// planes.json and flight tracks come from the Cloudflare Worker in workers/planes.
// ?data=<url> points the page somewhere else for testing.

const params = new URLSearchParams(location.search);
const BASE = (params.get("data") || "__WORKER_URL__").replace(/\/?$/, "/");
const CACHE_KEY = "planes:v1";
const tracks = new Map();

export class NoDataYet extends Error {}

export async function loadFleet() {
  const response = await fetch("data/aircraft.json", { cache: "no-cache" });
  if (!response.ok) throw new Error(`aircraft.json ${response.status}`);
  return response.json();
}

export async function loadPlanes() {
  const response = await fetch(`${BASE}planes.json`, { cache: "no-store" });
  if (response.status === 404) throw new NoDataYet("No data yet");
  if (!response.ok) throw new Error(`planes.json ${response.status}`);
  const db = await response.json();
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(db));
  } catch {
    // Storage full or blocked; the page still works.
  }
  return db;
}

export function cachedPlanes() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function loadTrack(flight) {
  if (flight.track) return flight.track;
  if (tracks.has(flight.id)) return tracks.get(flight.id);
  const promise = fetch(`${BASE}tracks/${encodeURIComponent(flight.id)}.json`)
    .then((response) => {
      if (!response.ok) throw new Error(`track ${response.status}`);
      return response.json();
    })
    .then((body) => body.path || [])
    .catch((error) => {
      tracks.delete(flight.id);
      throw error;
    });
  tracks.set(flight.id, promise);
  return promise;
}
