/* id -> full name, deduped across every game so a player who
   recurs across many attended games (e.g. a long-tenured
   Cardinal) is stored once, not once per appearance. */
var mlbPlayers = {
  "453895": "Brendan Ryan",
  "425487": "Todd Wellemeyer",
  "453198": "Chris Perez",
  "407871": "Joe Thurston",
  "405395": "Albert Pujols",
  "458003": "Blake Hawksworth",
  "425867": "Khalil Greene",
  "211041": "Ryan Franklin",
  "150178": "Jason LaRue",
  "449072": "Kyle McClellan",
  "119125": "Trever Miller",
  "334492": "Joel Pineiro",
  "408219": "Chris Duncan",
  "407886": "Ryan Ludwick",
  "425794": "Adam Wainwright",
  "458675": "Colby Rasmus",
  "448337": "Josh Kinney",
  "121096": "Dennys Reyes",
  "425877": "Yadier Molina",
  "112020": "Chris Carpenter",
  "150449": "Rick Ankiel",
  "460022": "Tyler Greene",
  "433581": "Brad Thompson",
  "435400": "Jason Motte",
  "435401": "Skip Schumaker",
  "430675": "Sean Henn",
  "434538": "Francisco Liriano",
  "133226": "Mike Redmond",
  "450282": "Glen Perkins",
  "285079": "R.A. Dickey",
  "448147": "Nick Blackburn",
  "430593": "Brendan Harris",
  "430670": "Bob Keppel",
  "458643": "Jose Morales",
  "408045": "Joe Mauer",
  "408047": "Justin Morneau",
  "150317": "Joe Crede",
  "430927": "Brian Buscher",
  "452655": "Denard Span",
  "445196": "Matt Tolbert",
  "150212": "Michael Cuddyer",
  "430585": "Jason Kubel",
  "150274": "Joe Nathan",
  "430321": "Delmon Young",
  "458713": "Kevin Slowey",
  "460576": "Carlos G\u00f3mez",
  "407825": "Matt Guerrier",
  "467726": "Jose Mijares",
  "435044": "Scott Baker",
  "346857": "Nick Punto",
  "136660": "Mark DeRosa",
  "429841": "Matt Diaz",
  "452671": "Diory Hernandez",
  "283166": "Michael Gonzalez",
  "110236": "Garret Anderson",
  "116706": "Chipper Jones",
  "498568": "Barbaro Canizares",
  "499877": "Kenshin Kawakami",
  "457453": "Jair Jurrjens",
  "424325": "David Ross",
  "407924": "Manny Acosta",
  "447714": "Eric O'Flaherty",
  "119853": "Greg Norton",
  "445988": "Mart\u00edn Prado",
  "425508": "Ryan Church",
  "488862": "Yunel Escobar",
  "435263": "Brian McCann",
  "493247": "Peter Moylan",
  "462102": "Tommy Hanson",
  "434661": "Nate McLouth",
  "134320": "Javier Vazquez",
  "430637": "Kelly Johnson",
  "117955": "Derek Lowe",
  "450665": "Kris Medlen",
  "457429": "Boone Logan",
  "451532": "Chad Billingsley",
  "112128": "Juan Castro",
  "431145": "Russell Martin",
  "425766": "James Loney",
  "493133": "Hiroki Kuroda",
  "461314": "Matt Kemp",
  "455092": "Scott Elbert",
  "279577": "Rafael Furcal",
  "444843": "Andre Ethier",
  "121834": "Jason Schmidt",
  "150116": "Randy Wolf",
  "120903": "Manny Ramirez",
  "455009": "Jonathan Broxton",
  "430941": "George Sherrill",
  "334393": "Juan Pierre",
  "457428": "James McDonald",
  "407861": "Orlando Hudson",
  "117928": "Mark Loretta",
  "213711": "Jeff Weaver",
  "470462": "Ramon Troncoso",
  "425539": "Hung-Chih Kuo",
  "232694": "Casey Blake",
  "477132": "Clayton Kershaw",
  "150407": "Guillermo Mota",
  "110385": "Brad Ausmus",
  "425560": "Adam LaRoche",
  "400089": "Rafael Soriano",
  "346798": "Kyle Lohse",
  "448802": "Jaime Garc\u00eda",
  "407812": "Matt Holliday",
  "445055": "Jon Jay",
  "207267": "Brad Penny",
  "458036": "Nick Stavinoha",
  "501896": "David Freese",
  "459939": "Mitchell Boggs",
  "458628": "Joe Mather",
  "458924": "Jonny Venters",
  "218596": "Tim Hudson",
  "445926": "Jesse Chavez",
  "462405": "Brooks Conrad",
  "518792": "Jason Heyward",
  "136267": "Troy Glaus",
  "123790": "Billy Wagner",
  "408299": "Omar Infante",
  "400134": "Eric Hinske",
  "493416": "Takashi Saito",
  "466320": "Melky Cabrera",
  "434637": "Matt Lindstrom",
  "448200": "Chris Sampson",
  "400061": "Roy Oswalt",
  "456422": "Michael Bourn",
  "408206": "Brett Myers",
  "279827": "Humberto Quintero",
  "446641": "Wilton Lopez",
  "502032": "Bud Norris",
  "434643": "Wandy Rodriguez",
  "407193": "Brandon Lyon",
  "150398": "Geoff Blum",
  "433898": "Jeff Keppinger",
  "430622": "Cory Sullivan",
  "430565": "Kazuo Matsui",
  "452254": "Hunter Pence",
  "407860": "Gustavo Chac\u00edn",
  "408211": "Kevin Cash",
  "462956": "Felipe Paulino",
  "119215": "Brian Moehler",
  "445246": "Jeff Fulchino",
  "150324": "Carlos Lee",
  "346859": "Jason Michaels",
  "446373": "Tommy Manzella",
  "204020": "Lance Berkman",
  "150268": "Pedro Feliz",
  "453236": "Mark Hamilton",
  "518614": "Daniel Descalso",
  "477569": "Fernando Salas",
  "447744": "Raul Valdes",
  "458681": "Lance Lynn",
  "505447": "Brandon Dickson",
  "444135": "Ryan Theriot",
  "488810": "Tony Cruz",
  "150414": "Jake Westbrook",
  "456501": "Johnny Cueto",
  "456701": "Homer Bailey",
  "502190": "Mike Leake",
  "453211": "Drew Stubbs",
  "276520": "Bronson Arroyo",
  "502317": "Chris Heisey",
  "434665": "Nick Masset",
  "430404": "Jonny Gomes",
  "457926": "Paul Janish",
  "446185": "Logan Ondrusek",
  "435538": "Bill Bray",
  "457803": "Jay Bruce",
  "452672": "Ryan Hanigan",
  "459967": "Sam LeCure",
  "450172": "Edinson Volquez",
  "458015": "Joey Votto",
  "111867": "Miguel Cairo",
  "461766": "Jose Arredondo",
  "121074": "Edgar Renteria",
  "408252": "Brandon Phillips",
  "121409": "Scott Rolen",
  "150188": "Francisco Cordero",
  "547973": "Aroldis Chapman",
  "150421": "Ramon Hernandez",
  "430930": "Fred Lewis",
  "121125": "Arthur Rhodes",
  "521055": "Maikel Cleto",
  "501800": "Allen Craig",
  "408042": "Gerald Laird",
  "519240": "Marc Rzepczynski",
  "453203": "Shane Robinson",
  "429719": "Edwin Jackson",
  "518545": "Adron Chambers",
  "279913": "Corey Patterson",
  "136734": "Octavio Dotel",
  "460322": "Antoan Richardson",
  "468429": "Jose Constanza",
  "460008": "Anthony Varvaro",
  "400268": "J.C. Boscan",
  "501985": "Mike Minor",
  "518692": "Freddie Freeman",
  "136460": "\u00c1lex Gonz\u00e1lez",
  "527054": "Julio Teheran",
  "545404": "Brandon Beachy",
  "527055": "Arodys Vizca\u00edno",
  "450852": "Cristhian Martinez",
  "276530": "Scott Linebrink",
  "517414": "Randall Delgado",
  "518886": "Craig Kimbrel",
  "462564": "Dan Uggla",
  "333292": "Jack Wilson",
  "572761": "Matt Carpenter",
  "136860": "Carlos Beltr\u00e1n",
  "240694": "J.C. Romero",
  "469690": "Victor Marte",
  "115817": "Livan Hernandez",
  "239795": "Chad Durbin",
  "464433": "Juan Francisco",
  "543629": "Tyler Pastornicky",
  "500674": "Eduardo Sanchez",
  "571431": "Matt Adams",
  "518693": "Sam Freeman",
  "523260": "Joe Kelly",
  "518858": "Nate Jones",
  "452121": "Brent Lillibridge",
  "458668": "Jordan Danks",
  "543819": "Zach Stewart",
  "457477": "Alejandro De Aza",
  "493351": "Alexei Ramirez",
  "425567": "Alex Rios",
  "493596": "Gordon Beckham",
  "592665": "Addison Reed",
  "500871": "Eduardo Escobar",
  "117244": "Paul Konerko",
  "519242": "Chris Sale",
  "408241": "Jake Peavy",
  "500779": "Jose Quintana",
  "430884": "Jesse Crain",
  "458950": "Philip Humber",
  "276055": "Adam Dunn",
  "493364": "Dayan Viciedo",
  "452095": "Tyler Flowers",
  "425856": "Gavin Floyd",
  "349193": "Will Ohman",
  "150229": "A.J. Pierzynski",
  "502327": "H\u00e9ctor Santiago",
  "407819": "Matt Thornton",
  "488919": "Taylor Green",
  "455117": "Mart\u00edn Maldonado",
  "451596": "Yovani Gallardo",
  "285131": "C\u00e9sar Izturis",
  "571666": "Mike Fiers",
  "425844": "Zack Greinke",
  "434180": "Kameron Loe",
  "460075": "Ryan Braun",
  "408061": "Francisco Rodr\u00edguez",
  "462136": "Marco Estrada",
  "435459": "George Kottaras",
  "407842": "Jose Veras",
  "285068": "Cody Ransom",
  "430001": "Rickie Weeks Jr.",
  "457422": "Tim Dillard",
  "448159": "Manny Parra",
  "460579": "Nyjer Morgan",
  "133380": "Aramis Ramirez",
  "493114": "Norichika Aoki",
  "446099": "John Axford",
  "448170": "Travis Ishikawa",
  "430611": "Corey Hart",
  "452220": "Stephen Drew",
  "407489": "Lyle Overbay",
  "456696": "David Hernandez",
  "453178": "Ian Kennedy",
  "217100": "Willie Bloomquist",
  "407816": "J.J. Putz",
  "431094": "Aaron Hill",
  "518567": "Josh Collmenter",
  "571578": "Patrick Corbin",
  "471083": "Miguel Montero",
  "467827": "Gerardo Parra",
  "111072": "Henry Blanco",
  "446899": "Brad Ziegler",
  "444520": "Craig Breslow",
  "440251": "Ryan Roberts",
  "502239": "Trevor Cahill",
  "489119": "Wade Miley",
  "489448": "Mike Zagurski",
  "457708": "Justin Upton",
  "545333": "Trevor Bauer",
  "543766": "Bryan Shaw",
  "502671": "Paul Goldschmidt",
  "455759": "Chris Young",
  "475243": "Travis Wood",
  "425861": "Shawn Camp",
  "519203": "Anthony Rizzo",
  "516770": "Starlin Castro",
  "460701": "James Russell",
  "490063": "Matt Garza",
  "445933": "Bryan LaHair",
  "503569": "Rafael Dolis",
  "488787": "Casey Coleman",
  "446003": "Jairo Asencio",
  "430904": "Paul Maholm",
  "434567": "Geovany Soto",
  "446381": "Darwin Barney",
  "472528": "Luis Valbuena",
  "430203": "David DeJesus",
  "542999": "Tony Campana",
  "407862": "Reed Johnson",
  "453186": "Scott Maine",
  "502182": "Steve Clevenger",
  "150093": "Alfonso Soriano",
  "425557": "Jeff Baker",
  "466918": "Manny Corpas",
  "461791": "Carlos Marmol",
  "502188": "Jeff Samardzija",
  "449079": "Wesley Wright",
  "472551": "Fernando Abad",
  "444448": "Brian Bixler",
  "445599": "Scott Moore",
  "460131": "Brian Bogusevic",
  "476704": "Jed Lowrie",
  "430965": "Chris Snyder",
  "502110": "J.D. Martinez",
  "449173": "Lucas Harrell",
  "453400": "Chris Johnson",
  "514888": "Jose Altuve",
  "457788": "Jordan Schafer",
  "453303": "Matt Downs",
  "488771": "Jason Castro",
  "502304": "David Carpenter",
  "572971": "Dallas Keuchel",
  "543475": "Jordan Lyles",
  "457918": "J.A. Happ",
  "451775": "Fernando Rodriguez Jr.",
  "462480": "Rhiner Cruz",
  "446135": "Barret Browning",
  "451594": "Dexter Fowler",
  "429783": "Rafael Betancourt",
  "279571": "Matt Belisle",
  "425386": "Jeremy Guthrie",
  "457574": "Jordan Pacheco",
  "571521": "Rex Brothers",
  "340192": "Marco Scutaro",
  "493603": "Adam Ottavino",
  "502158": "Josh Roenicke",
  "543022": "Tyler Chatwood",
  "519186": "Matt Reynolds",
  "543184": "Christian Friedrich",
  "408242": "Wil Nieves",
  "519141": "Drew Pomeranz",
  "501647": "Wilin Rosario",
  "114739": "Jason Giambi",
  "455126": "Chris Nelson",
  "458913": "Eric Young Jr.",
  "489189": "Josh Outman",
  "502125": "Tyler Colvin",
  "471865": "Carlos Gonz\u00e1lez",
  "468406": "Jonathan Herrera",
  "433585": "Jeff Francis",
  "115732": "Todd Helton",
  "465629": "Edward Mujica",
  "150118": "Brian Fuentes",
  "453311": "Tim Lincecum",
  "518516": "Madison Bumgarner",
  "489209": "Brett Pill",
  "346793": "Jeremy Affeldt",
  "435078": "Joaquin Arias",
  "543063": "Brandon Crawford",
  "453923": "Gr\u00e9gor Blanco",
  "454535": "Clay Hensley",
  "516949": "H\u00e9ctor S\u00e1nchez",
  "457763": "Buster Posey",
  "285064": "Ryan Vogelsong",
  "217096": "Barry Zito",
  "425657": "Javier L\u00f3pez",
  "502004": "George Kontos",
  "474832": "Brandon Belt",
  "430912": "Matt Cain",
  "433586": "Santiago Casilla",
  "489265": "Sergio Romo",
  "434636": "\u00c1ngel Pag\u00e1n",
  "518813": "Greg Holland",
  "429722": "Ervin Santana",
  "448306": "James Shields",
  "460051": "Chris Getz",
  "521692": "Salvador Perez",
  "434641": "Juan Gutierrez",
  "456715": "Lorenzo Cain",
  "456714": "Billy Butler",
  "136600": "Bruce Chen",
  "434669": "Luis Mendoza",
  "123173": "Miguel Tejada",
  "451584": "Wade Davis",
  "516969": "Kelvin Herrera",
  "519058": "Mike Moustakas",
  "425796": "Jeff Francoeur",
  "444876": "Alcides Escobar",
  "460086": "Alex Gordon",
  "471107": "Elliot Johnson",
  "543070": "Aaron Crow",
  "460024": "Luke Hochevar",
  "543333": "Eric Hosmer",
  "525768": "Tim Collins",
  "502481": "Jarrod Dyson",
  "429664": "Robinson Can\u00f3",
  "400085": "Ichiro Suzuki",
  "455755": "Chris Stewart",
  "150484": "Vernon Wells",
  "519222": "Austin Romine",
  "461833": "Phil Hughes",
  "518875": "Shawn Kelley",
  "282332": "CC Sabathia",
  "502011": "Preston Claiborne",
  "434624": "Jayson Nix",
  "453269": "Brennan Boesch",
  "400098": "Travis Hafner",
  "475479": "David Phelps",
  "458731": "Brett Gardner",
  "476589": "Adam Warren",
  "121250": "Mariano Rivera",
  "120485": "Andy Pettitte",
  "471868": "Alberto Gonzalez",
  "573064": "Vidal Nu\u00f1o",
  "450204": "Ben Francisco",
  "502085": "David Robertson",
  "474256": "Ryan Reid",
  "459991": "Gaby Sanchez",
  "425549": "Clint Barmes",
  "276346": "Brandon Inge",
  "476570": "Vin Mazzaro",
  "501983": "Travis Snider",
  "434540": "Garrett Jones",
  "474568": "Jordy Mercer",
  "502374": "Michael McKenry",
  "457705": "Andrew McCutchen",
  "457768": "Bryan Morris",
  "476883": "Pedro \u00c1lvarez",
  "458677": "Justin Wilson",
  "453265": "Tony Watson",
  "453343": "Mark Melancon",
  "516782": "Starling Marte",
  "276351": "Jason Grilli",
  "592238": "Brandon Cumpton",
  "543037": "Gerrit Cole",
  "450203": "Charlie Morton",
  "435522": "Neil Walker",
  "502046": "Jeff Locke",
  "502100": "Alex Presley",
  "150020": "Jerry Hairston Jr.",
  "346874": "Juan Uribe",
  "458501": "Luis Alfonso Cruz",
  "454560": "A.J. Ellis",
  "434181": "Brandon League",
  "572089": "Paco Rodr\u00edguez",
  "434442": "J.P. Howell",
  "445276": "Kenley Jansen",
  "543008": "Alex Castellanos",
  "547943": "Hyun Jin Ryu",
  "543148": "Tim Federowicz",
  "407885": "Mark Ellis",
  "624577": "Yasiel Puig",
  "408236": "Adri\u00e1n Gonz\u00e1lez",
  "519437": "Chris Withrow",
  "434670": "Hanley Ramirez",
  "543155": "Stephen Fife",
  "430613": "Ronald Belisario",
  "431148": "Scott Kazmir",
  "458006": "Matt Albers",
  "592102": "Cody Allen",
  "448602": "Mark Reynolds",
  "444935": "Nick Hagadone",
  "471911": "Carlos Carrasco",
  "475416": "Justin Masterson",
  "430605": "Ryan Raburn",
  "543228": "Yan Gomes",
  "434622": "Ubaldo Jim\u00e9nez",
  "543426": "Matt Langwell",
  "543401": "Jason Kipnis",
  "448179": "Rich Hill",
  "501925": "Joe Smith",
  "449107": "Mike Aviles",
  "488726": "Michael Brantley",
  "150348": "John McDonald",
  "502260": "Vinnie Pestano",
  "467793": "Carlos Santana",
  "446372": "Corey Kluber",
  "430897": "Nick Swisher",
  "518953": "David Lough",
  "425783": "Shin-Soo Choo",
  "544371": "Donald Lutz",
  "501961": "Derrick Robinson",
  "519023": "Devin Mesoraco",
  "489197": "Curtis Partch",
  "453943": "Todd Frazier",
  "435219": "Jack Hannahan",
  "430580": "Alfredo Simon",
  "571561": "Tony Cingrani",
  "446359": "Zack Cozart",
  "502009": "Mat Latos",
  "543331": "J.J. Hoover",
  "449082": "Xavier Paul",
  "518902": "Pete Kozma",
  "543779": "Kevin Siegrist",
  "544928": "Tyler Lyons",
  "421064": "Ty Wigginton",
  "571946": "Shelby Miller",
  "595307": "Seth Maness",
  "572751": "Keith Butler",
  "572096": "Trevor Rosenthal",
  "329092": "Randy Choate",
  "425900": "Dioner Navarro",
  "444857": "Scott Feldman",
  "276514": "Kevin Gregg",
  "444468": "H\u00e9ctor Rond\u00f3n",
  "474865": "Julio Borbon",
  "430668": "Scott Hairston",
  "453646": "Carlos Villanueva",
  "456078": "Welington Castillo",
  "453284": "Blake Parker",
  "469159": "Henry Alberto Rodriguez",
  "435220": "Ryan Sweeney",
  "435625": "Nate Schierholtz",
  "493574": "Blake Tekotte",
  "489413": "Casper Wells",
  "543569": "Brent Morel",
  "433579": "John Danks",
  "453264": "Donnie Veal",
  "518420": "Dylan Axelrod",
  "572033": "Josh Phegley",
  "543216": "Conor Gillaspie",
  "453515": "David Purcey",
  "594828": "Evan Gattis",
  "519345": "Joey Terdoslavich",
  "592743": "Andrelton Simmons",
  "425646": "Luis Ayala",
  "477229": "Jordan Walden",
  "501593": "Luis Avil\u00e1n",
  "622072": "Alex Wood",
  "453531": "Rob Johnson",
  "275933": "Scott Downs",
  "518934": "DJ LeMahieu",
  "572816": "Corey Dickerson",
  "571448": "Nolan Arenado",
  "453568": "Charlie Blackmon",
  "504379": "Juan Nicasio",
  "150275": "Yorvit Torrealba",
  "518586": "Charlie Culberson",
  "453064": "Troy Tulowitzki",
  "407822": "Jorge De La Rosa",
  "468504": "Jhoulys Chac\u00edn",
  "467850": "Edgmer Escalona",
  "592239": "Todd Cunningham",
  "608379": "Michael Wacha",
  "518911": "Andrew Lambo",
  "453172": "Jared Hughes",
  "543281": "Josh Harrison",
  "491646": "Jeanmar G\u00f3mez",
  "150359": "A.J. Burnett",
  "506997": "Tony Sanchez",
  "467798": "Jose Tabata",
  "543939": "Kolten Wong",
  "593372": "Carlos Martinez",
  "425834": "B.J. Upton",
  "150021": "Darnell McDonald",
  "547939": "Chang-Yong Lim",
  "573127": "Zac Rosscup",
  "467008": "Pedro Strop",
  "501227": "Alberto Cabrera",
  "430906": "Donnie Murphy",
  "516809": "Junior Lake",
  "453268": "Daniel Bard",
  "518748": "Justin Grimm",
  "453562": "Jake Arrieta",
  "548384": "Brooks Raley",
  "543894": "Logan Watkins",
  "543734": "Chris Rusin",
  "150119": "Freddy Garcia",
  "542194": "Christian Bethancourt",
  "571735": "David Hale",
  "518794": "Brandon Hicks",
  "466948": "Jean Machi",
  "501303": "Ehire Adrianza",
  "453307": "David Huff",
  "434604": "Michael Morse",
  "467055": "Pablo Sandoval",
  "433589": "Yusmeiro Petit",
  "408307": "Carl Crawford",
  "475100": "Scott Van Slyke",
  "460077": "Drew Butera",
  "124604": "Jamey Wright",
  "543829": "Dee Strange-Gordon",
  "408210": "Chone Figgins",
  "429717": "Dan Haren",
  "277417": "Josh Beckett",
  "451216": "Brian Wilson",
  "457759": "Justin Turner",
  "461235": "Brandon Moss",
  "424825": "Coco Crisp",
  "519083": "Derek Norris",
  "430948": "Alberto Callaspo",
  "475857": "Ryan Cook",
  "543243": "Sonny Gray",
  "435558": "Daric Barton",
  "448281": "Sean Doolittle",
  "502210": "Josh Reddick",
  "518626": "Josh Donaldson",
  "543548": "Tommy Milone",
  "519299": "Eric Sogard",
  "502226": "Craig Gentry",
  "519096": "Dan Otero",
  "493316": "Yoenis Cespedes",
  "462382": "Jim Johnson",
  "444379": "John Jaso",
  "573185": "Dan Straily",
  "502381": "Luke Gregerson",
  "474892": "Chris Carter",
  "518625": "Matt Dominguez",
  "543807": "George Springer",
  "542914": "Anthony Bass",
  "449786": "Carlos Corpor\u00e1n",
  "451661": "Josh Fields",
  "571868": "Marc Krauss",
  "425532": "Jerome Williams",
  "519085": "Brett Oberholtzer",
  "503556": "Marwin Gonzalez",
  "518560": "Paul Clemens",
  "543054": "Jarred Cosart",
  "502748": "Brad Peacock",
  "542340": "Jonathan Villar",
  "461882": "Jesus Guzman",
  "543321": "L.J. Hoes",
  "430589": "Chad Qualls",
  "488721": "Peter Bourjos",
  "542994": "Joey Butler",
  "450212": "Pat Neshek",
  "504083": "Jorge Rondon",
  "425509": "Jhonny Peralta",
  "592609": "Mike Olt",
  "466988": "Emilio Bonif\u00e1cio",
  "458085": "Chris Coghlan",
  "501888": "Ryan Kalish",
  "519166": "Neil Ram\u00edrez",
  "489295": "Brian Schlitter",
  "434628": "Jason Hammel",
  "434633": "John Baker",
  "421685": "Aaron Harang",
  "455369": "Ramiro Pena",
  "621962": "Ian Thomas",
  "425491": "Ryan Doumit",
  "429665": "Edwin Encarnaci\u00f3n",
  "456124": "Erik Kratz",
  "571800": "Drew Hutchison",
  "519169": "Rob Rasmussen",
  "571901": "Aaron Loup",
  "476270": "Steve Tolleson",
  "447755": "Steve Delabar",
  "279824": "Mark Buehrle",
  "521230": "Liam Hendriks",
  "445170": "Todd Redmond",
  "452252": "Adam Lind",
  "430661": "Dustin McGowan",
  "607680": "Kevin Pillar",
  "408314": "Jos\u00e9 Reyes",
  "489365": "Josh Thole",
  "446399": "Brett Cecil",
  "445163": "Casey Janssen",
  "543238": "Anthony Gose",
  "430832": "Jos\u00e9 Bautista",
  "543434": "Brett Lawrie",
  "452035": "Kyle Blanks",
  "592407": "Bryan Holaday",
  "400121": "Victor Martinez",
  "457435": "Phil Coke",
  "519445": "Danny Worth",
  "592206": "Nick Castellanos",
  "592767": "Drew Smyly",
  "571871": "Ian Krol",
  "608349": "Corey Knebel",
  "519144": "Rick Porcello",
  "435079": "Ian Kinsler",
  "116338": "Torii Hunter",
  "457706": "Austin Jackson",
  "430603": "Don Kelly",
  "453286": "Max Scherzer",
  "456379": "Al Alburquerque",
  "408234": "Miguel Cabrera",
  "461865": "Andrew Romine",
  "519175": "Evan Reed",
  "434671": "An\u00edbal S\u00e1nchez",
  "501955": "Joba Chamberlain",
  "434378": "Justin Verlander",
  "488671": "Alex Avila",
  "434658": "Rajai Davis",
  "455139": "Robinson Chirinos",
  "430630": "Jason Frasor",
  "519048": "Mitch Moreland",
  "519344": "Nick Tepesch",
  "425840": "Neal Cotts",
  "460269": "Chris Gimenez",
  "519145": "Aaron Poreda",
  "465657": "Joakim Soria",
  "134181": "Adrian Beltr\u00e9",
  "547982": "Leonys Martin",
  "607259": "Nick Martinez",
  "596059": "Rougned Odor",
  "506433": "Yu Darvish",
  "407890": "Colby Lewis",
  "468396": "Alexi Ogando",
  "543726": "Robbie Ross Jr.",
  "543706": "Daniel Robertson",
  "474521": "Shawn Tolleson",
  "574831": "Michael Choice",
  "596143": "Luis Sardinas",
  "462101": "Elvis Andrus",
  "476454": "Dellin Betances",
  "407893": "Mark Teixeira",
  "453056": "Jacoby Ellsbury",
  "500208": "Yangervis Solarte",
  "469686": "Alfredo Aceves",
  "501660": "Zoilo Almonte",
  "547888": "Masahiro Tanaka",
  "116539": "Derek Jeter",
  "406878": "Brian Roberts",
  "571974": "John Ryan Murphy",
  "595032": "Chase Whitley",
  "457935": "Matt Daley",
  "475582": "Ryan Zimmerman",
  "519322": "Drew Storen",
  "425785": "Greg Dobbs",
  "502578": "Aaron Barrett",
  "489334": "Craig Stammen",
  "446321": "Ross Detwiler",
  "543685": "Anthony Rendon",
  "544931": "Stephen Strasburg",
  "467092": "Wilson Ramos",
  "457787": "Danny Espinosa",
  "519455": "Jordan Zimmermann",
  "461325": "Tyler Clippard",
  "450729": "Doug Fister",
  "460283": "Jerry Blevins",
  "446653": "Jose Lobat\u00f3n",
  "595014": "Blake Treinen",
  "435622": "Ian Desmond",
  "150029": "Jayson Werth",
  "435623": "Kevin Frandsen",
  "543699": "Tanner Roark",
  "518617": "Jake Diekman",
  "449097": "Jonathan Papelbon",
  "400284": "Chase Utley",
  "448242": "Tony Gwynn Jr.",
  "429667": "Ryan Howard",
  "455374": "Antonio Bastardo",
  "571527": "David Buchanan",
  "458582": "Reid Brignac",
  "571786": "Mario Hollands",
  "462945": "Cesar Jimenez",
  "519184": "Ben Revere",
  "452718": "Kyle Kendrick",
  "460055": "John Mayberry Jr.",
  "276519": "Jimmy Rollins",
  "430606": "Mike Adams",
  "434563": "Carlos Ruiz",
  "518603": "Justin De Fratus",
  "407781": "Marlon Byrd",
  "502126": "Domonic Brown",
  "543495": "Ethan Martin",
  "433584": "Roberto Hernandez",
  "430935": "Cole Hamels",
  "514917": "C\u00e9sar Hern\u00e1ndez",
  "572889": "Nick Greenwood",
  "477003": "Jonathon Niese",
  "544925": "Matthew den Dekker",
  "544727": "Jeurys Familia",
  "110029": "Bobby Abreu",
  "112526": "Bartolo Colon",
  "514913": "Rub\u00e9n Tejada",
  "493472": "Eric Campbell",
  "460003": "Taylor Teagarden",
  "554430": "Zack Wheeler",
  "572831": "Josh Edgin",
  "445968": "Dana Eveland",
  "502517": "Daniel Murphy",
  "542674": "Gonzalez Germen",
  "502195": "Vic Black",
  "446263": "Lucas Duda",
  "527038": "Wilmer Flores",
  "489232": "Anthony Recker",
  "516769": "Jenrry Mejia",
  "431151": "David Wright",
  "594798": "Jacob deGrom",
  "448614": "Carlos Torres",
  "493137": "Daisuke Matsuzaka",
  "434158": "Curtis Granderson",
  "429781": "Kevin Correia",
  "456488": "Eduardo N\u00fa\u00f1ez",
  "476633": "Chris Parmelee",
  "425545": "Josh Willingham",
  "465679": "Samuel Deduno",
  "573204": "Caleb Thielbar",
  "461858": "Trevor Plouffe",
  "502272": "Casey Fien",
  "454537": "Jared Burton",
  "542455": "Oswaldo Arcia",
  "435559": "Kurt Suzuki",
  "499624": "Chris Colabello",
  "464416": "Yohan Pino",
  "488846": "Brian Duensing",
  "518700": "Eric Fryer",
  "572821": "Brian Dozier",
  "461872": "Anthony Swarzak",
  "453539": "Sam Fuld",
  "502043": "Kyle Gibson",
  "434778": "Kendrys Morales",
  "445060": "Ricky Nolasco",
  "465041": "Francisco Cervelli",
  "461848": "Jim Miller",
  "519412": "Zelous Wheeler",
  "543606": "Jake Odorizzi",
  "346797": "Grant Balfour",
  "407853": "Erik Bedard",
  "476451": "Jeremy Hellickson",
  "457775": "Desmond Jennings",
  "459987": "Ces\u00e1r Ramos",
  "502171": "Alex Cobb",
  "459964": "Matt Joyce",
  "150040": "Jos\u00e9 Molina",
  "456034": "David Price",
  "502202": "Brad Boxberger",
  "502676": "Cole Figueroa",
  "523253": "Logan Forsythe",
  "489446": "Kirby Yates",
  "446334": "Evan Longoria",
  "407908": "Joel Peralta",
  "502042": "Chris Archer",
  "450314": "Ben Zobrist",
  "446386": "Brandon Guyer",
  "434663": "Juan Carlos Oviedo",
  "446481": "Sean Rodr\u00edguez",
  "595281": "Kevin Kiermaier",
  "554432": "Chad Jenkins",
  "518991": "Darin Mastroianni",
  "493128": "Munenori Kawasaki",
  "430681": "Dan Johnson",
  "573186": "Marcus Stroman",
  "435045": "Sergio Santos",
  "542669": "Roman Mendez",
  "456387": "Ryan Feierabend",
  "571945": "Miles Mikolas",
  "451192": "James Adduci",
  "491703": "Neftal\u00ed Feliz",
  "450317": "J.P. Arencibia",
  "489267": "Adam Rosales",
  "502264": "Nate Adcock",
  "452104": "Chase Headley",
  "425626": "Chris Capuano",
  "572888": "Shane Greene",
  "435221": "Brandon McCarthy",
  "572138": "Jon Singleton",
  "448609": "Tony Sipp",
  "463610": "Gregorio Petit",
  "594772": "Jake Buchanan",
  "543257": "Robbie Grossman",
  "543521": "Collin McHugh",
  "445153": "Darin Downs",
  "572365": "Ryan Goins",
  "460099": "Nolan Reimold",
  "592717": "Aaron Sanchez",
  "502143": "Danny Valencia",
  "407793": "John Lackey",
  "518771": "Mitch Harris",
  "545341": "Randal Grichuk",
  "446225": "Ed Easley",
  "516416": "Jean Segura",
  "595386": "Jason Rogers",
  "467143": "H\u00e9ctor G\u00f3mez",
  "451089": "Shane Peterson",
  "518960": "Jonathan Lucroy",
  "518468": "Michael Blazek",
  "519293": "Will Smith",
  "502026": "Jeremy Jeffress",
  "592341": "David Goforth",
  "519076": "Jimmy Nelson",
  "541650": "Hern\u00e1n P\u00e9rez",
  "115629": "LaTroy Hawkins",
  "460026": "Nick Hundley",
  "592454": "Tommy Kahnle",
  "623184": "Scott Oberg",
  "518452": "Chad Bettis",
  "572019": "Ben Paulsen",
  "502522": "Justin Miller",
  "488681": "Brandon Barnes",
  "501255": "Rafael Ynoa",
  "592826": "Vince Velasquez",
  "474233": "Hank Conger",
  "501789": "Will Harris",
  "605512": "Preston Tucker",
  "621121": "Lance McCullers Jr.",
  "570267": "Domingo Santana",
  "621043": "Carlos Correa",
  "545350": "Jake Marisnick",
  "491159": "Joe Thatcher",
  "548357": "Christian Bergman",
  "518553": "Steve Cishek",
  "572039": "Stephen Piscotty",
  "592815": "Sam Tuivailala",
  "462515": "Miguel Socolovich",
  "455976": "Nick Markakis",
  "516811": "Eury P\u00e9rez",
  "607054": "Jace Peterson",
  "465674": "Pedro Ciriaco",
  "605374": "Andrew McKirahan",
  "593495": "Daniel Castro",
  "543432": "Ryan Lavarnway",
  "611177": "Adonis Garc\u00eda",
  "605538": "Matt Wisler",
  "430911": "David Aardsma",
  "457727": "Cameron Maybin",
  "621199": "Matt Bowman",
  "571757": "Jeremy Hazelbaker",
  "518883": "Dean Kiekhefer",
  "493200": "Seunghwan Oh",
  "649557": "Aledmys D\u00edaz",
  "576397": "Jedd Gyorko",
  "594838": "Phil Gosselin",
  "543339": "Daniel Hudson",
  "571875": "Jake Lamb",
  "572008": "Chris Owings",
  "605177": "Andrew Chafin",
  "630111": "Yasmany Tom\u00e1s",
  "592273": "Brandon Drury",
  "605113": "Nick Ahmed",
  "545332": "Jake Barrett",
  "592662": "Robbie Ray",
  "605359": "Evan Marshall",
  "657205": "Zac Curtis",
  "543302": "Chris Herrmann",
  "624585": "Jorge Soler",
  "595879": "Javier B\u00e1ez",
  "608365": "Addison Russell",
  "592178": "Kris Bryant",
  "452657": "Jon Lester",
  "600303": "Tommy La Stella",
  "453385": "Clayton Richard",
  "519333": "Matt Szczur",
  "543294": "Kyle Hendricks",
  "593958": "Eduardo Rodriguez",
  "453214": "Steven Wright",
  "120074": "David Ortiz",
  "547749": "Junichi Tazawa",
  "592390": "Heath Hembree",
  "453329": "Clay Buchholz",
  "571918": "Deven Marrero",
  "543768": "Travis Shaw",
  "518927": "Tommy Layne",
  "593523": "Marco Hern\u00e1ndez",
  "605141": "Mookie Betts",
  "456030": "Dustin Pedroia",
  "593428": "Xander Bogaerts",
  "598265": "Jackie Bradley Jr.",
  "534606": "Ryan LaMarre",
  "493157": "Koji Uehara",
  "506702": "Sandy Le\u00f3n",
  "598264": "Matt Barnes",
  "543877": "Christian V\u00e1zquez",
  "493193": "Dae-Ho Lee",
  "276542": "Joaqu\u00edn Benoit",
  "608167": "Jonathan Aro",
  "572122": "Kyle Seager",
  "606466": "Ketel Marte",
  "572020": "James Paxton",
  "543883": "Nick Vincent",
  "592716": "Adrian Sampson",
  "455104": "Chris Iannetta",
  "592836": "Taijuan Walker",
  "429711": "Franklin Gutierrez",
  "452234": "Seth Smith",
  "621242": "Edwin D\u00edaz",
  "443558": "Nelson Cruz",
  "502523": "Shawn O'Malley",
  "547874": "Hisashi Iwakuma",
  "543557": "Mike Montgomery",
  "501992": "Nate Karns",
  "425784": "Ren\u00e9 Rivera",
  "624424": "Michael Conforto",
  "571927": "Steven Matz",
  "518774": "Matt Harvey",
  "570663": "Hansel Robles",
  "592789": "Noah Syndergaard",
  "571841": "Ty Kelly",
  "592340": "Erik Goeddel",
  "608700": "Kevin Plawecki",
  "608703": "Matt Reynolds",
  "452678": "Asdr\u00fabal Cabrera",
  "516714": "Dario Alvarez",
  "488818": "Chase d'Arnaud",
  "607231": "John Gant",
  "430947": "Erick Aybar",
  "542255": "Ender Inciarte",
  "592433": "Tyrell Jenkins",
  "605480": "Mallex Smith",
  "594760": "Aaron Blair",
  "474319": "Brandon Snyder",
  "543017": "Hunter Cervenka",
  "621408": "Matt Marksberry",
  "542432": "Jos\u00e9 Ram\u00edrez",
  "503444": "Joel De La Cruz",
  "543901": "Ryan Weber",
  "606291": "Mauricio Cabrera",
  "592314": "Mike Foltynewicz",
  "621107": "Zach Eflin",
  "457732": "Andrew Bailey",
  "571437": "Aaron Altherr",
  "593576": "H\u00e9ctor Neris",
  "595963": "Tyler Goeddel",
  "571830": "Tommy Joseph",
  "596748": "Maikel Franco",
  "519237": "Cameron Rupp",
  "520471": "Freddy Galvis",
  "605894": "Severino Gonz\u00e1lez",
  "605125": "Cody Asche",
  "517370": "Jimmy Paredes",
  "591693": "Edubray Ramos",
  "605227": "Taylor Featherston",
  "595191": "Jerad Eickhoff",
  "546318": "Od\u00fabel Herrera",
  "594824": "Greg Garcia",
  "502054": "Tommy Pham",
  "451705": "Alberto Rosario",
  "594577": "Mike Mayers",
  "435043": "Zach Duke",
  "594792": "Brandon Cunniff",
  "547007": "Rob Whalen",
  "605154": "John Brebbia",
  "500874": "Jos\u00e9 A. Mart\u00ednez",
  "657557": "Paul DeJong",
  "621035": "Chris Taylor",
  "518735": "Yasmani Grandal",
  "605131": "Austin Barnes",
  "571771": "Enrique Hern\u00e1ndez",
  "608369": "Corey Seager",
  "594795": "Grant Dayton",
  "501822": "Chris Hatcher",
  "520980": "Pedro B\u00e1ez",
  "453344": "Brandon Morrow",
  "518649": "Brett Eibner",
  "628317": "Kenta Maeda",
  "641355": "Cody Bellinger",
  "548389": "Ross Stripling",
  "519346": "Eric Thames",
  "542908": "Jett Bandy",
  "623352": "Josh Hader",
  "444489": "Manny Pi\u00f1a",
  "503449": "Wily Peralta",
  "502179": "Paolo Espino",
  "542979": "Keon Broxton",
  "621446": "Lewis Brinson",
  "448855": "Junior Guerra",
  "605200": "Zach Davies",
  "606115": "Orlando Arcia",
  "606930": "Jacob Barnes",
  "502624": "Chase Anderson",
  "545338": "Nick Franklin",
  "542583": "Jes\u00fas Aguilar",
  "543118": "Oliver Drake",
  "620443": "Luis Torrens",
  "622766": "Miguel D\u00edaz",
  "517369": "Jos\u00e9 Pirela",
  "595978": "Austin Hedges",
  "592669": "Hunter Renfroe",
  "642707": "Allen C\u00f3rdoba",
  "659275": "Dinelson Lamet",
  "600526": "Jos\u00e9 Torres",
  "614173": "Franchy Cordero",
  "543506": "Brandon Maurer",
  "571976": "Wil Myers",
  "488748": "Ryan Buchter",
  "572308": "Jos\u00e9 A. V\u00e1ldez",
  "606131": "Luis Perdomo",
  "605486": "Cory Spangenberg",
  "664208": "Phil Maton",
  "543272": "Brad Hand",
  "571602": "Matt Davidson",
  "591994": "Willy Garc\u00eda",
  "607074": "Carlos Rod\u00f3n",
  "502706": "Derek Holland",
  "553882": "Omar Narv\u00e1ez",
  "573589": "Michael Ynoa",
  "571787": "David Holmberg",
  "570560": "Yolmer S\u00e1nchez",
  "571476": "Chris Beck",
  "547989": "Jos\u00e9 Abreu",
  "502593": "Jake Petricka",
  "541645": "Avisa\u00edl Garc\u00eda",
  "460059": "Mike Pelfrey",
  "641313": "Tim Anderson",
  "593700": "Alen Hanson",
  "641553": "Adam Engel",
  "607345": "Kevan Smith",
  "543359": "Dan Jennings",
  "622663": "Luis Severino",
  "622703": "Ronald Herrera",
  "592741": "Chasen Shreve",
  "593334": "Domingo Germ\u00e1n",
  "608701": "Rob Refsnyder",
  "592450": "Aaron Judge",
  "501381": "Michael Pineda",
  "609280": "Miguel Andujar",
  "643778": "Tyler Webb",
  "642180": "Tyler Wade",
  "643338": "Chad Green",
  "591720": "Ronald Torreyes",
  "570666": "Luis Cessa",
  "596142": "Gary S\u00e1nchez",
  "592122": "Tyler Austin",
  "656756": "Jordan Montgomery",
  "544369": "Didi Gregorius",
  "621058": "Andrew Moore",
  "571745": "Mitch Haniger",
  "641941": "Emilio Pag\u00e1n",
  "592325": "Ben Gamel",
  "664641": "Ar\u00edel Miranda",
  "621471": "Boog Powell",
  "572287": "Mike Zunino",
  "572021": "James Pazos",
  "543964": "Tony Zych",
  "600301": "Taylor Motter",
  "628338": "Guillermo Heredia",
  "433587": "F\u00e9lix Hern\u00e1ndez",
  "621112": "Paul Blackburn",
  "594943": "Zach Neal",
  "640455": "Sean Manaea",
  "595144": "Jaycob Brugman",
  "605254": "Daniel Gossett",
  "656305": "Matt Chapman",
  "543760": "Marcus Semien",
  "501981": "Khris Davis",
  "425492": "Ryan Madson",
  "572728": "Michael Brady",
  "622194": "Bruce Maxwell",
  "475174": "Yonder Alonso",
  "592387": "Ryon Healy",
  "434672": "Chris Smith",
  "543056": "Danny Coulombe",
  "643265": "Garrett Cooper",
  "571951": "Bryan Mitchell",
  "543305": "Aaron Hicks",
  "623149": "Paul Sewald",
  "642086": "Dominic Smith",
  "573109": "AJ Ramos",
  "606160": "Rafael Montero",
  "518595": "Travis d'Arnaud",
  "641850": "Kevin McGowan",
  "607043": "Brandon Nimmo",
  "623167": "Chris Flexen",
  "607473": "Chasen Bradford",
  "519294": "Josh Smoker",
  "642708": "Amed Rosario",
  "501571": "Juan Lagares",
  "622666": "Johan Camargo",
  "475247": "Ryan Flaherty",
  "641438": "Shane Carle",
  "595465": "Dan Winkler",
  "621345": "A.J. Minter",
  "640460": "Dustin Peterson",
  "608371": "Lucas Sims",
  "645277": "Ozzie Albies",
  "621020": "Dansby Swanson",
  "608331": "Max Fried",
  "656794": "Sean Newcomb",
  "592145": "Jesse Biddle",
  "641645": "Luis Guillorme",
  "639373": "Gerson Bautista",
  "595943": "Phillip Evans",
  "642008": "Jacob Rhame",
  "664869": "P.J. Conlon",
  "607229": "Robert Gsellman",
  "607625": "Seth Lugo",
  "450306": "Jason Vargas",
  "622168": "Yairo Mu\u00f1oz",
  "664056": "Harrison Bader",
  "572228": "Luke Voit",
  "596133": "Luke Weaver",
  "663855": "Jordan Hicks",
  "506747": "Francisco Pe\u00f1a",
  "656427": "Jack Flaherty",
  "542303": "Marcell Ozuna",
  "596295": "Austin Gomber",
  "518618": "Derek Dietrich",
  "656738": "Ben Meyer",
  "594027": "Tyron Guerrero",
  "592663": "J.T. Realmuto",
  "571506": "Justin Bour",
  "570632": "Jos\u00e9 Ure\u00f1a",
  "607457": "Kyle Barraclough",
  "605119": "Brian Anderson",
  "543045": "Adam Conley",
  "670950": "Trevor Richards",
  "622694": "Elieser Hern\u00e1ndez",
  "595375": "JT Riddle",
  "592680": "Yadiel Rivera",
  "500743": "Miguel Rojas",
  "592761": "Caleb Smith",
  "612672": "Wei-Yin Chen",
  "607968": "Drew Rucinski",
  "608716": "Drew Steckenrider",
  "543776": "JB Shuck",
  "592426": "Luke Jackson",
  "542454": "Danny Santana",
  "660670": "Ronald Acu\u00f1a Jr.",
  "594965": "Daniel Ponce de Leon",
  "621550": "Patrick Wisdom",
  "608348": "Carson Kelly",
  "641933": "Tyler O'Neill",
  "641712": "Dakota Hudson",
  "475115": "Tyson Ross",
  "666969": "Adolis Garc\u00eda",
  "608678": "Dominic Leone",
  "593974": "Wandy Peralta",
  "592863": "Mason Williams",
  "571466": "Tucker Barnhart",
  "664167": "Blake Trahan",
  "594988": "Scott Schebler",
  "623451": "Jackson Stephens",
  "640447": "Phillip Ervin",
  "607219": "Sal Romano",
  "543101": "Anthony DeSclafani",
  "622491": "Luis Castillo",
  "553993": "Eugenio Su\u00e1rez",
  "571697": "Scooter Gennett",
  "642003": "Cody Reed",
  "628452": "Raisel Iglesias",
  "606299": "Jos\u00e9 Peraza",
  "547179": "Michael Lorenzen",
  "571740": "Billy Hamilton",
  "592200": "Curt Casali",
  "641525": "Brandon Dixon",
  "599096": "Dilson Herrera",
  "453192": "Andrew Miller",
  "606149": "Giovanny Gallegos",
  "446308": "Matt Wieters",
  "657041": "Lane Thomas",
  "592332": "Kevin Gausman",
  "657053": "Touki Toussaint",
  "657097": "Jacob Webb",
  "647336": "Michael Soroka",
  "663586": "Austin Riley",
  "657140": "Kyle Wright",
  "458708": "Josh Tomlin",
  "624641": "Edmundo Sosa",
  "668227": "Randy Arozarena",
  "668800": "Andrew Knizner",
  "621529": "Joe Hudson",
  "669242": "Tommy Edman",
  "664854": "Ryan Helsley",
  "592660": "Rangel Ravelo",
  "650893": "G\u00e9nesis Cabrera",
  "658551": "Junior Fern\u00e1ndez",
  "669374": "Keston Hiura",
  "621438": "Tyrone Taylor",
  "592885": "Christian Yelich",
  "592865": "Taylor Williams",
  "642207": "Devin Williams",
  "669203": "Corbin Burnes",
  "461829": "Gio Gonzalez",
  "571679": "David Freitas",
  "642547": "Freddy Peralta",
  "607188": "Jake Faria",
  "605143": "Ray Black",
  "605288": "Adrian Houser",
  "641924": "Jacob Nottingham",
  "663757": "Trent Grisham",
  "543351": "Jay Jackson",
  "592222": "Alex Claudio",
  "608718": "Brent Suter",
  "642092": "Riley Smith",
  "668942": "Josh Rojas",
  "518876": "Merrill Kelly",
  "573009": "Joe Mantiply",
  "622065": "Alex Young",
  "656464": "Kevin Ginkel",
  "592233": "Stefan Crichton",
  "545121": "Ildemaro Vargas",
  "444482": "David Peralta",
  "656686": "Corbin Martin",
  "641796": "Tim Locastro",
  "668678": "Zac Gallen",
  "572233": "Christian Walker",
  "598287": "No\u00e9 Ramirez",
  "519390": "Stephen Vogt",
  "676840": "Matt Peacock",
  "656976": "Pavin Smith",
  "624647": "Victor Gonz\u00e1lez",
  "669257": "Will Smith",
  "641360": "Phil Bickford",
  "664062": "Tony Gonsolin",
  "656716": "Zach McKinstry",
  "519306": "Steven Souza Jr.",
  "621111": "Walker Buehler",
  "669952": "Mitch White",
  "572041": "AJ Pollock",
  "542992": "Andy Burns",
  "664076": "Garrett Cleavinger",
  "628711": "Julio Ur\u00edas",
  "607461": "Matt Beaty",
  "666158": "Gavin Lux",
  "676969": "Brett de Geus",
  "641680": "Jonah Heim",
  "669256": "Nick Solak",
  "663770": "Demarcus Evans",
  "570257": "Joely Rodr\u00edguez",
  "641540": "Dane Dunning",
  "571788": "Brock Holt",
  "663993": "Nathaniel Lowe",
  "656685": "Brett Martin",
  "607359": "Spencer Patton",
  "667463": "John King",
  "621368": "Taylor Hearn",
  "643396": "Isiah Kiner-Falefa",
  "622250": "Josh Sborz",
  "624431": "Jose Trevino",
  "641432": "Willie Calhoun",
  "642201": "Eli White",
  "663465": "Kolby Allard",
  "641829": "Jason Martin",
  "608336": "Joey Gallo",
  "517008": "Alex Colom\u00e9",
  "666163": "Ben Rortvedt",
  "624503": "Nick Gordon",
  "593934": "Miguel San\u00f3",
  "660896": "Jorge Alcala",
  "608648": "Tyler Duffey",
  "621244": "Jos\u00e9 Berr\u00edos",
  "641598": "Mitch Garver",
  "680777": "Ryan Jeffers",
  "533167": "Matt Shoemaker",
  "666135": "Alex Kirilloff",
  "573124": "Taylor Rogers",
  "608652": "Luke Farrell",
  "641927": "Bailey Ober",
  "596146": "Max Kepler",
  "663616": "Trevor Larnach",
  "593871": "Jorge Polanco",
  "650333": "Luis Arraez",
  "677976": "Randy Dobnak",
  "621439": "Byron Buxton",
  "666185": "Dylan Carlson",
  "663457": "Lars Nootbaar",
  "519008": "T.J. McFarland",
  "547942": "Kwang Hyun Kim",
  "602922": "Jos\u00e9 Rondon",
  "453281": "Wade LeBlanc",
  "472610": "Luis Garc\u00eda",
  "594807": "Adam Duvall",
  "554431": "Tyler Matzek",
  "666205": "Kyle Muller",
  "592626": "Joc Pederson",
  "593144": "Richard Rodr\u00edguez",
  "650828": "Edgar Santana",
  "501659": "Abraham Almonte",
  "455119": "Chris Martin",
  "621052": "Alex Reyes",
  "621573": "Austin Dean",
  "664141": "JT Brubaker",
  "665854": "Luis Oviedo",
  "668804": "Bryan Reynolds",
  "592567": "Colin Moran",
  "666801": "Rodolfo Castro",
  "570256": "Gregory Polanco",
  "607455": "Anthony Banda",
  "664918": "Kyle Keller",
  "663647": "Ke'Bryan Hayes",
  "607732": "Jacob Stallings",
  "594694": "Wilmer Difo",
  "656605": "Mitch Keller",
  "596071": "Dillon Peters",
  "643230": "Steven Brault",
  "621028": "Kevin Newman",
  "621249": "Duane Underwood Jr.",
  "660294": "Yoshi Tsutsugo",
  "640444": "Wil Crowe",
  "683232": "Nick Mears",
  "641771": "Chad Kuhl",
  "605421": "Michael P\u00e9rez",
  "670280": "David Bednar",
  "660829": "Hoy Park",
  "608717": "Chris Stratton",
  "621114": "Ryan Burr",
  "544725": "Leury Garc\u00eda",
  "663853": "Romy Gonzalez",
  "660162": "Yo\u00e1n Moncada",
  "657757": "Gavin Sheets",
  "656302": "Dylan Cease",
  "676979": "Garrett Crochet",
  "571718": "Brian Goodwin",
  "656629": "Michael Kopech",
  "664874": "Seby Zavala",
  "607481": "Aaron Bummer",
  "625643": "Reynaldo L\u00f3pez",
  "650391": "Eloy Jim\u00e9nez",
  "605541": "Mike Wright Jr.",
  "664901": "Danny Mendick",
  "572193": "Ryan Tepera",
  "614179": "Jos\u00e9 Ruiz",
  "673357": "Luis Robert Jr.",
  "624427": "Stephen Gonsalves",
  "593140": "Michael Feliz",
  "578428": "Jose Iglesias",
  "650382": "Darwinzon Hern\u00e1ndez",
  "672391": "Kaleb Ort",
  "657077": "Alex Verdugo",
  "657031": "Josh Taylor",
  "666915": "Bobby Dalbec",
  "676477": "Garrett Whitlock",
  "656941": "Kyle Schwarber",
  "646240": "Rafael Devers",
  "570488": "Phillips Valdez",
  "518489": "Ryan Brasier",
  "572070": "Garrett Richards",
  "543135": "Nathan Eovaldi",
  "656557": "Tanner Houck",
  "666200": "Jes\u00fas Luzardo",
  "674944": "Sean Guenther",
  "669432": "Trevor Rogers",
  "542947": "Richard Bleier",
  "650559": "Bryan De La Cruz",
  "645261": "Sandy Alcantara",
  "657193": "Eddy Alvarez",
  "665795": "Edward Cabrera",
  "668721": "Payton Henry",
  "595345": "Steven Okert",
  "605412": "Joe Panik",
  "571670": "Dylan Floro",
  "669294": "Paul Campbell",
  "647315": "Zach Pop",
  "663743": "Nick Fortes",
  "642423": "Magneuris Sierra",
  "669622": "Anthony Bender",
  "665862": "Jazz Chisholm Jr.",
  "660821": "Jes\u00fas S\u00e1nchez",
  "605507": "Zach Thompson",
  "656577": "Alex Jackson",
  "650331": "Lewin D\u00edaz",
  "656180": "Riley Adams",
  "666168": "Mason Thompson",
  "680686": "Josiah Gray",
  "663432": "Tanner Rainey",
  "608723": "Austin Voth",
  "605137": "Josh Bell",
  "640448": "Kyle Finnegan",
  "666198": "Carter Kieboom",
  "600921": "Andr\u00e9s Machado",
  "621348": "Sam Clay",
  "642028": "Josh Rogers",
  "607560": "Ryne Harper",
  "664057": "Andrew Stevenson",
  "665742": "Juan Soto",
  "593604": "Alberto Baldonado",
  "628450": "Yadiel Hernandez",
  "607200": "Erick Fedde",
  "660688": "Keibert Ruiz",
  "543594": "Sean Nolin",
  "671277": "Luis Garc\u00eda Jr.",
  "641907": "Patrick Murphy",
  "666120": "Ian Anderson",
  "644433": "Chadwick Tromp",
  "669276": "Dylan Lee",
  "605253": "Terrance Gore",
  "592696": "Eddie Rosario",
  "661388": "William Contreras",
  "656353": "Tucker Davidson",
  "642350": "Jose Siri",
  "642130": "Blake Taylor",
  "663656": "Kyle Tucker",
  "608324": "Alex Bregman",
  "608665": "Kendall Graveman",
  "493329": "Yuli Gurriel",
  "554340": "Yimi Garc\u00eda",
  "592773": "Ryne Stanek",
  "664353": "Jos\u00e9 Urquidy",
  "664299": "Cristian Javier",
  "519151": "Ryan Pressly",
  "677651": "Luis Garcia",
  "676801": "Chas McCormick",
  "670541": "Yordan Alvarez",
  "624522": "Keegan Thompson",
  "575929": "Willson Contreras",
  "621074": "Michael Rucker",
  "663611": "Nick Madrigal",
  "643524": "Frank Schwindel",
  "664023": "Ian Happ",
  "681799": "Ethan Roberts",
  "664123": "Scott Effross",
  "641684": "Michael Hermosillo",
  "596057": "Daniel Norris",
  "673548": "Seiya Suzuki",
  "592858": "Rowan Wick",
  "571710": "Mychal Givens",
  "643410": "Mark Leiter Jr.",
  "663538": "Nico Hoerner",
  "542364": "Rafael Ortega",
  "657006": "Justin Steele",
  "642770": "Javy Guerra",
  "621433": "Brett Phillips",
  "670764": "Taylor Walls",
  "623912": "Harold Ram\u00edrez",
  "664040": "Brandon Lowe",
  "607391": "Chris Mazza",
  "663556": "Shane McClanahan",
  "642336": "Francisco Mej\u00eda",
  "596847": "Ji Man Choi",
  "592094": "Jason Adam",
  "656222": "Jalen Beeks",
  "656420": "J.P. Feyereisen",
  "676596": "Josh Fleming",
  "622534": "Manuel Margot",
  "676637": "Phoenix Sanders",
  "666139": "Josh Lowe",
  "552640": "Andrew Kittredge",
  "650490": "Yandy D\u00edaz",
  "677551": "Wander Franco",
  "605488": "Jeffrey Springs",
  "657044": "Ryan Thompson",
  "656876": "Drew Rasmussen",
  "669357": "Nolan Gorman",
  "621295": "Nick Wittgren",
  "676050": "Packy Naughton",
  "676831": "Kodi Whitley",
  "669467": "Andre Pallante",
  "669461": "Matthew Liberatore",
  "680977": "Brendan Donovan",
  "572403": "Drew VerHagen",
  "660766": "Juan Yepez",
  "640492": "Jos\u00e9 Az\u00f3car",
  "622503": "Nabil Crismatt",
  "663158": "Robert Suarez",
  "621051": "Steven Wilson",
  "595777": "Jurickson Profar",
  "605397": "Joe Musgrove",
  "642727": "Sergio Alc\u00e1ntara",
  "657612": "Tim Hill",
  "592518": "Manny Machado",
  "669022": "MacKenzie Gore",
  "605483": "Blake Snell",
  "630105": "Jake Cronenworth",
  "673490": "Ha-Seong Kim",
  "543592": "Austin Nola",
  "595751": "Jorge Alfaro",
  "664161": "Matt Swarmer",
  "666624": "Christopher Morel",
  "663845": "Alfonso Rivas III",
  "668873": "Caleb Kilian",
  "676714": "Brandon Hughes",
  "664731": "P.J. Higgins",
  "621219": "Alec Mills",
  "675911": "Spencer Strider",
  "671739": "Michael Harris II",
  "503285": "Darren O'Day",
  "621566": "Matt Olson",
  "672911": "Jesus Cruz",
  "476595": "Lucas Luetge",
  "641482": "Nestor Cortes",
  "642152": "Lou Trivino III",
  "656061": "Albert Abreu",
  "642528": "Jonathan Lo\u00e1isiga",
  "592791": "Jameson Taillon",
  "543309": "Kyle Higashioka",
  "650402": "Gleyber Torres",
  "593423": "Frankie Montas",
  "643217": "Andrew Benintendi",
  "605280": "Clay Holmes",
  "668868": "Zack Thompson",
  "668941": "JoJo Romero",
  "663765": "Jake Woodford",
  "687093": "Vaughn Grissom",
  "665871": "Javier Assad",
  "669713": "Hayden Wesneski",
  "657272": "Erich Uelmen",
  "669093": "Jeremiah Estrada",
  "623520": "David Bote",
  "655889": "Manuel Rodr\u00edguez",
  "614177": "Franmil Reyes",
  "676369": "Nelson Vel\u00e1zquez",
  "628708": "Yunior Marte",
  "670768": "Luis Gonz\u00e1lez",
  "663698": "Joey Bart",
  "518397": "Scott Alexander",
  "642731": "Thairo Estrada",
  "642851": "Austin Wynns",
  "681584": "David Villar",
  "657277": "Logan Webb",
  "606424": "Jarl\u00edn Garc\u00eda",
  "643511": "Tyler Rogers",
  "641793": "Zack Littell",
  "664774": "LaMonte Wade Jr.",
  "666808": "Camilo Doval",
  "596001": "Jakob Junis",
  "573262": "Mike Yastrzemski",
  "605204": "J.D. Davis",
  "656814": "Luis Ortiz",
  "611093": "Silvino Bracho",
  "682829": "Elly De La Cruz",
  "663697": "Jonathan India",
  "682227": "Brandon Williamson",
  "641584": "Jake Fraley",
  "680574": "Matt McLain",
  "650960": "Daniel Duarte",
  "666181": "Will Benson",
  "670770": "TJ Friedl",
  "669222": "Nick Senzel",
  "668715": "Spencer Steer",
  "518585": "Fernando Cruz",
  "664139": "Ian Gibaut",
  "571912": "Luke Maile",
  "663886": "Tyler Stephenson",
  "571656": "Buck Farmer",
  "664747": "Alexis D\u00edaz",
  "641427": "Alan Busenitz",
  "671096": "Andrew Abbott",
  "543859": "Michael Tonkin",
  "623433": "Nick Anderson",
  "700363": "AJ Smith-Shawver",
  "621294": "Ben Heller",
  "656541": "Sam Hilliard",
  "694363": "Jared Shuster",
  "669221": "Sean Murphy",
  "641729": "Joe Jim\u00e9nez",
  "693821": "Bryce Elder",
  "571948": "Hoby Milner",
  "605170": "Victor Caratini",
  "686894": "Joey Wiemer",
  "663330": "Jahmai Jones",
  "608385": "Jesse Winker",
  "686217": "Sal Frelick",
  "682842": "Abner Uribe",
  "606303": "Joel Payamps",
  "655316": "Andruw Monasterio",
  "680911": "Owen Miller",
  "663368": "Blake Perkins",
  "665625": "Elvis Peguero",
  "607067": "Colin Rea",
  "668930": "Brice Turang",
  "642715": "Willy Adames",
  "669060": "Bryse Wilson",
  "656730": "Trevor Megill",
  "650496": "J.C. Mej\u00eda",
  "642216": "Allan Winans",
  "657088": "Forrest Wall",
  "605446": "Dereck Rodr\u00edguez",
  "669016": "Brandon Marsh",
  "650911": "Cristopher S\u00e1nchez",
  "547180": "Bryce Harper",
  "664761": "Alec Bohm",
  "592229": "Dylan Covey",
  "642397": "Gregory Soto",
  "607755": "Andrew Vasquez",
  "681082": "Bryson Stott",
  "656546": "Jeff Hoffman",
  "622554": "Seranthony Dom\u00ednguez",
  "595909": "Jake Cave",
  "621381": "Matt Strahm",
  "624133": "Ranger Suarez",
  "596117": "Garrett Stubbs",
  "656793": "Nick Nelson",
  "605400": "Aaron Nola",
  "679032": "Johan Rojas",
  "607208": "Trea Turner",
  "624428": "Adam Frazier",
  "665152": "Dean Kremer",
  "669330": "Tyler Wells",
  "657508": "Mike Baumann",
  "660261": "Shintaro Fujinami",
  "683002": "Gunnar Henderson",
  "622761": "Jorge Mateo",
  "623993": "Anthony Santander",
  "663630": "Ryan McKenna",
  "608344": "Cole Irvin",
  "663624": "Ryan Mountcastle",
  "668939": "Adley Rutschman",
  "680570": "Grayson Rodriguez",
  "676059": "Jordan Westburg",
  "672335": "Cionel P\u00e9rez",
  "669720": "Austin Hays",
  "602104": "Ram\u00f3n Ur\u00edas",
  "642585": "F\u00e9lix Bautista",
  "666974": "Yennier Cano",
  "681297": "Colton Cowser",
  "641329": "Bryan Baker",
  "543510": "James McCann",
  "656811": "Ryan O'Hearn",
  "650633": "Michael King",
  "641343": "Jake Bauers",
  "657376": "Clarke Schmidt",
  "656185": "Greg Allen",
  "641856": "Billy McKinney",
  "641656": "Ian Hamilton",
  "683011": "Anthony Volpe",
  "519317": "Giancarlo Stanton",
  "676760": "Ron Marinaccio",
  "598286": "Nick Ramirez",
  "572955": "Pierce Johnson",
  "672284": "Jarred Kelenic",
  "543518": "Scott McGough",
  "694297": "Brandon Pfaadt",
  "669459": "Kyle Nelson",
  "664983": "Jake McCarthy",
  "666818": "Luis Fr\u00edas",
  "674072": "Tommy Henry",
  "686826": "Bryce Jarvis",
  "677942": "Blaze Alexander",
  "669194": "Ryne Nelson",
  "672515": "Gabriel Moreno",
  "682998": "Corbin Carroll",
  "666971": "Lourdes Gurriel Jr.",
  "612434": "Miguel Castro",
  "681517": "Kyle Leahy",
  "665877": "Jos\u00e9 Ferm\u00edn",
  "681676": "Ryan Fernandez",
  "676475": "Alec Burleson",
  "672279": "Michael Siani",
  "686780": "Pedro Pag\u00e9s",
  "687798": "Nick Robertson",
  "691026": "Masyn Winn",
  "671056": "Iv\u00e1n Herrera",
  "682868": "Bryan Ramos",
  "686676": "Korey Lee",
  "669699": "Braden Shewmake",
  "683734": "Andrew Vaughn",
  "670032": "Nicky Lopez",
  "673929": "Jordan Leasure",
  "621383": "Tanner Banks",
  "641745": "Brad Keller",
  "688297": "Chris Roycroft",
  "694973": "Paul Skenes",
  "682847": "Luis Ortiz",
  "665833": "Oneil Cruz",
  "683003": "Jared Jones",
  "642133": "Rowdy Tellez",
  "658668": "Edward Olivares",
  "656582": "Connor Joe",
  "669707": "Jared Triolo",
  "677865": "Justin Bruihl",
  "670059": "Colin Holderman",
  "693312": "Kyle Nicolas",
  "669387": "Carmen Mlodzinski",
  "642701": "Dennis Santana",
  "680779": "Henry Davis",
  "641511": "Jason Delay",
  "663559": "Bailey Falter",
  "572191": "Michael A. Taylor",
  "669261": "Jack Suwinski",
  "693304": "Nick Gonzales",
  "676702": "Hunter Stratton",
  "695596": "Nick Raposo",
  "671218": "Heliot Ramos",
  "678495": "Randy Rodr\u00edguez",
  "676254": "Ryan Walker",
  "670092": "Trenton Brooks",
  "672275": "Patrick Bailey",
  "675921": "Spencer Howard",
  "702352": "Spencer Bivens",
  "689172": "Brett Wisely",
  "663546": "Sean Hjelle",
  "682641": "Luis Matos",
  "596103": "Austin Slater",
  "669062": "Erik Miller",
  "680885": "Spencer Schwellenbach",
  "670097": "Zack Short",
  "657656": "Ram\u00f3n Laureano",
  "656550": "Grant Holmes",
  "678226": "Daysbel Hern\u00e1ndez",
  "663897": "Luke Williams",
  "671732": "Lawrence Butler",
  "649966": "Luis Ur\u00edas",
  "695243": "Mason Miller",
  "667670": "Brent Rooker",
  "669372": "J.T. Ginn",
  "621053": "Tyler Ferguson",
  "680862": "Willie MacIver",
  "687765": "Mitch Spence",
  "680474": "Max Schuemann",
  "547184": "Michael Kelly",
  "674370": "Osvaldo Bido",
  "682052": "Jacob Lopez",
  "570482": "Gio Urshela",
  "691777": "Max Muncy",
  "672016": "Denzel Clarke",
  "691016": "Tyler Soderstrom",
  "701762": "Nick Kurtz",
  "663687": "Hogan Harris",
  "668709": "JJ Bleday",
  "676664": "JP Sears",
  "805779": "Jacob Wilson",
  "664285": "Framber Valdez",
  "694376": "Shay Whitcomb",
  "670623": "Isaac Paredes",
  "650556": "Bryan Abreu",
  "669450": "Cooper Hummel",
  "701358": "Cam Smith",
  "687888": "Brandon Walter",
  "686613": "Hunter Brown",
  "643289": "Mauricio Dub\u00f3n",
  "676694": "Jake Meyers",
  "663967": "C\u00e9sar Salazar",
  "656986": "Bennett Sousa",
  "687473": "Ryan Gusto",
  "665161": "Jeremy Pe\u00f1a",
  "681869": "Shawn Dubin",
  "687911": "Bryan King",
  "663321": "Nick Hernandez",
  "676467": "Colton Gordon",
  "673237": "Yainer Diaz",
  "673513": "Yuki Matsui",
  "688158": "David Morgan",
  "663604": "Brandon Lockridge",
  "670970": "Adrian Morejon",
  "669200": "Mason McCoy",
  "601713": "Nick Pivetta",
  "663568": "Stephen Kolek",
  "669308": "Sean Reynolds",
  "665487": "Fernando Tatis Jr.",
  "686701": "Ryan Bergert",
  "669369": "Bryce Johnson",
  "553869": "Elias D\u00edaz",
  "681190": "Randy V\u00e1squez",
  "666023": "Freddy Fermin",
  "669674": "Sam Long",
  "686475": "Tyler Tolbert",
  "679845": "Nick Loftin",
  "670231": "John Rave",
  "671221": "Drew Waters",
  "592192": "Mark Canha",
  "668674": "Lucas Erceg",
  "663460": "Kris Bubic",
  "664199": "Taylor Clarke",
  "608032": "Carlos Est\u00e9vez",
  "686469": "Vinnie Pasquantino",
  "664728": "Kyle Isbel",
  "663738": "Daniel Lynch IV",
  "672580": "Maikel Garcia",
  "702070": "Noah Cameron",
  "672582": "Angel Zerpa",
  "695506": "Jac Caglianone",
  "674444": "Steven Cruz",
  "670167": "John Schreiber",
  "677951": "Bobby Witt Jr.",
  "650859": "Luis Rengifo",
  "672569": "Gustavo Campero",
  "695681": "Christian Moore",
  "687263": "Zach Neto",
  "641401": "Connor Brogdon",
  "664068": "Scott Kingery",
  "667755": "Jos\u00e9 Soriano",
  "519326": "Hunter Strickland",
  "621493": "Taylor Ward",
  "686799": "Jack Kochanowicz",
  "545361": "Mike Trout",
  "666176": "Jo Adell",
  "696147": "Sam Bachman",
  "666171": "Ryan Zeferjahn",
  "694384": "Nolan Schanuel",
  "579328": "Yusei Kikuchi",
  "681351": "Logan O'Hoppe",
  "656271": "Brock Burke",
  "672282": "Reid Detmers",
  "542881": "Tyler Anderson",
  "676508": "Ben Casparius",
  "687221": "Dalton Rushing",
  "681911": "Alex Vesia",
  "571970": "Max Muncy",
  "808975": "Hyeseong Kim",
  "656945": "Tanner Scott",
  "660271": "Shohei Ohtani",
  "694361": "Will Klein",
  "680736": "Justin Wrobleski",
  "606192": "Teoscar Hern\u00e1ndez",
  "681624": "Andy Pages",
  "676263": "Jack Dreyer",
  "669160": "Dustin May",
  "808967": "Yoshinobu Yamamoto",
  "691781": "Brady House",
  "678606": "Jos\u00e9 A. Ferrer",
  "682928": "CJ Abrams",
  "694350": "Zach Brzykcy",
  "665953": "Andr\u00e9s Chaparro",
  "592866": "Trevor Williams",
  "669371": "Cole Henry",
  "695418": "Brad Lord",
  "695734": "Daylen Lile",
  "695578": "James Wood",
  "702795": "Ryan Loutos",
  "696285": "Jacob Young",
  "663623": "Jake Irvin",
  "669743": "Alex Call",
  "680730": "Mitchell Parker",
  "674285": "Eduardo Salazar",
  "671131": "Jackson Rutledge",
  "694335": "Matt Svanson",
  "687363": "Victor Scott II",
  "641658": "Garrett Hampson",
  "695336": "Thomas Saggese",
  "676617": "Riley O'Brien",
  "650968": "Yohel Pozo",
  "669397": "Nick Allen",
  "660853": "Enyel De Los Santos",
  "686948": "Drake Baldwin",
  "680735": "Austin Cox",
  "686249": "Nathan Wiles",
  "656413": "Stuart Fairchild",
  "700669": "Gordon Graceffo",
  "593833": "Wander Suero",
  "805373": "Nacho Alvarez Jr.",
  "669721": "Davis Daniel",
  "666214": "Joey Wentz",
  "700241": "Michael McGreevy",
  "691023": "Jordan Walker",
  "701552": "Andre Granillo",
  "701538": "Jackson Merrill",
  "606996": "Kyle Hart",
  "701675": "Nathan Church",
  "699625": "Jimmy Crooks",
  "669477": "Casey Schmitt",
  "678906": "Kai-Wei Teng",
  "676130": "Jos\u00e9 Butt\u00f3",
  "676775": "Keaton Winn",
  "693313": "Carson Seymour",
  "687551": "Drew Gilbert",
  "808982": "Jung Hoo Lee",
  "664192": "Joey Lucchesi",
  "666711": "Joel Peguero",
  "663941": "Tristan Beck",
  "687529": "Grant McCray",
  "683766": "Christian Koss",
  "657424": "Matt Gage",
  "690155": "Matt Pushard",
  "802139": "JJ Wetherholt",
  "666277": "George Soriano",
  "693409": "C\u00e9sar Prieto",
  "687462": "Spencer Horwitz",
  "682848": "Endy Rodr\u00edguez",
  "681895": "Evan Sisk",
  "682254": "Mason Montgomery",
  "663968": "Jake Mangum",
  "670990": "Yohan Ram\u00edrez",
  "676755": "Isaac Mattson",
  "696149": "Bubba Chandler",
  "691373": "Jhostynxon Garcia",
  "695257": "Billy Cook",
  "664875": "Justin Lawrence",
  "684049": "Brandan Bidois",
  "804606": "Konnor Griffin",
  "677952": "Braxton Ashcraft",
  "663494": "Bryan Torres",
  "691458": "Blaze Jordan",
  "703725": "Luis Gastelum",
  "689266": "Dylan Dodd",
  "675916": "James Karinchak",
  "682989": "Victor Mederos",
  "800311": "Didier Fuentes",
  "805347": "Jim Jarvis",
  "702275": "JR Ritchie",
  "571657": "Kyle Farmer",
  "641755": "Tyler Kinley",
  "664849": "Danny Young",
  "702566": "Owen Murphy",
  "676551": "Brewer Hicklen",
  "690928": "Hunter Dobbins",
  "666661": "Juan Morillo",
  "694374": "Tim Tawa",
  "680728": "Adrian Del Castillo",
  "672629": "Gerardo Carrillo",
  "682988": "Tyler Locklear",
  "814439": "Ryan Waldschmidt",
  "672695": "Geraldo Perdomo",
  "683352": "Mitch Bratt",
  "684442": "Kohl Drake",
  "805299": "Brandyn Garcia",
  "678489": "Jorge Barrosa",
  "641816": "Tyler Mahle",
  "527048": "Mart\u00edn P\u00e9rez",
  "694795": "Josh Ekness",
  "676604": "Tyler Zuber",
  "665052": "Griffin Conine",
  "664126": "Pete Fairbanks",
  "681715": "Heriberto Hern\u00e1ndez",
  "680767": "Victor Vodnik",
  "663969": "Tyler Phillips",
  "665923": "Esteury Ruiz",
  "805300": "Jakob Marsee",
  "676534": "Calvin Faucher",
  "691594": "Javier Sanoja",
  "806188": "Cade Gibson",
  "669364": "Xavier Edwards",
  "656848": "Michael Petersen",
  "669065": "Kyle Stowers",
  "683357": "Owen Caissie",
  "682663": "Agust\u00edn Ram\u00edrez",
  "677870": "Leo Jim\u00e9nez",
  "676083": "Janson Junk",
  "640459": "Brian Navarreto",
  "691788": "Joe Mack",
  "691587": "Eury P\u00e9rez",
  "672640": "Otto Lopez"
};

/* gamePk -> array of that game's participants (both teams,
   batters + pitchers), id+team only -- full per-player stat lines
   are intentionally not stored here to keep this file's size
   sane. Look up mlbPlayers[id] for the name. */
var mlbGamePlayers = {
  "245294": [
    {
      "id": 453895,
      "team": "STL"
    },
    {
      "id": 425487,
      "team": "STL"
    },
    {
      "id": 453198,
      "team": "STL"
    },
    {
      "id": 407871,
      "team": "STL"
    },
    {
      "id": 405395,
      "team": "STL"
    },
    {
      "id": 458003,
      "team": "STL"
    },
    {
      "id": 425867,
      "team": "STL"
    },
    {
      "id": 211041,
      "team": "STL"
    },
    {
      "id": 150178,
      "team": "STL"
    },
    {
      "id": 449072,
      "team": "STL"
    },
    {
      "id": 119125,
      "team": "STL"
    },
    {
      "id": 334492,
      "team": "STL"
    },
    {
      "id": 408219,
      "team": "STL"
    },
    {
      "id": 407886,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 458675,
      "team": "STL"
    },
    {
      "id": 448337,
      "team": "STL"
    },
    {
      "id": 121096,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 112020,
      "team": "STL"
    },
    {
      "id": 150449,
      "team": "STL"
    },
    {
      "id": 460022,
      "team": "STL"
    },
    {
      "id": 433581,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 435401,
      "team": "STL"
    },
    {
      "id": 430675,
      "team": "MIN"
    },
    {
      "id": 434538,
      "team": "MIN"
    },
    {
      "id": 133226,
      "team": "MIN"
    },
    {
      "id": 450282,
      "team": "MIN"
    },
    {
      "id": 285079,
      "team": "MIN"
    },
    {
      "id": 448147,
      "team": "MIN"
    },
    {
      "id": 430593,
      "team": "MIN"
    },
    {
      "id": 430670,
      "team": "MIN"
    },
    {
      "id": 458643,
      "team": "MIN"
    },
    {
      "id": 408045,
      "team": "MIN"
    },
    {
      "id": 408047,
      "team": "MIN"
    },
    {
      "id": 150317,
      "team": "MIN"
    },
    {
      "id": 430927,
      "team": "MIN"
    },
    {
      "id": 452655,
      "team": "MIN"
    },
    {
      "id": 445196,
      "team": "MIN"
    },
    {
      "id": 150212,
      "team": "MIN"
    },
    {
      "id": 430585,
      "team": "MIN"
    },
    {
      "id": 150274,
      "team": "MIN"
    },
    {
      "id": 430321,
      "team": "MIN"
    },
    {
      "id": 458713,
      "team": "MIN"
    },
    {
      "id": 460576,
      "team": "MIN"
    },
    {
      "id": 407825,
      "team": "MIN"
    },
    {
      "id": 467726,
      "team": "MIN"
    },
    {
      "id": 435044,
      "team": "MIN"
    },
    {
      "id": 346857,
      "team": "MIN"
    }
  ],
  "245324": [
    {
      "id": 453895,
      "team": "STL"
    },
    {
      "id": 425487,
      "team": "STL"
    },
    {
      "id": 407871,
      "team": "STL"
    },
    {
      "id": 405395,
      "team": "STL"
    },
    {
      "id": 458003,
      "team": "STL"
    },
    {
      "id": 425867,
      "team": "STL"
    },
    {
      "id": 211041,
      "team": "STL"
    },
    {
      "id": 136660,
      "team": "STL"
    },
    {
      "id": 150178,
      "team": "STL"
    },
    {
      "id": 449072,
      "team": "STL"
    },
    {
      "id": 119125,
      "team": "STL"
    },
    {
      "id": 334492,
      "team": "STL"
    },
    {
      "id": 408219,
      "team": "STL"
    },
    {
      "id": 407886,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 458675,
      "team": "STL"
    },
    {
      "id": 448337,
      "team": "STL"
    },
    {
      "id": 121096,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 112020,
      "team": "STL"
    },
    {
      "id": 150449,
      "team": "STL"
    },
    {
      "id": 460022,
      "team": "STL"
    },
    {
      "id": 433581,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 435401,
      "team": "STL"
    },
    {
      "id": 430675,
      "team": "MIN"
    },
    {
      "id": 434538,
      "team": "MIN"
    },
    {
      "id": 133226,
      "team": "MIN"
    },
    {
      "id": 450282,
      "team": "MIN"
    },
    {
      "id": 285079,
      "team": "MIN"
    },
    {
      "id": 448147,
      "team": "MIN"
    },
    {
      "id": 430593,
      "team": "MIN"
    },
    {
      "id": 430670,
      "team": "MIN"
    },
    {
      "id": 458643,
      "team": "MIN"
    },
    {
      "id": 408045,
      "team": "MIN"
    },
    {
      "id": 408047,
      "team": "MIN"
    },
    {
      "id": 150317,
      "team": "MIN"
    },
    {
      "id": 430927,
      "team": "MIN"
    },
    {
      "id": 452655,
      "team": "MIN"
    },
    {
      "id": 445196,
      "team": "MIN"
    },
    {
      "id": 150212,
      "team": "MIN"
    },
    {
      "id": 430585,
      "team": "MIN"
    },
    {
      "id": 150274,
      "team": "MIN"
    },
    {
      "id": 430321,
      "team": "MIN"
    },
    {
      "id": 458713,
      "team": "MIN"
    },
    {
      "id": 460576,
      "team": "MIN"
    },
    {
      "id": 407825,
      "team": "MIN"
    },
    {
      "id": 467726,
      "team": "MIN"
    },
    {
      "id": 435044,
      "team": "MIN"
    },
    {
      "id": 346857,
      "team": "MIN"
    }
  ],
  "245733": [
    {
      "id": 429841,
      "team": "ATL"
    },
    {
      "id": 452671,
      "team": "ATL"
    },
    {
      "id": 283166,
      "team": "ATL"
    },
    {
      "id": 110236,
      "team": "ATL"
    },
    {
      "id": 116706,
      "team": "ATL"
    },
    {
      "id": 498568,
      "team": "ATL"
    },
    {
      "id": 499877,
      "team": "ATL"
    },
    {
      "id": 457453,
      "team": "ATL"
    },
    {
      "id": 424325,
      "team": "ATL"
    },
    {
      "id": 407924,
      "team": "ATL"
    },
    {
      "id": 447714,
      "team": "ATL"
    },
    {
      "id": 119853,
      "team": "ATL"
    },
    {
      "id": 445988,
      "team": "ATL"
    },
    {
      "id": 425508,
      "team": "ATL"
    },
    {
      "id": 488862,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 493247,
      "team": "ATL"
    },
    {
      "id": 462102,
      "team": "ATL"
    },
    {
      "id": 434661,
      "team": "ATL"
    },
    {
      "id": 134320,
      "team": "ATL"
    },
    {
      "id": 430637,
      "team": "ATL"
    },
    {
      "id": 117955,
      "team": "ATL"
    },
    {
      "id": 450665,
      "team": "ATL"
    },
    {
      "id": 457429,
      "team": "ATL"
    },
    {
      "id": 451532,
      "team": "LAD"
    },
    {
      "id": 112128,
      "team": "LAD"
    },
    {
      "id": 431145,
      "team": "LAD"
    },
    {
      "id": 425766,
      "team": "LAD"
    },
    {
      "id": 493133,
      "team": "LAD"
    },
    {
      "id": 461314,
      "team": "LAD"
    },
    {
      "id": 455092,
      "team": "LAD"
    },
    {
      "id": 279577,
      "team": "LAD"
    },
    {
      "id": 444843,
      "team": "LAD"
    },
    {
      "id": 121834,
      "team": "LAD"
    },
    {
      "id": 150116,
      "team": "LAD"
    },
    {
      "id": 120903,
      "team": "LAD"
    },
    {
      "id": 455009,
      "team": "LAD"
    },
    {
      "id": 430941,
      "team": "LAD"
    },
    {
      "id": 334393,
      "team": "LAD"
    },
    {
      "id": 457428,
      "team": "LAD"
    },
    {
      "id": 407861,
      "team": "LAD"
    },
    {
      "id": 117928,
      "team": "LAD"
    },
    {
      "id": 213711,
      "team": "LAD"
    },
    {
      "id": 470462,
      "team": "LAD"
    },
    {
      "id": 425539,
      "team": "LAD"
    },
    {
      "id": 232694,
      "team": "LAD"
    },
    {
      "id": 477132,
      "team": "LAD"
    },
    {
      "id": 150407,
      "team": "LAD"
    },
    {
      "id": 110385,
      "team": "LAD"
    }
  ],
  "245748": [
    {
      "id": 425560,
      "team": "ATL"
    },
    {
      "id": 429841,
      "team": "ATL"
    },
    {
      "id": 116706,
      "team": "ATL"
    },
    {
      "id": 499877,
      "team": "ATL"
    },
    {
      "id": 457453,
      "team": "ATL"
    },
    {
      "id": 400089,
      "team": "ATL"
    },
    {
      "id": 447714,
      "team": "ATL"
    },
    {
      "id": 488862,
      "team": "ATL"
    },
    {
      "id": 493247,
      "team": "ATL"
    },
    {
      "id": 434661,
      "team": "ATL"
    },
    {
      "id": 134320,
      "team": "ATL"
    },
    {
      "id": 457429,
      "team": "ATL"
    },
    {
      "id": 452671,
      "team": "ATL"
    },
    {
      "id": 283166,
      "team": "ATL"
    },
    {
      "id": 110236,
      "team": "ATL"
    },
    {
      "id": 424325,
      "team": "ATL"
    },
    {
      "id": 407924,
      "team": "ATL"
    },
    {
      "id": 119853,
      "team": "ATL"
    },
    {
      "id": 445988,
      "team": "ATL"
    },
    {
      "id": 425508,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 462102,
      "team": "ATL"
    },
    {
      "id": 430637,
      "team": "ATL"
    },
    {
      "id": 117955,
      "team": "ATL"
    },
    {
      "id": 450665,
      "team": "ATL"
    },
    {
      "id": 451532,
      "team": "LAD"
    },
    {
      "id": 112128,
      "team": "LAD"
    },
    {
      "id": 431145,
      "team": "LAD"
    },
    {
      "id": 425766,
      "team": "LAD"
    },
    {
      "id": 493133,
      "team": "LAD"
    },
    {
      "id": 461314,
      "team": "LAD"
    },
    {
      "id": 455092,
      "team": "LAD"
    },
    {
      "id": 279577,
      "team": "LAD"
    },
    {
      "id": 444843,
      "team": "LAD"
    },
    {
      "id": 121834,
      "team": "LAD"
    },
    {
      "id": 150116,
      "team": "LAD"
    },
    {
      "id": 120903,
      "team": "LAD"
    },
    {
      "id": 455009,
      "team": "LAD"
    },
    {
      "id": 430941,
      "team": "LAD"
    },
    {
      "id": 334393,
      "team": "LAD"
    },
    {
      "id": 457428,
      "team": "LAD"
    },
    {
      "id": 407861,
      "team": "LAD"
    },
    {
      "id": 117928,
      "team": "LAD"
    },
    {
      "id": 213711,
      "team": "LAD"
    },
    {
      "id": 470462,
      "team": "LAD"
    },
    {
      "id": 425539,
      "team": "LAD"
    },
    {
      "id": 232694,
      "team": "LAD"
    },
    {
      "id": 477132,
      "team": "LAD"
    },
    {
      "id": 150407,
      "team": "LAD"
    },
    {
      "id": 110385,
      "team": "LAD"
    }
  ],
  "245763": [
    {
      "id": 425560,
      "team": "ATL"
    },
    {
      "id": 429841,
      "team": "ATL"
    },
    {
      "id": 452671,
      "team": "ATL"
    },
    {
      "id": 283166,
      "team": "ATL"
    },
    {
      "id": 110236,
      "team": "ATL"
    },
    {
      "id": 116706,
      "team": "ATL"
    },
    {
      "id": 499877,
      "team": "ATL"
    },
    {
      "id": 457453,
      "team": "ATL"
    },
    {
      "id": 424325,
      "team": "ATL"
    },
    {
      "id": 407924,
      "team": "ATL"
    },
    {
      "id": 447714,
      "team": "ATL"
    },
    {
      "id": 119853,
      "team": "ATL"
    },
    {
      "id": 445988,
      "team": "ATL"
    },
    {
      "id": 425508,
      "team": "ATL"
    },
    {
      "id": 488862,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 493247,
      "team": "ATL"
    },
    {
      "id": 462102,
      "team": "ATL"
    },
    {
      "id": 434661,
      "team": "ATL"
    },
    {
      "id": 134320,
      "team": "ATL"
    },
    {
      "id": 430637,
      "team": "ATL"
    },
    {
      "id": 117955,
      "team": "ATL"
    },
    {
      "id": 450665,
      "team": "ATL"
    },
    {
      "id": 457429,
      "team": "ATL"
    },
    {
      "id": 451532,
      "team": "LAD"
    },
    {
      "id": 112128,
      "team": "LAD"
    },
    {
      "id": 431145,
      "team": "LAD"
    },
    {
      "id": 425766,
      "team": "LAD"
    },
    {
      "id": 493133,
      "team": "LAD"
    },
    {
      "id": 461314,
      "team": "LAD"
    },
    {
      "id": 455092,
      "team": "LAD"
    },
    {
      "id": 279577,
      "team": "LAD"
    },
    {
      "id": 444843,
      "team": "LAD"
    },
    {
      "id": 121834,
      "team": "LAD"
    },
    {
      "id": 150116,
      "team": "LAD"
    },
    {
      "id": 120903,
      "team": "LAD"
    },
    {
      "id": 455009,
      "team": "LAD"
    },
    {
      "id": 430941,
      "team": "LAD"
    },
    {
      "id": 334393,
      "team": "LAD"
    },
    {
      "id": 457428,
      "team": "LAD"
    },
    {
      "id": 407861,
      "team": "LAD"
    },
    {
      "id": 117928,
      "team": "LAD"
    },
    {
      "id": 213711,
      "team": "LAD"
    },
    {
      "id": 470462,
      "team": "LAD"
    },
    {
      "id": 425539,
      "team": "LAD"
    },
    {
      "id": 232694,
      "team": "LAD"
    },
    {
      "id": 477132,
      "team": "LAD"
    },
    {
      "id": 150407,
      "team": "LAD"
    },
    {
      "id": 110385,
      "team": "LAD"
    }
  ],
  "264112": [
    {
      "id": 453895,
      "team": "STL"
    },
    {
      "id": 346798,
      "team": "STL"
    },
    {
      "id": 405395,
      "team": "STL"
    },
    {
      "id": 458003,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 211041,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 207267,
      "team": "STL"
    },
    {
      "id": 150178,
      "team": "STL"
    },
    {
      "id": 449072,
      "team": "STL"
    },
    {
      "id": 119125,
      "team": "STL"
    },
    {
      "id": 407886,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 458675,
      "team": "STL"
    },
    {
      "id": 458036,
      "team": "STL"
    },
    {
      "id": 121096,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 112020,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 460022,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 435401,
      "team": "STL"
    },
    {
      "id": 459939,
      "team": "STL"
    },
    {
      "id": 458628,
      "team": "STL"
    },
    {
      "id": 429841,
      "team": "ATL"
    },
    {
      "id": 458924,
      "team": "ATL"
    },
    {
      "id": 116706,
      "team": "ATL"
    },
    {
      "id": 218596,
      "team": "ATL"
    },
    {
      "id": 499877,
      "team": "ATL"
    },
    {
      "id": 457453,
      "team": "ATL"
    },
    {
      "id": 445926,
      "team": "ATL"
    },
    {
      "id": 462405,
      "team": "ATL"
    },
    {
      "id": 447714,
      "team": "ATL"
    },
    {
      "id": 488862,
      "team": "ATL"
    },
    {
      "id": 518792,
      "team": "ATL"
    },
    {
      "id": 493247,
      "team": "ATL"
    },
    {
      "id": 434661,
      "team": "ATL"
    },
    {
      "id": 136267,
      "team": "ATL"
    },
    {
      "id": 123790,
      "team": "ATL"
    },
    {
      "id": 408299,
      "team": "ATL"
    },
    {
      "id": 424325,
      "team": "ATL"
    },
    {
      "id": 400134,
      "team": "ATL"
    },
    {
      "id": 445988,
      "team": "ATL"
    },
    {
      "id": 493416,
      "team": "ATL"
    },
    {
      "id": 466320,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 462102,
      "team": "ATL"
    },
    {
      "id": 117955,
      "team": "ATL"
    },
    {
      "id": 450665,
      "team": "ATL"
    }
  ],
  "264325": [
    {
      "id": 453895,
      "team": "STL"
    },
    {
      "id": 346798,
      "team": "STL"
    },
    {
      "id": 405395,
      "team": "STL"
    },
    {
      "id": 458003,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 211041,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 207267,
      "team": "STL"
    },
    {
      "id": 150178,
      "team": "STL"
    },
    {
      "id": 449072,
      "team": "STL"
    },
    {
      "id": 119125,
      "team": "STL"
    },
    {
      "id": 407886,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 458675,
      "team": "STL"
    },
    {
      "id": 458036,
      "team": "STL"
    },
    {
      "id": 121096,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 112020,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 460022,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 435401,
      "team": "STL"
    },
    {
      "id": 459939,
      "team": "STL"
    },
    {
      "id": 458628,
      "team": "STL"
    },
    {
      "id": 434637,
      "team": "HOU"
    },
    {
      "id": 448200,
      "team": "HOU"
    },
    {
      "id": 400061,
      "team": "HOU"
    },
    {
      "id": 456422,
      "team": "HOU"
    },
    {
      "id": 408206,
      "team": "HOU"
    },
    {
      "id": 279827,
      "team": "HOU"
    },
    {
      "id": 446641,
      "team": "HOU"
    },
    {
      "id": 502032,
      "team": "HOU"
    },
    {
      "id": 434643,
      "team": "HOU"
    },
    {
      "id": 407193,
      "team": "HOU"
    },
    {
      "id": 150398,
      "team": "HOU"
    },
    {
      "id": 433898,
      "team": "HOU"
    },
    {
      "id": 430622,
      "team": "HOU"
    },
    {
      "id": 430565,
      "team": "HOU"
    },
    {
      "id": 452254,
      "team": "HOU"
    },
    {
      "id": 407860,
      "team": "HOU"
    },
    {
      "id": 408211,
      "team": "HOU"
    },
    {
      "id": 462956,
      "team": "HOU"
    },
    {
      "id": 119215,
      "team": "HOU"
    },
    {
      "id": 445246,
      "team": "HOU"
    },
    {
      "id": 150324,
      "team": "HOU"
    },
    {
      "id": 346859,
      "team": "HOU"
    },
    {
      "id": 446373,
      "team": "HOU"
    },
    {
      "id": 204020,
      "team": "HOU"
    },
    {
      "id": 150268,
      "team": "HOU"
    }
  ],
  "288175": [
    {
      "id": 453236,
      "team": "STL"
    },
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 477569,
      "team": "STL"
    },
    {
      "id": 346798,
      "team": "STL"
    },
    {
      "id": 458675,
      "team": "STL"
    },
    {
      "id": 447744,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 112020,
      "team": "STL"
    },
    {
      "id": 505447,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 444135,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 346857,
      "team": "STL"
    },
    {
      "id": 150414,
      "team": "STL"
    },
    {
      "id": 435401,
      "team": "STL"
    },
    {
      "id": 459939,
      "team": "STL"
    },
    {
      "id": 449072,
      "team": "STL"
    },
    {
      "id": 119125,
      "team": "STL"
    },
    {
      "id": 204020,
      "team": "STL"
    },
    {
      "id": 456501,
      "team": "CIN"
    },
    {
      "id": 456701,
      "team": "CIN"
    },
    {
      "id": 502190,
      "team": "CIN"
    },
    {
      "id": 453211,
      "team": "CIN"
    },
    {
      "id": 276520,
      "team": "CIN"
    },
    {
      "id": 502317,
      "team": "CIN"
    },
    {
      "id": 434665,
      "team": "CIN"
    },
    {
      "id": 430404,
      "team": "CIN"
    },
    {
      "id": 457926,
      "team": "CIN"
    },
    {
      "id": 446185,
      "team": "CIN"
    },
    {
      "id": 435538,
      "team": "CIN"
    },
    {
      "id": 457803,
      "team": "CIN"
    },
    {
      "id": 452672,
      "team": "CIN"
    },
    {
      "id": 459967,
      "team": "CIN"
    },
    {
      "id": 450172,
      "team": "CIN"
    },
    {
      "id": 458015,
      "team": "CIN"
    },
    {
      "id": 111867,
      "team": "CIN"
    },
    {
      "id": 461766,
      "team": "CIN"
    },
    {
      "id": 121074,
      "team": "CIN"
    },
    {
      "id": 408252,
      "team": "CIN"
    },
    {
      "id": 121409,
      "team": "CIN"
    },
    {
      "id": 150188,
      "team": "CIN"
    },
    {
      "id": 547973,
      "team": "CIN"
    },
    {
      "id": 150421,
      "team": "CIN"
    },
    {
      "id": 430930,
      "team": "CIN"
    }
  ],
  "289064": [
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 477569,
      "team": "STL"
    },
    {
      "id": 346798,
      "team": "STL"
    },
    {
      "id": 405395,
      "team": "STL"
    },
    {
      "id": 279577,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 121125,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 521055,
      "team": "STL"
    },
    {
      "id": 505447,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 408042,
      "team": "STL"
    },
    {
      "id": 519240,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 150414,
      "team": "STL"
    },
    {
      "id": 449072,
      "team": "STL"
    },
    {
      "id": 453203,
      "team": "STL"
    },
    {
      "id": 429719,
      "team": "STL"
    },
    {
      "id": 518545,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 112020,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 279913,
      "team": "STL"
    },
    {
      "id": 460022,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 346857,
      "team": "STL"
    },
    {
      "id": 435401,
      "team": "STL"
    },
    {
      "id": 136734,
      "team": "STL"
    },
    {
      "id": 459939,
      "team": "STL"
    },
    {
      "id": 204020,
      "team": "STL"
    },
    {
      "id": 429841,
      "team": "ATL"
    },
    {
      "id": 458924,
      "team": "ATL"
    },
    {
      "id": 116706,
      "team": "ATL"
    },
    {
      "id": 456422,
      "team": "ATL"
    },
    {
      "id": 218596,
      "team": "ATL"
    },
    {
      "id": 457453,
      "team": "ATL"
    },
    {
      "id": 460322,
      "team": "ATL"
    },
    {
      "id": 468429,
      "team": "ATL"
    },
    {
      "id": 460008,
      "team": "ATL"
    },
    {
      "id": 462405,
      "team": "ATL"
    },
    {
      "id": 447714,
      "team": "ATL"
    },
    {
      "id": 400268,
      "team": "ATL"
    },
    {
      "id": 501985,
      "team": "ATL"
    },
    {
      "id": 518792,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 136460,
      "team": "ATL"
    },
    {
      "id": 493247,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 545404,
      "team": "ATL"
    },
    {
      "id": 527055,
      "team": "ATL"
    },
    {
      "id": 450852,
      "team": "ATL"
    },
    {
      "id": 424325,
      "team": "ATL"
    },
    {
      "id": 276530,
      "team": "ATL"
    },
    {
      "id": 517414,
      "team": "ATL"
    },
    {
      "id": 400134,
      "team": "ATL"
    },
    {
      "id": 518886,
      "team": "ATL"
    },
    {
      "id": 445988,
      "team": "ATL"
    },
    {
      "id": 462564,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 333292,
      "team": "ATL"
    },
    {
      "id": 117955,
      "team": "ATL"
    }
  ],
  "289079": [
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 477569,
      "team": "STL"
    },
    {
      "id": 346798,
      "team": "STL"
    },
    {
      "id": 405395,
      "team": "STL"
    },
    {
      "id": 279577,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 121125,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 521055,
      "team": "STL"
    },
    {
      "id": 505447,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 408042,
      "team": "STL"
    },
    {
      "id": 519240,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 150414,
      "team": "STL"
    },
    {
      "id": 449072,
      "team": "STL"
    },
    {
      "id": 453203,
      "team": "STL"
    },
    {
      "id": 429719,
      "team": "STL"
    },
    {
      "id": 518545,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 112020,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 279913,
      "team": "STL"
    },
    {
      "id": 460022,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 346857,
      "team": "STL"
    },
    {
      "id": 435401,
      "team": "STL"
    },
    {
      "id": 136734,
      "team": "STL"
    },
    {
      "id": 459939,
      "team": "STL"
    },
    {
      "id": 204020,
      "team": "STL"
    },
    {
      "id": 429841,
      "team": "ATL"
    },
    {
      "id": 458924,
      "team": "ATL"
    },
    {
      "id": 116706,
      "team": "ATL"
    },
    {
      "id": 456422,
      "team": "ATL"
    },
    {
      "id": 218596,
      "team": "ATL"
    },
    {
      "id": 457453,
      "team": "ATL"
    },
    {
      "id": 460322,
      "team": "ATL"
    },
    {
      "id": 468429,
      "team": "ATL"
    },
    {
      "id": 460008,
      "team": "ATL"
    },
    {
      "id": 462405,
      "team": "ATL"
    },
    {
      "id": 447714,
      "team": "ATL"
    },
    {
      "id": 400268,
      "team": "ATL"
    },
    {
      "id": 501985,
      "team": "ATL"
    },
    {
      "id": 518792,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 136460,
      "team": "ATL"
    },
    {
      "id": 493247,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 545404,
      "team": "ATL"
    },
    {
      "id": 527055,
      "team": "ATL"
    },
    {
      "id": 450852,
      "team": "ATL"
    },
    {
      "id": 424325,
      "team": "ATL"
    },
    {
      "id": 276530,
      "team": "ATL"
    },
    {
      "id": 517414,
      "team": "ATL"
    },
    {
      "id": 400134,
      "team": "ATL"
    },
    {
      "id": 518886,
      "team": "ATL"
    },
    {
      "id": 445988,
      "team": "ATL"
    },
    {
      "id": 462564,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 333292,
      "team": "ATL"
    },
    {
      "id": 117955,
      "team": "ATL"
    }
  ],
  "318223": [
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 477569,
      "team": "STL"
    },
    {
      "id": 346798,
      "team": "STL"
    },
    {
      "id": 279577,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 519240,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 136860,
      "team": "STL"
    },
    {
      "id": 150414,
      "team": "STL"
    },
    {
      "id": 449072,
      "team": "STL"
    },
    {
      "id": 240694,
      "team": "STL"
    },
    {
      "id": 453203,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 460022,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 435401,
      "team": "STL"
    },
    {
      "id": 469690,
      "team": "STL"
    },
    {
      "id": 459939,
      "team": "STL"
    },
    {
      "id": 429841,
      "team": "ATL"
    },
    {
      "id": 458924,
      "team": "ATL"
    },
    {
      "id": 115817,
      "team": "ATL"
    },
    {
      "id": 116706,
      "team": "ATL"
    },
    {
      "id": 456422,
      "team": "ATL"
    },
    {
      "id": 218596,
      "team": "ATL"
    },
    {
      "id": 447714,
      "team": "ATL"
    },
    {
      "id": 239795,
      "team": "ATL"
    },
    {
      "id": 501985,
      "team": "ATL"
    },
    {
      "id": 518792,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 464433,
      "team": "ATL"
    },
    {
      "id": 545404,
      "team": "ATL"
    },
    {
      "id": 450852,
      "team": "ATL"
    },
    {
      "id": 543629,
      "team": "ATL"
    },
    {
      "id": 424325,
      "team": "ATL"
    },
    {
      "id": 517414,
      "team": "ATL"
    },
    {
      "id": 400134,
      "team": "ATL"
    },
    {
      "id": 518886,
      "team": "ATL"
    },
    {
      "id": 445988,
      "team": "ATL"
    },
    {
      "id": 462564,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 462102,
      "team": "ATL"
    },
    {
      "id": 333292,
      "team": "ATL"
    },
    {
      "id": 450665,
      "team": "ATL"
    }
  ],
  "318238": [
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 477569,
      "team": "STL"
    },
    {
      "id": 346798,
      "team": "STL"
    },
    {
      "id": 279577,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 519240,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 136860,
      "team": "STL"
    },
    {
      "id": 150414,
      "team": "STL"
    },
    {
      "id": 449072,
      "team": "STL"
    },
    {
      "id": 240694,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 460022,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 435401,
      "team": "STL"
    },
    {
      "id": 469690,
      "team": "STL"
    },
    {
      "id": 459939,
      "team": "STL"
    },
    {
      "id": 204020,
      "team": "STL"
    },
    {
      "id": 429841,
      "team": "ATL"
    },
    {
      "id": 458924,
      "team": "ATL"
    },
    {
      "id": 115817,
      "team": "ATL"
    },
    {
      "id": 116706,
      "team": "ATL"
    },
    {
      "id": 456422,
      "team": "ATL"
    },
    {
      "id": 218596,
      "team": "ATL"
    },
    {
      "id": 447714,
      "team": "ATL"
    },
    {
      "id": 239795,
      "team": "ATL"
    },
    {
      "id": 501985,
      "team": "ATL"
    },
    {
      "id": 518792,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 464433,
      "team": "ATL"
    },
    {
      "id": 545404,
      "team": "ATL"
    },
    {
      "id": 450852,
      "team": "ATL"
    },
    {
      "id": 543629,
      "team": "ATL"
    },
    {
      "id": 424325,
      "team": "ATL"
    },
    {
      "id": 517414,
      "team": "ATL"
    },
    {
      "id": 400134,
      "team": "ATL"
    },
    {
      "id": 518886,
      "team": "ATL"
    },
    {
      "id": 445988,
      "team": "ATL"
    },
    {
      "id": 462564,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 462102,
      "team": "ATL"
    },
    {
      "id": 333292,
      "team": "ATL"
    },
    {
      "id": 450665,
      "team": "ATL"
    }
  ],
  "318645": [
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 477569,
      "team": "STL"
    },
    {
      "id": 346798,
      "team": "STL"
    },
    {
      "id": 279577,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 500674,
      "team": "STL"
    },
    {
      "id": 571431,
      "team": "STL"
    },
    {
      "id": 521055,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 518693,
      "team": "STL"
    },
    {
      "id": 519240,
      "team": "STL"
    },
    {
      "id": 136860,
      "team": "STL"
    },
    {
      "id": 150414,
      "team": "STL"
    },
    {
      "id": 453203,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 518545,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 460022,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 523260,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 469690,
      "team": "STL"
    },
    {
      "id": 459939,
      "team": "STL"
    },
    {
      "id": 518858,
      "team": "CWS"
    },
    {
      "id": 452121,
      "team": "CWS"
    },
    {
      "id": 458668,
      "team": "CWS"
    },
    {
      "id": 543819,
      "team": "CWS"
    },
    {
      "id": 457477,
      "team": "CWS"
    },
    {
      "id": 493351,
      "team": "CWS"
    },
    {
      "id": 425567,
      "team": "CWS"
    },
    {
      "id": 493596,
      "team": "CWS"
    },
    {
      "id": 592665,
      "team": "CWS"
    },
    {
      "id": 500871,
      "team": "CWS"
    },
    {
      "id": 117244,
      "team": "CWS"
    },
    {
      "id": 519242,
      "team": "CWS"
    },
    {
      "id": 408241,
      "team": "CWS"
    },
    {
      "id": 500779,
      "team": "CWS"
    },
    {
      "id": 430884,
      "team": "CWS"
    },
    {
      "id": 407861,
      "team": "CWS"
    },
    {
      "id": 458950,
      "team": "CWS"
    },
    {
      "id": 276055,
      "team": "CWS"
    },
    {
      "id": 493364,
      "team": "CWS"
    },
    {
      "id": 452095,
      "team": "CWS"
    },
    {
      "id": 425856,
      "team": "CWS"
    },
    {
      "id": 349193,
      "team": "CWS"
    },
    {
      "id": 150229,
      "team": "CWS"
    },
    {
      "id": 502327,
      "team": "CWS"
    },
    {
      "id": 407819,
      "team": "CWS"
    }
  ],
  "318888": [
    {
      "id": 488919,
      "team": "MIL"
    },
    {
      "id": 115817,
      "team": "MIL"
    },
    {
      "id": 455117,
      "team": "MIL"
    },
    {
      "id": 451596,
      "team": "MIL"
    },
    {
      "id": 285131,
      "team": "MIL"
    },
    {
      "id": 571666,
      "team": "MIL"
    },
    {
      "id": 425844,
      "team": "MIL"
    },
    {
      "id": 434180,
      "team": "MIL"
    },
    {
      "id": 460075,
      "team": "MIL"
    },
    {
      "id": 408061,
      "team": "MIL"
    },
    {
      "id": 462136,
      "team": "MIL"
    },
    {
      "id": 150116,
      "team": "MIL"
    },
    {
      "id": 435459,
      "team": "MIL"
    },
    {
      "id": 407842,
      "team": "MIL"
    },
    {
      "id": 285068,
      "team": "MIL"
    },
    {
      "id": 430001,
      "team": "MIL"
    },
    {
      "id": 457422,
      "team": "MIL"
    },
    {
      "id": 460576,
      "team": "MIL"
    },
    {
      "id": 448159,
      "team": "MIL"
    },
    {
      "id": 460579,
      "team": "MIL"
    },
    {
      "id": 133380,
      "team": "MIL"
    },
    {
      "id": 493114,
      "team": "MIL"
    },
    {
      "id": 446099,
      "team": "MIL"
    },
    {
      "id": 448170,
      "team": "MIL"
    },
    {
      "id": 430611,
      "team": "MIL"
    },
    {
      "id": 452220,
      "team": "AZ"
    },
    {
      "id": 430585,
      "team": "AZ"
    },
    {
      "id": 407489,
      "team": "AZ"
    },
    {
      "id": 456696,
      "team": "AZ"
    },
    {
      "id": 453178,
      "team": "AZ"
    },
    {
      "id": 217100,
      "team": "AZ"
    },
    {
      "id": 407816,
      "team": "AZ"
    },
    {
      "id": 431094,
      "team": "AZ"
    },
    {
      "id": 518567,
      "team": "AZ"
    },
    {
      "id": 571578,
      "team": "AZ"
    },
    {
      "id": 471083,
      "team": "AZ"
    },
    {
      "id": 467827,
      "team": "AZ"
    },
    {
      "id": 111072,
      "team": "AZ"
    },
    {
      "id": 446899,
      "team": "AZ"
    },
    {
      "id": 444520,
      "team": "AZ"
    },
    {
      "id": 440251,
      "team": "AZ"
    },
    {
      "id": 502239,
      "team": "AZ"
    },
    {
      "id": 489119,
      "team": "AZ"
    },
    {
      "id": 489448,
      "team": "AZ"
    },
    {
      "id": 457708,
      "team": "AZ"
    },
    {
      "id": 545333,
      "team": "AZ"
    },
    {
      "id": 543766,
      "team": "AZ"
    },
    {
      "id": 502671,
      "team": "AZ"
    },
    {
      "id": 455759,
      "team": "AZ"
    }
  ],
  "318909": [
    {
      "id": 475243,
      "team": "CHC"
    },
    {
      "id": 425861,
      "team": "CHC"
    },
    {
      "id": 519203,
      "team": "CHC"
    },
    {
      "id": 516770,
      "team": "CHC"
    },
    {
      "id": 460701,
      "team": "CHC"
    },
    {
      "id": 490063,
      "team": "CHC"
    },
    {
      "id": 445933,
      "team": "CHC"
    },
    {
      "id": 503569,
      "team": "CHC"
    },
    {
      "id": 488787,
      "team": "CHC"
    },
    {
      "id": 446003,
      "team": "CHC"
    },
    {
      "id": 430904,
      "team": "CHC"
    },
    {
      "id": 434567,
      "team": "CHC"
    },
    {
      "id": 446381,
      "team": "CHC"
    },
    {
      "id": 472528,
      "team": "CHC"
    },
    {
      "id": 430203,
      "team": "CHC"
    },
    {
      "id": 542999,
      "team": "CHC"
    },
    {
      "id": 407862,
      "team": "CHC"
    },
    {
      "id": 453186,
      "team": "CHC"
    },
    {
      "id": 502182,
      "team": "CHC"
    },
    {
      "id": 150093,
      "team": "CHC"
    },
    {
      "id": 425557,
      "team": "CHC"
    },
    {
      "id": 466918,
      "team": "CHC"
    },
    {
      "id": 461791,
      "team": "CHC"
    },
    {
      "id": 458628,
      "team": "CHC"
    },
    {
      "id": 502188,
      "team": "CHC"
    },
    {
      "id": 449079,
      "team": "HOU"
    },
    {
      "id": 472551,
      "team": "HOU"
    },
    {
      "id": 408206,
      "team": "HOU"
    },
    {
      "id": 444448,
      "team": "HOU"
    },
    {
      "id": 445599,
      "team": "HOU"
    },
    {
      "id": 460131,
      "team": "HOU"
    },
    {
      "id": 502032,
      "team": "HOU"
    },
    {
      "id": 476704,
      "team": "HOU"
    },
    {
      "id": 434643,
      "team": "HOU"
    },
    {
      "id": 407193,
      "team": "HOU"
    },
    {
      "id": 430965,
      "team": "HOU"
    },
    {
      "id": 502110,
      "team": "HOU"
    },
    {
      "id": 449173,
      "team": "HOU"
    },
    {
      "id": 453400,
      "team": "HOU"
    },
    {
      "id": 514888,
      "team": "HOU"
    },
    {
      "id": 457788,
      "team": "HOU"
    },
    {
      "id": 453303,
      "team": "HOU"
    },
    {
      "id": 488771,
      "team": "HOU"
    },
    {
      "id": 502304,
      "team": "HOU"
    },
    {
      "id": 572971,
      "team": "HOU"
    },
    {
      "id": 150324,
      "team": "HOU"
    },
    {
      "id": 543475,
      "team": "HOU"
    },
    {
      "id": 457918,
      "team": "HOU"
    },
    {
      "id": 451775,
      "team": "HOU"
    },
    {
      "id": 462480,
      "team": "HOU"
    }
  ],
  "318934": [
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 477569,
      "team": "STL"
    },
    {
      "id": 346798,
      "team": "STL"
    },
    {
      "id": 279577,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 521055,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 519240,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 136860,
      "team": "STL"
    },
    {
      "id": 150414,
      "team": "STL"
    },
    {
      "id": 453203,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 460022,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 446135,
      "team": "STL"
    },
    {
      "id": 523260,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 435401,
      "team": "STL"
    },
    {
      "id": 469690,
      "team": "STL"
    },
    {
      "id": 459939,
      "team": "STL"
    },
    {
      "id": 451594,
      "team": "COL"
    },
    {
      "id": 429783,
      "team": "COL"
    },
    {
      "id": 279571,
      "team": "COL"
    },
    {
      "id": 425386,
      "team": "COL"
    },
    {
      "id": 457574,
      "team": "COL"
    },
    {
      "id": 571521,
      "team": "COL"
    },
    {
      "id": 340192,
      "team": "COL"
    },
    {
      "id": 493603,
      "team": "COL"
    },
    {
      "id": 502158,
      "team": "COL"
    },
    {
      "id": 543022,
      "team": "COL"
    },
    {
      "id": 519186,
      "team": "COL"
    },
    {
      "id": 543184,
      "team": "COL"
    },
    {
      "id": 408242,
      "team": "COL"
    },
    {
      "id": 519141,
      "team": "COL"
    },
    {
      "id": 501647,
      "team": "COL"
    },
    {
      "id": 150212,
      "team": "COL"
    },
    {
      "id": 114739,
      "team": "COL"
    },
    {
      "id": 455126,
      "team": "COL"
    },
    {
      "id": 458913,
      "team": "COL"
    },
    {
      "id": 489189,
      "team": "COL"
    },
    {
      "id": 502125,
      "team": "COL"
    },
    {
      "id": 471865,
      "team": "COL"
    },
    {
      "id": 468406,
      "team": "COL"
    },
    {
      "id": 433585,
      "team": "COL"
    },
    {
      "id": 115732,
      "team": "COL"
    }
  ],
  "319404": [
    {
      "id": 453203,
      "team": "STL"
    },
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 477569,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 346798,
      "team": "STL"
    },
    {
      "id": 279577,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 465629,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 446135,
      "team": "STL"
    },
    {
      "id": 523260,
      "team": "STL"
    },
    {
      "id": 519240,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 136860,
      "team": "STL"
    },
    {
      "id": 150414,
      "team": "STL"
    },
    {
      "id": 150118,
      "team": "STL"
    },
    {
      "id": 435401,
      "team": "STL"
    },
    {
      "id": 459939,
      "team": "STL"
    },
    {
      "id": 453311,
      "team": "SF"
    },
    {
      "id": 518516,
      "team": "SF"
    },
    {
      "id": 489209,
      "team": "SF"
    },
    {
      "id": 346793,
      "team": "SF"
    },
    {
      "id": 340192,
      "team": "SF"
    },
    {
      "id": 435078,
      "team": "SF"
    },
    {
      "id": 543063,
      "team": "SF"
    },
    {
      "id": 207267,
      "team": "SF"
    },
    {
      "id": 453923,
      "team": "SF"
    },
    {
      "id": 452254,
      "team": "SF"
    },
    {
      "id": 454535,
      "team": "SF"
    },
    {
      "id": 516949,
      "team": "SF"
    },
    {
      "id": 457763,
      "team": "SF"
    },
    {
      "id": 285064,
      "team": "SF"
    },
    {
      "id": 217096,
      "team": "SF"
    },
    {
      "id": 467726,
      "team": "SF"
    },
    {
      "id": 425657,
      "team": "SF"
    },
    {
      "id": 502004,
      "team": "SF"
    },
    {
      "id": 466320,
      "team": "SF"
    },
    {
      "id": 444135,
      "team": "SF"
    },
    {
      "id": 474832,
      "team": "SF"
    },
    {
      "id": 430912,
      "team": "SF"
    },
    {
      "id": 433586,
      "team": "SF"
    },
    {
      "id": 489265,
      "team": "SF"
    },
    {
      "id": 434636,
      "team": "SF"
    }
  ],
  "347300": [
    {
      "id": 518813,
      "team": "KC"
    },
    {
      "id": 429722,
      "team": "KC"
    },
    {
      "id": 425386,
      "team": "KC"
    },
    {
      "id": 448306,
      "team": "KC"
    },
    {
      "id": 460051,
      "team": "KC"
    },
    {
      "id": 521692,
      "team": "KC"
    },
    {
      "id": 434641,
      "team": "KC"
    },
    {
      "id": 456715,
      "team": "KC"
    },
    {
      "id": 435459,
      "team": "KC"
    },
    {
      "id": 456714,
      "team": "KC"
    },
    {
      "id": 136600,
      "team": "KC"
    },
    {
      "id": 434669,
      "team": "KC"
    },
    {
      "id": 123173,
      "team": "KC"
    },
    {
      "id": 451584,
      "team": "KC"
    },
    {
      "id": 516969,
      "team": "KC"
    },
    {
      "id": 519058,
      "team": "KC"
    },
    {
      "id": 425796,
      "team": "KC"
    },
    {
      "id": 444876,
      "team": "KC"
    },
    {
      "id": 460086,
      "team": "KC"
    },
    {
      "id": 471107,
      "team": "KC"
    },
    {
      "id": 543070,
      "team": "KC"
    },
    {
      "id": 460024,
      "team": "KC"
    },
    {
      "id": 543333,
      "team": "KC"
    },
    {
      "id": 525768,
      "team": "KC"
    },
    {
      "id": 502481,
      "team": "KC"
    },
    {
      "id": 429664,
      "team": "NYY"
    },
    {
      "id": 400085,
      "team": "NYY"
    },
    {
      "id": 455755,
      "team": "NYY"
    },
    {
      "id": 150484,
      "team": "NYY"
    },
    {
      "id": 493133,
      "team": "NYY"
    },
    {
      "id": 519222,
      "team": "NYY"
    },
    {
      "id": 461833,
      "team": "NYY"
    },
    {
      "id": 518875,
      "team": "NYY"
    },
    {
      "id": 282332,
      "team": "NYY"
    },
    {
      "id": 502011,
      "team": "NYY"
    },
    {
      "id": 457429,
      "team": "NYY"
    },
    {
      "id": 434624,
      "team": "NYY"
    },
    {
      "id": 455126,
      "team": "NYY"
    },
    {
      "id": 453269,
      "team": "NYY"
    },
    {
      "id": 400098,
      "team": "NYY"
    },
    {
      "id": 407489,
      "team": "NYY"
    },
    {
      "id": 475479,
      "team": "NYY"
    },
    {
      "id": 458731,
      "team": "NYY"
    },
    {
      "id": 476589,
      "team": "NYY"
    },
    {
      "id": 121250,
      "team": "NYY"
    },
    {
      "id": 120485,
      "team": "NYY"
    },
    {
      "id": 471868,
      "team": "NYY"
    },
    {
      "id": 573064,
      "team": "NYY"
    },
    {
      "id": 450204,
      "team": "NYY"
    },
    {
      "id": 502085,
      "team": "NYY"
    }
  ],
  "347779": [
    {
      "id": 434538,
      "team": "PIT"
    },
    {
      "id": 431145,
      "team": "PIT"
    },
    {
      "id": 474256,
      "team": "PIT"
    },
    {
      "id": 459991,
      "team": "PIT"
    },
    {
      "id": 425549,
      "team": "PIT"
    },
    {
      "id": 276346,
      "team": "PIT"
    },
    {
      "id": 476570,
      "team": "PIT"
    },
    {
      "id": 501983,
      "team": "PIT"
    },
    {
      "id": 434540,
      "team": "PIT"
    },
    {
      "id": 474568,
      "team": "PIT"
    },
    {
      "id": 502374,
      "team": "PIT"
    },
    {
      "id": 457705,
      "team": "PIT"
    },
    {
      "id": 457768,
      "team": "PIT"
    },
    {
      "id": 476883,
      "team": "PIT"
    },
    {
      "id": 458677,
      "team": "PIT"
    },
    {
      "id": 453265,
      "team": "PIT"
    },
    {
      "id": 453343,
      "team": "PIT"
    },
    {
      "id": 516782,
      "team": "PIT"
    },
    {
      "id": 276351,
      "team": "PIT"
    },
    {
      "id": 592238,
      "team": "PIT"
    },
    {
      "id": 543037,
      "team": "PIT"
    },
    {
      "id": 450203,
      "team": "PIT"
    },
    {
      "id": 435522,
      "team": "PIT"
    },
    {
      "id": 502046,
      "team": "PIT"
    },
    {
      "id": 502100,
      "team": "PIT"
    },
    {
      "id": 150020,
      "team": "LAD"
    },
    {
      "id": 346874,
      "team": "LAD"
    },
    {
      "id": 458501,
      "team": "LAD"
    },
    {
      "id": 454560,
      "team": "LAD"
    },
    {
      "id": 425844,
      "team": "LAD"
    },
    {
      "id": 444843,
      "team": "LAD"
    },
    {
      "id": 434181,
      "team": "LAD"
    },
    {
      "id": 572089,
      "team": "LAD"
    },
    {
      "id": 493247,
      "team": "LAD"
    },
    {
      "id": 434442,
      "team": "LAD"
    },
    {
      "id": 445276,
      "team": "LAD"
    },
    {
      "id": 543008,
      "team": "LAD"
    },
    {
      "id": 547943,
      "team": "LAD"
    },
    {
      "id": 543148,
      "team": "LAD"
    },
    {
      "id": 407885,
      "team": "LAD"
    },
    {
      "id": 624577,
      "team": "LAD"
    },
    {
      "id": 408236,
      "team": "LAD"
    },
    {
      "id": 407825,
      "team": "LAD"
    },
    {
      "id": 477132,
      "team": "LAD"
    },
    {
      "id": 519437,
      "team": "LAD"
    },
    {
      "id": 434670,
      "team": "LAD"
    },
    {
      "id": 346857,
      "team": "LAD"
    },
    {
      "id": 543155,
      "team": "LAD"
    },
    {
      "id": 435401,
      "team": "LAD"
    },
    {
      "id": 430613,
      "team": "LAD"
    }
  ],
  "347790": [
    {
      "id": 431148,
      "team": "CLE"
    },
    {
      "id": 458006,
      "team": "CLE"
    },
    {
      "id": 456422,
      "team": "CLE"
    },
    {
      "id": 453211,
      "team": "CLE"
    },
    {
      "id": 592102,
      "team": "CLE"
    },
    {
      "id": 448602,
      "team": "CLE"
    },
    {
      "id": 444935,
      "team": "CLE"
    },
    {
      "id": 471911,
      "team": "CLE"
    },
    {
      "id": 475416,
      "team": "CLE"
    },
    {
      "id": 430605,
      "team": "CLE"
    },
    {
      "id": 543228,
      "team": "CLE"
    },
    {
      "id": 434622,
      "team": "CLE"
    },
    {
      "id": 543426,
      "team": "CLE"
    },
    {
      "id": 543766,
      "team": "CLE"
    },
    {
      "id": 543401,
      "team": "CLE"
    },
    {
      "id": 114739,
      "team": "CLE"
    },
    {
      "id": 448179,
      "team": "CLE"
    },
    {
      "id": 501925,
      "team": "CLE"
    },
    {
      "id": 449107,
      "team": "CLE"
    },
    {
      "id": 488726,
      "team": "CLE"
    },
    {
      "id": 150348,
      "team": "CLE"
    },
    {
      "id": 502260,
      "team": "CLE"
    },
    {
      "id": 467793,
      "team": "CLE"
    },
    {
      "id": 446372,
      "team": "CLE"
    },
    {
      "id": 430897,
      "team": "CLE"
    },
    {
      "id": 518813,
      "team": "KC"
    },
    {
      "id": 429722,
      "team": "KC"
    },
    {
      "id": 425386,
      "team": "KC"
    },
    {
      "id": 448306,
      "team": "KC"
    },
    {
      "id": 518953,
      "team": "KC"
    },
    {
      "id": 460051,
      "team": "KC"
    },
    {
      "id": 521692,
      "team": "KC"
    },
    {
      "id": 434641,
      "team": "KC"
    },
    {
      "id": 456715,
      "team": "KC"
    },
    {
      "id": 435459,
      "team": "KC"
    },
    {
      "id": 456714,
      "team": "KC"
    },
    {
      "id": 136600,
      "team": "KC"
    },
    {
      "id": 434669,
      "team": "KC"
    },
    {
      "id": 123173,
      "team": "KC"
    },
    {
      "id": 451584,
      "team": "KC"
    },
    {
      "id": 516969,
      "team": "KC"
    },
    {
      "id": 519058,
      "team": "KC"
    },
    {
      "id": 425796,
      "team": "KC"
    },
    {
      "id": 444876,
      "team": "KC"
    },
    {
      "id": 460086,
      "team": "KC"
    },
    {
      "id": 471107,
      "team": "KC"
    },
    {
      "id": 543070,
      "team": "KC"
    },
    {
      "id": 460024,
      "team": "KC"
    },
    {
      "id": 543333,
      "team": "KC"
    },
    {
      "id": 525768,
      "team": "KC"
    }
  ],
  "347808": [
    {
      "id": 456501,
      "team": "CIN"
    },
    {
      "id": 456701,
      "team": "CIN"
    },
    {
      "id": 425783,
      "team": "CIN"
    },
    {
      "id": 285131,
      "team": "CIN"
    },
    {
      "id": 502190,
      "team": "CIN"
    },
    {
      "id": 276520,
      "team": "CIN"
    },
    {
      "id": 544371,
      "team": "CIN"
    },
    {
      "id": 501961,
      "team": "CIN"
    },
    {
      "id": 519023,
      "team": "CIN"
    },
    {
      "id": 489197,
      "team": "CIN"
    },
    {
      "id": 453943,
      "team": "CIN"
    },
    {
      "id": 457803,
      "team": "CIN"
    },
    {
      "id": 435219,
      "team": "CIN"
    },
    {
      "id": 452672,
      "team": "CIN"
    },
    {
      "id": 459967,
      "team": "CIN"
    },
    {
      "id": 458015,
      "team": "CIN"
    },
    {
      "id": 448159,
      "team": "CIN"
    },
    {
      "id": 430580,
      "team": "CIN"
    },
    {
      "id": 571561,
      "team": "CIN"
    },
    {
      "id": 446359,
      "team": "CIN"
    },
    {
      "id": 408252,
      "team": "CIN"
    },
    {
      "id": 502009,
      "team": "CIN"
    },
    {
      "id": 543331,
      "team": "CIN"
    },
    {
      "id": 449082,
      "team": "CIN"
    },
    {
      "id": 547973,
      "team": "CIN"
    },
    {
      "id": 434538,
      "team": "PIT"
    },
    {
      "id": 431145,
      "team": "PIT"
    },
    {
      "id": 474256,
      "team": "PIT"
    },
    {
      "id": 459991,
      "team": "PIT"
    },
    {
      "id": 425549,
      "team": "PIT"
    },
    {
      "id": 276346,
      "team": "PIT"
    },
    {
      "id": 476570,
      "team": "PIT"
    },
    {
      "id": 501983,
      "team": "PIT"
    },
    {
      "id": 434540,
      "team": "PIT"
    },
    {
      "id": 474568,
      "team": "PIT"
    },
    {
      "id": 502374,
      "team": "PIT"
    },
    {
      "id": 457705,
      "team": "PIT"
    },
    {
      "id": 457768,
      "team": "PIT"
    },
    {
      "id": 476883,
      "team": "PIT"
    },
    {
      "id": 458677,
      "team": "PIT"
    },
    {
      "id": 453265,
      "team": "PIT"
    },
    {
      "id": 453343,
      "team": "PIT"
    },
    {
      "id": 516782,
      "team": "PIT"
    },
    {
      "id": 276351,
      "team": "PIT"
    },
    {
      "id": 592238,
      "team": "PIT"
    },
    {
      "id": 543037,
      "team": "PIT"
    },
    {
      "id": 450203,
      "team": "PIT"
    },
    {
      "id": 435522,
      "team": "PIT"
    },
    {
      "id": 502046,
      "team": "PIT"
    },
    {
      "id": 502100,
      "team": "PIT"
    }
  ],
  "347829": [
    {
      "id": 518902,
      "team": "STL"
    },
    {
      "id": 453203,
      "team": "STL"
    },
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 543779,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 544928,
      "team": "STL"
    },
    {
      "id": 421064,
      "team": "STL"
    },
    {
      "id": 571946,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 595307,
      "team": "STL"
    },
    {
      "id": 465629,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 572751,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 329092,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 523260,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 136860,
      "team": "STL"
    },
    {
      "id": 150414,
      "team": "STL"
    },
    {
      "id": 475243,
      "team": "CHC"
    },
    {
      "id": 425861,
      "team": "CHC"
    },
    {
      "id": 519203,
      "team": "CHC"
    },
    {
      "id": 516770,
      "team": "CHC"
    },
    {
      "id": 460701,
      "team": "CHC"
    },
    {
      "id": 490063,
      "team": "CHC"
    },
    {
      "id": 425900,
      "team": "CHC"
    },
    {
      "id": 444857,
      "team": "CHC"
    },
    {
      "id": 276514,
      "team": "CHC"
    },
    {
      "id": 444468,
      "team": "CHC"
    },
    {
      "id": 474865,
      "team": "CHC"
    },
    {
      "id": 430668,
      "team": "CHC"
    },
    {
      "id": 453646,
      "team": "CHC"
    },
    {
      "id": 446381,
      "team": "CHC"
    },
    {
      "id": 472528,
      "team": "CHC"
    },
    {
      "id": 285068,
      "team": "CHC"
    },
    {
      "id": 150093,
      "team": "CHC"
    },
    {
      "id": 456078,
      "team": "CHC"
    },
    {
      "id": 429719,
      "team": "CHC"
    },
    {
      "id": 453284,
      "team": "CHC"
    },
    {
      "id": 461791,
      "team": "CHC"
    },
    {
      "id": 469159,
      "team": "CHC"
    },
    {
      "id": 435220,
      "team": "CHC"
    },
    {
      "id": 502188,
      "team": "CHC"
    },
    {
      "id": 435625,
      "team": "CHC"
    }
  ],
  "348187": [
    {
      "id": 434637,
      "team": "CWS"
    },
    {
      "id": 518858,
      "team": "CWS"
    },
    {
      "id": 457477,
      "team": "CWS"
    },
    {
      "id": 493351,
      "team": "CWS"
    },
    {
      "id": 425567,
      "team": "CWS"
    },
    {
      "id": 493596,
      "team": "CWS"
    },
    {
      "id": 592665,
      "team": "CWS"
    },
    {
      "id": 493574,
      "team": "CWS"
    },
    {
      "id": 519242,
      "team": "CWS"
    },
    {
      "id": 489413,
      "team": "CWS"
    },
    {
      "id": 408241,
      "team": "CWS"
    },
    {
      "id": 500779,
      "team": "CWS"
    },
    {
      "id": 543569,
      "team": "CWS"
    },
    {
      "id": 433579,
      "team": "CWS"
    },
    {
      "id": 433898,
      "team": "CWS"
    },
    {
      "id": 453264,
      "team": "CWS"
    },
    {
      "id": 470462,
      "team": "CWS"
    },
    {
      "id": 518420,
      "team": "CWS"
    },
    {
      "id": 276055,
      "team": "CWS"
    },
    {
      "id": 493364,
      "team": "CWS"
    },
    {
      "id": 452095,
      "team": "CWS"
    },
    {
      "id": 502327,
      "team": "CWS"
    },
    {
      "id": 572033,
      "team": "CWS"
    },
    {
      "id": 543216,
      "team": "CWS"
    },
    {
      "id": 453515,
      "team": "CWS"
    },
    {
      "id": 594828,
      "team": "ATL"
    },
    {
      "id": 218596,
      "team": "ATL"
    },
    {
      "id": 519345,
      "team": "ATL"
    },
    {
      "id": 592743,
      "team": "ATL"
    },
    {
      "id": 468429,
      "team": "ATL"
    },
    {
      "id": 460008,
      "team": "ATL"
    },
    {
      "id": 425646,
      "team": "ATL"
    },
    {
      "id": 501985,
      "team": "ATL"
    },
    {
      "id": 518792,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 408042,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 430904,
      "team": "ATL"
    },
    {
      "id": 457708,
      "team": "ATL"
    },
    {
      "id": 457926,
      "team": "ATL"
    },
    {
      "id": 453400,
      "team": "ATL"
    },
    {
      "id": 407862,
      "team": "ATL"
    },
    {
      "id": 543629,
      "team": "ATL"
    },
    {
      "id": 518886,
      "team": "ATL"
    },
    {
      "id": 502304,
      "team": "ATL"
    },
    {
      "id": 462564,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 450665,
      "team": "ATL"
    },
    {
      "id": 477229,
      "team": "ATL"
    },
    {
      "id": 501593,
      "team": "ATL"
    }
  ],
  "348313": [
    {
      "id": 453400,
      "team": "ATL"
    },
    {
      "id": 594828,
      "team": "ATL"
    },
    {
      "id": 407862,
      "team": "ATL"
    },
    {
      "id": 519345,
      "team": "ATL"
    },
    {
      "id": 592743,
      "team": "ATL"
    },
    {
      "id": 622072,
      "team": "ATL"
    },
    {
      "id": 468429,
      "team": "ATL"
    },
    {
      "id": 460008,
      "team": "ATL"
    },
    {
      "id": 518886,
      "team": "ATL"
    },
    {
      "id": 425646,
      "team": "ATL"
    },
    {
      "id": 434180,
      "team": "ATL"
    },
    {
      "id": 502304,
      "team": "ATL"
    },
    {
      "id": 501985,
      "team": "ATL"
    },
    {
      "id": 518792,
      "team": "ATL"
    },
    {
      "id": 462564,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 430904,
      "team": "ATL"
    },
    {
      "id": 450665,
      "team": "ATL"
    },
    {
      "id": 457708,
      "team": "ATL"
    },
    {
      "id": 477229,
      "team": "ATL"
    },
    {
      "id": 457926,
      "team": "ATL"
    },
    {
      "id": 501593,
      "team": "ATL"
    },
    {
      "id": 453531,
      "team": "STL"
    },
    {
      "id": 518902,
      "team": "STL"
    },
    {
      "id": 453203,
      "team": "STL"
    },
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 543779,
      "team": "STL"
    },
    {
      "id": 477569,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 571946,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 595307,
      "team": "STL"
    },
    {
      "id": 465629,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 329092,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 523260,
      "team": "STL"
    },
    {
      "id": 519240,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 136860,
      "team": "STL"
    },
    {
      "id": 150414,
      "team": "STL"
    }
  ],
  "348322": [
    {
      "id": 453400,
      "team": "ATL"
    },
    {
      "id": 594828,
      "team": "ATL"
    },
    {
      "id": 519345,
      "team": "ATL"
    },
    {
      "id": 592743,
      "team": "ATL"
    },
    {
      "id": 275933,
      "team": "ATL"
    },
    {
      "id": 622072,
      "team": "ATL"
    },
    {
      "id": 468429,
      "team": "ATL"
    },
    {
      "id": 460008,
      "team": "ATL"
    },
    {
      "id": 518886,
      "team": "ATL"
    },
    {
      "id": 425646,
      "team": "ATL"
    },
    {
      "id": 502304,
      "team": "ATL"
    },
    {
      "id": 501985,
      "team": "ATL"
    },
    {
      "id": 518792,
      "team": "ATL"
    },
    {
      "id": 462564,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 545404,
      "team": "ATL"
    },
    {
      "id": 450665,
      "team": "ATL"
    },
    {
      "id": 457708,
      "team": "ATL"
    },
    {
      "id": 477229,
      "team": "ATL"
    },
    {
      "id": 457926,
      "team": "ATL"
    },
    {
      "id": 501593,
      "team": "ATL"
    },
    {
      "id": 451594,
      "team": "COL"
    },
    {
      "id": 518934,
      "team": "COL"
    },
    {
      "id": 572816,
      "team": "COL"
    },
    {
      "id": 279571,
      "team": "COL"
    },
    {
      "id": 571448,
      "team": "COL"
    },
    {
      "id": 571521,
      "team": "COL"
    },
    {
      "id": 493603,
      "team": "COL"
    },
    {
      "id": 543022,
      "team": "COL"
    },
    {
      "id": 446641,
      "team": "COL"
    },
    {
      "id": 501647,
      "team": "COL"
    },
    {
      "id": 453568,
      "team": "COL"
    },
    {
      "id": 504379,
      "team": "COL"
    },
    {
      "id": 150212,
      "team": "COL"
    },
    {
      "id": 150275,
      "team": "COL"
    },
    {
      "id": 518586,
      "team": "COL"
    },
    {
      "id": 453064,
      "team": "COL"
    },
    {
      "id": 466918,
      "team": "COL"
    },
    {
      "id": 407822,
      "team": "COL"
    },
    {
      "id": 489189,
      "team": "COL"
    },
    {
      "id": 468504,
      "team": "COL"
    },
    {
      "id": 471865,
      "team": "COL"
    },
    {
      "id": 468406,
      "team": "COL"
    },
    {
      "id": 467850,
      "team": "COL"
    },
    {
      "id": 433585,
      "team": "COL"
    },
    {
      "id": 115732,
      "team": "COL"
    }
  ],
  "348331": [
    {
      "id": 453400,
      "team": "ATL"
    },
    {
      "id": 594828,
      "team": "ATL"
    },
    {
      "id": 519345,
      "team": "ATL"
    },
    {
      "id": 592743,
      "team": "ATL"
    },
    {
      "id": 275933,
      "team": "ATL"
    },
    {
      "id": 622072,
      "team": "ATL"
    },
    {
      "id": 468429,
      "team": "ATL"
    },
    {
      "id": 592239,
      "team": "ATL"
    },
    {
      "id": 460008,
      "team": "ATL"
    },
    {
      "id": 518886,
      "team": "ATL"
    },
    {
      "id": 425646,
      "team": "ATL"
    },
    {
      "id": 502304,
      "team": "ATL"
    },
    {
      "id": 501985,
      "team": "ATL"
    },
    {
      "id": 518792,
      "team": "ATL"
    },
    {
      "id": 462564,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 545404,
      "team": "ATL"
    },
    {
      "id": 450665,
      "team": "ATL"
    },
    {
      "id": 457708,
      "team": "ATL"
    },
    {
      "id": 477229,
      "team": "ATL"
    },
    {
      "id": 457926,
      "team": "ATL"
    },
    {
      "id": 501593,
      "team": "ATL"
    },
    {
      "id": 451594,
      "team": "COL"
    },
    {
      "id": 518934,
      "team": "COL"
    },
    {
      "id": 572816,
      "team": "COL"
    },
    {
      "id": 279571,
      "team": "COL"
    },
    {
      "id": 571448,
      "team": "COL"
    },
    {
      "id": 571521,
      "team": "COL"
    },
    {
      "id": 493603,
      "team": "COL"
    },
    {
      "id": 543022,
      "team": "COL"
    },
    {
      "id": 446641,
      "team": "COL"
    },
    {
      "id": 501647,
      "team": "COL"
    },
    {
      "id": 453568,
      "team": "COL"
    },
    {
      "id": 504379,
      "team": "COL"
    },
    {
      "id": 150212,
      "team": "COL"
    },
    {
      "id": 150275,
      "team": "COL"
    },
    {
      "id": 518586,
      "team": "COL"
    },
    {
      "id": 453064,
      "team": "COL"
    },
    {
      "id": 466918,
      "team": "COL"
    },
    {
      "id": 407822,
      "team": "COL"
    },
    {
      "id": 489189,
      "team": "COL"
    },
    {
      "id": 468504,
      "team": "COL"
    },
    {
      "id": 471865,
      "team": "COL"
    },
    {
      "id": 468406,
      "team": "COL"
    },
    {
      "id": 467850,
      "team": "COL"
    },
    {
      "id": 433585,
      "team": "COL"
    },
    {
      "id": 115732,
      "team": "COL"
    }
  ],
  "348551": [
    {
      "id": 453531,
      "team": "STL"
    },
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 543779,
      "team": "STL"
    },
    {
      "id": 571946,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 571431,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 518693,
      "team": "STL"
    },
    {
      "id": 329092,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 136860,
      "team": "STL"
    },
    {
      "id": 150414,
      "team": "STL"
    },
    {
      "id": 518902,
      "team": "STL"
    },
    {
      "id": 453203,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 518545,
      "team": "STL"
    },
    {
      "id": 595307,
      "team": "STL"
    },
    {
      "id": 465629,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 523260,
      "team": "STL"
    },
    {
      "id": 434538,
      "team": "PIT"
    },
    {
      "id": 518911,
      "team": "PIT"
    },
    {
      "id": 431145,
      "team": "PIT"
    },
    {
      "id": 453172,
      "team": "PIT"
    },
    {
      "id": 459991,
      "team": "PIT"
    },
    {
      "id": 425549,
      "team": "PIT"
    },
    {
      "id": 476570,
      "team": "PIT"
    },
    {
      "id": 543281,
      "team": "PIT"
    },
    {
      "id": 491646,
      "team": "PIT"
    },
    {
      "id": 434540,
      "team": "PIT"
    },
    {
      "id": 474568,
      "team": "PIT"
    },
    {
      "id": 150359,
      "team": "PIT"
    },
    {
      "id": 506997,
      "team": "PIT"
    },
    {
      "id": 457705,
      "team": "PIT"
    },
    {
      "id": 457768,
      "team": "PIT"
    },
    {
      "id": 476883,
      "team": "PIT"
    },
    {
      "id": 458677,
      "team": "PIT"
    },
    {
      "id": 453265,
      "team": "PIT"
    },
    {
      "id": 453343,
      "team": "PIT"
    },
    {
      "id": 516782,
      "team": "PIT"
    },
    {
      "id": 467798,
      "team": "PIT"
    },
    {
      "id": 543037,
      "team": "PIT"
    },
    {
      "id": 450203,
      "team": "PIT"
    },
    {
      "id": 435522,
      "team": "PIT"
    },
    {
      "id": 502046,
      "team": "PIT"
    }
  ],
  "348665": [
    {
      "id": 453531,
      "team": "STL"
    },
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 543779,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 544928,
      "team": "STL"
    },
    {
      "id": 571946,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 571431,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 329092,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 136860,
      "team": "STL"
    },
    {
      "id": 518902,
      "team": "STL"
    },
    {
      "id": 453203,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 595307,
      "team": "STL"
    },
    {
      "id": 465629,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 501896,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 523260,
      "team": "STL"
    },
    {
      "id": 594828,
      "team": "ATL"
    },
    {
      "id": 519345,
      "team": "ATL"
    },
    {
      "id": 592743,
      "team": "ATL"
    },
    {
      "id": 460008,
      "team": "ATL"
    },
    {
      "id": 425646,
      "team": "ATL"
    },
    {
      "id": 501985,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 408042,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 430904,
      "team": "ATL"
    },
    {
      "id": 457708,
      "team": "ATL"
    },
    {
      "id": 457926,
      "team": "ATL"
    },
    {
      "id": 453400,
      "team": "ATL"
    },
    {
      "id": 457788,
      "team": "ATL"
    },
    {
      "id": 275933,
      "team": "ATL"
    },
    {
      "id": 622072,
      "team": "ATL"
    },
    {
      "id": 592239,
      "team": "ATL"
    },
    {
      "id": 518886,
      "team": "ATL"
    },
    {
      "id": 425834,
      "team": "ATL"
    },
    {
      "id": 502304,
      "team": "ATL"
    },
    {
      "id": 471107,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 450665,
      "team": "ATL"
    },
    {
      "id": 477229,
      "team": "ATL"
    },
    {
      "id": 501593,
      "team": "ATL"
    }
  ],
  "349050": [
    {
      "id": 150021,
      "team": "CHC"
    },
    {
      "id": 475243,
      "team": "CHC"
    },
    {
      "id": 547939,
      "team": "CHC"
    },
    {
      "id": 519203,
      "team": "CHC"
    },
    {
      "id": 516770,
      "team": "CHC"
    },
    {
      "id": 460701,
      "team": "CHC"
    },
    {
      "id": 573127,
      "team": "CHC"
    },
    {
      "id": 425900,
      "team": "CHC"
    },
    {
      "id": 400268,
      "team": "CHC"
    },
    {
      "id": 276514,
      "team": "CHC"
    },
    {
      "id": 467008,
      "team": "CHC"
    },
    {
      "id": 444468,
      "team": "CHC"
    },
    {
      "id": 460131,
      "team": "CHC"
    },
    {
      "id": 501227,
      "team": "CHC"
    },
    {
      "id": 430906,
      "team": "CHC"
    },
    {
      "id": 516809,
      "team": "CHC"
    },
    {
      "id": 453646,
      "team": "CHC"
    },
    {
      "id": 446381,
      "team": "CHC"
    },
    {
      "id": 472528,
      "team": "CHC"
    },
    {
      "id": 453268,
      "team": "CHC"
    },
    {
      "id": 518748,
      "team": "CHC"
    },
    {
      "id": 453562,
      "team": "CHC"
    },
    {
      "id": 429719,
      "team": "CHC"
    },
    {
      "id": 453284,
      "team": "CHC"
    },
    {
      "id": 435044,
      "team": "CHC"
    },
    {
      "id": 548384,
      "team": "CHC"
    },
    {
      "id": 435220,
      "team": "CHC"
    },
    {
      "id": 543894,
      "team": "CHC"
    },
    {
      "id": 543734,
      "team": "CHC"
    },
    {
      "id": 502188,
      "team": "CHC"
    },
    {
      "id": 435625,
      "team": "CHC"
    },
    {
      "id": 594828,
      "team": "ATL"
    },
    {
      "id": 519345,
      "team": "ATL"
    },
    {
      "id": 592743,
      "team": "ATL"
    },
    {
      "id": 468429,
      "team": "ATL"
    },
    {
      "id": 460008,
      "team": "ATL"
    },
    {
      "id": 425646,
      "team": "ATL"
    },
    {
      "id": 434180,
      "team": "ATL"
    },
    {
      "id": 501985,
      "team": "ATL"
    },
    {
      "id": 150119,
      "team": "ATL"
    },
    {
      "id": 518792,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 408042,
      "team": "ATL"
    },
    {
      "id": 542194,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 430904,
      "team": "ATL"
    },
    {
      "id": 457708,
      "team": "ATL"
    },
    {
      "id": 457926,
      "team": "ATL"
    },
    {
      "id": 453400,
      "team": "ATL"
    },
    {
      "id": 457788,
      "team": "ATL"
    },
    {
      "id": 407862,
      "team": "ATL"
    },
    {
      "id": 571735,
      "team": "ATL"
    },
    {
      "id": 275933,
      "team": "ATL"
    },
    {
      "id": 622072,
      "team": "ATL"
    },
    {
      "id": 518886,
      "team": "ATL"
    },
    {
      "id": 425834,
      "team": "ATL"
    },
    {
      "id": 502304,
      "team": "ATL"
    },
    {
      "id": 471107,
      "team": "ATL"
    },
    {
      "id": 462564,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 450665,
      "team": "ATL"
    },
    {
      "id": 477229,
      "team": "ATL"
    },
    {
      "id": 501593,
      "team": "ATL"
    }
  ],
  "380769": [
    {
      "id": 453311,
      "team": "SF"
    },
    {
      "id": 518516,
      "team": "SF"
    },
    {
      "id": 218596,
      "team": "SF"
    },
    {
      "id": 518794,
      "team": "SF"
    },
    {
      "id": 346793,
      "team": "SF"
    },
    {
      "id": 466948,
      "team": "SF"
    },
    {
      "id": 501303,
      "team": "SF"
    },
    {
      "id": 435078,
      "team": "SF"
    },
    {
      "id": 543063,
      "team": "SF"
    },
    {
      "id": 434641,
      "team": "SF"
    },
    {
      "id": 453923,
      "team": "SF"
    },
    {
      "id": 453307,
      "team": "SF"
    },
    {
      "id": 434604,
      "team": "SF"
    },
    {
      "id": 452254,
      "team": "SF"
    },
    {
      "id": 516949,
      "team": "SF"
    },
    {
      "id": 457763,
      "team": "SF"
    },
    {
      "id": 285064,
      "team": "SF"
    },
    {
      "id": 425657,
      "team": "SF"
    },
    {
      "id": 474832,
      "team": "SF"
    },
    {
      "id": 430912,
      "team": "SF"
    },
    {
      "id": 433586,
      "team": "SF"
    },
    {
      "id": 467055,
      "team": "SF"
    },
    {
      "id": 433589,
      "team": "SF"
    },
    {
      "id": 489265,
      "team": "SF"
    },
    {
      "id": 434636,
      "team": "SF"
    },
    {
      "id": 408307,
      "team": "LAD"
    },
    {
      "id": 346874,
      "team": "LAD"
    },
    {
      "id": 475100,
      "team": "LAD"
    },
    {
      "id": 453198,
      "team": "LAD"
    },
    {
      "id": 461314,
      "team": "LAD"
    },
    {
      "id": 425844,
      "team": "LAD"
    },
    {
      "id": 444843,
      "team": "LAD"
    },
    {
      "id": 434181,
      "team": "LAD"
    },
    {
      "id": 460077,
      "team": "LAD"
    },
    {
      "id": 124604,
      "team": "LAD"
    },
    {
      "id": 434442,
      "team": "LAD"
    },
    {
      "id": 445276,
      "team": "LAD"
    },
    {
      "id": 430904,
      "team": "LAD"
    },
    {
      "id": 547943,
      "team": "LAD"
    },
    {
      "id": 543148,
      "team": "LAD"
    },
    {
      "id": 624577,
      "team": "LAD"
    },
    {
      "id": 543829,
      "team": "LAD"
    },
    {
      "id": 408210,
      "team": "LAD"
    },
    {
      "id": 429717,
      "team": "LAD"
    },
    {
      "id": 408236,
      "team": "LAD"
    },
    {
      "id": 519437,
      "team": "LAD"
    },
    {
      "id": 277417,
      "team": "LAD"
    },
    {
      "id": 434670,
      "team": "LAD"
    },
    {
      "id": 451216,
      "team": "LAD"
    },
    {
      "id": 457759,
      "team": "LAD"
    }
  ],
  "380781": [
    {
      "id": 431148,
      "team": "OAK"
    },
    {
      "id": 472551,
      "team": "OAK"
    },
    {
      "id": 461235,
      "team": "OAK"
    },
    {
      "id": 445926,
      "team": "OAK"
    },
    {
      "id": 424825,
      "team": "OAK"
    },
    {
      "id": 519083,
      "team": "OAK"
    },
    {
      "id": 519141,
      "team": "OAK"
    },
    {
      "id": 430948,
      "team": "OAK"
    },
    {
      "id": 475857,
      "team": "OAK"
    },
    {
      "id": 476704,
      "team": "OAK"
    },
    {
      "id": 543243,
      "team": "OAK"
    },
    {
      "id": 435558,
      "team": "OAK"
    },
    {
      "id": 448281,
      "team": "OAK"
    },
    {
      "id": 502210,
      "team": "OAK"
    },
    {
      "id": 518626,
      "team": "OAK"
    },
    {
      "id": 543548,
      "team": "OAK"
    },
    {
      "id": 519299,
      "team": "OAK"
    },
    {
      "id": 502226,
      "team": "OAK"
    },
    {
      "id": 519096,
      "team": "OAK"
    },
    {
      "id": 493316,
      "team": "OAK"
    },
    {
      "id": 462382,
      "team": "OAK"
    },
    {
      "id": 444379,
      "team": "OAK"
    },
    {
      "id": 573185,
      "team": "OAK"
    },
    {
      "id": 502381,
      "team": "OAK"
    },
    {
      "id": 346857,
      "team": "OAK"
    },
    {
      "id": 451594,
      "team": "HOU"
    },
    {
      "id": 514888,
      "team": "HOU"
    },
    {
      "id": 474892,
      "team": "HOU"
    },
    {
      "id": 518625,
      "team": "HOU"
    },
    {
      "id": 458006,
      "team": "HOU"
    },
    {
      "id": 543807,
      "team": "HOU"
    },
    {
      "id": 542914,
      "team": "HOU"
    },
    {
      "id": 449786,
      "team": "HOU"
    },
    {
      "id": 451661,
      "team": "HOU"
    },
    {
      "id": 571868,
      "team": "HOU"
    },
    {
      "id": 447744,
      "team": "HOU"
    },
    {
      "id": 425532,
      "team": "HOU"
    },
    {
      "id": 488771,
      "team": "HOU"
    },
    {
      "id": 519085,
      "team": "HOU"
    },
    {
      "id": 503556,
      "team": "HOU"
    },
    {
      "id": 572971,
      "team": "HOU"
    },
    {
      "id": 518560,
      "team": "HOU"
    },
    {
      "id": 543054,
      "team": "HOU"
    },
    {
      "id": 502748,
      "team": "HOU"
    },
    {
      "id": 542340,
      "team": "HOU"
    },
    {
      "id": 461882,
      "team": "HOU"
    },
    {
      "id": 543321,
      "team": "HOU"
    },
    {
      "id": 430589,
      "team": "HOU"
    },
    {
      "id": 502100,
      "team": "HOU"
    }
  ],
  "381147": [
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 543779,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 571946,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 571431,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 518693,
      "team": "STL"
    },
    {
      "id": 488721,
      "team": "STL"
    },
    {
      "id": 329092,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 542994,
      "team": "STL"
    },
    {
      "id": 407885,
      "team": "STL"
    },
    {
      "id": 450212,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 504083,
      "team": "STL"
    },
    {
      "id": 595307,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 425509,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 475243,
      "team": "CHC"
    },
    {
      "id": 449079,
      "team": "CHC"
    },
    {
      "id": 592609,
      "team": "CHC"
    },
    {
      "id": 519203,
      "team": "CHC"
    },
    {
      "id": 466988,
      "team": "CHC"
    },
    {
      "id": 516770,
      "team": "CHC"
    },
    {
      "id": 460701,
      "team": "CHC"
    },
    {
      "id": 458085,
      "team": "CHC"
    },
    {
      "id": 444468,
      "team": "CHC"
    },
    {
      "id": 501888,
      "team": "CHC"
    },
    {
      "id": 519166,
      "team": "CHC"
    },
    {
      "id": 516809,
      "team": "CHC"
    },
    {
      "id": 489295,
      "team": "CHC"
    },
    {
      "id": 453646,
      "team": "CHC"
    },
    {
      "id": 446381,
      "team": "CHC"
    },
    {
      "id": 472528,
      "team": "CHC"
    },
    {
      "id": 518748,
      "team": "CHC"
    },
    {
      "id": 407842,
      "team": "CHC"
    },
    {
      "id": 434628,
      "team": "CHC"
    },
    {
      "id": 453562,
      "team": "CHC"
    },
    {
      "id": 456078,
      "team": "CHC"
    },
    {
      "id": 429719,
      "team": "CHC"
    },
    {
      "id": 434633,
      "team": "CHC"
    },
    {
      "id": 502188,
      "team": "CHC"
    },
    {
      "id": 435625,
      "team": "CHC"
    }
  ],
  "381169": [
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 543779,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 571946,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 571431,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 518693,
      "team": "STL"
    },
    {
      "id": 488721,
      "team": "STL"
    },
    {
      "id": 329092,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 542994,
      "team": "STL"
    },
    {
      "id": 407885,
      "team": "STL"
    },
    {
      "id": 450212,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 504083,
      "team": "STL"
    },
    {
      "id": 595307,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 425509,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 594828,
      "team": "ATL"
    },
    {
      "id": 429722,
      "team": "ATL"
    },
    {
      "id": 421685,
      "team": "ATL"
    },
    {
      "id": 592743,
      "team": "ATL"
    },
    {
      "id": 460008,
      "team": "ATL"
    },
    {
      "id": 501985,
      "team": "ATL"
    },
    {
      "id": 518792,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 408042,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 457708,
      "team": "ATL"
    },
    {
      "id": 455369,
      "team": "ATL"
    },
    {
      "id": 453400,
      "team": "ATL"
    },
    {
      "id": 621962,
      "team": "ATL"
    },
    {
      "id": 457788,
      "team": "ATL"
    },
    {
      "id": 425491,
      "team": "ATL"
    },
    {
      "id": 543629,
      "team": "ATL"
    },
    {
      "id": 571735,
      "team": "ATL"
    },
    {
      "id": 622072,
      "team": "ATL"
    },
    {
      "id": 425856,
      "team": "ATL"
    },
    {
      "id": 518886,
      "team": "ATL"
    },
    {
      "id": 425834,
      "team": "ATL"
    },
    {
      "id": 502304,
      "team": "ATL"
    },
    {
      "id": 462564,
      "team": "ATL"
    },
    {
      "id": 501593,
      "team": "ATL"
    }
  ],
  "381258": [
    {
      "id": 429665,
      "team": "TOR"
    },
    {
      "id": 285079,
      "team": "TOR"
    },
    {
      "id": 456124,
      "team": "TOR"
    },
    {
      "id": 571800,
      "team": "TOR"
    },
    {
      "id": 519169,
      "team": "TOR"
    },
    {
      "id": 571901,
      "team": "TOR"
    },
    {
      "id": 476270,
      "team": "TOR"
    },
    {
      "id": 447755,
      "team": "TOR"
    },
    {
      "id": 425900,
      "team": "TOR"
    },
    {
      "id": 279824,
      "team": "TOR"
    },
    {
      "id": 521230,
      "team": "TOR"
    },
    {
      "id": 464433,
      "team": "TOR"
    },
    {
      "id": 445170,
      "team": "TOR"
    },
    {
      "id": 452252,
      "team": "TOR"
    },
    {
      "id": 430661,
      "team": "TOR"
    },
    {
      "id": 607680,
      "team": "TOR"
    },
    {
      "id": 408314,
      "team": "TOR"
    },
    {
      "id": 489365,
      "team": "TOR"
    },
    {
      "id": 466320,
      "team": "TOR"
    },
    {
      "id": 446399,
      "team": "TOR"
    },
    {
      "id": 457918,
      "team": "TOR"
    },
    {
      "id": 445163,
      "team": "TOR"
    },
    {
      "id": 543238,
      "team": "TOR"
    },
    {
      "id": 430832,
      "team": "TOR"
    },
    {
      "id": 543434,
      "team": "TOR"
    },
    {
      "id": 431148,
      "team": "OAK"
    },
    {
      "id": 472551,
      "team": "OAK"
    },
    {
      "id": 461235,
      "team": "OAK"
    },
    {
      "id": 445926,
      "team": "OAK"
    },
    {
      "id": 424825,
      "team": "OAK"
    },
    {
      "id": 519083,
      "team": "OAK"
    },
    {
      "id": 519141,
      "team": "OAK"
    },
    {
      "id": 430948,
      "team": "OAK"
    },
    {
      "id": 476704,
      "team": "OAK"
    },
    {
      "id": 543243,
      "team": "OAK"
    },
    {
      "id": 448281,
      "team": "OAK"
    },
    {
      "id": 502210,
      "team": "OAK"
    },
    {
      "id": 518626,
      "team": "OAK"
    },
    {
      "id": 543548,
      "team": "OAK"
    },
    {
      "id": 452035,
      "team": "OAK"
    },
    {
      "id": 519299,
      "team": "OAK"
    },
    {
      "id": 502226,
      "team": "OAK"
    },
    {
      "id": 519096,
      "team": "OAK"
    },
    {
      "id": 493316,
      "team": "OAK"
    },
    {
      "id": 462382,
      "team": "OAK"
    },
    {
      "id": 444379,
      "team": "OAK"
    },
    {
      "id": 433585,
      "team": "OAK"
    },
    {
      "id": 502381,
      "team": "OAK"
    },
    {
      "id": 346857,
      "team": "OAK"
    },
    {
      "id": 451775,
      "team": "OAK"
    }
  ],
  "381290": [
    {
      "id": 592407,
      "team": "DET"
    },
    {
      "id": 400121,
      "team": "DET"
    },
    {
      "id": 457435,
      "team": "DET"
    },
    {
      "id": 519445,
      "team": "DET"
    },
    {
      "id": 592206,
      "team": "DET"
    },
    {
      "id": 592767,
      "team": "DET"
    },
    {
      "id": 571871,
      "team": "DET"
    },
    {
      "id": 608349,
      "team": "DET"
    },
    {
      "id": 519144,
      "team": "DET"
    },
    {
      "id": 435079,
      "team": "DET"
    },
    {
      "id": 116338,
      "team": "DET"
    },
    {
      "id": 457706,
      "team": "DET"
    },
    {
      "id": 430603,
      "team": "DET"
    },
    {
      "id": 502110,
      "team": "DET"
    },
    {
      "id": 150274,
      "team": "DET"
    },
    {
      "id": 453286,
      "team": "DET"
    },
    {
      "id": 456379,
      "team": "DET"
    },
    {
      "id": 408234,
      "team": "DET"
    },
    {
      "id": 461865,
      "team": "DET"
    },
    {
      "id": 519175,
      "team": "DET"
    },
    {
      "id": 434671,
      "team": "DET"
    },
    {
      "id": 501955,
      "team": "DET"
    },
    {
      "id": 434378,
      "team": "DET"
    },
    {
      "id": 488671,
      "team": "DET"
    },
    {
      "id": 434658,
      "team": "DET"
    },
    {
      "id": 455139,
      "team": "TEX"
    },
    {
      "id": 430630,
      "team": "TEX"
    },
    {
      "id": 425783,
      "team": "TEX"
    },
    {
      "id": 519048,
      "team": "TEX"
    },
    {
      "id": 425567,
      "team": "TEX"
    },
    {
      "id": 519344,
      "team": "TEX"
    },
    {
      "id": 425840,
      "team": "TEX"
    },
    {
      "id": 460269,
      "team": "TEX"
    },
    {
      "id": 519145,
      "team": "TEX"
    },
    {
      "id": 465657,
      "team": "TEX"
    },
    {
      "id": 134181,
      "team": "TEX"
    },
    {
      "id": 547982,
      "team": "TEX"
    },
    {
      "id": 607259,
      "team": "TEX"
    },
    {
      "id": 430906,
      "team": "TEX"
    },
    {
      "id": 596059,
      "team": "TEX"
    },
    {
      "id": 506433,
      "team": "TEX"
    },
    {
      "id": 407890,
      "team": "TEX"
    },
    {
      "id": 468396,
      "team": "TEX"
    },
    {
      "id": 543726,
      "team": "TEX"
    },
    {
      "id": 543706,
      "team": "TEX"
    },
    {
      "id": 474521,
      "team": "TEX"
    },
    {
      "id": 574831,
      "team": "TEX"
    },
    {
      "id": 596143,
      "team": "TEX"
    },
    {
      "id": 462101,
      "team": "TEX"
    },
    {
      "id": 435044,
      "team": "TEX"
    }
  ],
  "381302": [
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 571946,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 571431,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 518693,
      "team": "STL"
    },
    {
      "id": 488721,
      "team": "STL"
    },
    {
      "id": 329092,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 407885,
      "team": "STL"
    },
    {
      "id": 453203,
      "team": "STL"
    },
    {
      "id": 450212,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 595307,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 425509,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 400085,
      "team": "NYY"
    },
    {
      "id": 453895,
      "team": "NYY"
    },
    {
      "id": 476454,
      "team": "NYY"
    },
    {
      "id": 407893,
      "team": "NYY"
    },
    {
      "id": 453056,
      "team": "NYY"
    },
    {
      "id": 500208,
      "team": "NYY"
    },
    {
      "id": 493133,
      "team": "NYY"
    },
    {
      "id": 469686,
      "team": "NYY"
    },
    {
      "id": 501660,
      "team": "NYY"
    },
    {
      "id": 502011,
      "team": "NYY"
    },
    {
      "id": 547888,
      "team": "NYY"
    },
    {
      "id": 150093,
      "team": "NYY"
    },
    {
      "id": 116539,
      "team": "NYY"
    },
    {
      "id": 475479,
      "team": "NYY"
    },
    {
      "id": 458731,
      "team": "NYY"
    },
    {
      "id": 476589,
      "team": "NYY"
    },
    {
      "id": 406878,
      "team": "NYY"
    },
    {
      "id": 571974,
      "team": "NYY"
    },
    {
      "id": 595032,
      "team": "NYY"
    },
    {
      "id": 435263,
      "team": "NYY"
    },
    {
      "id": 573064,
      "team": "NYY"
    },
    {
      "id": 407819,
      "team": "NYY"
    },
    {
      "id": 430637,
      "team": "NYY"
    },
    {
      "id": 502085,
      "team": "NYY"
    },
    {
      "id": 457935,
      "team": "NYY"
    }
  ],
  "381435": [
    {
      "id": 425560,
      "team": "WSH"
    },
    {
      "id": 475582,
      "team": "WSH"
    },
    {
      "id": 519322,
      "team": "WSH"
    },
    {
      "id": 425785,
      "team": "WSH"
    },
    {
      "id": 400089,
      "team": "WSH"
    },
    {
      "id": 502578,
      "team": "WSH"
    },
    {
      "id": 489334,
      "team": "WSH"
    },
    {
      "id": 434661,
      "team": "WSH"
    },
    {
      "id": 446321,
      "team": "WSH"
    },
    {
      "id": 543685,
      "team": "WSH"
    },
    {
      "id": 452655,
      "team": "WSH"
    },
    {
      "id": 430668,
      "team": "WSH"
    },
    {
      "id": 544931,
      "team": "WSH"
    },
    {
      "id": 467092,
      "team": "WSH"
    },
    {
      "id": 457787,
      "team": "WSH"
    },
    {
      "id": 519455,
      "team": "WSH"
    },
    {
      "id": 461325,
      "team": "WSH"
    },
    {
      "id": 450729,
      "team": "WSH"
    },
    {
      "id": 460283,
      "team": "WSH"
    },
    {
      "id": 446653,
      "team": "WSH"
    },
    {
      "id": 595014,
      "team": "WSH"
    },
    {
      "id": 435622,
      "team": "WSH"
    },
    {
      "id": 150029,
      "team": "WSH"
    },
    {
      "id": 435623,
      "team": "WSH"
    },
    {
      "id": 543699,
      "team": "WSH"
    },
    {
      "id": 518617,
      "team": "PHI"
    },
    {
      "id": 449097,
      "team": "PHI"
    },
    {
      "id": 400284,
      "team": "PHI"
    },
    {
      "id": 448242,
      "team": "PHI"
    },
    {
      "id": 429667,
      "team": "PHI"
    },
    {
      "id": 455374,
      "team": "PHI"
    },
    {
      "id": 571527,
      "team": "PHI"
    },
    {
      "id": 458582,
      "team": "PHI"
    },
    {
      "id": 571786,
      "team": "PHI"
    },
    {
      "id": 462945,
      "team": "PHI"
    },
    {
      "id": 519184,
      "team": "PHI"
    },
    {
      "id": 452718,
      "team": "PHI"
    },
    {
      "id": 460055,
      "team": "PHI"
    },
    {
      "id": 408242,
      "team": "PHI"
    },
    {
      "id": 276519,
      "team": "PHI"
    },
    {
      "id": 430606,
      "team": "PHI"
    },
    {
      "id": 434563,
      "team": "PHI"
    },
    {
      "id": 150359,
      "team": "PHI"
    },
    {
      "id": 518603,
      "team": "PHI"
    },
    {
      "id": 407781,
      "team": "PHI"
    },
    {
      "id": 502126,
      "team": "PHI"
    },
    {
      "id": 543495,
      "team": "PHI"
    },
    {
      "id": 433584,
      "team": "PHI"
    },
    {
      "id": 430935,
      "team": "PHI"
    },
    {
      "id": 514917,
      "team": "PHI"
    }
  ],
  "381617": [
    {
      "id": 407885,
      "team": "STL"
    },
    {
      "id": 518614,
      "team": "STL"
    },
    {
      "id": 450212,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 572889,
      "team": "STL"
    },
    {
      "id": 571946,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 595307,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 425509,
      "team": "STL"
    },
    {
      "id": 571431,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 501800,
      "team": "STL"
    },
    {
      "id": 518693,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 488721,
      "team": "STL"
    },
    {
      "id": 329092,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 435400,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 477003,
      "team": "NYM"
    },
    {
      "id": 544925,
      "team": "NYM"
    },
    {
      "id": 544727,
      "team": "NYM"
    },
    {
      "id": 110029,
      "team": "NYM"
    },
    {
      "id": 112526,
      "team": "NYM"
    },
    {
      "id": 514913,
      "team": "NYM"
    },
    {
      "id": 493472,
      "team": "NYM"
    },
    {
      "id": 460003,
      "team": "NYM"
    },
    {
      "id": 554430,
      "team": "NYM"
    },
    {
      "id": 572831,
      "team": "NYM"
    },
    {
      "id": 445968,
      "team": "NYM"
    },
    {
      "id": 502517,
      "team": "NYM"
    },
    {
      "id": 542674,
      "team": "NYM"
    },
    {
      "id": 502195,
      "team": "NYM"
    },
    {
      "id": 446263,
      "team": "NYM"
    },
    {
      "id": 527038,
      "team": "NYM"
    },
    {
      "id": 489232,
      "team": "NYM"
    },
    {
      "id": 516769,
      "team": "NYM"
    },
    {
      "id": 458913,
      "team": "NYM"
    },
    {
      "id": 431151,
      "team": "NYM"
    },
    {
      "id": 594798,
      "team": "NYM"
    },
    {
      "id": 448614,
      "team": "NYM"
    },
    {
      "id": 493137,
      "team": "NYM"
    },
    {
      "id": 434158,
      "team": "NYM"
    },
    {
      "id": 455759,
      "team": "NYM"
    }
  ],
  "381819": [
    {
      "id": 450282,
      "team": "MIN"
    },
    {
      "id": 429781,
      "team": "MIN"
    },
    {
      "id": 456488,
      "team": "MIN"
    },
    {
      "id": 476633,
      "team": "MIN"
    },
    {
      "id": 425545,
      "team": "MIN"
    },
    {
      "id": 465679,
      "team": "MIN"
    },
    {
      "id": 461833,
      "team": "MIN"
    },
    {
      "id": 573204,
      "team": "MIN"
    },
    {
      "id": 461858,
      "team": "MIN"
    },
    {
      "id": 500871,
      "team": "MIN"
    },
    {
      "id": 502272,
      "team": "MIN"
    },
    {
      "id": 454537,
      "team": "MIN"
    },
    {
      "id": 542455,
      "team": "MIN"
    },
    {
      "id": 435559,
      "team": "MIN"
    },
    {
      "id": 499624,
      "team": "MIN"
    },
    {
      "id": 464416,
      "team": "MIN"
    },
    {
      "id": 488846,
      "team": "MIN"
    },
    {
      "id": 407825,
      "team": "MIN"
    },
    {
      "id": 518700,
      "team": "MIN"
    },
    {
      "id": 572821,
      "team": "MIN"
    },
    {
      "id": 461872,
      "team": "MIN"
    },
    {
      "id": 453539,
      "team": "MIN"
    },
    {
      "id": 502043,
      "team": "MIN"
    },
    {
      "id": 434778,
      "team": "MIN"
    },
    {
      "id": 445060,
      "team": "MIN"
    },
    {
      "id": 400085,
      "team": "NYY"
    },
    {
      "id": 453895,
      "team": "NYY"
    },
    {
      "id": 476454,
      "team": "NYY"
    },
    {
      "id": 407893,
      "team": "NYY"
    },
    {
      "id": 453056,
      "team": "NYY"
    },
    {
      "id": 493133,
      "team": "NYY"
    },
    {
      "id": 518875,
      "team": "NYY"
    },
    {
      "id": 136860,
      "team": "NYY"
    },
    {
      "id": 465041,
      "team": "NYY"
    },
    {
      "id": 547888,
      "team": "NYY"
    },
    {
      "id": 453307,
      "team": "NYY"
    },
    {
      "id": 461848,
      "team": "NYY"
    },
    {
      "id": 150093,
      "team": "NYY"
    },
    {
      "id": 116539,
      "team": "NYY"
    },
    {
      "id": 475479,
      "team": "NYY"
    },
    {
      "id": 458731,
      "team": "NYY"
    },
    {
      "id": 476589,
      "team": "NYY"
    },
    {
      "id": 519412,
      "team": "NYY"
    },
    {
      "id": 406878,
      "team": "NYY"
    },
    {
      "id": 595032,
      "team": "NYY"
    },
    {
      "id": 435263,
      "team": "NYY"
    },
    {
      "id": 573064,
      "team": "NYY"
    },
    {
      "id": 407819,
      "team": "NYY"
    },
    {
      "id": 430637,
      "team": "NYY"
    },
    {
      "id": 502085,
      "team": "NYY"
    }
  ],
  "381833": [
    {
      "id": 450282,
      "team": "MIN"
    },
    {
      "id": 429781,
      "team": "MIN"
    },
    {
      "id": 456488,
      "team": "MIN"
    },
    {
      "id": 476633,
      "team": "MIN"
    },
    {
      "id": 425545,
      "team": "MIN"
    },
    {
      "id": 465679,
      "team": "MIN"
    },
    {
      "id": 461833,
      "team": "MIN"
    },
    {
      "id": 573204,
      "team": "MIN"
    },
    {
      "id": 461858,
      "team": "MIN"
    },
    {
      "id": 500871,
      "team": "MIN"
    },
    {
      "id": 502272,
      "team": "MIN"
    },
    {
      "id": 454537,
      "team": "MIN"
    },
    {
      "id": 542455,
      "team": "MIN"
    },
    {
      "id": 435559,
      "team": "MIN"
    },
    {
      "id": 499624,
      "team": "MIN"
    },
    {
      "id": 464416,
      "team": "MIN"
    },
    {
      "id": 488846,
      "team": "MIN"
    },
    {
      "id": 407825,
      "team": "MIN"
    },
    {
      "id": 518700,
      "team": "MIN"
    },
    {
      "id": 572821,
      "team": "MIN"
    },
    {
      "id": 461872,
      "team": "MIN"
    },
    {
      "id": 453539,
      "team": "MIN"
    },
    {
      "id": 502043,
      "team": "MIN"
    },
    {
      "id": 434778,
      "team": "MIN"
    },
    {
      "id": 445060,
      "team": "MIN"
    },
    {
      "id": 400085,
      "team": "NYY"
    },
    {
      "id": 453895,
      "team": "NYY"
    },
    {
      "id": 476454,
      "team": "NYY"
    },
    {
      "id": 407893,
      "team": "NYY"
    },
    {
      "id": 453056,
      "team": "NYY"
    },
    {
      "id": 493133,
      "team": "NYY"
    },
    {
      "id": 518875,
      "team": "NYY"
    },
    {
      "id": 136860,
      "team": "NYY"
    },
    {
      "id": 465041,
      "team": "NYY"
    },
    {
      "id": 547888,
      "team": "NYY"
    },
    {
      "id": 453307,
      "team": "NYY"
    },
    {
      "id": 461848,
      "team": "NYY"
    },
    {
      "id": 150093,
      "team": "NYY"
    },
    {
      "id": 116539,
      "team": "NYY"
    },
    {
      "id": 475479,
      "team": "NYY"
    },
    {
      "id": 458731,
      "team": "NYY"
    },
    {
      "id": 476589,
      "team": "NYY"
    },
    {
      "id": 519412,
      "team": "NYY"
    },
    {
      "id": 406878,
      "team": "NYY"
    },
    {
      "id": 595032,
      "team": "NYY"
    },
    {
      "id": 435263,
      "team": "NYY"
    },
    {
      "id": 573064,
      "team": "NYY"
    },
    {
      "id": 407819,
      "team": "NYY"
    },
    {
      "id": 430637,
      "team": "NYY"
    },
    {
      "id": 502085,
      "team": "NYY"
    }
  ],
  "381954": [
    {
      "id": 543606,
      "team": "TB"
    },
    {
      "id": 346797,
      "team": "TB"
    },
    {
      "id": 407853,
      "team": "TB"
    },
    {
      "id": 476451,
      "team": "TB"
    },
    {
      "id": 457775,
      "team": "TB"
    },
    {
      "id": 459987,
      "team": "TB"
    },
    {
      "id": 502171,
      "team": "TB"
    },
    {
      "id": 459964,
      "team": "TB"
    },
    {
      "id": 150040,
      "team": "TB"
    },
    {
      "id": 425766,
      "team": "TB"
    },
    {
      "id": 456034,
      "team": "TB"
    },
    {
      "id": 502202,
      "team": "TB"
    },
    {
      "id": 488862,
      "team": "TB"
    },
    {
      "id": 502676,
      "team": "TB"
    },
    {
      "id": 523253,
      "team": "TB"
    },
    {
      "id": 489446,
      "team": "TB"
    },
    {
      "id": 446334,
      "team": "TB"
    },
    {
      "id": 407908,
      "team": "TB"
    },
    {
      "id": 502042,
      "team": "TB"
    },
    {
      "id": 450314,
      "team": "TB"
    },
    {
      "id": 446386,
      "team": "TB"
    },
    {
      "id": 434663,
      "team": "TB"
    },
    {
      "id": 446481,
      "team": "TB"
    },
    {
      "id": 595281,
      "team": "TB"
    },
    {
      "id": 285079,
      "team": "TOR"
    },
    {
      "id": 456124,
      "team": "TOR"
    },
    {
      "id": 571800,
      "team": "TOR"
    },
    {
      "id": 571901,
      "team": "TOR"
    },
    {
      "id": 476270,
      "team": "TOR"
    },
    {
      "id": 554432,
      "team": "TOR"
    },
    {
      "id": 518991,
      "team": "TOR"
    },
    {
      "id": 425900,
      "team": "TOR"
    },
    {
      "id": 279824,
      "team": "TOR"
    },
    {
      "id": 493128,
      "team": "TOR"
    },
    {
      "id": 464433,
      "team": "TOR"
    },
    {
      "id": 445170,
      "team": "TOR"
    },
    {
      "id": 430661,
      "team": "TOR"
    },
    {
      "id": 458675,
      "team": "TOR"
    },
    {
      "id": 430681,
      "team": "TOR"
    },
    {
      "id": 408314,
      "team": "TOR"
    },
    {
      "id": 489365,
      "team": "TOR"
    },
    {
      "id": 466320,
      "team": "TOR"
    },
    {
      "id": 573186,
      "team": "TOR"
    },
    {
      "id": 446399,
      "team": "TOR"
    },
    {
      "id": 435045,
      "team": "TOR"
    },
    {
      "id": 457918,
      "team": "TOR"
    },
    {
      "id": 445163,
      "team": "TOR"
    },
    {
      "id": 543238,
      "team": "TOR"
    },
    {
      "id": 430832,
      "team": "TOR"
    }
  ],
  "382147": [
    {
      "id": 455139,
      "team": "TEX"
    },
    {
      "id": 542669,
      "team": "TEX"
    },
    {
      "id": 425783,
      "team": "TEX"
    },
    {
      "id": 456387,
      "team": "TEX"
    },
    {
      "id": 425567,
      "team": "TEX"
    },
    {
      "id": 571945,
      "team": "TEX"
    },
    {
      "id": 519344,
      "team": "TEX"
    },
    {
      "id": 425840,
      "team": "TEX"
    },
    {
      "id": 460269,
      "team": "TEX"
    },
    {
      "id": 451192,
      "team": "TEX"
    },
    {
      "id": 134181,
      "team": "TEX"
    },
    {
      "id": 547982,
      "team": "TEX"
    },
    {
      "id": 607259,
      "team": "TEX"
    },
    {
      "id": 596059,
      "team": "TEX"
    },
    {
      "id": 506433,
      "team": "TEX"
    },
    {
      "id": 407890,
      "team": "TEX"
    },
    {
      "id": 491703,
      "team": "TEX"
    },
    {
      "id": 450317,
      "team": "TEX"
    },
    {
      "id": 543706,
      "team": "TEX"
    },
    {
      "id": 474521,
      "team": "TEX"
    },
    {
      "id": 425532,
      "team": "TEX"
    },
    {
      "id": 489267,
      "team": "TEX"
    },
    {
      "id": 462101,
      "team": "TEX"
    },
    {
      "id": 435044,
      "team": "TEX"
    },
    {
      "id": 502264,
      "team": "TEX"
    },
    {
      "id": 400085,
      "team": "NYY"
    },
    {
      "id": 453895,
      "team": "NYY"
    },
    {
      "id": 476454,
      "team": "NYY"
    },
    {
      "id": 452104,
      "team": "NYY"
    },
    {
      "id": 407893,
      "team": "NYY"
    },
    {
      "id": 453056,
      "team": "NYY"
    },
    {
      "id": 493133,
      "team": "NYY"
    },
    {
      "id": 425626,
      "team": "NYY"
    },
    {
      "id": 518875,
      "team": "NYY"
    },
    {
      "id": 136860,
      "team": "NYY"
    },
    {
      "id": 501660,
      "team": "NYY"
    },
    {
      "id": 465041,
      "team": "NYY"
    },
    {
      "id": 453307,
      "team": "NYY"
    },
    {
      "id": 116539,
      "team": "NYY"
    },
    {
      "id": 475479,
      "team": "NYY"
    },
    {
      "id": 458731,
      "team": "NYY"
    },
    {
      "id": 476589,
      "team": "NYY"
    },
    {
      "id": 519412,
      "team": "NYY"
    },
    {
      "id": 406878,
      "team": "NYY"
    },
    {
      "id": 572888,
      "team": "NYY"
    },
    {
      "id": 595032,
      "team": "NYY"
    },
    {
      "id": 435263,
      "team": "NYY"
    },
    {
      "id": 435221,
      "team": "NYY"
    },
    {
      "id": 407819,
      "team": "NYY"
    },
    {
      "id": 502085,
      "team": "NYY"
    }
  ],
  "382165": [
    {
      "id": 407842,
      "team": "HOU"
    },
    {
      "id": 514888,
      "team": "HOU"
    },
    {
      "id": 474892,
      "team": "HOU"
    },
    {
      "id": 518625,
      "team": "HOU"
    },
    {
      "id": 449786,
      "team": "HOU"
    },
    {
      "id": 451661,
      "team": "HOU"
    },
    {
      "id": 571868,
      "team": "HOU"
    },
    {
      "id": 572138,
      "team": "HOU"
    },
    {
      "id": 444857,
      "team": "HOU"
    },
    {
      "id": 488771,
      "team": "HOU"
    },
    {
      "id": 519085,
      "team": "HOU"
    },
    {
      "id": 448609,
      "team": "HOU"
    },
    {
      "id": 503556,
      "team": "HOU"
    },
    {
      "id": 572971,
      "team": "HOU"
    },
    {
      "id": 518560,
      "team": "HOU"
    },
    {
      "id": 463610,
      "team": "HOU"
    },
    {
      "id": 594772,
      "team": "HOU"
    },
    {
      "id": 461882,
      "team": "HOU"
    },
    {
      "id": 543257,
      "team": "HOU"
    },
    {
      "id": 543521,
      "team": "HOU"
    },
    {
      "id": 445153,
      "team": "HOU"
    },
    {
      "id": 543321,
      "team": "HOU"
    },
    {
      "id": 430589,
      "team": "HOU"
    },
    {
      "id": 285079,
      "team": "TOR"
    },
    {
      "id": 571800,
      "team": "TOR"
    },
    {
      "id": 571901,
      "team": "TOR"
    },
    {
      "id": 476270,
      "team": "TOR"
    },
    {
      "id": 554432,
      "team": "TOR"
    },
    {
      "id": 425900,
      "team": "TOR"
    },
    {
      "id": 279824,
      "team": "TOR"
    },
    {
      "id": 493128,
      "team": "TOR"
    },
    {
      "id": 572365,
      "team": "TOR"
    },
    {
      "id": 460099,
      "team": "TOR"
    },
    {
      "id": 464433,
      "team": "TOR"
    },
    {
      "id": 445170,
      "team": "TOR"
    },
    {
      "id": 592717,
      "team": "TOR"
    },
    {
      "id": 430661,
      "team": "TOR"
    },
    {
      "id": 458675,
      "team": "TOR"
    },
    {
      "id": 408314,
      "team": "TOR"
    },
    {
      "id": 489365,
      "team": "TOR"
    },
    {
      "id": 466320,
      "team": "TOR"
    },
    {
      "id": 573186,
      "team": "TOR"
    },
    {
      "id": 446399,
      "team": "TOR"
    },
    {
      "id": 457918,
      "team": "TOR"
    },
    {
      "id": 445163,
      "team": "TOR"
    },
    {
      "id": 543238,
      "team": "TOR"
    },
    {
      "id": 502143,
      "team": "TOR"
    },
    {
      "id": 430832,
      "team": "TOR"
    }
  ],
  "414443": [
    {
      "id": 543779,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 407793,
      "team": "STL"
    },
    {
      "id": 279571,
      "team": "STL"
    },
    {
      "id": 518771,
      "team": "STL"
    },
    {
      "id": 448602,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 545341,
      "team": "STL"
    },
    {
      "id": 518792,
      "team": "STL"
    },
    {
      "id": 488721,
      "team": "STL"
    },
    {
      "id": 329092,
      "team": "STL"
    },
    {
      "id": 446225,
      "team": "STL"
    },
    {
      "id": 445055,
      "team": "STL"
    },
    {
      "id": 453646,
      "team": "STL"
    },
    {
      "id": 518902,
      "team": "STL"
    },
    {
      "id": 595307,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 425509,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 516416,
      "team": "MIL"
    },
    {
      "id": 455117,
      "team": "MIL"
    },
    {
      "id": 346798,
      "team": "MIL"
    },
    {
      "id": 425840,
      "team": "MIL"
    },
    {
      "id": 571666,
      "team": "MIL"
    },
    {
      "id": 490063,
      "team": "MIL"
    },
    {
      "id": 595386,
      "team": "MIL"
    },
    {
      "id": 460075,
      "team": "MIL"
    },
    {
      "id": 408061,
      "team": "MIL"
    },
    {
      "id": 608349,
      "team": "MIL"
    },
    {
      "id": 467143,
      "team": "MIL"
    },
    {
      "id": 455009,
      "team": "MIL"
    },
    {
      "id": 452252,
      "team": "MIL"
    },
    {
      "id": 451089,
      "team": "MIL"
    },
    {
      "id": 460576,
      "team": "MIL"
    },
    {
      "id": 518960,
      "team": "MIL"
    },
    {
      "id": 518468,
      "team": "MIL"
    },
    {
      "id": 467827,
      "team": "MIL"
    },
    {
      "id": 519293,
      "team": "MIL"
    },
    {
      "id": 502026,
      "team": "MIL"
    },
    {
      "id": 596143,
      "team": "MIL"
    },
    {
      "id": 592341,
      "team": "MIL"
    },
    {
      "id": 133380,
      "team": "MIL"
    },
    {
      "id": 519076,
      "team": "MIL"
    },
    {
      "id": 541650,
      "team": "MIL"
    }
  ],
  "414633": [
    {
      "id": 518934,
      "team": "COL"
    },
    {
      "id": 518614,
      "team": "COL"
    },
    {
      "id": 115629,
      "team": "COL"
    },
    {
      "id": 571448,
      "team": "COL"
    },
    {
      "id": 460026,
      "team": "COL"
    },
    {
      "id": 571735,
      "team": "COL"
    },
    {
      "id": 592454,
      "team": "COL"
    },
    {
      "id": 623184,
      "team": "COL"
    },
    {
      "id": 518452,
      "team": "COL"
    },
    {
      "id": 453064,
      "team": "COL"
    },
    {
      "id": 407822,
      "team": "COL"
    },
    {
      "id": 572019,
      "team": "COL"
    },
    {
      "id": 471865,
      "team": "COL"
    },
    {
      "id": 452718,
      "team": "COL"
    },
    {
      "id": 502522,
      "team": "COL"
    },
    {
      "id": 543184,
      "team": "COL"
    },
    {
      "id": 501647,
      "team": "COL"
    },
    {
      "id": 446099,
      "team": "COL"
    },
    {
      "id": 453568,
      "team": "COL"
    },
    {
      "id": 488681,
      "team": "COL"
    },
    {
      "id": 457429,
      "team": "COL"
    },
    {
      "id": 502374,
      "team": "COL"
    },
    {
      "id": 501255,
      "team": "COL"
    },
    {
      "id": 592826,
      "team": "HOU"
    },
    {
      "id": 474892,
      "team": "HOU"
    },
    {
      "id": 594828,
      "team": "HOU"
    },
    {
      "id": 474233,
      "team": "HOU"
    },
    {
      "id": 519085,
      "team": "HOU"
    },
    {
      "id": 501789,
      "team": "HOU"
    },
    {
      "id": 605512,
      "team": "HOU"
    },
    {
      "id": 543521,
      "team": "HOU"
    },
    {
      "id": 430589,
      "team": "HOU"
    },
    {
      "id": 472528,
      "team": "HOU"
    },
    {
      "id": 514888,
      "team": "HOU"
    },
    {
      "id": 450212,
      "team": "HOU"
    },
    {
      "id": 543807,
      "team": "HOU"
    },
    {
      "id": 451661,
      "team": "HOU"
    },
    {
      "id": 621121,
      "team": "HOU"
    },
    {
      "id": 570267,
      "team": "HOU"
    },
    {
      "id": 621043,
      "team": "HOU"
    },
    {
      "id": 488771,
      "team": "HOU"
    },
    {
      "id": 448609,
      "team": "HOU"
    },
    {
      "id": 503556,
      "team": "HOU"
    },
    {
      "id": 572971,
      "team": "HOU"
    },
    {
      "id": 545350,
      "team": "HOU"
    },
    {
      "id": 491159,
      "team": "HOU"
    },
    {
      "id": 433584,
      "team": "HOU"
    },
    {
      "id": 502381,
      "team": "HOU"
    }
  ],
  "414648": [
    {
      "id": 518934,
      "team": "COL"
    },
    {
      "id": 518614,
      "team": "COL"
    },
    {
      "id": 115629,
      "team": "COL"
    },
    {
      "id": 571448,
      "team": "COL"
    },
    {
      "id": 460026,
      "team": "COL"
    },
    {
      "id": 571735,
      "team": "COL"
    },
    {
      "id": 592454,
      "team": "COL"
    },
    {
      "id": 623184,
      "team": "COL"
    },
    {
      "id": 518452,
      "team": "COL"
    },
    {
      "id": 453064,
      "team": "COL"
    },
    {
      "id": 407822,
      "team": "COL"
    },
    {
      "id": 572019,
      "team": "COL"
    },
    {
      "id": 548357,
      "team": "COL"
    },
    {
      "id": 471865,
      "team": "COL"
    },
    {
      "id": 452718,
      "team": "COL"
    },
    {
      "id": 502522,
      "team": "COL"
    },
    {
      "id": 543184,
      "team": "COL"
    },
    {
      "id": 501647,
      "team": "COL"
    },
    {
      "id": 446099,
      "team": "COL"
    },
    {
      "id": 453568,
      "team": "COL"
    },
    {
      "id": 488681,
      "team": "COL"
    },
    {
      "id": 457429,
      "team": "COL"
    },
    {
      "id": 502374,
      "team": "COL"
    },
    {
      "id": 501255,
      "team": "COL"
    },
    {
      "id": 592826,
      "team": "HOU"
    },
    {
      "id": 514888,
      "team": "HOU"
    },
    {
      "id": 474892,
      "team": "HOU"
    },
    {
      "id": 474233,
      "team": "HOU"
    },
    {
      "id": 450212,
      "team": "HOU"
    },
    {
      "id": 543807,
      "team": "HOU"
    },
    {
      "id": 451661,
      "team": "HOU"
    },
    {
      "id": 621121,
      "team": "HOU"
    },
    {
      "id": 570267,
      "team": "HOU"
    },
    {
      "id": 621043,
      "team": "HOU"
    },
    {
      "id": 488771,
      "team": "HOU"
    },
    {
      "id": 519085,
      "team": "HOU"
    },
    {
      "id": 448609,
      "team": "HOU"
    },
    {
      "id": 503556,
      "team": "HOU"
    },
    {
      "id": 572971,
      "team": "HOU"
    },
    {
      "id": 501789,
      "team": "HOU"
    },
    {
      "id": 605512,
      "team": "HOU"
    },
    {
      "id": 545350,
      "team": "HOU"
    },
    {
      "id": 491159,
      "team": "HOU"
    },
    {
      "id": 433584,
      "team": "HOU"
    },
    {
      "id": 543521,
      "team": "HOU"
    },
    {
      "id": 502381,
      "team": "HOU"
    },
    {
      "id": 430589,
      "team": "HOU"
    },
    {
      "id": 472528,
      "team": "HOU"
    }
  ],
  "415099": [
    {
      "id": 543779,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 407793,
      "team": "STL"
    },
    {
      "id": 518553,
      "team": "STL"
    },
    {
      "id": 448602,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 572039,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 545341,
      "team": "STL"
    },
    {
      "id": 518792,
      "team": "STL"
    },
    {
      "id": 488721,
      "team": "STL"
    },
    {
      "id": 329092,
      "team": "STL"
    },
    {
      "id": 453646,
      "team": "STL"
    },
    {
      "id": 592815,
      "team": "STL"
    },
    {
      "id": 518902,
      "team": "STL"
    },
    {
      "id": 430681,
      "team": "STL"
    },
    {
      "id": 595307,
      "team": "STL"
    },
    {
      "id": 462515,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 425509,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 488810,
      "team": "STL"
    },
    {
      "id": 453400,
      "team": "ATL"
    },
    {
      "id": 455976,
      "team": "ATL"
    },
    {
      "id": 430630,
      "team": "ATL"
    },
    {
      "id": 516811,
      "team": "ATL"
    },
    {
      "id": 592743,
      "team": "ATL"
    },
    {
      "id": 571946,
      "team": "ATL"
    },
    {
      "id": 622072,
      "team": "ATL"
    },
    {
      "id": 607054,
      "team": "ATL"
    },
    {
      "id": 465674,
      "team": "ATL"
    },
    {
      "id": 605374,
      "team": "ATL"
    },
    {
      "id": 462382,
      "team": "ATL"
    },
    {
      "id": 150229,
      "team": "ATL"
    },
    {
      "id": 593495,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 446321,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 543432,
      "team": "ATL"
    },
    {
      "id": 527055,
      "team": "ATL"
    },
    {
      "id": 611177,
      "team": "ATL"
    },
    {
      "id": 605538,
      "team": "ATL"
    },
    {
      "id": 430404,
      "team": "ATL"
    },
    {
      "id": 430911,
      "team": "ATL"
    },
    {
      "id": 501593,
      "team": "ATL"
    },
    {
      "id": 457727,
      "team": "ATL"
    }
  ],
  "447516": [
    {
      "id": 543779,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 502190,
      "team": "STL"
    },
    {
      "id": 544928,
      "team": "STL"
    },
    {
      "id": 514913,
      "team": "STL"
    },
    {
      "id": 461235,
      "team": "STL"
    },
    {
      "id": 621199,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 572039,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 545341,
      "team": "STL"
    },
    {
      "id": 571431,
      "team": "STL"
    },
    {
      "id": 455009,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 571757,
      "team": "STL"
    },
    {
      "id": 518883,
      "team": "STL"
    },
    {
      "id": 493200,
      "team": "STL"
    },
    {
      "id": 649557,
      "team": "STL"
    },
    {
      "id": 518700,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 576397,
      "team": "STL"
    },
    {
      "id": 516416,
      "team": "AZ"
    },
    {
      "id": 594838,
      "team": "AZ"
    },
    {
      "id": 543339,
      "team": "AZ"
    },
    {
      "id": 430001,
      "team": "AZ"
    },
    {
      "id": 456422,
      "team": "AZ"
    },
    {
      "id": 456078,
      "team": "AZ"
    },
    {
      "id": 461325,
      "team": "AZ"
    },
    {
      "id": 571946,
      "team": "AZ"
    },
    {
      "id": 517414,
      "team": "AZ"
    },
    {
      "id": 571578,
      "team": "AZ"
    },
    {
      "id": 571875,
      "team": "AZ"
    },
    {
      "id": 425844,
      "team": "AZ"
    },
    {
      "id": 572008,
      "team": "AZ"
    },
    {
      "id": 605177,
      "team": "AZ"
    },
    {
      "id": 630111,
      "team": "AZ"
    },
    {
      "id": 592273,
      "team": "AZ"
    },
    {
      "id": 446899,
      "team": "AZ"
    },
    {
      "id": 605113,
      "team": "AZ"
    },
    {
      "id": 545332,
      "team": "AZ"
    },
    {
      "id": 592662,
      "team": "AZ"
    },
    {
      "id": 605359,
      "team": "AZ"
    },
    {
      "id": 657205,
      "team": "AZ"
    },
    {
      "id": 502671,
      "team": "AZ"
    },
    {
      "id": 543302,
      "team": "AZ"
    }
  ],
  "447557": [
    {
      "id": 543779,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 502190,
      "team": "STL"
    },
    {
      "id": 544928,
      "team": "STL"
    },
    {
      "id": 514913,
      "team": "STL"
    },
    {
      "id": 461235,
      "team": "STL"
    },
    {
      "id": 621199,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 572039,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 545341,
      "team": "STL"
    },
    {
      "id": 571431,
      "team": "STL"
    },
    {
      "id": 455009,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 571757,
      "team": "STL"
    },
    {
      "id": 518883,
      "team": "STL"
    },
    {
      "id": 493200,
      "team": "STL"
    },
    {
      "id": 649557,
      "team": "STL"
    },
    {
      "id": 518700,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 576397,
      "team": "STL"
    },
    {
      "id": 451594,
      "team": "CHC"
    },
    {
      "id": 475243,
      "team": "CHC"
    },
    {
      "id": 407793,
      "team": "CHC"
    },
    {
      "id": 519203,
      "team": "CHC"
    },
    {
      "id": 624585,
      "team": "CHC"
    },
    {
      "id": 595879,
      "team": "CHC"
    },
    {
      "id": 608365,
      "team": "CHC"
    },
    {
      "id": 471083,
      "team": "CHC"
    },
    {
      "id": 467008,
      "team": "CHC"
    },
    {
      "id": 444468,
      "team": "CHC"
    },
    {
      "id": 518792,
      "team": "CHC"
    },
    {
      "id": 592178,
      "team": "CHC"
    },
    {
      "id": 502239,
      "team": "CHC"
    },
    {
      "id": 450314,
      "team": "CHC"
    },
    {
      "id": 452657,
      "team": "CHC"
    },
    {
      "id": 543148,
      "team": "CHC"
    },
    {
      "id": 518748,
      "team": "CHC"
    },
    {
      "id": 434628,
      "team": "CHC"
    },
    {
      "id": 600303,
      "team": "CHC"
    },
    {
      "id": 453385,
      "team": "CHC"
    },
    {
      "id": 453562,
      "team": "CHC"
    },
    {
      "id": 476589,
      "team": "CHC"
    },
    {
      "id": 424325,
      "team": "CHC"
    },
    {
      "id": 519333,
      "team": "CHC"
    },
    {
      "id": 543294,
      "team": "CHC"
    }
  ],
  "447893": [
    {
      "id": 593958,
      "team": "BOS"
    },
    {
      "id": 453214,
      "team": "BOS"
    },
    {
      "id": 120074,
      "team": "BOS"
    },
    {
      "id": 519144,
      "team": "BOS"
    },
    {
      "id": 547749,
      "team": "BOS"
    },
    {
      "id": 592390,
      "team": "BOS"
    },
    {
      "id": 453329,
      "team": "BOS"
    },
    {
      "id": 571918,
      "team": "BOS"
    },
    {
      "id": 543726,
      "team": "BOS"
    },
    {
      "id": 543768,
      "team": "BOS"
    },
    {
      "id": 518927,
      "team": "BOS"
    },
    {
      "id": 456034,
      "team": "BOS"
    },
    {
      "id": 593523,
      "team": "BOS"
    },
    {
      "id": 605141,
      "team": "BOS"
    },
    {
      "id": 518886,
      "team": "BOS"
    },
    {
      "id": 456030,
      "team": "BOS"
    },
    {
      "id": 593428,
      "team": "BOS"
    },
    {
      "id": 598265,
      "team": "BOS"
    },
    {
      "id": 534606,
      "team": "BOS"
    },
    {
      "id": 493157,
      "team": "BOS"
    },
    {
      "id": 506702,
      "team": "BOS"
    },
    {
      "id": 434670,
      "team": "BOS"
    },
    {
      "id": 598264,
      "team": "BOS"
    },
    {
      "id": 543877,
      "team": "BOS"
    },
    {
      "id": 455759,
      "team": "BOS"
    },
    {
      "id": 429664,
      "team": "SEA"
    },
    {
      "id": 518553,
      "team": "SEA"
    },
    {
      "id": 493193,
      "team": "SEA"
    },
    {
      "id": 276542,
      "team": "SEA"
    },
    {
      "id": 608167,
      "team": "SEA"
    },
    {
      "id": 572122,
      "team": "SEA"
    },
    {
      "id": 606466,
      "team": "SEA"
    },
    {
      "id": 547982,
      "team": "SEA"
    },
    {
      "id": 572020,
      "team": "SEA"
    },
    {
      "id": 543883,
      "team": "SEA"
    },
    {
      "id": 592716,
      "team": "SEA"
    },
    {
      "id": 455104,
      "team": "SEA"
    },
    {
      "id": 592836,
      "team": "SEA"
    },
    {
      "id": 452252,
      "team": "SEA"
    },
    {
      "id": 429711,
      "team": "SEA"
    },
    {
      "id": 502182,
      "team": "SEA"
    },
    {
      "id": 452234,
      "team": "SEA"
    },
    {
      "id": 621242,
      "team": "SEA"
    },
    {
      "id": 443558,
      "team": "SEA"
    },
    {
      "id": 502523,
      "team": "SEA"
    },
    {
      "id": 493114,
      "team": "SEA"
    },
    {
      "id": 573064,
      "team": "SEA"
    },
    {
      "id": 547874,
      "team": "SEA"
    },
    {
      "id": 543557,
      "team": "SEA"
    },
    {
      "id": 501992,
      "team": "SEA"
    }
  ],
  "447898": [
    {
      "id": 544727,
      "team": "NYM"
    },
    {
      "id": 425784,
      "team": "NYM"
    },
    {
      "id": 624424,
      "team": "NYM"
    },
    {
      "id": 571927,
      "team": "NYM"
    },
    {
      "id": 112526,
      "team": "NYM"
    },
    {
      "id": 457477,
      "team": "NYM"
    },
    {
      "id": 518774,
      "team": "NYM"
    },
    {
      "id": 425766,
      "team": "NYM"
    },
    {
      "id": 455374,
      "team": "NYM"
    },
    {
      "id": 594798,
      "team": "NYM"
    },
    {
      "id": 592665,
      "team": "NYM"
    },
    {
      "id": 570663,
      "team": "NYM"
    },
    {
      "id": 592789,
      "team": "NYM"
    },
    {
      "id": 571841,
      "team": "NYM"
    },
    {
      "id": 493316,
      "team": "NYM"
    },
    {
      "id": 460283,
      "team": "NYM"
    },
    {
      "id": 592340,
      "team": "NYM"
    },
    {
      "id": 608700,
      "team": "NYM"
    },
    {
      "id": 608703,
      "team": "NYM"
    },
    {
      "id": 452678,
      "team": "NYM"
    },
    {
      "id": 434158,
      "team": "NYM"
    },
    {
      "id": 430637,
      "team": "NYM"
    },
    {
      "id": 435522,
      "team": "NYM"
    },
    {
      "id": 527038,
      "team": "NYM"
    },
    {
      "id": 516714,
      "team": "ATL"
    },
    {
      "id": 455976,
      "team": "ATL"
    },
    {
      "id": 607054,
      "team": "ATL"
    },
    {
      "id": 488818,
      "team": "ATL"
    },
    {
      "id": 607231,
      "team": "ATL"
    },
    {
      "id": 571871,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 430947,
      "team": "ATL"
    },
    {
      "id": 542255,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 502032,
      "team": "ATL"
    },
    {
      "id": 468396,
      "team": "ATL"
    },
    {
      "id": 527055,
      "team": "ATL"
    },
    {
      "id": 611177,
      "team": "ATL"
    },
    {
      "id": 605538,
      "team": "ATL"
    },
    {
      "id": 592433,
      "team": "ATL"
    },
    {
      "id": 425796,
      "team": "ATL"
    },
    {
      "id": 605480,
      "team": "ATL"
    },
    {
      "id": 452095,
      "team": "ATL"
    },
    {
      "id": 519437,
      "team": "ATL"
    },
    {
      "id": 462382,
      "team": "ATL"
    },
    {
      "id": 150229,
      "team": "ATL"
    },
    {
      "id": 594760,
      "team": "ATL"
    },
    {
      "id": 474319,
      "team": "ATL"
    },
    {
      "id": 543017,
      "team": "ATL"
    }
  ],
  "448403": [
    {
      "id": 455976,
      "team": "ATL"
    },
    {
      "id": 493596,
      "team": "ATL"
    },
    {
      "id": 607054,
      "team": "ATL"
    },
    {
      "id": 488818,
      "team": "ATL"
    },
    {
      "id": 447714,
      "team": "ATL"
    },
    {
      "id": 571871,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 430947,
      "team": "ATL"
    },
    {
      "id": 542255,
      "team": "ATL"
    },
    {
      "id": 621408,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 542432,
      "team": "ATL"
    },
    {
      "id": 611177,
      "team": "ATL"
    },
    {
      "id": 503444,
      "team": "ATL"
    },
    {
      "id": 489232,
      "team": "ATL"
    },
    {
      "id": 543901,
      "team": "ATL"
    },
    {
      "id": 592433,
      "team": "ATL"
    },
    {
      "id": 606291,
      "team": "ATL"
    },
    {
      "id": 592314,
      "team": "ATL"
    },
    {
      "id": 425796,
      "team": "ATL"
    },
    {
      "id": 519437,
      "team": "ATL"
    },
    {
      "id": 462382,
      "team": "ATL"
    },
    {
      "id": 150229,
      "team": "ATL"
    },
    {
      "id": 474319,
      "team": "ATL"
    },
    {
      "id": 543017,
      "team": "ATL"
    },
    {
      "id": 592826,
      "team": "PHI"
    },
    {
      "id": 476451,
      "team": "PHI"
    },
    {
      "id": 429667,
      "team": "PHI"
    },
    {
      "id": 621107,
      "team": "PHI"
    },
    {
      "id": 456696,
      "team": "PHI"
    },
    {
      "id": 457732,
      "team": "PHI"
    },
    {
      "id": 571437,
      "team": "PHI"
    },
    {
      "id": 593576,
      "team": "PHI"
    },
    {
      "id": 595963,
      "team": "PHI"
    },
    {
      "id": 571830,
      "team": "PHI"
    },
    {
      "id": 596748,
      "team": "PHI"
    },
    {
      "id": 519237,
      "team": "PHI"
    },
    {
      "id": 519085,
      "team": "PHI"
    },
    {
      "id": 520471,
      "team": "PHI"
    },
    {
      "id": 605894,
      "team": "PHI"
    },
    {
      "id": 605125,
      "team": "PHI"
    },
    {
      "id": 491646,
      "team": "PHI"
    },
    {
      "id": 517370,
      "team": "PHI"
    },
    {
      "id": 591693,
      "team": "PHI"
    },
    {
      "id": 605227,
      "team": "PHI"
    },
    {
      "id": 434563,
      "team": "PHI"
    },
    {
      "id": 595191,
      "team": "PHI"
    },
    {
      "id": 546318,
      "team": "PHI"
    },
    {
      "id": 514917,
      "team": "PHI"
    }
  ],
  "448418": [
    {
      "id": 455976,
      "team": "ATL"
    },
    {
      "id": 493596,
      "team": "ATL"
    },
    {
      "id": 607054,
      "team": "ATL"
    },
    {
      "id": 488818,
      "team": "ATL"
    },
    {
      "id": 447714,
      "team": "ATL"
    },
    {
      "id": 571871,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 430947,
      "team": "ATL"
    },
    {
      "id": 542255,
      "team": "ATL"
    },
    {
      "id": 621408,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 542432,
      "team": "ATL"
    },
    {
      "id": 611177,
      "team": "ATL"
    },
    {
      "id": 503444,
      "team": "ATL"
    },
    {
      "id": 489232,
      "team": "ATL"
    },
    {
      "id": 543901,
      "team": "ATL"
    },
    {
      "id": 592433,
      "team": "ATL"
    },
    {
      "id": 606291,
      "team": "ATL"
    },
    {
      "id": 592314,
      "team": "ATL"
    },
    {
      "id": 425796,
      "team": "ATL"
    },
    {
      "id": 519437,
      "team": "ATL"
    },
    {
      "id": 462382,
      "team": "ATL"
    },
    {
      "id": 150229,
      "team": "ATL"
    },
    {
      "id": 474319,
      "team": "ATL"
    },
    {
      "id": 543017,
      "team": "ATL"
    },
    {
      "id": 592826,
      "team": "PHI"
    },
    {
      "id": 476451,
      "team": "PHI"
    },
    {
      "id": 429667,
      "team": "PHI"
    },
    {
      "id": 621107,
      "team": "PHI"
    },
    {
      "id": 456696,
      "team": "PHI"
    },
    {
      "id": 457732,
      "team": "PHI"
    },
    {
      "id": 571437,
      "team": "PHI"
    },
    {
      "id": 593576,
      "team": "PHI"
    },
    {
      "id": 595963,
      "team": "PHI"
    },
    {
      "id": 571830,
      "team": "PHI"
    },
    {
      "id": 596748,
      "team": "PHI"
    },
    {
      "id": 519237,
      "team": "PHI"
    },
    {
      "id": 519085,
      "team": "PHI"
    },
    {
      "id": 520471,
      "team": "PHI"
    },
    {
      "id": 605894,
      "team": "PHI"
    },
    {
      "id": 605125,
      "team": "PHI"
    },
    {
      "id": 491646,
      "team": "PHI"
    },
    {
      "id": 517370,
      "team": "PHI"
    },
    {
      "id": 591693,
      "team": "PHI"
    },
    {
      "id": 605227,
      "team": "PHI"
    },
    {
      "id": 434563,
      "team": "PHI"
    },
    {
      "id": 595191,
      "team": "PHI"
    },
    {
      "id": 546318,
      "team": "PHI"
    },
    {
      "id": 514917,
      "team": "PHI"
    }
  ],
  "448503": [
    {
      "id": 543779,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 502190,
      "team": "STL"
    },
    {
      "id": 461235,
      "team": "STL"
    },
    {
      "id": 621199,
      "team": "STL"
    },
    {
      "id": 448802,
      "team": "STL"
    },
    {
      "id": 572039,
      "team": "STL"
    },
    {
      "id": 407812,
      "team": "STL"
    },
    {
      "id": 594824,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 571431,
      "team": "STL"
    },
    {
      "id": 502054,
      "team": "STL"
    },
    {
      "id": 451705,
      "team": "STL"
    },
    {
      "id": 455009,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 571757,
      "team": "STL"
    },
    {
      "id": 594577,
      "team": "STL"
    },
    {
      "id": 493200,
      "team": "STL"
    },
    {
      "id": 425532,
      "team": "STL"
    },
    {
      "id": 595307,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 425509,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 435043,
      "team": "STL"
    },
    {
      "id": 576397,
      "team": "STL"
    },
    {
      "id": 455976,
      "team": "ATL"
    },
    {
      "id": 592433,
      "team": "ATL"
    },
    {
      "id": 606291,
      "team": "ATL"
    },
    {
      "id": 592314,
      "team": "ATL"
    },
    {
      "id": 493596,
      "team": "ATL"
    },
    {
      "id": 425796,
      "team": "ATL"
    },
    {
      "id": 461314,
      "team": "ATL"
    },
    {
      "id": 607054,
      "team": "ATL"
    },
    {
      "id": 488818,
      "team": "ATL"
    },
    {
      "id": 447714,
      "team": "ATL"
    },
    {
      "id": 594792,
      "team": "ATL"
    },
    {
      "id": 462382,
      "team": "ATL"
    },
    {
      "id": 571871,
      "team": "ATL"
    },
    {
      "id": 150229,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 430947,
      "team": "ATL"
    },
    {
      "id": 433584,
      "team": "ATL"
    },
    {
      "id": 542255,
      "team": "ATL"
    },
    {
      "id": 542432,
      "team": "ATL"
    },
    {
      "id": 611177,
      "team": "ATL"
    },
    {
      "id": 503444,
      "team": "ATL"
    },
    {
      "id": 474319,
      "team": "ATL"
    },
    {
      "id": 489232,
      "team": "ATL"
    },
    {
      "id": 547007,
      "team": "ATL"
    }
  ],
  "490907": [
    {
      "id": 451594,
      "team": "STL"
    },
    {
      "id": 543779,
      "team": "STL"
    },
    {
      "id": 502190,
      "team": "STL"
    },
    {
      "id": 544928,
      "team": "STL"
    },
    {
      "id": 621199,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 572039,
      "team": "STL"
    },
    {
      "id": 607231,
      "team": "STL"
    },
    {
      "id": 594824,
      "team": "STL"
    },
    {
      "id": 605154,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 500874,
      "team": "STL"
    },
    {
      "id": 502054,
      "team": "STL"
    },
    {
      "id": 657557,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 493200,
      "team": "STL"
    },
    {
      "id": 649557,
      "team": "STL"
    },
    {
      "id": 518700,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 425509,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 572096,
      "team": "STL"
    },
    {
      "id": 576397,
      "team": "STL"
    },
    {
      "id": 446399,
      "team": "STL"
    },
    {
      "id": 400284,
      "team": "LAD"
    },
    {
      "id": 621035,
      "team": "LAD"
    },
    {
      "id": 518735,
      "team": "LAD"
    },
    {
      "id": 605131,
      "team": "LAD"
    },
    {
      "id": 571771,
      "team": "LAD"
    },
    {
      "id": 608369,
      "team": "LAD"
    },
    {
      "id": 523253,
      "team": "LAD"
    },
    {
      "id": 594795,
      "team": "LAD"
    },
    {
      "id": 501822,
      "team": "LAD"
    },
    {
      "id": 445276,
      "team": "LAD"
    },
    {
      "id": 520980,
      "team": "LAD"
    },
    {
      "id": 547943,
      "team": "LAD"
    },
    {
      "id": 453344,
      "team": "LAD"
    },
    {
      "id": 518649,
      "team": "LAD"
    },
    {
      "id": 429711,
      "team": "LAD"
    },
    {
      "id": 624577,
      "team": "LAD"
    },
    {
      "id": 448179,
      "team": "LAD"
    },
    {
      "id": 628317,
      "team": "LAD"
    },
    {
      "id": 451661,
      "team": "LAD"
    },
    {
      "id": 641355,
      "team": "LAD"
    },
    {
      "id": 408236,
      "team": "LAD"
    },
    {
      "id": 477132,
      "team": "LAD"
    },
    {
      "id": 548389,
      "team": "LAD"
    },
    {
      "id": 435221,
      "team": "LAD"
    },
    {
      "id": 489265,
      "team": "LAD"
    }
  ],
  "491139": [
    {
      "id": 519346,
      "team": "MIL"
    },
    {
      "id": 453172,
      "team": "MIL"
    },
    {
      "id": 542908,
      "team": "MIL"
    },
    {
      "id": 490063,
      "team": "MIL"
    },
    {
      "id": 623352,
      "team": "MIL"
    },
    {
      "id": 444489,
      "team": "MIL"
    },
    {
      "id": 608349,
      "team": "MIL"
    },
    {
      "id": 503449,
      "team": "MIL"
    },
    {
      "id": 502179,
      "team": "MIL"
    },
    {
      "id": 542979,
      "team": "MIL"
    },
    {
      "id": 543768,
      "team": "MIL"
    },
    {
      "id": 621446,
      "team": "MIL"
    },
    {
      "id": 448855,
      "team": "MIL"
    },
    {
      "id": 519299,
      "team": "MIL"
    },
    {
      "id": 570267,
      "team": "MIL"
    },
    {
      "id": 448614,
      "team": "MIL"
    },
    {
      "id": 605200,
      "team": "MIL"
    },
    {
      "id": 606115,
      "team": "MIL"
    },
    {
      "id": 606930,
      "team": "MIL"
    },
    {
      "id": 502624,
      "team": "MIL"
    },
    {
      "id": 519076,
      "team": "MIL"
    },
    {
      "id": 541650,
      "team": "MIL"
    },
    {
      "id": 545338,
      "team": "MIL"
    },
    {
      "id": 542583,
      "team": "MIL"
    },
    {
      "id": 543118,
      "team": "MIL"
    },
    {
      "id": 620443,
      "team": "SD"
    },
    {
      "id": 622766,
      "team": "SD"
    },
    {
      "id": 500208,
      "team": "SD"
    },
    {
      "id": 517369,
      "team": "SD"
    },
    {
      "id": 488818,
      "team": "SD"
    },
    {
      "id": 595978,
      "team": "SD"
    },
    {
      "id": 592669,
      "team": "SD"
    },
    {
      "id": 642707,
      "team": "SD"
    },
    {
      "id": 489334,
      "team": "SD"
    },
    {
      "id": 430947,
      "team": "SD"
    },
    {
      "id": 659275,
      "team": "SD"
    },
    {
      "id": 600526,
      "team": "SD"
    },
    {
      "id": 614173,
      "team": "SD"
    },
    {
      "id": 543506,
      "team": "SD"
    },
    {
      "id": 453385,
      "team": "SD"
    },
    {
      "id": 571976,
      "team": "SD"
    },
    {
      "id": 488748,
      "team": "SD"
    },
    {
      "id": 519333,
      "team": "SD"
    },
    {
      "id": 572308,
      "team": "SD"
    },
    {
      "id": 606131,
      "team": "SD"
    },
    {
      "id": 468504,
      "team": "SD"
    },
    {
      "id": 605486,
      "team": "SD"
    },
    {
      "id": 664208,
      "team": "SD"
    },
    {
      "id": 489446,
      "team": "SD"
    },
    {
      "id": 543272,
      "team": "SD"
    }
  ],
  "491274": [
    {
      "id": 571602,
      "team": "CWS"
    },
    {
      "id": 591994,
      "team": "CWS"
    },
    {
      "id": 607074,
      "team": "CWS"
    },
    {
      "id": 502706,
      "team": "CWS"
    },
    {
      "id": 553882,
      "team": "CWS"
    },
    {
      "id": 448306,
      "team": "CWS"
    },
    {
      "id": 573589,
      "team": "CWS"
    },
    {
      "id": 571787,
      "team": "CWS"
    },
    {
      "id": 570560,
      "team": "CWS"
    },
    {
      "id": 571476,
      "team": "CWS"
    },
    {
      "id": 500779,
      "team": "CWS"
    },
    {
      "id": 547989,
      "team": "CWS"
    },
    {
      "id": 502593,
      "team": "CWS"
    },
    {
      "id": 453943,
      "team": "CWS"
    },
    {
      "id": 541645,
      "team": "CWS"
    },
    {
      "id": 460059,
      "team": "CWS"
    },
    {
      "id": 592454,
      "team": "CWS"
    },
    {
      "id": 641313,
      "team": "CWS"
    },
    {
      "id": 593700,
      "team": "CWS"
    },
    {
      "id": 641553,
      "team": "CWS"
    },
    {
      "id": 466320,
      "team": "CWS"
    },
    {
      "id": 607345,
      "team": "CWS"
    },
    {
      "id": 461872,
      "team": "CWS"
    },
    {
      "id": 502085,
      "team": "CWS"
    },
    {
      "id": 543359,
      "team": "CWS"
    },
    {
      "id": 476454,
      "team": "NYY"
    },
    {
      "id": 622663,
      "team": "NYY"
    },
    {
      "id": 452104,
      "team": "NYY"
    },
    {
      "id": 622703,
      "team": "NYY"
    },
    {
      "id": 453056,
      "team": "NYY"
    },
    {
      "id": 592741,
      "team": "NYY"
    },
    {
      "id": 593334,
      "team": "NYY"
    },
    {
      "id": 519222,
      "team": "NYY"
    },
    {
      "id": 608701,
      "team": "NYY"
    },
    {
      "id": 592450,
      "team": "NYY"
    },
    {
      "id": 501381,
      "team": "NYY"
    },
    {
      "id": 547888,
      "team": "NYY"
    },
    {
      "id": 609280,
      "team": "NYY"
    },
    {
      "id": 643778,
      "team": "NYY"
    },
    {
      "id": 458731,
      "team": "NYY"
    },
    {
      "id": 642180,
      "team": "NYY"
    },
    {
      "id": 643338,
      "team": "NYY"
    },
    {
      "id": 461325,
      "team": "NYY"
    },
    {
      "id": 591720,
      "team": "NYY"
    },
    {
      "id": 570666,
      "team": "NYY"
    },
    {
      "id": 596142,
      "team": "NYY"
    },
    {
      "id": 592122,
      "team": "NYY"
    },
    {
      "id": 656756,
      "team": "NYY"
    },
    {
      "id": 547973,
      "team": "NYY"
    },
    {
      "id": 544369,
      "team": "NYY"
    }
  ],
  "491431": [
    {
      "id": 429664,
      "team": "SEA"
    },
    {
      "id": 516416,
      "team": "SEA"
    },
    {
      "id": 621058,
      "team": "SEA"
    },
    {
      "id": 451596,
      "team": "SEA"
    },
    {
      "id": 571745,
      "team": "SEA"
    },
    {
      "id": 518553,
      "team": "SEA"
    },
    {
      "id": 641941,
      "team": "SEA"
    },
    {
      "id": 592325,
      "team": "SEA"
    },
    {
      "id": 664641,
      "team": "SEA"
    },
    {
      "id": 621471,
      "team": "SEA"
    },
    {
      "id": 572122,
      "team": "SEA"
    },
    {
      "id": 572287,
      "team": "SEA"
    },
    {
      "id": 572020,
      "team": "SEA"
    },
    {
      "id": 572021,
      "team": "SEA"
    },
    {
      "id": 519240,
      "team": "SEA"
    },
    {
      "id": 434563,
      "team": "SEA"
    },
    {
      "id": 543883,
      "team": "SEA"
    },
    {
      "id": 543964,
      "team": "SEA"
    },
    {
      "id": 600301,
      "team": "SEA"
    },
    {
      "id": 628338,
      "team": "SEA"
    },
    {
      "id": 621242,
      "team": "SEA"
    },
    {
      "id": 443558,
      "team": "SEA"
    },
    {
      "id": 502481,
      "team": "SEA"
    },
    {
      "id": 433587,
      "team": "SEA"
    },
    {
      "id": 502143,
      "team": "SEA"
    },
    {
      "id": 621112,
      "team": "OAK"
    },
    {
      "id": 594943,
      "team": "OAK"
    },
    {
      "id": 640455,
      "team": "OAK"
    },
    {
      "id": 521230,
      "team": "OAK"
    },
    {
      "id": 595144,
      "team": "OAK"
    },
    {
      "id": 605254,
      "team": "OAK"
    },
    {
      "id": 476704,
      "team": "OAK"
    },
    {
      "id": 656305,
      "team": "OAK"
    },
    {
      "id": 543243,
      "team": "OAK"
    },
    {
      "id": 543760,
      "team": "OAK"
    },
    {
      "id": 501981,
      "team": "OAK"
    },
    {
      "id": 448281,
      "team": "OAK"
    },
    {
      "id": 425492,
      "team": "OAK"
    },
    {
      "id": 572728,
      "team": "OAK"
    },
    {
      "id": 459964,
      "team": "OAK"
    },
    {
      "id": 622194,
      "team": "OAK"
    },
    {
      "id": 475174,
      "team": "OAK"
    },
    {
      "id": 489267,
      "team": "OAK"
    },
    {
      "id": 592387,
      "team": "OAK"
    },
    {
      "id": 572033,
      "team": "OAK"
    },
    {
      "id": 434672,
      "team": "OAK"
    },
    {
      "id": 446099,
      "team": "OAK"
    },
    {
      "id": 433586,
      "team": "OAK"
    },
    {
      "id": 543056,
      "team": "OAK"
    },
    {
      "id": 434658,
      "team": "OAK"
    }
  ],
  "491869": [
    {
      "id": 643265,
      "team": "NYY"
    },
    {
      "id": 476454,
      "team": "NYY"
    },
    {
      "id": 622663,
      "team": "NYY"
    },
    {
      "id": 452104,
      "team": "NYY"
    },
    {
      "id": 453056,
      "team": "NYY"
    },
    {
      "id": 458731,
      "team": "NYY"
    },
    {
      "id": 642180,
      "team": "NYY"
    },
    {
      "id": 476589,
      "team": "NYY"
    },
    {
      "id": 643338,
      "team": "NYY"
    },
    {
      "id": 592454,
      "team": "NYY"
    },
    {
      "id": 519222,
      "team": "NYY"
    },
    {
      "id": 591720,
      "team": "NYY"
    },
    {
      "id": 448802,
      "team": "NYY"
    },
    {
      "id": 571951,
      "team": "NYY"
    },
    {
      "id": 570666,
      "team": "NYY"
    },
    {
      "id": 596142,
      "team": "NYY"
    },
    {
      "id": 592450,
      "team": "NYY"
    },
    {
      "id": 543243,
      "team": "NYY"
    },
    {
      "id": 656756,
      "team": "NYY"
    },
    {
      "id": 502085,
      "team": "NYY"
    },
    {
      "id": 543305,
      "team": "NYY"
    },
    {
      "id": 547973,
      "team": "NYY"
    },
    {
      "id": 453943,
      "team": "NYY"
    },
    {
      "id": 544369,
      "team": "NYY"
    },
    {
      "id": 623149,
      "team": "NYM"
    },
    {
      "id": 642086,
      "team": "NYM"
    },
    {
      "id": 425784,
      "team": "NYM"
    },
    {
      "id": 624424,
      "team": "NYM"
    },
    {
      "id": 571927,
      "team": "NYM"
    },
    {
      "id": 573109,
      "team": "NYM"
    },
    {
      "id": 606160,
      "team": "NYM"
    },
    {
      "id": 518595,
      "team": "NYM"
    },
    {
      "id": 594798,
      "team": "NYM"
    },
    {
      "id": 641850,
      "team": "NYM"
    },
    {
      "id": 607043,
      "team": "NYM"
    },
    {
      "id": 570663,
      "team": "NYM"
    },
    {
      "id": 623167,
      "team": "NYM"
    },
    {
      "id": 607473,
      "team": "NYM"
    },
    {
      "id": 519294,
      "team": "NYM"
    },
    {
      "id": 493316,
      "team": "NYM"
    },
    {
      "id": 642708,
      "team": "NYM"
    },
    {
      "id": 460283,
      "team": "NYM"
    },
    {
      "id": 592340,
      "team": "NYM"
    },
    {
      "id": 452678,
      "team": "NYM"
    },
    {
      "id": 434158,
      "team": "NYM"
    },
    {
      "id": 501571,
      "team": "NYM"
    },
    {
      "id": 527038,
      "team": "NYM"
    }
  ],
  "530206": [
    {
      "id": 622666,
      "team": "ATL"
    },
    {
      "id": 455976,
      "team": "ATL"
    },
    {
      "id": 475247,
      "team": "ATL"
    },
    {
      "id": 518693,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 641438,
      "team": "ATL"
    },
    {
      "id": 493247,
      "team": "ATL"
    },
    {
      "id": 605512,
      "team": "ATL"
    },
    {
      "id": 595465,
      "team": "ATL"
    },
    {
      "id": 542255,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 527055,
      "team": "ATL"
    },
    {
      "id": 605538,
      "team": "ATL"
    },
    {
      "id": 435559,
      "team": "ATL"
    },
    {
      "id": 621345,
      "team": "ATL"
    },
    {
      "id": 640460,
      "team": "ATL"
    },
    {
      "id": 518586,
      "team": "ATL"
    },
    {
      "id": 592314,
      "team": "ATL"
    },
    {
      "id": 608371,
      "team": "ATL"
    },
    {
      "id": 452095,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 621020,
      "team": "ATL"
    },
    {
      "id": 608331,
      "team": "ATL"
    },
    {
      "id": 656794,
      "team": "ATL"
    },
    {
      "id": 592145,
      "team": "ATL"
    },
    {
      "id": 435221,
      "team": "ATL"
    },
    {
      "id": 544727,
      "team": "NYM"
    },
    {
      "id": 624424,
      "team": "NYM"
    },
    {
      "id": 571927,
      "team": "NYM"
    },
    {
      "id": 641645,
      "team": "NYM"
    },
    {
      "id": 554430,
      "team": "NYM"
    },
    {
      "id": 642708,
      "team": "NYM"
    },
    {
      "id": 519023,
      "team": "NYM"
    },
    {
      "id": 608700,
      "team": "NYM"
    },
    {
      "id": 452678,
      "team": "NYM"
    },
    {
      "id": 457803,
      "team": "NYM"
    },
    {
      "id": 623149,
      "team": "NYM"
    },
    {
      "id": 639373,
      "team": "NYM"
    },
    {
      "id": 595943,
      "team": "NYM"
    },
    {
      "id": 642008,
      "team": "NYM"
    },
    {
      "id": 594798,
      "team": "NYM"
    },
    {
      "id": 408236,
      "team": "NYM"
    },
    {
      "id": 607043,
      "team": "NYM"
    },
    {
      "id": 570663,
      "team": "NYM"
    },
    {
      "id": 408314,
      "team": "NYM"
    },
    {
      "id": 460283,
      "team": "NYM"
    },
    {
      "id": 664869,
      "team": "NYM"
    },
    {
      "id": 607229,
      "team": "NYM"
    },
    {
      "id": 607625,
      "team": "NYM"
    },
    {
      "id": 430832,
      "team": "NYM"
    },
    {
      "id": 450306,
      "team": "NYM"
    }
  ],
  "530340": [
    {
      "id": 451594,
      "team": "STL"
    },
    {
      "id": 592815,
      "team": "STL"
    },
    {
      "id": 622168,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 664056,
      "team": "STL"
    },
    {
      "id": 594824,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 572228,
      "team": "STL"
    },
    {
      "id": 605154,
      "team": "STL"
    },
    {
      "id": 596133,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 500874,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 663855,
      "team": "STL"
    },
    {
      "id": 576397,
      "team": "STL"
    },
    {
      "id": 506747,
      "team": "STL"
    },
    {
      "id": 446399,
      "team": "STL"
    },
    {
      "id": 502032,
      "team": "STL"
    },
    {
      "id": 502054,
      "team": "STL"
    },
    {
      "id": 656427,
      "team": "STL"
    },
    {
      "id": 542303,
      "team": "STL"
    },
    {
      "id": 596295,
      "team": "STL"
    },
    {
      "id": 592407,
      "team": "MIA"
    },
    {
      "id": 518618,
      "team": "MIA"
    },
    {
      "id": 656738,
      "team": "MIA"
    },
    {
      "id": 594027,
      "team": "MIA"
    },
    {
      "id": 592663,
      "team": "MIA"
    },
    {
      "id": 571506,
      "team": "MIA"
    },
    {
      "id": 516770,
      "team": "MIA"
    },
    {
      "id": 570632,
      "team": "MIA"
    },
    {
      "id": 607457,
      "team": "MIA"
    },
    {
      "id": 605119,
      "team": "MIA"
    },
    {
      "id": 543045,
      "team": "MIA"
    },
    {
      "id": 457727,
      "team": "MIA"
    },
    {
      "id": 670950,
      "team": "MIA"
    },
    {
      "id": 621446,
      "team": "MIA"
    },
    {
      "id": 622694,
      "team": "MIA"
    },
    {
      "id": 595375,
      "team": "MIA"
    },
    {
      "id": 592680,
      "team": "MIA"
    },
    {
      "id": 446899,
      "team": "MIA"
    },
    {
      "id": 500743,
      "team": "MIA"
    },
    {
      "id": 573185,
      "team": "MIA"
    },
    {
      "id": 592761,
      "team": "MIA"
    },
    {
      "id": 612672,
      "team": "MIA"
    },
    {
      "id": 607968,
      "team": "MIA"
    },
    {
      "id": 608716,
      "team": "MIA"
    },
    {
      "id": 543776,
      "team": "MIA"
    }
  ],
  "530623": [
    {
      "id": 451594,
      "team": "STL"
    },
    {
      "id": 518813,
      "team": "STL"
    },
    {
      "id": 622168,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 607231,
      "team": "STL"
    },
    {
      "id": 594824,
      "team": "STL"
    },
    {
      "id": 605154,
      "team": "STL"
    },
    {
      "id": 596133,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 500874,
      "team": "STL"
    },
    {
      "id": 502032,
      "team": "STL"
    },
    {
      "id": 502054,
      "team": "STL"
    },
    {
      "id": 656427,
      "team": "STL"
    },
    {
      "id": 596295,
      "team": "STL"
    },
    {
      "id": 592815,
      "team": "STL"
    },
    {
      "id": 594577,
      "team": "STL"
    },
    {
      "id": 664056,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 663855,
      "team": "STL"
    },
    {
      "id": 576397,
      "team": "STL"
    },
    {
      "id": 506747,
      "team": "STL"
    },
    {
      "id": 446399,
      "team": "STL"
    },
    {
      "id": 542303,
      "team": "STL"
    },
    {
      "id": 622666,
      "team": "ATL"
    },
    {
      "id": 455976,
      "team": "ATL"
    },
    {
      "id": 475247,
      "team": "ATL"
    },
    {
      "id": 592426,
      "team": "ATL"
    },
    {
      "id": 518693,
      "team": "ATL"
    },
    {
      "id": 488721,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 641438,
      "team": "ATL"
    },
    {
      "id": 493247,
      "team": "ATL"
    },
    {
      "id": 595465,
      "team": "ATL"
    },
    {
      "id": 542255,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 542454,
      "team": "ATL"
    },
    {
      "id": 605538,
      "team": "ATL"
    },
    {
      "id": 435559,
      "team": "ATL"
    },
    {
      "id": 621345,
      "team": "ATL"
    },
    {
      "id": 660670,
      "team": "ATL"
    },
    {
      "id": 518586,
      "team": "ATL"
    },
    {
      "id": 592314,
      "team": "ATL"
    },
    {
      "id": 452095,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 621020,
      "team": "ATL"
    },
    {
      "id": 656794,
      "team": "ATL"
    },
    {
      "id": 592145,
      "team": "ATL"
    },
    {
      "id": 434671,
      "team": "ATL"
    }
  ],
  "530638": [
    {
      "id": 451594,
      "team": "STL"
    },
    {
      "id": 518813,
      "team": "STL"
    },
    {
      "id": 622168,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 607231,
      "team": "STL"
    },
    {
      "id": 594824,
      "team": "STL"
    },
    {
      "id": 605154,
      "team": "STL"
    },
    {
      "id": 596133,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 500874,
      "team": "STL"
    },
    {
      "id": 502032,
      "team": "STL"
    },
    {
      "id": 502054,
      "team": "STL"
    },
    {
      "id": 656427,
      "team": "STL"
    },
    {
      "id": 596295,
      "team": "STL"
    },
    {
      "id": 592815,
      "team": "STL"
    },
    {
      "id": 594577,
      "team": "STL"
    },
    {
      "id": 664056,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 663855,
      "team": "STL"
    },
    {
      "id": 576397,
      "team": "STL"
    },
    {
      "id": 506747,
      "team": "STL"
    },
    {
      "id": 446399,
      "team": "STL"
    },
    {
      "id": 542303,
      "team": "STL"
    },
    {
      "id": 622666,
      "team": "ATL"
    },
    {
      "id": 455976,
      "team": "ATL"
    },
    {
      "id": 475247,
      "team": "ATL"
    },
    {
      "id": 592426,
      "team": "ATL"
    },
    {
      "id": 518693,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 641438,
      "team": "ATL"
    },
    {
      "id": 493247,
      "team": "ATL"
    },
    {
      "id": 595465,
      "team": "ATL"
    },
    {
      "id": 542255,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 542454,
      "team": "ATL"
    },
    {
      "id": 605538,
      "team": "ATL"
    },
    {
      "id": 435559,
      "team": "ATL"
    },
    {
      "id": 621345,
      "team": "ATL"
    },
    {
      "id": 660670,
      "team": "ATL"
    },
    {
      "id": 518586,
      "team": "ATL"
    },
    {
      "id": 592314,
      "team": "ATL"
    },
    {
      "id": 452095,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 621020,
      "team": "ATL"
    },
    {
      "id": 608331,
      "team": "ATL"
    },
    {
      "id": 656794,
      "team": "ATL"
    },
    {
      "id": 592145,
      "team": "ATL"
    },
    {
      "id": 434671,
      "team": "ATL"
    }
  ],
  "531451": [
    {
      "id": 622168,
      "team": "STL"
    },
    {
      "id": 592741,
      "team": "STL"
    },
    {
      "id": 594965,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 621550,
      "team": "STL"
    },
    {
      "id": 607231,
      "team": "STL"
    },
    {
      "id": 594824,
      "team": "STL"
    },
    {
      "id": 596133,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 571431,
      "team": "STL"
    },
    {
      "id": 500874,
      "team": "STL"
    },
    {
      "id": 608348,
      "team": "STL"
    },
    {
      "id": 641933,
      "team": "STL"
    },
    {
      "id": 641712,
      "team": "STL"
    },
    {
      "id": 502032,
      "team": "STL"
    },
    {
      "id": 656427,
      "team": "STL"
    },
    {
      "id": 657557,
      "team": "STL"
    },
    {
      "id": 596295,
      "team": "STL"
    },
    {
      "id": 643778,
      "team": "STL"
    },
    {
      "id": 475115,
      "team": "STL"
    },
    {
      "id": 664056,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 666969,
      "team": "STL"
    },
    {
      "id": 663855,
      "team": "STL"
    },
    {
      "id": 608678,
      "team": "STL"
    },
    {
      "id": 506747,
      "team": "STL"
    },
    {
      "id": 446399,
      "team": "STL"
    },
    {
      "id": 542303,
      "team": "STL"
    },
    {
      "id": 456701,
      "team": "CIN"
    },
    {
      "id": 518774,
      "team": "CIN"
    },
    {
      "id": 453172,
      "team": "CIN"
    },
    {
      "id": 593974,
      "team": "CIN"
    },
    {
      "id": 592863,
      "team": "CIN"
    },
    {
      "id": 571466,
      "team": "CIN"
    },
    {
      "id": 664167,
      "team": "CIN"
    },
    {
      "id": 594988,
      "team": "CIN"
    },
    {
      "id": 623451,
      "team": "CIN"
    },
    {
      "id": 640447,
      "team": "CIN"
    },
    {
      "id": 607219,
      "team": "CIN"
    },
    {
      "id": 543101,
      "team": "CIN"
    },
    {
      "id": 605538,
      "team": "CIN"
    },
    {
      "id": 456696,
      "team": "CIN"
    },
    {
      "id": 458015,
      "team": "CIN"
    },
    {
      "id": 622491,
      "team": "CIN"
    },
    {
      "id": 553993,
      "team": "CIN"
    },
    {
      "id": 608371,
      "team": "CIN"
    },
    {
      "id": 571697,
      "team": "CIN"
    },
    {
      "id": 642003,
      "team": "CIN"
    },
    {
      "id": 628452,
      "team": "CIN"
    },
    {
      "id": 606299,
      "team": "CIN"
    },
    {
      "id": 547179,
      "team": "CIN"
    },
    {
      "id": 571740,
      "team": "CIN"
    },
    {
      "id": 592200,
      "team": "CIN"
    },
    {
      "id": 641525,
      "team": "CIN"
    },
    {
      "id": 599096,
      "team": "CIN"
    }
  ],
  "566592": [
    {
      "id": 451594,
      "team": "STL"
    },
    {
      "id": 622168,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 607231,
      "team": "STL"
    },
    {
      "id": 453192,
      "team": "STL"
    },
    {
      "id": 605154,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 500874,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 641712,
      "team": "STL"
    },
    {
      "id": 656427,
      "team": "STL"
    },
    {
      "id": 657557,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 643778,
      "team": "STL"
    },
    {
      "id": 664056,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 446308,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 663855,
      "team": "STL"
    },
    {
      "id": 576397,
      "team": "STL"
    },
    {
      "id": 657041,
      "team": "STL"
    },
    {
      "id": 542303,
      "team": "STL"
    },
    {
      "id": 622666,
      "team": "ATL"
    },
    {
      "id": 455976,
      "team": "ATL"
    },
    {
      "id": 592426,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 592332,
      "team": "ATL"
    },
    {
      "id": 657053,
      "team": "ATL"
    },
    {
      "id": 657097,
      "team": "ATL"
    },
    {
      "id": 595465,
      "team": "ATL"
    },
    {
      "id": 527054,
      "team": "ATL"
    },
    {
      "id": 647336,
      "team": "ATL"
    },
    {
      "id": 518626,
      "team": "ATL"
    },
    {
      "id": 660670,
      "team": "ATL"
    },
    {
      "id": 518586,
      "team": "ATL"
    },
    {
      "id": 592314,
      "team": "ATL"
    },
    {
      "id": 452095,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 621020,
      "team": "ATL"
    },
    {
      "id": 608331,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 656794,
      "team": "ATL"
    },
    {
      "id": 460283,
      "team": "ATL"
    },
    {
      "id": 435263,
      "team": "ATL"
    },
    {
      "id": 461872,
      "team": "ATL"
    },
    {
      "id": 657140,
      "team": "ATL"
    },
    {
      "id": 458708,
      "team": "ATL"
    }
  ],
  "566640": [
    {
      "id": 451594,
      "team": "STL"
    },
    {
      "id": 622168,
      "team": "STL"
    },
    {
      "id": 543939,
      "team": "STL"
    },
    {
      "id": 594965,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 624641,
      "team": "STL"
    },
    {
      "id": 668227,
      "team": "STL"
    },
    {
      "id": 668800,
      "team": "STL"
    },
    {
      "id": 607231,
      "team": "STL"
    },
    {
      "id": 453192,
      "team": "STL"
    },
    {
      "id": 605154,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 500874,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 641933,
      "team": "STL"
    },
    {
      "id": 641712,
      "team": "STL"
    },
    {
      "id": 621529,
      "team": "STL"
    },
    {
      "id": 656427,
      "team": "STL"
    },
    {
      "id": 657557,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 669242,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 643778,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 594577,
      "team": "STL"
    },
    {
      "id": 664056,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 446308,
      "team": "STL"
    },
    {
      "id": 593372,
      "team": "STL"
    },
    {
      "id": 608379,
      "team": "STL"
    },
    {
      "id": 592660,
      "team": "STL"
    },
    {
      "id": 608678,
      "team": "STL"
    },
    {
      "id": 650893,
      "team": "STL"
    },
    {
      "id": 658551,
      "team": "STL"
    },
    {
      "id": 542303,
      "team": "STL"
    },
    {
      "id": 518735,
      "team": "MIL"
    },
    {
      "id": 458006,
      "team": "MIL"
    },
    {
      "id": 669374,
      "team": "MIL"
    },
    {
      "id": 621438,
      "team": "MIL"
    },
    {
      "id": 519346,
      "team": "MIL"
    },
    {
      "id": 592325,
      "team": "MIL"
    },
    {
      "id": 592885,
      "team": "MIL"
    },
    {
      "id": 592865,
      "team": "MIL"
    },
    {
      "id": 623352,
      "team": "MIL"
    },
    {
      "id": 460075,
      "team": "MIL"
    },
    {
      "id": 444489,
      "team": "MIL"
    },
    {
      "id": 519141,
      "team": "MIL"
    },
    {
      "id": 642207,
      "team": "MIL"
    },
    {
      "id": 456715,
      "team": "MIL"
    },
    {
      "id": 669203,
      "team": "MIL"
    },
    {
      "id": 461829,
      "team": "MIL"
    },
    {
      "id": 543768,
      "team": "MIL"
    },
    {
      "id": 571679,
      "team": "MIL"
    },
    {
      "id": 642547,
      "team": "MIL"
    },
    {
      "id": 519058,
      "team": "MIL"
    },
    {
      "id": 448855,
      "team": "MIL"
    },
    {
      "id": 607188,
      "team": "MIL"
    },
    {
      "id": 605143,
      "team": "MIL"
    },
    {
      "id": 605200,
      "team": "MIL"
    },
    {
      "id": 605288,
      "team": "MIL"
    },
    {
      "id": 605486,
      "team": "MIL"
    },
    {
      "id": 606115,
      "team": "MIL"
    },
    {
      "id": 641924,
      "team": "MIL"
    },
    {
      "id": 663757,
      "team": "MIL"
    },
    {
      "id": 543351,
      "team": "MIL"
    },
    {
      "id": 502624,
      "team": "MIL"
    },
    {
      "id": 592222,
      "team": "MIL"
    },
    {
      "id": 519076,
      "team": "MIL"
    },
    {
      "id": 592122,
      "team": "MIL"
    },
    {
      "id": 541650,
      "team": "MIL"
    },
    {
      "id": 543475,
      "team": "MIL"
    },
    {
      "id": 608718,
      "team": "MIL"
    }
  ],
  "633604": [
    {
      "id": 642092,
      "team": "AZ"
    },
    {
      "id": 465657,
      "team": "AZ"
    },
    {
      "id": 668942,
      "team": "AZ"
    },
    {
      "id": 518876,
      "team": "AZ"
    },
    {
      "id": 573009,
      "team": "AZ"
    },
    {
      "id": 622065,
      "team": "AZ"
    },
    {
      "id": 500871,
      "team": "AZ"
    },
    {
      "id": 656464,
      "team": "AZ"
    },
    {
      "id": 605113,
      "team": "AZ"
    },
    {
      "id": 606466,
      "team": "AZ"
    },
    {
      "id": 608348,
      "team": "AZ"
    },
    {
      "id": 592233,
      "team": "AZ"
    },
    {
      "id": 545121,
      "team": "AZ"
    },
    {
      "id": 452678,
      "team": "AZ"
    },
    {
      "id": 444482,
      "team": "AZ"
    },
    {
      "id": 656686,
      "team": "AZ"
    },
    {
      "id": 502210,
      "team": "AZ"
    },
    {
      "id": 488748,
      "team": "AZ"
    },
    {
      "id": 641796,
      "team": "AZ"
    },
    {
      "id": 668678,
      "team": "AZ"
    },
    {
      "id": 572233,
      "team": "AZ"
    },
    {
      "id": 598287,
      "team": "AZ"
    },
    {
      "id": 519390,
      "team": "AZ"
    },
    {
      "id": 592761,
      "team": "AZ"
    },
    {
      "id": 676840,
      "team": "AZ"
    },
    {
      "id": 656976,
      "team": "AZ"
    },
    {
      "id": 624647,
      "team": "LAD"
    },
    {
      "id": 669257,
      "team": "LAD"
    },
    {
      "id": 641360,
      "team": "LAD"
    },
    {
      "id": 621035,
      "team": "LAD"
    },
    {
      "id": 664062,
      "team": "LAD"
    },
    {
      "id": 656716,
      "team": "LAD"
    },
    {
      "id": 405395,
      "team": "LAD"
    },
    {
      "id": 519306,
      "team": "LAD"
    },
    {
      "id": 621111,
      "team": "LAD"
    },
    {
      "id": 669952,
      "team": "LAD"
    },
    {
      "id": 605131,
      "team": "LAD"
    },
    {
      "id": 572041,
      "team": "LAD"
    },
    {
      "id": 542992,
      "team": "LAD"
    },
    {
      "id": 445276,
      "team": "LAD"
    },
    {
      "id": 664076,
      "team": "LAD"
    },
    {
      "id": 628711,
      "team": "LAD"
    },
    {
      "id": 456034,
      "team": "LAD"
    },
    {
      "id": 607461,
      "team": "LAD"
    },
    {
      "id": 666158,
      "team": "LAD"
    },
    {
      "id": 477132,
      "team": "LAD"
    },
    {
      "id": 605141,
      "team": "LAD"
    },
    {
      "id": 519076,
      "team": "LAD"
    },
    {
      "id": 523260,
      "team": "LAD"
    },
    {
      "id": 545333,
      "team": "LAD"
    },
    {
      "id": 457759,
      "team": "LAD"
    }
  ],
  "633594": [
    {
      "id": 676969,
      "team": "TEX"
    },
    {
      "id": 641680,
      "team": "TEX"
    },
    {
      "id": 669256,
      "team": "TEX"
    },
    {
      "id": 453178,
      "team": "TEX"
    },
    {
      "id": 663770,
      "team": "TEX"
    },
    {
      "id": 570257,
      "team": "TEX"
    },
    {
      "id": 641540,
      "team": "TEX"
    },
    {
      "id": 571788,
      "team": "TEX"
    },
    {
      "id": 663993,
      "team": "TEX"
    },
    {
      "id": 656685,
      "team": "TEX"
    },
    {
      "id": 607359,
      "team": "TEX"
    },
    {
      "id": 667463,
      "team": "TEX"
    },
    {
      "id": 621368,
      "team": "TEX"
    },
    {
      "id": 643396,
      "team": "TEX"
    },
    {
      "id": 518586,
      "team": "TEX"
    },
    {
      "id": 622250,
      "team": "TEX"
    },
    {
      "id": 624431,
      "team": "TEX"
    },
    {
      "id": 592314,
      "team": "TEX"
    },
    {
      "id": 641432,
      "team": "TEX"
    },
    {
      "id": 642201,
      "team": "TEX"
    },
    {
      "id": 663465,
      "team": "TEX"
    },
    {
      "id": 641829,
      "team": "TEX"
    },
    {
      "id": 608336,
      "team": "TEX"
    },
    {
      "id": 666969,
      "team": "TEX"
    },
    {
      "id": 502043,
      "team": "TEX"
    },
    {
      "id": 543475,
      "team": "TEX"
    },
    {
      "id": 517008,
      "team": "MIN"
    },
    {
      "id": 666163,
      "team": "MIN"
    },
    {
      "id": 624503,
      "team": "MIN"
    },
    {
      "id": 592743,
      "team": "MIN"
    },
    {
      "id": 573204,
      "team": "MIN"
    },
    {
      "id": 593934,
      "team": "MIN"
    },
    {
      "id": 660896,
      "team": "MIN"
    },
    {
      "id": 608648,
      "team": "MIN"
    },
    {
      "id": 621244,
      "team": "MIN"
    },
    {
      "id": 518626,
      "team": "MIN"
    },
    {
      "id": 628317,
      "team": "MIN"
    },
    {
      "id": 641598,
      "team": "MIN"
    },
    {
      "id": 680777,
      "team": "MIN"
    },
    {
      "id": 570663,
      "team": "MIN"
    },
    {
      "id": 533167,
      "team": "MIN"
    },
    {
      "id": 666135,
      "team": "MIN"
    },
    {
      "id": 443558,
      "team": "MIN"
    },
    {
      "id": 573124,
      "team": "MIN"
    },
    {
      "id": 608652,
      "team": "MIN"
    },
    {
      "id": 641927,
      "team": "MIN"
    },
    {
      "id": 596146,
      "team": "MIN"
    },
    {
      "id": 663616,
      "team": "MIN"
    },
    {
      "id": 593871,
      "team": "MIN"
    },
    {
      "id": 650333,
      "team": "MIN"
    },
    {
      "id": 677976,
      "team": "MIN"
    },
    {
      "id": 621439,
      "team": "MIN"
    },
    {
      "id": 457918,
      "team": "MIN"
    }
  ],
  "633032": [
    {
      "id": 666185,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 663457,
      "team": "STL"
    },
    {
      "id": 624641,
      "team": "STL"
    },
    {
      "id": 668800,
      "team": "STL"
    },
    {
      "id": 519008,
      "team": "STL"
    },
    {
      "id": 453192,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 641933,
      "team": "STL"
    },
    {
      "id": 452657,
      "team": "STL"
    },
    {
      "id": 657557,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 547942,
      "team": "STL"
    },
    {
      "id": 602922,
      "team": "STL"
    },
    {
      "id": 669242,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 453281,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 664056,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 502522,
      "team": "STL"
    },
    {
      "id": 650893,
      "team": "STL"
    },
    {
      "id": 472610,
      "team": "STL"
    },
    {
      "id": 457918,
      "team": "STL"
    },
    {
      "id": 594807,
      "team": "ATL"
    },
    {
      "id": 554431,
      "team": "ATL"
    },
    {
      "id": 666205,
      "team": "ATL"
    },
    {
      "id": 624585,
      "team": "ATL"
    },
    {
      "id": 445926,
      "team": "ATL"
    },
    {
      "id": 592426,
      "team": "ATL"
    },
    {
      "id": 592767,
      "team": "ATL"
    },
    {
      "id": 592626,
      "team": "ATL"
    },
    {
      "id": 501303,
      "team": "ATL"
    },
    {
      "id": 593144,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 657053,
      "team": "ATL"
    },
    {
      "id": 628338,
      "team": "ATL"
    },
    {
      "id": 650828,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 572888,
      "team": "ATL"
    },
    {
      "id": 621020,
      "team": "ATL"
    },
    {
      "id": 608331,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 519293,
      "team": "ATL"
    },
    {
      "id": 607345,
      "team": "ATL"
    },
    {
      "id": 519390,
      "team": "ATL"
    },
    {
      "id": 501659,
      "team": "ATL"
    },
    {
      "id": 450203,
      "team": "ATL"
    },
    {
      "id": 455119,
      "team": "ATL"
    },
    {
      "id": 458708,
      "team": "ATL"
    }
  ],
  "633043": [
    {
      "id": 666185,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 621052,
      "team": "STL"
    },
    {
      "id": 663457,
      "team": "STL"
    },
    {
      "id": 624641,
      "team": "STL"
    },
    {
      "id": 668800,
      "team": "STL"
    },
    {
      "id": 519008,
      "team": "STL"
    },
    {
      "id": 453192,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 641933,
      "team": "STL"
    },
    {
      "id": 452657,
      "team": "STL"
    },
    {
      "id": 657557,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 547942,
      "team": "STL"
    },
    {
      "id": 602922,
      "team": "STL"
    },
    {
      "id": 669242,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 453281,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 664056,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 502522,
      "team": "STL"
    },
    {
      "id": 650893,
      "team": "STL"
    },
    {
      "id": 472610,
      "team": "STL"
    },
    {
      "id": 457918,
      "team": "STL"
    },
    {
      "id": 594807,
      "team": "ATL"
    },
    {
      "id": 554431,
      "team": "ATL"
    },
    {
      "id": 666205,
      "team": "ATL"
    },
    {
      "id": 624585,
      "team": "ATL"
    },
    {
      "id": 445926,
      "team": "ATL"
    },
    {
      "id": 592426,
      "team": "ATL"
    },
    {
      "id": 592767,
      "team": "ATL"
    },
    {
      "id": 592626,
      "team": "ATL"
    },
    {
      "id": 501303,
      "team": "ATL"
    },
    {
      "id": 593144,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 657053,
      "team": "ATL"
    },
    {
      "id": 628338,
      "team": "ATL"
    },
    {
      "id": 650828,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 572888,
      "team": "ATL"
    },
    {
      "id": 621020,
      "team": "ATL"
    },
    {
      "id": 608331,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 519293,
      "team": "ATL"
    },
    {
      "id": 607345,
      "team": "ATL"
    },
    {
      "id": 519390,
      "team": "ATL"
    },
    {
      "id": 501659,
      "team": "ATL"
    },
    {
      "id": 450203,
      "team": "ATL"
    },
    {
      "id": 455119,
      "team": "ATL"
    },
    {
      "id": 458708,
      "team": "ATL"
    }
  ],
  "632794": [
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 594965,
      "team": "STL"
    },
    {
      "id": 621052,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 663457,
      "team": "STL"
    },
    {
      "id": 624641,
      "team": "STL"
    },
    {
      "id": 621573,
      "team": "STL"
    },
    {
      "id": 668800,
      "team": "STL"
    },
    {
      "id": 519008,
      "team": "STL"
    },
    {
      "id": 453192,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 641933,
      "team": "STL"
    },
    {
      "id": 452657,
      "team": "STL"
    },
    {
      "id": 656427,
      "team": "STL"
    },
    {
      "id": 657557,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 547942,
      "team": "STL"
    },
    {
      "id": 602922,
      "team": "STL"
    },
    {
      "id": 669242,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 664056,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 650893,
      "team": "STL"
    },
    {
      "id": 472610,
      "team": "STL"
    },
    {
      "id": 457918,
      "team": "STL"
    },
    {
      "id": 664141,
      "team": "PIT"
    },
    {
      "id": 665854,
      "team": "PIT"
    },
    {
      "id": 592741,
      "team": "PIT"
    },
    {
      "id": 668804,
      "team": "PIT"
    },
    {
      "id": 592325,
      "team": "PIT"
    },
    {
      "id": 592567,
      "team": "PIT"
    },
    {
      "id": 666801,
      "team": "PIT"
    },
    {
      "id": 570256,
      "team": "PIT"
    },
    {
      "id": 607455,
      "team": "PIT"
    },
    {
      "id": 664918,
      "team": "PIT"
    },
    {
      "id": 663647,
      "team": "PIT"
    },
    {
      "id": 607732,
      "team": "PIT"
    },
    {
      "id": 594694,
      "team": "PIT"
    },
    {
      "id": 656605,
      "team": "PIT"
    },
    {
      "id": 596071,
      "team": "PIT"
    },
    {
      "id": 643230,
      "team": "PIT"
    },
    {
      "id": 621028,
      "team": "PIT"
    },
    {
      "id": 621249,
      "team": "PIT"
    },
    {
      "id": 660294,
      "team": "PIT"
    },
    {
      "id": 640444,
      "team": "PIT"
    },
    {
      "id": 683232,
      "team": "PIT"
    },
    {
      "id": 641771,
      "team": "PIT"
    },
    {
      "id": 605421,
      "team": "PIT"
    },
    {
      "id": 670280,
      "team": "PIT"
    },
    {
      "id": 660829,
      "team": "PIT"
    },
    {
      "id": 608717,
      "team": "PIT"
    }
  ],
  "632559": [
    {
      "id": 621114,
      "team": "CWS"
    },
    {
      "id": 544725,
      "team": "CWS"
    },
    {
      "id": 518735,
      "team": "CWS"
    },
    {
      "id": 663853,
      "team": "CWS"
    },
    {
      "id": 660162,
      "team": "CWS"
    },
    {
      "id": 607074,
      "team": "CWS"
    },
    {
      "id": 458681,
      "team": "CWS"
    },
    {
      "id": 521230,
      "team": "CWS"
    },
    {
      "id": 547989,
      "team": "CWS"
    },
    {
      "id": 657757,
      "team": "CWS"
    },
    {
      "id": 656302,
      "team": "CWS"
    },
    {
      "id": 676979,
      "team": "CWS"
    },
    {
      "id": 571718,
      "team": "CWS"
    },
    {
      "id": 656629,
      "team": "CWS"
    },
    {
      "id": 664874,
      "team": "CWS"
    },
    {
      "id": 607481,
      "team": "CWS"
    },
    {
      "id": 625643,
      "team": "CWS"
    },
    {
      "id": 518886,
      "team": "CWS"
    },
    {
      "id": 650391,
      "team": "CWS"
    },
    {
      "id": 605541,
      "team": "CWS"
    },
    {
      "id": 571740,
      "team": "CWS"
    },
    {
      "id": 572971,
      "team": "CWS"
    },
    {
      "id": 664901,
      "team": "CWS"
    },
    {
      "id": 572193,
      "team": "CWS"
    },
    {
      "id": 514917,
      "team": "CWS"
    },
    {
      "id": 614179,
      "team": "CWS"
    },
    {
      "id": 673357,
      "team": "CWS"
    },
    {
      "id": 624427,
      "team": "BOS"
    },
    {
      "id": 593958,
      "team": "BOS"
    },
    {
      "id": 592669,
      "team": "BOS"
    },
    {
      "id": 593140,
      "team": "BOS"
    },
    {
      "id": 578428,
      "team": "BOS"
    },
    {
      "id": 571771,
      "team": "BOS"
    },
    {
      "id": 493603,
      "team": "BOS"
    },
    {
      "id": 650382,
      "team": "BOS"
    },
    {
      "id": 672391,
      "team": "BOS"
    },
    {
      "id": 657077,
      "team": "BOS"
    },
    {
      "id": 608700,
      "team": "BOS"
    },
    {
      "id": 657031,
      "team": "BOS"
    },
    {
      "id": 666915,
      "team": "BOS"
    },
    {
      "id": 542454,
      "team": "BOS"
    },
    {
      "id": 676477,
      "team": "BOS"
    },
    {
      "id": 656941,
      "team": "BOS"
    },
    {
      "id": 502110,
      "team": "BOS"
    },
    {
      "id": 543768,
      "team": "BOS"
    },
    {
      "id": 646240,
      "team": "BOS"
    },
    {
      "id": 570663,
      "team": "BOS"
    },
    {
      "id": 570488,
      "team": "BOS"
    },
    {
      "id": 593428,
      "team": "BOS"
    },
    {
      "id": 518489,
      "team": "BOS"
    },
    {
      "id": 502748,
      "team": "BOS"
    },
    {
      "id": 572070,
      "team": "BOS"
    },
    {
      "id": 543135,
      "team": "BOS"
    },
    {
      "id": 656557,
      "team": "BOS"
    },
    {
      "id": 543877,
      "team": "BOS"
    }
  ],
  "632379": [
    {
      "id": 666200,
      "team": "MIA"
    },
    {
      "id": 674944,
      "team": "MIA"
    },
    {
      "id": 669432,
      "team": "MIA"
    },
    {
      "id": 542947,
      "team": "MIA"
    },
    {
      "id": 650559,
      "team": "MIA"
    },
    {
      "id": 645261,
      "team": "MIA"
    },
    {
      "id": 657193,
      "team": "MIA"
    },
    {
      "id": 665795,
      "team": "MIA"
    },
    {
      "id": 592865,
      "team": "MIA"
    },
    {
      "id": 668721,
      "team": "MIA"
    },
    {
      "id": 595345,
      "team": "MIA"
    },
    {
      "id": 605412,
      "team": "MIA"
    },
    {
      "id": 571670,
      "team": "MIA"
    },
    {
      "id": 669294,
      "team": "MIA"
    },
    {
      "id": 647315,
      "team": "MIA"
    },
    {
      "id": 542914,
      "team": "MIA"
    },
    {
      "id": 621446,
      "team": "MIA"
    },
    {
      "id": 663743,
      "team": "MIA"
    },
    {
      "id": 642423,
      "team": "MIA"
    },
    {
      "id": 622694,
      "team": "MIA"
    },
    {
      "id": 669622,
      "team": "MIA"
    },
    {
      "id": 665862,
      "team": "MIA"
    },
    {
      "id": 660821,
      "team": "MIA"
    },
    {
      "id": 506702,
      "team": "MIA"
    },
    {
      "id": 500743,
      "team": "MIA"
    },
    {
      "id": 605507,
      "team": "MIA"
    },
    {
      "id": 656577,
      "team": "MIA"
    },
    {
      "id": 650331,
      "team": "MIA"
    },
    {
      "id": 475582,
      "team": "WSH"
    },
    {
      "id": 656180,
      "team": "WSH"
    },
    {
      "id": 666168,
      "team": "WSH"
    },
    {
      "id": 680686,
      "team": "WSH"
    },
    {
      "id": 663432,
      "team": "WSH"
    },
    {
      "id": 608723,
      "team": "WSH"
    },
    {
      "id": 605137,
      "team": "WSH"
    },
    {
      "id": 640448,
      "team": "WSH"
    },
    {
      "id": 474568,
      "team": "WSH"
    },
    {
      "id": 502179,
      "team": "WSH"
    },
    {
      "id": 666198,
      "team": "WSH"
    },
    {
      "id": 600921,
      "team": "WSH"
    },
    {
      "id": 621348,
      "team": "WSH"
    },
    {
      "id": 642028,
      "team": "WSH"
    },
    {
      "id": 607560,
      "team": "WSH"
    },
    {
      "id": 664057,
      "team": "WSH"
    },
    {
      "id": 571578,
      "team": "WSH"
    },
    {
      "id": 665742,
      "team": "WSH"
    },
    {
      "id": 593604,
      "team": "WSH"
    },
    {
      "id": 444876,
      "team": "WSH"
    },
    {
      "id": 628450,
      "team": "WSH"
    },
    {
      "id": 607200,
      "team": "WSH"
    },
    {
      "id": 660688,
      "team": "WSH"
    },
    {
      "id": 543594,
      "team": "WSH"
    },
    {
      "id": 657041,
      "team": "WSH"
    },
    {
      "id": 671277,
      "team": "WSH"
    },
    {
      "id": 488671,
      "team": "WSH"
    },
    {
      "id": 641907,
      "team": "WSH"
    }
  ],
  "660910": [
    {
      "id": 594807,
      "team": "ATL"
    },
    {
      "id": 666120,
      "team": "ATL"
    },
    {
      "id": 644433,
      "team": "ATL"
    },
    {
      "id": 669276,
      "team": "ATL"
    },
    {
      "id": 554431,
      "team": "ATL"
    },
    {
      "id": 624585,
      "team": "ATL"
    },
    {
      "id": 518595,
      "team": "ATL"
    },
    {
      "id": 445926,
      "team": "ATL"
    },
    {
      "id": 592426,
      "team": "ATL"
    },
    {
      "id": 592767,
      "team": "ATL"
    },
    {
      "id": 592626,
      "team": "ATL"
    },
    {
      "id": 605253,
      "team": "ATL"
    },
    {
      "id": 501303,
      "team": "ATL"
    },
    {
      "id": 518692,
      "team": "ATL"
    },
    {
      "id": 621345,
      "team": "ATL"
    },
    {
      "id": 628338,
      "team": "ATL"
    },
    {
      "id": 592696,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 661388,
      "team": "ATL"
    },
    {
      "id": 621020,
      "team": "ATL"
    },
    {
      "id": 608331,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 519293,
      "team": "ATL"
    },
    {
      "id": 656353,
      "team": "ATL"
    },
    {
      "id": 606115,
      "team": "ATL"
    },
    {
      "id": 657140,
      "team": "ATL"
    },
    {
      "id": 455119,
      "team": "ATL"
    },
    {
      "id": 642350,
      "team": "HOU"
    },
    {
      "id": 642130,
      "team": "HOU"
    },
    {
      "id": 455117,
      "team": "HOU"
    },
    {
      "id": 663656,
      "team": "HOU"
    },
    {
      "id": 425844,
      "team": "HOU"
    },
    {
      "id": 608324,
      "team": "HOU"
    },
    {
      "id": 608665,
      "team": "HOU"
    },
    {
      "id": 493329,
      "team": "HOU"
    },
    {
      "id": 520980,
      "team": "HOU"
    },
    {
      "id": 543606,
      "team": "HOU"
    },
    {
      "id": 514888,
      "team": "HOU"
    },
    {
      "id": 554340,
      "team": "HOU"
    },
    {
      "id": 592773,
      "team": "HOU"
    },
    {
      "id": 488726,
      "team": "HOU"
    },
    {
      "id": 664353,
      "team": "HOU"
    },
    {
      "id": 649557,
      "team": "HOU"
    },
    {
      "id": 664299,
      "team": "HOU"
    },
    {
      "id": 621043,
      "team": "HOU"
    },
    {
      "id": 488771,
      "team": "HOU"
    },
    {
      "id": 519151,
      "team": "HOU"
    },
    {
      "id": 677651,
      "team": "HOU"
    },
    {
      "id": 503556,
      "team": "HOU"
    },
    {
      "id": 548384,
      "team": "HOU"
    },
    {
      "id": 664208,
      "team": "HOU"
    },
    {
      "id": 676801,
      "team": "HOU"
    },
    {
      "id": 670541,
      "team": "HOU"
    }
  ],
  "663146": [
    {
      "id": 624522,
      "team": "CHC"
    },
    {
      "id": 575929,
      "team": "CHC"
    },
    {
      "id": 621074,
      "team": "CHC"
    },
    {
      "id": 663611,
      "team": "CHC"
    },
    {
      "id": 643524,
      "team": "CHC"
    },
    {
      "id": 664023,
      "team": "CHC"
    },
    {
      "id": 681799,
      "team": "CHC"
    },
    {
      "id": 592767,
      "team": "CHC"
    },
    {
      "id": 621550,
      "team": "CHC"
    },
    {
      "id": 664123,
      "team": "CHC"
    },
    {
      "id": 641684,
      "team": "CHC"
    },
    {
      "id": 596057,
      "team": "CHC"
    },
    {
      "id": 518792,
      "team": "CHC"
    },
    {
      "id": 543228,
      "team": "CHC"
    },
    {
      "id": 673548,
      "team": "CHC"
    },
    {
      "id": 592858,
      "team": "CHC"
    },
    {
      "id": 571710,
      "team": "CHC"
    },
    {
      "id": 643410,
      "team": "CHC"
    },
    {
      "id": 573186,
      "team": "CHC"
    },
    {
      "id": 542340,
      "team": "CHC"
    },
    {
      "id": 663538,
      "team": "CHC"
    },
    {
      "id": 543294,
      "team": "CHC"
    },
    {
      "id": 542364,
      "team": "CHC"
    },
    {
      "id": 502085,
      "team": "CHC"
    },
    {
      "id": 455119,
      "team": "CHC"
    },
    {
      "id": 657006,
      "team": "CHC"
    },
    {
      "id": 642770,
      "team": "TB"
    },
    {
      "id": 621433,
      "team": "TB"
    },
    {
      "id": 670764,
      "team": "TB"
    },
    {
      "id": 623912,
      "team": "TB"
    },
    {
      "id": 664040,
      "team": "TB"
    },
    {
      "id": 607391,
      "team": "TB"
    },
    {
      "id": 663556,
      "team": "TB"
    },
    {
      "id": 642336,
      "team": "TB"
    },
    {
      "id": 668227,
      "team": "TB"
    },
    {
      "id": 596847,
      "team": "TB"
    },
    {
      "id": 572287,
      "team": "TB"
    },
    {
      "id": 592094,
      "team": "TB"
    },
    {
      "id": 656222,
      "team": "TB"
    },
    {
      "id": 656420,
      "team": "TB"
    },
    {
      "id": 605538,
      "team": "TB"
    },
    {
      "id": 676596,
      "team": "TB"
    },
    {
      "id": 595281,
      "team": "TB"
    },
    {
      "id": 622534,
      "team": "TB"
    },
    {
      "id": 676637,
      "team": "TB"
    },
    {
      "id": 666139,
      "team": "TB"
    },
    {
      "id": 552640,
      "team": "TB"
    },
    {
      "id": 650490,
      "team": "TB"
    },
    {
      "id": 677551,
      "team": "TB"
    },
    {
      "id": 548384,
      "team": "TB"
    },
    {
      "id": 605488,
      "team": "TB"
    },
    {
      "id": 657044,
      "team": "TB"
    },
    {
      "id": 446372,
      "team": "TB"
    },
    {
      "id": 656876,
      "team": "TB"
    }
  ],
  "661982": [
    {
      "id": 669357,
      "team": "STL"
    },
    {
      "id": 572816,
      "team": "STL"
    },
    {
      "id": 405395,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 663457,
      "team": "STL"
    },
    {
      "id": 624641,
      "team": "STL"
    },
    {
      "id": 668800,
      "team": "STL"
    },
    {
      "id": 519008,
      "team": "STL"
    },
    {
      "id": 621295,
      "team": "STL"
    },
    {
      "id": 676050,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 641712,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 676831,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 669242,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 680977,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 664056,
      "team": "STL"
    },
    {
      "id": 572403,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 660766,
      "team": "STL"
    },
    {
      "id": 650893,
      "team": "STL"
    },
    {
      "id": 640492,
      "team": "SD"
    },
    {
      "id": 429664,
      "team": "SD"
    },
    {
      "id": 622503,
      "team": "SD"
    },
    {
      "id": 663158,
      "team": "SD"
    },
    {
      "id": 621051,
      "team": "SD"
    },
    {
      "id": 640455,
      "team": "SD"
    },
    {
      "id": 595777,
      "team": "SD"
    },
    {
      "id": 605397,
      "team": "SD"
    },
    {
      "id": 489334,
      "team": "SD"
    },
    {
      "id": 642727,
      "team": "SD"
    },
    {
      "id": 607259,
      "team": "SD"
    },
    {
      "id": 506433,
      "team": "SD"
    },
    {
      "id": 657612,
      "team": "SD"
    },
    {
      "id": 592518,
      "team": "SD"
    },
    {
      "id": 669022,
      "team": "SD"
    },
    {
      "id": 605483,
      "team": "SD"
    },
    {
      "id": 572228,
      "team": "SD"
    },
    {
      "id": 573124,
      "team": "SD"
    },
    {
      "id": 663757,
      "team": "SD"
    },
    {
      "id": 630105,
      "team": "SD"
    },
    {
      "id": 673490,
      "team": "SD"
    },
    {
      "id": 543592,
      "team": "SD"
    },
    {
      "id": 595751,
      "team": "SD"
    },
    {
      "id": 472610,
      "team": "SD"
    },
    {
      "id": 543333,
      "team": "SD"
    }
  ],
  "663239": [
    {
      "id": 624522,
      "team": "CHC"
    },
    {
      "id": 575929,
      "team": "CHC"
    },
    {
      "id": 664161,
      "team": "CHC"
    },
    {
      "id": 666624,
      "team": "CHC"
    },
    {
      "id": 592743,
      "team": "CHC"
    },
    {
      "id": 664023,
      "team": "CHC"
    },
    {
      "id": 621550,
      "team": "CHC"
    },
    {
      "id": 664123,
      "team": "CHC"
    },
    {
      "id": 596057,
      "team": "CHC"
    },
    {
      "id": 518792,
      "team": "CHC"
    },
    {
      "id": 663845,
      "team": "CHC"
    },
    {
      "id": 543228,
      "team": "CHC"
    },
    {
      "id": 592716,
      "team": "CHC"
    },
    {
      "id": 668873,
      "team": "CHC"
    },
    {
      "id": 592858,
      "team": "CHC"
    },
    {
      "id": 676714,
      "team": "CHC"
    },
    {
      "id": 664731,
      "team": "CHC"
    },
    {
      "id": 571710,
      "team": "CHC"
    },
    {
      "id": 542340,
      "team": "CHC"
    },
    {
      "id": 663538,
      "team": "CHC"
    },
    {
      "id": 543294,
      "team": "CHC"
    },
    {
      "id": 621219,
      "team": "CHC"
    },
    {
      "id": 542364,
      "team": "CHC"
    },
    {
      "id": 502085,
      "team": "CHC"
    },
    {
      "id": 455119,
      "team": "CHC"
    },
    {
      "id": 657006,
      "team": "CHC"
    },
    {
      "id": 594807,
      "team": "ATL"
    },
    {
      "id": 666120,
      "team": "ATL"
    },
    {
      "id": 675911,
      "team": "ATL"
    },
    {
      "id": 669276,
      "team": "ATL"
    },
    {
      "id": 671739,
      "team": "ATL"
    },
    {
      "id": 518595,
      "team": "ATL"
    },
    {
      "id": 445926,
      "team": "ATL"
    },
    {
      "id": 623451,
      "team": "ATL"
    },
    {
      "id": 445276,
      "team": "ATL"
    },
    {
      "id": 543521,
      "team": "ATL"
    },
    {
      "id": 503285,
      "team": "ATL"
    },
    {
      "id": 621345,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 672911,
      "team": "ATL"
    },
    {
      "id": 594838,
      "team": "ATL"
    },
    {
      "id": 660670,
      "team": "ATL"
    },
    {
      "id": 628338,
      "team": "ATL"
    },
    {
      "id": 661388,
      "team": "ATL"
    },
    {
      "id": 621020,
      "team": "ATL"
    },
    {
      "id": 608331,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 519293,
      "team": "ATL"
    },
    {
      "id": 606115,
      "team": "ATL"
    },
    {
      "id": 657140,
      "team": "ATL"
    },
    {
      "id": 450203,
      "team": "ATL"
    },
    {
      "id": 542303,
      "team": "ATL"
    }
  ],
  "661948": [
    {
      "id": 669357,
      "team": "STL"
    },
    {
      "id": 572816,
      "team": "STL"
    },
    {
      "id": 666185,
      "team": "STL"
    },
    {
      "id": 405395,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 663457,
      "team": "STL"
    },
    {
      "id": 668800,
      "team": "STL"
    },
    {
      "id": 519008,
      "team": "STL"
    },
    {
      "id": 676050,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 641933,
      "team": "STL"
    },
    {
      "id": 500779,
      "team": "STL"
    },
    {
      "id": 641712,
      "team": "STL"
    },
    {
      "id": 657557,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 669242,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 680977,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 663855,
      "team": "STL"
    },
    {
      "id": 650893,
      "team": "STL"
    },
    {
      "id": 656756,
      "team": "STL"
    },
    {
      "id": 608717,
      "team": "STL"
    },
    {
      "id": 476595,
      "team": "NYY"
    },
    {
      "id": 641482,
      "team": "NYY"
    },
    {
      "id": 518934,
      "team": "NYY"
    },
    {
      "id": 642152,
      "team": "NYY"
    },
    {
      "id": 666163,
      "team": "NYY"
    },
    {
      "id": 656061,
      "team": "NYY"
    },
    {
      "id": 519203,
      "team": "NYY"
    },
    {
      "id": 593334,
      "team": "NYY"
    },
    {
      "id": 593974,
      "team": "NYY"
    },
    {
      "id": 664123,
      "team": "NYY"
    },
    {
      "id": 572761,
      "team": "NYY"
    },
    {
      "id": 592450,
      "team": "NYY"
    },
    {
      "id": 642528,
      "team": "NYY"
    },
    {
      "id": 592791,
      "team": "NYY"
    },
    {
      "id": 543305,
      "team": "NYY"
    },
    {
      "id": 543309,
      "team": "NYY"
    },
    {
      "id": 643396,
      "team": "NYY"
    },
    {
      "id": 518626,
      "team": "NYY"
    },
    {
      "id": 650402,
      "team": "NYY"
    },
    {
      "id": 593423,
      "team": "NYY"
    },
    {
      "id": 643217,
      "team": "NYY"
    },
    {
      "id": 624431,
      "team": "NYY"
    },
    {
      "id": 605280,
      "team": "NYY"
    },
    {
      "id": 641796,
      "team": "NYY"
    },
    {
      "id": 503556,
      "team": "NYY"
    },
    {
      "id": 543037,
      "team": "NYY"
    },
    {
      "id": 547973,
      "team": "NYY"
    }
  ],
  "661939": [
    {
      "id": 669357,
      "team": "STL"
    },
    {
      "id": 572816,
      "team": "STL"
    },
    {
      "id": 666185,
      "team": "STL"
    },
    {
      "id": 405395,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 663457,
      "team": "STL"
    },
    {
      "id": 668868,
      "team": "STL"
    },
    {
      "id": 668800,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 641933,
      "team": "STL"
    },
    {
      "id": 500779,
      "team": "STL"
    },
    {
      "id": 641712,
      "team": "STL"
    },
    {
      "id": 657557,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 669242,
      "team": "STL"
    },
    {
      "id": 425794,
      "team": "STL"
    },
    {
      "id": 680977,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 663765,
      "team": "STL"
    },
    {
      "id": 425877,
      "team": "STL"
    },
    {
      "id": 663855,
      "team": "STL"
    },
    {
      "id": 656756,
      "team": "STL"
    },
    {
      "id": 608717,
      "team": "STL"
    },
    {
      "id": 675911,
      "team": "ATL"
    },
    {
      "id": 669276,
      "team": "ATL"
    },
    {
      "id": 554431,
      "team": "ATL"
    },
    {
      "id": 671739,
      "team": "ATL"
    },
    {
      "id": 518595,
      "team": "ATL"
    },
    {
      "id": 501303,
      "team": "ATL"
    },
    {
      "id": 445276,
      "team": "ATL"
    },
    {
      "id": 543521,
      "team": "ATL"
    },
    {
      "id": 621345,
      "team": "ATL"
    },
    {
      "id": 543606,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 687093,
      "team": "ATL"
    },
    {
      "id": 660670,
      "team": "ATL"
    },
    {
      "id": 628338,
      "team": "ATL"
    },
    {
      "id": 592696,
      "team": "ATL"
    },
    {
      "id": 661388,
      "team": "ATL"
    },
    {
      "id": 628452,
      "team": "ATL"
    },
    {
      "id": 621020,
      "team": "ATL"
    },
    {
      "id": 608331,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 543351,
      "team": "ATL"
    },
    {
      "id": 489446,
      "team": "ATL"
    },
    {
      "id": 657140,
      "team": "ATL"
    },
    {
      "id": 543257,
      "team": "ATL"
    },
    {
      "id": 450203,
      "team": "ATL"
    },
    {
      "id": 542303,
      "team": "ATL"
    }
  ],
  "663130": [
    {
      "id": 656716,
      "team": "CHC"
    },
    {
      "id": 666624,
      "team": "CHC"
    },
    {
      "id": 621074,
      "team": "CHC"
    },
    {
      "id": 664023,
      "team": "CHC"
    },
    {
      "id": 592767,
      "team": "CHC"
    },
    {
      "id": 621550,
      "team": "CHC"
    },
    {
      "id": 665871,
      "team": "CHC"
    },
    {
      "id": 641684,
      "team": "CHC"
    },
    {
      "id": 669713,
      "team": "CHC"
    },
    {
      "id": 663845,
      "team": "CHC"
    },
    {
      "id": 489119,
      "team": "CHC"
    },
    {
      "id": 657272,
      "team": "CHC"
    },
    {
      "id": 669093,
      "team": "CHC"
    },
    {
      "id": 543228,
      "team": "CHC"
    },
    {
      "id": 592716,
      "team": "CHC"
    },
    {
      "id": 673548,
      "team": "CHC"
    },
    {
      "id": 592858,
      "team": "CHC"
    },
    {
      "id": 676714,
      "team": "CHC"
    },
    {
      "id": 664731,
      "team": "CHC"
    },
    {
      "id": 623520,
      "team": "CHC"
    },
    {
      "id": 643410,
      "team": "CHC"
    },
    {
      "id": 656794,
      "team": "CHC"
    },
    {
      "id": 573186,
      "team": "CHC"
    },
    {
      "id": 663538,
      "team": "CHC"
    },
    {
      "id": 655889,
      "team": "CHC"
    },
    {
      "id": 542364,
      "team": "CHC"
    },
    {
      "id": 614177,
      "team": "CHC"
    },
    {
      "id": 676369,
      "team": "CHC"
    },
    {
      "id": 628708,
      "team": "SF"
    },
    {
      "id": 502171,
      "team": "SF"
    },
    {
      "id": 670768,
      "team": "SF"
    },
    {
      "id": 663698,
      "team": "SF"
    },
    {
      "id": 607074,
      "team": "SF"
    },
    {
      "id": 518397,
      "team": "SF"
    },
    {
      "id": 642731,
      "team": "SF"
    },
    {
      "id": 642851,
      "team": "SF"
    },
    {
      "id": 621573,
      "team": "SF"
    },
    {
      "id": 592626,
      "team": "SF"
    },
    {
      "id": 622065,
      "team": "SF"
    },
    {
      "id": 605154,
      "team": "SF"
    },
    {
      "id": 681584,
      "team": "SF"
    },
    {
      "id": 657277,
      "team": "SF"
    },
    {
      "id": 606424,
      "team": "SF"
    },
    {
      "id": 543063,
      "team": "SF"
    },
    {
      "id": 527038,
      "team": "SF"
    },
    {
      "id": 621446,
      "team": "SF"
    },
    {
      "id": 643511,
      "team": "SF"
    },
    {
      "id": 641793,
      "team": "SF"
    },
    {
      "id": 664774,
      "team": "SF"
    },
    {
      "id": 666808,
      "team": "SF"
    },
    {
      "id": 596001,
      "team": "SF"
    },
    {
      "id": 573262,
      "team": "SF"
    },
    {
      "id": 605204,
      "team": "SF"
    },
    {
      "id": 446334,
      "team": "SF"
    },
    {
      "id": 656814,
      "team": "SF"
    }
  ],
  "717650": [
    {
      "id": 611093,
      "team": "CIN"
    },
    {
      "id": 682829,
      "team": "CIN"
    },
    {
      "id": 663697,
      "team": "CIN"
    },
    {
      "id": 682227,
      "team": "CIN"
    },
    {
      "id": 641584,
      "team": "CIN"
    },
    {
      "id": 622065,
      "team": "CIN"
    },
    {
      "id": 596133,
      "team": "CIN"
    },
    {
      "id": 680574,
      "team": "CIN"
    },
    {
      "id": 650960,
      "team": "CIN"
    },
    {
      "id": 666181,
      "team": "CIN"
    },
    {
      "id": 670770,
      "team": "CIN"
    },
    {
      "id": 669222,
      "team": "CIN"
    },
    {
      "id": 621028,
      "team": "CIN"
    },
    {
      "id": 458015,
      "team": "CIN"
    },
    {
      "id": 668715,
      "team": "CIN"
    },
    {
      "id": 518585,
      "team": "CIN"
    },
    {
      "id": 664139,
      "team": "CIN"
    },
    {
      "id": 571912,
      "team": "CIN"
    },
    {
      "id": 663886,
      "team": "CIN"
    },
    {
      "id": 608371,
      "team": "CIN"
    },
    {
      "id": 571656,
      "team": "CIN"
    },
    {
      "id": 664747,
      "team": "CIN"
    },
    {
      "id": 641427,
      "team": "CIN"
    },
    {
      "id": 592200,
      "team": "CIN"
    },
    {
      "id": 671096,
      "team": "CIN"
    },
    {
      "id": 543859,
      "team": "ATL"
    },
    {
      "id": 644433,
      "team": "ATL"
    },
    {
      "id": 623433,
      "team": "ATL"
    },
    {
      "id": 675911,
      "team": "ATL"
    },
    {
      "id": 700363,
      "team": "ATL"
    },
    {
      "id": 671739,
      "team": "ATL"
    },
    {
      "id": 621294,
      "team": "ATL"
    },
    {
      "id": 518595,
      "team": "ATL"
    },
    {
      "id": 656541,
      "team": "ATL"
    },
    {
      "id": 543521,
      "team": "ATL"
    },
    {
      "id": 621345,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 694363,
      "team": "ATL"
    },
    {
      "id": 669221,
      "team": "ATL"
    },
    {
      "id": 660670,
      "team": "ATL"
    },
    {
      "id": 592696,
      "team": "ATL"
    },
    {
      "id": 607680,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 628452,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 641729,
      "team": "ATL"
    },
    {
      "id": 606115,
      "team": "ATL"
    },
    {
      "id": 489446,
      "team": "ATL"
    },
    {
      "id": 450203,
      "team": "ATL"
    },
    {
      "id": 693821,
      "team": "ATL"
    },
    {
      "id": 542303,
      "team": "ATL"
    }
  ],
  "717296": [
    {
      "id": 571948,
      "team": "MIL"
    },
    {
      "id": 621438,
      "team": "MIL"
    },
    {
      "id": 605170,
      "team": "MIL"
    },
    {
      "id": 686894,
      "team": "MIL"
    },
    {
      "id": 592885,
      "team": "MIL"
    },
    {
      "id": 663330,
      "team": "MIL"
    },
    {
      "id": 608385,
      "team": "MIL"
    },
    {
      "id": 686217,
      "team": "MIL"
    },
    {
      "id": 682842,
      "team": "MIL"
    },
    {
      "id": 606303,
      "team": "MIL"
    },
    {
      "id": 642207,
      "team": "MIL"
    },
    {
      "id": 527054,
      "team": "MIL"
    },
    {
      "id": 655316,
      "team": "MIL"
    },
    {
      "id": 669203,
      "team": "MIL"
    },
    {
      "id": 642547,
      "team": "MIL"
    },
    {
      "id": 680911,
      "team": "MIL"
    },
    {
      "id": 663368,
      "team": "MIL"
    },
    {
      "id": 665625,
      "team": "MIL"
    },
    {
      "id": 661388,
      "team": "MIL"
    },
    {
      "id": 607067,
      "team": "MIL"
    },
    {
      "id": 668930,
      "team": "MIL"
    },
    {
      "id": 605288,
      "team": "MIL"
    },
    {
      "id": 642715,
      "team": "MIL"
    },
    {
      "id": 669060,
      "team": "MIL"
    },
    {
      "id": 656730,
      "team": "MIL"
    },
    {
      "id": 650496,
      "team": "MIL"
    },
    {
      "id": 476595,
      "team": "ATL"
    },
    {
      "id": 543859,
      "team": "ATL"
    },
    {
      "id": 675911,
      "team": "ATL"
    },
    {
      "id": 671739,
      "team": "ATL"
    },
    {
      "id": 621294,
      "team": "ATL"
    },
    {
      "id": 642216,
      "team": "ATL"
    },
    {
      "id": 518595,
      "team": "ATL"
    },
    {
      "id": 543521,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 647336,
      "team": "ATL"
    },
    {
      "id": 669221,
      "team": "ATL"
    },
    {
      "id": 660670,
      "team": "ATL"
    },
    {
      "id": 518586,
      "team": "ATL"
    },
    {
      "id": 592696,
      "team": "ATL"
    },
    {
      "id": 607680,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 628452,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 641729,
      "team": "ATL"
    },
    {
      "id": 606115,
      "team": "ATL"
    },
    {
      "id": 657088,
      "team": "ATL"
    },
    {
      "id": 489446,
      "team": "ATL"
    },
    {
      "id": 605446,
      "team": "ATL"
    },
    {
      "id": 450203,
      "team": "ATL"
    },
    {
      "id": 693821,
      "team": "ATL"
    },
    {
      "id": 542303,
      "team": "ATL"
    }
  ],
  "717267": [
    {
      "id": 628708,
      "team": "PHI"
    },
    {
      "id": 669016,
      "team": "PHI"
    },
    {
      "id": 650911,
      "team": "PHI"
    },
    {
      "id": 547180,
      "team": "PHI"
    },
    {
      "id": 592663,
      "team": "PHI"
    },
    {
      "id": 554430,
      "team": "PHI"
    },
    {
      "id": 624641,
      "team": "PHI"
    },
    {
      "id": 592206,
      "team": "PHI"
    },
    {
      "id": 664761,
      "team": "PHI"
    },
    {
      "id": 592229,
      "team": "PHI"
    },
    {
      "id": 642397,
      "team": "PHI"
    },
    {
      "id": 543281,
      "team": "PHI"
    },
    {
      "id": 607755,
      "team": "PHI"
    },
    {
      "id": 681082,
      "team": "PHI"
    },
    {
      "id": 656546,
      "team": "PHI"
    },
    {
      "id": 656941,
      "team": "PHI"
    },
    {
      "id": 592836,
      "team": "PHI"
    },
    {
      "id": 622554,
      "team": "PHI"
    },
    {
      "id": 595909,
      "team": "PHI"
    },
    {
      "id": 621381,
      "team": "PHI"
    },
    {
      "id": 624133,
      "team": "PHI"
    },
    {
      "id": 596117,
      "team": "PHI"
    },
    {
      "id": 518886,
      "team": "PHI"
    },
    {
      "id": 656793,
      "team": "PHI"
    },
    {
      "id": 605400,
      "team": "PHI"
    },
    {
      "id": 679032,
      "team": "PHI"
    },
    {
      "id": 607208,
      "team": "PHI"
    },
    {
      "id": 624428,
      "team": "BAL"
    },
    {
      "id": 665152,
      "team": "BAL"
    },
    {
      "id": 669330,
      "team": "BAL"
    },
    {
      "id": 657508,
      "team": "BAL"
    },
    {
      "id": 660261,
      "team": "BAL"
    },
    {
      "id": 683002,
      "team": "BAL"
    },
    {
      "id": 622761,
      "team": "BAL"
    },
    {
      "id": 623993,
      "team": "BAL"
    },
    {
      "id": 663630,
      "team": "BAL"
    },
    {
      "id": 608344,
      "team": "BAL"
    },
    {
      "id": 663624,
      "team": "BAL"
    },
    {
      "id": 668939,
      "team": "BAL"
    },
    {
      "id": 680570,
      "team": "BAL"
    },
    {
      "id": 676059,
      "team": "BAL"
    },
    {
      "id": 672335,
      "team": "BAL"
    },
    {
      "id": 669720,
      "team": "BAL"
    },
    {
      "id": 602104,
      "team": "BAL"
    },
    {
      "id": 642585,
      "team": "BAL"
    },
    {
      "id": 666974,
      "team": "BAL"
    },
    {
      "id": 681297,
      "team": "BAL"
    },
    {
      "id": 641329,
      "team": "BAL"
    },
    {
      "id": 543510,
      "team": "BAL"
    },
    {
      "id": 502043,
      "team": "BAL"
    },
    {
      "id": 543056,
      "team": "BAL"
    },
    {
      "id": 656811,
      "team": "BAL"
    }
  ],
  "717237": [
    {
      "id": 624428,
      "team": "BAL"
    },
    {
      "id": 665152,
      "team": "BAL"
    },
    {
      "id": 669330,
      "team": "BAL"
    },
    {
      "id": 657508,
      "team": "BAL"
    },
    {
      "id": 660261,
      "team": "BAL"
    },
    {
      "id": 683002,
      "team": "BAL"
    },
    {
      "id": 622761,
      "team": "BAL"
    },
    {
      "id": 623993,
      "team": "BAL"
    },
    {
      "id": 663630,
      "team": "BAL"
    },
    {
      "id": 608344,
      "team": "BAL"
    },
    {
      "id": 663624,
      "team": "BAL"
    },
    {
      "id": 668939,
      "team": "BAL"
    },
    {
      "id": 680570,
      "team": "BAL"
    },
    {
      "id": 676059,
      "team": "BAL"
    },
    {
      "id": 672335,
      "team": "BAL"
    },
    {
      "id": 669720,
      "team": "BAL"
    },
    {
      "id": 602104,
      "team": "BAL"
    },
    {
      "id": 642585,
      "team": "BAL"
    },
    {
      "id": 666974,
      "team": "BAL"
    },
    {
      "id": 681297,
      "team": "BAL"
    },
    {
      "id": 641329,
      "team": "BAL"
    },
    {
      "id": 543510,
      "team": "BAL"
    },
    {
      "id": 502043,
      "team": "BAL"
    },
    {
      "id": 543056,
      "team": "BAL"
    },
    {
      "id": 656811,
      "team": "BAL"
    },
    {
      "id": 518934,
      "team": "NYY"
    },
    {
      "id": 622663,
      "team": "NYY"
    },
    {
      "id": 650633,
      "team": "NYY"
    },
    {
      "id": 666163,
      "team": "NYY"
    },
    {
      "id": 656061,
      "team": "NYY"
    },
    {
      "id": 519203,
      "team": "NYY"
    },
    {
      "id": 593334,
      "team": "NYY"
    },
    {
      "id": 607074,
      "team": "NYY"
    },
    {
      "id": 593974,
      "team": "NYY"
    },
    {
      "id": 641343,
      "team": "NYY"
    },
    {
      "id": 657376,
      "team": "NYY"
    },
    {
      "id": 656185,
      "team": "NYY"
    },
    {
      "id": 592450,
      "team": "NYY"
    },
    {
      "id": 641856,
      "team": "NYY"
    },
    {
      "id": 543309,
      "team": "NYY"
    },
    {
      "id": 643396,
      "team": "NYY"
    },
    {
      "id": 650402,
      "team": "NYY"
    },
    {
      "id": 641656,
      "team": "NYY"
    },
    {
      "id": 592454,
      "team": "NYY"
    },
    {
      "id": 605280,
      "team": "NYY"
    },
    {
      "id": 683011,
      "team": "NYY"
    },
    {
      "id": 664056,
      "team": "NYY"
    },
    {
      "id": 519317,
      "team": "NYY"
    },
    {
      "id": 676760,
      "team": "NYY"
    },
    {
      "id": 543037,
      "team": "NYY"
    },
    {
      "id": 598286,
      "team": "NYY"
    }
  ],
  "747143": [
    {
      "id": 594807,
      "team": "ATL"
    },
    {
      "id": 644433,
      "team": "ATL"
    },
    {
      "id": 675911,
      "team": "ATL"
    },
    {
      "id": 669276,
      "team": "ATL"
    },
    {
      "id": 641645,
      "team": "ATL"
    },
    {
      "id": 554431,
      "team": "ATL"
    },
    {
      "id": 671739,
      "team": "ATL"
    },
    {
      "id": 572955,
      "team": "ATL"
    },
    {
      "id": 518595,
      "team": "ATL"
    },
    {
      "id": 445926,
      "team": "ATL"
    },
    {
      "id": 519242,
      "team": "ATL"
    },
    {
      "id": 621345,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 660670,
      "team": "ATL"
    },
    {
      "id": 607481,
      "team": "ATL"
    },
    {
      "id": 625643,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 628452,
      "team": "ATL"
    },
    {
      "id": 608331,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 641729,
      "team": "ATL"
    },
    {
      "id": 606115,
      "team": "ATL"
    },
    {
      "id": 657088,
      "team": "ATL"
    },
    {
      "id": 672284,
      "team": "ATL"
    },
    {
      "id": 450203,
      "team": "ATL"
    },
    {
      "id": 542303,
      "team": "ATL"
    },
    {
      "id": 543518,
      "team": "AZ"
    },
    {
      "id": 694297,
      "team": "AZ"
    },
    {
      "id": 571466,
      "team": "AZ"
    },
    {
      "id": 669459,
      "team": "AZ"
    },
    {
      "id": 607054,
      "team": "AZ"
    },
    {
      "id": 518876,
      "team": "AZ"
    },
    {
      "id": 573009,
      "team": "AZ"
    },
    {
      "id": 592626,
      "team": "AZ"
    },
    {
      "id": 664983,
      "team": "AZ"
    },
    {
      "id": 666818,
      "team": "AZ"
    },
    {
      "id": 656464,
      "team": "AZ"
    },
    {
      "id": 545341,
      "team": "AZ"
    },
    {
      "id": 674072,
      "team": "AZ"
    },
    {
      "id": 686826,
      "team": "AZ"
    },
    {
      "id": 606466,
      "team": "AZ"
    },
    {
      "id": 677942,
      "team": "AZ"
    },
    {
      "id": 669194,
      "team": "AZ"
    },
    {
      "id": 672515,
      "team": "AZ"
    },
    {
      "id": 553993,
      "team": "AZ"
    },
    {
      "id": 682998,
      "team": "AZ"
    },
    {
      "id": 668678,
      "team": "AZ"
    },
    {
      "id": 666971,
      "team": "AZ"
    },
    {
      "id": 572233,
      "team": "AZ"
    },
    {
      "id": 612434,
      "team": "AZ"
    },
    {
      "id": 657044,
      "team": "AZ"
    }
  ],
  "745183": [
    {
      "id": 669357,
      "team": "STL"
    },
    {
      "id": 575929,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 663457,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 681676,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 543063,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 543243,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 672279,
      "team": "STL"
    },
    {
      "id": 667463,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 680977,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 552640,
      "team": "STL"
    },
    {
      "id": 687798,
      "team": "STL"
    },
    {
      "id": 502043,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 671056,
      "team": "STL"
    },
    {
      "id": 455117,
      "team": "CWS"
    },
    {
      "id": 621051,
      "team": "CWS"
    },
    {
      "id": 682868,
      "team": "CWS"
    },
    {
      "id": 686676,
      "team": "CWS"
    },
    {
      "id": 669699,
      "team": "CWS"
    },
    {
      "id": 605154,
      "team": "CWS"
    },
    {
      "id": 683734,
      "team": "CWS"
    },
    {
      "id": 502054,
      "team": "CWS"
    },
    {
      "id": 670032,
      "team": "CWS"
    },
    {
      "id": 657757,
      "team": "CWS"
    },
    {
      "id": 657557,
      "team": "CWS"
    },
    {
      "id": 657612,
      "team": "CWS"
    },
    {
      "id": 647336,
      "team": "CWS"
    },
    {
      "id": 676979,
      "team": "CWS"
    },
    {
      "id": 694363,
      "team": "CWS"
    },
    {
      "id": 656629,
      "team": "CWS"
    },
    {
      "id": 643217,
      "team": "CWS"
    },
    {
      "id": 673929,
      "team": "CWS"
    },
    {
      "id": 623167,
      "team": "CWS"
    },
    {
      "id": 621383,
      "team": "CWS"
    },
    {
      "id": 607200,
      "team": "CWS"
    },
    {
      "id": 650391,
      "team": "CWS"
    },
    {
      "id": 608678,
      "team": "CWS"
    },
    {
      "id": 641745,
      "team": "CWS"
    },
    {
      "id": 543257,
      "team": "CWS"
    },
    {
      "id": 542364,
      "team": "CWS"
    }
  ],
  "745168": [
    {
      "id": 669357,
      "team": "STL"
    },
    {
      "id": 666185,
      "team": "STL"
    },
    {
      "id": 688297,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 681676,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 543063,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 543243,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 672279,
      "team": "STL"
    },
    {
      "id": 667463,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 680977,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 552640,
      "team": "STL"
    },
    {
      "id": 502043,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 671056,
      "team": "STL"
    },
    {
      "id": 694973,
      "team": "PIT"
    },
    {
      "id": 518735,
      "team": "PIT"
    },
    {
      "id": 682847,
      "team": "PIT"
    },
    {
      "id": 668804,
      "team": "PIT"
    },
    {
      "id": 665833,
      "team": "PIT"
    },
    {
      "id": 683003,
      "team": "PIT"
    },
    {
      "id": 642133,
      "team": "PIT"
    },
    {
      "id": 658668,
      "team": "PIT"
    },
    {
      "id": 656582,
      "team": "PIT"
    },
    {
      "id": 663647,
      "team": "PIT"
    },
    {
      "id": 669707,
      "team": "PIT"
    },
    {
      "id": 677865,
      "team": "PIT"
    },
    {
      "id": 656605,
      "team": "PIT"
    },
    {
      "id": 457705,
      "team": "PIT"
    },
    {
      "id": 670059,
      "team": "PIT"
    },
    {
      "id": 693312,
      "team": "PIT"
    },
    {
      "id": 669387,
      "team": "PIT"
    },
    {
      "id": 642701,
      "team": "PIT"
    },
    {
      "id": 680779,
      "team": "PIT"
    },
    {
      "id": 641511,
      "team": "PIT"
    },
    {
      "id": 663559,
      "team": "PIT"
    },
    {
      "id": 670280,
      "team": "PIT"
    },
    {
      "id": 572191,
      "team": "PIT"
    },
    {
      "id": 669261,
      "team": "PIT"
    },
    {
      "id": 693304,
      "team": "PIT"
    },
    {
      "id": 676702,
      "team": "PIT"
    },
    {
      "id": 547973,
      "team": "PIT"
    }
  ],
  "745163": [
    {
      "id": 669357,
      "team": "STL"
    },
    {
      "id": 666185,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 681676,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 543063,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 543243,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 672279,
      "team": "STL"
    },
    {
      "id": 667463,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 695596,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 680977,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 552640,
      "team": "STL"
    },
    {
      "id": 502043,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 624424,
      "team": "SF"
    },
    {
      "id": 671218,
      "team": "SF"
    },
    {
      "id": 624585,
      "team": "SF"
    },
    {
      "id": 642731,
      "team": "SF"
    },
    {
      "id": 592426,
      "team": "SF"
    },
    {
      "id": 678495,
      "team": "SF"
    },
    {
      "id": 681584,
      "team": "SF"
    },
    {
      "id": 657277,
      "team": "SF"
    },
    {
      "id": 605113,
      "team": "SF"
    },
    {
      "id": 676254,
      "team": "SF"
    },
    {
      "id": 670092,
      "team": "SF"
    },
    {
      "id": 672275,
      "team": "SF"
    },
    {
      "id": 656305,
      "team": "SF"
    },
    {
      "id": 675921,
      "team": "SF"
    },
    {
      "id": 527038,
      "team": "SF"
    },
    {
      "id": 702352,
      "team": "SF"
    },
    {
      "id": 689172,
      "team": "SF"
    },
    {
      "id": 663546,
      "team": "SF"
    },
    {
      "id": 643511,
      "team": "SF"
    },
    {
      "id": 666808,
      "team": "SF"
    },
    {
      "id": 573124,
      "team": "SF"
    },
    {
      "id": 682641,
      "team": "SF"
    },
    {
      "id": 663855,
      "team": "SF"
    },
    {
      "id": 592200,
      "team": "SF"
    },
    {
      "id": 596103,
      "team": "SF"
    },
    {
      "id": 669062,
      "team": "SF"
    }
  ],
  "745160": [
    {
      "id": 669357,
      "team": "STL"
    },
    {
      "id": 666185,
      "team": "STL"
    },
    {
      "id": 575929,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 681676,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 543063,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 543243,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 672279,
      "team": "STL"
    },
    {
      "id": 667463,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 680977,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 552640,
      "team": "STL"
    },
    {
      "id": 502043,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 594807,
      "team": "ATL"
    },
    {
      "id": 669276,
      "team": "ATL"
    },
    {
      "id": 572955,
      "team": "ATL"
    },
    {
      "id": 518595,
      "team": "ATL"
    },
    {
      "id": 445926,
      "team": "ATL"
    },
    {
      "id": 680885,
      "team": "ATL"
    },
    {
      "id": 519242,
      "team": "ATL"
    },
    {
      "id": 670097,
      "team": "ATL"
    },
    {
      "id": 657656,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 669221,
      "team": "ATL"
    },
    {
      "id": 607481,
      "team": "ATL"
    },
    {
      "id": 625643,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 628452,
      "team": "ATL"
    },
    {
      "id": 608331,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 641729,
      "team": "ATL"
    },
    {
      "id": 656550,
      "team": "ATL"
    },
    {
      "id": 606115,
      "team": "ATL"
    },
    {
      "id": 657088,
      "team": "ATL"
    },
    {
      "id": 672284,
      "team": "ATL"
    },
    {
      "id": 450203,
      "team": "ATL"
    },
    {
      "id": 542303,
      "team": "ATL"
    },
    {
      "id": 678226,
      "team": "ATL"
    }
  ],
  "745157": [
    {
      "id": 669357,
      "team": "STL"
    },
    {
      "id": 666185,
      "team": "STL"
    },
    {
      "id": 575929,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 681676,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 543063,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 543243,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 672279,
      "team": "STL"
    },
    {
      "id": 667463,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 680977,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 552640,
      "team": "STL"
    },
    {
      "id": 502043,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 594807,
      "team": "ATL"
    },
    {
      "id": 669276,
      "team": "ATL"
    },
    {
      "id": 572955,
      "team": "ATL"
    },
    {
      "id": 663897,
      "team": "ATL"
    },
    {
      "id": 518595,
      "team": "ATL"
    },
    {
      "id": 445926,
      "team": "ATL"
    },
    {
      "id": 680885,
      "team": "ATL"
    },
    {
      "id": 519242,
      "team": "ATL"
    },
    {
      "id": 670097,
      "team": "ATL"
    },
    {
      "id": 657656,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 669221,
      "team": "ATL"
    },
    {
      "id": 607481,
      "team": "ATL"
    },
    {
      "id": 625643,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 628452,
      "team": "ATL"
    },
    {
      "id": 608331,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 641729,
      "team": "ATL"
    },
    {
      "id": 656550,
      "team": "ATL"
    },
    {
      "id": 606115,
      "team": "ATL"
    },
    {
      "id": 657088,
      "team": "ATL"
    },
    {
      "id": 672284,
      "team": "ATL"
    },
    {
      "id": 450203,
      "team": "ATL"
    },
    {
      "id": 542303,
      "team": "ATL"
    },
    {
      "id": 678226,
      "team": "ATL"
    }
  ],
  "745158": [
    {
      "id": 669357,
      "team": "STL"
    },
    {
      "id": 666185,
      "team": "STL"
    },
    {
      "id": 575929,
      "team": "STL"
    },
    {
      "id": 688297,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 458681,
      "team": "STL"
    },
    {
      "id": 681676,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 572761,
      "team": "STL"
    },
    {
      "id": 606149,
      "team": "STL"
    },
    {
      "id": 543063,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 543243,
      "team": "STL"
    },
    {
      "id": 502671,
      "team": "STL"
    },
    {
      "id": 672279,
      "team": "STL"
    },
    {
      "id": 667463,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 680977,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 552640,
      "team": "STL"
    },
    {
      "id": 502043,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 594807,
      "team": "ATL"
    },
    {
      "id": 669276,
      "team": "ATL"
    },
    {
      "id": 572955,
      "team": "ATL"
    },
    {
      "id": 663897,
      "team": "ATL"
    },
    {
      "id": 518595,
      "team": "ATL"
    },
    {
      "id": 445926,
      "team": "ATL"
    },
    {
      "id": 680885,
      "team": "ATL"
    },
    {
      "id": 519242,
      "team": "ATL"
    },
    {
      "id": 670097,
      "team": "ATL"
    },
    {
      "id": 657656,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 669221,
      "team": "ATL"
    },
    {
      "id": 607481,
      "team": "ATL"
    },
    {
      "id": 625643,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 628452,
      "team": "ATL"
    },
    {
      "id": 608331,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 641729,
      "team": "ATL"
    },
    {
      "id": 656550,
      "team": "ATL"
    },
    {
      "id": 606115,
      "team": "ATL"
    },
    {
      "id": 657088,
      "team": "ATL"
    },
    {
      "id": 672284,
      "team": "ATL"
    },
    {
      "id": 450203,
      "team": "ATL"
    },
    {
      "id": 693821,
      "team": "ATL"
    },
    {
      "id": 542303,
      "team": "ATL"
    },
    {
      "id": 678226,
      "team": "ATL"
    }
  ],
  "777456": [
    {
      "id": 671732,
      "team": "ATH"
    },
    {
      "id": 622663,
      "team": "ATH"
    },
    {
      "id": 649966,
      "team": "ATH"
    },
    {
      "id": 695243,
      "team": "ATH"
    },
    {
      "id": 667670,
      "team": "ATH"
    },
    {
      "id": 669372,
      "team": "ATH"
    },
    {
      "id": 642851,
      "team": "ATH"
    },
    {
      "id": 519008,
      "team": "ATH"
    },
    {
      "id": 621053,
      "team": "ATH"
    },
    {
      "id": 680862,
      "team": "ATH"
    },
    {
      "id": 687765,
      "team": "ATH"
    },
    {
      "id": 680474,
      "team": "ATH"
    },
    {
      "id": 547184,
      "team": "ATH"
    },
    {
      "id": 674370,
      "team": "ATH"
    },
    {
      "id": 682052,
      "team": "ATH"
    },
    {
      "id": 570482,
      "team": "ATH"
    },
    {
      "id": 691777,
      "team": "ATH"
    },
    {
      "id": 672016,
      "team": "ATH"
    },
    {
      "id": 691016,
      "team": "ATH"
    },
    {
      "id": 701762,
      "team": "ATH"
    },
    {
      "id": 663687,
      "team": "ATH"
    },
    {
      "id": 656794,
      "team": "ATH"
    },
    {
      "id": 605488,
      "team": "ATH"
    },
    {
      "id": 668709,
      "team": "ATH"
    },
    {
      "id": 676664,
      "team": "ATH"
    },
    {
      "id": 805779,
      "team": "ATH"
    },
    {
      "id": 664285,
      "team": "HOU"
    },
    {
      "id": 694376,
      "team": "HOU"
    },
    {
      "id": 670623,
      "team": "HOU"
    },
    {
      "id": 650556,
      "team": "HOU"
    },
    {
      "id": 669450,
      "team": "HOU"
    },
    {
      "id": 641645,
      "team": "HOU"
    },
    {
      "id": 605170,
      "team": "HOU"
    },
    {
      "id": 701358,
      "team": "HOU"
    },
    {
      "id": 687888,
      "team": "HOU"
    },
    {
      "id": 686613,
      "team": "HOU"
    },
    {
      "id": 643289,
      "team": "HOU"
    },
    {
      "id": 623352,
      "team": "HOU"
    },
    {
      "id": 676694,
      "team": "HOU"
    },
    {
      "id": 595345,
      "team": "HOU"
    },
    {
      "id": 672391,
      "team": "HOU"
    },
    {
      "id": 663967,
      "team": "HOU"
    },
    {
      "id": 656986,
      "team": "HOU"
    },
    {
      "id": 514888,
      "team": "HOU"
    },
    {
      "id": 687473,
      "team": "HOU"
    },
    {
      "id": 665161,
      "team": "HOU"
    },
    {
      "id": 681869,
      "team": "HOU"
    },
    {
      "id": 687911,
      "team": "HOU"
    },
    {
      "id": 663321,
      "team": "HOU"
    },
    {
      "id": 572233,
      "team": "HOU"
    },
    {
      "id": 676467,
      "team": "HOU"
    },
    {
      "id": 673237,
      "team": "HOU"
    }
  ],
  "777426": [
    {
      "id": 673513,
      "team": "SD"
    },
    {
      "id": 455117,
      "team": "SD"
    },
    {
      "id": 663158,
      "team": "SD"
    },
    {
      "id": 688158,
      "team": "SD"
    },
    {
      "id": 593974,
      "team": "SD"
    },
    {
      "id": 578428,
      "team": "SD"
    },
    {
      "id": 592094,
      "team": "SD"
    },
    {
      "id": 670092,
      "team": "SD"
    },
    {
      "id": 663604,
      "team": "SD"
    },
    {
      "id": 669093,
      "team": "SD"
    },
    {
      "id": 657757,
      "team": "SD"
    },
    {
      "id": 656302,
      "team": "SD"
    },
    {
      "id": 670970,
      "team": "SD"
    },
    {
      "id": 592518,
      "team": "SD"
    },
    {
      "id": 669200,
      "team": "SD"
    },
    {
      "id": 601713,
      "team": "SD"
    },
    {
      "id": 642180,
      "team": "SD"
    },
    {
      "id": 663568,
      "team": "SD"
    },
    {
      "id": 669308,
      "team": "SD"
    },
    {
      "id": 665487,
      "team": "SD"
    },
    {
      "id": 686701,
      "team": "SD"
    },
    {
      "id": 669369,
      "team": "SD"
    },
    {
      "id": 593428,
      "team": "SD"
    },
    {
      "id": 553869,
      "team": "SD"
    },
    {
      "id": 630105,
      "team": "SD"
    },
    {
      "id": 650333,
      "team": "SD"
    },
    {
      "id": 681190,
      "team": "SD"
    },
    {
      "id": 666023,
      "team": "KC"
    },
    {
      "id": 669674,
      "team": "KC"
    },
    {
      "id": 663697,
      "team": "KC"
    },
    {
      "id": 686475,
      "team": "KC"
    },
    {
      "id": 521692,
      "team": "KC"
    },
    {
      "id": 679845,
      "team": "KC"
    },
    {
      "id": 670231,
      "team": "KC"
    },
    {
      "id": 671221,
      "team": "KC"
    },
    {
      "id": 592192,
      "team": "KC"
    },
    {
      "id": 668674,
      "team": "KC"
    },
    {
      "id": 663460,
      "team": "KC"
    },
    {
      "id": 664199,
      "team": "KC"
    },
    {
      "id": 608032,
      "team": "KC"
    },
    {
      "id": 686469,
      "team": "KC"
    },
    {
      "id": 664728,
      "team": "KC"
    },
    {
      "id": 663738,
      "team": "KC"
    },
    {
      "id": 547179,
      "team": "KC"
    },
    {
      "id": 608379,
      "team": "KC"
    },
    {
      "id": 672580,
      "team": "KC"
    },
    {
      "id": 607625,
      "team": "KC"
    },
    {
      "id": 702070,
      "team": "KC"
    },
    {
      "id": 672582,
      "team": "KC"
    },
    {
      "id": 695506,
      "team": "KC"
    },
    {
      "id": 674444,
      "team": "KC"
    },
    {
      "id": 670167,
      "team": "KC"
    },
    {
      "id": 677951,
      "team": "KC"
    }
  ],
  "777414": [
    {
      "id": 650859,
      "team": "LAA"
    },
    {
      "id": 672569,
      "team": "LAA"
    },
    {
      "id": 695681,
      "team": "LAA"
    },
    {
      "id": 687263,
      "team": "LAA"
    },
    {
      "id": 593576,
      "team": "LAA"
    },
    {
      "id": 641401,
      "team": "LAA"
    },
    {
      "id": 518595,
      "team": "LAA"
    },
    {
      "id": 664068,
      "team": "LAA"
    },
    {
      "id": 667755,
      "team": "LAA"
    },
    {
      "id": 519326,
      "team": "LAA"
    },
    {
      "id": 621493,
      "team": "LAA"
    },
    {
      "id": 686799,
      "team": "LAA"
    },
    {
      "id": 545361,
      "team": "LAA"
    },
    {
      "id": 445276,
      "team": "LAA"
    },
    {
      "id": 666176,
      "team": "LAA"
    },
    {
      "id": 696147,
      "team": "LAA"
    },
    {
      "id": 666171,
      "team": "LAA"
    },
    {
      "id": 621028,
      "team": "LAA"
    },
    {
      "id": 694384,
      "team": "LAA"
    },
    {
      "id": 579328,
      "team": "LAA"
    },
    {
      "id": 664774,
      "team": "LAA"
    },
    {
      "id": 681351,
      "team": "LAA"
    },
    {
      "id": 656271,
      "team": "LAA"
    },
    {
      "id": 672282,
      "team": "LAA"
    },
    {
      "id": 543294,
      "team": "LAA"
    },
    {
      "id": 542881,
      "team": "LAA"
    },
    {
      "id": 664285,
      "team": "HOU"
    },
    {
      "id": 694376,
      "team": "HOU"
    },
    {
      "id": 670623,
      "team": "HOU"
    },
    {
      "id": 650556,
      "team": "HOU"
    },
    {
      "id": 669450,
      "team": "HOU"
    },
    {
      "id": 641645,
      "team": "HOU"
    },
    {
      "id": 605170,
      "team": "HOU"
    },
    {
      "id": 701358,
      "team": "HOU"
    },
    {
      "id": 687888,
      "team": "HOU"
    },
    {
      "id": 686613,
      "team": "HOU"
    },
    {
      "id": 643289,
      "team": "HOU"
    },
    {
      "id": 623352,
      "team": "HOU"
    },
    {
      "id": 676694,
      "team": "HOU"
    },
    {
      "id": 595345,
      "team": "HOU"
    },
    {
      "id": 672391,
      "team": "HOU"
    },
    {
      "id": 663967,
      "team": "HOU"
    },
    {
      "id": 656986,
      "team": "HOU"
    },
    {
      "id": 514888,
      "team": "HOU"
    },
    {
      "id": 687473,
      "team": "HOU"
    },
    {
      "id": 665161,
      "team": "HOU"
    },
    {
      "id": 687911,
      "team": "HOU"
    },
    {
      "id": 663321,
      "team": "HOU"
    },
    {
      "id": 572233,
      "team": "HOU"
    },
    {
      "id": 676467,
      "team": "HOU"
    },
    {
      "id": 673237,
      "team": "HOU"
    }
  ],
  "777398": [
    {
      "id": 676508,
      "team": "LAD"
    },
    {
      "id": 669257,
      "team": "LAD"
    },
    {
      "id": 642152,
      "team": "LAD"
    },
    {
      "id": 624424,
      "team": "LAD"
    },
    {
      "id": 687221,
      "team": "LAD"
    },
    {
      "id": 681911,
      "team": "LAD"
    },
    {
      "id": 571771,
      "team": "LAD"
    },
    {
      "id": 571970,
      "team": "LAD"
    },
    {
      "id": 607455,
      "team": "LAD"
    },
    {
      "id": 518692,
      "team": "LAD"
    },
    {
      "id": 808975,
      "team": "LAD"
    },
    {
      "id": 656945,
      "team": "LAD"
    },
    {
      "id": 669242,
      "team": "LAD"
    },
    {
      "id": 660271,
      "team": "LAD"
    },
    {
      "id": 694361,
      "team": "LAD"
    },
    {
      "id": 656629,
      "team": "LAD"
    },
    {
      "id": 680736,
      "team": "LAD"
    },
    {
      "id": 606192,
      "team": "LAD"
    },
    {
      "id": 681624,
      "team": "LAD"
    },
    {
      "id": 477132,
      "team": "LAD"
    },
    {
      "id": 605141,
      "team": "LAD"
    },
    {
      "id": 500743,
      "team": "LAD"
    },
    {
      "id": 489446,
      "team": "LAD"
    },
    {
      "id": 676263,
      "team": "LAD"
    },
    {
      "id": 669160,
      "team": "LAD"
    },
    {
      "id": 808967,
      "team": "LAD"
    },
    {
      "id": 691781,
      "team": "WSH"
    },
    {
      "id": 678606,
      "team": "WSH"
    },
    {
      "id": 682928,
      "team": "WSH"
    },
    {
      "id": 694350,
      "team": "WSH"
    },
    {
      "id": 665953,
      "team": "WSH"
    },
    {
      "id": 656180,
      "team": "WSH"
    },
    {
      "id": 592866,
      "team": "WSH"
    },
    {
      "id": 663993,
      "team": "WSH"
    },
    {
      "id": 642708,
      "team": "WSH"
    },
    {
      "id": 605137,
      "team": "WSH"
    },
    {
      "id": 640448,
      "team": "WSH"
    },
    {
      "id": 669371,
      "team": "WSH"
    },
    {
      "id": 695418,
      "team": "WSH"
    },
    {
      "id": 695734,
      "team": "WSH"
    },
    {
      "id": 695578,
      "team": "WSH"
    },
    {
      "id": 702795,
      "team": "WSH"
    },
    {
      "id": 647336,
      "team": "WSH"
    },
    {
      "id": 669022,
      "team": "WSH"
    },
    {
      "id": 696285,
      "team": "WSH"
    },
    {
      "id": 663623,
      "team": "WSH"
    },
    {
      "id": 669743,
      "team": "WSH"
    },
    {
      "id": 680730,
      "team": "WSH"
    },
    {
      "id": 660688,
      "team": "WSH"
    },
    {
      "id": 674285,
      "team": "WSH"
    },
    {
      "id": 671131,
      "team": "WSH"
    },
    {
      "id": 671277,
      "team": "WSH"
    }
  ],
  "777147": [
    {
      "id": 669357,
      "team": "STL"
    },
    {
      "id": 694335,
      "team": "STL"
    },
    {
      "id": 687363,
      "team": "STL"
    },
    {
      "id": 575929,
      "team": "STL"
    },
    {
      "id": 571927,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 663457,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 641658,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 543243,
      "team": "STL"
    },
    {
      "id": 667463,
      "team": "STL"
    },
    {
      "id": 695336,
      "team": "STL"
    },
    {
      "id": 676617,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 650968,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 680977,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 607200,
      "team": "STL"
    },
    {
      "id": 664208,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 675911,
      "team": "ATL"
    },
    {
      "id": 669397,
      "team": "ATL"
    },
    {
      "id": 669276,
      "team": "ATL"
    },
    {
      "id": 671739,
      "team": "ATL"
    },
    {
      "id": 572955,
      "team": "ATL"
    },
    {
      "id": 606160,
      "team": "ATL"
    },
    {
      "id": 663897,
      "team": "ATL"
    },
    {
      "id": 595777,
      "team": "ATL"
    },
    {
      "id": 445926,
      "team": "ATL"
    },
    {
      "id": 660853,
      "team": "ATL"
    },
    {
      "id": 686948,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 669221,
      "team": "ATL"
    },
    {
      "id": 660670,
      "team": "ATL"
    },
    {
      "id": 680735,
      "team": "ATL"
    },
    {
      "id": 607481,
      "team": "ATL"
    },
    {
      "id": 642201,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 628452,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 686249,
      "team": "ATL"
    },
    {
      "id": 656550,
      "team": "ATL"
    },
    {
      "id": 693821,
      "team": "ATL"
    },
    {
      "id": 542303,
      "team": "ATL"
    },
    {
      "id": 656413,
      "team": "ATL"
    },
    {
      "id": 678226,
      "team": "ATL"
    }
  ],
  "777118": [
    {
      "id": 687363,
      "team": "STL"
    },
    {
      "id": 575929,
      "team": "STL"
    },
    {
      "id": 571927,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 700669,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 641658,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 543243,
      "team": "STL"
    },
    {
      "id": 667463,
      "team": "STL"
    },
    {
      "id": 695336,
      "team": "STL"
    },
    {
      "id": 676617,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 650968,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 680977,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 607200,
      "team": "STL"
    },
    {
      "id": 664208,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 671056,
      "team": "STL"
    },
    {
      "id": 675911,
      "team": "ATL"
    },
    {
      "id": 669397,
      "team": "ATL"
    },
    {
      "id": 669276,
      "team": "ATL"
    },
    {
      "id": 671739,
      "team": "ATL"
    },
    {
      "id": 572955,
      "team": "ATL"
    },
    {
      "id": 606160,
      "team": "ATL"
    },
    {
      "id": 663897,
      "team": "ATL"
    },
    {
      "id": 595777,
      "team": "ATL"
    },
    {
      "id": 445926,
      "team": "ATL"
    },
    {
      "id": 593833,
      "team": "ATL"
    },
    {
      "id": 660853,
      "team": "ATL"
    },
    {
      "id": 686948,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 669221,
      "team": "ATL"
    },
    {
      "id": 805373,
      "team": "ATL"
    },
    {
      "id": 660670,
      "team": "ATL"
    },
    {
      "id": 607481,
      "team": "ATL"
    },
    {
      "id": 642201,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 669721,
      "team": "ATL"
    },
    {
      "id": 628452,
      "team": "ATL"
    },
    {
      "id": 666214,
      "team": "ATL"
    },
    {
      "id": 656550,
      "team": "ATL"
    },
    {
      "id": 693821,
      "team": "ATL"
    },
    {
      "id": 542303,
      "team": "ATL"
    },
    {
      "id": 656413,
      "team": "ATL"
    }
  ],
  "777023": [
    {
      "id": 700241,
      "team": "STL"
    },
    {
      "id": 691023,
      "team": "STL"
    },
    {
      "id": 687363,
      "team": "STL"
    },
    {
      "id": 575929,
      "team": "STL"
    },
    {
      "id": 701552,
      "team": "STL"
    },
    {
      "id": 571927,
      "team": "STL"
    },
    {
      "id": 571448,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 641658,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 543243,
      "team": "STL"
    },
    {
      "id": 667463,
      "team": "STL"
    },
    {
      "id": 695336,
      "team": "STL"
    },
    {
      "id": 676617,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 650968,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 680977,
      "team": "STL"
    },
    {
      "id": 664854,
      "team": "STL"
    },
    {
      "id": 664208,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 671056,
      "team": "STL"
    },
    {
      "id": 673513,
      "team": "SD"
    },
    {
      "id": 455117,
      "team": "SD"
    },
    {
      "id": 663158,
      "team": "SD"
    },
    {
      "id": 688158,
      "team": "SD"
    },
    {
      "id": 593974,
      "team": "SD"
    },
    {
      "id": 701538,
      "team": "SD"
    },
    {
      "id": 578428,
      "team": "SD"
    },
    {
      "id": 592094,
      "team": "SD"
    },
    {
      "id": 670092,
      "team": "SD"
    },
    {
      "id": 506433,
      "team": "SD"
    },
    {
      "id": 669093,
      "team": "SD"
    },
    {
      "id": 657757,
      "team": "SD"
    },
    {
      "id": 656302,
      "team": "SD"
    },
    {
      "id": 670970,
      "team": "SD"
    },
    {
      "id": 592518,
      "team": "SD"
    },
    {
      "id": 669200,
      "team": "SD"
    },
    {
      "id": 642180,
      "team": "SD"
    },
    {
      "id": 663568,
      "team": "SD"
    },
    {
      "id": 665487,
      "team": "SD"
    },
    {
      "id": 669369,
      "team": "SD"
    },
    {
      "id": 593428,
      "team": "SD"
    },
    {
      "id": 553869,
      "team": "SD"
    },
    {
      "id": 606996,
      "team": "SD"
    },
    {
      "id": 630105,
      "team": "SD"
    },
    {
      "id": 650333,
      "team": "SD"
    },
    {
      "id": 681190,
      "team": "SD"
    }
  ],
  "776416": [
    {
      "id": 700241,
      "team": "STL"
    },
    {
      "id": 669357,
      "team": "STL"
    },
    {
      "id": 694335,
      "team": "STL"
    },
    {
      "id": 691023,
      "team": "STL"
    },
    {
      "id": 701675,
      "team": "STL"
    },
    {
      "id": 687363,
      "team": "STL"
    },
    {
      "id": 701552,
      "team": "STL"
    },
    {
      "id": 688297,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 571945,
      "team": "STL"
    },
    {
      "id": 663457,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 681676,
      "team": "STL"
    },
    {
      "id": 700669,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 660896,
      "team": "STL"
    },
    {
      "id": 641658,
      "team": "STL"
    },
    {
      "id": 543243,
      "team": "STL"
    },
    {
      "id": 695336,
      "team": "STL"
    },
    {
      "id": 676617,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 650968,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 671056,
      "team": "STL"
    },
    {
      "id": 699625,
      "team": "STL"
    },
    {
      "id": 669477,
      "team": "SF"
    },
    {
      "id": 664141,
      "team": "SF"
    },
    {
      "id": 671218,
      "team": "SF"
    },
    {
      "id": 678906,
      "team": "SF"
    },
    {
      "id": 668800,
      "team": "SF"
    },
    {
      "id": 657277,
      "team": "SF"
    },
    {
      "id": 676254,
      "team": "SF"
    },
    {
      "id": 676130,
      "team": "SF"
    },
    {
      "id": 676775,
      "team": "SF"
    },
    {
      "id": 672275,
      "team": "SF"
    },
    {
      "id": 656305,
      "team": "SF"
    },
    {
      "id": 527038,
      "team": "SF"
    },
    {
      "id": 693313,
      "team": "SF"
    },
    {
      "id": 702352,
      "team": "SF"
    },
    {
      "id": 642086,
      "team": "SF"
    },
    {
      "id": 687551,
      "team": "SF"
    },
    {
      "id": 808982,
      "team": "SF"
    },
    {
      "id": 664192,
      "team": "SF"
    },
    {
      "id": 646240,
      "team": "SF"
    },
    {
      "id": 666711,
      "team": "SF"
    },
    {
      "id": 663941,
      "team": "SF"
    },
    {
      "id": 687529,
      "team": "SF"
    },
    {
      "id": 683766,
      "team": "SF"
    },
    {
      "id": 682641,
      "team": "SF"
    },
    {
      "id": 642715,
      "team": "SF"
    },
    {
      "id": 592662,
      "team": "SF"
    },
    {
      "id": 434378,
      "team": "SF"
    },
    {
      "id": 657424,
      "team": "SF"
    }
  ],
  "823059": [
    {
      "id": 700241,
      "team": "STL"
    },
    {
      "id": 669357,
      "team": "STL"
    },
    {
      "id": 694335,
      "team": "STL"
    },
    {
      "id": 690155,
      "team": "STL"
    },
    {
      "id": 691023,
      "team": "STL"
    },
    {
      "id": 701675,
      "team": "STL"
    },
    {
      "id": 687363,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 700669,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 802139,
      "team": "STL"
    },
    {
      "id": 677865,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 695336,
      "team": "STL"
    },
    {
      "id": 676617,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 650968,
      "team": "STL"
    },
    {
      "id": 666277,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 592773,
      "team": "STL"
    },
    {
      "id": 693409,
      "team": "STL"
    },
    {
      "id": 669160,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 671056,
      "team": "STL"
    },
    {
      "id": 694973,
      "team": "PIT"
    },
    {
      "id": 687462,
      "team": "PIT"
    },
    {
      "id": 664040,
      "team": "PIT"
    },
    {
      "id": 682848,
      "team": "PIT"
    },
    {
      "id": 668804,
      "team": "PIT"
    },
    {
      "id": 665833,
      "team": "PIT"
    },
    {
      "id": 681895,
      "team": "PIT"
    },
    {
      "id": 642397,
      "team": "PIT"
    },
    {
      "id": 682254,
      "team": "PIT"
    },
    {
      "id": 669707,
      "team": "PIT"
    },
    {
      "id": 663968,
      "team": "PIT"
    },
    {
      "id": 656605,
      "team": "PIT"
    },
    {
      "id": 670990,
      "team": "PIT"
    },
    {
      "id": 676755,
      "team": "PIT"
    },
    {
      "id": 696149,
      "team": "PIT"
    },
    {
      "id": 691373,
      "team": "PIT"
    },
    {
      "id": 695257,
      "team": "PIT"
    },
    {
      "id": 669387,
      "team": "PIT"
    },
    {
      "id": 642701,
      "team": "PIT"
    },
    {
      "id": 680779,
      "team": "PIT"
    },
    {
      "id": 664875,
      "team": "PIT"
    },
    {
      "id": 684049,
      "team": "PIT"
    },
    {
      "id": 804606,
      "team": "PIT"
    },
    {
      "id": 693304,
      "team": "PIT"
    },
    {
      "id": 542303,
      "team": "PIT"
    },
    {
      "id": 677952,
      "team": "PIT"
    }
  ],
  "823033": [
    {
      "id": 700241,
      "team": "STL"
    },
    {
      "id": 694335,
      "team": "STL"
    },
    {
      "id": 691023,
      "team": "STL"
    },
    {
      "id": 663494,
      "team": "STL"
    },
    {
      "id": 701675,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 663457,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 700669,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 802139,
      "team": "STL"
    },
    {
      "id": 677865,
      "team": "STL"
    },
    {
      "id": 691458,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 676617,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 666277,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 592773,
      "team": "STL"
    },
    {
      "id": 703725,
      "team": "STL"
    },
    {
      "id": 669160,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 671056,
      "team": "STL"
    },
    {
      "id": 676369,
      "team": "STL"
    },
    {
      "id": 699625,
      "team": "STL"
    },
    {
      "id": 689266,
      "team": "ATL"
    },
    {
      "id": 669276,
      "team": "ATL"
    },
    {
      "id": 675916,
      "team": "ATL"
    },
    {
      "id": 671739,
      "team": "ATL"
    },
    {
      "id": 663698,
      "team": "ATL"
    },
    {
      "id": 682989,
      "team": "ATL"
    },
    {
      "id": 622761,
      "team": "ATL"
    },
    {
      "id": 643289,
      "team": "ATL"
    },
    {
      "id": 800311,
      "team": "ATL"
    },
    {
      "id": 686948,
      "team": "ATL"
    },
    {
      "id": 519242,
      "team": "ATL"
    },
    {
      "id": 805347,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 702275,
      "team": "ATL"
    },
    {
      "id": 642086,
      "team": "ATL"
    },
    {
      "id": 571657,
      "team": "ATL"
    },
    {
      "id": 641755,
      "team": "ATL"
    },
    {
      "id": 625643,
      "team": "ATL"
    },
    {
      "id": 642201,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 628452,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 664849,
      "team": "ATL"
    },
    {
      "id": 656550,
      "team": "ATL"
    },
    {
      "id": 573262,
      "team": "ATL"
    },
    {
      "id": 693821,
      "team": "ATL"
    }
  ],
  "823030": [
    {
      "id": 700241,
      "team": "STL"
    },
    {
      "id": 694335,
      "team": "STL"
    },
    {
      "id": 663494,
      "team": "STL"
    },
    {
      "id": 691023,
      "team": "STL"
    },
    {
      "id": 701675,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 663457,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 700669,
      "team": "STL"
    },
    {
      "id": 668941,
      "team": "STL"
    },
    {
      "id": 802139,
      "team": "STL"
    },
    {
      "id": 677865,
      "team": "STL"
    },
    {
      "id": 691458,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 676617,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 666277,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 592773,
      "team": "STL"
    },
    {
      "id": 703725,
      "team": "STL"
    },
    {
      "id": 669160,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 671056,
      "team": "STL"
    },
    {
      "id": 699625,
      "team": "STL"
    },
    {
      "id": 676369,
      "team": "STL"
    },
    {
      "id": 702566,
      "team": "ATL"
    },
    {
      "id": 689266,
      "team": "ATL"
    },
    {
      "id": 669276,
      "team": "ATL"
    },
    {
      "id": 663698,
      "team": "ATL"
    },
    {
      "id": 671739,
      "team": "ATL"
    },
    {
      "id": 682989,
      "team": "ATL"
    },
    {
      "id": 622761,
      "team": "ATL"
    },
    {
      "id": 643289,
      "team": "ATL"
    },
    {
      "id": 800311,
      "team": "ATL"
    },
    {
      "id": 676551,
      "team": "ATL"
    },
    {
      "id": 686948,
      "team": "ATL"
    },
    {
      "id": 519242,
      "team": "ATL"
    },
    {
      "id": 805347,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 702275,
      "team": "ATL"
    },
    {
      "id": 642086,
      "team": "ATL"
    },
    {
      "id": 571657,
      "team": "ATL"
    },
    {
      "id": 641755,
      "team": "ATL"
    },
    {
      "id": 625643,
      "team": "ATL"
    },
    {
      "id": 642201,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 628452,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 664849,
      "team": "ATL"
    },
    {
      "id": 656550,
      "team": "ATL"
    },
    {
      "id": 693821,
      "team": "ATL"
    }
  ],
  "823042": [
    {
      "id": 700241,
      "team": "STL"
    },
    {
      "id": 694335,
      "team": "STL"
    },
    {
      "id": 691023,
      "team": "STL"
    },
    {
      "id": 663494,
      "team": "STL"
    },
    {
      "id": 701675,
      "team": "STL"
    },
    {
      "id": 681517,
      "team": "STL"
    },
    {
      "id": 663457,
      "team": "STL"
    },
    {
      "id": 665877,
      "team": "STL"
    },
    {
      "id": 700669,
      "team": "STL"
    },
    {
      "id": 802139,
      "team": "STL"
    },
    {
      "id": 690928,
      "team": "STL"
    },
    {
      "id": 677865,
      "team": "STL"
    },
    {
      "id": 691458,
      "team": "STL"
    },
    {
      "id": 676475,
      "team": "STL"
    },
    {
      "id": 676617,
      "team": "STL"
    },
    {
      "id": 669467,
      "team": "STL"
    },
    {
      "id": 666277,
      "team": "STL"
    },
    {
      "id": 686780,
      "team": "STL"
    },
    {
      "id": 669461,
      "team": "STL"
    },
    {
      "id": 592773,
      "team": "STL"
    },
    {
      "id": 703725,
      "team": "STL"
    },
    {
      "id": 669160,
      "team": "STL"
    },
    {
      "id": 691026,
      "team": "STL"
    },
    {
      "id": 671056,
      "team": "STL"
    },
    {
      "id": 699625,
      "team": "STL"
    },
    {
      "id": 676369,
      "team": "STL"
    },
    {
      "id": 593958,
      "team": "AZ"
    },
    {
      "id": 666661,
      "team": "AZ"
    },
    {
      "id": 694374,
      "team": "AZ"
    },
    {
      "id": 694297,
      "team": "AZ"
    },
    {
      "id": 680728,
      "team": "AZ"
    },
    {
      "id": 672629,
      "team": "AZ"
    },
    {
      "id": 571448,
      "team": "AZ"
    },
    {
      "id": 682988,
      "team": "AZ"
    },
    {
      "id": 814439,
      "team": "AZ"
    },
    {
      "id": 518876,
      "team": "AZ"
    },
    {
      "id": 656464,
      "team": "AZ"
    },
    {
      "id": 606466,
      "team": "AZ"
    },
    {
      "id": 642528,
      "team": "AZ"
    },
    {
      "id": 545121,
      "team": "AZ"
    },
    {
      "id": 672695,
      "team": "AZ"
    },
    {
      "id": 623149,
      "team": "AZ"
    },
    {
      "id": 647336,
      "team": "AZ"
    },
    {
      "id": 672515,
      "team": "AZ"
    },
    {
      "id": 683352,
      "team": "AZ"
    },
    {
      "id": 684442,
      "team": "AZ"
    },
    {
      "id": 682998,
      "team": "AZ"
    },
    {
      "id": 664199,
      "team": "AZ"
    },
    {
      "id": 657044,
      "team": "AZ"
    },
    {
      "id": 596146,
      "team": "AZ"
    },
    {
      "id": 543510,
      "team": "AZ"
    },
    {
      "id": 805299,
      "team": "AZ"
    },
    {
      "id": 678489,
      "team": "AZ"
    }
  ],
  "824889": [
    {
      "id": 689266,
      "team": "ATL"
    },
    {
      "id": 669276,
      "team": "ATL"
    },
    {
      "id": 671739,
      "team": "ATL"
    },
    {
      "id": 682989,
      "team": "ATL"
    },
    {
      "id": 643289,
      "team": "ATL"
    },
    {
      "id": 800311,
      "team": "ATL"
    },
    {
      "id": 641816,
      "team": "ATL"
    },
    {
      "id": 686948,
      "team": "ATL"
    },
    {
      "id": 519242,
      "team": "ATL"
    },
    {
      "id": 805347,
      "team": "ATL"
    },
    {
      "id": 621566,
      "team": "ATL"
    },
    {
      "id": 642086,
      "team": "ATL"
    },
    {
      "id": 669221,
      "team": "ATL"
    },
    {
      "id": 660670,
      "team": "ATL"
    },
    {
      "id": 641755,
      "team": "ATL"
    },
    {
      "id": 645277,
      "team": "ATL"
    },
    {
      "id": 628452,
      "team": "ATL"
    },
    {
      "id": 663586,
      "team": "ATL"
    },
    {
      "id": 664849,
      "team": "ATL"
    },
    {
      "id": 656550,
      "team": "ATL"
    },
    {
      "id": 573262,
      "team": "ATL"
    },
    {
      "id": 673490,
      "team": "ATL"
    },
    {
      "id": 657041,
      "team": "ATL"
    },
    {
      "id": 608718,
      "team": "ATL"
    },
    {
      "id": 693821,
      "team": "ATL"
    },
    {
      "id": 527048,
      "team": "ATL"
    },
    {
      "id": 694795,
      "team": "MIA"
    },
    {
      "id": 676604,
      "team": "MIA"
    },
    {
      "id": 665052,
      "team": "MIA"
    },
    {
      "id": 664126,
      "team": "MIA"
    },
    {
      "id": 681715,
      "team": "MIA"
    },
    {
      "id": 645261,
      "team": "MIA"
    },
    {
      "id": 680767,
      "team": "MIA"
    },
    {
      "id": 663969,
      "team": "MIA"
    },
    {
      "id": 665923,
      "team": "MIA"
    },
    {
      "id": 805300,
      "team": "MIA"
    },
    {
      "id": 676534,
      "team": "MIA"
    },
    {
      "id": 667463,
      "team": "MIA"
    },
    {
      "id": 691594,
      "team": "MIA"
    },
    {
      "id": 806188,
      "team": "MIA"
    },
    {
      "id": 687473,
      "team": "MIA"
    },
    {
      "id": 669364,
      "team": "MIA"
    },
    {
      "id": 656848,
      "team": "MIA"
    },
    {
      "id": 669065,
      "team": "MIA"
    },
    {
      "id": 683357,
      "team": "MIA"
    },
    {
      "id": 682663,
      "team": "MIA"
    },
    {
      "id": 677870,
      "team": "MIA"
    },
    {
      "id": 676083,
      "team": "MIA"
    },
    {
      "id": 640459,
      "team": "MIA"
    },
    {
      "id": 691788,
      "team": "MIA"
    },
    {
      "id": 691587,
      "team": "MIA"
    },
    {
      "id": 672640,
      "team": "MIA"
    }
  ]
};
