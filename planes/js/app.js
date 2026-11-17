import { NoDataYet, cachedPlanes, loadFleet, loadPlanes, loadTrack } from "./data.js";
import * as fmt from "./format.js";
import { BACK, GLYPH, planeSvg } from "./icons.js";
import { createSheet } from "./sheet.js";

const MIN = 60_000;
const PROJECT_MAX_MS = 45_000;
const HOME = [39.8441, -89.6779]; // KSPI
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const $ = (sel) => document.querySelector(sel);
const els = {
  live: $("#live"),
  liveText: $("#live-text"),
  fleetName: $("#fleet-name"),
  panel: $("#panel"),
  head: $("#panel-head"),
  body: $("#panel-body"),
  strip: $("#strip"),
  cards: $("#cards"),
  tabPlanes: $("#tab-planes"),
  tabFlights: $("#tab-flights"),
  segmented: document.querySelector(".segmented"),
  viewPlanes: $("#view-planes"),
  viewFlights: $("#view-flights"),
  filters: $("#filters"),
  stats: $("#stats"),
  flightList: $("#flight-list"),
  flightListWrap: $("#flight-list-wrap"),
  detail: $("#flight-detail"),
};

const state = {
  fleet: [],
  db: null,
  error: null,
  noData: false,
  selected: null, // hex
  flightId: null, // open flight detail
  filter: "all",
  tab: "planes",
  fitted: false,
  timer: 0,
  loading: false,
};

/* ---------------- Map ---------------- */

const map = L.map("map", {
  zoomControl: false,
  worldCopyJump: true,
  attributionControl: true,
  zoomSnap: 0.25,
}).setView(HOME, 5);
const zoom = L.control.zoom({ position: "bottomright" });
const wideQuery = window.matchMedia("(min-width: 860px)");
function syncZoomControl() {
  // Phones pinch to zoom; buttons would sit under the sheet.
  if (wideQuery.matches) zoom.addTo(map);
  else zoom.remove();
}
syncZoomControl();
wideQuery.addEventListener("change", syncZoomControl);

// Same OpenStreetMap tiles as /rain, muted with a CSS filter so the planes stand out.
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const trackLayer = L.layerGroup().addTo(map);
const markers = new Map(); // hex -> { marker, key }

const sheet = createSheet({
  panel: els.panel,
  head: els.head,
  body: els.body,
  peekContent: () => (state.tab === "planes" && !els.strip.hidden ? els.strip.offsetHeight : 64),
  onSnap: () => {},
});

function mapPadding() {
  const top = sheet.wide ? 48 : 120;
  const left = sheet.wide ? 464 : 48;
  const bottom = sheet.wide ? 48 : sheet.coveredBottom() + 48;
  return { paddingTopLeft: [left, top], paddingBottomRight: [48, bottom] };
}

function fitTo(latlngs, maxZoom = 11) {
  if (!latlngs.length) return;
  const bounds = L.latLngBounds(latlngs);
  const opts = { ...mapPadding(), maxZoom, animate: !reducedMotion.matches, duration: 0.8 };
  if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
    map.flyToBounds(bounds.pad(0.02), { ...opts, maxZoom: Math.min(maxZoom, 9) });
  } else {
    map.flyToBounds(bounds, opts);
  }
}

/* ---------------- Helpers ---------------- */

const cfg = (hex) => state.fleet.find((p) => p.hex === hex);
const st = (hex) => (state.db && state.db.aircraft && state.db.aircraft[hex]) || null;
const activeFlight = (hex) => {
  const s = st(hex);
  return s && s.flight ? state.db.flights.find((f) => f.id === s.flight) : null;
};
const lastFlight = (hex) => (state.db ? state.db.flights.find((f) => f.hex === hex && f.end) : null);
const colorOf = (hex) => (cfg(hex) || {}).color || "#0a84ff";

function kind(hex) {
  const s = st(hex);
  if (!s) return "unknown";
  if (s.status === "air") return "air";
  if (s.status === "lost") return "lost";
  if (s.status === "ground") return "ground";
  return s.ground && s.ground.code ? "parked" : "unseen";
}

