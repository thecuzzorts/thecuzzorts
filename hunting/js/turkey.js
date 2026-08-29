/* ===================================================
   TheCuzzorts — Hunting: Turkey section
   Ported from /turkey-hunting's own app.js when that page was retired
   and folded into /hunting. Self-contained jQuery IIFE, independent of
   hunting/js/app.js's vanilla-JS module for the other categories -- the
   two never share state directly, though this listens for the
   'hunting:personchange' event app.js broadcasts from the single
   page-level #huntingPersonFilter (see applyPersonFilter() below) since
   Turkey has no filter UI of its own anymore. Lightbox class/id names
   are still prefixed (#turkeyLightbox, .tlb-*) to avoid colliding with
   hunting/js/app.js's own #huntingLightbox.
   =================================================== */

(function ($) {

  // ---- Dark-mode-aware unvisited-region colors -------
  // jVectorMap paints SVG fills at init time, so it can't react to a
  // CSS media query — read the effective theme once here instead
  // (an explicit toggle override in localStorage wins over the OS setting).
  var storedTheme = null;
  try { storedTheme = window.localStorage.getItem('theme'); } catch (e) {}
  var IS_DARK = storedTheme === 'dark' ||
    (storedTheme !== 'light' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  var UNVISITED_HEAT   = IS_DARK ? '#2a323b' : '#f0f2f5';
  var UNVISITED_PERSON = IS_DARK ? '#3a4550' : '#d0d4d8';

  // Met-slam chips are tinted with the person's color, same mix-toward-
  // white(light)/dark-surface(dark) approach as /disney's applyChipColors()
  // -- a pastel tint reads better than the raw brand hex directly as a
  // chip background. Same load-once-at-boot convention as the rest of
  // this file's dark-mode-aware colors (no live theme-change reactivity).
  function personChipColors(hex) {
    if (IS_DARK && hex === '#662684') { hex = '#AB88BB'; } // Sam's purple is too dark to mix legibly in dark mode
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    var base = IS_DARK ? [42, 50, 59] : [255, 255, 255];
    var bgPct = IS_DARK ? 0.22 : 0.14;
    var borderPct = IS_DARK ? 0.45 : 0.30;
    return {
      bg: 'rgb(' + Math.round(r*bgPct+base[0]*(1-bgPct)) + ',' + Math.round(g*bgPct+base[1]*(1-bgPct)) + ',' + Math.round(b*bgPct+base[2]*(1-bgPct)) + ')',
      border: 'rgb(' + Math.round(r*borderPct+base[0]*(1-borderPct)) + ',' + Math.round(g*borderPct+base[1]*(1-borderPct)) + ',' + Math.round(b*borderPct+base[2]*(1-borderPct)) + ')'
    };
  }

  // ---- People config --------------------------------
  var PEOPLE = [
    { id: 'josh',  name: 'Josh',  color: '#00AC4B',
      data: function () { return turkeysHarvestedJosh;  }, photos: function () { return turkeyPhotosJosh;  },
      harvests: function () { return (typeof turkeyHarvestsJosh !== 'undefined') ? turkeyHarvestsJosh : null; } },
    { id: 'sam',   name: 'Sam',   color: '#662684',
      data: function () { return turkeysHarvestedSam;   }, photos: function () { return turkeyPhotosSam;   },
      harvests: function () { return (typeof turkeyHarvestsSam !== 'undefined') ? turkeyHarvestsSam : null; } },
    { id: 'tilly', name: 'Tilly', color: '#0898ff',
      data: function () { return turkeysHarvestedTilly; }, photos: function () { return turkeyPhotosTilly; },
      harvests: function () { return (typeof turkeyHarvestsTilly !== 'undefined') ? turkeyHarvestsTilly : null; } }
  ];

  var FAMILY_COLOR = '#E8601A';
  var TOTAL_TURKEY_STATES = 49; // states with a huntable turkey population (Alaska excluded) — shared with SLAMS' US Super Slam target

  // ---- State name lookup ----------------------------
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

  // ---- Helpers --------------------------------------

  function sumHarvested(data) {
    return Object.keys(data).reduce(function (total, key) {
      var v = data[key];
      return total + (isNaN(v) ? 0 : Math.round(Number(v)));
    }, 0);
  }

  function findPerson(id) {
    for (var i = 0; i < PEOPLE.length; i++) { if (PEOPLE[i].id === id) return PEOPLE[i]; }
    return null;
  }

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function debounce(fn, delay) {
    var t;
    return function () { clearTimeout(t); t = setTimeout(fn, delay); };
  }

  function stateSort(a, b) { return (STATE_NAMES[a] || a).localeCompare(STATE_NAMES[b] || b); }

  // ---- List builder ---------------------------------

  function buildTurkeyListHTML(data) {
    var harvested = [];
    var hunted    = [];

    Object.keys(data).forEach(function (code) {
      var v = data[code];
      if (v >= 1)     harvested.push(code);
      else if (v > 0) hunted.push(code);
    });

    if (!harvested.length && !hunted.length) return '';

    harvested.sort(stateSort);
    hunted.sort(stateSort);

    var html = '<div class="visit-list">';

    if (harvested.length) {
      html += '<div class="turkey-group"><div class="turkey-group-label">Harvested</div><div class="visit-chips">';
      harvested.forEach(function (code) {
        html += '<span class="visit-chip">' + (STATE_NAMES[code] || code) + '</span>';
      });
      html += '</div></div>';
    }

    if (hunted.length) {
      html += '<div class="turkey-group"><div class="turkey-group-label">Hunted</div><div class="visit-chips">';
      hunted.forEach(function (code) {
        html += '<span class="visit-chip turkey-chip--hunted">' + (STATE_NAMES[code] || code) + '</span>';
      });
      html += '</div></div>';
    }

    return html + '</div>';
  }

  // ---- Pre-computed family data ---------------------
  var computed = {};

  function computeFamilyData() {
    var harvested = {};
    var hunted    = {};

    PEOPLE.forEach(function (p) {
      var d = p.data();
      Object.keys(d).forEach(function (k) {
        var v = Number(d[k]);
        harvested[k] = (harvested[k] || 0) + (Math.round(v) >= 1 ? 1 : 0);
        hunted[k]    = (hunted[k]    || 0) + (v > 0 ? 1 : 0);
      });
    });

    computed.harvested = harvested;
    computed.hunted    = hunted;
  }

  // ---- Count text per person ------------------------
  function getCount(personId) {
    if (personId === 'family') {
      var n = Object.keys(computed.harvested).reduce(function (s, k) {
        return s + (computed.harvested[k] >= 1 ? 1 : 0);
      }, 0);
      return n + ' / ' + TOTAL_TURKEY_STATES;
    }
    var p = findPerson(personId);
    return p ? sumHarvested(p.data()) + ' / ' + TOTAL_TURKEY_STATES : '';
  }

  // ---- Slam tracking ---------------------------------
  // NWTF "slams" — collecting harvests across recognized turkey
  // subspecies and/or locations. See nwtf.org for official criteria.
  var GRAND_REQS = [
    { label: 'Eastern',    match: function (r) { return r.subspecies === 'Eastern'    && r.country === 'USA'; } },
    { label: "Merriam's",  match: function (r) { return r.subspecies === "Merriam's"  && r.country === 'USA'; } },
    { label: 'Osceola',    match: function (r) { return r.subspecies === 'Osceola'    && r.country === 'USA'; } },
    { label: 'Rio Grande', match: function (r) { return r.subspecies === 'Rio Grande' && r.country === 'USA'; } }
  ];
  var GOULDS_REQ = { label: "Gould's", match: function (r) { return r.subspecies === "Gould's"; } }; // either USA or Mexico
  var OCELLATED_MEX_REQ = { label: 'Ocellated', match: function (r) { return r.subspecies === 'Ocellated' && r.country === 'Mexico'; } };

  var SLAMS = [
    { id: 'grand',    name: 'Grand Slam',    type: 'checklist', requirements: GRAND_REQS },
    { id: 'royal',    name: 'Royal Slam',    type: 'checklist', requirements: GRAND_REQS.concat([GOULDS_REQ]) },
    { id: 'world',    name: 'World Slam',    type: 'checklist', requirements: GRAND_REQS.concat([GOULDS_REQ, OCELLATED_MEX_REQ]) },
    { id: 'canadian', name: 'Canadian Slam', type: 'checklist', requirements: [
        { label: 'Eastern (Canada)',   match: function (r) { return r.subspecies === 'Eastern'   && r.country === 'Canada'; } },
        { label: "Merriam's (Canada)", match: function (r) { return r.subspecies === "Merriam's" && r.country === 'Canada'; } }
    ] },
    { id: 'mexican',  name: 'Mexican Slam',  type: 'checklist', requirements: [
        { label: 'Rio Grande (Mexico)', match: function (r) { return r.subspecies === 'Rio Grande' && r.country === 'Mexico'; } },
        { label: "Gould's (Mexico)",    match: function (r) { return r.subspecies === "Gould's"    && r.country === 'Mexico'; } },
        { label: 'Ocellated (Mexico)',  match: function (r) { return r.subspecies === 'Ocellated'  && r.country === 'Mexico'; } }
    ] },
    { id: 'super',    name: 'US Super Slam', type: 'state-count', target: TOTAL_TURKEY_STATES,
      match: function (r) { return r.country === 'USA'; } }
  ];

  function evaluateSlam(slam, harvests) {
    if (slam.type === 'checklist') {
      var items = slam.requirements.map(function (req) {
        return { label: req.label, met: harvests.some(req.match) };
      });
      var completedCount = items.filter(function (i) { return i.met; }).length;
      return { type: 'checklist', items: items, completedCount: completedCount,
               total: slam.requirements.length, complete: completedCount === slam.requirements.length };
    }
    var states = {};
    harvests.forEach(function (r) { if (slam.match(r)) states[r.state] = true; });
    var count = Object.keys(states).length;
    return { type: 'state-count', completedCount: count, total: slam.target, complete: count >= slam.target };
  }

  function computeSlamProgress(person) {
    var harvests = person.harvests ? person.harvests() : null;
    if (!harvests || !harvests.length) return [];
    var out = [];
    SLAMS.forEach(function (slam) {
      var result = evaluateSlam(slam, harvests);
      if (result.completedCount > 0) out.push({ slam: slam, result: result });
    });
    return out;
  }

  function buildSlamCardHTML(person, entry) {
    var slam = entry.slam, result = entry.result;
    var html = '<div class="slam-card' + (result.complete ? ' slam-card--complete' : '') + '">' +
      '<div class="slam-card-head">' +
        '<span class="slam-card-name">' + slam.name + '</span>' +
        '<span class="slam-card-count">' + result.completedCount + ' / ' + result.total + '</span>' +
      '</div>';

    if (result.type === 'checklist') {
      html += '<div class="slam-chips">';
      result.items.forEach(function (item) {
        html += '<span class="slam-chip' + (item.met ? ' slam-chip--met' : '') + '">' + item.label + '</span>';
      });
      html += '</div>';
    } else {
      var pct = Math.min(100, Math.round(result.completedCount / result.total * 100));
      html += '<div class="slam-bar"><div class="slam-bar-fill" style="width:' + pct + '%;background:' + person.color + '"></div></div>';
    }

    if (result.complete) html += '<span class="slam-badge">&#10003; Complete</span>';
    return html + '</div>';
  }

  // personId: 'family' shows everyone with progress; a specific id scopes
  // to just that person. Rebuilt on every filter change, not just at boot.
  function buildSlamsSection(personId) {
    var $container = $('#slamsContent');
    $container.empty();

    var people = personId === 'family' ? PEOPLE : PEOPLE.filter(function (p) { return p.id === personId; });

    var $grid = $('<div class="slams-grid"></div>');
    var any = false;

    people.forEach(function (p) {
      var progress = computeSlamProgress(p);
      if (!progress.length) return;
      any = true;
      var $col = $('<div class="slam-person-col"></div>');
      $col.append('<div class="person-gallery-header" style="--person-color:' + p.color + '">' + p.name + '</div>');
      // Overrides the same --chip-bg/--chip-border tokens .slam-chip--met
      // reads (with a var() fallback), scoped to this person's cards only
      // -- unmet chips use the separate --chip-unv-* tokens, so they're
      // untouched by this.
      var chipColors = personChipColors(p.color);
      var $cards = $('<div class="slam-cards" style="--chip-bg:' + chipColors.bg + ';--chip-border:' + chipColors.border + '"></div>');
      progress.forEach(function (entry) { $cards.append(buildSlamCardHTML(p, entry)); });
      $col.append($cards);
      $grid.append($col);
    });

    if (!any) { $container.append('<p class="slam-empty">No slam progress yet.</p>'); return; }
    $container.append($grid);
  }

  // ---- Build map card (DOM) -------------------------

  function buildMapCard() {
    var $card = $('#harvestsMapCard');

    $card.append(
      '<div class="map-view active" data-view="family">' +
        '<div class="map-container us-map"><div id="mapFamily" class="map"></div></div>' +
      '</div>'
    );

    PEOPLE.forEach(function (p) {
      $card.append(
        '<div class="map-view" data-view="' + p.id + '">' +
          '<div class="map-container us-map"><div id="map' + cap(p.id) + '" class="map"></div></div>' +
        '</div>'
      );
    });
  }

  // ---- Map instances + lazy init -------------------
  var mapInst  = {};
  var mapReady = {};

  // expanded: family's list starts open (the "everyone at a glance" view
  // is more useful shown by default); a single person's list starts
  // collapsed behind the toggle, same as before.
  function injectList(mapElId, listHTML, expanded) {
    if (!listHTML) return;
    var $container = $(mapElId).closest('.map-container');
    if ($container.next('.list-toggle').length) return;
    var $btn = $('<button class="list-toggle" aria-expanded="' + (expanded ? 'true' : 'false') + '">' +
      (expanded ? 'Hide list &#9652;' : 'Show list &#9662;') + '</button>').insertAfter($container);
    var $list = $(listHTML).insertAfter($btn);
    if (expanded) { $list.addClass('open'); }
  }

  function initMap(personId) {
    if (mapReady[personId]) {
      if (mapInst[personId]) { try { mapInst[personId].updateSize(); } catch (e) {} }
      return;
    }
    mapReady[personId] = true;

    var mapElId = '#map' + (personId === 'family' ? 'Family' : cap(personId));
    if (!$(mapElId).length) return;

    if (personId === 'family') {
      var listData = {};
      Object.keys(computed.harvested).forEach(function (k) {
        if (computed.harvested[k] >= 1)   listData[k] = 1;
        else if (computed.hunted[k] >= 1) listData[k] = 0.001;
        else                              listData[k] = 0;
      });

      $(mapElId).vectorMap({
        map: 'us_lcc',
        backgroundColor: '#1a2e3b',
        regionStyle: { initial: { fill: UNVISITED_HEAT } },
        series: { regions: [{ values: computed.harvested, scale: [UNVISITED_HEAT, FAMILY_COLOR], normalizeFunction: 'linear' }] },
        onRegionTipShow: function (_e, el, code) {
          var n = computed.harvested[code] || 0;
          var label = n === 1 ? '1 family member' : n + ' family members';
          var tip = '<strong>' + el.html() + '</strong>';
          if (n > 0) tip += '<br><span style="opacity:.8">Harvested by ' + label + '</span>';
          el.html(tip);
        }
      });

      mapInst[personId] = $(mapElId).vectorMap('get', 'mapObject');
      injectList(mapElId, buildTurkeyListHTML(listData), true);

    } else {
      var p = findPerson(personId);
      if (!p) return;
      var data = p.data();

      $(mapElId).vectorMap({
        map: 'us_lcc',
        backgroundColor: '#1a2e3b',
        regionStyle: { initial: { fill: UNVISITED_PERSON } },
        series: { regions: [{ values: data, scale: [UNVISITED_PERSON, p.color], normalizeFunction: 'polynomial' }] }
      });

      mapInst[personId] = $(mapElId).vectorMap('get', 'mapObject');
      injectList(mapElId, buildTurkeyListHTML(data));
    }
  }

  // ---- Gallery builder ------------------------------

  function buildPersonGalleryHTML(person, showHeader) {
    var photos = person.photos ? person.photos() : {};
    var codes  = Object.keys(photos).filter(function (k) { return photos[k] && photos[k].length; });
    if (!codes.length) return '';

    codes.sort(stateSort);

    var html = '<div class="person-gallery" data-person="' + person.id + '">';

    if (showHeader) {
      html += '<div class="person-gallery-header" style="--person-color:' + person.color + '">' + person.name + '</div>';
    }

    html += '<div class="photo-grid">';
    codes.forEach(function (code) {
      var stateName = STATE_NAMES[code] || code;
      photos[code].forEach(function (src) {
        html += '<div class="photo-item">' +
                '<img class="photo-thumb" src="' + src + '" ' +
                'data-person="' + person.id + '" data-src="' + src + '" ' +
                'alt="' + person.name + ' – ' + stateName + '" loading="lazy">' +
                '<div class="photo-caption">' + stateName + '</div>' +
                '</div>';
      });
    });
    html += '</div>';

    html += '</div>';
    return html;
  }

  function buildFamilyGalleryHTML() {
    var html = '<div class="family-gallery">';
    PEOPLE.forEach(function (p) {
      var photos = p.photos ? p.photos() : {};
      var codes  = Object.keys(photos).filter(function (k) { return photos[k] && photos[k].length; });
      if (!codes.length) return;

      var firstCode = codes[0]; // insertion order — controls which photo is the preview
      codes.sort(stateSort);

      var totalPhotos = 0;
      codes.forEach(function (k) { totalPhotos += photos[k].length; });
      var firstSrc  = photos[firstCode][0];
      var stateName = STATE_NAMES[firstCode] || firstCode;

      html += '<div class="family-person-col">' +
              '<div class="person-gallery-header" style="--person-color:' + p.color + '">' + p.name + '</div>' +
              '<div class="photo-item">' +
              '<img class="photo-thumb" src="' + firstSrc + '" ' +
              'data-person="' + p.id + '" data-src="' + firstSrc + '" ' +
              'alt="' + p.name + '" loading="lazy">' +
              '<div class="photo-caption">' + stateName + '</div>';

      if (totalPhotos > 1) {
        html += '<div class="photo-count-badge">' + totalPhotos + ' photos</div>';
      }

      html += '</div></div>';
    });
    return html + '</div>';
  }

  function buildGallery() {
    var $container = $('<div class="photos-gallery-card"></div>');

    // "Anyone" view — one featured photo per person
    $container.append(
      '<div class="gallery-view active" data-view="family">' +
      buildFamilyGalleryHTML() +
      '</div>'
    );

    // Per-person views — full 3-column grid
    PEOPLE.forEach(function (p) {
      $container.append(
        '<div class="gallery-view" data-view="' + p.id + '">' +
        buildPersonGalleryHTML(p, false) +
        '</div>'
      );
    });

    $('#photosGallery').append($container);
  }

  // ---- Lightbox -------------------------------------
  var lbPhotos = [];
  var lbIndex  = 0;

  function buildFlatPhotoList(person) {
    var photos = person.photos ? person.photos() : {};
    var codes  = Object.keys(photos).sort(stateSort);
    var list   = [];
    codes.forEach(function (code) {
      (photos[code] || []).forEach(function (src) {
        list.push({ src: src, caption: (STATE_NAMES[code] || code) + ' — ' + person.name });
      });
    });
    return list;
  }

  function showLightboxPhoto() {
    var item = lbPhotos[lbIndex];
    if (!item) return;
    $('#tlbImg').attr('src', item.src).attr('alt', item.caption);
    $('#tlbCaption').text(item.caption);
    $('#lbPrev').css('visibility', lbIndex > 0 ? 'visible' : 'hidden');
    $('#lbNext').css('visibility', lbIndex < lbPhotos.length - 1 ? 'visible' : 'hidden');
  }

  function openLightbox(personId, src) {
    var p = findPerson(personId);
    if (!p) return;
    lbPhotos = buildFlatPhotoList(p);
    lbIndex  = 0;
    for (var i = 0; i < lbPhotos.length; i++) {
      if (lbPhotos[i].src === src) { lbIndex = i; break; }
    }
    showLightboxPhoto();
    $('#turkeyLightbox').fadeIn(150);
    $('body').addClass('tlb-open');
  }

  function closeLightbox() {
    $('#turkeyLightbox').fadeOut(150);
    $('body').removeClass('tlb-open');
  }

  function initLightbox() {
    $('body').append(
      '<div id="turkeyLightbox" class="tlb-overlay" style="display:none">' +
        '<div class="tlb-backdrop"></div>' +
        '<div class="tlb-frame">' +
          '<button class="tlb-close" aria-label="Close">&times;</button>' +
          '<img id="tlbImg" class="tlb-img" src="" alt="">' +
          '<div class="tlb-controls">' +
            '<button class="tlb-prev" aria-label="Previous">&#8592;</button>' +
            '<div id="tlbCaption" class="tlb-caption"></div>' +
            '<button class="tlb-next" aria-label="Next">&#8594;</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );

    $(document).on('click', '.photo-thumb', function () {
      openLightbox($(this).data('person'), $(this).data('src'));
    });

    $(document).on('click', '.tlb-backdrop, .tlb-close', closeLightbox);

    $(document).on('click', '.tlb-prev', function () {
      if (lbIndex > 0) { lbIndex--; showLightboxPhoto(); }
    });

    $(document).on('click', '.tlb-next', function () {
      if (lbIndex < lbPhotos.length - 1) { lbIndex++; showLightboxPhoto(); }
    });

    $(document).on('keydown', function (e) {
      if (!$('#turkeyLightbox').is(':visible')) return;
      if (e.key === 'ArrowLeft'  && lbIndex > 0)                      { lbIndex--; showLightboxPhoto(); }
      if (e.key === 'ArrowRight' && lbIndex < lbPhotos.length - 1)   { lbIndex++; showLightboxPhoto(); }
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // ---- Person filter -- driven by the page-level filter ----------------
  // Turkey has no filter UI of its own; hunting/js/app.js's single
  // #huntingPersonFilter (Anyone/Josh/Sam/Tilly) governs the whole page and
  // broadcasts a 'hunting:personchange' event on document, which this
  // section (and hunting/js/deer.js) listen for. 'anyone' maps to Turkey's
  // internal 'family' id -- everything else lowercases straight through.
  function toTurkeyId(pageValue) {
    return pageValue === 'anyone' ? 'family' : pageValue.toLowerCase();
  }

  function applyPersonFilter(pageValue) {
    var person = toTurkeyId(pageValue);

    $('#harvestsMapCard .map-view').removeClass('active');
    $('#harvestsMapCard .map-view[data-view="' + person + '"]').addClass('active');

    $('#photosGallery .gallery-view').removeClass('active');
    $('#photosGallery .gallery-view[data-view="' + person + '"]').addClass('active');

    initMap(person);
    buildSlamsSection(person);

    var countEl = document.getElementById('turkeyCategoryCount');
    if (countEl) { countEl.textContent = getCount(person) + ' states harvested'; }
  }

  function initPersonFilterSync() {
    document.addEventListener('hunting:personchange', function (e) {
      applyPersonFilter(e.detail.person);
    });
  }

  // ---- List toggles ---------------------------------
  function initListToggles() {
    $(document).on('click', '.list-toggle', function () {
      var $btn  = $(this);
      var $list = $btn.next('.visit-list');
      var open  = $list.hasClass('open');
      $list.toggleClass('open', !open);
      $btn.attr('aria-expanded', String(!open));
      $btn.html(open ? 'Show list &#9662;' : 'Hide list &#9652;');
    });
  }

  // ---- Window resize --------------------------------
  function initResize() {
    $(window).on('resize', debounce(function () {
      Object.keys(mapInst).forEach(function (key) {
        if (mapInst[key]) { try { mapInst[key].updateSize(); } catch (e) {} }
      });
    }, 150));
  }

  // ---- Boot -----------------------------------------
  $(document).ready(function () {
    computeFamilyData();
    buildMapCard();
    buildGallery();
    initLightbox();

    initPersonFilterSync();
    initListToggles();
    initResize();

    applyPersonFilter('anyone');
  });

}(jQuery));
