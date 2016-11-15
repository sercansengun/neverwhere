// The chance of base location name being 2 syllables (90%), otherwise it is 3 syllables
var twosyllables = 0.90;

// The chance of being an article-adjective in the beginning of the final location name (25%)
var adjectives = 0.25;

// The chance of location identifier being at the beginning (40%)
var beginningid = 0.40;

// The chance of location identifier being at the end (40%)
var endingid = beginningid + 0.40;

// There is a remaining 20% chance of being no location identifier

// Articles-Adjectives
var one=["New", "Central", "Mt", "South", "Southern", "North", "Northern", "East", "Eastern", "West", "Western", "Main", "Old", "Great", "Leaning", "First", "Middle", "Olde", "Pleasant", "St", "Deep", "Lower", "Little", "Rural", "Twin", "Upper", "Bishop\'s", "The", "Holy", "Provincial", "The Majestic", "Dead Man\'s", "Southeast", "Southeastern", "Southwest", "Southwestern", "Northeast", "Northeastern",  "Northwest", "Northwestern", "Lone", "Wandering", "Imperial", "Northern", "Southern", "Prime", "Sovereign", "Crystal", "Cursed", "Grand", "Iron", "Elder", "Sleepy", "Savage", "Dry", "Blessed", "Abandoned", "The Underground", "Frozen", "Scorched", "Ancient", "Forsaken", "Lost", "Inner", "Outer", "The Stained", "Shadowy", "Granite", "Arcadian", "Labyrinthine", "Windy", "Burnt", "Small"];

// Location identifiers in the beginning
var two=["Church of", "Inn of", "Circle of", "Vale of", "Sandy", "State of", "Swamp of", "Gates of", "Union", "Guild of", "Yard of", "Isle of", "Port of", "Muir", "Jungles of", "Firth of", "Loch", "Fort", "Toll of", "Capital of", "Town of", "City of", "Halls of", "Rim of", "Cove of", "Glacier of", "Shores of", "Institute of", "Museum of", "Towne of", "Village of", "Banks of", "Colony of", "Canyon of", "Caves of", "Desert of", "Ruins of", "Chasms of", "Gulf of", "Estate of", "Premises of", "Tower of", "Forests of", "Standing Stones of", "Tombs of", "Claws of", "Archives of", "Tooth of the", "Citadel of", "Ravine of", "Lair of", "Summoning Circle of", "Chapel of", "Vaults of", "Cape of", "Fjords of", "Tundras of", "Pits of"];

// First part of base location names
var three=["Oak", "Mystic", "Fel", "High", "Emerald", "Chester", "Dart", "Nor", "Gran", "Bain", "Have", "Hart", "Jacob", "Fre", "Bow", "Tea", "El", "Tru", "Green", "Brown", "Red", "Blue", "Down", "Broad", "Black", "White", "Mor", "En", "Bay", "Hay", "Crescent", "Pine", "Cider", "Bis", "Fair", "Lyn", "Ever", "Birch", "Kirk", "Mary", "Hawkes", "Arrow", "Water", "Bria", "Ted", "Spar", "Kim", "Audu", "Ar", "Pen", "Shet", "Bis", "Bear", "Sher", "Wes", "Merri", "Kendal", "Bart", "Wo", "Maple", "Bed", "Lex", "Druid", "Prim", "Vera", "Fern", "Men", "Mon", "Nash", "Thor", "Chad", "Pres", "Hen", "Grist", "Wilder", "Box", "Golden", "Gold", "Fitch", "Quin", "Bul", "Dux", "Sun", "Snow", "Sand", "Coy", "Bur", "Thorn", "Sunny", "Merril", "Blunt", "Hey", "Wal", "Corn", "Lily", "Ros", "Mul", "Syca", "Sax", "Spruce", "Camber", "Saffron", "Sud", "Col", "Haver", "Fare", "Porth", "Hols", "Chulm", "Aber", "Egr", "Bun", "Wex", "Duncan", "Kil", "Clog", "Kin", "Gwee", "Fal", "Inver", "Hal", "Brae", "Salt", "Hard", "Lund", "Half", "Cal", "Dow", "Revel", "Silver", "Cold", "Ver", "Shaw", "Eck", "Violet", "Ent", "Connor", "Dil", "Long", "Steen", "Camp", "Myr", "Wendon", "Stan", "Spindle", "Bent", "Emble", "Aln", "Shil", "Nunny", "Lama", "Lord", "Mol", "Sal", "Bras", "Beau", "Baine", "Tos", "Mera", "King", "Goose", "Hayden", "Ferry", "Pouch", "Avon", "Cap", "Dun", "Prince", "Queen", "Sweet", "Bloom", "Tray", "Hare", "Deer", "Lums", "Ladle", "Boyd", "Pike", "Crow", "Sam", "Misca", "Wolf", "Beaver", "Morning", "Night", "Dawn", "Dusk", "Ful", "Moon"];

