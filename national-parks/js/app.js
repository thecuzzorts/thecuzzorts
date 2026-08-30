/* ===================================================
   TheCuzzorts National Parks — app.js
   =================================================== */

(function () {

  // ---- Dark-mode-aware map tiles ---------------------
  // Leaflet paints tiles at init time, so it can't react to a CSS media
  // query — read the effective theme once here instead (an explicit
  // toggle override in localStorage wins over the OS setting).
  function computeIsDark() {
    var stored = null;
    try { stored = window.localStorage.getItem('theme'); } catch (e) {}
    return stored === 'dark' ||
      (stored !== 'light' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  var IS_DARK = computeIsDark();

  // ---- People config --------------------------------
  var PEOPLE = [
    { id: 'josh',  name: 'Josh',  color: '#00AC4B' },
    { id: 'sam',   name: 'Sam',   color: '#662684' },
    { id: 'ellie', name: 'Ellie', color: '#66b2b2' },
    { id: 'tilly', name: 'Tilly', color: '#0898ff' },
    { id: 'poppy', name: 'Poppy', color: '#d9259a' }
  ];

  // ---- All 63 US National Parks by region -----------
  var PARKS_REGIONS = [
    {
      region: 'Northeast',
      parks: [
        { id: 'acadia', name: 'Acadia', state: 'Maine', lat: 44.3386, lng: -68.2733 }
      ]
    },
    {
      region: 'Mid-Atlantic & Southeast',
      parks: [
        { id: 'hot-springs',           name: 'Hot Springs',           state: 'Arkansas',                   lat: 34.5217, lng:  -93.0432 },
        { id: 'mammoth-cave',          name: 'Mammoth Cave',          state: 'Kentucky',                   lat: 37.1867, lng:  -86.1325 },
        { id: 'great-smoky-mountains', name: 'Great Smoky Mountains', state: 'Tennessee / North Carolina', lat: 35.6532, lng:  -83.5070 },
        { id: 'shenandoah',            name: 'Shenandoah',            state: 'Virginia',                   lat: 38.4755, lng:  -78.4534 },
        { id: 'new-river-gorge',       name: 'New River Gorge',       state: 'West Virginia',              lat: 37.8368, lng:  -81.0899 },
        { id: 'congaree',              name: 'Congaree',              state: 'South Carolina',             lat: 33.7948, lng:  -80.7821 }
      ]
    },
    {
      region: 'Florida',
      parks: [
        { id: 'biscayne',     name: 'Biscayne',     state: 'Florida', lat: 25.4839, lng: -80.4300 },
        { id: 'dry-tortugas', name: 'Dry Tortugas', state: 'Florida', lat: 24.6285, lng: -82.8733 },
        { id: 'everglades',   name: 'Everglades',   state: 'Florida', lat: 25.2866, lng: -80.8987 }
      ]
    },
    {
      region: 'Midwest',
      parks: [
        { id: 'gateway-arch',       name: 'Gateway Arch',       state: 'Missouri',     lat: 38.6247, lng:  -90.1848 },
        { id: 'cuyahoga-valley',    name: 'Cuyahoga Valley',    state: 'Ohio',         lat: 41.2808, lng:  -81.5678 },
        { id: 'indiana-dunes',      name: 'Indiana Dunes',      state: 'Indiana',      lat: 41.6533, lng:  -87.0524 },
        { id: 'isle-royale',        name: 'Isle Royale',        state: 'Michigan',     lat: 48.0000, lng:  -88.8333 },
        { id: 'voyageurs',          name: 'Voyageurs',          state: 'Minnesota',    lat: 48.4839, lng:  -92.8385 },
        { id: 'theodore-roosevelt', name: 'Theodore Roosevelt', state: 'North Dakota', lat: 46.9797, lng: -103.5387 },
        { id: 'badlands',           name: 'Badlands',           state: 'South Dakota', lat: 43.8554, lng: -102.3397 },
        { id: 'wind-cave',          name: 'Wind Cave',          state: 'South Dakota', lat: 43.5640, lng: -103.4783 }
      ]
    },
    {
      region: 'Texas & Southwest',
      parks: [
        { id: 'big-bend',            name: 'Big Bend',            state: 'Texas',      lat: 29.2498, lng: -103.2502 },
        { id: 'guadalupe-mountains', name: 'Guadalupe Mountains', state: 'Texas',      lat: 31.9232, lng: -104.8720 },
        { id: 'carlsbad-caverns',    name: 'Carlsbad Caverns',    state: 'New Mexico', lat: 32.1479, lng: -104.5567 },
        { id: 'white-sands',         name: 'White Sands',         state: 'New Mexico', lat: 32.7872, lng: -106.3254 }
      ]
    },
    {
      region: 'Rocky Mountain',
      parks: [
        { id: 'rocky-mountain',   name: 'Rocky Mountain',               state: 'Colorado', lat: 40.3428, lng: -105.6836 },
        { id: 'great-sand-dunes', name: 'Great Sand Dunes',             state: 'Colorado', lat: 37.7929, lng: -105.5943 },
        { id: 'black-canyon',     name: 'Black Canyon of the Gunnison', state: 'Colorado', lat: 38.5754, lng: -107.7416 },
        { id: 'mesa-verde',       name: 'Mesa Verde',                   state: 'Colorado', lat: 37.2309, lng: -108.4618 },
        { id: 'glacier',          name: 'Glacier',                      state: 'Montana',  lat: 48.7596, lng: -113.7870 },
        { id: 'grand-teton',      name: 'Grand Teton',                  state: 'Wyoming',  lat: 43.7904, lng: -110.6818 },
        { id: 'yellowstone',      name: 'Yellowstone',                  state: 'Wyoming',  lat: 44.4280, lng: -110.5885 }
      ]
    },
    {
      region: 'Desert Southwest',
      parks: [
        { id: 'grand-canyon',     name: 'Grand Canyon',     state: 'Arizona',             lat: 36.1069, lng: -112.1129 },
        { id: 'petrified-forest', name: 'Petrified Forest', state: 'Arizona',             lat: 35.0656, lng: -109.7792 },
        { id: 'saguaro',          name: 'Saguaro',          state: 'Arizona',             lat: 32.2967, lng: -111.1666 },
        { id: 'arches',           name: 'Arches',           state: 'Utah',                lat: 38.7331, lng: -109.5925 },
        { id: 'bryce-canyon',     name: 'Bryce Canyon',     state: 'Utah',                lat: 37.5930, lng: -112.1871 },
        { id: 'canyonlands',      name: 'Canyonlands',      state: 'Utah',                lat: 38.2000, lng: -109.9300 },
        { id: 'capitol-reef',     name: 'Capitol Reef',     state: 'Utah',                lat: 38.0877, lng: -111.1429 },
        { id: 'zion',             name: 'Zion',             state: 'Utah',                lat: 37.2982, lng: -113.0263 },
        { id: 'great-basin',      name: 'Great Basin',      state: 'Nevada',              lat: 38.9266, lng: -114.2632 },
        { id: 'death-valley',     name: 'Death Valley',     state: 'California / Nevada', lat: 36.5054, lng: -117.0794 }
      ]
    },
    {
      region: 'California',
      parks: [
        { id: 'channel-islands', name: 'Channel Islands', state: 'California', lat: 34.0069, lng: -119.7785 },
        { id: 'joshua-tree',     name: 'Joshua Tree',     state: 'California', lat: 33.8734, lng: -115.9010 },
        { id: 'kings-canyon',    name: 'Kings Canyon',    state: 'California', lat: 36.8879, lng: -118.5551 },
        { id: 'lassen-volcanic', name: 'Lassen Volcanic', state: 'California', lat: 40.4977, lng: -121.4207 },
        { id: 'pinnacles',       name: 'Pinnacles',       state: 'California', lat: 36.4906, lng: -121.1825 },
        { id: 'redwood',         name: 'Redwood',         state: 'California', lat: 41.2132, lng: -124.0046 },
        { id: 'sequoia',         name: 'Sequoia',         state: 'California', lat: 36.4864, lng: -118.5658 },
        { id: 'yosemite',        name: 'Yosemite',        state: 'California', lat: 37.8651, lng: -119.5383 }
      ]
    },
    {
      region: 'Pacific Northwest',
      parks: [
        { id: 'crater-lake',    name: 'Crater Lake',    state: 'Oregon',     lat: 42.8684, lng: -122.1685 },
        { id: 'mount-rainier',  name: 'Mount Rainier',  state: 'Washington', lat: 46.8800, lng: -121.7269 },
        { id: 'north-cascades', name: 'North Cascades', state: 'Washington', lat: 48.7718, lng: -121.2985 },
        { id: 'olympic',        name: 'Olympic',        state: 'Washington', lat: 47.8021, lng: -123.6044 }
      ]
    },
    {
      region: 'Alaska',
      parks: [
        { id: 'denali',              name: 'Denali',              state: 'Alaska', lat: 63.1148, lng: -151.1926 },
        { id: 'gates-of-the-arctic', name: 'Gates of the Arctic', state: 'Alaska', lat: 67.7818, lng: -153.3001 },
        { id: 'glacier-bay',         name: 'Glacier Bay',         state: 'Alaska', lat: 58.6658, lng: -136.9000 },
        { id: 'katmai',              name: 'Katmai',              state: 'Alaska', lat: 58.5007, lng: -154.9723 },
        { id: 'kenai-fjords',        name: 'Kenai Fjords',        state: 'Alaska', lat: 59.9209, lng: -150.3390 },
        { id: 'kobuk-valley',        name: 'Kobuk Valley',        state: 'Alaska', lat: 67.3340, lng: -159.1230 },
        { id: 'lake-clark',          name: 'Lake Clark',          state: 'Alaska', lat: 60.4126, lng: -153.4176 },
        { id: 'wrangell-st-elias',   name: 'Wrangell-St. Elias', state: 'Alaska', lat: 61.7105, lng: -142.9855 }
      ]
    },
    {
      region: 'Hawaii & Territories',
      parks: [
        { id: 'haleakala',        name: 'Haleakal\u0101',          state: 'Hawaii',            lat:  20.7204, lng: -156.1552 },
        { id: 'hawaii-volcanoes', name: 'Hawai\u02BBi Volcanoes',  state: 'Hawaii',            lat:  19.4194, lng: -155.2885 },
        { id: 'american-samoa',   name: 'American Samoa',          state: 'American Samoa',    lat: -14.2500, lng: -170.7500 },
        { id: 'virgin-islands',   name: 'Virgin Islands',          state: 'US Virgin Islands', lat:  18.3444, lng:  -64.7272 }
      ]
    }
  ];

  var TOTAL_PARKS = 63;

  // ---- Load person data from global vars ------------
  function getPersonData(id) {
    var visitedMap = {
      josh:  typeof parksVisitedJosh  !== 'undefined' ? parksVisitedJosh  : {},
      sam:   typeof parksVisitedSam   !== 'undefined' ? parksVisitedSam   : {},
      ellie: typeof parksVisitedEllie !== 'undefined' ? parksVisitedEllie : {},
      tilly: typeof parksVisitedTilly !== 'undefined' ? parksVisitedTilly : {},
      poppy: typeof parksVisitedPoppy !== 'undefined' ? parksVisitedPoppy : {}
    };
    var detailsMap = {
      josh:  typeof parksDetailsJosh  !== 'undefined' ? parksDetailsJosh  : {},
      sam:   typeof parksDetailsSam   !== 'undefined' ? parksDetailsSam   : {},
      ellie: typeof parksDetailsEllie !== 'undefined' ? parksDetailsEllie : {},
      tilly: typeof parksDetailsTilly !== 'undefined' ? parksDetailsTilly : {},
      poppy: typeof parksDetailsPoppy !== 'undefined' ? parksDetailsPoppy : {}
    };
    return { visited: visitedMap[id] || {}, details: detailsMap[id] || {} };
  }

  // ---- Count visited parks --------------------------
  function countVisited(visited) {
    return Object.keys(visited).filter(function (k) { return visited[k]; }).length;
  }

  // ---- Build tooltip attribute ----------------------
  function chipTooltip(detail) {
    if (!detail) return '';
    var parts = [];
    if (detail.date) parts.push(detail.date);
    if (detail.notes) parts.push(detail.notes);
    return parts.length
      ? ' data-tooltip="' + parts.join(' \u2014 ').replace(/"/g, '&quot;') + '"'
      : '';
  }

  // ---- Build person chip list HTML ------------------
  function buildParkListHTML(visited, details) {
    details = details || {};
    var hasAny = Object.keys(visited).some(function (k) { return visited[k]; });
    if (!hasAny) {
      return '<div class="visit-list"><p class="no-visits">No parks visited yet.</p></div>';
    }

    var html = '<div class="visit-list">';
    PARKS_REGIONS.forEach(function (regionObj) {
      var regionParks = regionObj.parks.filter(function (p) { return visited[p.id]; });
      if (regionParks.length === 0) return;
      html += '<div class="region-group">';
      html += '<div class="region-label">' + regionObj.region + '</div>';
      html += '<div class="visit-chips">';
      regionParks.forEach(function (p) {
        var tip = chipTooltip(details[p.id]);
        html += '<span class="visit-chip"' + tip + '>' + p.name + '</span>';
      });
      html += '</div></div>';
    });
    html += '</div>';
    return html;
  }

  // ---- Build family combined chip list --------------
  function buildFamilyListHTML() {
    var combined = {}; // parkId → array of { name, color }
    PEOPLE.forEach(function (person) {
      var data = getPersonData(person.id);
      Object.keys(data.visited).forEach(function (parkId) {
        if (data.visited[parkId]) {
          if (!combined[parkId]) combined[parkId] = [];
          combined[parkId].push({ name: person.name, color: person.color });
        }
      });
    });

    var hasAny = Object.keys(combined).length > 0;
    if (!hasAny) {
      return '<div class="visit-list"><p class="no-visits">No parks visited yet.</p></div>';
    }

    var html = '<div class="visit-list">';
    PARKS_REGIONS.forEach(function (regionObj) {
      var regionParks = regionObj.parks.filter(function (p) { return combined[p.id]; });
      if (regionParks.length === 0) return;
      html += '<div class="region-group">';
      html += '<div class="region-label">' + regionObj.region + '</div>';
      html += '<div class="visit-chips">';
      regionParks.forEach(function (p) {
        var visitors = combined[p.id];
        var dots = visitors.map(function (v) {
          return '<span class="person-dot" style="background:' + v.color + '" title="' + v.name + '"></span>';
        }).join('');
        html += '<span class="visit-chip">' + p.name + ' ' + dots + '</span>';
      });
      html += '</div></div>';
    });
    html += '</div>';
    return html;
  }

  // ---- Count parks visited by any / all family members -
  function countFamilyVisited() {
    var seen = {};
    PEOPLE.forEach(function (person) {
      var data = getPersonData(person.id);
      Object.keys(data.visited).forEach(function (k) {
        if (data.visited[k]) seen[k] = true;
      });
    });
    return Object.keys(seen).length;
  }

  function countWholeFamilyVisited() {
    return PARKS_REGIONS.reduce(function (total, regionObj) {
      return total + regionObj.parks.filter(function (p) {
        return PEOPLE.every(function (person) {
          return getPersonData(person.id).visited[p.id];
        });
      }).length;
    }, 0);
  }

  function buildWholeFamilyListHTML() {
    var html = '<div class="visit-list">';
    var hasAny = false;
    PARKS_REGIONS.forEach(function (regionObj) {
      var parks = regionObj.parks.filter(function (p) {
        return PEOPLE.every(function (person) {
          return getPersonData(person.id).visited[p.id];
        });
      });
      if (parks.length === 0) return;
      hasAny = true;
      html += '<div class="region-group">';
      html += '<div class="region-label">' + regionObj.region + '</div>';
      html += '<div class="visit-chips">';
      parks.forEach(function (p) {
        html += '<span class="visit-chip">' + p.name + '</span>';
      });
      html += '</div></div>';
    });
    html += '</div>';
    return hasAny
      ? html
      : '<div class="visit-list"><p class="no-visits">No parks visited by everyone yet.</p></div>';
  }

  // ---- Build unvisited (bucket list) HTML — per person --
  function buildUnvisitedListHTML(visited) {
    var html = '<div class="visit-list">';
    var hasAny = false;
    PARKS_REGIONS.forEach(function (regionObj) {
      var unvisited = regionObj.parks.filter(function (p) { return !visited[p.id]; });
      if (unvisited.length === 0) return;
      hasAny = true;
      html += '<div class="region-group">';
      html += '<div class="region-label">' + regionObj.region + '</div>';
      html += '<div class="visit-chips">';
      unvisited.forEach(function (p) {
        html += '<span class="visit-chip visit-chip--unvisited">' + p.name + '</span>';
      });
      html += '</div></div>';
    });
    html += '</div>';
    return hasAny ? html : '';
  }

  // ---- Build bucket list — parks not yet visited by the whole family --
  function notVisitedByWholeFamily(p) {
    return !PEOPLE.every(function (person) {
      return getPersonData(person.id).visited[p.id];
    });
  }

  function buildBucketListHTML() {
    var html = '<div class="visit-list open">';
    var hasAny = false;
    PARKS_REGIONS.forEach(function (regionObj) {
      var bucket = regionObj.parks.filter(notVisitedByWholeFamily);
      if (bucket.length === 0) return;
      hasAny = true;
      html += '<div class="region-group">';
      html += '<div class="region-label">' + regionObj.region + '</div>';
      html += '<div class="visit-chips">';
      bucket.forEach(function (p) {
        html += '<span class="visit-chip visit-chip--unvisited">' + p.name + '</span>';
      });
      html += '</div></div>';
    });
    html += '</div>';
    return hasAny ? html : '';
  }

  function countBucketList() {
    return PARKS_REGIONS.reduce(function (total, regionObj) {
      return total + regionObj.parks.filter(notVisitedByWholeFamily).length;
    }, 0);
  }

  // Whole-family total (every person has visited -- the complement of
  // countBucketList's "not visited by whole family" set), matching the
  // homepage quick-stat's existing "All" semantics for this same number
  // (see index.html's qs-parks comment) -- not the "Anyone" union.
  function familyVisitedCount() {
    return TOTAL_PARKS - countBucketList();
  }

  // Drives the page-top stats-strip -- reacts to whichever of the 7
  // filter values (whole-family/anyone/josh/sam/ellie/tilly/poppy) is
  // currently active, same as /hunting's stats-strip already does for
  // its own single-filter setup.
  function visitedCountForFilter(filterValue) {
    if (filterValue === 'whole-family') { return familyVisitedCount(); }
    if (filterValue === 'anyone') {
      var visited = {};
      PEOPLE.forEach(function (p) {
        var v = getPersonData(p.id).visited;
        Object.keys(v).forEach(function (k) { if (v[k]) visited[k] = true; });
      });
      return Object.keys(visited).length;
    }
    var data = getPersonData(filterValue);
    return data ? countVisited(data.visited) : 0;
  }

  function updateStatsStrip(filterValue) {
    var visitedTotal = visitedCountForFilter(filterValue);
    var visitedEl = document.getElementById('parksVisitedTotal');
    var remainingEl = document.getElementById('parksRemainingTotal');
    if (visitedEl) { visitedEl.textContent = visitedTotal; }
    if (remainingEl) { remainingEl.textContent = TOTAL_PARKS - visitedTotal; }
  }

  function buildBucketForFilter(filterValue) {
    if (filterValue === 'whole-family') { return buildBucketListHTML(); }
    var visited;
    if (filterValue === 'anyone') {
      visited = {};
      PEOPLE.forEach(function (p) {
        var v = getPersonData(p.id).visited;
        Object.keys(v).forEach(function (k) { if (v[k]) visited[k] = true; });
      });
    } else {
      var data = getPersonData(filterValue);
      if (!data) return '';
      visited = data.visited;
    }
    return buildUnvisitedListHTML(visited);
  }

  function countBucketForFilter(filterValue) {
    if (filterValue === 'whole-family') { return countBucketList(); }
    var visited;
    if (filterValue === 'anyone') {
      visited = {};
      PEOPLE.forEach(function (p) {
        var v = getPersonData(p.id).visited;
        Object.keys(v).forEach(function (k) { if (v[k]) visited[k] = true; });
      });
    } else {
      var data = getPersonData(filterValue);
      if (!data) return 0;
      visited = data.visited;
    }
    return PARKS_REGIONS.reduce(function (t, r) {
      return t + r.parks.filter(function (p) { return !visited[p.id]; }).length;
    }, 0);
  }

  function updateBucketList(filterValue) {
    var bucketCard = document.getElementById('bucket-card');
    if (!bucketCard) return;
    var existing = bucketCard.querySelector('.visit-list');
    var html = buildBucketForFilter(filterValue);
    if (html) {
      var wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      var newList = wrapper.firstChild;
      if (newList) {
        newList.classList.add('open');
        if (existing) bucketCard.replaceChild(newList, existing);
        else bucketCard.appendChild(newList);
      }
    } else if (existing) {
      bucketCard.removeChild(existing);
    }
    setHeadingCount('bucket', countBucketForFilter(filterValue) + ' / ' + TOTAL_PARKS);
  }

  // ---- Parks filter row + card ----------------------
  var ANYONE_COLOR       = '#E8A020';
  var WHOLE_FAMILY_COLOR = '#E8601A';

  var filterColors = { 'whole-family': WHOLE_FAMILY_COLOR, 'anyone': ANYONE_COLOR };
  PEOPLE.forEach(function (p) { filterColors[p.id] = p.color; });

  // Remembered so the theme-change listener below can recompute the same
  // chip tint after a manual light/dark toggle, without a page reload.
  var currentChipFilter = 'whole-family';

  function applyChipColors(filterValue) {
    currentChipFilter = filterValue;
    updateStatsStrip(filterValue);
    var card = document.getElementById('parksCard');
    if (!card) return;
    var hex = filterColors[filterValue] || '#8a9aaa';
    // Sam's brand purple is already very dark — mixed toward the dark
    // surface tone below it barely lightens at all, producing a muddy,
    // low-contrast chip. Use the lightened on-dark variant as the mix
    // source instead (same hue, same one used for Sam's other dark-mode
    // text/border spots).
    if (IS_DARK && filterValue === 'sam') { hex = '#AB88BB'; }
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    // Mix the accent toward white in light mode, toward the dark surface
    // tone in dark mode — mixing toward white unconditionally produced a
    // bright pastel chip that had poor contrast on a dark page.
    var base = IS_DARK ? [42, 50, 59] : [255, 255, 255];
    var bgPct = IS_DARK ? 0.22 : 0.14;
    var borderPct = IS_DARK ? 0.45 : 0.30;
    card.style.setProperty('--chip-bg',
      'rgb(' + Math.round(r*bgPct+base[0]*(1-bgPct)) + ',' + Math.round(g*bgPct+base[1]*(1-bgPct)) + ',' + Math.round(b*bgPct+base[2]*(1-bgPct)) + ')');
    card.style.setProperty('--chip-border',
      'rgb(' + Math.round(r*borderPct+base[0]*(1-borderPct)) + ',' + Math.round(g*borderPct+base[1]*(1-borderPct)) + ',' + Math.round(b*borderPct+base[2]*(1-borderPct)) + ')');
  }

  // The chip tint above is painted via inline styles, so — unlike the
  // CSS var(--token) driven chrome/cards — it won't update on its own
  // when the manual toggle (js/site-nav.js) flips [data-theme]. Recompute
  // it on that signal instead of requiring a page reload.
  window.addEventListener('cuzz-theme-change', function () {
    IS_DARK = computeIsDark();
    applyChipColors(currentChipFilter);
  });

  function buildParksFilterRow() {
    var container = document.getElementById('parksFilters');
    if (!container) return;

    function makeBtn(viewId, label, color, count, isActive) {
      var btn = document.createElement('button');
      btn.className = 'person-filter' + (isActive ? ' active' : '');
      btn.setAttribute('data-view', viewId);
      btn.style.setProperty('--filter-color', color);
      btn.innerHTML =
        '<span class="filter-name">' + label + '</span>' +
        '<span class="filter-count">' + count + ' / ' + TOTAL_PARKS + '</span>';
      container.appendChild(btn);
    }

    makeBtn('whole-family', 'All',    WHOLE_FAMILY_COLOR, countWholeFamilyVisited(), true);
    makeBtn('anyone',       'Anyone', ANYONE_COLOR,       countFamilyVisited(),      false);
    PEOPLE.forEach(function (p) {
      makeBtn(p.id, p.name, p.color, countVisited(getPersonData(p.id).visited), false);
    });
  }

  function buildParksCard() {
    var card = document.getElementById('parksCard');
    if (!card) return;

    function addView(viewId, listHTML, isActive) {
      var view = document.createElement('div');
      view.className = 'park-view' + (isActive ? ' active' : '');
      view.setAttribute('data-view', viewId);
      var wrapper = document.createElement('div');
      wrapper.innerHTML = listHTML;
      var list = wrapper.firstChild;
      if (list) { list.classList.add('open'); view.appendChild(list); }
      card.appendChild(view);
    }

    addView('whole-family', buildWholeFamilyListHTML(),  true);
    addView('anyone',       buildFamilyListHTML(),       false);
    PEOPLE.forEach(function (p) {
      var data = getPersonData(p.id);
      addView(p.id, buildParkListHTML(data.visited, data.details), false);
    });
  }

  function initParkFilters() {
    var container = document.getElementById('parksFilters');
    var card      = document.getElementById('parksCard');
    if (!container || !card) return;

    container.addEventListener('click', function (e) {
      var btn = e.target.closest('.person-filter');
      if (!btn || btn.classList.contains('active')) return;
      var view = btn.getAttribute('data-view');

      container.querySelectorAll('.person-filter').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      card.querySelectorAll('.park-view').forEach(function (v) { v.classList.remove('active'); });
      var activeView = card.querySelector('.park-view[data-view="' + view + '"]');
      if (activeView) activeView.classList.add('active');

      applyChipColors(view);
      updateBucketList(view);

      var mapBtn = document.querySelector('.map-filter-btn[data-filter="' + view + '"]');
      if (mapBtn) mapBtn.click();
    });
  }

  // ---- Append list toggle + list to a container -----
  function appendList(containerId, listHTML, showLabel, hideLabel) {
    var container = document.getElementById(containerId);
    if (!container || !listHTML) return;

    var show = showLabel || 'Show list';
    var hide = hideLabel || 'Hide list';
    var toggle = document.createElement('button');
    toggle.className = 'list-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('data-show', show);
    toggle.setAttribute('data-hide', hide);
    toggle.innerHTML = show + ' &#9662;';
    container.appendChild(toggle);

    var wrapper = document.createElement('div');
    wrapper.innerHTML = listHTML;
    container.appendChild(wrapper.firstChild);
  }

  // ---- Init list toggles ----------------------------
  function initListToggles() {
    document.querySelectorAll('.list-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var list = btn.nextElementSibling;
        if (!list) return;
        var open = list.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
        btn.innerHTML = open
          ? (btn.getAttribute('data-hide') || 'Hide list') + ' &#9652;'
          : (btn.getAttribute('data-show') || 'Show list') + ' &#9662;';
      });
    });
  }

  // ---- Build and inject person card content ---------
  function initPersonCard(person) {
    var cardId = person.id + '-card';
    var card = document.getElementById(cardId);
    if (!card) return;

    var data = getPersonData(person.id);
    var count = countVisited(data.visited);

    var countEl = card.querySelector('.count');
    if (countEl) countEl.innerHTML = '<span class="count-num">' + count + '</span> of ' + TOTAL_PARKS + ' national parks';

    appendList(cardId, buildParkListHTML(data.visited, data.details), 'Show visited', 'Hide visited');
  }

  // ---- Parks map (MapLibre GL JS + CARTO vector basemap) --------------
  // Ported from Leaflet: CARTO now watermarks unauthenticated *raster*
  // tile requests and recommends vector instead (see
  // https://docs.carto.com/faqs/carto-basemaps) -- vector tiles aren't
  // gated behind the API key today, and CARTO says raster cartography
  // itself may stop getting updates. See disney/js/app.js's initDisneyMap()
  // for the same pattern with more detailed comments on the API
  // differences from Leaflet.
  var CARTO_KEY = 'cb1_2jdq_1_6d79969636549968efce8740';

  function initParksMap() {
    var mapEl = document.getElementById('parksMap');
    if (!mapEl || typeof maplibregl === 'undefined') return;

    // MapLibre takes [lng, lat] -- the opposite order from Leaflet's [lat, lng].
    var map = new maplibregl.Map({
      container: 'parksMap',
      style: 'https://basemaps.cartocdn.com/gl/' + (IS_DARK ? 'dark-matter' : 'positron') + '-gl-style/style.json?key=' + CARTO_KEY,
      center: [-94.2, 39.2],
      zoom: 2,
      scrollZoom: false
    });
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left');

    var activeFilter = 'whole-family';
    var markerEntries = [];

    function isAnyoneVisited(parkId) {
      return PEOPLE.some(function (p) {
        return getPersonData(p.id).visited[parkId];
      });
    }

    function isWholeFamilyVisited(parkId) {
      return PEOPLE.every(function (p) {
        return getPersonData(p.id).visited[parkId];
      });
    }

    function getMarkerColor(park) {
      if (activeFilter === 'anyone') {
        return isAnyoneVisited(park.id) ? '#E8A020' : '#64748b';
      }
      if (activeFilter === 'whole-family') {
        return isWholeFamilyVisited(park.id) ? '#FF8200' : '#64748b';
      }
      var person = PEOPLE.filter(function (p) { return p.id === activeFilter; })[0];
      return getPersonData(activeFilter).visited[park.id] ? person.color : '#64748b';
    }

    // Builds the marker's DOM element by hand (same .milb-marker-icon/
    // .milb-dot classes the old L.divIcon HTML produced, so the existing
    // CSS needs no changes) -- MapLibre markers are plain DOM overlays
    // you own, not a library-managed icon object like Leaflet's divIcon.
    function makeMarkerElement(color) {
      var isV = color !== '#64748b';
      var el = document.createElement('div');
      el.className = 'milb-marker-icon';
      var dot = document.createElement('div');
      dot.className = isV ? 'milb-dot' : 'milb-dot milb-dot--unvisited';
      if (isV) { dot.style.background = color; }
      el.appendChild(dot);
      return el;
    }

    function getPopupContent(park) {
      var visitedBy = PEOPLE.filter(function (p) {
        return getPersonData(p.id).visited[park.id];
      });
      var html = '<strong>' + park.name + '</strong><br><em style="color:#888">' + park.state + '</em>';
      if (visitedBy.length) {
        html += '<br><span style="font-size:0.82em;color:#555">Visited by: ' +
          visitedBy.map(function (p) {
            return '<span style="color:' + p.color + '">&#9679;</span>&nbsp;' + p.name;
          }).join(', ') + '</span>';
      } else {
        html += '<br><span style="font-size:0.82em;color:#bbb">Not yet visited</span>';
      }
      return html;
    }

    // Markers are DOM overlays independent of the style/tiles, so they
    // don't need to wait for the map's 'load' event the way style-layer
    // changes would.
    PARKS_REGIONS.forEach(function (regionObj) {
      regionObj.parks.forEach(function (park) {
        var el = makeMarkerElement(getMarkerColor(park));
        var popup = new maplibregl.Popup({ offset: 10 }).setHTML(getPopupContent(park));
        var marker = new maplibregl.Marker({ element: el })
          .setLngLat([park.lng, park.lat])
          .setPopup(popup)
          .addTo(map);
        markerEntries.push({ marker: marker, park: park });
      });
    });

    function updateMarkers() {
      var visitedColor;
      if (activeFilter === 'anyone') {
        visitedColor = '#E8A020';
      } else if (activeFilter === 'whole-family') {
        visitedColor = '#FF8200';
      } else {
        visitedColor = PEOPLE.filter(function (p) { return p.id === activeFilter; })[0].color;
      }
      // No setIcon() equivalent -- mutate the dot in place instead of
      // touching MapLibre's own element reference (Marker has no public
      // API to swap it, and reaching into its internals would be fragile).
      markerEntries.forEach(function (m) {
        var color = getMarkerColor(m.park);
        var isV = color !== '#64748b';
        var dot = m.marker.getElement().firstChild;
        dot.className = isV ? 'milb-dot' : 'milb-dot milb-dot--unvisited';
        dot.style.background = isV ? color : '';
      });
      var legendDot = document.getElementById('legendVisited');
      if (legendDot) legendDot.style.background = visitedColor;
    }

    document.querySelectorAll('.map-filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn.classList.contains('active')) return;
        document.querySelectorAll('.map-filter-btn').forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        updateMarkers();
        var parksBtn = document.querySelector('#parksFilters .person-filter[data-view="' + activeFilter + '"]');
        if (parksBtn) parksBtn.click();
      });
    });

    // Map shares a row with the photos on desktop and grows to match its
    // height (see .photos-map-row CSS), so re-measure after layout settles.
    function refreshMapSize() { map.resize(); }
    setTimeout(refreshMapSize, 0);
    window.addEventListener('load', refreshMapSize);
    window.addEventListener('resize', refreshMapSize);
  }

  // ---- Inject sec-count badge into a section heading -
  function setHeadingCount(headingId, text) {
    var heading = document.getElementById(headingId);
    if (!heading) return;
    var badge = heading.querySelector('.sec-count');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'sec-count';
      var rule = heading.querySelector('.sec-rule');
      if (rule) heading.insertBefore(badge, rule);
      else heading.appendChild(badge);
    }
    badge.textContent = text;
  }

  // ---- Init -----------------------------------------
  function init() {
    // Quick-glance totals strip is populated by applyChipColors() below,
    // which fires for the initial 'whole-family' default too.

    // Parks filter row + card
    buildParksFilterRow();
    buildParksCard();
    initParkFilters();
    applyChipColors('whole-family');

    // Bucket list card
    setHeadingCount('bucket', countBucketList() + ' / ' + TOTAL_PARKS);
    var bucketHTML = buildBucketListHTML();
    if (bucketHTML) {
      var bucketCard = document.getElementById('bucket-card');
      if (bucketCard) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = bucketHTML;
        bucketCard.appendChild(wrapper.firstChild);
      }
    }

    initListToggles();
    initParksMap();
  }

  document.addEventListener('DOMContentLoaded', init);

}());
