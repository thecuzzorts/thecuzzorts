/* Josh's individual deer harvest log — transcribed from his personal
   spreadsheet, mirrors /turkey-hunting's per-person harvest-log
   convention (turkey-harvests-[name].js). Full detail is kept here
   exactly as logged (license/tag numbers, processor names, friends'
   names in notes) even though hunting/js/deer.js's public UI only ever
   surfaces `gender === 'Buck'` records, and only their year/state/
   weapon (plus age when `labConfirmedAge` is true). Every other field,
   and every Doe/Doe Fawn/Button Buck record, stays in this file but is
   never rendered.

   `labConfirmedAge` is true only on the two bucks whose age comes from
   a lab-analyzed tooth, not just field judgment (11/5/2022, 1/14/2025)
   — that's the one extra field beyond a straight column-for-column
   transcription of the source spreadsheet.

   `photo`, like turkey's, is null unless a photo exists for that
   specific harvest (path into images/hunting/species/) — never
   rendered by deer.js's public catalog, just kept for the record. */

var deerHarvestsJosh = [
  {
    date: '2010-10-28', time: 'Evening', subspecies: 'Whitetail', state: 'US-IL', county: 'Cass',
    distance: '26 yds', weapon: 'Bow', gender: 'Button Buck', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: null,
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'First deer ever! Creek stand. Jack and Sam were hunting, too.',
    photo: null
  },
  {
    date: '2010-12-04', time: 'Early Morning', subspecies: 'Whitetail', state: 'US-IL', county: 'Pike',
    distance: '26 yds', weapon: 'Shotgun', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: null,
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'Lil\' woods bottom stand.',
    photo: null
  },
  {
    date: '2011-10-02', time: 'Morning', subspecies: 'Whitetail', state: 'US-IL', county: 'Cass',
    distance: '41 yds', weapon: 'Bow', gender: 'Buck', points: 8, age: 1.5,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: null,
    meat: null, mount: 'Skull Cap', labConfirmedAge: false,
    notes: 'First buck! Didn\'t find for 6 days, though.',
    photo: '../images/hunting/species/whitetail-deer-illinois-2011-10-josh.jpg'
  },
  {
    date: '2011-11-18', time: 'Afternoon', subspecies: 'Whitetail', state: 'US-IL', county: 'Pike',
    distance: '30 yds', weapon: 'Shotgun', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: null,
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'Shot doe walking into stand.',
    photo: null
  },
  {
    date: '2011-11-18', time: 'Evening', subspecies: 'Whitetail', state: 'US-IL', county: 'Pike',
    distance: '100+ yds', weapon: 'Shotgun', gender: 'Buck', points: 8, age: 4.5,
    grossScore: '144', netScore: null, registered: false, licenseNumber: null, tagNumber: null,
    meat: null, mount: 'Shoulder', labConfirmedAge: false,
    notes: 'First buck with gun. 75 yds. 20" spread. 6" bases.',
    photo: '../images/hunting/species/whitetail-deer-illinois-2011-11-josh.jpg'
  },
  {
    date: '2013-09-07', time: 'Evening', subspecies: 'Whitetail', state: 'US-KY', county: 'Graves',
    distance: '27 yds', weapon: 'Bow', gender: 'Buck', points: 8, age: 1.5,
    grossScore: '90', netScore: null, registered: false, licenseNumber: null, tagNumber: '1033905321',
    meat: null, mount: 'Euro', labConfirmedAge: false,
    notes: 'First velvet buck. Hunted with Jeremy Douin. HOT hunting! Killed on opening night.',
    photo: '../images/hunting/species/whitetail-deer-kentucky-2013-josh.jpg'
  },
  {
    date: '2013-11-02', time: 'Afternoon', subspecies: 'Whitetail', state: 'US-IL', county: 'Cass',
    distance: '30 yds', weapon: 'Bow', gender: 'Buck', points: 8, age: 3.5,
    grossScore: '136', netScore: null, registered: false, licenseNumber: null, tagNumber: null,
    meat: null, mount: 'Euro', labConfirmedAge: false,
    notes: 'Rattled him in from chasing a doe. Bottom blind. Didn\'t find for 3 days, though. Ran forever and had good blood!',
    photo: '../images/hunting/species/whitetail-deer-illinois-2013-josh.jpg'
  },
  {
    date: '2013-11-15', time: 'Evening', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '15 yds', weapon: 'Bow', gender: 'Doe Fawn', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: null,
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'First deer off the Menard farm. Bottom field blind.',
    photo: null
  },
  {
    date: '2014-11-15', time: 'Early Morning', subspecies: 'Whitetail', state: 'US-IL', county: 'Pike',
    distance: '32 yds', weapon: 'Bow', gender: 'Buck', points: 11, age: 1.5,
    grossScore: '116 4/8', netScore: null, registered: false, licenseNumber: null, tagNumber: null,
    meat: null, mount: 'Euro', labConfirmedAge: false,
    notes: 'Hunted with Andy. Same evening, Andy killed buck, Jack killed doe, and I sat with Sam.',
    photo: '../images/hunting/species/whitetail-deer-illinois-2014-josh.jpg'
  },
  {
    date: '2015-10-03', time: '5:30 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Morgan',
    distance: '12 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: null,
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'First deer at Morgan! White patches behind both ears. Was with a six point buck and a yearling doe.',
    photo: null
  },
  {
    date: '2016-09-04', time: '8:00 AM', subspecies: 'Whitetail', state: 'US-KY', county: 'Crittenden',
    distance: '18 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: '2000231090316-093342', tagNumber: '2093905190',
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'First time deer hunting the Kentucky farm. Saw 30+ deer. Does, fawns, and small bucks. Couldn\'t resist temptation!',
    photo: null
  },
  {
    date: '2016-10-07', time: '6:33 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '18 yds', weapon: 'Bow', gender: 'Buck', points: 12, age: 4.5,
    grossScore: '144', netScore: null, registered: false, licenseNumber: null, tagNumber: '347033243',
    meat: null, mount: 'Shoulder', labConfirmedAge: false,
    notes: 'First non-typical! Came into doe decoy with antlers zip-tied to it. Only ran <40yds after being shot at 18yds.',
    photo: '../images/hunting/species/whitetail-deer-illinois-2016-josh.jpg'
  },
  {
    date: '2017-10-28', time: '7:35 AM', subspecies: 'Whitetail', state: 'US-IL', county: 'Sangamon',
    distance: '12 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: '707378014',
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'First deer on Goldsberry farm! 3 does came in, this one came right to me. First hang and hunt, all by myself. Borrowed Mack\'s truck to take to processor.',
    photo: null
  },
  {
    date: '2018-11-14', time: '4:05 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '35 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: '165710716',
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'Doubled down on does with Michael Hosteny. Sat in Lazy Man at south end of big field. Michael sat in box blind on north end of west field.',
    photo: null
  },
  {
    date: '2019-10-12', time: '6:33 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '30 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: '219710266',
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'Andy and Paisley were hunting in the NW corner, I was in the Lazy Man by the road headed to bottom field. Paisley shot her deer the next night over my deer\'s gut pile.',
    photo: null
  },
  {
    date: '2019-12-07', time: '3:15 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Pike',
    distance: '17 yds', weapon: 'Shotgun', gender: 'Button Buck', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: 'UCW07LQ668',
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'From the Redneck. Jack was at Cherry Tree. Was just talking about how many years my shotgun slugs have lasted me.',
    photo: null
  },
  {
    date: '2020-10-29', time: '6:00 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '14 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: '734667587',
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'First deer off the new Menard farm near Salisbury. Andy and I hung the set the day before. 4 does were bedded behind me all afternoon. Died in the cut bean field. UPDATE: WORST poison ivy ever all over face and eye!',
    photo: null
  },
  {
    date: '2021-11-11', time: '5:08 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '26 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: '211315302217',
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'Skunk blood trail!',
    photo: null
  },
  {
    date: '2021-11-19', time: '7:00 AM', subspecies: 'Whitetail', state: 'US-IL', county: 'Pike',
    distance: '60 yds', weapon: 'Shotgun', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: '856272521',
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'First deer at deer camp for $50 win! Sam\'s point redneck. Came out with fawn.',
    photo: null
  },
  {
    date: '2022-10-07', time: '6:32 AM', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '19 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: '227668250915',
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'Drone recovery in the beans w/ Ashbaugh.',
    photo: null
  },
  {
    date: '2022-11-05', time: '4:57 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Morgan',
    distance: '37 yds', weapon: 'Bow', gender: 'Buck', points: 11, age: 5.5,
    grossScore: '120 1/2', netScore: null, registered: false, licenseNumber: null, tagNumber: '226822424895',
    meat: null, mount: 'Euro', labConfirmedAge: true,
    notes: 'Clover plot. Sat all day. First deer in. Shoulder shot. Went back 4 hours later and he only went <200 yards. Super unique rack! Andy and Pete along for the recovery.',
    photo: '../images/hunting/species/whitetail-deer-illinois-2022-josh.jpg'
  },
  {
    date: '2022-12-03', time: '4:05 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '18 yds', weapon: 'Shotgun', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: '229034723761',
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'Sat in NE foodplot with Jack at big Menard farm. Had a decent injured buck come by half an hour earlier. Butchered with Josh Ashbaugh at their shop.',
    photo: null
  },
  {
    date: '2023-10-08', time: '7:27 AM', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '20 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: '230635108835',
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'Poison Ivy stand strikes again at foggy bottom! Ellie, Tilly, and Ava Langfelder helped blood trail this year for 13 yards.',
    photo: null
  },
  {
    date: '2024-01-03', time: '4:43 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '31 yds', weapon: 'Crossbow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: null,
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'Hunted with Ashbaugh. He shot twice. I shot third time. Saw 36 deer in standing beans at Andy\'s farm. Hunted in redneck on anhydrous trailer.',
    photo: null
  },
  {
    date: '2024-01-14', time: '4:54 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Sangamon',
    distance: '29 yds', weapon: 'Crossbow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: null, tagNumber: null,
    meat: null, mount: null, labConfirmedAge: false,
    notes: 'Hunted with Andy at Big Oak. Loads of deer. Andy killed first with compound bow and doe died in field. My deer came in after getting spooked by dead deer. -5° actual temp and last day of season. No blood from my deer. Dead within 40 yds on hillside. Found small shed when looking for her.',
    photo: null
  },
  {
    date: '2024-10-14', time: '6:22 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '21 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: 'ONI-805-7124', tagNumber: '243159100866',
    meat: 'Turasky\'s', mount: null, labConfirmedAge: false,
    notes: 'Hunted Andy\'s farm while Piper and Andy were also hunting in a blind south of me. Thought Piper was going to get a shot at her target buck. Piper helped blood trail. Doe was heart shot and died in 70 yards in middle of cut corn. Saw bobcat at beginning of hunt.',
    photo: null
  },
  {
    date: '2024-12-29', time: '4:50 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '31 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: 'ONA-614-3524', tagNumber: '241834315855',
    meat: 'Matt Hegele', mount: null, labConfirmedAge: false,
    notes: 'Andy\'s farm with Ashbaugh. Sat in redneck on west side in mowed corn. This deer appeared between us and other redneck blind. Came in solo after 9 other deer had busted 5 minutes earlier.',
    photo: null
  },
  {
    date: '2025-01-10', time: '4:34 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Menard',
    distance: '25 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: 'ONO-113-2724', tagNumber: '249938379780',
    meat: 'Korte\'s', mount: null, labConfirmedAge: false,
    notes: 'Andy\'s farm solo in the snow. Sat in redneck on west side in mowed corn.',
    photo: null
  },
  {
    date: '2025-01-14', time: '3:52 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Sangamon',
    distance: '21 yds', weapon: 'Bow', gender: 'Buck', points: 2, age: 7.5,
    grossScore: null, netScore: null, registered: false, licenseNumber: 'ONI-845-6724', tagNumber: '247869019469',
    meat: 'Metzroth / Turasky\'s', mount: 'Euro', labConfirmedAge: true,
    notes: 'Zaubi New City farm. Walked far in with crunchy deep snow. Hunted Banks blind overlooking standing corn. Tons of deer as soon as we got in visible in the woods. Loads of turkeys (2 missed attempts on bearded hen). Buck spooked in corn at 50 yards, came in from right side with 2 does. Perfect broadside quartering away shot. Died in field just beyond standing corn. "No Tines" aka Flat Top or Beams. Points not broken off, just never grew. Zane had years of encounters and pics of buck.',
    photo: '../images/hunting/species/whitetail-deer-illinois-2025-josh.jpg'
  },
  {
    date: '2025-01-18', time: '5:25 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Macoupin',
    distance: '61 yds', weapon: '450 Bushmaster', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: 'ONX-335-3424', tagNumber: '241137050731',
    meat: 'Matt Hegele', mount: null, labConfirmedAge: false,
    notes: 'Macoupin farm doe weekend deer camp with Zane, Mark, Andrew, and Jack. Double just before legal. Shot first and fourth doe. Both big and mature. Used Zane\'s rifle. Killed a doe with bow night before that coyotes got.',
    photo: null
  },
  {
    date: '2025-01-18', time: '5:25 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Macoupin',
    distance: '65 yds', weapon: '450 Bushmaster', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: 'ONS-475-4724', tagNumber: '248111467681',
    meat: 'Pete / Turaskys', mount: null, labConfirmedAge: false,
    notes: 'Macoupin farm doe weekend deer camp with Zane, Mark, Andrew, and Jack. Double just before legal. Shot first and fourth doe. Both big and mature. Used Zane\'s rifle. Killed a doe with bow night before that coyotes got.',
    photo: null
  },
  {
    date: '2025-01-17', time: '5:30 PM', subspecies: 'Whitetail', state: 'US-IL', county: 'Macoupin',
    distance: '17 yds', weapon: 'Bow', gender: 'Doe', points: null, age: null,
    grossScore: null, netScore: null, registered: false, licenseNumber: 'ONI-376-2724', tagNumber: '247349389957',
    meat: 'Coyotes', mount: null, labConfirmedAge: false,
    notes: '10 acre plot. 3 took 1.5 hours to come in.',
    photo: null
  }
];
