"""
One-time migration: adds homeDoubles/awayDoubles/homeTriples/awayTriples/
homeStrikeouts/awayStrikeouts/homeWalks/awayWalks to every record in
games_data.json that's missing them, by re-fetching just the (cheap)
boxscore endpoint for each already-known gamePk -- no need to re-hit
feed/live, since these fields all live in the same teamStats.batting
object hits/HR already came from. Safe to re-run: skips any record that
already has the fields, so it's a no-op once caught up. New games added
via fetch_games.py after this point already come with these fields from
build_record(), so this script becomes unnecessary going forward.

Usage: python3 backfill_batting_detail.py
"""
import json
import time
import urllib.request

CACHE_PATH = 'games_data.json'
SLEEP = 0.3
FIELDS = ['homeDoubles', 'awayDoubles', 'homeTriples', 'awayTriples',
          'homeStrikeouts', 'awayStrikeouts', 'homeWalks', 'awayWalks']


def fetch_boxscore(game_pk):
    url = f'https://statsapi.mlb.com/api/v1/game/{game_pk}/boxscore'
    with urllib.request.urlopen(url, timeout=15) as resp:
        return json.load(resp)


def main():
    with open(CACHE_PATH) as f:
        cache = json.load(f)

    updated = 0
    for record in cache:
        if all(field in record for field in FIELDS):
            continue

        box = fetch_boxscore(record['gamePk'])
        time.sleep(SLEEP)
        home_bat = box['teams']['home']['teamStats']['batting']
        away_bat = box['teams']['away']['teamStats']['batting']

        record['homeDoubles'] = home_bat.get('doubles')
        record['awayDoubles'] = away_bat.get('doubles')
        record['homeTriples'] = home_bat.get('triples')
        record['awayTriples'] = away_bat.get('triples')
        record['homeStrikeouts'] = home_bat.get('strikeOuts')
        record['awayStrikeouts'] = away_bat.get('strikeOuts')
        record['homeWalks'] = home_bat.get('baseOnBalls')
        record['awayWalks'] = away_bat.get('baseOnBalls')

        updated += 1
        with open(CACHE_PATH, 'w') as f:
            json.dump(cache, f, indent=2)
        print(f"[{updated}] backfilled {record['date']} {record['homeTeam']} (gamePk {record['gamePk']})")

    print(f"\nDone. {updated} record(s) backfilled, {len(cache) - updated} already had the fields.")


if __name__ == '__main__':
    main()
