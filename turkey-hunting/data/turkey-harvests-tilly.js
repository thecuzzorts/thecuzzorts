/* Tilly's individual turkey harvest log. */

var turkeyHarvestsTilly = [
  {
    date: '2025-03-29', time: '8:14 AM', subspecies: 'Eastern', gender: 'Jake',
    country: 'USA', state: 'US-IL', county: 'Menard',
    weight: 14.37, leftSpur: 0.25, rightSpur: 0.25, beard: 4.5,
    call: 'Box', distance: '35 yds', weapon: 'Shotgun', weaponName: 'Stevens 301',
    registered: false, registrationDate: null,
    licenseNumber: '', tagNumber: '',
    notes: "Tilly's first turkey hunt and turkey harvest ever! Got off Uncle Andy's farm. Spent the night before at the cabin with dad.",
    photo: null
  },
  {
    date: '2026-04-19', time: '6:12 AM', subspecies: 'Eastern', gender: 'Tom',
    country: 'USA', state: 'US-IL', county: 'Sangamon',
    weight: 23.08, leftSpur: 0.9375, rightSpur: 0.9375, beard: 9.375,
    call: 'Diaphragm', distance: '35 yds', weapon: 'Shotgun', weaponName: 'Stevens 301',
    registered: false, registrationDate: null,
    licenseNumber: '', tagNumber: '',
    notes: 'First Tom! 3 wild and crazy toms came in. Took a while to get a clear shot of just one bird! Pop up blind close to roost.',
    photo: null
  }
];

var turkeyHuntedOnlyTilly = []; // no hunted-but-not-harvested states on record yet

var turkeysHarvestedTilly = deriveTurkeyStateMap(turkeyHarvestsTilly, turkeyHuntedOnlyTilly);
