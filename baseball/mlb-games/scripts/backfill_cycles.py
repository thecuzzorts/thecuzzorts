"""
One-time migration: adds a `cycles` list (usually empty) to every record
in games_data.json that's missing it, by re-fetching the boxscore for
each already-known gamePk and checking every player's individual batting
line for a single+double+triple+home run in that game. Safe to re-run:
skips any record that already has the field. New games added via
fetch_games.py after this point already come with it from build_record().

Usage: python3 backfill_cycles.py
"""
import json
import time
import urllib.request

CACHE_PATH = 'games_data.json'
SLEEP = 0.3


def fetch_boxscore(game_pk):
    url = f'https://statsapi.mlb.com/api/v1/game/{game_pk}/boxscore'
    with urllib.request.urlopen(url, timeout=15) as resp:
        return json.load(resp)


def find_cycles(team_side, abbrev):
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


def main():
    with open(CACHE_PATH) as f:
        cache = json.load(f)

    updated = 0
    for record in cache:
        if 'cycles' in record:
            continue

        box = fetch_boxscore(record['gamePk'])
        time.sleep(SLEEP)
        home = box['teams']['home']
        away = box['teams']['away']
        record['cycles'] = (
            find_cycles(home, home['team']['abbreviation']) +
            find_cycles(away, away['team']['abbreviation'])
        )

        updated += 1
        with open(CACHE_PATH, 'w') as f:
            json.dump(cache, f, indent=2)
        tag = f" -- {record['cycles']}" if record['cycles'] else ""
        print(f"[{updated}] backfilled {record['date']} {record['homeTeam']} (gamePk {record['gamePk']}){tag}")

    print(f"\nDone. {updated} record(s) backfilled, {len(cache) - updated} already had the field.")


if __name__ == '__main__':
    main()
