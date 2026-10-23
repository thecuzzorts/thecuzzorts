/* ============================================================
   Global cross-site navigation.
   Injected into the shared .site-header on every section page so
   visitors can jump Home or bounce between sections. Single source
   of truth for the section list — edit SECTIONS here, not per page.

   Renders two synced controls (styled in css/site-chrome.css):
     • .global-nav-strip   — slim horizontal links (desktop)
     • .global-nav-select  — native dropdown switcher (mobile)
   ============================================================ */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  if (!header) { return; }

  // Paths are root-relative (no leading slash) — prefix is computed
  // at runtime so this script works from both the homepage (depth 0)
  // and any section page (depth 1).
  var SECTIONS = [
    { key: '',              label: 'Home',          path: 'index.html',              color: '#c8d8e4' },
    { key: 'baseball',      label: 'Baseball',      path: 'baseball/index.html',     color: '#F07070' },
    { key: 'travels',       label: 'Travels',       path: 'travels/index.html',      color: '#FF8200' },
    { key: 'national-parks', label: 'National Parks', path: 'national-parks/index.html', color: '#F5C518' },
    { key: 'hunting',       label: 'Hunting',        path: 'hunting/index.html',      color: '#57BD83' },
    { key: 'fishing',       label: 'Fishing',        path: 'fishing/index.html',      color: '#1C7C9C' },
    { key: 'disney',        label: 'Disney',        path: 'disney/index.html',       color: '#E060C6' },
    { key: 'stats',         label: 'By the Numbers', path: 'stats/index.html',        color: '#8B7EC8', hidden: true },
    { key: 'run',           label: 'Running',        path: 'run/index.html',          color: '#00AC4B', hidden: true },
    { key: 'trapping',      label: 'Trapping',       path: 'trapping/index.html',     color: '#8C5A3B', hidden: true },
    { key: 'mlb-games',     label: 'MLB Games',      path: 'baseball/mlb-games/index.html', color: '#F07070', hidden: true }
  ];

  // Current section = the folder name in the path (e.g. "disney").
  var parts = location.pathname.split('/').filter(Boolean);
  parts.pop();                                   // drop the file (index.html)
  var currentKey = parts.length ? parts[parts.length - 1] : '';
  if (!SECTIONS.some(function (s) { return s.key === currentKey; })) {
    currentKey = '';
  }

  // prefix: '' on the homepage, '../' one level deep, '../../' two levels
  // deep (e.g. baseball/mlb-games/), etc. -- derived from actual path depth
  // rather than hardcoded, so nested section pages resolve correctly too.
  var prefix = parts.length ? new Array(parts.length + 1).join('../') : '';
  SECTIONS.forEach(function (s) { s.href = prefix + s.path; });

  // --- Desktop strip ---------------------------------------
  var strip = document.createElement('nav');
  strip.className = 'global-nav-strip';
  strip.setAttribute('aria-label', 'Site sections');
  strip.innerHTML = SECTIONS.filter(function (s) { return !s.hidden; }).map(function (s) {
    var current = s.key === currentKey;
    return '<a class="global-nav-link' + (current ? ' is-current' : '') + '"' +
           (current ? ' aria-current="page"' : '') +
           ' style="--nav-color:' + s.color + '"' +
           ' href="' + s.href + '">' + s.label + '</a>';
  }).join('<span class="global-nav-sep" aria-hidden="true">&middot;</span>');

  // --- Mobile dropdown (native select) ---------------------
  var selectWrap = document.createElement('div');
  selectWrap.className = 'global-nav-select';
  var select = document.createElement('select');
  select.setAttribute('aria-label', 'Go to section');
  SECTIONS.filter(function (s) { return !s.hidden; }).forEach(function (s) {
    var opt = document.createElement('option');
    opt.value = s.href;
    opt.textContent = s.label;
    if (s.key === currentKey) { opt.selected = true; }
    select.appendChild(opt);
  });
  select.addEventListener('change', function () {
    if (select.value) { window.location.href = select.value; }
  });
  selectWrap.appendChild(select);

  // --- Inject above the title ------------------------------
  var bar = document.createElement('div');
  bar.className = 'global-nav';
  bar.appendChild(strip);
  bar.appendChild(selectWrap);
  header.insertBefore(bar, header.firstChild);

  // --- Theme toggle (auto-detects OS preference; click overrides it) ---
  (function () {
    var STORAGE_KEY = 'theme';
    var mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    function storedTheme() {
      try { return window.localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function effectiveTheme() {
      var stored = storedTheme();
      if (stored === 'dark' || stored === 'light') { return stored; }
      return (mql && mql.matches) ? 'dark' : 'light';
    }

    var SUN_ICON = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>';
    var MOON_ICON = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/></svg>';

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'theme-toggle';

    function render() {
      var theme = effectiveTheme();
      toggle.innerHTML = theme === 'dark' ? MOON_ICON : SUN_ICON;
      var label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
    }

    // Broadcast so per-page scripts that paint colors via inline styles
    // (e.g. jVectorMap/Leaflet init, or JS-computed chip tints) can react —
    // plain CSS var(--token) consumers already update for free via the
    // [data-theme] attribute and need no listener.
    function broadcast() {
      window.dispatchEvent(new CustomEvent('cuzz-theme-change', { detail: { theme: effectiveTheme() } }));
    }

    toggle.addEventListener('click', function () {
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduce) {
        document.documentElement.classList.add('theme-changing');
        window.setTimeout(function () {
          document.documentElement.classList.remove('theme-changing');
        }, 380);
      }
      var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { window.localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
      render();
      broadcast();
    });

    // Keep the icon in sync with OS changes as long as the visitor
    // hasn't set an explicit override via the toggle.
    if (mql && mql.addEventListener) {
      mql.addEventListener('change', function () {
        if (!storedTheme()) { render(); broadcast(); }
      });
    }

    render();
    header.appendChild(toggle);
  }());

  // --- End mark: mini ring appended to <main> on all section pages ---
  if (currentKey !== '') {
    var mainEl = document.querySelector('main');
    if (mainEl) {
      var endMark = document.createElement('div');
      endMark.className = 'site-end-mark';
      endMark.setAttribute('aria-hidden', 'true');
      var ns = 'http://www.w3.org/2000/svg';
      var svg = document.createElementNS(ns, 'svg');
      svg.setAttribute('class', 'site-end-ring');
      svg.setAttribute('viewBox', '0 0 1200 500');
      svg.setAttribute('preserveAspectRatio', 'xMidYMax slice');
      var clrs = ['#F07070','#FF8200','#F5C518','#57BD83','#1C7C9C','#E060C6'];
      for (var ci = 0; ci < 9; ci++) {
        var c = document.createElementNS(ns, 'circle');
        c.setAttribute('cx', (Math.random() * 1400 - 100).toFixed(0));
        c.setAttribute('cy', (Math.random() * 320 + 200).toFixed(0));
        c.setAttribute('r',  (Math.random() * 150 + 100).toFixed(0));
        c.setAttribute('fill', clrs[Math.floor(Math.random() * clrs.length)]);
        c.setAttribute('fill-opacity', (Math.random() * 0.06 + 0.08).toFixed(2));
        svg.appendChild(c);
      }
      endMark.appendChild(svg);
      mainEl.appendChild(endMark);
    }
  }

  // Visit lists: size the open height so max-height can ease instead of popping.
  function syncVisitLists(animate) {
    document.querySelectorAll('.visit-list').forEach(function (list) {
      var open = list.classList.contains('open');
      var next = open ? '1' : '0';
      var prev = list.getAttribute('data-open');
      if (prev === next && list.style.maxHeight) { return; }
      var first = prev === null;
      list.setAttribute('data-open', next);
      if (first || !animate) { list.style.transition = 'none'; }
      list.style.maxHeight = open ? (list.scrollHeight + 'px') : '0px';
      if (first || !animate) {
        void list.offsetHeight;
        list.style.transition = '';
      }
    });
  }

  var listSyncQueued = false;
  function queueVisitLists(animate) {
    if (listSyncQueued) { return; }
    listSyncQueued = true;
    window.requestAnimationFrame(function () {
      listSyncQueued = false;
      syncVisitLists(animate);
    });
  }

  syncVisitLists(false);
  window.addEventListener('load', function () {
    document.querySelectorAll('.visit-list.open').forEach(function (list) {
      list.style.transition = 'none';
      list.style.maxHeight = list.scrollHeight + 'px';
      void list.offsetHeight;
      list.style.transition = '';
    });
  });
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('.list-toggle')) { queueVisitLists(true); }
  });
  if (window.MutationObserver) {
    new MutationObserver(function () { queueVisitLists(true); }).observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }

  // Photo lightboxes grow from the thumbnail and return along the same path.
  (function () {
    var OVERLAY = '.lb-overlay, .tlb-overlay, .dlb-overlay, .race-lb-overlay';
    var FRAME = '.lb-frame, .tlb-frame, .dlb-frame, .lb-figure, .race-lb-frame';
    var CLOSE = '.lb-close, .tlb-close, .dlb-close, .race-lb-close, .lb-backdrop, .tlb-backdrop, .dlb-backdrop, .race-lb-backdrop';
    var SKIP = '.lb-prev, .lb-next, .tlb-prev, .tlb-next, .dlb-prev, .dlb-next';
    var OPEN_EASE = 'transform 0.38s cubic-bezier(0.2, 0.9, 0.3, 1)';
    var CLOSE_EASE = 'transform 0.38s cubic-bezier(0, 0.7, 0.1, 0.8)';
    var source = null;
    var replaying = false;

    function reduced() {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function overlayOf(node) {
      return node && node.closest ? node.closest(OVERLAY) : null;
    }

    function shown(overlay) {
      if (!overlay) { return false; }
      if (overlay.classList.contains('is-open')) { return true; }
      return window.getComputedStyle(overlay).display !== 'none';
    }

    function delta(frame, img) {
      var from = img.getBoundingClientRect();
      var previousTransform = frame.style.transform;
      var previousTransition = frame.style.transition;
      frame.style.transition = 'none';
      frame.style.transform = 'none';
      var to = frame.getBoundingClientRect();
      frame.style.transform = previousTransform;
      frame.style.transition = previousTransition;
      if (!from.width || !from.height || !to.width || !to.height) { return null; }
      var s = Math.max(0.05, Math.min(from.width / to.width, from.height / to.height));
      return {
        s: s,
        dx: (from.left + from.width / 2) - (to.left + to.width / 2),
        dy: (from.top + from.height / 2) - (to.top + to.height / 2)
      };
    }

    function clearFrame(overlay) {
      var frame = overlay.querySelector(FRAME);
      if (!frame) { return; }
      frame.style.transition = '';
      frame.style.transform = '';
    }

    document.addEventListener('pointerdown', function (e) {
      var img = e.target.closest && e.target.closest('img');
      if (!img || overlayOf(img)) { return; }
      source = img;
    }, true);

    function playIn(overlay) {
      if (overlay.getAttribute('data-lb-shown') === '1') { return; }
      overlay.setAttribute('data-lb-shown', '1');
      if (reduced() || !source || !source.isConnected) { return; }
      var img = source;
      var generation = String(Date.now()) + Math.random();
      overlay.setAttribute('data-lb-gen', generation);
      window.requestAnimationFrame(function () {
        if (overlay.getAttribute('data-lb-gen') !== generation || !shown(overlay)) { return; }
        var frame = overlay.querySelector(FRAME);
        if (!frame) { return; }
        var move = delta(frame, img);
        if (!move) { return; }
        frame.style.transition = 'none';
        frame.style.transform = 'translate(' + move.dx + 'px,' + move.dy + 'px) scale(' + move.s + ')';
        void frame.offsetWidth;
        frame.style.transition = OPEN_EASE;
        frame.style.transform = 'none';
      });
    }

    function visibleOverlay() {
      var found = null;
      document.querySelectorAll(OVERLAY).forEach(function (overlay) {
        if (shown(overlay)) { found = overlay; }
      });
      return found;
    }

    function returnToSource(overlay, afterward) {
      var frame = overlay.querySelector(FRAME);
      var move = frame && source && source.isConnected ? delta(frame, source) : null;
      overlay.setAttribute('data-lb-gen', 'closing');
      if (!frame || !move) { afterward(); return; }
      frame.style.transition = CLOSE_EASE;
      frame.style.transform = 'translate(' + move.dx + 'px,' + move.dy + 'px) scale(' + move.s + ')';
      var done = false;
      function finish() {
        if (done) { return; }
        done = true;
        frame.removeEventListener('transitionend', finish);
        afterward();
      }
      frame.addEventListener('transitionend', finish);
      window.setTimeout(finish, 460);
    }

    function watchOverlay(overlay) {
      if (shown(overlay)) { playIn(overlay); }
      else {
        overlay.removeAttribute('data-lb-shown');
        clearFrame(overlay);
      }
    }

    function scanOverlays() {
      document.querySelectorAll(OVERLAY).forEach(watchOverlay);
    }

    scanOverlays();
    if (window.MutationObserver) {
      new MutationObserver(scanOverlays).observe(document.body, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['class', 'style']
      });
    }

    document.addEventListener('click', function (e) {
      if (replaying || reduced() || !source || !source.isConnected) { return; }
      if (e.target.closest && e.target.closest(SKIP)) { return; }
      var overlay = overlayOf(e.target);
      if (!overlay || !shown(overlay)) { return; }
      var closer = e.target.closest && e.target.closest(CLOSE);
      if (!closer && e.target !== overlay) { return; }
      e.preventDefault();
      e.stopPropagation();
      returnToSource(overlay, function () {
        replaying = true;
        (closer || overlay).click();
        replaying = false;
      });
    }, true);

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || replaying || reduced() || !source || !source.isConnected) { return; }
      var overlay = visibleOverlay();
      if (!overlay) { return; }
      e.preventDefault();
      e.stopPropagation();
      returnToSource(overlay, function () {
        replaying = true;
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
        replaying = false;
      });
    }, true);
  }());
}());
