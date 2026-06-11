/* ============================================================
   Section labels — shared enhancer.
   For every .section-heading: injects a gold line-icon, wraps the
   text as the gold-underlined label, adds a trailing rule, an
   optional count badge (data-count) and a hover anchor link (when
   the heading has an id). If header nav links point at those ids,
   it also drives scrollspy highlighting. Mirrors baseball.
   ============================================================ */
(function () {
  var PERSON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/></svg>';
  var GROUP  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><circle cx="17.5" cy="9" r="2.3"/><path d="M16.2 14.3A4.5 4.5 0 0 1 21 18.6"/></svg>';
  var TWO    = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="9" r="3"/><path d="M2.5 20a5.5 5.5 0 0 1 11 0"/><circle cx="16.5" cy="9" r="3"/><path d="M14 20a5.5 5.5 0 0 1 7.5-5.1"/></svg>';
  var PIN    = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.4"/></svg>';
  var LIST   = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h9M4 12h9M4 17h6"/><path d="M16.5 16.5l2 2 3.5-3.5"/></svg>';

  // Map section-label text -> icon. Extend as new labels appear.
  var ICON = {
    'By Person': PERSON,
    'All Together': GROUP,
    'Map': PIN,
    'Family': GROUP,
    'Josh & Sam': TWO,
    'The Kids': GROUP,
    'Bucket List': LIST
  };

  var heads = Array.prototype.slice.call(document.querySelectorAll('.section-heading'));
  if (!heads.length) { return; }

  heads.forEach(function (h) {
    var label = h.textContent.trim();
    var anchor = h.id || null;
    var count = h.getAttribute('data-count');

    h.textContent = '';

    if (ICON[label]) {
      var ic = document.createElement('span');
      ic.className = 'sec-icon';
      ic.innerHTML = ICON[label];
      h.appendChild(ic);
    }

    var lab = document.createElement('span');
    lab.className = 'sec-label';
    lab.textContent = label;
    h.appendChild(lab);

    if (count) {
      var badge = document.createElement('span');
      badge.className = 'sec-count';
      badge.textContent = count;
      h.appendChild(badge);
    }

    var rule = document.createElement('span');
    rule.className = 'sec-rule';
    h.appendChild(rule);

    if (anchor) {
      var link = document.createElement('a');
      link.className = 'sec-anchor';
      link.href = '#' + anchor;
      link.textContent = '#';
      link.setAttribute('aria-label', 'Link to ' + label);
      h.appendChild(link);
    }
  });

  // Scrollspy — highlight the header nav link for the section in view.
  var navLinks = {};
  Array.prototype.forEach.call(document.querySelectorAll('.site-header nav a'), function (a) {
    var href = a.getAttribute('href') || '';
    if (href.charAt(0) === '#') { navLinks[href.slice(1)] = a; }
  });

  var spyHeads = heads.filter(function (h) { return h.id && navLinks[h.id]; });
  if (!spyHeads.length) { return; }

  var header = document.querySelector('.site-header');
  function topOf(el) { return el.getBoundingClientRect().top + window.pageYOffset; }

  function syncSpy() {
    var line = window.pageYOffset + (header ? header.offsetHeight : 0) + 120;
    var activeTop = null;
    spyHeads.forEach(function (h) {
      var t = topOf(h);
      if (t <= line && (activeTop === null || t > activeTop)) { activeTop = t; }
    });
    if (activeTop === null) { activeTop = topOf(spyHeads[0]); }
    var active = {};
    spyHeads.forEach(function (h) {
      if (Math.abs(topOf(h) - activeTop) < 80) { active[h.id] = true; }
    });
    Object.keys(navLinks).forEach(function (k) {
      navLinks[k].classList.toggle('active', !!active[k]);
    });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) { return; }
    ticking = true;
    window.requestAnimationFrame(function () { syncSpy(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  syncSpy();
}());