const PILL = {
  air: ["is-air", "Airborne"],
  lost: ["is-lost", "Signal lost"],
  ground: ["", "On ground"],
  parked: ["", "Parked"],
  unseen: ["", "Not seen"],
  unknown: ["", "Waiting"],
};

function destination(lat, lon, bearingDeg, distNm) {
  const R = 3440.065;
  const d = distNm / R;
  const b = (bearingDeg * Math.PI) / 180;
  const p1 = (lat * Math.PI) / 180;
  const l1 = (lon * Math.PI) / 180;
  const p2 = Math.asin(Math.sin(p1) * Math.cos(d) + Math.cos(p1) * Math.sin(d) * Math.cos(b));
  const l2 = l1 + Math.atan2(Math.sin(b) * Math.sin(d) * Math.cos(p1), Math.cos(d) - Math.sin(p1) * Math.sin(p2));
  return [(p2 * 180) / Math.PI, (((l2 * 180) / Math.PI + 540) % 360) - 180];
}

// Where to draw the plane now: its last fix, moved along track at ground speed for a short while.
function position(hex, now = Date.now()) {
  const s = st(hex);
  if (!s) return null;
  const k = kind(hex);
  if ((k === "air" || k === "lost") && s.last) {
    const f = s.last;
    const age = Math.min(Math.max(0, now - f.t), PROJECT_MAX_MS);
    if (k === "air" && f.gs && f.trk != null && age > 0) {
      return { latlng: destination(f.lat, f.lon, f.trk, (f.gs * age) / 3_600_000), trk: f.trk, projected: true };
    }
    return { latlng: [f.lat, f.lon], trk: f.trk, projected: false };
  }
  if (s.ground && s.ground.lat != null && k !== "ground") {
    return { latlng: [s.ground.lat, s.ground.lon], trk: s.last ? s.last.trk : 0, projected: false };
  }
  if (s.last) return { latlng: [s.last.lat, s.last.lon], trk: s.last.trk, projected: false };
  return null;
}

/* ---------------- Markers & tracks ---------------- */

function markerHtml(hex) {
  const p = cfg(hex);
  const pos = position(hex);
  const k = kind(hex);
  const rot = pos && pos.trk != null ? pos.trk : 0;
  return `${k === "air" && !reducedMotion.matches ? '<span class="pulse"></span>' : ""}
    <span class="glyph" style="transform: rotate(${rot}deg)">${planeSvg(p.model, p.color)}</span>
    <span class="tag">${fmt.escape(p.tail)}</span>`;
}

function syncMarkers() {
  for (const p of state.fleet) {
    const pos = position(p.hex);
    const entry = markers.get(p.hex);
    if (!pos) {
      if (entry) {
        entry.marker.remove();
        markers.delete(p.hex);
      }
      continue;
    }
    const k = kind(p.hex);
    const idle = k !== "air";
    const selected = state.selected === p.hex;
    const key = `${k}|${Math.round(pos.trk || 0)}|${selected}`;
    const className = `plane-marker${idle ? " is-idle" : ""}${selected ? " is-selected" : ""}`;
    if (!entry) {
      const marker = L.marker(pos.latlng, {
        icon: L.divIcon({ className, html: markerHtml(p.hex), iconSize: [0, 0] }),
        zIndexOffset: idle ? 0 : 1000,
        keyboard: true,
        title: p.tail,
      })
        .on("click", () => select(p.hex, { focus: true, fromMap: true }))
        .addTo(map);
      marker.getElement()?.style.setProperty("--plane", p.color);
      markers.set(p.hex, { marker, key });
    } else {
      entry.marker.setLatLng(pos.latlng);
      if (entry.key !== key) {
        entry.marker.setIcon(L.divIcon({ className, html: markerHtml(p.hex), iconSize: [0, 0] }));
        entry.marker.setZIndexOffset(selected ? 2000 : idle ? 0 : 1000);
        entry.marker.getElement()?.style.setProperty("--plane", p.color);
        entry.key = key;
      }
    }
  }
}

