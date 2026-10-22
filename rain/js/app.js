import { PERIODS, fetchPrecipitation } from "./noaa.js";
import { project, rubberband, spring } from "./spring.js";
import {
  loadPublished,
  listPublished,
  readEditor,
  writeEditor,
  clearEditor,
  sameLocations,
  parseLocationDocument,
  readCache,
  writeCache,
  isFresh,
  cleanName,
  roundCoord,
  validateLocation,
} from "./storage.js";

const TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const SAMPLE_VIEW = [39.78, -89.65];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const map = L.map("map", {
  doubleClickZoom: false,
  worldCopyJump: true,
  zoomControl: true,
}).setView(SAMPLE_VIEW, 8);
map.zoomControl.setPosition("bottomleft");
L.tileLayer(TILE_URL, {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const statusNode = document.querySelector("#status");
const tbody = document.querySelector("#totals");
const editButton = document.querySelector("#edit-open");
const sheetRoot = document.querySelector("#sheet-root");
const sheet = document.querySelector("#sheet");
const scrim = document.querySelector("#sheet-scrim");
const grab = document.querySelector("#sheet-grab");
const sheetStatus = document.querySelector("#sheet-status");
const editorList = document.querySelector("#editor-list");
const form = document.querySelector("#pin-form");
const nameInput = document.querySelector("#pin-name");
const formLabel = document.querySelector("#pin-form-label");
const importInput = document.querySelector("#import-file");

const markers = new Map();
const tokens = new Map();
const readings = new Map();

let published = [];
let publishedLoaded = true;
let locations = [];
let editing = false;
let editorLocations = null;
let draft = null;
let pendingDeleteId = null;
let selectedId = null;
let sheetMotion = null;
let pointerHistory = [];

function setStatus(message) {
  statusNode.textContent = message || "";
}

function setSheetStatus(message) {
  sheetStatus.textContent = message || "";
}

function prefersStill() {
  return reducedMotion.matches;
}

function formatInches(value) {
  return value.toFixed(2);
}

function formatFetched(timestamp, timeZone) {
  const options = {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  };
  try {
    return new Intl.DateTimeFormat("en-US", { ...options, timeZone }).format(new Date(timestamp));
  } catch {
    return new Intl.DateTimeFormat("en-US", options).format(new Date(timestamp));
  }
}

function pinIcon(selected) {
  return L.divIcon({
    className: selected ? "pin-icon is-selected" : "pin-icon",
    html: '<span class="pin-dot"></span>',
    iconSize: [28, 28],
    iconAnchor: [14, 22],
  });
}

function bindLabel(marker, name) {
  const label = document.createElement("span");
  label.textContent = name;
  const tooltip = marker.getTooltip();
  if (tooltip) tooltip.setContent(label);
  else {
    marker.bindTooltip(label, {
      direction: "top",
      offset: [0, -14],
      opacity: 1,
      className: "pin-label",
    });
  }
  const icon = marker.getElement();
  if (icon) icon.setAttribute("aria-label", name);
}

function readingView(location) {
  const reading = readings.get(location.id);
  if (!reading) return { kind: "loading" };
  if (reading.status === "error") return { kind: "error", message: reading.message };
  return {
    kind: reading.status === "loading" ? "loading" : "ready",
    stale: reading.stale,
    fetchedAt: reading.fetchedAt,
    periods: reading.periods,
    message: reading.message,
  };
}

function fillFigure(node, period, view) {
  node.className = period.key === "h24" ? "num hero" : "num";
  node.textContent = "";
  node.removeAttribute("title");
  if (!view.periods) {
    const span = document.createElement("span");
    span.className = view.kind === "error" ? "missing" : "loading";
    span.textContent = view.kind === "error" ? "—" : "…";
    if (view.kind === "error") span.setAttribute("aria-label", "Unavailable");
    node.append(span);
    return;
  }
  const value = view.periods[period.key];
  if (!value || value.status !== "value") {
    const span = document.createElement("span");
    span.className = "missing";
    span.textContent = "—";
    span.setAttribute("aria-label", "Unavailable");
    node.append(span);
    return;
  }
  node.textContent = formatInches(value.inches);
}

function popupNode(location) {
  const wrap = document.createElement("div");
  const name = document.createElement("p");
  name.className = "popup-name";
  name.textContent = location.name;
  wrap.append(name);
  const view = readingView(location);
  for (const period of PERIODS) {
    const row = document.createElement("p");
    row.className = "popup-figure";
    const label = document.createElement("span");
    label.textContent = period.label;
    const amount = document.createElement("strong");
    fillFigure(amount, period, view);
    row.append(label, amount);
    wrap.append(row);
  }
  return wrap;
}

function paintRow(location) {
  const row = tbody.querySelector(`tr[data-id="${CSS.escape(location.id)}"]`);
  if (!row) return;
  const view = readingView(location);
  row.classList.toggle("stale", !!(view.stale || view.message));
  row.classList.toggle("is-selected", selectedId === location.id);
  PERIODS.forEach((period) => {
    fillFigure(row.querySelector(`[data-period="${period.key}"]`), period, view);
  });
  const fetched = row.querySelector(".fetched");
  fetched.textContent = "";
  if (view.fetchedAt) {
    const prefix = view.message ? `${view.message} · ` : view.stale ? "Saved · " : "";
    fetched.textContent = `${prefix}${formatFetched(view.fetchedAt, location.timezone)}`;
  } else if (view.kind === "error") {
    fetched.textContent = "Unavailable";
  } else {
    fetched.textContent = "Fetching";
  }
  const marker = markers.get(location.id);
  if (marker) {
    marker.setIcon(pinIcon(selectedId === location.id));
    marker.setPopupContent(popupNode(location));
    bindLabel(marker, location.name);
  }
}

function renderBoard() {
  tbody.textContent = "";
  if (!locations.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 6;
    cell.className = "empty";
    cell.textContent = publishedLoaded
      ? "No shared locations yet."
      : "The shared location file could not be loaded.";
    row.append(cell);
    tbody.append(row);
    return;
  }

  for (const location of locations) {
    const row = document.createElement("tr");
    row.className = "location-row";
    row.dataset.id = location.id;
    row.tabIndex = 0;
    row.setAttribute("aria-selected", selectedId === location.id ? "true" : "false");
    row.addEventListener("click", () => selectLocation(location.id, { fly: true }));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectLocation(location.id, { fly: true });
      }
    });

    const pin = document.createElement("th");
    pin.scope = "row";
    pin.className = "pin";
    const name = document.createElement("span");
    name.className = "pin-name";
    name.textContent = location.name;
    const fetched = document.createElement("span");
    fetched.className = "fetched";
    pin.append(name, fetched);
    row.append(pin);

    for (const period of PERIODS) {
      const cell = document.createElement("td");
      cell.dataset.period = period.key;
      row.append(cell);
    }
    tbody.append(row);
    paintRow(location);
  }
}

