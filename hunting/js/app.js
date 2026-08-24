/* ===================================================
   TheCuzzorts — Hunting app.js
   Species checklist: Josh & Sam only, no dates. Turkey and trapped
   Furbearer species are auto-derived from /turkey-hunting and
   /trapping respectively -- see deriveTurkeyRecords()/
   deriveFurbearerRecords() below. Never hand-add those to hunts.js.
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

  var CATEGORY_ORDER = ['Big Game', 'Upland Bird', 'Waterfowl', 'Small Game', 'Furbearer', 'Reptile/Amphibian'];

  // Generic placeholder shown when a species has no photo yet — keeps
  // every card's media slot filled instead of leaving it blank, same
  // role as fishing's FISH_ICON.
  var HUNT_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ' +
    'stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>' +
    '<line x1="12" y1="1" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="23"/>' +
    '<line x1="1" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="23" y2="12"/>' +
    '</svg>';

  // Same person colors used site-wide (travels/national-parks/disney/
  // turkey-hunting) -- Ellie/Poppy omitted, this page is Josh & Sam only.
  var PERSON_COLORS = { Josh: '#00AC4B', Sam: '#662684', Tilly: '#0898ff' };

  function locationName(loc) { return loc ? (STATE_NAMES[loc] || loc) : ''; }

  function hunterDotsHTML(hunters) {
    return (hunters || []).map(function (name) {
      var color = PERSON_COLORS[name] || '#8a9aaa';
      return '<span class="hunter-dot" style="background:' + color + '"></span>';
    }).join('');
  }

  function joinHunters(hunters) {
    if (!hunters || !hunters.length) { return ''; }
    if (hunters.length === 1) { return hunters[0]; }
    return hunters.slice(0, -1).join(', ') + ' &amp; ' + hunters[hunters.length - 1];
  }

  // ---- Turkey auto-derivation (from /turkey-hunting) ----------------
  // Reduces the three hunters' raw harvest/hunted-only arrays into
  // hunts.js-shaped records. Not a reuse of turkey-derive.js's
  // deriveTurkeyStateMap, which produces a different 0/0.001/1 map
  // shape for the turkey page's own map visualization -- this needs
  // per-state hunter attribution instead.
  // Only harvested states are derived -- hunted-only states are NOT
  // folded into the Upland Bird watch list. Turkey already has its own
  // dedicated hunted-only display on /turkey-hunting; repeating it here
  // as a watch-list chip was redundant.
  function deriveTurkeyRecords() {
    var HUNTERS = [
      { name: 'Josh', harvests: typeof turkeyHarvestsJosh !== 'undefined' ? turkeyHarvestsJosh : [] },
      { name: 'Sam',  harvests: typeof turkeyHarvestsSam  !== 'undefined' ? turkeyHarvestsSam  : [] },
      { name: 'Tilly', harvests: typeof turkeyHarvestsTilly !== 'undefined' ? turkeyHarvestsTilly : [] }
    ];

    var harvestedByState = {};

    HUNTERS.forEach(function (h) {
      h.harvests.forEach(function (rec) {
        if (rec.country !== 'USA' || !rec.state) { return; }
        if (!harvestedByState[rec.state]) { harvestedByState[rec.state] = []; }
        if (harvestedByState[rec.state].indexOf(h.name) === -1) { harvestedByState[rec.state].push(h.name); }
      });
    });

    var harvested = Object.keys(harvestedByState).map(function (state) {
      return { species: 'Turkey', hunters: harvestedByState[state], location: state, category: 'Upland Bird' };
    });

    return { harvested: harvested };
  }

  // ---- Furbearer auto-derivation (from /trapping) --------------------
  var SLUG_NAME_OVERRIDES = { 'long-tailed-weasel': 'Long-tailed Weasel' };

  function titleCaseSlug(slug) {
    if (SLUG_NAME_OVERRIDES[slug]) { return SLUG_NAME_OVERRIDES[slug]; }
    return slug.split('-').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

  function deriveFurbearerRecords() {
    var trapped = typeof furbearersTrapped !== 'undefined' ? furbearersTrapped : {};
    var harvested = [];
    var watch = [];
    Object.keys(trapped).forEach(function (slug) {
      var species = titleCaseSlug(slug);
      var record = { species: species, hunters: ['Josh'], location: 'US-IL', category: 'Furbearer', method: 'Trapped' };
      if (trapped[slug]) { harvested.push(record); } else { watch.push({ species: species, hunters: [], location: null, category: 'Furbearer' }); }
    });
    return { harvested: harvested, watch: watch };
  }

  // ---- Combine all sources once at load ------------------------------
  var turkeyDerived = deriveTurkeyRecords();
  var furbearerDerived = deriveFurbearerRecords();

  var allLogged = huntsLogged.concat(turkeyDerived.harvested, furbearerDerived.harvested);

  function speciesNamesIn(records) {
    var seen = {};
    records.forEach(function (r) { seen[r.species] = true; });
    return seen;
  }

  var loggedNames = speciesNamesIn(allLogged);

  // A species can be hunted but not (yet) trapped -- e.g. Bobcat already
  // has a harvested card above from hunts.js, so it shouldn't also show
  // up on the watch list just because /trapping's value for it is still
  // 0. Same "already has a card, so it's off the list" rule everywhere
  // else uses.
  var furbearerWatch = furbearerDerived.watch.filter(function (r) { return !loggedNames[r.species]; });

  function buildWaterfowlReferenceWatch() {
    var out = [];
    ['Ducks', 'Geese'].forEach(function (group) {
      (SPECIES_REFERENCE.Waterfowl[group] || []).forEach(function (species) {
        if (!loggedNames[species]) { out.push({ species: species, hunters: [], location: null, category: 'Waterfowl' }); }
      });
    });
    return out;
  }

  var allWatch = huntsWatchList.concat(furbearerWatch, buildWaterfowlReferenceWatch());

  // ---- Grouping + chip/card builders ---------------------------------
  function groupBySpecies(records) {
    var order = [];
    var bySpeciesName = {};
    records.forEach(function (r) {
      if (!bySpeciesName[r.species]) { bySpeciesName[r.species] = []; order.push(r.species); }
      bySpeciesName[r.species].push(r);
    });
    order.sort(function (a, b) { return a.localeCompare(b); });
    return order.map(function (species) { return { species: species, records: bySpeciesName[species] }; });
  }

  function buildLocationChipHTML(rec) {
    var loc = locationName(rec.location);
    var sub = joinHunters(rec.hunters);
    if (rec.method === 'Trapped') { sub += (sub ? ' &middot; ' : '') + 'Trapped'; }
    return '<span class="loc-chip"><strong>' + hunterDotsHTML(rec.hunters) + loc + '</strong>' +
      (sub ? '<small>' + sub + '</small>' : '') + '</span>';
  }

  // When filtered to one person, only show photos whose filename mentions
  // them (the naming convention already bakes the hunter's name into the
  // file, e.g. "whitetail-deer-illinois-josh-1.jpg" -- no separate photo-
  // to-hunter mapping needed). A photo tagged for both (e.g. "-josh-and-
  // sam.jpg") naturally matches either filter since it's a substring
  // check. Falls back to the placeholder icon if the filtered person has
  // no photo for that species, rather than showing someone else's photo.
  function photosForSpecies(species) {
    var photos = (typeof huntPhotos !== 'undefined' && huntPhotos[species]) || [];
    if (currentPerson === 'all') { return photos; }
    var needle = currentPerson.toLowerCase();
    return photos.filter(function (src) { return src.toLowerCase().indexOf(needle) !== -1; });
  }

  function buildSpeciesCardHTML(group) {
    var photos = photosForSpecies(group.species);
    var photo = photos[0];
    var media = photo
      ? '<img class="species-photo" src="' + photo + '" alt="' + group.species + '" loading="lazy">'
      : '<div class="species-placeholder">' + HUNT_ICON + '</div>';
    var chips = group.records.map(buildLocationChipHTML).join('');

    return '<div class="species-card"><div class="species-media">' + media + '</div>' +
      '<div class="species-body">' +
      '<div class="species-name">' + group.species + '</div>' +
      '<div class="chip-row">' + chips + '</div>' +
      '</div></div>';
  }

  function buildWatchListHTML(records) {
    if (!records.length) { return ''; }
    var groups = groupBySpecies(records);
    var chips = groups.map(function (g) {
      var sub = joinHunters(g.records[0].hunters);
      return '<span class="watch-chip">' + g.species + (sub ? ' &middot; ' + sub : '') + '</span>';
    }).join('');
    return '<div class="watchlist-row"><span class="watchlist-label">Watch List</span>' + chips + '</div>';
  }

  function buildCategoryHTML(category, loggedRecords, watchRecords) {
    if (!loggedRecords.length && !watchRecords.length) { return ''; }
    var groups = groupBySpecies(loggedRecords);
    var watchGroups = groupBySpecies(watchRecords);
    var cards = groups.map(buildSpeciesCardHTML).join('');
    var cardGrid = cards ? '<div class="card-grid">' + cards + '</div>' : '';
    var countText = groups.length + ' species' +
      (watchGroups.length ? ' &middot; ' + watchGroups.length + ' on the list' : '');

    return '<section class="category">' +
      '<div class="category-head"><h2>' + category + '</h2><span class="category-count">' + countText + '</span></div>' +
      cardGrid +
      buildWatchListHTML(watchRecords) +
      '</section>';
  }

  // ---- Person filter --------------------------------------------------
  var currentPerson = 'all';

  function filteredLogged() {
    if (currentPerson === 'all') { return allLogged; }
    return allLogged.filter(function (r) { return r.hunters.indexOf(currentPerson) !== -1; });
  }

  function initPersonFilter() {
    var el = document.getElementById('huntingPersonFilter');
    if (!el) { return; }
    el.addEventListener('click', function (e) {
      var btn = e.target.closest('.person-filter-btn');
      if (!btn || btn.classList.contains('active')) { return; }
      el.querySelectorAll('.person-filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentPerson = btn.dataset.person;
      renderForFilter();
    });
  }

  // ---- Stats ------------------------------------------------------------
  function distinctCount(records, key) {
    var seen = {};
    records.forEach(function (r) { if (r[key]) { seen[r[key]] = true; } });
    return Object.keys(seen).length;
  }

  function renderStats(logged) {
    var speciesEl = document.getElementById('huntingSpeciesTotal');
    var locationsEl = document.getElementById('huntingLocationsTotal');
    if (speciesEl) { speciesEl.textContent = distinctCount(logged, 'species'); }
    if (locationsEl) { locationsEl.textContent = distinctCount(logged, 'location'); }
  }

  // ---- Main render ------------------------------------------------------
  function renderForFilter() {
    var logged = filteredLogged();
    renderStats(logged);

    var html = CATEGORY_ORDER.map(function (category) {
      var loggedInCat = logged.filter(function (r) { return r.category === category; });
      var watchInCat = allWatch.filter(function (r) { return r.category === category; });
      return buildCategoryHTML(category, loggedInCat, watchInCat);
    }).join('');

    var container = document.getElementById('huntingCategories');
    if (container) { container.innerHTML = html; }
  }

  // ---- Lightbox -----------------------------------------------------
  // Mirrors whatever's currently on screen: same person filter (so a
  // photo of just Sam doesn't show up while browsing "Josh"), fixed
  // category order, alphabetized within each category -- same grouped-
  // order approach as /fishing's lightbox, plus one entry per photo (not
  // per species) so a multi-photo species pages through all of them,
  // captioned "Photo N of M" when there's more than one.
  var lbPhotos = [];
  var lbIndex = 0;

  function buildFlatPhotoList() {
    var out = [];
    CATEGORY_ORDER.forEach(function (category) {
      var inCat = filteredLogged().filter(function (r) { return r.category === category; });
      groupBySpecies(inCat).forEach(function (g) {
        var list = photosForSpecies(g.species);
        if (!list.length) { return; }
        list.forEach(function (src, i) {
          out.push({
            src: src,
            caption: g.species + (list.length > 1 ? ' &middot; Photo ' + (i + 1) + ' of ' + list.length : '')
          });
        });
      });
    });
    return out;
  }

  function showLightboxPhoto() {
    var item = lbPhotos[lbIndex];
    if (!item) { return; }
    document.getElementById('lbImg').src = item.src;
    document.getElementById('lbImg').alt = item.caption;
    document.getElementById('lbCaption').innerHTML = item.caption;
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
    document.getElementById('huntingLightbox').style.display = 'flex';
    document.body.classList.add('lb-open');
  }

  function closeLightbox() {
    document.getElementById('huntingLightbox').style.display = 'none';
    document.body.classList.remove('lb-open');
  }

  function initLightbox() {
    var overlay = document.createElement('div');
    overlay.id = 'huntingLightbox';
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
      var thumb = e.target.closest('.species-photo');
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

  initPersonFilter();
  renderForFilter();
  initLightbox();

}());