function tickMarkers() {
  const now = Date.now();
  for (const [hex, entry] of markers) {
    if (kind(hex) !== "air") continue;
    const pos = position(hex, now);
    if (pos) entry.marker.setLatLng(pos.latlng);
  }
  if (liveTail) {
    const pos = position(liveTail.hex, now);
    if (pos) liveTail.line.setLatLngs([liveTail.from, pos.latlng]);
  }
}

let liveTail = null;

function airportPin(place) {
  if (!place || place.lat == null) return null;
  return L.marker([place.lat, place.lon], {
    icon: L.divIcon({ className: "airport-pin", html: `<span>${fmt.escape(place.code || "?")}</span>`, iconSize: [0, 0] }),
    interactive: false,
    keyboard: false,
  });
}

function drawPath(path, color) {
  const latlngs = path.map((p) => [p[1], p[2]]);
  if (latlngs.length > 1) {
    L.polyline(latlngs, { color, weight: 10, opacity: 0.16, lineCap: "round", lineJoin: "round", interactive: false }).addTo(trackLayer);
    L.polyline(latlngs, { color, weight: 3.5, opacity: 0.95, lineCap: "round", lineJoin: "round", interactive: false }).addTo(trackLayer);
  }
  return latlngs;
}

let drawToken = 0;

async function drawSelection({ fit = false } = {}) {
  const token = (drawToken += 1);
  trackLayer.clearLayers();
  liveTail = null;

  let flight = null;
  let path = null;
  if (state.flightId) {
    flight = state.db && state.db.flights.find((f) => f.id === state.flightId);
  } else if (state.selected) {
    flight = activeFlight(state.selected) || null;
  }
  if (!flight) {
    if (fit && state.selected) {
      const pos = position(state.selected);
      if (pos) fitTo([pos.latlng], 9);
    }
    return;
  }

  const color = colorOf(flight.hex);
  if (state.db.active && state.db.active[flight.hex] && state.db.active[flight.hex].id === flight.id) {
    path = state.db.active[flight.hex].path;
  } else {
    try {
      path = await loadTrack(flight);
    } catch {
      path = [];
    }
  }
  if (token !== drawToken) return;

  const latlngs = drawPath(path || [], color);
  const pins = [airportPin(flight.from), airportPin(flight.to)].filter(Boolean);
  pins.forEach((pin) => pin.addTo(trackLayer));

  const live = !flight.end && kind(flight.hex) === "air" && latlngs.length;
  if (live) {
    const from = latlngs[latlngs.length - 1];
    const pos = position(flight.hex);
    const line = L.polyline([from, pos ? pos.latlng : from], { color, weight: 3, opacity: 0.6, dashArray: "2 7", lineCap: "round", interactive: false }).addTo(trackLayer);
    liveTail = { hex: flight.hex, from, line };
  }

  if (fit) {
    const points = latlngs.slice();
    if (flight.from && flight.from.lat != null) points.push([flight.from.lat, flight.from.lon]);
    if (flight.to && flight.to.lat != null) points.push([flight.to.lat, flight.to.lon]);
    const pos = live ? position(flight.hex) : null;
    if (pos) points.push(pos.latlng);
    fitTo(points, 10);
  }
}

/* ---------------- Planes view ---------------- */

function stripHtml() {
  return state.fleet
    .map((p) => {
      const k = kind(p.hex);
      const s = st(p.hex);
      let text = PILL[k][1];
      if (k === "air" && s && s.last) text = fmt.altitudeText(s.last.alt);
      else if ((k === "parked" || k === "ground") && s.ground && s.ground.code) text = s.ground.code;
      return `<button class="strip-chip${state.selected === p.hex ? " is-selected" : ""}" type="button" data-hex="${p.hex}" style="--plane:${p.color}">
        <span class="strip-tail"><span class="swatch"></span>${fmt.escape(p.tail)}</span>
        <span class="strip-state${k === "air" ? " is-air" : ""}">${fmt.escape(text)}</span>
      </button>`;
    })
    .join("");
}

function metric(value, label, unit = "") {
  return `<div class="metric"><b>${fmt.escape(value)}${unit ? ` <small>${fmt.escape(unit)}</small>` : ""}</b><span>${label}</span></div>`;
}