function renderMarkers() {
  const seen = new Set(locations.map((location) => location.id));
  for (const [id, marker] of markers) {
    if (!seen.has(id)) {
      map.removeLayer(marker);
      markers.delete(id);
    }
  }
  for (const location of locations) {
    const latLng = [location.latitude, location.longitude];
    let marker = markers.get(location.id);
    if (!marker) {
      marker = L.marker(latLng, {
        icon: pinIcon(selectedId === location.id),
        draggable: editing,
        autoPan: true,
      });
      marker.addTo(map);
      marker.on("click", () => selectLocation(location.id, { fly: false }));
      marker.on("dragend", () => onDragEnd(location.id, marker));
      markers.set(location.id, marker);
    } else {
      marker.setLatLng(latLng);
      marker.setIcon(pinIcon(selectedId === location.id));
    }
    if (marker.dragging) {
      if (editing) marker.dragging.enable();
      else marker.dragging.disable();
    }
    marker.bindPopup(popupNode(location), { autoPan: false });
    bindLabel(marker, location.name);
  }
}

function renderEditorList() {
  editorList.textContent = "";
  if (!editing) return;
  for (const location of locations) {
    const item = document.createElement("li");
    item.className = "editor-item";
    const text = document.createElement("div");
    const name = document.createElement("p");
    name.className = "pin-name";
    name.textContent = location.name;
    const coords = document.createElement("p");
    coords.className = "coords";
    coords.textContent = `${location.latitude.toFixed(5)}, ${location.longitude.toFixed(5)}`;
    text.append(name, coords);

    const actions = document.createElement("div");
    actions.className = "editor-actions";
    const rename = document.createElement("button");
    rename.type = "button";
    rename.textContent = "Rename";
    rename.addEventListener("click", () => beginRename(location.id));
    const remove = document.createElement("button");
    remove.type = "button";
    const armed = pendingDeleteId === location.id;
    remove.textContent = armed ? "Confirm" : "Delete";
    remove.className = armed ? "danger" : "";
    remove.addEventListener("click", () => onDelete(location.id));
    actions.append(rename, remove);
    item.append(text, actions);
    editorList.append(item);
  }
}

