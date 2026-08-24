/* Optional photos per species, keyed by exact species name as used in
   hunts.js (or the auto-derived Turkey/Furbearer species names). Sparse
   by design -- only species with real photos appear here; species
   without an entry render as a plain placeholder-icon card. Unlike
   fishing/data/fish-photos.js (one photo per species), each species here
   maps to an ARRAY of photo paths, so a species can carry multiple
   photos -- the card thumbnail uses the first, and the lightbox pages
   through all of them. Images live in
   images/hunting/species/[slug]-N.jpg (slug = species name, lowercased,
   spaces -> hyphens, punctuation stripped), matching the /fishing and
   /trapping species-photo convention. */

var huntPhotos = {
  // Reused directly from /turkey-hunting's existing per-state photos
  // (turkey-photos-{josh,sam,tilly}.js) rather than duplicating image
  // files here -- paths are relative to hunting/index.html (the page
  // that actually sets <img src>, not this data file), same convention
  // fish-photos.js's own paths already use. If a new turkey photo is
  // added over there, add its path here too -- this isn't auto-derived
  // like the harvest data itself, since photos are a manual step
  // everywhere else on this page too; Turkey stays consistent with that.
  Turkey: [
    '../turkey-hunting/img/josh/florida.jpg',
    '../turkey-hunting/img/josh/illinois.jpg',
    '../turkey-hunting/img/sam/illinois.jpg',
    '../turkey-hunting/img/tilly/illinois.jpg',
    '../turkey-hunting/img/josh/kansas.jpg',
    '../turkey-hunting/img/josh/michigan.jpg',
    '../turkey-hunting/img/josh/missouri.jpg',
    '../turkey-hunting/img/josh/nebraska.jpg',
    '../turkey-hunting/img/josh/south-dakota.jpg',
    '../turkey-hunting/img/sam/texas.jpg'
  ],

  // Big Game
  'Whitetail Deer': [
    '../images/hunting/species/whitetail-deer-illinois-josh-1.jpg',
    '../images/hunting/species/whitetail-deer-illinois-josh-2.jpg',
    '../images/hunting/species/whitetail-deer-illinois-josh-3.jpg',
    '../images/hunting/species/whitetail-deer-kentucky-josh.jpg'
  ],
  'Fallow Deer': [
    '../images/hunting/species/fallow-deer-ireland-sam-1.jpg',
    '../images/hunting/species/fallow-deer-ireland-sam-2.jpg'
  ],
  'Wild Hog': ['../images/hunting/species/wild-hog-florida-sam.jpg'],

  // Upland Bird
  'Ring-necked Pheasant': [
    '../images/hunting/species/ringneck-pheasant-illinois-josh.jpg',
    '../images/hunting/species/ringneck-pheasant-south-dakota-josh.jpg',
    '../images/hunting/species/ringneck-pheasant-south-dakota-sam.jpg',
    '../images/hunting/species/ringneck-pheasant-ireland-sam.jpg'
  ],
  'Northern Bobwhite Quail': ['../images/hunting/species/northern-bobwhite-quail-illinois-josh.jpg'],
  'Sharptail Grouse': ['../images/hunting/species/sharptail-grouse-south-dakota-josh.jpg'],
  'Greater Prairie-Chicken': ['../images/hunting/species/greater-prairie-chicken-south-dakota-josh.jpg'],

  // Waterfowl
  'Wood Duck': ['../images/hunting/species/wood-duck-illinois-josh.jpg'],
  'Mallard': ['../images/hunting/species/mallard-illinois-josh.jpg'],
  'Hooded Merganser': ['../images/hunting/species/hooded-merganser-illinois-josh.jpg'],
  'Canada Goose': [
    '../images/hunting/species/canada-goose-illinois-josh.jpg',
    '../images/hunting/species/canada-goose-illinois-sam.jpg'
  ],

  // Small Game
  'Gray Squirrel': ['../images/hunting/species/gray-squirrel-illinois-josh.jpg'],
  'Eastern Cottontail Rabbit': ['../images/hunting/species/eastern-cottontail-rabbit-illinois-josh.jpg'],
  'Mourning Dove': [
    '../images/hunting/species/mourning-dove-illinois-josh.jpg',
    '../images/hunting/species/mourning-dove-illinois-josh-2.jpg',
    '../images/hunting/species/mourning-dove-illinois-josh-and-sam.jpg'
  ],
  'Common Pigeon': ['../images/hunting/species/common-pigeon-illinois-josh.jpg'],
  'Jackrabbit': ['../images/hunting/species/jackrabbit-south-dakota-josh.jpg'],

  // Furbearer -- Coyote is both hunted and trapped, so it gets one photo
  // per method; everything else here only has one.
  'Coyote': [
    '../images/hunting/species/coyote-illinois-hunt-josh.jpg',
    '../images/hunting/species/coyote-illinois-trapped-josh.jpg'
  ],
  'Bobcat': ['../images/hunting/species/bobcat-florida-hunt-josh.jpg'],
  'Red Fox': ['../images/hunting/species/red-fox-illinois-trap-josh.jpg'],
  'Beaver': ['../images/hunting/species/beaver-illinois-josh.jpg'],
  'River Otter': ['../images/hunting/species/river-otter-illinois-trap-josh.jpg'],
  'Striped Skunk': ['../images/hunting/species/striped-skunk-illinois-trap-josh.jpg'],

  // Reptile/Amphibian
  'American Alligator': ['../images/hunting/species/american-alligator-florida-sam.jpg'],
  'American Bullfrog': ['../images/hunting/species/american-bullfrog-illinois-josh.jpg']
};
