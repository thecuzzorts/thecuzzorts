/* ===================================================
   TheCuzzorts — Turkey Hunting app.js
   =================================================== */

(function ($) {

  // ---- People config --------------------------------
  var PEOPLE = [
    { id: 'josh',  name: 'Josh',  color: '#00AC4B', data: function () { return turkeysHarvestedJosh;  }, photos: function () { return turkeyPhotosJosh;  } },
    { id: 'sam',   name: 'Sam',   color: '#662684', data: function () { return turkeysHarvestedSam;   }, photos: function () { return turkeyPhotosSam;   } },
    { id: 'tilly', name: 'Tilly', color: '#0898ff', data: function () { return turkeysHarvestedTilly; }, photos: function () { return turkeyPhotosTilly; } }
  ];

  var FAMILY_COLOR = '#E8601A';

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
      return n + ' / 49';
    }
    var p = findPerson(personId);
    return p ? sumHarvested(p.data()) + ' / 49' : '';
  }

  // ---- Build filter row + map card (DOM) -----------

  function buildFilterRow() {
    var $row = $('#harvestsFilters');

    var $all = $('<button class="person-filter active" data-person="family"></button>');
    $all[0].style.setProperty('--filter-color', FAMILY_COLOR);
    $all.append('<span class="filter-name">All</span>');
    $all.append('<span class="filter-count">' + getCount('family') + '</span>');
    $row.append($all);

    PEOPLE.forEach(function (p) {
      var $btn = $('<button class="person-filter" data-person="' + p.id + '"></button>');
      $btn[0].style.setProperty('--filter-color', p.color);
      $btn.append('<span class="filter-name">' + p.name + '</span>');
      $btn.append('<span class="filter-count">' + getCount(p.id) + '</span>');
      $row.append($btn);
    });
  }

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

  function injectList(mapElId, listHTML) {
    if (!listHTML) return;
    var $container = $(mapElId).closest('.map-container');
    if ($container.next('.list-toggle').length) return;
    $('<button class="list-toggle" aria-expanded="false">Show list &#9662;</button>').insertAfter($container);
    $(listHTML).insertAfter($container.next('.list-toggle'));
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
        series: { regions: [{ values: computed.harvested, scale: ['#f0f2f5', FAMILY_COLOR], normalizeFunction: 'linear' }] },
        onRegionTipShow: function (_e, el, code) {
          var n = computed.harvested[code] || 0;
          var label = n === 1 ? '1 family member' : n + ' family members';
          var tip = '<strong>' + el.html() + '</strong>';
          if (n > 0) tip += '<br><span style="opacity:.8">Harvested by ' + label + '</span>';
          el.html(tip);
        }
      });

      mapInst[personId] = $(mapElId).vectorMap('get', 'mapObject');
      injectList(mapElId, buildTurkeyListHTML(listData));

    } else {
      var p = findPerson(personId);
      if (!p) return;
      var data = p.data();

      $(mapElId).vectorMap({
        map: 'us_lcc',
        backgroundColor: '#1a2e3b',
        series: { regions: [{ values: data, scale: ['#d0d4d8', p.color], normalizeFunction: 'polynomial' }] }
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

    // "All" view — one featured photo per person
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
    $('#lbImg').attr('src', item.src).attr('alt', item.caption);
    $('#lbCaption').text(item.caption);
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
    $('#photoLightbox').fadeIn(150);
    $('body').addClass('lb-open');
  }

  function closeLightbox() {
    $('#photoLightbox').fadeOut(150);
    $('body').removeClass('lb-open');
  }

  function initLightbox() {
    $('body').append(
      '<div id="photoLightbox" class="lb-overlay" style="display:none">' +
        '<div class="lb-backdrop"></div>' +
        '<div class="lb-frame">' +
          '<button class="lb-close" aria-label="Close">&times;</button>' +
          '<button class="lb-prev" aria-label="Previous">&#8249;</button>' +
          '<img id="lbImg" class="lb-img" src="" alt="">' +
          '<button class="lb-next" aria-label="Next">&#8250;</button>' +
          '<div id="lbCaption" class="lb-caption"></div>' +
        '</div>' +
      '</div>'
    );

    $(document).on('click', '.photo-thumb', function () {
      openLightbox($(this).data('person'), $(this).data('src'));
    });

    $(document).on('click', '.lb-backdrop, .lb-close', closeLightbox);

    $(document).on('click', '.lb-prev', function () {
      if (lbIndex > 0) { lbIndex--; showLightboxPhoto(); }
    });

    $(document).on('click', '.lb-next', function () {
      if (lbIndex < lbPhotos.length - 1) { lbIndex++; showLightboxPhoto(); }
    });

    $(document).on('keydown', function (e) {
      if (!$('#photoLightbox').is(':visible')) return;
      if (e.key === 'ArrowLeft'  && lbIndex > 0)                      { lbIndex--; showLightboxPhoto(); }
      if (e.key === 'ArrowRight' && lbIndex < lbPhotos.length - 1)   { lbIndex++; showLightboxPhoto(); }
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // ---- Filter clicks --------------------------------
  function initFilters() {
    $(document).on('click', '.person-filter', function () {
      var $btn   = $(this);
      var person = $btn.data('person');

      $('#harvestsFilters .person-filter').removeClass('active');
      $btn.addClass('active');

      $('#harvests .map-view').removeClass('active');
      $('#harvests .map-view[data-view="' + person + '"]').addClass('active');

      $('#photos .gallery-view').removeClass('active');
      $('#photos .gallery-view[data-view="' + person + '"]').addClass('active');

      setTimeout(function () { initMap(person); }, 0);
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
    buildFilterRow();
    buildMapCard();

    initMap('family');

    buildGallery();
    initLightbox();

    initFilters();
    initListToggles();
    initResize();

    var yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

}(jQuery));
