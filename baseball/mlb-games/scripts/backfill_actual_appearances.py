"""
One-time migration: replaces every record's `players` list in
games_data.json (re-fetching the boxscore for each already-known gamePk)
with the corrected filter -- only players who actually recorded a
batting or pitching stat line, not everyone merely dressed for the game.
Fixes an inflated "games seen" count for bench/bullpen players who were
on the roster but never got in (confirmed real example: a pitcher listed
on both games of a doubleheader's roster but with empty batting AND
pitching stats in both -- i.e. he never actually played in either).

Always re-derives `players` (not skip-if-present, since older cache
entries were built with the old unfiltered logic and need replacing, not
just filling in a missing field). Safe to re-run.

Usage: python3 backfill_actual_appearances.py
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


def player_list(team_side, abbrev):
    out = []
    for pid_str, p in team_side['players'].items():
        stats = p.get('stats', {})
        if not stats.get('batting') and not stats.get('pitching'):
            continue
        out.append({
            "id": p['person']['id'], "name": p['person']['fullName'], "team": abbrev,
            "position": p.get('position', {}).get('abbreviation'),
        })
    return out


def main():
    with open(CACHE_PATH) as f:
        cache = json.load(f)

    updated = 0
    total_removed = 0
    for record in cache:
        before = len(record['players'])

        box = fetch_boxscore(record['gamePk'])
        time.sleep(SLEEP)
        home = box['teams']['home']
        away = box['teams']['away']
        record['players'] = (
            player_list(home, home['team']['abbreviation']) +
            player_list(away, away['team']['abbreviation'])
        )

        removed = before - len(record['players'])
        total_removed += removed
        updated += 1
        with open(CACHE_PATH, 'w') as f:
            json.dump(cache, f, indent=2)
        print(f"[{updated}] {record['date']} {record['homeTeam']} (gamePk {record['gamePk']}) -- removed {removed} non-participant(s)")

    print(f"\nDone. {updated} game(s) processed, {total_removed} total non-participant listings removed.")


if __name__ == '__main__':
    main()
