(function () {
  'use strict';

  // ---- Dark-mode-aware map style ---------------------------
  // MapLibre picks its CARTO vector style at init time, so it can't react
  // to a CSS media query — read the effective theme once here instead
  // (an explicit toggle override in localStorage wins over the OS setting).
  var storedTheme = null;
  try { storedTheme = window.localStorage.getItem('theme'); } catch (e) {}
  var IS_DARK = storedTheme === 'dark' ||
    (storedTheme !== 'light' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  var PERSON_COLORS = {
    josh: '#00AC4B', sam: '#662684', ellie: '#66b2b2', tilly: '#0898ff', poppy: '#d9259a'
  };
  var PERSON_LABELS = { josh: 'Josh', sam: 'Sam', ellie: 'Ellie', tilly: 'Tilly', poppy: 'Poppy' };
  var PERSON_ORDER = ['josh', 'sam', 'ellie', 'tilly', 'poppy'];

  // Franchise renames -- same class of problem mlbVenues already solves
  // for ballparks that changed sponsor names over the years. "Oakland
  // Athletics" dropped "Oakland" after relocating away; without this,
  // the same 30-team franchise count would come out to 31.
  var TEAM_ALIASES = { 'Oakland Athletics': 'Athletics' };
  function canonicalTeam(name) { return TEAM_ALIASES[name] || name; }

  function mergeDetail(game) {
    var detail = (typeof mlbGameDetail !== 'undefined' && mlbGameDetail[game.gamePk]) || {};
    var merged = {};
    for (var k in game) { merged[k] = game[k]; }
    for (var k2 in detail) { merged[k2] = detail[k2]; }
    return merged;
  }

  function fmtDate(iso) {
    var d = new Date(iso + 'T12:00:00');
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  // =========================================================
  // Overview stats
  // =========================================================

  function computeStats(games) {
    var stats = {
      totalGames: games.length,
      firstYear: null, lastYear: null,
      venues: {},
      players: {},
      teams: {},
      homeWins: 0, awayWins: 0,
      totalMinutes: 0,
      totalRuns: 0, totalHits: 0, totalHR: 0,
      totalDoubles: 0, totalTriples: 0, totalStrikeouts: 0, totalWalks: 0,
      extraInnings: 0, extraInningsGames: [],
      doubleheaderDates: {},
      day: 0, night: 0,
      postseason: 0, postseasonGames: [],
      cycles: 0, cycleGames: [],
      crowdTotal: 0, crowdCount: 0,
      conditionCounts: {}, tempTotal: 0, tempCount: 0,
      byPerson: { josh: 0, sam: 0, ellie: 0, tilly: 0, poppy: 0 },
      byYear: {}
    };

    // Duration/innings/attendance extremes are collected into flat lists
    // during the loop, then resolved to max/min (with ties kept, not just
    // the first-seen match) in one pass afterward -- see pickExtremes().
    var durationList = [];
    var inningsList = [];
    var crowdList = [];
    var tempList = [];
    var runDiffList = [];
    var winPitcherCounts = {}, winPitcherNames = {};
    var lossPitcherCounts = {}, lossPitcherNames = {};

    games.forEach(function (g) {
      var full = mergeDetail(g);
      var year = g.date.slice(0, 4);
      if (!stats.firstYear || year < stats.firstYear) { stats.firstYear = year; }
      if (!stats.lastYear || year > stats.lastYear) { stats.lastYear = year; }
      stats.byYear[year] = (stats.byYear[year] || 0) + 1;
      // Key by lat/lng, not the raw venue string -- some parks changed
      // sponsor names over the years (AT&T Park -> Oracle Park, SunTrust
      // Park -> Truist Park, etc.), and mlbVenues already maps every one
      // of those aliases to the same coordinates, so this correctly
      // counts distinct physical ballparks instead of distinct name strings.
      var venueCoord = (typeof mlbVenues !== 'undefined' && mlbVenues[g.venue]) || null;
      stats.venues[venueCoord ? (venueCoord.lat + ',' + venueCoord.lng) : g.venue] = true;

      var appearances = (typeof mlbGamePlayers !== 'undefined') && mlbGamePlayers[g.gamePk];
      if (appearances) {
        appearances.forEach(function (p) { stats.players[p.id] = true; });
      }

      stats.teams[canonicalTeam(g.homeTeam)] = true;
      stats.teams[canonicalTeam(g.awayTeam)] = true;

      if (typeof g.homeScore === 'number' && typeof g.awayScore === 'number') {
        stats.totalRuns += g.homeScore + g.awayScore;
        if (g.homeScore > g.awayScore) { stats.homeWins++; }
        else if (g.awayScore > g.homeScore) { stats.awayWins++; }
        runDiffList.push({
          date: g.date, homeTeam: g.homeTeam, awayTeam: g.awayTeam,
          diff: Math.abs(g.homeScore - g.awayScore),
          score: Math.max(g.homeScore, g.awayScore) + '-' + Math.min(g.homeScore, g.awayScore)
        });
      }
      if (typeof full.homeHits === 'number') { stats.totalHits += full.homeHits; }
      if (typeof full.awayHits === 'number') { stats.totalHits += full.awayHits; }
      if (typeof full.homeHR === 'number') { stats.totalHR += full.homeHR; }
      if (typeof full.awayHR === 'number') { stats.totalHR += full.awayHR; }
      if (typeof full.homeDoubles === 'number') { stats.totalDoubles += full.homeDoubles; }
      if (typeof full.awayDoubles === 'number') { stats.totalDoubles += full.awayDoubles; }
      if (typeof full.homeTriples === 'number') { stats.totalTriples += full.homeTriples; }
      if (typeof full.awayTriples === 'number') { stats.totalTriples += full.awayTriples; }
      if (typeof full.homeStrikeouts === 'number') { stats.totalStrikeouts += full.homeStrikeouts; }
      if (typeof full.awayStrikeouts === 'number') { stats.totalStrikeouts += full.awayStrikeouts; }
      if (typeof full.homeWalks === 'number') { stats.totalWalks += full.homeWalks; }
      if (typeof full.awayWalks === 'number') { stats.totalWalks += full.awayWalks; }

      var ref = { date: g.date, homeTeam: g.homeTeam, awayTeam: g.awayTeam };

      if (full.extraInnings) {
        stats.extraInnings++;
        stats.extraInningsGames.push({ date: g.date, homeTeam: g.homeTeam, awayTeam: g.awayTeam, innings: full.inningsPlayed });
      }
      // Count distinct doubleheader *dates*, not individual game rows --
      // each doubleheader contributes 2 rows (game 1 and game 2), and
      // "Doubleheaders attended" should read as an event count (e.g. 2),
      // not a game count (4).
      if (full.doubleheader) {
        stats.doubleheaderDates[g.date] = stats.doubleheaderDates[g.date] || ref;
      }
      if (full.dayNight === 'day') { stats.day++; }
      else if (full.dayNight === 'night') { stats.night++; }
      if (g.gameType && g.gameType !== 'R') {
        stats.postseason++;
        stats.postseasonGames.push(ref);
      }
      if (full.cycles && full.cycles.length) {
        full.cycles.forEach(function (c) {
          stats.cycles++;
          stats.cycleGames.push({ date: g.date, homeTeam: g.homeTeam, awayTeam: g.awayTeam, player: c.name });
        });
      }
      if (typeof full.crowdSize === 'number') {
        stats.crowdTotal += full.crowdSize;
        stats.crowdCount++;
        crowdList.push({ date: g.date, homeTeam: g.homeTeam, awayTeam: g.awayTeam, crowd: full.crowdSize });
      }
      if (full.weather && full.weather.condition) {
        stats.conditionCounts[full.weather.condition] = (stats.conditionCounts[full.weather.condition] || 0) + 1;
        var temp = parseInt(full.weather.temp, 10);
        if (!isNaN(temp)) {
          stats.tempTotal += temp;
          stats.tempCount++;
          tempList.push({ date: g.date, homeTeam: g.homeTeam, awayTeam: g.awayTeam, temp: temp });
        }
      }
      if (full.duration) {
        // Some games carry a trailing delay note -- "2:23 (:56 delay)" --
        // rather than a plain "H:MM"; match just the leading duration so
        // those games aren't silently dropped from longest/shortest.
        var durMatch = full.duration.match(/^(\d+):(\d+)/);
        if (durMatch) {
          var mins = parseInt(durMatch[1], 10) * 60 + parseInt(durMatch[2], 10);
          durationList.push({ date: g.date, homeTeam: g.homeTeam, awayTeam: g.awayTeam, mins: mins, duration: durMatch[1] + ':' + durMatch[2] });
          stats.totalMinutes += mins;
        }
      }
      if (full.winPitcher) {
        winPitcherCounts[full.winPitcher.id] = (winPitcherCounts[full.winPitcher.id] || 0) + 1;
        winPitcherNames[full.winPitcher.id] = full.winPitcher.name;
      }
      if (full.lossPitcher) {
        lossPitcherCounts[full.lossPitcher.id] = (lossPitcherCounts[full.lossPitcher.id] || 0) + 1;
        lossPitcherNames[full.lossPitcher.id] = full.lossPitcher.name;
      }
      if (typeof full.inningsPlayed === 'number') {
        inningsList.push({ date: g.date, homeTeam: g.homeTeam, awayTeam: g.awayTeam, innings: full.inningsPlayed });
      }

      PERSON_ORDER.forEach(function (p) {
        if (g.attendedBy[p] === 1) { stats.byPerson[p]++; }
      });
    });

    // Singles aren't a field the box score reports directly -- they're
    // just every hit that wasn't a double, triple, or home run.
    stats.totalSingles = stats.totalHits - stats.totalDoubles - stats.totalTriples - stats.totalHR;

    stats.uniqueTeams = Object.keys(stats.teams).length;

    var totalH = Math.floor(stats.totalMinutes / 60);
    var totalM = stats.totalMinutes % 60;
    stats.totalTimeDisplay = stats.totalMinutes ? (totalH + 'h ' + totalM + 'm') : null;

    // Ties keep every name tied at the top count -- rendered as one detail
    // line per pitcher (see statDetailHTML-style tiles below), not joined
    // into a single string, so `names` stays a list.
    function topPitcher(counts, names) {
      var bestCount = 0, bestIds = [];
      Object.keys(counts).forEach(function (id) {
        if (counts[id] > bestCount) { bestCount = counts[id]; bestIds = [id]; }
        else if (counts[id] === bestCount) { bestIds.push(id); }
      });
      if (!bestIds.length) { return null; }
      return { names: bestIds.map(function (id) { return names[id]; }), count: bestCount };
    }
    stats.topWinPitcher = topPitcher(winPitcherCounts, winPitcherNames);
    stats.topLossPitcher = topPitcher(lossPitcherCounts, lossPitcherNames);

    stats.venueCount = Object.keys(stats.venues).length;
    stats.uniquePlayers = Object.keys(stats.players).length;
    stats.doubleheaders = Object.keys(stats.doubleheaderDates).length;
    var decided = stats.homeWins + stats.awayWins;
    stats.homeWinPct = decided ? Math.round((stats.homeWins / decided) * 100) : 0;
    stats.awayWinPct = decided ? 100 - stats.homeWinPct : 0;
    stats.avgCrowd = stats.crowdCount ? Math.round(stats.crowdTotal / stats.crowdCount) : null;
    stats.avgTemp = stats.tempCount ? Math.round(stats.tempTotal / stats.tempCount) : null;

    // Mode of conditionCounts -- ties keep whichever condition sorts
    // first alphabetically, same "just pick one, deterministically"
    // approach as everywhere else ties aren't otherwise broken here.
    stats.mostCommonCondition = null;
    var topConditionCount = 0;
    Object.keys(stats.conditionCounts).sort().forEach(function (c) {
      if (stats.conditionCounts[c] > topConditionCount) {
        topConditionCount = stats.conditionCounts[c];
        stats.mostCommonCondition = c;
      }
    });

    // Resolve max/min from a flat list, keeping every tied game rather
    // than silently keeping only whichever happened to be seen first.
    function pickExtremes(list, key) {
      if (!list.length) { return { max: null, maxItems: [], min: null, minItems: [] }; }
      var vals = list.map(function (x) { return x[key]; });
      var maxVal = Math.max.apply(null, vals);
      var minVal = Math.min.apply(null, vals);
      return {
        max: maxVal, maxItems: list.filter(function (x) { return x[key] === maxVal; }),
        min: minVal, minItems: list.filter(function (x) { return x[key] === minVal; })
      };
    }

    var durationExtremes = pickExtremes(durationList, 'mins');
    stats.longest = durationExtremes.maxItems[0] || null;
    stats.longestGames = durationExtremes.maxItems;
    stats.shortest = durationExtremes.minItems[0] || null;
    stats.shortestGames = durationExtremes.minItems;

    var inningsExtremes = pickExtremes(inningsList, 'innings');
    stats.mostInnings = inningsExtremes.max;
    stats.mostInningsGames = inningsExtremes.maxItems;

    var crowdExtremes = pickExtremes(crowdList, 'crowd');
    stats.highestCrowd = crowdExtremes.maxItems[0] || null;
    stats.highestCrowdGames = crowdExtremes.maxItems;
    stats.lowestCrowd = crowdExtremes.minItems[0] || null;
    stats.lowestCrowdGames = crowdExtremes.minItems;

    var tempExtremes = pickExtremes(tempList, 'temp');
    stats.hottest = tempExtremes.maxItems[0] || null;
    stats.hottestGames = tempExtremes.maxItems;
    stats.coldest = tempExtremes.minItems[0] || null;
    stats.coldestGames = tempExtremes.minItems;

    var runDiffExtremes = pickExtremes(runDiffList, 'diff');
    stats.biggestBlowout = runDiffExtremes.maxItems[0] || null;
    stats.biggestBlowoutGames = runDiffExtremes.maxItems;
    stats.closestGame = runDiffExtremes.minItems[0] || null;
    stats.closestGameGames = runDiffExtremes.minItems;

    // Most games attended in a single day -- e.g. both games of a
    // doubleheader plus a separate game squeezed in between (Sam's
    // 8/29/2026, the real-world case this stat exists for). Grouped by
    // date only within this already-person-filtered `games` list, so it
    // naturally narrows per filter for free.
    var gamesByDate = {};
    games.forEach(function (g) { (gamesByDate[g.date] || (gamesByDate[g.date] = [])).push(g); });
    stats.mostGamesInADay = 0;
    Object.keys(gamesByDate).forEach(function (d) {
      if (gamesByDate[d].length > stats.mostGamesInADay) { stats.mostGamesInADay = gamesByDate[d].length; }
    });
    stats.mostGamesInADayGames = [];
    Object.keys(gamesByDate).sort().forEach(function (d) {
      if (gamesByDate[d].length === stats.mostGamesInADay) {
        gamesByDate[d].forEach(function (g) {
          stats.mostGamesInADayGames.push({ date: g.date, homeTeam: g.homeTeam, awayTeam: g.awayTeam });
        });
      }
    });

    return stats;
  }

  function gameLine(g, extra) {
    return fmtDate(g.date) + ' &middot; ' + g.awayTeam + ' @ ' + g.homeTeam + (extra ? '<br>' + extra : '');
  }
  // A cramped scrolling box inside a small stat tile is a bad way to show
  // more than a couple of games (unreadable, easy to miss most of the
  // list). Show the first few plainly; anything beyond that is hidden
  // behind a "+N more" toggle that expands the card to full height
  // instead -- no internal scroll region. `cap` defaults to 3 but can be
  // overridden per call (e.g. Extra-Inning Games only shows 1 up front).
  var STAT_DETAIL_CAP = 3;
  function statDetailHTML(list, extraFn, cap) {
    if (!list || !list.length) { return ''; }
    cap = cap || STAT_DETAIL_CAP;
    function line(g) { return '<div>' + gameLine(g, extraFn ? extraFn(g) : null) + '</div>'; }
    var shown = list.slice(0, cap).map(line).join('');
    var rest = list.slice(cap);
    if (!rest.length) { return shown; }
    return shown +
      '<div class="bb-stat-detail-more" hidden>' + rest.map(line).join('') + '</div>' +
      '<button type="button" class="bb-stat-detail-toggle">+' + rest.length + ' more</button>';
  }
  // Same one-line-per-item convention as statDetailHTML(), but for a
  // {count, names} pitcher leader instead of a list of games -- every tied
  // pitcher gets their own line, count included, e.g. "Adam Wainwright -- 3 wins".
  function pitcherDetailHTML(topPitcher, singular, plural) {
    if (!topPitcher) { return ''; }
    return topPitcher.names.map(function (name) {
      return '<div>' + name + ' &mdash; ' + topPitcher.count + ' ' + pluralize(topPitcher.count, singular, plural) + '</div>';
    }).join('');
  }
  function tile(num, label, denom, detail) {
    return '<div class="bb-stat' + (detail ? ' has-detail' : '') + '">' +
      '<div class="bb-num">' + num + (denom ? '<span class="bb-denom">' + denom + '</span>' : '') + '</div>' +
      '<span class="bb-label">' + label + '</span>' +
      (detail ? '<div class="bb-stat-detail">' + detail + '</div>' : '') +
    '</div>';
  }
  // For count-style tiles (as opposed to averages/extremes, which already
  // have their own "&ndash;" no-data fallback) -- when filtered to a
  // person whose games happen to have zero of something (e.g. Poppy has
  // attended no postseason games), hide the card entirely rather than
  // show a bare "0".
  function tileIfNonZero(count, html) { return count > 0 ? html : ''; }
  function pluralize(count, singular, plural) { return count === 1 ? singular : (plural || singular + 's'); }

  // Labels the actual margin rather than a static "Closest Game" -- with
  // one-run games this common, a static label doesn't say how close it
  // actually was, and a filtered person's own closest game won't always
  // land on the family-wide margin (e.g. a 1-run game for "Anyone" isn't
  // guaranteed to be a 1-run game for Poppy specifically).
  function marginLabel(diff) {
    return diff === 0 ? 'Tie Game' : diff + '-Run Game';
  }

  function buildStatsHTML(stats) {
    var headline =
      tile(stats.totalGames, pluralize(stats.totalGames, 'Game Attended', 'Games Attended')) +
      tile(stats.firstYear + '&ndash;' + stats.lastYear, 'Years Spanned') +
      tile(stats.venueCount, pluralize(stats.venueCount, 'Ballpark')) +
      tile(stats.homeWinPct + '%', 'Home Team Win Rate');

    var doubleheaderList = Object.keys(stats.doubleheaderDates).map(function (d) { return stats.doubleheaderDates[d]; });

    // Ordered so the plain, always-compact tiles fill the earlier rows
    // and stay even, while tiles carrying a detail list -- especially
    // Extra-Inning Games, the one most likely to keep growing as more
    // games get added over time -- land in the trailing row(s), where a
    // taller card doesn't force short siblings in the same row to stretch.
    var statLine =
      tileIfNonZero(stats.totalRuns, tile(stats.totalRuns.toLocaleString(), pluralize(stats.totalRuns, 'Total Run Scored', 'Total Runs Scored'))) +
      tileIfNonZero(stats.totalHits, tile(stats.totalHits.toLocaleString(), pluralize(stats.totalHits, 'Total Hit'))) +
      tileIfNonZero(stats.totalHR, tile(stats.totalHR, pluralize(stats.totalHR, 'Total Home Run'))) +
      tileIfNonZero(stats.totalSingles, tile(stats.totalSingles.toLocaleString(), pluralize(stats.totalSingles, 'Total Single'))) +
      tileIfNonZero(stats.totalDoubles, tile(stats.totalDoubles, pluralize(stats.totalDoubles, 'Total Double'))) +
      tileIfNonZero(stats.totalTriples, tile(stats.totalTriples, pluralize(stats.totalTriples, 'Total Triple'))) +
      tileIfNonZero(stats.totalStrikeouts, tile(stats.totalStrikeouts.toLocaleString(), pluralize(stats.totalStrikeouts, 'Total Strikeout'))) +
      tileIfNonZero(stats.totalWalks, tile(stats.totalWalks.toLocaleString(), pluralize(stats.totalWalks, 'Total Walk'))) +
      tileIfNonZero(stats.uniquePlayers, tile(stats.uniquePlayers.toLocaleString(), pluralize(stats.uniquePlayers, 'Unique Player Seen', 'Unique Players Seen'))) +
      tileIfNonZero(stats.uniqueTeams, tile(stats.uniqueTeams, pluralize(stats.uniqueTeams, 'Unique MLB Team Seen', 'Unique MLB Teams Seen'), '/30')) +
      tile(stats.totalTimeDisplay || '&ndash;', 'Time at the Ballpark') +
      tile(stats.day + ' / ' + stats.night, 'Day / Night Games') +
      tile(stats.avgCrowd != null ? stats.avgCrowd.toLocaleString() : '&ndash;', 'Avg. Crowd Size') +
      tile(stats.avgTemp != null ? stats.avgTemp + '&deg;' : '&ndash;', 'Avg. Game-Day Temp') +
      tile(stats.hottest ? stats.hottest.temp + '&deg;' : '&ndash;', 'Hottest Game', null,
        statDetailHTML(stats.hottestGames, function (g) { return g.temp + '&deg;F'; })) +
      tile(stats.coldest ? stats.coldest.temp + '&deg;' : '&ndash;', 'Coldest Game', null,
        statDetailHTML(stats.coldestGames, function (g) { return g.temp + '&deg;F'; })) +
      (stats.mostCommonCondition ? tile(stats.mostCommonCondition, 'Most Common Weather') : '') +
      (stats.mostGamesInADay > 1 ? tile(stats.mostGamesInADay, pluralize(stats.mostGamesInADay, 'Game', 'Games') + ' in One Day', null,
        statDetailHTML(stats.mostGamesInADayGames)) : '') +
      tileIfNonZero(stats.postseason, tile(stats.postseason, pluralize(stats.postseason, 'Postseason Game'), null, statDetailHTML(stats.postseasonGames))) +
      tileIfNonZero(stats.cycles, tile(stats.cycles, pluralize(stats.cycles, 'Cycle Witnessed', 'Cycles Witnessed'), null,
        statDetailHTML(stats.cycleGames, function (g) { return g.player; }, 1))) +
      tile(stats.longest ? stats.longest.duration : '&ndash;', 'Longest Game', null, statDetailHTML(stats.longestGames)) +
      tile(stats.shortest ? stats.shortest.duration : '&ndash;', 'Shortest Game', null, statDetailHTML(stats.shortestGames)) +
      tile(stats.biggestBlowout ? stats.biggestBlowout.score : '&ndash;', 'Biggest Blowout', null, statDetailHTML(stats.biggestBlowoutGames)) +
      tile(stats.closestGame ? stats.closestGame.score : '&ndash;',
        stats.closestGame ? marginLabel(stats.closestGame.diff) : 'Closest Game', null, statDetailHTML(stats.closestGameGames)) +
      tile(stats.topWinPitcher ? stats.topWinPitcher.count : '&ndash;', 'Most Wins Seen', null,
        pitcherDetailHTML(stats.topWinPitcher, 'win', 'wins')) +
      tile(stats.topLossPitcher ? stats.topLossPitcher.count : '&ndash;', 'Most Losses Seen', null,
        pitcherDetailHTML(stats.topLossPitcher, 'loss', 'losses')) +
      tile(stats.highestCrowd ? stats.highestCrowd.crowd.toLocaleString() : '&ndash;', 'Highest Attendance', null,
        statDetailHTML(stats.highestCrowdGames, function (g) { return g.crowd.toLocaleString(); })) +
      tile(stats.lowestCrowd ? stats.lowestCrowd.crowd.toLocaleString() : '&ndash;', 'Lowest Attendance', null,
        statDetailHTML(stats.lowestCrowdGames, function (g) { return g.crowd.toLocaleString(); })) +
      tileIfNonZero(stats.doubleheaders, tile(stats.doubleheaders, pluralize(stats.doubleheaders, 'Doubleheader'), null, statDetailHTML(doubleheaderList))) +
      tile(stats.mostInnings || '&ndash;', 'Most Innings', null, statDetailHTML(stats.mostInningsGames)) +
      tileIfNonZero(stats.extraInnings, tile(stats.extraInnings, pluralize(stats.extraInnings, 'Extra-Inning Game'), null,
        statDetailHTML(stats.extraInningsGames, function (g) { return g.innings + ' innings'; }, 1)));

    document.getElementById('mlbgHeadlineStats').innerHTML = headline;
    document.getElementById('mlbgStatGrid').innerHTML = statLine;
    // no re-init needed here -- the toggle listener is delegated on the
    // stable #mlbgStatGrid container itself (see initStatDetailToggle),
    // so it keeps working across every innerHTML rebuild above.

    var personHTML = PERSON_ORDER.map(function (p) {
      return '<div class="mlbg-person-chip" style="--person:' + PERSON_COLORS[p] + '">' +
        '<span class="mlbg-person-dot"></span>' +
        '<span class="mlbg-person-name">' + PERSON_LABELS[p] + '</span>' +
        '<span class="mlbg-person-count">' + stats.byPerson[p] + '</span>' +
      '</div>';
    }).join('');
    document.getElementById('mlbgPersonRow').innerHTML = personHTML;
  }

  function buildYearChartSVG(byYear, firstYear, lastYear) {
    var years = [];
    for (var y = parseInt(firstYear, 10); y <= parseInt(lastYear, 10); y++) { years.push(String(y)); }
    var counts = years.map(function (y) { return byYear[y] || 0; });
    var max = Math.max.apply(null, counts.concat([1]));

    var W = 760, H = 160, PB = 26, barGap = 6;
    var barW = (W / years.length) - barGap;

    var bars = years.map(function (y, i) {
      var count = counts[i];
      var h = count ? Math.max((count / max) * (H - PB - 14), 3) : 0;
      var x = i * (barW + barGap) + barGap / 2;
      var yTop = H - PB - h;
      return '<g class="mlbg-year-bar-group" data-year="' + y + '" data-count="' + count + '">' +
        '<rect class="mlbg-year-bar" x="' + x.toFixed(1) + '" y="' + yTop.toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + h.toFixed(1) + '" rx="2"></rect>' +
        '<text class="mlbg-year-axis" x="' + (x + barW / 2).toFixed(1) + '" y="' + (H - 6) + '">' + y.slice(2) + '</text>' +
      '</g>';
    }).join('');

    return '<svg class="mlbg-year-svg" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">' + bars + '</svg>' +
      '<div class="mlbg-year-tooltip" id="mlbgYearTooltip"></div>';
  }

  function initYearChart(stats) {
    document.getElementById('mlbgYearChart').innerHTML = buildYearChartSVG(stats.byYear, stats.firstYear, stats.lastYear);
    var tip = document.getElementById('mlbgYearTooltip');
    var wrap = document.getElementById('mlbgYearChart');
    wrap.querySelectorAll('.mlbg-year-bar-group').forEach(function (g) {
      g.addEventListener('mouseenter', function () {
        tip.innerHTML = '<strong>' + g.dataset.year + '</strong> &middot; ' + g.dataset.count + (g.dataset.count === '1' ? ' game' : ' games');
        tip.classList.add('is-visible');
      });
      g.addEventListener('mousemove', function (e) {
        var rect = wrap.getBoundingClientRect();
        tip.style.left = (e.clientX - rect.left + 10) + 'px';
        tip.style.top = (e.clientY - rect.top - 40) + 'px';
      });
      g.addEventListener('mouseleave', function () { tip.classList.remove('is-visible'); });
    });
  }

  // =========================================================
  // Game list
  // =========================================================

  function buildAttendeeDotsHTML(game) {
    return PERSON_ORDER.filter(function (p) { return game.attendedBy[p] === 1; }).map(function (p) {
      return '<span class="mlbg-attendee-dot" style="--person:' + PERSON_COLORS[p] + '" title="' + PERSON_LABELS[p] + '"></span>';
    }).join('');
  }

  function buildGameCardHTML(game) {
    var badges = '';
    if (game.gameType && game.gameType !== 'R') { badges += '<span class="mlbg-badge mlbg-badge--postseason">Postseason</span>'; }
    return '<div class="mlbg-game-card" data-gamepk="' + game.gamePk + '">' +
      '<div class="mlbg-game-row">' +
        '<time class="mlbg-game-date">' + fmtDate(game.date) + '</time>' +
        '<div class="mlbg-game-matchup">' + game.awayTeam + ' <span class="mlbg-at">@</span> ' + game.homeTeam + '</div>' +
        '<div class="mlbg-game-score">' + (game.awayScore != null ? game.awayScore + '&ndash;' + game.homeScore : '') + '</div>' +
        '<div class="mlbg-game-dots">' + buildAttendeeDotsHTML(game) + '</div>' +
      '</div>' +
      '<div class="mlbg-game-sub">' +
        '<span class="mlbg-game-venue">' + game.venue + '</span>' +
        badges +
        (game.notes ? '<span class="mlbg-game-notes">' + game.notes + '</span>' : '') +
      '</div>' +
      '<div class="mlbg-game-detail" hidden></div>' +
    '</div>';
  }

  function personLine(label, p) {
    return p ? '<div class="mlbg-decision"><span>' + label + '</span><strong>' + p.name + '</strong></div>' : '';
  }

  function buildLinescoreHTML(full, game) {
    if (!full.innings || !full.innings.length) { return ''; }
    var heads = '', awayRow = '', homeRow = '';
    full.innings.forEach(function (inn, i) {
      heads += '<th>' + (i + 1) + '</th>';
      awayRow += '<td>' + (inn.away != null ? inn.away : '-') + '</td>';
      homeRow += '<td>' + (inn.home != null ? inn.home : '-') + '</td>';
    });
    heads += '<th class="tl-ls-rhe">R</th><th class="tl-ls-rhe">H</th>';
    awayRow += '<td class="tl-ls-rhe">' + (game.awayScore != null ? game.awayScore : '-') + '</td><td class="tl-ls-rhe">' + (full.awayHits != null ? full.awayHits : '-') + '</td>';
    homeRow += '<td class="tl-ls-rhe">' + (game.homeScore != null ? game.homeScore : '-') + '</td><td class="tl-ls-rhe">' + (full.homeHits != null ? full.homeHits : '-') + '</td>';
    return '<div class="tl-linescore-wrap"><table class="tl-linescore">' +
      '<thead><tr><th class="tl-ls-team"></th>' + heads + '</tr></thead>' +
      '<tbody>' +
        '<tr><td class="tl-ls-team">' + game.awayTeam + '</td>' + awayRow + '</tr>' +
        '<tr><td class="tl-ls-team">' + game.homeTeam + '</td>' + homeRow + '</tr>' +
      '</tbody>' +
    '</table></div>';
  }

  function buildGameDetailHTML(game) {
    var full = mergeDetail(game);
    var caveats = '';
    if (full.statusReason) { caveats += '<span class="mlbg-caveat">' + full.statusReason + (full.inningsPlayed ? ' &middot; ' + full.inningsPlayed + ' innings' : '') + '</span>'; }
    if (full.extraInnings) { caveats += '<span class="mlbg-caveat">Extra innings (' + full.inningsPlayed + ')</span>'; }
    if (full.doubleheader) { caveats += '<span class="mlbg-caveat">Doubleheader</span>'; }

    var weatherHTML = full.weather && full.weather.condition
      ? '<div class="mlbg-detail-fact"><span>Weather</span><strong>' + full.weather.condition + (full.weather.temp ? ', ' + full.weather.temp + '&deg;' : '') + '</strong></div>'
      : '';
    var crowdHTML = full.crowdSize != null
      ? '<div class="mlbg-detail-fact"><span>Attendance</span><strong>' + full.crowdSize.toLocaleString() + '</strong></div>' : '';
    var durationHTML = full.duration
      ? '<div class="mlbg-detail-fact"><span>Duration</span><strong>' + full.duration + '</strong></div>' : '';
    var dayNightHTML = full.dayNight
      ? '<div class="mlbg-detail-fact"><span>Time</span><strong>' + (full.dayNight === 'day' ? 'Day game' : 'Night game') + '</strong></div>' : '';

    return (caveats ? '<div class="mlbg-caveats">' + caveats + '</div>' : '') +
      '<div class="mlbg-detail-facts">' + weatherHTML + crowdHTML + durationHTML + dayNightHTML + '</div>' +
      '<div class="mlbg-decisions">' +
        personLine('W', full.winPitcher) + personLine('L', full.lossPitcher) + personLine('SV', full.savePitcher) +
      '</div>' +
      buildLinescoreHTML(full, game);
  }

  // Grouped by year, each year collapsed behind its own toggle -- with
  // 100+ games a single flat list (or one whole-list toggle) either runs
  // on long enough that Players below it gets lost, or hides everything
  // behind one all-or-nothing click. Per-year groups keep the page short
  // by default while still letting a visitor jump straight to one year.
  function buildGameListHTML(games, sortKey) {
    var sorted = games.slice().sort(function (a, b) {
      return sortKey === 'oldest' ? (a.date < b.date ? -1 : 1) : (a.date > b.date ? -1 : 1);
    });

    var order = [];
    var byYear = {};
    sorted.forEach(function (g) {
      var y = g.date.slice(0, 4);
      if (!byYear[y]) { byYear[y] = []; order.push(y); }
      byYear[y].push(g);
    });

    return order.map(function (y) {
      var yearGames = byYear[y];
      return '<div class="mlbg-year-group">' +
        '<button type="button" class="mlbg-year-toggle">' +
          '<span class="mlbg-year-toggle-label">' + y + '</span>' +
          '<span class="mlbg-year-toggle-count">' + yearGames.length + ' ' + pluralize(yearGames.length, 'game') + '</span>' +
          '<span class="mlbg-year-toggle-icon">&#9662;</span>' +
        '</button>' +
        '<div class="mlbg-year-games" hidden>' + yearGames.map(buildGameCardHTML).join('') + '</div>' +
      '</div>';
    }).join('');
  }

  // Event-delegated on the stable container (not the tiles themselves,
  // which get replaced wholesale on every innerHTML rebuild) so it keeps
  // working across filter changes without needing to be re-attached.
  function initStatDetailToggle(containerId) {
    var el = document.getElementById(containerId);
    if (!el) { return; }
    el.addEventListener('click', function (e) {
      var btn = e.target.closest('.bb-stat-detail-toggle');
      if (!btn) { return; }
      var more = btn.previousElementSibling;
      if (more && more.classList.contains('bb-stat-detail-more')) { more.hidden = false; }
      btn.remove();
    });
  }

  // Click a leaderboard row (Most Seen, either column) to reveal which
  // attended games that player appeared in -- collapsed by default since
  // a player can rack up dozens of appearances (Wainwright's at 29).
  function initLeaderboardExpand(containerId) {
    var el = document.getElementById(containerId);
    if (!el) { return; }
    el.addEventListener('click', function (e) {
      if (e.target.closest('.bb-stat-detail-toggle')) { return; } // let the nested "+N more" toggle handle its own click
      var row = e.target.closest('.mlbg-leaderboard-row');
      if (!row) { return; }
      var detail = row.querySelector('.bb-stat-detail');
      if (!detail) { return; }
      var willOpen = detail.hidden;
      detail.hidden = !willOpen;
      row.classList.toggle('is-open', willOpen);
    });
  }

  // getGames() is called fresh on every sort click (not a static array)
  // since the person filter can swap the underlying game set out from
  // under this control at any time.
  function initSortToggle(getGames, onSortChange) {
    document.getElementById('mlbgSortToggle').addEventListener('click', function (e) {
      var btn = e.target.closest('.mlbg-sort-btn');
      if (!btn || btn.classList.contains('active')) { return; }
      document.querySelectorAll('.mlbg-sort-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      onSortChange(btn.dataset.sort);
      var list = document.getElementById('mlbgGamesList');
      list.classList.add('is-sorting');
      setTimeout(function () {
        list.innerHTML = buildGameListHTML(getGames(), btn.dataset.sort);
        list.classList.remove('is-sorting');
      }, 220);
    });
  }

  // Person filter -- All / Anyone / Josh / Sam / Ellie / Tilly / Poppy --
  // drives the Journey map, Overview stats, and Games list together (the Players
  // leaderboard intentionally stays as the full all-time list).
  function initPersonFilter(onChange) {
    var el = document.getElementById('mlbgPersonFilter');
    if (!el) { return; }
    el.addEventListener('click', function (e) {
      var btn = e.target.closest('.mlbg-person-filter-btn');
      if (!btn || btn.classList.contains('active')) { return; }
      el.querySelectorAll('.mlbg-person-filter-btn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      onChange(btn.dataset.person);
    });
  }

  // The shared .site-header is itself sticky at top:0 with a height that
  // varies by viewport (its nav wraps at narrower widths), so the filter
  // bar's sticky offset has to be measured at runtime, not hardcoded --
  // same reasoning stats/index.html's scrollspy already uses offsetHeight for.
  function initStickyFilterOffset() {
    var header = document.querySelector('.site-header');
    var filterBar = document.getElementById('mlbgPersonFilter');
    if (!header) { return; }
    function apply() {
      var headerH = header.offsetHeight;
      document.documentElement.style.setProperty('--mlbg-filter-top', headerH + 'px');
      // Section panels have no scroll-margin-top by default, so in-page
      // nav links (Journey/Overview/Games/Players) land sections flush
      // at the very top of the viewport -- which is now covered by two
      // stacked sticky elements (the site header *and* the filter bar
      // sitting below it), hiding each section's heading behind them.
      // Reserve space for both, plus a little breathing room.
      var filterH = filterBar ? filterBar.offsetHeight : 0;
      document.documentElement.style.setProperty('--mlbg-scroll-offset', (headerH + filterH + 16) + 'px');
    }
    apply();
    window.addEventListener('resize', apply);
  }

  function initGameExpand() {
    document.getElementById('mlbgGamesList').addEventListener('click', function (e) {
      var yearBtn = e.target.closest('.mlbg-year-toggle');
      if (yearBtn) {
        var body = yearBtn.nextElementSibling;
        var willOpen = body.hidden;
        body.hidden = !willOpen;
        yearBtn.classList.toggle('is-open', willOpen);
        return;
      }
      var card = e.target.closest('.mlbg-game-card');
      if (!card) { return; }
      var gamePk = parseInt(card.dataset.gamepk, 10);
      var game = mlbGames.filter(function (g) { return g.gamePk === gamePk; })[0];
      var detailEl = card.querySelector('.mlbg-game-detail');
      var isOpen = card.classList.toggle('is-open');
      if (isOpen) {
        if (!detailEl.dataset.built) {
          detailEl.innerHTML = buildGameDetailHTML(game);
          detailEl.dataset.built = '1';
        }
        detailEl.hidden = false;
      } else {
        detailEl.hidden = true;
      }
    });
  }


  // =========================================================
  // Players leaderboard
  // =========================================================

  // Standalone from buildLeaderboardHTML below -- this needs full game
  // references per player (via gameLine()/statDetailHTML(), the same
  // "which game(s)" treatment the Overview tiles already use), not just a
  // bare count, and only for the small hofPlayers subset rather than
  // every player, so it isn't worth threading through the shared tally.
  function buildHofListHTML(games) {
    if (typeof hofPlayers === 'undefined' || typeof mlbGamePlayers === 'undefined' || typeof mlbPlayers === 'undefined') { return ''; }
    var tally = {};
    games.forEach(function (g) {
      var appearances = mlbGamePlayers[g.gamePk];
      if (!appearances) { return; }
      appearances.forEach(function (p) {
        if (!hofPlayers[p.id]) { return; }
        if (!tally[p.id]) { tally[p.id] = { count: 0, games: [] }; }
        tally[p.id].count++;
        tally[p.id].games.push({ date: g.date, homeTeam: g.homeTeam, awayTeam: g.awayTeam });
      });
    });

    var ids = Object.keys(tally);
    var summaryEl = document.getElementById('mlbgHofSummary');
    if (summaryEl) {
      summaryEl.innerHTML = ids.length
        ? 'You&rsquo;ve seen <strong>' + ids.length + '</strong> Hall of Famer' + (ids.length === 1 ? '' : 's') + ' play.'
        : '';
    }
    if (!ids.length) { return '<p class="mlbg-empty">No Hall of Famers seen yet.</p>'; }

    var ranked = ids.map(function (id) {
      return {
        id: id,
        name: mlbPlayers[id] || 'Unknown',
        inductionYear: hofPlayers[id].inductionYear,
        count: tally[id].count,
        games: tally[id].games
      };
    }).sort(function (a, b) { return b.count - a.count; });

    return ranked.map(function (p) {
      var photoUrl = 'https://img.mlbstatic.com/mlb-photos/image/upload/w_180,q_100/v1/people/' + p.id + '/headshot/67/current';
      return '<div class="mlbg-hof-card">' +
        '<img class="mlbg-hof-photo" src="' + photoUrl + '" alt="" loading="lazy" onerror="this.parentNode.removeChild(this)">' +
        '<div class="mlbg-hof-name">' + p.name + '</div>' +
        '<div class="mlbg-hof-meta">HOF ' + p.inductionYear + ' &middot; ' + p.count + ' ' + pluralize(p.count, 'game') + '</div>' +
        '<div class="bb-stat-detail">' + statDetailHTML(p.games) + '</div>' +
      '</div>';
    }).join('');
  }

  // Tallies appearances only across `games` (the currently filtered set),
  // not every game in mlbGamePlayers -- so switching the person filter
  // correctly narrows this to who *that person* has seen the most.
  // Each row is collapsed until clicked -- with up to 25 rows per column,
  // showing every player's full game list up front would run on far
  // longer than the "roll it up until clicked" treatment used everywhere
  // else on this page (year groups, stat tile detail, etc.).
  function buildLeaderboardRowsHTML(ranked) {
    if (!ranked.length) { return '<p class="mlbg-empty">No player data yet.</p>'; }
    var max = ranked[0].count;
    return ranked.map(function (p, i) {
      var pct = Math.max((p.count / max) * 100, 6);
      return '<div class="mlbg-leaderboard-row">' +
        '<span class="mlbg-leaderboard-rank">' + (i + 1) + '</span>' +
        '<div class="mlbg-leaderboard-main">' +
          '<div class="mlbg-leaderboard-name">' + p.name + ' <span class="mlbg-leaderboard-team">' + p.team + '</span></div>' +
          '<div class="mlbg-leaderboard-bar-wrap"><div class="mlbg-leaderboard-bar" style="width:' + pct + '%"></div></div>' +
          '<div class="bb-stat-detail" hidden>' + statDetailHTML(p.games) + '</div>' +
        '</div>' +
        '<span class="mlbg-leaderboard-count">' + p.count + '</span>' +
      '</div>';
    }).join('');
  }

  // Split into Pitchers vs. Others (position players) -- classified by
  // each player's most-recently-seen position (mirrors how "team" is
  // already tracked the same way). A player who's appeared as both
  // (rare -- a position player pitching a blowout) lands wherever they
  // were seen most recently; not worth a more elaborate rule for how
  // infrequently that happens in practice.
  // Starters vs. Relievers is decided by which role a pitcher shows up in
  // *more often* across attended games (not just their most recent
  // appearance) -- a career reliever who made one emergency spot start
  // shouldn't flip buckets over that single game.
  function buildLeaderboardHTML(topN, games) {
    if (typeof mlbGamePlayers === 'undefined' || typeof mlbPlayers === 'undefined') { return { starters: '', relievers: '', others: '' }; }
    var counts = {}, lastTeam = {}, lastPosition = {}, gamesByPlayer = {}, startCounts = {}, reliefCounts = {};
    games.forEach(function (g) {
      var appearances = mlbGamePlayers[g.gamePk];
      if (!appearances) { return; }
      appearances.forEach(function (p) {
        counts[p.id] = (counts[p.id] || 0) + 1;
        lastTeam[p.id] = p.team;
        lastPosition[p.id] = p.position;
        (gamesByPlayer[p.id] || (gamesByPlayer[p.id] = [])).push({ date: g.date, homeTeam: g.homeTeam, awayTeam: g.awayTeam });
        if (p.position === 'P') {
          if (p.gamesStarted) { startCounts[p.id] = (startCounts[p.id] || 0) + 1; }
          else { reliefCounts[p.id] = (reliefCounts[p.id] || 0) + 1; }
        }
      });
    });

    function isStarter(id) { return (startCounts[id] || 0) > (reliefCounts[id] || 0); }

    function rankGroup(filterFn) {
      return Object.keys(counts)
        .filter(filterFn)
        .map(function (id) {
          return { id: id, name: mlbPlayers[id] || 'Unknown', team: lastTeam[id], count: counts[id], games: gamesByPlayer[id] };
        })
        .sort(function (a, b) { return b.count - a.count; })
        .slice(0, topN);
    }

    return {
      starters: buildLeaderboardRowsHTML(rankGroup(function (id) { return lastPosition[id] === 'P' && isStarter(id); })),
      relievers: buildLeaderboardRowsHTML(rankGroup(function (id) { return lastPosition[id] === 'P' && !isStarter(id); })),
      others: buildLeaderboardRowsHTML(rankGroup(function (id) { return lastPosition[id] !== 'P'; }))
    };
  }

  // =========================================================
  // Journey map
  // =========================================================

  function buildJourneyStops(games) {
    var sorted = games.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    var stops = [];
    sorted.forEach(function (g) {
      var v = mlbVenues[g.venue];
      if (!v) { console.warn('mlb-games: no venue coordinates for "' + g.venue + '" (' + g.date + ')'); return; }
      stops.push({
        date: g.date, lat: v.lat, lng: v.lng, venue: g.venue,
        homeTeam: g.homeTeam, awayTeam: g.awayTeam,
        homeScore: g.homeScore, awayScore: g.awayScore
      });
    });
    return stops;
  }

  function initJourneyMap(initialStops) {
    var mapEl = document.getElementById('mlbgJourneyMap');
    if (!mapEl) { return { setStops: function () {} }; }

    // `stops` is reassignable (not a frozen parameter) so the person
    // filter can swap in a new game subset via setStops() below without
    // recreating the map/style/event listeners -- everything that depends
    // on `stops` just closes over this var and re-derives itself on demand.
    var stops = initialStops;

    // Start zoomed out to the whole continental US (same center/zoom baseball's
    // own ballparksMap uses) rather than snapping straight into the first
    // stop's city -- much less jarring on first paint.
    // MapLibre GL JS + CARTO vector basemap -- ported from Leaflet since
    // CARTO now watermarks unauthenticated *raster* tile requests and
    // recommends vector instead (https://docs.carto.com/faqs/carto-basemaps).
    // MapLibre takes [lng, lat] -- the opposite order from Leaflet's [lat, lng].
    var map = new maplibregl.Map({
      container: 'mlbgJourneyMap',
      style: 'https://basemaps.cartocdn.com/gl/' + (IS_DARK ? 'dark-matter' : 'positron') + '-gl-style/style.json?key=cb1_2jdq_1_6d79969636549968efce8740',
      center: [-97, 38.5],
      zoom: 3,
      scrollZoom: false
    });
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-left');
    // The trail is a GeoJSON source + line layer (not a Leaflet-style
    // vector overlay object), so it can't exist until the style finishes
    // loading -- setTrailCoords() below no-ops safely if called first.
    var trailReady = false;
    map.on('load', function () {
      map.addSource('mlbg-journey-trail', {
        type: 'geojson',
        data: { type: 'Feature', geometry: { type: 'LineString', coordinates: [] } }
      });
      map.addLayer({
        id: 'mlbg-journey-trail',
        type: 'line',
        source: 'mlbg-journey-trail',
        paint: { 'line-color': '#C8102E', 'line-width': 2, 'line-opacity': 0.55 }
      });
      trailReady = true;
    });
    // commit() always resends the *entire* trail-so-far (not incrementally),
    // so if this fires before trailReady, the very next commit() call
    // (the next step) naturally catches the line up -- no separate
    // "replay on load" logic needed.
    function setTrailCoords(lngLats) {
      if (!trailReady) { return; }
      map.getSource('mlbg-journey-trail').setData({ type: 'Feature', geometry: { type: 'LineString', coordinates: lngLats } });
    }

    // Static team markers, one per distinct ballpark, plotted for context
    // alongside the animated ball -- same team-logo sprite baseball's own
    // ballparksMap uses (images/logos.png), keyed off mlbVenues' `slug`.
    // Dedupes by lat/lng, not venue name, since a handful of venues appear
    // under multiple historic name strings (e.g. AT&T Park / Oracle Park).
    // Start grayed out (CSS default) and reveal in color the moment the
    // journey reaches that ballpark for the first time -- kept in sync
    // with playback position in updateVisitedMarkers() below.
    // Two views into the same "which ballparks have we been to" data:
    // small dots on the map (context, no overlap problem since they're
    // tiny) and a fixed-grid strip of team-logo chips below the map (the
    // actual "collection" view, where a grid layout makes overlap
    // impossible regardless of how close two parks sit geographically --
    // e.g. DC/Philly/NY or St. Louis/Cincinnati/Pittsburgh). Both start
    // grayed out and reveal together as the journey reaches each park.
    function addTeamMarkers() {
      var byLocation = {};
      stops.forEach(function (s, i) {
        var v = mlbVenues[s.venue];
        if (!v) { return; }
        var key = v.lat + ',' + v.lng;
        if (!byLocation[key]) {
          byLocation[key] = { lat: v.lat, lng: v.lng, slug: v.slug, team: s.homeTeam, venue: s.venue, count: 0, firstIdx: i };
        }
        byLocation[key].count++;
      });
      var orderedKeys = Object.keys(byLocation).sort(function (a, b) {
        return byLocation[a].firstIdx - byLocation[b].firstIdx;
      });

      var markersByKey = {};
      var chipsByKey = {};
      var gridEl = document.getElementById('mlbgTeamGrid');

      orderedKeys.forEach(function (key) {
        var v = byLocation[key];
        var popupHTML =
          '<strong>' + v.team + '</strong><br>' +
          '<em class="popup-sub">' + v.venue + '</em><br>' +
          '<span class="popup-meta">' + v.count + (v.count === 1 ? ' game' : ' games') + ' attended</span>';

        var dotEl = document.createElement('div');
        dotEl.className = 'mlbg-team-marker-icon';
        var dot = document.createElement('div');
        dot.className = 'mlbg-team-dot';
        dotEl.appendChild(dot);
        var popup = new maplibregl.Popup({ offset: 6 }).setHTML(popupHTML);
        markersByKey[key] = new maplibregl.Marker({ element: dotEl }).setLngLat([v.lng, v.lat]).setPopup(popup).addTo(map);

        var chip = document.createElement('div');
        chip.className = 'mlbg-team-chip';
        chip.title = v.team + ' -- ' + v.venue;
        chip.innerHTML = '<div class="team-logo ' + v.slug + '"></div>' +
          '<span class="mlbg-team-chip-count">0</span>'; // starts at 0, ticks up live as the journey plays -- see updateVisitedMarkers
        gridEl.appendChild(chip);
        chipsByKey[key] = chip;
      });

      return { markers: markersByKey, chips: chipsByKey };
    }

    var teamViews = null;
    function clearTeamViews() {
      if (teamViews) {
        Object.keys(teamViews.markers).forEach(function (key) { teamViews.markers[key].remove(); });
      }
      document.getElementById('mlbgTeamGrid').innerHTML = '';
    }
    function rebuildTeamViews() {
      clearTeamViews();
      teamViews = addTeamMarkers();
    }

    // Recomputed from scratch on every commit (not incremented in place)
    // so it's always correct regardless of direction -- stepping forward
    // through Play, jumping to an earlier year, or Reset all just replay
    // stops 0..idx and get the right running count for free.
    function updateVisitedMarkers() {
      var counts = {};
      for (var j = 0; j <= idx; j++) {
        var v = mlbVenues[stops[j].venue];
        if (v) {
          var key = v.lat + ',' + v.lng;
          counts[key] = (counts[key] || 0) + 1;
        }
      }
      Object.keys(teamViews.markers).forEach(function (key) {
        var count = counts[key] || 0;
        var isVisited = count > 0;
        var el = teamViews.markers[key].getElement();
        if (el) { el.classList.toggle('is-visited', isVisited); }
        var chip = teamViews.chips[key];
        chip.classList.toggle('is-visited', isVisited);
        chip.querySelector('.mlbg-team-chip-count').textContent = count;
      });
    }

    // The ball is a plain DOM element positioned in pixel space (via
    // map.project()), not a maplibregl.Marker -- since the camera never
    // pans or zooms after init, pixel coordinates for a given stop
    // are stable, which lets us animate a simple parabolic "hop" arc
    // between two pixel points with plain JS instead of fighting
    // MapLibre's own lng/lat-based marker positioning. The arc's vertical
    // bounce is visible even when the start and end point are identical
    // (repeat visits to the same ballpark), so every stop gets a clear
    // "another game happened here" beat instead of the marker looking
    // frozen through a long run of, say, Busch Stadium games.
    // Appended directly to the map container -- map.project() returns
    // coordinates relative to that same container's top-left corner.
    var ballEl = document.createElement('div');
    ballEl.className = 'mlbg-journey-ball';
    ballEl.innerHTML = '&#9918;';
    mapEl.style.position = 'relative';
    mapEl.appendChild(ballEl);

    function pixelFor(stop) { return map.project([stop.lng, stop.lat]); }
    function placeBallAtPixel(p) { ballEl.style.transform = 'translate(' + p.x + 'px,' + p.y + 'px)'; }
    function placeBallAt(stopIdx) { placeBallAtPixel(pixelFor(posFor(stopIdx))); }

    // idx starts at -1 -- "not started yet." The ball rests at HOME
    // (Springfield, IL) until Play (or Year-jump) is used for the first
    // time, rather than opening with stop 0 already selected/committed.
    var HOME = { lat: 39.7817, lng: -89.6501 };
    function posFor(i) { return i < 0 ? HOME : stops[i]; }

    var idx = -1, playing = false, timer = null;

    if (window.ResizeObserver) {
      new ResizeObserver(function () { map.resize(); placeBallAt(idx); }).observe(mapEl);
    } else {
      window.addEventListener('load', function () { map.resize(); placeBallAt(idx); });
    }
    var speedSelect = document.getElementById('mlbgSpeedSelect');
    var playBtn = document.getElementById('mlbgPlayBtn');
    var resetBtn = document.getElementById('mlbgResetBtn');
    var yearSelect = document.getElementById('mlbgYearSelect');
    var progressEl = document.getElementById('mlbgJourneyProgress');
    var yearEl = document.getElementById('mlbgJourneyYear');
    var playOverlayEl = document.getElementById('mlbgJourneyPlayOverlay');

    function rebuildYearOptions() {
      var years = [];
      stops.forEach(function (s) { var y = s.date.slice(0, 4); if (years.indexOf(y) === -1) { years.push(y); } });
      yearSelect.innerHTML = '<option value="">Jump to year&hellip;</option>' +
        years.map(function (y) { return '<option value="' + y + '">' + y + '</option>'; }).join('');
    }

    function caption(stop, stepIndex) {
      var wonHome = stop.homeScore > stop.awayScore;
      var score = stop.homeScore != null ? stop.awayScore + '&ndash;' + stop.homeScore : '';
      progressEl.innerHTML =
        '<strong>' + fmtDate(stop.date) + '</strong> &middot; ' + stop.awayTeam + ' @ ' + stop.homeTeam + ' ' + score +
        '<br><span class="mlbg-journey-venue">' + stop.venue + '</span>' +
        '<span class="mlbg-journey-count">Stop ' + (stepIndex + 1) + ' of ' + stops.length + ' &middot; ' + stop.date.slice(0, 4) + '</span>';
    }

    // Prominent year badge in the map's corner -- only updates (with a
    // brief pulse) when the year actually changes, not on every stop.
    var lastYear = null;
    var yearIsRed = true;
    function updateYearBadge(stop) {
      var y = stop.date.slice(0, 4);
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

    // Logical state (idx, the trail, the caption) always updates instantly
    // and synchronously at the top of jumpTo/stepTo -- the arc animation
    // below is purely cosmetic and never the source of truth. That's the
    // fix for the earlier bug where a fast Play interval could fire before
    // the previous hop's animation had "committed" its point, silently
    // dropping a stop from the trail and making the line jump/disappear.
    function commit(i) {
      idx = Math.max(0, Math.min(stops.length - 1, i));
      setTrailCoords(stops.slice(0, idx + 1).map(function (s) { return [s.lng, s.lat]; }));
      caption(stops[idx], idx);
      updateYearBadge(stops[idx]);
      updateVisitedMarkers();
      playOverlayEl.classList.remove('is-shown');
      return stops[idx];
    }

    function jumpTo(i) {
      if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
      var stop = commit(i);
      placeBallAtPixel(pixelFor(stop));
    }

    function stepTo(i) {
      if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
      var prevStop = posFor(idx); // idx may be -1 (still at HOME) for the very first hop
      var stop = commit(i);
      var p0 = pixelFor(prevStop);
      var p1 = pixelFor(stop);
      var durationMs = parseInt(speedSelect.value, 10);

      var start = null;
      function frame(ts) {
        if (!start) { start = ts; }
        var t = Math.min((ts - start) / durationMs, 1);
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
    // after the previous one has already run, so playback can never race
    // ahead of itself the way a fixed-period setInterval could.
    function playStep() {
      if (idx >= stops.length - 1) { pause(); return; }
      stepTo(idx + 1);
      timer = setTimeout(playStep, parseInt(speedSelect.value, 10));
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

    // Back to "not started" -- ball at HOME, empty trail, everything
    // regrayed -- rather than jumping to stop 0 already-selected. Used
    // both for the Reset button and the very first paint.
    function resetToHome() {
      if (animFrame) { cancelAnimationFrame(animFrame); animFrame = null; }
      idx = -1;
      setTrailCoords([]);
      placeBallAtPixel(pixelFor(HOME));
      progressEl.innerHTML = 'Press Play to start the journey from Springfield, IL';
      lastYear = null;
      yearEl.classList.remove('is-shown', 'is-changing');
      updateVisitedMarkers();
      playOverlayEl.classList.add('is-shown');
    }

    playBtn.addEventListener('click', function () { playing ? pause() : play(); });
    playOverlayEl.addEventListener('click', play);
    resetBtn.addEventListener('click', function () {
      pause();
      resetToHome();
    });
    yearSelect.addEventListener('change', function () {
      if (!yearSelect.value) { return; }
      pause();
      var firstIdx = stops.findIndex(function (s) { return s.date.slice(0, 4) === yearSelect.value; });
      if (firstIdx !== -1) { jumpTo(firstIdx); }
    });

    // Swaps in a new game subset (e.g. the person filter) without
    // recreating the map itself -- rebuilds everything derived from
    // `stops` and drops playback back to the not-started HOME state,
    // since the old idx/trail no longer mean anything against a
    // different subset of games.
    function setStops(newStops) {
      pause();
      stops = newStops;
      rebuildTeamViews();
      rebuildYearOptions();
      resetToHome();
    }

    rebuildTeamViews();
    rebuildYearOptions();
    resetToHome();

    return { setStops: setStops };
  }

  // =========================================================
  // Init
  // =========================================================

  function init() {
    var allGames = typeof mlbGames !== 'undefined' ? mlbGames : [];
    if (!allGames.length) { return; }

    var currentPerson = 'anyone';
    var currentSort = 'recent';

    // "anyone" = at least one tracked family member attended -- since
    // every game in the log exists because someone did, this is just the
    // full list (same as /disney's and /national-parks' "Anyone" filter).
    // "whole-family" = every tracked person attended the same game --
    // the actual "All" concept, which the old single "All" filter never
    // distinguished from "anyone" (it just returned allGames, unfiltered).
    function filteredGames() {
      if (currentPerson === 'anyone') { return allGames; }
      if (currentPerson === 'whole-family') {
        return allGames.filter(function (g) {
          return Object.keys(g.attendedBy).every(function (p) { return g.attendedBy[p] === 1; });
        });
      }
      return allGames.filter(function (g) { return g.attendedBy[currentPerson] === 1; });
    }

    // Starts empty -- renderForFilter() below does the one real populate,
    // so the initial "anyone" filter doesn't get built twice.
    var journeyApi = initJourneyMap([]);

    function renderForFilter() {
      var games = filteredGames();

      var gameWord = pluralize(games.length, 'game');
      document.getElementById('mlbgIntroCount').textContent = currentPerson === 'anyone'
        ? games.length + ' ' + gameWord + ' and counting — every box score, every ballpark, every trip'
        : currentPerson === 'whole-family'
          ? games.length + ' ' + gameWord + ' with the whole family — every box score, every ballpark, every trip'
          : games.length + ' ' + gameWord + ' with ' + PERSON_LABELS[currentPerson] + ' — every box score, every ballpark, every trip';

      var stats = computeStats(games);
      buildStatsHTML(stats);
      initYearChart(stats);

      document.getElementById('mlbgGamesList').innerHTML = buildGameListHTML(games, currentSort);
      document.getElementById('mlbgHofList').innerHTML = buildHofListHTML(games);
      var leaderboards = buildLeaderboardHTML(25, games);
      document.getElementById('mlbgLeaderboardStarters').innerHTML = leaderboards.starters;
      document.getElementById('mlbgLeaderboardRelievers').innerHTML = leaderboards.relievers;
      document.getElementById('mlbgLeaderboardOthers').innerHTML = leaderboards.others;

      journeyApi.setStops(buildJourneyStops(games));
    }

    initSortToggle(filteredGames, function (sort) { currentSort = sort; });
    initGameExpand();
    initPersonFilter(function (person) { currentPerson = person; renderForFilter(); });
    initStickyFilterOffset();
    initStatDetailToggle('mlbgStatGrid');
    initStatDetailToggle('mlbgHofList');
    initStatDetailToggle('mlbgLeaderboardStarters');
    initStatDetailToggle('mlbgLeaderboardRelievers');
    initStatDetailToggle('mlbgLeaderboardOthers');
    initLeaderboardExpand('mlbgLeaderboardStarters');
    initLeaderboardExpand('mlbgLeaderboardRelievers');
    initLeaderboardExpand('mlbgLeaderboardOthers');

    renderForFilter();
  }

  document.addEventListener('DOMContentLoaded', init);
}());