function showLocations(next, { fit = false } = {}) {
  locations = next;
  renderMarkers();
  renderBoard();
  renderEditorList();
  updateEditButton();
  if (fit && locations.length === 1) {
    map.setView([locations[0].latitude, locations[0].longitude], 8);
  } else if (fit && locations.length > 1) {
    map.fitBounds(L.latLngBounds(locations.map((location) => [location.latitude, location.longitude])).pad(0.35));
  }
}

function selectLocation(id, { fly }) {
  selectedId = id;
  const location = locations.find((item) => item.id === id);
  renderBoard();
  const marker = markers.get(id);
  if (marker) marker.setIcon(pinIcon(true));
  if (!location || !fly) return;
  const latLng = [location.latitude, location.longitude];
  const zoom = Math.max(map.getZoom(), 8);
  if (prefersStill()) map.setView(latLng, zoom);
  else map.flyTo(latLng, zoom, { duration: 0.7 });
}

function updateEditButton() {
  const draft = readEditor();
  const dirty = draft && !sameLocations(draft, published);
  editButton.classList.toggle("unpublished", !!dirty);
  editButton.title = dirty
    ? "Unpublished location edits are on this browser"
    : "Edit the shared locations";
}

function commitEditor(next) {
  editorLocations = writeEditor(next);
  showLocations(editorLocations);
}

function closeForm() {
  if (draft && draft.marker) map.removeLayer(draft.marker);
  draft = null;
  form.hidden = true;
  nameInput.value = "";
}

function openForm(label, submitLabel, value) {
  formLabel.textContent = label;
  form.querySelector("button[type='submit']").textContent = submitLabel;
  nameInput.value = value || "";
  form.hidden = false;
  nameInput.focus();
  nameInput.select();
}

function beginCreate(latLng) {
  if (!editing) return;
  pendingDeleteId = null;
  if (draft && draft.mode === "rename") closeForm();
  if (!draft || draft.mode !== "create") {
    closeForm();
    draft = {
      mode: "create",
      latitude: roundCoord(latLng.lat),
      longitude: roundCoord(latLng.lng),
      marker: L.marker([latLng.lat, latLng.lng], { icon: pinIcon(false), draggable: true, opacity: 0.85 }).addTo(map),
    };
    draft.marker.on("dragend", () => {
      const next = draft.marker.getLatLng();
      draft.latitude = roundCoord(next.lat);
      draft.longitude = roundCoord(next.lng);
    });
  } else {
    draft.marker.setLatLng(latLng);
    draft.latitude = roundCoord(latLng.lat);
    draft.longitude = roundCoord(latLng.lng);
  }
  openForm("Name this pin", "Save pin", "");
}

function beginRename(id) {
  const location = locations.find((item) => item.id === id);
  if (!location) return;
  if (draft && draft.mode === "create") closeForm();
  pendingDeleteId = null;
  draft = { mode: "rename", id };
  openForm("Rename this location", "Save name", location.name);
  renderEditorList();
}

function onDelete(id) {
  if (pendingDeleteId !== id) {
    pendingDeleteId = id;
    renderEditorList();
    return;
  }
  pendingDeleteId = null;
  tokens.set(id, (tokens.get(id) || 0) + 1);
  readings.delete(id);
  if (selectedId === id) selectedId = null;
  commitEditor(editorLocations.filter((location) => location.id !== id));
  setSheetStatus("Removed from the unpublished list.");
}

function onDragEnd(id, marker) {
  if (!editing || !editorLocations) return;
  const latLng = marker.getLatLng();
  try {
    const next = editorLocations.map((location) =>
      location.id === id
        ? validateLocation({
            ...location,
            latitude: roundCoord(latLng.lat),
            longitude: roundCoord(latLng.lng),
          })
        : location
    );
    commitEditor(next);
    const location = editorLocations.find((item) => item.id === id);
    if (location) refreshOne(location, { force: false });
  } catch {
    setSheetStatus("That pin could not be moved.");
  }
}

