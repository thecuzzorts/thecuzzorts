/* Species checklist -- NOT a detailed harvest log like /turkey-hunting.
   One record per species+location combination (a species hunted in two
   states gets two records, each rendering as its own chip on that
   species' card). No dates, intentionally -- this is a hidden page today,
   but built as if public: species, hunters, and general location only,
   never exact timing. `location` is either a US-XX state code (rendered
   via STATE_NAMES in js/app.js) or a plain country name string for
   non-US hunts (e.g. 'Ireland') -- unrecognized values just display
   verbatim. `category` drives which section of the page a record renders
   in (see js/app.js). `method` is optional, defaults to implicit
   'Hunted' -- only ever set explicitly to 'Trapped' on the synthetic
   records derived from /trapping's data (see js/app.js), never hand-set
   here.

   Turkey is intentionally NOT listed here -- it's auto-derived from
   /turkey-hunting's existing harvest data (see js/app.js) so the two
   can never drift. Do not add a manual Turkey entry to this file.

   Trapped furbearers are intentionally NOT listed here either -- they're
   auto-derived from /trapping/data/furbearers-trapped-josh.js (see
   js/app.js). Only add a Furbearer entry here for something taken by
   hunting (gun/bow), not trapping. */
var huntsLogged = [
  // Big Game
  { species: 'Whitetail Deer',            hunters: ['Josh', 'Sam'], location: 'US-IL',  category: 'Big Game' },
  { species: 'Whitetail Deer',            hunters: ['Josh'],        location: 'US-KY',  category: 'Big Game' },
  { species: 'Fallow Deer',               hunters: ['Sam'],         location: 'Ireland', category: 'Big Game' },
  { species: 'Wild Hog',                  hunters: ['Sam'],         location: 'US-FL',  category: 'Big Game' },

  // Upland Bird (Turkey excluded -- auto-derived, see app.js)
  { species: 'Ring-necked Pheasant',      hunters: ['Josh', 'Sam'], location: 'US-IL',  category: 'Upland Bird' },
  { species: 'Ring-necked Pheasant',      hunters: ['Josh', 'Sam'], location: 'US-SD',  category: 'Upland Bird' },
  { species: 'Ring-necked Pheasant',      hunters: ['Sam'],         location: 'Ireland', category: 'Upland Bird' },
  { species: 'Northern Bobwhite Quail',   hunters: ['Josh', 'Sam'], location: 'US-IL',  category: 'Upland Bird' },
  { species: 'Sharptail Grouse',          hunters: ['Josh'],        location: 'US-SD',  category: 'Upland Bird' },
  { species: "Greater Prairie-Chicken",   hunters: ['Josh', 'Sam'], location: 'US-SD',  category: 'Upland Bird' },

  // Waterfowl -- rendered exactly like every other category (a card per
  // harvested species). A Ducks/Geese entry here is also what removes
  // that species from the auto-generated watch list (see
  // species-reference.js); Coot/Snipe/Crane would land here too if
  // harvested, but none are yet (see huntsWatchList below).
  { species: 'Wood Duck',                 hunters: ['Josh'],        location: 'US-IL',  category: 'Waterfowl' },
  { species: 'Mallard',                   hunters: ['Josh'],        location: 'US-IL',  category: 'Waterfowl' },
  { species: 'Hooded Merganser',          hunters: ['Josh'],        location: 'US-IL',  category: 'Waterfowl' },
  { species: 'Canada Goose',              hunters: ['Josh', 'Sam'], location: 'US-IL',  category: 'Waterfowl' },
  { species: 'Snow Goose',                hunters: ['Josh'],        location: 'US-IL',  category: 'Waterfowl' },
  { species: "Ross's Goose",              hunters: ['Josh'],        location: 'US-IL',  category: 'Waterfowl' },

  // Small Game
  { species: 'Fox Squirrel',              hunters: ['Josh', 'Sam'], location: 'US-IL',  category: 'Small Game' },
  { species: 'Gray Squirrel',             hunters: ['Josh', 'Sam'], location: 'US-IL',  category: 'Small Game' },
  { species: 'Eastern Cottontail Rabbit', hunters: ['Josh'],        location: 'US-IL',  category: 'Small Game' },
  { species: 'Mourning Dove',             hunters: ['Josh', 'Sam'], location: 'US-IL',  category: 'Small Game' },
  { species: 'Mourning Dove',             hunters: ['Josh'],        location: 'US-KY',  category: 'Small Game' },
  { species: 'Jackrabbit',                hunters: ['Josh'],        location: 'US-SD',  category: 'Small Game' },
  { species: 'Common Pigeon',             hunters: ['Josh'],        location: 'US-IL',  category: 'Small Game' },
  { species: 'European Starling',         hunters: ['Josh'],        location: 'US-IL',  category: 'Small Game' },
  { species: 'European Starling',         hunters: ['Josh'],        location: 'US-SD',  category: 'Small Game' },
  { species: 'American Crow',             hunters: ['Josh'],        location: 'US-IL',  category: 'Small Game' },

  // Furbearer -- Coyote is hunted AND trapped: this entry gives it a
  // "Hunted" chip, and /trapping's data separately gives it a "Trapped"
  // chip on the same card (see the Furbearer auto-derivation in app.js).
  // Raccoon/Red Fox/Opossum/Muskrat/Mink/Beaver/River Otter/Groundhog/
  // Striped Skunk are NOT listed here -- they come entirely from
  // /trapping's data as "Trapped"-only records.
  { species: 'Coyote',                    hunters: ['Josh'],        location: 'US-IL',  category: 'Furbearer' },
  { species: 'Bobcat',                    hunters: ['Josh'],        location: 'US-FL',  category: 'Furbearer' },

  // Reptile/Amphibian
  { species: 'American Alligator',        hunters: ['Sam'],         location: 'US-FL',  category: 'Reptile/Amphibian' },
  { species: 'Common Snapping Turtle',    hunters: ['Josh'],        location: 'US-IL',  category: 'Reptile/Amphibian' },
  { species: 'American Bullfrog',         hunters: ['Josh'],        location: 'US-IL',  category: 'Reptile/Amphibian' }
];

