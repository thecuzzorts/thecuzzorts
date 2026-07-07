(function () {
  'use strict';

  var STATE_NAMES = {
    'US-AL': 'Alabama',       'US-AK': 'Alaska',         'US-AZ': 'Arizona',       'US-AR': 'Arkansas',
    'US-CA': 'California',    'US-CO': 'Colorado',       'US-CT': 'Connecticut',   'US-DE': 'Delaware',
    'US-FL': 'Florida',       'US-GA': 'Georgia',        'US-HI': 'Hawaii',        'US-ID': 'Idaho',
    'US-IL': 'Illinois',      'US-IN': 'Indiana',        'US-IA': 'Iowa',          'US-KS': 'Kansas',
    'US-KY': 'Kentucky',      'US-LA': 'Louisiana',      'US-ME': 'Maine',         'US-MD': 'Maryland',
    'US-MA': 'Massachusetts', 'US-MI': 'Michigan',       'US-MN': 'Minnesota',     'US-MS': 'Mississippi',
    'US-MO': 'Missouri',      'US-MT': 'Montana',        'US-NE': 'Nebraska',      'US-NV': 'Nevada',
    'US-NH': 'New Hampshire', 'US-NJ': 'New Jersey',     'US-NM': 'New Mexico',    'US-NY': 'New York',
    'US-NC': 'North Carolina','US-ND': 'North Dakota',   'US-OH': 'Ohio',          'US-OK': 'Oklahoma',
    'US-OR': 'Oregon',        'US-PA': 'Pennsylvania',   'US-RI': 'Rhode Island',  'US-SC': 'South Carolina',
    'US-SD': 'South Dakota',  'US-TN': 'Tennessee',      'US-TX': 'Texas',         'US-UT': 'Utah',
    'US-VT': 'Vermont',       'US-VA': 'Virginia',       'US-WA': 'Washington',    'US-WV': 'West Virginia',
    'US-WI': 'Wisconsin',     'US-WY': 'Wyoming',        'US-DC': 'D.C.'
  };

  function buildMapData() {
    var data = {};
    for (var code in racesJosh) {
      if (racesJosh[code].length) { data[code] = 1; }
    }
    return data;
  }

  function countStats() {
    var totalRaces = 0, totalStates = 0, byType = {};
    for (var code in racesJosh) {
      var races = racesJosh[code];
      if (!races.length) { continue; }
      totalStates++;
      totalRaces += races.length;
      races.forEach(function (r) {
        byType[r.type] = (byType[r.type] || 0) + 1;
      });
    }
    return { totalRaces: totalRaces, totalStates: totalStates, byType: byType };
  }

  var IMG_BASE = '../images/run/';

  function buildRaceListHTML() {
    var html = '';
    for (var code in racesJosh) {
      var races = racesJosh[code];
      if (!races.length) { continue; }
      var stateName = STATE_NAMES[code] || code;
      var countLabel = races.length === 1 ? '1 race' : races.length + ' races';

      var cardsHTML = races.map(function (race) {
        var isHalf = race.type === 'Half Marathon';
        var badgeClass = 'race-type-badge' + (isHalf ? ' race-type-badge--half' : '');
        var notesHTML = race.notes
          ? '<div class="race-notes">' + race.notes + '</div>'
          : '';
        var photosHTML = '';
        if (race.slug) {
          var medalSrc = IMG_BASE + race.slug + '-medal-2025.jpg';
          photosHTML = '<div class="race-photos">' +
            '<img class="race-photo-thumb" src="' + medalSrc + '" alt="Medal" data-caption="' + race.name + '" onerror="this.parentNode.removeChild(this)">' +
          '</div>';
        }
        return '<div class="race-entry">' +
          '<div class="race-details">' +
            '<div class="race-header-row">' +
              '<span class="race-name">' + race.name + '</span>' +
              '<span class="' + badgeClass + '">' + race.type + '</span>' +
            '</div>' +
            '<div class="race-meta">' +
              '<span class="race-date">' + race.date + '</span>' +
              '<span class="race-sep">·</span>' +
              '<span class="race-time">' + race.time + '</span>' +
            '</div>' +
            notesHTML +
          '</div>' +
          photosHTML +
        '</div>';
      }).join('');

      var listClass = 'race-list' + (races.length > 1 ? ' race-list--multi' : '');
      html += '<div class="state-group">' +
        '<div class="state-group-label">' +
          stateName +
          '<span class="state-race-count">' + countLabel + '</span>' +
        '</div>' +
        '<div class="' + listClass + '">' + cardsHTML + '</div>' +
      '</div>';
    }
    return html;
  }

  function initLightbox() {
    var overlay = document.createElement('div');
    overlay.id = 'raceLightbox';
    overlay.className = 'race-lb-overlay';
    overlay.innerHTML =
      '<div class="race-lb-backdrop"></div>' +
      '<div class="race-lb-frame">' +
        '<button class="race-lb-close" aria-label="Close">&times;</button>' +
        '<img class="race-lb-img" src="" alt="">' +
        '<div class="race-lb-caption"></div>' +
      '</div>';
    document.body.appendChild(overlay);

    var img     = overlay.querySelector('.race-lb-img');
    var caption = overlay.querySelector('.race-lb-caption');

    function open(src, cap) {
      img.src = src;
      img.alt = cap;
      caption.textContent = cap;
      overlay.classList.add('is-open');
      document.body.classList.add('lb-open');
    }
    function close() {
      overlay.classList.remove('is-open');
      document.body.classList.remove('lb-open');
    }

    overlay.querySelector('.race-lb-backdrop').addEventListener('click', close);
    overlay.querySelector('.race-lb-close').addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); }
    });

    document.getElementById('racesCard').addEventListener('click', function (e) {
      var thumb = e.target.closest('.race-photo-thumb');
      if (thumb) { open(thumb.src, thumb.dataset.caption || ''); }
    });
  }

  function buildTrendChart() {
    var MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var MO_MAP = {Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};

    function parseDate(str) {
      var p = str.split(/[\s,]+/);
      return new Date(+p[2], MO_MAP[p[0]], +p[1]);
    }
    function toSecs(t) {
      var p = t.split(':').map(Number);
      return p.length === 2 ? p[0]*60+p[1] : p[0]*3600+p[1]*60+p[2];
    }
    function fmtMM(s) {
      var m = Math.floor(s/60), sc = s%60;
      return m + ':' + (sc < 10 ? '0' : '') + sc;
    }
    function f(v) { return (+v).toFixed(1); }

    var fiveKs = [];
    for (var code in racesJosh) {
      racesJosh[code].forEach(function (r) { if (r.type === '5K') fiveKs.push(r); });
    }
    fiveKs.sort(function (a, b) { return parseDate(a.date) - parseDate(b.date); });
    if (fiveKs.length < 2) return;

    var W=760, H=220, PL=52, PR=16, PT=20, PB=44;
    var pw = W-PL-PR, ph = H-PT-PB, n = fiveKs.length;
    var yMin=1680, yMax=2280, yRange=yMax-yMin;

    function px(i)    { return PL + (i/(n-1))*pw; }
    function py(secs) { return PT + (secs-yMin)/yRange*ph; }

    var pts = fiveKs.map(function (r, i) {
      return { x: px(i), y: py(toSecs(r.time)), secs: toSecs(r.time), r: r };
    });
    var prSecs = Math.min.apply(null, pts.map(function (p) { return p.secs; }));

    function smoothD(points) {
      var d = 'M'+f(points[0].x)+','+f(points[0].y);
      for (var i=1; i<points.length; i++) {
        var p0=points[Math.max(0,i-2)], p1=points[i-1], p2=points[i], p3=points[Math.min(n-1,i+1)];
        var c1x=p1.x+(p2.x-p0.x)/6, c1y=p1.y+(p2.y-p0.y)/6;
        var c2x=p2.x-(p3.x-p1.x)/6, c2y=p2.y-(p3.y-p1.y)/6;
        d += ' C'+f(c1x)+','+f(c1y)+' '+f(c2x)+','+f(c2y)+' '+f(p2.x)+','+f(p2.y);
      }
      return d;
    }

    var linePath = smoothD(pts);
    var bY = f(PT+ph);
    var areaD = linePath+' L'+f(pts[n-1].x)+','+bY+' L'+f(pts[0].x)+','+bY+' Z';

    // Linear regression in SVG Y coords
    var sx=0, sy=0, sxy=0, sxx=0;
    pts.forEach(function (p, i) { sx+=i; sy+=p.y; sxy+=i*p.y; sxx+=i*i; });
    var slope=(n*sxy-sx*sy)/(n*sxx-sx*sx), b=(sy-slope*sx)/n;

    var s = '<svg class="trend-svg" viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg">';
    s += '<defs><linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#00AC4B" stop-opacity="0.2"/>' +
      '<stop offset="100%" stop-color="#00AC4B" stop-opacity="0.02"/>' +
      '</linearGradient></defs>';

    // Y grid lines at 30:00, 32:00, 34:00, 36:00
    [1800,1920,2040,2160].forEach(function (secs) {
      var y = f(py(secs));
      s += '<line class="chart-grid" x1="'+PL+'" y1="'+y+'" x2="'+(W-PR)+'" y2="'+y+'"/>';
      s += '<text class="chart-label chart-label--y" x="'+(PL-6)+'" y="'+f(py(secs)+4)+'">'+fmtMM(secs)+'</text>';
    });
    s += '<line class="chart-grid" x1="'+PL+'" y1="'+bY+'" x2="'+(W-PR)+'" y2="'+bY+'"/>';

    s += '<path class="chart-area" d="'+areaD+'"/>';
    s += '<line class="chart-trend-line" x1="'+f(pts[0].x)+'" y1="'+f(b)+'" x2="'+f(pts[n-1].x)+'" y2="'+f(slope*(n-1)+b)+'"/>';
    s += '<path class="chart-line" d="'+linePath+'"/>';

    fiveKs.forEach(function (race, i) {
      var x=f(pts[i].x), y=f(pts[i].y), isPR=pts[i].secs===prSecs;
      s += '<text class="chart-label chart-label--x" x="'+x+'" y="'+(H-8)+'">'+MONTHS[parseDate(race.date).getMonth()]+'</text>';
      if (isPR) {
        s += '<text class="chart-pr-label" x="'+x+'" y="'+f(pts[i].y-11)+'">PR</text>';
      }
      s += '<g class="chart-dot-group" data-name="'+race.name.replace(/"/g,'&quot;')+'" data-time="'+race.time+'" data-date="'+race.date+'"'+(isPR?' data-pr="1"':'')+'>'+
        '<circle cx="'+x+'" cy="'+y+'" r="14" class="chart-hit"/>'+
        '<circle cx="'+x+'" cy="'+y+'" r="'+(isPR?6:5)+'" class="chart-dot'+(isPR?' chart-dot--pr':'')+'"/>'+
        '</g>';
    });
    s += '</svg><div class="chart-tooltip" id="chartTooltip"></div>';

    var card = document.getElementById('trendCard');
    card.innerHTML = '<div class="trend-chart-wrap">'+s+'</div>';

    var tip = document.getElementById('chartTooltip');
    var wrap = card.querySelector('.trend-chart-wrap');
    card.querySelectorAll('.chart-dot-group').forEach(function (g) {
      var dot = g.querySelector('.chart-dot'), isPR = !!g.dataset.pr;
      g.addEventListener('mouseenter', function () {
        dot.setAttribute('r', 8);
        tip.innerHTML = (isPR ? '<span class="tt-pr">PR</span>' : '') +
          '<strong>' + g.dataset.name + '</strong><br>' + g.dataset.date + ' &middot; ' + g.dataset.time;
        tip.classList.add('is-visible');
      });
      g.addEventListener('mousemove', function (e) {
        var rect = wrap.getBoundingClientRect();
        tip.style.left = (e.clientX - rect.left + 14) + 'px';
        tip.style.top  = (e.clientY - rect.top  - 55) + 'px';
      });
      g.addEventListener('mouseleave', function () {
        dot.setAttribute('r', isPR ? 6 : 5);
        tip.classList.remove('is-visible');
      });
    });
  }

  function initMap(mapData) {
    $('#joshMap').vectorMap({
      map: 'us_lcc',
      backgroundColor: 'transparent',
      regionStyle: {
        initial: { fill: '#dce3ea', stroke: '#fff', 'stroke-width': 0.5 },
        hover:   { fill: '#b8c5ce', cursor: 'pointer' }
      },
      series: {
        regions: [{
          values: mapData,
          scale: { 1: '#00AC4B' },
          normalizeFunction: 'linear'
        }]
      },
      onRegionTipShow: function (e, el, code) {
        var races = racesJosh[code];
        var name = STATE_NAMES[code] || code;
        if (races && races.length) {
          var raceNames = races.map(function (r) { return r.name; }).join('<br>· ');
          el.html('<strong>' + name + '</strong><br>· ' + raceNames);
        } else {
          el.html(name);
        }
      }
    });
  }

  function init() {
    var mapData = buildMapData();
    var stats = countStats();

    document.getElementById('raceCount').textContent  = stats.totalRaces;
    document.getElementById('stateCount').textContent = stats.totalStates;

    var typeOrder = ['5K', '10K', 'Half Marathon', 'Marathon'];
    var parts = typeOrder
      .filter(function (t) { return stats.byType[t]; })
      .map(function (t) { return stats.byType[t] + ' × ' + t; });
    Object.keys(stats.byType).forEach(function (t) {
      if (typeOrder.indexOf(t) === -1) {
        parts.push(stats.byType[t] + ' × ' + t);
      }
    });
    document.getElementById('typeBreakdown').textContent = parts.join(' · ');

    document.getElementById('racesCard').innerHTML = buildRaceListHTML();

    buildTrendChart();
    initMap(mapData);
    initLightbox();
  }

  document.addEventListener('DOMContentLoaded', init);
}());