function routeHtml(from, to, { progress = null, dashed = false, rightLabel = null } = {}) {
  const left = from && from.code ? fmt.escape(from.code) : "—";
  const right = rightLabel != null ? rightLabel : to && to.code ? fmt.escape(to.code) : "—";
  const pct = progress == null ? null : Math.max(4, Math.min(96, progress * 100));
  return `<div class="route">
    <span class="route-code${from && from.code ? "" : " is-unknown"}">${left}${from && from.approx ? "~" : ""}</span>
    <span class="route-line${dashed ? " is-dashed" : ""}">${pct != null ? `<i style="width:${pct}%"></i>${GLYPH.replace("<svg", `<svg style="left:${pct}%"`)}` : ""}</span>
    <span class="route-code${(to && to.code) || rightLabel ? "" : " is-unknown"}">${right}</span>
  </div>`;
}

function cardHtml(p) {
  const s = st(p.hex);
  const k = kind(p.hex);
  const [pillClass, pillText] = PILL[k];
  const selected = state.selected === p.hex;
  let body = "";

  if ((k === "air" || k === "lost") && s && s.last) {
    const f = s.last;
    const flight = activeFlight(p.hex);
    const alt = fmt.altitude(f.alt);
    const vs = fmt.vertical(f.vs);
    const speedUnit = f.mach ? `M${f.mach.toFixed(2).replace(/^0/, "")}` : "kt";
    body += `<div class="metrics">
      ${metric(alt.value, "Altitude", alt.unit)}
      ${metric(f.gs != null ? fmt.num(f.gs) : "—", "Speed", f.gs != null ? speedUnit : "")}
      ${metric(fmt.heading(f.trk), "Track")}
      ${metric(vs.value, "Vertical", vs.unit)}
    </div>`;
    if (flight) {
      const started = flight.start;
      body += routeHtml(flight.from, null, {
        progress: 0.62,
        rightLabel: `<span data-elapsed="${started}">${fmt.duration(Date.now() - started)}</span>`,
      });
      const fromText = flight.from ? `from <strong>${fmt.escape(fmt.placeName(flight.from))}</strong>` : flight.firstNear ? `first seen near <strong>${fmt.escape(fmt.placeName(flight.firstNear))}</strong>` : "";
      body += `<p class="card-note">Off ${flight.startApprox ? "~" : ""}${fmt.time(flight.start)} ${fromText}</p>`;
    }
    const bits = [];
    if (f.cs && f.cs !== p.tail) bits.push(`Callsign ${fmt.escape(f.cs)}`);
    if (f.sel && k === "air") bits.push(`Cleared ${fmt.altitudeText(Math.round(f.sel / 100) * 100)}`);
    bits.push(`Position <span data-ago="${f.t}">${fmt.ago(f.t)}</span>`);
    if (k === "lost") bits.unshift("Out of receiver range");
    body += `<p class="card-note">${bits.join(" · ")}</p>`;
  } else if (k === "parked" || k === "ground") {
    const g = s.ground;
    const last = lastFlight(p.hex);
    body += `<p class="card-note">${k === "ground" ? "On the ground at" : "Parked at"} <strong>${fmt.escape(g.code || "")}</strong> · ${fmt.escape(fmt.placeName(g) || g.name || "")}`;
    if (g.since) body += `<br>Since ${fmt.whenText(g.since)} · <span data-ago="${g.since}">${fmt.ago(g.since)}</span>`;
    body += "</p>";
    if (last) {
      body += routeHtml(last.from, last.to, { progress: 1 });
      body += `<p class="card-note">Last flight ${fmt.dayLabel(last.start).toLowerCase() === "today" ? "today" : fmt.dayLabel(last.start)} · ${fmt.duration(last.end - last.start)} · ${fmt.num(last.distNm || 0)} nm</p>`;
    }
  } else if (s && s.lastSeen) {
    body += `<p class="card-note">Last seen <span data-ago="${s.lastSeen}">${fmt.ago(s.lastSeen)}</span>.</p>`;
  } else if (state.db) {
    body += `<p class="card-note">Not picked up by a receiver since tracking started. It will appear the next time its transponder is on in coverage.</p>`;
  } else {
    body += `<p class="card-note">${state.noData ? "Waiting for the first data collection." : "Loading…"}</p>`;
  }

  return `<article class="card${selected ? " is-selected" : ""}" style="--plane:${p.color}">
    <button class="card-main" type="button" data-hex="${p.hex}" aria-pressed="${selected}">
      <div class="card-top">
        <div>
          <h2 class="tail">${fmt.escape(p.tail)}</h2>
          <p class="subtitle">${fmt.escape(p.type)} · ${p.year}</p>
        </div>
        <span class="pill ${pillClass}">${pillText}</span>
      </div>
      ${body}
    </button>
    <div class="card-links">
      <a href="https://globe.adsbexchange.com/?icao=${p.hex}" target="_blank" rel="noopener">ADS-B Exchange</a>
      <a href="https://www.flightaware.com/live/flight/${encodeURIComponent(p.tail)}" target="_blank" rel="noopener">FlightAware</a>
      <a href="https://registry.faa.gov/AircraftInquiry/Search/NNumberResult?nNumberTxt=${encodeURIComponent(p.tail)}" target="_blank" rel="noopener">FAA</a>
    </div>
  </article>`;
}

