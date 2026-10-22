// Everyone who opens the page sees data/locations.json.
// An editor draft stays in this browser until that file is replaced.

const EDITOR_KEY = "rain.editor.v1";
const CACHE_KEY = "rain.cache.v1";

export const CACHE_MAX_AGE_MS = 60 * 60 * 1000;
const CACHE_MAX_ENTRIES = 40;
const MAX_LOCATIONS = 40;

let published = [];
let editorMemory = null;
let editorKnown = false;
let memoryCache = null;

export function roundCoord(value) {
  return Math.round(Number(value) * 1e5) / 1e5;
}

export function coordKey(latitude, longitude) {
  return `${roundCoord(latitude).toFixed(5)},${roundCoord(longitude).toFixed(5)}`;
}

function newId() {
  return `pin-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function cleanName(value) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, 80);
}

function isTimeZone(value) {
  if (typeof value !== "string" || !value) return false;
  try {
    Intl.DateTimeFormat(undefined, { timeZone: value });
    return true;
  } catch {
    return false;
  }
}

export function validateLocation(raw) {
  if (!raw || typeof raw !== "object") throw new Error("invalid");
  const name = cleanName(raw.name);
  const latitude = Number(raw.latitude);
  const longitude = Number(raw.longitude);
  if (!name) throw new Error("invalid");
  if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90) throw new Error("invalid");
  if (!Number.isFinite(longitude) || longitude < -180 || longitude > 180) throw new Error("invalid");

  let id = newId();
  if (typeof raw.id === "string" && /^[A-Za-z0-9_-]{1,64}$/.test(raw.id)) id = raw.id;

  return {
    id,
    name,
    latitude: roundCoord(latitude),
    longitude: roundCoord(longitude),
    timezone: isTimeZone(raw.timezone) ? raw.timezone : "America/Chicago",
  };
}

export function parseLocationDocument(doc) {
  if (!doc || doc.version !== 1 || !Array.isArray(doc.locations)) throw new Error("invalid");
  if (doc.locations.length > MAX_LOCATIONS) throw new Error("limit");
  const locations = doc.locations.map((location) => validateLocation(location));
  const seen = new Set();
  for (const location of locations) {
    if (seen.has(location.id)) throw new Error("invalid");
    seen.add(location.id);
  }
  return locations;
}

function cloneLocations(locations) {
  return locations.map((location) => ({ ...location }));
}

export function listPublished() {
  return cloneLocations(published);
}

export async function loadPublished() {
  const response = await fetch("data/locations.json");
  if (!response.ok) throw new Error("defaults");
  published = parseLocationDocument(await response.json());
  return listPublished();
}

function readEditorStore() {
  if (editorKnown) return editorMemory;
  editorKnown = true;
  try {
    const raw = localStorage.getItem(EDITOR_KEY);
    editorMemory = raw ? parseLocationDocument(JSON.parse(raw)) : null;
  } catch {
    editorMemory = null;
  }
  return editorMemory;
}

export function readEditor() {
  const draft = readEditorStore();
  return draft ? cloneLocations(draft) : null;
}

export function writeEditor(locations) {
  const next = parseLocationDocument({ version: 1, locations });
  editorMemory = next;
  editorKnown = true;
  try {
    localStorage.setItem(EDITOR_KEY, JSON.stringify({ version: 1, locations: next }));
  } catch {
    // The draft still lives for this view if the browser cannot store it.
  }
  return cloneLocations(next);
}

export function clearEditor() {
  editorMemory = null;
  editorKnown = true;
  try {
    localStorage.removeItem(EDITOR_KEY);
  } catch {
    // Already gone from this view.
  }
}

export function sameLocations(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function emptyCache() {
  return { version: 1, entries: {} };
}

function readCacheStore() {
  if (memoryCache) return memoryCache;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    const parsed = raw ? JSON.parse(raw) : emptyCache();
    memoryCache =
      parsed && parsed.version === 1 && parsed.entries && typeof parsed.entries === "object"
        ? parsed
        : emptyCache();
  } catch {
    memoryCache = emptyCache();
  }
  return memoryCache;
}

export function readCache(latitude, longitude) {
  const entry = readCacheStore().entries[coordKey(latitude, longitude)];
  if (!entry || !Number.isFinite(entry.fetchedAt) || !entry.periods) return null;
  return entry;
}

export function isFresh(entry, now = Date.now()) {
  return !!entry && now - entry.fetchedAt >= 0 && now - entry.fetchedAt < CACHE_MAX_AGE_MS;
}

export function writeCache(latitude, longitude, record) {
  const store = readCacheStore();
  store.entries[coordKey(latitude, longitude)] = record;
  const keys = Object.keys(store.entries);
  if (keys.length > CACHE_MAX_ENTRIES) {
    keys
      .sort((a, b) => store.entries[a].fetchedAt - store.entries[b].fetchedAt)
      .slice(0, keys.length - CACHE_MAX_ENTRIES)
      .forEach((key) => {
        delete store.entries[key];
      });
  }
  memoryCache = store;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(store));
  } catch {
    // A full cache must not block showing the totals just fetched.
  }
}
