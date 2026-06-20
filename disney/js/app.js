/* ===================================================
   TheCuzzorts Disney Parks — app.js
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

  var ANYONE_COLOR       = '#E8A020';
  var WHOLE_FAMILY_COLOR = '#E8601A';

  // ---- Disney theme parks grouped by resort ---------
  var DISNEY_RESORTS = [
    {
      region: 'Walt Disney World',
      location: 'Florida, USA',
      lat: 28.3852, lng: -81.5639,
      parks: [
        { id: 'magic-kingdom',     name: 'Magic Kingdom' },
        { id: 'epcot',             name: 'EPCOT' },
        { id: 'hollywood-studios', name: 'Disney’s Hollywood Studios' },
        { id: 'animal-kingdom',    name: 'Disney’s Animal Kingdom' }
      ]
    },
    {
      region: 'Disneyland Resort',
      location: 'California, USA',
      lat: 33.8121, lng: -117.9190,
      parks: [
        { id: 'disneyland-park',      name: 'Disneyland Park' },
        { id: 'california-adventure', name: 'Disney California Adventure' }
      ]
    },
    {
      region: 'Disneyland Paris',
      location: 'Marne-la-Vallée, France',
      lat: 48.8722, lng: 2.7758,
      parks: [
        { id: 'paris-disneyland',          name: 'Disneyland Park' },
        { id: 'walt-disney-studios-paris', name: 'Walt Disney Studios Park' }
      ]
    },
    {
      region: 'Tokyo Disney Resort',
      location: 'Urayasu, Japan',
      lat: 35.6329, lng: 139.8804,
      parks: [
        { id: 'tokyo-disneyland', name: 'Tokyo Disneyland' },
        { id: 'tokyo-disneysea',  name: 'Tokyo DisneySea' }
      ]
    },
    {
      region: 'Shanghai Disney Resort',
      location: 'Shanghai, China',
      lat: 31.1430, lng: 121.6577,
      parks: [
        { id: 'shanghai-disneyland', name: 'Shanghai Disneyland' }
      ]
    },
    {
      region: 'Hong Kong Disneyland Resort',
      location: 'Lantau Island, Hong Kong',
      lat: 22.3130, lng: 114.0413,
      parks: [
        { id: 'hong-kong-disneyland', name: 'Hong Kong Disneyland' }
      ]
    }
  ];

  var TOTAL_PARKS = DISNEY_RESORTS.reduce(function (n, r) { return n + r.parks.length; }, 0);

  // ---- Load person data from global vars ------------
  function getPersonData(id) {
    var visitedMap = {
      josh:  typeof disneyVisitedJosh  !== 'undefined' ? disneyVisitedJosh  : {},
      sam:   typeof disneyVisitedSam   !== 'undefined' ? disneyVisitedSam   : {},
      ellie: typeof disneyVisitedEllie !== 'undefined' ? disneyVisitedEllie : {},
      tilly: typeof disneyVisitedTilly !== 'undefined' ? disneyVisitedTilly : {},
      poppy: typeof disneyVisitedPoppy !== 'undefined' ? disneyVisitedPoppy : {}
    };
    var detailsMap = {
      josh:  typeof disneyDetailsJosh  !== 'undefined' ? disneyDetailsJosh  : {},
      sam:   typeof disneyDetailsSam   !== 'undefined' ? disneyDetailsSam   : {},
      ellie: typeof disneyDetailsEllie !== 'undefined' ? disneyDetailsEllie : {},
      tilly: typeof disneyDetailsTilly !== 'undefined' ? disneyDetailsTilly : {},
      poppy: typeof disneyDetailsPoppy !== 'undefined' ? disneyDetailsPoppy : {}
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
      ? ' data-tooltip="' + parts.join(' — ').replace(/"/g, '&quot;') + '"'
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
    DISNEY_RESORTS.forEach(function (resort) {
      var resortParks = resort.parks.filter(function (p) { return visited[p.id]; });
      if (resortParks.length === 0) return;
      html += '<div class="region-group">';
      html += '<div class="region-label">' + resort.region + '</div>';
      html += '<div class="visit-chips">';
      resortParks.forEach(function (p) {
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
    var combined = {};
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
    DISNEY_RESORTS.forEach(function (resort) {
      var resortParks = resort.parks.filter(function (p) { return combined[p.id]; });
      if (resortParks.length === 0) return;
      html += '<div class="region-group">';
      html += '<div class="region-label">' + resort.region + '</div>';
      html += '<div class="visit-chips">';
      resortParks.forEach(function (p) {
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
    return DISNEY_RESORTS.reduce(function (total, resort) {
      return total + resort.parks.filter(function (p) {
        return PEOPLE.every(function (person) {
          return getPersonData(person.id).visited[p.id];
        });
      }).length;
    }, 0);
  }

  function buildWholeFamilyListHTML() {
    var html = '<div class="visit-list">';
    var hasAny = false;
    DISNEY_RESORTS.forEach(function (resort) {
      var parks = resort.parks.filter(function (p) {
        return PEOPLE.every(function (person) {
          return getPersonData(person.id).visited[p.id];
        });
      });
      if (parks.length === 0) return;
      hasAny = true;
      html += '<div class="region-group">';
      html += '<div class="region-label">' + resort.region + '</div>';
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

  // ---- Build bucket list — parks Josh & Sam haven't both visited --
  function buildBucketListHTML() {
    var josh = getPersonData('josh').visited;
    var sam  = getPersonData('sam').visited;

    var html = '<div class="visit-list open">';
    var hasAny = false;
    DISNEY_RESORTS.forEach(function (resort) {
      var bucket = resort.parks.filter(function (p) {
        return !(josh[p.id] && sam[p.id]);
      });
      if (bucket.length === 0) return;
      hasAny = true;
      html += '<div class="region-group">';
      html += '<div class="region-label">' + resort.region + '</div>';
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
    var josh = getPersonData('josh').visited;
    var sam  = getPersonData('sam').visited;
    return DISNEY_RESORTS.reduce(function (total, resort) {
      return total + resort.parks.filter(function (p) {
        return !(josh[p.id] && sam[p.id]);
      }).length;
    }, 0);
  }

  // ---- Parks filter row + card ----------------------
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

    makeBtn('anyone',       'Anyone',       ANYONE_COLOR,       countFamilyVisited(),      true);
    makeBtn('whole-family', 'Whole Family', WHOLE_FAMILY_COLOR, countWholeFamilyVisited(), false);
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

    addView('anyone',       buildFamilyListHTML(),      true);
    addView('whole-family', buildWholeFamilyListHTML(), false);
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
      if (!btn) return;
      var view = btn.getAttribute('data-view');

      container.querySelectorAll('.person-filter').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      card.querySelectorAll('.park-view').forEach(function (v) { v.classList.remove('active'); });
      var activeView = card.querySelector('.park-view[data-view="' + view + '"]');
      if (activeView) activeView.classList.add('active');
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

  // ---- Disney map (Leaflet) — one marker per resort -
  function initDisneyMap() {
    var mapEl = document.getElementById('disneyMap');
    if (!mapEl || typeof L === 'undefined') return;

    var map = L.map('disneyMap', { scrollWheelZoom: false, worldCopyJump: true })
      .setView([25, 30], 1);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 14
    }).addTo(map);

    var activeFilter = 'whole-family';
    var markerEntries = [];

    function resortVisitedBy(resort, personId) {
      var visited = getPersonData(personId).visited;
      return resort.parks.some(function (p) { return visited[p.id]; });
    }

    function getMarkerColor(resort) {
      if (activeFilter === 'anyone') {
        var anyone = PEOPLE.some(function (p) { return resortVisitedBy(resort, p.id); });
        return anyone ? ANYONE_COLOR : '#aaaaaa';
      }
      if (activeFilter === 'whole-family') {
        var all = PEOPLE.every(function (p) { return resortVisitedBy(resort, p.id); });
        return all ? WHOLE_FAMILY_COLOR : '#aaaaaa';
      }
      var person = PEOPLE.filter(function (p) { return p.id === activeFilter; })[0];
      return resortVisitedBy(resort, activeFilter) ? person.color : '#aaaaaa';
    }

    function getPopupContent(resort) {
      var html = '<strong>' + resort.region + '</strong><br><em style="color:#888">' + resort.location + '</em>';
      html += '<div style="margin-top:4px;font-size:0.82em;color:#555">';
      resort.parks.forEach(function (park) {
        var visitedBy = PEOPLE.filter(function (p) {
          return getPersonData(p.id).visited[park.id];
        });
        html += '<div style="margin-top:2px">' + park.name;
        if (visitedBy.length) {
          html += ' ' + visitedBy.map(function (p) {
            return '<span style="color:' + p.color + '">●</span>';
          }).join('');
        } else {
          html += ' <span style="color:#bbb">○</span>';
        }
        html += '</div>';
      });
      html += '</div>';
      return html;
    }

    DISNEY_RESORTS.forEach(function (resort) {
      var circle = L.circleMarker([resort.lat, resort.lng], {
        radius: 8,
        color: '#ffffff',
        weight: 1.5,
        fillOpacity: 0.88,
        fillColor: getMarkerColor(resort)
      }).bindPopup(getPopupContent(resort));
      circle.addTo(map);
      markerEntries.push({ circle: circle, resort: resort });
    });

    function updateMarkers() {
      var visitedColor;
      if (activeFilter === 'anyone') {
        visitedColor = ANYONE_COLOR;
      } else if (activeFilter === 'whole-family') {
        visitedColor = WHOLE_FAMILY_COLOR;
      } else {
        visitedColor = PEOPLE.filter(function (p) { return p.id === activeFilter; })[0].color;
      }
      markerEntries.forEach(function (m) {
        m.circle.setStyle({ fillColor: getMarkerColor(m.resort) });
      });
      var legendDot = document.getElementById('legendVisited');
      if (legendDot) legendDot.style.background = visitedColor;
    }

    document.querySelectorAll('.map-filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.map-filter-btn').forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        updateMarkers();
      });
    });

    function refreshMapSize() { map.invalidateSize(); }
    setTimeout(refreshMapSize, 0);
    window.addEventListener('load', refreshMapSize);
    window.addEventListener('resize', refreshMapSize);
  }

  // ---- Init -----------------------------------------
  function init() {
    buildParksFilterRow();
    buildParksCard();
    initParkFilters();

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
    initDisneyMap();
  }

  document.addEventListener('DOMContentLoaded', init);

}());
