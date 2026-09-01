"""
One-time migration: adds `gameDate` (the exact UTC start timestamp,
e.g. "2026-08-29T17:05:00Z") to every record in games_data.json that's
missing it, by re-fetching the (cheap) schedule endpoint for that
record's date and matching by gamePk -- no boxscore or feed/live needed.

Without this, same-day games (a doubleheader, or an unrelated second
game squeezed in at a different park) sort by date alone, which
doesn't distinguish which one actually happened first -- confirmed
wrong for 2026-08-29 (3 games: Yankees game 1, a Mets game in between,
Yankees game 2), where "Most Recent" showed them in the wrong order.

Safe to re-run: skips any record that already has gameDate, so it's a
no-op once caught up. New games added via fetch_games.py after this
point already come with it from build_record(), so this script
becomes unnecessary going forward.

Usage: python3 backfill_game_date.py
"""
import json
import time
import urllib.request

CACHE_PATH = 'games_data.json'
SLEEP = 0.3


def fetch_schedule(iso_date):
    url = f'https://statsapi.mlb.com/api/v1/schedule?sportId=1&date={iso_date}'
    with urllib.request.urlopen(url, timeout=15) as resp:
        return json.load(resp)


def main():
    with open(CACHE_PATH) as f:
        cache = json.load(f)

    # Group by date so a date with multiple attended games only costs
    # one schedule fetch, not one per game.
    by_date = {}
    for record in cache:
        if 'gameDate' not in record:
            by_date.setdefault(record['date'], []).append(record)

    updated = 0
    for iso_date, records in by_date.items():
        data = fetch_schedule(iso_date)
        time.sleep(SLEEP)
        games_today = {}
        for datesect in data.get('dates', []):
            for g in datesect.get('games', []):
                games_today[g['gamePk']] = g

        for record in records:
            g = games_today.get(record['gamePk'])
            if not g:
                print(f"WARNING: gamePk {record['gamePk']} not found on {iso_date}")
                continue
            record['gameDate'] = g.get('gameDate')
            updated += 1
            print(f"[{updated}] backfilled {record['date']} {record['homeTeam']} (gamePk {record['gamePk']}) -> {record['gameDate']}")

        with open(CACHE_PATH, 'w') as f:
            json.dump(cache, f, indent=2)

    print(f"\nDone. {updated} record(s) backfilled, {len(cache) - updated} already had gameDate.")


if __name__ == '__main__':
    main()
