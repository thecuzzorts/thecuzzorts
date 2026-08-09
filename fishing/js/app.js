/* ===================================================
   TheCuzzorts — Fishing app.js
   Family-shared tracker: no map, no per-catch attribution.
   =================================================== */
(function () {
  'use strict';

  var STATE_NAMES = {
    'US-AK': 'Alaska',         'US-AL': 'Alabama',        'US-AR': 'Arkansas',
    'US-AZ': 'Arizona',        'US-CA': 'California',     'US-CO': 'Colorado',
    'US-CT': 'Connecticut',    'US-DC': 'Washington DC',  'US-DE': 'Delaware',
    'US-FL': 'Florida',        'US-GA': 'Georgia',        'US-HI': 'Hawaii',
    'US-IA': 'Iowa',           'US-ID': 'Idaho',          'US-IL': 'Illinois',
    'US-IN': 'Indiana',        'US-KS': 'Kansas',         'US-KY': 'Kentucky',
    'US-LA': 'Louisiana',      'US-MA': 'Massachusetts',  'US-MD': 'Maryland',
    'US-ME': 'Maine',          'US-MI': 'Michigan',       'US-MN': 'Minnesota',
    'US-MO': 'Missouri',       'US-MS': 'Mississippi',    'US-MT': 'Montana',
    'US-NC': 'North Carolina', 'US-ND': 'North Dakota',   'US-NE': 'Nebraska',
    'US-NH': 'New Hampshire',  'US-NJ': 'New Jersey',     'US-NM': 'New Mexico',
    'US-NV': 'Nevada',         'US-NY': 'New York',       'US-OH': 'Ohio',
    'US-OK': 'Oklahoma',       'US-OR': 'Oregon',         'US-PA': 'Pennsylvania',
    'US-RI': 'Rhode Island',   'US-SC': 'South Carolina', 'US-SD': 'South Dakota',
    'US-TN': 'Tennessee',      'US-TX': 'Texas',          'US-UT': 'Utah',
    'US-VA': 'Virginia',       'US-VT': 'Vermont',        'US-WA': 'Washington',
    'US-WI': 'Wisconsin',      'US-WV': 'West Virginia',  'US-WY': 'Wyoming'
  };

  // Generic fish silhouette shown when a species has no photo yet —
  // keeps every card's media slot filled instead of leaving it blank.
  var FISH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ' +
    'stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M2 12c3-4 8-6 13-6 3 0 6 2 7 6-1 4-4 6-7 6-5 0-10-2-13-6z"/>' +
    '<path d="M22 12l-4-3v6l4-3z"/>' +
    '<circle cx="7" cy="10.5" r="0.8" fill="currentColor" stroke="none"/>' +
    '</svg>';

  // Groups individual catch records by species — a species caught in
  // multiple states (or multiple times in the same state) gets one
  // card with one chip per catch, not one duplicate card per catch.
  function groupBySpecies(records) {
    var order = [];
    var bySpeciesName = {};
    records.forEach(function (r) {
      if (!bySpeciesName[r.species]) { bySpeciesName[r.species] = []; order.push(r.species); }
      bySpeciesName[r.species].push(r);
    });
    order.sort(function (a, b) { return a.localeCompare(b); });
    return order.map(function (species) { return { species: species, catches: bySpeciesName[species] }; });
  }

  function buildCatchDetailText(c) {
    var parts = [];
    if (c.date) { parts.push(c.date); }
    if (c.weight != null) { parts.push(c.weight + ' lbs'); }
    if (c.length != null) { parts.push(c.length + ' in'); }
    var text = parts.join(' &middot; ');
    if (c.notes) { text += (text ? ' &mdash; ' : '') + c.notes; }
    return text;
  }

  function buildStateChipHTML(c) {
    var stateName = STATE_NAMES[c.state] || c.state;
    var detail = buildCatchDetailText(c);
    return '<span class="catch-state-chip">' + stateName +
      (detail ? '<small class="catch-detail">' + detail + '</small>' : '') +
      '</span>';
  }

  function buildCatchCardHTML(group) {
    var photos = (typeof fishPhotos !== 'undefined') ? fishPhotos : {};
    var photo = photos[group.species];
    var chips = group.catches.map(buildStateChipHTML).join('');

    var media = '<div class="catch-card-media">' + (photo
      ? '<img class="catch-card-photo" src="' + photo + '" alt="' + group.species + '" loading="lazy">'
      : '<div class="catch-card-placeholder">' + FISH_ICON + '</div>') + '</div>';

    return '<div class="catch-card">' + media +
      '<div class="catch-card-body">' +
      '<div class="catch-species">' + group.species + '</div>' +
      '<div class="catch-chip-row">' + chips + '</div>' +
      '</div></div>';
  }

  function buildCatchGridHTML(records) {
    if (!records.length) { return '<p class="catch-empty">No catches logged yet.</p>'; }
    var groups = groupBySpecies(records);
    return '<div class="catch-grid">' + groups.map(buildCatchCardHTML).join('') + '</div>';
  }

  function renderGrid(elementId, records) {
    var el = document.getElementById(elementId);
    if (el) { el.innerHTML = buildCatchGridHTML(records); }
  }

  function distinctCount(records, key) {
    var seen = {};
    records.forEach(function (r) { seen[r[key]] = true; });
    return Object.keys(seen).length;
  }

  function renderStats() {
    var all = fishCaught.freshwater.concat(fishCaught.saltwater);
    var totalEl   = document.getElementById('catchTotal');
    var speciesEl = document.getElementById('speciesTotal');
    var statesEl  = document.getElementById('stateTotal');

    if (totalEl)   { totalEl.textContent = all.length; }
    if (speciesEl) { speciesEl.textContent = distinctCount(all, 'species'); }
    if (statesEl)  { statesEl.textContent = distinctCount(all, 'state'); }
  }

  // ---- Lightbox ---------------------------------------
  // Clicking any species photo opens it full-size, with prev/next to
  // browse every photographed species in alphabetical order.
  var lbPhotos = [];
  var lbIndex  = 0;

  function buildFlatPhotoList() {
    var photos = (typeof fishPhotos !== 'undefined') ? fishPhotos : {};
    return Object.keys(photos).sort(function (a, b) { return a.localeCompare(b); })
      .map(function (species) { return { src: photos[species], caption: species }; });
  }

  function showLightboxPhoto() {
    var item = lbPhotos[lbIndex];
    if (!item) { return; }
    document.getElementById('lbImg').src = item.src;
    document.getElementById('lbImg').alt = item.caption;
    document.getElementById('lbCaption').textContent = item.caption;
    document.getElementById('lbPrev').style.visibility = lbIndex > 0 ? 'visible' : 'hidden';
    document.getElementById('lbNext').style.visibility = lbIndex < lbPhotos.length - 1 ? 'visible' : 'hidden';
  }

  function openLightbox(src) {
    lbPhotos = buildFlatPhotoList();
    lbIndex = 0;
    for (var i = 0; i < lbPhotos.length; i++) {
      if (lbPhotos[i].src === src) { lbIndex = i; break; }
    }
    showLightboxPhoto();
    document.getElementById('fishLightbox').style.display = 'flex';
    document.body.classList.add('lb-open');
  }

  function closeLightbox() {
    document.getElementById('fishLightbox').style.display = 'none';
    document.body.classList.remove('lb-open');
  }

  function initLightbox() {
    var overlay = document.createElement('div');
    overlay.id = 'fishLightbox';
    overlay.className = 'lb-overlay';
    overlay.style.display = 'none';
    overlay.innerHTML =
      '<div class="lb-backdrop"></div>' +
      '<div class="lb-frame">' +
        '<button class="lb-close" aria-label="Close">&times;</button>' +
        '<img id="lbImg" class="lb-img" src="" alt="">' +
        '<div class="lb-controls">' +
          '<button id="lbPrev" class="lb-prev" aria-label="Previous">&#8592;</button>' +
          '<div id="lbCaption" class="lb-caption"></div>' +
          '<button id="lbNext" class="lb-next" aria-label="Next">&#8594;</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    document.addEventListener('click', function (e) {
      var thumb = e.target.closest('.catch-card-photo');
      if (thumb) { openLightbox(thumb.getAttribute('src')); return; }
      if (e.target.closest('.lb-backdrop') || e.target.closest('.lb-close')) { closeLightbox(); return; }
      if (e.target.closest('#lbPrev')) { if (lbIndex > 0) { lbIndex--; showLightboxPhoto(); } return; }
      if (e.target.closest('#lbNext')) { if (lbIndex < lbPhotos.length - 1) { lbIndex++; showLightboxPhoto(); } }
    });

    document.addEventListener('keydown', function (e) {
      if (overlay.style.display !== 'flex') { return; }
      if (e.key === 'ArrowLeft'  && lbIndex > 0)                    { lbIndex--; showLightboxPhoto(); }
      if (e.key === 'ArrowRight' && lbIndex < lbPhotos.length - 1)  { lbIndex++; showLightboxPhoto(); }
      if (e.key === 'Escape') { closeLightbox(); }
    });
  }

  renderStats();
  renderGrid('freshwaterGrid', fishCaught.freshwater);
  renderGrid('saltwaterGrid', fishCaught.saltwater);
  initLightbox();

  var yearEl = document.getElementById('currentYear');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

}());
