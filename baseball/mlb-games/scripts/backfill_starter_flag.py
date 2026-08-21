"""
One-time migration: adds a `gamesStarted` flag (0 or 1, pitchers only --
None for position players) to every entry in each record's `players` list
in games_data.json, by re-fetching the boxscore for each already-known
gamePk. Powers a Starters-vs-Relievers split within the Pitchers column
on the "Players We've Seen the Most" leaderboard. Reuses the same
actually-played filter as backfill_actual_appearances.py (not just
dressed for the game). Safe to re-run: skips any record whose players
already carry the field. New games added via fetch_games.py after this
point already come with it from build_record().

Usage: python3 backfill_starter_flag.py
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
        pitching = stats.get('pitching')
        if not stats.get('batting') and not pitching:
            continue
        out.append({
            "id": p['person']['id'], "name": p['person']['fullName'], "team": abbrev,
            "position": p.get('position', {}).get('abbreviation'),
            "gamesStarted": pitching.get('gamesStarted') if pitching else None,
        })
    return out


def main():
    with open(CACHE_PATH) as f:
        cache = json.load(f)

    updated = 0
    for record in cache:
        if record['players'] and 'gamesStarted' in record['players'][0]:
            continue

        box = fetch_boxscore(record['gamePk'])
        time.sleep(SLEEP)
        home = box['teams']['home']
        away = box['teams']['away']
        record['players'] = (
            player_list(home, home['team']['abbreviation']) +
            player_list(away, away['team']['abbreviation'])
        )

        updated += 1
        with open(CACHE_PATH, 'w') as f:
            json.dump(cache, f, indent=2)
        print(f"[{updated}] backfilled {record['date']} {record['homeTeam']} (gamePk {record['gamePk']})")

    print(f"\nDone. {updated} record(s) backfilled, {len(cache) - updated} already had the field.")


if __name__ == '__main__':
    main()
