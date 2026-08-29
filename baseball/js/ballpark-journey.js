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
    if (!mapEl || typeof maplibregl === 'undefined') { return; }

    var stops = buildStops(ballparks);
    if (!stops.length) { return; }

    // MapLibre GL JS + CARTO vector basemap -- ported from Leaflet since
    // CARTO now watermarks unauthenticated *raster* tile requests and
    // recommends vector instead (https://docs.carto.com/faqs/carto-basemaps).
    // MapLibre takes [lng, lat] -- the opposite order from Leaflet's [lat, lng].
    var map = new maplibregl.Map({
      container: 'bpJourneyMap',
      style: 'https://basemaps.cartocdn.com/gl/' + (window.CUZZ_IS_DARK ? 'dark-matter' : 'positron') + '-gl-style/style.json?key=cb1_2jdq_1_6d79969636549968efce8740',
      center: [-97, 38.5],
      zoom: 2,
      scrollZoom: false
    });
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left');

    // The trail is a GeoJSON source + line layer (not a Leaflet-style
    // vector overlay object), so it can't exist until the style finishes
    // loading. Markers/ball/controls below don't have that dependency, so
    // only this is gated -- gating the whole feature on 'load' would leave
    // Play/Reset dead until the style round-trips, for no reason.
    var trailReady = false;
    map.on('load', function () {
      map.addSource('bp-journey-trail', {
        type: 'geojson',
        data: { type: 'Feature', geometry: { type: 'LineString', coordinates: [] } }
      });
      map.addLayer({
        id: 'bp-journey-trail',
        type: 'line',
        source: 'bp-journey-trail',
        paint: { 'line-color': '#C8102E', 'line-width': 2, 'line-opacity': 0.55 }
      });
      trailReady = true;
    });
    // commit() always resends the *entire* trail-so-far (not incrementally),
    // so if this fires before trailReady, the very next commit() call (the
    // next step) naturally catches the line up -- no separate "replay on
    // load" logic needed.
    function setTrailCoords(lngLats) {
      if (!trailReady) { return; }
      map.getSource('bp-journey-trail').setData({ type: 'Feature', geometry: { type: 'LineString', coordinates: lngLats } });
    }

    // One small static dot per stop, for context -- without these the
    // trail is just a tangle of lines with no visible endpoints. Starts
    // gray and turns red the moment the journey reaches it (see
    // updateVisitedMarkers below), kept deliberately simple (no popovers,
    // no counts, no below-map grid) since #mlb's division chip lists
    // already own the full "have we been here" collection view.
    var markers = stops.map(function (stop) {
      var el = document.createElement('div');
      el.className = 'bp-journey-marker-icon';
      var dot = document.createElement('div');
      dot.className = 'bp-journey-dot';
      el.appendChild(dot);
      return new maplibregl.Marker({ element: el }).setLngLat([stop.lng, stop.lat]).addTo(map);
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

    // Plain DOM element positioned in pixel space, not a maplibregl.Marker --
    // same approach /mlb-games's journey ball uses, for the same reason:
    // the camera never pans/zooms after init, so pixel coordinates for a
    // given stop are stable, letting a simple parabolic hop animate with
    // plain JS instead of fighting MapLibre's lng/lat marker positioning.
    var ballEl = document.createElement('div');
    ballEl.className = 'bp-journey-ball';
    ballEl.innerHTML = '&#9918;';
    mapEl.style.position = 'relative';
    mapEl.appendChild(ballEl);

    function pixelFor(stop) { return map.project([stop.lng, stop.lat]); }
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
      new ResizeObserver(function () { map.resize(); placeBallAt(idx); }).observe(mapEl);
    } else {
      window.addEventListener('load', function () { map.resize(); placeBallAt(idx); });
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
      setTrailCoords(stops.slice(0, idx + 1).map(function (s) { return [s.lng, s.lat]; }));
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
      setTrailCoords([]);
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
