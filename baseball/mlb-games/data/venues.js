/* Lat/lng + team-sprite-slug lookup for the journey map, keyed by the
   exact venue name the MLB Stats API returns (same string stored in
   games.js). Hand-authored once, transcribed from the `current` + `closed`
   entries in baseball/index.html's own BALLPARKS array — the same ~33
   stadiums the family's 30-ballpark chase already tracks, since every
   attended MLB game happens at one of them. `slug` matches the team-logo
   sprite classes in css/styles.css (same sprite sheet, images/logos.png,
   baseball/index.html's own map already uses). If a future game is ever
   played at a brand-new park not yet listed here (only happens when a
   franchise relocates), add one entry alongside the new game. */
var mlbVenues = {
  "Truist Park": { lat: 33.8908, lng: -84.4677, slug: "braves" },
  "loanDepot Park": { lat: 25.7781, lng: -80.2197, slug: "marlins", retractableRoof: true },
  "Citi Field": { lat: 40.7571, lng: -73.8458, slug: "mets" },
  "Citizens Bank Park": { lat: 39.9057, lng: -75.1665, slug: "phillies" },
  "Nationals Park": { lat: 38.8731, lng: -77.0074, slug: "nationals" },
  "Wrigley Field": { lat: 41.9484, lng: -87.6553, slug: "cubs" },
  "Great American Ball Park": { lat: 39.0979, lng: -84.5086, slug: "reds" },
  "American Family Field": { lat: 43.0283, lng: -87.9712, slug: "brewers", retractableRoof: true },
  "PNC Park": { lat: 40.4469, lng: -80.0057, slug: "pirates" },
  "Busch Stadium": { lat: 38.6226, lng: -90.1928, slug: "cardinals" },
  "Chase Field": { lat: 33.4453, lng: -112.0669, slug: "diamondbacks", retractableRoof: true },
  "Coors Field": { lat: 39.7559, lng: -104.9942, slug: "rockies" },
  "Dodger Stadium": { lat: 34.0739, lng: -118.2400, slug: "dodgers" },
  "Petco Park": { lat: 32.7076, lng: -117.1570, slug: "padres" },
  "Oracle Park": { lat: 37.7786, lng: -122.3893, slug: "giants" },
  "Oriole Park at Camden Yards": { lat: 39.2838, lng: -76.6217, slug: "orioles" },
  "Fenway Park": { lat: 42.3467, lng: -71.0972, slug: "redsox" },
  "Yankee Stadium": { lat: 40.8296, lng: -73.9262, slug: "yankees" },
  "Tropicana Field": { lat: 27.7682, lng: -82.6534, slug: "rays" },
  "Rogers Centre": { lat: 43.6414, lng: -79.3894, slug: "bluejays", retractableRoof: true },
  "Rate Field": { lat: 41.8299, lng: -87.6338, slug: "whitesox" },
  "Progressive Field": { lat: 41.4962, lng: -81.6852, slug: "indians" },
  "Comerica Park": { lat: 42.3390, lng: -83.0485, slug: "tigers" },
  "Kauffman Stadium": { lat: 39.0517, lng: -94.4803, slug: "royals" },
  "Target Field": { lat: 44.9817, lng: -93.2781, slug: "twins" },
  "Daikin Park": { lat: 29.7572, lng: -95.3556, slug: "astros", retractableRoof: true },
  "Angel Stadium": { lat: 33.8003, lng: -117.8827, slug: "angels" },
  "Sutter Health Park": { lat: 38.5802, lng: -121.5010, slug: "athletics" },
  "T-Mobile Park": { lat: 47.5914, lng: -122.3324, slug: "mariners", retractableRoof: true },
  "Globe Life Field": { lat: 32.7473, lng: -97.0820, slug: "rangers", retractableRoof: true },
  /* ---- Closed stadiums (still needed — some attended games predate the move) ---- */
  "Turner Field": { lat: 33.7353, lng: -84.3893, slug: "braves" },
  "Oakland-Alameda County Coliseum": { lat: 37.7516, lng: -122.2005, slug: "athletics" },
  "Globe Life Park": { lat: 32.7512, lng: -97.0833, slug: "rangers" },
  /* ---- Aliases: some seasons/games return a slightly different official
     venue string for the same physical park than the name baseball/index.html
     uses in BALLPARKS (naming changes, sponsor-name updates, historic names,
     or just different capitalization) -- confirmed against the actual venue
     strings returned for all 104 attended games via render_js.py's sanity
     check, not guessed. ---- */
  "Guaranteed Rate Field": { lat: 41.8299, lng: -87.6338, slug: "whitesox" },
  "U.S. Cellular Field": { lat: 41.8299, lng: -87.6338, slug: "whitesox" },
  "Busch Stadium III": { lat: 38.6226, lng: -90.1928, slug: "cardinals" },
  "Minute Maid Park": { lat: 29.7572, lng: -95.3556, slug: "astros", retractableRoof: true },
  "RingCentral Coliseum": { lat: 37.7516, lng: -122.2005, slug: "athletics" },
  "Oakland Coliseum": { lat: 37.7516, lng: -122.2005, slug: "athletics" },
  "O.co Coliseum": { lat: 37.7516, lng: -122.2005, slug: "athletics" },
  "AT&T Park": { lat: 37.7786, lng: -122.3893, slug: "giants" },
  "Globe Life Park in Arlington": { lat: 32.7512, lng: -97.0833, slug: "rangers" },
  "Miller Park": { lat: 43.0283, lng: -87.9712, slug: "brewers", retractableRoof: true },
  "Safeco Field": { lat: 47.5914, lng: -122.3324, slug: "mariners", retractableRoof: true },
  "SunTrust Park": { lat: 33.8908, lng: -84.4677, slug: "braves" },
  "loanDepot park": { lat: 25.7781, lng: -80.2197, slug: "marlins", retractableRoof: true }
};