async function refreshOne(location, { force }) {
  const token = (tokens.get(location.id) || 0) + 1;
  tokens.set(location.id, token);
  const cached = readCache(location.latitude, location.longitude);
  const fresh = cached && isFresh(cached);

  if (cached && fresh && !force) {
    readings.set(location.id, {
      status: "ready",
      stale: false,
      fetchedAt: cached.fetchedAt,
      periods: cached.periods,
    });
    paintRow(location);
    return;
  }

  readings.set(location.id, {
    status: "loading",
    stale: !!cached && !fresh,
    fetchedAt: cached ? cached.fetchedAt : null,
    periods: cached ? cached.periods : null,
    message: cached && !fresh ? "Updating" : "",
  });
  paintRow(location);

  try {
    const result = await fetchPrecipitation(location.latitude, location.longitude);
    if (tokens.get(location.id) !== token) return;
    writeCache(location.latitude, location.longitude, result);
    readings.set(location.id, {
      status: "ready",
      stale: false,
      fetchedAt: result.fetchedAt,
      periods: result.periods,
    });
  } catch {
    if (tokens.get(location.id) !== token) return;
    if (cached) {
      readings.set(location.id, {
        status: "ready",
        stale: true,
        fetchedAt: cached.fetchedAt,
        periods: cached.periods,
        message: "Refresh failed. Showing saved totals.",
      });
    } else {
      readings.set(location.id, {
        status: "error",
        stale: false,
        periods: null,
        message: "Unavailable",
      });
    }
  }
  const current = locations.find((item) => item.id === location.id);
  if (current) paintRow(current);
}

async function refreshAll({ force }) {
  await Promise.all(locations.map((location) => refreshOne(location, { force })));
  const failed = locations.some((location) => {
    const reading = readings.get(location.id);
    return reading && (reading.status === "error" || (reading.message && reading.message.includes("failed")));
  });
  if (force && locations.length) {
    setStatus(failed ? "Some totals could not be refreshed." : "Totals updated.");
  }
}

function sheetY() {
  const transform = getComputedStyle(sheet).transform;
  if (!transform || transform === "none") return 0;
  return new DOMMatrix(transform).m42;
}

function setSheetY(y) {
  sheet.style.transform = `translate3d(0, ${y}px, 0)`;
  const height = sheet.offsetHeight || 1;
  const progress = 1 - Math.min(1, Math.max(0, y) / height);
  scrim.style.opacity = String(0.35 * progress);
}

function closedY() {
  return sheet.offsetHeight + 32;
}

function stopSheetMotion() {
  if (sheetMotion) sheetMotion.stop();
  sheetMotion = null;
}

function moveSheet(to, velocity, onRest) {
  stopSheetMotion();
  if (prefersStill()) {
    setSheetY(to);
    if (onRest) onRest();
    return;
  }
  sheetMotion = spring({
    from: sheetY(),
    to,
    velocity,
    response: 0.32,
    dampingRatio: velocity ? 0.86 : 1,
    onUpdate: setSheetY,
    onRest,
  });
}

function finishClose() {
  editing = false;
  closeForm();
  sheetRoot.hidden = true;
  sheet.setAttribute("aria-hidden", "true");
  editButton.focus();
  showLocations(listPublished());
}

function closeSheet() {
  moveSheet(closedY(), 0, finishClose);
}

function openSheet() {
  const draftLocations = readEditor();
  editorLocations = draftLocations ? draftLocations.map((location) => ({ ...location })) : listPublished();
  editing = true;
  pendingDeleteId = null;
  sheetRoot.hidden = false;
  sheet.setAttribute("aria-hidden", "false");
  showLocations(editorLocations);
  editorLocations.forEach((location) => {
    if (!readings.has(location.id)) refreshOne(location, { force: false });
  });
  setSheetY(closedY());
  moveSheet(0, 0, () => sheet.querySelector("#sheet-close").focus());
  if (draftLocations && !sameLocations(draftLocations, published)) {
    setSheetStatus("These edits are on this browser until you download the file and publish it.");
  } else {
    setSheetStatus("Click the map to add a location.");
  }
}

