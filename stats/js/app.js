/* ===================================================
   TheCuzzorts — By the Numbers (/stats)
   =================================================== */
(function () {
  'use strict';

  var TERRITORIES = { PR:1, VI:1, SX:1, GU:1, AS:1, MP:1 };
  var TOTAL_STATES = 50;
  var TOTAL_PARKS  = 63;
  var DISNEY_TOTAL = 12;
  var TOTAL_COUNTRIES = 197; // matches the homepage quick-stat's Countries ring

  function countStates(data) {
    var n = 0;
    for (var k in data) { if (k !== 'US-DC' && data[k] === 1) n++; }
    return n;
  }

  function countCountries(data) {
    var countries = 0, terr = 0;
    for (var k in data) {
      if (data[k] === 1) { TERRITORIES[k] ? terr++ : countries++; }
    }
    return { countries: countries, territories: terr };
  }

  function countVisited(data) {
    var n = 0;
    for (var k in data) { if (data[k] === 1) n++; }
    return n;
  }

  function countHarvested(data) {
    var harvested = 0, huntedOnly = 0;
    for (var k in data) {
      var v = data[k];
      if (Math.round(v) >= 1) harvested++;
      else if (v > 0) huntedOnly++;
    }
    return { harvested: harvested, huntedOnly: huntedOnly };
  }

  function familyUnionStates() {
    // Matches the /travels page "All" filter: states every family member has visited.
    var count = 0;
    for (var k in statesVisitedJosh) {
      if (k === 'US-DC') continue;
      if (statesVisitedJosh[k] === 1 && statesVisitedSam[k] === 1 &&
          statesVisitedEllie[k] === 1 && statesVisitedTilly[k] === 1 && statesVisitedPoppy[k] === 1) count++;
    }
    return count;
  }

  function familyUnionCountries() {
    // Matches the /travels page "All" filter: countries every family member has visited.
    var countries = 0, terr = 0;
    for (var k in countriesVisitedJosh) {
      if (countriesVisitedJosh[k] === 1 && countriesVisitedSam[k] === 1 &&
          countriesVisitedEllie[k] === 1 && countriesVisitedTilly[k] === 1 && countriesVisitedPoppy[k] === 1) {
        TERRITORIES[k] ? terr++ : countries++;
      }
    }
    return { countries: countries, territories: terr };
  }

  function familyUnionParks() {
    // Matches the NP page "All" filter: parks every family member has visited.
    var count = 0;
    for (var k in parksVisitedJosh) {
      if (parksVisitedJosh[k] === 1 && parksVisitedSam[k] === 1 &&
          parksVisitedEllie[k] === 1 && parksVisitedTilly[k] === 1 && parksVisitedPoppy[k] === 1) count++;
    }
    return count;
  }

  function familyUnionDisney() {
    // Matches the Disney page "All" filter: parks every family member has visited.
    var count = 0;
    for (var k in disneyVisitedJosh) {
      if (disneyVisitedJosh[k] === 1 && disneyVisitedSam[k] === 1 &&
          disneyVisitedEllie[k] === 1 && disneyVisitedTilly[k] === 1 && disneyVisitedPoppy[k] === 1) count++;
    }
    return count;
  }

  function set(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  // Fills a fixed-denominator tile's progress ring (id + '-ring' element,
  // see .ring-fill in css/styles.css) to match its numerator/denominator.
  function setRingPct(id, count, total) {
    var ring = document.getElementById(id + '-ring');
    if (ring) { ring.style.setProperty('--pct', total ? (count / total) : 0); }
  }

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function mostVisited(list, countFn, key) {
    var maxCount = -1, leaders = [];
    list.forEach(function (p) {
      var n = countFn(p[key]);
      if (n > maxCount) { maxCount = n; leaders = [p.id]; }
      else if (n === maxCount) { leaders.push(p.id); }
    });
    return { count: maxCount, names: leaders.map(cap).join(' & ') };
  }

  function distinctCount(records, key) {
    var seen = {};
    records.forEach(function (r) { seen[r[key]] = true; });
    return Object.keys(seen).length;
  }

  // =========================================================
  // Per-year bar charts -- generalized version of
  // baseball/mlb-games/js/app.js's buildYearChartSVG, parameterized by
  // which section's color to paint the bars with and a unique id prefix
  // (this page needs one chart per section, not just one).
  // =========================================================

  function buildYearBarChart(byYear, colorVar, idPrefix) {
    var years = Object.keys(byYear).sort();
    if (!years.length) { return ''; }
    var firstYear = parseInt(years[0], 10), lastYear = parseInt(years[years.length - 1], 10);
    var allYears = [];
    for (var y = firstYear; y <= lastYear; y++) { allYears.push(String(y)); }
    var counts = allYears.map(function (y) { return byYear[y] || 0; });
    var max = Math.max.apply(null, counts.concat([1]));

    var W = 760, H = 140, PB = 24, barGap = 6;
    var barW = (W / allYears.length) - barGap;

    var bars = allYears.map(function (yr, i) {
      var count = counts[i];
      var h = count ? Math.max((count / max) * (H - PB - 14), 3) : 0;
      var x = i * (barW + barGap) + barGap / 2;
      var yTop = H - PB - h;
      return '<g class="stats-year-bar-group" data-year="' + yr + '" data-count="' + count + '">' +
        '<rect class="stats-year-bar" style="fill:' + colorVar + '" x="' + x.toFixed(1) + '" y="' + yTop.toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + h.toFixed(1) + '" rx="2"></rect>' +
        '<text class="stats-year-axis" x="' + (x + barW / 2).toFixed(1) + '" y="' + (H - 6) + '">' + yr.slice(2) + '</text>' +
      '</g>';
    }).join('');

    return '<svg class="stats-year-svg" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">' + bars + '</svg>' +
      '<div class="stats-year-tooltip" id="' + idPrefix + '-tooltip"></div>';
  }

  function renderYearChart(containerId, byYear, colorVar, noun) {
    var container = document.getElementById(containerId);
    if (!container) { return; }
    container.innerHTML = buildYearBarChart(byYear, colorVar, containerId);
    var tip = document.getElementById(containerId + '-tooltip');
    if (!tip) { return; }
    container.querySelectorAll('.stats-year-bar-group').forEach(function (g) {
      g.addEventListener('mouseenter', function () {
        tip.innerHTML = '<strong>' + g.dataset.year + '</strong> &middot; ' + g.dataset.count + ' ' + (g.dataset.count === '1' ? noun : noun + 's');
        tip.classList.add('is-visible');
      });
      g.addEventListener('mousemove', function (e) {
        var rect = container.getBoundingClientRect();
        tip.style.left = (e.clientX - rect.left + 10) + 'px';
        tip.style.top = (e.clientY - rect.top - 40) + 'px';
      });
      g.addEventListener('mouseleave', function () { tip.classList.remove('is-visible'); });
    });
  }

  // Every entry across every family member's *Details object that
  // carries a date -- one tally per (person, place) visit event, so a
  // state/park two different people visited in two different years
  // correctly contributes to both years.
  function tallyDetailsByYear(detailsObjects) {
    var byYear = {};
    detailsObjects.forEach(function (details) {
      if (!details) { return; }
      Object.keys(details).forEach(function (code) {
        var d = details[code];
        if (d && d.date) {
          var year = d.date.slice(0, 4);
          byYear[year] = (byYear[year] || 0) + 1;
        }
      });
    });
    return byYear;
  }

  function tallyRecordsByYear(recordArrays) {
    var byYear = {};
    recordArrays.forEach(function (records) {
      if (!records) { return; }
      records.forEach(function (r) {
        if (r && r.date) {
          var year = r.date.slice(0, 4);
          byYear[year] = (byYear[year] || 0) + 1;
        }
      });
    });
    return byYear;
  }

  function renderFamilyAndPerPerson() {
    // --- Family headline ---
    var famStates    = familyUnionStates();
    var famCountries = familyUnionCountries();
    var famParks     = familyUnionParks();
    var famDisney    = familyUnionDisney();

    set('h-states',       famStates);
    set('h-states-sub',   (TOTAL_STATES - famStates) + ' states remaining');
    setRingPct('h-states', famStates, TOTAL_STATES);
    set('h-parks',        famParks);
    set('h-parks-sub',    (TOTAL_PARKS - famParks) + ' on the bucket list');
    setRingPct('h-parks', famParks, TOTAL_PARKS);
    set('h-countries',    famCountries.countries);
    setRingPct('h-countries', famCountries.countries, TOTAL_COUNTRIES);
    set('h-countries-sub', '+ ' + famCountries.territories + ' territories');

    // --- Travels section ---
    set('trav-states',      famStates);
    setRingPct('trav-states', famStates, TOTAL_STATES);
    set('trav-countries',   famCountries.countries);
    setRingPct('trav-countries', famCountries.countries, TOTAL_COUNTRIES);
    set('trav-territories', famCountries.territories);

    // --- National Parks section ---
    set('np-family',    famParks);
    setRingPct('np-family', famParks, TOTAL_PARKS);
    set('np-remaining', TOTAL_PARKS - famParks);

    // --- Disney section ---
    set('dis-family',    famDisney);
    setRingPct('dis-family', famDisney, DISNEY_TOTAL);
    set('dis-remaining', DISNEY_TOTAL - famDisney);

    // --- Per person ---
    var people = [
      { id: 'josh',  states: statesVisitedJosh,  countries: countriesVisitedJosh,  parks: parksVisitedJosh,  disney: disneyVisitedJosh  },
      { id: 'sam',   states: statesVisitedSam,   countries: countriesVisitedSam,   parks: parksVisitedSam,   disney: disneyVisitedSam   },
      { id: 'ellie', states: statesVisitedEllie, countries: countriesVisitedEllie, parks: parksVisitedEllie, disney: disneyVisitedEllie },
      { id: 'tilly', states: statesVisitedTilly, countries: countriesVisitedTilly, parks: parksVisitedTilly, disney: disneyVisitedTilly },
      { id: 'poppy', states: statesVisitedPoppy, countries: countriesVisitedPoppy, parks: parksVisitedPoppy, disney: disneyVisitedPoppy }
    ];

    people.forEach(function (p) {
      var c = countCountries(p.countries);
      set('p-' + p.id + '-states',         countStates(p.states));
      set('p-' + p.id + '-countries',      c.countries);
      set('p-' + p.id + '-countries-note', c.territories ? ' + ' + c.territories + ' territories' : '');
      set('p-' + p.id + '-parks',          countVisited(p.parks));
      set('p-' + p.id + '-disney',         countVisited(p.disney));
    });

    // --- Most visited (individual leader) per category ---
    var mostStates = mostVisited(people, countStates, 'states');
    set('trav-max-num',  mostStates.count);
    set('trav-max-name', mostStates.names);

    var mostParks = mostVisited(people, countVisited, 'parks');
    set('np-max-num',  mostParks.count);
    set('np-max-name', mostParks.names);

    var mostDisney = mostVisited(people, countVisited, 'disney');
    set('dis-max-num',  mostDisney.count);
    set('dis-max-name', mostDisney.names);
  }

  function renderFishing() {
    var allFish = fishCaught.freshwater.concat(fishCaught.saltwater);
    set('fish-species', distinctCount(allFish, 'species'));
    set('fish-catches', allFish.length);
    set('fish-species-fresh', distinctCount(fishCaught.freshwater, 'species'));
    set('fish-species-salt', distinctCount(fishCaught.saltwater, 'species'));
  }

  function tallyGamesByYear(games) {
    var byYear = {};
    (games || []).forEach(function (g) {
      var year = g.date.slice(0, 4);
      byYear[year] = (byYear[year] || 0) + 1;
    });
    return byYear;
  }

  function renderYearCharts() {
    var g = function (name) { return typeof window[name] !== 'undefined' ? window[name] : null; };

    var baseballByYear = tallyGamesByYear(g('mlbGames'));
    renderYearChart('baseball-year-chart', baseballByYear, 'var(--mlb-red-on-dark, #F07070)', 'game');

    var travelsByYear = tallyDetailsByYear([
      g('statesDetailsJosh'), g('statesDetailsSam'), g('statesDetailsEllie'), g('statesDetailsTilly'), g('statesDetailsPoppy'),
      g('countriesDetailsJosh'), g('countriesDetailsSam'), g('countriesDetailsEllie'), g('countriesDetailsTilly'), g('countriesDetailsPoppy')
    ]);
    renderYearChart('travels-year-chart', travelsByYear, 'var(--travels-orange-on-dark, #FF8200)', 'visit');

    var parksByYear = tallyDetailsByYear([
      g('parksDetailsJosh'), g('parksDetailsSam'), g('parksDetailsEllie'), g('parksDetailsTilly'), g('parksDetailsPoppy')
    ]);
    renderYearChart('parks-year-chart', parksByYear, 'var(--parks-gold-on-dark, #F5C518)', 'visit');

    var turkeyByYear = tallyRecordsByYear([
      g('turkeyHarvestsJosh'), g('turkeyHarvestsSam'), g('turkeyHarvestsTilly')
    ]);
    renderYearChart('turkey-year-chart', turkeyByYear, 'var(--turkey-green-on-dark, #57BD83)', 'harvest');

    renderBestYear(baseballByYear, travelsByYear, parksByYear, turkeyByYear);
  }

  // Combines every per-year grouping already built above into one
  // cross-section tally, and calls out whichever single year had the
  // most combined activity. Built from the same byYear objects the
  // individual charts use, not recomputed from scratch.
  function renderBestYear(baseballByYear, travelsByYear, parksByYear, turkeyByYear) {
    var el = document.getElementById('best-year-callout');
    if (!el) { return; }

    var combined = {};
    [baseballByYear, travelsByYear, parksByYear, turkeyByYear].forEach(function (byYear) {
      Object.keys(byYear).forEach(function (year) {
        combined[year] = (combined[year] || 0) + byYear[year];
      });
    });

    var years = Object.keys(combined);
    if (!years.length) { return; }
    var bestYear = years.reduce(function (a, b) { return combined[a] >= combined[b] ? a : b; });

    var parts = [];
    if (baseballByYear[bestYear]) { parts.push(baseballByYear[bestYear] + ' ' + pluralize(baseballByYear[bestYear], 'MLB game')); }
    if (travelsByYear[bestYear]) { parts.push(travelsByYear[bestYear] + ' ' + pluralize(travelsByYear[bestYear], 'state/country visit')); }
    if (parksByYear[bestYear]) { parts.push(parksByYear[bestYear] + ' ' + pluralize(parksByYear[bestYear], 'national park visit')); }
    if (turkeyByYear[bestYear]) { parts.push(turkeyByYear[bestYear] + ' ' + pluralize(turkeyByYear[bestYear], 'turkey harvest')); }

    document.getElementById('best-year-num').textContent = bestYear;
    document.getElementById('best-year-detail').textContent = parts.join(' · ');
    el.style.display = '';
  }

  function pluralize(count, noun) { return count === 1 ? noun : noun + 's'; }

  function renderTurkey() {
    var turkeyPeople = [
      { id: 'josh',  data: turkeysHarvestedJosh  },
      { id: 'sam',   data: turkeysHarvestedSam   },
      { id: 'tilly', data: turkeysHarvestedTilly }
    ];

    turkeyPeople.forEach(function (p) {
      var t = countHarvested(p.data);
      set('t-' + p.id + '-num', t.harvested);
      if (t.huntedOnly > 0) {
        set('t-' + p.id + '-sub', '+ ' + t.huntedOnly + ' state' + (t.huntedOnly > 1 ? 's' : '') + ' hunted, not harvested');
      }
    });

    // --- NWTF score -- nwtfScore() (turkey-hunting/js/turkey-derive.js)
    // is fully implemented but was never called anywhere until now.
    // Returns null for a bird missing any measurement, so those are
    // filtered out rather than silently scored as 0.
    if (typeof nwtfScore === 'function') {
      var allHarvests = [].concat(turkeyHarvestsJosh || [], turkeyHarvestsSam || [], turkeyHarvestsTilly || []);
      var scores = allHarvests.map(nwtfScore).filter(function (s) { return s != null; });
      if (scores.length) {
        var avg = scores.reduce(function (a, b) { return a + b; }, 0) / scores.length;
        set('turkey-nwtf-avg', avg.toFixed(1));
        set('turkey-nwtf-max', Math.max.apply(null, scores).toFixed(1));
      }
    }
  }

  // Same narrow public surface as /hunting's bucks catalog
  // (hunting/js/deer.js's deriveBucks()) -- only gender === 'Buck'
  // records count, and only toward an aggregate total/state count, never
  // per-record detail (license/tag numbers, notes stay private).
  function renderDeer() {
    var harvests = typeof deerHarvestsJosh !== 'undefined' ? deerHarvestsJosh : [];
    var bucks = harvests.filter(function (r) { return r.gender === 'Buck'; });
    set('deer-josh-num', bucks.length);
    var states = {};
    bucks.forEach(function (b) { states[b.state] = true; });
    var stateCount = Object.keys(states).length;
    if (stateCount > 0) {
      set('deer-josh-sub', stateCount + ' state' + (stateCount > 1 ? 's' : ''));
    }
  }

  function init() {
    renderFamilyAndPerPerson();
    renderFishing();
    renderTurkey();
    renderDeer();
    renderYearCharts();
  }

  document.addEventListener('DOMContentLoaded', init);
}());
