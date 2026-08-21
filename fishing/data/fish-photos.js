/* Optional per-species photo, keyed by exact species name as used in
   fish-caught.js. Sparse by design — only species with a real photo
   appear here; species without an entry render as a plain text card.
   Images live in images/fishing/species/[slug].jpg (slug = species
   name, lowercased, spaces -> hyphens, punctuation stripped),
   matching the /trapping species-photo convention. */

var fishPhotos = {
  'Black Crappie': '../images/fishing/species/black-crappie.jpg',
  'Blue Catfish': '../images/fishing/species/blue-catfish.jpg',
  'Bluegill': '../images/fishing/species/bluegill.jpg',
  'Bluestriped Grunt': '../images/fishing/species/bluestriped-grunt.jpg',
  'Brook Trout': '../images/fishing/species/brook-trout.jpg',
  'Candy Snapper': '../images/fishing/species/candy-snapper.jpg',
  'Channel Catfish': '../images/fishing/species/channel-catfish.jpg',
  'Common Snook': '../images/fishing/species/common-snook.jpg',
  'Hardhead Catfish': '../images/fishing/species/hardhead-catfish.jpg',
  'Largemouth Bass': '../images/fishing/species/largemouth-bass.jpg',
  'Mangrove Snapper': '../images/fishing/species/mangrove-snapper.jpg',
  'Pigfish': '../images/fishing/species/pigfish.jpg',
  'Pinfish': '../images/fishing/species/pinfish.jpg',
  'Porkfish': '../images/fishing/species/porkfish.jpg',
  'Rainbow Trout': '../images/fishing/species/rainbow-trout.jpg',
  'Redear Sunfish': '../images/fishing/species/redear-sunfish.jpg',
  "Sailor's Choice Grunt": '../images/fishing/species/sailors-choice-grunt.jpg'
};