/* Species actively pursued but never harvested -- shown as a dashed/
   outline "watch list" chip at the bottom of that category's card grid,
   not as a full card (nothing to show a photo of). Mirrors /turkey-
   hunting's turkeyHuntedOnly[Name] concept, generalized to any category.
   `location` is optional here -- sometimes it's just "we've never gotten
   one," with no specific place tied to that. Only needed for species NOT
   covered by species-reference.js's Ducks/Geese lists or by /trapping's
   data -- those flow onto the watch list automatically just by being
   absent from huntsLogged, no entry needed here. Coot/Snipe/Crane get a
   normal entry here like any other category's watch-list species, since
   they aren't ducks or geese and have no reference list of their own. */
var huntsWatchList = [
  // Big Game
  { species: 'Pronghorn Antelope',         hunters: [], location: null, category: 'Big Game' },

  // Upland Bird
  { species: 'Gray (Hungarian) Partridge', hunters: [], location: null, category: 'Upland Bird' },
  { species: 'American Woodcock',          hunters: [], location: null, category: 'Upland Bird' },
  { species: 'Chukar Partridge',           hunters: [], location: null, category: 'Upland Bird' },
  { species: 'Ruffed Grouse',              hunters: [], location: null, category: 'Upland Bird' },
  { species: 'Spruce Grouse',              hunters: [], location: null, category: 'Upland Bird' },
  { species: 'Dusky Grouse',               hunters: [], location: null, category: 'Upland Bird' },

  // Waterfowl
  { species: 'American Coot',              hunters: [], location: null, category: 'Waterfowl' },
  { species: "Wilson's Snipe",             hunters: [], location: null, category: 'Waterfowl' },
  { species: 'Sandhill Crane',             hunters: [], location: null, category: 'Waterfowl' },

  // Small Game
  { species: 'Black-tailed Prairie Dog',   hunters: [], location: null, category: 'Small Game' }
];
