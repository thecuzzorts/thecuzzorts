/* id -> full name, deduped across every game so a player who
   recurs across many attended games (e.g. a long-tenured
   Cardinal) is stored once, not once per appearance. */
var mlbPlayers = {
  "453198": "Chris Perez",
  "407871": "Joe Thurston",
  "405395": "Albert Pujols",
  "211041": "Ryan Franklin",
  "408219": "Chris Duncan",
  "407886": "Ryan Ludwick",
  "425794": "Adam Wainwright",
  "458675": "Colby Rasmus",
  "425877": "Yadier Molina",
  "150449": "Rick Ankiel",
  "460022": "Tyler Greene",
  "435401": "Skip Schumaker",
  "450282": "Glen Perkins",
  "430593": "Brendan Harris",
  "408045": "Joe Mauer",
  "408047": "Justin Morneau",
  "150317": "Joe Crede",
  "452655": "Denard Span",
  "445196": "Matt Tolbert",
  "150212": "Michael Cuddyer",
  "430585": "Jason Kubel",
  "150274": "Joe Nathan",
  "460576": "Carlos G\u00f3mez",
  "407825": "Matt Guerrier",
  "467726": "Jose Mijares",
  "453895": "Brendan Ryan",
  "458003": "Blake Hawksworth",
  "425867": "Khalil Greene",
  "136660": "Mark DeRosa",
  "150178": "Jason LaRue",
  "119125": "Trever Miller",
  "334492": "Joel Pineiro",
  "448337": "Josh Kinney",
  "434538": "Francisco Liriano",
  "285079": "R.A. Dickey",
  "430927": "Brian Buscher",
  "429841": "Matt Diaz",
  "452671": "Diory Hernandez",
  "110236": "Garret Anderson",
  "116706": "Chipper Jones",
  "498568": "Barbaro Canizares",
  "407924": "Manny Acosta",
  "447714": "Eric O'Flaherty",
  "119853": "Greg Norton",
  "445988": "Mart\u00edn Prado",
  "435263": "Brian McCann",
  "462102": "Tommy Hanson",
  "434661": "Nate McLouth",
  "430637": "Kelly Johnson",
  "450665": "Kris Medlen",
  "431145": "Russell Martin",
  "425766": "James Loney",
  "461314": "Matt Kemp",
  "279577": "Rafael Furcal",
  "444843": "Andre Ethier",
  "121834": "Jason Schmidt",
  "120903": "Manny Ramirez",
  "430941": "George Sherrill",
  "334393": "Juan Pierre",
  "457428": "James McDonald",
  "407861": "Orlando Hudson",
  "470462": "Ramon Troncoso",
  "232694": "Casey Blake",
  "425560": "Adam LaRoche",
  "400089": "Rafael Soriano",
  "493247": "Peter Moylan",
  "283166": "Michael Gonzalez",
  "424325": "David Ross",
  "117955": "Derek Lowe",
  "150116": "Randy Wolf",
  "425539": "Hung-Chih Kuo",
  "150407": "Guillermo Mota",
  "457453": "Jair Jurrjens",
  "457429": "Boone Logan",
  "451532": "Chad Billingsley",
  "112128": "Juan Castro",
  "455092": "Scott Elbert",
  "117928": "Mark Loretta",
  "407812": "Matt Holliday",
  "445055": "Jon Jay",
  "121096": "Dennys Reyes",
  "112020": "Chris Carpenter",
  "501896": "David Freese",
  "435400": "Jason Motte",
  "459939": "Mitchell Boggs",
  "462405": "Brooks Conrad",
  "488862": "Yunel Escobar",
  "518792": "Jason Heyward",
  "136267": "Troy Glaus",
  "123790": "Billy Wagner",
  "400134": "Eric Hinske",
  "466320": "Melky Cabrera",
  "434637": "Matt Lindstrom",
  "456422": "Michael Bourn",
  "279827": "Humberto Quintero",
  "502032": "Bud Norris",
  "150398": "Geoff Blum",
  "433898": "Jeff Keppinger",
  "430622": "Cory Sullivan",
  "430565": "Kazuo Matsui",
  "452254": "Hunter Pence",
  "150324": "Carlos Lee",
  "204020": "Lance Berkman",
  "150268": "Pedro Feliz",
  "453236": "Mark Hamilton",
  "477569": "Fernando Salas",
  "444135": "Ryan Theriot",
  "456501": "Johnny Cueto",
  "453211": "Drew Stubbs",
  "457803": "Jay Bruce",
  "458015": "Joey Votto",
  "121074": "Edgar Renteria",
  "408252": "Brandon Phillips",
  "121409": "Scott Rolen",
  "150421": "Ramon Hernandez",
  "430930": "Fred Lewis",
  "518614": "Daniel Descalso",
  "448802": "Jaime Garc\u00eda",
  "501800": "Allen Craig",
  "519240": "Marc Rzepczynski",
  "279913": "Corey Patterson",
  "346857": "Nick Punto",
  "460008": "Anthony Varvaro",
  "518692": "Freddie Freeman",
  "462564": "Dan Uggla",
  "333292": "Jack Wilson",
  "121125": "Arthur Rhodes",
  "150414": "Jake Westbrook",
  "449072": "Kyle McClellan",
  "518545": "Adron Chambers",
  "136734": "Octavio Dotel",
  "218596": "Tim Hudson",
  "450852": "Cristhian Martinez",
  "136860": "Carlos Beltr\u00e1n",
  "240694": "J.C. Romero",
  "464433": "Juan Francisco",
  "545404": "Brandon Beachy",
  "543629": "Tyler Pastornicky",
  "458681": "Lance Lynn",
  "572761": "Matt Carpenter",
  "488810": "Tony Cruz",
  "469690": "Victor Marte",
  "458924": "Jonny Venters",
  "239795": "Chad Durbin",
  "453203": "Shane Robinson",
  "518858": "Nate Jones",
  "452121": "Brent Lillibridge",
  "458668": "Jordan Danks",
  "457477": "Alejandro De Aza",
  "493351": "Alexei Ramirez",
  "425567": "Alex Rios",
  "493596": "Gordon Beckham",
  "592665": "Addison Reed",
  "117244": "Paul Konerko",
  "500779": "Jose Quintana",
  "430884": "Jesse Crain",
  "276055": "Adam Dunn",
  "493364": "Dayan Viciedo",
  "150229": "A.J. Pierzynski",
  "407819": "Matt Thornton",
  "488919": "Taylor Green",
  "455117": "Mart\u00edn Maldonado",
  "285131": "C\u00e9sar Izturis",
  "571666": "Mike Fiers",
  "460075": "Ryan Braun",
  "435459": "George Kottaras",
  "285068": "Cody Ransom",
  "430001": "Rickie Weeks Jr.",
  "457422": "Tim Dillard",
  "448159": "Manny Parra",
  "460579": "Nyjer Morgan",
  "133380": "Aramis Ramirez",
  "493114": "Norichika Aoki",
  "448170": "Travis Ishikawa",
  "430611": "Corey Hart",
  "452220": "Stephen Drew",
  "407489": "Lyle Overbay",
  "431094": "Aaron Hill",
  "471083": "Miguel Montero",
  "467827": "Gerardo Parra",
  "446899": "Brad Ziegler",
  "444520": "Craig Breslow",
  "440251": "Ryan Roberts",
  "489119": "Wade Miley",
  "457708": "Justin Upton",
  "543766": "Bryan Shaw",
  "502671": "Paul Goldschmidt",
  "455759": "Chris Young",
  "475243": "Travis Wood",
  "425861": "Shawn Camp",
  "519203": "Anthony Rizzo",
  "516770": "Starlin Castro",
  "434567": "Geovany Soto",
  "446381": "Darwin Barney",
  "472528": "Luis Valbuena",
  "430203": "David DeJesus",
  "542999": "Tony Campana",
  "407862": "Reed Johnson",
  "425557": "Jeff Baker",
  "461791": "Carlos Marmol",
  "458628": "Joe Mather",
  "449079": "Wesley Wright",
  "444448": "Brian Bixler",
  "460131": "Brian Bogusevic",
  "476704": "Jed Lowrie",
  "434643": "Wandy Rodriguez",
  "430965": "Chris Snyder",
  "502110": "J.D. Martinez",
  "514888": "Jose Altuve",
  "453303": "Matt Downs",
  "488771": "Jason Castro",
  "502304": "David Carpenter",
  "446135": "Barret Browning",
  "523260": "Joe Kelly",
  "451594": "Dexter Fowler",
  "429783": "Rafael Betancourt",
  "279571": "Matt Belisle",
  "571521": "Rex Brothers",
  "340192": "Marco Scutaro",
  "502158": "Josh Roenicke",
  "501647": "Wilin Rosario",
  "455126": "Chris Nelson",
  "458913": "Eric Young Jr.",
  "502125": "Tyler Colvin",
  "471865": "Carlos Gonz\u00e1lez",
  "468406": "Jonathan Herrera",
  "433585": "Jeff Francis",
  "115732": "Todd Helton",
  "518516": "Madison Bumgarner",
  "435078": "Joaquin Arias",
  "543063": "Brandon Crawford",
  "207267": "Brad Penny",
  "453923": "Gr\u00e9gor Blanco",
  "516949": "H\u00e9ctor S\u00e1nchez",
  "457763": "Buster Posey",
  "425657": "Javier L\u00f3pez",
  "474832": "Brandon Belt",
  "433586": "Santiago Casilla",
  "434636": "\u00c1ngel Pag\u00e1n",
  "518813": "Greg Holland",
  "429722": "Ervin Santana",
  "521692": "Salvador Perez",
  "456714": "Billy Butler",
  "519058": "Mike Moustakas",
  "425796": "Jeff Francoeur",
  "444876": "Alcides Escobar",
  "460086": "Alex Gordon",
  "471107": "Elliot Johnson",
  "543333": "Eric Hosmer",
  "525768": "Tim Collins",
  "502481": "Jarrod Dyson",
  "429664": "Robinson Can\u00f3",
  "400085": "Ichiro Suzuki",
  "455755": "Chris Stewart",
  "150484": "Vernon Wells",
  "493133": "Hiroki Kuroda",
  "434624": "Jayson Nix",
  "400098": "Travis Hafner",
  "458731": "Brett Gardner",
  "121250": "Mariano Rivera",
  "502085": "David Robertson",
  "459991": "Gaby Sanchez",
  "501983": "Travis Snider",
  "434540": "Garrett Jones",
  "474568": "Jordy Mercer",
  "502374": "Michael McKenry",
  "457705": "Andrew McCutchen",
  "476883": "Pedro \u00c1lvarez",
  "458677": "Justin Wilson",
  "453343": "Mark Melancon",
  "516782": "Starling Marte",
  "276351": "Jason Grilli",
  "543037": "Gerrit Cole",
  "435522": "Neil Walker",
  "502100": "Alex Presley",
  "150020": "Jerry Hairston Jr.",
  "458501": "Luis Alfonso Cruz",
  "454560": "A.J. Ellis",
  "425844": "Zack Greinke",
  "543008": "Alex Castellanos",
  "543148": "Tim Federowicz",
  "407885": "Mark Ellis",
  "624577": "Yasiel Puig",
  "408236": "Adri\u00e1n Gonz\u00e1lez",
  "434670": "Hanley Ramirez",
  "430613": "Ronald Belisario",
  "458006": "Matt Albers",
  "448602": "Mark Reynolds",
  "471911": "Carlos Carrasco",
  "430605": "Ryan Raburn",
  "543401": "Jason Kipnis",
  "114739": "Jason Giambi",
  "448179": "Rich Hill",
  "449107": "Mike Aviles",
  "488726": "Michael Brantley",
  "150348": "John McDonald",
  "467793": "Carlos Santana",
  "448306": "James Shields",
  "518953": "David Lough",
  "460051": "Chris Getz",
  "456715": "Lorenzo Cain",
  "136600": "Bruce Chen",
  "123173": "Miguel Tejada",
  "543070": "Aaron Crow",
  "425783": "Shin-Soo Choo",
  "544371": "Donald Lutz",
  "519023": "Devin Mesoraco",
  "489197": "Curtis Partch",
  "453943": "Todd Frazier",
  "435219": "Jack Hannahan",
  "446359": "Zack Cozart",
  "502009": "Mat Latos",
  "543331": "J.J. Hoover",
  "449082": "Xavier Paul",
  "453265": "Tony Watson",
  "450203": "Charlie Morton",
  "518902": "Pete Kozma",
  "465629": "Edward Mujica",
  "572096": "Trevor Rosenthal",
  "474865": "Julio Borbon",
  "453646": "Carlos Villanueva",
  "150093": "Alfonso Soriano",
  "456078": "Welington Castillo",
  "429719": "Edwin Jackson",
  "453284": "Blake Parker",
  "435220": "Ryan Sweeney",
  "435625": "Nate Schierholtz",
  "493574": "Blake Tekotte",
  "489413": "Casper Wells",
  "408241": "Jake Peavy",
  "543569": "Brent Morel",
  "453264": "Donnie Veal",
  "572033": "Josh Phegley",
  "594828": "Evan Gattis",
  "519345": "Joey Terdoslavich",
  "592743": "Andrelton Simmons",
  "468429": "Jose Constanza",
  "425646": "Luis Ayala",
  "430904": "Paul Maholm",
  "453400": "Chris Johnson",
  "518886": "Craig Kimbrel",
  "477229": "Jordan Walden",
  "501593": "Luis Avil\u00e1n",
  "543779": "Kevin Siegrist",
  "571946": "Shelby Miller",
  "595307": "Seth Maness",
  "275933": "Scott Downs",
  "518934": "DJ LeMahieu",
  "572816": "Corey Dickerson",
  "571448": "Nolan Arenado",
  "446641": "Wilton Lopez",
  "453568": "Charlie Blackmon",
  "518586": "Charlie Culberson",
  "453064": "Troy Tulowitzki",
  "466918": "Manny Corpas",
  "407822": "Jorge De La Rosa",
  "489189": "Josh Outman",
  "467850": "Edgmer Escalona",
  "622072": "Alex Wood",
  "592239": "Todd Cunningham",
  "457926": "Paul Janish",
  "504379": "Juan Nicasio",
  "571431": "Matt Adams",
  "518693": "Sam Freeman",
  "329092": "Randy Choate",
  "518911": "Andrew Lambo",
  "425549": "Clint Barmes",
  "476570": "Vin Mazzaro",
  "543281": "Josh Harrison",
  "150359": "A.J. Burnett",
  "506997": "Tony Sanchez",
  "457768": "Bryan Morris",
  "467798": "Jose Tabata",
  "543939": "Kolten Wong",
  "408042": "Gerald Laird",
  "527054": "Julio Teheran",
  "457788": "Jordan Schafer",
  "425834": "B.J. Upton",
  "425900": "Dioner Navarro",
  "467008": "Pedro Strop",
  "430906": "Donnie Murphy",
  "516809": "Junior Lake",
  "518794": "Brandon Hicks",
  "346793": "Jeremy Affeldt",
  "501303": "Ehire Adrianza",
  "434604": "Michael Morse",
  "467055": "Pablo Sandoval",
  "433589": "Yusmeiro Petit",
  "408307": "Carl Crawford",
  "346874": "Juan Uribe",
  "475100": "Scott Van Slyke",
  "445276": "Kenley Jansen",
  "547943": "Hyun Jin Ryu",
  "543829": "Dee Strange-Gordon",
  "451216": "Brian Wilson",
  "457759": "Justin Turner",
  "472551": "Fernando Abad",
  "461235": "Brandon Moss",
  "424825": "Coco Crisp",
  "430948": "Alberto Callaspo",
  "475857": "Ryan Cook",
  "543243": "Sonny Gray",
  "502210": "Josh Reddick",
  "518626": "Josh Donaldson",
  "519299": "Eric Sogard",
  "502226": "Craig Gentry",
  "493316": "Yoenis Cespedes",
  "444379": "John Jaso",
  "474892": "Chris Carter",
  "518625": "Matt Dominguez",
  "543807": "George Springer",
  "451661": "Josh Fields",
  "571868": "Marc Krauss",
  "447744": "Raul Valdes",
  "518560": "Paul Clemens",
  "543054": "Jarred Cosart",
  "542340": "Jonathan Villar",
  "461882": "Jesus Guzman",
  "543321": "L.J. Hoes",
  "488721": "Peter Bourjos",
  "542994": "Joey Butler",
  "425509": "Jhonny Peralta",
  "608379": "Michael Wacha",
  "592609": "Mike Olt",
  "466988": "Emilio Bonif\u00e1cio",
  "458085": "Chris Coghlan",
  "501888": "Ryan Kalish",
  "519166": "Neil Ram\u00edrez",
  "407842": "Jose Veras",
  "434628": "Jason Hammel",
  "434633": "John Baker",
  "593372": "Carlos Martinez",
  "421685": "Aaron Harang",
  "425491": "Ryan Doumit",
  "429665": "Edwin Encarnaci\u00f3n",
  "456124": "Erik Kratz",
  "571901": "Aaron Loup",
  "476270": "Steve Tolleson",
  "447755": "Steve Delabar",
  "521230": "Liam Hendriks",
  "607680": "Kevin Pillar",
  "408314": "Jos\u00e9 Reyes",
  "446399": "Brett Cecil",
  "445163": "Casey Janssen",
  "543238": "Anthony Gose",
  "430832": "Jos\u00e9 Bautista",
  "543434": "Brett Lawrie",
  "431148": "Scott Kazmir",
  "519083": "Derek Norris",
  "452035": "Kyle Blanks",
  "462382": "Jim Johnson",
  "592407": "Bryan Holaday",
  "400121": "Victor Martinez",
  "519445": "Danny Worth",
  "592206": "Nick Castellanos",
  "571871": "Ian Krol",
  "435079": "Ian Kinsler",
  "116338": "Torii Hunter",
  "457706": "Austin Jackson",
  "430603": "Don Kelly",
  "456379": "Al Alburquerque",
  "408234": "Miguel Cabrera",
  "461865": "Andrew Romine",
  "519175": "Evan Reed",
  "501955": "Joba Chamberlain",
  "434378": "Justin Verlander",
  "488671": "Alex Avila",
  "434658": "Rajai Davis",
  "455139": "Robinson Chirinos",
  "519048": "Mitch Moreland",
  "465657": "Joakim Soria",
  "134181": "Adrian Beltr\u00e9",
  "547982": "Leonys Martin",
  "596059": "Rougned Odor",
  "407890": "Colby Lewis",
  "543726": "Robbie Ross Jr.",
  "574831": "Michael Choice",
  "596143": "Luis Sardinas",
  "462101": "Elvis Andrus",
  "450212": "Pat Neshek",
  "476454": "Dellin Betances",
  "453056": "Jacoby Ellsbury",
  "500208": "Yangervis Solarte",
  "469686": "Alfredo Aceves",
  "501660": "Zoilo Almonte",
  "502011": "Preston Claiborne",
  "116539": "Derek Jeter",
  "406878": "Brian Roberts",
  "595032": "Chase Whitley",
  "475582": "Ryan Zimmerman",
  "425785": "Greg Dobbs",
  "543685": "Anthony Rendon",
  "430668": "Scott Hairston",
  "457787": "Danny Espinosa",
  "461325": "Tyler Clippard",
  "450729": "Doug Fister",
  "446653": "Jose Lobat\u00f3n",
  "150029": "Jayson Werth",
  "435623": "Kevin Frandsen",
  "518617": "Jake Diekman",
  "400284": "Chase Utley",
  "448242": "Tony Gwynn Jr.",
  "429667": "Ryan Howard",
  "458582": "Reid Brignac",
  "519184": "Ben Revere",
  "452718": "Kyle Kendrick",
  "460055": "John Mayberry Jr.",
  "408242": "Wil Nieves",
  "276519": "Jimmy Rollins",
  "518603": "Justin De Fratus",
  "502126": "Domonic Brown",
  "110029": "Bobby Abreu",
  "112526": "Bartolo Colon",
  "460003": "Taylor Teagarden",
  "445968": "Dana Eveland",
  "502517": "Daniel Murphy",
  "446263": "Lucas Duda",
  "527038": "Wilmer Flores",
  "516769": "Jenrry Mejia",
  "431151": "David Wright",
  "434158": "Curtis Granderson",
  "476633": "Chris Parmelee",
  "425545": "Josh Willingham",
  "461833": "Phil Hughes",
  "461858": "Trevor Plouffe",
  "500871": "Eduardo Escobar",
  "542455": "Oswaldo Arcia",
  "435559": "Kurt Suzuki",
  "488846": "Brian Duensing",
  "572821": "Brian Dozier",
  "461872": "Anthony Swarzak",
  "453539": "Sam Fuld",
  "434778": "Kendrys Morales",
  "407893": "Mark Teixeira",
  "547888": "Masahiro Tanaka",
  "519412": "Zelous Wheeler",
  "456488": "Eduardo N\u00fa\u00f1ez",
  "465679": "Samuel Deduno",
  "573204": "Caleb Thielbar",
  "502272": "Casey Fien",
  "499624": "Chris Colabello",
  "502043": "Kyle Gibson",
  "465041": "Francisco Cervelli",
  "453307": "David Huff",
  "476589": "Adam Warren",
  "543606": "Jake Odorizzi",
  "407853": "Erik Bedard",
  "459964": "Matt Joyce",
  "150040": "Jos\u00e9 Molina",
  "502676": "Cole Figueroa",
  "446334": "Evan Longoria",
  "407908": "Joel Peralta",
  "450314": "Ben Zobrist",
  "446386": "Brandon Guyer",
  "434663": "Juan Carlos Oviedo",
  "446481": "Sean Rodr\u00edguez",
  "595281": "Kevin Kiermaier",
  "571800": "Drew Hutchison",
  "518991": "Darin Mastroianni",
  "445170": "Todd Redmond",
  "430681": "Dan Johnson",
  "435045": "Sergio Santos",
  "457918": "J.A. Happ",
  "425840": "Neal Cotts",
  "451192": "James Adduci",
  "491703": "Neftal\u00ed Feliz",
  "450317": "J.P. Arencibia",
  "543706": "Daniel Robertson",
  "489267": "Adam Rosales",
  "452104": "Chase Headley",
  "572138": "Jon Singleton",
  "448609": "Tony Sipp",
  "463610": "Gregorio Petit",
  "594772": "Jake Buchanan",
  "543257": "Robbie Grossman",
  "430589": "Chad Qualls",
  "572365": "Ryan Goins",
  "460099": "Nolan Reimold",
  "592717": "Aaron Sanchez",
  "502143": "Danny Valencia",
  "407793": "John Lackey",
  "518771": "Mitch Harris",
  "545341": "Randal Grichuk",
  "516416": "Jean Segura",
  "595386": "Jason Rogers",
  "608349": "Corey Knebel",
  "467143": "H\u00e9ctor G\u00f3mez",
  "452252": "Adam Lind",
  "451089": "Shane Peterson",
  "518960": "Jonathan Lucroy",
  "519293": "Will Smith",
  "519076": "Jimmy Nelson",
  "541650": "Hern\u00e1n P\u00e9rez",
  "460026": "Nick Hundley",
  "502522": "Justin Miller",
  "543184": "Christian Friedrich",
  "446099": "John Axford",
  "488681": "Brandon Barnes",
  "501255": "Rafael Ynoa",
  "519085": "Brett Oberholtzer",
  "605512": "Preston Tucker",
  "621043": "Carlos Correa",
  "503556": "Marwin Gonzalez",
  "545350": "Jake Marisnick",
  "491159": "Joe Thatcher",
  "115629": "LaTroy Hawkins",
  "571735": "David Hale",
  "623184": "Scott Oberg",
  "572019": "Ben Paulsen",
  "548357": "Christian Bergman",
  "570267": "Domingo Santana",
  "543521": "Collin McHugh",
  "572039": "Stephen Piscotty",
  "455976": "Nick Markakis",
  "516811": "Eury P\u00e9rez",
  "607054": "Jace Peterson",
  "611177": "Adonis Garc\u00eda",
  "457727": "Cameron Maybin",
  "544928": "Tyler Lyons",
  "514913": "Rub\u00e9n Tejada",
  "621199": "Matt Bowman",
  "455009": "Jonathan Broxton",
  "571757": "Jeremy Hazelbaker",
  "518883": "Dean Kiekhefer",
  "649557": "Aledmys D\u00edaz",
  "518700": "Eric Fryer",
  "572008": "Chris Owings",
  "630111": "Yasmany Tom\u00e1s",
  "592273": "Brandon Drury",
  "605113": "Nick Ahmed",
  "493200": "Seunghwan Oh",
  "576397": "Jedd Gyorko",
  "624585": "Jorge Soler",
  "595879": "Javier B\u00e1ez",
  "608365": "Addison Russell",
  "444468": "H\u00e9ctor Rond\u00f3n",
  "592178": "Kris Bryant",
  "518748": "Justin Grimm",
  "600303": "Tommy La Stella",
  "453562": "Jake Arrieta",
  "519333": "Matt Szczur",
  "120074": "David Ortiz",
  "519144": "Rick Porcello",
  "547749": "Junichi Tazawa",
  "543768": "Travis Shaw",
  "605141": "Mookie Betts",
  "456030": "Dustin Pedroia",
  "593428": "Xander Bogaerts",
  "598265": "Jackie Bradley Jr.",
  "493157": "Koji Uehara",
  "543877": "Christian V\u00e1zquez",
  "572122": "Kyle Seager",
  "606466": "Ketel Marte",
  "592716": "Adrian Sampson",
  "429711": "Franklin Gutierrez",
  "502182": "Steve Clevenger",
  "452234": "Seth Smith",
  "443558": "Nelson Cruz",
  "543557": "Mike Montgomery",
  "624424": "Michael Conforto",
  "455374": "Antonio Bastardo",
  "594798": "Jacob deGrom",
  "570663": "Hansel Robles",
  "571841": "Ty Kelly",
  "608700": "Kevin Plawecki",
  "452678": "Asdr\u00fabal Cabrera",
  "488818": "Chase d'Arnaud",
  "430947": "Erick Aybar",
  "542255": "Ender Inciarte",
  "605480": "Mallex Smith",
  "452095": "Tyler Flowers",
  "592433": "Tyrell Jenkins",
  "606291": "Mauricio Cabrera",
  "592826": "Vince Velasquez",
  "571437": "Aaron Altherr",
  "593576": "H\u00e9ctor Neris",
  "595963": "Tyler Goeddel",
  "571830": "Tommy Joseph",
  "596748": "Maikel Franco",
  "519237": "Cameron Rupp",
  "520471": "Freddy Galvis",
  "605125": "Cody Asche",
  "517370": "Jimmy Paredes",
  "591693": "Edubray Ramos",
  "546318": "Od\u00fabel Herrera",
  "514917": "C\u00e9sar Hern\u00e1ndez",
  "621408": "Matt Marksberry",
  "542432": "Jos\u00e9 Ram\u00edrez",
  "489232": "Anthony Recker",
  "543901": "Ryan Weber",
  "474319": "Brandon Snyder",
  "543017": "Hunter Cervenka",
  "476451": "Jeremy Hellickson",
  "605894": "Severino Gonz\u00e1lez",
  "491646": "Jeanmar G\u00f3mez",
  "605227": "Taylor Featherston",
  "594824": "Greg Garcia",
  "502054": "Tommy Pham",
  "451705": "Alberto Rosario",
  "425532": "Jerome Williams",
  "435043": "Zach Duke",
  "433584": "Roberto Hernandez",
  "657557": "Paul DeJong",
  "621035": "Chris Taylor",
  "518735": "Yasmani Grandal",
  "605131": "Austin Barnes",
  "571771": "Enrique Hern\u00e1ndez",
  "608369": "Corey Seager",
  "523253": "Logan Forsythe",
  "594795": "Grant Dayton",
  "453344": "Brandon Morrow",
  "518649": "Brett Eibner",
  "641355": "Cody Bellinger",
  "435221": "Brandon McCarthy",
  "489265": "Sergio Romo",
  "519346": "Eric Thames",
  "444489": "Manny Pi\u00f1a",
  "542979": "Keon Broxton",
  "621446": "Lewis Brinson",
  "606115": "Orlando Arcia",
  "620443": "Luis Torrens",
  "592669": "Hunter Renfroe",
  "642707": "Allen C\u00f3rdoba",
  "489334": "Craig Stammen",
  "614173": "Franchy Cordero",
  "571976": "Wil Myers",
  "606131": "Luis Perdomo",
  "605486": "Cory Spangenberg",
  "571602": "Matt Davidson",
  "591994": "Willy Garc\u00eda",
  "607074": "Carlos Rod\u00f3n",
  "553882": "Omar Narv\u00e1ez",
  "573589": "Michael Ynoa",
  "570560": "Yolmer S\u00e1nchez",
  "571476": "Chris Beck",
  "547989": "Jos\u00e9 Abreu",
  "502593": "Jake Petricka",
  "541645": "Avisa\u00edl Garc\u00eda",
  "641313": "Tim Anderson",
  "593700": "Alen Hanson",
  "641553": "Adam Engel",
  "543359": "Dan Jennings",
  "592741": "Chasen Shreve",
  "519222": "Austin Romine",
  "592450": "Aaron Judge",
  "609280": "Miguel Andujar",
  "643778": "Tyler Webb",
  "642180": "Tyler Wade",
  "643338": "Chad Green",
  "591720": "Ronald Torreyes",
  "596142": "Gary S\u00e1nchez",
  "544369": "Didi Gregorius",
  "571745": "Mitch Haniger",
  "592325": "Ben Gamel",
  "434563": "Carlos Ruiz",
  "543883": "Nick Vincent",
  "543964": "Tony Zych",
  "621242": "Edwin D\u00edaz",
  "433587": "F\u00e9lix Hern\u00e1ndez",
  "595144": "Jaycob Brugman",
  "605254": "Daniel Gossett",
  "656305": "Matt Chapman",
  "543760": "Marcus Semien",
  "501981": "Khris Davis",
  "448281": "Sean Doolittle",
  "425492": "Ryan Madson",
  "622194": "Bruce Maxwell",
  "475174": "Yonder Alonso",
  "592387": "Ryon Healy",
  "543056": "Danny Coulombe",
  "570666": "Luis Cessa",
  "543305": "Aaron Hicks",
  "642086": "Dominic Smith",
  "425784": "Ren\u00e9 Rivera",
  "606160": "Rafael Montero",
  "642708": "Amed Rosario",
  "460283": "Jerry Blevins",
  "592340": "Erik Goeddel",
  "501571": "Juan Lagares",
  "622666": "Johan Camargo",
  "475247": "Ryan Flaherty",
  "641438": "Shane Carle",
  "645277": "Ozzie Albies",
  "621020": "Dansby Swanson",
  "608331": "Max Fried",
  "592145": "Jesse Biddle",
  "641645": "Luis Guillorme",
  "607043": "Brandon Nimmo",
  "607625": "Seth Lugo",
  "622168": "Yairo Mu\u00f1oz",
  "571945": "Miles Mikolas",
  "572228": "Luke Voit",
  "500874": "Jos\u00e9 A. Mart\u00ednez",
  "663855": "Jordan Hicks",
  "506747": "Francisco Pe\u00f1a",
  "542303": "Marcell Ozuna",
  "518618": "Derek Dietrich",
  "656738": "Ben Meyer",
  "594027": "Tyron Guerrero",
  "571506": "Justin Bour",
  "605119": "Brian Anderson",
  "543045": "Adam Conley",
  "670950": "Trevor Richards",
  "595375": "JT Riddle",
  "592680": "Yadiel Rivera",
  "500743": "Miguel Rojas",
  "543776": "JB Shuck",
  "596295": "Austin Gomber",
  "594577": "Mike Mayers",
  "664056": "Harrison Bader",
  "592426": "Luke Jackson",
  "595465": "Dan Winkler",
  "542454": "Danny Santana",
  "621345": "A.J. Minter",
  "660670": "Ronald Acu\u00f1a Jr.",
  "605154": "John Brebbia",
  "596133": "Luke Weaver",
  "605538": "Matt Wisler",
  "621550": "Patrick Wisdom",
  "608348": "Carson Kelly",
  "641933": "Tyler O'Neill",
  "641712": "Dakota Hudson",
  "666969": "Adolis Garc\u00eda",
  "608678": "Dominic Leone",
  "453172": "Jared Hughes",
  "593974": "Wandy Peralta",
  "592863": "Mason Williams",
  "571466": "Tucker Barnhart",
  "594988": "Scott Schebler",
  "640447": "Phillip Ervin",
  "543101": "Anthony DeSclafani",
  "553993": "Eugenio Su\u00e1rez",
  "608371": "Lucas Sims",
  "571697": "Scooter Gennett",
  "628452": "Raisel Iglesias",
  "606299": "Jos\u00e9 Peraza",
  "547179": "Michael Lorenzen",
  "571740": "Billy Hamilton",
  "592200": "Curt Casali",
  "641525": "Brandon Dixon",
  "606149": "Giovanny Gallegos",
  "592314": "Mike Foltynewicz",
  "663586": "Austin Riley",
  "656794": "Sean Newcomb",
  "607231": "John Gant",
  "656427": "Jack Flaherty",
  "669242": "Tommy Edman",
  "658551": "Junior Fern\u00e1ndez",
  "669374": "Keston Hiura",
  "621438": "Tyrone Taylor",
  "623352": "Josh Hader",
  "519141": "Drew Pomeranz",
  "571679": "David Freitas",
  "448855": "Junior Guerra",
  "663757": "Trent Grisham",
  "543351": "Jay Jackson",
  "543475": "Jordan Lyles",
  "668942": "Josh Rojas",
  "573009": "Joe Mantiply",
  "592233": "Stefan Crichton",
  "545121": "Ildemaro Vargas",
  "444482": "David Peralta",
  "572233": "Christian Walker",
  "598287": "No\u00e9 Ramirez",
  "592761": "Caleb Smith",
  "669257": "Will Smith",
  "519306": "Steven Souza Jr.",
  "572041": "AJ Pollock",
  "542992": "Andy Burns",
  "666158": "Gavin Lux",
  "545333": "Trevor Bauer",
  "641680": "Jonah Heim",
  "669256": "Nick Solak",
  "663993": "Nathaniel Lowe",
  "667463": "John King",
  "643396": "Isiah Kiner-Falefa",
  "624431": "Jose Trevino",
  "641432": "Willie Calhoun",
  "642201": "Eli White",
  "663465": "Kolby Allard",
  "641829": "Jason Martin",
  "608336": "Joey Gallo",
  "517008": "Alex Colom\u00e9",
  "593934": "Miguel San\u00f3",
  "680777": "Ryan Jeffers",
  "573124": "Taylor Rogers",
  "596146": "Max Kepler",
  "663616": "Trevor Larnach",
  "593871": "Jorge Polanco",
  "650333": "Luis Arraez",
  "677976": "Randy Dobnak",
  "621439": "Byron Buxton",
  "666185": "Dylan Carlson",
  "663457": "Lars Nootbaar",
  "624641": "Edmundo Sosa",
  "519008": "T.J. McFarland",
  "452657": "Jon Lester",
  "602922": "Jos\u00e9 Rondon",
  "472610": "Luis Garc\u00eda",
  "594807": "Adam Duvall",
  "445926": "Jesse Chavez",
  "592626": "Joc Pederson",
  "628338": "Guillermo Heredia",
  "650828": "Edgar Santana",
  "607345": "Kevan Smith",
  "501659": "Abraham Almonte",
  "458708": "Josh Tomlin",
  "621052": "Alex Reyes",
  "668800": "Andrew Knizner",
  "453192": "Andrew Miller",
  "453281": "Wade LeBlanc",
  "650893": "G\u00e9nesis Cabrera",
  "593144": "Richard Rodr\u00edguez",
  "657053": "Touki Toussaint",
  "519390": "Stephen Vogt",
  "668804": "Bryan Reynolds",
  "592567": "Colin Moran",
  "570256": "Gregory Polanco",
  "607455": "Anthony Banda",
  "664918": "Kyle Keller",
  "663647": "Ke'Bryan Hayes",
  "594694": "Wilmer Difo",
  "643230": "Steven Brault",
  "621028": "Kevin Newman",
  "660294": "Yoshi Tsutsugo",
  "683232": "Nick Mears",
  "605421": "Michael P\u00e9rez",
  "660829": "Hoy Park",
  "544725": "Leury Garc\u00eda",
  "660162": "Yo\u00e1n Moncada",
  "657757": "Gavin Sheets",
  "676979": "Garrett Crochet",
  "571718": "Brian Goodwin",
  "656629": "Michael Kopech",
  "607481": "Aaron Bummer",
  "650391": "Eloy Jim\u00e9nez",
  "572193": "Ryan Tepera",
  "673357": "Luis Robert Jr.",
  "593140": "Michael Feliz",
  "578428": "Jose Iglesias",
  "493603": "Adam Ottavino",
  "650382": "Darwinzon Hern\u00e1ndez",
  "657077": "Alex Verdugo",
  "657031": "Josh Taylor",
  "666915": "Bobby Dalbec",
  "656941": "Kyle Schwarber",
  "646240": "Rafael Devers",
  "518489": "Ryan Brasier",
  "656557": "Tanner Houck",
  "674944": "Sean Guenther",
  "669432": "Trevor Rogers",
  "650559": "Bryan De La Cruz",
  "657193": "Eddy Alvarez",
  "592865": "Taylor Williams",
  "542914": "Anthony Bass",
  "663743": "Nick Fortes",
  "642423": "Magneuris Sierra",
  "665862": "Jazz Chisholm Jr.",
  "660821": "Jes\u00fas S\u00e1nchez",
  "656577": "Alex Jackson",
  "650331": "Lewin D\u00edaz",
  "666168": "Mason Thompson",
  "605137": "Josh Bell",
  "600921": "Andr\u00e9s Machado",
  "642028": "Josh Rogers",
  "664057": "Andrew Stevenson",
  "665742": "Juan Soto",
  "628450": "Yadiel Hernandez",
  "660688": "Keibert Ruiz",
  "657041": "Lane Thomas",
  "671277": "Luis Garc\u00eda Jr.",
  "666120": "Ian Anderson",
  "554431": "Tyler Matzek",
  "518595": "Travis d'Arnaud",
  "592696": "Eddie Rosario",
  "642350": "Jose Siri",
  "642130": "Blake Taylor",
  "663656": "Kyle Tucker",
  "608324": "Alex Bregman",
  "608665": "Kendall Graveman",
  "493329": "Yuli Gurriel",
  "554340": "Yimi Garc\u00eda",
  "592773": "Ryne Stanek",
  "677651": "Luis Garcia",
  "548384": "Brooks Raley",
  "670541": "Yordan Alvarez",
  "663611": "Nick Madrigal",
  "643524": "Frank Schwindel",
  "664023": "Ian Happ",
  "641684": "Michael Hermosillo",
  "596057": "Daniel Norris",
  "543228": "Yan Gomes",
  "673548": "Seiya Suzuki",
  "573186": "Marcus Stroman",
  "663538": "Nico Hoerner",
  "542364": "Rafael Ortega",
  "621433": "Brett Phillips",
  "670764": "Taylor Walls",
  "664040": "Brandon Lowe",
  "642336": "Francisco Mej\u00eda",
  "668227": "Randy Arozarena",
  "596847": "Ji Man Choi",
  "656222": "Jalen Beeks",
  "666139": "Josh Lowe",
  "677551": "Wander Franco",
  "656876": "Drew Rasmussen",
  "621295": "Nick Wittgren",
  "676831": "Kodi Whitley",
  "680977": "Brendan Donovan",
  "572403": "Drew VerHagen",
  "660766": "Juan Yepez",
  "640492": "Jos\u00e9 Az\u00f3car",
  "622503": "Nabil Crismatt",
  "595777": "Jurickson Profar",
  "506433": "Yu Darvish",
  "592518": "Manny Machado",
  "630105": "Jake Cronenworth",
  "673490": "Ha-Seong Kim",
  "543592": "Austin Nola",
  "575929": "Willson Contreras",
  "666624": "Christopher Morel",
  "664123": "Scott Effross",
  "663845": "Alfonso Rivas III",
  "592858": "Rowan Wick",
  "455119": "Chris Martin",
  "657006": "Justin Steele",
  "671739": "Michael Harris II",
  "621566": "Matt Olson",
  "672911": "Jesus Cruz",
  "661388": "William Contreras",
  "657140": "Kyle Wright",
  "676050": "Packy Naughton",
  "664854": "Ryan Helsley",
  "608717": "Chris Stratton",
  "642152": "Lou Trivino III",
  "656061": "Albert Abreu",
  "642528": "Jonathan Lo\u00e1isiga",
  "650402": "Gleyber Torres",
  "593423": "Frankie Montas",
  "643217": "Andrew Benintendi",
  "669357": "Nolan Gorman",
  "668941": "JoJo Romero",
  "656756": "Jordan Montgomery",
  "687093": "Vaughn Grissom",
  "656716": "Zach McKinstry",
  "669713": "Hayden Wesneski",
  "664731": "P.J. Higgins",
  "623520": "David Bote",
  "614177": "Franmil Reyes",
  "676369": "Nelson Vel\u00e1zquez",
  "628708": "Yunior Marte",
  "670768": "Luis Gonz\u00e1lez",
  "663698": "Joey Bart",
  "518397": "Scott Alexander",
  "642731": "Thairo Estrada",
  "621573": "Austin Dean",
  "681584": "David Villar",
  "643511": "Tyler Rogers",
  "641793": "Zack Littell",
  "666808": "Camilo Doval",
  "605204": "J.D. Davis",
  "682829": "Elly De La Cruz",
  "663697": "Jonathan India",
  "641584": "Jake Fraley",
  "622065": "Alex Young",
  "680574": "Matt McLain",
  "650960": "Daniel Duarte",
  "670770": "TJ Friedl",
  "668715": "Spencer Steer",
  "664139": "Ian Gibaut",
  "571912": "Luke Maile",
  "663886": "Tyler Stephenson",
  "571656": "Buck Farmer",
  "664747": "Alexis D\u00edaz",
  "700363": "AJ Smith-Shawver",
  "621294": "Ben Heller",
  "656541": "Sam Hilliard",
  "641729": "Joe Jim\u00e9nez",
  "489446": "Kirby Yates",
  "592885": "Christian Yelich",
  "608385": "Jesse Winker",
  "686217": "Sal Frelick",
  "606303": "Joel Payamps",
  "642207": "Devin Williams",
  "655316": "Andruw Monasterio",
  "680911": "Owen Miller",
  "663368": "Blake Perkins",
  "665625": "Elvis Peguero",
  "668930": "Brice Turang",
  "605288": "Adrian Houser",
  "642715": "Willy Adames",
  "543859": "Michael Tonkin",
  "642216": "Allan Winans",
  "669221": "Sean Murphy",
  "657088": "Forrest Wall",
  "669016": "Brandon Marsh",
  "547180": "Bryce Harper",
  "592663": "J.T. Realmuto",
  "664761": "Alec Bohm",
  "681082": "Bryson Stott",
  "592836": "Taijuan Walker",
  "621381": "Matt Strahm",
  "679032": "Johan Rojas",
  "607208": "Trea Turner",
  "624428": "Adam Frazier",
  "660261": "Shintaro Fujinami",
  "683002": "Gunnar Henderson",
  "622761": "Jorge Mateo",
  "623993": "Anthony Santander",
  "663630": "Ryan McKenna",
  "663624": "Ryan Mountcastle",
  "668939": "Adley Rutschman",
  "676059": "Jordan Westburg",
  "669720": "Austin Hays",
  "666974": "Yennier Cano",
  "681297": "Colton Cowser",
  "656811": "Ryan O'Hearn",
  "680570": "Grayson Rodriguez",
  "602104": "Ram\u00f3n Ur\u00edas",
  "642585": "F\u00e9lix Bautista",
  "650633": "Michael King",
  "666163": "Ben Rortvedt",
  "641343": "Jake Bauers",
  "641856": "Billy McKinney",
  "543309": "Kyle Higashioka",
  "592454": "Tommy Kahnle",
  "683011": "Anthony Volpe",
  "519317": "Giancarlo Stanton",
  "675911": "Spencer Strider",
  "572955": "Pierce Johnson",
  "672284": "Jarred Kelenic",
  "543518": "Scott McGough",
  "664983": "Jake McCarthy",
  "656464": "Kevin Ginkel",
  "674072": "Tommy Henry",
  "677942": "Blaze Alexander",
  "672515": "Gabriel Moreno",
  "682998": "Corbin Carroll",
  "666971": "Lourdes Gurriel Jr.",
  "612434": "Miguel Castro",
  "657044": "Ryan Thompson",
  "665877": "Jos\u00e9 Ferm\u00edn",
  "681676": "Ryan Fernandez",
  "676475": "Alec Burleson",
  "672279": "Michael Siani",
  "552640": "Andrew Kittredge",
  "691026": "Masyn Winn",
  "671056": "Iv\u00e1n Herrera",
  "621051": "Steven Wilson",
  "682868": "Bryan Ramos",
  "686676": "Korey Lee",
  "669699": "Braden Shewmake",
  "683734": "Andrew Vaughn",
  "670032": "Nicky Lopez",
  "657612": "Tim Hill",
  "673929": "Jordan Leasure",
  "621383": "Tanner Banks",
  "607200": "Erick Fedde",
  "688297": "Chris Roycroft",
  "669461": "Matthew Liberatore",
  "686780": "Pedro Pag\u00e9s",
  "665833": "Oneil Cruz",
  "642133": "Rowdy Tellez",
  "658668": "Edward Olivares",
  "669707": "Jared Triolo",
  "677865": "Justin Bruihl",
  "656605": "Mitch Keller",
  "642701": "Dennis Santana",
  "572191": "Michael A. Taylor",
  "669261": "Jack Suwinski",
  "676702": "Hunter Stratton",
  "681517": "Kyle Leahy",
  "671218": "Heliot Ramos",
  "672275": "Patrick Bailey",
  "702352": "Spencer Bivens",
  "689172": "Brett Wisely",
  "663546": "Sean Hjelle",
  "682641": "Luis Matos",
  "680885": "Spencer Schwellenbach",
  "670097": "Zack Short",
  "657656": "Ram\u00f3n Laureano",
  "678226": "Daysbel Hern\u00e1ndez",
  "669276": "Dylan Lee",
  "625643": "Reynaldo L\u00f3pez",
  "663897": "Luke Williams",
  "656550": "Grant Holmes",
  "693821": "Bryce Elder",
  "622663": "Luis Severino",
  "649966": "Luis Ur\u00edas",
  "667670": "Brent Rooker",
  "642851": "Austin Wynns",
  "621053": "Tyler Ferguson",
  "680474": "Max Schuemann",
  "570482": "Gio Urshela",
  "691777": "Max Muncy",
  "672016": "Denzel Clarke",
  "701762": "Nick Kurtz",
  "663687": "Hogan Harris",
  "668709": "JJ Bleday",
  "805779": "Jacob Wilson",
  "664285": "Framber Valdez",
  "694376": "Shay Whitcomb",
  "670623": "Isaac Paredes",
  "669450": "Cooper Hummel",
  "605170": "Victor Caratini",
  "701358": "Cam Smith",
  "643289": "Mauricio Dub\u00f3n",
  "676694": "Jake Meyers",
  "665161": "Jeremy Pe\u00f1a",
  "681869": "Shawn Dubin",
  "663321": "Nick Hernandez",
  "673237": "Yainer Diaz",
  "688158": "David Morgan",
  "592094": "Jason Adam",
  "670092": "Trenton Brooks",
  "663604": "Brandon Lockridge",
  "601713": "Nick Pivetta",
  "669308": "Sean Reynolds",
  "665487": "Fernando Tatis Jr.",
  "553869": "Elias D\u00edaz",
  "666023": "Freddy Fermin",
  "686475": "Tyler Tolbert",
  "679845": "Nick Loftin",
  "670231": "John Rave",
  "671221": "Drew Waters",
  "668674": "Lucas Erceg",
  "608032": "Carlos Est\u00e9vez",
  "686469": "Vinnie Pasquantino",
  "664728": "Kyle Isbel",
  "672580": "Maikel Garcia",
  "672582": "Angel Zerpa",
  "695506": "Jac Caglianone",
  "674444": "Steven Cruz",
  "677951": "Bobby Witt Jr.",
  "650859": "Luis Rengifo",
  "672569": "Gustavo Campero",
  "695681": "Christian Moore",
  "687263": "Zach Neto",
  "667755": "Jos\u00e9 Soriano",
  "621493": "Taylor Ward",
  "545361": "Mike Trout",
  "666176": "Jo Adell",
  "696147": "Sam Bachman",
  "694384": "Nolan Schanuel",
  "664774": "LaMonte Wade Jr.",
  "681351": "Logan O'Hoppe",
  "687888": "Brandon Walter",
  "672391": "Kaleb Ort",
  "663967": "C\u00e9sar Salazar",
  "676508": "Ben Casparius",
  "687221": "Dalton Rushing",
  "681911": "Alex Vesia",
  "571970": "Max Muncy",
  "808975": "Hyeseong Kim",
  "660271": "Shohei Ohtani",
  "681624": "Andy Pages",
  "691781": "Brady House",
  "678606": "Jos\u00e9 A. Ferrer",
  "682928": "CJ Abrams",
  "669371": "Cole Henry",
  "695734": "Daylen Lile",
  "695578": "James Wood",
  "702795": "Ryan Loutos",
  "647336": "Michael Soroka",
  "696285": "Jacob Young",
  "669743": "Alex Call",
  "671131": "Jackson Rutledge",
  "694335": "Matt Svanson",
  "687363": "Victor Scott II",
  "695336": "Thomas Saggese",
  "676617": "Riley O'Brien",
  "650968": "Yohel Pozo",
  "664208": "Phil Maton",
  "669397": "Nick Allen",
  "660853": "Enyel De Los Santos",
  "686948": "Drake Baldwin",
  "680735": "Austin Cox",
  "571927": "Steven Matz",
  "700669": "Gordon Graceffo",
  "593833": "Wander Suero",
  "805373": "Nacho Alvarez Jr.",
  "669721": "Davis Daniel",
  "691023": "Jordan Walker",
  "641658": "Garrett Hampson",
  "673513": "Yuki Matsui",
  "701538": "Jackson Merrill",
  "669093": "Jeremiah Estrada",
  "669369": "Bryce Johnson",
  "606996": "Kyle Hart",
  "701675": "Nathan Church",
  "669477": "Casey Schmitt",
  "678906": "Kai-Wei Teng",
  "676130": "Jos\u00e9 Butt\u00f3",
  "687551": "Drew Gilbert",
  "808982": "Jung Hoo Lee",
  "666711": "Joel Peguero",
  "683766": "Christian Koss",
  "657424": "Matt Gage",
  "802139": "JJ Wetherholt",
  "666277": "George Soriano",
  "693409": "C\u00e9sar Prieto",
  "687462": "Spencer Horwitz",
  "682848": "Endy Rodr\u00edguez",
  "681895": "Evan Sisk",
  "642397": "Gregory Soto",
  "682254": "Mason Montgomery",
  "663968": "Jake Mangum",
  "691373": "Jhostynxon Garcia",
  "680779": "Henry Davis",
  "684049": "Brandan Bidois",
  "804606": "Konnor Griffin",
  "693304": "Nick Gonzales",
  "663494": "Bryan Torres",
  "691458": "Blaze Jordan",
  "699625": "Jimmy Crooks",
  "682989": "Victor Mederos",
  "800311": "Didier Fuentes",
  "519242": "Chris Sale",
  "805347": "Jim Jarvis",
  "641755": "Tyler Kinley",
  "664849": "Danny Young",
  "573262": "Mike Yastrzemski",
  "703725": "Luis Gastelum",
  "702566": "Owen Murphy",
  "700241": "Michael McGreevy",
  "694374": "Tim Tawa",
  "694297": "Brandon Pfaadt",
  "680728": "Adrian Del Castillo",
  "682988": "Tyler Locklear",
  "814439": "Ryan Waldschmidt",
  "672695": "Geraldo Perdomo",
  "664199": "Taylor Clarke",
  "805299": "Brandyn Garcia",
  "689266": "Dylan Dodd",
  "694795": "Josh Ekness",
  "665052": "Griffin Conine",
  "681715": "Heriberto Hern\u00e1ndez",
  "805300": "Jakob Marsee",
  "676534": "Calvin Faucher",
  "691594": "Javier Sanoja",
  "806188": "Cade Gibson",
  "669364": "Xavier Edwards",
  "669065": "Kyle Stowers",
  "683357": "Owen Caissie",
  "682663": "Agust\u00edn Ram\u00edrez",
  "691788": "Joe Mack",
  "691587": "Eury P\u00e9rez",
  "672640": "Otto Lopez",
  "621112": "Paul Blackburn",
  "676609": "Jos\u00e9 Caballero",
  "682987": "Spencer Jones",
  "669224": "Austin Wells",
  "700250": "Ben Rice",
  "694341": "Brendan Beck",
  "687396": "Brent Headrick",
  "605242": "Michael Fulmer",
  "660787": "Yerry De los Santos",
  "806146": "George Lombard Jr.",
  "670103": "Raymond Burgos",
  "663330": "Jahmai Jones",
  "687941": "Alec Gamboa",
  "657136": "Connor Wong",
  "678394": "Brayan Bello",
  "677800": "Wilyer Abreu",
  "681508": "Mickey Gasper",
  "702332": "Caleb Durbin",
  "686765": "Nick Sogard",
  "680776": "Jarren Duran",
  "678882": "Ceddanne Rafaela",
  "645305": "Ali S\u00e1nchez",
  "623437": "Justin Topa",
  "642232": "Ryan Yarbrough",
  "687562": "Jake Bennett",
  "676477": "Garrett Whitlock",
  "663558": "Jovani Mor\u00e1n",
  "666182": "Bo Bichette",
  "682626": "Francisco Alvarez",
  "683146": "Brett Baty",
  "701807": "Carson Benge",
  "665506": "Cristian Pache",
  "673540": "Kodai Senga",
  "596019": "Francisco Lindor",
  "690997": "Nolan McLean",
  "676724": "Jared Young",
  "805999": "A.J. Ewing",
  "662139": "Daulton Varsho",
  "656986": "Bennett Sousa",
  "666211": "Taylor Trammell",
  "664299": "Cristian Javier"
};

