/* ============================================================
   Baseball section-label enhancer.
   Targets h3.section-heading elements (sub-sections within each
   major group). Enriches with icons, count badges, scroll-reveal.
   H2.section-group elements receive scroll-reveal + scrollspy.
   ============================================================ */
(function () {
  var BASEBALL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M6.6 5.4C9 7.7 9 16.3 6.6 18.6M17.4 5.4C15 7.7 15 16.3 17.4 18.6"/></svg>';
  var GROUP   = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><circle cx="17.5" cy="9" r="2.3"/><path d="M16.2 14.3A4.5 4.5 0 0 1 21 18.6"/></svg>';

  var ICON = {
    'Photos':            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    'Map':               '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.4"/></svg>',
    'Parks':             BASEBALL,
    'Parks & Affiliates': BASEBALL,
    'The Kids':          GROUP,
    'Legacy':            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3.2 2"/></svg>',
    'Games':             '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    'Teams':             GROUP
  };

  // Counts keyed by element ID (not label — same label text can appear in multiple sections)
  var COUNT = {
    'parks':        '30 / 30',
    'milb-parks':   '4 / 120',
    'indie-parks':  '4',
    'banana-games': '2',
    'banana-teams': '2 / 6'
  };

  // --- H3 sub-section enrichment ---
  var heads = Array.prototype.slice.call(document.querySelectorAll('h3.section-heading'));
  if (!heads.length && !document.querySelectorAll('h2.section-group').length) { return; }

  heads.forEach(function (el) {
    var label = el.textContent.trim();
    var count = COUNT[el.id];

    if (el.id === 'photos') {
      var mlbSS = document.querySelector('.cycle-slideshow:not(.milb-slideshow):not(.bananas-slideshow):not(.indie-slideshow)');
      var n = mlbSS ? mlbSS.querySelectorAll('img').length : 0;
      if (n) { count = String(n); }
    }

    el.textContent = '';

    if (ICON[label]) {
      var ic = document.createElement('span');
      ic.className = 'sec-icon';
      ic.innerHTML = ICON[label];
      el.appendChild(ic);
    }

    var lab = document.createElement('span');
    lab.className = 'sec-label';
    lab.textContent = label;
    el.appendChild(lab);

    if (count) {
      var badge = document.createElement('span');
      badge.className = 'sec-count';
      badge.textContent = count;
      el.appendChild(badge);
    }

    el.appendChild(Object.assign(document.createElement('span'), { className: 'sec-rule' }));
    el.classList.add('sec-reveal');
  });

  // --- H2 section-group: add reveal class ---
  var groups = Array.prototype.slice.call(document.querySelectorAll('h2.section-group'));
  groups.forEach(function (el) { el.classList.add('sec-reveal'); });

  // Scroll-in reveal (shared observer for both H3s and H2s)
  var allRevealEls = heads.concat(groups);
  if (window.IntersectionObserver) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in-view'); revealIO.unobserve(e.target); }
      });
    }, { threshold: 0.25 });
    allRevealEls.forEach(function (el) { revealIO.observe(el); });
  } else {
    allRevealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  // --- Scrollspy: watch H2 section-group elements, highlight nav links by ID ---
  var navLinks = {};
  Array.prototype.forEach.call(document.querySelectorAll('.site-header nav a'), function (a) {
    var href = a.getAttribute('href') || '';
    if (href.charAt(0) === '#') { navLinks[href.slice(1)] = a; }
  });

  var header = document.querySelector('.site-header');

  function topOf(el) { return el.getBoundingClientRect().top + window.pageYOffset; }

  function syncSpy() {
    if (!groups.length) { return; }
    var line = window.pageYOffset + (header ? header.offsetHeight : 0) + 120;
    var activeTop = null;
    groups.forEach(function (g) {
      var t = topOf(g);
      if (t <= line && (activeTop === null || t > activeTop)) { activeTop = t; }
    });
    if (activeTop === null) { activeTop = topOf(groups[0]); }
    Object.keys(navLinks).forEach(function (k) {
      var el = document.getElementById(k);
      var isActive = el && Math.abs(topOf(el) - activeTop) < 80;
      navLinks[k].classList.toggle('active', isActive);
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
