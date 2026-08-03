/* ===================================================
   TheCuzzorts — Trapping (Illinois furbearers)
   Single-user tracker: no map, no per-person split.
   =================================================== */
(function () {
  'use strict';

  /* Every icon shares a 48x32 viewBox, profile-facing-left, so cards
     line up regardless of how bushy/short a given species' tail is. */
  var SPECIES = [
    {
      id: 'mink',
      image: '../images/trapping/species/mink.jpg',
      name: 'Mink',
      color: '#7A5F3F',
      icon: '<ellipse cx="25" cy="20" rx="15.5" ry="4.5"/><circle cx="9" cy="18.5" r="3.4"/>' +
            '<circle cx="7" cy="16" r="1"/><path d="M6 19Q3.5 19.3 3 18.7"/>' +
            '<path d="M17 23.5L16.4 27.5M34 23.5L34.6 27.5"/>' +
            '<path d="M39.5 19Q47.5 16.5 46.5 24.5"/>'
    },
    {
      id: 'river-otter',
      image: '../images/trapping/species/river-otter.jpg',
      name: 'River Otter',
      color: '#4F6B6E',
      icon: '<ellipse cx="25" cy="19" rx="14" ry="5"/><circle cx="10" cy="15" r="4"/>' +
            '<circle cx="7.5" cy="12" r="1"/>' +
            '<path d="M6.5 15L2.5 14M6.5 16L2.3 16.3M6.5 17L2.5 18.3"/>' +
            '<path d="M18 22.5L17.3 27M33 22.5L33.7 27"/>' +
            '<path d="M38.5 18Q48 19 47 26"/>' +
            '<path d="M38.5 20Q47 21.3 46 27"/>'
    },
    {
      id: 'long-tailed-weasel',
      image: '../images/trapping/species/long-tailed-weasel.jpg',
      name: 'Weasel',
      color: '#A47B4D',
      icon: '<ellipse cx="22" cy="20" rx="13" ry="3.3"/><circle cx="8.5" cy="18.5" r="2.9"/>' +
            '<circle cx="6.7" cy="16.5" r="0.8"/>' +
            '<path d="M15 22.7L14.5 27M29 22.7L29.5 27"/>' +
            '<path d="M35 19.5Q47 17 46.5 25.5"/>' +
            '<circle cx="45.7" cy="24.7" r="1.2"/>'
    },
    {
      id: 'badger',
      image: '../images/trapping/species/badger.jpg',
      name: 'Badger',
      color: '#6E5C46',
      icon: '<ellipse cx="26" cy="22" rx="13.5" ry="6.2"/><circle cx="11.5" cy="15.5" r="4.4"/>' +
            '<circle cx="8.5" cy="12.3" r="1.2"/><circle cx="15" cy="12.3" r="1.2"/>' +
            '<path d="M11.5 11.3Q10.3 15 9.3 18.5Q8.7 21 9.7 23"/>' +
            '<path d="M18.5 27L18 29.7M32.5 27L33 29.7"/>'
    },
    {
      id: 'red-fox',
      image: '../images/trapping/species/red-fox.jpg',
      name: 'Red Fox',
      color: '#C1440E',
      icon: '<ellipse cx="27" cy="19" rx="10.5" ry="5.3"/><circle cx="12" cy="13" r="4.3"/>' +
            '<path d="M9 10Q7 4 12 9.5"/><path d="M14.3 9.7Q16.5 4 12.8 10"/>' +
            '<path d="M15.5 15.5Q19 17.3 21 17.5"/>' +
            '<path d="M20 23.5L19 29M33 23.5L34 29"/>' +
            '<path d="M37 17Q47 14.5 45.5 25Q44.5 29.5 38 27"/>' +
            '<circle cx="41" cy="27" r="1.6"/>'
    },
    {
      id: 'coyote',
      image: '../images/trapping/species/coyote.jpg',
      name: 'Coyote',
      color: '#A9793F',
      icon: '<ellipse cx="27" cy="18" rx="12.5" ry="5"/><circle cx="11.5" cy="11.5" r="4.2"/>' +
            '<path d="M8.7 8.8Q7.3 3 11.8 8.3"/><path d="M14.2 8.5Q15.7 3 11.3 8.8"/>' +
            '<path d="M15 14Q19.5 16.5 22 17"/>' +
            '<path d="M20 22.5L19 30M34 22.5L35 30"/>' +
            '<path d="M39 19.5Q48 22 45 29"/>' +
            '<circle cx="44" cy="28" r="1.4"/>'
    },
    {
      id: 'bobcat',
      image: '../images/trapping/species/bobcat.jpg',
      name: 'Bobcat',
      color: '#B4834F',
      icon: '<ellipse cx="27" cy="19" rx="11" ry="6"/><circle cx="12.5" cy="13.5" r="4.4"/>' +
            '<path d="M9.5 10.3Q8.7 5.8 12 10"/><path d="M14.5 10Q15.7 5.8 12.7 10.5"/>' +
            '<path d="M9 6.3L8 4.5M15 6.3L16 4.5"/>' +
            '<path d="M8.5 15Q6 16.5 5 18.5M16.5 15Q19 16.5 20 18.5"/>' +
            '<path d="M20.5 24.5L19.7 29M33 24.5L33.8 29"/>' +
            '<path d="M38 18.5Q41.5 19 42.3 20.3"/>'
    },
    {
      id: 'raccoon',
      image: '../images/trapping/species/raccoon.jpg',
      name: 'Raccoon',
      color: '#5B4E3C',
      icon: '<ellipse cx="26" cy="18" rx="10.5" ry="7"/><circle cx="12" cy="13" r="5"/>' +
            '<circle cx="8" cy="8.5" r="1.9"/><circle cx="16.3" cy="8.7" r="1.9"/>' +
            '<path d="M8.3 12.5Q12 15 15.7 12.5"/>' +
            '<path d="M15 15Q19 17 21 17.5"/>' +
            '<path d="M20 24.5L19 28M32 24.5L33 28"/>' +
            '<path d="M36.5 17Q47 9 45.5 23Q44.5 29.5 36.5 26"/>' +
            '<path d="M40.5 12.5L43 15M44.5 17L47 19.5M43 22L45.5 24.5"/>'
    },
    {
      id: 'striped-skunk',
      image: '../images/trapping/species/striped-skunk.jpg',
      name: 'Striped Skunk',
      color: '#5C5652',
      icon: '<ellipse cx="25" cy="20.5" rx="10.5" ry="5.5"/><circle cx="12" cy="16.5" r="3.8"/>' +
            '<circle cx="9.3" cy="13.5" r="1.3"/><circle cx="14.7" cy="13.6" r="1.3"/>' +
            '<path d="M15.5 18.5Q19 20 20.5 20.3"/>' +
            '<path d="M18.5 25.8L17.8 29.5M31.5 25.8L32.2 29.5"/>' +
            '<path d="M16 16.5Q22 12.5 29 14Q33.5 15.3 36.5 17.3"/>' +
            '<path d="M16.5 19.5Q22 17.5 29 18.5Q33.5 19.5 36 21"/>' +
            '<path d="M36 16.5Q41 3 46 14Q47.5 19.5 42 22Q39.5 22.8 37.5 21"/>' +
            '<path d="M39.5 7Q41.5 13.5 40.3 19.5"/>'
    },
    {
      id: 'beaver',
      image: '../images/trapping/species/beaver.jpg',
      name: 'Beaver',
      color: '#8B5A2B',
      icon: '<ellipse cx="24" cy="19" rx="10.5" ry="7"/><circle cx="12" cy="15" r="4.6"/>' +
            '<circle cx="9" cy="11" r="1.4"/><circle cx="15" cy="11.3" r="1.4"/>' +
            '<path d="M15.5 17Q19 18 21 18.3"/>' +
            '<path d="M19 25.5L18.3 29M30 25.5L30.7 29"/>' +
            '<path d="M33.5 20Q37 21 38.5 21.5"/>' +
            '<ellipse cx="41" cy="22.5" rx="7.2" ry="4.2" transform="rotate(18 41 22.5)"/>' +
            '<path d="M36.5 21L39 23M39 20L42 23M42.5 20.3L45.3 23" transform="rotate(18 41 22.5)"/>'
    },
    {
      id: 'muskrat',
      image: '../images/trapping/species/muskrat.jpg',
      name: 'Muskrat',
      color: '#7A5230',
      icon: '<ellipse cx="24" cy="20" rx="10" ry="6"/><circle cx="12.5" cy="16.5" r="4"/>' +
            '<circle cx="9.5" cy="13" r="1.2"/>' +
            '<path d="M16 18.5Q19.5 20 21 20.3"/>' +
            '<path d="M19 25.5L18.3 28.5M30 25.5L30.7 28.5"/>' +
            '<path d="M34 20Q45 19 46.5 27.5"/>'
    },
    {
      id: 'groundhog',
      image: '../images/trapping/species/groundhog.jpg',
      name: 'Groundhog',
      color: '#6B7A52',
      icon: '<ellipse cx="25" cy="19" rx="12.5" ry="7"/><circle cx="12" cy="15" r="4.6"/>' +
            '<circle cx="9" cy="11.3" r="1.2"/><circle cx="15" cy="11.5" r="1.2"/>' +
            '<path d="M8 16.8L8 18.3M9.2 16.8L9.2 18.3"/>' +
            '<path d="M16 17.5Q19.5 18.7 21 19"/>' +
            '<path d="M18.5 25.5L18 29M31.5 25.5L32 29"/>' +
            '<path d="M37 18.5Q42 17.3 43.5 20.5Q44.3 22.5 42 23.5Q39.5 23 38.5 21"/>'
    },
    {
      id: 'opossum',
      image: '../images/trapping/species/opossum.jpg',
      name: 'Opossum',
      color: '#8B8579',
      icon: '<ellipse cx="26" cy="21" rx="11.5" ry="5"/><circle cx="13" cy="17.5" r="3.4"/>' +
            '<path d="M9.8 18Q5.5 18.3 4.3 17.3"/>' +
            '<circle cx="10.5" cy="14" r="2"/><circle cx="15.7" cy="14.2" r="2"/>' +
            '<path d="M19 25.5L18.3 29M32 25.5L32.7 29"/>' +
            '<path d="M37.5 20.5Q47 20.5 46.5 26.5Q46.2 29.5 42 28Q40 27.3 41 25.8"/>'
    }
  ];

  // Four fixed display orders, each an explicit list of species ids.
  var SORT_ORDERS = {
    alphabetical: [
      'badger', 'beaver', 'bobcat', 'coyote', 'groundhog', 'mink', 'muskrat',
      'opossum', 'raccoon', 'red-fox', 'river-otter', 'striped-skunk', 'long-tailed-weasel'
    ],
    // Grouped by biological family: Canidae, Felidae, Mustelidae, Rodentia, Procyonidae, Mephitidae, Didelphidae.
    taxonomic: [
      'coyote', 'red-fox', 'bobcat', 'badger', 'river-otter', 'mink', 'long-tailed-weasel',
      'beaver', 'muskrat', 'groundhog', 'raccoon', 'striped-skunk', 'opossum'
    ],
    // Most aquatic to most terrestrial.
    habitat: [
      'muskrat', 'beaver', 'river-otter', 'mink', 'raccoon', 'opossum', 'striped-skunk',
      'groundhog', 'badger', 'red-fox', 'coyote', 'bobcat', 'long-tailed-weasel'
    ],
    // Largest to smallest average adult body mass in Illinois.
    size: [
      'beaver', 'coyote', 'river-otter', 'badger', 'bobcat', 'red-fox', 'raccoon',
      'groundhog', 'striped-skunk', 'opossum', 'muskrat', 'mink', 'long-tailed-weasel'
    ]
  };

  /* Portrait art: real illustrations go in ../images/trapping/species/ —
     set an `image` field on a species above once you have one, e.g.
     image: '../images/trapping/species/raccoon.jpg'. Until then, each
     portrait falls back to that species' line-art icon on a cream card,
     so every species stays visually distinct in the meantime. */
  function buildPortraitHTML(sp) {
    if (sp.image) {
      return '<img src="' + sp.image + '" alt="' + sp.name + '" loading="lazy">';
    }
    return '<svg class="species-portrait-fallback" viewBox="0 0 48 32" fill="none" stroke="' + sp.color +
           '" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
           sp.icon + '</svg>';
  }

  function countTrapped(data) {
    var n = 0;
    for (var key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) { n += 1; }
    }
    return n;
  }

  function buildSpeciesCardHTML(sp, data, details) {
    var trapped = !!data[sp.id];
    var detail = details && details[sp.id];
    var stateClass = trapped ? 'is-trapped' : 'is-untrapped';
    var dotClass = trapped ? 'species-dot--trapped' : 'species-dot--untrapped';
    var statusText = trapped ? 'Trapped' : 'Not yet trapped';
    var dateHTML = trapped && detail && detail.date ? '<small>' + detail.date + '</small>' : '';
    var notes = trapped && detail && detail.notes
      ? '<p class="species-notes">' + detail.notes + '</p>'
      : '';
    return '<div class="species-card ' + stateClass + '" style="--species:' + sp.color + '">' +
             '<div class="species-portrait">' + buildPortraitHTML(sp) + '</div>' +
             '<h3 class="species-name">' + sp.name + '</h3>' +
             '<div class="species-status">' +
               '<span class="species-dot ' + dotClass + '"></span>' +
               '<span class="species-status-text">' + statusText + '</span>' +
               dateHTML +
             '</div>' +
             notes +
           '</div>';
  }

  // Trapped species first (alphabetical within each group), not yet trapped after.
  // Computed from live data rather than a fixed list, since trapped status changes.
  function trappedSortOrder(data) {
    var trapped = [];
    var untrapped = [];
    SPECIES.forEach(function (sp) {
      (data[sp.id] ? trapped : untrapped).push(sp.id);
    });
    function byName(a, b) {
      var spA = SPECIES.filter(function (s) { return s.id === a; })[0];
      var spB = SPECIES.filter(function (s) { return s.id === b; })[0];
      return spA.name.localeCompare(spB.name);
    }
    trapped.sort(byName);
    untrapped.sort(byName);
    return trapped.concat(untrapped);
  }

  function buildSpeciesGridHTML(sortKey, data, details) {
    var order = sortKey === 'trapped' ? trappedSortOrder(data) : (SORT_ORDERS[sortKey] || SORT_ORDERS.alphabetical);
    return order.map(function (id) {
      var sp = SPECIES.filter(function (s) { return s.id === id; })[0];
      return sp ? buildSpeciesCardHTML(sp, data, details) : '';
    }).join('');
  }

  function renderStats() {
    var total = SPECIES.length;
    var trappedCount = countTrapped(furbearersTrapped);

    var countEl = document.getElementById('trappedCount');
    var totalEl = document.getElementById('speciesTotal');
    var barEl = document.getElementById('trappingProgressBar');
    var subtitleEl = document.getElementById('speciesSubtitle');

    if (countEl) { countEl.textContent = trappedCount; }
    if (totalEl) { totalEl.textContent = total; }
    if (barEl) { barEl.style.width = (total ? (trappedCount / total * 100) : 0) + '%'; }
    if (subtitleEl) { subtitleEl.textContent = total + ' Legally Trappable Species'; }
  }

  function renderGrid(sortKey) {
    var gridEl = document.getElementById('speciesGrid');
    if (gridEl) { gridEl.innerHTML = buildSpeciesGridHTML(sortKey, furbearersTrapped, furbearersDetails); }
  }

  function initSortToggle() {
    var toggle = document.getElementById('speciesSortToggle');
    if (!toggle) { return; }
    toggle.addEventListener('click', function (e) {
      var btn = e.target.closest('.species-sort-btn');
      if (!btn || btn.classList.contains('active')) { return; }
      toggle.querySelectorAll('.species-sort-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var gridEl = document.getElementById('speciesGrid');
      gridEl.classList.add('is-sorting');
      setTimeout(function () {
        renderGrid(btn.dataset.sort);
        gridEl.classList.remove('is-sorting');
      }, 220);
    });
  }

  renderStats();
  renderGrid('alphabetical');
  initSortToggle();
}());