function renderPlanes() {
  if (!state.fleet.length) {
    els.strip.innerHTML = '<div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div>';
    els.cards.innerHTML = '<div class="skeleton"></div><div class="skeleton"></div>';
    return;
  }
  els.strip.innerHTML = stripHtml();
  // Airborne first, then parked, then not seen.
  const order = { air: 0, lost: 1, ground: 2, parked: 3, unseen: 4, unknown: 5 };
  const sorted = state.fleet.slice().sort((a, b) => order[kind(a.hex)] - order[kind(b.hex)]);
  els.cards.innerHTML = sorted.map(cardHtml).join("");
}

/* ---------------- Flights view ---------------- */

function filteredFlights() {
  if (!state.db) return [];
  return state.db.flights.filter((f) => state.filter === "all" || f.hex === state.filter);
}

function renderFilters() {
  const chips = [{ hex: "all", tail: "All", color: null }, ...state.fleet];
  els.filters.innerHTML = chips
    .map(
      (c) => `<button class="filter" type="button" data-filter="${c.hex}" aria-pressed="${state.filter === c.hex}" ${c.color ? `style="--plane:${c.color}"` : ""}>
        ${c.color ? '<span class="swatch"></span>' : ""}${fmt.escape(c.tail)}</button>`,
    )
    .join("");
}

function renderStats(flights) {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
  const month = flights.filter((f) => f.start >= monthStart);
  const ms = month.reduce((sum, f) => sum + ((f.end || Date.now()) - f.start), 0);
  const counts = new Map();
  for (const f of flights.slice(0, 200)) {
    for (const place of [f.from, f.to]) {
      if (place && place.code) counts.set(place.code, (counts.get(place.code) || 0) + 1);
    }
  }
  const top = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
  const monthName = now.toLocaleString(undefined, { month: "long" });
  els.stats.innerHTML = `
    <div class="stat"><b>${month.length}</b><span>Flights in ${fmt.escape(monthName)}</span></div>
    <div class="stat"><b>${(ms / 3_600_000).toFixed(1)}</b><span>Hours in ${fmt.escape(monthName)}</span></div>
    <div class="stat"><b>${top ? fmt.escape(top[0]) : "—"}</b><span>Top airport</span></div>`;
}

