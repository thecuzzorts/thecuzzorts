/* Curated reference lists -- used only to auto-populate the Waterfowl
   watch list (see js/app.js), not to drive their own display. Scoped to
   species realistically encountered in Illinois, Florida, and South
   Dakota, not an exhaustive continental list. At render time, any
   species below that ISN'T found in huntsLogged (see hunts.js) is added
   to Waterfowl's watch-list chips automatically -- add a normal
   huntsLogged record to move one off the list, don't edit this file for
   a harvest. Only edit this file if a real duck/goose species is missing
   from the list entirely. */
var SPECIES_REFERENCE = {
  Waterfowl: {
    Ducks: [
      'Mallard', 'Gadwall', 'American Wigeon', 'Northern Pintail', 'Green-winged Teal',
      'Blue-winged Teal', 'Northern Shoveler', 'Wood Duck', 'American Black Duck', 'Mottled Duck',
      'Redhead', 'Canvasback', 'Ring-necked Duck', 'Greater Scaup', 'Lesser Scaup', 'Bufflehead',
      'Common Goldeneye', 'Hooded Merganser', 'Common Merganser', 'Red-breasted Merganser', 'Ruddy Duck'
    ],
    Geese: [
      'Canada Goose', 'Cackling Goose', 'Snow Goose', "Ross's Goose", 'Greater White-fronted Goose (Specklebelly)'
    ]
  }
};
