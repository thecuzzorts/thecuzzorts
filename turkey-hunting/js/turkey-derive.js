/* ===================================================
   TheCuzzorts — Turkey Hunting: derived-state-map helper
   Loaded by hunting/index.html (its Turkey section, hunting/js/turkey.js),
   stats/index.html, and the homepage index.html — all three read the
   turkeysHarvested[Name] global directly. Plain vanilla JS: the
   homepage never loads jQuery, so this can't depend on it.
   =================================================== */

// Matches STATE_NAMES keys in hunting/js/turkey.js exactly
// (50 states + DC = 51 keys; the "/49" denominator used elsewhere
// is a display convention — Alaska and DC aren't turkey states —
// not a filter on this list).
var TURKEY_STATE_CODES = [
  'US-AK', 'US-AL', 'US-AR', 'US-AZ', 'US-CA', 'US-CO', 'US-CT', 'US-DC', 'US-DE',
  'US-FL', 'US-GA', 'US-HI', 'US-IA', 'US-ID', 'US-IL', 'US-IN', 'US-KS', 'US-KY',
  'US-LA', 'US-MA', 'US-MD', 'US-ME', 'US-MI', 'US-MN', 'US-MO', 'US-MS', 'US-MT',
  'US-NC', 'US-ND', 'US-NE', 'US-NH', 'US-NJ', 'US-NM', 'US-NV', 'US-NY', 'US-OH',
  'US-OK', 'US-OR', 'US-PA', 'US-RI', 'US-SC', 'US-SD', 'US-TN', 'US-TX', 'US-UT',
  'US-VA', 'US-VT', 'US-WA', 'US-WI', 'US-WV', 'US-WY'
];

// harvests: flat array of harvest-record objects (see turkey-harvests-*.js)
// huntedOnly: array of 'US-XX' codes hunted but never harvested
function deriveTurkeyStateMap(harvests, huntedOnly) {
  var map = {};
  TURKEY_STATE_CODES.forEach(function (code) { map[code] = 0; });

  (huntedOnly || []).forEach(function (code) {
    if (map.hasOwnProperty(code)) map[code] = 0.001;
  });

  (harvests || []).forEach(function (rec) {
    if (rec.country === 'USA' && map.hasOwnProperty(rec.state)) {
      map[rec.state] = 1; // harvested wins over hunted-only
    }
  });

  return map;
}

// NWTF score = weight + beard*2 + (leftSpur+rightSpur)*10.
// Returns null (not 0) if any input measurement is missing, so an
// unmeasured bird is never silently scored as a 0" bird.
function nwtfScore(rec) {
  if (rec.weight == null || rec.beard == null ||
      rec.leftSpur == null || rec.rightSpur == null) return null;
  return Number(rec.weight) + Number(rec.beard) * 2 +
         (Number(rec.leftSpur) + Number(rec.rightSpur)) * 10;
}
