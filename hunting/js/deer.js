/* ===================================================
   TheCuzzorts — Hunting: Whitetail Deer section
   Public catalog of bucks harvested, backed by deer-harvests-[name].js
   (currently just Josh). Only gender === 'Buck' records surface, and
   only year/state/weapon (plus age when labConfirmedAge is true, plus
   a photo thumbnail when the record's `photo` field is set) --
   every other field on the source record (license/tag numbers,
   processor names, notes, every Doe/Doe Fawn/Button Buck) stays
   private in the data file and is never rendered here.

   Photo thumbnails open their own lightbox (.dlb- classes, #dlbImg,
   #deerLightbox -- distinct from hunting/js/app.js's #huntingLightbox/
   .lb- classes and turkey.js's #turkeyLightbox/.tlb- classes, same
   collision-avoidance approach both of those already use) that pages
   through whichever bucks in the current person filter have a photo,
   newest first.

   No filter UI of its own -- hunting/js/app.js's single
   #huntingPersonFilter (Anyone/Josh/Sam/Tilly) governs the whole page and
   broadcasts a 'hunting:personchange' event on document, which this
   listens for (same pattern hunting/js/turkey.js uses). When filtered
   to a person with zero bucks, the whole section hides rather than
   showing an empty state -- same "only show what has content"
   convention used everywhere else on this site.
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

  function locationName(loc) { return STATE_NAMES[loc] || loc; }

  // Same values as hunting/js/app.js's PERSON_COLORS -- duplicated rather
  // than shared since that's a separate module-scoped IIFE. Bucks aren't
  // grouped by hunter the way Turkey's photos/slams are (they're one flat
  // grid sorted by year across everyone), so each card needs its own
  // hunter label rather than a shared section header.
  var HUNTER_COLORS = { Josh: '#00AC4B', Sam: '#662684', Tilly: '#0898ff' };

  // Same crosshair placeholder as hunting/js/app.js's HUNT_ICON -- duplicated
  // rather than shared since that's a separate module-scoped IIFE.
  var BUCK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ' +
    'stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>' +
    '<line x1="12" y1="1" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="23"/>' +
    '<line x1="1" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="23" y2="12"/>' +
    '</svg>';

  // ---- Derive the public buck catalog from each person's private log ---
  function deriveBucks() {
    var SOURCES = [
      { name: 'Josh', harvests: typeof deerHarvestsJosh !== 'undefined' ? deerHarvestsJosh : [] }
    ];

    var out = [];
    SOURCES.forEach(function (person) {
      person.harvests.forEach(function (rec) {
        if (rec.gender !== 'Buck') { return; }
        out.push({
          hunter: person.name,
          year: rec.date.slice(0, 4),
          state: rec.state,
          weapon: rec.weapon,
          age: rec.labConfirmedAge ? rec.age : null,
          photo: rec.photo || null
        });
      });
    });

    out.sort(function (a, b) { return b.year - a.year; });
    return out;
  }

  function buckCaption(buck) { return buck.year + ' &middot; ' + locationName(buck.state); }

  // Same .card-grid/.species-card/.species-media/.species-body/.species-name
  // shell as the six plain categories (hunting/js/app.js) -- reused directly
  // since it's identical card chrome, just with buck-specific body content.
  // The photo keeps its own .buck-photo class rather than .species-photo:
  // app.js's document-level click listener opens ITS OWN lightbox for any
  // .species-photo it finds, rebuilding its photo list from CATEGORY_ORDER/
  // huntsLogged -- a buck's src wouldn't be in that list, so reusing the
  // class here would silently open app.js's lightbox to the wrong photo.
  function buildBuckCardHTML(buck) {
    var age = buck.age
      ? '<div class="buck-age">Age ' + buck.age + ' (lab-confirmed)</div>'
      : '';
    var media = buck.photo
      ? '<img class="buck-photo" src="' + buck.photo + '" alt="' + buckCaption(buck).replace(/&middot;/, '·') + ' buck" loading="lazy">'
      : '<div class="species-placeholder">' + BUCK_ICON + '</div>';
    var hunterBadge = '<span class="buck-hunter-badge" style="background:' +
      (HUNTER_COLORS[buck.hunter] || '#8a9aaa') + '">' + buck.hunter + '</span>';
    return '<div class="species-card"><div class="species-media">' + hunterBadge + media + '</div>' +
      '<div class="species-body">' +
      '<div class="species-name">' + buckCaption(buck) + '</div>' +
      '<div class="buck-card-weapon">' + buck.weapon + '</div>' +
      age +
      '</div></div>';
  }

  function buildMilestoneRowHTML() {
    var kids = typeof deerFirstHarvest !== 'undefined' ? deerFirstHarvest : {};
    var entries = Object.keys(kids)
      .filter(function (name) { return kids[name]; })
      .map(function (name) {
        var d = kids[name];
        return '<span class="watch-chip">' + name + '’s first deer &middot; ' + d.type + ' &middot; ' +
          locationName(d.state) + ' (' + d.year + ')</span>';
      });
    if (!entries.length) { return ''; }
    return '<div class="deer-milestone-row"><span class="watchlist-label">First Deer</span>' + entries.join('') + '</div>';
  }

  var allBucks = deriveBucks();
  var currentBucksWithPhotos = [];

  function render(pageValue) {
    var section = document.getElementById('deer');
    var container = document.getElementById('deerContent');
    var countEl = document.getElementById('deerCategoryCount');
    if (!container || !section) { return; }

    var bucks = pageValue === 'anyone' ? allBucks : allBucks.filter(function (b) { return b.hunter === pageValue; });

    if (!bucks.length) { section.style.display = 'none'; return; }
    section.style.display = '';

    var states = {};
    bucks.forEach(function (b) { states[b.state] = true; });
    var stateCount = Object.keys(states).length;

    if (countEl) {
      countEl.innerHTML = bucks.length + ' bucks &middot; ' + stateCount + ' state' + (stateCount === 1 ? '' : 's');
    }

    currentBucksWithPhotos = bucks.filter(function (b) { return b.photo; });

    container.innerHTML = '<div class="card-grid">' + bucks.map(buildBuckCardHTML).join('') + '</div>' +
      buildMilestoneRowHTML();
  }

  // ---- Lightbox -------------------------------------------------------
  // Single-photo-per-buck (unlike app.js's/turkey.js's multi-photo-per-
  // entry galleries), so it pages across bucks-with-photos rather than
  // across a species'/person's own photo array. Scoped to whatever the
  // page-level person filter currently shows, same as app.js's own
  // lightbox does for the six plain categories.
  var dlbPhotos = [];
  var dlbIndex = 0;

  function showDeerLightboxPhoto() {
    var item = dlbPhotos[dlbIndex];
    if (!item) { return; }
    document.getElementById('dlbImg').src = item.src;
    document.getElementById('dlbImg').alt = item.caption;
    document.getElementById('dlbCaption').innerHTML = item.caption;
    document.getElementById('dlbPrev').style.visibility = dlbIndex > 0 ? 'visible' : 'hidden';
    document.getElementById('dlbNext').style.visibility = dlbIndex < dlbPhotos.length - 1 ? 'visible' : 'hidden';
  }

  function openDeerLightbox(src) {
    dlbPhotos = currentBucksWithPhotos.map(function (b) { return { src: b.photo, caption: buckCaption(b) }; });
    dlbIndex = 0;
    for (var i = 0; i < dlbPhotos.length; i++) {
      if (dlbPhotos[i].src === src) { dlbIndex = i; break; }
    }
    showDeerLightboxPhoto();
    document.getElementById('deerLightbox').style.display = 'flex';
    document.body.classList.add('dlb-open');
  }

  function closeDeerLightbox() {
    document.getElementById('deerLightbox').style.display = 'none';
    document.body.classList.remove('dlb-open');
  }

  function initDeerLightbox() {
    var overlay = document.createElement('div');
    overlay.id = 'deerLightbox';
    overlay.className = 'dlb-overlay';
    overlay.style.display = 'none';
    overlay.innerHTML =
      '<div class="dlb-backdrop"></div>' +
      '<div class="dlb-frame">' +
        '<button class="dlb-close" aria-label="Close">&times;</button>' +
        '<img id="dlbImg" class="dlb-img" src="" alt="">' +
        '<div class="dlb-controls">' +
          '<button id="dlbPrev" class="dlb-prev" aria-label="Previous">&#8592;</button>' +
          '<div id="dlbCaption" class="dlb-caption"></div>' +
          '<button id="dlbNext" class="dlb-next" aria-label="Next">&#8594;</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    document.addEventListener('click', function (e) {
      var thumb = e.target.closest('.buck-photo');
      if (thumb) { openDeerLightbox(thumb.getAttribute('src')); return; }
      if (e.target.closest('.dlb-backdrop') || e.target.closest('.dlb-close')) { closeDeerLightbox(); return; }
      if (e.target.closest('#dlbPrev')) { if (dlbIndex > 0) { dlbIndex--; showDeerLightboxPhoto(); } return; }
      if (e.target.closest('#dlbNext')) { if (dlbIndex < dlbPhotos.length - 1) { dlbIndex++; showDeerLightboxPhoto(); } }
    });

    document.addEventListener('keydown', function (e) {
      if (overlay.style.display !== 'flex') { return; }
      if (e.key === 'ArrowLeft'  && dlbIndex > 0)                   { dlbIndex--; showDeerLightboxPhoto(); }
      if (e.key === 'ArrowRight' && dlbIndex < dlbPhotos.length - 1) { dlbIndex++; showDeerLightboxPhoto(); }
      if (e.key === 'Escape') { closeDeerLightbox(); }
    });
  }

  document.addEventListener('hunting:personchange', function (e) {
    render(e.detail.person);
  });

  initDeerLightbox();
  render('anyone');

}());
