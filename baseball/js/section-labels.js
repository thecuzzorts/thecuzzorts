/* ============================================================
   Baseball section-label enhancer.
   Targets p.section-heading elements (same class as all other
   section pages). Extends the base treatment with baseball-specific
   icons, count badges, scroll-in reveal, and scrollspy.
   ============================================================ */
(function () {
  var BASEBALL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M6.6 5.4C9 7.7 9 16.3 6.6 18.6M17.4 5.4C15 7.7 15 16.3 17.4 18.6"/></svg>';

  var ICON = {
    'Our Story':     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6C10 4.7 7 4.7 5 6v12c2-1.3 5-1.3 7 0 2-1.3 5-1.3 7 0V6c-2-1.3-5-1.3-7 0z"/><path d="M12 6v12"/></svg>',
    'Photos':        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    'Map':           '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.4"/></svg>',
    'Parks':         BASEBALL,
    'The Kids':      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><circle cx="17.5" cy="9" r="2.3"/><path d="M16.2 14.3A4.5 4.5 0 0 1 21 18.6"/></svg>',
    'Closed & Future': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3.2 2"/></svg>',
    'Beyond MLB':    BASEBALL
  };

  var COUNT = { 'Parks': '30 / 30', 'The Kids': '3' };

  var heads = Array.prototype.slice.call(document.querySelectorAll('p.section-heading'));
  if (!heads.length) { return; }

  heads.forEach(function (el) {
    var label = el.textContent.trim();
    var count = COUNT[label];

    if (label === 'Photos') {
      var n = document.querySelectorAll('.cycle-slideshow > img').length;
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

    if (el.id) {
      el.setAttribute('data-spy', el.id);
    }

    el.classList.add('sec-reveal');
  });

  // Scroll-in reveal
  if (window.IntersectionObserver) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in-view'); revealIO.unobserve(e.target); }
      });
    }, { threshold: 0.25 });
    heads.forEach(function (h) { revealIO.observe(h); });
  } else {
    heads.forEach(function (h) { h.classList.add('in-view'); });
  }

  // Scrollspy — highlights the nav link for the section in view.
  // Side-by-side sections (Photos + Map) both light up since they share a row.
  var navLinks = {};
  Array.prototype.forEach.call(document.querySelectorAll('.site-header nav a'), function (a) {
    var href = a.getAttribute('href') || '';
    if (href.charAt(0) === '#') { navLinks[href.slice(1)] = a; }
  });
  var spyHeads = heads.filter(function (h) { return h.getAttribute('data-spy'); });
  var header = document.querySelector('.site-header');

  function topOf(el) { return el.getBoundingClientRect().top + window.pageYOffset; }

  function syncSpy() {
    if (!spyHeads.length) { return; }
    var line = window.pageYOffset + (header ? header.offsetHeight : 0) + 120;
    var activeTop = null;
    spyHeads.forEach(function (h) {
      var t = topOf(h);
      if (t <= line && (activeTop === null || t > activeTop)) { activeTop = t; }
    });
    if (activeTop === null) { activeTop = topOf(spyHeads[0]); }
    var active = {};
    spyHeads.forEach(function (h) {
      if (Math.abs(topOf(h) - activeTop) < 80) { active[h.getAttribute('data-spy')] = true; }
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
