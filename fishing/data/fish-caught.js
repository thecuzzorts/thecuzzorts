/* The Cuzzorts' shared fishing log — every species any family member
   has caught, with no per-catch attribution (not split by person).
   Grouped by water type since that's the primary split on the page;
   state uses the same US-XX codes as every other section.
   date/weight/length/notes start blank and get filled in per catch
   later (weight/length especially for a notable "lunker") — rendered
   conditionally only when present, same convention as trapping's
   furbearersDetails. The same species can recur across states as
   separate catch records — these are individual catches, not a
   deduplicated checklist. */

var fishCaught = {
  freshwater: [
    { species: 'Bluegill',         state: 'US-IL', date: null, weight: null, length: null, notes: '' },
    { species: 'Largemouth Bass',  state: 'US-IL', date: null, weight: null, length: null, notes: '' },
    { species: 'Blue Catfish',     state: 'US-IL', date: null, weight: null, length: null, notes: '' },
    { species: 'Channel Catfish',  state: 'US-IL', date: null, weight: null, length: null, notes: '' },
    { species: 'Black Crappie',    state: 'US-IL', date: null, weight: null, length: null, notes: '' },
    { species: 'White Crappie',    state: 'US-IL', date: null, weight: null, length: null, notes: '' },
    { species: 'Rainbow Trout',    state: 'US-IL', date: null, weight: null, length: null, notes: '' },
    { species: 'Rainbow Trout',    state: 'US-MO', date: null, weight: null, length: null, notes: '' },
    { species: 'Largemouth Bass',  state: 'US-MO', date: null, weight: null, length: null, notes: '' },
    { species: 'Rainbow Trout',    state: 'US-VA', date: null, weight: null, length: null, notes: '' },
    { species: 'Brook Trout',      state: 'US-VA', date: null, weight: null, length: null, notes: '' }
  ],
  saltwater: [
    { species: 'Mangrove Snapper',        state: 'US-FL', date: null, weight: null, length: null, notes: '' },
    { species: 'Pinfish',                 state: 'US-FL', date: null, weight: null, length: null, notes: '' },
    { species: 'Porkfish',                state: 'US-FL', date: null, weight: null, length: null, notes: '' },
    { species: 'Common Snook',            state: 'US-FL', date: null, weight: null, length: null, notes: '' },
    { species: 'Pigfish',                 state: 'US-FL', date: null, weight: null, length: null, notes: '' },
    { species: 'Hardhead Catfish',        state: 'US-FL', date: null, weight: null, length: null, notes: '' },
    { species: "Sailor's Choice Grunt",   state: 'US-FL', date: null, weight: null, length: null, notes: '' },
    { species: 'Bluestriped Grunt',       state: 'US-FL', date: null, weight: null, length: null, notes: '' }
  ]
};
