/* Josh's individual turkey harvest log — transcribed from his personal
   spreadsheet. Measurements are decimal inches (spurs/beard) and decimal
   pounds (weight). NWTF score is computed on demand via nwtfScore() in
   turkey-derive.js, not stored here. */

var turkeyHarvestsJosh = [
  {
    date: '2010-11-06', time: '3:00 PM', subspecies: 'Eastern', gender: 'Hen',
    country: 'USA', state: 'US-IL', county: 'Cass',
    weight: 14.0, leftSpur: 0, rightSpur: 0, beard: 0,
    call: 'Voice', distance: '26 yds', weapon: 'Bow', weaponName: 'Q2 XL',
    registered: true, registrationDate: null,
    licenseNumber: '379317548', tagNumber: '',
    notes: 'First Eastern. On Site M while deer hunting from tree stand. 26 hens came in.',
    photo: null
  },
  {
    date: '2011-04-16', time: '10:00 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Morgan',
    weight: 22.0, leftSpur: 1.1875, rightSpur: 1.1875, beard: 9.75,
    call: 'Voice', distance: '26 yds', weapon: 'Shotgun', weaponName: '870',
    registered: true, registrationDate: null,
    licenseNumber: '379317548', tagNumber: '',
    notes: "First Gobbler. On Andy's farm.",
    photo: null
  },
  {
    date: '2012-04-30', time: '8:18 AM', subspecies: 'Eastern', gender: 'Jake',
    country: 'USA', state: 'US-IL', county: 'Cass',
    weight: 16.125, leftSpur: 0.6875, rightSpur: 0.6875, beard: 4.625,
    call: 'Slate', distance: '30 yds', weapon: 'Shotgun', weaponName: '870',
    registered: false, registrationDate: null,
    licenseNumber: '379317548', tagNumber: '873559058',
    notes: 'Very wet, lots of lightning. Shot at turkey point after stalk and crawl.',
    photo: null
  },
  {
    date: '2012-05-05', time: '5:40 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Menard',
    weight: 22.0, leftSpur: 1.125, rightSpur: 1.0625, beard: 10.3125,
    call: 'Slate', distance: '15 yds', weapon: 'Shotgun', weaponName: '870',
    registered: true, registrationDate: '2026-05-07',
    licenseNumber: '379317548', tagNumber: '873642292',
    notes: 'Cino de Mayo turkeys with Samantha! We doubled!',
    photo: null
  },
  {
    date: '2013-05-01', time: '5:45 AM', subspecies: 'Eastern', gender: 'Jake',
    country: 'USA', state: 'US-IL', county: 'Cass',
    weight: 17.1875, leftSpur: 0.25, rightSpur: 0.3125, beard: 4.375,
    call: 'Slate', distance: '20 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: false, registrationDate: null,
    licenseNumber: '379317548', tagNumber: '873543268',
    notes: 'Flew down to decoys.',
    photo: null
  },
  {
    date: '2013-11-29', time: '10:30 AM', subspecies: "Merriam's", gender: 'Hen',
    country: 'USA', state: 'US-SD', county: 'Tripp',
    weight: 12.375, leftSpur: 0, rightSpur: 0, beard: 0,
    call: 'None', distance: '12 yds', weapon: 'Shotgun', weaponName: 'Maxus',
    registered: true, registrationDate: '2026-05-07',
    licenseNumber: 'C-1582271', tagNumber: '',
    notes: "Thanksgiving trip to SD with Jack. Hunted with Shannon. Killed on Eric's, in alfalfa field.",
    photo: null
  },
  {
    date: '2013-11-29', time: '10:30 AM', subspecies: "Merriam's", gender: 'Jennie',
    country: 'USA', state: 'US-SD', county: 'Tripp',
    weight: 8.3125, leftSpur: 0, rightSpur: 0, beard: 0,
    call: 'None', distance: '12 yds', weapon: 'Shotgun', weaponName: 'Maxus',
    registered: true, registrationDate: '2026-05-07',
    licenseNumber: 'C-1582271', tagNumber: '',
    notes: "Thanksgiving trip to SD with Jack. Hunted with Shannon. Killed on Eric's, in alfalfa field.",
    photo: null
  },
  {
    date: '2014-04-03', time: '7:45 PM', subspecies: 'Rio Grande', gender: 'Tom',
    country: 'USA', state: 'US-NE', county: 'Lincoln',
    weight: 22.0, leftSpur: 1.0, rightSpur: 1.0, beard: 8.5,
    call: 'Voice', distance: '9 yds', weapon: 'Bow', weaponName: "Razor's Edge",
    registered: true, registrationDate: null,
    licenseNumber: '', tagNumber: '4636084',
    notes: "Bowhunting trip with Andrew and Jack. Hunted Steve Markley's 1100 acre farm, found on Craigslist. Killed within hour of getting to farm.",
    photo: null
  },
  {
    date: '2014-05-03', time: '7:00 AM', subspecies: 'Eastern', gender: 'Jake',
    country: 'USA', state: 'US-IL', county: 'Cass',
    weight: 16.0, leftSpur: 0.5, rightSpur: 0.5, beard: 4.0,
    call: 'Slate', distance: '20 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: false, registrationDate: null,
    licenseNumber: '379317548', tagNumber: '874911027',
    notes: 'Came into jake decoy with another jake and 4 hens. Flew down from the back 7 acres.',
    photo: null
  },
  {
    date: '2014-05-14', time: '8:10 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Menard',
    weight: 22.0, leftSpur: 1.1875, rightSpur: 1.1875, beard: 10.3125,
    call: 'Slate', distance: '30 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: true, registrationDate: null,
    licenseNumber: '379317548', tagNumber: '875052672',
    notes: 'With a jake and a hen. Hung around for an hour before coming close. Debbie had no shot and told me to shoot.',
    photo: null
  },
  {
    date: '2014-10-12', time: '7:00 AM', subspecies: 'Eastern', gender: 'Hen',
    country: 'USA', state: 'US-IL', county: 'Menard',
    weight: 14.25, leftSpur: 0, rightSpur: 0, beard: 8.375,
    call: 'Voice', distance: '11 yds', weapon: 'Bow', weaponName: "Razor's Edge",
    registered: true, registrationDate: '2023-04-13',
    licenseNumber: '379317548', tagNumber: '721790616',
    notes: 'First Bearded Hen! Shot shortly after flydown. Roosted right above blind.',
    photo: null
  },
  {
    date: '2014-11-27', time: '9:00 AM', subspecies: "Merriam's", gender: 'Jake',
    country: 'USA', state: 'US-SD', county: 'Tripp',
    weight: 17.5625, leftSpur: 0.125, rightSpur: 0.125, beard: 1.875,
    call: 'None', distance: '17 yds', weapon: 'Shotgun', weaponName: 'Maxus',
    registered: true, registrationDate: null,
    licenseNumber: '14-2577590-01', tagNumber: '',
    notes: "Thanksgiving morning bird with Jack! Hunted on Marlene Myers' farm. Silver phase gobbler got away.",
    photo: null
  },
  {
    date: '2014-12-10', time: '4:00 PM', subspecies: 'Osceola', gender: 'Jake',
    country: 'USA', state: 'US-FL', county: 'Osceola',
    weight: 14.125, leftSpur: 0.125, rightSpur: 0.125, beard: 0.125,
    call: 'Diaphragm', distance: '162 yds', weapon: 'Rifle', weaponName: 'Budz .223',
    registered: true, registrationDate: null,
    licenseNumber: 'NW--W2T71105505', tagNumber: '',
    notes: 'GRAND SLAM! With Jack and Jeff Budz. Shot with .223 rifle, 162 yards.',
    photo: null
  },
  {
    date: '2015-04-17', time: '9:24 AM', subspecies: 'Eastern', gender: 'Jake',
    country: 'USA', state: 'US-IL', county: 'Menard',
    weight: 17.0, leftSpur: 0.25, rightSpur: 0.25, beard: 4.125,
    call: 'Slate', distance: '15 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: false, registrationDate: null,
    licenseNumber: '', tagNumber: '875462640',
    notes: 'Birthday bird! First bird after Ellie born.',
    photo: null
  },
  {
    date: '2015-05-12', time: '6:18 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Cass',
    weight: 19.5, leftSpur: 1.0, rightSpur: 1.0, beard: 9.25,
    call: 'Yelper', distance: '48 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: true, registrationDate: '2026-05-07',
    licenseNumber: '379317548', tagNumber: '875595456',
    notes: 'First double-bearded bird! 9" and 1/4"!',
    photo: null
  },
  {
    date: '2016-05-02', time: '2:30 PM', subspecies: 'Rio Grande', gender: 'Tom',
    country: 'USA', state: 'US-NE', county: 'Lincoln',
    weight: 17.5, leftSpur: 1.0, rightSpur: 0.875, beard: 9.0,
    call: 'None', distance: '27 yds', weapon: 'Shotgun', weaponName: 'Maxus',
    registered: true, registrationDate: '2026-05-07',
    licenseNumber: '', tagNumber: '6597066',
    notes: 'With Steve Markley, behind the house, scouting on the 4-wheeler. 2 hrs prior, Jack tripled with birds I pushed down to him.',
    photo: null
  },
  {
    date: '2016-05-02', time: '8:45 PM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-NE', county: 'Lincoln',
    weight: 19.5, leftSpur: 0.875, rightSpur: 0.875, beard: 8.9375,
    call: 'None', distance: '25 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: false, registrationDate: null,
    licenseNumber: '', tagNumber: '6597590',
    notes: "At Steve Markley's. 2nd bird this day! Sat under the roosted and waited for them to all come in. Saw 11 confirmed gobblers and lots of birds. This bird came in with his brother and attacked the jake decoy! Sat with Jack and he took photos.",
    photo: null
  },
  {
    date: '2016-11-24', time: '6:55 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Sangamon',
    weight: 18.5, leftSpur: 0.875, rightSpur: 0.875, beard: 8.25,
    call: 'Voice', distance: '17 yds', weapon: 'Bow', weaponName: "Razor's Edge",
    registered: true, registrationDate: '2026-05-07',
    licenseNumber: '379317548', tagNumber: '691246714',
    notes: "Thanksgiving morning bird on Bill Goldsberry's farm. Intended on deer hunting, but heard this bird gobble on way to tree stand. Setup just off of trail towards bird. Bird flew down right over me. Eventually walked in front of me and my broadhead went right through his neck.",
    photo: null
  },
  {
    date: '2018-05-05', time: '1:00 PM', subspecies: 'Rio Grande', gender: 'Jake',
    country: 'USA', state: 'US-NE', county: 'Lincoln',
    weight: 16.3125, leftSpur: 0.25, rightSpur: 0.25, beard: 4.5,
    call: 'Voice', distance: '9 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: true, registrationDate: '2026-05-07',
    licenseNumber: '', tagNumber: '8499121',
    notes: "Standing on the north fence line of Steve Markley's new land purchase, facing west, after chasing uphill and into the woods. Birds were about to head north to the neighboring property when I killed this bird.",
    photo: null
  },
  {
    date: '2020-04-28', time: '6:57 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Macoupin',
    weight: 19.3125, leftSpur: 1.25, rightSpur: 1.1875, beard: 10.1875,
    call: 'Voice', distance: '18 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: false, registrationDate: null,
    licenseNumber: '379317548', tagNumber: '878747187',
    notes: "Andy's new Macoupin farm. 3rd day hunting on this tag. Decided to get closer to them in the woods. Went after them once they went to the bottom clover field. They came right in after I crossed the creek.",
    photo: null
  },
  {
    date: '2021-04-18', time: '9:45 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-KS', county: 'Osage',
    weight: 22.625, leftSpur: 0.9375, rightSpur: 0.9375, beard: 11.0,
    call: 'Slate', distance: '29 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: true, registrationDate: '2023-04-03',
    licenseNumber: '8862100001945', tagNumber: '2021---D18C1103030',
    notes: 'Hunted Friday afternoon in the rain, very quiet Saturday birthday, then Sunday. Heard a lot gobbling behind me and a couple to the south (my right). In a blind on Tony Bell\'s lease. 3 hens came in earlier in the morning. Gobbler came in silent and stood behind decoy for some time before I could shoot.',
    photo: null
  },
  {
    date: '2021-04-19', time: '11:47 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-MO', county: 'Harrison',
    weight: 20.875, leftSpur: 1.0625, rightSpur: 1.0, beard: 9.8125,
    call: 'Slate', distance: '15 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: true, registrationDate: '2023-05-23',
    licenseNumber: '63850100', tagNumber: 'G629309287',
    notes: "Hunted with Jack on the 104. 3 birds gobbled at 5:44 AM from 200-300 yards away but didn't come in until 11:44 AM. Had jakes, hens, and a couple of longbeards (which skirted us across the clover field). Came in evening before and setup a blind in the clover and saw a lot of birds in the process.",
    photo: null
  },
  {
    date: '2022-04-25', time: '10:01 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-MO', county: 'Mercer',
    weight: 25.625, leftSpur: 1.125, rightSpur: 1.25, beard: 17.75,
    call: '', distance: '22 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: false, registrationDate: null,
    licenseNumber: '66679486', tagNumber: 'G654175009',
    notes: 'Hunt with Jack. He killed closer to noon.',
    photo: null
  },
  {
    date: '2023-04-29', time: '6:09 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Pike',
    weight: 22.0, leftSpur: 1.25, rightSpur: 1.25, beard: 10.3125,
    call: 'Diaphragm', distance: '20 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: false, registrationDate: null,
    licenseNumber: '379317548', tagNumber: '231193801940',
    notes: "IRAP! I got in and set up my decoys on the field edge, after walking up gravel road for 100' elevation change. I had a bird gobbling within 150 yards. I had a bearded hen roosted behind me less than 50 yards. She started yelping after the bird was gobbling. I yelped back to her and discreetly made a fly down noise. She came to within 30 yards behind me and I was tempted to shoot her. Worked out perfect. She kept talking and the gobbler flew down and went to her. My decoys were in the perfect spot so they could be seen from both ends of the field, and once he saw the jake, he strutted all the way in. Killed him at 20 yards, and the bearded hen was with him. Made it to kid's soccer game in Springfield in time!",
    photo: null
  },
  {
    date: '2023-05-11', time: '7:31 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-MI', county: 'Shiawassee',
    weight: 19.0, leftSpur: 0.8125, rightSpur: 0.8125, beard: 9.625,
    call: 'Diaphragm', distance: '20 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: true, registrationDate: '2023-06-08',
    licenseNumber: '148193567', tagNumber: '113990819',
    notes: 'Hunted with Hunter Tonti, Bearded Lady Turkey Guide Service. Scouted evening before with his wife, Autumn, and setup on a few birds but none came in. Continued scouting and actually roosted the bird I killed. Setup on field edge, birds flew right down from roost and were coming in then stopped. We crossed a wet ditch and setup on the other side. Eventually 3 birds came into hen decoy and reaper. Jake-like fan, but 2 year old spurs and beard.',
    photo: null
  },
  {
    date: '2025-04-29', time: '6:55 PM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Macoupin',
    weight: 21.0, leftSpur: 1.0, rightSpur: 1.0, beard: 10.0,
    call: 'Yelper', distance: '23 yds', weapon: 'Shotgun', weaponName: 'Camo Mossberg',
    registered: false, registrationDate: null,
    licenseNumber: '379317548', tagNumber: '251164853140',
    notes: "Got in at 0500. Heard him gobble his head off from the roost. I was setup on the north side of the field, near where Mark killed on Sunday. He flew down onto the 130 from the south around 0550. He stayed put and a hen flew down from the northeast and ran all the way to him. Then another hen came from the northwest and joined them. Cloudy gloomy morning then the sun popped out, but just on them. One of the hens then decided to come straight my way. She got within 15 yards and was talking to my jake decoy. Then it got really dark and almost ready to rain. Once he got to about 90 yards he finally broke strut for the first time all morning and ran all the way into the jake decoy. Suddenly it was really bright from a flash of lightning, immediately followed by a loud boom of thunder, to which he gobbled for the first time in 45 minutes, and I instantly pulled the trigger while he was standing at 23 yards. A finish I won't forget!",
    photo: null
  },
  {
    date: '2026-05-01', time: '8:05 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Sangamon',
    weight: 20.0, leftSpur: 1.1875, rightSpur: 1.0625, beard: 11.25,
    call: 'Diaphragm', distance: '19 yds', weapon: 'Shotgun', weaponName: 'Stevens 401 .410',
    registered: false, registrationDate: null,
    licenseNumber: '379317548', tagNumber: '266664322222',
    notes: '',
    photo: null
  }
];

// States hunted but never harvested — matches today's 0.001 entries exactly.
var turkeyHuntedOnlyJosh = ['US-KY', 'US-ND'];

var turkeysHarvestedJosh = deriveTurkeyStateMap(turkeyHarvestsJosh, turkeyHuntedOnlyJosh);
