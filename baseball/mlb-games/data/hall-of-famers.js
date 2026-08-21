/* Hall of Fame player inductees who appear at least once in mlbPlayers
   (games-players.js) -- hand-compiled once by cross-referencing the
   National Baseball Hall of Fame's actual inductee classes (checked as of
   2026) against our own 1,999-player list, rather than by fetching the
   full ~281-player HOF roster. Keyed by MLB Stats API player id (matches
   mlbPlayers' keys). Refresh manually when new games are added featuring
   a not-yet-checked player, or when the Hall of Fame announces new
   inductees (each January). */
var hofPlayers = {
  "116706": { inductionYear: 2018 }, /* Chipper Jones */
  "121250": { inductionYear: 2019 }, /* Mariano Rivera */
  "116539": { inductionYear: 2020 }, /* Derek Jeter */
  "120074": { inductionYear: 2022 }, /* David Ortiz */
  "121409": { inductionYear: 2023 }, /* Scott Rolen */
  "134181": { inductionYear: 2024 }, /* Adrian Beltré */
  "115732": { inductionYear: 2024 }, /* Todd Helton */
  "408045": { inductionYear: 2024 }, /* Joe Mauer */
  "400085": { inductionYear: 2025 }, /* Ichiro Suzuki */
  "282332": { inductionYear: 2025 }, /* CC Sabathia */
  "123790": { inductionYear: 2025 }, /* Billy Wagner */
  "136860": { inductionYear: 2026 }  /* Carlos Beltrán */
};
