/* ===================================================
   TheCuzzorts — Hunting app.js
   Renders the six plain species-checklist categories (Big Game, Upland
   Bird, Waterfowl, Small Game, Furbearer, Reptile/Amphibian) plus the
   page-level Anyone/Josh/Sam/Tilly person filter. Turkey and Whitetail
   Deer are NOT handled here -- they're prominent, self-contained
   sections rendered by hunting/js/turkey.js and hunting/js/deer.js
   respectively, with their own independent filter/state. Trapped
   Furbearer species are still auto-derived from /trapping here -- see
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

  // Anchor ids for the "On This Page" shortcut cards in hunting/index.html
  // to jump to -- these sections are JS-rendered, so nothing to link to
  // existed before those cards needed it.
  var CATEGORY_IDS = {
    'Big Game': 'big-game',
    'Upland Bird': 'upland-bird',
    'Waterfowl': 'waterfowl',
    'Small Game': 'small-game',
    'Furbearer': 'furbearer',
    'Reptile/Amphibian': 'reptile-amphibian'
  };

  // Same person colors used site-wide (travels/national-parks/disney) --
  // Ellie/Poppy omitted, the plain categories below are Josh/Sam/Tilly.
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
  var furbearerDerived = deriveFurbearerRecords();

  var allLogged = huntsLogged.concat(furbearerDerived.harvested);

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
  // Species with a photo sort before those without (alphabetical within
  // each group) -- matches photosForSpecies()'s own per-person filtering,
  // so this reflects whichever photo (if any) the card is about to show
  // for the current filter, not just whether the species has one at all.
  function groupBySpecies(records) {
    var order = [];
    var bySpeciesName = {};
    records.forEach(function (r) {
      if (!bySpeciesName[r.species]) { bySpeciesName[r.species] = []; order.push(r.species); }
      bySpeciesName[r.species].push(r);
    });
    order.sort(function (a, b) {
      var aHasPhoto = photosForSpecies(a).length > 0;
      var bHasPhoto = photosForSpecies(b).length > 0;
      if (aHasPhoto !== bHasPhoto) { return aHasPhoto ? -1 : 1; }
      return a.localeCompare(b);
    });
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
    if (currentPerson === 'anyone') { return photos; }
    var needle = currentPerson.toLowerCase();
    return photos.filter(function (src) { return src.toLowerCase().indexOf(needle) !== -1; });
  }

  // No-photo species render as a compact text-only card (no media box at
  // all) rather than a full-size placeholder-icon box -- with most
  // species now photographed, a big empty square next to real photos
  // reads as a broken/missing image, not a deliberate design choice.
  function buildSpeciesCardHTML(group) {
    var photo = photosForSpecies(group.species)[0];
    var media = photo
      ? '<div class="species-media"><img class="species-photo" src="' + photo + '" alt="' + group.species + '" loading="lazy"></div>'
      : '';
    var chips = group.records.map(buildLocationChipHTML).join('');

    return '<div class="species-card' + (photo ? '' : ' species-card--no-photo') + '">' + media +
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

  // Keeps the <section id="..."> present even when there's nothing to
  // show for the current person filter (just hidden), rather than
  // omitting it -- so the "On This Page" shortcut card's #big-game-style
  // anchor always has something to jump to, same approach deer.js uses
  // for its own section when a filtered person has zero bucks.
  function buildCategoryHTML(category, loggedRecords, watchRecords) {
    // watchRecords is family-wide (huntsWatchList/furbearerWatch/Waterfowl's
    // reference list are never filtered by person -- see filteredLogged()),
    // so it can't keep a section visible once a specific person is
    // selected: a watch-list species nobody in particular is pursuing
    // shouldn't make e.g. "Big Game" show up under Tilly's filter when she
    // has zero actual harvests there. The "anyone" view keeps the original
    // either-or check, since there the watch list legitimately is that
    // view's own content.
    var isEmpty = currentPerson === 'anyone'
      ? (!loggedRecords.length && !watchRecords.length)
      : !loggedRecords.length;
    var groups = groupBySpecies(loggedRecords);
    var watchGroups = groupBySpecies(watchRecords);
    var cards = groups.map(buildSpeciesCardHTML).join('');
    var cardGrid = cards ? '<div class="card-grid">' + cards + '</div>' : '';
    var countText = groups.length + ' species' +
      (watchGroups.length ? ' &middot; ' + watchGroups.length + ' on the list' : '');

    return '<section class="category" id="' + CATEGORY_IDS[category] + '"' + (isEmpty ? ' style="display:none"' : '') + '>' +
      '<div class="category-head"><h2>' + category + '</h2><span class="category-count">' + countText + '</span></div>' +
      cardGrid +
      buildWatchListHTML(watchRecords) +
      '</section>';
  }

  // ---- Person filter --------------------------------------------------
  var currentPerson = 'anyone';

  function filteredLogged() {
    if (currentPerson === 'anyone') { return allLogged; }
    return allLogged.filter(function (r) { return r.hunters.indexOf(currentPerson) !== -1; });
  }

  // One filter for the whole page: this fires 'hunting:personchange' on
  // every change (plus once at boot, see bottom) so hunting/js/turkey.js
  // and hunting/js/deer.js -- which have no filter UI of their own --
  // can stay in sync without any direct coupling between the 3 modules.
  function broadcastPersonChange() {
    document.dispatchEvent(new CustomEvent('hunting:personchange', { detail: { person: currentPerson } }));
  }

  // Keeps the "On This Page" shortcut cards AND the sticky header's own
  // [role="navigation"] links in sync with whichever sections the current
  // person filter actually shows -- no point linking to e.g. #big-game
  // (from either spot) if that section just hid itself because the
  // filtered person has zero harvests there. [role="navigation"] scopes
  // to just this page's own <nav> -- js/site-nav.js's cross-site
  // .global-nav-strip/.global-nav-select are separate elements it
  // inserts as header's first child, siblings of this div, not inside
  // it. Reads each link's own href rather than a separate id list, so
  // this stays correct if a section is ever added/removed. Safe to call
  // right after broadcastPersonChange(): dispatchEvent is synchronous,
  // so turkey.js's/deer.js's own 'hunting:personchange' listeners (which
  // hide/show #turkey/#deer) have already run by the time it returns.
  function syncSectionLinks() {
    var links = document.querySelectorAll('.shortcut-card, [role="navigation"] nav a');
    links.forEach(function (link) {
      var target = document.getElementById(link.getAttribute('href').slice(1));
      var hidden = target && getComputedStyle(target).display === 'none';
      link.style.display = hidden ? 'none' : '';
    });
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
      broadcastPersonChange();
      syncSectionLinks();
    });
  }

  // ---- Stats ------------------------------------------------------------
  // Turkey and Whitetail Deer are intentionally excluded from hunts.js
  // (each is its own section -- see that file's header), so `logged`
  // alone under-counts the page-level totals. Reading their raw data
  // globals directly here (turkeysHarvested[Name]/deerHarvests[Name],
  // already loaded before this script -- see script order in
  // hunting/index.html) keeps turkey.js/deer.js themselves untouched and
  // still independent of app.js; this only reads their public data, the
  // same way deer.js itself reads deerFirstHarvest.
  var PEOPLE_NAMES = ['Josh', 'Sam', 'Tilly'];

  // Only US states are tracked in turkeysHarvested[Name] (deriveTurkeyStateMap
  // in turkey-derive.js only sets a state for country === 'USA' harvests),
  // so an international harvest wouldn't be reflected here -- moot today
  // since nobody has one yet, but worth knowing if that changes.
  function turkeyLocationsFor(person) {
    var names = person === 'anyone' ? PEOPLE_NAMES : [person];
    var codes = {};
    names.forEach(function (name) {
      var data = window['turkeysHarvested' + name];
      if (!data) { return; }
      Object.keys(data).forEach(function (code) {
        if (Math.round(Number(data[code])) >= 1) { codes[code] = true; }
      });
    });
    return codes;
  }

  function deerLocationsFor(person) {
    var names = person === 'anyone' ? PEOPLE_NAMES : [person];
    var codes = {};
    names.forEach(function (name) {
      var harvests = window['deerHarvests' + name];
      if (!harvests) { return; }
      harvests.forEach(function (rec) { if (rec.gender === 'Buck') { codes[rec.state] = true; } });
    });
    return codes;
  }

  function renderStats(logged) {
    var speciesEl = document.getElementById('huntingSpeciesTotal');
    var locationsEl = document.getElementById('huntingLocationsTotal');

    var speciesSeen = {};
    var locationSeen = {};
    logged.forEach(function (r) {
      if (r.species) { speciesSeen[r.species] = true; }
      if (r.location) { locationSeen[r.location] = true; }
    });

    var turkeyLocs = turkeyLocationsFor(currentPerson);
    var deerLocs = deerLocationsFor(currentPerson);
    if (Object.keys(turkeyLocs).length) { speciesSeen['Turkey'] = true; }
    if (Object.keys(deerLocs).length) { speciesSeen['Whitetail Deer'] = true; }
    Object.keys(turkeyLocs).forEach(function (code) { locationSeen[code] = true; });
    Object.keys(deerLocs).forEach(function (code) { locationSeen[code] = true; });

    var locationCount = Object.keys(locationSeen).length;
    if (speciesEl) { speciesEl.textContent = Object.keys(speciesSeen).length; }
    if (locationsEl) { locationsEl.textContent = locationCount; }
    var locationsLabelEl = document.getElementById('huntingLocationsLabel');
    if (locationsLabelEl) { locationsLabelEl.textContent = locationCount === 1 ? 'Location' : 'Locations'; }
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
  syncSectionLinks();
  initLightbox();

}());