function flightRowHtml(f) {
  const color = colorOf(f.hex);
  const live = !f.end;
  const from = f.from && f.from.code ? `${fmt.escape(f.from.code)}${f.from.approx ? "~" : ""}` : "—";
  const to = live ? "···" : f.to && f.to.code ? `${fmt.escape(f.to.code)}${f.to.approx ? "~" : ""}` : "?";
  const times = live
    ? `${f.startApprox ? "~" : ""}${fmt.time(f.start)} – now`
    : `${f.startApprox ? "~" : ""}${fmt.time(f.start)} – ${fmt.time(f.end)}`;
  const dur = live
    ? `<span data-elapsed="${f.start}">${fmt.duration(Date.now() - f.start)}</span><small>In the air</small>`
    : `${fmt.duration(f.end - f.start)}<small>${f.lost ? "Signal lost" : `${fmt.num(f.distNm || 0)} nm`}</small>`;
  return `<button class="flight-row${live ? " is-live" : ""}" type="button" data-flight="${fmt.escape(f.id)}" style="--plane:${color}">
    <span class="bar"></span>
    <span>
      <span class="codes">${from}${GLYPH}${to}</span>
      <span class="meta">${fmt.escape(f.tail)} · ${times}</span>
    </span>
    <span class="dur">${dur}</span>
  </button>`;
}

function renderFlightList() {
  const flights = filteredFlights();
  renderStats(flights);
  if (!flights.length) {
    els.flightList.innerHTML = `<div class="empty">${GLYPH}<strong>No flights yet</strong><p>${
      state.noData ? "History starts with the first data collection." : "Flights show up here after takeoff."
    }</p></div>`;
    return;
  }
  const groups = [];
  for (const f of flights.slice(0, 150)) {
    const key = fmt.dayKey(f.start);
    let g = groups[groups.length - 1];
    if (!g || g.key !== key) groups.push((g = { key, flights: [] }));
    g.flights.push(f);
  }
  els.flightList.innerHTML = groups
    .map((g) => `<h3 class="day">${fmt.dayLabel(g.key)}</h3><div class="day-group">${g.flights.map(flightRowHtml).join("")}</div>`)
    .join("");
}

function profileSvg(path, color) {
  const pts = path.filter((p) => typeof p[3] === "number");
  if (pts.length < 2) return "";
  const t0 = pts[0][0];
  const t1 = pts[pts.length - 1][0];
  const maxAlt = Math.max(...pts.map((p) => p[3]), 1000);
  const W = 320;
  const H = 80;
  const x = (t) => ((t - t0) / Math.max(1, t1 - t0)) * W;
  const y = (a) => H - (Math.max(0, a) / maxAlt) * (H - 10);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${x(p[0]).toFixed(1)} ${y(p[3]).toFixed(1)}`).join(" ");
  const id = `g${Math.random().toString(36).slice(2, 8)}`;
  return `<div class="profile"><svg viewBox="0 0 ${W} ${H + 12}" preserveAspectRatio="none" role="img" aria-label="Altitude profile, peak ${fmt.altitudeText(maxAlt)}">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${color}" stop-opacity="0.45"/><stop offset="1" stop-color="${color}" stop-opacity="0.02"/></linearGradient></defs>
    <path d="${line} L${W} ${H} L0 ${H} Z" fill="url(#${id})"/>
    <path d="${line}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  </svg><p class="profile-caption">Altitude · peak ${fmt.altitudeText(maxAlt)}</p></div>`;
}

