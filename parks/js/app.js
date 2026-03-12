/* ===================================================
   TheCuzzorts National Parks — app.js
   =================================================== */

(function () {

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
        { id: 'acadia', name: 'Acadia', state: 'Maine' }
      ]
    },
    {
      region: 'Mid-Atlantic & Southeast',
      parks: [
        { id: 'hot-springs',           name: 'Hot Springs',           state: 'Arkansas' },
        { id: 'mammoth-cave',          name: 'Mammoth Cave',          state: 'Kentucky' },
        { id: 'great-smoky-mountains', name: 'Great Smoky Mountains', state: 'Tennessee / North Carolina' },
        { id: 'shenandoah',            name: 'Shenandoah',            state: 'Virginia' },
        { id: 'new-river-gorge',       name: 'New River Gorge',       state: 'West Virginia' },
        { id: 'congaree',              name: 'Congaree',              state: 'South Carolina' }
      ]
    },
    {
      region: 'Florida',
      parks: [
        { id: 'biscayne',     name: 'Biscayne',     state: 'Florida' },
        { id: 'dry-tortugas', name: 'Dry Tortugas', state: 'Florida' },
        { id: 'everglades',   name: 'Everglades',   state: 'Florida' }
      ]
    },
    {
      region: 'Midwest',
      parks: [
        { id: 'gateway-arch',       name: 'Gateway Arch',       state: 'Missouri' },
        { id: 'cuyahoga-valley',    name: 'Cuyahoga Valley',    state: 'Ohio' },
        { id: 'indiana-dunes',      name: 'Indiana Dunes',      state: 'Indiana' },
        { id: 'isle-royale',        name: 'Isle Royale',        state: 'Michigan' },
        { id: 'voyageurs',          name: 'Voyageurs',          state: 'Minnesota' },
        { id: 'theodore-roosevelt', name: 'Theodore Roosevelt', state: 'North Dakota' },
        { id: 'badlands',           name: 'Badlands',           state: 'South Dakota' },
        { id: 'wind-cave',          name: 'Wind Cave',          state: 'South Dakota' }
      ]
    },
    {
      region: 'Texas & Southwest',
      parks: [
        { id: 'big-bend',            name: 'Big Bend',            state: 'Texas' },
        { id: 'guadalupe-mountains', name: 'Guadalupe Mountains', state: 'Texas' },
        { id: 'carlsbad-caverns',    name: 'Carlsbad Caverns',    state: 'New Mexico' },
        { id: 'white-sands',         name: 'White Sands',         state: 'New Mexico' }
      ]
    },
    {
      region: 'Rocky Mountain',
      parks: [
        { id: 'rocky-mountain',   name: 'Rocky Mountain',               state: 'Colorado' },
        { id: 'great-sand-dunes', name: 'Great Sand Dunes',             state: 'Colorado' },
        { id: 'black-canyon',     name: 'Black Canyon of the Gunnison', state: 'Colorado' },
        { id: 'mesa-verde',       name: 'Mesa Verde',                   state: 'Colorado' },
        { id: 'glacier',          name: 'Glacier',                      state: 'Montana' },
        { id: 'grand-teton',      name: 'Grand Teton',                  state: 'Wyoming' },
        { id: 'yellowstone',      name: 'Yellowstone',                  state: 'Wyoming' }
      ]
    },
    {
      region: 'Desert Southwest',
      parks: [
        { id: 'grand-canyon',    name: 'Grand Canyon',    state: 'Arizona' },
        { id: 'petrified-forest',name: 'Petrified Forest',state: 'Arizona' },
        { id: 'saguaro',         name: 'Saguaro',         state: 'Arizona' },
        { id: 'arches',          name: 'Arches',          state: 'Utah' },
        { id: 'bryce-canyon',    name: 'Bryce Canyon',    state: 'Utah' },
        { id: 'canyonlands',     name: 'Canyonlands',     state: 'Utah' },
        { id: 'capitol-reef',    name: 'Capitol Reef',    state: 'Utah' },
        { id: 'zion',            name: 'Zion',            state: 'Utah' },
        { id: 'great-basin',     name: 'Great Basin',     state: 'Nevada' },
        { id: 'death-valley',    name: 'Death Valley',    state: 'California / Nevada' }
      ]
    },
    {
      region: 'California',
      parks: [
        { id: 'channel-islands', name: 'Channel Islands', state: 'California' },
        { id: 'joshua-tree',     name: 'Joshua Tree',     state: 'California' },
        { id: 'kings-canyon',    name: 'Kings Canyon',    state: 'California' },
        { id: 'lassen-volcanic', name: 'Lassen Volcanic', state: 'California' },
        { id: 'pinnacles',       name: 'Pinnacles',       state: 'California' },
        { id: 'redwood',         name: 'Redwood',         state: 'California' },
        { id: 'sequoia',         name: 'Sequoia',         state: 'California' },
        { id: 'yosemite',        name: 'Yosemite',        state: 'California' }
      ]
    },
    {
      region: 'Pacific Northwest',
      parks: [
        { id: 'crater-lake',    name: 'Crater Lake',    state: 'Oregon' },
        { id: 'mount-rainier',  name: 'Mount Rainier',  state: 'Washington' },
        { id: 'north-cascades', name: 'North Cascades', state: 'Washington' },
        { id: 'olympic',        name: 'Olympic',        state: 'Washington' }
      ]
    },
    {
      region: 'Alaska',
      parks: [
        { id: 'denali',              name: 'Denali',              state: 'Alaska' },
        { id: 'gates-of-the-arctic', name: 'Gates of the Arctic', state: 'Alaska' },
        { id: 'glacier-bay',         name: 'Glacier Bay',         state: 'Alaska' },
        { id: 'katmai',              name: 'Katmai',              state: 'Alaska' },
        { id: 'kenai-fjords',        name: 'Kenai Fjords',        state: 'Alaska' },
        { id: 'kobuk-valley',        name: 'Kobuk Valley',        state: 'Alaska' },
        { id: 'lake-clark',          name: 'Lake Clark',          state: 'Alaska' },
        { id: 'wrangell-st-elias',   name: 'Wrangell-St. Elias', state: 'Alaska' }
      ]
    },
    {
      region: 'Hawaii & Territories',
      parks: [
        { id: 'haleakala',       name: 'Haleakal\u0101',              state: 'Hawaii' },
        { id: 'hawaii-volcanoes',name: 'Hawai\u02BBi Volcanoes',      state: 'Hawaii' },
        { id: 'american-samoa',  name: 'American Samoa',              state: 'American Samoa' },
        { id: 'virgin-islands',  name: 'Virgin Islands',              state: 'US Virgin Islands' }
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

  // ---- Count unique parks visited by any person -----
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

  // ---- Append list toggle + list to a container -----
  function appendList(containerId, listHTML) {
    var container = document.getElementById(containerId);
    if (!container || !listHTML) return;

    var toggle = document.createElement('button');
    toggle.className = 'list-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = 'Show list &#9662;';
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
        btn.innerHTML = open ? 'Hide list &#9652;' : 'Show list &#9662;';
      });
    });
  }

  // ---- Init expand buttons --------------------------
  function initExpand() {
    document.querySelectorAll('.expand-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = btn.closest('.person-card');
        if (!card) return;
        var expanded = card.classList.toggle('expanded');
        btn.setAttribute('aria-label', expanded ? 'Collapse' : 'Expand');
        btn.innerHTML = expanded
          ? '<svg viewBox="0 0 14 14"><line x1="2" y1="2" x2="12" y2="12"/><line x1="12" y1="2" x2="2" y2="12"/></svg>'
          : '<svg viewBox="0 0 14 14"><line x1="1" y1="4" x2="13" y2="4"/><line x1="1" y1="10" x2="13" y2="10"/></svg>';
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
    if (countEl) countEl.textContent = count + ' of ' + TOTAL_PARKS + ' national parks';

    var listHTML = buildParkListHTML(data.visited, data.details);
    appendList(cardId, listHTML);
  }

  // ---- Init -----------------------------------------
  function init() {
    // Family card
    var familyCount = countFamilyVisited();
    var familyCountEl = document.getElementById('familyParksCount');
    if (familyCountEl) familyCountEl.textContent = familyCount + ' of ' + TOTAL_PARKS + ' national parks visited by anyone';
    appendList('family-card', buildFamilyListHTML());

    // Per-person cards
    PEOPLE.forEach(initPersonCard);

    initListToggles();
    initExpand();
  }

  document.addEventListener('DOMContentLoaded', init);

}());