// Second part of base location names
var four=["pearl", "summer", "winter", "autumn", "river", "nut", "hill", "wood", "way", "worth", "mouth", "dale", "ville", "lock", "well", "shorn", "mont", "lands", "athan", "swan", "lark", "more", "field", "den", "brook", "crest", "side", "burn", "bank", "mill", "works", "cayne", "child", "hurst", "elm", "hope", "moore", "lou", "rock", "tree", "jay", "ford", "hawk", "ball", "bella", "glade", "ling", "elk", "beacon", "look", "heaven", "harrow", "croft", "mac", "let", "ley", "winn", "lington", "turf", "glen", "fox", "bury", "bark", "laws", "surrey", "wick", "cott", "stow", "heath", "chester", "powder", "mere", "boro", "kent", "willow", "rite", "pox", "set", "bell", "shea", "muck", "ware", "leigh", "dike", "ivy", "branch", "kay", "tuck", "edge", "pell", "back", "wall", "tonic", "knoll", "mile", "heimer", "clove", "wing", "berg", "berry", "apple", "bates", "burgh", "seal", "howe", "bush", "roe", "head", "hampton", "comb", "combe", "cawl", "donia", "bright", "luce", "fast", "murry", "glass", "kenny", "mullet", "lagh", "carragh", "bride", "finnan", "vert", "stoke", "clast", "wilde", "wald", "dell", "banff", "nes", "paw", "breaker", "wold", "thorpe", "nethy", "tail", "rosa", "mut", "beck", "bine", "quist", "nell", "mond", "haugh", "rife", "may", "lawn", "monier", "low", "sheen", "rod", "bourne", "born", "herst", "-on-the-Moor", "break", "eve", "tide", "mourn", "shed"];

// Third part of base location names
var five=["by", "ton", "cox", "top", "sen", "bon", "son", "val", "ham", "\'s"]

// Location identifiers at the end
var six=["Park", "Avenue", "Street", "Valley", "Shipyard", "State", "Gardens", "Playground", "Club", "Library", "Bridge", "Orchards", "Terrace", "Apartments", "Commons", "Moore", "Temple", "Lane", "Home", "Pools", "Meadows", "Cemetery", "Pond", "Country", "Drive", "Station", "School", "Summit", "Hall", "Ledge", "Depot", "Hollow", "Path", "Camp", "Run", "Trail", "Bog", "Farm", "Lodge", "Conservation Area", "Bay", "Armory", "Memorial", "Square", "Court", "Cedars", "House", "Mansion", "Campgrounds", "Ironworks", "Castle", "Ridge", "Abbey", "Line", "Point", "Turnpike", "Aspens", "Garden City", "Markets", "Isle", "Island", "Downs", "National Park", "Ives", "Mare", "Barrow", "Gap", "Ocean", "Lake", "Derry", "Hourn", "Hope", "Cottages", "Gate", "Villas", "Rest", "University", "Savannah", "Cove", "Harbour", "Reserve", "Channel", "Landing", "Creek", "Arm", "Falls", "Forks", "Ranch", "Peak", "Coast", "Haven", "Ranges", "Barrier", "Flats", "Gallery", "Rapids", "Wallow", "Crossing", "Wildlands", "Outlook", "View", "Holm", "Mound", "Corner", "Junction", "Refuge", "Brooks", "Prairie", "Grove", "Heights", "Basin", "Cliffs", "Springs", "Pilgrimage", "Monument", "Creak", "Boulder", "Pines", "Academy", "Center", "Wells", "Summit", "Inlet", "Straits", "Peninsula", "Oasis", "Blade", "Crag", "by the River", "on the Beach", "Lough", "Armlet", "Building", "Territory", "Manor", "Expedition", "Forest", "Salt Flats", "above the Clouds", "Graveyard", "Mausoleum", "Shrine", "Council", "Scar", "Kingdom", "Stand", "Road", "Breach", "Pyre", "Gauntlet", "Pass", "Woods", "Gathering", "Hotel", "Monastery", "Observatory", "Baths", "Fangs", "Dam", "Theatre", "Waterfront", "Burying Grounds", "Quarry", "Crematory", "Plaza", "Beachfront", "Volcano", "Canal", "Enclave", "Mesa", "Fountain", "Eye"];
