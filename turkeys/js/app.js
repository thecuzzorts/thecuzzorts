/* ===================================================
   TheCuzzorts — Turkey Maps app.js
   =================================================== */

(function ($) {

  // ---- Person config --------------------------------
  var people = [
    { id: 'josh',   color: '#E8A020', data: function () { return turkeysHarvestedJosh;   } },
    { id: 'sam',    color: '#662684', data: function () { return turkeysHarvestedSam;    } },
    { id: 'jack',   color: '#4A9E2F', data: function () { return turkeysHarvestedJack;   } },
    { id: 'debbie', color: '#D93025', data: function () { return turkeysHarvestedDebbie; } },
    { id: 'tilly',  color: '#0898ff', data: function () { return turkeysHarvestedTilly;  } }
  ];

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

  function debounce(fn, delay) {
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }

  // ---- List builder ---------------------------------

  function buildTurkeyListHTML(data) {
    var harvested = [];
    var hunted    = [];

    Object.keys(data).forEach(function (code) {
      var v = data[code];
      if (v >= 1)    harvested.push(code);
      else if (v > 0) hunted.push(code);
    });

    if (harvested.length === 0 && hunted.length === 0) return '';

    function byName(a, b) {
      return (STATE_NAMES[a] || a).localeCompare(STATE_NAMES[b] || b);
    }
    harvested.sort(byName);
    hunted.sort(byName);

    var html = '<div class="visit-list">';

    if (harvested.length > 0) {
      html += '<div class="turkey-group">';
      html += '<div class="turkey-group-label">Harvested</div>';
      html += '<div class="visit-chips">';
      harvested.forEach(function (code) {
        html += '<span class="visit-chip">' + (STATE_NAMES[code] || code) + '</span>';
      });
      html += '</div></div>';
    }

    if (hunted.length > 0) {
      html += '<div class="turkey-group">';
      html += '<div class="turkey-group-label">Hunted</div>';
      html += '<div class="visit-chips">';
      hunted.forEach(function (code) {
        html += '<span class="visit-chip turkey-chip--hunted">' + (STATE_NAMES[code] || code) + '</span>';
      });
      html += '</div></div>';
    }

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

  // ---- Init Maps ------------------------------------
  function initMaps() {
    people.forEach(function (person) {
      var data  = person.data();
      var mapId = '#' + person.id + 'Turkeys';

      if (!$(mapId).length) return;

      $('#' + person.id + 'Total').text(sumHarvested(data));

      $(mapId).vectorMap({
        map: 'us_lcc',
        backgroundColor: '#1C6BA0',
        series: {
          regions: [{
            values: data,
            scale: ['#EFEFEF', person.color],
            normalizeFunction: 'polynomial'
          }]
        }
      });

      registerMap(mapId);
      injectList(mapId, buildTurkeyListHTML(data));
    });
  }

  // ---- Expand / Collapse ----------------------------
  var EXPAND_ICON   = '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M1 4V1h3M6 1h3v3M9 6v3H6M4 9H1V6"/><path d="M1 1l8 8M9 1L1 9" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>';
  var COLLAPSE_ICON = '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M4 1v3H1M6 4h3V1M6 9V6h3M1 6h3v3" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>';

  function initExpand() {
    $('.person-card').each(function () {
      $('<button class="expand-btn" title="Expand map" aria-label="Expand map"></button>')
        .html(EXPAND_ICON)
        .appendTo(this);
    });

    $(document).on('click', '.expand-btn', function () {
      var $card     = $(this).closest('.person-card');
      var expanding = !$card.hasClass('expanded');
      $card.toggleClass('expanded', expanding);
      $(this)
        .attr('title', expanding ? 'Collapse map' : 'Expand map')
        .html(expanding ? COLLAPSE_ICON : EXPAND_ICON);

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

  // ---- Family Combined Map --------------------------
  function initFamilyMap() {
    if (!$('#familyTurkeys').length) return;

    // For each state: count people who harvested (value >= 1) and who hunted (value > 0)
    var harvestCombined = {};
    var huntCombined    = {};

    people.forEach(function (person) {
      var data = person.data();
      Object.keys(data).forEach(function (key) {
        var v = Number(data[key]);
        harvestCombined[key] = (harvestCombined[key] || 0) + (Math.round(v) >= 1 ? 1 : 0);
        huntCombined[key]    = (huntCombined[key]    || 0) + (v > 0 ? 1 : 0);
      });
    });

    var totalHarvested = Object.keys(harvestCombined).reduce(function (sum, key) {
      return sum + (harvestCombined[key] >= 1 ? 1 : 0);
    }, 0);

    $('#familyTotal').text(totalHarvested);

    $('#familyTurkeys').vectorMap({
      map: 'us_lcc',
      backgroundColor: '#1C6BA0',
      series: {
        regions: [{
          values: harvestCombined,
          scale: ['#EFEFEF', '#E8601A'],
          normalizeFunction: 'linear'
        }]
      },
      onRegionTipShow: function (_e, el, code) {
        var count = harvestCombined[code] || 0;
        var label = count === 1 ? '1 family member' : count + ' family members';
        var tip = '<strong>' + el.html() + '</strong>';
        if (count > 0) tip += '<br><span style="opacity:.8">Harvested by ' + label + '</span>';
        el.html(tip);
      }
    });

    registerMap('#familyTurkeys');

    // Build list data: harvested = 1, hunted-only = 0.001, neither = 0
    var listData = {};
    Object.keys(harvestCombined).forEach(function (key) {
      if (harvestCombined[key] >= 1)  listData[key] = 1;
      else if (huntCombined[key] >= 1) listData[key] = 0.001;
      else                             listData[key] = 0;
    });
    injectList('#familyTurkeys', buildTurkeyListHTML(listData));
  }

  // ---- Window Resize --------------------------------
  function initResize() {
    $(window).on('resize', debounce(function () {
      mapInstances.forEach(function (m) {
        try { m.updateSize(); } catch (e) {}
      });
    }, 150));
  }

  // ---- Boot -----------------------------------------
  $(document).ready(function () {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    initMaps();
    initFamilyMap();
    initExpand();
    initListToggles();
    initResize();
  });

}(jQuery));