/* gamePk -> array of that game's participants (both teams,
   batters + pitchers), id+team+position only -- full per-player stat lines
   are intentionally not stored here to keep this file's size
   sane. Look up mlbPlayers[id] for the name. */
var mlbGamePlayers = {
  "245294": [
    {
      "id": 453198,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 407871,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 405395,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 211041,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 408219,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 407886,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 425794,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 458675,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 150449,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 460022,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 435401,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 450282,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 430593,
      "team": "MIN",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 408045,
      "team": "MIN",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 408047,
      "team": "MIN",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 150317,
      "team": "MIN",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 452655,
      "team": "MIN",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 445196,
      "team": "MIN",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 150212,
      "team": "MIN",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 430585,
      "team": "MIN",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 150274,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 460576,
      "team": "MIN",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 407825,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 467726,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "245324": [
    {
      "id": 453895,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 407871,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 405395,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 458003,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425867,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 136660,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 150178,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 119125,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 334492,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 408219,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 407886,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 458675,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 448337,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 150449,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 460022,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 435401,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 434538,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 285079,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 430593,
      "team": "MIN",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 408045,
      "team": "MIN",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 408047,
      "team": "MIN",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 150317,
      "team": "MIN",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 430927,
      "team": "MIN",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 452655,
      "team": "MIN",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 445196,
      "team": "MIN",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 150212,
      "team": "MIN",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 430585,
      "team": "MIN",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 150274,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 460576,
      "team": "MIN",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 407825,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 467726,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "245733": [
    {
      "id": 429841,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 452671,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 110236,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 116706,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 498568,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 407924,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 447714,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 119853,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 445988,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 435263,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 462102,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 434661,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 430637,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 450665,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 431145,
      "team": "LAD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425766,
      "team": "LAD",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 461314,
      "team": "LAD",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 279577,
      "team": "LAD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 444843,
      "team": "LAD",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 121834,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 120903,
      "team": "LAD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 430941,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 334393,
      "team": "LAD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 457428,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 407861,
      "team": "LAD",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 470462,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 232694,
      "team": "LAD",
      "position": "3B",
      "gamesStarted": null
    }
  ],
  "245748": [
    {
      "id": 425560,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 429841,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 116706,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 400089,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 447714,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 493247,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 434661,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 452671,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 283166,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 110236,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 424325,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 119853,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 445988,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 117955,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 431145,
      "team": "LAD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425766,
      "team": "LAD",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 461314,
      "team": "LAD",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 279577,
      "team": "LAD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 444843,
      "team": "LAD",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 150116,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 120903,
      "team": "LAD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 334393,
      "team": "LAD",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 407861,
      "team": "LAD",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 425539,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 232694,
      "team": "LAD",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 150407,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "245763": [
    {
      "id": 425560,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 429841,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 452671,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 110236,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 116706,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 457453,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 424325,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 407924,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 119853,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 445988,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 435263,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 434661,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 430637,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 450665,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 457429,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 451532,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 112128,
      "team": "LAD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 431145,
      "team": "LAD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425766,
      "team": "LAD",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 461314,
      "team": "LAD",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 455092,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 279577,
      "team": "LAD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 444843,
      "team": "LAD",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 121834,
      "team": "LAD",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 120903,
      "team": "LAD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 430941,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 334393,
      "team": "LAD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 407861,
      "team": "LAD",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 117928,
      "team": "LAD",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 470462,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 150407,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "264112": [
    {
      "id": 453895,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 405395,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 458003,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 119125,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 407886,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 458675,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 121096,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 112020,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 501896,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 435400,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 435401,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 459939,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 429841,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 116706,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 462405,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 488862,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 518792,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 493247,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 434661,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 136267,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 123790,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 400134,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 445988,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 466320,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 435263,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 117955,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 450665,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "264325": [
    {
      "id": 405395,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 211041,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 407886,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 458675,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 112020,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 501896,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 460022,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 435401,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 434637,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 456422,
      "team": "HOU",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 279827,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 502032,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 150398,
      "team": "HOU",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 433898,
      "team": "HOU",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 430622,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 430565,
      "team": "HOU",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 452254,
      "team": "HOU",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 150324,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 204020,
      "team": "HOU",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 150268,
      "team": "HOU",
      "position": "3B",
      "gamesStarted": null
    }
  ],
  "288175": [
    {
      "id": 453236,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 477569,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 458675,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 112020,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 501896,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 444135,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 435401,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 204020,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 456501,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 453211,
      "team": "CIN",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 457803,
      "team": "CIN",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 458015,
      "team": "CIN",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 121074,
      "team": "CIN",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 408252,
      "team": "CIN",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 121409,
      "team": "CIN",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 150421,
      "team": "CIN",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 430930,
      "team": "CIN",
      "position": "LF",
      "gamesStarted": null
    }
  ],
  "289064": [
    {
      "id": 518614,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 477569,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 405395,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 279577,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 448802,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 519240,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 501896,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 279913,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 460022,
      "team": "STL",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 435400,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 346857,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 204020,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 429841,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 116706,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 456422,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 460008,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 462405,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 518792,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 400134,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 445988,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 462564,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 435263,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 333292,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 117955,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    }
  ],
  "289079": [
    {
      "id": 518614,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 405395,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 279577,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 121125,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 150414,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 449072,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518545,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 435400,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 346857,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 435401,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 136734,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 204020,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 429841,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 116706,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 456422,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 218596,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 462405,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 518792,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 450852,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 424325,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 400134,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 462564,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 333292,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    }
  ],
  "318223": [
    {
      "id": 518614,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 477569,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 279577,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 136860,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 240694,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425794,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 501896,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 460022,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 429841,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 116706,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 456422,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 518792,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 464433,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 545404,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 450852,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543629,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 445988,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 462564,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 435263,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 450665,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "318238": [
    {
      "id": 518614,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 279577,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 458681,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 519240,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 136860,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 449072,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 501896,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 460022,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 488810,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 435401,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 469690,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 204020,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 458924,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 116706,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 456422,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 447714,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 239795,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518792,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 464433,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 450852,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543629,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 424325,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 400134,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 445988,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 462564,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 462102,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 333292,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    }
  ],
  "318645": [
    {
      "id": 477569,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 279577,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 519240,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 136860,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 453203,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 425794,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 518545,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 501896,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 460022,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 459939,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518858,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 452121,
      "team": "CWS",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 458668,
      "team": "CWS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 457477,
      "team": "CWS",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 493351,
      "team": "CWS",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 425567,
      "team": "CWS",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 493596,
      "team": "CWS",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 592665,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 117244,
      "team": "CWS",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 500779,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 430884,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 407861,
      "team": "CWS",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 276055,
      "team": "CWS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 493364,
      "team": "CWS",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 150229,
      "team": "CWS",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 407819,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "318888": [
    {
      "id": 488919,
      "team": "MIL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 455117,
      "team": "MIL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 285131,
      "team": "MIL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 571666,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 460075,
      "team": "MIL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 435459,
      "team": "MIL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 285068,
      "team": "MIL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 430001,
      "team": "MIL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 457422,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 460576,
      "team": "MIL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 448159,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 460579,
      "team": "MIL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 133380,
      "team": "MIL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 493114,
      "team": "MIL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 448170,
      "team": "MIL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 430611,
      "team": "MIL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 452220,
      "team": "AZ",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 430585,
      "team": "AZ",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 407489,
      "team": "AZ",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 431094,
      "team": "AZ",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 471083,
      "team": "AZ",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 467827,
      "team": "AZ",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 446899,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 444520,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 440251,
      "team": "AZ",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 489119,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 457708,
      "team": "AZ",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 543766,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 502671,
      "team": "AZ",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 455759,
      "team": "AZ",
      "position": "CF",
      "gamesStarted": null
    }
  ],
  "318909": [
    {
      "id": 475243,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 425861,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 519203,
      "team": "CHC",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 516770,
      "team": "CHC",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 434567,
      "team": "CHC",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 446381,
      "team": "CHC",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 472528,
      "team": "CHC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 430203,
      "team": "CHC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 542999,
      "team": "CHC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 407862,
      "team": "CHC",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 425557,
      "team": "CHC",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 461791,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 458628,
      "team": "CHC",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 449079,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 444448,
      "team": "HOU",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 460131,
      "team": "HOU",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 476704,
      "team": "HOU",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 434643,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 430965,
      "team": "HOU",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 502110,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 514888,
      "team": "HOU",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 453303,
      "team": "HOU",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 488771,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 502304,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 150324,
      "team": "HOU",
      "position": "1B",
      "gamesStarted": null
    }
  ],
  "318934": [
    {
      "id": 518614,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 477569,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 279577,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 136860,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 453203,
      "team": "STL",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 501896,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 460022,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 446135,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 523260,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 435401,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 451594,
      "team": "COL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 429783,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 279571,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571521,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 340192,
      "team": "COL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 502158,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 501647,
      "team": "COL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 150212,
      "team": "COL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 455126,
      "team": "COL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 458913,
      "team": "COL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 502125,
      "team": "COL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 471865,
      "team": "COL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 468406,
      "team": "COL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 433585,
      "team": "COL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 115732,
      "team": "COL",
      "position": "1B",
      "gamesStarted": null
    }
  ],
  "319404": [
    {
      "id": 518614,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 425794,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 279577,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 501896,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 435400,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 136860,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 459939,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518516,
      "team": "SF",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 340192,
      "team": "SF",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 435078,
      "team": "SF",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 543063,
      "team": "SF",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 207267,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 453923,
      "team": "SF",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 452254,
      "team": "SF",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 516949,
      "team": "SF",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 457763,
      "team": "SF",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425657,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 466320,
      "team": "SF",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 474832,
      "team": "SF",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 433586,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 434636,
      "team": "SF",
      "position": "CF",
      "gamesStarted": null
    }
  ],
  "347300": [
    {
      "id": 518813,
      "team": "KC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 429722,
      "team": "KC",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 521692,
      "team": "KC",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 456714,
      "team": "KC",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 519058,
      "team": "KC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 425796,
      "team": "KC",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 444876,
      "team": "KC",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 460086,
      "team": "KC",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 471107,
      "team": "KC",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 543333,
      "team": "KC",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 525768,
      "team": "KC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 502481,
      "team": "KC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 429664,
      "team": "NYY",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 400085,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 455755,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 150484,
      "team": "NYY",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 493133,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 434624,
      "team": "NYY",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 455126,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 400098,
      "team": "NYY",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 407489,
      "team": "NYY",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 458731,
      "team": "NYY",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 121250,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 502085,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "347779": [
    {
      "id": 459991,
      "team": "PIT",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 501983,
      "team": "PIT",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 434540,
      "team": "PIT",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 474568,
      "team": "PIT",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 502374,
      "team": "PIT",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 457705,
      "team": "PIT",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 476883,
      "team": "PIT",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 458677,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 453343,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 516782,
      "team": "PIT",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 276351,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543037,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 435522,
      "team": "PIT",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 502100,
      "team": "PIT",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 150020,
      "team": "LAD",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 458501,
      "team": "LAD",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 454560,
      "team": "LAD",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 425844,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 444843,
      "team": "LAD",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 543008,
      "team": "LAD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 543148,
      "team": "LAD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 407885,
      "team": "LAD",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 624577,
      "team": "LAD",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 408236,
      "team": "LAD",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 407825,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 434670,
      "team": "LAD",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 346857,
      "team": "LAD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 435401,
      "team": "LAD",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 430613,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "347790": [
    {
      "id": 458006,
      "team": "CLE",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 456422,
      "team": "CLE",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 448602,
      "team": "CLE",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 471911,
      "team": "CLE",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 430605,
      "team": "CLE",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 543766,
      "team": "CLE",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543401,
      "team": "CLE",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 114739,
      "team": "CLE",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 448179,
      "team": "CLE",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 449107,
      "team": "CLE",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 488726,
      "team": "CLE",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 150348,
      "team": "CLE",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 467793,
      "team": "CLE",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 518813,
      "team": "KC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 448306,
      "team": "KC",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 518953,
      "team": "KC",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 460051,
      "team": "KC",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 521692,
      "team": "KC",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 456715,
      "team": "KC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 456714,
      "team": "KC",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 136600,
      "team": "KC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 123173,
      "team": "KC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 519058,
      "team": "KC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 444876,
      "team": "KC",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 460086,
      "team": "KC",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 471107,
      "team": "KC",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 543070,
      "team": "KC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543333,
      "team": "KC",
      "position": "1B",
      "gamesStarted": null
    }
  ],
  "347808": [
    {
      "id": 425783,
      "team": "CIN",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 544371,
      "team": "CIN",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 519023,
      "team": "CIN",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 489197,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 453943,
      "team": "CIN",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 457803,
      "team": "CIN",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 435219,
      "team": "CIN",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 458015,
      "team": "CIN",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 448159,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 446359,
      "team": "CIN",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 408252,
      "team": "CIN",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 502009,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 543331,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 449082,
      "team": "CIN",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 431145,
      "team": "PIT",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 459991,
      "team": "PIT",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 501983,
      "team": "PIT",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 434540,
      "team": "PIT",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 474568,
      "team": "PIT",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 457705,
      "team": "PIT",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 476883,
      "team": "PIT",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 453265,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 453343,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 516782,
      "team": "PIT",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 276351,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 450203,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 435522,
      "team": "PIT",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 502100,
      "team": "PIT",
      "position": "PH",
      "gamesStarted": null
    }
  ],
  "347829": [
    {
      "id": 518902,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 453203,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 518614,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 465629,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 572096,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 136860,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 150414,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 425861,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 519203,
      "team": "CHC",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 516770,
      "team": "CHC",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 474865,
      "team": "CHC",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 453646,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 446381,
      "team": "CHC",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 472528,
      "team": "CHC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 150093,
      "team": "CHC",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 456078,
      "team": "CHC",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 429719,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 453284,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 435220,
      "team": "CHC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 435625,
      "team": "CHC",
      "position": "RF",
      "gamesStarted": null
    }
  ],
  "348187": [
    {
      "id": 434637,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 457477,
      "team": "CWS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 493351,
      "team": "CWS",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 425567,
      "team": "CWS",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 493596,
      "team": "CWS",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 592665,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 493574,
      "team": "CWS",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 489413,
      "team": "CWS",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 408241,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 543569,
      "team": "CWS",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 433898,
      "team": "CWS",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 453264,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 470462,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 493364,
      "team": "CWS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572033,
      "team": "CWS",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 594828,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 519345,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 592743,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 468429,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 460008,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425646,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 430904,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 457708,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 453400,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 502304,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 462564,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 435263,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    }
  ],
  "348313": [
    {
      "id": 453400,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 594828,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 407862,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 519345,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 592743,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 468429,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 518886,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518792,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 462564,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 435263,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 450665,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 457708,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 477229,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 501593,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518902,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 543779,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 477569,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571946,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 595307,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 501896,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 488810,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 519240,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 136860,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    }
  ],
  "348322": [
    {
      "id": 453400,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 594828,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 519345,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 592743,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 275933,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 468429,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 425646,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 502304,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518792,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 462564,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 545404,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 457708,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 477229,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 501593,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 451594,
      "team": "COL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 518934,
      "team": "COL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 572816,
      "team": "COL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 279571,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571448,
      "team": "COL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 446641,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 501647,
      "team": "COL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 453568,
      "team": "COL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 150212,
      "team": "COL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518586,
      "team": "COL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 453064,
      "team": "COL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 466918,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 407822,
      "team": "COL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 489189,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 471865,
      "team": "COL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 467850,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 115732,
      "team": "COL",
      "position": "1B",
      "gamesStarted": null
    }
  ],
  "348331": [
    {
      "id": 453400,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 594828,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 592743,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 622072,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 592239,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 460008,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518792,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 462564,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 435263,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 457708,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 457926,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 451594,
      "team": "COL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 518934,
      "team": "COL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 572816,
      "team": "COL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "COL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 446641,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 501647,
      "team": "COL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 453568,
      "team": "COL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 504379,
      "team": "COL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 150212,
      "team": "COL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 518586,
      "team": "COL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 453064,
      "team": "COL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 471865,
      "team": "COL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 468406,
      "team": "COL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 467850,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 433585,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 115732,
      "team": "COL",
      "position": "1B",
      "gamesStarted": null
    }
  ],
  "348551": [
    {
      "id": 518614,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 543779,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 458681,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 571431,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 518693,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 329092,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 136860,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 518902,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 518545,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 595307,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 465629,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 501896,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 572096,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518911,
      "team": "PIT",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 431145,
      "team": "PIT",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 459991,
      "team": "PIT",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 425549,
      "team": "PIT",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 476570,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543281,
      "team": "PIT",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 434540,
      "team": "PIT",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 474568,
      "team": "PIT",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 150359,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 506997,
      "team": "PIT",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 457705,
      "team": "PIT",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 457768,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 476883,
      "team": "PIT",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 458677,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 453265,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 516782,
      "team": "PIT",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 467798,
      "team": "PIT",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 435522,
      "team": "PIT",
      "position": "2B",
      "gamesStarted": null
    }
  ],
  "348665": [
    {
      "id": 518614,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 571946,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 571431,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 329092,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 136860,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 453203,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 595307,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 465629,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 572096,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 519345,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 592743,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 460008,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 408042,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 527054,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 457708,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 453400,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 457788,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 425834,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 502304,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 471107,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 435263,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 501593,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "349050": [
    {
      "id": 475243,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 519203,
      "team": "CHC",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 516770,
      "team": "CHC",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 425900,
      "team": "CHC",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 467008,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 460131,
      "team": "CHC",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 430906,
      "team": "CHC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 516809,
      "team": "CHC",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 453646,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 446381,
      "team": "CHC",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 472528,
      "team": "CHC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 435220,
      "team": "CHC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 435625,
      "team": "CHC",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 594828,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 592743,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 518792,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 408042,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 457708,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 453400,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 275933,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425834,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 502304,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 462564,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 450665,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    }
  ],
  "380769": [
    {
      "id": 518516,
      "team": "SF",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 518794,
      "team": "SF",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 346793,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 501303,
      "team": "SF",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 435078,
      "team": "SF",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 543063,
      "team": "SF",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 453923,
      "team": "SF",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 434604,
      "team": "SF",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 452254,
      "team": "SF",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 516949,
      "team": "SF",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 457763,
      "team": "SF",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 474832,
      "team": "SF",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 467055,
      "team": "SF",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 433589,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 434636,
      "team": "SF",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 408307,
      "team": "LAD",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 346874,
      "team": "LAD",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 475100,
      "team": "LAD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 461314,
      "team": "LAD",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 445276,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 547943,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 543148,
      "team": "LAD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 624577,
      "team": "LAD",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 543829,
      "team": "LAD",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 408236,
      "team": "LAD",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 451216,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 457759,
      "team": "LAD",
      "position": "SS",
      "gamesStarted": null
    }
  ],
  "380781": [
    {
      "id": 472551,
      "team": "OAK",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 461235,
      "team": "OAK",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 424825,
      "team": "OAK",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 430948,
      "team": "OAK",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 475857,
      "team": "OAK",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 476704,
      "team": "OAK",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 543243,
      "team": "OAK",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 502210,
      "team": "OAK",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518626,
      "team": "OAK",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 519299,
      "team": "OAK",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 502226,
      "team": "OAK",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 493316,
      "team": "OAK",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 444379,
      "team": "OAK",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 451594,
      "team": "HOU",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 514888,
      "team": "HOU",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 474892,
      "team": "HOU",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 518625,
      "team": "HOU",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 458006,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543807,
      "team": "HOU",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 451661,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571868,
      "team": "HOU",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 447744,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 488771,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 518560,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543054,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 542340,
      "team": "HOU",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 461882,
      "team": "HOU",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 543321,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    }
  ],
  "381147": [
    {
      "id": 543779,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 571431,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 488721,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 542994,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 407885,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425509,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 608379,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 572096,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 449079,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 592609,
      "team": "CHC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 519203,
      "team": "CHC",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 466988,
      "team": "CHC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 516770,
      "team": "CHC",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 458085,
      "team": "CHC",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 501888,
      "team": "CHC",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 519166,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 516809,
      "team": "CHC",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 472528,
      "team": "CHC",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 407842,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 434628,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 456078,
      "team": "CHC",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 434633,
      "team": "CHC",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 435625,
      "team": "CHC",
      "position": "PH",
      "gamesStarted": null
    }
  ],
  "381169": [
    {
      "id": 518614,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 571946,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 571431,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 488721,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 329092,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425509,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 593372,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572096,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 594828,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 421685,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 592743,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 460008,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518792,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 457708,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 453400,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 457788,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 425491,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 543629,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 518886,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425834,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 501593,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "381258": [
    {
      "id": 429665,
      "team": "TOR",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 456124,
      "team": "TOR",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 571901,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 476270,
      "team": "TOR",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 447755,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425900,
      "team": "TOR",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 521230,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 607680,
      "team": "TOR",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 408314,
      "team": "TOR",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 466320,
      "team": "TOR",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 446399,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 445163,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543238,
      "team": "TOR",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 430832,
      "team": "TOR",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 543434,
      "team": "TOR",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 431148,
      "team": "OAK",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 461235,
      "team": "OAK",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 424825,
      "team": "OAK",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 519083,
      "team": "OAK",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 430948,
      "team": "OAK",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 476704,
      "team": "OAK",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 502210,
      "team": "OAK",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518626,
      "team": "OAK",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 452035,
      "team": "OAK",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 502226,
      "team": "OAK",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 493316,
      "team": "OAK",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 462382,
      "team": "OAK",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 346857,
      "team": "OAK",
      "position": "2B",
      "gamesStarted": null
    }
  ],
  "381290": [
    {
      "id": 592407,
      "team": "DET",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 400121,
      "team": "DET",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 519445,
      "team": "DET",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 592206,
      "team": "DET",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 571871,
      "team": "DET",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 435079,
      "team": "DET",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 116338,
      "team": "DET",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 457706,
      "team": "DET",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 430603,
      "team": "DET",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 502110,
      "team": "DET",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 150274,
      "team": "DET",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 456379,
      "team": "DET",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 408234,
      "team": "DET",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 461865,
      "team": "DET",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 519175,
      "team": "DET",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 501955,
      "team": "DET",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 434378,
      "team": "DET",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 488671,
      "team": "DET",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 434658,
      "team": "DET",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 455139,
      "team": "TEX",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425783,
      "team": "TEX",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 519048,
      "team": "TEX",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 425567,
      "team": "TEX",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 465657,
      "team": "TEX",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 134181,
      "team": "TEX",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 547982,
      "team": "TEX",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 430906,
      "team": "TEX",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 596059,
      "team": "TEX",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 407890,
      "team": "TEX",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 543726,
      "team": "TEX",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 574831,
      "team": "TEX",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 596143,
      "team": "TEX",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 462101,
      "team": "TEX",
      "position": "SS",
      "gamesStarted": null
    }
  ],
  "381302": [
    {
      "id": 518614,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 571431,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 488721,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 329092,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 453203,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 450212,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425509,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 593372,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 608379,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 572096,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 435400,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 400085,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 453895,
      "team": "NYY",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 476454,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 453056,
      "team": "NYY",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 500208,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 469686,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 501660,
      "team": "NYY",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 502011,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 150093,
      "team": "NYY",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 116539,
      "team": "NYY",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 458731,
      "team": "NYY",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 406878,
      "team": "NYY",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 595032,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 435263,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 407819,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 430637,
      "team": "NYY",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 502085,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "381435": [
    {
      "id": 425560,
      "team": "WSH",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 475582,
      "team": "WSH",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 425785,
      "team": "WSH",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 400089,
      "team": "WSH",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 434661,
      "team": "WSH",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 543685,
      "team": "WSH",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 452655,
      "team": "WSH",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 430668,
      "team": "WSH",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 457787,
      "team": "WSH",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 461325,
      "team": "WSH",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 450729,
      "team": "WSH",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 446653,
      "team": "WSH",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 150029,
      "team": "WSH",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 435623,
      "team": "WSH",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 518617,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 400284,
      "team": "PHI",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 448242,
      "team": "PHI",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 429667,
      "team": "PHI",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 458582,
      "team": "PHI",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 519184,
      "team": "PHI",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 452718,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 460055,
      "team": "PHI",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 408242,
      "team": "PHI",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 276519,
      "team": "PHI",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 518603,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 502126,
      "team": "PHI",
      "position": "LF",
      "gamesStarted": null
    }
  ],
  "381617": [
    {
      "id": 407885,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 518614,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 458681,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 595307,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 425509,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 571431,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 501800,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 488721,
      "team": "STL",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 329092,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 435400,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 110029,
      "team": "NYM",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 112526,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 460003,
      "team": "NYM",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 445968,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 502517,
      "team": "NYM",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 446263,
      "team": "NYM",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 527038,
      "team": "NYM",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 516769,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 458913,
      "team": "NYM",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 431151,
      "team": "NYM",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 434158,
      "team": "NYM",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 455759,
      "team": "NYM",
      "position": "CF",
      "gamesStarted": null
    }
  ],
  "381819": [
    {
      "id": 476633,
      "team": "MIN",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 425545,
      "team": "MIN",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 461833,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 461858,
      "team": "MIN",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 500871,
      "team": "MIN",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 542455,
      "team": "MIN",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 435559,
      "team": "MIN",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 488846,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572821,
      "team": "MIN",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 461872,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 453539,
      "team": "MIN",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 434778,
      "team": "MIN",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 400085,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 453895,
      "team": "NYY",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 476454,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 407893,
      "team": "NYY",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 453056,
      "team": "NYY",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 136860,
      "team": "NYY",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 547888,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 116539,
      "team": "NYY",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 458731,
      "team": "NYY",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 519412,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 435263,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 502085,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "381833": [
    {
      "id": 450282,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 456488,
      "team": "MIN",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 476633,
      "team": "MIN",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 465679,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 573204,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 461858,
      "team": "MIN",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 500871,
      "team": "MIN",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 502272,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 542455,
      "team": "MIN",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 435559,
      "team": "MIN",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 499624,
      "team": "MIN",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 572821,
      "team": "MIN",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 453539,
      "team": "MIN",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 502043,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 434778,
      "team": "MIN",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 400085,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 453895,
      "team": "NYY",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 476454,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 407893,
      "team": "NYY",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 453056,
      "team": "NYY",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 136860,
      "team": "NYY",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 465041,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 453307,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 458731,
      "team": "NYY",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 476589,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 519412,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 406878,
      "team": "NYY",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 595032,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 430637,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 502085,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "381954": [
    {
      "id": 543606,
      "team": "TB",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 407853,
      "team": "TB",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 459964,
      "team": "TB",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 150040,
      "team": "TB",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425766,
      "team": "TB",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 488862,
      "team": "TB",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 502676,
      "team": "TB",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 446334,
      "team": "TB",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 407908,
      "team": "TB",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 450314,
      "team": "TB",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 446386,
      "team": "TB",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 434663,
      "team": "TB",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 446481,
      "team": "TB",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 595281,
      "team": "TB",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 456124,
      "team": "TOR",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 571800,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 476270,
      "team": "TOR",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 518991,
      "team": "TOR",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 425900,
      "team": "TOR",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 464433,
      "team": "TOR",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 445170,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 458675,
      "team": "TOR",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 430681,
      "team": "TOR",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 408314,
      "team": "TOR",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 466320,
      "team": "TOR",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 435045,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 457918,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543238,
      "team": "TOR",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 430832,
      "team": "TOR",
      "position": "1B",
      "gamesStarted": null
    }
  ],
  "382147": [
    {
      "id": 455139,
      "team": "TEX",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425783,
      "team": "TEX",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 425567,
      "team": "TEX",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 425840,
      "team": "TEX",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 451192,
      "team": "TEX",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 134181,
      "team": "TEX",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 547982,
      "team": "TEX",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 596059,
      "team": "TEX",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 407890,
      "team": "TEX",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 491703,
      "team": "TEX",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 450317,
      "team": "TEX",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 543706,
      "team": "TEX",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 489267,
      "team": "TEX",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 462101,
      "team": "TEX",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 453895,
      "team": "NYY",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 452104,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 407893,
      "team": "NYY",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 453056,
      "team": "NYY",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 493133,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 136860,
      "team": "NYY",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 501660,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 465041,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 453307,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 116539,
      "team": "NYY",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 458731,
      "team": "NYY",
      "position": "LF",
      "gamesStarted": null
    }
  ],
  "382165": [
    {
      "id": 407842,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 514888,
      "team": "HOU",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 474892,
      "team": "HOU",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 518625,
      "team": "HOU",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 451661,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571868,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572138,
      "team": "HOU",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 488771,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 448609,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 463610,
      "team": "HOU",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 594772,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 543257,
      "team": "HOU",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 543321,
      "team": "HOU",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 430589,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571800,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 476270,
      "team": "TOR",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 425900,
      "team": "TOR",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 572365,
      "team": "TOR",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 460099,
      "team": "TOR",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 464433,
      "team": "TOR",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 445170,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 592717,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 458675,
      "team": "TOR",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 408314,
      "team": "TOR",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 466320,
      "team": "TOR",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 446399,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 445163,
      "team": "TOR",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543238,
      "team": "TOR",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 502143,
      "team": "TOR",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 430832,
      "team": "TOR",
      "position": "RF",
      "gamesStarted": null
    }
  ],
  "414443": [
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 407793,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 518771,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 448602,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 545341,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 518792,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 445055,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 595307,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425509,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 572096,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 516416,
      "team": "MIL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 425840,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 595386,
      "team": "MIL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 608349,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 467143,
      "team": "MIL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 452252,
      "team": "MIL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 451089,
      "team": "MIL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 460576,
      "team": "MIL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 518960,
      "team": "MIL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 467827,
      "team": "MIL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 519293,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 596143,
      "team": "MIL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 133380,
      "team": "MIL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 519076,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 541650,
      "team": "MIL",
      "position": "3B",
      "gamesStarted": null
    }
  ],
  "414633": [
    {
      "id": 518934,
      "team": "COL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "COL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 460026,
      "team": "COL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 453064,
      "team": "COL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 471865,
      "team": "COL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 452718,
      "team": "COL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 502522,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543184,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 501647,
      "team": "COL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 446099,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 453568,
      "team": "COL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 488681,
      "team": "COL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 457429,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 502374,
      "team": "COL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 501255,
      "team": "COL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 474892,
      "team": "HOU",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 594828,
      "team": "HOU",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 519085,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 605512,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 430589,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 472528,
      "team": "HOU",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 514888,
      "team": "HOU",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 450212,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543807,
      "team": "HOU",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 451661,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 621043,
      "team": "HOU",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 488771,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 503556,
      "team": "HOU",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 545350,
      "team": "HOU",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 491159,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "414648": [
    {
      "id": 518934,
      "team": "COL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 115629,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571448,
      "team": "COL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 571735,
      "team": "COL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 623184,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 453064,
      "team": "COL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 572019,
      "team": "COL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 548357,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 471865,
      "team": "COL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 502522,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 501647,
      "team": "COL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 453568,
      "team": "COL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 488681,
      "team": "COL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 457429,
      "team": "COL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 502374,
      "team": "COL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 501255,
      "team": "COL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 474892,
      "team": "HOU",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 450212,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543807,
      "team": "HOU",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 451661,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 570267,
      "team": "HOU",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 621043,
      "team": "HOU",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 488771,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 448609,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 503556,
      "team": "HOU",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 605512,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 545350,
      "team": "HOU",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 543521,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 472528,
      "team": "HOU",
      "position": "3B",
      "gamesStarted": null
    }
  ],
  "415099": [
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 448602,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 572039,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 545341,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 518792,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 329092,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518902,
      "team": "STL",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 430681,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 595307,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425509,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 593372,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 488810,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 453400,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 455976,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 516811,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 592743,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 571946,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 607054,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 150229,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 611177,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 501593,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 457727,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    }
  ],
  "447516": [
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 544928,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 514913,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 461235,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 621199,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 448802,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 572039,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 545341,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 571431,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 455009,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571757,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518883,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 649557,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 518700,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 516416,
      "team": "AZ",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 456422,
      "team": "AZ",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 456078,
      "team": "AZ",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425844,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 572008,
      "team": "AZ",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 630111,
      "team": "AZ",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 592273,
      "team": "AZ",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 446899,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 605113,
      "team": "AZ",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "AZ",
      "position": "1B",
      "gamesStarted": null
    }
  ],
  "447557": [
    {
      "id": 543779,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 514913,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 461235,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572039,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 545341,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 571431,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 455009,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571757,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 493200,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 649557,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 593372,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 572096,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 576397,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 451594,
      "team": "CHC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 475243,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 519203,
      "team": "CHC",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 624585,
      "team": "CHC",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 595879,
      "team": "CHC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 608365,
      "team": "CHC",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 471083,
      "team": "CHC",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 467008,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 444468,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518792,
      "team": "CHC",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 592178,
      "team": "CHC",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 450314,
      "team": "CHC",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 518748,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 600303,
      "team": "CHC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 453562,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 476589,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 519333,
      "team": "CHC",
      "position": "PH",
      "gamesStarted": null
    }
  ],
  "447893": [
    {
      "id": 120074,
      "team": "BOS",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 519144,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 547749,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543768,
      "team": "BOS",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 605141,
      "team": "BOS",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518886,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 456030,
      "team": "BOS",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 593428,
      "team": "BOS",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 598265,
      "team": "BOS",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 493157,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 434670,
      "team": "BOS",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 543877,
      "team": "BOS",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 455759,
      "team": "BOS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 429664,
      "team": "SEA",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 572122,
      "team": "SEA",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 606466,
      "team": "SEA",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 547982,
      "team": "SEA",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 592716,
      "team": "SEA",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 452252,
      "team": "SEA",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 429711,
      "team": "SEA",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 502182,
      "team": "SEA",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 452234,
      "team": "SEA",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 443558,
      "team": "SEA",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 493114,
      "team": "SEA",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 543557,
      "team": "SEA",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "447898": [
    {
      "id": 624424,
      "team": "NYM",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 457477,
      "team": "NYM",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 425766,
      "team": "NYM",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 455374,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 594798,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 570663,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571841,
      "team": "NYM",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 493316,
      "team": "NYM",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 608700,
      "team": "NYM",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 452678,
      "team": "NYM",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 434158,
      "team": "NYM",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 435522,
      "team": "NYM",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 527038,
      "team": "NYM",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 455976,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 607054,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 488818,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 430947,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 542255,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 527054,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 425796,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 605480,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 452095,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    }
  ],
  "448403": [
    {
      "id": 455976,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 493596,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 607054,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 488818,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 571871,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 430947,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 542255,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 611177,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 592433,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 606291,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 462382,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 150229,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 592826,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 429667,
      "team": "PHI",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 571437,
      "team": "PHI",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 593576,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 595963,
      "team": "PHI",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 571830,
      "team": "PHI",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 596748,
      "team": "PHI",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 519237,
      "team": "PHI",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 520471,
      "team": "PHI",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 605125,
      "team": "PHI",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 517370,
      "team": "PHI",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 591693,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 546318,
      "team": "PHI",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 514917,
      "team": "PHI",
      "position": "2B",
      "gamesStarted": null
    }
  ],
  "448418": [
    {
      "id": 455976,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 493596,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 607054,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 447714,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571871,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 430947,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 542255,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 621408,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 527054,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 542432,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 611177,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 489232,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 543901,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425796,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 474319,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 543017,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 476451,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 429667,
      "team": "PHI",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 571437,
      "team": "PHI",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 595963,
      "team": "PHI",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 596748,
      "team": "PHI",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 519237,
      "team": "PHI",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 520471,
      "team": "PHI",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 605894,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 605125,
      "team": "PHI",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 491646,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 517370,
      "team": "PHI",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 591693,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 605227,
      "team": "PHI",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 546318,
      "team": "PHI",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 514917,
      "team": "PHI",
      "position": "2B",
      "gamesStarted": null
    }
  ],
  "448503": [
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 461235,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 572039,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 407812,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 594824,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 571431,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 502054,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 451705,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 455009,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571757,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 425532,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 595307,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425509,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 593372,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 435043,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 576397,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 455976,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 606291,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 461314,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 607054,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 488818,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 447714,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571871,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 150229,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 430947,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 433584,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 542255,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 542432,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 611177,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    }
  ],
  "490907": [
    {
      "id": 451594,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 621199,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572039,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 594824,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 502054,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 657557,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 425794,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 493200,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 649557,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 425509,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 572096,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 576397,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 400284,
      "team": "LAD",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 621035,
      "team": "LAD",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 518735,
      "team": "LAD",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 605131,
      "team": "LAD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 571771,
      "team": "LAD",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 608369,
      "team": "LAD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 523253,
      "team": "LAD",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 594795,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 453344,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518649,
      "team": "LAD",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 624577,
      "team": "LAD",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 451661,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 641355,
      "team": "LAD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 408236,
      "team": "LAD",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 435221,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 489265,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "491139": [
    {
      "id": 519346,
      "team": "MIL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 444489,
      "team": "MIL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 542979,
      "team": "MIL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 543768,
      "team": "MIL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 621446,
      "team": "MIL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 519299,
      "team": "MIL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 606115,
      "team": "MIL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 519076,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 541650,
      "team": "MIL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 620443,
      "team": "SD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 500208,
      "team": "SD",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 592669,
      "team": "SD",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 642707,
      "team": "SD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 489334,
      "team": "SD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 430947,
      "team": "SD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 614173,
      "team": "SD",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 571976,
      "team": "SD",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 519333,
      "team": "SD",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 606131,
      "team": "SD",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 605486,
      "team": "SD",
      "position": "3B",
      "gamesStarted": null
    }
  ],
  "491274": [
    {
      "id": 571602,
      "team": "CWS",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 591994,
      "team": "CWS",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 607074,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 553882,
      "team": "CWS",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 573589,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 570560,
      "team": "CWS",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 571476,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 547989,
      "team": "CWS",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 502593,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 453943,
      "team": "CWS",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 541645,
      "team": "CWS",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 641313,
      "team": "CWS",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 593700,
      "team": "CWS",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 641553,
      "team": "CWS",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 466320,
      "team": "CWS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 543359,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 452104,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 592741,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 519222,
      "team": "NYY",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 592450,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 547888,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 609280,
      "team": "NYY",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 643778,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 458731,
      "team": "NYY",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 642180,
      "team": "NYY",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 643338,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 591720,
      "team": "NYY",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 596142,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 544369,
      "team": "NYY",
      "position": "SS",
      "gamesStarted": null
    }
  ],
  "491431": [
    {
      "id": 429664,
      "team": "SEA",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 516416,
      "team": "SEA",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 571745,
      "team": "SEA",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 592325,
      "team": "SEA",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572122,
      "team": "SEA",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 519240,
      "team": "SEA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 434563,
      "team": "SEA",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 543883,
      "team": "SEA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543964,
      "team": "SEA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 621242,
      "team": "SEA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 443558,
      "team": "SEA",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 502481,
      "team": "SEA",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 433587,
      "team": "SEA",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 502143,
      "team": "SEA",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 595144,
      "team": "OAK",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 605254,
      "team": "OAK",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 476704,
      "team": "OAK",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 656305,
      "team": "OAK",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 543760,
      "team": "OAK",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 501981,
      "team": "OAK",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 448281,
      "team": "OAK",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425492,
      "team": "OAK",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 459964,
      "team": "OAK",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 622194,
      "team": "OAK",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 475174,
      "team": "OAK",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 592387,
      "team": "OAK",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 446099,
      "team": "OAK",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543056,
      "team": "OAK",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 434658,
      "team": "OAK",
      "position": "RF",
      "gamesStarted": null
    }
  ],
  "491869": [
    {
      "id": 476454,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 452104,
      "team": "NYY",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 458731,
      "team": "NYY",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 642180,
      "team": "NYY",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 643338,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 591720,
      "team": "NYY",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 570666,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 596142,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 592450,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 502085,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543305,
      "team": "NYY",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 453943,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 544369,
      "team": "NYY",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 642086,
      "team": "NYM",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 425784,
      "team": "NYM",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 624424,
      "team": "NYM",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 606160,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 570663,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 493316,
      "team": "NYM",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 642708,
      "team": "NYM",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 460283,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 592340,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 452678,
      "team": "NYM",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 434158,
      "team": "NYM",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 501571,
      "team": "NYM",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 527038,
      "team": "NYM",
      "position": "3B",
      "gamesStarted": null
    }
  ],
  "530206": [
    {
      "id": 622666,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 455976,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 475247,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 518693,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 641438,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 605512,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 542255,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 435559,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 518586,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 452095,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 621020,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 608331,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 592145,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 624424,
      "team": "NYM",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 641645,
      "team": "NYM",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 642708,
      "team": "NYM",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 519023,
      "team": "NYM",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 452678,
      "team": "NYM",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 457803,
      "team": "NYM",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 594798,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 408236,
      "team": "NYM",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 607043,
      "team": "NYM",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 607625,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 430832,
      "team": "NYM",
      "position": "LF",
      "gamesStarted": null
    }
  ],
  "530340": [
    {
      "id": 451594,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 622168,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 571945,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 594824,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 572228,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 500874,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 663855,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 576397,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 506747,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 502032,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 502054,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 542303,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 592407,
      "team": "MIA",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 518618,
      "team": "MIA",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 656738,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 594027,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571506,
      "team": "MIA",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 516770,
      "team": "MIA",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 605119,
      "team": "MIA",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 543045,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 670950,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 621446,
      "team": "MIA",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 595375,
      "team": "MIA",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 592680,
      "team": "MIA",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 446899,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 500743,
      "team": "MIA",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 543776,
      "team": "MIA",
      "position": "PH",
      "gamesStarted": null
    }
  ],
  "530623": [
    {
      "id": 518813,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 622168,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 571945,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 594824,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 500874,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 502054,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 596295,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 594577,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 664056,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 663855,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 576397,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 446399,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 542303,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 622666,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 455976,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 475247,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 592426,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 493247,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 595465,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 542255,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 527054,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 542454,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 435559,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 621345,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 660670,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 452095,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 621020,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 592145,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "530638": [
    {
      "id": 451594,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 622168,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 594824,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 605154,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 596133,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 500874,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 502032,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 502054,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 596295,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 664056,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 576397,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 506747,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 446399,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 542303,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 622666,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 455976,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 475247,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 518693,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 542255,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 542454,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 605538,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 435559,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 660670,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 621020,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 608331,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    }
  ],
  "531451": [
    {
      "id": 622168,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 621550,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 594824,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 596133,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 571431,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 500874,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 608348,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 641933,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 641712,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 502032,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 657557,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 643778,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 664056,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 593372,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 666969,
      "team": "STL",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 608678,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 506747,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 446399,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 542303,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 453172,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 593974,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 592863,
      "team": "CIN",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 571466,
      "team": "CIN",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 594988,
      "team": "CIN",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 640447,
      "team": "CIN",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 543101,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 458015,
      "team": "CIN",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 553993,
      "team": "CIN",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 608371,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571697,
      "team": "CIN",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 628452,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 606299,
      "team": "CIN",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 547179,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571740,
      "team": "CIN",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 592200,
      "team": "CIN",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 641525,
      "team": "CIN",
      "position": "RF",
      "gamesStarted": null
    }
  ],
  "566592": [
    {
      "id": 451594,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 571945,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 605154,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 500874,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 606149,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 657557,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 643778,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 664056,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 542303,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 455976,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 595465,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518626,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 660670,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 518586,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 592314,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 621020,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 656794,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 460283,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 435263,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 461872,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "566640": [
    {
      "id": 451594,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 543939,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 607231,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 605154,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 656427,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 657557,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 669242,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 643778,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 664056,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 658551,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 542303,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 518735,
      "team": "MIL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 669374,
      "team": "MIL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 621438,
      "team": "MIL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 519346,
      "team": "MIL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 623352,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 460075,
      "team": "MIL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 519141,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 456715,
      "team": "MIL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 571679,
      "team": "MIL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 519058,
      "team": "MIL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 448855,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 605486,
      "team": "MIL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 606115,
      "team": "MIL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 663757,
      "team": "MIL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 543351,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543475,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 1
    }
  ],
  "633604": [
    {
      "id": 465657,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 668942,
      "team": "AZ",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 573009,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 500871,
      "team": "AZ",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 605113,
      "team": "AZ",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 606466,
      "team": "AZ",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 608348,
      "team": "AZ",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 592233,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 545121,
      "team": "AZ",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 452678,
      "team": "AZ",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 444482,
      "team": "AZ",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572233,
      "team": "AZ",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 598287,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 592761,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 669257,
      "team": "LAD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 621035,
      "team": "LAD",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 405395,
      "team": "LAD",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 519306,
      "team": "LAD",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 572041,
      "team": "LAD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 542992,
      "team": "LAD",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 445276,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 666158,
      "team": "LAD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 605141,
      "team": "LAD",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 519076,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 545333,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 457759,
      "team": "LAD",
      "position": "3B",
      "gamesStarted": null
    }
  ],
  "633594": [
    {
      "id": 641680,
      "team": "TEX",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 669256,
      "team": "TEX",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 663993,
      "team": "TEX",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 667463,
      "team": "TEX",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 643396,
      "team": "TEX",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 518586,
      "team": "TEX",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 624431,
      "team": "TEX",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 641432,
      "team": "TEX",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 642201,
      "team": "TEX",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 663465,
      "team": "TEX",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 641829,
      "team": "TEX",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 608336,
      "team": "TEX",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 666969,
      "team": "TEX",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 517008,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 592743,
      "team": "MIN",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 573204,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 593934,
      "team": "MIN",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 680777,
      "team": "MIN",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 570663,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 443558,
      "team": "MIN",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 573124,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 596146,
      "team": "MIN",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 663616,
      "team": "MIN",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 593871,
      "team": "MIN",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 650333,
      "team": "MIN",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 677976,
      "team": "MIN",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 621439,
      "team": "MIN",
      "position": "CF",
      "gamesStarted": null
    }
  ],
  "633032": [
    {
      "id": 666185,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 663457,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 624641,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 519008,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 641933,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 452657,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 602922,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 669242,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 664056,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 502522,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 472610,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 594807,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 624585,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 445926,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 592626,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 628338,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 650828,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 621020,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 608331,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 607345,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 501659,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 458708,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "633043": [
    {
      "id": 666185,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 621052,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 624641,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 668800,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 453192,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 606149,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 641933,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 657557,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 602922,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 669242,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 453281,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 664056,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 502522,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 650893,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 594807,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 624585,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 445926,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 592626,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 501303,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 593144,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 657053,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 628338,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 650828,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 621020,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 519293,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 607345,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 519390,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    }
  ],
  "632794": [
    {
      "id": 571448,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 621052,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663457,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 624641,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 641933,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 657557,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 669242,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 425794,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 664056,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 668804,
      "team": "PIT",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 592325,
      "team": "PIT",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 592567,
      "team": "PIT",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 570256,
      "team": "PIT",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 607455,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 664918,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663647,
      "team": "PIT",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 594694,
      "team": "PIT",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 643230,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 621028,
      "team": "PIT",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 660294,
      "team": "PIT",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 683232,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 605421,
      "team": "PIT",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 660829,
      "team": "PIT",
      "position": "2B",
      "gamesStarted": null
    }
  ],
  "632559": [
    {
      "id": 544725,
      "team": "CWS",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 518735,
      "team": "CWS",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 660162,
      "team": "CWS",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 607074,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 521230,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 547989,
      "team": "CWS",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 657757,
      "team": "CWS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 676979,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571718,
      "team": "CWS",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 656629,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 607481,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518886,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 650391,
      "team": "CWS",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 571740,
      "team": "CWS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572193,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 514917,
      "team": "CWS",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 673357,
      "team": "CWS",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 592669,
      "team": "BOS",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 593140,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 578428,
      "team": "BOS",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 571771,
      "team": "BOS",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 493603,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 650382,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 657077,
      "team": "BOS",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 657031,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 666915,
      "team": "BOS",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 542454,
      "team": "BOS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 656941,
      "team": "BOS",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 543768,
      "team": "BOS",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 646240,
      "team": "BOS",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 593428,
      "team": "BOS",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 518489,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 656557,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 543877,
      "team": "BOS",
      "position": "C",
      "gamesStarted": null
    }
  ],
  "632379": [
    {
      "id": 674944,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 669432,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 650559,
      "team": "MIA",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 657193,
      "team": "MIA",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 592865,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 542914,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 621446,
      "team": "MIA",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 663743,
      "team": "MIA",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 642423,
      "team": "MIA",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 665862,
      "team": "MIA",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 660821,
      "team": "MIA",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 500743,
      "team": "MIA",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 656577,
      "team": "MIA",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 650331,
      "team": "MIA",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 666168,
      "team": "WSH",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 605137,
      "team": "WSH",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 474568,
      "team": "WSH",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 600921,
      "team": "WSH",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 642028,
      "team": "WSH",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 664057,
      "team": "WSH",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 665742,
      "team": "WSH",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 444876,
      "team": "WSH",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 628450,
      "team": "WSH",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 660688,
      "team": "WSH",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 657041,
      "team": "WSH",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 671277,
      "team": "WSH",
      "position": "2B",
      "gamesStarted": null
    }
  ],
  "660910": [
    {
      "id": 594807,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 666120,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 554431,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 624585,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 518595,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 592426,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 501303,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 518692,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 621345,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 628338,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 592696,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 621020,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 519293,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 642350,
      "team": "HOU",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 642130,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 455117,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 663656,
      "team": "HOU",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 608324,
      "team": "HOU",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 608665,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 493329,
      "team": "HOU",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 514888,
      "team": "HOU",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 554340,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 592773,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 488726,
      "team": "HOU",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 649557,
      "team": "HOU",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 621043,
      "team": "HOU",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 488771,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 677651,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 503556,
      "team": "HOU",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 548384,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 670541,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    }
  ],
  "663146": [
    {
      "id": 663611,
      "team": "CHC",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 643524,
      "team": "CHC",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 664023,
      "team": "CHC",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 641684,
      "team": "CHC",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 596057,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518792,
      "team": "CHC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 543228,
      "team": "CHC",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 673548,
      "team": "CHC",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 573186,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 542340,
      "team": "CHC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 663538,
      "team": "CHC",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 542364,
      "team": "CHC",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 621433,
      "team": "TB",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 670764,
      "team": "TB",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 664040,
      "team": "TB",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 642336,
      "team": "TB",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 668227,
      "team": "TB",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 596847,
      "team": "TB",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 656222,
      "team": "TB",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 595281,
      "team": "TB",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 666139,
      "team": "TB",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 677551,
      "team": "TB",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 656876,
      "team": "TB",
      "position": "P",
      "gamesStarted": 1
    }
  ],
  "661982": [
    {
      "id": 572816,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 663457,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 624641,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 668800,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 621295,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 641712,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 676831,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 669242,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 680977,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 664056,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 572403,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 660766,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 640492,
      "team": "SD",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 429664,
      "team": "SD",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 622503,
      "team": "SD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 595777,
      "team": "SD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 506433,
      "team": "SD",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 592518,
      "team": "SD",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 572228,
      "team": "SD",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 663757,
      "team": "SD",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 630105,
      "team": "SD",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 673490,
      "team": "SD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 543592,
      "team": "SD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 543333,
      "team": "SD",
      "position": "1B",
      "gamesStarted": null
    }
  ],
  "663239": [
    {
      "id": 575929,
      "team": "CHC",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 666624,
      "team": "CHC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 592743,
      "team": "CHC",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 664023,
      "team": "CHC",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 664123,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518792,
      "team": "CHC",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 663845,
      "team": "CHC",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 592858,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 542340,
      "team": "CHC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 663538,
      "team": "CHC",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 542364,
      "team": "CHC",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 455119,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 657006,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 594807,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 671739,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 543521,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 672911,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 660670,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 661388,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 621020,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 606115,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 657140,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 542303,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    }
  ],
  "661948": [
    {
      "id": 666185,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 663457,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 676050,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 641933,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 657557,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 669242,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 425794,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 680977,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 664854,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 663855,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 608717,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518934,
      "team": "NYY",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 642152,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 656061,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 593974,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 664123,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572761,
      "team": "NYY",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 592450,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 642528,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543305,
      "team": "NYY",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 518626,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 650402,
      "team": "NYY",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 593423,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 643217,
      "team": "NYY",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 624431,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 503556,
      "team": "NYY",
      "position": "SS",
      "gamesStarted": null
    }
  ],
  "661939": [
    {
      "id": 669357,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 572816,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 666185,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 405395,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 663457,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 668800,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 668941,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 641933,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 657557,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 669242,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 680977,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 664854,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 425877,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 663855,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 656756,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 671739,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 518595,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 445276,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543521,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 621345,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 687093,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 628338,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 592696,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 661388,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 628452,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 621020,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 543257,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 450203,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    }
  ],
  "663130": [
    {
      "id": 656716,
      "team": "CHC",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 666624,
      "team": "CHC",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 664023,
      "team": "CHC",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 621550,
      "team": "CHC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 669713,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663845,
      "team": "CHC",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 489119,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 543228,
      "team": "CHC",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 673548,
      "team": "CHC",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 592858,
      "team": "CHC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 664731,
      "team": "CHC",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 623520,
      "team": "CHC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 663538,
      "team": "CHC",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 542364,
      "team": "CHC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 614177,
      "team": "CHC",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 676369,
      "team": "CHC",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 628708,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 670768,
      "team": "SF",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 663698,
      "team": "SF",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 518397,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 642731,
      "team": "SF",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 621573,
      "team": "SF",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 605154,
      "team": "SF",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 681584,
      "team": "SF",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 527038,
      "team": "SF",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 621446,
      "team": "SF",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 643511,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 641793,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 666808,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 605204,
      "team": "SF",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 446334,
      "team": "SF",
      "position": "3B",
      "gamesStarted": null
    }
  ],
  "717650": [
    {
      "id": 682829,
      "team": "CIN",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 663697,
      "team": "CIN",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 641584,
      "team": "CIN",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 622065,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 596133,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 680574,
      "team": "CIN",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 650960,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 670770,
      "team": "CIN",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 458015,
      "team": "CIN",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 668715,
      "team": "CIN",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 664139,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571912,
      "team": "CIN",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 663886,
      "team": "CIN",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 608371,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571656,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 664747,
      "team": "CIN",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 700363,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 671739,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 621294,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518595,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 656541,
      "team": "ATL",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 543521,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 660670,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 592696,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 641729,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 606115,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 489446,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 542303,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    }
  ],
  "717296": [
    {
      "id": 592885,
      "team": "MIL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 608385,
      "team": "MIL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 686217,
      "team": "MIL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 606303,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 642207,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 655316,
      "team": "MIL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 680911,
      "team": "MIL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 663368,
      "team": "MIL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 665625,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 661388,
      "team": "MIL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 668930,
      "team": "MIL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 605288,
      "team": "MIL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 642715,
      "team": "MIL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 543859,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 671739,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 642216,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 543521,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 669221,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 660670,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 592696,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 641729,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 606115,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 657088,
      "team": "ATL",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 542303,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    }
  ],
  "717267": [
    {
      "id": 628708,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 669016,
      "team": "PHI",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 547180,
      "team": "PHI",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 592663,
      "team": "PHI",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 592206,
      "team": "PHI",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 664761,
      "team": "PHI",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 681082,
      "team": "PHI",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 656941,
      "team": "PHI",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 592836,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 621381,
      "team": "PHI",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 679032,
      "team": "PHI",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 607208,
      "team": "PHI",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 624428,
      "team": "BAL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 660261,
      "team": "BAL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 683002,
      "team": "BAL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 622761,
      "team": "BAL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 623993,
      "team": "BAL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 663630,
      "team": "BAL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 663624,
      "team": "BAL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 668939,
      "team": "BAL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 676059,
      "team": "BAL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 669720,
      "team": "BAL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 666974,
      "team": "BAL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 681297,
      "team": "BAL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 502043,
      "team": "BAL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 656811,
      "team": "BAL",
      "position": "1B",
      "gamesStarted": null
    }
  ],
  "717237": [
    {
      "id": 624428,
      "team": "BAL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 660261,
      "team": "BAL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 683002,
      "team": "BAL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 623993,
      "team": "BAL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 663624,
      "team": "BAL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 668939,
      "team": "BAL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 680570,
      "team": "BAL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 669720,
      "team": "BAL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 602104,
      "team": "BAL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 642585,
      "team": "BAL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 666974,
      "team": "BAL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 681297,
      "team": "BAL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 543056,
      "team": "BAL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 656811,
      "team": "BAL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 518934,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 650633,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 666163,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 519203,
      "team": "NYY",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 593974,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 641343,
      "team": "NYY",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 592450,
      "team": "NYY",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 641856,
      "team": "NYY",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 543309,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 650402,
      "team": "NYY",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 592454,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 683011,
      "team": "NYY",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 664056,
      "team": "NYY",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 519317,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 543037,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 1
    }
  ],
  "747143": [
    {
      "id": 594807,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 675911,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 671739,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 572955,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518595,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 445926,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 660670,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 607481,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 628452,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 641729,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 606115,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 657088,
      "team": "ATL",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 672284,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 542303,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 543518,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 607054,
      "team": "AZ",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 573009,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 592626,
      "team": "AZ",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 664983,
      "team": "AZ",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 656464,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 674072,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 606466,
      "team": "AZ",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 677942,
      "team": "AZ",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 672515,
      "team": "AZ",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 553993,
      "team": "AZ",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 682998,
      "team": "AZ",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 666971,
      "team": "AZ",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 572233,
      "team": "AZ",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 612434,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 657044,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "745183": [
    {
      "id": 669357,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 575929,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 663457,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 665877,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 458681,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 681676,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 668941,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 672279,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 680977,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 664854,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 552640,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 671056,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 621051,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 682868,
      "team": "CWS",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 686676,
      "team": "CWS",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 669699,
      "team": "CWS",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 605154,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 683734,
      "team": "CWS",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 502054,
      "team": "CWS",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 670032,
      "team": "CWS",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 657757,
      "team": "CWS",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 657557,
      "team": "CWS",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 657612,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 656629,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 643217,
      "team": "CWS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 673929,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 621383,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 607200,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 650391,
      "team": "CWS",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 608678,
      "team": "CWS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543257,
      "team": "CWS",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 542364,
      "team": "CWS",
      "position": "CF",
      "gamesStarted": null
    }
  ],
  "745168": [
    {
      "id": 669357,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 666185,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 688297,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571448,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 665877,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 458681,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 681676,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 672279,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 667463,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 669461,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 686780,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 680977,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 552640,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 518735,
      "team": "PIT",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 668804,
      "team": "PIT",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 665833,
      "team": "PIT",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 642133,
      "team": "PIT",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 658668,
      "team": "PIT",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 663647,
      "team": "PIT",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 669707,
      "team": "PIT",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 677865,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 656605,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 642701,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572191,
      "team": "PIT",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 669261,
      "team": "PIT",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 676702,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "745163": [
    {
      "id": 669357,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 666185,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 681517,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571945,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 665877,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 681676,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 668941,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 672279,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 686780,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 680977,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 624424,
      "team": "SF",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 671218,
      "team": "SF",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 624585,
      "team": "SF",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 642731,
      "team": "SF",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 592426,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 681584,
      "team": "SF",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 672275,
      "team": "SF",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 656305,
      "team": "SF",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 702352,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 689172,
      "team": "SF",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 663546,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 682641,
      "team": "SF",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 663855,
      "team": "SF",
      "position": "P",
      "gamesStarted": 1
    }
  ],
  "745160": [
    {
      "id": 669357,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 666185,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 575929,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 458681,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 681676,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 543063,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 672279,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 680977,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 664854,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 594807,
      "team": "ATL",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 518595,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 680885,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 670097,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 657656,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 669221,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 607481,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 606115,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 657088,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 672284,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 542303,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 678226,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "745157": [
    {
      "id": 669357,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 666185,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 575929,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 681517,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 665877,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 572761,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 606149,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543063,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 672279,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 667463,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 680977,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 502043,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 669276,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572955,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 670097,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 657656,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 669221,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 625643,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 628452,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 641729,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 657088,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 672284,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 542303,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    }
  ],
  "745158": [
    {
      "id": 669357,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 666185,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 575929,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 688297,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571448,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 668941,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 672279,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 669461,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 686780,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 680977,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 664854,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 552640,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 594807,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 663897,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 518595,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 670097,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 657656,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 669221,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 656550,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 672284,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 693821,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 542303,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    }
  ],
  "777456": [
    {
      "id": 622663,
      "team": "ATH",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 649966,
      "team": "ATH",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 667670,
      "team": "ATH",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 642851,
      "team": "ATH",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 621053,
      "team": "ATH",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 680474,
      "team": "ATH",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 570482,
      "team": "ATH",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 691777,
      "team": "ATH",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 672016,
      "team": "ATH",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 701762,
      "team": "ATH",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 663687,
      "team": "ATH",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 656794,
      "team": "ATH",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 668709,
      "team": "ATH",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 805779,
      "team": "ATH",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 664285,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 694376,
      "team": "HOU",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 670623,
      "team": "HOU",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 669450,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 641645,
      "team": "HOU",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 605170,
      "team": "HOU",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 701358,
      "team": "HOU",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 643289,
      "team": "HOU",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 676694,
      "team": "HOU",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 514888,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 665161,
      "team": "HOU",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 681869,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663321,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572233,
      "team": "HOU",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 673237,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    }
  ],
  "777426": [
    {
      "id": 455117,
      "team": "SD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 688158,
      "team": "SD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 593974,
      "team": "SD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 578428,
      "team": "SD",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 592094,
      "team": "SD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 670092,
      "team": "SD",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 663604,
      "team": "SD",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 657757,
      "team": "SD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 592518,
      "team": "SD",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 601713,
      "team": "SD",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 642180,
      "team": "SD",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 669308,
      "team": "SD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 665487,
      "team": "SD",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 593428,
      "team": "SD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 553869,
      "team": "SD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 630105,
      "team": "SD",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 650333,
      "team": "SD",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 666023,
      "team": "KC",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 663697,
      "team": "KC",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 686475,
      "team": "KC",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 521692,
      "team": "KC",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 679845,
      "team": "KC",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 670231,
      "team": "KC",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 671221,
      "team": "KC",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 668674,
      "team": "KC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 608032,
      "team": "KC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 686469,
      "team": "KC",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 664728,
      "team": "KC",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 547179,
      "team": "KC",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 672580,
      "team": "KC",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 672582,
      "team": "KC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 695506,
      "team": "KC",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 674444,
      "team": "KC",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 677951,
      "team": "KC",
      "position": "SS",
      "gamesStarted": null
    }
  ],
  "777414": [
    {
      "id": 650859,
      "team": "LAA",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 672569,
      "team": "LAA",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 695681,
      "team": "LAA",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 687263,
      "team": "LAA",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 593576,
      "team": "LAA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 667755,
      "team": "LAA",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 621493,
      "team": "LAA",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 545361,
      "team": "LAA",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 666176,
      "team": "LAA",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 696147,
      "team": "LAA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 621028,
      "team": "LAA",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 694384,
      "team": "LAA",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 664774,
      "team": "LAA",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 681351,
      "team": "LAA",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 694376,
      "team": "HOU",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 670623,
      "team": "HOU",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 669450,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 641645,
      "team": "HOU",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 605170,
      "team": "HOU",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 701358,
      "team": "HOU",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 687888,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 643289,
      "team": "HOU",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 676694,
      "team": "HOU",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 672391,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663967,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 514888,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 665161,
      "team": "HOU",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 663321,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 572233,
      "team": "HOU",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 673237,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    }
  ],
  "777398": [
    {
      "id": 676508,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 642152,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 624424,
      "team": "LAD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 687221,
      "team": "LAD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 681911,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571771,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 571970,
      "team": "LAD",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 607455,
      "team": "LAD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 518692,
      "team": "LAD",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 808975,
      "team": "LAD",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 669242,
      "team": "LAD",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 660271,
      "team": "LAD",
      "position": "DH",
      "gamesStarted": 1
    },
    {
      "id": 681624,
      "team": "LAD",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 605141,
      "team": "LAD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 500743,
      "team": "LAD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 691781,
      "team": "WSH",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 678606,
      "team": "WSH",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 682928,
      "team": "WSH",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 663993,
      "team": "WSH",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 642708,
      "team": "WSH",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 605137,
      "team": "WSH",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 669371,
      "team": "WSH",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 695734,
      "team": "WSH",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 695578,
      "team": "WSH",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 702795,
      "team": "WSH",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 647336,
      "team": "WSH",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 696285,
      "team": "WSH",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 669743,
      "team": "WSH",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 660688,
      "team": "WSH",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 671131,
      "team": "WSH",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 671277,
      "team": "WSH",
      "position": "2B",
      "gamesStarted": null
    }
  ],
  "777147": [
    {
      "id": 669357,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 694335,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 687363,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 575929,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 663457,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 665877,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 668941,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 695336,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 676617,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 650968,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 669461,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 686780,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 680977,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 664208,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 669397,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 671739,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 572955,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 606160,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663897,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 595777,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 660853,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 686948,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 669221,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 660670,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 680735,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 628452,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 656550,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    }
  ],
  "777118": [
    {
      "id": 687363,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 575929,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 571927,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 665877,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 700669,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 543243,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 695336,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 676617,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 686780,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 680977,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 664854,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 671056,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 669397,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 671739,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 663897,
      "team": "ATL",
      "position": "PR",
      "gamesStarted": null
    },
    {
      "id": 595777,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 445926,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 593833,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 686948,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 669221,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 805373,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 660670,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 669721,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 542303,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    }
  ],
  "777023": [
    {
      "id": 691023,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 687363,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 575929,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 668941,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 641658,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 543243,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 676617,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 686780,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 680977,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 664854,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 664208,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 671056,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 673513,
      "team": "SD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 455117,
      "team": "SD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 593974,
      "team": "SD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 701538,
      "team": "SD",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 578428,
      "team": "SD",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 506433,
      "team": "SD",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 669093,
      "team": "SD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 657757,
      "team": "SD",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 592518,
      "team": "SD",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 665487,
      "team": "SD",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 669369,
      "team": "SD",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 593428,
      "team": "SD",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 553869,
      "team": "SD",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 606996,
      "team": "SD",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 630105,
      "team": "SD",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 650333,
      "team": "SD",
      "position": "1B",
      "gamesStarted": null
    }
  ],
  "776416": [
    {
      "id": 669357,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 694335,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691023,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 701675,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 687363,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 663457,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 665877,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 668941,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543243,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 695336,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 676617,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 686780,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 671056,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 669477,
      "team": "SF",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 671218,
      "team": "SF",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 678906,
      "team": "SF",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 668800,
      "team": "SF",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 676130,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 672275,
      "team": "SF",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 656305,
      "team": "SF",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 527038,
      "team": "SF",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 702352,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 642086,
      "team": "SF",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 687551,
      "team": "SF",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 808982,
      "team": "SF",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 646240,
      "team": "SF",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 666711,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 683766,
      "team": "SF",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 642715,
      "team": "SF",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 657424,
      "team": "SF",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "823059": [
    {
      "id": 669357,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 691023,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 701675,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 687363,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 700669,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 668941,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 802139,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 695336,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 676617,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 666277,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 669461,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 686780,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 592773,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 693409,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 671056,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 687462,
      "team": "PIT",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 664040,
      "team": "PIT",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 682848,
      "team": "PIT",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 668804,
      "team": "PIT",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 665833,
      "team": "PIT",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 681895,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 642397,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 682254,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 669707,
      "team": "PIT",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 663968,
      "team": "PIT",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 656605,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 691373,
      "team": "PIT",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 680779,
      "team": "PIT",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 684049,
      "team": "PIT",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 804606,
      "team": "PIT",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 693304,
      "team": "PIT",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 542303,
      "team": "PIT",
      "position": "DH",
      "gamesStarted": null
    }
  ],
  "823033": [
    {
      "id": 663494,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 691023,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 701675,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 681517,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 663457,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 665877,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 668941,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 802139,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 677865,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691458,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 676617,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 666277,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 686780,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 592773,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 671056,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 699625,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 676369,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 663698,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 671739,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 682989,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 622761,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 643289,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 800311,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 686948,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 519242,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 805347,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 642086,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 641755,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 642201,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 664849,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 573262,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    }
  ],
  "823030": [
    {
      "id": 663494,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 691023,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 701675,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 663457,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 802139,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 691458,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 676617,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 666277,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 669461,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 703725,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 671056,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 702566,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663698,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 671739,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 622761,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 643289,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 686948,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 805347,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 642086,
      "team": "ATL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 625643,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 642201,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    }
  ],
  "823042": [
    {
      "id": 700241,
      "team": "STL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 694335,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691023,
      "team": "STL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 663494,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 701675,
      "team": "STL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 663457,
      "team": "STL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 665877,
      "team": "STL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 700669,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 802139,
      "team": "STL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 677865,
      "team": "STL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691458,
      "team": "STL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 676475,
      "team": "STL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 686780,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 691026,
      "team": "STL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 699625,
      "team": "STL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 676369,
      "team": "STL",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 694374,
      "team": "AZ",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 694297,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 680728,
      "team": "AZ",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 571448,
      "team": "AZ",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 682988,
      "team": "AZ",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 814439,
      "team": "AZ",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 545121,
      "team": "AZ",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 672695,
      "team": "AZ",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 672515,
      "team": "AZ",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 682998,
      "team": "AZ",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 664199,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 657044,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 596146,
      "team": "AZ",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 805299,
      "team": "AZ",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "824889": [
    {
      "id": 689266,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 671739,
      "team": "ATL",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 643289,
      "team": "ATL",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 800311,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 686948,
      "team": "ATL",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 621566,
      "team": "ATL",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 669221,
      "team": "ATL",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 660670,
      "team": "ATL",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 645277,
      "team": "ATL",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 663586,
      "team": "ATL",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 573262,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 657041,
      "team": "ATL",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 693821,
      "team": "ATL",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 694795,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 665052,
      "team": "MIA",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 681715,
      "team": "MIA",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 805300,
      "team": "MIA",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 676534,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 691594,
      "team": "MIA",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 806188,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 669364,
      "team": "MIA",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 669065,
      "team": "MIA",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 683357,
      "team": "MIA",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 682663,
      "team": "MIA",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 691788,
      "team": "MIA",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 691587,
      "team": "MIA",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 672640,
      "team": "MIA",
      "position": "SS",
      "gamesStarted": null
    }
  ],
  "823501": [
    {
      "id": 621112,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 671218,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 676609,
      "team": "NYY",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 682987,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 642708,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 657612,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 669224,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 700250,
      "team": "NYY",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 694341,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 687396,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 641355,
      "team": "NYY",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 665862,
      "team": "NYY",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 608331,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 605242,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 660787,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663757,
      "team": "NYY",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 806146,
      "team": "NYY",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 671277,
      "team": "NYY",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 670103,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 575929,
      "team": "BOS",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 663330,
      "team": "BOS",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 687941,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 657136,
      "team": "BOS",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 678394,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 677800,
      "team": "BOS",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 655316,
      "team": "BOS",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 681508,
      "team": "BOS",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 702332,
      "team": "BOS",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 686765,
      "team": "BOS",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 680776,
      "team": "BOS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 642201,
      "team": "BOS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 678882,
      "team": "BOS",
      "position": "CF",
      "gamesStarted": null
    }
  ],
  "823539": [
    {
      "id": 645305,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 671218,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 676609,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 623437,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 607074,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 682987,
      "team": "NYY",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 642232,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 642708,
      "team": "NYY",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 502671,
      "team": "NYY",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 669224,
      "team": "NYY",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 700250,
      "team": "NYY",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 641355,
      "team": "NYY",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 665862,
      "team": "NYY",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 660787,
      "team": "NYY",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663757,
      "team": "NYY",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 806146,
      "team": "NYY",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 671277,
      "team": "NYY",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 687562,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 575929,
      "team": "BOS",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 594027,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 663330,
      "team": "BOS",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 668939,
      "team": "BOS",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 677800,
      "team": "BOS",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 676477,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 655316,
      "team": "BOS",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 702332,
      "team": "BOS",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 686765,
      "team": "BOS",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 642201,
      "team": "BOS",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 678882,
      "team": "BOS",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 663558,
      "team": "BOS",
      "position": "P",
      "gamesStarted": 0
    }
  ],
  "823582": [
    {
      "id": 666182,
      "team": "NYM",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 682626,
      "team": "NYM",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 683146,
      "team": "NYM",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 701807,
      "team": "NYM",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 665506,
      "team": "NYM",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 673540,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 650960,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 543760,
      "team": "NYM",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 596019,
      "team": "NYM",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 665742,
      "team": "NYM",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 690997,
      "team": "NYM",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 676724,
      "team": "NYM",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 673357,
      "team": "NYM",
      "position": "LF",
      "gamesStarted": null
    },
    {
      "id": 805999,
      "team": "NYM",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 670623,
      "team": "HOU",
      "position": "3B",
      "gamesStarted": null
    },
    {
      "id": 669397,
      "team": "HOU",
      "position": "SS",
      "gamesStarted": null
    },
    {
      "id": 678906,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 662139,
      "team": "HOU",
      "position": "CF",
      "gamesStarted": null
    },
    {
      "id": 660853,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 656986,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 1
    },
    {
      "id": 514888,
      "team": "HOU",
      "position": "2B",
      "gamesStarted": null
    },
    {
      "id": 666211,
      "team": "HOU",
      "position": "RF",
      "gamesStarted": null
    },
    {
      "id": 665161,
      "team": "HOU",
      "position": "DH",
      "gamesStarted": null
    },
    {
      "id": 664299,
      "team": "HOU",
      "position": "P",
      "gamesStarted": 0
    },
    {
      "id": 664774,
      "team": "HOU",
      "position": "PH",
      "gamesStarted": null
    },
    {
      "id": 572233,
      "team": "HOU",
      "position": "1B",
      "gamesStarted": null
    },
    {
      "id": 543877,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 673237,
      "team": "HOU",
      "position": "C",
      "gamesStarted": null
    },
    {
      "id": 670541,
      "team": "HOU",
      "position": "LF",
      "gamesStarted": null
    }
  ]
};
