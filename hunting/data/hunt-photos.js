/* Optional photos per species, keyed by exact species name as used in
   hunts.js (or the auto-derived Furbearer species names). Sparse by
   design -- only species with real photos appear here; species without
   an entry render as a plain placeholder-icon card. Unlike
   fishing/data/fish-photos.js (one photo per species), each species here
   maps to an ARRAY of photo paths, so a species can carry multiple
   photos -- the card thumbnail uses the first, and the lightbox pages
   through all of them. Images live in
   images/hunting/species/[slug]-N.jpg (slug = species name, lowercased,
   spaces -> hyphens, punctuation stripped), matching the /fishing and
   /trapping species-photo convention.

   Turkey has its own full photo gallery (hunting/js/turkey.js, sourced
   directly from turkey-photos-{josh,sam,tilly}.js) and Whitetail Deer
   has no photos in its public bucks catalog -- neither goes through
   this map or the plain-category card renderer, so neither belongs
   here. */

var huntPhotos = {
  // Big Game
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
  'Groundhog': ['../images/hunting/species/groundhog-illinois-trap-josh.jpg'],
  'Raccoon': ['../images/hunting/species/raccoon-illinois-trap-josh.jpg'],
  'River Otter': ['../images/hunting/species/river-otter-illinois-trap-josh.jpg'],
  'Striped Skunk': ['../images/hunting/species/striped-skunk-illinois-trap-josh.jpg'],

  // Reptile/Amphibian
  'American Alligator': ['../images/hunting/species/american-alligator-florida-sam.jpg'],
  'American Bullfrog': ['../images/hunting/species/american-bullfrog-illinois-josh.jpg']
};
