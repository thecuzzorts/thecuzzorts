"""
Resolves every game in games_raw.GAMES against the live MLB Stats API and
builds games_data.json, a committed intermediate "database" of enriched
per-game records (box score totals, decisions, weather, linescore,
attendance figure, duration, and every player who appeared).

Idempotent/resumable: games already present in games_data.json (matched by
date+homeTeamGiven+notes) are skipped, and the file is rewritten to disk
after every newly-fetched game, so a crash or rate limit partway through
just means re-running this script picks up where it left off. Adding one
new game to games_raw.py costs exactly 3 network calls (schedule lookup +
boxscore + feed/live), not a full re-fetch.

Usage: python3 fetch_games.py
"""
import json
import os
import time
import urllib.request
from collections import defaultdict

from games_raw import GAMES

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CACHE_PATH = os.path.join(SCRIPT_DIR, 'games_data.json')
SLEEP = 0.3


def to_iso(d):
    m, day, y = d.split('/')
    return f"{int(y):04d}-{int(m):02d}-{int(day):02d}"


def fetch_json(url):
    with urllib.request.urlopen(url, timeout=15) as resp:
        return json.load(resp)


def fetch_schedule(iso_date):
    return fetch_json(f"https://statsapi.mlb.com/api/v1/schedule?sportId=1&date={iso_date}")


def fetch_boxscore(game_pk):
    return fetch_json(f"https://statsapi.mlb.com/api/v1/game/{game_pk}/boxscore")


def fetch_feed(game_pk):
    return fetch_json(f"https://statsapi.mlb.com/api/v1.1/game/{game_pk}/feed/live")


def resolve_gamepk(iso_date, team, notes, same_team_rows):
    """Port of resolve_games.py's matching/doubleheader-disambiguation logic."""
    data = fetch_schedule(iso_date)
    games_today = []
    for datesect in data.get("dates", []):
        games_today.extend(datesect.get("games", []))

    matches = [g for g in games_today if team.lower() in g["teams"]["home"]["team"]["name"].lower()]
    if len(matches) == 0:
        return None, "no home-team match found on this date"
    if len(matches) == 1:
        return matches[0], None

    notes_lower = notes.lower()
    if "first game" in notes_lower:
        wanted_num = 1
    elif "second game" in notes_lower:
        wanted_num = 2
    else:
        wanted_num = same_team_rows.index(notes) + 1

    numbered = [g for g in matches if g.get("gameNumber") == wanted_num]
    if len(numbered) == 1:
        return numbered[0], None
    return None, f"{len(matches)} home-team matches, could not disambiguate (wanted game {wanted_num})"


def parse_info(info_list):
    """MLB's liveData.boxscore.info is a flat label/value list — pull out
    attendance and duration, both of which arrive as 'value: "N,NNN."'."""
    out = {}
    for item in info_list:
        out[item.get('label')] = item.get('value')
    return out


def parse_crowd(info):
    raw = info.get('Att')
    if not raw:
        return None
    digits = raw.strip().rstrip('.').replace(',', '')
    return int(digits) if digits.isdigit() else None


def parse_duration(info):
    raw = info.get('T')
    return raw.strip().rstrip('.') if raw else None


def build_record(row, sched_game, box, feed):
    date_raw, team, notes, josh, sam, ellie, tilly, poppy = row
    iso = to_iso(date_raw)

    home = box['teams']['home']
    away = box['teams']['away']
    home_bat = home['teamStats']['batting']
    away_bat = away['teamStats']['batting']

    game_data = feed['gameData']
    live = feed['liveData']
    linescore = live['linescore']
    decisions = live.get('decisions', {})
    info = parse_info(live['boxscore'].get('info', []))

    def player_list(team_side, abbrev):
        # The boxscore's `players` dict includes everyone dressed for the
        # game -- bench and bullpen included, whether they actually got in
        # or not. A player who never recorded a batting or pitching stat
        # line was never actually seen playing, so exclude them (confirmed
        # via a real example: a pitcher who started game 1 of a
        # doubleheader was listed on both games' rosters but only
        # `stats.pitching`/`stats.batting` for the game he actually threw
        # in were non-empty).
        out = []
        for pid_str, p in team_side['players'].items():
            stats = p.get('stats', {})
            pitching = stats.get('pitching')
            if not stats.get('batting') and not pitching:
                continue
            out.append({
                "id": p['person']['id'], "name": p['person']['fullName'], "team": abbrev,
                "position": p.get('position', {}).get('abbreviation'),
                "gamesStarted": pitching.get('gamesStarted') if pitching else None,
            })
        return out

    players = player_list(home, home['team']['abbreviation']) + player_list(away, away['team']['abbreviation'])

    def find_cycles(team_side, abbrev):
        # Single + double + triple + home run, same player, same game --
        # rare enough (1 in our first 104 games) that it's worth storing
        # as a lean per-game list rather than persisting every player's
        # full batting line for every game.
        found = []
        for pid_str, p in team_side['players'].items():
            bat = p.get('stats', {}).get('batting', {})
            if not bat:
                continue
            hits = bat.get('hits', 0)
            doubles = bat.get('doubles', 0)
            triples = bat.get('triples', 0)
            hr = bat.get('homeRuns', 0)
            singles = hits - doubles - triples - hr
            if hits >= 4 and doubles >= 1 and triples >= 1 and hr >= 1 and singles >= 1:
                found.append({
                    "id": p['person']['id'], "name": p['person']['fullName'], "team": abbrev,
                    "hits": hits, "doubles": doubles, "triples": triples, "homeRuns": hr
                })
        return found

    cycles = find_cycles(home, home['team']['abbreviation']) + find_cycles(away, away['team']['abbreviation'])

    def decision_person(key):
        d = decisions.get(key)
        return {"id": d['id'], "name": d['fullName']} if d else None

    innings_played = linescore.get('currentInning', len(linescore.get('innings', [])))

    return {
        "gamePk": sched_game['gamePk'],
        "date": iso,
        "homeTeam": sched_game['teams']['home']['team']['name'],
        "awayTeam": sched_game['teams']['away']['team']['name'],
        "homeScore": sched_game['teams']['home'].get('score'),
        "awayScore": sched_game['teams']['away'].get('score'),
        "venue": sched_game['venue']['name'],
        "gameType": game_data['game'].get('type'),
        "notes": notes,
        "attendedBy": {"josh": josh, "sam": sam, "ellie": ellie, "tilly": tilly, "poppy": poppy},
        "status": sched_game['status']['detailedState'],
        "statusReason": game_data['status'].get('reason'),
        "homeHits": home_bat.get('hits'),
        "awayHits": away_bat.get('hits'),
        "homeHR": home_bat.get('homeRuns'),
        "awayHR": away_bat.get('homeRuns'),
        "homeDoubles": home_bat.get('doubles'),
        "awayDoubles": away_bat.get('doubles'),
        "homeTriples": home_bat.get('triples'),
        "awayTriples": away_bat.get('triples'),
        "homeStrikeouts": home_bat.get('strikeOuts'),
        "awayStrikeouts": away_bat.get('strikeOuts'),
        "homeWalks": home_bat.get('baseOnBalls'),
        "awayWalks": away_bat.get('baseOnBalls'),
        "winPitcher": decision_person('winner'),
        "lossPitcher": decision_person('loser'),
        "savePitcher": decision_person('save'),
        "weather": game_data.get('weather'),
        "crowdSize": parse_crowd(info),
        "duration": parse_duration(info),
        "dayNight": game_data.get('datetime', {}).get('dayNight'),
        "doubleheader": False,  # computed below, after all games are in
        "extraInnings": innings_played > 9,
        "inningsPlayed": innings_played,
        "innings": [
            {"away": inn.get('away', {}).get('runs'), "home": inn.get('home', {}).get('runs')}
            for inn in linescore.get('innings', [])
        ],
        "players": players,
        "cycles": cycles,
        "_sourceKey": [iso, team, notes],
    }