function onGrabDown(event) {
  if (event.button != null && event.button !== 0) return;
  grab.setPointerCapture(event.pointerId);
  stopSheetMotion();
  pointerHistory = [{ y: event.clientY, t: performance.now() }];
  const originY = event.clientY;
  const originSheet = sheetY();

  const onMove = (move) => {
    pointerHistory.push({ y: move.clientY, t: performance.now() });
    const recent = performance.now() - 90;
    pointerHistory = pointerHistory.filter((sample) => sample.t >= recent);
    let next = originSheet + (move.clientY - originY);
    if (next < 0) next = rubberband(next, sheet.offsetHeight || 480);
    setSheetY(next);
  };

  const onUp = (up) => {
    grab.removeEventListener("pointermove", onMove);
    grab.removeEventListener("pointerup", onUp);
    grab.removeEventListener("pointercancel", onUp);
    const first = pointerHistory[0];
    const last = pointerHistory[pointerHistory.length - 1];
    const dt = last && first ? (last.t - first.t) / 1000 : 0;
    const velocity = dt > 0 ? (last.y - first.y) / dt : 0;
    const current = sheetY();
    const projected = current + project(velocity);
    const shouldClose = projected > sheet.offsetHeight * 0.35 || velocity > 900;
    if (shouldClose) moveSheet(closedY(), velocity, finishClose);
    else moveSheet(0, velocity);
    up.preventDefault();
  };

  grab.addEventListener("pointermove", onMove);
  grab.addEventListener("pointerup", onUp);
  grab.addEventListener("pointercancel", onUp);
}

map.on("click", (event) => {
  if (!editing) return;
  const target = event.originalEvent && event.originalEvent.target;
  if (target && target.closest && target.closest(".leaflet-marker-icon, .leaflet-popup")) return;
  beginCreate(event.latlng);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!editing) return;
  const name = cleanName(nameInput.value);
  if (!name) {
    setSheetStatus("Enter a name for this location.");
    return;
  }
  try {
    if (draft && draft.mode === "create") {
      const created = validateLocation({
        name,
        latitude: draft.latitude,
        longitude: draft.longitude,
        timezone: "America/Chicago",
      });
      closeForm();
      commitEditor(editorLocations.concat(created));
      refreshOne(created, { force: false });
      setSheetStatus("Added to the unpublished list.");
      return;
    }
    if (draft && draft.mode === "rename") {
      const id = draft.id;
      const next = editorLocations.map((location) =>
        location.id === id ? validateLocation({ ...location, name }) : location
      );
      closeForm();
      commitEditor(next);
      setSheetStatus("Name updated in the unpublished list.");
    }
  } catch {
    setSheetStatus("That location could not be saved.");
  }
});

document.querySelector("#pin-cancel").addEventListener("click", () => {
  closeForm();
  renderEditorList();
});

document.querySelector("#refresh").addEventListener("click", () => {
  setStatus("Refreshing totals.");
  refreshAll({ force: true });
});

editButton.addEventListener("click", openSheet);
document.querySelector("#sheet-close").addEventListener("click", closeSheet);
grab.addEventListener("pointerdown", onGrabDown);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && editing) closeSheet();
});

document.querySelector("#download").addEventListener("click", () => {
  const payload = { version: 1, locations: editorLocations || listPublished() };
  const blob = new Blob([JSON.stringify(payload, null, 2) + "\n"], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "locations.json";
  link.click();
  URL.revokeObjectURL(url);
  setSheetStatus("Downloaded locations.json. Replace rain/data/locations.json and publish the site.");
});

document.querySelector("#import").addEventListener("click", () => importInput.click());

importInput.addEventListener("change", async () => {
  const file = importInput.files && importInput.files[0];
  importInput.value = "";
  if (!file || !editing) return;
  try {
    const next = parseLocationDocument(JSON.parse(await file.text()));
    closeForm();
    pendingDeleteId = null;
    commitEditor(next);
    refreshAll({ force: false });
    setSheetStatus("Imported into the unpublished list.");
  } catch {
    setSheetStatus("That file is not a version 1 location list.");
  }
});

document.querySelector("#discard").addEventListener("click", () => {
  clearEditor();
  closeForm();
  editorLocations = listPublished();
  showLocations(editorLocations, { fit: true });
  setSheetStatus("Unpublished edits discarded. The shared file is unchanged.");
});

try {
  published = await loadPublished();
} catch {
  published = [];
  publishedLoaded = false;
  setStatus("The shared location file could not be loaded.");
}
showLocations(listPublished(), { fit: true });
refreshAll({ force: false });
