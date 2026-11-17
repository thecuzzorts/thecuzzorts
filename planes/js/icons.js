// Top-down business jet silhouettes, nose up, 40x40.

const CITATION_X = [
  // swept wings
  "M21.6 14.2 L35.6 24.6 L35.6 26.6 L21.6 21.6 Z",
  "M18.4 14.2 L4.4 24.6 L4.4 26.6 L18.4 21.6 Z",
  // T-tail
  "M20 30.6 L26.6 35.6 L26.6 37.2 L20 35.4 L13.4 37.2 L13.4 35.6 Z",
  // fuselage
  "M20 2.2 C21.5 2.2 22.2 5.4 22.2 8.6 L22.2 30 L21.2 35.4 L18.8 35.4 L17.8 30 L17.8 8.6 C17.8 5.4 18.5 2.2 20 2.2 Z",
  // engines
  "M22.4 24.4 h2.4 a1.1 1.1 0 0 1 1.1 1.1 v5.2 a1.1 1.1 0 0 1 -1.1 1.1 h-2.4 Z",
  "M17.6 24.4 h-2.4 a1.1 1.1 0 0 0 -1.1 1.1 v5.2 a1.1 1.1 0 0 0 1.1 1.1 h2.4 Z",
].join(" ");

const CITATION_V = [
  // straighter wings
  "M21.6 15.6 L37 19.6 L37 21.8 L21.6 21.2 Z",
  "M18.4 15.6 L3 19.6 L3 21.8 L18.4 21.2 Z",
  "M20 30.4 L26.2 33.2 L26.2 35 L20 34.2 L13.8 35 L13.8 33.2 Z",
  "M20 4.4 C21.4 4.4 22.1 7.2 22.1 10 L22.1 29.6 L21 34.4 L19 34.4 L17.9 29.6 L17.9 10 C17.9 7.2 18.6 4.4 20 4.4 Z",
  "M22.3 23.6 h2.2 a1 1 0 0 1 1 1 v4.4 a1 1 0 0 1 -1 1 h-2.2 Z",
  "M17.7 23.6 h-2.2 a1 1 0 0 0 -1 1 v4.4 a1 1 0 0 0 1 1 h2.2 Z",
].join(" ");

export function planePath(model) {
  return model === "C560" ? CITATION_V : CITATION_X;
}

export function planeSvg(model, color, extra = "") {
  return `<svg viewBox="0 0 40 40" aria-hidden="true" ${extra}><path d="${planePath(model)}" fill="${color}" stroke="#fff" stroke-width="1.3" stroke-linejoin="round" paint-order="stroke"/></svg>`;
}

// Small side-view glyph used in lists and route lines.
export const GLYPH = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" transform="rotate(90 12 12)"/></svg>`;

export const BACK = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>`;
