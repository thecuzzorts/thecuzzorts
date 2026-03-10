/* ===================================================
   TheCuzzorts Maps — app.js
   =================================================== */

(function ($) {

  // ---- Person config --------------------------------
  var people = [
    {
      id:      'josh',
      name:    'Josh',
      color:   '#00AC4B',
      states:  function () { return statesVisitedJosh; },
      stateDetails: function () { return typeof statesDetailsJosh !== 'undefined' ? statesDetailsJosh : {}; },
      countries: function () { return countriesVisitedJosh; },
      countryDetails: function () { return typeof countriesDetailsJosh !== 'undefined' ? countriesDetailsJosh : {}; }
    },
    {
      id:      'sam',
      name:    'Sam',
      color:   '#662684',
      states:  function () { return statesVisitedSam; },
      stateDetails: function () { return typeof statesDetailsSam !== 'undefined' ? statesDetailsSam : {}; },
      countries: function () { return countriesVisitedSam; },
      countryDetails: function () { return typeof countriesDetailsSam !== 'undefined' ? countriesDetailsSam : {}; }
    },
    {
      id:      'ellie',
      name:    'Ellie',
      color:   '#66b2b2',
      states:  function () { return statesVisitedEllie; },
      stateDetails: function () { return typeof statesDetailsEllie !== 'undefined' ? statesDetailsEllie : {}; },
      countries: function () { return countriesVisitedEllie; },
      countryDetails: function () { return typeof countriesDetailsEllie !== 'undefined' ? countriesDetailsEllie : {}; }
    },
    {
      id:      'tilly',
      name:    'Tilly',
      color:   '#0898ff',
      states:  function () { return statesVisitedTilly; },
      stateDetails: function () { return typeof statesDetailsTilly !== 'undefined' ? statesDetailsTilly : {}; },
      countries: function () { return countriesVisitedTilly; },
      countryDetails: function () { return typeof countriesDetailsTilly !== 'undefined' ? countriesDetailsTilly : {}; }
    },
    {
      id:      'poppy',
      name:    'Poppy',
      color:   '#d9259a',
      states:  function () { return statesVisitedPoppy; },
      stateDetails: function () { return typeof statesDetailsPoppy !== 'undefined' ? statesDetailsPoppy : {}; },
      countries: function () { return countriesVisitedPoppy; },
      countryDetails: function () { return typeof countriesDetailsPoppy !== 'undefined' ? countriesDetailsPoppy : {}; }
    }
  ];

  // ---- Territory codes (excluded from country count) -
  var TERRITORY_CODES = { 'PR': 1, 'VI': 1, 'SX': 1, 'GU': 1, 'AS': 1, 'MP': 1 };

  // ---- State name lookup (US-XX → full name) --------
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

  // ---- Country name + continent lookup ---------------
  var COUNTRY_INFO = {
    // North America
    'US': { name: 'United States',       continent: 'North America' },
    'CA': { name: 'Canada',              continent: 'North America' },
    'MX': { name: 'Mexico',              continent: 'North America' },
    // Caribbean
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
    'KN': { name: 'St. Kitts & Nevis',  continent: 'Caribbean' },
    'DM': { name: 'Dominica',            continent: 'Caribbean' },
    'VC': { name: 'St. Vincent',         continent: 'Caribbean' },
    'PR': { name: 'Puerto Rico',         continent: 'Caribbean' },
    'VI': { name: 'U.S. Virgin Islands', continent: 'Caribbean' },
    'SX': { name: 'Sint Maarten',        continent: 'Caribbean' },
    // Central America
    'BZ': { name: 'Belize',              continent: 'Central America' },
    'GT': { name: 'Guatemala',           continent: 'Central America' },
    'HN': { name: 'Honduras',            continent: 'Central America' },
    'SV': { name: 'El Salvador',         continent: 'Central America' },
    'NI': { name: 'Nicaragua',           continent: 'Central America' },
    'CR': { name: 'Costa Rica',          continent: 'Central America' },
    'PA': { name: 'Panama',              continent: 'Central America' },
    // South America
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
    // Europe
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
    // Africa
    'MA': { name: 'Morocco',             continent: 'Africa' },
    'EG': { name: 'Egypt',               continent: 'Africa' },
    'GH': { name: 'Ghana',               continent: 'Africa' },
    'NG': { name: 'Nigeria',             continent: 'Africa' },
    'KE': { name: 'Kenya',               continent: 'Africa' },
    'TZ': { name: 'Tanzania',            continent: 'Africa' },
    'ZA': { name: 'South Africa',        continent: 'Africa' },
    // Middle East
    'TR': { name: 'Turkey',              continent: 'Middle East' },
    'IL': { name: 'Israel',              continent: 'Middle East' },
    'JO': { name: 'Jordan',              continent: 'Middle East' },
    'AE': { name: 'UAE',                 continent: 'Middle East' },
    'SA': { name: 'Saudi Arabia',        continent: 'Middle East' },
    'QA': { name: 'Qatar',               continent: 'Middle East' },
    // Asia
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
    // Oceania
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

  // ---- Helpers --------------------------------------

  function countVisited(data) {
    return Object.keys(data).reduce(function (sum, key) {
      return sum + (key !== 'US-DC' && data[key] ? 1 : 0);
    }, 0);
  }

  function countCountries(data) {
    return Object.keys(data).reduce(function (sum, key) {
      return sum + (data[key] && !TERRITORY_CODES[key] ? 1 : 0);
    }, 0);
  }

  function countTerritories(data) {
    return Object.keys(data).reduce(function (sum, key) {
      return sum + (data[key] && TERRITORY_CODES[key] ? 1 : 0);
    }, 0);
  }

  function countHeatMapCountries(heatData) {
    return Object.keys(heatData).reduce(function (sum, key) {
      return sum + (heatData[key] > 0 && !TERRITORY_CODES[key] ? 1 : 0);
    }, 0);
  }

  function countHeatMapTerritories(heatData) {
    return Object.keys(heatData).reduce(function (sum, key) {
      return sum + (heatData[key] > 0 && TERRITORY_CODES[key] ? 1 : 0);
    }, 0);
  }

  function setCountryCount(countId, countries, territories) {
    var html = '<span id="' + countId + '">' + countries + '</span> countries';
    if (territories > 0) {
      var label = territories === 1 ? '1 territory' : territories + ' territories';
      html += ' <span class="territory-note">+ ' + label + '</span>';
    }
    $('#' + countId).closest('.count').html(html);
  }

  // Sum values across all datasets (heat map: 0–N where N = number of people)
  function buildHeatMap(dataSets) {
    var combined = {};
    dataSets.forEach(function (data) {
      Object.keys(data).forEach(function (key) {
        combined[key] = (combined[key] || 0) + (data[key] ? 1 : 0);
      });
    });
    return combined;
  }

  function countHeatMapVisited(heatData) {
    return Object.keys(heatData).reduce(function (sum, key) {
      return sum + (key !== 'US-DC' && heatData[key] > 0 ? 1 : 0);
    }, 0);
  }

  // Debounce helper
  function debounce(fn, delay) {
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }

  // Build tooltip content with optional details
  function buildTip(regionName, details, code) {
    var detail = details[code];
    var tip = '<strong>' + regionName + '</strong>';
    if (detail) {
      if (detail.date)  tip += '<br><span style="opacity:.8">First visited: ' + detail.date + '</span>';
      if (detail.notes) tip += '<br><em style="opacity:.7">' + detail.notes + '</em>';
    }
    return tip;
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
    var visited = Object.keys(data).filter(function (k) { return data[k]; });
    if (visited.length === 0) return '';

    var states   = visited.filter(function (k) { return k !== 'US-DC'; });
    var districts = visited.filter(function (k) { return k === 'US-DC'; });

    function byName(a, b) {
      return (STATE_NAMES[a] || a).localeCompare(STATE_NAMES[b] || b);
    }
    states.sort(byName);

    var html = '<div class="visit-list"><div class="visit-chips">';
    states.forEach(function (code) {
      var tip = chipTooltip(details[code]);
      html += '<span class="visit-chip"' + tip + '>' + (STATE_NAMES[code] || code) + '</span>';
    });
    html += '</div>';

    if (districts.length > 0) {
      html += '<div class="continent-group" style="margin-top:0.5rem">';
      html += '<div class="continent-label">Federal District</div>';
      html += '<div class="visit-chips">';
      districts.forEach(function (code) {
        var tip = chipTooltip(details[code]);
        html += '<span class="visit-chip territory-chip"' + tip + '>' + (STATE_NAMES[code] || code) + '</span>';
      });
      html += '</div></div>';
    }

    html += '</div>';
    return html;
  }

  function buildCountryListHTML(data, details) {
    details = details || {};
    var visited = Object.keys(data).filter(function (k) { return data[k]; });
    if (visited.length === 0) return '';

    var groups = {};
    visited.forEach(function (code) {
      var info      = COUNTRY_INFO[code];
      var continent = info ? info.continent : 'Other';
      if (!groups[continent]) groups[continent] = [];
      groups[continent].push(code);
    });

    Object.keys(groups).forEach(function (continent) {
      groups[continent].sort(function (a, b) {
        var na = COUNTRY_INFO[a] ? COUNTRY_INFO[a].name : a;
        var nb = COUNTRY_INFO[b] ? COUNTRY_INFO[b].name : b;
        return na.localeCompare(nb);
      });
    });

    var order = CONTINENT_ORDER.concat(['Other']);
    var html  = '<div class="visit-list">';
    order.forEach(function (continent) {
      if (!groups[continent]) return;
      html += '<div class="continent-group">';
      html += '<div class="continent-label">' + continent + '</div>';
      html += '<div class="visit-chips">';
      groups[continent].forEach(function (code) {
        var info        = COUNTRY_INFO[code];
        var name        = info ? info.name : code;
        var isTerritory = !!TERRITORY_CODES[code];
        var cls         = isTerritory ? ' territory-chip' : '';
        var tip         = chipTooltip(details[code]);
        html += '<span class="visit-chip' + cls + '"' + tip + '>' + name + '</span>';
      });
      html += '</div></div>';
    });
    html += '<div class="list-legend">';
    html += '<span class="list-legend-label">Key:</span>';
    html += '<span class="visit-chip">Country</span>';
    html += '<span class="visit-chip territory-chip" title="Territory">Territory</span>';
    html += '</div>';
    html += '</div>';
    return html;
  }

  function injectList(mapId, listHTML) {
    if (!listHTML) return;
    var $container = $(mapId).closest('.map-container');
    $('<button class="list-toggle" aria-expanded="false">Show list &#9662;</button>').insertAfter($container);
    $(listHTML).insertAfter($container.next('.list-toggle'));
  }

  // ---- Map instances (for resize) -------------------
  var mapInstances = [];

  function registerMap(selector) {
    var obj = $(selector).vectorMap('get', 'mapObject');
    if (obj) mapInstances.push(obj);
  }

  // ---- Init States Maps -----------------------------
  function initStateMaps() {
    var stateSets = people.map(function (p) { return p.states(); });
    var familyHeat = buildHeatMap(stateSets);
    var familyCount = countHeatMapVisited(familyHeat);
    var totalStates = Object.keys(stateSets[0]).length;

    // Family combined heat map
    $('#familyStatesTotal').text(familyCount);
    $('#familyStatesMap').vectorMap({
      map: 'us_lcc',
      backgroundColor: '#1a2e3b',
      series: {
        regions: [{
          values: familyHeat,
          scale: ['#f0f2f5', '#E8A020'],
          normalizeFunction: 'linear'
        }]
      },
      onRegionTipShow: function (e, el, code) {
        var count = familyHeat[code] || 0;
        var label = count === 1 ? '1 family member' : count + ' family members';
        var tip = '<strong>' + el.html() + '</strong>';
        if (count > 0) tip += '<br><span style="opacity:.8">Visited by ' + label + '</span>';
        el.html(tip);
      }
    });
    registerMap('#familyStatesMap');

    // Per-person state travels
    people.forEach(function (person) {
      var data    = person.states();
      var details = person.stateDetails();
      var count   = countVisited(data);
      var mapId   = '#' + person.id + 'StatesMap';
      var countId = '#' + person.id + 'StatesTotal';

      $(countId).text(count);
      $(mapId).vectorMap({
        map: 'us_lcc',
        backgroundColor: '#1a2e3b',
        series: {
          regions: [{
            values: data,
            scale: ['#d0d4d8', person.color],
            normalizeFunction: 'polynomial'
          }]
        },
        onRegionTipShow: function (e, el, code) {
          el.html(buildTip(el.html(), details, code));
        }
      });
      registerMap(mapId);
      injectList(mapId, buildStateListHTML(data, details));
    });
  }

  // ---- Init Country Maps ----------------------------
  function initCountryMaps() {
    var countrySets = people.map(function (p) { return p.countries(); });

    // Merge all keys across all datasets for accurate heat map
    var allKeys = {};
    countrySets.forEach(function (data) {
      Object.keys(data).forEach(function (k) { allKeys[k] = true; });
    });

    // Build heat map — only keys that appear in at least one person's data
    var familyHeat = buildHeatMap(countrySets);
    var familyCount = countHeatMapCountries(familyHeat);
    var familyTerritories = countHeatMapTerritories(familyHeat);

    // Family combined map — binary (visited or not)
    var familyBinary = {};
    Object.keys(familyHeat).forEach(function (k) {
      familyBinary[k] = familyHeat[k] > 0 ? 1 : 0;
    });

    setCountryCount('familyCountriesTotal', familyCount, familyTerritories);
    $('#familyCountriesMap').vectorMap({
      map: 'world_mill_en',
      backgroundColor: '#1a2e3b',
      series: {
        regions: [{
          values: familyBinary,
          scale: ['#f0f2f5', '#E8A020'],
          normalizeFunction: 'linear'
        }]
      },
      onRegionTipShow: function (e, el, code) {
        var count = familyHeat[code] || 0;
        var label = count === 1 ? '1 family member' : count + ' family members';
        var tip = '<strong>' + el.html() + '</strong>';
        if (count > 0) tip += '<br><span style="opacity:.8">Visited by ' + label + '</span>';
        el.html(tip);
      }
    });
    registerMap('#familyCountriesMap');

    // Per-person country travels
    people.forEach(function (person) {
      var data        = person.countries();
      var details     = person.countryDetails();
      var countries   = countCountries(data);
      var territories = countTerritories(data);
      var mapId       = '#' + person.id + 'CountriesMap';
      var countId     = person.id + 'CountriesTotal';

      setCountryCount(countId, countries, territories);
      $(mapId).vectorMap({
        map: 'world_mill_en',
        backgroundColor: '#1a2e3b',
        series: {
          regions: [{
            values: data,
            scale: ['#d0d4d8', person.color],
            normalizeFunction: 'polynomial'
          }]
        },
        onRegionTipShow: function (e, el, code) {
          el.html(buildTip(el.html(), details, code));
        }
      });
      registerMap(mapId);
      injectList(mapId, buildCountryListHTML(data, details));
    });
  }

  // ---- Tab Switching --------------------------------
  function initTabs() {
    $('.tab-btn').on('click', function () {
      var target = $(this).data('tab');
      $('.tab-btn').removeClass('active');
      $(this).addClass('active');
      $('.tab-section').removeClass('active');
      $('#' + target).addClass('active');

      // Trigger resize so newly-visible travels render at correct size
      setTimeout(function () {
        mapInstances.forEach(function (m) {
          try { m.updateSize(); } catch (e) {}
        });
      }, 50);
    });
  }

  // ---- Window Resize --------------------------------
  function initResize() {
    $(window).on('resize', debounce(function () {
      mapInstances.forEach(function (m) {
        try { m.updateSize(); } catch (e) {}
      });
    }, 150));
  }

  // ---- Expand / Collapse ----------------------------
  var EXPAND_ICON   = '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M1 4V1h3M6 1h3v3M9 6v3H6M4 9H1V6"/><path d="M1 1l8 8M9 1L1 9" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>';
  var COLLAPSE_ICON = '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M4 1v3H1M6 4h3V1M6 9V6h3M1 6h3v3" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>';

  function initExpand() {
    // Inject a button into every person card
    $('.person-card').each(function () {
      $('<button class="expand-btn" title="Expand map" aria-label="Expand map"></button>')
        .html(EXPAND_ICON)
        .appendTo(this);
    });

    $(document).on('click', '.expand-btn', function () {
      var $card = $(this).closest('.person-card');
      var expanding = !$card.hasClass('expanded');

      $card.toggleClass('expanded', expanding);
      $(this)
        .attr('title', expanding ? 'Collapse map' : 'Expand map')
        .html(expanding ? COLLAPSE_ICON : EXPAND_ICON);

      // Redraw all travels after the layout shift settles
      setTimeout(function () {
        mapInstances.forEach(function (m) {
          try { m.updateSize(); } catch (e) {}
        });
      }, 50);
    });
  }

  // ---- List Toggle ----------------------------------
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

  // ---- Boot -----------------------------------------
  $(document).ready(function () {
    initStateMaps();
    initCountryMaps();
    initTabs();
    initResize();
    initExpand();
    initListToggles();

    // Update footer year
    var yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

}(jQuery));
