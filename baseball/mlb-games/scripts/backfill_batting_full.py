"""
One-time migration: adds the full batting/pitching/fielding field set
(atBats, plateAppearances, stolenBases, caughtStealing, hitByPitch,
sacBunts, sacFlies, leftOnBase, groundIntoDoublePlay, rbi, totalBases,
pitching strikeouts/walks, earnedRuns, numberOfPitches, wildPitches,
balks, hitBatsmen, errors, assists, putOuts) to every record in
games_data.json that's missing them, by re-fetching just the (cheap)
boxscore endpoint for each already-known gamePk -- no need to re-hit
feed/live, since all of these fields live in the same teamStats
object hits/HR already came from. Safe to re-run: skips any record
that already has the fields, so it's a no-op once caught up. New games
added via fetch_games.py after this point already come with these
fields from build_record(), so this script becomes unnecessary going
forward.

Usage: python3 backfill_batting_full.py
"""
import json
import time
import urllib.request

CACHE_PATH = 'games_data.json'
SLEEP = 0.3
FIELDS = ['homeAtBats', 'awayAtBats', 'homePlateAppearances', 'awayPlateAppearances',
          'homeStolenBases', 'awayStolenBases', 'homeCaughtStealing', 'awayCaughtStealing',
          'homeHitByPitch', 'awayHitByPitch', 'homeSacBunts', 'awaySacBunts',
          'homeSacFlies', 'awaySacFlies', 'homeLeftOnBase', 'awayLeftOnBase',
          'homeGroundIntoDoublePlay', 'awayGroundIntoDoublePlay', 'homeRbi', 'awayRbi',
          'homeTotalBases', 'awayTotalBases', 'homePitchStrikeouts', 'awayPitchStrikeouts',
          'homePitchWalks', 'awayPitchWalks', 'homeEarnedRuns', 'awayEarnedRuns',
          'homeNumberOfPitches', 'awayNumberOfPitches', 'homeWildPitches', 'awayWildPitches',
          'homeBalks', 'awayBalks', 'homeHitBatsmen', 'awayHitBatsmen',
          'homeErrors', 'awayErrors', 'homeAssists', 'awayAssists', 'homePutOuts', 'awayPutOuts']


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
        home_pitch = box['teams']['home']['teamStats']['pitching']
        away_pitch = box['teams']['away']['teamStats']['pitching']
        home_field = box['teams']['home']['teamStats'].get('fielding', {})
        away_field = box['teams']['away']['teamStats'].get('fielding', {})

        record['homeAtBats'] = home_bat.get('atBats')
        record['awayAtBats'] = away_bat.get('atBats')
        record['homePlateAppearances'] = home_bat.get('plateAppearances')
        record['awayPlateAppearances'] = away_bat.get('plateAppearances')
        record['homeStolenBases'] = home_bat.get('stolenBases')
        record['awayStolenBases'] = away_bat.get('stolenBases')
        record['homeCaughtStealing'] = home_bat.get('caughtStealing')
        record['awayCaughtStealing'] = away_bat.get('caughtStealing')
        record['homeHitByPitch'] = home_bat.get('hitByPitch')
        record['awayHitByPitch'] = away_bat.get('hitByPitch')
        record['homeSacBunts'] = home_bat.get('sacBunts')
        record['awaySacBunts'] = away_bat.get('sacBunts')
        record['homeSacFlies'] = home_bat.get('sacFlies')
        record['awaySacFlies'] = away_bat.get('sacFlies')
        record['homeLeftOnBase'] = home_bat.get('leftOnBase')
        record['awayLeftOnBase'] = away_bat.get('leftOnBase')
        record['homeGroundIntoDoublePlay'] = home_bat.get('groundIntoDoublePlay')
        record['awayGroundIntoDoublePlay'] = away_bat.get('groundIntoDoublePlay')
        record['homeRbi'] = home_bat.get('rbi')
        record['awayRbi'] = away_bat.get('rbi')
        record['homeTotalBases'] = home_bat.get('totalBases')
        record['awayTotalBases'] = away_bat.get('totalBases')
        record['homePitchStrikeouts'] = home_pitch.get('strikeOuts')
        record['awayPitchStrikeouts'] = away_pitch.get('strikeOuts')
        record['homePitchWalks'] = home_pitch.get('baseOnBalls')
        record['awayPitchWalks'] = away_pitch.get('baseOnBalls')
        record['homeEarnedRuns'] = home_pitch.get('earnedRuns')
        record['awayEarnedRuns'] = away_pitch.get('earnedRuns')
        record['homeNumberOfPitches'] = home_pitch.get('numberOfPitches')
        record['awayNumberOfPitches'] = away_pitch.get('numberOfPitches')
        record['homeWildPitches'] = home_pitch.get('wildPitches')
        record['awayWildPitches'] = away_pitch.get('wildPitches')
        record['homeBalks'] = home_pitch.get('balks')
        record['awayBalks'] = away_pitch.get('balks')
        record['homeHitBatsmen'] = home_pitch.get('hitBatsmen')
        record['awayHitBatsmen'] = away_pitch.get('hitBatsmen')
        record['homeErrors'] = home_field.get('errors')
        record['awayErrors'] = away_field.get('errors')
        record['homeAssists'] = home_field.get('assists')
        record['awayAssists'] = away_field.get('assists')
        record['homePutOuts'] = home_field.get('putOuts')
        record['awayPutOuts'] = away_field.get('putOuts')

        updated += 1
        with open(CACHE_PATH, 'w') as f:
            json.dump(cache, f, indent=2)
        print(f"[{updated}] backfilled {record['date']} {record['homeTeam']} (gamePk {record['gamePk']})")

    print(f"\nDone. {updated} record(s) backfilled, {len(cache) - updated} already had the fields.")


if __name__ == '__main__':
    main()
