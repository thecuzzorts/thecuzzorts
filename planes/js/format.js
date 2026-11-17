const MIN = 60_000;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

const timeFmt = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" });
const dayFmt = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric" });
const dateFmt = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" });
const yearDateFmt = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", year: "numeric" });
const numFmt = new Intl.NumberFormat();

export const num = (n) => numFmt.format(Math.round(n));

export function altitude(alt) {
  if (alt == null) return { value: "—", unit: "" };
  if (alt >= 18000) return { value: `FL${String(Math.round(alt / 100)).padStart(3, "0")}`, unit: "" };
  return { value: num(Math.round(alt / 25) * 25), unit: "ft" };
}

export function altitudeText(alt) {
  const a = altitude(alt);
  return a.unit ? `${a.value} ${a.unit}` : a.value;
}

export function heading(trk) {
  if (trk == null) return "—";
  return `${String(Math.round(trk) % 360).padStart(3, "0")}°`;
}

export function vertical(vs) {
  if (vs == null) return { value: "—", unit: "" };
  if (Math.abs(vs) < 200) return { value: "Level", unit: "" };
  return { value: `${vs > 0 ? "↑" : "↓"}${num(Math.abs(Math.round(vs / 50) * 50))}`, unit: "fpm" };
}

export function duration(ms) {
  if (ms == null || ms < 0) return "—";
  const total = Math.round(ms / MIN);
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${String(m).padStart(2, "0")}m`;
}

export function ago(ms, now = Date.now()) {
  const d = Math.max(0, now - ms);
  if (d < 45_000) return `${Math.max(1, Math.round(d / 1000))}s ago`;
  if (d < HOUR) return `${Math.round(d / MIN)}m ago`;
  if (d < DAY) {
    const h = Math.floor(d / HOUR);
    const m = Math.round((d % HOUR) / MIN);
    return m && h < 6 ? `${h}h ${m}m ago` : `${h}h ago`;
  }
  const days = Math.round(d / DAY);
  if (days < 14) return `${days}d ago`;
  return `on ${date(ms)}`;
}

export const time = (ms) => timeFmt.format(ms);

export function date(ms) {
  const d = new Date(ms);
  return d.getFullYear() === new Date().getFullYear() ? dateFmt.format(d) : yearDateFmt.format(d);
}

function startOfDay(ms) {
  const d = new Date(ms);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export function dayLabel(ms, now = Date.now()) {
  const diff = Math.round((startOfDay(now) - startOfDay(ms)) / DAY);
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  if (diff < 7) return dayFmt.format(ms);
  return new Date(ms).getFullYear() === new Date(now).getFullYear() ? dayFmt.format(ms) : yearDateFmt.format(ms);
}

export function dayKey(ms) {
  return startOfDay(ms);
}

export function whenText(ms, now = Date.now()) {
  const label = dayLabel(ms, now);
  return `${label === "Today" ? "" : `${label}, `}${time(ms)}`;
}

// K-prefixed US codes read better as the code people say, but keep the full code.
export function code(place) {
  if (!place || !place.code) return null;
  return place.code;
}

export function placeName(place) {
  if (!place) return "";
  const region = place.region && place.region.startsWith("US-") ? place.region.slice(3) : "";
  const city = place.city || place.name || "";
  return region ? `${city}, ${region}` : city;
}

export function escape(text) {
  return String(text ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
}
