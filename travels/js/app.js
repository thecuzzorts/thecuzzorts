/* ===================================================
   TheCuzzorts Maps — app.js
   =================================================== */

(function ($) {

  // ---- Family members (shown in filter row + maps) --
  var PEOPLE = [
    {
      id: 'josh', name: 'Josh', color: '#00AC4B',
      states:          function () { return statesVisitedJosh; },
      stateDetails:    function () { return typeof statesDetailsJosh    !== 'undefined' ? statesDetailsJosh    : {}; },
      provinces:       function () { return provincesVisitedJosh; },
      provinceDetails: function () { return typeof provincesDetailsJosh !== 'undefined' ? provincesDetailsJosh : {}; },
      countries:       function () { return countriesVisitedJosh; },
      countryDetails:  function () { return typeof countriesDetailsJosh !== 'undefined' ? countriesDetailsJosh : {}; }
    },
    {
      id: 'sam', name: 'Sam', color: '#662684',
      states:          function () { return statesVisitedSam; },
      stateDetails:    function () { return typeof statesDetailsSam    !== 'undefined' ? statesDetailsSam    : {}; },
      provinces:       function () { return provincesVisitedSam; },
      provinceDetails: function () { return typeof provincesDetailsSam !== 'undefined' ? provincesDetailsSam : {}; },
      countries:       function () { return countriesVisitedSam; },
      countryDetails:  function () { return typeof countriesDetailsSam !== 'undefined' ? countriesDetailsSam : {}; }
    },
    {
      id: 'ellie', name: 'Ellie', color: '#66b2b2',
      states:          function () { return statesVisitedEllie; },
      stateDetails:    function () { return typeof statesDetailsEllie    !== 'undefined' ? statesDetailsEllie    : {}; },
      provinces:       function () { return provincesVisitedEllie; },
      provinceDetails: function () { return typeof provincesDetailsEllie !== 'undefined' ? provincesDetailsEllie : {}; },
      countries:       function () { return countriesVisitedEllie; },
      countryDetails:  function () { return typeof countriesDetailsEllie !== 'undefined' ? countriesDetailsEllie : {}; }
    },
    {
      id: 'tilly', name: 'Tilly', color: '#0898ff',
      states:          function () { return statesVisitedTilly; },
      stateDetails:    function () { return typeof statesDetailsTilly    !== 'undefined' ? statesDetailsTilly    : {}; },
      provinces:       function () { return provincesVisitedTilly; },
      provinceDetails: function () { return typeof provincesDetailsTilly !== 'undefined' ? provincesDetailsTilly : {}; },
      countries:       function () { return countriesVisitedTilly; },
      countryDetails:  function () { return typeof countriesDetailsTilly !== 'undefined' ? countriesDetailsTilly : {}; }
    },
    {
      id: 'poppy', name: 'Poppy', color: '#d9259a',
      states:          function () { return statesVisitedPoppy; },
      stateDetails:    function () { return typeof statesDetailsPoppy    !== 'undefined' ? statesDetailsPoppy    : {}; },
      provinces:       function () { return provincesVisitedPoppy; },
      provinceDetails: function () { return typeof provincesDetailsPoppy !== 'undefined' ? provincesDetailsPoppy : {}; },
      countries:       function () { return countriesVisitedPoppy; },
      countryDetails:  function () { return typeof countriesDetailsPoppy !== 'undefined' ? countriesDetailsPoppy : {}; }
    }
  ];

  var FAMILY_COLOR = '#E8601A';

  // ---- Territory / province exclusion lists ---------
  var TERRITORY_CODES       = { 'PR': 1, 'VI': 1, 'SX': 1, 'GU': 1, 'AS': 1, 'MP': 1 };
  var PROVINCE_TERRITORY_CODES = { 'CA-NT': 1, 'CA-NU': 1, 'CA-YT': 1 };

  // ---- Name lookups ---------------------------------
  var PROVINCE_NAMES = {
    'CA-AB': 'Alberta',      'CA-BC': 'British Columbia', 'CA-MB': 'Manitoba',
    'CA-NB': 'New Brunswick','CA-NL': 'Newfoundland and Labrador',
    'CA-NS': 'Nova Scotia',  'CA-NT': 'Northwest Territories',
    'CA-NU': 'Nunavut',      'CA-ON': 'Ontario', 'CA-PE': 'Prince Edward Island',
    'CA-QC': 'Québec',       'CA-SK': 'Saskatchewan', 'CA-YT': 'Yukon'
  };

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

  var COUNTRY_INFO = {
    'US': { name: 'United States',       continent: 'North America' },
    'CA': { name: 'Canada',              continent: 'North America' },
    'MX': { name: 'Mexico',              continent: 'North America' },
    'BS': { name: 'Bahamas',             continent: 'Caribbean' },
    'CU': { name: 'Cuba',                continent: 'Caribbean' },
    'DO': { name: 'Dominican Republic',  continent: 'Caribbean' },
    'HT': { name: 'Haiti',               continent: 'Caribbean' },
    'JM': { name: 'Jamaica',             continent: 'Caribbean' },
    'TT': { name: 'Trinidad & Tobago',   continent: 'Caribbean' },
    'BB': { name: 'Barbados',            continent: 'Caribbean' },
    'LC': { name: 'St. Lucia',           continent: 'Caribbean' },
    'AG': { name: 'Antigua & Barbuda',   continent: 'Caribbean' },
    'GD': { name: 'Grenada',             continent: 'Caribbean' },
    'KN': { name: 'St. Kitts & Nevis',   continent: 'Caribbean' },
    'DM': { name: 'Dominica',            continent: 'Caribbean' },
    'VC': { name: 'St. Vincent',         continent: 'Caribbean' },
    'PR': { name: 'Puerto Rico',         continent: 'Caribbean' },
    'VI': { name: 'U.S. Virgin Islands', continent: 'Caribbean' },
    'SX': { name: 'Sint Maarten',        continent: 'Caribbean' },
    'BZ': { name: 'Belize',              continent: 'Central America' },
    'GT': { name: 'Guatemala',           continent: 'Central America' },
    'HN': { name: 'Honduras',            continent: 'Central America' },
    'SV': { name: 'El Salvador',         continent: 'Central America' },
    'NI': { name: 'Nicaragua',           continent: 'Central America' },
    'CR': { name: 'Costa Rica',          continent: 'Central America' },
    'PA': { name: 'Panama',              continent: 'Central America' },
    'CO': { name: 'Colombia',            continent: 'South America' },
    'VE': { name: 'Venezuela',           continent: 'South America' },
    'GY': { name: 'Guyana',              continent: 'South America' },
    'SR': { name: 'Suriname',            continent: 'South America' },
    'BR': { name: 'Brazil',              continent: 'South America' },
    'EC': { name: 'Ecuador',             continent: 'South America' },
    'PE': { name: 'Peru',                continent: 'South America' },
    'BO': { name: 'Bolivia',             continent: 'South America' },
    'PY': { name: 'Paraguay',            continent: 'South America' },
    'UY': { name: 'Uruguay',             continent: 'South America' },
    'AR': { name: 'Argentina',           continent: 'South America' },
    'CL': { name: 'Chile',               continent: 'South America' },
    'GB': { name: 'United Kingdom',      continent: 'Europe' },
    'IE': { name: 'Ireland',             continent: 'Europe' },
    'IS': { name: 'Iceland',             continent: 'Europe' },
    'FR': { name: 'France',              continent: 'Europe' },
    'BE': { name: 'Belgium',             continent: 'Europe' },
    'NL': { name: 'Netherlands',         continent: 'Europe' },
    'LU': { name: 'Luxembourg',          continent: 'Europe' },
    'DE': { name: 'Germany',             continent: 'Europe' },
    'AT': { name: 'Austria',             continent: 'Europe' },
    'CH': { name: 'Switzerland',         continent: 'Europe' },
    'LI': { name: 'Liechtenstein',       continent: 'Europe' },
    'DK': { name: 'Denmark',             continent: 'Europe' },
    'SE': { name: 'Sweden',              continent: 'Europe' },
    'NO': { name: 'Norway',              continent: 'Europe' },
    'FI': { name: 'Finland',             continent: 'Europe' },
    'ES': { name: 'Spain',               continent: 'Europe' },
    'PT': { name: 'Portugal',            continent: 'Europe' },
    'IT': { name: 'Italy',               continent: 'Europe' },
    'GR': { name: 'Greece',              continent: 'Europe' },
    'PL': { name: 'Poland',              continent: 'Europe' },
    'CZ': { name: 'Czech Republic',      continent: 'Europe' },
    'SK': { name: 'Slovakia',            continent: 'Europe' },
    'HU': { name: 'Hungary',             continent: 'Europe' },
    'RO': { name: 'Romania',             continent: 'Europe' },
    'BG': { name: 'Bulgaria',            continent: 'Europe' },
    'HR': { name: 'Croatia',             continent: 'Europe' },
    'SI': { name: 'Slovenia',            continent: 'Europe' },
    'RS': { name: 'Serbia',              continent: 'Europe' },
    'ME': { name: 'Montenegro',          continent: 'Europe' },
    'BA': { name: 'Bosnia & Herz.',      continent: 'Europe' },
    'AL': { name: 'Albania',             continent: 'Europe' },
    'MK': { name: 'N. Macedonia',        continent: 'Europe' },
    'LV': { name: 'Latvia',              continent: 'Europe' },
    'LT': { name: 'Lithuania',           continent: 'Europe' },
    'EE': { name: 'Estonia',             continent: 'Europe' },
    'UA': { name: 'Ukraine',             continent: 'Europe' },
    'BY': { name: 'Belarus',             continent: 'Europe' },
    'MD': { name: 'Moldova',             continent: 'Europe' },
    'RU': { name: 'Russia',              continent: 'Europe' },
    'MA': { name: 'Morocco',             continent: 'Africa' },
    'EG': { name: 'Egypt',               continent: 'Africa' },
    'GH': { name: 'Ghana',               continent: 'Africa' },
    'NG': { name: 'Nigeria',             continent: 'Africa' },
    'KE': { name: 'Kenya',               continent: 'Africa' },
    'TZ': { name: 'Tanzania',            continent: 'Africa' },
    'ZA': { name: 'South Africa',        continent: 'Africa' },
    'TR': { name: 'Turkey',              continent: 'Middle East' },
    'IL': { name: 'Israel',              continent: 'Middle East' },
    'JO': { name: 'Jordan',              continent: 'Middle East' },
    'AE': { name: 'UAE',                 continent: 'Middle East' },
    'SA': { name: 'Saudi Arabia',        continent: 'Middle East' },
    'QA': { name: 'Qatar',               continent: 'Middle East' },
    'IN': { name: 'India',               continent: 'Asia' },
    'CN': { name: 'China',               continent: 'Asia' },
    'JP': { name: 'Japan',               continent: 'Asia' },
    'KR': { name: 'South Korea',         continent: 'Asia' },
    'TH': { name: 'Thailand',            continent: 'Asia' },
    'VN': { name: 'Vietnam',             continent: 'Asia' },
    'PH': { name: 'Philippines',         continent: 'Asia' },
    'ID': { name: 'Indonesia',           continent: 'Asia' },
    'MY': { name: 'Malaysia',            continent: 'Asia' },
    'SG': { name: 'Singapore',           continent: 'Asia' },
    'AU': { name: 'Australia',           continent: 'Oceania' },
    'NZ': { name: 'New Zealand',         continent: 'Oceania' },
    'FJ': { name: 'Fiji',                continent: 'Oceania' },
    'GU': { name: 'Guam',                continent: 'Oceania' },
    'AS': { name: 'American Samoa',      continent: 'Oceania' },
    'MP': { name: 'N. Mariana Islands',  continent: 'Oceania' }
  };

  var CONTINENT_ORDER = [
    'North America', 'Caribbean', 'Central America', 'South America',
    'Europe', 'Africa', 'Middle East', 'Asia', 'Oceania'
  ];

  // ---- Count helpers --------------------------------

  function countVisited(data) {
    return Object.keys(data).reduce(function (s, k) {
      return s + (k !== 'US-DC' && data[k] ? 1 : 0);
    }, 0);
  }

  function countCountries(data) {
    return Object.keys(data).reduce(function (s, k) {
      return s + (data[k] && !TERRITORY_CODES[k] ? 1 : 0);
    }, 0);
  }

  function countProvinces(data) {
    return Object.keys(data).reduce(function (s, k) {
      return s + (data[k] && !PROVINCE_TERRITORY_CODES[k] ? 1 : 0);
    }, 0);
  }

  function countHeatMapVisited(heat) {
    return Object.keys(heat).reduce(function (s, k) {
      return s + (k !== 'US-DC' && heat[k] > 0 ? 1 : 0);
    }, 0);
  }

  function countHeatMapCountries(heat) {
    return Object.keys(heat).reduce(function (s, k) {
      return s + (heat[k] > 0 && !TERRITORY_CODES[k] ? 1 : 0);
    }, 0);
  }

  function countHeatMapProvinces(heat) {
    return Object.keys(heat).reduce(function (s, k) {
      return s + (heat[k] > 0 && !PROVINCE_TERRITORY_CODES[k] ? 1 : 0);
    }, 0);
  }

  function buildHeatMap(datasets) {
    var combined = {};
    datasets.forEach(function (data) {
      Object.keys(data).forEach(function (k) {
        combined[k] = (combined[k] || 0) + (data[k] ? 1 : 0);
      });
    });
    return combined;
  }

  function debounce(fn, delay) {
    var t;
    return function () { clearTimeout(t); t = setTimeout(fn, delay); };
  }

  // ---- List builders --------------------------------

  function chipTooltip(detail) {
    if (!detail) return '';
    var parts = [];
    if (detail.date)  parts.push('First visited: ' + detail.date);
    if (detail.notes) parts.push(detail.notes);
    return parts.length ? ' data-tooltip="' + parts.join('&#10;') + '"' : '';
  }

  function buildStateListHTML(data, details) {
    details = details || {};
    var visited      = Object.keys(data).filter(function (k) { return data[k]; });
    var states       = visited.filter(function (k) { return k !== 'US-DC'; });
    var district     = visited.filter(function (k) { return k === 'US-DC'; });
    var unvisited    = Object.keys(STATE_NAMES).filter(function (k) { return k !== 'US-DC' && !data[k]; });

    function byName(a, b) { return (STATE_NAMES[a] || a).localeCompare(STATE_NAMES[b] || b); }
    states.sort(byName);
    unvisited.sort(byName);

    if (!states.length && !district.length && !unvisited.length) return '';

    var html = '<div class="visit-list">';
    if (states.length) {
      html += '<div class="visit-chips">';
      states.forEach(function (k) {
        html += '<span class="visit-chip"' + chipTooltip(details[k]) + '>' + (STATE_NAMES[k] || k) + '</span>';
      });
      html += '</div>';
    }
    if (unvisited.length) {
      html += '<div class="continent-group" style="margin-top:0.75rem"><div class="continent-label">Not Yet Visited</div><div class="visit-chips">';
      unvisited.forEach(function (k) {
        html += '<span class="visit-chip visit-chip--unvisited">' + (STATE_NAMES[k] || k) + '</span>';
      });
      html += '</div></div>';
    }
    if (district.length) {
      html += '<div class="continent-group" style="margin-top:0.5rem"><div class="continent-label">Federal District</div><div class="visit-chips">';
      district.forEach(function (k) {
        html += '<span class="visit-chip territory-chip"' + chipTooltip(details[k]) + '>' + (STATE_NAMES[k] || k) + '</span>';
      });
      html += '</div></div>';
    }
    return html + '</div>';
  }

  function buildProvinceListHTML(data, details) {
    details = details || {};
    var visited          = Object.keys(data).filter(function (k) { return data[k]; });
    var provinces        = visited.filter(function (k) { return !PROVINCE_TERRITORY_CODES[k]; });
    var territories      = visited.filter(function (k) { return  PROVINCE_TERRITORY_CODES[k]; });
    var allProvKeys      = Object.keys(PROVINCE_NAMES);
    var unvisitedProv    = allProvKeys.filter(function (k) { return !PROVINCE_TERRITORY_CODES[k] && !data[k]; });
    var unvisitedTerr    = allProvKeys.filter(function (k) { return  PROVINCE_TERRITORY_CODES[k] && !data[k]; });

    function byName(a, b) { return (PROVINCE_NAMES[a] || a).localeCompare(PROVINCE_NAMES[b] || b); }
    provinces.sort(byName); territories.sort(byName);
    unvisitedProv.sort(byName); unvisitedTerr.sort(byName);

    if (!provinces.length && !territories.length && !unvisitedProv.length && !unvisitedTerr.length) return '';

    var html = '<div class="visit-list">';
    if (provinces.length) {
      html += '<div class="visit-chips">';
      provinces.forEach(function (k) {
        html += '<span class="visit-chip"' + chipTooltip(details[k]) + '>' + (PROVINCE_NAMES[k] || k) + '</span>';
      });
      html += '</div>';
    }
    if (unvisitedProv.length) {
      html += '<div class="continent-group" style="margin-top:0.75rem"><div class="continent-label">Not Yet Visited</div><div class="visit-chips">';
      unvisitedProv.forEach(function (k) {
        html += '<span class="visit-chip visit-chip--unvisited">' + (PROVINCE_NAMES[k] || k) + '</span>';
      });
      html += '</div></div>';
    }
    if (territories.length || unvisitedTerr.length) {
      html += '<div class="continent-group" style="margin-top:0.5rem"><div class="continent-label">Territories</div><div class="visit-chips">';
      territories.forEach(function (k) {
        html += '<span class="visit-chip territory-chip"' + chipTooltip(details[k]) + '>' + (PROVINCE_NAMES[k] || k) + '</span>';
      });
      unvisitedTerr.forEach(function (k) {
        html += '<span class="visit-chip visit-chip--unvisited">' + (PROVINCE_NAMES[k] || k) + '</span>';
      });
      html += '</div></div>';
    }
    return html + '</div>';
  }

  function buildCountryListHTML(data, details) {
    details = details || {};
    var visited = Object.keys(data).filter(function (k) { return data[k]; });
    if (!visited.length) return '';

    var groups = {};
    visited.forEach(function (k) {
      var continent = (COUNTRY_INFO[k] || {}).continent || 'Other';
      if (!groups[continent]) groups[continent] = [];
      groups[continent].push(k);
    });
    Object.keys(groups).forEach(function (c) {
      groups[c].sort(function (a, b) {
        return ((COUNTRY_INFO[a] || {}).name || a).localeCompare((COUNTRY_INFO[b] || {}).name || b);
      });
    });

    var html = '<div class="visit-list">';
    CONTINENT_ORDER.concat(['Other']).forEach(function (c) {
      if (!groups[c]) return;
      html += '<div class="continent-group"><div class="continent-label">' + c + '</div><div class="visit-chips">';
      groups[c].forEach(function (k) {
        var name = (COUNTRY_INFO[k] || {}).name || k;
        var cls  = TERRITORY_CODES[k] ? ' territory-chip' : '';
        html += '<span class="visit-chip' + cls + '"' + chipTooltip(details[k]) + '>' + name + '</span>';
      });
      html += '</div></div>';
    });
    html += '<div class="list-legend"><span class="list-legend-label">Key:</span>';
    html += '<span class="visit-chip">Country</span>';
    html += '<span class="visit-chip territory-chip">Territory</span></div>';
    return html + '</div>';
  }

  function buildTip(regionName, details, code) {
    var detail = details[code];
    var tip = '<strong>' + regionName + '</strong>';
    if (detail) {
      if (detail.date)  tip += '<br><span style="opacity:.8">First visited: ' + detail.date + '</span>';
      if (detail.notes) tip += '<br><em style="opacity:.7">' + detail.notes + '</em>';
    }
    return tip;
  }

  // ---- Pre-computed family data ---------------------
  var computed = {};

  function computeAllData() {
    var stateSets   = PEOPLE.map(function (p) { return p.states();    });
    var provSets    = PEOPLE.map(function (p) { return p.provinces(); });
    var countrySets = PEOPLE.map(function (p) { return p.countries(); });

    computed.statesHeat  = buildHeatMap(stateSets);
    computed.provHeat    = buildHeatMap(provSets);
    computed.countryHeat = buildHeatMap(countrySets);

    computed.countryBinary = {};
    Object.keys(computed.countryHeat).forEach(function (k) {
      computed.countryBinary[k] = computed.countryHeat[k] > 0 ? 1 : 0;
    });
  }

  // ---- Count text per tab + person ------------------
  function getCount(tab, personId) {
    if (personId === 'family') {
      if (tab === 'states')    return countHeatMapVisited(computed.statesHeat)    + ' / 50';
      if (tab === 'provinces') return countHeatMapProvinces(computed.provHeat)    + ' / 10';
      if (tab === 'countries') return String(countHeatMapCountries(computed.countryHeat));
    }
    var p = findPerson(personId);
    if (!p) return '';
    if (tab === 'states')    return countVisited(p.states())    + ' / 50';
    if (tab === 'provinces') return countProvinces(p.provinces()) + ' / 10';
    if (tab === 'countries') return String(countCountries(p.countries()));
    return '';
  }

  function findPerson(id) {
    for (var i = 0; i < PEOPLE.length; i++) { if (PEOPLE[i].id === id) return PEOPLE[i]; }
    return null;
  }

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  // ---- Build filter row + map card (DOM) -----------

  function buildFilterRow(tab) {
    var $row = $('#' + tab + 'Filters');

    var $all = $('<button class="person-filter active" data-tab="' + tab + '" data-person="family"></button>');
    $all[0].style.setProperty('--filter-color', FAMILY_COLOR);
    $all.append('<span class="filter-name">All</span>');
    $all.append('<span class="filter-count">' + getCount(tab, 'family') + '</span>');
    $row.append($all);

    PEOPLE.forEach(function (p) {
      var $btn = $('<button class="person-filter" data-tab="' + tab + '" data-person="' + p.id + '"></button>');
      $btn[0].style.setProperty('--filter-color', p.color);
      $btn.append('<span class="filter-name">' + p.name + '</span>');
      $btn.append('<span class="filter-count">' + getCount(tab, p.id) + '</span>');
      $row.append($btn);
    });
  }

  function buildMapCard(tab) {
    var $card    = $('#' + tab + 'MapCard');
    var mapClass = tab === 'states' ? 'us-map' : tab === 'provinces' ? 'ca-map' : 'world-map';

    // Family "All" view — active by default
    $card.append(
      '<div class="map-view active" data-view="family">' +
        '<div class="map-container ' + mapClass + '">' +
          '<div id="' + tab + 'MapFamily" class="map"></div>' +
        '</div>' +
      '</div>'
    );

    PEOPLE.forEach(function (p) {
      $card.append(
        '<div class="map-view" data-view="' + p.id + '">' +
          '<div class="map-container ' + mapClass + '">' +
            '<div id="' + tab + 'Map' + cap(p.id) + '" class="map"></div>' +
          '</div>' +
        '</div>'
      );
    });
  }

  // ---- Map instances + lazy init -------------------
  var mapInst  = {};  // keyed "tab-personId"
  var mapReady = {};

  function injectList(mapElId, listHTML) {
    if (!listHTML) return;
    var $container = $(mapElId).closest('.map-container');
    if ($container.next('.list-toggle').length) return;
    $('<button class="list-toggle" aria-expanded="false">Show list &#9662;</button>').insertAfter($container);
    $(listHTML).insertAfter($container.next('.list-toggle'));
  }

  function initMap(tab, personId) {
    var key = tab + '-' + personId;
    if (mapReady[key]) {
      if (mapInst[key]) { try { mapInst[key].updateSize(); } catch (e) {} }
      return;
    }
    mapReady[key] = true;

    var mapType = tab === 'states' ? 'us_lcc' : tab === 'provinces' ? 'ca_lcc' : 'world_mill_en';
    var mapElId = '#' + tab + 'Map' + (personId === 'family' ? 'Family' : cap(personId));
    if (!$(mapElId).length) return;

    if (personId === 'family') {
      var heat    = tab === 'states'    ? computed.statesHeat
                  : tab === 'provinces' ? computed.provHeat
                  :                       computed.countryBinary;
      var tipHeat = tab === 'countries' ? computed.countryHeat : heat;

      $(mapElId).vectorMap({
        map: mapType,
        backgroundColor: '#1a2e3b',
        series: { regions: [{ values: heat, scale: ['#f0f2f5', '#E8601A'], normalizeFunction: 'linear' }] },
        onRegionTipShow: function (_e, el, code) {
          var n = (tipHeat[code] || 0);
          var label = n === 1 ? '1 family member' : n + ' family members';
          var tip = '<strong>' + el.html() + '</strong>';
          if (n > 0) tip += '<br><span style="opacity:.8">Visited by ' + label + '</span>';
          el.html(tip);
        }
      });

      mapInst[key] = $(mapElId).vectorMap('get', 'mapObject');

      // Build chip list from heat (binary: any-member visited = 1)
      var rawHeat = tab === 'states' ? computed.statesHeat : tab === 'provinces' ? computed.provHeat : computed.countryHeat;
      var bin = {};
      Object.keys(rawHeat).forEach(function (k) { bin[k] = rawHeat[k] > 0 ? 1 : 0; });
      var listHTML = tab === 'states'    ? buildStateListHTML(bin, {})
                   : tab === 'provinces' ? buildProvinceListHTML(bin, {})
                   :                       buildCountryListHTML(bin, {});
      injectList(mapElId, listHTML);

    } else {
      var p = findPerson(personId);
      if (!p) return;

      var mapData, details, listHTML2;
      if (tab === 'states') {
        mapData   = p.states();
        details   = p.stateDetails();
        listHTML2 = buildStateListHTML(mapData, details);
      } else if (tab === 'provinces') {
        mapData = {};
        Object.keys(p.provinces()).forEach(function (k) { if (p.provinces()[k]) mapData[k] = p.provinces()[k]; });
        details   = p.provinceDetails();
        listHTML2 = buildProvinceListHTML(p.provinces(), details);
      } else {
        mapData   = p.countries();
        details   = p.countryDetails();
        listHTML2 = buildCountryListHTML(mapData, details);
      }

      $(mapElId).vectorMap({
        map: mapType,
        backgroundColor: '#1a2e3b',
        series: { regions: [{ values: mapData, scale: ['#d0d4d8', p.color], normalizeFunction: 'polynomial' }] },
        onRegionTipShow: function (_e, el, code) { el.html(buildTip(el.html(), details, code)); }
      });

      mapInst[key] = $(mapElId).vectorMap('get', 'mapObject');
      injectList(mapElId, listHTML2);
    }
  }

  // ---- Filter clicks --------------------------------
  function initFilters() {
    $(document).on('click', '.person-filter', function () {
      var $btn   = $(this);
      var tab    = $btn.data('tab');
      var person = $btn.data('person');

      $('#' + tab + 'Filters .person-filter').removeClass('active');
      $btn.addClass('active');

      $('#' + tab + ' .map-view').removeClass('active');
      $('#' + tab + ' .map-view[data-view="' + person + '"]').addClass('active');

      setTimeout(function () { initMap(tab, person); }, 0);
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
    computeAllData();

    ['states', 'provinces', 'countries'].forEach(function (tab) {
      buildFilterRow(tab);
      buildMapCard(tab);
    });

    initMap('states', 'family');
    setTimeout(function () { initMap('provinces', 'family'); }, 50);
    setTimeout(function () { initMap('countries', 'family'); }, 100);

    initFilters();
    initListToggles();
    initResize();

    var yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

}(jQuery));
