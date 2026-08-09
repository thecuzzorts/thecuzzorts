/* Sam's individual turkey harvest log — transcribed from her personal
   spreadsheet (an older, simpler format than Josh's: no Country column,
   "Gobbler" instead of "Tom", combined whole+fraction measurement strings).
   Normalized to match Josh's shape: "Gobbler" -> "Tom", Country defaulted
   to 'USA' (all her entries are IL/TX), measurements converted to decimal
   inches/pounds. Last record's beard/spur measurements were never recorded
   in the original sheet, so they're null (not 0) — see nwtfScore() in
   turkey-derive.js for how that's handled. */

var turkeyHarvestsSam = [
  {
    date: '2008-04-19', time: '', subspecies: 'Eastern', gender: 'Jake',
    country: 'USA', state: 'US-IL', county: 'Pike',
    weight: 17.0, leftSpur: 0.25, rightSpur: 0.25, beard: 5.0,
    call: '', distance: '', weapon: 'Shotgun', weaponName: '',
    registered: true, registrationDate: null,
    licenseNumber: '', tagNumber: '',
    notes: 'First bird.',
    photo: null
  },
  {
    date: '2011-04-03', time: '3:00 PM', subspecies: 'Rio Grande', gender: 'Tom',
    country: 'USA', state: 'US-TX', county: 'Shackelford',
    weight: 19.5625, leftSpur: 1.125, rightSpur: 1.1875, beard: 9.3125,
    call: 'Slate', distance: '', weapon: 'Shotgun', weaponName: '',
    registered: false, registrationDate: null,
    licenseNumber: '741040003375', tagNumber: '741060005289',
    notes: 'With Johnny.',
    photo: null
  },
  {
    date: '2011-04-23', time: '6:50 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Pike',
    weight: 22.0, leftSpur: 1.4375, rightSpur: 1.5, beard: 10.5,
    call: 'Slate', distance: '', weapon: 'Shotgun', weaponName: '',
    registered: false, registrationDate: null,
    licenseNumber: '822773693', tagNumber: '872377510',
    notes: 'With Josh, huge bird. Full body mount.',
    photo: null
  },
  {
    date: '2012-04-26', time: '7:05 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Pike',
    weight: 21.0625, leftSpur: 1.0, rightSpur: 1.0, beard: 10.0,
    call: '', distance: '', weapon: 'Shotgun', weaponName: '',
    registered: false, registrationDate: null,
    licenseNumber: '822773693', tagNumber: '873430318',
    notes: 'With Jack.',
    photo: null
  },
  {
    date: '2012-05-05', time: '5:40 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Menard',
    weight: 21.125, leftSpur: 0.5, rightSpur: 0.5, beard: 9.3125,
    call: '', distance: '', weapon: 'Shotgun', weaponName: '',
    registered: false, registrationDate: null,
    licenseNumber: '822773693', tagNumber: '873642300',
    notes: 'Doubled with Josh.',
    photo: null
  },
  {
    date: '2014-04-27', time: '6:03 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Menard',
    weight: 21.5, leftSpur: null, rightSpur: null, beard: null,
    call: '', distance: '', weapon: 'Shotgun', weaponName: '',
    registered: false, registrationDate: null,
    licenseNumber: '', tagNumber: '874911035',
    notes: 'With Josh.',
    photo: null
  }
];

var turkeyHuntedOnlySam = []; // no hunted-but-not-harvested states on record yet

var turkeysHarvestedSam = deriveTurkeyStateMap(turkeyHarvestsSam, turkeyHuntedOnlySam);
