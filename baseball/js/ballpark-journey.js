/* ============================================================
   Ballpark Journey animation -- animates a ball hopping through
   the 30 currently-active MLB parks in chronological first-visit
   order. A scoped-down sibling of the full animated journey on
   /baseball/mlb-games (same pixel-space ball-hop-arc technique,
   adapted here to BALLPARKS instead of the full game log): no
   speed control, no jump-to-year, no team-collection grid -- #mlb
   already has that "have we been here" view via its division chip
   lists, so this stays a lightweight highlight reel, not a second
   full control panel.
   ============================================================ */
(function () {
  var MONTHS = { jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11 };
  var MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function parseVisitDate(bp) {
    var parts = bp.note.trim().match(/^(\d{1,2})\s+(\w+)\s+(\d{4})$/);
    if (!parts) { return null; }
    var mo = MONTHS[parts[2].toLowerCase().slice(0, 3)];
    if (mo === undefined) { return null; }
    return new Date(parseInt(parts[3], 10), mo, parseInt(parts[1], 10));
  }

  function buildStops(ballparks) {
    var entries = [];
    ballparks.forEach(function (bp) {
      if (bp.status !== 'current') { return; }
      var d = parseVisitDate(bp);
      if (!d || isNaN(d.getTime())) { return; }
      entries.push({ bp: bp, d: d });
    });
    entries.sort(function (a, b) { return a.d - b.d; });
    return entries.map(function (e) {
      return { date: e.d, lat: e.bp.lat, lng: e.bp.lng, slug: e.bp.slug, name: e.bp.name, stadium: e.bp.stadium };
    });
  }

  function fmtDate(d) {
    return MONTH_NAMES[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  function init(ballparks) {
    var mapEl = document.getElementById('bpJourneyMap');
    if (!mapEl || typeof L === 'undefined') { return; }

    var stops = buildStops(ballparks);
    if (!stops.length) { return; }

    var map = L.map('bpJourneyMap', { scrollWheelZoom: false }).setView([38.5, -97], 3);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/' + (window.CUZZ_IS_DARK ? 'dark_all' : 'light_all') + '/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 12
    }).addTo(map);

    var trail = L.polyline([], { color: '#C8102E', weight: 2, opacity: 0.55 }).addTo(map);

    // One small static dot per stop, for context -- without these the
    // trail is just a tangle of lines with no visible endpoints. Starts
    // gray and turns red the moment the journey reaches it (see
    // updateVisitedMarkers below), kept deliberately simple (no popovers,
    // no counts, no below-map grid) since #mlb's division chip lists
    // already own the full "have we been here" collection view.
    var markers = stops.map(function (stop) {
      var icon = L.divIcon({
        className: 'bp-journey-marker-icon',
        html: '<div class="bp-journey-dot"></div>',
        iconSize: [10, 10],
        iconAnchor: [5, 5]
      });
      return L.marker([stop.lat, stop.lng], { icon: icon }).addTo(map);
    });
    // One grayed-out team-logo chip per stop, below the map -- lights up
    // in sync with the map dots the moment the journey reaches it. Same
    // "collection" concept as /mlb-games's Ballparks Unlocked grid, just
    // without a repeat-visit count badge, since each of these 30 stops is
    // a first visit by definition (no duplicates to tally).
    var teamGridEl = document.getElementById('bpJourneyTeamGrid');
    var chips = stops.map(function (stop) {
      var chip = document.createElement('div');
      chip.className = 'bp-journey-team-chip';
      chip.title = stop.name;
      chip.innerHTML = '<div class="team-logo ' + stop.slug + '"></div>';
      if (teamGridEl) { teamGridEl.appendChild(chip); }
      return chip;
    });

    function updateVisitedMarkers() {
      markers.forEach(function (m, i) {
        var el = m.getElement();
        if (el) { el.classList.toggle('is-visited', i <= idx); }
      });
      chips.forEach(function (chip, i) { chip.classList.toggle('is-visited', i <= idx); });
    }

    // Plain DOM element positioned in pixel space, not a Leaflet marker --
    // same approach /mlb-games's journey ball uses, for the same reason:
    // the camera never pans/zooms after init, so pixel coordinates for a
    // given stop are stable, letting a simple parabolic hop animate with
    // plain JS instead of fighting Leaflet's lat/lng marker positioning.
    var ballEl = document.createElement('div');
    ballEl.className = 'bp-journey-ball';
    ballEl.innerHTML = '&#9918;';
    mapEl.style.position = 'relative';
    mapEl.appendChild(ballEl);

    function pixelFor(stop) { return map.latLngToContainerPoint([stop.lat, stop.lng]); }
    function placeBallAtPixel(p) { ballEl.style.transform = 'translate(' + p.x + 'px,' + p.y + 'px)'; }
    function placeBallAt(stopIdx) { placeBallAtPixel(pixelFor(posFor(stopIdx))); }

    // idx starts at -1 -- "not started yet." Ball rests at HOME
    // (Springfield, IL -- same point /mlb-games uses) until Play is
    // pressed for the first time.
    var HOME = { lat: 39.7817, lng: -89.6501 };
    function posFor(i) { return i < 0 ? HOME : stops[i]; }

    var idx = -1, playing = false, timer = null;
    var STEP_MS = 500;

    if (window.ResizeObserver) {
      new ResizeObserver(function () { map.invalidateSize(); placeBallAt(idx); }).observe(mapEl);
    } else {
      window.addEventListener('load', function () { map.invalidateSize(); placeBallAt(idx); });
    }

    var playBtn = document.getElementById('bpJourneyPlayBtn');
    var resetBtn = document.getElementById('bpJourneyResetBtn');
    var captionEl = document.getElementById('bpJourneyCaption');
    var yearEl = document.getElementById('bpJourneyYear');
    var playOverlayEl = document.getElementById('bpJourneyPlayOverlay');

    function caption(stop, stepIndex) {
      captionEl.innerHTML =
        '<strong>' + fmtDate(stop.date) + '</strong> &middot; ' + stop.name + ' &middot; ' + stop.stadium +
        ' &middot; Stop ' + (stepIndex + 1) + ' of ' + stops.length;
    }

    // Year badge alternates red/blue on each change, matching /mlb-games's beat.
    var lastYear = null;
    var yearIsRed = true;
    function updateYearBadge(stop) {
      var y = stop.date.getFullYear();
      if (y === lastYear) { return; }
      lastYear = y;
      yearEl.textContent = y;
      yearEl.classList.add('is-shown');
      yearEl.classList.toggle('is-red', yearIsRed);
      yearEl.classList.toggle('is-blue', !yearIsRed);
      yearIsRed = !yearIsRed;
      yearEl.classList.remove('is-changing');
      void yearEl.offsetWidth; // restart the CSS transition
      yearEl.classList.add('is-changing');
      setTimeout(function () { yearEl.classList.remove('is-changing'); }, 250);
    }

    var animFrame = null;
    var BOUNCE_PX = 20;

    // Logical state (idx, trail, caption) updates instantly and
    // synchronously -- the arc animation is purely cosmetic.
    function commit(i) {
      idx = Math.max(0, Math.min(stops.length - 1, i));
      trail.setLatLngs(stops.slice(0, idx + 1).map(function (s) { return [s.lat, s.lng]; }));
      caption(stops[idx], idx);
      updateYearBadge(stops[idx]);
      updateVisitedMarkers();
      playOverlayEl.classList.remove('is-shown');
      return stops[idx];
    }

    function stepTo(i) {
      if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
      var prevStop = posFor(idx); // idx may be -1 (still at HOME) for the first hop
      var stop = commit(i);
      var p0 = pixelFor(prevStop);
      var p1 = pixelFor(stop);

      var start = null;
      function frame(ts) {
        if (!start) { start = ts; }
        var t = Math.min((ts - start) / STEP_MS, 1);
        var x = p0.x + (p1.x - p0.x) * t;
        var y = p0.y + (p1.y - p0.y) * t - BOUNCE_PX * Math.sin(Math.PI * t);
        placeBallAtPixel({ x: x, y: y });
        if (t < 1) {
          animFrame = requestAnimationFrame(frame);
        } else {
          animFrame = null;
          placeBallAtPixel(p1); // snap exactly, no leftover bounce offset
        }
      }
      animFrame = requestAnimationFrame(frame);
    }

    // Recursive setTimeout, not setInterval -- each step is scheduled only
    // after the previous one has run, so playback can never race ahead.
    function playStep() {
      if (idx >= stops.length - 1) { pause(); return; }
      stepTo(idx + 1);
      timer = setTimeout(playStep, STEP_MS);
    }
    function play() {
      if (playing) { return; }
      playing = true;
      playBtn.innerHTML = '&#10074;&#10074; Pause';
      playStep();
    }
    function pause() {
      playing = false;
      playBtn.innerHTML = '&#9654; Play';
      clearTimeout(timer);
    }

    function resetToHome() {
      if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
      idx = -1;
      trail.setLatLngs([]);
      placeBallAtPixel(pixelFor(HOME));
      captionEl.textContent = 'Press Play to start the journey from Springfield, IL';
      lastYear = null;
      yearEl.classList.remove('is-shown', 'is-changing');
      updateVisitedMarkers();
      playOverlayEl.classList.add('is-shown');
    }

    playBtn.addEventListener('click', function () { playing ? pause() : play(); });
    playOverlayEl.addEventListener('click', play);
    resetBtn.addEventListener('click', function () { pause(); resetToHome(); });

    resetToHome();
  }

  window.BallparkJourney = { init: init };
}());
