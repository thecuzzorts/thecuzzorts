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
    { key: 'national-parks', label: 'National Parks', path: 'national-parks/index.html', color: '#C99A6A' },
    { key: 'disney',        label: 'Disney',        path: 'disney/index.html',       color: '#1F8FE5' },
    { key: 'stats',         label: 'By the Numbers', path: 'stats/index.html',        color: '#8B7EC8' }
  ];

  // Current section = the folder name in the path (e.g. "disney").
  var parts = location.pathname.split('/').filter(Boolean);
  parts.pop();                                   // drop the file (index.html)
  var currentKey = parts.length ? parts[parts.length - 1] : '';
  if (!SECTIONS.some(function (s) { return s.key === currentKey; })) {
    currentKey = '';
  }

  // prefix: '' on the homepage, '../' on any section page one level deep.
  var prefix = currentKey === '' ? '' : '../';
  SECTIONS.forEach(function (s) { s.href = prefix + s.path; });

  // --- Desktop strip ---------------------------------------
  var strip = document.createElement('nav');
  strip.className = 'global-nav-strip';
  strip.setAttribute('aria-label', 'Site sections');
  strip.innerHTML = SECTIONS.map(function (s) {
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
  SECTIONS.forEach(function (s) {
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
}());