def main():
    if os.path.exists(CACHE_PATH):
        with open(CACHE_PATH) as f:
            cache = json.load(f)
    else:
        cache = []

    # Prune any cached record whose source row no longer exists in
    # games_raw.py -- e.g. a corrected date/team typo -- so a stale entry
    # doesn't silently linger under its old key forever. (This is exactly
    # what let two mistakenly-duplicate-dated 8/7/2022 rows both resolve to
    # the same real game without ever raising a "multiple matches" error.)
    current_keys = {(to_iso(row[0]), row[1], row[2]) for row in GAMES}
    before = len(cache)
    cache = [r for r in cache if tuple(r['_sourceKey']) in current_keys]
    pruned = before - len(cache)
    if pruned:
        print(f"Pruned {pruned} stale cache record(s) no longer in games_raw.py")

    done_keys = {tuple(r['_sourceKey']) for r in cache}

    # group rows by (date, team) so doubleheader disambiguation via positional
    # fallback matches resolve_games.py's original behavior
    rows_by_date_team = defaultdict(list)
    for row in GAMES:
        date_raw, team = row[0], row[1]
        rows_by_date_team[(to_iso(date_raw), team)].append(row[2])

    fetched = 0
    for row in GAMES:
        date_raw, team, notes = row[0], row[1], row[2]
        iso = to_iso(date_raw)
        key = (iso, team, notes)
        if key in done_keys:
            continue

        same_team_rows = rows_by_date_team[(iso, team)]
        sched_game, err = resolve_gamepk(iso, team, notes, same_team_rows)
        if err:
            print(f"UNRESOLVED: {row} -> {err}")
            continue
        time.sleep(SLEEP)

        box = fetch_boxscore(sched_game['gamePk'])
        time.sleep(SLEEP)
        feed = fetch_feed(sched_game['gamePk'])
        time.sleep(SLEEP)

        record = build_record(row, sched_game, box, feed)
        cache.append(record)
        done_keys.add(key)
        fetched += 1

        with open(CACHE_PATH, 'w') as f:
            json.dump(cache, f, indent=2)

        print(f"[{fetched}] fetched {iso} {sched_game['teams']['home']['team']['name']} (gamePk {sched_game['gamePk']})")

    # doubleheader flag: any (date, venue) with >1 record -- recomputed
    # fully every run (explicitly set False too, not just True) so a stale
    # flag can't survive a date correction. A prior version of this only
    # ever set True and never cleared it, which is exactly how 2022-08-07
    # stayed flagged as a doubleheader after its duplicate row got
    # corrected to 2022-08-27 -- the other row's flag was never reset.
    # Grouped by (date, venue), not just date -- two unrelated single
    # games attended at different parks on the same calendar day (first
    # happened 8/29/2026: both games of a Yankees DH plus a separate Mets
    # game at Citi Field) are not a doubleheader just because they share a
    # date.
    by_date_venue = defaultdict(list)
    for r in cache:
        by_date_venue[(r['date'], r['venue'])].append(r)
    for recs in by_date_venue.values():
        is_dh = len(recs) > 1
        for r in recs:
            r['doubleheader'] = is_dh

    with open(CACHE_PATH, 'w') as f:
        json.dump(cache, f, indent=2)

    print(f"\nDone. {len(cache)}/{len(GAMES)} games in games_data.json ({fetched} newly fetched this run).")


if __name__ == '__main__':
    main()
