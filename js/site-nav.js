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

  // hrefs are relative from a section subfolder (every section page is
  // one level below the repo root, e.g. /baseball/index.html).
  var SECTIONS = [
    { key: '',              label: 'Home',          href: '../index.html' },
    { key: 'baseball',      label: 'Baseball',      href: '../baseball/index.html' },
    { key: 'travels',       label: 'Travels',       href: '../travels/index.html' },
    { key: 'turkeys',       label: 'Turkeys',       href: '../turkeys/index.html' },
    { key: 'national-parks', label: 'National Parks', href: '../national-parks/index.html' },
    { key: 'disney',        label: 'Disney',        href: '../disney/index.html' }
  ];

  // Current section = the folder name in the path (e.g. "disney").
  var parts = location.pathname.split('/').filter(Boolean);
  parts.pop();                                   // drop the file (index.html)
  var currentKey = parts.length ? parts[parts.length - 1] : '';
  if (!SECTIONS.some(function (s) { return s.key === currentKey; })) {
    currentKey = '';
  }

  // --- Desktop strip ---------------------------------------
  var strip = document.createElement('nav');
  strip.className = 'global-nav-strip';
  strip.setAttribute('aria-label', 'Site sections');
  strip.innerHTML = SECTIONS.map(function (s) {
    var current = s.key === currentKey;
    return '<a class="global-nav-link' + (current ? ' is-current' : '') + '"' +
           (current ? ' aria-current="page"' : '') +
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
