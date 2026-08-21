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
    { key: 'travels',       label: 'Travels',       path: 'travels/index.html',      color: '#E8A020' },
    { key: 'turkey-hunting', label: 'Turkey Hunting', path: 'turkey-hunting/index.html', color: '#57BD83' },
    { key: 'fishing',       label: 'Fishing',        path: 'fishing/index.html',      color: '#1C7C9C' },
    { key: 'national-parks', label: 'National Parks', path: 'national-parks/index.html', color: '#C99A6A' },
    { key: 'disney',        label: 'Disney',        path: 'disney/index.html',       color: '#E0609C' },
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
      var clrs = ['#F07070','#E8A020','#57BD83','#C99A6A','#E0609C','#1C7C9C'];
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
}());