async function renderDetail() {
  const f = state.db && state.db.flights.find((x) => x.id === state.flightId);
  if (!f) {
    closeDetail();
    return;
  }
  const p = cfg(f.hex) || { tail: f.tail, type: "", color: "#0a84ff" };
  const live = !f.end;
  const end = (place, t, approx, label) => `<div class="end">
      <span class="code${place && place.code ? "" : " is-unknown"}">${place && place.code ? fmt.escape(place.code) : label}</span>
      <span class="place">${place ? fmt.escape(fmt.placeName(place) || place.name || "") : "&nbsp;"}</span>
      <span class="time">${t ? `${approx ? "~" : ""}${fmt.time(t)}` : live ? "In the air" : "—"}</span>
    </div>`;
  const durationMs = (f.end || Date.now()) - f.start;
  const avg = durationMs > 0 && f.distNm ? Math.round(f.distNm / (durationMs / 3_600_000)) : null;
  const where = f.lost && f.lostNear ? `<p class="card-note">Signal lost near <strong>${fmt.escape(fmt.placeName(f.lostNear))}</strong>. The landing airport is unknown.</p>` : "";
  const firstNear = !f.from && f.firstNear ? `<p class="card-note">First picked up in the air near <strong>${fmt.escape(fmt.placeName(f.firstNear))}</strong>.</p>` : "";

  els.detail.innerHTML = `<button class="back" type="button" data-back>${BACK}Flights</button>
    <div class="detail-card" style="--plane:${p.color}">
      <p class="subtitle" style="margin:0 0 10px">${fmt.escape(p.tail)} · ${fmt.escape(p.type || "")} · ${fmt.dayLabel(f.start)}</p>
      <div class="detail-route">
        ${end(f.from, f.start, f.startApprox, "?")}
        <div class="mid">${GLYPH}<span ${live ? `data-elapsed="${f.start}"` : ""}>${fmt.duration(durationMs)}</span></div>
        ${end(f.to, f.end, f.to && f.to.approx, live ? "···" : "?")}
      </div>
      <div class="detail-stats">
        <div class="metric"><b>${fmt.num(f.distNm || 0)} <small>nm</small></b><span>Distance</span></div>
        <div class="metric"><b>${fmt.escape(fmt.altitude(f.maxAlt).value)}</b><span>Peak</span></div>
        <div class="metric"><b>${avg ? fmt.num(avg) : "—"} <small>kt</small></b><span>Avg speed</span></div>
      </div>
      <div id="profile-slot"></div>
      ${where}${firstNear}
    </div>`;

  let path = null;
  if (state.db.active && state.db.active[f.hex] && state.db.active[f.hex].id === f.id) path = state.db.active[f.hex].path;
  else {
    try {
      path = await loadTrack(f);
    } catch {
      path = null;
    }
  }
  const slot = document.querySelector("#profile-slot");
  if (slot && state.flightId === f.id && path) slot.innerHTML = profileSvg(path, p.color);
}

function openDetail(id) {
  state.flightId = id;
  const f = state.db.flights.find((x) => x.id === id);
  if (f) state.selected = f.hex;
  els.flightListWrap.hidden = true;
  els.detail.hidden = false;
  renderDetail();
  if (!sheet.wide) sheet.settle("half");
  drawSelection({ fit: true });
  syncMarkers();
  els.body.scrollTop = 0;
}

function closeDetail() {
  state.flightId = null;
  els.detail.hidden = true;
  els.flightListWrap.hidden = false;
  drawSelection();
}

function renderFlights() {
  renderFilters();
  if (state.flightId) renderDetail();
  else renderFlightList();
}

/* ---------------- Live pill & ticking ---------------- */

function anyAirborne() {
  return state.fleet.some((p) => kind(p.hex) === "air" || kind(p.hex) === "lost");
}

function renderLive() {
  const pill = els.live;
  pill.classList.remove("is-live", "is-error", "is-loading");
  if (state.loading && !state.db) {
    pill.classList.add("is-loading");
    els.liveText.textContent = "Loading";
    return;
  }
  if (state.noData) {
    els.liveText.textContent = "No data yet";
    return;
  }
  if (state.error && !state.db) {
    pill.classList.add("is-error");
    els.liveText.textContent = "Offline";
    return;
  }
  const updated = state.db ? state.db.updated : 0;
  const fresh = Date.now() - updated < 4 * MIN;
  if (state.error) pill.classList.add("is-error");
  else if (fresh && anyAirborne()) pill.classList.add("is-live");
  els.liveText.textContent = updated ? `Updated ${fmt.ago(updated)}` : "Waiting";
}

function tick() {
  const now = Date.now();
  for (const node of document.querySelectorAll("[data-ago]")) node.textContent = fmt.ago(Number(node.dataset.ago), now);
  for (const node of document.querySelectorAll("[data-elapsed]")) node.textContent = fmt.duration(now - Number(node.dataset.elapsed));
  renderLive();
  tickMarkers();
}

/* ---------------- Selection & events ---------------- */

