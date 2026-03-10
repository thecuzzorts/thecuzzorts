// Country codes use ISO 3166-1 alpha-2 format (e.g. "US", "CA", "MX", "GB")
// Set to 1 for visited, 0 for not visited
// Note: US territories (PR, VI) and small islands (SX) count toward the total
// but may not visually highlight on the world map.
var countriesVisitedJosh = {
	"US": 1,
	"BS": 1,
	"CA": 1,
	"DO": 1,
	"PL": 1,
	"PR": 1,
	"SX": 1,
	"VI": 1
};

// Optional visit details — add entries only where you have dates or notes
// Example: "MX": { date: "2019-03-15", notes: "Cancun trip" }
var countriesDetailsJosh = {
	"BS": { date: "2003-06-30" },
	"DO": { date: "2022-01-15", notes: "Neighborhood friends trip to Punta Cana" },
	"PR": { date: "2026-03-04", notes: "Cruise on the Oasis of the Seas" },
	"SX": { date: "2025-03-19", notes: "Cruise on the Wonder of the Seas" },
	"VI": { date: "2025-03-20", notes: "Cruise on the Wonder of the Seas" }
};