function select(hex, { focus = false, fromMap = false } = {}) {
  const same = state.selected === hex && !state.flightId;
  state.selected = same && !fromMap ? null : hex;
  if (state.flightId) closeDetail();
  if (state.tab !== "planes") setTab("planes");
  renderPlanes();
  syncMarkers();
  drawSelection({ fit: focus && Boolean(state.selected) });
  if (state.selected && !sheet.wide && focus) sheet.settle("peek");
  if (fromMap && state.selected) {
    const card = els.cards.querySelector(`[data-hex="${hex}"]`);
    if (card && sheet.wide) card.scrollIntoView({ block: "nearest", behavior: reducedMotion.matches ? "auto" : "smooth" });
  }
}

function setTab(tab) {
  state.tab = tab;
  els.segmented.dataset.tab = tab;
  els.tabPlanes.setAttribute("aria-selected", String(tab === "planes"));
  els.tabFlights.setAttribute("aria-selected", String(tab === "flights"));
  els.viewPlanes.hidden = tab !== "planes";
  els.viewFlights.hidden = tab !== "flights";
  els.body.scrollTop = 0;
  if (tab === "flights") renderFlights();
  else if (state.flightId) closeDetail();
  sheet.layout();
}

els.tabPlanes.addEventListener("click", () => setTab("planes"));
els.tabFlights.addEventListener("click", () => {
  setTab("flights");
  if (!sheet.wide && sheet.snap === "peek") sheet.settle("half");
});

els.strip.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-hex]");
  if (btn) select(btn.dataset.hex, { focus: true });
});

els.cards.addEventListener("click", (e) => {
  if (e.target.closest("a")) return;
  const btn = e.target.closest(".card-main");
  if (btn) select(btn.dataset.hex, { focus: true });
});

els.filters.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-filter]");
  if (!btn) return;
  state.filter = btn.dataset.filter;
  renderFilters();
  renderFlightList();
});

els.flightList.addEventListener("click", (e) => {
  const row = e.target.closest("[data-flight]");
  if (row) openDetail(row.dataset.flight);
});

els.detail.addEventListener("click", (e) => {
  if (e.target.closest("[data-back]")) {
    closeDetail();
    renderFlightList();
  }
});

els.live.addEventListener("click", () => refresh());

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && state.flightId) {
    closeDetail();
    renderFlightList();
  }
});

/* ---------------- Data loop ---------------- */

function renderAll() {
  renderPlanes();
  if (state.tab === "flights") renderFlights();
  syncMarkers();
  renderLive();
  sheet.layout();
}

function fitFleet() {
  const points = state.fleet.map((p) => position(p.hex)).filter(Boolean).map((p) => p.latlng);
  fitTo(points, 8);
}

function schedule() {
  clearTimeout(state.timer);
  if (document.hidden) return;
  const wait = state.error ? 30_000 : anyAirborne() ? 10_000 : 60_000;
  state.timer = setTimeout(refresh, wait);
}

async function refresh() {
  if (state.loading) return;
  state.loading = true;
  renderLive();
  try {
    const db = await loadPlanes();
    const changed = !state.db || db.updated !== state.db.updated;
    state.db = db;
    state.error = null;
    state.noData = false;
    if (changed) {
      renderAll();
      if (!state.fitted) {
        state.fitted = true;
        fitFleet();
      }
      drawSelection();
    }
  } catch (error) {
    if (error instanceof NoDataYet) {
      state.noData = true;
      renderAll();
    } else {
      state.error = error;
    }
  } finally {
    state.loading = false;
    renderLive();
    schedule();
  }
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) clearTimeout(state.timer);
  else refresh();
});

async function start() {
  renderPlanes();
  try {
    const fleet = await loadFleet();
    state.fleet = fleet.aircraft.map((p) => ({ ...p, hex: p.hex.toLowerCase() }));
    if (fleet.fleet) els.fleetName.textContent = fleet.fleet;
  } catch {
    state.fleet = [];
  }
  const cached = cachedPlanes();
  if (cached && cached.version === 1) {
    state.db = cached;
    state.fitted = true;
    renderAll();
    fitFleet();
  } else {
    renderAll();
  }
  setInterval(tick, 1000);
  refresh();
}

start();
