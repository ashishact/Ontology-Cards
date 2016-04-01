var prefix = {
  dbo: 'http://dbpedia.org/ontology/',
  rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
  foaf: 'http://xmlns.com/foaf/0.1/',
  xds: 'http://www.w3.org/2001/XMLSchema#',
  owl: 'http://www.w3.org/2002/07/owl#',
  odesignp: 'http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#',
  schema: 'http://schema.org/',
}

var owl = {};
owl.default = {}
owl.default.classType = 'owl:Class';

//property with range: a class is an object property
//property with range: a datatype is an datatype property

//owl.default.dataType = 'rdfs:dataType';
// {
// 	id: "literal1447",
// 	iri: "rdfs:Literal",
// 	type: "rdfs:Literal"
// },


owl.classAttribute = [
  {
    id: "class295",
    iri: "dbo:MultiVolumePublication",
    "superClasses": [
      "class633"
    ],
  },
  {
    id: "class533",
    iri: "dbo:Reptile",
    "superClasses": [
      "class809"
    ],
  },
  {
    id: "class728",
    iri: "dbo:Ginkgo",
    "superClasses": [
      "class659"
    ],
  },
  {
    id: "class787",
    iri: "schema:CollegeOrUniversity",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class763",
    iri: "dbo:Lymph",
    "superClasses": [
      "class455"
    ],
  },
  {
    id: "class614",
    iri: "dbo:Bullfighter",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class688",
    iri: "dbo:FashionDesigner",
    "superClasses": [
      "class565"
    ],
  },
  {
    id: "class381",
    iri: "dbo:Broadcaster",
    comment: {
      
    },
    "subClasses": [
      "class760",
      "class265",
      "class646"
    ],
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class751",
    iri: "dbo:Humorist",
    "superClasses": [
      "class565"
    ],
  },
  {
    id: "class36",
    iri: "dbo:HorseRider",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class309",
    iri: "dbo:Currency",
    "superClasses": [
      "class134"
    ],
  },
  {
    id: "class729",
    iri: "dbo:Artwork",
    comment: {
      "en": "A work of art, artwork, art piece, or art object is an aesthetic item or artistic creation."
    },
    "subClasses": [
      "class55",
      "class286"
    ],
    "superClasses": [
      "class388"
    ],
  },
  {
    id: "class701",
    iri: "dbo:Activity",
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class501",
      "class69"
    ],
    "equivalent": [
      "class492"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class45",
    iri: "dbo:Skyscraper",
    "superClasses": [
      "class519"
    ],
  },
  {
    id: "class549",
    iri: "dbo:BasketballLeague",
    comment: {
      "en": "a group of sports teams that compete against each other in Basketball"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class517",
    iri: "dbo:Pyramid",
    comment: {
      "en": "a structure whose shape is roughly that of a pyramid in the geometric sense."
    },
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class525",
    iri: "dbo:Crater",
    "subClasses": [
      "class643"
    ],
    "superClasses": [
      "class680"
    ],
  },
  {
    id: "class793",
    iri: "dbo:GrandPrix",
    "superClasses": [
      "class436"
    ],
  },
  {
    id: "class469",
    iri: "dbo:Chef",
    comment: {
      "en": "a person who cooks professionally for other people"
    },
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class732",
    iri: "dbo:Casino",
    comment: {
      "en": "In modern English, a casino is a facility which houses and accommodates certain types of gambling activities."
    },
    "superClasses": [
      "class519"
    ],
  },
  {
    id: "class516",
    iri: "dbo:Cyclist",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class196",
    iri: "dbo:PublicService",
    comment: {
      
    },
    "subClasses": [
      "class379",
      "class754"
    ],
    "superClasses": [
      "class757",
      "class321"
    ],
  },
  {
    id: "class594",
    iri: "http://xmlns.com/foaf/0.1/Person",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class659",
    iri: "dbo:Plant",
    "subClasses": [
      "class429",
      "class49",
      "class503",
      "class414",
      "class8",
      "class360",
      "class728",
      "class80",
      "class716",
      "class446"
    ],
    "superClasses": [
      "class150"
    ],
  },
  {
    id: "class727",
    iri: "dbo:Province",
    comment: {
      "en": "An administrative body governing a territorial unity on the intermediate level, between local and national level"
    },
    "subClasses": [
      "class81"
    ],
    "superClasses": [
      "class641"
    ],
  },
  {
    id: "class15",
    iri: "schema:Canal",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class527",
    iri: "dbo:LacrossePlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class189",
    iri: "dbo:SportsSeason",
    "subClasses": [
      "class554",
      "class683"
    ],
  },
  {
    id: "class224",
    iri: "dbo:DocumentType",
    comment: {
      "en": "type of document (official, informal etc.)"
    },
    "superClasses": [
      "class19"
    ],
  },
  {
    id: "class282",
    iri: "dbo:Mammal",
    "subClasses": [
      "class223",
      "class392"
    ],
    "superClasses": [
      "class809"
    ],
  },
  {
    id: "class52",
    iri: "dbo:MartialArtist",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class604",
    iri: "dbo:Infrastructure",
    "subClasses": [
      "class142",
      "class400",
      "class336",
      "class606",
      "class146",
      "class108",
      "class74",
      "class395"
    ],
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class152",
    iri: "dbo:MovieGenre",
    "superClasses": [
      "class618"
    ],
  },
  {
    id: "class364",
    iri: "dbo:SportsManager",
    comment: {
      "en": "According to the french label sub Soccer, trainership could be meant. However, here a Sportsmanager is interpreted as a member of the board of a sporting club."
    },
    "subClasses": [
      "class314"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class73",
    iri: "dbo:Spacecraft",
    "superClasses": [
      "class518"
    ],
  },
  {
    id: "class504",
    iri: "dbo:Street",
    comment: {
      "en": "A Street is different from a Road in as far as the infrastructure aspect is much less important here. A Street is a social and architectural ensemble much more than the connection between two geographic points."
    },
    "superClasses": [
      "class245"
    ],
  },
  {
    id: "class752",
    iri: "dbo:MilitaryPerson",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class442",
    iri: "dbo:Cave",
    "superClasses": [
      "class680"
    ],
  },
  {
    id: "class777",
    iri: "schema:City",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class297",
    iri: "dbo:Device",
    "subClasses": [
      "class397",
      "class431",
      "class607",
      "class548",
      "class75"
    ],
    "superClasses": [
      "class202"
    ],
  },
  {
    id: "class693",
    iri: "odesignp:Situation",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class482",
      "class91",
      "class231",
      "class122",
      "class725"
    ],
    type: "externalclass"
  },
  {
    id: "class198",
    iri: "dbo:NationalFootballLeagueEvent",
    "superClasses": [
      "class436"
    ],
  },
  {
    id: "class392",
    iri: "dbo:RaceHorse",
    "superClasses": [
      "class282"
    ],
  },
  {
    id: "class538",
    iri: "dbo:Comic",
    "superClasses": [
      "class633"
    ],
  },
  {
    id: "class179",
    iri: "schema:CreativeWork",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class436",
    iri: "dbo:SportsEvent",
    comment: {
      "en": "a event of competitive physical activity"
    },
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class734",
      "class443",
      "class793",
      "class54",
      "class198",
      "class250",
      "class794",
      "class192",
      "class422"
    ],
    "superClasses": [
      "class536"
    ],
    "equivalent": [
      "class778"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class446",
    iri: "dbo:Moss",
    "superClasses": [
      "class659"
    ],
  },
  {
    id: "class13",
    iri: "dbo:SportsTeam",
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class338",
      "class14",
      "class788",
      "class53",
      "class302",
      "class586",
      "class243",
      "class147",
      "class776",
      "class377",
      "class792",
      "class393",
      "class572"
    ],
    "superClasses": [
      "class588"
    ],
    "equivalent": [
      "class343"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class437",
    iri: "dbo:PokerPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class167",
    iri: "dbo:WaterRide",
    "superClasses": [
      "class419"
    ],
  },
  {
    id: "class290",
    iri: "dbo:Document",
    comment: {
      "en": "Any document"
    },
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class241",
      "class195",
      "class120"
    ],
    "superClasses": [
      "class388"
    ],
    "equivalent": [
      "class58"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class747",
    iri: "dbo:ProtohistoricalPeriod",
    "superClasses": [
      "class367"
    ],
  },
  {
    id: "class405",
    iri: "dbo:PenaltyShootOut",
    "superClasses": [
      "class277"
    ],
  },
  {
    id: "class534",
    iri: "dbo:Award",
    "subClasses": [
      "class312",
      "class560"
    ],
    "superClasses": [
      "class321"
    ],
  },
  {
    id: "class427",
    iri: "dbo:Play",
    comment: {
      "en": "A play is a form of literature written by a playwright, usually consisting of scripted dialogue between characters, intended for theatrical performance rather than just reading."
    },
    "superClasses": [
      "class633"
    ],
  },
  {
    id: "class807",
    iri: "dbo:Case",
    comment: {
      "en": "A case is the total of work done to prepare for an administrative or business decision. As a rule, a case is reflected in a set of documents."
    },
    "subClasses": [
      "class231"
    ],
    "superClasses": [
      "class725"
    ],
  },
  {
    id: "class452",
    iri: "dbo:Competition",
    "subClasses": [
      "class642"
    ],
  },
  {
    id: "class657",
    iri: "dbo:Hotel",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class519"
    ],
    "equivalent": [
      "class779"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class158",
    iri: "dbo:Treadmill",
    comment: {
      "en": "A mill driven by the tractive power of horses, donkeys or even people"
    },
    "superClasses": [
      "class512"
    ],
  },
  {
    id: "class624",
    iri: "dbo:Venue",
    "subClasses": [
      "class476"
    ],
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class803",
    iri: "schema:GovernmentOrganization",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class484",
    iri: "dbo:Beverage",
    comment: {
      "en": "A drink, or beverage, is a liquid which is specifically prepared for human consumption."
    },
    "subClasses": [
      "class507",
      "class100"
    ],
    "superClasses": [
      "class537"
    ],
  },
  {
    id: "class713",
    iri: "dbo:NationalFootballLeagueSeason",
    "superClasses": [
      "class648"
    ],
  },
  {
    id: "class697",
    iri: "dbo:OlympicEvent",
    "superClasses": [
      "class250"
    ],
  },
  {
    id: "class253",
    iri: "dbo:MilitaryConflict",
    "superClasses": [
      "class536"
    ],
  },
  {
    id: "class397",
    iri: "dbo:AutomobileEngine",
    "superClasses": [
      "class297"
    ],
  },
  {
    id: "class293",
    iri: "dbo:GovernmentType",
    comment: {
      "en": "a form of government"
    },
    "superClasses": [
      "class19",
      "class239"
    ],
  },
  {
    id: "class155",
    iri: "dbo:WineRegion",
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class750",
    iri: "dbo:GeopoliticalOrganisation",
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class741",
    iri: "dbo:Publisher",
    comment: {
      "en": "Publishing company"
    },
    "superClasses": [
      "class711"
    ],
  },
  {
    id: "class210",
    iri: "dbo:HollywoodCartoon",
    "superClasses": [
      "class387"
    ],
  },
  {
    id: "class328",
    iri: "dbo:BoardGame",
    comment: {
      "en": "come from http://en.wikipedia.org/wiki/Category:Board_games"
    },
    "superClasses": [
      "class501"
    ],
  },
  {
    id: "class16",
    iri: "dbo:Crustacean",
    "superClasses": [
      "class809"
    ],
  },
  {
    id: "class35",
    iri: "schema:Painting",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class5",
    iri: "dbo:PersonalEvent",
    comment: {
      "en": "an event that occurs in someone's personal life"
    },
    "subClasses": [
      "class666",
      "class506",
      "class124",
      "class764"
    ],
    "superClasses": [
      "class774"
    ],
  },
  {
    id: "class150",
    iri: "dbo:Eukaryote",
    "subClasses": [
      "class809",
      "class219",
      "class659"
    ],
    "superClasses": [
      "class271"
    ],
  },
  {
    id: "class24",
    iri: "dbo:Lieutenant",
    "superClasses": [
      "class357"
    ],
  },
  {
    id: "class378",
    iri: "http://dbpedia.org/datatype/centimetre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class3",
    iri: "dbo:SportFacility",
    "subClasses": [
      "class685",
      "class670",
      "class605",
      "class681"
    ],
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class711",
    iri: "dbo:Company",
    "subClasses": [
      "class90",
      "class625",
      "class679",
      "class313",
      "class741",
      "class153",
      "class696"
    ],
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class786",
    iri: "dbo:Book",
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class274"
    ],
    "superClasses": [
      "class633"
    ],
    "equivalent": [
      "class94",
      "class520"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class220",
    iri: "dbo:Election",
    "subClasses": [
      "class622"
    ],
    "superClasses": [
      "class536"
    ],
  },
  {
    id: "class682",
    iri: "dbo:Athlete,_CareerStation",
  },
  {
    id: "class185",
    iri: "dbo:SpaceMission",
    "superClasses": [
      "class536"
    ],
  },
  {
    id: "class133",
    iri: "dbo:Constellation",
    comment: {
      
    },
    "superClasses": [
      "class384"
    ],
  },
  {
    id: "class178",
    iri: "dbo:Professor",
    "superClasses": [
      "class299"
    ],
  },
  {
    id: "class245",
    iri: "dbo:PopulatedPlace",
    comment: {
      
    },
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class617",
      "class526",
      "class44",
      "class566",
      "class162",
      "class355",
      "class206",
      "class737",
      "class441",
      "class248",
      "class708",
      "class601",
      "class504",
      "class612"
    ],
    "superClasses": [
      "class105"
    ],
    "equivalent": [
      "class801",
      "class365",
      "class105",
      "class260"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class564",
    iri: "dbo:Galaxy",
    "superClasses": [
      "class384"
    ],
  },
  {
    id: "class340",
    iri: "dbo:MilitaryConflict,_AdministrativeRegion",
  },
  {
    id: "class568",
    iri: "dbo:Instrumentalist",
    comment: {
      
    },
    "subClasses": [
      "class261"
    ],
    "superClasses": [
      "class281"
    ],
  },
  {
    id: "class540",
    iri: "dbo:Actor",
    comment: {
      "en": "An actor or actress is a person who acts in a dramatic production and who works in film, television, theatre, or radio in that capacity."
    },
    "subClasses": [
      "class739",
      "class653"
    ],
    "superClasses": [
      "class565"
    ],
  },
  {
    id: "class662",
    iri: "dbo:ComicsCharacter",
    "subClasses": [
      "class409"
    ],
    "superClasses": [
      "class385"
    ],
  },
  {
    id: "class461",
    iri: "dbo:Stream",
    comment: {
      "en": "a flowing body of water with a current, confined within a bed and stream banks"
    },
    "subClasses": [
      "class346",
      "class634"
    ],
    "superClasses": [
      "class316"
    ],
  },
  {
    id: "class746",
    iri: "dbo:NascarDriver",
    "superClasses": [
      "class211"
    ],
  },
  {
    id: "class778",
    iri: "schema:SportsEvent",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class42",
    iri: "dbo:Monastery",
    comment: {
      "en": "Monastery denotes the building, or complex of buildings, comprising the domestic quarters and workplace(s) of monastics, whether monks or nuns, and whether living in community or alone (hermits). The monastery generally includes a place reserved for prayer which may be a chapel, church or temple, and may also serve as an oratory. (http://en.wikipedia.org/wiki/Monastry)."
    },
    "superClasses": [
      "class105",
      "class532"
    ],
  },
  {
    id: "class618",
    iri: "dbo:Genre",
    "subClasses": [
      "class152",
      "class597"
    ],
    "superClasses": [
      "class456"
    ],
  },
  {
    id: "class800",
    iri: "dbo:Model",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class228",
    iri: "dbo:VideogamesLeague",
    comment: {
      "en": "A group of sports teams or person that compete against each other in videogames."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class41",
    iri: "dbo:BowlingLeague",
    comment: {
      "en": "a group of sports teams or players that compete against each other in Bowling"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class138",
    iri: "dbo:WindMotor",
    comment: {
      "en": "A wind-driven turbine that adapts itself to wind direction and to wind-force. Is considered to be a class in its own, despite the wind as common factor with Windmill."
    },
    "superClasses": [
      "class512"
    ],
  },
  {
    id: "class784",
    iri: "dbo:Letter",
    comment: {
      "en": "A letter from the alphabet."
    },
    "superClasses": [
      "class30"
    ],
  },
  {
    id: "class81",
    iri: "dbo:HistoricalProvince",
    comment: {
      "en": "A place which used to be a province."
    },
    "superClasses": [
      "class727"
    ],
  },
  {
    id: "class569",
    iri: "odesignp:ChemicalObject",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class654",
    iri: "dbo:Person",
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class448",
      "class354",
      "class474",
      "class783",
      "class565",
      "class28",
      "class416",
      "class372",
      "class614",
      "class215",
      "class700",
      "class469",
      "class753",
      "class723",
      "class726",
      "class181",
      "class406",
      "class570",
      "class348",
      "class494",
      "class385",
      "class619",
      "class523",
      "class644",
      "class398",
      "class200",
      "class347",
      "class752",
      "class800",
      "class127",
      "class731",
      "class163",
      "class510",
      "class4",
      "class401",
      "class812",
      "class756",
      "class357",
      "class144",
      "class335",
      "class368",
      "class399",
      "class254",
      "class535",
      "class445",
      "class171",
      "class299",
      "class364",
      "class493",
      "class204",
      "class539"
    ],
    "superClasses": [
      "class434"
    ],
    "equivalent": [
      "class758",
      "class118",
      "class34",
      "class594",
      "class38"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class234",
    iri: "dbo:HandballPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class813",
    iri: "dbo:Gene",
    "subClasses": [
      "class65",
      "class382"
    ],
    "superClasses": [
      "class761"
    ],
  },
  {
    id: "class140",
    iri: "dbo:University",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class207"
    ],
    "equivalent": [
      "class610",
      "class787"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class192",
    iri: "dbo:Tournament",
    "subClasses": [
      "class43",
      "class131",
      "class308",
      "class169"
    ],
    "superClasses": [
      "class436"
    ],
  },
  {
    id: "class233",
    iri: "dbo:Monastry",
  },
  {
    id: "class795",
    iri: "dbo:Tax",
    "superClasses": [
      "class321"
    ],
  },
  {
    id: "class651",
    iri: "schema:Continent",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class212",
    iri: "dbo:Colour",
    comment: {
      "en": "Color or colour is the visual perceptual property corresponding in humans to the categories called red, yellow, blue and others. Color derives from the spectrum of light (distribution of light energy versus wavelength) interacting in the eye with the spectral sensitivities of the light receptors."
    },
    "superClasses": [
      "class706"
    ],
  },
  {
    id: "class451",
    iri: "dbo:Brain",
    comment: {
      
    },
    "superClasses": [
      "class455"
    ],
  },
  {
    id: "class440",
    iri: "dbo:Database",
    "subClasses": [
      "class426"
    ],
    "superClasses": [
      "class388",
      "class375"
    ],
  },
  {
    id: "class459",
    iri: "dbo:Monument",
    comment: {
      "en": "A type of structure (a statue or an art object) created to commemorate a person or important event, not necessarily of a catastrophic nature."
    },
    "subClasses": [
      "class270",
      "class458"
    ],
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class230",
    iri: "dbo:Comedian",
    "superClasses": [
      "class565"
    ],
  },
  {
    id: "class577",
    iri: "dbo:Bird",
    "superClasses": [
      "class809"
    ],
  },
  {
    id: "class592",
    iri: "dbo:Deanery",
    comment: {
      "en": "The intermediate level of a clerical administrative body between parish and diocese"
    },
    "superClasses": [
      "class656"
    ],
  },
  {
    id: "class649",
    iri: "dbo:Train",
    "superClasses": [
      "class518"
    ],
  },
  {
    id: "class143",
    iri: "dbo:Openswarm",
    "superClasses": [
      "class705"
    ],
  },
  {
    id: "class792",
    iri: "dbo:RugbyClub",
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class573",
    iri: "dbo:Gate",
    comment: {
      "en": "Gate is defined as a built structure marking the entrance to a building or an estate."
    },
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class402",
    iri: "odesignp:Configuration",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class705"
    ],
    type: "externalclass"
  },
  {
    id: "class806",
    iri: "dbo:Murderer",
    "superClasses": [
      "class726"
    ],
  },
  {
    id: "class227",
    iri: "dbo:Jockey",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class20",
    iri: "dbo:Wikidata:Q11424",
    "attributes": [
      "equivalent"
    ],
    "equivalent": [
      "class237",
      "class174"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class261",
    iri: "dbo:Guitarist",
    "superClasses": [
      "class568"
    ],
  },
  {
    id: "class182",
    iri: "dbo:CricketLeague",
    comment: {
      "en": "a group of sports teams that compete against each other in Cricket"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class336",
    iri: "dbo:LaunchPad",
    "superClasses": [
      "class604"
    ],
  },
  {
    id: "class781",
    iri: "dbo:Zoo",
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class429",
    iri: "dbo:ClubMoss",
    "superClasses": [
      "class659"
    ],
  },
  {
    id: "class617",
    iri: "dbo:Agglomeration",
    "superClasses": [
      "class245"
    ],
  },
  {
    id: "class160",
    iri: "dbo:LacrosseLeague",
    comment: {
      "en": "a group of sports teams that compete against each other in Lacrosse."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class422",
    iri: "dbo:WrestlingEvent",
    "superClasses": [
      "class436"
    ],
  },
  {
    id: "class34",
    iri: "http://wikidata.dbpedia.org/resource/Q5",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class399",
    iri: "dbo:Psychologist",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class449",
    iri: "dbo:Library",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class519",
      "class207"
    ],
    "equivalent": [
      "class362"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class166",
    iri: "dbo:WaterwayTunnel",
    "superClasses": [
      "class74"
    ],
  },
  {
    id: "class717",
    iri: "dbo:President",
    "superClasses": [
      "class357"
    ],
  },
  {
    id: "class625",
    iri: "dbo:Brewery",
    comment: {
      
    },
    "superClasses": [
      "class711"
    ],
  },
  {
    id: "class279",
    iri: "dbo:BelgiumSettlement",
  },
  {
    id: "class642",
    iri: "dbo:Contest",
    "superClasses": [
      "class452"
    ],
  },
  {
    id: "class652",
    iri: "schema:ShoppingCenter",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class694",
    iri: "dbo:Skier",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class157",
    iri: "dbo:SongWriter",
    comment: {
      "en": "a person who writes songs."
    },
    "superClasses": [
      "class371"
    ],
  },
  {
    id: "class215",
    iri: "dbo:BusinessPerson",
    comment: {
      
    },
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class396",
    iri: "http://dbpedia.org/datatype/millimetre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class431",
    iri: "dbo:Camera",
    comment: {
      
    },
    "subClasses": [
      "class303"
    ],
    "superClasses": [
      "class297"
    ],
  },
  {
    id: "class463",
    iri: "dbo:ChristianDoctrine",
    "superClasses": [
      "class456"
    ],
  },
  {
    id: "class705",
    iri: "dbo:Swarm",
    "subClasses": [
      "class56",
      "class143"
    ],
    "superClasses": [
      "class402"
    ],
  },
  {
    id: "class111",
    iri: "dbo:CityDistrict",
    comment: {
      "en": "District, borough, area or neighbourhood in a city or town"
    },
    "superClasses": [
      "class708"
    ],
  },
  {
    id: "class498",
    iri: "dbo:Wrestler",
    "subClasses": [
      "class730"
    ],
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class403",
    iri: "http://dbpedia.org/datatype/minute",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class664",
    iri: "dbo:HumanDevelopmentIndex",
  },
  {
    id: "class86",
    iri: "schema:Museum",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class174",
    iri: "schema:Movie",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class121",
    iri: "dbo:FormerMunicipality",
    comment: {
      "en": "A municipality that has ceased to exist, and most of the time got incorporated (wholesale or partly) into another municipality"
    },
    "superClasses": [
      "class722"
    ],
  },
  {
    id: "class507",
    iri: "dbo:Beer",
    "superClasses": [
      "class484"
    ],
  },
  {
    id: "class337",
    iri: "dbo:Cemetery",
    comment: {
      "en": "An abbey is a Catholic monastery or convent, under the authority of an Abbot or an Abbess, who serves as the spiritual father or mother of the community."
    },
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class2",
    iri: "http://dbpedia.org/datatype/cubicMetrePerSecond",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class438",
    iri: "dbo:TelevisionSeason",
    "superClasses": [
      "class388"
    ],
  },
  {
    id: "class323",
    iri: "dbo:GridironFootballPlayer",
    "subClasses": [
      "class256",
      "class283"
    ],
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class497",
    iri: "dbo:Event",
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class774",
      "class600",
      "class536"
    ],
    "equivalent": [
      "class667",
      "class277"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class598",
    iri: "dbo:BoxingCategory",
    "superClasses": [
      "class608"
    ],
  },
  {
    id: "class425",
    iri: "dbo:SoccerClubSeason",
    "superClasses": [
      "class683"
    ],
  },
  {
    id: "class579",
    iri: "dbo:Meeting",
    comment: {
      "en": "A regular or irregular meeting of people as an event to keep record of"
    },
    "superClasses": [
      "class536"
    ],
  },
  {
    id: "class262",
    iri: "dbo:GeneLocation",
    "subClasses": [
      "class322",
      "class59"
    ],
    "superClasses": [
      "class532"
    ],
  },
  {
    id: "class696",
    iri: "dbo:Winery",
    "superClasses": [
      "class711"
    ],
  },
  {
    id: "class171",
    iri: "dbo:Royalty",
    "subClasses": [
      "class691",
      "class330"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class558",
    iri: "odesignp:BiologicalObject",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class455",
      "class761"
    ],
    type: "externalclass"
  },
  {
    id: "class354",
    iri: "dbo:Archeologist",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class502",
    iri: "dbo:PoliticalFunction",
    "superClasses": [
      "class125"
    ],
  },
  {
    id: "class268",
    iri: "dbo:YearInSpaceflight",
    "superClasses": [
      "class367"
    ],
  },
  {
    id: "class473",
    iri: "dbo:SquashPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class687",
    iri: "dbo:NationalCollegiateAthleticAssociationAthlete",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class524",
    iri: "dbo:Drama",
    "superClasses": [
      "class633"
    ],
  },
  {
    id: "class335",
    iri: "dbo:Presenter",
    comment: {
      "en": "TV or radio show presenter"
    },
    "subClasses": [
      "class136",
      "class423"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class537",
    iri: "dbo:Food",
    comment: {
      "en": "Food is any eatable or drinkable substance that is normally consumed by humans."
    },
    "subClasses": [
      "class484",
      "class578"
    ],
    "superClasses": [
      "class780"
    ],
  },
  {
    id: "class83",
    iri: "dbo:Non-ProfitOrganisation",
    "subClasses": [
      "class77"
    ],
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class94",
    iri: "http://purl.org/ontology/bibo/Book",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class339",
    iri: "dbo:Ligament",
    "superClasses": [
      "class455"
    ],
  },
  {
    id: "class308",
    iri: "dbo:TennisTournament",
    "superClasses": [
      "class192"
    ],
  },
  {
    id: "class506",
    iri: "dbo:Death",
    comment: {
      "en": "someone's death as a type of personal event"
    },
    "superClasses": [
      "class5"
    ],
  },
  {
    id: "class692",
    iri: "http://dbpedia.org/datatype/squareKilometre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class491",
    iri: "dbo:Tunnel",
    comment: {
      "en": "A tunnel may be for foot or vehicular road traffic, for rail traffic, or for a canal. Some tunnels are aqueducts to supply water for consumption or for hydroelectric stations or are sewers (http://en.wikipedia.org/wiki/Tunnel)."
    },
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class170",
    iri: "dbo:SoapCharacter",
    "superClasses": [
      "class385"
    ],
  },
  {
    id: "class707",
    iri: "dbo:GrossDomesticProduct",
  },
  {
    id: "class485",
    iri: "dbo:Depth",
  },
  {
    id: "class634",
    iri: "dbo:River",
    comment: {
      "en": "a large natural stream"
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class461"
    ],
    "equivalent": [
      "class29"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class119",
    iri: "dbo:RoadTunnel",
    "superClasses": [
      "class74"
    ],
  },
  {
    id: "class760",
    iri: "dbo:BroadcastNetwork",
    comment: {
      
    },
    "superClasses": [
      "class381"
    ],
  },
  {
    id: "class434",
    iri: "dbo:Agent",
    comment: {
      "en": "Analogous to a foaf:Agent, an agent is an entity that acts. This is intended to be the super class of Person and Organisation."
    },
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class306",
      "class78",
      "class588",
      "class654"
    ],
    "equivalent": [
      "class104"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class700",
    iri: "dbo:Celebrity",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class450",
    iri: "dbo:Arena",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class99"
    ],
    "equivalent": [
      "class681",
      "class571"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class479",
    iri: "dbo:Park",
    comment: {
      "en": "A park is an area of open space provided for recreational use. http://en.wikipedia.org/wiki/Park"
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class105"
    ],
    "equivalent": [
      "class424"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class501",
    iri: "dbo:Game",
    comment: {
      "en": "a structured activity, usually undertaken for enjoyment and sometimes used as an educational tool"
    },
    "subClasses": [
      "class328"
    ],
    "superClasses": [
      "class701"
    ],
  },
  {
    id: "class637",
    iri: "dbo:Photographer",
    "superClasses": [
      "class565"
    ],
  },
  {
    id: "class490",
    iri: "dbo:Vein",
    "superClasses": [
      "class455"
    ],
  },
  {
    id: "class347",
    iri: "dbo:Linguist",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class175",
    iri: "dbo:ComicStrip",
    "superClasses": [
      "class714"
    ],
  },
  {
    id: "class77",
    iri: "dbo:RecordOffice",
    "superClasses": [
      "class83"
    ],
  },
  {
    id: "class762",
    iri: "dbo:HotSpring",
    "superClasses": [
      "class680"
    ],
  },
  {
    id: "class56",
    iri: "dbo:Globularswarm",
    "superClasses": [
      "class705"
    ],
  },
  {
    id: "class629",
    iri: "dbo:Organ",
    comment: {
      "en": "All types and sizes of organs"
    },
    "superClasses": [
      "class548"
    ],
  },
  {
    id: "class712",
    iri: "dbo:ComedyGroup",
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class684",
    iri: "dbo:FieldHockeyLeague",
    comment: {
      "en": "a group of sports teams that compete against each other in Field Hockey"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class512",
    iri: "dbo:Mill",
    comment: {
      "en": "a unit operation designed to break a solid material into smaller pieces"
    },
    "subClasses": [
      "class158",
      "class98",
      "class138",
      "class172"
    ],
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class197",
    iri: "dbo:Annotation",
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class785"
    ],
    "superClasses": [
      "class633"
    ],
    "equivalent": [
      "class278",
      "class596"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class188",
    iri: "dbo:GolfPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class749",
    iri: "dbo:Bridge",
    "superClasses": [
      "class74"
    ],
  },
  {
    id: "class177",
    iri: "dbo:ChartsPlacements",
  },
  {
    id: "class9",
    iri: "dbo:TennisLeague",
    comment: {
      "en": "A group of sports teams or person that compete against each other in tennis."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class406",
    iri: "dbo:Egyptologist",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class593",
    iri: "dbo:MilitaryStructure",
    comment: {
      "en": "A military structure such as a Castle, Fortress, Wall, etc."
    },
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class129",
    iri: "dbo:Listen",
    "superClasses": [
      "class277"
    ],
  },
  {
    id: "class311",
    iri: "dbo:Parish",
    comment: {
      "en": "The smallest unit of a clerical administrative body"
    },
    "superClasses": [
      "class656"
    ],
  },
  {
    id: "class251",
    iri: "dbo:Host",
    comment: {
      
    },
    "superClasses": [
      "class204"
    ],
  },
  {
    id: "class769",
    iri: "dbo:Insect",
    "superClasses": [
      "class809"
    ],
  },
  {
    id: "class259",
    iri: "dbo:Statistic",
  },
  {
    id: "class47",
    iri: "http://www.w3.org/2004/02/skos/core#Concept",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class587",
    iri: "dbo:Thing",
  },
  {
    id: "class645",
    iri: "dbo:NoteworthyPartOfBuilding",
    comment: {
      "en": "A smaller detail about a building with a particular interest"
    },
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class53",
    iri: "dbo:BasketballTeam",
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class465",
    iri: "dbo:ChristianBishop",
    "superClasses": [
      "class753"
    ],
  },
  {
    id: "class4",
    iri: "dbo:OfficeHolder",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class774",
    iri: "dbo:LifeCycleEvent",
    "subClasses": [
      "class5"
    ],
    "superClasses": [
      "class497"
    ],
  },
  {
    id: "class718",
    iri: "dbo:RollerCoaster",
    "superClasses": [
      "class419"
    ],
  },
  {
    id: "class529",
    iri: "dbo:Desert",
    comment: {
      "en": "A barren area of land where little precipitation occurs."
    },
    "superClasses": [
      "class680"
    ],
  },
  {
    id: "class771",
    iri: "dbo:GeologicalPeriod",
    "superClasses": [
      "class367"
    ],
  },
  {
    id: "class264",
    iri: "dbo:EthnicGroup",
    "superClasses": [
      "class481"
    ],
  },
  {
    id: "class207",
    iri: "dbo:EducationalInstitution",
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class610",
      "class449",
      "class356",
      "class140"
    ],
    "superClasses": [
      "class588"
    ],
    "equivalent": [
      "class567"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class753",
    iri: "dbo:Cleric",
    "subClasses": [
      "class483",
      "class465",
      "class660",
      "class116",
      "class486",
      "class390",
      "class23"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class685",
    iri: "dbo:CricketGround",
    "superClasses": [
      "class3"
    ],
  },
  {
    id: "class415",
    iri: "dbo:TrackList",
    comment: {
      "en": "A list of music tracks, like on a CD"
    },
    "superClasses": [
      "class156"
    ],
  },
  {
    id: "class532",
    iri: "http://www.ontologydesignpatterns.org/ont/d0.owl#Location",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class262",
      "class42",
      "class105"
    ],
    type: "externalclass"
  },
  {
    id: "class187",
    iri: "dbo:AthleticsPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class601",
    iri: "dbo:State",
    "superClasses": [
      "class245"
    ],
  },
  {
    id: "class159",
    iri: "dbo:Painter",
    "superClasses": [
      "class565"
    ],
  },
  {
    id: "class689",
    iri: "dbo:Baronet",
    "superClasses": [
      "class691"
    ],
  },
  {
    id: "class131",
    iri: "dbo:SoccerTournament",
    "superClasses": [
      "class192"
    ],
  },
  {
    id: "class546",
    iri: "dbo:Swimmer",
    comment: {
      "en": "a trained athlete who participates in swimming meets"
    },
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class168",
    iri: "http://dbpedia.org/datatype/gramPerKilometre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class241",
    iri: "dbo:File",
    comment: {
      "en": "A document with a filename"
    },
    "superClasses": [
      "class290"
    ],
  },
  {
    id: "class125",
    iri: "dbo:PersonFunction",
    "subClasses": [
      "class502",
      "class350"
    ],
    "superClasses": [
      "class511"
    ],
  },
  {
    id: "class471",
    iri: "dbo:PeriodOfArtisticStyle",
    "superClasses": [
      "class367"
    ],
  },
  {
    id: "class237",
    iri: "dbo:Film",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class388"
    ],
    "equivalent": [
      "class20",
      "class174"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class331",
    iri: "schema:MusicAlbum",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class660",
    iri: "dbo:ChristianPatriarch",
    "superClasses": [
      "class753"
    ],
  },
  {
    id: "class299",
    iri: "dbo:Scientist",
    "subClasses": [
      "class591",
      "class759",
      "class178"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class562",
    iri: "dbo:Senator",
    "superClasses": [
      "class357"
    ],
  },
  {
    id: "class118",
    iri: "odesignp:NaturalPerson",
    "attributes": [
      "external",
      "equivalent"
    ],
    "subClasses": [
      "class281"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class319",
    iri: "dbo:CapitalOfRegion",
    comment: {
      "en": "seat of a first order administration division."
    },
    "superClasses": [
      "class628"
    ],
  },
  {
    id: "class163",
    iri: "dbo:MythologicalFigure",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class606",
    iri: "dbo:Lock",
    "superClasses": [
      "class604"
    ],
  },
  {
    id: "class681",
    iri: "dbo:Stadium",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class3"
    ],
    "equivalent": [
      "class450",
      "class571"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class226",
    iri: "dbo:SkiResort",
    comment: {
      
    },
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class236",
    iri: "dbo:MicroRegion",
    comment: {
      "en": "A microregion is a - mainy statistical - region in Brazil, at an administrative level between a meso-region and a community"
    },
    "superClasses": [
      "class641"
    ],
  },
  {
    id: "class548",
    iri: "dbo:Instrument",
    comment: {
      "en": "Describes all musical instrument"
    },
    "subClasses": [
      "class267",
      "class629"
    ],
    "superClasses": [
      "class297",
      "class21"
    ],
  },
  {
    id: "class619",
    iri: "dbo:Historian",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class755",
    iri: "dbo:OverseasDepartment",
    "superClasses": [
      "class566"
    ],
  },
  {
    id: "class589",
    iri: "dbo:wgs84_pos:SpatialThing",
  },
  {
    id: "class200",
    iri: "dbo:Lawyer",
    comment: {
      "en": "a person who is practicing law."
    },
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class71",
    iri: "dbo:Fashion",
    comment: {
      "en": "A type or code of dressing, according to the standards of the time or individual design."
    },
    "superClasses": [
      "class456"
    ],
  },
  {
    id: "class743",
    iri: "dbo:DistrictWaterBoard",
    comment: {
      "en": "Conservancy, governmental agency dedicated to surface water management"
    },
    "superClasses": [
      "class641"
    ],
  },
  {
    id: "class29",
    iri: "schema:RiverBodyOfWater",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class201",
    iri: "dbo:AdministrativeRegion",
    comment: {
      "en": "A PopulatedPlace under the jurisdiction of an administrative body. This body may administer either a whole region or one or more adjacent Settlements (town administration)"
    },
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class656",
      "class641"
    ],
    "superClasses": [
      "class248"
    ],
    "equivalent": [
      "class636"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class535",
    iri: "dbo:Religious",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class372",
    iri: "dbo:BeautyQueen",
    comment: {
      "en": "A beauty pageant titleholder"
    },
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class202",
    iri: "odesignp:DesignedArtifact",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class297",
      "class518"
    ],
    type: "externalclass"
  },
  {
    id: "class439",
    iri: "dbo:StatedResolution",
    comment: {
      "en": "A Resolution describes a formal statement adopted by a meeting or convention."
    },
    "superClasses": [
      "class633"
    ],
  },
  {
    id: "class672",
    iri: "dbo:RailwayTunnel",
    "superClasses": [
      "class74"
    ],
  },
  {
    id: "class124",
    iri: "dbo:Divorce",
    comment: {
      "en": "two people's divorce as a type of personal event"
    },
    "superClasses": [
      "class5"
    ],
  },
  {
    id: "class456",
    iri: "dbo:TopicalConcept",
    "subClasses": [
      "class463",
      "class71",
      "class618",
      "class85",
      "class112",
      "class369",
      "class19"
    ],
    "superClasses": [
      "class239"
    ],
  },
  {
    id: "class671",
    iri: "dbo:VicePresident",
    "superClasses": [
      "class357"
    ],
  },
  {
    id: "class361",
    iri: "dbo:Language",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class30"
    ],
    "equivalent": [
      "class22"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class421",
    iri: "dbo:%3Chttp://purl.org/vocab/bio/0.1/Birth%3E",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class91",
    iri: "dbo:Disease",
    "superClasses": [
      "class693"
    ],
  },
  {
    id: "class772",
    iri: "dbo:Boxer",
    "subClasses": [
      "class616"
    ],
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class417",
    iri: "dbo:BaseballLeague",
    comment: {
      "en": "a group of sports teams that compete against each other in Baseball."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class330",
    iri: "dbo:PolishKing",
    "superClasses": [
      "class171"
    ],
  },
  {
    id: "class219",
    iri: "dbo:Fungus",
    "superClasses": [
      "class150"
    ],
  },
  {
    id: "class412",
    iri: "dbo:HorseRiding",
    "superClasses": [
      "class69"
    ],
  },
  {
    id: "class719",
    iri: "dbo:Unknown",
    "superClasses": [
      "class432"
    ],
  },
  {
    id: "class307",
    iri: "dbo:LightNovel",
    comment: {
      "en": "A style of Japanese novel"
    },
    "superClasses": [
      "class274"
    ],
  },
  {
    id: "class590",
    iri: "dbo:Song",
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class470"
    ],
    "superClasses": [
      "class180"
    ],
    "equivalent": [
      "class240"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class496",
    iri: "dbo:Protein",
    "superClasses": [
      "class761"
    ],
  },
  {
    id: "class126",
    iri: "dbo:Restaurant",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class519"
    ],
    "equivalent": [
      "class710"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class547",
    iri: "dbo:VolleyballCoach",
    "superClasses": [
      "class723"
    ],
  },
  {
    id: "class444",
    iri: "http://dbpedia.org/datatype/cubicMetre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class478",
    iri: "schema:Hospital",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class582",
    iri: "dbo:Artery",
    "superClasses": [
      "class455"
    ],
  },
  {
    id: "class136",
    iri: "dbo:RadioHost",
    "superClasses": [
      "class335"
    ],
  },
  {
    id: "class457",
    iri: "dbo:Valley",
    comment: {
      "en": "a depression with predominant extent in one direction"
    },
    "superClasses": [
      "class680"
    ],
  },
  {
    id: "class668",
    iri: "dbo:BaseballPlayer",
    comment: {
      
    },
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class87",
    iri: "dbo:Diocese",
    comment: {
      "en": "District or see under the supervision of a bishop."
    },
    "superClasses": [
      "class656"
    ],
  },
  {
    id: "class585",
    iri: "schema:TelevisionStation",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class744",
    iri: "dbo:TelevisionShow",
    "superClasses": [
      "class388"
    ],
  },
  {
    id: "class724",
    iri: "dbo:InlineHockeyLeague",
    comment: {
      "en": "group of sports teams that compete against each other in Inline Hockey."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class255",
    iri: "http://purl.org/NET/cidoc-crm/core#E4_Period",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class301",
    iri: "dbo:PlayWright",
    comment: {
      "en": "A person who writes dramatic literature or drama."
    },
    "superClasses": [
      "class371"
    ],
  },
  {
    id: "class208",
    iri: "dbo:PrehistoricalPeriod",
    "superClasses": [
      "class367"
    ],
  },
  {
    id: "class738",
    iri: "http://dbpedia.org/datatype/kilowatt",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class70",
    iri: "dbo:HistoricalRegion",
    comment: {
      "en": "a place which used to be a region."
    },
    "superClasses": [
      "class248"
    ],
  },
  {
    id: "class329",
    iri: "dbo:RailwayLine",
    comment: {
      "en": "A railway line is a transport service by trains that pull passengers or freight provided by an organization. Not to be mistaken for railway track, which is the structure consisting of the rails. Wikipedia do not clearly differentiate between both, so there is one infobox describing tracks and lines."
    },
    "superClasses": [
      "class74"
    ],
  },
  {
    id: "class108",
    iri: "dbo:PowerStation",
    "subClasses": [
      "class411"
    ],
    "superClasses": [
      "class604"
    ],
  },
  {
    id: "class458",
    iri: "dbo:Memorial",
    comment: {
      "en": "A monument erected to commemorate a person, an event and/or group. In the case of a person, this might be a grave or tomb."
    },
    "superClasses": [
      "class459"
    ],
  },
  {
    id: "class669",
    iri: "odesignp:TimeInterval",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class62",
      "class128"
    ],
    type: "externalclass"
  },
  {
    id: "class205",
    iri: "dbo:Enzyme",
    "superClasses": [
      "class761"
    ],
  },
  {
    id: "class531",
    iri: "dbo:RoadJunction",
    "superClasses": [
      "class74"
    ],
  },
  {
    id: "class250",
    iri: "dbo:Olympics",
    "subClasses": [
      "class697"
    ],
    "superClasses": [
      "class436"
    ],
  },
  {
    id: "class720",
    iri: "dbo:SpeedwayLeague",
    comment: {
      "en": "A group of sports teams that compete against each other in motorcycle speedway racing."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class61",
    iri: "dbo:SportsTeamMember",
    comment: {
      "en": "A member of an athletic team."
    },
    "superClasses": [
      "class401"
    ],
  },
  {
    id: "class492",
    iri: "http://www.ontologydesignpatterns.org/ont/d0.owl#Activity",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class298",
    iri: "schema:Sculpture",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class505",
    iri: "dbo:Opera",
    "superClasses": [
      "class180"
    ],
  },
  {
    id: "class626",
    iri: "dbo:Castle",
    comment: {
      "en": "Castles often are, but need not be a military structure. They can serve for status, pleasure and hunt as well."
    },
    "superClasses": [
      "class519"
    ],
  },
  {
    id: "class393",
    iri: "dbo:SoccerClub",
    "subClasses": [
      "class475"
    ],
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class112",
    iri: "dbo:SystemOfLaw",
    comment: {
      "en": "a system of legislation, either national or international"
    },
    "superClasses": [
      "class456"
    ],
  },
  {
    id: "class636",
    iri: "schema:AdministrativeArea",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class542",
    iri: "http://www.w3.org/2004/02/skos/core#OrderedCollection",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class113",
    iri: "http://dbpedia.org/datatype/cubicCentimetre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class278",
    iri: "schema:Comment",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class433",
    iri: "dbo:Manga",
    comment: {
      "en": "Manga are comics created in Japan"
    },
    "superClasses": [
      "class714"
    ],
  },
  {
    id: "class734",
    iri: "dbo:CyclingCompetition",
    "superClasses": [
      "class436"
    ],
  },
  {
    id: "class477",
    iri: "dbo:Gymnast",
    comment: {
      "en": "A gymnast is one who performs gymnastics"
    },
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class350",
    iri: "dbo:Profession",
    "superClasses": [
      "class125"
    ],
  },
  {
    id: "class773",
    iri: "dbo:NationalAnthem",
    comment: {
      "en": "Patriotic musical composition which is the offcial national song."
    },
    "superClasses": [
      "class180"
    ],
  },
  {
    id: "class448",
    iri: "dbo:Ambassador",
    comment: {
      "en": "An ambassador is the highest ranking diplomat that represents a nation and is usually accredited to a foreign sovereign or government, or to an international organization."
    },
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class599",
    iri: "dbo:Deputy",
    "superClasses": [
      "class357"
    ],
  },
  {
    id: "class206",
    iri: "dbo:Island",
    "subClasses": [
      "class249"
    ],
    "superClasses": [
      "class245"
    ],
  },
  {
    id: "class603",
    iri: "dbo:Square",
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class181",
    iri: "dbo:Economist",
    comment: {
      "en": "An economist is a professional in the social science discipline of economics.",
      "es": "Un economista es un profesional de las ciencias sociales experto en econom\u00eda te\u00f3rica o aplicada."
    },
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class513",
    iri: "dbo:Athletics",
    "superClasses": [
      "class69"
    ],
  },
  {
    id: "class269",
    iri: "dbo:Polyhedron",
    "superClasses": [
      "class353"
    ],
  },
  {
    id: "class805",
    iri: "http://dbpedia.org/datatype/newtonMetre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class408",
    iri: "schema:Organization",
    "attributes": [
      "external",
      "equivalent"
    ],
    "subClasses": [
      "class318"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class455",
    iri: "dbo:AnatomicalStructure",
    "subClasses": [
      "class582",
      "class775",
      "class451",
      "class410",
      "class339",
      "class763",
      "class25",
      "class252",
      "class490"
    ],
    "superClasses": [
      "class558"
    ],
  },
  {
    id: "class574",
    iri: "dbo:MetroStation",
    comment: {
      
    },
    "superClasses": [
      "class395"
    ],
  },
  {
    id: "class85",
    iri: "dbo:Ideology",
    comment: {
      "en": "for example: Progressivism_in_the_United_States, Classical_liberalism"
    },
    "superClasses": [
      "class456",
      "class60"
    ],
  },
  {
    id: "class703",
    iri: "dbo:ChemicalSubstance",
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class115",
      "class107",
      "class194"
    ],
    "equivalent": [
      "class569"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class359",
    iri: "odesignp:Organism",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class271"
    ],
    type: "externalclass"
  },
  {
    id: "class578",
    iri: "dbo:Cheese",
    comment: {
      "en": "A milk product prepared for human consumption"
    },
    "superClasses": [
      "class537"
    ],
  },
  {
    id: "class796",
    iri: "schema:LakeBodyOfWater",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class74",
    iri: "dbo:RouteOfTransportation",
    "subClasses": [
      "class749",
      "class329",
      "class672",
      "class391",
      "class531",
      "class119",
      "class166"
    ],
    "superClasses": [
      "class604"
    ],
  },
  {
    id: "class64",
    iri: "dbo:Prison",
    "superClasses": [
      "class519"
    ],
  },
  {
    id: "class518",
    iri: "dbo:MeanOfTransportation",
    "subClasses": [
      "class528",
      "class811",
      "class508",
      "class380",
      "class580",
      "class736",
      "class221",
      "class101",
      "class73",
      "class649"
    ],
    "superClasses": [
      "class202"
    ],
  },
  {
    id: "class50",
    iri: "dbo:ClassicalMusicComposition",
    comment: {
      
    },
    "superClasses": [
      "class180"
    ],
  },
  {
    id: "class320",
    iri: "dbo:Band",
    "superClasses": [
      "class588",
      "class51",
      "class352"
    ],
  },
  {
    id: "class223",
    iri: "dbo:Dog",
    "superClasses": [
      "class282"
    ],
  },
  {
    id: "class447",
    iri: "dbo:VicePrimeMinister",
    "superClasses": [
      "class357"
    ],
  },
  {
    id: "class310",
    iri: "dbo:Star",
    "subClasses": [
      "class67"
    ],
    "superClasses": [
      "class384"
    ],
  },
  {
    id: "class317",
    iri: "dbo:FormulaOneRacer",
    "superClasses": [
      "class211"
    ],
  },
  {
    id: "class176",
    iri: "dbo:Garden",
    comment: {
      "en": "A garden is a planned space, usually outdoors, set aside for the display, cultivation, and enjoyment of plants and other forms of nature. (http://en.wikipedia.org/wiki/Garden)"
    },
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class723",
    iri: "dbo:Coach",
    "subClasses": [
      "class611",
      "class123",
      "class547"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class213",
    iri: "dbo:Parliament",
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class510",
    iri: "dbo:Noble",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class526",
    iri: "dbo:Continent",
    comment: {
      
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class245"
    ],
    "equivalent": [
      "class651"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class656",
    iri: "dbo:ClericalAdministrativeRegion",
    comment: {
      "en": "An administrative body governing some territorial unity, in this case a clerical administrative body"
    },
    "subClasses": [
      "class592",
      "class87",
      "class311"
    ],
    "superClasses": [
      "class201"
    ],
  },
  {
    id: "class367",
    iri: "dbo:TimePeriod",
    "subClasses": [
      "class771",
      "class190",
      "class471",
      "class208",
      "class747",
      "class128",
      "class268"
    ],
  },
  {
    id: "class260",
    iri: "dbo:Wikidata:Q532",
    "attributes": [
      "equivalent"
    ],
    "equivalent": [
      "class801",
      "class365",
      "class245",
      "class105"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class334",
    iri: "dbo:Fish",
    "superClasses": [
      "class809"
    ],
  },
  {
    id: "class494",
    iri: "dbo:Farmer",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class621",
    iri: "dbo:MusicDirector",
    comment: {
      "en": "A person who is the director of an orchestra or concert band."
    },
    "superClasses": [
      "class281"
    ],
  },
  {
    id: "class22",
    iri: "schema:Language",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class676",
    iri: "dbo:GaelicGamesPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class740",
    iri: "dbo:WorldHeritageSite",
    comment: {
      "en": "A UNESCO World Heritage Site is a site (such as a forest, mountain, lake, desert, monument, building, complex, or city) that is on the list that is maintained by the international World Heritage Programme administered by the UNESCO World Heritage Committee, composed of 21 state parties which are elected by their General Assembly for a four-year term. A World Heritage Site is a place of either cultural or physical significance."
    },
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class341",
    iri: "dbo:IceHockeyLeague",
    comment: {
      "en": "a group of sports teams that compete against each other in Ice Hockey."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class380",
    iri: "dbo:Motorcycle",
    "superClasses": [
      "class518"
    ],
  },
  {
    id: "class565",
    iri: "dbo:Artist",
    "subClasses": [
      "class540",
      "class230",
      "class285",
      "class246",
      "class688",
      "class751",
      "class281",
      "class159",
      "class637",
      "class183",
      "class371"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class488",
    iri: "dbo:CurlingLeague",
    comment: {
      "en": "a group of sports teams that compete against each other in Curling"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class14",
    iri: "dbo:AustralianFootballTeam",
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class362",
    iri: "schema:Library",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class770",
    iri: "dbo:MotocycleRacer",
    "superClasses": [
      "class211"
    ],
  },
  {
    id: "class351",
    iri: "dbo:IceHockeyPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class312",
    iri: "dbo:Decoration",
    comment: {
      "en": "An object, such as a medal or an order, that is awarded to honor the recipient ostentatiously."
    },
    "superClasses": [
      "class534"
    ],
  },
  {
    id: "class790",
    iri: "dbo:Archaea",
    "superClasses": [
      "class271"
    ],
  },
  {
    id: "class28",
    iri: "dbo:Astronaut",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class386",
    iri: "dbo:PoloLeague",
    comment: {
      "en": "A group of sports teams that compete against each other in Polo."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class377",
    iri: "dbo:HockeyTeam",
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class410",
    iri: "dbo:Embryology",
    "superClasses": [
      "class455"
    ],
  },
  {
    id: "class666",
    iri: "dbo:Birth",
    comment: {
      "en": "someone's birth as a type of personal event"
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class5"
    ],
    "equivalent": [
      "class421"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class257",
    iri: "dbo:AcademicJournal",
    comment: {
      "en": "An academic journal is a mostly peer-reviewed periodical in which scholarship relating to a particular academic discipline is published. Academic journals serve as forums for the introduction and presentation for scrutiny of new research, and the critique of existing research. Content typically takes the form of articles presenting original research, review articles, and book reviews."
    },
    "superClasses": [
      "class555"
    ],
  },
  {
    id: "class216",
    iri: "dbo:NobleFamily",
    comment: {
      "en": "Family deemed to be of noble descent"
    },
    "superClasses": [
      "class78"
    ],
  },
  {
    id: "class316",
    iri: "dbo:BodyOfWater",
    comment: {
      
    },
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class639",
      "class110",
      "class324",
      "class461"
    ],
    "superClasses": [
      "class680"
    ],
    "equivalent": [
      "class509"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class487",
    iri: "http://dbpedia.org/datatype/kilogram",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class797",
    iri: "dbo:Archive",
    comment: {
      "en": "Collection of documents pertaining to a person or organisation."
    },
    "superClasses": [
      "class556"
    ],
  },
  {
    id: "class239",
    iri: "odesignp:Concept",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class293",
      "class597",
      "class456"
    ],
    type: "externalclass"
  },
  {
    id: "class51",
    iri: "schema:MusicGroup",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class320",
      "class281"
    ],
    type: "externalclass"
  },
  {
    id: "class184",
    iri: "schema:Mountain",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class55",
    iri: "dbo:Painting",
    comment: {
      "en": "Describes a painting to assign picture entries in wikipedia to artists."
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class729"
    ],
    "equivalent": [
      "class35"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class559",
    iri: "dbo:Newspaper",
    comment: {
      "en": "A newspaper is a regularly scheduled publication containing news of current events, informative articles, diverse features and advertising. It usually is printed on relatively inexpensive, low-grade paper such as newsprint."
    },
    "superClasses": [
      "class555"
    ],
  },
  {
    id: "class180",
    iri: "dbo:MusicalWork",
    "subClasses": [
      "class135",
      "class735",
      "class50",
      "class773",
      "class505",
      "class258",
      "class590"
    ],
    "superClasses": [
      "class388"
    ],
  },
  {
    id: "class545",
    iri: "dbo:CyclingLeague",
    comment: {
      "en": "a group of sports teams that compete against each other in Cycling"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class691",
    iri: "dbo:BritishRoyalty",
    "subClasses": [
      "class689"
    ],
    "superClasses": [
      "class171"
    ],
  },
  {
    id: "class475",
    iri: "dbo:NationalSoccerClub",
    "superClasses": [
      "class393"
    ],
  },
  {
    id: "class194",
    iri: "dbo:Mineral",
    comment: {
      "en": "A naturally occurring solid chemical substance."
    },
    "superClasses": [
      "class703"
    ],
  },
  {
    id: "class467",
    iri: "dbo:Satellite",
    comment: {
      "en": "An astronomic object orbiting around a planet or star. Definition partly derived from http://www.ontotext.com/proton/protonext# (and thus WordNet 1.7)."
    },
    "subClasses": [
      "class551"
    ],
  },
  {
    id: "class356",
    iri: "dbo:School",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class207"
    ],
    "equivalent": [
      "class48"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class544",
    iri: "schema:SkiResort",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class221",
    iri: "dbo:SpaceShuttle",
    "superClasses": [
      "class518"
    ],
  },
  {
    id: "class103",
    iri: "dbo:Website",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class388"
    ],
    "equivalent": [
      "class26"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class493",
    iri: "dbo:TelevisionDirector",
    comment: {
      "en": "a person who directs the activities involved in making a television program."
    },
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class536",
    iri: "dbo:SocietalEvent",
    comment: {
      "en": "an event that is clearly different from strictly personal events"
    },
    "subClasses": [
      "class428",
      "class220",
      "class650",
      "class579",
      "class253",
      "class550",
      "class185",
      "class436"
    ],
    "superClasses": [
      "class497"
    ],
  },
  {
    id: "class342",
    iri: "dbo:Tower",
    comment: {
      "en": "A Tower is a kind of structure (not necessarily a building) that is higher than the rest"
    },
    "subClasses": [
      "class638",
      "class623"
    ],
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class327",
    iri: "dbo:Mountain",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class680",
      "class105"
    ],
    "equivalent": [
      "class184"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class355",
    iri: "dbo:Intercommunality",
    "superClasses": [
      "class245"
    ],
  },
  {
    id: "class650",
    iri: "dbo:FilmFestival",
    "superClasses": [
      "class536",
      "class39"
    ],
  },
  {
    id: "class658",
    iri: "dbo:Demographics",
  },
  {
    id: "class474",
    iri: "dbo:Architect",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class581",
    iri: "dbo:Chancellor",
    "superClasses": [
      "class357"
    ],
  },
  {
    id: "class141",
    iri: "dbo:Blazon",
    "superClasses": [
      "class30"
    ],
  },
  {
    id: "class394",
    iri: "dbo:Singer",
    comment: {
      "en": "a person who sings."
    },
    "superClasses": [
      "class281"
    ],
  },
  {
    id: "class17",
    iri: "dbo:Flag",
    "superClasses": [
      "class30"
    ],
  },
  {
    id: "class541",
    iri: "odesignp:PhysicalBody",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class384"
    ],
    type: "externalclass"
  },
  {
    id: "class702",
    iri: "dbo:Manhua",
    comment: {
      "en": "Comics originally produced in China"
    },
    "superClasses": [
      "class714"
    ],
  },
  {
    id: "class75",
    iri: "dbo:Weapon",
    "superClasses": [
      "class297",
      "class21"
    ],
  },
  {
    id: "class514",
    iri: "dbo:OlympicResult",
    "superClasses": [
      "class453"
    ],
  },
  {
    id: "class641",
    iri: "dbo:GovernmentalAdministrativeRegion",
    comment: {
      "en": "An administrative body governing some territorial unity, in this case a governmental administrative body"
    },
    "subClasses": [
      "class148",
      "class743",
      "class236",
      "class722",
      "class727",
      "class609",
      "class109"
    ],
    "superClasses": [
      "class201"
    ],
  },
  {
    id: "class584",
    iri: "http://dbpedia.org/datatype/kilogramPerCubicMetre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class115",
    iri: "dbo:ChemicalCompound",
    "superClasses": [
      "class703"
    ],
  },
  {
    id: "class482",
    iri: "dbo:CareerStation",
    comment: {
      "en": "this class marks a career step in the life of a person, e.g. a soccer player, holding information on the time span, matches and goals he or she achieved at a certain club"
    },
    "superClasses": [
      "class693"
    ],
  },
  {
    id: "class357",
    iri: "dbo:Politician",
    "subClasses": [
      "class581",
      "class37",
      "class599",
      "class655",
      "class24",
      "class300",
      "class530",
      "class717",
      "class325",
      "class562",
      "class671",
      "class447"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class552",
    iri: "odesignp:PlanExecution",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class349"
    ],
    type: "externalclass"
  },
  {
    id: "class343",
    iri: "schema:SportsTeam",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class46",
    iri: "dbo:Drug",
    "superClasses": [
      "class780"
    ],
  },
  {
    id: "class10",
    iri: "dbo:CountrySeat",
    comment: {
      "en": "A country seat is a rural patch of land owned by a land owner."
    },
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class32",
    iri: "dbo:MovingImage",
    comment: {
      "en": "A visual document that is intended to be animated; equivalent to http://purl.org/dc/dcmitype/MovingImage"
    },
    "superClasses": [
      "class195"
    ],
  },
  {
    id: "class428",
    iri: "dbo:Convention",
    "superClasses": [
      "class536"
    ],
  },
  {
    id: "class211",
    iri: "dbo:RacingDriver",
    "subClasses": [
      "class317",
      "class770",
      "class746",
      "class413"
    ],
    "superClasses": [
      "class765"
    ],
  },
  {
    id: "class95",
    iri: "dbo:Museum",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class519"
    ],
    "equivalent": [
      "class86"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class142",
    iri: "dbo:Airport",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class604"
    ],
    "equivalent": [
      "class767"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class622",
    iri: "dbo:ElectionDiagram",
    "superClasses": [
      "class220"
    ],
  },
  {
    id: "class19",
    iri: "dbo:Type",
    comment: {
      "en": "a category within a classification system"
    },
    "subClasses": [
      "class224",
      "class293"
    ],
    "superClasses": [
      "class456"
    ],
  },
  {
    id: "class419",
    iri: "dbo:AmusementParkAttraction",
    "subClasses": [
      "class718",
      "class167"
    ],
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class798",
    iri: "dbo:SambaSchool",
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class616",
    iri: "dbo:AmateurBoxer",
    "superClasses": [
      "class772"
    ],
  },
  {
    id: "class776",
    iri: "dbo:HandballTeam",
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class8",
    iri: "dbo:Fern",
    "superClasses": [
      "class659"
    ],
  },
  {
    id: "class596",
    iri: "http://purl.org/ontology/bibo/Note",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class767",
    iri: "schema:Airport",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class426",
    iri: "dbo:BiologicalDatabase",
    comment: {
      
    },
    "superClasses": [
      "class440"
    ],
  },
  {
    id: "class735",
    iri: "dbo:ArtistDiscography",
    "superClasses": [
      "class180"
    ],
  },
  {
    id: "class256",
    iri: "dbo:AmericanFootballPlayer",
    "superClasses": [
      "class323"
    ],
  },
  {
    id: "class265",
    iri: "dbo:RadioStation",
    comment: {
      "en": "A radio station has one line up. For instance the radio station BBC Radio 1. Not to be confused with the broadcasting network BBC, which has many radio stations."
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class381"
    ],
    "equivalent": [
      "class647"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class572",
    iri: "dbo:SpeedwayTeam",
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class277",
    iri: "odesignp:Event",
    "attributes": [
      "external",
      "equivalent"
    ],
    "subClasses": [
      "class129",
      "class405"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class148",
    iri: "dbo:District",
    comment: {
      id: "bagian wilayah administratif dibawah kabupaten"
    },
    "subClasses": [
      "class561"
    ],
    "superClasses": [
      "class641"
    ],
  },
  {
    id: "class324",
    iri: "dbo:Sea",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class316"
    ],
    "equivalent": [
      "class247"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class258",
    iri: "dbo:Single",
    comment: {
      "en": "In music, a single or record single is a type of release, typically a recording of fewer tracks than an LP or a CD."
    },
    "superClasses": [
      "class180"
    ],
  },
  {
    id: "class62",
    iri: "dbo:Holiday",
    comment: {
      
    },
    "superClasses": [
      "class669"
    ],
  },
  {
    id: "class191",
    iri: "dbo:Arachnid",
    "superClasses": [
      "class809"
    ],
  },
  {
    id: "class646",
    iri: "dbo:TelevisionStation",
    comment: {
      "en": "A television station has usually one line up. For instance the television station WABC-TV (or ABC 7, Channel 7). Not to be confused with the broadcasting network ABC, which has many television stations."
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class381"
    ],
    "equivalent": [
      "class585"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class731",
    iri: "dbo:MovieDirector",
    comment: {
      "en": "a person who oversees making of film."
    },
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class25",
    iri: "dbo:Muscle",
    "superClasses": [
      "class455"
    ],
  },
  {
    id: "class758",
    iri: "schema:Person",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class404",
    iri: "http://dbpedia.org/datatype/inhabitantsPerSquareKilometre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class411",
    iri: "dbo:NuclearPowerStation",
    "superClasses": [
      "class108"
    ],
  },
  {
    id: "class376",
    iri: "dbo:Poem",
    "superClasses": [
      "class633"
    ],
  },
  {
    id: "class508",
    iri: "dbo:Locomotive",
    "superClasses": [
      "class518",
      "class21"
    ],
  },
  {
    id: "class768",
    iri: "dbo:Mosque",
    comment: {
      "en": "A mosque, sometimes spelt mosk, is a place of worship for followers of Islam."
    },
    "superClasses": [
      "class466"
    ],
  },
  {
    id: "class409",
    iri: "dbo:AnimangaCharacter",
    comment: {
      "en": "Anime/Manga character"
    },
    "superClasses": [
      "class662"
    ],
  },
  {
    id: "class615",
    iri: "dbo:HistoricalCountry",
    comment: {
      "en": "A place which used to be a country."
    },
    "superClasses": [
      "class44"
    ],
  },
  {
    id: "class338",
    iri: "dbo:AmericanFootballTeam",
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class127",
    iri: "dbo:Monarch",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class370",
    iri: "dbo:Poet",
    "superClasses": [
      "class371"
    ],
  },
  {
    id: "class413",
    iri: "dbo:RallyDriver",
    comment: {
      
    },
    "superClasses": [
      "class211"
    ],
  },
  {
    id: "class348",
    iri: "dbo:Engineer",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class576",
    iri: "http://purl.org/vocommons/voaf#Vocabulary",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class139",
    iri: "dbo:ResearchProject",
    comment: {
      "en": "A research project is a scientific investigation, usually using scientific methods, to achieve defined objectives."
    },
    "superClasses": [
      "class349"
    ],
  },
  {
    id: "class369",
    iri: "dbo:Taxon",
    comment: {
      "en": "a category within a classification system for Species"
    },
    "superClasses": [
      "class456"
    ],
  },
  {
    id: "class90",
    iri: "dbo:Airline",
    "superClasses": [
      "class711"
    ],
  },
  {
    id: "class391",
    iri: "dbo:Road",
    "superClasses": [
      "class74"
    ],
  },
  {
    id: "class104",
    iri: "odesignp:Agent",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class390",
    iri: "dbo:Saint",
    "superClasses": [
      "class753"
    ],
  },
  {
    id: "class217",
    iri: "dbo:TelevisionEpisode",
    comment: {
      "en": "A television episode is a part of serial television program."
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class388"
    ],
    "equivalent": [
      "class294"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class543",
    iri: "dbo:VideoGame",
    comment: {
      "en": "A video game is an electronic game that involves interaction with a user interface to generate visual feedback on a video device."
    },
    "superClasses": [
      "class1"
    ],
  },
  {
    id: "class759",
    iri: "dbo:Medician",
    "superClasses": [
      "class299"
    ],
  },
  {
    id: "class388",
    iri: "dbo:Work",
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class729",
      "class387",
      "class556",
      "class440",
      "class290",
      "class237",
      "class315",
      "class305",
      "class180",
      "class766",
      "class1",
      "class217",
      "class438",
      "class744",
      "class103",
      "class633"
    ],
    "superClasses": [
      "class30"
    ],
    "equivalent": [
      "class179"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class710",
    iri: "schema:Restaurant",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class252",
    iri: "dbo:Nerve",
    "superClasses": [
      "class455"
    ],
  },
  {
    id: "class627",
    iri: "dbo:Fencer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class117",
    iri: "http://dbpedia.org/datatype/megabyte",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class154",
    iri: "dbo:Imdb",
    "superClasses": [
      "class30"
    ],
  },
  {
    id: "class254",
    iri: "dbo:Referee",
    comment: {
      "en": "An official who watches a game or match closely to ensure that the rules are adhered to."
    },
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class199",
    iri: "dbo:Capital",
    comment: {
      "en": "A municipality enjoying primary status in a state, country, province, or other region as its seat of government."
    },
    "superClasses": [
      "class628"
    ],
  },
  {
    id: "class563",
    iri: "dbo:Cricketer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class785",
    iri: "dbo:Reference",
    comment: {
      "en": "Reference to the book or movie the subject is referred to"
    },
    "superClasses": [
      "class197"
    ],
  },
  {
    id: "class470",
    iri: "dbo:EurovisionSongContestEntry",
    "superClasses": [
      "class590"
    ],
  },
  {
    id: "class382",
    iri: "dbo:MouseGene",
    "superClasses": [
      "class813"
    ],
  },
  {
    id: "class489",
    iri: "dbo:Parish,_Deanery",
  },
  {
    id: "class683",
    iri: "dbo:SportsTeamSeason",
    comment: {
      "en": "A season for a particular sports team (as opposed to the season for the entire league that the team is in)"
    },
    "subClasses": [
      "class358",
      "class648",
      "class218",
      "class425",
      "class383"
    ],
    "superClasses": [
      "class189"
    ],
  },
  {
    id: "class99",
    iri: "dbo:ArchitecturalStructure",
    comment: {
      "en": "An architectural structure is a human-made, free-standing, immobile outdoor construction (http://en.wikipedia.org/wiki/Architectural_structure)."
    },
    "subClasses": [
      "class419",
      "class450",
      "class519",
      "class573",
      "class604",
      "class593",
      "class512",
      "class645",
      "class517",
      "class553",
      "class603",
      "class342",
      "class491",
      "class624",
      "class781"
    ],
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class631",
    iri: "http://dbpedia.org/datatype/valvetrain",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class677",
    iri: "dbo:SpeedwayRider",
    "superClasses": [
      "class782"
    ],
  },
  {
    id: "class709",
    iri: "dbo:GivenName",
    "superClasses": [
      "class745"
    ],
  },
  {
    id: "class804",
    iri: "dbo:SoccerPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class748",
    iri: "dbo:Community",
    comment: {
      
    },
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class575",
    iri: "dbo:SnookerWorldRanking",
    comment: {
      "en": "The official world ranking in snooker for a certain year/season"
    },
    "superClasses": [
      "class511"
    ],
  },
  {
    id: "class640",
    iri: "dbo:Church",
    comment: {
      "en": "This is used for church buildings, not any other meaning of church."
    },
    "superClasses": [
      "class466"
    ],
  },
  {
    id: "class398",
    iri: "dbo:Judge",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class788",
    iri: "dbo:BaseballTeam",
    comment: {
      
    },
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class146",
    iri: "dbo:Port",
    comment: {
      "en": "a location on a coast or shore containing one or more harbors where ships can dock and transfer people or cargo to or from land."
    },
    "superClasses": [
      "class604"
    ],
  },
  {
    id: "class1",
    iri: "dbo:Software",
    "subClasses": [
      "class63",
      "class543"
    ],
    "superClasses": [
      "class388"
    ],
  },
  {
    id: "class802",
    iri: "dbo:AustralianFootballLeague",
    comment: {
      "en": "A group of sports teams that compete against each other in australian football."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class420",
    iri: "dbo:NaturalRegion",
    comment: {
      
    },
    "superClasses": [
      "class248"
    ],
  },
  {
    id: "class523",
    iri: "dbo:HorseTrainer",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class583",
    iri: "http://dbpedia.org/datatype/squareMetre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class695",
    iri: "dbo:TeamMember",
    comment: {
      "en": "A member of an athletic team."
    },
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class344",
    iri: "dbo:MotorcycleRacingLeague",
    comment: {
      "en": "a group of sports teams or bikerider that compete against each other in Motorcycle Racing"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class530",
    iri: "dbo:MemberOfParliament",
    "superClasses": [
      "class357"
    ],
  },
  {
    id: "class726",
    iri: "dbo:Criminal",
    "subClasses": [
      "class806",
      "class472"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class137",
    iri: "dbo:Area",
    comment: {
      
    },
  },
  {
    id: "class96",
    iri: "dbo:Skater",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class37",
    iri: "dbo:Congressman",
    "superClasses": [
      "class357"
    ],
  },
  {
    id: "class135",
    iri: "dbo:Album",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class180"
    ],
    "equivalent": [
      "class331",
      "class203"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class551",
    iri: "dbo:ArtificialSatellite",
    comment: {
      "en": "In the context of spaceflight, an artificial satellite is an artificial object which has been intentionally placed into orbit."
    },
    "superClasses": [
      "class467"
    ],
  },
  {
    id: "class156",
    iri: "dbo:List",
    comment: {
      "en": "A general list of items."
    },
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class415"
    ],
    "superClasses": [
      "class613"
    ],
    "equivalent": [
      "class542"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class714",
    iri: "dbo:Comics",
    "subClasses": [
      "class175",
      "class433",
      "class702",
      "class675"
    ],
    "superClasses": [
      "class633"
    ],
  },
  {
    id: "class400",
    iri: "dbo:Dam",
    comment: {
      "en": "A dam is part of a landscape infrastructure, like waterworks (canals) or roads, much more than a building, though, of course, it has been built, too."
    },
    "superClasses": [
      "class604"
    ],
  },
  {
    id: "class809",
    iri: "dbo:Animal",
    "subClasses": [
      "class296",
      "class191",
      "class577",
      "class16",
      "class334",
      "class769",
      "class282",
      "class114",
      "class533"
    ],
    "superClasses": [
      "class150"
    ],
  },
  {
    id: "class561",
    iri: "dbo:HistoricalDistrict",
    comment: {
      "en": "a place which used to be a district."
    },
    "superClasses": [
      "class148"
    ],
  },
  {
    id: "class557",
    iri: "dbo:Racecourse",
    comment: {
      "en": "A racecourse is an alternate term for a horse racing track, found in countries such as the United Kingdom, Australia, Hong Kong, and the United Arab Emirates."
    },
    "superClasses": [
      "class605"
    ],
  },
  {
    id: "class635",
    iri: "dbo:SoftballLeague",
    comment: {
      "en": "A group of sports teams that compete against each other in softball."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class144",
    iri: "dbo:PoliticianSpouse",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class116",
    iri: "dbo:Pope",
    "superClasses": [
      "class753"
    ],
  },
  {
    id: "class704",
    iri: "dbo:Asteroid",
    "superClasses": [
      "class384"
    ],
  },
  {
    id: "class441",
    iri: "dbo:Prefecture",
    "superClasses": [
      "class245"
    ],
  },
  {
    id: "class675",
    iri: "dbo:Manhwa",
    comment: {
      "en": "Korean term for comics and print cartoons"
    },
    "superClasses": [
      "class714"
    ],
  },
  {
    id: "class235",
    iri: "dbo:Altitude",
    comment: {
      
    },
  },
  {
    id: "class222",
    iri: "dbo:GolfLeague",
    comment: {
      "en": "Golfplayer that compete against each other in Golf"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class128",
    iri: "dbo:Year",
    "superClasses": [
      "class367",
      "class669"
    ],
  },
  {
    id: "class80",
    iri: "dbo:Gnetophytes",
    "superClasses": [
      "class659"
    ],
  },
  {
    id: "class6",
    iri: "dbo:SupremeCourtOfTheUnitedStatesCase",
    "superClasses": [
      "class231"
    ],
  },
  {
    id: "class203",
    iri: "http://wikidata.dbpedia.org/resource/Q482994",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class373",
    iri: "schema:LandmarksOrHistoricalBuildings",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class716",
    iri: "dbo:GreenAlga",
    "superClasses": [
      "class659"
    ],
  },
  {
    id: "class214",
    iri: "http://dbpedia.org/datatype/second",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class273",
    iri: "dbo:Hospital",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class519"
    ],
    "equivalent": [
      "class478"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class38",
    iri: "http://wikidata.dbpedia.org/resource/Q215627",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class26",
    iri: "schema:WebPage",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class109",
    iri: "dbo:SubMunicipality",
    comment: {
      "en": "An administrative body governing a territorial unity on the lowest level, administering part of a municipality"
    },
    "superClasses": [
      "class641"
    ],
  },
  {
    id: "class368",
    iri: "dbo:Producer",
    comment: {
      "en": "a person who manages movies or music recordings."
    },
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class107",
    iri: "dbo:ChemicalElement",
    "superClasses": [
      "class703"
    ],
  },
  {
    id: "class147",
    iri: "dbo:FormulaOneTeam",
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class632",
    iri: "dbo:Population",
  },
  {
    id: "class468",
    iri: "http://dbpedia.org/datatype/litre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class294",
    iri: "schema:TVEpisode",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class300",
    iri: "dbo:Mayor",
    "superClasses": [
      "class357"
    ],
  },
  {
    id: "class791",
    iri: "dbo:RadioControlledRacingLeague",
    comment: {
      "en": "A group of sports teams or person that compete against each other in radio-controlled racing."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class130",
    iri: "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class43",
    iri: "dbo:GolfTournament",
    "superClasses": [
      "class192"
    ],
  },
  {
    id: "class193",
    iri: "dbo:Surname",
    "superClasses": [
      "class745"
    ],
  },
  {
    id: "class57",
    iri: "dbo:PaintballLeague",
    comment: {
      "en": "a group of sports teams that compete against each other in Paintball"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class164",
    iri: "dbo:RailwayStation",
    "superClasses": [
      "class395"
    ],
  },
  {
    id: "class302",
    iri: "dbo:CanadianFootballTeam",
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class102",
    iri: "dbo:Bodybuilder",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class462",
    iri: "dbo:GrossDomesticProductPerCapita",
  },
  {
    id: "class63",
    iri: "dbo:ProgrammingLanguage",
    "superClasses": [
      "class1",
      "class30"
    ],
  },
  {
    id: "class721",
    iri: "http://dbpedia.org/datatype/kilometrePerSecond",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class432",
    iri: "odesignp:Entity",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class719"
    ],
    type: "externalclass"
  },
  {
    id: "class464",
    iri: "http://dbpedia.org/datatype/kilometrePerHour",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class511",
    iri: "odesignp:Role",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class125",
      "class575"
    ],
    type: "externalclass"
  },
  {
    id: "class132",
    iri: "dbo:Installment",
    "superClasses": [
      "class633"
    ],
  },
  {
    id: "class93",
    iri: "dbo:BullFighter",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class764",
    iri: "dbo:Marriage",
    comment: {
      "en": "someone's marriage as a type of personal event"
    },
    "superClasses": [
      "class5"
    ],
  },
  {
    id: "class274",
    iri: "dbo:Novel",
    comment: {
      "en": "A book of long narrative in literary prose"
    },
    "subClasses": [
      "class307"
    ],
    "superClasses": [
      "class786"
    ],
  },
  {
    id: "class318",
    iri: "dbo:Group",
    comment: {
      "en": "An (informal) group of people."
    },
    "superClasses": [
      "class588",
      "class408"
    ],
  },
  {
    id: "class597",
    iri: "dbo:MusicGenre",
    "superClasses": [
      "class618",
      "class239"
    ],
  },
  {
    id: "class609",
    iri: "dbo:Regency",
    comment: {
      id: "bagian wilayah administratif dibawah provinsi"
    },
    "superClasses": [
      "class641"
    ],
  },
  {
    id: "class100",
    iri: "dbo:Wine",
    "subClasses": [
      "class333"
    ],
    "superClasses": [
      "class484"
    ],
  },
  {
    id: "class275",
    iri: "dbo:TennisPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class610",
    iri: "dbo:College",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class207"
    ],
    "equivalent": [
      "class140",
      "class787"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class243",
    iri: "dbo:CyclingTeam",
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class643",
    iri: "dbo:LunarCrater",
    "superClasses": [
      "class525"
    ],
  },
  {
    id: "class79",
    iri: "dbo:BeachVolleyballPlayer",
    comment: {
      
    },
    "superClasses": [
      "class145"
    ],
  },
  {
    id: "class349",
    iri: "dbo:Project",
    comment: {
      "en": "A project is a temporary endeavor undertaken to achieve defined objectives."
    },
    "subClasses": [
      "class139"
    ],
    "superClasses": [
      "class725",
      "class552"
    ],
  },
  {
    id: "class757",
    iri: "http://dbpedia.org/ontology/",
    "subClasses": [
      "class196"
    ],
    "instances": 0,
  },
  {
    id: "class346",
    iri: "dbo:Canal",
    comment: {
      "en": "a man-made channel for water"
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class461"
    ],
    "equivalent": [
      "class15"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class238",
    iri: "dbo:Archipelago",
    "superClasses": [
      "class680"
    ],
  },
  {
    id: "class285",
    iri: "dbo:ComicsCreator",
    "superClasses": [
      "class565"
    ],
  },
  {
    id: "class661",
    iri: "dbo:ChessPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class765",
    iri: "dbo:MotorsportRacer",
    "subClasses": [
      "class782",
      "class211"
    ],
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class12",
    iri: "dbo:SolarEclipse",
    comment: {
      
    },
    "superClasses": [
      "class600"
    ],
  },
  {
    id: "class281",
    iri: "dbo:MusicalArtist",
    "subClasses": [
      "class229",
      "class674",
      "class568",
      "class621",
      "class394"
    ],
    "superClasses": [
      "class565",
      "class51",
      "class118"
    ],
  },
  {
    id: "class699",
    iri: "dbo:RugbyLeague",
    comment: {
      "en": "A group of sports teams that compete against each other in rugby."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class149",
    iri: "schema:Country",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class313",
    iri: "dbo:LawFirm",
    comment: {
      "en": "A law firm is a business entity formed by one or more lawyers to engage in the practice of law. The primary service provided by a law firm is to advise clients (individuals or corporations) about their legal rights and responsibilities, and to represent their clients in civil or criminal cases, business transactions, and other matters in which legal advice and other assistance are sought."
    },
    "superClasses": [
      "class711"
    ],
  },
  {
    id: "class263",
    iri: "dbo:HorseRace",
    "superClasses": [
      "class794"
    ],
  },
  {
    id: "class59",
    iri: "dbo:MouseGeneLocation",
    "superClasses": [
      "class262"
    ],
  },
  {
    id: "class304",
    iri: "http://dbpedia.org/datatype/cubicKilometre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class358",
    iri: "dbo:BaseballSeason",
    "superClasses": [
      "class683"
    ],
  },
  {
    id: "class503",
    iri: "dbo:CultivatedVariety",
    comment: {
      "en": "A cultivar is a plant or grouping of plants selected for desirable characteristics that can be maintained by propagation. A plant whose origin or selection is primarily due to intentional human activity."
    },
    "superClasses": [
      "class659"
    ],
  },
  {
    id: "class72",
    iri: "dbo:WaterPoloPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class276",
    iri: "dbo:AustralianRulesFootballPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class114",
    iri: "dbo:Mollusca",
    comment: {
      
    },
    "superClasses": [
      "class809"
    ],
  },
  {
    id: "class550",
    iri: "dbo:MusicFestival",
    "superClasses": [
      "class536",
      "class39"
    ],
  },
  {
    id: "class679",
    iri: "dbo:BusCompany",
    "superClasses": [
      "class711"
    ],
  },
  {
    id: "class644",
    iri: "dbo:Journalist",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class314",
    iri: "dbo:SoccerManager",
    "superClasses": [
      "class364"
    ],
  },
  {
    id: "class706",
    iri: "odesignp:Quality",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class212"
    ],
    type: "externalclass"
  },
  {
    id: "class628",
    iri: "dbo:City",
    comment: {
      "en": "a relatively large and permanent settlement, particularly a large urban settlement"
    },
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class199",
      "class319"
    ],
    "superClasses": [
      "class708"
    ],
    "equivalent": [
      "class777"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class633",
    iri: "dbo:WrittenWork",
    comment: {
      "en": "Written work is any text written to read it (e.g.: books, newspaper, articles)"
    },
    "subClasses": [
      "class197",
      "class786",
      "class538",
      "class714",
      "class524",
      "class132",
      "class295",
      "class555",
      "class427",
      "class376",
      "class151",
      "class439"
    ],
    "superClasses": [
      "class388"
    ],
  },
  {
    id: "class686",
    iri: "dbo:TradeUnion",
    comment: {
      "en": "A trade union or labor union is an organization of workers who have banded together to achieve common goals such as better working conditions."
    },
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class54",
    iri: "dbo:MixedMartialArtsEvent",
    "superClasses": [
      "class436"
    ],
  },
  {
    id: "class352",
    iri: "odesignp:SocialPerson",
    "attributes": [
      "external",
      "equivalent"
    ],
    "subClasses": [
      "class320"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class60",
    iri: "http://www.ontologydesignpatterns.org/ont/d0.owl#CognitiveEntity",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class85"
    ],
    type: "externalclass"
  },
  {
    id: "class483",
    iri: "dbo:Cardinal",
    "superClasses": [
      "class753"
    ],
  },
  {
    id: "class630",
    iri: "dbo:SiteOfSpecialScientificInterest",
    comment: {
      "en": "A Site of Special Scientific Interest (SSSI) is a conservation designation denoting a protected area in the United Kingdom. SSSIs are the basic building block of site-based nature conservation legislation and most other legal nature/geological conservation designations in Great Britain are based upon them, including National Nature Reserves, Ramsar Sites, Special Protection Areas, and Special Areas of Conservation."
    },
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class374",
    iri: "dbo:SnookerPlayer",
    comment: {
      "en": "An athlete that plays snooker, which is a billard derivate"
    },
    "subClasses": [
      "class173"
    ],
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class229",
    iri: "dbo:BackScene",
    "superClasses": [
      "class281"
    ],
  },
  {
    id: "class286",
    iri: "dbo:Sculpture",
    comment: {
      "en": "Sculpture is three-dimensional artwork created by shaping or combining hard materials, typically stone such as marble, metal, glass, or wood, or plastic materials such as clay, textiles, polymers and softer metals."
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class729"
    ],
    "equivalent": [
      "class298"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class92",
    iri: "dbo:BadmintonPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class500",
    iri: "dbo:PoliticalParty",
    comment: {
      "en": "for example: Democratic_Party_(United_States)"
    },
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class466",
    iri: "dbo:ReligiousBuilding",
    comment: {
      "en": "An establishment or her location where a group of people (a congregation) comes to perform acts of religious study, honor, or devotion."
    },
    "subClasses": [
      "class640",
      "class768",
      "class521",
      "class7"
    ],
    "superClasses": [
      "class519"
    ],
  },
  {
    id: "class82",
    iri: "dbo:OldTerritory",
    "superClasses": [
      "class612"
    ],
  },
  {
    id: "class322",
    iri: "dbo:HumanGeneLocation",
    "superClasses": [
      "class262"
    ],
  },
  {
    id: "class639",
    iri: "dbo:Lake",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class316"
    ],
    "equivalent": [
      "class796"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class481",
    iri: "odesignp:Collective",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class264"
    ],
    type: "externalclass"
  },
  {
    id: "class653",
    iri: "dbo:VoiceActor",
    "superClasses": [
      "class540"
    ],
  },
  {
    id: "class648",
    iri: "dbo:FootballLeagueSeason",
    "subClasses": [
      "class713"
    ],
    "superClasses": [
      "class683"
    ],
  },
  {
    id: "class519",
    iri: "dbo:Building",
    comment: {
      "en": "Building is defined as a Civil Engineering structure such as a house, worship center, factory etc. that has a foundation, wall, roof etc. that protect human being and their properties from direct harsh effect of weather like rain, wind, sun etc. (http://en.wikipedia.org/wiki/Building)."
    },
    "subClasses": [
      "class732",
      "class626",
      "class363",
      "class418",
      "class273",
      "class657",
      "class449",
      "class95",
      "class64",
      "class466",
      "class126",
      "class799",
      "class45"
    ],
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class247",
    iri: "schema:SeaBodyOfWater",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class560",
    iri: "dbo:NobelPrize",
    "superClasses": [
      "class534"
    ],
  },
  {
    id: "class88",
    iri: "dbo:Canoeist",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class173",
    iri: "dbo:SnookerChamp",
    comment: {
      "en": "An athlete that plays snooker and won the world championship at least once"
    },
    "superClasses": [
      "class374"
    ],
  },
  {
    id: "class296",
    iri: "dbo:Amphibian",
    "superClasses": [
      "class809"
    ],
  },
  {
    id: "class566",
    iri: "dbo:Department",
    "subClasses": [
      "class755"
    ],
    "superClasses": [
      "class245"
    ],
  },
  {
    id: "class134",
    iri: "odesignp:UnitOfMeasure",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class309"
    ],
    type: "externalclass"
  },
  {
    id: "class326",
    iri: "dbo:MixedMartialArtsLeague",
    comment: {
      "en": "a group of sports teams that compete against each other in Mixed Martial Arts"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class183",
    iri: "dbo:Sculptor",
    "superClasses": [
      "class565"
    ],
  },
  {
    id: "class600",
    iri: "dbo:NaturalEvent",
    comment: {
      
    },
    "subClasses": [
      "class12"
    ],
    "superClasses": [
      "class497"
    ],
  },
  {
    id: "class708",
    iri: "dbo:Settlement",
    "subClasses": [
      "class628",
      "class111",
      "class522",
      "class742",
      "class365"
    ],
    "superClasses": [
      "class245"
    ],
  },
  {
    id: "class476",
    iri: "dbo:Theatre",
    comment: {
      "en": "A theater or theatre (also a playhouse) is a structure where theatrical works or plays are performed or other performances such as musical concerts may be produced."
    },
    "superClasses": [
      "class624"
    ],
  },
  {
    id: "class539",
    iri: "dbo:TheatreDirector",
    comment: {
      "en": "A director in the theatre field who oversees and orchestrates the mounting of a theatre production."
    },
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class602",
    iri: "dbo:TermOfOffice",
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class521",
    iri: "dbo:Synagogue",
    comment: {
      "en": "A synagogue, sometimes spelt synagog, is a Jewish or Samaritan house of prayer."
    },
    "superClasses": [
      "class466"
    ],
  },
  {
    id: "class613",
    iri: "odesignp:Collection",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class156"
    ],
    type: "externalclass"
  },
  {
    id: "class638",
    iri: "dbo:Lighthouse",
    "superClasses": [
      "class342"
    ],
  },
  {
    id: "class110",
    iri: "dbo:Ocean",
    comment: {
      "en": "A body of saline water that composes much of a planet's hydrosphere."
    },
    "superClasses": [
      "class316"
    ],
  },
  {
    id: "class663",
    iri: "dbo:DartsPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class345",
    iri: "dbo:Diploma",
  },
  {
    id: "class460",
    iri: "dbo:BasketballPlayer",
    comment: {
      
    },
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class799",
    iri: "dbo:ShoppingMall",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class519"
    ],
    "equivalent": [
      "class652"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class271",
    iri: "dbo:Species",
    "subClasses": [
      "class790",
      "class665",
      "class150"
    ],
    "superClasses": [
      "class359"
    ],
  },
  {
    id: "class270",
    iri: "dbo:GraveMonument",
    comment: {
      "en": "A monument erected on a tomb, or a memorial stone."
    },
    "superClasses": [
      "class459"
    ],
  },
  {
    id: "class414",
    iri: "dbo:Cycad",
    "superClasses": [
      "class659"
    ],
  },
  {
    id: "class162",
    iri: "dbo:GatedCommunity",
    "superClasses": [
      "class245"
    ],
  },
  {
    id: "class445",
    iri: "dbo:RomanEmperor",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class737",
    iri: "dbo:Locality",
    "superClasses": [
      "class245"
    ],
  },
  {
    id: "class810",
    iri: "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class418",
    iri: "dbo:HistoricBuilding",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class519"
    ],
    "equivalent": [
      "class97",
      "class373"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class371",
    iri: "dbo:Writer",
    "subClasses": [
      "class407",
      "class301",
      "class370",
      "class480",
      "class157"
    ],
    "superClasses": [
      "class565"
    ],
  },
  {
    id: "class151",
    iri: "dbo:Resume",
    comment: {
      "en": "A Resume describes a persons work experience and skill set."
    },
    "superClasses": [
      "class633"
    ],
  },
  {
    id: "class670",
    iri: "dbo:GolfCourse",
    comment: {
      
    },
    "superClasses": [
      "class3"
    ],
  },
  {
    id: "class435",
    iri: "dbo:BoxingLeague",
    comment: {
      "en": "A group of sports teams or fighters that compete against each other in Boxing"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class120",
    iri: "dbo:Sound",
    comment: {
      "en": "An audio document intended to be listened to; equivalent to http://purl.org/dc/dcmitype/Sound"
    },
    "superClasses": [
      "class290"
    ],
  },
  {
    id: "class739",
    iri: "dbo:AdultActor",
    comment: {
      "en": "A pornographic actor or actress or a porn star is a person who performs sex acts in film, normally characterised as a pornographic film.."
    },
    "superClasses": [
      "class540"
    ],
  },
  {
    id: "class430",
    iri: "dbo:MountainPass",
    comment: {
      "en": "a path that allows the crossing of a mountain chain. It is usually a saddle point in between two areas of higher elevation"
    },
    "superClasses": [
      "class680"
    ],
  },
  {
    id: "class287",
    iri: "http://dbpedia.org/datatype/kilometre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class789",
    iri: "dbo:SoccerLeague",
    comment: {
      "en": "A group of sports teams that compete against each other in soccer."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class305",
    iri: "dbo:Musical",
    "superClasses": [
      "class388"
    ],
  },
  {
    id: "class607",
    iri: "dbo:InformationAppliance",
    comment: {
      "en": "An information device such as PDAs or Video game consoles, etc."
    },
    "superClasses": [
      "class297"
    ],
  },
  {
    id: "class812",
    iri: "dbo:Philosopher",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class690",
    iri: "dbo:StillImage",
    comment: {
      "en": "A visual document that is not intended to be animated; equivalent to http://purl.org/dc/dcmitype/StillImage"
    },
    "superClasses": [
      "class195"
    ],
  },
  {
    id: "class225",
    iri: "dbo:ProtectedArea",
    comment: {
      "en": "This class should be used for protected nature. For enclosed neighbourhoods there is now class GatedCommunity"
    },
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class333",
    iri: "dbo:ControlledDesignationOfOriginWine",
    comment: {
      "en": "A quality assurance label for wines"
    },
    "superClasses": [
      "class100"
    ],
  },
  {
    id: "class499",
    iri: "dbo:TelevisionShow,_FictionalCharacter",
  },
  {
    id: "class204",
    iri: "dbo:TelevisionPersonality",
    "subClasses": [
      "class251"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class384",
    iri: "dbo:CelestialBody",
    "subClasses": [
      "class704",
      "class133",
      "class564",
      "class515",
      "class310"
    ],
    "superClasses": [
      "class541"
    ],
  },
  {
    id: "class242",
    iri: "http://dbpedia.org/datatype/engineConfiguration",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class122",
    iri: "dbo:Sales",
    "superClasses": [
      "class693"
    ],
  },
  {
    id: "class209",
    iri: "dbo:PublicTransitSystem",
    comment: {
      
    },
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class161",
    iri: "http://dbpedia.org/datatype/day",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class106",
    iri: "dbo:Person,_PersonalEvent",
  },
  {
    id: "class611",
    iri: "dbo:AmericanFootballCoach",
    "superClasses": [
      "class723"
    ],
  },
  {
    id: "class105",
    iri: "dbo:Place",
    comment: {
      "en": "Immobile things or locations."
    },
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class292",
      "class99",
      "class337",
      "class748",
      "class10",
      "class176",
      "class97",
      "class42",
      "class459",
      "class327",
      "class680",
      "class479",
      "class245",
      "class225",
      "class630",
      "class288",
      "class226",
      "class3",
      "class155",
      "class740"
    ],
    "superClasses": [
      "class532"
    ],
    "equivalent": [
      "class801",
      "class365",
      "class245",
      "class260"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class733",
    iri: "dbo:Magazine",
    comment: {
      "en": "Magazines, periodicals, glossies or serials are publications, generally published on a regular schedule, containing a variety of articles. They are generally financed by advertising, by a purchase price, by pre-paid magazine subscriptions, or all three."
    },
    "superClasses": [
      "class555"
    ],
  },
  {
    id: "class424",
    iri: "schema:Park",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class84",
    iri: "dbo:HandballLeague",
    comment: {
      "en": "a group of sports teams that compete against each other in Handball"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class647",
    iri: "schema:RadioStation",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class725",
    iri: "dbo:UnitOfWork",
    comment: {
      "en": "This class is meant to convey the notion of an amount work to be done. It is different from Activity in that it has a definite end and is being measured.\""
    },
    "subClasses": [
      "class807",
      "class349"
    ],
    "superClasses": [
      "class693"
    ],
  },
  {
    id: "class31",
    iri: "dbo:Surfer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class782",
    iri: "dbo:MotorcycleRider",
    "subClasses": [
      "class677"
    ],
    "superClasses": [
      "class765"
    ],
  },
  {
    id: "class780",
    iri: "odesignp:FunctionalSubstance",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class46",
      "class537"
    ],
    type: "externalclass"
  },
  {
    id: "class553",
    iri: "dbo:Shrine",
    "superClasses": [
      "class99"
    ],
  },
  {
    id: "class231",
    iri: "dbo:LegalCase",
    "subClasses": [
      "class6"
    ],
    "superClasses": [
      "class807",
      "class693"
    ],
  },
  {
    id: "class288",
    iri: "dbo:SkiArea",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class105"
    ],
    "equivalent": [
      "class544"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class595",
    iri: "dbo:CyclingRace",
    "superClasses": [
      "class794"
    ],
  },
  {
    id: "class522",
    iri: "dbo:HistoricalSettlement",
    comment: {
      "en": "A place which used to be a city or town or village."
    },
    "superClasses": [
      "class708"
    ],
  },
  {
    id: "class292",
    iri: "dbo:Abbey",
    comment: {
      "en": "An abbey is a Catholic monastery or convent, under the authority of an Abbot or an Abbess, who serves as the spiritual father or mother of the community."
    },
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class284",
    iri: "dbo:NetballPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class586",
    iri: "dbo:CricketTeam",
    "superClasses": [
      "class13"
    ],
  },
  {
    id: "class674",
    iri: "dbo:ClassicalMusicArtist",
    comment: {
      
    },
    "superClasses": [
      "class281"
    ],
  },
  {
    id: "class715",
    iri: "dbo:MilitaryUnit",
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class169",
    iri: "dbo:WomensTennisAssociationTournament",
    "superClasses": [
      "class192"
    ],
  },
  {
    id: "class68",
    iri: "dbo:Legislature",
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class195",
    iri: "dbo:Image",
    comment: {
      "en": "A document that contains a visual image"
    },
    "subClasses": [
      "class32",
      "class690"
    ],
    "superClasses": [
      "class290"
    ],
  },
  {
    id: "class443",
    iri: "dbo:FootballMatch",
    comment: {
      "en": "a competition between two football teams"
    },
    "superClasses": [
      "class436"
    ],
  },
  {
    id: "class655",
    iri: "dbo:Governor",
    "superClasses": [
      "class357"
    ],
  },
  {
    id: "class165",
    iri: "dbo:AmericanFootballLeague",
    comment: {
      "en": "A group of sports teams that compete against each other in american football."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class67",
    iri: "dbo:BrownDwarf",
    "superClasses": [
      "class310"
    ],
  },
  {
    id: "class101",
    iri: "dbo:SpaceStation",
    "superClasses": [
      "class518"
    ],
  },
  {
    id: "class416",
    iri: "dbo:Athlete",
    "subClasses": [
      "class187",
      "class276",
      "class92",
      "class668",
      "class460",
      "class102",
      "class772",
      "class93",
      "class88",
      "class661",
      "class563",
      "class33",
      "class516",
      "class663",
      "class627",
      "class698",
      "class676",
      "class188",
      "class323",
      "class477",
      "class234",
      "class36",
      "class351",
      "class227",
      "class527",
      "class52",
      "class765",
      "class687",
      "class284",
      "class437",
      "class18",
      "class89",
      "class96",
      "class694",
      "class374",
      "class804",
      "class473",
      "class31",
      "class546",
      "class332",
      "class695",
      "class275",
      "class145",
      "class72",
      "class498"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class808",
    iri: "dbo:BoxingStyle",
    "superClasses": [
      "class608"
    ],
  },
  {
    id: "class172",
    iri: "dbo:Windmill",
    comment: {
      "en": "A windmill is a machine that converts the energy of wind into rotational energy by means of vanes called sails"
    },
    "superClasses": [
      "class512"
    ],
  },
  {
    id: "class387",
    iri: "dbo:Cartoon",
    "subClasses": [
      "class280",
      "class210"
    ],
    "superClasses": [
      "class388"
    ],
  },
  {
    id: "class591",
    iri: "dbo:Entomologist",
    "superClasses": [
      "class299"
    ],
  },
  {
    id: "class775",
    iri: "dbo:Bone",
    comment: {
      
    },
    "superClasses": [
      "class455"
    ],
  },
  {
    id: "class58",
    iri: "http://xmlns.com/foaf/0.1/Document",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class7",
    iri: "dbo:Temple",
    "superClasses": [
      "class466"
    ],
  },
  {
    id: "class766",
    iri: "dbo:RadioProgram",
    "superClasses": [
      "class388"
    ],
  },
  {
    id: "class186",
    iri: "dbo:Grape",
    "superClasses": [
      "class360"
    ],
  },
  {
    id: "class383",
    iri: "dbo:SoccerLeagueSeason",
    "superClasses": [
      "class683"
    ],
  },
  {
    id: "class567",
    iri: "schema:EducationalOrganization",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class283",
    iri: "dbo:CanadianFootballPlayer",
    "superClasses": [
      "class323"
    ],
  },
  {
    id: "class794",
    iri: "dbo:Race",
    "subClasses": [
      "class595",
      "class263"
    ],
    "superClasses": [
      "class436"
    ],
  },
  {
    id: "class240",
    iri: "schema:MusicRecording",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class244",
    iri: "dbo:Volcano",
    comment: {
      "en": "A volcano is currently subclass of naturalplace, but it might also be considered a mountain."
    },
    "superClasses": [
      "class680"
    ],
  },
  {
    id: "class23",
    iri: "dbo:Vicar",
    "superClasses": [
      "class753"
    ],
  },
  {
    id: "class321",
    iri: "odesignp:Description",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class534",
      "class196",
      "class795"
    ],
    type: "externalclass"
  },
  {
    id: "class423",
    iri: "dbo:TelevisionHost",
    "superClasses": [
      "class335"
    ],
  },
  {
    id: "class665",
    iri: "dbo:Bacteria",
    "superClasses": [
      "class271"
    ],
  },
  {
    id: "class571",
    iri: "schema:StadiumOrArena",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class495",
    iri: "dbo:DisneyCharacter",
    "superClasses": [
      "class385"
    ],
  },
  {
    id: "class515",
    iri: "dbo:Planet",
    "superClasses": [
      "class384"
    ],
  },
  {
    id: "class76",
    iri: "http://dbpedia.org/datatype/kelvin",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class407",
    iri: "dbo:MusicComposer",
    comment: {
      "en": "a person who creates music."
    },
    "superClasses": [
      "class371"
    ],
  },
  {
    id: "class39",
    iri: "schema:Festival",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class650",
      "class550"
    ],
    type: "externalclass"
  },
  {
    id: "class190",
    iri: "dbo:HistoricalPeriod",
    comment: {
      "en": "A historical Period should be linked to a Place by way of the property dct:spatial (already defined)"
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class367"
    ],
    "equivalent": [
      "class255"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class97",
    iri: "dbo:HistoricPlace",
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class105"
    ],
    "equivalent": [
      "class373",
      "class418"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class608",
    iri: "dbo:Boxing",
    comment: {
      
    },
    "subClasses": [
      "class598",
      "class808"
    ],
    "superClasses": [
      "class69"
    ],
  },
  {
    id: "class783",
    iri: "dbo:Aristocrat",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class742",
    iri: "dbo:Town",
    comment: {
      "en": "a settlement ranging from a few hundred to several thousand (occasionally hundreds of thousands). The precise meaning varies between countries and is not always a matter of legal definition. Usually, a town is thought of as larger than a village but smaller than a city, though there are exceptions to this rule."
    },
    "superClasses": [
      "class708"
    ],
  },
  {
    id: "class98",
    iri: "dbo:Watermill",
    comment: {
      "en": "A watermill is a structure that uses a water wheel or turbine to drive a mechanical process such as flour, lumber or textile production, or metal shaping (rolling, grinding or wire drawing)"
    },
    "superClasses": [
      "class512"
    ],
  },
  {
    id: "class555",
    iri: "dbo:PeriodicalLiterature",
    comment: {
      "en": "Periodical literature (also called a periodical publication or simply a periodical) is a published work that appears in a new edition on a regular schedule. The most familiar examples are the newspaper, often published daily, or weekly; or the magazine, typically published weekly, monthly or as a quarterly. Other examples would be a newsletter, a literary journal or learned journal, or a yearbook."
    },
    "subClasses": [
      "class257",
      "class733",
      "class559"
    ],
    "superClasses": [
      "class633"
    ],
  },
  {
    id: "class153",
    iri: "dbo:RecordLabel",
    "superClasses": [
      "class711"
    ],
  },
  {
    id: "class680",
    iri: "dbo:NaturalPlace",
    comment: {
      "en": "The natural place encompasses all places occurring naturally in universe."
    },
    "subClasses": [
      "class238",
      "class316",
      "class442",
      "class525",
      "class529",
      "class366",
      "class762",
      "class327",
      "class430",
      "class266",
      "class457",
      "class244"
    ],
    "superClasses": [
      "class105"
    ],
  },
  {
    id: "class745",
    iri: "dbo:Name",
    "subClasses": [
      "class709",
      "class193"
    ],
    "superClasses": [
      "class30"
    ],
  },
  {
    id: "class612",
    iri: "dbo:Territory",
    "subClasses": [
      "class82"
    ],
    "superClasses": [
      "class245"
    ],
  },
  {
    id: "class280",
    iri: "dbo:Anime",
    comment: {
      "en": "A style of animation originating in Japan"
    },
    "superClasses": [
      "class387"
    ],
  },
  {
    id: "class605",
    iri: "dbo:RaceTrack",
    "subClasses": [
      "class557"
    ],
    "superClasses": [
      "class3"
    ],
  },
  {
    id: "class730",
    iri: "dbo:SumoWrestler",
    "superClasses": [
      "class498"
    ],
  },
  {
    id: "class69",
    iri: "dbo:Sport",
    comment: {
      "en": "A sport is commonly defined as an organized, competitive, and skillful physical activity."
    },
    "subClasses": [
      "class513",
      "class608",
      "class412"
    ],
    "superClasses": [
      "class701"
    ],
  },
  {
    id: "class360",
    iri: "dbo:FloweringPlant",
    "subClasses": [
      "class186"
    ],
    "superClasses": [
      "class659"
    ],
  },
  {
    id: "class49",
    iri: "dbo:Conifer",
    comment: {
      
    },
    "superClasses": [
      "class659"
    ],
  },
  {
    id: "class353",
    iri: "odesignp:SpaceRegion",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class269"
    ],
    type: "externalclass"
  },
  {
    id: "class754",
    iri: "dbo:PublicServiceOutput",
    "superClasses": [
      "class196"
    ],
  },
  {
    id: "class761",
    iri: "dbo:Biomolecule",
    comment: {
      "en": "equivalent to http://ccdb.ucsd.edu/NIF/BIRNLex-OBO-UBO.owl#birnlex_22."
    },
    "subClasses": [
      "class205",
      "class813",
      "class496"
    ],
    "superClasses": [
      "class558"
    ],
  },
  {
    id: "class667",
    iri: "schema:Event",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class801",
    iri: "schema:Place",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class389",
    iri: "http://dbpedia.org/datatype/hour",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class44",
    iri: "dbo:Country",
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class615"
    ],
    "superClasses": [
      "class245"
    ],
    "equivalent": [
      "class149"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class509",
    iri: "schema:BodyOfWater",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class401",
    iri: "dbo:OrganisationMember",
    comment: {
      "en": "A member of an organisation."
    },
    "subClasses": [
      "class61"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class588",
    iri: "dbo:Organisation",
    "attributes": [
      "equivalent"
    ],
    "subClasses": [
      "class320",
      "class381",
      "class454",
      "class712",
      "class711",
      "class207",
      "class750",
      "class289",
      "class318",
      "class68",
      "class715",
      "class83",
      "class213",
      "class500",
      "class209",
      "class798",
      "class673",
      "class13",
      "class602",
      "class686"
    ],
    "superClasses": [
      "class434"
    ],
    "equivalent": [
      "class408",
      "class352"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class722",
    iri: "dbo:Municipality",
    comment: {
      "en": "An administrative body governing a territorial unity on the lower level, administering one or a few more settlements"
    },
    "subClasses": [
      "class121"
    ],
    "superClasses": [
      "class641"
    ],
  },
  {
    id: "class736",
    iri: "dbo:Ship",
    "superClasses": [
      "class518",
      "class21"
    ],
  },
  {
    id: "class811",
    iri: "dbo:Automobile",
    "superClasses": [
      "class518",
      "class21"
    ],
  },
  {
    id: "class580",
    iri: "dbo:Rocket",
    "superClasses": [
      "class518"
    ],
  },
  {
    id: "class306",
    iri: "dbo:Deity",
    "superClasses": [
      "class434"
    ],
  },
  {
    id: "class620",
    iri: "dbo:NarutoCharacter",
    "superClasses": [
      "class385"
    ],
  },
  {
    id: "class556",
    iri: "dbo:CollectionOfValuables",
    comment: {
      "en": "Collection of valuables is a collection considered to be a work in itself)"
    },
    "subClasses": [
      "class797"
    ],
    "superClasses": [
      "class388"
    ],
  },
  {
    id: "class66",
    iri: "dbo:Diocese,_Parish",
  },
  {
    id: "class289",
    iri: "dbo:GovernmentAgency",
    comment: {
      "en": "A government agency is a permanent or semi-permanent organization in the machinery of government that is responsible for the oversight and administration of specific functions, such as an intelligence agency."
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class588"
    ],
    "equivalent": [
      "class803"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class303",
    iri: "dbo:DigitalCamera",
    comment: {
      
    },
    "superClasses": [
      "class431"
    ],
  },
  {
    id: "class673",
    iri: "dbo:SportsLeague",
    comment: {
      "en": "A group of sports teams or individual athletes that compete against each other in a specific sport."
    },
    "subClasses": [
      "class165",
      "class802",
      "class27",
      "class417",
      "class549",
      "class41",
      "class435",
      "class291",
      "class182",
      "class488",
      "class545",
      "class684",
      "class40",
      "class222",
      "class84",
      "class341",
      "class724",
      "class160",
      "class326",
      "class344",
      "class57",
      "class386",
      "class791",
      "class699",
      "class789",
      "class635",
      "class720",
      "class9",
      "class228",
      "class272"
    ],
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class266",
    iri: "dbo:MountainRange",
    comment: {
      "en": "a chain of mountains bordered by highlands or separated from other mountains by passes or valleys."
    },
    "superClasses": [
      "class680"
    ],
  },
  {
    id: "class486",
    iri: "dbo:Priest",
    "superClasses": [
      "class753"
    ],
  },
  {
    id: "class267",
    iri: "dbo:Guitar",
    comment: {
      "en": "Describes the guitar",
      "es": "Describe la guitarra"
    },
    "superClasses": [
      "class548"
    ],
  },
  {
    id: "class779",
    iri: "schema:Hotel",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class11",
    iri: "dbo:Media",
  },
  {
    id: "class291",
    iri: "dbo:CanadianFootballLeague",
    comment: {
      "en": "A group of sports teams that compete against each other in canadian football league."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class325",
    iri: "dbo:PrimeMinister",
    "superClasses": [
      "class357"
    ],
  },
  {
    id: "class40",
    iri: "dbo:FormulaOneRacing",
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class454",
    iri: "dbo:ClericalOrder",
    comment: {
      
    },
    "superClasses": [
      "class588"
    ],
  },
  {
    id: "class363",
    iri: "dbo:Factory",
    comment: {
      "en": "A factory (previously manufactory) or manufacturing plant is an industrial site, usually consisting of buildings and machinery, or more commonly a complex having several buildings, where workers manufacture goods or operate machines processing one product into another."
    },
    "superClasses": [
      "class519"
    ],
  },
  {
    id: "class78",
    iri: "dbo:Family",
    comment: {
      "en": "A group of people related by common descent, a lineage."
    },
    "subClasses": [
      "class216"
    ],
    "superClasses": [
      "class434"
    ],
  },
  {
    id: "class385",
    iri: "dbo:FictionalCharacter",
    "subClasses": [
      "class662",
      "class495",
      "class620",
      "class170"
    ],
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class678",
    iri: "http://dbpedia.org/datatype/metre",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class249",
    iri: "dbo:Atoll",
    "superClasses": [
      "class206"
    ],
  },
  {
    id: "class756",
    iri: "dbo:PlayboyPlaymate",
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class18",
    iri: "dbo:Rower",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class375",
    iri: "odesignp:InformationObject",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class440"
    ],
    type: "externalclass"
  },
  {
    id: "class30",
    iri: "odesignp:InformationEntity",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class141",
      "class17",
      "class154",
      "class361",
      "class784",
      "class745",
      "class63",
      "class453",
      "class388"
    ],
    type: "externalclass"
  },
  {
    id: "class33",
    iri: "dbo:Curler",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class379",
    iri: "dbo:PublicServiceInput",
    "superClasses": [
      "class196"
    ],
  },
  {
    id: "class554",
    iri: "dbo:MotorsportSeason",
    "superClasses": [
      "class189"
    ],
  },
  {
    id: "class366",
    iri: "dbo:Glacier",
    comment: {
      
    },
    "superClasses": [
      "class680"
    ],
  },
  {
    id: "class395",
    iri: "dbo:Station",
    comment: {
      "ru": "????????? ????????????? ?????????? (????????: ??????????????? ???????, ??????? ?????, ???????????).",
      "en": "Public transport station (eg. railway station, metro station, bus station)."
    },
    "subClasses": [
      "class574",
      "class164"
    ],
    "superClasses": [
      "class604"
    ],
  },
  {
    id: "class570",
    iri: "dbo:Employer",
    comment: {
      "en": "a person, business, firm, etc, that employs workers."
    },
    "superClasses": [
      "class654"
    ],
  },
  {
    id: "class480",
    iri: "dbo:ScreenWriter",
    comment: {
      
    },
    "superClasses": [
      "class371"
    ],
  },
  {
    id: "class365",
    iri: "dbo:Village",
    comment: {
      "en": "a clustered human settlement or community, usually smaller a town"
    },
    "attributes": [
      "equivalent"
    ],
    "superClasses": [
      "class708"
    ],
    "equivalent": [
      "class801",
      "class245",
      "class105",
      "class260"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class332",
    iri: "dbo:TableTennisPlayer",
    comment: {
      "en": "Athlete who plays table tennis"
    },
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class453",
    iri: "dbo:SportCompetitionResult",
    "subClasses": [
      "class514"
    ],
    "superClasses": [
      "class30"
    ],
  },
  {
    id: "class218",
    iri: "dbo:NCAATeamSeason",
    "superClasses": [
      "class683"
    ],
  },
  {
    id: "class145",
    iri: "dbo:VolleyballPlayer",
    "subClasses": [
      "class79"
    ],
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class27",
    iri: "dbo:AutoRacingLeague",
    comment: {
      "en": "a group of sports teams or individual athletes that compete against each other in auto racing"
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class623",
    iri: "dbo:WaterTower",
    comment: {
      "en": "a construction designed to store larger quantities of water at a place of some elevation in order to keep pressure on the water provision system"
    },
    "superClasses": [
      "class342"
    ],
  },
  {
    id: "class472",
    iri: "dbo:SerialKiller",
    "superClasses": [
      "class726"
    ],
  },
  {
    id: "class528",
    iri: "dbo:Aircraft",
    "superClasses": [
      "class518",
      "class21"
    ],
  },
  {
    id: "class48",
    iri: "schema:School",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  },
  {
    id: "class65",
    iri: "dbo:HumanGene",
    "superClasses": [
      "class813"
    ],
  },
  {
    id: "class246",
    iri: "dbo:Dancer",
    "superClasses": [
      "class565"
    ],
  },
  {
    id: "class232",
    iri: "http://dbpedia.org/datatype/fuelType",
    "attributes": [
      "external"
    ],
    type: "externalclass"
  },
  {
    id: "class21",
    iri: "schema:Product",
    "attributes": [
      "external"
    ],
    "subClasses": [
      "class528",
      "class811",
      "class548",
      "class508",
      "class736",
      "class75"
    ],
    type: "externalclass"
  },
  {
    id: "class315",
    iri: "dbo:LineOfFashion",
    comment: {
      "en": "A coherent type of clothing or dressing following a particular fashion"
    },
    "superClasses": [
      "class388"
    ],
  },
  {
    id: "class123",
    iri: "dbo:CollegeCoach",
    "superClasses": [
      "class723"
    ],
  },
  {
    id: "class89",
    iri: "dbo:RugbyPlayer",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class272",
    iri: "dbo:VolleyballLeague",
    comment: {
      "en": "A group of sports teams that compete against each other in volleyball."
    },
    "superClasses": [
      "class673"
    ],
  },
  {
    id: "class698",
    iri: "dbo:FigureSkater",
    "superClasses": [
      "class416"
    ],
  },
  {
    id: "class248",
    iri: "dbo:Region",
    "subClasses": [
      "class201",
      "class70",
      "class420"
    ],
    "superClasses": [
      "class245"
    ],
  },
  {
    id: "class520",
    iri: "schema:Book",
    "attributes": [
      "external",
      "equivalent"
    ],
    type: "owl:equivalentClass"
  }
]

owl.propertyAttribute = [
  {
    id: "property1109",
    iri: "dbo:brand",
    domain: "class422",
    range: "class744",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1405",
    iri: "dbo:pastMember",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2588",
    iri: "dbo:freeFlightTime",
    domain: "class73",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2813",
    iri: "dbo:apskritis",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2409",
    iri: "dbo:sessionNumber",
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2315",
    iri: "dbo:cost",
    domain: "class99",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2001",
    iri: "dbo:soccerLeaguePromoted",
    domain: "class383",
    range: "class13",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2820",
    iri: "dbo:hairColor",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2099",
    iri: "dbo:tie",
    domain: "class772",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1810",
    iri: "dbo:otherFamilyBranch",
    domain: "class216",
    range: "class78",
    type: "owl:objectProperty"
  },
  {
    id: "property911",
    iri: "dbo:officerInCharge",
    domain: "class140",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1343",
    iri: "dbo:achievement",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2875",
    iri: "dbo:latestPreviewDate",
    domain: "class1",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2966",
    iri: "dbo:votesAgainst",
    domain: "class439",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1268",
    iri: "dbo:highestRegion",
    domain: "class206",
    range: "class245",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3751",
    iri: "dbo:alemmanicName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2362",
    iri: "dbo:note",
    domain: "class397",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2706",
    iri: "dbo:scotishName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3139",
    iri: "dbo:Planet/meanRadius",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1194",
    iri: "dbo:manufacturer",
    domain: "owl:Thing",
    range: "class588",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3465",
    iri: "dbo:endYearOfSales",
    domain: "class122",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2140",
    iri: "dbo:Galaxy/volume",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3532",
    iri: "dbo:imageFlag",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3076",
    iri: "dbo:impactFactor",
    comment: {
      "en": "The impact factor, often abbreviated IF, is a measure reflecting the average number of citations to articles published in science and social science journals."
    },
    domain: "class257",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2858",
    iri: "dbo:millSpan",
    domain: "class512",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3279",
    iri: "dbo:topSpeed",
    "attributes": [
      "functional"
    ],
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property918",
    iri: "dbo:service",
    domain: "class711",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property790",
    iri: "dbo:wilaya",
    domain: "class708",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1355",
    iri: "dbo:gaudiAward",
    comment: {
      "en": "Awards of the Catalan Academy of Cinema"
    },
    domain: "class565",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2927",
    iri: "dbo:numberOfMembersAsOf",
    domain: "class500",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2980",
    iri: "dbo:giniCoefficientAsOf",
    domain: "class245",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3551",
    iri: "dbo:accessDate",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1309",
    iri: "dbo:ceo",
    domain: "class588",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2020",
    iri: "dbo:cemetery",
    domain: "class466",
    range: "class337",
    type: "owl:objectProperty"
  },
  {
    id: "property3750",
    iri: "dbo:giniCoefficient",
    comment: {
      "en": "is a measure of the inequality of a distribution. It is commonly used as a measure of inequality of income or wealth."
    },
    domain: "class245",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1352",
    iri: "dbo:currentProduction",
    comment: {
      "en": "The current production running in the theatre."
    },
    domain: "class476",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1080",
    iri: "dbo:activity",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2983",
    iri: "dbo:registration",
    domain: "class711",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2219",
    iri: "dbo:Galaxy/density",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3169",
    iri: "dbo:visitorsPercentageChange",
    comment: {
      "en": "Percentage increase or decrease."
    },
    domain: "class99",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1975",
    iri: "dbo:frazioni",
    domain: "class708",
    range: "class245",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1754",
    iri: "dbo:aircraftBomber",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2840",
    iri: "dbo:widthQuote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2510",
    iri: "dbo:PopulatedPlace/populationMetroDensity",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3440",
    iri: "dbo:nflSeason",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3571",
    iri: "dbo:britishOpen",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3176",
    iri: "dbo:leadership",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3158",
    iri: "dbo:requirement",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1126",
    iri: "dbo:capitalPlace",
    domain: "class206",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2242",
    iri: "dbo:notableFeatures",
    domain: "class564",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3632",
    iri: "dbo:sharingOut",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2336",
    iri: "dbo:date",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2000",
    iri: "dbo:lowestPosition",
    domain: "owl:Thing",
    range: "class810",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2683",
    iri: "dbo:Spacecraft/cargoFuel",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2767",
    iri: "dbo:wheelbase",
    "attributes": [
      "functional"
    ],
    domain: "class811",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1481",
    iri: "dbo:publisher",
    domain: "owl:Thing",
    range: "class711",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3097",
    iri: "dbo:playerStatus",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3299",
    iri: "dbo:goalsInNationalTeam",
    domain: "class804",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2665",
    iri: "dbo:numberOfLaunches",
    domain: "class518",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3554",
    iri: "dbo:speedLimit",
    domain: "class74",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1752",
    iri: "dbo:features",
    domain: "class99",
    range: "class388",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2173",
    iri: "dbo:informationName",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2660",
    iri: "dbo:surfaceArea",
    domain: "class515",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2572",
    iri: "dbo:geolocDual",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2918",
    iri: "dbo:defeat",
    domain: "class772",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3319",
    iri: "dbo:filmPolskiId",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3088",
    iri: "dbo:identificationSymbol",
    domain: "class715",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3470",
    iri: "dbo:imageSize",
    comment: {
      "en": "the image size expressed in pixels"
    },
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3389",
    iri: "dbo:populationDate",
    domain: "class105",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3047",
    iri: "dbo:circumcised",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1317",
    iri: "dbo:associationOfLocalGovernment",
    domain: "class708",
    range: "class245",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3403",
    iri: "dbo:limit",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2999",
    iri: "dbo:fuelTypeName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3203",
    iri: "dbo:seniunija",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2188",
    iri: "dbo:infantMortality",
    domain: "class245",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2653",
    iri: "dbo:maximumArea",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3611",
    iri: "dbo:topic",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2692",
    iri: "dbo:dockedTime",
    domain: "class73",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1565",
    iri: "dbo:population",
    domain: "class245",
    range: "class632",
    type: "owl:objectProperty"
  },
  {
    id: "property1090",
    iri: "dbo:foresterDistrict",
    domain: "class105",
    range: "owl:Thing",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3282",
    iri: "dbo:numberOfRestaurants",
    domain: "class657",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3219",
    iri: "dbo:catholicPercentage",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3140",
    iri: "dbo:scotsName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3373",
    iri: "dbo:mgiid",
    comment: {
      "en": "Mouse Genomic Informatics ID"
    },
    domain: "class761",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2130",
    iri: "dbo:nationalRanking",
    domain: "class356",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property793",
    iri: "dbo:connotation",
    comment: {
      "en": "A meaning of a word or phrase that is suggested or implied, as opposed to a denotation, or literal meaning."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1333",
    iri: "dbo:leftChild",
    domain: "class206",
    range: "class206",
    "superproperty": [
      "property1699"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2890",
    iri: "dbo:sicilianName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1369",
    iri: "dbo:type",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3060",
    iri: "dbo:fuelCapacity",
    "attributes": [
      "functional"
    ],
    domain: "class811",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2946",
    iri: "dbo:number",
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2452",
    iri: "dbo:SpaceMission/missionDuration",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2926",
    iri: "dbo:previousName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3045",
    iri: "dbo:meshId",
    domain: "class91",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3058",
    iri: "dbo:anniversary",
    domain: "class715",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1306",
    iri: "dbo:wife",
    domain: "class654",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property3102",
    iri: "dbo:Spacecraft/apoapsis",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2931",
    iri: "dbo:heightAttack",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2374",
    iri: "dbo:wimbledonMixed",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2103",
    iri: "dbo:Stream/maximumDischarge",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3242",
    iri: "dbo:irishName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3326",
    iri: "dbo:blueSkiPisteNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1307",
    iri: "dbo:sourceConfluence",
    domain: "class634",
    range: "owl:Thing",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3719",
    iri: "dbo:minimumInclination",
    domain: "class336",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2519",
    iri: "dbo:formerName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1374",
    iri: "dbo:wikiPageWikiLink",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1329"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3018",
    iri: "dbo:subMunicipalityType",
    domain: "class109",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2418",
    iri: "dbo:dateLastUpdated",
    domain: "class290",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1577",
    iri: "dbo:originalStartPoint",
    domain: "class346",
    range: "class105",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3496",
    iri: "dbo:agglomerationPopulationTotal",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1326",
    iri: "dbo:wikiPageDisambiguates",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2431",
    iri: "dbo:grossDomesticProductPerPeople",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2213",
    iri: "dbo:tag",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3162",
    iri: "dbo:valvetrain",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1899",
    iri: "dbo:developer",
    domain: "class725",
    range: "class434",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1050",
    iri: "dbo:sourcePosition",
    domain: "owl:Thing",
    range: "class810",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1393",
    iri: "odesignp:isClassifiedBy",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1634",
      "property1527",
      "property1023",
      "property898",
      "property1348",
      "property1465",
      "property922",
      "property1419",
      "property920",
      "property1127",
      "property1408",
      "property1732",
      "property973",
      "property1667",
      "property1735",
      "property1820",
      "property1571",
      "property1978",
      "property1775",
      "property1071",
      "property1786",
      "property984",
      "property795",
      "property1564",
      "property1134",
      "property1544",
      "property797",
      "property1539",
      "property1025",
      "property1835",
      "property828",
      "property1223",
      "property1495",
      "property919",
      "property1369",
      "property1705",
      "property862",
      "property1402"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2486",
    iri: "dbo:discovery",
    domain: "class206",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2925",
    iri: "dbo:assetUnderManagement",
    domain: "class711",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1793",
    iri: "dbo:soccerTournamentOpeningSeason",
    domain: "class131",
    range: "class131",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3375",
    iri: "dbo:specialist",
    domain: "class356",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property945",
    iri: "dbo:channel",
    domain: "owl:Thing",
    range: "class381",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3023",
    iri: "dbo:identifiedBy",
    comment: {
      "en": "An identifier used to identify this thing."
    },
    domain: "owl:Thing",
    range: "xds:string",
    "subproperty": [
      "property2832",
      "property2841"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3562",
    iri: "dbo:victory",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1278",
    iri: "dbo:showJudge",
    domain: "class744",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3724",
    iri: "dbo:buildingEndYear",
    domain: "class99",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2072",
    iri: "dbo:firstProMatch",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3361",
    iri: "dbo:speciality",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1035",
    iri: "dbo:jointCommunity",
    domain: "class708",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2459",
    iri: "dbo:SpaceMission/stationEvaDuration",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1237",
    iri: "dbo:mouthCountry",
    domain: "class634",
    range: "class44",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2697",
    iri: "dbo:ncaaSeason",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3377",
    iri: "dbo:routeDirection",
    comment: {
      "en": "The general direction of the route (eg. North-South)."
    },
    domain: "class74",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3159",
    iri: "dbo:electionMajority",
    comment: {
      "en": "number of votes the office holder attained"
    },
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2405",
    iri: "dbo:area",
    comment: {
      "en": "The area of a owl:Thing in square metre."
    },
    domain: "owl:Thing",
    range: "xds:double",
    "equivalent": [
      "property2260",
      "property2943"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3727",
    iri: "dbo:spacewalkBegin",
    domain: "class185",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2743",
    iri: "dbo:shoeSize",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3605",
    iri: "dbo:dbnlCodeDutch",
    comment: {
      "en": "identifier in Dutch digital library (dbnl)"
    },
    domain: "class371",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2646",
    iri: "dbo:PopulatedPlace/populationUrbanDensity",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3683",
    iri: "dbo:abbeychurchBlessing",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1163",
    iri: "dbo:derivative",
    domain: "class597",
    range: "class597",
    "superproperty": [
      "property1658"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3399",
    iri: "dbo:statValue",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2481",
    iri: "dbo:nameAsOf",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property992",
    iri: "dbo:congressionalDistrict",
    domain: "class201",
    range: "owl:Thing",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2718",
    iri: "dbo:lastElectionDate",
    comment: {
      "en": "The last election date for the house."
    },
    domain: "class68",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2583",
    iri: "dbo:currentRecord",
    domain: "class123",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1713",
    iri: "dbo:senator",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property936",
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property960",
    iri: "dbo:basedOn",
    domain: "class388",
    range: "class388",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1703",
    iri: "dbo:constellation",
    domain: "class564",
    range: "owl:Thing",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property798",
    iri: "dbo:disciple",
    comment: {
      "en": "A person who learns from another, especially one who then teaches others.."
    },
    domain: "class565",
    range: "class565",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property733",
    iri: "dbo:educationPlace",
    domain: "class654",
    range: "class105",
    type: "owl:objectProperty"
  },
  {
    id: "property3505",
    iri: "dbo:jutsu",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3178",
    iri: "dbo:fileSize",
    comment: {
      "en": "size of a file or software"
    },
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3382",
    iri: "dbo:foalDate",
    "attributes": [
      "functional"
    ],
    domain: "class809",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3530",
    iri: "dbo:waistSize",
    domain: "class654",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2082",
    iri: "dbo:umbrellaTitle",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2540",
    iri: "dbo:groupCommemorated",
    comment: {
      "en": "Designates the category of people commemorated by a monument"
    },
    domain: "class459",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3283",
    iri: "dbo:bronzeMedalSingle",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2673",
    iri: "dbo:averageAnnualGeneration",
    "attributes": [
      "functional"
    ],
    domain: "class108",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2870",
    iri: "dbo:shipLaunch",
    domain: "class736",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property900",
    iri: "dbo:breeder",
    domain: "class809",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1640",
    iri: "dbo:stateDelegate",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2559",
    iri: "dbo:europeanChampionship",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2515",
    iri: "dbo:AutomobileEngine/displacement",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3221",
    iri: "dbo:genomeDB",
    comment: {
      "en": "the edition of the database used (i.e. hg19)"
    },
    domain: "class262",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property741",
    iri: "dbo:managerClub",
    domain: "class804",
    range: "class13",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2565",
    iri: "dbo:SpaceMission/lunarSurfaceTime",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1191",
    iri: "dbo:costumeDesigner",
    comment: {
      "en": "the person who is responsible for the film costume design"
    },
    domain: "class237",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2415",
    iri: "dbo:phonePrefixName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2153",
    iri: "dbo:analogChannel",
    domain: "class381",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3612",
    iri: "dbo:yearElevationIntoNobility",
    domain: "class216",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1936",
    iri: "dbo:mouthRegion",
    domain: "class634",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3335",
    iri: "dbo:teamTitle",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2278",
    iri: "dbo:alternativeName",
    comment: {
      "en": "Alternative naming of anything not being a Person (for which case foaf:nick should be used)."
    },
    domain: "owl:Thing",
    range: "xds:string",
    "subproperty": [
      "property2128"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2555",
    iri: "dbo:numberOfSeatsInParliament",
    comment: {
      "en": "number of seats in House of Commons-like parliaments"
    },
    domain: "class500",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3367",
    iri: "dbo:routeNumber",
    comment: {
      "en": "The number of the route."
    },
    domain: "class74",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2828",
    iri: "dbo:finalLostSingle",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1597",
    iri: "dbo:owningCompany",
    domain: "owl:Thing",
    range: "class711",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3385",
    iri: "dbo:declination",
    domain: "class133",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3590",
    iri: "dbo:volume",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3427",
    iri: "dbo:numberOfDistrict",
    domain: "class566",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2344",
    iri: "dbo:wins",
    domain: "class416",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3224",
    iri: "dbo:amateurNoContest",
    domain: "class772",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2477",
    iri: "dbo:longDistancePisteNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2104",
    iri: "dbo:centuryBreaks",
    comment: {
      "en": "number of breaks with 100 points and more"
    },
    domain: "class374",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2599",
    iri: "dbo:badGuy",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1736",
    iri: "dbo:sourceConfluenceCountry",
    domain: "class634",
    range: "class44",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2637",
    iri: "dbo:acquirementDate",
    domain: "class736",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3490",
    iri: "dbo:SpaceMission/cmpEvaDuration",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2772",
    iri: "dbo:absoluteMagnitude",
    domain: "class384",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2856",
    iri: "dbo:managerYears",
    domain: "class804",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2908",
    iri: "dbo:filmRuntime",
    domain: "class237",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property756",
    iri: "dbo:geneLocation",
    domain: "class813",
    range: "class262",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3739",
    iri: "dbo:Canal/originalMaximumBoatLength",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2209",
    iri: "dbo:casSupplemental",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property785",
    iri: "dbo:timeZone",
    domain: "class105",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2750",
    iri: "dbo:volcanicType",
    domain: "class206",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1855",
    iri: "dbo:restingPlacePosition",
    domain: "class654",
    range: "class810",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1794",
    iri: "dbo:land",
    domain: "class105",
    range: "class105",
    type: "owl:objectProperty"
  },
  {
    id: "property2034",
    iri: "dbo:percentage",
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property3507",
    iri: "dbo:gameModus",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1334",
    iri: "dbo:genus",
    comment: {
      "en": "A rank in the classification of organisms, below family and above species; a taxon at that rank"
    },
    domain: "class271",
    range: "owl:Thing",
    "superproperty": [
      "property1658"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2791",
    iri: "dbo:commissionerDate",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3245",
    iri: "dbo:activeYearsStartYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2179",
    iri: "dbo:seasonManager",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3533",
    iri: "dbo:lastFlightEndDate",
    domain: "class221",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2113",
    iri: "dbo:army",
    comment: {
      
    },
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2516",
    iri: "dbo:presidentRegionalCouncilMandate",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3731",
    iri: "dbo:arabicName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1270",
    iri: "dbo:rector",
    domain: "class207",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3697",
    iri: "dbo:vehiclesPerDay",
    domain: "class74",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2543",
    iri: "dbo:istat",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1015",
    iri: "dbo:lake",
    domain: "class105",
    range: "class316",
    "superproperty": [
      "property1699"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3432",
    iri: "dbo:dissolved",
    domain: "class393",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2011",
    iri: "dbo:hasVariant",
    comment: {
      "en": "variant or variation, for example all variations of a color"
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property823"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3332",
    iri: "dbo:editorTitle",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1150",
    iri: "dbo:friend",
    domain: "class654",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property3499",
    iri: "dbo:Canal/maximumBoatLength",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2413",
    iri: "dbo:numberOfHouses",
    comment: {
      "en": "Count of the houses in the Protected Area"
    },
    domain: "class225",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2963",
    iri: "dbo:numberOfSilverMedalsWon",
    domain: "class453",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2591",
    iri: "dbo:shoots",
    domain: "class351",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3255",
    iri: "dbo:height",
    "attributes": [
      "functional"
    ],
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1384",
    iri: "dbo:alpsSupergroup",
    comment: {
      "en": "the Alps supergroup to which the mountain belongs, according to the SOIUSA classification"
    },
    domain: "class327",
    range: "class266",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3654",
    iri: "dbo:localization",
    domain: "class206",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1465",
    iri: "dbo:class",
    domain: "class518",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2889",
    iri: "dbo:firstLaunch",
    domain: "class268",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3471",
    iri: "dbo:Planet/density",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1509",
    iri: "dbo:countryOrigin",
    domain: "class580",
    range: "class44",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1315",
    iri: "dbo:person",
    domain: "class125",
    range: "class654",
    "superproperty": [
      "property1932"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3258",
    iri: "dbo:missions",
    domain: "class221",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2429",
    iri: "dbo:originalTitle",
    comment: {
      "en": "The original title of the work, most of the time in the original language as well"
    },
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2169",
    iri: "dbo:rankAgreement",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2613",
    iri: "dbo:modelEndDate",
    domain: "class518",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1477",
    iri: "dbo:language",
    domain: "owl:Thing",
    range: "class361",
    "equivalent": [
      "property1027",
      "property1755"
    ],
    "subproperty": [
      "property1368"
    ],
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3464",
    iri: "dbo:numberOfSportsEvents",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1470",
    iri: "dbo:creativeDirector",
    domain: "class744",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3606",
    iri: "dbo:populationAsOf",
    domain: "class245",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2894",
    iri: "dbo:rolandGarrosSingle",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2630",
    iri: "dbo:Stream/discharge",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3701",
    iri: "dbo:distanceToEdinburgh",
    domain: "class708",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2812",
    iri: "dbo:frenchName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3133",
    iri: "dbo:AutomobileEngine/length",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1301",
    iri: "dbo:personFunction",
    domain: "class654",
    range: "class125",
    "superproperty": [
      "property1474"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1321",
    iri: "dbo:filmFareAward",
    domain: "class565",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3444",
    iri: "dbo:lethalOnRabbits",
    domain: "class703",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1729",
    iri: "dbo:buriedPlace",
    comment: {
      "en": "The place where the person has been buried."
    },
    domain: "class654",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2196",
    iri: "dbo:ranking",
    domain: "class356",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2574",
    iri: "dbo:numberOfRockets",
    domain: "class528",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2941",
    iri: "dbo:capacity",
    domain: "class393",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1105",
    iri: "dbo:sportGoverningBody",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2826",
    iri: "dbo:imposedDanseCompetition",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2742",
    iri: "dbo:shareDate",
    domain: "class381",
    range: "xds:gYearMonth",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2977",
    iri: "dbo:port2UndockingDate",
    domain: "class73",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1408",
    iri: "dbo:genre",
    comment: {
      "en": "The genre of the thing (music group, film, etc.)"
    },
    domain: "owl:Thing",
    range: "class618",
    "subproperty": [
      "property1775"
    ],
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1186",
    iri: "dbo:mouthPosition",
    domain: "class634",
    range: "class810",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1934",
    iri: "dbo:hometown",
    domain: "class434",
    range: "class708",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2264",
    iri: "dbo:effectiveRadiatedPower",
    domain: "class381",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property973",
    iri: "dbo:humanDevelopmentIndexRankingCategory",
    domain: "class245",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2585",
    iri: "dbo:pisciculturalPopulation",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1988",
    iri: "dbo:firstDriverTeam",
    domain: "class793",
    range: "class13",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3295",
    iri: "dbo:projectBudgetFunding",
    comment: {
      "en": "The part of the project budget that is funded by the Organistaions given in the \"FundedBy\" property."
    },
    domain: "class139",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1298",
    iri: "dbo:administrativeHeadCity",
    comment: {
      "en": "city where stand the administrative power"
    },
    domain: "class245",
    range: "class628",
    "subproperty": [
      "property942"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1456",
    iri: "dbo:championInMixedDouble",
    comment: {
      "en": "winner of a competition in the mixed double session (as in tennis)"
    },
    domain: "class436",
    range: "class416",
    "superproperty": [
      "property1000",
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1693",
    iri: "dbo:politicalLeader",
    domain: "class105",
    range: "class125",
    type: "owl:objectProperty"
  },
  {
    id: "property781",
    iri: "dbo:championInSingleFemale",
    comment: {
      "en": "winner of a competition in the single female session, to distinguish from the double session (as in tennis)"
    },
    domain: "class436",
    range: "class416",
    "superproperty": [
      "property799",
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2375",
    iri: "dbo:endOccupation",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2640",
    iri: "dbo:winterTemperature",
    domain: "class708",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2603",
    iri: "dbo:isCityState",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2265",
    iri: "dbo:callsignMeaning",
    comment: {
      "en": "The out written call sign."
    },
    domain: "class381",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3055",
    iri: "dbo:callSign",
    comment: {
      "en": "A call sign is not the name of a broadcaster! In broadcasting and radio communications, a call sign (also known as a call name or call letters, or abbreviated as a call) is a unique designation for a transmitting station."
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2143",
    iri: "dbo:totalTravellers",
    domain: "class268",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3568",
    iri: "dbo:rotationPeriod",
    domain: "class515",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2978",
    iri: "dbo:maoriName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3154",
    iri: "dbo:sizeBlazon",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2251",
    iri: "dbo:hipSize",
    domain: "class654",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2573",
    iri: "dbo:firstAscent",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3541",
    iri: "dbo:numberOfAlbums",
    comment: {
      "en": "the total number of albums released by the musical artist"
    },
    domain: "class281",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3443",
    iri: "dbo:allcinemaId",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2300",
    iri: "dbo:retirementDate",
    "attributes": [
      "functional"
    ],
    domain: "class654",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property102",
    domain: "class526",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property888",
    iri: "dbo:usedInWar",
    comment: {
      "en": "wars that were typical for the usage of a weapon"
    },
    domain: "class75",
    range: "class253",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property103",
    domain: "class44",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property100",
    domain: "class622",
    range: "class220",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property101",
    domain: "class617",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2916",
    iri: "dbo:floorArea",
    domain: "class519",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2676",
    iri: "dbo:yearOfElectrification",
    comment: {
      "en": "Year station was electrified, if not previously at date of opening."
    },
    domain: "class395",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3087",
    iri: "dbo:serviceStartDate",
    domain: "class752",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1707",
    iri: "dbo:iftaAward",
    domain: "class540",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1809",
    iri: "dbo:veneratedIn",
    domain: "class390",
    range: "class588",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3103",
    iri: "dbo:numberOfIsland",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2995",
    iri: "dbo:openingDate",
    domain: "class99",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2227",
    iri: "dbo:time",
    comment: {
      
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3322",
    iri: "dbo:sameName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1133",
    iri: "dbo:designCompany",
    domain: "class518",
    range: "class711",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1921",
    iri: "dbo:draftTeam",
    domain: "class416",
    range: "class13",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2998",
    iri: "dbo:ableToGrind",
    domain: "class512",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2282",
    iri: "dbo:maximumTemperature",
    domain: "class515",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1259",
    iri: "dbo:thirdDriverCountry",
    domain: "class793",
    range: "class44",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2368",
    iri: "dbo:amateurYear",
    domain: "class682",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2289",
    iri: "dbo:scale",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1857",
    iri: "dbo:superTribus",
    domain: "class271",
    range: "class271",
    "superproperty": [
      "property832"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3594",
    iri: "dbo:membershipAsOf",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3472",
    iri: "dbo:lastSeason",
    domain: "class317",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2597",
    iri: "dbo:populationPctWomen",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property763",
    iri: "dbo:nationalAffiliation",
    domain: "class500",
    range: "owl:Thing",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2328",
    iri: "dbo:eptFinalTable",
    domain: "class437",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1411",
    iri: "dbo:notableIdea",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2880",
    iri: "dbo:discharge",
    domain: "class518",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2131",
    iri: "dbo:zipCode",
    "attributes": [
      "functional"
    ],
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1650",
    iri: "dbo:nationalFilmAward",
    domain: "class540",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3735",
    iri: "dbo:productionStartDate",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3388",
    iri: "dbo:dutchName",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3260",
    iri: "dbo:bridgeCarries",
    comment: {
      "en": "Type of vehicles the bridge carries."
    },
    domain: "class749",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1395",
    iri: "dbo:projectParticipant",
    comment: {
      "en": "A participating organisation of the project."
    },
    domain: "class139",
    range: "class588",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property850",
    iri: "dbo:citizenship",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3376",
    iri: "dbo:majorityLeader",
    comment: {
      "en": "number of office holder"
    },
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2321",
    iri: "dbo:genereviewsname",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3569",
    iri: "dbo:carNumber",
    domain: "class317",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1916",
    iri: "dbo:aircraftInterceptor",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2478",
    iri: "dbo:currentStatus",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property771",
    iri: "dbo:booster",
    domain: "class185",
    range: "class580",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2369",
    iri: "dbo:percentageFat",
    comment: {
      "en": "how much fat (in relative terms) does this unity of food contain"
    },
    domain: "class578",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1177",
    iri: "dbo:commandStructure",
    domain: "class715",
    range: "class715",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1607",
    iri: "dbo:largestCity",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property858",
    iri: "dbo:geolocDepartment",
    domain: "class708",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2189",
    iri: "dbo:ward",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2186",
    iri: "dbo:skiLift",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2777",
    iri: "dbo:quotation",
    comment: {
      "en": "A quotation is the repetition of one expression as part of another one, particularly when the quoted expression is well-known or explicitly attributed by citation to its original source.",
      "es": "En su acepci\u00f3n m\u00e1s amplia, una cita es un recurso ret\u00f3rico que consiste en reproducir un fragmento de una expresi\u00f3n humana respetando su formulaci\u00f3n original."
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3229",
    iri: "dbo:Galaxy/maximumTemperature",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3419",
    iri: "dbo:redSkiPisteNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property910",
    iri: "dbo:militaryRank",
    comment: {
      "en": "The highest rank achieved by a person."
    },
    domain: "class752",
    range: "owl:Thing",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2121",
    iri: "dbo:purchasingPowerParityRank",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1522",
    iri: "dbo:promotion",
    domain: "class422",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2067",
    iri: "dbo:lchfDraftYear",
    domain: "class351",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3253",
    iri: "dbo:GrandPrix/course",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2837",
    iri: "dbo:orderDate",
    domain: "class736",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3708",
    iri: "dbo:numberOfPads",
    domain: "class336",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2149",
    iri: "dbo:Planet/apoapsis",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1653",
    iri: "dbo:firstPopularVote",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1852",
    iri: "dbo:highestPoint",
    domain: "class708",
    range: "class105",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3138",
    iri: "dbo:totalTracks",
    comment: {
      "en": "the total number of tracks contained in the album"
    },
    domain: "class135",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3035",
    iri: "dbo:frequentlyUpdated",
    domain: "class1",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3197",
    iri: "dbo:Planet/periapsis",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1882",
    iri: "dbo:meetingBuilding",
    domain: "class68",
    range: "class519",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3707",
    iri: "dbo:oversight",
    domain: "class356",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3454",
    iri: "dbo:Canal/originalMaximumBoatBeam",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3528",
    iri: "dbo:dateBudget",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3441",
    iri: "dbo:wsopItm",
    domain: "class437",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1511",
    iri: "dbo:currentPartner",
    domain: "class698",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2470",
    iri: "dbo:depth",
    domain: "class105",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3071",
    iri: "dbo:activeYearsEndDate",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2755",
    iri: "dbo:numberOfParticipatingFemaleAthletes",
    domain: "class250",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2434",
    iri: "dbo:numberOfPostgraduateStudents",
    domain: "class140",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3588",
    iri: "dbo:activeYearsStartDateMgr",
    domain: "class654",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1462",
    iri: "dbo:largestSettlement",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1990",
    iri: "dbo:firstOwner",
    domain: "owl:Thing",
    range: "class434",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2900",
    iri: "dbo:nutsCode",
    comment: {
      "en": "Nomenclature of Territorial Units for Statistics (NUTS) is a geocode  standard for referencing the subdivisions of countries  for statistical purposes. The standard is developed and regulated by the European Union, and thus only covers the member states of the EU in detail."
    },
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1767",
    iri: "dbo:associatedRocket",
    domain: "class336",
    range: "class580",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1111",
    iri: "dbo:aircraftPatrol",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3746",
    iri: "dbo:internationalPhonePrefix",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property186",
    domain: "class367",
    range: "class654",
    type: "owl:disjointWith"
  },
  {
    id: "property187",
    domain: "class725",
    range: "class654",
    type: "owl:disjointWith"
  },
  {
    id: "property184",
    domain: "class497",
    range: "class654",
    type: "owl:disjointWith"
  },
  {
    id: "property185",
    domain: "class342",
    range: "class654",
    type: "owl:disjointWith"
  },
  {
    id: "property188",
    domain: "class65",
    range: "class813",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2785",
    iri: "dbo:visitorsPerDay",
    domain: "class99",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property189",
    domain: "class382",
    range: "class813",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3252",
    iri: "dbo:skiTow",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property182",
    domain: "class471",
    range: "class654",
    type: "owl:disjointWith"
  },
  {
    id: "property183",
    domain: "class190",
    range: "class654",
    type: "owl:disjointWith"
  },
  {
    id: "property180",
    domain: "class519",
    range: "class654",
    type: "owl:disjointWith"
  },
  {
    id: "property181",
    domain: "class327",
    range: "class654",
    type: "owl:disjointWith"
  },
  {
    id: "property3614",
    iri: "dbo:eloRecord",
    domain: "class661",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1416",
    iri: "dbo:uses",
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1019"
    ],
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3009",
    iri: "dbo:davisCup",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property808",
    iri: "dbo:currentTeamManager",
    domain: "class654",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property2023",
    iri: "dbo:presidentRegionalCouncil",
    domain: "class602",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1560",
    iri: "dbo:livingPlace",
    domain: "class654",
    range: "class105",
    type: "owl:objectProperty"
  },
  {
    id: "property176",
    domain: "class771",
    range: "class654",
    type: "owl:disjointWith"
  },
  {
    id: "property173",
    domain: "class539",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property174",
    domain: "class573",
    range: "class654",
    type: "owl:disjointWith"
  },
  {
    id: "property1878",
    iri: "dbo:splitFromParty",
    domain: "class500",
    range: "class500",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property179",
    domain: "class518",
    range: "class654",
    type: "owl:disjointWith"
  },
  {
    id: "property1695",
    iri: "dbo:managementCountry",
    domain: "class206",
    range: "class44",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2715",
    iri: "dbo:hsvCoordinateValue",
    domain: "class212",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1282",
    iri: "dbo:series",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2175",
    iri: "dbo:penaltiesTeamB",
    domain: "class405",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1102",
    iri: "dbo:winterAppearances",
    domain: "class514",
    range: "class514",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2489",
    iri: "dbo:deliveryDate",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property171",
    domain: "class493",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2353",
    iri: "dbo:dateAct",
    domain: "class346",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property172",
    domain: "class204",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2177",
    iri: "dbo:penaltiesTeamA",
    domain: "class405",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property170",
    domain: "class364",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1880",
    iri: "dbo:metropolitanBorough",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2860",
    iri: "dbo:description",
    comment: {
      "en": "Short description of a person"
    },
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property159",
    domain: "class756",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3754",
    iri: "dbo:refcul",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1089",
    iri: "dbo:spokenIn",
    domain: "class361",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property164",
    domain: "class399",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2784",
    iri: "dbo:fight",
    domain: "class772",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property165",
    domain: "class254",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property162",
    domain: "class335",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property163",
    domain: "class368",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property168",
    domain: "class171",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property169",
    domain: "class299",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property166",
    domain: "class535",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property167",
    domain: "class445",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property160",
    domain: "class357",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3250",
    iri: "dbo:mouthElevation",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property161",
    domain: "class144",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3542",
    iri: "dbo:scottishName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2390",
    iri: "dbo:registryNumber",
    comment: {
      "en": "Identification of the registry a document is in"
    },
    domain: "class290",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3028",
    iri: "dbo:hraState",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2181",
    iri: "dbo:clothSize",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1835",
    iri: "dbo:satScore",
    comment: {
      "en": "most recent average SAT scores"
    },
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property148",
    domain: "class200",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property149",
    domain: "class347",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property737",
    iri: "dbo:gameEngine",
    domain: "class543",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property153",
    domain: "class731",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property154",
    domain: "class163",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property151",
    domain: "class800",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property152",
    domain: "class127",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property157",
    domain: "class401",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property158",
    domain: "class812",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property155",
    domain: "class510",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property156",
    domain: "class4",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1135",
    iri: "dbo:elementAbove",
    comment: {
      "ru": "??????? ????? ??? ??????? ????????? ? ??????? ?.?.??????????",
      "en": "element placed above to current element in table of D.I.Mendeleev"
    },
    domain: "owl:Thing",
    range: "class703",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1667",
    iri: "dbo:industry",
    domain: "class711",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property150",
    domain: "class752",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3457",
    iri: "dbo:dec",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1980",
    iri: "dbo:dfE",
    comment: {
      "en": "Department for Education (UK) number of a school in England or Wales"
    },
    domain: "class356",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property1351",
    iri: "dbo:naacpImageAward",
    domain: "class540",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2726",
    iri: "dbo:lastAirDate",
    comment: {
      "en": "The date on which the broadcaster made its last broadcast."
    },
    domain: "class381",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property139",
    domain: "class406",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property137",
    domain: "class726",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2960",
    iri: "dbo:lunarOrbitTime",
    domain: "class185",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property138",
    domain: "class181",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2244",
    iri: "dbo:otherWins",
    domain: "class374",
    range: "xds:nonNegativeInteger",
    "superproperty": [
      "property3682"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property142",
    domain: "class494",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1276",
    iri: "dbo:horseRidingDiscipline",
    domain: "class416",
    range: "class412",
    type: "owl:objectProperty"
  },
  {
    id: "property3033",
    iri: "dbo:numberOfEpisodes",
    domain: "class744",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3714",
    iri: "dbo:wingArea",
    domain: "class528",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property143",
    domain: "class385",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property140",
    domain: "class570",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property141",
    domain: "class348",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property146",
    domain: "class644",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2216",
    iri: "dbo:theology",
    domain: "class463",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property147",
    domain: "class398",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property144",
    domain: "class619",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property145",
    domain: "class523",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1903",
    iri: "dbo:affiliation",
    domain: "class588",
    range: "class588",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2275",
    iri: "dbo:Galaxy/meanRadius",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2984",
    iri: "dbo:olympicGamesSilver",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2364",
    iri: "dbo:ladinName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1131",
    iri: "dbo:stylisticOrigin",
    domain: "class597",
    range: "class597",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property128",
    domain: "class28",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2529",
    iri: "dbo:dateUnveiled",
    comment: {
      "en": "Designates the unveiling date"
    },
    domain: "class459",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property129",
    domain: "class416",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property792",
    iri: "dbo:startReign",
    domain: "class654",
    range: "class47",
    type: "owl:objectProperty"
  },
  {
    id: "property126",
    domain: "class783",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3125",
    iri: "dbo:closingYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property127",
    domain: "class565",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property131",
    domain: "class614",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property132",
    domain: "class215",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1181",
    iri: "dbo:aircraftHelicopterObservation",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property130",
    domain: "class372",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2855",
    iri: "dbo:titleDouble",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property135",
    domain: "class753",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1022",
    iri: "dbo:component",
    domain: "class451",
    range: "class455",
    "superproperty": [
      "property849"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property136",
    domain: "class723",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1011",
    iri: "odesignp:hasSetting",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property902",
      "property2029",
      "property1262",
      "property1858",
      "property780",
      "property1958"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property133",
    domain: "class700",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property134",
    domain: "class469",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2379",
    iri: "dbo:Weapon/length",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2794",
    iri: "dbo:specialTrial",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2210",
    iri: "dbo:bronzeMedalMixed",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2699",
    iri: "dbo:facultySize",
    comment: {
      "en": "number of faculty members"
    },
    domain: "class207",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1056",
    iri: "dbo:highestPlace",
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2028",
    iri: "dbo:firstLaunchRocket",
    domain: "class336",
    range: "class580",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2021",
    iri: "dbo:firstDriver",
    domain: "class793",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3167",
    iri: "dbo:office",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3480",
    iri: "dbo:dcc",
    comment: {
      "en": "The Dewey Decimal Classification is a proprietary system of library classification developed by Melvil Dewey in 1876."
    },
    domain: "class786",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1002",
    iri: "dbo:raceTrack",
    domain: "class436",
    range: "class605",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1006",
    iri: "dbo:portrayer",
    domain: "class385",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2391",
    iri: "dbo:politicalFunction",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property117",
    domain: "class653",
    range: "class540",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3762",
    iri: "dbo:orderInOffice",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property118",
    domain: "class409",
    range: "class662",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property115",
    domain: "class261",
    range: "class568",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property116",
    domain: "class739",
    range: "class540",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1443",
    iri: "dbo:trustee",
    domain: "class588",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3208",
    iri: "dbo:gaelicName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2593",
    iri: "dbo:municipalityRenamedTo",
    domain: "class722",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property119",
    domain: "class346",
    range: "class461",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property120",
    domain: "class634",
    range: "class461",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property121",
    domain: "class152",
    range: "class618",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1341",
    iri: "dbo:reffBourgmestre",
    domain: "class708",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property124",
    domain: "class354",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property125",
    domain: "class474",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2240",
    iri: "dbo:power",
    domain: "class385",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property122",
    domain: "class597",
    range: "class618",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property123",
    domain: "class448",
    range: "class654",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2508",
    iri: "dbo:tournamentOfChampions",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2340",
    iri: "dbo:rebuildingDate",
    domain: "class99",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3329",
    iri: "dbo:millsCodeNLVerdwenen",
    domain: "class512",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2745",
    iri: "dbo:causalties",
    domain: "class253",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property968",
    iri: "dbo:countryWithFirstAstronaut",
    domain: "class268",
    range: "class44",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property106",
    domain: "class355",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1375",
    iri: "dbo:sourceState",
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property107",
    domain: "class206",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property104",
    domain: "class566",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property105",
    domain: "class162",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property108",
    domain: "class737",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property109",
    domain: "class441",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3180",
    iri: "dbo:grindingCapability",
    comment: {
      "en": "grinding capability for Mills"
    },
    domain: "class512",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property110",
    domain: "class248",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2695",
    iri: "dbo:numberOfBronzeMedalsWon",
    domain: "class453",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2746",
    iri: "dbo:artificialSnowArea",
    domain: "class105",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property113",
    domain: "class504",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property114",
    domain: "class612",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property111",
    domain: "class708",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property112",
    domain: "class601",
    range: "class245",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1910",
    iri: "dbo:vicePrimeMinister",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3672",
    iri: "dbo:dissolutionYear",
    domain: "class245",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1532",
    iri: "dbo:relation",
    domain: "class654",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1262",
    iri: "dbo:sales",
    comment: {
      "en": "This property holds an intermediate node of the type Sales."
    },
    domain: "owl:Thing",
    range: "class122",
    "superproperty": [
      "property1011"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1660",
    iri: "dbo:coverArtist",
    comment: {
      "en": "Cover artist"
    },
    domain: "class786",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3346",
    iri: "dbo:ofsCode",
    domain: "class708",
    range: "xds:string",
    "superproperty": [
      "property2674"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3434",
    iri: "dbo:licenceLetter",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1400",
    iri: "dbo:grammyAward",
    domain: "class565",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2498",
    iri: "dbo:latestReleaseVersion",
    domain: "class1",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2662",
    iri: "dbo:highestBreak",
    domain: "class374",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2829",
    iri: "dbo:bowlRecord",
    domain: "class123",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property891",
    iri: "dbo:mouthState",
    domain: "class634",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2309",
    iri: "dbo:activeYear",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property933",
    iri: "dbo:sport",
    domain: "owl:Thing",
    range: "class69",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3305",
    iri: "dbo:startOccupation",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1886",
    iri: "dbo:leaderParty",
    domain: "class245",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3460",
    iri: "dbo:locusSupplementaryData",
    domain: "class496",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3487",
    iri: "dbo:giniCoefficientRanking",
    domain: "class245",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1040",
    iri: "dbo:order",
    domain: "class271",
    range: "owl:Thing",
    "superproperty": [
      "property823"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2125",
    iri: "dbo:draftYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2747",
    iri: "dbo:reservations",
    comment: {
      "en": "Are reservations required for the establishment or event?"
    },
    domain: "class126",
    range: "xds:boolean",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1424",
    iri: "dbo:dam",
    domain: "class809",
    range: "class809",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2986",
    iri: "dbo:mainspan",
    domain: "class749",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1033",
    iri: "dbo:choreographer",
    domain: "class698",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3495",
    iri: "dbo:day",
    domain: "class708",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2907",
    iri: "dbo:virtualChannel",
    domain: "class381",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2869",
    iri: "dbo:matchPoint",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1463",
    iri: "dbo:lowestState",
    domain: "class206",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1634",
    iri: "dbo:biome",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2493",
    iri: "dbo:feature",
    domain: "class385",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property959",
    iri: "dbo:crewMember",
    domain: "class185",
    range: "class28",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3037",
    iri: "dbo:tamazightName",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3510",
    iri: "dbo:ulanId",
    comment: {
      "en": "ULAN is an online database using a controlled vocabulary currently containing around 293,000 names and other information about artists. Names in ULAN may include given names, pseudonyms, variant spellings, names in multiple languages, and names that have changed over time (e.g., married names)."
    },
    domain: "class565",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1652",
    iri: "dbo:musicBy",
    domain: "class305",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1876",
    iri: "dbo:aircraftHelicopterUtility",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1539",
    iri: "dbo:programmeFormat",
    comment: {
      "en": "The programming format describes the overall content broadcast on a radio or television station."
    },
    domain: "class381",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1719",
    iri: "dbo:teachingStaff",
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3063",
    iri: "dbo:asiaChampionship",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1368",
    iri: "dbo:originalLanguage",
    comment: {
      "en": "The original language of the work."
    },
    domain: "class388",
    range: "class361",
    "superproperty": [
      "property1477",
      "property1124"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2575",
    iri: "dbo:managerTitle",
    domain: "class393",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3249",
    iri: "dbo:numberOfCantons",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3324",
    iri: "dbo:millsCodeBE",
    comment: {
      "en": "mills code from the Belgian database on mills"
    },
    domain: "class512",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3618",
    iri: "dbo:tournamentRecord",
    domain: "class123",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1498",
    iri: "dbo:largestMetro",
    domain: "class708",
    range: "class245",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1330",
    iri: "dbo:mastersWins",
    domain: "class654",
    range: "class47",
    type: "owl:objectProperty"
  },
  {
    id: "property3205",
    iri: "dbo:backhand",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1482",
    iri: "dbo:winsAtMajors",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3104",
    iri: "dbo:sequenceNumber",
    domain: "class132",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3655",
    iri: "dbo:buildingStartYear",
    domain: "class99",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2736",
    iri: "dbo:bnfId",
    comment: {
      "en": "Authority data of people listed in the general catalogue of the National Library of France"
    },
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2657",
    iri: "dbo:averageDepth",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1686",
    iri: "dbo:painter",
    domain: "class729",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2833",
    iri: "dbo:releaseDate",
    domain: "class388",
    range: "xds:date",
    "subproperty": [
      "property2439"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1564",
    iri: "dbo:nisCode",
    comment: {
      "en": "Indexing code used by the Belgium National Statistical Institute to identify populated places."
    },
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1747",
    iri: "dbo:governmentPlace",
    domain: "class206",
    range: "class245",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2649",
    iri: "dbo:careerPoints",
    domain: "class317",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3171",
    iri: "dbo:orientation",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3354",
    iri: "dbo:firstLaunchDate",
    domain: "class336",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2285",
    iri: "dbo:signName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1082",
    iri: "dbo:principalEngineer",
    domain: "class346",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1479",
    iri: "dbo:dubber",
    comment: {
      "en": "the person who dubs another person e.g. an actor or a fictional character in movies"
    },
    domain: "class654",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1499",
    iri: "dbo:primaryFuelType",
    domain: "class108",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property3085",
    iri: "dbo:atcSuffix",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1364",
    iri: "dbo:wikiPageEditLink",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property3556",
    iri: "dbo:quebecerTitle",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property951",
    iri: "dbo:populationPlace",
    comment: {
      "en": "a place were members of an ethnic group are living"
    },
    domain: "class264",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1279",
    iri: "dbo:torchBearer",
    domain: "class250",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2376",
    iri: "dbo:prominence",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3626",
    iri: "dbo:numberOfSpeakers",
    domain: "class361",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3024",
    iri: "dbo:cargoFuel",
    domain: "class73",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3098",
    iri: "dbo:satellite",
    domain: "class515",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1055",
    iri: "dbo:patron",
    domain: "class715",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1986",
    iri: "dbo:lastLaunchRocket",
    domain: "class336",
    range: "class580",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1529",
    iri: "dbo:spokesperson",
    domain: "class500",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2921",
    iri: "dbo:schoolCode",
    domain: "class356",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3110",
    iri: "dbo:onChromosome",
    comment: {
      "en": "the number corresponding to the chromosome on which the gene is located"
    },
    domain: "class262",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2806",
    iri: "dbo:demolitionDate",
    comment: {
      "en": "The date the building was demolished."
    },
    domain: "class99",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1402",
    iri: "dbo:webcast",
    comment: {
      "en": "The URL to the webcast of the Thing."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3610",
    iri: "dbo:averageClassSize",
    domain: "class356",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2823",
    iri: "dbo:foot",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3240",
    iri: "dbo:destructionDate",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3310",
    iri: "dbo:allegiance",
    comment: {
      "en": "The country or other power the person served. Multiple countries may be indicated together with the corresponding dates. This field should not be used to indicate a particular service branch, which is better indicated by the branch field."
    },
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1919",
    iri: "dbo:executiveProducer",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1221",
    iri: "dbo:operatingSystem",
    domain: "class1",
    range: "owl:Thing",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2380",
    iri: "dbo:numberOfOrbits",
    domain: "class185",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2064",
    iri: "dbo:proSince",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2793",
    iri: "dbo:rank",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2825",
    iri: "dbo:programCost",
    domain: "class528",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1890",
    iri: "dbo:source",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1524",
    iri: "dbo:hasJunctionWith",
    domain: "class346",
    range: "class346",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3223",
    iri: "dbo:historicalMap",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1982",
    iri: "dbo:altitude",
    domain: "class105",
    range: "class235",
    type: "owl:objectProperty"
  },
  {
    id: "property2922",
    iri: "dbo:wordBefore",
    domain: "class44",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3577",
    iri: "dbo:otherLanguage",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1818",
    iri: "dbo:superFamily",
    domain: "class271",
    range: "class369",
    type: "owl:objectProperty"
  },
  {
    id: "property2685",
    iri: "dbo:chEBI",
    comment: {
      "en": "A unique identifier for the drug in the Chemical Entities of Biological Interest (ChEBI) ontology"
    },
    domain: "class46",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property853",
    iri: "dbo:wikiPageRedirects",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property1992",
    iri: "dbo:designer",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2594",
    iri: "dbo:outskirts",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2756",
    iri: "dbo:firstPublicationDate",
    comment: {
      "en": "Date of the first publication."
    },
    domain: "class633",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1471",
    iri: "dbo:vein",
    domain: "class455",
    range: "class490",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property198",
    domain: "class705",
    range: "class402",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2899",
    iri: "dbo:probowlPick",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property195",
    domain: "class270",
    range: "class459",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property196",
    domain: "class458",
    range: "class459",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property199",
    domain: "class303",
    range: "class431",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2832",
    iri: "dbo:documentNumber",
    comment: {
      "en": "Identification a document within a particular registry"
    },
    domain: "class290",
    range: "xds:string",
    "superproperty": [
      "property3023"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2958",
    iri: "dbo:Spacecraft/cargoGas",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property190",
    domain: "class43",
    range: "class192",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property193",
    domain: "class169",
    range: "class192",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property194",
    domain: "class426",
    range: "class440",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property191",
    domain: "class131",
    range: "class192",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property192",
    domain: "class308",
    range: "class192",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3002",
    iri: "dbo:GeopoliticalOrganisation/areaMetro",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3501",
    iri: "dbo:beatifiedDate",
    domain: "class390",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2060",
    iri: "dbo:lieutenancy",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1072",
    iri: "dbo:head",
    domain: "class207",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2841",
    iri: "dbo:hasNationalArchivesIdentifier",
    comment: {
      "en": "The National Archives Identifier (http://www.archives.gov/research/search/help/search-tips.html#descriptionid)"
    },
    domain: "class290",
    range: "xds:string",
    "superproperty": [
      "property3023"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3749",
    iri: "dbo:retired",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1617",
    iri: "dbo:student",
    domain: "class654",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2776",
    iri: "dbo:departmentCode",
    domain: "class722",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1881",
    iri: "dbo:honours",
    domain: "class434",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2308",
    iri: "dbo:maximumBoatBeam",
    domain: "class346",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property884",
    iri: "dbo:mountainRange",
    domain: "class327",
    range: "class266",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1854",
    iri: "dbo:coemperor",
    domain: "class654",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property1325",
    iri: "dbo:assembly",
    domain: "class518",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2556",
    iri: "dbo:code",
    domain: "owl:Thing",
    range: "xds:string",
    "subproperty": [
      "property2343",
      "property3303",
      "property3508",
      "property2550"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2479",
    iri: "dbo:coastLength",
    domain: "class105",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3394",
    iri: "dbo:contractAward",
    domain: "class221",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2225",
    iri: "dbo:seniority",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3051",
    iri: "dbo:isoCodeRegion",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3251",
    iri: "dbo:deadInFightPlace",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2355",
    iri: "dbo:wimbledonDouble",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3293",
    iri: "dbo:numberOfReactors",
    domain: "class411",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3674",
    iri: "dbo:fcRuns",
    domain: "class563",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1143",
    iri: "dbo:tradeMark",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3334",
    iri: "dbo:freeProgCompetition",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property761",
    iri: "dbo:computingMedia",
    domain: "class1",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1230",
    iri: "dbo:agglomerationDemographics",
    domain: "class245",
    range: "class658",
    type: "owl:objectProperty"
  },
  {
    id: "property2276",
    iri: "dbo:brainInfoNumber",
    domain: "class451",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2739",
    iri: "dbo:politicalSeats",
    domain: "class708",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2888",
    iri: "dbo:iso6392Code",
    domain: "owl:Thing",
    range: "xds:string",
    "superproperty": [
      "property2200"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3706",
    iri: "dbo:numberOfLanes",
    domain: "class74",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property768",
    iri: "dbo:canonizedPlace",
    domain: "class390",
    range: "class245",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3008",
    iri: "dbo:luxembourgishName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1183",
    iri: "dbo:discipline",
    domain: "class434",
    range: "owl:Thing",
    "superproperty": [
      "property1685"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2266",
    iri: "dbo:codeDistrict",
    domain: "class111",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3515",
    iri: "dbo:surfaceFormOccurrenceOffset",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3722",
    iri: "dbo:reopeningDate",
    comment: {
      "en": "Date of reopening the architectural structure."
    },
    domain: "class99",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1643",
    iri: "dbo:relatedMeanOfTransportation",
    domain: "class518",
    range: "class518",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1149",
    iri: "dbo:variantOf",
    comment: {
      "en": "variant or variation of something, for example the variant of a car"
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property843",
    iri: "dbo:soccerLeagueRelegated",
    domain: "class383",
    range: "class13",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2024",
    iri: "dbo:competitionTitle",
    domain: "class654",
    range: "class436",
    type: "owl:objectProperty"
  },
  {
    id: "property1005",
    iri: "dbo:alpsSection",
    comment: {
      "en": "the Alps section to which the mountain belongs, according to the SOIUSA classification"
    },
    domain: "class327",
    range: "class266",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1137",
    iri: "dbo:almaMater",
    comment: {
      "en": "schools that they attended"
    },
    domain: "class654",
    range: "class207",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2846",
    iri: "dbo:participant",
    domain: "class497",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3413",
    iri: "dbo:wikiPageOutDegree",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3235",
    iri: "dbo:startDate",
    comment: {
      "en": "The start date of the event."
    },
    domain: "class497",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3534",
    iri: "dbo:waterPercentage",
    domain: "class105",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3275",
    iri: "dbo:numberOfCanton",
    domain: "class566",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1176",
    iri: "odesignp:isAbout",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1054",
      "property1116"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2051",
    iri: "dbo:previousPopulationTotal",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3497",
    iri: "dbo:groundsForLiquidation",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3512",
    iri: "dbo:updated",
    comment: {
      "en": "The last update date of a resource"
    },
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1711",
    iri: "dbo:railwayRollingStock",
    domain: "class74",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2043",
    iri: "dbo:Weapon/height",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2381",
    iri: "dbo:mayorMandate",
    domain: "class300",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2232",
    iri: "dbo:inchi",
    domain: "class115",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1383",
    iri: "dbo:alpsSubgroup",
    comment: {
      "en": "the Alps subgroup to which the mountain belongs, according to the SOIUSA classification"
    },
    domain: "class327",
    range: "class266",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2134",
    iri: "dbo:ensembl",
    domain: "class761",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property969",
    iri: "dbo:biggestCity",
    domain: "class105",
    range: "class245",
    type: "owl:objectProperty"
  },
  {
    id: "property3106",
    iri: "dbo:missionDuration",
    domain: "class185",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3579",
    iri: "dbo:nationalTeamMatchPoint",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1128",
    iri: "dbo:coProducer",
    domain: "class744",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1972",
    iri: "dbo:memberOfParliament",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1606",
    iri: "dbo:writer",
    domain: "class388",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3117",
    iri: "dbo:wikiPageModified",
    comment: {
      "en": "Reserved for DBpedia ''''''"
    },
    domain: "owl:Thing",
    range: "xds:dateTime",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1003",
    iri: "dbo:territory",
    domain: "class340",
    range: "class245",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2590",
    iri: "dbo:lastPosition",
    domain: "class317",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3738",
    iri: "dbo:khlDraft",
    domain: "class351",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property898",
    iri: "dbo:buildingType",
    comment: {
      "en": "Type is too general. We should be able to distinguish types of music from types of architecture"
    },
    domain: "class519",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2730",
    iri: "dbo:extinctionDate",
    domain: "class588",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1596",
    iri: "dbo:training",
    domain: "class565",
    range: "class207",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1206",
    iri: "dbo:afiAward",
    domain: "class565",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1950",
    iri: "dbo:launchVehicle",
    domain: "class185",
    range: "owl:Thing",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1178",
    iri: "dbo:discoverer",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1977",
    iri: "dbo:supply",
    domain: "class105",
    range: "class105",
    type: "owl:objectProperty"
  },
  {
    id: "property2398",
    iri: "dbo:lcc",
    comment: {
      "en": "The Library of Congress Classification (LCC) is a system of library classification developed by the Library of Congress."
    },
    domain: "class633",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1868",
    iri: "dbo:availableSmartCard",
    comment: {
      "en": "Smartcard for fare payment system for public transit systems that are or will be available at the station."
    },
    domain: "class395",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2541",
    iri: "dbo:bestRankDouble",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1575",
    iri: "dbo:apcPresident",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2582",
    iri: "dbo:discovered",
    domain: "class515",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2339",
    iri: "dbo:pubchem",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property814",
    iri: "dbo:magazine",
    domain: "class633",
    range: "class733",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2291",
    iri: "dbo:worldTournamentGold",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3521",
    iri: "dbo:material",
    domain: "class206",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property980",
    iri: "dbo:orthologousGene",
    domain: "class813",
    range: "class813",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1253",
    iri: "dbo:appointer",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property940",
    iri: "dbo:volumes",
    domain: "class295",
    range: "class633",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property216",
    domain: "class423",
    range: "class335",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3428",
    iri: "dbo:loadLimit",
    comment: {
      "en": "Load limit of the bridge."
    },
    domain: "class749",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property217",
    domain: "class484",
    range: "class537",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property214",
    domain: "class761",
    range: "class558",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property215",
    domain: "class136",
    range: "class335",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3565",
    iri: "dbo:ngcName",
    comment: {
      "en": "Name for NGC objects"
    },
    domain: "class384",
    range: "xds:string",
    "superproperty": [
      "property1864"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3764",
    iri: "dbo:Distance",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    "subproperty": [
      "property3446"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property218",
    domain: "class578",
    range: "class537",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property219",
    domain: "class77",
    range: "class83",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property220",
    domain: "class306",
    range: "class434",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property877",
    iri: "dbo:previousPopulation",
    domain: "class245",
    range: "class632",
    type: "owl:objectProperty"
  },
  {
    id: "property1236",
    iri: "dbo:rightChild",
    domain: "class206",
    range: "class206",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property223",
    domain: "class654",
    range: "class434",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property224",
    domain: "class105",
    range: "class434",
    type: "owl:disjointWith"
  },
  {
    id: "property221",
    domain: "class78",
    range: "class434",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property222",
    domain: "class588",
    range: "class434",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3036",
    iri: "dbo:greenSkiPisteNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3094",
    iri: "dbo:otherActivity",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1726",
    iri: "dbo:soccerTournamentClosingSeason",
    domain: "class131",
    range: "class131",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3307",
    iri: "dbo:urbanArea",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1222",
    iri: "dbo:supplies",
    domain: "class582",
    range: "class455",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property205",
    domain: "class774",
    range: "class497",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2073",
    iri: "dbo:numberOfTeams",
    domain: "class673",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property206",
    domain: "class600",
    range: "class497",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property203",
    domain: "class256",
    range: "class323",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property204",
    domain: "class283",
    range: "class323",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property209",
    domain: "class322",
    range: "class262",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property207",
    domain: "class536",
    range: "class497",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1058",
    iri: "dbo:cpu",
    domain: "class1",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2759",
    iri: "dbo:ethnicGroupsInYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property212",
    domain: "class330",
    range: "class171",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property213",
    domain: "class455",
    range: "class558",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property210",
    domain: "class59",
    range: "class262",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property211",
    domain: "class691",
    range: "class171",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property732",
    iri: "dbo:leftTributary",
    domain: "class634",
    range: "class634",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1261",
    iri: "dbo:heir",
    domain: "class127",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2542",
    iri: "dbo:englishName",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1821",
    iri: "dbo:house",
    domain: "class68",
    range: "class68",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2237",
    iri: "dbo:SpaceShuttle/distance",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3559",
    iri: "dbo:lowest",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1731",
    iri: "dbo:school",
    comment: {
      "en": "school a person goes or went to"
    },
    domain: "class654",
    range: "class207",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3423",
    iri: "dbo:affair",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property201",
    domain: "class143",
    range: "class705",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2887",
    iri: "dbo:nlaId",
    comment: {
      "en": "NLA Trove\u2019s People and Organisation view allows the discovery of biographical and other contextual information about people and organisations. Search also available via VIAF."
    },
    domain: "class434",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property202",
    domain: "class730",
    range: "class498",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property200",
    domain: "class56",
    range: "class705",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2474",
    iri: "dbo:classification",
    domain: "class548",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1839",
    iri: "dbo:tenant",
    domain: "class519",
    range: "class588",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1523",
    iri: "dbo:division",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2292",
    iri: "dbo:dischargeAverage",
    domain: "class518",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property826",
    iri: "dbo:crosses",
    domain: "class749",
    range: "class634",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1331",
    iri: "dbo:aircraftHelicopterCargo",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1246",
    iri: "dbo:deathCause",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2748",
    iri: "dbo:third",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3137",
    iri: "dbo:minimumDischarge",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2938",
    iri: "dbo:minimumElevation",
    comment: {
      "en": "minimum elevation above the sea level"
    },
    domain: "class105",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property840",
    iri: "dbo:illustrator",
    comment: {
      "en": "Illustrator (where used throughout and a major feature)"
    },
    domain: "class786",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1098",
    iri: "dbo:uRN",
    comment: {
      "en": "DfE unique reference number of a school in England or Wales"
    },
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property1124"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3502",
    iri: "dbo:neighbourRegion",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2056",
    iri: "dbo:annualTemperature",
    domain: "class105",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2263",
    iri: "dbo:personName",
    domain: "class125",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1197",
    iri: "dbo:maintainedBy",
    domain: "class99",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2222",
    iri: "dbo:freeDanseScore",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2906",
    iri: "dbo:birthDate",
    "attributes": [
      "functional"
    ],
    domain: "class654",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1267",
    iri: "dbo:otherSportsExperience",
    domain: "class416",
    range: "class513",
    type: "owl:objectProperty"
  },
  {
    id: "property2989",
    iri: "dbo:creationChristianBishop",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2571",
    iri: "dbo:projectReferenceID",
    comment: {
      "en": "The reference identification of the project."
    },
    domain: "class139",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3318",
    iri: "dbo:lunarEvaTime",
    domain: "class185",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property751",
    iri: "dbo:agglomerationArea",
    domain: "class245",
    range: "class137",
    type: "owl:objectProperty"
  },
  {
    id: "property1504",
    iri: "dbo:winsAtPGA",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1918",
    iri: "dbo:sibling",
    domain: "class654",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property893",
    iri: "dbo:governor",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3370",
    iri: "dbo:SpaceMission/mass",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3447",
    iri: "dbo:operatingIncome",
    "attributes": [
      "functional"
    ],
    domain: "class711",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2039",
    iri: "dbo:isPartOfWineRegion",
    domain: "class155",
    range: "class155",
    "superproperty": [
      "property1973",
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2047",
    iri: "dbo:shipDraft",
    comment: {
      "en": "The draft (or draught) of a ship's hull is the vertical distance between the waterline and the bottom of the hull (keel), with the thickness of the hull included; in the case of not being included the draft outline would be obtained."
    },
    domain: "class736",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1399",
    iri: "dbo:startPoint",
    domain: "class346",
    range: "class105",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property743",
    iri: "dbo:olympicGames",
    domain: "class654",
    range: "class192",
    type: "owl:objectProperty"
  },
  {
    id: "property1745",
    iri: "dbo:commune",
    domain: "class708",
    range: "class708",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3344",
    iri: "dbo:blazonCaption",
    domain: "class141",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3689",
    iri: "dbo:blazon",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3010",
    iri: "dbo:numberOfCountry",
    domain: "class526",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2394",
    iri: "dbo:visitorStatisticsAsOf",
    comment: {
      "en": "Year visitor information was gathered."
    },
    domain: "class99",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property749",
    iri: "dbo:lastFamilyMember",
    domain: "class78",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property1512",
    iri: "dbo:subsequentWork",
    domain: "class388",
    range: "class388",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3089",
    iri: "dbo:skiPisteNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1448",
    iri: "dbo:intercommunality",
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1766",
    iri: "dbo:automobilePlatform",
    domain: "class811",
    range: "class811",
    "superproperty": [
      "property849"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3392",
    iri: "dbo:thumbnailCaption",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1572",
    iri: "dbo:makeupArtist",
    comment: {
      "en": "the person who is responsible for the actors makeup"
    },
    domain: "class237",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2093",
    iri: "dbo:numberOfVehicles",
    comment: {
      "en": "Number of vehicles used in the transit system."
    },
    domain: "class209",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1699",
    iri: "odesignp:nearTo",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1350",
      "property1015",
      "property1333",
      "property1763",
      "property1046",
      "property1413",
      "property1946",
      "property1654"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1999",
    iri: "dbo:founder",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2867",
    iri: "dbo:Person/height",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3644",
    iri: "dbo:eptTitle",
    domain: "class437",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1019",
    iri: "dbo:playRole",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1416",
      "property1474"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3676",
    iri: "dbo:drugbank",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2422",
    iri: "dbo:fullScore",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3600",
    iri: "dbo:molecularWeight",
    domain: "class703",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2521",
    iri: "dbo:Spacecraft/port1DockedTime",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1953",
    iri: "dbo:rightTributary",
    domain: "class634",
    range: "class634",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2892",
    iri: "dbo:sharingOutPopulationName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1250",
    iri: "dbo:hubAirport",
    domain: "class90",
    range: "class142",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2534",
    iri: "dbo:worstDefeat",
    domain: "class393",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1957",
    iri: "dbo:screenActorsGuildAward",
    domain: "class540",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2191",
    iri: "dbo:playingTime",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1444",
    iri: "dbo:management",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2724",
    iri: "dbo:firstFlightEndDate",
    domain: "class221",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2",
    domain: "class265",
    range: "class381",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1983",
    iri: "dbo:arrondissement",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1",
    domain: "class760",
    range: "class381",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property4",
    domain: "class55",
    range: "class729",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3",
    domain: "class646",
    range: "class381",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3170",
    iri: "dbo:isil",
    domain: "class449",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3685",
    iri: "dbo:inseeCode",
    comment: {
      "en": "numerical indexing code used by the French National Institute for Statistics and Economic Studies (INSEE) to identify various entities"
    },
    domain: "class708",
    range: "xds:nonNegativeInteger",
    "superproperty": [
      "property2854"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1768",
    iri: "dbo:academyAward",
    domain: "class565",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2779",
    iri: "dbo:populationYear",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1423",
    iri: "dbo:grandsire",
    domain: "class809",
    range: "class809",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3667",
    iri: "dbo:impactFactorAsOf",
    comment: {
      "en": "Census year of the imapct factor."
    },
    domain: "class257",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1704",
    iri: "dbo:blockAlloy",
    domain: "class397",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2944",
    iri: "dbo:elo",
    domain: "class661",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3052",
    iri: "dbo:detectionMethod",
    domain: "class515",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property296",
    domain: "class531",
    range: "class74",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property297",
    domain: "class119",
    range: "class74",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1849",
    iri: "dbo:formerBandMember",
    comment: {
      "en": "A former member of the band."
    },
    domain: "class320",
    range: "class654",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2396",
    iri: "dbo:militaryUnitSize",
    comment: {
      "en": "the size of the military unit"
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property294",
    domain: "class672",
    range: "class74",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property295",
    domain: "class391",
    range: "class74",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1997",
    iri: "dbo:alpsMajorSector",
    comment: {
      "en": "the Alps major sector to which the mountain belongs, according to the SOIUSA classification"
    },
    domain: "class327",
    range: "class266",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property298",
    domain: "class166",
    range: "class74",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3710",
    iri: "dbo:areaMetro",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property299",
    domain: "class528",
    range: "class518",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1401",
    iri: "dbo:detractor",
    domain: "class654",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property886",
    iri: "dbo:highestMountain",
    domain: "owl:Thing",
    range: "class327",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property292",
    domain: "class749",
    range: "class74",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2614",
    iri: "dbo:numberOfMinistries",
    domain: "class44",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property293",
    domain: "class329",
    range: "class74",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property290",
    domain: "class194",
    range: "class703",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property291",
    domain: "class271",
    range: "class359",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1166",
    iri: "dbo:beatifiedPlace",
    domain: "class390",
    range: "class245",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property876",
    iri: "dbo:curator",
    domain: "class95",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1223",
    iri: "dbo:simcCode",
    comment: {
      "en": "indexing code used by the Polish National Official Register of the Territorial Division of the Country (TERYT) to identify various entities"
    },
    domain: "class245",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property794",
    iri: "dbo:tvShow",
    domain: "class654",
    range: "class744",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3368",
    iri: "dbo:Planet/volume",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1865",
    iri: "dbo:religion",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property897"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3406",
    iri: "dbo:filename",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property285",
    domain: "class25",
    range: "class455",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property286",
    domain: "class252",
    range: "class455",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property283",
    domain: "class339",
    range: "class455",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property284",
    domain: "class763",
    range: "class455",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property289",
    domain: "class107",
    range: "class703",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1293",
    iri: "dbo:winsAtJapan",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property287",
    domain: "class490",
    range: "class455",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2347",
    iri: "dbo:carcinogen",
    domain: "class703",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property288",
    domain: "class115",
    range: "class703",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1748",
    iri: "dbo:currency",
    comment: {
      
    },
    domain: "owl:Thing",
    range: "class309",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3489",
    iri: "dbo:landPercentage",
    domain: "class105",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2114",
    iri: "dbo:polePosition",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property281",
    domain: "class451",
    range: "class455",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1792",
    iri: "dbo:jurisdiction",
    comment: {
      "en": "Jurisdiction is the practical authority granted to a formally constituted legal body or to a political leader to deal with and make pronouncements on legal matters and, by implication, to administer justice within a defined area of responsibility."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property282",
    domain: "class410",
    range: "class455",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property280",
    domain: "class775",
    range: "class455",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1283",
    iri: "dbo:firstOlympicEvent",
    domain: "class69",
    range: "class697",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2502",
    iri: "dbo:AutomobileEngine/powerOutput",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3187",
    iri: "dbo:pole",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property269",
    domain: "class616",
    range: "class772",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2819",
    iri: "dbo:dorlandsSuffix",
    domain: "class455",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property274",
    domain: "class128",
    range: "class669",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property275",
    domain: "class697",
    range: "class250",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property272",
    domain: "class411",
    range: "class108",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property273",
    domain: "class62",
    range: "class669",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property278",
    domain: "class318",
    range: "class408",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property279",
    domain: "class582",
    range: "class455",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property276",
    domain: "class475",
    range: "class393",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1812",
    iri: "dbo:hasInput",
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2040",
    iri: "dbo:nrhpReferenceNumber",
    domain: "class97",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3056",
    iri: "dbo:genereviewsid",
    domain: "class91",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property277",
    domain: "class249",
    range: "class206",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2979",
    iri: "dbo:militaryCommand",
    comment: {
      "en": "For persons who are notable as commanding officers, the units they commanded. Dates should be given if multiple notable commands were held."
    },
    domain: "class752",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property270",
    domain: "class470",
    range: "class590",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property271",
    domain: "class190",
    range: "class208",
    type: "owl:disjointWith"
  },
  {
    id: "property1970",
    iri: "dbo:viceLeaderParty",
    domain: "class245",
    range: "class500",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2354",
    iri: "dbo:bicycleInformation",
    comment: {
      "en": "Information on station's bicycle facilities."
    },
    domain: "class395",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2003",
    iri: "dbo:alpsMainPart",
    comment: {
      "en": "the Alps main part to which the mountain belongs, according to the SOIUSA classification"
    },
    domain: "class327",
    range: "class266",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property258",
    domain: "class656",
    range: "class201",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2069",
    iri: "dbo:tattoo",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property259",
    domain: "class641",
    range: "class201",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property263",
    domain: "class71",
    range: "class456",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property264",
    domain: "class618",
    range: "class456",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3188",
    iri: "dbo:landtagMandate",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property261",
    domain: "class518",
    range: "class202",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property262",
    domain: "class463",
    range: "class456",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property267",
    domain: "class369",
    range: "class456",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property268",
    domain: "class19",
    range: "class456",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property265",
    domain: "class85",
    range: "class456",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property266",
    domain: "class112",
    range: "class456",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3483",
    iri: "dbo:emedicineSubject",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2122",
    iri: "dbo:majorityFloorLeader",
    comment: {
      "en": "number of office holder"
    },
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property260",
    domain: "class297",
    range: "class202",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property953",
    iri: "dbo:pastor",
    domain: "class418",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1705",
    iri: "dbo:typeOfElectrification",
    comment: {
      "en": "Electrification system (e.g. Third rail, Overhead catenary)."
    },
    domain: "class74",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3049",
    iri: "dbo:publicationDate",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2401",
    iri: "dbo:captureDate",
    domain: "class736",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2775",
    iri: "dbo:numberOfSeasons",
    domain: "class744",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property937",
    iri: "dbo:conflict",
    domain: "owl:Thing",
    range: "class253",
    type: "owl:objectProperty"
  },
  {
    id: "property247",
    domain: "class502",
    range: "class125",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property248",
    domain: "class350",
    range: "class125",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3365",
    iri: "dbo:numberOfParticipatingNations",
    domain: "class250",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2318",
    iri: "dbo:vehicleCode",
    comment: {
      "en": "Region related vehicle code on the vehicle plates."
    },
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property252",
    domain: "class178",
    range: "class299",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property253",
    domain: "class281",
    range: "class118",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property250",
    domain: "class591",
    range: "class299",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property251",
    domain: "class759",
    range: "class299",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property256",
    domain: "class388",
    range: "class589",
    type: "owl:disjointWith"
  },
  {
    id: "property257",
    domain: "class588",
    range: "class589",
    type: "owl:disjointWith"
  },
  {
    id: "property254",
    domain: "class267",
    range: "class548",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property255",
    domain: "class629",
    range: "class548",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2018",
    iri: "dbo:ruralMunicipality",
    domain: "class391",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2109",
    iri: "dbo:temple",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1664",
    iri: "dbo:thirdTeam",
    domain: "class793",
    range: "class13",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1984",
    iri: "dbo:managementPlace",
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property238",
    domain: "class465",
    range: "class753",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property239",
    domain: "class660",
    range: "class753",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property236",
    domain: "class140",
    range: "class207",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2680",
    iri: "dbo:orbitalInclination",
    domain: "class185",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property237",
    domain: "class483",
    range: "class753",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1475",
    iri: "dbo:touristicSite",
    domain: "class245",
    range: "class105",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property241",
    domain: "class486",
    range: "class753",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property242",
    domain: "class390",
    range: "class753",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property971",
    iri: "dbo:college",
    domain: "class654",
    range: "class207",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property240",
    domain: "class116",
    range: "class753",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1454",
    iri: "dbo:usopenWins",
    domain: "class654",
    range: "class47",
    type: "owl:objectProperty"
  },
  {
    id: "property2290",
    iri: "dbo:lastLaunch",
    domain: "class268",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property245",
    domain: "class42",
    range: "class532",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property246",
    domain: "class105",
    range: "class532",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property243",
    domain: "class23",
    range: "class753",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property244",
    domain: "class262",
    range: "class532",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3455",
    iri: "dbo:olympicGamesGold",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2831",
    iri: "dbo:numberOfPlatformLevels",
    comment: {
      "en": "Number of levels of platforms at the station."
    },
    domain: "class395",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2642",
    iri: "dbo:inclination",
    domain: "class73",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1070",
    iri: "dbo:officialLanguage",
    domain: "class245",
    range: "class361",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property227",
    domain: "class98",
    range: "class512",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property931",
    iri: "dbo:location",
    comment: {
      "en": "The location of the thing."
    },
    domain: "owl:Thing",
    range: "class105",
    "subproperty": [
      "property1313",
      "property1942"
    ],
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property228",
    domain: "class138",
    range: "class512",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property225",
    domain: "class328",
    range: "class501",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2851",
    iri: "dbo:numberOfStaff",
    domain: "class588",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property226",
    domain: "class158",
    range: "class512",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3020",
    iri: "dbo:mvp",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property229",
    domain: "class172",
    range: "class512",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property230",
    domain: "class785",
    range: "class197",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property231",
    domain: "class5",
    range: "class774",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property856",
    iri: "odesignp:hasPart",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property990",
      "property1010",
      "property1745",
      "property1703",
      "property1752",
      "property1714",
      "property1975",
      "property974",
      "property1607",
      "property916",
      "property1462",
      "property739",
      "property773",
      "property1683",
      "property1552",
      "property1478",
      "property1064",
      "property1217",
      "property1734",
      "property824",
      "property1002",
      "property1018",
      "property1439",
      "property778",
      "property809",
      "property1475",
      "property1684",
      "property1020"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property234",
    domain: "class449",
    range: "class207",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property235",
    domain: "class356",
    range: "class207",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property233",
    domain: "class610",
    range: "class207",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1285",
    iri: "dbo:formerTeam",
    domain: "class416",
    range: "class13",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1517",
    iri: "dbo:gameArtist",
    comment: {
      "en": "A game artist is an artist who creates art for one or more types of games. Game artists are responsible for all of the aspects of game development that call for visual art."
    },
    domain: "class543",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3665",
    iri: "dbo:barangays",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property832",
    iri: "dbo:Tribus",
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property923",
      "property1857"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3384",
    iri: "dbo:background",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2171",
    iri: "dbo:blazonRatio",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2763",
    iri: "dbo:numberOfIslands",
    domain: "class206",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1329",
    iri: "odesignp:associatedWith",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1492",
      "property1374"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2554",
    iri: "dbo:largestWin",
    domain: "class393",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1063",
    iri: "dbo:aircraftFighter",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1861",
    iri: "dbo:sourceDistrict",
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2400",
    iri: "dbo:occitanName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3634",
    iri: "dbo:usOpenSingle",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2411",
    iri: "dbo:kabyleName",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property828",
    iri: "dbo:silCode",
    domain: "class361",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3022",
    iri: "dbo:populationTotalRanking",
    domain: "class245",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3757",
    iri: "dbo:casualties",
    domain: "class253",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3745",
    iri: "dbo:AutomobileEngine/torqueOutput",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1590",
    iri: "dbo:homeArena",
    domain: "owl:Thing",
    range: "class450",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2287",
    iri: "dbo:stationVisitDuration",
    domain: "class185",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property995",
    iri: "dbo:canton",
    domain: "class708",
    range: "class708",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1866",
    iri: "dbo:provost",
    domain: "class140",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3142",
    iri: "dbo:redline",
    "attributes": [
      "functional"
    ],
    domain: "class397",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2536",
    iri: "dbo:wavelength",
    domain: "class212",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2267",
    iri: "dbo:satellitesDeployed",
    domain: "class221",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3629",
    iri: "dbo:homeColourHexCode",
    comment: {
      "en": "A colour represented by its hex code (e.g.: #FF0000 or #40E0D0)."
    },
    domain: "owl:Thing",
    range: "xds:string",
    "superproperty": [
      "property3684"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property786",
    iri: "dbo:drainsTo",
    domain: "class455",
    range: "class455",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3135",
    iri: "dbo:Building/floorArea",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1064",
    iri: "dbo:politicGovernmentDepartment",
    domain: "class245",
    range: "owl:Thing",
    "superproperty": [
      "property1157",
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1668",
    iri: "dbo:associatedAct",
    domain: "class565",
    range: "class565",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3379",
    iri: "dbo:silverMedalMixed",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3698",
    iri: "dbo:MeanOfTransportation/height",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3123",
    iri: "dbo:numberOfTracks",
    comment: {
      "en": "Number of tracks of a railway or railway station."
    },
    domain: "class604",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2245",
    iri: "dbo:legalArticle",
    comment: {
      "en": "article in code book or statute book referred to in this legal case"
    },
    domain: "class231",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1242",
    iri: "dbo:clubsRecordGoalscorer",
    domain: "class393",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1760",
    iri: "dbo:aircraftHelicopterMultirole",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1908",
    iri: "dbo:lowestPlace",
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property874",
    iri: "dbo:child",
    domain: "class106",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2469",
    iri: "dbo:notifyDate",
    domain: "class630",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2124",
    iri: "dbo:activeYearsStartDate",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2437",
    iri: "dbo:runwayWidth",
    domain: "class142",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3681",
    iri: "dbo:selectionYear",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1659",
    iri: "dbo:lchfDraftTeam",
    domain: "class351",
    range: "class377",
    type: "owl:objectProperty"
  },
  {
    id: "property1762",
    iri: "dbo:radio",
    comment: {
      
    },
    domain: "class654",
    range: "class265",
    type: "owl:objectProperty"
  },
  {
    id: "property1856",
    iri: "dbo:period",
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2619",
    iri: "dbo:startWqs",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1780",
    iri: "dbo:headOfFamily",
    domain: "class78",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property2330",
    iri: "dbo:security",
    comment: {
      "en": "Safety precautions that are used in the building."
    },
    domain: "class519",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2550",
    iri: "dbo:codeStockExchange",
    domain: "class711",
    range: "xds:string",
    "superproperty": [
      "property2556"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2338",
    iri: "dbo:pistonStroke",
    domain: "class397",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3330",
    iri: "dbo:mayorCouncillor",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2671",
    iri: "dbo:certification",
    domain: "class258",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1649",
    iri: "dbo:capitalRegion",
    domain: "class206",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3285",
    iri: "dbo:fate",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3271",
    iri: "dbo:moldavianName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2341",
    iri: "dbo:algerianName",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property964",
    iri: "dbo:agglomeration",
    domain: "class245",
    range: "class617",
    type: "owl:objectProperty"
  },
  {
    id: "property1493",
    iri: "dbo:arielAward",
    domain: "class540",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3650",
    iri: "dbo:dateOfAbandonment",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2170",
    iri: "dbo:imdbId",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3353",
    iri: "dbo:shareSource",
    domain: "class381",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2707",
    iri: "dbo:buildingEndDate",
    domain: "class99",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2861",
    iri: "dbo:meshNumber",
    domain: "class455",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1670",
    iri: "odesignp:hasCommonBoundary",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property890",
      "property783",
      "property1121",
      "property742",
      "property786",
      "property766",
      "property1524",
      "property1608",
      "property1257",
      "property732",
      "property1555",
      "property1893",
      "property1521",
      "property1394",
      "property1577",
      "property1378",
      "property1941",
      "property1236",
      "property1953",
      "property2002",
      "property882",
      "property1746",
      "property1123",
      "property1238",
      "property1994",
      "property1770",
      "property1484",
      "property1890",
      "property1307",
      "property1269",
      "property1399",
      "property1471",
      "property975"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1947",
    iri: "dbo:beltwayCity",
    domain: "class391",
    range: "class628",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2295",
    iri: "dbo:colorChart",
    domain: "class385",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property963",
    iri: "dbo:diocese",
    comment: {
      "en": "A religious administrative body above the parish level"
    },
    domain: "class489",
    range: "class87",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2517",
    iri: "dbo:campusSize",
    domain: "class356",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3263",
    iri: "dbo:establishment",
    domain: "class463",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2628",
    iri: "dbo:reignName",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1690",
    iri: "dbo:settlement",
    domain: "class105",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1164",
    iri: "dbo:aircraftHelicopterTransport",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3673",
    iri: "dbo:wikiPageExtracted",
    comment: {
      "en": "Date a page was extracted ''''''"
    },
    domain: "owl:Thing",
    range: "xds:dateTime",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3694",
    iri: "dbo:wikiPageID",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property9",
    domain: "class643",
    range: "class525",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1656",
    iri: "dbo:commandant",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property958",
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property6",
    domain: "class501",
    range: "class701",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property5",
    domain: "class286",
    range: "class729",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property8",
    domain: "class654",
    range: "class701",
    type: "owl:disjointWith"
  },
  {
    id: "property7",
    domain: "class69",
    range: "class701",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3390",
    iri: "dbo:historicalRegion",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2207",
    iri: "dbo:measurements",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3717",
    iri: "dbo:shareOfAudience",
    domain: "class381",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2200",
    iri: "dbo:LanguageCode",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    "subproperty": [
      "property1735",
      "property1820",
      "property1571"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1906",
    iri: "dbo:alliance",
    domain: "class90",
    range: "owl:Thing",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property978",
    iri: "dbo:nflTeam",
    domain: "class416",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property1993",
    iri: "dbo:fundedBy",
    comment: {
      "en": "A organisation financing the research project."
    },
    domain: "class139",
    range: "class588",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1239",
    iri: "dbo:twinCountry",
    domain: "class44",
    range: "class44",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2923",
    iri: "dbo:populationUrban",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3246",
    iri: "dbo:lccn",
    comment: {
      "en": "The Library of Congress Control Number or LCCN is a serially based system of numbering cataloging records in the Library of Congress in the United States. It has nothing to do with the contents of any book, and should not be confused with Library of Congress Classification."
    },
    domain: "class633",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1034",
    iri: "dbo:continent",
    comment: {
      "en": "links a country to the continent it belongs"
    },
    domain: "class44",
    range: "class526",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1715",
    iri: "dbo:alpsGroup",
    comment: {
      "en": "the Alps group to which the mountain belongs, according to the SOIUSA classification"
    },
    domain: "class327",
    range: "class266",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3287",
    iri: "dbo:filmAudioType",
    comment: {
      "en": "specifies the audio type of the film i.e. 'sound' or 'silent'"
    },
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property29",
    domain: "class142",
    range: "class604",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2087",
    iri: "dbo:flagCaption",
    domain: "class17",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property26",
    domain: "class223",
    range: "class282",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property25",
    domain: "class683",
    range: "class189",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property28",
    domain: "class334",
    range: "class282",
    type: "owl:disjointWith"
  },
  {
    id: "property27",
    domain: "class392",
    range: "class282",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property22",
    domain: "class654",
    range: "class659",
    type: "owl:disjointWith"
  },
  {
    id: "property21",
    domain: "class446",
    range: "class659",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property24",
    domain: "class554",
    range: "class189",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property23",
    domain: "class81",
    range: "class727",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2258",
    iri: "dbo:isHandicappedAccessible",
    comment: {
      "en": "True if the station is handicapped accessible."
    },
    domain: "class395",
    range: "xds:boolean",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3038",
    iri: "dbo:runwaySurface",
    domain: "class142",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property20",
    domain: "class716",
    range: "class659",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2616",
    iri: "dbo:kanjiName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3265",
    iri: "dbo:route",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1091",
    iri: "dbo:grossDomesticProduct",
    domain: "class245",
    range: "class707",
    type: "owl:objectProperty"
  },
  {
    id: "property2348",
    iri: "dbo:bustSize",
    domain: "class654",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3160",
    iri: "dbo:numberOfPlayers",
    domain: "class701",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3716",
    iri: "dbo:casNumber",
    domain: "class115",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3662",
    iri: "dbo:initiallyUsedFor",
    comment: {
      "en": "Initial use of the architectural structure."
    },
    domain: "class99",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3286",
    iri: "dbo:bigPoolRecord",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property37",
    domain: "class314",
    range: "class364",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property36",
    domain: "class395",
    range: "class604",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property39",
    domain: "class431",
    range: "class297",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property38",
    domain: "class397",
    range: "class297",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property33",
    domain: "class146",
    range: "class604",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property32",
    domain: "class606",
    range: "class604",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property35",
    domain: "class74",
    range: "class604",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property34",
    domain: "class108",
    range: "class604",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property31",
    domain: "class336",
    range: "class604",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1764",
    iri: "dbo:athletics",
    domain: "class140",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property30",
    domain: "class400",
    range: "class604",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3331",
    iri: "dbo:capitalCoordinates",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1266",
    iri: "dbo:formerBroadcastNetwork",
    comment: {
      "en": "A former parent broadcast network to which the broadcaster once belonged."
    },
    domain: "class381",
    range: "class760",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3328",
    iri: "dbo:populationMetro",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3642",
    iri: "dbo:min",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1834",
    iri: "dbo:olympicOathSwornByJudge",
    domain: "class250",
    range: "class654",
    "superproperty": [
      "property1545",
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2066",
    iri: "dbo:touaregName",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1039",
    iri: "dbo:governmentMountain",
    domain: "class206",
    range: "class327",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1209",
    iri: "dbo:currentWorldChampion",
    domain: "class69",
    range: "class434",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1822",
    iri: "dbo:winsAtLPGA",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2621",
    iri: "dbo:refseq",
    domain: "class496",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2768",
    iri: "dbo:topLevelDomain",
    domain: "class44",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3155",
    iri: "dbo:bioavailability",
    comment: {
      "en": "\"The rate and extent to which the active ingredient or active moiety is absorbed from a drug product and becomes available at the site of action. For drug products that are not intended to be absorbed into the bloodstream, bioavailability may be assessed by measurements intended to reflect the rate and extent to which the active ingredient or active moiety becomes available at the site of action (21CFR320.1).\""
    },
    domain: "class46",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2586",
    iri: "dbo:numberOfStars",
    domain: "class133",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1776",
    iri: "dbo:otherParty",
    domain: "class4",
    range: "class500",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property19",
    domain: "class80",
    range: "class659",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property18",
    domain: "class728",
    range: "class659",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1604",
    iri: "dbo:owner",
    domain: "owl:Thing",
    range: "class434",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2629",
    iri: "dbo:projectBudgetTotal",
    comment: {
      "en": "The total budget of the research project."
    },
    domain: "class139",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property15",
    domain: "class414",
    range: "class659",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1488",
    iri: "dbo:provinceLink",
    domain: "class105",
    range: "class727",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property14",
    domain: "class503",
    range: "class659",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property17",
    domain: "class360",
    range: "class659",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property16",
    domain: "class8",
    range: "class659",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property11",
    domain: "class754",
    range: "class196",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property10",
    domain: "class379",
    range: "class196",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1188",
    iri: "dbo:lowestPoint",
    domain: "class708",
    range: "class105",
    type: "owl:objectProperty"
  },
  {
    id: "property13",
    domain: "class49",
    range: "class659",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property12",
    domain: "class429",
    range: "class659",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2192",
    iri: "dbo:sublimationPoint",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property982",
    iri: "dbo:crew",
    domain: "class73",
    range: "class185",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1779",
    iri: "dbo:solventWithBadSolubility",
    domain: "class703",
    range: "class703",
    type: "owl:objectProperty"
  },
  {
    id: "property2070",
    iri: "dbo:Spacecraft/periapsis",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2035",
    iri: "dbo:aspectRatio",
    domain: "class1",
    range: "owl:Thing",
    "superproperty": [
      "property827"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1067",
    iri: "dbo:billed",
    domain: "class498",
    range: "class245",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3646",
    iri: "dbo:eruptionYear",
    domain: "class244",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3184",
    iri: "dbo:command",
    domain: "class752",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2193",
    iri: "dbo:successfulLaunches",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2712",
    iri: "dbo:bestRankSingle",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2183",
    iri: "dbo:fansgroup",
    domain: "class393",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2948",
    iri: "dbo:escapeVelocity",
    domain: "class515",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2142",
    iri: "dbo:amateurTie",
    domain: "class772",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2075",
    iri: "dbo:leadYear",
    domain: "class682",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1029",
    iri: "dbo:city",
    domain: "owl:Thing",
    range: "class628",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2436",
    iri: "dbo:reopened",
    domain: "class356",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3574",
    iri: "dbo:averageSpeed",
    comment: {
      "en": "The average speed of a thing."
    },
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2773",
    iri: "dbo:heightAboveAverageTerrain",
    domain: "class381",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2460",
    iri: "dbo:graySubject",
    comment: {
      "en": "Refers to the famous 1918 edition of Gray's Anatomy."
    },
    domain: "class455",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1941",
    iri: "dbo:provides",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2547",
    iri: "dbo:lastLaunchDate",
    domain: "class336",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1562",
    iri: "dbo:knownFor",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property1685"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2304",
    iri: "dbo:review",
    domain: "class135",
    range: "xds:anyURI",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1738",
    iri: "dbo:linguisticsTradition",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property1697",
    iri: "dbo:aircraftTransport",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1625",
    iri: "dbo:firstPublisher",
    domain: "class633",
    range: "class711",
    type: "owl:objectProperty"
  },
  {
    id: "property852",
    iri: "dbo:compiler",
    comment: {
      "en": "For compilation albums: the person or entity responsible for selecting the album's track listing."
    },
    domain: "class135",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2388",
    iri: "dbo:sharingOutPopulation",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2566",
    iri: "dbo:ibdbId",
    comment: {
      "en": "The Internet Broadway Database ID (IBDB ID) from ibdb.com."
    },
    domain: "class427",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1646",
    iri: "odesignp:isLocationOf",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1595",
      "property1708",
      "property1008",
      "property942",
      "property1174",
      "property1372",
      "property1390",
      "property886",
      "property1056",
      "property1548",
      "property1268",
      "property2027",
      "property1996",
      "property1498",
      "property1418",
      "property1908",
      "property2000",
      "property1534",
      "property1346",
      "property1207",
      "property2010",
      "property1510",
      "property1377",
      "property1679",
      "property927",
      "property869"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2161",
    iri: "dbo:neighbourConstellations",
    domain: "class133",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2168",
    iri: "dbo:dateOfBurial",
    domain: "class654",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3511",
    iri: "dbo:penaltyScore",
    domain: "class405",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3309",
    iri: "dbo:issn",
    comment: {
      "en": "International Standard Serial Number (ISSN)"
    },
    domain: "class555",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3296",
    iri: "dbo:ridId",
    comment: {
      "en": "An identifying system for scientific authors. The system was introduced in January 2008 by Thomson Reuters. The combined use of the Digital Object Identifier with the ResearcherID allows for a unique association of authors and scientific articles."
    },
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3172",
    iri: "dbo:filmColourType",
    comment: {
      "en": "specifies the colour type of the film i.e. 'colour' or 'b/w'"
    },
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3555",
    iri: "dbo:amateurVictory",
    domain: "class772",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3726",
    iri: "dbo:sixthFormStudents",
    domain: "class356",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3083",
    iri: "dbo:settingOfPlay",
    comment: {
      "en": "The places and time where the play takes place."
    },
    domain: "class427",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3604",
    iri: "dbo:maidenFlight",
    comment: {
      "en": "date of maiden flight"
    },
    domain: "class580",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1708",
    iri: "dbo:animal",
    domain: "owl:Thing",
    range: "class809",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2843",
    iri: "dbo:nationalTournamentBronze",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1960",
    iri: "dbo:spacecraft",
    domain: "class185",
    range: "class73",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2212",
    iri: "dbo:solubility",
    domain: "class703",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property337",
    domain: "class183",
    range: "class565",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property338",
    domain: "class371",
    range: "class565",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property335",
    domain: "class159",
    range: "class565",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3416",
    iri: "dbo:modelEndYear",
    domain: "class518",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3712",
    iri: "dbo:usk",
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property336",
    domain: "class637",
    range: "class565",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2847",
    iri: "dbo:meltingPoint",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property339",
    domain: "class639",
    range: "class316",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3380",
    iri: "dbo:games",
    domain: "class514",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property340",
    domain: "class110",
    range: "class316",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3702",
    iri: "dbo:acceleration",
    "attributes": [
      "functional"
    ],
    domain: "class397",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property341",
    domain: "class324",
    range: "class316",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2669",
    iri: "dbo:dist_ly",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property344",
    domain: "class597",
    range: "class239",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2205",
    iri: "dbo:kindOfRock",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property345",
    domain: "class456",
    range: "class239",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property342",
    domain: "class461",
    range: "class316",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property343",
    domain: "class293",
    range: "class239",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1961",
    iri: "dbo:show",
    domain: "owl:Thing",
    range: "class744",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3082",
    iri: "dbo:stockExchange",
    domain: "class711",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1180",
    iri: "dbo:crest",
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property1295",
    iri: "dbo:event",
    domain: "owl:Thing",
    range: "class497",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property324",
    domain: "class268",
    range: "class367",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3095",
    iri: "dbo:mood",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property328",
    domain: "class540",
    range: "class565",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property329",
    domain: "class230",
    range: "class565",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property330",
    domain: "class285",
    range: "class565",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3099",
    iri: "dbo:icd9",
    domain: "class91",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property333",
    domain: "class751",
    range: "class565",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1114",
    iri: "dbo:layout",
    domain: "class811",
    range: "owl:Thing",
    "superproperty": [
      "property827"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property334",
    domain: "class281",
    range: "class565",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3546",
    iri: "dbo:tuition",
    domain: "class356",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property331",
    domain: "class246",
    range: "class565",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property332",
    domain: "class688",
    range: "class565",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3557",
    iri: "dbo:numberOfEmployees",
    domain: "class588",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1378",
    iri: "dbo:outflow",
    domain: "class639",
    range: "class634",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property80",
    domain: "class100",
    range: "class484",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property82",
    domain: "class506",
    range: "class5",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1486",
    iri: "dbo:seiyu",
    domain: "class654",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property81",
    domain: "class666",
    range: "class5",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3531",
    iri: "dbo:wikiPageRevisionID",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3437",
    iri: "dbo:prefix",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1255",
    iri: "dbo:comic",
    domain: "class385",
    range: "class538",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property315",
    domain: "class592",
    range: "class656",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property316",
    domain: "class87",
    range: "class656",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2514",
    iri: "dbo:landtag",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property313",
    domain: "class123",
    range: "class723",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property314",
    domain: "class547",
    range: "class723",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property319",
    domain: "class190",
    range: "class367",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property317",
    domain: "class311",
    range: "class656",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property318",
    domain: "class771",
    range: "class367",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3220",
    iri: "dbo:value",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property322",
    domain: "class747",
    range: "class367",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property323",
    domain: "class128",
    range: "class367",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property320",
    domain: "class471",
    range: "class367",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property321",
    domain: "class208",
    range: "class367",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3032",
    iri: "dbo:name",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    "subproperty": [
      "property2471",
      "property3565"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property88",
    domain: "class685",
    range: "class3",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2349",
    iri: "dbo:activeYearsEndYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property87",
    domain: "class659",
    range: "class150",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3603",
    iri: "dbo:tvComId",
    domain: "class744",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property89",
    domain: "class670",
    range: "class3",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1772",
    iri: "dbo:map",
    comment: {
      "en": "A map of the place."
    },
    domain: "class105",
    range: "owl:Thing",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property84",
    domain: "class764",
    range: "class5",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3268",
    iri: "dbo:algerianSettlementName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property83",
    domain: "class124",
    range: "class5",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property86",
    domain: "class219",
    range: "class150",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property85",
    domain: "class809",
    range: "class150",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property91",
    domain: "class681",
    range: "class3",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property90",
    domain: "class605",
    range: "class3",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3025",
    iri: "dbo:AutomobileEngine/co2Emission",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property93",
    domain: "class625",
    range: "class711",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property92",
    domain: "class90",
    range: "class711",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3729",
    iri: "dbo:max",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property304",
    domain: "class736",
    range: "class518",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3736",
    iri: "dbo:areaUrban",
    domain: "class245",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property305",
    domain: "class221",
    range: "class518",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property302",
    domain: "class380",
    range: "class518",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property303",
    domain: "class580",
    range: "class518",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1069",
    iri: "dbo:dynasty",
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2112",
    iri: "dbo:maximumDepthQuote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property308",
    domain: "class649",
    range: "class518",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property306",
    domain: "class101",
    range: "class518",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2327",
    iri: "dbo:publication",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property307",
    domain: "class73",
    range: "class518",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property311",
    domain: "class67",
    range: "class310",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2350",
    iri: "dbo:co2Emission",
    "attributes": [
      "functional"
    ],
    domain: "class397",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3068",
    iri: "dbo:dist_pc",
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property312",
    domain: "class611",
    range: "class723",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2382",
    iri: "dbo:projectType",
    comment: {
      "en": "The type of the research project. Mostly used for the funding schemes of the European Union, for instance: Specific Targeted Research Projects (STREP), Network of Excellence (NoE) or Integrated Project."
    },
    domain: "class139",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2905",
    iri: "dbo:geology",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property310",
    domain: "class334",
    range: "class223",
    type: "owl:disjointWith"
  },
  {
    id: "property99",
    domain: "class274",
    range: "class786",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property98",
    domain: "class696",
    range: "class711",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property95",
    domain: "class313",
    range: "class711",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1428",
    iri: "dbo:notableWork",
    domain: "class565",
    range: "class388",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property94",
    domain: "class679",
    range: "class711",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2154",
    iri: "dbo:websiteLabel",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property97",
    domain: "class153",
    range: "class711",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3439",
    iri: "dbo:worldChampionTitleYear",
    comment: {
      "en": "can be one or several years"
    },
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property96",
    domain: "class741",
    range: "class711",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property60",
    domain: "class53",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1086",
    iri: "dbo:father",
    domain: "class106",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2691",
    iri: "dbo:populationPctMen",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2719",
    iri: "dbo:recommissioningDate",
    domain: "class736",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3163",
    iri: "dbo:rankArea",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2450",
    iri: "dbo:ascent",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1370",
    iri: "dbo:sportSpecialty",
    comment: {
      "en": "the sport specialty the athlete practices, e.g. 'Ring' for a men's artistic gymnastics athlete"
    },
    domain: "class416",
    range: "class69",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property300",
    domain: "class811",
    range: "class518",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property69",
    domain: "class572",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property301",
    domain: "class508",
    range: "class518",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property66",
    domain: "class377",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property65",
    domain: "class776",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property68",
    domain: "class393",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property67",
    domain: "class792",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property62",
    domain: "class586",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property61",
    domain: "class302",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property64",
    domain: "class147",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property63",
    domain: "class243",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property71",
    domain: "class195",
    range: "class290",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property70",
    domain: "class241",
    range: "class290",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1192",
    iri: "dbo:goldenGlobeAward",
    domain: "class565",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2445",
    iri: "dbo:crews",
    domain: "class221",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3313",
    iri: "dbo:length",
    "attributes": [
      "functional"
    ],
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2774",
    iri: "dbo:aircraftType",
    domain: "class528",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1553",
    iri: "dbo:generalManager",
    domain: "class13",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1817",
    iri: "dbo:handedness",
    comment: {
      "en": "an attribute of humans defined by their unequal distribution of fine motor skill between the left and right hands."
    },
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property827"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property77",
    domain: "class642",
    range: "class452",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1409",
    iri: "dbo:continentalTournament",
    domain: "class654",
    range: "class192",
    type: "owl:objectProperty"
  },
  {
    id: "property76",
    domain: "class231",
    range: "class807",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property79",
    domain: "class507",
    range: "class484",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property78",
    domain: "class476",
    range: "class624",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property73",
    domain: "class654",
    range: "class747",
    type: "owl:disjointWith"
  },
  {
    id: "property72",
    domain: "class120",
    range: "class290",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property75",
    domain: "class560",
    range: "class534",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2076",
    iri: "dbo:openingYear",
    domain: "class99",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2094",
    iri: "dbo:popularVote",
    domain: "class220",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property74",
    domain: "class312",
    range: "class534",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2159",
    iri: "dbo:cmykCoordinateYellow",
    domain: "class212",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2589",
    iri: "dbo:recordDate",
    domain: "class180",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property829",
    iri: "dbo:usingCountry",
    domain: "class309",
    range: "class44",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1167",
    iri: "dbo:county",
    comment: {
      "en": "The county where the thing is located."
    },
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property48",
    domain: "class734",
    range: "class436",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property47",
    domain: "class725",
    range: "class693",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1584",
    iri: "dbo:currentCity",
    domain: "owl:Thing",
    range: "class628",
    type: "owl:objectProperty"
  },
  {
    id: "property1426",
    iri: "dbo:organ",
    comment: {
      "en": "Name and/or description of the organ"
    },
    domain: "class466",
    range: "class629",
    type: "owl:objectProperty"
  },
  {
    id: "property49",
    domain: "class443",
    range: "class436",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property44",
    domain: "class91",
    range: "class693",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property43",
    domain: "class482",
    range: "class693",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2387",
    iri: "dbo:smiles",
    comment: {
      "en": "The Simplified Molecular-Input Line-Entry System or SMILES is a specification in form of a line notation for describing the structure of chemical molecules using short ASCII strings."
    },
    domain: "class115",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3211",
    iri: "dbo:numberOfArrondissement",
    domain: "class566",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property46",
    domain: "class122",
    range: "class693",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property45",
    domain: "class231",
    range: "class693",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property40",
    domain: "class607",
    range: "class297",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1305",
    iri: "dbo:currentMember",
    domain: "class13",
    range: "class654",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1432",
    iri: "dbo:trainerClub",
    domain: "class804",
    range: "class13",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3350",
    iri: "dbo:kindOfCriminal",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property42",
    domain: "class75",
    range: "class297",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property41",
    domain: "class548",
    range: "class297",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2378",
    iri: "dbo:SpaceMission/distanceTraveled",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3669",
    iri: "dbo:Planet/minimumTemperature",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2643",
    iri: "dbo:regionalPrefecture",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1530",
    iri: "dbo:march",
    domain: "class715",
    range: "class180",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1555",
    iri: "dbo:lymph",
    domain: "class455",
    range: "class763",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1429",
    iri: "dbo:firstDriverCountry",
    domain: "class793",
    range: "class44",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property943",
    iri: "dbo:broadcastNetwork",
    comment: {
      "en": "The parent broadcast network to which the broadcaster belongs."
    },
    domain: "class381",
    range: "class760",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1345",
    iri: "dbo:fileURL",
    domain: "class241",
    range: "class241",
    type: "owl:objectProperty"
  },
  {
    id: "property2967",
    iri: "dbo:numberOfAcademicStaff",
    domain: "class207",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2492",
    iri: "dbo:startWct",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1118",
    iri: "dbo:soccerTournamentTopScorer",
    domain: "class131",
    range: "class804",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1914",
    iri: "dbo:flagBearer",
    domain: "class514",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2167",
    iri: "dbo:spouseName",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3608",
    iri: "dbo:usOpenDouble",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property59",
    domain: "class788",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1365",
    iri: "dbo:mouthDistrict",
    domain: "class634",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property58",
    domain: "class14",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2197",
    iri: "dbo:information",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1551",
    iri: "dbo:ethnicity",
    comment: {
      
    },
    domain: "class654",
    range: "class264",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property55",
    domain: "class192",
    range: "class436",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3500",
    iri: "dbo:flashPoint",
    comment: {
      "en": "lowest temperature at which a substance can vaporize and start burning"
    },
    domain: "class703",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property54",
    domain: "class794",
    range: "class436",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property57",
    domain: "class338",
    range: "class13",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property56",
    domain: "class422",
    range: "class436",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property51",
    domain: "class54",
    range: "class436",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property50",
    domain: "class793",
    range: "class436",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2485",
    iri: "dbo:unitCost",
    domain: "class528",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property53",
    domain: "class250",
    range: "class436",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property52",
    domain: "class198",
    range: "class436",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1385",
    iri: "dbo:formerPartner",
    domain: "class698",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3737",
    iri: "dbo:numberOfPiersInWater",
    comment: {
      "en": "Number of piers standing in a river or other water in normal conditions."
    },
    domain: "class749",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3342",
    iri: "dbo:blackSkiPisteNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2074",
    iri: "dbo:Automobile/fuelCapacity",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property735",
    iri: "dbo:aircraftElectronic",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1447",
    iri: "dbo:chef",
    domain: "class126",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2561",
    iri: "dbo:wikiPageCharacterSize",
    comment: {
      "en": "Needs to be removed, left at the moment to not break DBpedia Live"
    },
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1609",
    iri: "dbo:trainer",
    domain: "class416",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3072",
    iri: "dbo:distanceTraveled",
    domain: "class185",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1037",
    iri: "dbo:administrativeCollectivity",
    domain: "class708",
    range: "class245",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3356",
    iri: "dbo:Infrastructure/length",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2663",
    iri: "dbo:sizeMap",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3409",
    iri: "dbo:bestYearWsop",
    domain: "class437",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2455",
    iri: "dbo:closingDate",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2201",
    iri: "dbo:codeBook",
    comment: {
      "en": "code book or statute book referred to in this legal case"
    },
    domain: "class231",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2816",
    iri: "dbo:rankingsDoubles",
    domain: "class275",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2792",
    iri: "dbo:port1DockingDate",
    domain: "class73",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1788",
    iri: "dbo:enemy",
    domain: "class385",
    range: "class271",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2959",
    iri: "dbo:maximumAreaQuote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1066",
    iri: "dbo:media",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2709",
    iri: "dbo:episodeNumber",
    comment: {
      "en": "The episode number of the TelevisionEpisode."
    },
    domain: "class217",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3668",
    iri: "dbo:coachingRecord",
    domain: "class123",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2476",
    iri: "dbo:seasonNumber",
    comment: {
      "en": "The season number to which the TelevisionEpisode belongs."
    },
    domain: "class217",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3086",
    iri: "dbo:mayorTitle",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2443",
    iri: "dbo:AutomobileEngine/height",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3034",
    iri: "dbo:servingTemperature",
    comment: {
      "en": "Serving temperature for the food (e.g.: hot, cold, warm or room temperature)."
    },
    domain: "class537",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3007",
    iri: "dbo:distanceToDublin",
    domain: "class708",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2110",
    iri: "dbo:dateConstruction",
    domain: "class346",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1962",
    iri: "dbo:artery",
    domain: "class455",
    range: "class582",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property745",
    iri: "dbo:subClassis",
    comment: {
      "en": "a subdivision within a Species classis"
    },
    domain: "class271",
    range: "owl:Thing",
    "superproperty": [
      "property1740"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3622",
    iri: "dbo:handisport",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2342",
    iri: "dbo:powerOutput",
    "attributes": [
      "functional"
    ],
    domain: "class397",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2421",
    iri: "dbo:representative",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3122",
    iri: "dbo:presentName",
    domain: "class121",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1603",
    iri: "dbo:worldTournament",
    domain: "class654",
    range: "class192",
    type: "owl:objectProperty"
  },
  {
    id: "property1474",
    iri: "odesignp:hasRole",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1026",
      "property1301",
      "property1019",
      "property1146"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property395",
    domain: "class293",
    range: "class19",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property396",
    domain: "class718",
    range: "class419",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property393",
    domain: "class413",
    range: "class211",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property394",
    domain: "class224",
    range: "class19",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property399",
    domain: "class405",
    range: "class277",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property397",
    domain: "class167",
    range: "class419",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property398",
    domain: "class129",
    range: "class277",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property809",
    iri: "dbo:subregion",
    domain: "class105",
    range: "class105",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3000",
    iri: "dbo:emedicineTopic",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property391",
    domain: "class770",
    range: "class211",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property795",
    iri: "dbo:musicType",
    comment: {
      "en": "Type is too general. We should be able to distinguish types of music from types of architecture"
    },
    domain: "class180",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property392",
    domain: "class746",
    range: "class211",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property797",
    iri: "dbo:powerType",
    domain: "class518",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2012",
    iri: "dbo:tree",
    domain: "class105",
    range: "class271",
    type: "owl:objectProperty"
  },
  {
    id: "property2065",
    iri: "dbo:Spacecraft/freeFlightTime",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property390",
    domain: "class317",
    range: "class211",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2827",
    iri: "dbo:numberOfWineries",
    domain: "class155",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2570",
    iri: "dbo:serviceNumber",
    comment: {
      "en": "The service number held by the individual during military service."
    },
    domain: "class752",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property379",
    domain: "class599",
    range: "class357",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2838",
    iri: "dbo:numberOfDistricts",
    domain: "class609",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1442",
    iri: "dbo:activeYears",
    domain: "class654",
    range: "class47",
    type: "owl:objectProperty"
  },
  {
    id: "property1665",
    iri: "dbo:doctoralAdvisor",
    domain: "class299",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3115",
    iri: "dbo:citySince",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2403",
    iri: "dbo:average",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property384",
    domain: "class717",
    range: "class357",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property385",
    domain: "class325",
    range: "class357",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property382",
    domain: "class300",
    range: "class357",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property383",
    domain: "class530",
    range: "class357",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2924",
    iri: "dbo:alpsSoiusaCode",
    comment: {
      "en": "the Alps SOIUSA code corresponding to the mountain, according to the SOIUSA classification"
    },
    domain: "class327",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property388",
    domain: "class447",
    range: "class357",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property389",
    domain: "class349",
    range: "class552",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property386",
    domain: "class562",
    range: "class357",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property387",
    domain: "class671",
    range: "class357",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2491",
    iri: "dbo:atcSupplemental",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property380",
    domain: "class655",
    range: "class357",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property381",
    domain: "class24",
    range: "class357",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3560",
    iri: "dbo:stateOfOriginPoint",
    domain: "class416",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3001",
    iri: "dbo:noContest",
    domain: "class772",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3481",
    iri: "dbo:PopulatedPlace/areaUrban",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2220",
    iri: "dbo:numberOfVillages",
    domain: "class148",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3591",
    iri: "dbo:maxApparentMagnitude",
    domain: "class384",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2453",
    iri: "dbo:numberOfUndergraduateStudents",
    domain: "class207",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property369",
    domain: "class384",
    range: "class541",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property373",
    domain: "class722",
    range: "class641",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property374",
    domain: "class727",
    range: "class641",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property371",
    domain: "class743",
    range: "class641",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property372",
    domain: "class236",
    range: "class641",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3222",
    iri: "dbo:Person/weight",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2633",
    iri: "dbo:supplementalDraftRound",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property377",
    domain: "class581",
    range: "class357",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property378",
    domain: "class37",
    range: "class357",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2871",
    iri: "dbo:commandModule",
    domain: "class185",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property375",
    domain: "class609",
    range: "class641",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property376",
    domain: "class109",
    range: "class641",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2038",
    iri: "dbo:firstWinner",
    domain: "class794",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3628",
    iri: "dbo:coden",
    comment: {
      "en": "CODEN is a six character, alphanumeric bibliographic code, that provides concise, unique and unambiguous identification of the titles of serials and non-serial publications from all subject areas."
    },
    domain: "class633",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property370",
    domain: "class148",
    range: "class641",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1681",
    iri: "dbo:battle",
    domain: "owl:Thing",
    range: "class253",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1162",
    iri: "dbo:collectionSize",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property812"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property359",
    domain: "class650",
    range: "class536",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property357",
    domain: "class428",
    range: "class536",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property358",
    domain: "class220",
    range: "class536",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2204",
    iri: "dbo:distanceToDouglas",
    domain: "class708",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property362",
    domain: "class550",
    range: "class536",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property363",
    domain: "class185",
    range: "class536",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2425",
    iri: "dbo:emblem",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3475",
    iri: "dbo:governorate",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property360",
    domain: "class579",
    range: "class536",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property361",
    domain: "class253",
    range: "class536",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property366",
    domain: "class623",
    range: "class342",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property364",
    domain: "class436",
    range: "class536",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property365",
    domain: "class638",
    range: "class342",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3408",
    iri: "dbo:crownDependency",
    domain: "class628",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2117",
    iri: "dbo:digitalChannel",
    comment: {
      
    },
    domain: "class381",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1386",
    iri: "dbo:olivierAward",
    domain: "class230",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1850",
    iri: "dbo:engineer",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3278",
    iri: "dbo:coordinates",
    comment: {
      
    },
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3206",
    iri: "dbo:olympicGamesBronze",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property348",
    domain: "class135",
    range: "class180",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property349",
    domain: "class735",
    range: "class180",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2182",
    iri: "dbo:introduced",
    domain: "class484",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property346",
    domain: "class320",
    range: "class51",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property347",
    domain: "class281",
    range: "class51",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1049",
    iri: "dbo:associate",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3631",
    iri: "dbo:yearOfConstruction",
    comment: {
      "en": "The year in which construction of the Place was finished."
    },
    domain: "class105",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2770",
    iri: "dbo:uciCode",
    comment: {
      "en": "Official UCI code for cycling teams"
    },
    domain: "class243",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property351",
    domain: "class773",
    range: "class180",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property352",
    domain: "class505",
    range: "class180",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property350",
    domain: "class50",
    range: "class180",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property355",
    domain: "class689",
    range: "class691",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3039",
    iri: "dbo:space",
    domain: "class519",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property356",
    domain: "class551",
    range: "class467",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property353",
    domain: "class258",
    range: "class180",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2955",
    iri: "dbo:endCareer",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property354",
    domain: "class590",
    range: "class180",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property816",
    iri: "dbo:federation",
    domain: "class654",
    range: "class588",
    type: "owl:objectProperty"
  },
  {
    id: "property778",
    iri: "dbo:subprefecture",
    domain: "class566",
    range: "class245",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3185",
    iri: "dbo:ekatteCode",
    comment: {
      "bg": "?????? ???????????? ?? ???????????????-?????????????? ? ?????????????? ???????",
      "en": "Indexing code used by the Bulgarian National Statistical Institute to identify populated places"
    },
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1038",
    iri: "dbo:debutTeam",
    domain: "class416",
    range: "class13",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2545",
    iri: "dbo:redLongDistancePisteNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2537",
    iri: "dbo:isPartOfRoute",
    comment: {
      "en": "Name of another route from which the route is part of. Infobox property values are mostly given as plain text, therefore range is xsd:string."
    },
    domain: "class74",
    range: "xds:string",
    "superproperty": [
      "property1973"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2734",
    iri: "dbo:technique",
    domain: "class55",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3186",
    iri: "dbo:totalMass",
    domain: "class73",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property905",
    iri: "dbo:belgiumMergedSettlement",
    domain: "class279",
    range: "class279",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2790",
    iri: "dbo:Weapon/width",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3199",
    iri: "dbo:timeshiftChannel",
    domain: "class646",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2303",
    iri: "dbo:numberOfEntrances",
    domain: "class442",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1379",
    iri: "dbo:sourceRegion",
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1492",
    iri: "dbo:related",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1329"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2765",
    iri: "dbo:elevation",
    comment: {
      "en": "average elevation above the sea level"
    },
    domain: "class105",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2091",
    iri: "dbo:originalMaximumBoatBeam",
    domain: "class346",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1846",
    iri: "dbo:belgiumReffBourgmestre",
    domain: "class279",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2108",
    iri: "dbo:decideDate",
    domain: "class6",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2346",
    iri: "dbo:chaouiName",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2761",
    iri: "dbo:proYear",
    domain: "class682",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property935",
    iri: "dbo:stateOfOriginTeam",
    domain: "class416",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property2950",
    iri: "dbo:originalDanseScore",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3730",
    iri: "dbo:demolitionYear",
    comment: {
      "en": "The year the building was demolished."
    },
    domain: "class99",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1674",
    iri: "dbo:capitalPosition",
    domain: "class206",
    range: "class810",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2078",
    iri: "dbo:foundation",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1168",
    iri: "dbo:oldTeamCoached",
    domain: "class416",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property2641",
    iri: "dbo:termOfOffice",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2879",
    iri: "dbo:awayColourHexCode",
    comment: {
      "en": "A colour represented by its hex code (e.g.: #FF0000 or #40E0D0)."
    },
    domain: "owl:Thing",
    range: "xds:string",
    "superproperty": [
      "property3684"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3175",
    iri: "dbo:protestantPercentage",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2738",
    iri: "dbo:nationalTopographicSystemMapNumber",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1013",
    iri: "dbo:wineRegion",
    domain: "class186",
    range: "class155",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3152",
    iri: "dbo:credit",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property989",
    iri: "dbo:influenced",
    domain: "class654",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1678",
    iri: "dbo:usurper",
    domain: "class654",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property1784",
    iri: "dbo:causedBy",
    domain: "class497",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property979",
    iri: "dbo:shape",
    domain: "class355",
    range: "class748",
    "superproperty": [
      "property827"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2360",
    iri: "dbo:railGauge",
    domain: "class74",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3641",
    iri: "dbo:approximateCalories",
    comment: {
      "en": "Approximate calories per serving."
    },
    domain: "class537",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1227",
    iri: "dbo:project",
    domain: "class654",
    range: "class349",
    type: "owl:objectProperty"
  },
  {
    id: "property2876",
    iri: "dbo:dissolutionDate",
    domain: "class245",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property810",
    iri: "dbo:boxerCategory",
    domain: "class772",
    range: "class598",
    type: "owl:objectProperty"
  },
  {
    id: "property2764",
    iri: "dbo:Spacecraft/dryCargo",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1153",
    iri: "dbo:precursor",
    domain: "class455",
    range: "class410",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1313",
    iri: "dbo:locationCity",
    comment: {
      "en": "City the thing is located."
    },
    domain: "class588",
    range: "class628",
    "superproperty": [
      "property931",
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2962",
    iri: "dbo:upperAge",
    domain: "class356",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2703",
    iri: "dbo:eruption",
    domain: "class206",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3688",
    iri: "dbo:numberOfLiveAlbums",
    comment: {
      "en": "the number of live albums released by the musical artist"
    },
    domain: "class281",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property807",
    iri: "dbo:bodyStyle",
    domain: "class811",
    range: "owl:Thing",
    "superproperty": [
      "property1685"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1106",
    iri: "dbo:setDesigner",
    comment: {
      "en": "the person who is responsible for the film set design"
    },
    domain: "class237",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3595",
    iri: "dbo:firstPublicationYear",
    comment: {
      "en": "Year of the first publication."
    },
    domain: "class555",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1496",
    iri: "dbo:teamManager",
    domain: "class654",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property1534",
    iri: "dbo:lowestRegion",
    domain: "class206",
    range: "class245",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2384",
    iri: "dbo:hsvCoordinateSaturation",
    domain: "class212",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property987",
    iri: "dbo:projectCoordinator",
    comment: {
      "en": "The coordinating organisation of the project."
    },
    domain: "class139",
    range: "class588",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property974",
    iri: "dbo:ingredient",
    comment: {
      "en": "An ingredient is a substance that forms part of a mixture (in a general sense). Here it is used in the context of recipes that specify which ingredients are used to prepare a specific dish or drink."
    },
    domain: "class537",
    range: "owl:Thing",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2101",
    iri: "dbo:productionEndYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2473",
    iri: "dbo:battleHonours",
    domain: "class715",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1026",
    iri: "dbo:occupation",
    domain: "owl:Thing",
    range: "class125",
    "superproperty": [
      "property1474"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2716",
    iri: "dbo:iobdbId",
    comment: {
      "en": "Lortel Archives Internet Off-Broadway database \"show id\" from lortel.org."
    },
    domain: "class427",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2973",
    iri: "dbo:races",
    domain: "class317",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1059",
    iri: "dbo:depths",
    domain: "class105",
    range: "class485",
    type: "owl:objectProperty"
  },
  {
    id: "property3576",
    iri: "dbo:bSide",
    domain: "class258",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3732",
    iri: "dbo:coronationDate",
    domain: "class171",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3715",
    iri: "dbo:iso6393Code",
    domain: "owl:Thing",
    range: "xds:string",
    "superproperty": [
      "property2200"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2625",
    iri: "dbo:center",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1672",
    iri: "dbo:creator",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3101",
    iri: "dbo:systemRequirements",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2298",
    iri: "dbo:numberOfParticipatingMaleAthletes",
    domain: "class250",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1032",
    iri: "dbo:lieutenant",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2804",
    iri: "dbo:certificationDate",
    domain: "class258",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3113",
    iri: "dbo:deathYear",
    "attributes": [
      "functional"
    ],
    domain: "class654",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3593",
    iri: "dbo:weddingParentsDate",
    domain: "class654",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1418",
    iri: "dbo:lowestMountain",
    domain: "owl:Thing",
    range: "class327",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2238",
    iri: "dbo:continentalTournamentSilver",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1623",
    iri: "odesignp:hasMember",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1152",
      "property1117",
      "property1305",
      "property1727",
      "property1849",
      "property1972",
      "property912",
      "property1405",
      "property1540",
      "property1677",
      "property1719",
      "property1581",
      "property940"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3679",
    iri: "dbo:extinctionYear",
    domain: "class588",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2778",
    iri: "dbo:fighter",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3046",
    iri: "dbo:watershed",
    domain: "class461",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1783",
    iri: "dbo:predecessor",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1081",
    iri: "dbo:geminiAward",
    domain: "class540",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2587",
    iri: "dbo:managerYearsEndYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property917",
    iri: "dbo:notSolubleIn",
    domain: "class703",
    range: "class703",
    type: "owl:objectProperty"
  },
  {
    id: "property2058",
    iri: "dbo:leaderTitle",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2553",
    iri: "dbo:reopeningYear",
    comment: {
      "en": "Year of reopening the architectural structure."
    },
    domain: "class99",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2961",
    iri: "dbo:ratio",
    domain: "class356",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3333",
    iri: "dbo:rankPopulation",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property777",
    iri: "dbo:juniorTeam",
    domain: "class416",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property3119",
    iri: "dbo:war",
    domain: "class752",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3153",
    iri: "dbo:codeLandRegistry",
    comment: {
      "en": "Land Registry code designating a parcel of land"
    },
    domain: "class105",
    range: "xds:string",
    "superproperty": [
      "property2145"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2270",
    iri: "dbo:formationYear",
    domain: "class588",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2934",
    iri: "dbo:spike",
    domain: "class145",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2679",
    iri: "dbo:lccnId",
    comment: {
      "en": "Library of Congress Control Number"
    },
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2055",
    iri: "dbo:numberOfVolunteers",
    domain: "class588",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2356",
    iri: "dbo:startYearOfInsertion",
    domain: "class397",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3218",
    iri: "dbo:maxAbsoluteMagnitude",
    domain: "class384",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property912",
    iri: "dbo:organisationMember",
    comment: {
      "en": "Identify the members of an organisation."
    },
    domain: "class588",
    range: "class401",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2475",
    iri: "dbo:status",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3264",
    iri: "dbo:otherName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2243",
    iri: "dbo:numberOfPeopleLicensed",
    comment: {
      "en": "nombre de personnes ayant une license pour pratiquer cette activit\u00e9"
    },
    domain: "class701",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1100",
    iri: "dbo:wikiPageExternalLink",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property3244",
    iri: "dbo:formerCallsign",
    domain: "class381",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3339",
    iri: "dbo:lunarModule",
    domain: "class185",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3602",
    iri: "dbo:dateExtended",
    domain: "class346",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2033",
    iri: "dbo:guest",
    domain: "class217",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3074",
    iri: "dbo:sizeThumbnail",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2976",
    iri: "dbo:militaryGovernment",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3420",
    iri: "dbo:kindOfCriminalAction",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2551",
    iri: "dbo:apoapsis",
    domain: "class384",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2584",
    iri: "dbo:periapsis",
    domain: "class384",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property775",
    iri: "dbo:richestCountry",
    domain: "class44",
    range: "class44",
    type: "owl:objectProperty"
  },
  {
    id: "property1887",
    iri: "dbo:maidenFlightRocket",
    domain: "class268",
    range: "class580",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property805",
    iri: "dbo:mayor",
    domain: "owl:Thing",
    range: "class300",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1010",
    iri: "dbo:committeeInLegislature",
    comment: {
      "en": "Committee in the legislature (eg.: Committee on Economic and Monetary Affairs of the European Parliament)."
    },
    domain: "class68",
    range: "owl:Thing",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2176",
    iri: "dbo:finalPublicationYear",
    comment: {
      "en": "Year of the final publication."
    },
    domain: "class555",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3383",
    iri: "dbo:refseqmrna",
    domain: "class761",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3120",
    iri: "dbo:firstAirDate",
    comment: {
      "en": "The date on which regular broadcasts began."
    },
    domain: "class381",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1769",
    iri: "dbo:custodian",
    domain: "class356",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property839",
    iri: "dbo:photographer",
    domain: "class217",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2410",
    iri: "dbo:birthYear",
    "attributes": [
      "functional"
    ],
    domain: "class654",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2567",
    iri: "dbo:locality",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2029",
    iri: "dbo:managementPosition",
    domain: "owl:Thing",
    range: "class810",
    "superproperty": [
      "property1011"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2935",
    iri: "dbo:watercourse",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2423",
    iri: "dbo:stationStructure",
    comment: {
      "en": "Type of station structure (underground, at-grade, or elevated)."
    },
    domain: "class395",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2795",
    iri: "dbo:ithfDate",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1541",
    iri: "dbo:sourceConfluencePlace",
    domain: "class634",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2389",
    iri: "dbo:Galaxy/mass",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1943",
    iri: "dbo:mother",
    domain: "class106",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2174",
    iri: "dbo:areaTotalRanking",
    domain: "class245",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1117",
    iri: "dbo:bandMember",
    comment: {
      "en": "A member of the band."
    },
    domain: "class320",
    range: "class654",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1714",
    iri: "dbo:film",
    domain: "class650",
    range: "class237",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property818",
    iri: "dbo:locatedInArea",
    domain: "class105",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2853",
    iri: "dbo:localizationThumbnailCaption",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1773",
    iri: "odesignp:unifies",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1757",
      "property1327"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2622",
    iri: "dbo:littlePoolRecord",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3468",
    iri: "dbo:argueDate",
    domain: "class6",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2144",
    iri: "dbo:PopulatedPlace/area",
    comment: {
      "en": "The area of a owl:Thing in square metre."
    },
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property736",
    iri: "dbo:specialEffects",
    comment: {
      "en": "the person who is responsible for the film special effects"
    },
    domain: "class237",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3352",
    iri: "dbo:countryRank",
    comment: {
      "en": "Place of the building in the list of the highest buildings in the country"
    },
    domain: "class45",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1935",
    iri: "dbo:campus",
    comment: {
      
    },
    domain: "class140",
    range: "owl:Thing",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2363",
    iri: "dbo:clothingSize",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3317",
    iri: "dbo:atcPrefix",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1971",
    iri: "dbo:retiredRocket",
    domain: "class268",
    range: "class580",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1324",
    iri: "dbo:opponents",
    comment: {
      "en": "\"opponent in a military conflict, an organisation, country, or group of countries. \""
    },
    domain: "class253",
    range: "owl:Thing",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2863",
    iri: "dbo:perCapitaIncome",
    domain: "class245",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3345",
    iri: "dbo:PopulatedPlace/areaMetro",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2648",
    iri: "dbo:commissioningDate",
    domain: "class736",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3042",
    iri: "dbo:numberOfStudioAlbums",
    comment: {
      "en": "the number of studio albums released by the musical artist"
    },
    domain: "class281",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property897",
    iri: "odesignp:conceptualizes",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1637",
      "property1233",
      "property1865"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1550",
    iri: "dbo:daylightSavingTimeZone",
    domain: "class105",
    range: "owl:Thing",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2467",
    iri: "dbo:displacement",
    "attributes": [
      "functional"
    ],
    domain: "class397",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1157",
    iri: "dbo:Department",
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1064"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1299",
    iri: "dbo:demographics",
    domain: "class245",
    range: "class658",
    type: "owl:objectProperty"
  },
  {
    id: "property1879",
    iri: "dbo:sisterCollege",
    domain: "class610",
    range: "class610",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2178",
    iri: "dbo:dressCode",
    comment: {
      "en": "The recommended dress code for an establishment or event."
    },
    domain: "class126",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3381",
    iri: "dbo:v_hb",
    domain: "class56",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3290",
    iri: "dbo:numberOfLocations",
    domain: "class588",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1096",
    iri: "dbo:filmVersion",
    domain: "class633",
    range: "class237",
    type: "owl:objectProperty"
  },
  {
    id: "property2399",
    iri: "dbo:Galaxy/surfaceArea",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3077",
    iri: "dbo:numberOfVisitorsAsOf",
    comment: {
      "en": "The year in which number of visitors occurred."
    },
    domain: "class97",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3043",
    iri: "dbo:hairColour",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3651",
    iri: "dbo:rightAscension",
    domain: "class133",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2217",
    iri: "dbo:routeEndDirection",
    comment: {
      "en": "End of the route. The opposite of OntologyProperty:routeStartDirection."
    },
    domain: "class74",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3407",
    iri: "dbo:disbanded",
    domain: "class715",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3492",
    iri: "dbo:landingSite",
    domain: "class185",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property882",
    iri: "dbo:riverBranchOf",
    domain: "class634",
    range: "class634",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3438",
    iri: "dbo:fastestLap",
    domain: "class317",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1342",
    iri: "dbo:aircraftTrainer",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property914",
    iri: "dbo:pgaWins",
    domain: "class654",
    range: "class47",
    type: "owl:objectProperty"
  },
  {
    id: "property1751",
    iri: "dbo:phylum",
    comment: {
      "en": "A rank in the classification of organisms, below kingdom and above class; also called a division, especially in describing plants; a taxon at that rank."
    },
    domain: "class271",
    range: "owl:Thing",
    "superproperty": [
      "property823"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1152",
    iri: "dbo:associatedMusicalArtist",
    domain: "owl:Thing",
    range: "class281",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1888",
    iri: "dbo:settlementAttached",
    domain: "owl:Thing",
    range: "class105",
    type: "owl:objectProperty"
  },
  {
    id: "property1635",
    iri: "dbo:launchSite",
    domain: "class185",
    range: "class519",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3518",
    iri: "dbo:employersCelebration",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3529",
    iri: "dbo:orbitalEccentricity",
    domain: "class384",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2138",
    iri: "dbo:parliamentaryGroup",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2787",
    iri: "dbo:nndbId",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1020",
    iri: "dbo:youthWing",
    domain: "class500",
    range: "owl:Thing",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2432",
    iri: "dbo:lunarSurfaceTime",
    domain: "class185",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property994",
    iri: "dbo:taxon",
    domain: "class271",
    range: "class369",
    type: "owl:objectProperty"
  },
  {
    id: "property3539",
    iri: "dbo:numberOfCompetitors",
    domain: "class514",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1922",
    iri: "dbo:solicitorGeneral",
    comment: {
      "en": "high-ranking solicitor"
    },
    domain: "class231",
    range: "class654",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3692",
    iri: "dbo:rolandGarrosDouble",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2881",
    iri: "dbo:numberOfGoals",
    domain: "class482",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1390",
    iri: "dbo:growingGrape",
    domain: "class155",
    range: "class186",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1367",
    iri: "dbo:distributor",
    domain: "owl:Thing",
    range: "class588",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3387",
    iri: "dbo:serviceEndYear",
    domain: "class752",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1803",
    iri: "dbo:created",
    domain: "class654",
    range: "class388",
    type: "owl:objectProperty"
  },
  {
    id: "property1171",
    iri: "dbo:decoration",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property1289",
    iri: "dbo:chiefEditor",
    domain: "class388",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3675",
    iri: "dbo:abstensions",
    domain: "class439",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3107",
    iri: "dbo:summerTemperature",
    domain: "class708",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1028",
    iri: "odesignp:follows",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1505",
      "property1845"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1611",
    iri: "dbo:statisticLabel",
    domain: "class668",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property458",
    domain: "class125",
    range: "class511",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property459",
    domain: "class575",
    range: "class511",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property909",
    iri: "dbo:successor",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property456",
    domain: "class533",
    range: "class809",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property457",
    domain: "class719",
    range: "class432",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1249",
    iri: "dbo:mainIsland",
    domain: "class105",
    range: "class105",
    type: "owl:objectProperty"
  },
  {
    id: "property1396",
    iri: "dbo:namedAfter",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property461",
    domain: "class333",
    range: "class100",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1495",
    iri: "dbo:spurType",
    domain: "class391",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property462",
    domain: "class139",
    range: "class349",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property460",
    domain: "class307",
    range: "class274",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property465",
    domain: "class211",
    range: "class765",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property466",
    domain: "class229",
    range: "class281",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property463",
    domain: "class196",
    range: "class757",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property464",
    domain: "class782",
    range: "class765",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property956",
    iri: "dbo:judge",
    comment: {
      "en": "leading judge"
    },
    domain: "class231",
    range: "class398",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property447",
    domain: "class675",
    range: "class714",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3547",
    iri: "dbo:isbn",
    comment: {
      "en": "The International Standard Book Number (ISBN) is a unique numeric commercial book identifier based upon the 9-digit Standard Book Numbering (SBN) code."
    },
    domain: "class786",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property448",
    domain: "class296",
    range: "class809",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2912",
    iri: "dbo:catch",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property445",
    domain: "class433",
    range: "class714",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3090",
    iri: "dbo:marketCapitalisation",
    "attributes": [
      "functional"
    ],
    domain: "class711",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property446",
    domain: "class702",
    range: "class714",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2150",
    iri: "dbo:censusYear",
    domain: "class245",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property449",
    domain: "class191",
    range: "class809",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1349",
    iri: "dbo:nationalOlympicCommittee",
    domain: "class514",
    range: "owl:Thing",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2458",
    iri: "dbo:mayorArticle",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property450",
    domain: "class577",
    range: "class809",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property848",
    iri: "dbo:product",
    domain: "class588",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2496",
    iri: "dbo:atPage",
    comment: {
      "en": "Page # where the referenced resource is to be found in the source document"
    },
    domain: "class785",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property451",
    domain: "class16",
    range: "class809",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3598",
    iri: "dbo:dateClosed",
    domain: "class346",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1121",
    iri: "dbo:branchTo",
    domain: "class455",
    range: "class455",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2658",
    iri: "dbo:formerChannel",
    domain: "class381",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property454",
    domain: "class282",
    range: "class809",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property455",
    domain: "class114",
    range: "class809",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property452",
    domain: "class334",
    range: "class809",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property453",
    domain: "class769",
    range: "class809",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3523",
    iri: "dbo:finalFlight",
    comment: {
      "en": "date of final flight"
    },
    domain: "class580",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property889",
    iri: "dbo:aircraftUser",
    domain: "class528",
    range: "class588",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2741",
    iri: "dbo:orbitalPeriod",
    domain: "class515",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property859",
    iri: "dbo:picture",
    comment: {
      "en": "A picture of a thing."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1526"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1077",
    iri: "dbo:lessPopulousCountry",
    domain: "class44",
    range: "class44",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2281",
    iri: "dbo:runwayDesignation",
    domain: "class142",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property436",
    domain: "class491",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1094",
    iri: "dbo:presentMunicipality",
    domain: "class121",
    range: "class722",
    type: "owl:objectProperty"
  },
  {
    id: "property437",
    domain: "class624",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property434",
    domain: "class603",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property435",
    domain: "class342",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property438",
    domain: "class781",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2333",
    iri: "dbo:foundingYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property439",
    domain: "class63",
    range: "class1",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3351",
    iri: "dbo:typeCoordinate",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3411",
    iri: "dbo:templeYear",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property440",
    domain: "class543",
    range: "class1",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3190",
    iri: "dbo:openAccessContent",
    comment: {
      "en": "Availability of open access content."
    },
    domain: "class555",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1110",
    iri: "dbo:era",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1685"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property443",
    domain: "class415",
    range: "class156",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3517",
    iri: "dbo:collection",
    domain: "class95",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property444",
    domain: "class175",
    range: "class714",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property441",
    domain: "class806",
    range: "class726",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property442",
    domain: "class472",
    range: "class726",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2014",
    iri: "dbo:mainCharacter",
    domain: "class388",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property2886",
    iri: "dbo:budget",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2230",
    iri: "dbo:bloodGroup",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property425",
    domain: "class450",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3467",
    iri: "dbo:starRating",
    domain: "class657",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property426",
    domain: "class519",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property423",
    domain: "class383",
    range: "class683",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property424",
    domain: "class419",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property429",
    domain: "class593",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property427",
    domain: "class573",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property428",
    domain: "class604",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2698",
    iri: "dbo:demonym",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property432",
    domain: "class517",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3599",
    iri: "dbo:nationalChampionship",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property433",
    domain: "class553",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property430",
    domain: "class512",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2834",
    iri: "dbo:ageRange",
    domain: "class356",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3723",
    iri: "dbo:notes",
    comment: {
      "en": "additional notes that better describe the entity."
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property431",
    domain: "class645",
    range: "class99",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3386",
    iri: "dbo:circulation",
    domain: "class633",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2451",
    iri: "dbo:Spacecraft/port2DockedTime",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1217",
    iri: "dbo:politicalPartyInLegislature",
    comment: {
      "en": "Political party in the legislature (eg.: European People's Party in the European Parliament)."
    },
    domain: "class68",
    range: "class500",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property752",
    iri: "dbo:monarch",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property782",
    iri: "odesignp:precedes",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property838",
      "property834",
      "property1288"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property414",
    domain: "class438",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property415",
    domain: "class744",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property412",
    domain: "class1",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property413",
    domain: "class217",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property419",
    domain: "class358",
    range: "class683",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property416",
    domain: "class103",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1123",
    iri: "dbo:routeEnd",
    comment: {
      "en": "End of the route. This is where the route ends and, for U.S. roads, is either at the northern terminus or eastern terminus."
    },
    domain: "class74",
    range: "class74",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property417",
    domain: "class633",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3718",
    iri: "dbo:bpnId",
    comment: {
      "en": "Dutch project with material for 40,000 digitized biographies, including former colonies of the Netherlands."
    },
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property421",
    domain: "class218",
    range: "class683",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property422",
    domain: "class425",
    range: "class683",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property738",
    iri: "dbo:employer",
    domain: "class654",
    range: "class588",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property420",
    domain: "class648",
    range: "class683",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3456",
    iri: "dbo:oclc",
    comment: {
      "en": "Online Computer Library Center number"
    },
    domain: "class633",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3168",
    iri: "dbo:broadcastStationClass",
    domain: "class381",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1730",
    iri: "dbo:prefect",
    domain: "class357",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property409",
    domain: "class305",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property403",
    domain: "class387",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property404",
    domain: "class556",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property401",
    iri: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    domain: "class576",
    range: "class757",
    type: "rdf:Property"
  },
  {
    id: "property3400",
    iri: "dbo:purchasingPowerParityYear",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property402",
    domain: "class729",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property407",
    domain: "class237",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property408",
    domain: "class315",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2874",
    iri: "dbo:output",
    domain: "class105",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property405",
    domain: "class440",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property406",
    domain: "class290",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property901",
    iri: "dbo:jockey",
    domain: "class392",
    range: "class227",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3493",
    iri: "dbo:free",
    domain: "class385",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property908",
    iri: "dbo:connectsReferencedTo",
    comment: {
      "en": "connects a referenced resource to another resource"
    },
    domain: "class785",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property410",
    domain: "class180",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1387",
    iri: "dbo:contractor",
    domain: "class45",
    range: "class711",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property411",
    domain: "class766",
    range: "class388",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2044",
    iri: "dbo:amateurKo",
    domain: "class772",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1930",
    iri: "dbo:languageFamily",
    domain: "class361",
    range: "owl:Thing",
    "superproperty": [
      "property1658"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2504",
    iri: "dbo:flagLink",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2932",
    iri: "dbo:numberOfLawyers",
    comment: {
      "en": "Number of lawyers or attorneys in the company."
    },
    domain: "class313",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3513",
    iri: "dbo:parliamentType",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1045",
    iri: "odesignp:hasConstituent",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property744",
      "property866",
      "property1434"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2809",
    iri: "dbo:piercing",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property400",
    domain: "class561",
    range: "class148",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1440",
    iri: "dbo:parish",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2052",
    iri: "dbo:primate",
    domain: "class463",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1765",
    iri: "dbo:broadcastArea",
    domain: "class381",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1840",
    iri: "dbo:board",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2428",
    iri: "dbo:japanName",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1734",
    iri: "dbo:politicalPartyOfLeader",
    comment: {
      "en": "The Political party of leader."
    },
    domain: "class68",
    range: "class500",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2546",
    iri: "dbo:gnisCode",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2754",
    iri: "dbo:provCode",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3506",
    iri: "dbo:minorityLeader",
    comment: {
      "en": "number of office holder"
    },
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2620",
    iri: "dbo:generationUnits",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3336",
    iri: "dbo:flyingHours",
    domain: "class715",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3026",
    iri: "dbo:picturesCommonsCategory",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2253",
    iri: "dbo:GrandPrix/distance",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property883",
    iri: "dbo:collectivityMinority",
    domain: "class708",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2235",
    iri: "dbo:floorCount",
    domain: "class519",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3566",
    iri: "dbo:width",
    "attributes": [
      "functional"
    ],
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1614",
    iri: "dbo:placeOfBurial",
    domain: "class127",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1233",
    iri: "dbo:mainInterest",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property897"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3093",
    iri: "dbo:income",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3151",
    iri: "dbo:typeOfGrain",
    domain: "class537",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2578",
    iri: "dbo:aitaCode",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property746",
    iri: "dbo:winsAtProTournaments",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2821",
    iri: "dbo:canonizedDate",
    domain: "class390",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1021",
    iri: "dbo:meetingCity",
    domain: "class68",
    range: "class708",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1965",
    iri: "dbo:secondDriverCountry",
    domain: "class793",
    range: "class44",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3550",
    iri: "dbo:taste",
    domain: "class537",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1165",
    iri: "dbo:province",
    domain: "class105",
    range: "class727",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3743",
    iri: "dbo:AutomobileEngine/cylinderBore",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2063",
    iri: "dbo:functionEndDate",
    domain: "class125",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3070",
    iri: "dbo:lethalOnMice",
    domain: "class703",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2902",
    iri: "dbo:premiereYear",
    comment: {
      "en": "Year the play was first performed."
    },
    domain: "class427",
    range: "xds:gYear",
    "superproperty": [
      "property3705"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1449",
    iri: "dbo:incumbent",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property976",
    iri: "dbo:canonizedBy",
    domain: "class390",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1175",
    iri: "dbo:grossDomesticProductPurchasingPowerParityPerCapita",
    domain: "class245",
    range: "class462",
    type: "owl:objectProperty"
  },
  {
    id: "property1484",
    iri: "dbo:routeStartLocation",
    comment: {
      "en": "The start location of the route."
    },
    domain: "class74",
    range: "class105",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3597",
    iri: "dbo:finalLostTeam",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property851",
    iri: "dbo:beatifiedBy",
    domain: "class390",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1805",
    iri: "dbo:productionCompany",
    comment: {
      "en": "the company that produced the work e.g. Film, MusicalWork, Software"
    },
    domain: "class388",
    range: "class711",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1633",
    iri: "dbo:parentCompany",
    domain: "owl:Thing",
    range: "class711",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3414",
    iri: "dbo:mount",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2185",
    iri: "dbo:address",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3069",
    iri: "dbo:einecsNumber",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1433",
    iri: "dbo:presidentGeneralCouncil",
    domain: "class602",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1453",
    iri: "dbo:nationalTournament",
    domain: "class654",
    range: "class192",
    type: "owl:objectProperty"
  },
  {
    id: "property1472",
    iri: "dbo:oilSystem",
    domain: "class397",
    range: "owl:Thing",
    "superproperty": [
      "property849"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1489",
    iri: "dbo:artPatron",
    comment: {
      "en": "An influential, wealthy person who supported an artist, craftsman, a scholar or a noble.. See also"
    },
    domain: "class434",
    range: "class565",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2120",
    iri: "dbo:icaoAirlineCode",
    comment: {
      "en": "ICAO designation for airline companies"
    },
    domain: "class90",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1460",
    iri: "dbo:poleDriver",
    domain: "class793",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3700",
    iri: "dbo:amsterdamCode",
    domain: "class722",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2783",
    iri: "dbo:eptItm",
    domain: "class437",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2252",
    iri: "dbo:numberOfOffices",
    comment: {
      "en": "Number of the company's offices."
    },
    domain: "class313",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2404",
    iri: "dbo:topFloorHeight",
    domain: "class45",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property806",
    iri: "dbo:spouse",
    comment: {
      "en": "the person they are married to"
    },
    domain: "class654",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3564",
    iri: "dbo:originalDanseCompetition",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2896",
    iri: "dbo:firstMention",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property773",
    iri: "dbo:majorIsland",
    domain: "class206",
    range: "class206",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2123",
    iri: "dbo:gnl",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3209",
    iri: "dbo:Status",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    "subproperty": [
      "property2239"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1437",
    iri: "dbo:viceLeader",
    domain: "class245",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2993",
    iri: "dbo:throwingSide",
    domain: "class668",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2631",
    iri: "dbo:eyeColour",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2092",
    iri: "dbo:victoryPercentageAsMgr",
    domain: "class654",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3100",
    iri: "dbo:finnishName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2723",
    iri: "dbo:youthYears",
    domain: "class804",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3741",
    iri: "dbo:passengersPerDay",
    comment: {
      "en": "Number of passengers per day."
    },
    domain: "class604",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1959",
    iri: "dbo:principal",
    domain: "class207",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1516",
    iri: "dbo:governmentPosition",
    domain: "class206",
    range: "class810",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2688",
    iri: "dbo:numberOfDoctoralStudents",
    domain: "class140",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3016",
    iri: "dbo:areaOfCatchmentQuote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1873",
    iri: "dbo:operator",
    domain: "class604",
    range: "class588",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2057",
    iri: "dbo:subdivisionLink",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property970",
    iri: "dbo:regency",
    domain: "class105",
    range: "class245",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1967",
    iri: "dbo:launchPad",
    domain: "class185",
    range: "class336",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1932",
    iri: "odesignp:isRoleOf",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1315"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3760",
    iri: "dbo:AutomobileEngine/acceleration",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1108",
    iri: "dbo:academicAdvisor",
    domain: "class299",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1862",
    iri: "dbo:primeMinister",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2096",
    iri: "dbo:nssdcId",
    domain: "class101",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property489",
    domain: "class640",
    range: "class466",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property823",
    iri: "odesignp:isSpecializedBy",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1336",
      "property2011",
      "property1737",
      "property1605",
      "property1040",
      "property1751"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1487",
    iri: "dbo:architecturalStyle",
    domain: "class99",
    range: "owl:Thing",
    "superproperty": [
      "property1685"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2520",
    iri: "dbo:capacityFactor",
    domain: "class108",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property494",
    domain: "class713",
    range: "class648",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2306",
    iri: "dbo:flag",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3320",
    iri: "dbo:cmykCoordinateBlack",
    domain: "class212",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property495",
    domain: "class732",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property492",
    domain: "class7",
    range: "class466",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property493",
    domain: "class264",
    range: "class481",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property498",
    domain: "class418",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property499",
    domain: "class273",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3031",
    iri: "dbo:Galaxy/minimumTemperature",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3015",
    iri: "dbo:mozabiteName",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property496",
    domain: "class626",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1806",
    iri: "dbo:leagueManager",
    domain: "class654",
    range: "class673",
    type: "owl:objectProperty"
  },
  {
    id: "property497",
    domain: "class363",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2511",
    iri: "dbo:Spacecraft/totalCargo",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property490",
    domain: "class768",
    range: "class466",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property491",
    domain: "class521",
    range: "class466",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2605",
    iri: "dbo:percentageAlcohol",
    comment: {
      "en": "percentage of alcohol present in a beverage"
    },
    domain: "class484",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3742",
    iri: "dbo:cargoGas",
    domain: "class73",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1322",
    iri: "dbo:mostPopulatedCountry",
    domain: "class44",
    range: "class44",
    type: "owl:objectProperty"
  },
  {
    id: "property3728",
    iri: "dbo:numberOfRooms",
    domain: "class657",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2256",
    iri: "dbo:numberOfBombs",
    domain: "class528",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1457",
    iri: "dbo:hasChannel",
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property3005",
    iri: "dbo:foundingDate",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property478",
    domain: "class524",
    range: "class633",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property479",
    domain: "class132",
    range: "class633",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1288",
    iri: "dbo:nextMission",
    domain: "class185",
    range: "class185",
    "superproperty": [
      "property2032",
      "property782"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property483",
    domain: "class376",
    range: "class633",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property484",
    domain: "class151",
    range: "class633",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3013",
    iri: "dbo:boilingPoint",
    domain: "class703",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property481",
    domain: "class555",
    range: "class633",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2939",
    iri: "dbo:trainerYears",
    domain: "class804",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property482",
    domain: "class427",
    range: "class633",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3136",
    iri: "dbo:assets",
    comment: {
      "en": "Assets and liabilities are part of a companis balance sheet. In financial accounting, assets are economic resources. Anything tangible or intangible that is capable of being owned or controlled to produce value and that is held to have positive economic value is considered an asset."
    },
    domain: "class711",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property487",
    domain: "class85",
    range: "class60",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property488",
    domain: "class173",
    range: "class374",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2654",
    iri: "dbo:suborbitalFlights",
    domain: "class268",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property485",
    domain: "class439",
    range: "class633",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property486",
    domain: "class320",
    range: "class352",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2957",
    iri: "dbo:causeOfDeath",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1286",
    iri: "dbo:solventWithGoodSolubility",
    domain: "class703",
    range: "class703",
    type: "owl:objectProperty"
  },
  {
    id: "property2636",
    iri: "dbo:populationDensity",
    domain: "class245",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property480",
    domain: "class295",
    range: "class633",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1682",
    iri: "dbo:residence",
    comment: {
      "en": "Place of residence of a person."
    },
    domain: "class654",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1507",
    iri: "dbo:comparable",
    comment: {
      "en": "similar, unrelated rockets"
    },
    domain: "class580",
    range: "class580",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2882",
    iri: "dbo:phonePrefixLabel",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1125",
    iri: "dbo:otherAppearances",
    domain: "class514",
    range: "class514",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1732",
    iri: "dbo:governmentType",
    comment: {
      "en": "broadly, the type of structure of its government"
    },
    domain: "owl:Thing",
    range: "class293",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1300",
    iri: "dbo:sire",
    domain: "class809",
    range: "class809",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2027",
    iri: "dbo:highestState",
    domain: "class206",
    range: "class245",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property469",
    domain: "class621",
    range: "class281",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2129",
    iri: "dbo:areaOfCatchment",
    domain: "class639",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property467",
    domain: "class674",
    range: "class281",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property468",
    domain: "class568",
    range: "class281",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2004",
    iri: "dbo:mergedIntoParty",
    domain: "class500",
    range: "class500",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2803",
    iri: "dbo:iso31661Code",
    comment: {
      "en": "defines codes for the names of countries, dependent territories, and special areas of geographical interest"
    },
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2624",
    iri: "dbo:areaRank",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2626",
    iri: "dbo:strength",
    domain: "class253",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property472",
    domain: "class199",
    range: "class628",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property473",
    domain: "class319",
    range: "class628",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property470",
    domain: "class394",
    range: "class281",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3183",
    iri: "dbo:Rocket/mass",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1836",
    iri: "dbo:highwaySystem",
    comment: {
      "en": "the highway system that a route is part of"
    },
    domain: "class391",
    range: "owl:Thing",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property471",
    domain: "class212",
    range: "class706",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property476",
    domain: "class538",
    range: "class633",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property942",
    iri: "dbo:capital",
    domain: "class245",
    range: "class628",
    "superproperty": [
      "property1298",
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property477",
    domain: "class714",
    range: "class633",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2139",
    iri: "dbo:mukhtar",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property474",
    domain: "class197",
    range: "class633",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property475",
    domain: "class786",
    range: "class633",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3118",
    iri: "dbo:maximumInclination",
    domain: "class336",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property991",
    iri: "dbo:significantBuilding",
    domain: "class474",
    range: "class519",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1546",
    iri: "dbo:internationalAffiliation",
    domain: "class500",
    range: "owl:Thing",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3404",
    iri: "dbo:Work/runtime",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property871",
    iri: "dbo:associateEditor",
    domain: "class559",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3131",
    iri: "dbo:hairs",
    domain: "class385",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2312",
    iri: "dbo:wptFinalTable",
    domain: "class437",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2271",
    iri: "dbo:dutchCOROPCode",
    domain: "class248",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3686",
    iri: "dbo:dutchRKDCode",
    domain: "class565",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1612",
    iri: "dbo:world",
    domain: "class654",
    range: "class47",
    type: "owl:objectProperty"
  },
  {
    id: "property1718",
    iri: "dbo:previousEditor",
    domain: "class733",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1139",
    iri: "dbo:chaplain",
    domain: "class356",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1073",
    iri: "dbo:capitalDistrict",
    domain: "class206",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3640",
    iri: "dbo:swimmingStyle",
    domain: "class546",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1235",
    iri: "dbo:championInSingleMale",
    comment: {
      "en": "winner of a competition in the single male session, to distinguish from the double session (as in tennis)"
    },
    domain: "class436",
    range: "class416",
    "superproperty": [
      "property799",
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3053",
    iri: "dbo:originalName",
    comment: {
      "en": "The original name of the entity, e.g. film, settlement, etc."
    },
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3073",
    iri: "dbo:transmission",
    domain: "class811",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3202",
    iri: "dbo:epoch",
    comment: {
      "en": "moment in time used as a referrence point for some time-vaying astronomical quantity"
    },
    domain: "class515",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2866",
    iri: "dbo:dateUse",
    domain: "class346",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property873",
    iri: "dbo:previousEntity",
    domain: "class105",
    range: "class105",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2172",
    iri: "dbo:millsCodeNLWindmotoren",
    domain: "class512",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1356",
    iri: "dbo:isPartOfAnatomicalStructure",
    domain: "class451",
    range: "class455",
    "superproperty": [
      "property1973",
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property833",
    iri: "dbo:childOrganisation",
    domain: "class588",
    range: "class588",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1075",
    iri: "dbo:musicalBand",
    domain: "class258",
    range: "class320",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2651",
    iri: "dbo:cityLink",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1951",
    iri: "dbo:leader",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2482",
    iri: "dbo:frontierLength",
    domain: "class105",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2762",
    iri: "dbo:areaWater",
    domain: "class105",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1394",
    iri: "dbo:originalEndPoint",
    domain: "class346",
    range: "class105",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2666",
    iri: "dbo:albedo",
    comment: {
      "en": "reflection coefficient"
    },
    domain: "class515",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1616",
    iri: "dbo:countySeat",
    domain: "class245",
    range: "owl:Thing",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2343",
    iri: "dbo:codeMunicipalMonument",
    comment: {
      "en": "Code assigned to (Dutch) monuments at the municipal level, deemed to be of local value"
    },
    domain: "class105",
    range: "xds:string",
    "superproperty": [
      "property2556"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1151",
    iri: "dbo:executiveHeadteacher",
    domain: "class356",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1654",
    iri: "dbo:sourceConfluenceMountain",
    domain: "class634",
    range: "class327",
    "superproperty": [
      "property1699"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1677",
    iri: "dbo:religiousHead",
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2320",
    iri: "dbo:iataLocationIdentifier",
    domain: "class604",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3303",
    iri: "dbo:codeNationalMonument",
    comment: {
      "en": "Code assigned to (Dutch) monuments at the national level, deemed to be of national value"
    },
    domain: "class105",
    range: "xds:string",
    "superproperty": [
      "property2556"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property730",
    iri: "dbo:winsAtJLPGA",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property766",
    iri: "dbo:endPoint",
    domain: "class346",
    range: "class105",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1737",
    iri: "dbo:hybrid",
    comment: {
      "en": "Plants from which another plant (or cultivar) has been developed from"
    },
    domain: "class659",
    range: "class659",
    "superproperty": [
      "property823"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2981",
    iri: "dbo:consecration",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1243",
    iri: "odesignp:overlaps",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1823"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1985",
    iri: "dbo:headteacher",
    domain: "class356",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3116",
    iri: "dbo:broadcastRepeater",
    domain: "class381",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3233",
    iri: "dbo:mergerDate",
    domain: "class105",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1238",
    iri: "dbo:routeEndLocation",
    comment: {
      "en": "The end location of the route."
    },
    domain: "class74",
    range: "class105",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1851",
    iri: "dbo:binomialAuthority",
    domain: "class271",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1023",
    iri: "dbo:boilerPressure",
    domain: "class508",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2850",
    iri: "dbo:italianName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3129",
    iri: "dbo:activeYearsStartYearMgr",
    domain: "class654",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3433",
    iri: "dbo:plays",
    domain: "class275",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3029",
    iri: "dbo:subdivisions",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2319",
    iri: "dbo:cmykCoordinateMagenta",
    domain: "class212",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2417",
    iri: "dbo:role",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1700",
    iri: "dbo:soccerLeagueSeason",
    domain: "class383",
    range: "class383",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1311",
    iri: "dbo:lyrics",
    domain: "class305",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3711",
    iri: "dbo:cmpEvaDuration",
    domain: "class185",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1598",
    iri: "dbo:managingEditor",
    domain: "class559",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1644",
    iri: "dbo:recordedIn",
    domain: "class180",
    range: "class245",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2975",
    iri: "dbo:perCapitaIncomeRank",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1156",
    iri: "dbo:aircraftHelicopterAttack",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2136",
    iri: "dbo:goalsInLeague",
    domain: "class804",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2155",
    iri: "dbo:continentRank",
    comment: {
      "en": "Place of the building in the list of the highest buildings in the continent"
    },
    domain: "class45",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1842",
    iri: "dbo:secondCommander",
    domain: "class715",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1710",
    iri: "dbo:mouthPlace",
    domain: "class634",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2393",
    iri: "dbo:numberOfVolumes",
    domain: "class633",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1683",
    iri: "dbo:mostDownPoint",
    domain: "owl:Thing",
    range: "class105",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property870",
    iri: "dbo:hand",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property1619",
    iri: "dbo:nextEntity",
    domain: "class105",
    range: "class105",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property760",
    iri: "dbo:family",
    domain: "class271",
    range: "class271",
    "superproperty": [
      "property1658"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3302",
    iri: "dbo:foundationDate",
    domain: "class245",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1696",
    iri: "dbo:sourceCountry",
    domain: "class461",
    range: "class44",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2799",
    iri: "dbo:projectKeyword",
    comment: {
      "en": "A key word of the project."
    },
    domain: "class349",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property787",
    iri: "dbo:associatedBand",
    domain: "owl:Thing",
    range: "class320",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property872",
    iri: "dbo:massif",
    domain: "class226",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property880",
    iri: "dbo:nationalTeam",
    domain: "class416",
    range: "class13",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2849",
    iri: "dbo:port2DockedTime",
    domain: "class73",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3280",
    iri: "dbo:squadNumber",
    comment: {
      "en": "The number that an athlete wears in a team sport."
    },
    domain: "class61",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3021",
    iri: "dbo:tessitura",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3422",
    iri: "dbo:externalOrnament",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3519",
    iri: "dbo:finalLost",
    domain: "class416",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1669",
    iri: "dbo:currentLeague",
    domain: "class416",
    range: "class673",
    type: "owl:objectProperty"
  },
  {
    id: "property1883",
    iri: "dbo:recentWinner",
    domain: "class794",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1778",
    iri: "dbo:footedness",
    comment: {
      "en": "a preference to put one's left or right foot forward in surfing, wakeboarding, skateboarding, wakeskating, snowboarding and mountainboarding. The term is sometimes applied to the foot a footballer uses to kick."
    },
    domain: "class69",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property1777",
    iri: "dbo:builder",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2667",
    iri: "dbo:headLabel",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3761",
    iri: "dbo:statisticValue",
    domain: "class668",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2466",
    iri: "dbo:Stream/dischargeAverage",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3247",
    iri: "dbo:canBaggageChecked",
    comment: {
      "en": "Whether bags can be checked."
    },
    domain: "class395",
    range: "xds:boolean",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1859",
    iri: "dbo:museum",
    domain: "class729",
    range: "class95",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2440",
    iri: "dbo:internationally",
    domain: "class711",
    range: "xds:boolean",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1113",
    iri: "dbo:mission",
    domain: "class528",
    range: "class185",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2133",
    iri: "dbo:originalMaximumBoatLength",
    domain: "class346",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3369",
    iri: "dbo:hopmanCup",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property947",
    iri: "dbo:teamCoached",
    domain: "class416",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property1796",
    iri: "dbo:wikiPageRevisionLink",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property1543",
    iri: "dbo:familyMember",
    domain: "class78",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property1578",
    iri: "dbo:vicePresident",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2580",
    iri: "dbo:draft",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3273",
    iri: "dbo:access",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2733",
    iri: "dbo:ChemicalSubstance/density",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1595",
    iri: "dbo:addressInRoad",
    comment: {
      "en": "A building, organisation or other thing that is located in the road."
    },
    domain: "class391",
    range: "owl:Thing",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2569",
    iri: "dbo:cityType",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1558",
    iri: "dbo:origo",
    domain: "class25",
    range: "class455",
    type: "owl:objectProperty"
  },
  {
    id: "property2639",
    iri: "dbo:radius_ly",
    domain: "class56",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property803",
    iri: "dbo:lastAppearance",
    domain: "class385",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2909",
    iri: "dbo:issDockings",
    domain: "class221",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1716",
    iri: "dbo:viceChancellor",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property849",
    iri: "odesignp:hasComponent",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1766",
      "property1184",
      "property1022",
      "property734",
      "property1076",
      "property1472",
      "property1585"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2488",
    iri: "dbo:coachSeason",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2598",
    iri: "dbo:aSide",
    domain: "class258",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3703",
    iri: "dbo:numberOfGoldMedalsWon",
    domain: "class453",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1124",
    iri: "odesignp:isExpressedBy",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1949",
      "property1060",
      "property1368",
      "property1272",
      "property1057",
      "property1098"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property962",
    iri: "dbo:europeanAffiliation",
    domain: "class500",
    range: "owl:Thing",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3494",
    iri: "dbo:australiaOpenMixed",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1025",
    iri: "dbo:rocketFunction",
    comment: {
      "en": "purpose of the rocket"
    },
    domain: "class580",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3678",
    iri: "dbo:demographicsAsOf",
    domain: "class245",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1510",
    iri: "dbo:plant",
    domain: "class105",
    range: "class659",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1042",
    iri: "dbo:placeOfWorship",
    comment: {
      "en": "A religious administrative body needs to know which places of worship it"
    },
    domain: "class656",
    range: "class640",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1927",
    iri: "dbo:notableWine",
    domain: "class186",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2465",
    iri: "dbo:Planet/surfaceArea",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1956",
    iri: "dbo:headChef",
    domain: "class126",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2735",
    iri: "dbo:discontinued",
    domain: "class484",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2032",
    iri: "dbo:followedBy",
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property834",
      "property1288"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3616",
    iri: "dbo:amateurFight",
    domain: "class772",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1466",
    iri: "dbo:firstWin",
    domain: "class317",
    range: "class793",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property990",
    iri: "dbo:cluster",
    domain: "class564",
    range: "owl:Thing",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1231",
    iri: "dbo:country",
    comment: {
      "en": "The country where the thing is located."
    },
    domain: "owl:Thing",
    range: "class44",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2607",
    iri: "dbo:humanDevelopmentIndexRank",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2814",
    iri: "dbo:projectObjective",
    comment: {
      "en": "A defined objective of the project."
    },
    domain: "class349",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1354",
    iri: "dbo:heritageRegister",
    comment: {
      "en": "registered in a heritage register : inventory of cultural properties, natural and man-made, tangible and intangible, movable and immovable, that are deemed to be of sufficient heritage value to be separately identified and recorded."
    },
    domain: "class105",
    range: "owl:Thing",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3613",
    iri: "dbo:revenue",
    domain: "class588",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2395",
    iri: "dbo:licenceNumber",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3064",
    iri: "dbo:bronzeMedalDouble",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3425",
    iri: "dbo:expedition",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property894",
    iri: "dbo:otherOccupation",
    domain: "class654",
    range: "class125",
    type: "owl:objectProperty"
  },
  {
    id: "property1739",
    iri: "dbo:tonyAward",
    domain: "class565",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1741",
    iri: "dbo:fuel",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2731",
    iri: "dbo:ons",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3713",
    iri: "dbo:maximumElevation",
    comment: {
      "en": "maximum elevation above the sea level"
    },
    domain: "class105",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2407",
    iri: "dbo:iihfHof",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property802",
    iri: "dbo:autonomy",
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2127",
    iri: "dbo:SpaceShuttle/timeInSpace",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1036",
    iri: "dbo:archipelago",
    domain: "class249",
    range: "owl:Thing",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property757",
    iri: "dbo:leaderFunction",
    domain: "class588",
    range: "class125",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1898",
    iri: "dbo:shipCrew",
    domain: "class736",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property791",
    iri: "dbo:notableStudent",
    domain: "class299",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2385",
    iri: "dbo:neighbourhood",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3371",
    iri: "dbo:cornishName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2740",
    iri: "dbo:oldcode",
    domain: "class514",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3752",
    iri: "dbo:AutomobileEngine/width",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1434",
    iri: "dbo:structuralSystem",
    domain: "class519",
    range: "owl:Thing",
    "superproperty": [
      "property1045"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1622",
    iri: "dbo:party",
    domain: "owl:Thing",
    range: "class500",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2483",
    iri: "dbo:priceMoney",
    domain: "class374",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2373",
    iri: "dbo:unknownOutcomes",
    comment: {
      "en": "number of launches with unknown outcomes (or in progress)"
    },
    domain: "class580",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2596",
    iri: "dbo:nationalYears",
    domain: "class804",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3262",
    iri: "dbo:launch",
    domain: "class73",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1885",
    iri: "dbo:winsAtLAGT",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3134",
    iri: "dbo:areaCode",
    comment: {
      "en": "Area code for telephone numbers."
    },
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3126",
    iri: "dbo:crewSize",
    domain: "class185",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property750",
    iri: "dbo:goldMedalist",
    domain: "class436",
    range: "class654",
    "superproperty": [
      "property1904",
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3583",
    iri: "dbo:silverMedalDouble",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2531",
    iri: "dbo:size_v",
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2971",
    iri: "dbo:ColourName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    "subproperty": [
      "property2231"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2953",
    iri: "dbo:rating",
    domain: "owl:Thing",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1158",
    iri: "dbo:otherFunction",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2920",
    iri: "dbo:danseScore",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2424",
    iri: "dbo:numberOfMatches",
    domain: "class482",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1502",
    iri: "dbo:managementRegion",
    domain: "class206",
    range: "class245",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1912",
    iri: "dbo:commander",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2037",
    iri: "dbo:presenter",
    domain: "class744",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3200",
    iri: "dbo:snowParkNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property890",
    iri: "dbo:border",
    domain: "class206",
    range: "class245",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3647",
    iri: "dbo:Automobile/wheelbase",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1027",
    iri: "dbo:jureLanguage",
    domain: "owl:Thing",
    range: "class361",
    "equivalent": [
      "property1477",
      "property1755"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1746",
    iri: "dbo:riverMouth",
    domain: "class634",
    range: "class316",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2656",
    iri: "dbo:lunarLandingSite",
    domain: "class185",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1905",
    iri: "dbo:winsAtAsia",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2911",
    iri: "dbo:productionEndDate",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2457",
    iri: "dbo:School/campusSize",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2008",
    iri: "dbo:bourgmestre",
    domain: "class708",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1698",
    iri: "dbo:grades",
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3451",
    iri: "dbo:fdaUniiCode",
    comment: {
      "en": "FDA Unique Ingredient Identifier (UNII) code for a DBpedia Drug"
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property579",
    domain: "class188",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2672",
    iri: "dbo:disappearanceDate",
    domain: "class245",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property577",
    domain: "class698",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property578",
    domain: "class676",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2796",
    iri: "dbo:electionDate",
    domain: "class654",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1232",
    iri: "dbo:alumni",
    domain: "class207",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3347",
    iri: "dbo:model",
    domain: "class122",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property582",
    domain: "class234",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property583",
    domain: "class36",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property580",
    domain: "class323",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1007",
    iri: "dbo:schoolPatron",
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property581",
    domain: "class477",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property586",
    domain: "class527",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property587",
    domain: "class52",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property584",
    domain: "class351",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1142",
    iri: "dbo:proTeam",
    domain: "class682",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property585",
    domain: "class227",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2530",
    iri: "dbo:wimbledonSingle",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3232",
    iri: "dbo:trackLength",
    comment: {
      "en": "Length of the track. Wikipedians usually do not differentiate between track length and line lenght."
    },
    domain: "class74",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2800",
    iri: "dbo:voltageOfElectrification",
    comment: {
      "en": "Voltage of the electrification system."
    },
    domain: "class74",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2684",
    iri: "dbo:currentlyUsedFor",
    comment: {
      "en": "Current use of the architectural structure, if it is currently being used as anything other than its original purpose."
    },
    domain: "class99",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3327",
    iri: "dbo:interest",
    domain: "class630",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1958",
    iri: "dbo:termPeriod",
    domain: "owl:Thing",
    range: "class367",
    "superproperty": [
      "property1011"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property568",
    domain: "class772",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property569",
    domain: "class93",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property566",
    domain: "class460",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property567",
    domain: "class102",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2992",
    iri: "dbo:ecNumber",
    domain: "class761",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3316",
    iri: "dbo:subtitle",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property571",
    domain: "class661",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property572",
    domain: "class563",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property570",
    domain: "class88",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1969",
    iri: "dbo:nationality",
    domain: "class654",
    range: "class44",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property575",
    domain: "class663",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property576",
    domain: "class627",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property573",
    domain: "class33",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property574",
    domain: "class516",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1459",
    iri: "dbo:railwayLineUsingTunnel",
    comment: {
      "en": "Railway line that is using the tunnel."
    },
    domain: "class672",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1602",
    iri: "dbo:director",
    comment: {
      "en": "A film director is a person who directs the making of a film."
    },
    domain: "class237",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property830",
    iri: "dbo:previousInfrastructure",
    domain: "class604",
    range: "class604",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1948",
    iri: "dbo:hasAbsorbedMunicipality",
    domain: "class722",
    range: "class121",
    type: "owl:objectProperty"
  },
  {
    id: "property1254",
    iri: "dbo:drama",
    domain: "class385",
    range: "class524",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2749",
    iri: "dbo:chromosome",
    domain: "class496",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property557",
    domain: "class46",
    range: "class780",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3520",
    iri: "dbo:modelStartDate",
    domain: "class518",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property558",
    domain: "class537",
    range: "class780",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2402",
    iri: "dbo:numberOfNewlyIntroducedSports",
    domain: "class250",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property556",
    domain: "class677",
    range: "class782",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property559",
    domain: "class6",
    range: "class231",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property560",
    domain: "class32",
    range: "class195",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2644",
    iri: "dbo:numberBuilt",
    domain: "class528",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property561",
    domain: "class690",
    range: "class195",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2332",
    iri: "dbo:endYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property564",
    domain: "class92",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property565",
    domain: "class668",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property562",
    domain: "class187",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property563",
    domain: "class276",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1017",
    iri: "dbo:chairman",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1397",
    iri: "dbo:grossDomesticProductNominalPerCapita",
    domain: "class245",
    range: "class462",
    type: "owl:objectProperty"
  },
  {
    id: "property1281",
    iri: "dbo:award",
    domain: "class654",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2947",
    iri: "dbo:Weapon/weight",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2802",
    iri: "dbo:managementElevation",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3398",
    iri: "dbo:overallRecord",
    domain: "class123",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1964",
    iri: "dbo:mythology",
    domain: "class163",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property948",
    iri: "dbo:khlDraftTeam",
    domain: "class351",
    range: "class377",
    type: "owl:objectProperty"
  },
  {
    id: "property1332",
    iri: "dbo:rival",
    domain: "class356",
    range: "class356",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property546",
    domain: "class630",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2524",
    iri: "dbo:council",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property547",
    domain: "class288",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3586",
    iri: "dbo:alternativeTitle",
    comment: {
      "en": "The alternative title attributed to a work"
    },
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2807",
    iri: "dbo:Software/fileSize",
    comment: {
      "en": "size of a file or software"
    },
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property544",
    domain: "class245",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3509",
    iri: "dbo:arrestDate",
    domain: "class654",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property545",
    domain: "class225",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2930",
    iri: "dbo:areaDate",
    domain: "class105",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property548",
    domain: "class226",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property549",
    domain: "class3",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property550",
    domain: "class155",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2557",
    iri: "dbo:fauna",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property854",
    iri: "dbo:movement",
    comment: {
      "en": "artistic movement or school with which artist is associated"
    },
    domain: "class565",
    range: "owl:Thing",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1632",
    iri: "dbo:juniorSeason",
    domain: "class434",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property553",
    domain: "class807",
    range: "class725",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property554",
    domain: "class349",
    range: "class725",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property551",
    domain: "class740",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1327",
    iri: "dbo:relatedPlaces",
    comment: {
      "en": "This property is to accommodate the list field that contains a list of, e.g., monuments in the same town"
    },
    domain: "class105",
    range: "class156",
    "superproperty": [
      "property1773"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3270",
    iri: "dbo:MeanOfTransportation/weight",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3207",
    iri: "dbo:iafdId",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1845",
    iri: "dbo:previousMission",
    domain: "class185",
    range: "class185",
    "superproperty": [
      "property1028"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property535",
    domain: "class748",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property536",
    domain: "class10",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property533",
    domain: "class99",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3587",
    iri: "dbo:torqueOutput",
    "attributes": [
      "functional"
    ],
    domain: "class397",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property534",
    domain: "class337",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property539",
    domain: "class42",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2661",
    iri: "dbo:facilityId",
    domain: "class265",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property537",
    domain: "class176",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1547",
    iri: "dbo:organSystem",
    comment: {
      "en": "the organ system that a anatomical structure belongs to"
    },
    domain: "class455",
    range: "class455",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property538",
    domain: "class97",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2234",
    iri: "dbo:podiums",
    domain: "class317",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property542",
    domain: "class680",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3424",
    iri: "dbo:typeOfYeast",
    domain: "class537",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property543",
    domain: "class479",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1391",
    iri: "dbo:municipalityAbsorbedBy",
    domain: "class121",
    range: "class722",
    type: "owl:objectProperty"
  },
  {
    id: "property540",
    domain: "class459",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property541",
    domain: "class327",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1215",
    iri: "dbo:foundingPerson",
    domain: "class245",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1685",
    iri: "odesignp:isDescribedBy",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1487",
      "property1159",
      "property807",
      "property1183",
      "property1110",
      "property1513",
      "property1562",
      "property1629",
      "property1867"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2106",
    iri: "dbo:nationalTournamentGold",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2722",
    iri: "dbo:skiPisteKilometre",
    domain: "class105",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2810",
    iri: "dbo:militaryFunction",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property524",
    domain: "class480",
    range: "class371",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property525",
    domain: "class157",
    range: "class371",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property522",
    domain: "class301",
    range: "class371",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property523",
    domain: "class370",
    range: "class371",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property528",
    domain: "class133",
    range: "class384",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property529",
    domain: "class564",
    range: "class384",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2618",
    iri: "dbo:oldName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property526",
    domain: "class251",
    range: "class204",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property527",
    domain: "class704",
    range: "class384",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2246",
    iri: "dbo:finalLostDouble",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property531",
    domain: "class310",
    range: "class384",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1159",
    iri: "dbo:astrologicalSign",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property1685"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property532",
    domain: "class292",
    range: "class105",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3362",
    iri: "dbo:decommissioningDate",
    domain: "class736",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property530",
    domain: "class515",
    range: "class384",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3276",
    iri: "dbo:killedBy",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1829",
    iri: "dbo:team",
    domain: "owl:Thing",
    range: "class13",
    "equivalent": [
      "property1589"
    ],
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3734",
    iri: "dbo:distanceLaps",
    domain: "class793",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2910",
    iri: "dbo:worldTeamCup",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2145",
    iri: "dbo:Code",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    "subproperty": [
      "property3153",
      "property2329",
      "property2564"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2151",
    iri: "dbo:configuration",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property519",
    domain: "class665",
    range: "class271",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property864",
    iri: "dbo:patronSaint",
    domain: "class708",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3543",
    iri: "dbo:particularSign",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2771",
    iri: "dbo:languageCode",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1637",
    iri: "dbo:ideology",
    domain: "class434",
    range: "class85",
    "superproperty": [
      "property897"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2247",
    iri: "dbo:uniprot",
    domain: "class761",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property513",
    domain: "class111",
    range: "class708",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property514",
    domain: "class522",
    range: "class708",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property511",
    domain: "class12",
    range: "class600",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3661",
    iri: "dbo:numberOfLaps",
    domain: "class40",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property512",
    domain: "class628",
    range: "class708",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2386",
    iri: "dbo:meshName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property517",
    domain: "class156",
    range: "class613",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property518",
    domain: "class790",
    range: "class271",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3281",
    iri: "dbo:symbol",
    comment: {
      "en": "HUGO Gene Symbol"
    },
    domain: "class761",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property515",
    domain: "class742",
    range: "class708",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3535",
    iri: "dbo:shortProgScore",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3747",
    iri: "dbo:agglomerationPopulationYear",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property516",
    domain: "class365",
    range: "class708",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3226",
    iri: "dbo:freeScoreCompetition",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property831",
    iri: "dbo:sourceConfluenceState",
    domain: "class634",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3476",
    iri: "dbo:stationEvaDuration",
    domain: "class185",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property520",
    domain: "class150",
    range: "class271",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property521",
    domain: "class407",
    range: "class371",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2272",
    iri: "dbo:serviceModule",
    domain: "class185",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1240",
    iri: "dbo:bronzeMedalist",
    domain: "class436",
    range: "class654",
    "superproperty": [
      "property1904",
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2965",
    iri: "dbo:lastPublicationDate",
    comment: {
      "en": "Date of the last publication."
    },
    domain: "class633",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2577",
    iri: "dbo:ascentDate",
    domain: "class327",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property509",
    domain: "class755",
    range: "class566",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1413",
    iri: "dbo:river",
    domain: "class105",
    range: "class634",
    "superproperty": [
      "property1699"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property502",
    domain: "class95",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property503",
    domain: "class64",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property500",
    domain: "class657",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property501",
    domain: "class449",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property506",
    domain: "class799",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property507",
    domain: "class45",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property504",
    domain: "class466",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3463",
    iri: "dbo:rankingsSingles",
    domain: "class275",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property505",
    domain: "class126",
    range: "class519",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property510",
    domain: "class309",
    range: "class134",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3065",
    iri: "dbo:laterality",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1599",
    iri: "dbo:sisterNewspaper",
    domain: "class559",
    range: "class559",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1347",
    iri: "odesignp:isPartOf",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1036",
      "property1681",
      "property992",
      "property1034",
      "property1358",
      "property1550",
      "property1613",
      "property915",
      "property963",
      "property1871",
      "property1523",
      "property1338",
      "property892",
      "property1090",
      "property858",
      "property813",
      "property1836",
      "property1448",
      "property1973",
      "property1356",
      "property765",
      "property2039",
      "property879",
      "property1035",
      "property1792",
      "property1663",
      "property1463",
      "property1880",
      "property884",
      "property925",
      "property1853",
      "property1260",
      "property1547",
      "property1440",
      "property1790",
      "property1165",
      "property1488",
      "property1234",
      "property1742"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property754",
    iri: "dbo:newspaper",
    domain: "class654",
    range: "class555",
    type: "owl:objectProperty"
  },
  {
    id: "property1207",
    iri: "dbo:majorVolcano",
    domain: "class680",
    range: "owl:Thing",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3231",
    iri: "dbo:selibrId",
    comment: {
      "en": "Authority data from the National Library of Sweden"
    },
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1115",
    iri: "dbo:secondDriver",
    domain: "class793",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3011",
    iri: "dbo:AutomobileEngine/pistonStroke",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property975",
    iri: "dbo:waterwayThroughTunnel",
    comment: {
      "en": "Waterway that goes through the tunnel."
    },
    domain: "class166",
    range: "owl:Thing",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2789",
    iri: "dbo:decay",
    domain: "class73",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1161",
    iri: "dbo:humanDevelopmentIndex",
    comment: {
      "en": "a composite statistic used to rank countries by level of \"human development\""
    },
    domain: "class245",
    range: "class664",
    type: "owl:objectProperty"
  },
  {
    id: "property1314",
    iri: "odesignp:sameSettingAs",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property939",
      "property1380",
      "property1575",
      "property1253",
      "property1489",
      "property1764",
      "property804",
      "property905",
      "property1687",
      "property1846",
      "property2036",
      "property1851",
      "property2008",
      "property1784",
      "property1219",
      "property1782",
      "property874",
      "property833",
      "property1925",
      "property850",
      "property971",
      "property1255",
      "property1656",
      "property1483",
      "property1507",
      "property793",
      "property759",
      "property1748",
      "property1424",
      "property1303",
      "property972",
      "property798",
      "property941",
      "property1135",
      "property1588",
      "property1086",
      "property1990",
      "property1653",
      "property1999",
      "property1741",
      "property1553",
      "property1210",
      "property1452",
      "property1039",
      "property1747",
      "property1516",
      "property1698",
      "property1423",
      "property1261",
      "property1852",
      "property1590",
      "property988",
      "property1881",
      "property1821",
      "property1449",
      "property1296",
      "property958",
      "property1582",
      "property1892",
      "property1430",
      "property1951",
      "property1501",
      "property1160",
      "property1077",
      "property1319",
      "property1894",
      "property814",
      "property1297",
      "property1444",
      "property1695",
      "property944",
      "property1984",
      "property1502",
      "property752",
      "property1943",
      "property1396",
      "property1619",
      "property1273",
      "property1963",
      "property980",
      "property1125",
      "property1604",
      "property1597",
      "property1412",
      "property1655",
      "property1633",
      "property1366",
      "property1645",
      "property1662",
      "property953",
      "property1580",
      "property1055",
      "property864",
      "property1042",
      "property1153",
      "property1783",
      "property1730",
      "property1277",
      "property1433",
      "property2023",
      "property1718",
      "property873",
      "property830",
      "property1339",
      "property1862",
      "property1959",
      "property1866",
      "property1270",
      "property970",
      "property1643",
      "property1532",
      "property1680",
      "property731",
      "property1945",
      "property1173",
      "property1201",
      "property930",
      "property996",
      "property1007",
      "property1842",
      "property1373",
      "property1312",
      "property1799",
      "property1713",
      "property918",
      "property1816",
      "property1918",
      "property1814",
      "property1300",
      "property1879",
      "property1599",
      "property1872",
      "property1700",
      "property1726",
      "property1793",
      "property924",
      "property1878",
      "property1529",
      "property1105",
      "property806",
      "property1819",
      "property1001",
      "property1640",
      "property1274",
      "property1131",
      "property1048",
      "property1512",
      "property1720",
      "property909",
      "property1112",
      "property881",
      "property1839",
      "property1689",
      "property785",
      "property1143",
      "property1443",
      "property1833",
      "property1239",
      "property1415",
      "property829",
      "property1149",
      "property2015",
      "property1809",
      "property1716",
      "property1437",
      "property1970",
      "property1578",
      "property1910",
      "property1519",
      "property1044",
      "property1271",
      "property1102"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property739",
    iri: "dbo:mainOrgan",
    domain: "class588",
    range: "owl:Thing",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2769",
    iri: "dbo:passengersUsedSystem",
    comment: {
      "en": "System the passengers are using (from which the passenger statistics are)."
    },
    domain: "class395",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2830",
    iri: "dbo:cmykCoordinateCyanic",
    domain: "class212",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3417",
    iri: "dbo:hof",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3687",
    iri: "dbo:dateAgreement",
    domain: "class105",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2162",
    iri: "dbo:railwayPlatforms",
    comment: {
      "en": "Information on the type of platform(s) at the station."
    },
    domain: "class395",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property776",
    iri: "dbo:winsAtAlpg",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3508",
    iri: "dbo:codeProvincialMonument",
    comment: {
      "en": "Code assigned to (Dutch) monuments at the provincial level, mostly for monuments in the countryside, or for waterworks"
    },
    domain: "class105",
    range: "xds:string",
    "superproperty": [
      "property2556"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1078",
    iri: "dbo:ncaaTeam",
    domain: "class416",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property1172",
    iri: "dbo:announcedFrom",
    domain: "class654",
    range: "class105",
    type: "owl:objectProperty"
  },
  {
    id: "property3763",
    iri: "dbo:refpol",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property946",
    iri: "dbo:associateStar",
    domain: "owl:Thing",
    range: "class133",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3514",
    iri: "dbo:wptItm",
    domain: "class437",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1591",
    iri: "dbo:tribus",
    domain: "class271",
    range: "class271",
    type: "owl:objectProperty"
  },
  {
    id: "property783",
    iri: "dbo:branchFrom",
    domain: "class455",
    range: "class455",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3301",
    iri: "dbo:formationDate",
    domain: "class588",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3691",
    iri: "dbo:numberOfOfficials",
    domain: "class514",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1526",
    iri: "odesignp:concretelyExpresses",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property859"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3349",
    iri: "dbo:creationYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2694",
    iri: "dbo:omim",
    domain: "class761",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1339",
    iri: "dbo:previousWork",
    domain: "class388",
    range: "class388",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property742",
    iri: "dbo:drainsFrom",
    domain: "class455",
    range: "class455",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3431",
    iri: "dbo:senior",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2472",
    iri: "dbo:victoryAsMgr",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1615",
    iri: "dbo:regionalCouncil",
    domain: "class434",
    range: "class602",
    type: "owl:objectProperty"
  },
  {
    id: "property2164",
    iri: "dbo:scene",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2100",
    iri: "dbo:ccaState",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property780",
    iri: "dbo:selection",
    comment: {
      "en": "when (or in which project) the person was selected to train as an astronaut"
    },
    domain: "class28",
    range: "owl:Thing",
    "superproperty": [
      "property1011"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2215",
    iri: "dbo:titleSingle",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1182",
    iri: "dbo:collaboration",
    domain: "class654",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property3062",
    iri: "dbo:eventDate",
    domain: "class105",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2988",
    iri: "dbo:isPeerReviewed",
    comment: {
      "en": "In academia peer review is often used to determine an academic papers suitability for publication."
    },
    domain: "class257",
    range: "xds:boolean",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3091",
    iri: "dbo:derivedWord",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1580",
    iri: "dbo:patent",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2943",
    iri: "dbo:landArea",
    domain: "class105",
    range: "xds:double",
    "equivalent": [
      "property2405",
      "property2260"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1469",
    iri: "dbo:firstFlight",
    domain: "class221",
    range: "class185",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1292",
    iri: "dbo:soccerTournamentMostSteady",
    domain: "class131",
    range: "class393",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1060",
    iri: "dbo:localizationThumbnail",
    domain: "class245",
    range: "owl:Thing",
    "superproperty": [
      "property1124"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3132",
    iri: "dbo:rgbCoordinateGreen",
    domain: "class212",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1491",
    iri: "dbo:follows",
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property3636",
    iri: "dbo:synonym",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3213",
    iri: "dbo:hallOfFame",
    domain: "class351",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property961",
    iri: "dbo:leaderName",
    domain: "class245",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2239",
    iri: "dbo:protectionStatus",
    comment: {
      "en": "The sort of status that is granted to a protected Building or Monument. This is not about being protected or not, this is about the nature of the protection regime. E.g., in the Netherlands the protection status 'rijksmonument' points to more elaborate protection than other statuses."
    },
    domain: "class105",
    range: "xds:string",
    "superproperty": [
      "property3209"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1775",
    iri: "dbo:literaryGenre",
    comment: {
      "en": "A literary genre is a category of literary composition. Genres may be determined by literary technique, tone, content, or even (as in the case of fiction) length."
    },
    domain: "class633",
    range: "owl:Thing",
    "superproperty": [
      "property1408",
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2198",
    iri: "dbo:diameter",
    "attributes": [
      "functional"
    ],
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3148",
    iri: "dbo:policeName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1981",
    iri: "dbo:mentor",
    comment: {
      "en": "A wise and trusted counselor or teacher"
    },
    domain: "class565",
    range: "class565",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1600",
    iri: "dbo:homeport",
    domain: "class736",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1758",
    iri: "dbo:firstAscentPerson",
    domain: "class327",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1303",
    iri: "dbo:damsire",
    domain: "class809",
    range: "class809",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3478",
    iri: "dbo:freeProgScore",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1871",
    iri: "dbo:district",
    domain: "class105",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3277",
    iri: "dbo:equity",
    domain: "class711",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3459",
    iri: "dbo:numberOfMembers",
    domain: "class68",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property599",
    domain: "class31",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1357",
    iri: "dbo:headquarter",
    domain: "class588",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3284",
    iri: "dbo:Planet/maximumTemperature",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3243",
    iri: "dbo:artisticFunction",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1297",
    iri: "dbo:majorShrine",
    domain: "class390",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property774",
    iri: "dbo:boxerStyle",
    domain: "class772",
    range: "class808",
    type: "owl:objectProperty"
  },
  {
    id: "property1542",
    iri: "dbo:leadTeam",
    domain: "class682",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property2126",
    iri: "dbo:teamPoint",
    domain: "class416",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2286",
    iri: "dbo:range",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1245",
    iri: "dbo:place",
    domain: "class253",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2288",
    iri: "dbo:conservationStatus",
    domain: "class271",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2811",
    iri: "dbo:currencyCode",
    comment: {
      "en": "ISO 4217 currency designators."
    },
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3466",
    iri: "dbo:visitorsTotal",
    domain: "class99",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1742",
    iri: "dbo:sovereignCountry",
    domain: "class105",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property902",
    iri: "dbo:careerStation",
    comment: {
      "en": "this property links to a step in the career of a person, e.g. a soccer player, holding information on the time span, matches and goals he or she achieved at a club."
    },
    domain: "class654",
    range: "class482",
    "superproperty": [
      "property1011"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2046",
    iri: "dbo:names",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3666",
    iri: "dbo:rolandGarrosMixed",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property588",
    domain: "class765",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property589",
    domain: "class687",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property593",
    domain: "class89",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property594",
    domain: "class96",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property591",
    domain: "class437",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property592",
    domain: "class18",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property597",
    domain: "class804",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property598",
    domain: "class473",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3006",
    iri: "dbo:endowment",
    domain: "class588",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property595",
    domain: "class694",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property596",
    domain: "class374",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1717",
    iri: "dbo:domain",
    domain: "class271",
    range: "owl:Thing",
    "superproperty": [
      "property1658"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2686",
    iri: "dbo:case",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3014",
    iri: "dbo:cosparId",
    comment: {
      "en": "Described at http://en.wikipedia.org/wiki/International_Designator"
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1844",
    iri: "dbo:fastestDriver",
    domain: "class793",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property590",
    domain: "class284",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property922",
    iri: "dbo:engineType",
    domain: "class518",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2678",
    iri: "dbo:icdo",
    domain: "class91",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2184",
    iri: "dbo:Spacecraft/cargoWater",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2868",
    iri: "dbo:failedLaunches",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1521",
    iri: "dbo:origin",
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3659",
    iri: "dbo:individualisedGnd",
    comment: {
      "en": "GND (Gemeinsame Normdatei) is an international authority file for the organisation of personal names, subject headings and corporate bodies from catalogues. It is used mainly for documentation in libraries and archives. The GND is managed by the German National Library in cooperation with various library networks. The GND falls under the Creative Commons Zero(CC0) license."
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3498",
    iri: "dbo:sardinianName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2945",
    iri: "dbo:latestReleaseDate",
    "attributes": [
      "functional"
    ],
    domain: "class1",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2334",
    iri: "dbo:deathDate",
    "attributes": [
      "functional"
    ],
    domain: "class654",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2780",
    iri: "dbo:PopulatedPlace/populationDensity",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3156",
    iri: "dbo:draftRound",
    domain: "class323",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3105",
    iri: "dbo:deathAge",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1949",
    iri: "dbo:denomination",
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property1124"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1044",
    iri: "dbo:vicePrincipalLabel",
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2002",
    iri: "dbo:riverBranch",
    domain: "class634",
    range: "class634",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2248",
    iri: "dbo:motto",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3643",
    iri: "dbo:numberOfCountries",
    domain: "class201",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property925",
    iri: "dbo:municipality",
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1445",
    iri: "dbo:sportDiscipline",
    comment: {
      "en": "the sport discipline the athlete practices, e.g. Diving, or that a board member of a sporting club is focussing at"
    },
    domain: "class654",
    range: "class69",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2839",
    iri: "dbo:flagBorder",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1802",
    iri: "dbo:distributingLabel",
    domain: "class153",
    range: "class153",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1569",
    iri: "dbo:thirdDriver",
    domain: "class793",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3561",
    iri: "dbo:criteria",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2259",
    iri: "dbo:supplementalDraftYear",
    domain: "class323",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1706",
    iri: "dbo:nobelLaureates",
    domain: "class356",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2316",
    iri: "dbo:localPhonePrefix",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2942",
    iri: "dbo:landskap",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3358",
    iri: "dbo:worldTournamentSilver",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3522",
    iri: "dbo:partialFailedLaunches",
    comment: {
      "en": "total number of launches resulting in partial failure"
    },
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2987",
    iri: "dbo:numberOfCapitalDeputies",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2991",
    iri: "dbo:depthQuote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property926",
    iri: "dbo:giniCoefficientCategory",
    domain: "class245",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property941",
    iri: "dbo:education",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3314",
    iri: "dbo:functionStartDate",
    domain: "class125",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3744",
    iri: "dbo:numberOfVineyards",
    domain: "class155",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1830",
    iri: "dbo:militaryUnit",
    comment: {
      "en": "For persons who are not notable as commanding officers, the unit (company, battalion, regiment, etc.) in which they served."
    },
    domain: "class752",
    range: "class715",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3410",
    iri: "dbo:titleLanguage",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1755",
    iri: "dbo:deFactoLanguage",
    domain: "owl:Thing",
    range: "class361",
    "equivalent": [
      "property1027",
      "property1477"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property958",
    iri: "dbo:keyPerson",
    domain: "owl:Thing",
    range: "class654",
    "subproperty": [
      "property1656"
    ],
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3485",
    iri: "dbo:fileExtension",
    domain: "class241",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2050",
    iri: "dbo:cityRank",
    comment: {
      "en": "Place of the building in the list of the highest buildings in the city"
    },
    domain: "class45",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3617",
    iri: "dbo:amateurDefeat",
    domain: "class772",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3696",
    iri: "dbo:numberOfCounties",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2917",
    iri: "dbo:abstract",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3092",
    iri: "dbo:numberOfIntercommunality",
    domain: "class566",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property984",
    iri: "dbo:museumType",
    comment: {
      "en": "This property has been added  because 'buildingType' is much more about the place, whereas 'museumType' is about the way the place is being (or:was) used"
    },
    domain: "class95",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1132",
    iri: "dbo:port1",
    comment: {
      "en": "first docking port of a spacecraft"
    },
    domain: "class73",
    range: "owl:Thing",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1540",
    iri: "dbo:playerInTeam",
    comment: {
      "en": "A person playing for the sports team."
    },
    domain: "class13",
    range: "class654",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1144",
    iri: "dbo:port2",
    comment: {
      "en": "second docking port of a spacecraft"
    },
    domain: "class73",
    range: "owl:Thing",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1422",
    iri: "dbo:fastestDriverTeam",
    domain: "class793",
    range: "class13",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2438",
    iri: "dbo:nflCode",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3338",
    iri: "dbo:statisticYear",
    domain: "class668",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2062",
    iri: "dbo:maximumDischarge",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2544",
    iri: "dbo:abbeychurchBlessingCharge",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property855",
    iri: "odesignp:coparticipatesWith",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1108",
      "property1768",
      "property1954",
      "property1037",
      "property1903",
      "property1206",
      "property1911",
      "property1754",
      "property735",
      "property1063",
      "property1896",
      "property1156",
      "property1331",
      "property1760",
      "property1181",
      "property1164",
      "property1876",
      "property1916",
      "property1111",
      "property1362",
      "property1342",
      "property1697",
      "property889",
      "property1933",
      "property1137",
      "property1232",
      "property1955",
      "property1987",
      "property1388",
      "property863",
      "property1795",
      "property1493",
      "property1962",
      "property1476",
      "property1587",
      "property1049",
      "property871",
      "property1668",
      "property1767",
      "property1317",
      "property1671",
      "property1868",
      "property1281",
      "property885",
      "property960",
      "property851",
      "property1166",
      "property1067",
      "property1704",
      "property1109",
      "property900",
      "property868",
      "property1777",
      "property976",
      "property768",
      "property1309",
      "property1497",
      "property1017",
      "property1455",
      "property1220",
      "property945",
      "property1139",
      "property1447",
      "property1289",
      "property1033",
      "property1242",
      "property1938",
      "property1128",
      "property938",
      "property1535",
      "property1177",
      "property1912",
      "property852",
      "property1594",
      "property784",
      "property761",
      "property1743",
      "property1387",
      "property1265",
      "property1191",
      "property1509",
      "property1660",
      "property1058",
      "property1470",
      "property1672",
      "property1917",
      "property982",
      "property876",
      "property1511",
      "property1352",
      "property1769",
      "property1556",
      "property1246",
      "property1998",
      "property1133",
      "property1992",
      "property1213",
      "property1899",
      "property1602",
      "property1178",
      "property1051",
      "property1802",
      "property1367",
      "property1665",
      "property1353",
      "property1479",
      "property1831",
      "property1995",
      "property1554",
      "property1787",
      "property1788",
      "property1850",
      "property1151",
      "property1919",
      "property1648",
      "property1321",
      "property1758",
      "property2028",
      "property1661",
      "property1914",
      "property1280",
      "property1154",
      "property1385",
      "property1464",
      "property1215",
      "property1363",
      "property1517",
      "property737",
      "property1355",
      "property1081",
      "property1085",
      "property1192",
      "property903",
      "property1376",
      "property893",
      "property1827",
      "property1884",
      "property1400",
      "property1392",
      "property1072",
      "property1956",
      "property1985",
      "property1252",
      "property1707",
      "property840",
      "property989",
      "property1263",
      "property901",
      "property1477",
      "property1986",
      "property1952",
      "property757",
      "property961",
      "property1886",
      "property1032",
      "property1311",
      "property1197",
      "property1014",
      "property741",
      "property1598",
      "property1194",
      "property1530",
      "property805",
      "property1981",
      "property2004",
      "property1652",
      "property2013",
      "property1557",
      "property1075",
      "property1337",
      "property1351",
      "property1647",
      "property1650",
      "property1706",
      "property1694",
      "property1411",
      "property791",
      "property1927",
      "property1428",
      "property911",
      "property1070",
      "property1386",
      "property748",
      "property1873",
      "property1628",
      "property1686",
      "property1130",
      "property1494",
      "property839",
      "property836",
      "property1006",
      "property762",
      "property1082",
      "property2005",
      "property2006",
      "property848",
      "property1805",
      "property1522",
      "property1481",
      "property1989",
      "property1459",
      "property1711",
      "property1781",
      "property740",
      "property1644",
      "property1104",
      "property1332",
      "property1389",
      "property1731",
      "property1957",
      "property1106",
      "property1898",
      "property991",
      "property1414",
      "property1576",
      "property736",
      "property1520",
      "property1617",
      "property1222",
      "property1739",
      "property1609",
      "property1432",
      "property1596",
      "property1909",
      "property993",
      "property1606"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2098",
    iri: "dbo:reign",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3306",
    iri: "dbo:wsopWinYear",
    domain: "class437",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1904",
    iri: "dbo:Medalist",
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1240",
      "property750",
      "property1939"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2261",
    iri: "dbo:SpaceMission/lunarSampleMass",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3584",
    iri: "dbo:sharingOutPopulationYear",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1483",
    iri: "dbo:company",
    domain: "owl:Thing",
    range: "class588",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2005",
    iri: "dbo:producer",
    comment: {
      "en": "The producer of the creative work."
    },
    domain: "class388",
    range: "class434",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2006",
    iri: "dbo:produces",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2854",
    iri: "dbo:codeSettlement",
    domain: "class708",
    range: "xds:string",
    "subproperty": [
      "property3685"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1054",
    iri: "dbo:academicDiscipline",
    comment: {
      "en": "An academic discipline, or field of study, is a branch of knowledge that is taught and researched at the college or university level. Disciplines are defined (in part), and recognized by the academic journals in which research is published, and the learned societies and academic departments or faculties to which their practitioners belong."
    },
    domain: "class257",
    range: "owl:Thing",
    "superproperty": [
      "property1176"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2325",
    iri: "dbo:maximumDepth",
    domain: "class105",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1556",
    iri: "dbo:dean",
    domain: "class207",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1141",
    iri: "dbo:minority",
    domain: "class708",
    range: "class318",
    type: "owl:objectProperty"
  },
  {
    id: "property3079",
    iri: "dbo:escalafon",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2817",
    iri: "dbo:eyes",
    comment: {
      
    },
    domain: "class385",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property821",
    iri: "dbo:birthSign",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property3066",
    iri: "dbo:titleDate",
    domain: "class654",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property838",
    iri: "dbo:followingEvent",
    domain: "class497",
    range: "class497",
    "superproperty": [
      "property782"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1360",
    iri: "dbo:garrison",
    domain: "class715",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2102",
    iri: "dbo:AutomobileEngine/topSpeed",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3637",
    iri: "dbo:reportingMark",
    comment: {
      "en": "A reporting mark is a two-, three-, or four-letter alphabetic code used to identify owners or lessees of rolling stock and other equipment used on the North American railroad network."
    },
    domain: "class209",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3649",
    iri: "dbo:brainInfoType",
    domain: "class451",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1014",
    iri: "dbo:manager",
    domain: "class13",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1537",
    iri: "dbo:nationalSelection",
    domain: "class434",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2071",
    iri: "dbo:distanceToBelfast",
    domain: "class708",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1046",
    iri: "dbo:neighboringMunicipality",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1699"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1160",
    iri: "dbo:lessPopulatedCountry",
    domain: "class44",
    range: "class44",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1552",
    iri: "dbo:openingTheme",
    domain: "class744",
    range: "class388",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1549",
    iri: "dbo:winsAtNWIDE",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2985",
    iri: "dbo:volcanicActivity",
    domain: "class206",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3648",
    iri: "dbo:lowerEarthOrbitPayload",
    comment: {
      "en": "Payload mass in a typical Low Earth orbit"
    },
    domain: "class580",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property869",
    iri: "dbo:wineProduced",
    domain: "class155",
    range: "owl:Thing",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3061",
    iri: "dbo:coastLine",
    domain: "class708",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1525",
    iri: "dbo:competition",
    domain: "class453",
    range: "class497",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property770",
    iri: "dbo:soccerTournamentMostSuccesfull",
    domain: "class131",
    range: "class393",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property885",
    iri: "dbo:baftaAward",
    domain: "class565",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property618",
    domain: "class598",
    range: "class608",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property619",
    domain: "class808",
    range: "class608",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property612",
    domain: "class196",
    range: "class321",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property835",
    iri: "dbo:novel",
    domain: "class385",
    range: "class274",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property613",
    domain: "class795",
    range: "class321",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property610",
    domain: "class263",
    range: "class794",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property611",
    domain: "class534",
    range: "class321",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3753",
    iri: "dbo:port1DockedTime",
    domain: "class73",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property614",
    domain: "class650",
    range: "class39",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2525",
    iri: "dbo:deme",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3526",
    iri: "dbo:distanceToLondon",
    domain: "class708",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property615",
    domain: "class550",
    range: "class39",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3709",
    iri: "dbo:refseqprotein",
    domain: "class761",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2273",
    iri: "dbo:noteOnPlaceOfBurial",
    domain: "class752",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property620",
    domain: "class257",
    range: "class555",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2233",
    iri: "dbo:nationalTournamentSilver",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2359",
    iri: "dbo:visitorsPerYear",
    domain: "class99",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3308",
    iri: "dbo:iupacName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2305",
    iri: "dbo:totalPopulation",
    domain: "class264",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property609",
    domain: "class595",
    range: "class794",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3461",
    iri: "dbo:communityIsoCode",
    domain: "class245",
    range: "xds:string",
    "superproperty": [
      "property2674"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property607",
    domain: "class280",
    range: "class387",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property608",
    domain: "class210",
    range: "class387",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3393",
    iri: "dbo:ChemicalSubstance/meltingPoint",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property601",
    domain: "class332",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property602",
    domain: "class695",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property600",
    domain: "class546",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2503",
    iri: "dbo:ChemicalSubstance/boilingPoint",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property605",
    domain: "class72",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3254",
    iri: "dbo:serviceEndDate",
    domain: "class752",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property606",
    domain: "class498",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property603",
    domain: "class275",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1853",
    iri: "dbo:oldDistrict",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property604",
    domain: "class145",
    range: "class416",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1831",
    iri: "dbo:editing",
    domain: "class237",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2788",
    iri: "dbo:sharingOutArea",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1211",
    iri: "dbo:britishWins",
    domain: "class654",
    range: "class47",
    type: "owl:objectProperty"
  },
  {
    id: "property3623",
    iri: "dbo:endangeredSince",
    domain: "class105",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2211",
    iri: "dbo:qatarClassic",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2462",
    iri: "dbo:Galaxy/meanTemperature",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1154",
    iri: "dbo:formerCoach",
    domain: "class698",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3040",
    iri: "dbo:meanRadius",
    domain: "class515",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3027",
    iri: "dbo:numberOfProfessionals",
    comment: {
      "en": "number of people who earns his living from a specified activity."
    },
    domain: "class701",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3325",
    iri: "dbo:Galaxy/periapsis",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1272",
    iri: "dbo:programmingLanguage",
    domain: "class1",
    range: "owl:Thing",
    "superproperty": [
      "property1124"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1557",
    iri: "dbo:musicalArtist",
    domain: "class258",
    range: "class281",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2968",
    iri: "dbo:finalPublicationDate",
    comment: {
      "en": "Date of the final publication."
    },
    domain: "class555",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3234",
    iri: "dbo:episode",
    domain: "class385",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1213",
    iri: "dbo:destination",
    domain: "class90",
    range: "class245",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1838",
    iri: "dbo:targetSpaceStation",
    domain: "class73",
    range: "class101",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2152",
    iri: "dbo:cashPrice",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3488",
    iri: "dbo:votesFor",
    domain: "class439",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2412",
    iri: "dbo:europeanUnionEntranceDate",
    domain: "class44",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1264",
    iri: "dbo:closingFilm",
    domain: "class650",
    range: "class237",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2351",
    iri: "dbo:minorityFloorLeader",
    comment: {
      "en": "number of office holder"
    },
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3452",
    iri: "dbo:wingspan",
    domain: "class528",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3582",
    iri: "dbo:blackLongDistancePisteNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2331",
    iri: "dbo:activeYearsEndDateMgr",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2471",
    iri: "dbo:messierName",
    comment: {
      "en": "Name for Messier objects"
    },
    domain: "class384",
    range: "xds:string",
    "superproperty": [
      "property1864"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3607",
    iri: "dbo:distanceToCharingCross",
    domain: "class708",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1939",
    iri: "dbo:silverMedalist",
    domain: "class436",
    range: "class654",
    "superproperty": [
      "property1904",
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3671",
    iri: "dbo:gridReference",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2526",
    iri: "dbo:phonePrefix",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2218",
    iri: "dbo:routeTypeAbbreviation",
    comment: {
      "en": "The route type abbreviation (eg.: I for Interstate, M for Motorway or NJ for New Jersey Route)."
    },
    domain: "class74",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2026",
    iri: "dbo:bodyDiscovered",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2758",
    iri: "dbo:goldMedalMixed",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2279",
    iri: "dbo:kindOfCoordinate",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2964",
    iri: "dbo:Spacecraft/totalMass",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1353",
    iri: "dbo:doctoralStudent",
    domain: "class299",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1641",
    iri: "dbo:winsAtSun",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2872",
    iri: "dbo:currentRank",
    domain: "class374",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3516",
    iri: "dbo:imposedDanseScore",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2307",
    iri: "dbo:mapDescription",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2549",
    iri: "dbo:peopleName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3652",
    iri: "dbo:isniId",
    comment: {
      "en": "ISNI is a method for uniquely identifying the public identities of contributors to media content such as books, TV programmes, and newspaper articles."
    },
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2086",
    iri: "dbo:pluviometry",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2538",
    iri: "dbo:endYearOfInsertion",
    domain: "class397",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3589",
    iri: "dbo:areaLand",
    domain: "class105",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2137",
    iri: "dbo:netIncome",
    "attributes": [
      "functional"
    ],
    domain: "class711",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3192",
    iri: "dbo:otherChannel",
    domain: "class381",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3214",
    iri: "dbo:avifaunaPopulation",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3690",
    iri: "dbo:numberOfFilms",
    domain: "class739",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3195",
    iri: "dbo:Galaxy/temperature",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3474",
    iri: "dbo:duration",
    comment: {
      "en": "The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format"
    },
    domain: "class497",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2513",
    iri: "dbo:numberOfPeopleAttending",
    domain: "class497",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2324",
    iri: "dbo:orcidId",
    comment: {
      "en": "Authority data on researchers, academics, etc. The ID range has been defined as a subset of the forthcoming ISNI range."
    },
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3193",
    iri: "dbo:hasNaturalBust",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3017",
    iri: "dbo:suppreddedDate",
    domain: "class390",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1901",
    iri: "dbo:administrativeDistrict",
    domain: "class708",
    range: "class245",
    type: "owl:objectProperty"
  },
  {
    id: "property2322",
    iri: "dbo:iucnCategory",
    domain: "class225",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2280",
    iri: "dbo:MeanOfTransportation/width",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3759",
    iri: "dbo:bibsysId",
    comment: {
      "en": "BIBSYS is a supplier of library and information systems for all Norwegian university Libraries, the National Library of Norway, college libraries, and a number of research libraries and institutions."
    },
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2226",
    iri: "dbo:municipalityType",
    domain: "class722",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3720",
    iri: "dbo:Lake/volume",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3548",
    iri: "dbo:statusManager",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1372",
    iri: "dbo:ethnicGroup",
    domain: "class245",
    range: "class264",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1998",
    iri: "dbo:deputy",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3340",
    iri: "dbo:areaRural",
    domain: "class245",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2297",
    iri: "dbo:Drug/boilingPoint",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2862",
    iri: "dbo:juniorYearsStartYear",
    domain: "class654",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2865",
    iri: "dbo:depictionDescription",
    comment: {
      "en": "This property can be used to map image captions from Infoboxes"
    },
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3453",
    iri: "dbo:setupTime",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property812",
    iri: "odesignp:hasRegion",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1162",
      "property1107"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1506",
    iri: "dbo:olympicOathSwornByAthlete",
    domain: "class250",
    range: "class654",
    "superproperty": [
      "property1545",
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2752",
    iri: "dbo:millsCodeDutch",
    domain: "class512",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2406",
    iri: "dbo:roofHeight",
    domain: "class45",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1582",
    iri: "dbo:landeshauptmann",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2615",
    iri: "dbo:illiteracy",
    domain: "class245",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2937",
    iri: "dbo:signature",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1256",
    iri: "dbo:otherMedia",
    domain: "class654",
    range: "class555",
    type: "owl:objectProperty"
  },
  {
    id: "property2022",
    iri: "dbo:pictureFormat",
    domain: "class381",
    range: "owl:Thing",
    "superproperty": [
      "property827"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3057",
    iri: "dbo:wsopWristband",
    domain: "class437",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3573",
    iri: "dbo:relief",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1824",
    iri: "dbo:shuttle",
    domain: "class185",
    range: "class221",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3364",
    iri: "dbo:Astronaut/timeInSpace",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1001",
    iri: "dbo:starring",
    domain: "class388",
    range: "class540",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property698",
    domain: "class720",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property699",
    domain: "class9",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1891",
    iri: "dbo:winsAtOtherTournaments",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1085",
    iri: "dbo:goldenCalfAward",
    domain: "class540",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2296",
    iri: "dbo:departmentPosition",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1814",
    iri: "dbo:similar",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1807",
    iri: "dbo:wikiPageInterLanguageLink",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2080",
    iri: "dbo:unlcCode",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1220",
    iri: "dbo:chancellor",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property689",
    domain: "class160",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1200",
    iri: "dbo:attorneyGeneral",
    comment: {
      "en": "Public attorney"
    },
    domain: "class231",
    range: "class654",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property687",
    domain: "class341",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3363",
    iri: "dbo:volcanoId",
    domain: "class206",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property688",
    domain: "class724",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1648",
    iri: "dbo:explorer",
    domain: "class564",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2128",
    iri: "dbo:alias",
    domain: "owl:Thing",
    range: "xds:string",
    "superproperty": [
      "property2278"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property692",
    domain: "class57",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property693",
    domain: "class386",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property690",
    domain: "class326",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property691",
    domain: "class344",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1031",
    iri: "dbo:linkedTo",
    domain: "class226",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property696",
    domain: "class789",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property697",
    domain: "class635",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property694",
    domain: "class791",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property695",
    domain: "class699",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2682",
    iri: "dbo:selectionPoint",
    domain: "class416",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3758",
    iri: "dbo:shipBeam",
    comment: {
      "en": "The beam of a ship is its width at the widest point."
    },
    domain: "class736",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3196",
    iri: "dbo:delegation",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property755",
    iri: "dbo:systemOfLaw",
    comment: {
      "en": "A referral to the relevant system of law"
    },
    domain: "class231",
    range: "class112",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1308",
    iri: "dbo:existence",
    comment: {
      
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2146",
    iri: "dbo:debut",
    domain: "class498",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2461",
    iri: "dbo:gun",
    domain: "class528",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property678",
    domain: "class435",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property679",
    domain: "class291",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property676",
    domain: "class549",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property677",
    domain: "class41",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2031",
    iri: "dbo:poleDriverTeam",
    domain: "class793",
    range: "class13",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1627",
    iri: "dbo:winsAtLET",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property681",
    domain: "class488",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property682",
    domain: "class545",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property680",
    domain: "class182",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2361",
    iri: "dbo:portfolio",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3684",
    iri: "dbo:colourHexCode",
    comment: {
      "en": "A colour represented by its hex code (e.g.: #FF0000 or #40E0D0)."
    },
    domain: "owl:Thing",
    range: "xds:string",
    "subproperty": [
      "property2879",
      "property3629"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property685",
    domain: "class222",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property686",
    domain: "class84",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property683",
    domain: "class684",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3570",
    iri: "dbo:idNumber",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property684",
    domain: "class40",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property892",
    iri: "dbo:federalState",
    domain: "class708",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3215",
    iri: "dbo:reference",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1994",
    iri: "dbo:routeJunction",
    comment: {
      "en": "A junction or cross to another route."
    },
    domain: "class74",
    range: "class74",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3239",
    iri: "dbo:cannonNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3680",
    iri: "dbo:undraftedYear",
    domain: "class323",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property667",
    domain: "class602",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property668",
    domain: "class686",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property665",
    domain: "class673",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property666",
    domain: "class13",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property670",
    domain: "class121",
    range: "class722",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property671",
    domain: "class797",
    range: "class556",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property674",
    domain: "class27",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property675",
    domain: "class417",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3445",
    iri: "dbo:AutomobileEngine/weight",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2427",
    iri: "dbo:commissioner",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property672",
    domain: "class165",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property673",
    domain: "class802",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2970",
    iri: "dbo:locationIdentifier",
    domain: "class142",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property957",
    iri: "dbo:takePlace",
    domain: "owl:Thing",
    range: "class105",
    type: "owl:objectProperty"
  },
  {
    id: "property988",
    iri: "dbo:homeStadium",
    domain: "owl:Thing",
    range: "class681",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1414",
    iri: "dbo:significantDesign",
    domain: "class474",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1911",
    iri: "dbo:aircraftAttack",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2302",
    iri: "dbo:municipalityCode",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1816",
    iri: "dbo:servingRailwayLine",
    comment: {
      "en": "Railway services that serve the station."
    },
    domain: "class395",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property656",
    domain: "class289",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3227",
    iri: "dbo:blueLongDistancePisteNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property657",
    domain: "class318",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property654",
    domain: "class207",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property655",
    domain: "class750",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1628",
    iri: "dbo:opponent",
    domain: "class654",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property658",
    domain: "class68",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property659",
    domain: "class715",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property660",
    domain: "class83",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2148",
    iri: "dbo:gross",
    domain: "class237",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property663",
    domain: "class209",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property664",
    domain: "class798",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property661",
    domain: "class213",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property662",
    domain: "class500",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property863",
    iri: "dbo:architect",
    domain: "class99",
    range: "class474",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1743",
    iri: "dbo:computingPlatform",
    comment: {
      "en": "some sort of hardware architecture or software framework, that allows this software to run"
    },
    domain: "class1",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property924",
    iri: "dbo:soccerTournamentThisSeason",
    domain: "class131",
    range: "class131",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3182",
    iri: "dbo:introductionDate",
    domain: "class518",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property645",
    domain: "class813",
    range: "class761",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property646",
    domain: "class496",
    range: "class761",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3078",
    iri: "dbo:egafdId",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property643",
    domain: "class269",
    range: "class353",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property644",
    domain: "class205",
    range: "class761",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property649",
    domain: "class320",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property647",
    domain: "class615",
    range: "class44",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property648",
    domain: "class61",
    range: "class401",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2495",
    iri: "dbo:highestPointIsland",
    domain: "class206",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2397",
    iri: "dbo:grossDomesticProductAsOf",
    domain: "class245",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property652",
    domain: "class712",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property653",
    domain: "class711",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3157",
    iri: "dbo:legislativePeriodName",
    comment: {
      "en": "The term of the on-going session (e.g.: \"40th Canadian Parliament\")."
    },
    domain: "class68",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property650",
    domain: "class381",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property651",
    domain: "class454",
    range: "class588",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2439",
    iri: "dbo:premiereDate",
    comment: {
      "en": "Date the play was first performed."
    },
    domain: "class427",
    range: "xds:date",
    "superproperty": [
      "property2833"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3479",
    iri: "dbo:elevatorCount",
    domain: "class519",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1573",
    iri: "dbo:position",
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2015",
    iri: "dbo:vehicle",
    comment: {
      "en": "vehicle that uses a specific automobile platform"
    },
    domain: "owl:Thing",
    range: "class811",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1757",
    iri: "dbo:relatedFunctions",
    comment: {
      "en": "This property is to accommodate the list field that contains a list of related personFunctions a person holds or has held"
    },
    domain: "class654",
    range: "class156",
    "superproperty": [
      "property1773"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1136",
    iri: "dbo:listItemOf",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3300",
    iri: "dbo:conservationStatusSystem",
    domain: "class271",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2105",
    iri: "dbo:landRegistryCode",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3048",
    iri: "dbo:draftLeague",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property634",
    domain: "class244",
    range: "class680",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1095",
    iri: "dbo:endReign",
    domain: "class654",
    range: "class47",
    type: "owl:objectProperty"
  },
  {
    id: "property635",
    domain: "class709",
    range: "class745",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property632",
    domain: "class266",
    range: "class680",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property633",
    domain: "class457",
    range: "class680",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property638",
    domain: "class557",
    range: "class605",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1917",
    iri: "dbo:creatorOfDish",
    comment: {
      "en": "The person that creates (invents) the food (eg. Caesar Cardini is the creator of the Caesar salad)."
    },
    domain: "class537",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property639",
    domain: "class513",
    range: "class69",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property636",
    domain: "class193",
    range: "class745",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property637",
    domain: "class82",
    range: "class612",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property641",
    domain: "class412",
    range: "class69",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1813",
    iri: "dbo:chain",
    comment: {
      "en": "The chain of Hotels this instance is associated with."
    },
    domain: "class657",
    range: "class711",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property642",
    domain: "class186",
    range: "class360",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3609",
    iri: "dbo:lengthReference",
    domain: "class74",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3395",
    iri: "dbo:authorityMandate",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property640",
    domain: "class608",
    range: "class69",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2501",
    iri: "dbo:mirDockings",
    domain: "class221",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1858",
    iri: "dbo:season",
    domain: "class434",
    range: "owl:Thing",
    "superproperty": [
      "property1011"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property629",
    domain: "class762",
    range: "class680",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1535",
    iri: "dbo:coachedTeam",
    domain: "class123",
    range: "class13",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3448",
    iri: "dbo:subsystemLink",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property623",
    domain: "class238",
    range: "class680",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property624",
    domain: "class316",
    range: "class680",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property621",
    domain: "class733",
    range: "class555",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property622",
    domain: "class559",
    range: "class555",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property627",
    domain: "class529",
    range: "class680",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property628",
    domain: "class366",
    range: "class680",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property625",
    domain: "class442",
    range: "class680",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property626",
    domain: "class525",
    range: "class680",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2299",
    iri: "dbo:greekName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2277",
    iri: "dbo:continentalTournamentBronze",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1290",
    iri: "dbo:producedBy",
    domain: "class237",
    range: "class711",
    type: "owl:objectProperty"
  },
  {
    id: "property630",
    domain: "class327",
    range: "class680",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property631",
    domain: "class430",
    range: "class680",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2054",
    iri: "dbo:pdb",
    domain: "class496",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3537",
    iri: "dbo:usSales",
    domain: "class122",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2982",
    iri: "dbo:careerPrizeMoney",
    domain: "class275",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1833",
    iri: "dbo:twinCity",
    domain: "class708",
    range: "class708",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2956",
    iri: "dbo:ist",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3108",
    iri: "dbo:GeopoliticalOrganisation/populationDensity",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2448",
    iri: "dbo:blazonLink",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3544",
    iri: "dbo:teamName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2111",
    iri: "dbo:frioulanName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2933",
    iri: "dbo:frequencyOfPublication",
    comment: {
      "en": "The frequency of periodical publication (eg. Weekly, Bimonthly)."
    },
    domain: "class555",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2645",
    iri: "dbo:start",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2949",
    iri: "dbo:characterInPlay",
    comment: {
      "en": "Name of a character in play."
    },
    domain: "class427",
    range: "xds:string",
    "subproperty": [
      "property3075",
      "property2061"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1116",
    iri: "dbo:nonFictionSubject",
    comment: {
      "en": "The subject of a non-fiction book (e.g.: History, Biography, Cookbook, Climate change, ...)."
    },
    domain: "class786",
    range: "owl:Thing",
    "superproperty": [
      "property1176"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1579",
    iri: "dbo:mouthMountain",
    domain: "class634",
    range: "class327",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2751",
    iri: "dbo:pronunciation",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2079",
    iri: "dbo:governmentElevation",
    domain: "class206",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1145",
    iri: "dbo:sharingOutName",
    domain: "class708",
    range: "class245",
    type: "owl:objectProperty"
  },
  {
    id: "property3259",
    iri: "dbo:density",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1318",
    iri: "dbo:otherFuelType",
    domain: "class108",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2815",
    iri: "dbo:climbUpNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2952",
    iri: "dbo:lunarSampleMass",
    domain: "class185",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1134",
    iri: "dbo:nrhpType",
    comment: {
      "en": "Type of historic place as defined by the US National Park Service. For instance National Historic Landmark, National Monument or National Battlefield."
    },
    domain: "class97",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1412",
    iri: "dbo:owningOrganisation",
    domain: "owl:Thing",
    range: "class588",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2901",
    iri: "dbo:goldMedalSingle",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2609",
    iri: "dbo:danseCompetition",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property744",
    iri: "dbo:constructionMaterial",
    comment: {
      "en": "Construction material (eg. concrete, steel, iron, stone, brick, wood)."
    },
    domain: "class99",
    range: "owl:Thing",
    "superproperty": [
      "property1045"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1942",
    iri: "dbo:locationCountry",
    comment: {
      "en": "Country the thing is located."
    },
    domain: "owl:Thing",
    range: "class44",
    "superproperty": [
      "property931",
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1545",
    iri: "dbo:olympicOathSwornBy",
    domain: "class250",
    range: "class654",
    "subproperty": [
      "property1506",
      "property1834"
    ],
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3695",
    iri: "dbo:otherServingLines",
    comment: {
      "en": "Connecting services that serve the station such as bus, etc."
    },
    domain: "class395",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property934",
    iri: "dbo:namedByLanguage",
    domain: "class105",
    range: "class105",
    type: "owl:objectProperty"
  },
  {
    id: "property1485",
    iri: "dbo:taoiseach",
    comment: {
      "en": "head of government of Ireland"
    },
    domain: "owl:Thing",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property3585",
    iri: "dbo:towerHeight",
    domain: "class519",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3396",
    iri: "dbo:nationalTeamYear",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1823",
    iri: "dbo:musicFusionGenre",
    domain: "class597",
    range: "class597",
    "superproperty": [
      "property1243"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1872",
    iri: "dbo:sisterStation",
    domain: "class381",
    range: "class381",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3482",
    iri: "dbo:olympicGamesWins",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2045",
    iri: "dbo:amateurTitle",
    domain: "class772",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2435",
    iri: "dbo:australiaOpenSingle",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3473",
    iri: "dbo:dorlandsPrefix",
    domain: "class455",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1797",
    iri: "dbo:state",
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2786",
    iri: "dbo:numberOfSpans",
    comment: {
      "en": "Number of spans or arches."
    },
    domain: "class749",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2257",
    iri: "dbo:albumRuntime",
    domain: "class135",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1012",
    iri: "dbo:version",
    domain: "class518",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2612",
    iri: "dbo:numberOfVisitors",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1274",
    iri: "dbo:storyEditor",
    domain: "class744",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2107",
    iri: "dbo:fedCup",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2895",
    iri: "dbo:firstAppearance",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1645",
    iri: "dbo:parentOrganisation",
    domain: "class588",
    range: "class588",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2689",
    iri: "dbo:circuitLength",
    domain: "class40",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3288",
    iri: "dbo:managerYearsStartYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2532",
    iri: "dbo:mbaId",
    comment: {
      "en": "MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public."
    },
    domain: "class565",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1497",
    iri: "dbo:cesarAward",
    domain: "class565",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property747",
    iri: "dbo:sourcePlace",
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2506",
    iri: "dbo:jstor",
    comment: {
      "en": "JSTOR number (short for Journal Storage) is a United States-based online system number for archiving academic journals."
    },
    domain: "class257",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2647",
    iri: "dbo:startYearOfSales",
    domain: "class122",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3166",
    iri: "dbo:nonProfessionalCareer",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3044",
    iri: "dbo:populationTotal",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1928",
    iri: "dbo:kingdom",
    comment: {
      "en": "In biology, kingdom (Latin: regnum, pl. regna) is a taxonomic rank, which is either the highest rank or in the more recent three-domain system, the rank below domain."
    },
    domain: "class271",
    range: "owl:Thing",
    "superproperty": [
      "property1658"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3050",
    iri: "dbo:bgafdId",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2512",
    iri: "dbo:manxName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1989",
    iri: "dbo:raceHorse",
    domain: "owl:Thing",
    range: "class392",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2059",
    iri: "dbo:course",
    domain: "class793",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1363",
    iri: "dbo:fourthCommander",
    domain: "class715",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1689",
    iri: "dbo:thirdCommander",
    domain: "class715",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1018",
    iri: "dbo:smallestCountry",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1241",
    iri: "dbo:agency",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2367",
    iri: "dbo:procedure",
    comment: {
      "en": "The name designating a formal collection of steps to be taken to complete the case"
    },
    domain: "class807",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2893",
    iri: "dbo:geneLocationEnd",
    comment: {
      "en": "the end of the gene"
    },
    domain: "class262",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3553",
    iri: "dbo:stateOfOriginYear",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3721",
    iri: "dbo:administrativeStatus",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2228",
    iri: "dbo:australiaOpenDouble",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1316",
    iri: "dbo:subdivision",
    domain: "class105",
    range: "class105",
    type: "owl:objectProperty"
  },
  {
    id: "property865",
    iri: "dbo:borough",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2260",
    iri: "dbo:waterArea",
    domain: "class105",
    range: "xds:double",
    "equivalent": [
      "property2405",
      "property2943"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2595",
    iri: "dbo:water",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2194",
    iri: "dbo:lahHof",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2801",
    iri: "dbo:productionStartYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2202",
    iri: "dbo:salary",
    domain: "class654",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2484",
    iri: "dbo:modelStartYear",
    domain: "class518",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3337",
    iri: "dbo:lethalOnChickens",
    domain: "class703",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1381",
    iri: "dbo:subFamily",
    domain: "class271",
    range: "class369",
    type: "owl:objectProperty"
  },
  {
    id: "property2903",
    iri: "dbo:meanTemperature",
    domain: "class515",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1388",
    iri: "dbo:anthem",
    domain: "class245",
    range: "class388",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1786",
    iri: "dbo:millType",
    domain: "class512",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1358",
    iri: "dbo:councilArea",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3449",
    iri: "dbo:birthName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2223",
    iri: "dbo:firstFlightStartDate",
    domain: "class221",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2857",
    iri: "dbo:numberOfSeats",
    domain: "class518",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2468",
    iri: "dbo:Planet/mass",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property996",
    iri: "dbo:schoolBoard",
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1473",
    iri: "dbo:parliament",
    domain: "class105",
    range: "class588",
    type: "owl:objectProperty"
  },
  {
    id: "property2915",
    iri: "dbo:iataAirlineCode",
    comment: {
      "en": "IATA designation for airline companies"
    },
    domain: "class90",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2419",
    iri: "dbo:amgid",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1996",
    iri: "dbo:island",
    domain: "class639",
    range: "class206",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1338",
    iri: "dbo:educationSystem",
    domain: "class207",
    range: "owl:Thing",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2061",
    iri: "dbo:muteCharacterInPlay",
    comment: {
      "en": "Name of a mute character in play."
    },
    domain: "class427",
    range: "xds:string",
    "superproperty": [
      "property2949"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2539",
    iri: "dbo:completionDate",
    domain: "class388",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3524",
    iri: "dbo:work",
    domain: "class385",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3019",
    iri: "dbo:inn",
    comment: {
      "en": "International Nonproprietary Name given to a pharmaceutical substance"
    },
    domain: "class115",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3748",
    iri: "dbo:humanDevelopmentIndexAsOf",
    domain: "class245",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2377",
    iri: "dbo:juniorYearsEndYear",
    domain: "class654",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3109",
    iri: "dbo:subjectOfPlay",
    comment: {
      "en": "The overall subject matter dealt with by the play."
    },
    domain: "class427",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1450",
    iri: "dbo:lunarRover",
    domain: "class185",
    range: "class518",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2337",
    iri: "dbo:publiclyAccessible",
    comment: {
      "en": "describes in what way this site is accessible for public"
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3179",
    iri: "dbo:speaker",
    comment: {
      "en": "number of office holder"
    },
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2352",
    iri: "dbo:block",
    domain: "class145",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2974",
    iri: "dbo:continentalTournamentGold",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property938",
    iri: "dbo:coach",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2558",
    iri: "dbo:geneLocationStart",
    comment: {
      "en": "the start of the gene coordinates"
    },
    domain: "class262",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2898",
    iri: "dbo:heisman",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1896",
    iri: "dbo:aircraftHelicopter",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3274",
    iri: "dbo:goldMedalDouble",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3540",
    iri: "dbo:areaQuote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2527",
    iri: "dbo:germanName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property827",
    iri: "odesignp:hasQuality",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1630",
      "property2035",
      "property1920",
      "property899",
      "property1733",
      "property1122",
      "property857",
      "property1406",
      "property1817",
      "property1114",
      "property2022",
      "property985",
      "property841",
      "property979"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3435",
    iri: "dbo:statusYear",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2835",
    iri: "dbo:campusType",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1843",
    iri: "dbo:weapon",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2681",
    iri: "dbo:victim",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1193",
    iri: "dbo:soccerTournamentLastChampion",
    domain: "class131",
    range: "class393",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property881",
    iri: "dbo:superintendent",
    domain: "class588",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2366",
    iri: "dbo:battingSide",
    domain: "class668",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2757",
    iri: "dbo:highestBuildingInYear",
    domain: "class45",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1380",
    iri: "dbo:alongside",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1995",
    iri: "dbo:editor",
    domain: "owl:Thing",
    range: "class434",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3054",
    iri: "dbo:arberishtName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3581",
    iri: "dbo:numberOfCollectionItems",
    comment: {
      "en": "Indication as to the size of the collection of this library"
    },
    domain: "class449",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3149",
    iri: "dbo:typeOfStorage",
    domain: "class537",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2700",
    iri: "dbo:tamazightSettlementName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1804",
    iri: "dbo:philosophicalSchool",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1576",
    iri: "dbo:significantProject",
    comment: {
      "en": "A siginificant artifact constructed by the person."
    },
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2414",
    iri: "dbo:commonName",
    comment: {
      "en": "The common name of an entity. Frequently, foaf:name is used for all of the different names of a person; this property just defines the most commonly used name."
    },
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1277",
    iri: "dbo:president",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2552",
    iri: "dbo:tempPlace",
    domain: "class177",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2284",
    iri: "dbo:eyeColor",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1968",
    iri: "dbo:amateurTeam",
    domain: "class682",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property2335",
    iri: "dbo:combatant",
    domain: "class253",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2089",
    iri: "dbo:refgen",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2090",
    iri: "dbo:refgeo",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2638",
    iri: "dbo:networth",
    domain: "class654",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2994",
    iri: "dbo:functionEndYear",
    domain: "class125",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2704",
    iri: "dbo:minimumAreaQuote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2221",
    iri: "dbo:weight",
    "attributes": [
      "functional"
    ],
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3348",
    iri: "dbo:ordination",
    domain: "class486",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3412",
    iri: "dbo:utcOffset",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1199",
    iri: "dbo:winsAtChampionships",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1296",
    iri: "dbo:influencedBy",
    domain: "class654",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2581",
    iri: "dbo:secondPlace",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3615",
    iri: "dbo:barPassRate",
    domain: "class356",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1344",
    iri: "dbo:openingFilm",
    domain: "class650",
    range: "class237",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2528",
    iri: "dbo:welshName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1787",
    iri: "dbo:endingTheme",
    domain: "class744",
    range: "class388",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2842",
    iri: "dbo:Galaxy/apoapsis",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2693",
    iri: "dbo:maidenVoyage",
    domain: "class736",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1084",
    iri: "dbo:lastRace",
    domain: "class317",
    range: "class793",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2490",
    iri: "dbo:coalition",
    comment: {
      
    },
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2710",
    iri: "dbo:shortProgCompetition",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2732",
    iri: "dbo:hgncid",
    domain: "class761",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2358",
    iri: "dbo:flora",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3725",
    iri: "dbo:passengersPerYear",
    comment: {
      "en": "Number of passengers per year."
    },
    domain: "class604",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1795",
    iri: "dbo:architectualBureau",
    domain: "class99",
    range: "class711",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2954",
    iri: "dbo:belgiumPoliticalSeats",
    domain: "class279",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3257",
    iri: "dbo:ceeb",
    domain: "class356",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1870",
    iri: "dbo:prefaceBy",
    domain: "class633",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property1605",
    iri: "dbo:musicSubgenre",
    domain: "class597",
    range: "class597",
    "superproperty": [
      "property823"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2294",
    iri: "dbo:parkingInformation",
    comment: {
      "en": "Information on station's parking facilities."
    },
    domain: "class395",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1900",
    iri: "dbo:poleDriverCountry",
    domain: "class793",
    range: "class44",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property972",
    iri: "dbo:delegateMayor",
    domain: "class245",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1234",
    iri: "dbo:sheading",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3630",
    iri: "dbo:MeanOfTransportation/diameter",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3315",
    iri: "dbo:formula",
    domain: "class703",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2456",
    iri: "dbo:geologicPeriod",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1720",
    iri: "dbo:subsidiary",
    domain: "class711",
    range: "class711",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property907",
    iri: "dbo:winsAtSenEuro",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1016",
    iri: "dbo:species",
    domain: "class271",
    range: "owl:Thing",
    "superproperty": [
      "property1658"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1884",
    iri: "dbo:goyaAward",
    domain: "class565",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1225",
    iri: "dbo:countryWithFirstSpaceflight",
    domain: "class268",
    range: "class44",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1770",
    iri: "dbo:routeStart",
    comment: {
      "en": "Start of the route. This is where the route begins and, for U.S. roads, is either at the southern terminus or western terminus."
    },
    domain: "class74",
    range: "class74",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2928",
    iri: "dbo:kinOfLanguage",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2180",
    iri: "dbo:abbreviation",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3580",
    iri: "dbo:sizeLogo",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2611",
    iri: "dbo:shoot",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3236",
    iri: "dbo:year",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3127",
    iri: "dbo:heightAgainst",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2283",
    iri: "dbo:firstGame",
    domain: "class393",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1587",
    iri: "dbo:assistantPrincipal",
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2859",
    iri: "dbo:Stream/watershed",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2310",
    iri: "dbo:established",
    domain: "class463",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3405",
    iri: "dbo:distanceToCardiff",
    domain: "class708",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property841",
    iri: "dbo:sexualOrientation",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property827"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property842",
    iri: "dbo:winsAtKLPGA",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1514",
    iri: "dbo:generalCouncil",
    domain: "class434",
    range: "class602",
    type: "owl:objectProperty"
  },
  {
    id: "property815",
    iri: "dbo:wikiPageHistoryLink",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2442",
    iri: "dbo:colourName",
    comment: {
      "en": "A colour represented by a string holding its name (e.g.: red or green)."
    },
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2677",
    iri: "dbo:homage",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1647",
    iri: "dbo:narrator",
    domain: "class237",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1733",
    iri: "dbo:complexion",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property827"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2095",
    iri: "dbo:Lake/areaOfCatchment",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1258",
    iri: "dbo:solventWithMediocreSolubility",
    domain: "class703",
    range: "class703",
    type: "owl:objectProperty"
  },
  {
    id: "property2463",
    iri: "dbo:mainIslands",
    domain: "class206",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3639",
    iri: "dbo:projectStartDate",
    comment: {
      "en": "The start date of the project."
    },
    domain: "class349",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2042",
    iri: "dbo:linkedSpace",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1076",
    iri: "dbo:fuelSystem",
    domain: "class397",
    range: "owl:Thing",
    "superproperty": [
      "property849"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3446",
    iri: "dbo:distanceToCapital",
    domain: "class708",
    range: "xds:double",
    "superproperty": [
      "property3764"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3429",
    iri: "dbo:thirdPlace",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3658",
    iri: "dbo:eurobabeIndexId",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3003",
    iri: "dbo:purchasingPowerParity",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property728",
    domain: "class70",
    range: "class248",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2652",
    iri: "dbo:regime",
    domain: "class73",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property729",
    domain: "class420",
    range: "class248",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property722",
    domain: "class811",
    range: "class21",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property723",
    domain: "class548",
    range: "class21",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property720",
    domain: "class79",
    range: "class145",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property721",
    domain: "class528",
    range: "class21",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property726",
    domain: "class75",
    range: "class21",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property727",
    domain: "class201",
    range: "class248",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property724",
    domain: "class508",
    range: "class21",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property725",
    domain: "class736",
    range: "class21",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2420",
    iri: "dbo:dryCargo",
    domain: "class73",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3204",
    iri: "dbo:purpose",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1790",
    iri: "dbo:prefecture",
    domain: "class566",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1417",
    iri: "dbo:cyclistGenre",
    domain: "class682",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2852",
    iri: "dbo:lethalOnRats",
    domain: "class703",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2408",
    iri: "dbo:closed",
    domain: "class207",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property719",
    domain: "class514",
    range: "class453",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2317",
    iri: "dbo:espnId",
    domain: "class416",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property717",
    domain: "class574",
    range: "class395",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3421",
    iri: "dbo:icd10",
    domain: "class91",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property718",
    domain: "class164",
    range: "class395",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3041",
    iri: "dbo:nameDay",
    domain: "class709",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3656",
    iri: "dbo:schoolNumber",
    domain: "class356",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1782",
    iri: "dbo:chairLabel",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3503",
    iri: "dbo:forces",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property711",
    domain: "class361",
    range: "class30",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property712",
    domain: "class784",
    range: "class30",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property1202",
    iri: "dbo:diploma",
    domain: "class654",
    range: "class345",
    type: "owl:objectProperty"
  },
  {
    id: "property710",
    domain: "class154",
    range: "class30",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property715",
    domain: "class453",
    range: "class30",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property716",
    domain: "class388",
    range: "class30",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property713",
    domain: "class745",
    range: "class30",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3430",
    iri: "dbo:believers",
    domain: "class463",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property714",
    domain: "class63",
    range: "class30",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3486",
    iri: "dbo:Galaxy/averageSpeed",
    comment: {
      "en": "The average speed of a thing."
    },
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property820",
    iri: "dbo:prospectTeam",
    domain: "class351",
    range: "class377",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3552",
    iri: "dbo:tennisSurfaceType",
    comment: {
      "en": "There are five types of court surface used in professional play. Each surface is different in the speed and height of the bounce of the ball."
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3462",
    iri: "dbo:grave",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1415",
    iri: "dbo:unitaryAuthority",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2668",
    iri: "dbo:whaDraftYear",
    domain: "class351",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3442",
    iri: "dbo:frozen",
    domain: "class639",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2805",
    iri: "dbo:worldTournamentBronze",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3304",
    iri: "dbo:title",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2135",
    iri: "dbo:seatNumber",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property708",
    domain: "class141",
    range: "class30",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2274",
    iri: "dbo:SpaceMission/lunarEvaTime",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2721",
    iri: "dbo:numberOfSports",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property709",
    domain: "class17",
    range: "class30",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property706",
    domain: "class170",
    range: "class385",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2627",
    iri: "dbo:rankInFinalMedalCount",
    domain: "class514",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property707",
    domain: "class440",
    range: "class375",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2822",
    iri: "dbo:rgbCoordinateRed",
    domain: "class212",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property700",
    domain: "class228",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3645",
    iri: "dbo:digitalSubChannel",
    domain: "class381",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property701",
    domain: "class272",
    range: "class673",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2873",
    iri: "dbo:airportUsing",
    domain: "class142",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property704",
    domain: "class495",
    range: "class385",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3266",
    iri: "dbo:frenchNickname",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property705",
    domain: "class620",
    range: "class385",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property702",
    domain: "class216",
    range: "class78",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property2383",
    iri: "dbo:licensee",
    comment: {
      "en": "Identify which company or entity holds the licence (mostly string are used in Wikipedia, therefore range is xsd:sting)."
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3272",
    iri: "dbo:statName",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property703",
    domain: "class662",
    range: "class385",
    type: "rdfs:SubClassOf"
  },
  {
    id: "property3458",
    iri: "dbo:numberOfDependency",
    domain: "class526",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1519",
    iri: "dbo:vicePrincipal",
    domain: "class356",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2166",
    iri: "dbo:agencyStationCode",
    comment: {
      "en": "Agency station code (used on tickets/reservations, etc.)."
    },
    domain: "class395",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1248",
    iri: "dbo:region",
    comment: {
      "en": "The regin where the thing is located or is connected to."
    },
    domain: "owl:Thing",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3660",
    iri: "dbo:runwayLength",
    domain: "class142",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1774",
    iri: "dbo:statistic",
    domain: "class259",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property3237",
    iri: "dbo:siren",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3627",
    iri: "dbo:zdb",
    comment: {
      "en": "Identifier for serial titles. More precise than issn"
    },
    domain: "class555",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2487",
    iri: "dbo:pseudonym",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2430",
    iri: "dbo:testaverage",
    domain: "class356",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property965",
    iri: "dbo:youthClub",
    domain: "class416",
    range: "class13",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3343",
    iri: "dbo:mapCaption",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3256",
    iri: "dbo:staff",
    domain: "class207",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1642",
    iri: "odesignp:isSettingFor",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1200",
      "property1993",
      "property956",
      "property987",
      "property1395",
      "property1971",
      "property2001",
      "property843",
      "property952",
      "property1193",
      "property1292",
      "property770",
      "property1922",
      "property755",
      "property1829"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1893",
    iri: "dbo:meetingRoad",
    comment: {
      "en": "A road that crosses another road at the junction."
    },
    domain: "class531",
    range: "class391",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2132",
    iri: "dbo:areaTotal",
    domain: "class105",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3165",
    iri: "dbo:cuisine",
    domain: "class126",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2118",
    iri: "dbo:minimumArea",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2016",
    iri: "dbo:coachClub",
    domain: "class416",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property2592",
    iri: "dbo:lifeExpectancy",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2494",
    iri: "dbo:calabrianName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3164",
    iri: "dbo:offeredClasses",
    domain: "class356",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1978",
    iri: "dbo:legalForm",
    comment: {
      "en": "There are many types of business entity defined in the legal systems of various countries. These include corporations, cooperatives, partnerships, sole traders, limited liability company and other specialized types of organization."
    },
    domain: "class588",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1826",
    iri: "dbo:agglomerationPopulation",
    domain: "class708",
    range: "class632",
    type: "owl:objectProperty"
  },
  {
    id: "property1663",
    iri: "dbo:lieutenancyArea",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2480",
    iri: "dbo:okatoCode",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1389",
    iri: "dbo:rocket",
    domain: "class73",
    range: "class580",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1955",
    iri: "dbo:americanComedyAward",
    domain: "class230",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1269",
    iri: "dbo:spurOf",
    domain: "class391",
    range: "class391",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2632",
    iri: "dbo:populationMetroDensity",
    domain: "class245",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3312",
    iri: "dbo:championships",
    domain: "class317",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1430",
    iri: "dbo:languageRegulator",
    domain: "owl:Thing",
    range: "class361",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2891",
    iri: "dbo:toll",
    domain: "class74",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2717",
    iri: "dbo:different",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1940",
    iri: "dbo:fastestDriverCountry",
    domain: "class793",
    range: "class44",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2635",
    iri: "dbo:numberOfParticipatingAthletes",
    domain: "class250",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1629",
    iri: "dbo:license",
    domain: "class388",
    range: "owl:Thing",
    "superproperty": [
      "property1685"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1068",
    iri: "dbo:winsAtAus",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2268",
    iri: "dbo:podium",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3298",
    iri: "dbo:defeatAsMgr",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2446",
    iri: "dbo:gagaouze",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1673",
    iri: "dbo:equipment",
    domain: "class701",
    range: "owl:Thing",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1452",
    iri: "dbo:governmentCountry",
    domain: "class206",
    range: "class44",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2345",
    iri: "dbo:prefectMandate",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2081",
    iri: "dbo:numberOfGraduateStudents",
    domain: "class207",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3217",
    iri: "dbo:Stream/minimumDischarge",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2781",
    iri: "dbo:legalArrondissement",
    domain: "class279",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property983",
    iri: "dbo:champion",
    comment: {
      "en": "winner of a competition"
    },
    domain: "class436",
    range: "class416",
    "subproperty": [
      "property1000",
      "property799"
    ],
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1319",
    iri: "dbo:localAuthority",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1439",
    iri: "dbo:subdivisionName",
    domain: "class206",
    range: "class105",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2156",
    iri: "dbo:circuitName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property950",
    iri: "dbo:musicBand",
    domain: "class281",
    range: "class320",
    type: "owl:objectProperty"
  },
  {
    id: "property3030",
    iri: "dbo:productionYears",
    domain: "class528",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2371",
    iri: "dbo:greenLongDistancePisteNumber",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1101",
    iri: "dbo:managerSeason",
    domain: "class434",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property3563",
    iri: "dbo:maximumBoatLength",
    domain: "class346",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1184",
    iri: "dbo:boiler",
    domain: "class508",
    range: "owl:Thing",
    "superproperty": [
      "property849"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1219",
    iri: "dbo:ceremonialCounty",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property919",
    iri: "dbo:terytCode",
    comment: {
      "en": "indexing code used by the Polish National Official Register of the Territorial Division of the Country (TERYT) to identify various entities"
    },
    domain: "class245",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1559",
    iri: "dbo:countryWithFirstSatellite",
    domain: "class268",
    range: "class44",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3756",
    iri: "dbo:colonialName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2250",
    iri: "dbo:totalCargo",
    domain: "class73",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3619",
    iri: "dbo:affiliate",
    domain: "class385",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3359",
    iri: "dbo:projectEndDate",
    comment: {
      "en": "The end date of the project."
    },
    domain: "class349",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2602",
    iri: "dbo:perCapitaIncomeAsOf",
    domain: "class245",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1574",
    iri: "odesignp:isParticipantIn",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1525",
      "property1254",
      "property977",
      "property1469",
      "property1283",
      "property1074",
      "property1466",
      "property803",
      "property1065",
      "property1084",
      "property1515",
      "property1113",
      "property997",
      "property835",
      "property1895",
      "property1282",
      "property1961",
      "property933",
      "property1445",
      "property1370",
      "property794",
      "property888",
      "property1416",
      "property776",
      "property1905",
      "property1068",
      "property1586",
      "property1199",
      "property730",
      "property1293",
      "property842",
      "property1885",
      "property1627",
      "property1822",
      "property1482",
      "property1549",
      "property1891",
      "property1504",
      "property746",
      "property907",
      "property1641",
      "property1828"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2664",
    iri: "dbo:entrezgene",
    domain: "class761",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1895",
    iri: "dbo:race",
    domain: "owl:Thing",
    range: "class794",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3147",
    iri: "dbo:sentence",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2464",
    iri: "dbo:Spacecraft/dockedTime",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1924",
    iri: "odesignp:isMemberOf",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1906",
      "property946",
      "property787",
      "property1840",
      "property943",
      "property1813",
      "property1589",
      "property1038",
      "property1921",
      "property738",
      "property1551",
      "property801",
      "property1266",
      "property1461",
      "property1285",
      "property1354",
      "property1913",
      "property1546",
      "property1136",
      "property753",
      "property910",
      "property1830",
      "property854",
      "property880",
      "property1310",
      "property1776",
      "property1622",
      "property1804",
      "property820",
      "property1187",
      "property965"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2518",
    iri: "dbo:Galaxy/orbitalPeriod",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2007",
    iri: "dbo:populationTotalReference",
    domain: "class708",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property3360",
    iri: "dbo:totalLaunches",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3572",
    iri: "dbo:authorityTitle",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3150",
    iri: "dbo:racketCatching",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1505",
    iri: "dbo:previousEvent",
    domain: "class497",
    range: "class497",
    "superproperty": [
      "property1028"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1581",
    iri: "dbo:televisionSeries",
    domain: "owl:Thing",
    range: "class744",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property903",
    iri: "dbo:goldenRaspberryAward",
    domain: "class540",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1062",
    iri: "dbo:championInDoubleFemale",
    comment: {
      "en": "winner of a competition in the female double session (as in tennis)"
    },
    domain: "class436",
    range: "class416",
    "superproperty": [
      "property1000",
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property758",
    iri: "dbo:stateOfOrigin",
    domain: "class654",
    range: "class44",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2884",
    iri: "dbo:proPeriod",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3374",
    iri: "dbo:hsvCoordinateHue",
    domain: "class212",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3114",
    iri: "dbo:Drug/meltingPoint",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1244",
    iri: "dbo:capitalCountry",
    domain: "class206",
    range: "class44",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1273",
    iri: "dbo:nominee",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1694",
    iri: "dbo:notableCommander",
    domain: "class715",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2158",
    iri: "dbo:startCareer",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3355",
    iri: "dbo:individualisedPnd",
    comment: {
      "en": "PND (Personennamendatei) data about a person. PND is published by the German National Library. For each person there is a record with her/his name, birth and occupation connected with a unique identifier, the PND number."
    },
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3538",
    iri: "dbo:restoreDate",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1127",
    iri: "dbo:gender",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2323",
    iri: "dbo:slogan",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1350",
    iri: "dbo:adjacentSettlement",
    domain: "owl:Thing",
    range: "class708",
    "superproperty": [
      "property1699"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2563",
    iri: "dbo:populationRural",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1875",
    iri: "dbo:sourceConfluencePosition",
    domain: "class634",
    range: "class810",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1527",
    iri: "dbo:bloodType",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1362",
    iri: "dbo:aircraftRecon",
    domain: "class715",
    range: "class518",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2068",
    iri: "dbo:pccSecretary",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1907",
    iri: "dbo:athleticsDiscipline",
    domain: "class416",
    range: "class513",
    type: "owl:objectProperty"
  },
  {
    id: "property3693",
    iri: "dbo:cylinderBore",
    domain: "class397",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1913",
    iri: "dbo:institution",
    domain: "class587",
    range: "class588",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2392",
    iri: "dbo:result",
    domain: "class253",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1966",
    iri: "dbo:inCemetery",
    domain: "class270",
    range: "class337",
    type: "owl:objectProperty"
  },
  {
    id: "property3161",
    iri: "dbo:atRowNumber",
    comment: {
      "en": "Row # where the referenced resource is to be found in the source file"
    },
    domain: "class785",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3491",
    iri: "dbo:volumeQuote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1464",
    iri: "dbo:foundedBy",
    comment: {
      "en": "Identifies the founder of the described entity. This can be a person or a organisation for instance."
    },
    domain: "owl:Thing",
    range: "class434",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2522",
    iri: "dbo:feastDay",
    domain: "class390",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3261",
    iri: "dbo:month",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property927",
    iri: "dbo:varietals",
    domain: "class155",
    range: "owl:Thing",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1377",
    iri: "dbo:principalArea",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3536",
    iri: "dbo:comment",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2604",
    iri: "dbo:cylinderCount",
    domain: "class508",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1494",
    iri: "dbo:performer",
    domain: "class385",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property868",
    iri: "dbo:britishComedyAwards",
    domain: "class230",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2372",
    iri: "dbo:nation",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1680",
    iri: "dbo:relative",
    domain: "class654",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3484",
    iri: "dbo:millsCodeNL",
    comment: {
      "en": "mills code from the central Dutch database on mills"
    },
    domain: "class512",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3112",
    iri: "dbo:endDate",
    comment: {
      "en": "The end date of the event."
    },
    domain: "class497",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property740",
    iri: "dbo:recordLabel",
    domain: "owl:Thing",
    range: "class153",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3080",
    iri: "dbo:numberOfSuites",
    domain: "class657",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3146",
    iri: "dbo:highestRank",
    domain: "class374",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3596",
    iri: "dbo:officialName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1366",
    iri: "dbo:parentMountainPeak",
    domain: "class327",
    range: "class327",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2623",
    iri: "dbo:populationQuote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1909",
    iri: "dbo:translator",
    comment: {
      "en": "Translator(s), if original not in English"
    },
    domain: "class388",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3527",
    iri: "dbo:historicalName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2690",
    iri: "dbo:touaregSettlementName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property748",
    iri: "dbo:operatedBy",
    comment: {
      "en": "Organisation or city who is the operator of the ArchitecturalStructure. Not to confuse with maintainer or the owner."
    },
    domain: "class99",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property731",
    iri: "dbo:religiousHeadLabel",
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1198",
    iri: "dbo:areaOfSearch",
    domain: "class630",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2579",
    iri: "dbo:mascot",
    comment: {
      "en": "something, especially a person or animal, used to symbolize a sports team, company, organization or other group."
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1515",
    iri: "dbo:lastWin",
    domain: "class317",
    range: "class793",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1373",
    iri: "dbo:secondLeader",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1104",
    iri: "dbo:regionServed",
    domain: "class588",
    range: "class105",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2864",
    iri: "dbo:fibahof",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2500",
    iri: "dbo:numberOfCity",
    domain: "class526",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3238",
    iri: "dbo:numberOfNeighbourhood",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1174",
    iri: "dbo:enshrinedDeity",
    domain: "class553",
    range: "class306",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2160",
    iri: "dbo:isPartOf",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    "subproperty": [
      "property2537"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3111",
    iri: "dbo:Rocket/lowerEarthOrbitPayload",
    comment: {
      "en": "Payload mass in a typical Low Earth orbit"
    },
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2163",
    iri: "dbo:surfaceGravity",
    domain: "class515",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2199",
    iri: "dbo:SpaceMission/lunarOrbitTime",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1310",
    iri: "dbo:network",
    domain: "class381",
    range: "class381",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2262",
    iri: "dbo:rebuildDate",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1436",
    iri: "dbo:championInDoubleMale",
    comment: {
      "en": "winner of a competition in the male double session (as in tennis)"
    },
    domain: "class436",
    range: "class416",
    "superproperty": [
      "property1000",
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1938",
    iri: "dbo:coExecutiveProducer",
    domain: "class744",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2877",
    iri: "dbo:numberOfStateDeputies",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1478",
    iri: "dbo:part",
    domain: "owl:Thing",
    range: "class105",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property800",
    iri: "dbo:secondTeam",
    domain: "class793",
    range: "class13",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3397",
    iri: "dbo:seatingCapacity",
    domain: "class519",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1187",
    iri: "dbo:whaDraftTeam",
    domain: "class351",
    range: "class377",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1662",
    iri: "dbo:partner",
    domain: "class654",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3638",
    iri: "dbo:filmNumber",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1987",
    iri: "dbo:animator",
    domain: "class387",
    range: "class434",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property801",
    iri: "dbo:europeanParliamentGroup",
    domain: "class500",
    range: "owl:Thing",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1655",
    iri: "dbo:parent",
    domain: "class654",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2808",
    iri: "dbo:draftPosition",
    domain: "class416",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3241",
    iri: "dbo:unicode",
    comment: {
      
    },
    domain: "class784",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2617",
    iri: "dbo:afdbId",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2969",
    iri: "dbo:hasSurfaceForm",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3201",
    iri: "dbo:lineLength",
    comment: {
      "en": "Length of the line. Wikipedians usually do not differentiate between track length and line lenght."
    },
    domain: "class74",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1946",
    iri: "dbo:sea",
    domain: "class105",
    range: "class324",
    "superproperty": [
      "property1699"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property993",
    iri: "dbo:university",
    comment: {
      "en": "university a person goes or went to."
    },
    domain: "class654",
    range: "class207",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1265",
    iri: "dbo:coolingSystem",
    domain: "class397",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1624",
    iri: "dbo:playerSeason",
    domain: "class434",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property1130",
    iri: "dbo:peabodyAward",
    domain: "class230",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1376",
    iri: "dbo:governingBody",
    comment: {
      "en": "Body that owns/operates the Place."
    },
    domain: "class105",
    range: "class588",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3181",
    iri: "dbo:membership",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1501",
    iri: "dbo:league",
    domain: "owl:Thing",
    range: "class673",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2077",
    iri: "dbo:serviceStartYear",
    domain: "class752",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3084",
    iri: "dbo:diseasesdb",
    domain: "class91",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3004",
    iri: "dbo:numberOfStations",
    comment: {
      "en": "Number of stations or stops."
    },
    domain: "class74",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2535",
    iri: "dbo:sex",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2798",
    iri: "dbo:wineYear",
    domain: "class155",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2711",
    iri: "dbo:LunarCrater/diameter",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property804",
    iri: "dbo:authority",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3067",
    iri: "dbo:usOpenMixed",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3426",
    iri: "dbo:SpaceStation/volume",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1688",
    iri: "dbo:contest",
    domain: "class654",
    range: "class642",
    type: "owl:objectProperty"
  },
  {
    id: "property3578",
    iri: "dbo:latestPreviewVersion",
    domain: "class1",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2996",
    iri: "dbo:shoeNumber",
    domain: "class654",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3625",
    iri: "dbo:sportsFunction",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2254",
    iri: "dbo:originallyUsedFor",
    comment: {
      "en": "Original use of the architectural structure, if it is currently being used as anything other than its original purpose."
    },
    domain: "class99",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3228",
    iri: "dbo:raceLength",
    domain: "class40",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3575",
    iri: "dbo:cargoWater",
    domain: "class73",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3567",
    iri: "dbo:Type",
    comment: {
      "en": "a category within a classification system"
    },
    domain: "owl:Thing",
    range: "rdfs:Literal",
    "subproperty": [
      "property3289"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1138",
    iri: "dbo:sourceConfluenceRegion",
    domain: "class634",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3294",
    iri: "dbo:unloCode",
    comment: {
      "en": "UN/LOCODE, the United Nations Code for Trade and Transport Locations, is a geographic coding scheme developed and maintained by United Nations Economic Commission for Europe (UNECE), a unit of the United Nations. UN/LOCODE assigns codes to locations used in trade and transport  with functions such as seaports, rail and road terminals, airports, post offices and border crossing points."
    },
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2255",
    iri: "dbo:silverMedalSingle",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2241",
    iri: "dbo:compressionRatio",
    domain: "class397",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1271",
    iri: "dbo:voice",
    domain: "class499",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2357",
    iri: "dbo:scientificName",
    domain: "class271",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1727",
    iri: "dbo:currentTeamMember",
    comment: {
      "en": "A current member of an athletic team."
    },
    domain: "class13",
    range: "class695",
    "superproperty": [
      "property1623"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1112",
    iri: "dbo:summerAppearances",
    domain: "class514",
    range: "class514",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3144",
    iri: "dbo:numberOfLines",
    comment: {
      "en": "Number of lines in the transit system."
    },
    domain: "class209",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1403",
    iri: "dbo:currentTeam",
    domain: "class416",
    range: "class13",
    type: "owl:objectProperty"
  },
  {
    id: "property1455",
    iri: "dbo:chairperson",
    domain: "class588",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2560",
    iri: "dbo:translatedMotto",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2249",
    iri: "dbo:presidentGeneralCouncilMandate",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3670",
    iri: "dbo:bioclimate",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3620",
    iri: "dbo:subjectTerm",
    comment: {
      "en": "The subject as a term, possibly a term from a formal classification"
    },
    domain: "class388",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2187",
    iri: "dbo:raceWins",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1808",
    iri: "dbo:alpsSubsection",
    comment: {
      "en": "the Alps subsection to which the mountain belongs, according to the SOIUSA classification"
    },
    domain: "class327",
    range: "class266",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2301",
    iri: "dbo:rankingWins",
    domain: "class374",
    range: "xds:nonNegativeInteger",
    "superproperty": [
      "property3682"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3216",
    iri: "dbo:convictionDate",
    domain: "class654",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2157",
    iri: "dbo:firstBroadcast",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2878",
    iri: "dbo:distance",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2919",
    iri: "dbo:fipsCode",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2610",
    iri: "dbo:christeningDate",
    domain: "class736",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1061",
    iri: "dbo:mergedSettlement",
    domain: "class708",
    range: "class708",
    type: "owl:objectProperty"
  },
  {
    id: "property2744",
    iri: "dbo:ruling",
    comment: {
      "en": "Ruling referred to in this legal case"
    },
    domain: "class231",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2705",
    iri: "dbo:rgbCoordinateBlue",
    domain: "class212",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1658",
    iri: "odesignp:specializes",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1163",
      "property1717",
      "property760",
      "property1334",
      "property1928",
      "property1930",
      "property1016"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2601",
    iri: "dbo:superbowlWin",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1610",
    iri: "dbo:previousDemographics",
    domain: "class245",
    range: "class658",
    type: "owl:objectProperty"
  },
  {
    id: "property3177",
    iri: "dbo:regionLink",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2505",
    iri: "dbo:numberOfCrew",
    domain: "class518",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1252",
    iri: "dbo:highschool",
    domain: "owl:Thing",
    range: "class356",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1251",
    iri: "dbo:birthPlace",
    comment: {
      "en": "where the person was born"
    },
    domain: "class654",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2224",
    iri: "dbo:cableCar",
    domain: "class105",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2190",
    iri: "dbo:buildingStartDate",
    domain: "class99",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3124",
    iri: "dbo:numberOfFederalDeputies",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2608",
    iri: "dbo:floodingDate",
    domain: "owl:Thing",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3267",
    iri: "dbo:firstAscentYear",
    domain: "class327",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1392",
    iri: "dbo:ground",
    domain: "class393",
    range: "class105",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1661",
    iri: "dbo:firstLeader",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2753",
    iri: "dbo:runtime",
    domain: "class388",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1476",
    iri: "dbo:artist",
    comment: {
      "en": "The performer or creator of the musical work."
    },
    domain: "class180",
    range: "class434",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property923",
    iri: "dbo:subTribus",
    domain: "class271",
    range: "class271",
    "superproperty": [
      "property832"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2913",
    iri: "dbo:apparentMagnitude",
    domain: "class515",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1336",
    iri: "dbo:cultivatedVariety",
    comment: {
      "en": "Name of the cultivar (cultivated variety)"
    },
    domain: "class659",
    range: "class503",
    "superproperty": [
      "property823"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property913",
    iri: "dbo:deathPlace",
    comment: {
      "en": "the place where they died"
    },
    domain: "class654",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3225",
    iri: "dbo:numberOfTerritories",
    domain: "class201",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2084",
    iri: "dbo:cyrilliqueName",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2674",
    iri: "dbo:isoCode",
    domain: "class105",
    range: "xds:string",
    "subproperty": [
      "property3461",
      "property3346",
      "property2725"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2313",
    iri: "dbo:firstPlace",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2936",
    iri: "dbo:years",
    domain: "class804",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2687",
    iri: "dbo:airDate",
    domain: "class265",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2236",
    iri: "dbo:Planet/averageSpeed",
    comment: {
      "en": "The average speed of a thing."
    },
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property952",
    iri: "dbo:soccerLeagueWinner",
    domain: "class383",
    range: "class13",
    "superproperty": [
      "property1642"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property944",
    iri: "dbo:managementMountain",
    domain: "owl:Thing",
    range: "class327",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3704",
    iri: "dbo:licenceNumberLabel",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2499",
    iri: "dbo:mayorFunction",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1421",
    iri: "dbo:foundationPlace",
    domain: "class588",
    range: "class628",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3525",
    iri: "dbo:grossDomesticProductRank",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1513",
    iri: "dbo:field",
    domain: "class565",
    range: "owl:Thing",
    "superproperty": [
      "property1685"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property916",
    iri: "dbo:largestCountry",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2701",
    iri: "dbo:longName",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2576",
    iri: "dbo:khlDraftYear",
    domain: "class351",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property762",
    iri: "dbo:premierePlace",
    comment: {
      "en": "The theatre and/or city the play was first performed in."
    },
    domain: "class427",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3292",
    iri: "dbo:numberOfStudents",
    domain: "class207",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2568",
    iri: "dbo:mainBuilding",
    domain: "class553",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3657",
    iri: "dbo:lengthQuote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1544",
    iri: "dbo:orogeny",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2564",
    iri: "dbo:dutchMIPCode",
    comment: {
      "en": "The Dutch MIP project was meant to take stock of all kinds of monuments"
    },
    domain: "owl:Thing",
    range: "xds:string",
    "superproperty": [
      "property2145"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3145",
    iri: "dbo:numberOfTurns",
    domain: "class605",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3269",
    iri: "dbo:numberOfPages",
    comment: {
      "en": "The books number of pages."
    },
    domain: "class786",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2548",
    iri: "dbo:routeStartDirection",
    comment: {
      "en": "End of the route. For U.S. roads, this should be either \"South\" or \"West\" per the standards set by the U.S. Roads project."
    },
    domain: "class74",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property936",
    iri: "dbo:MemberOfParliament",
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1713"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property904",
    iri: "dbo:chiefPlace",
    domain: "owl:Thing",
    range: "class245",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1520",
    iri: "dbo:sportCountry",
    comment: {
      "en": "The country, for which the athlete is participating in championships"
    },
    domain: "class416",
    range: "class44",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1763",
    iri: "dbo:nearestCity",
    domain: "class105",
    range: "class245",
    "superproperty": [
      "property1699"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1963",
    iri: "dbo:organisation",
    domain: "owl:Thing",
    range: "class588",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2708",
    iri: "dbo:teamSize",
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1589",
    iri: "dbo:club",
    domain: "class416",
    range: "class13",
    "equivalent": [
      "property1829"
    ],
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1593",
    iri: "dbo:bird",
    comment: {
      
    },
    domain: "class105",
    range: "class271",
    type: "owl:objectProperty"
  },
  {
    id: "property2929",
    iri: "dbo:wptTitle",
    domain: "class437",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1201",
    iri: "dbo:runningMate",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2990",
    iri: "dbo:poles",
    domain: "class317",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3121",
    iri: "dbo:populationPctChildren",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property915",
    iri: "dbo:department",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2951",
    iri: "dbo:draftPick",
    domain: "class323",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2053",
    iri: "dbo:Planet/orbitalPeriod",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2670",
    iri: "dbo:whaDraft",
    domain: "class351",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2509",
    iri: "dbo:fc",
    domain: "class563",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1229",
    iri: "dbo:landingVehicle",
    domain: "class185",
    range: "class185",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1410",
    iri: "odesignp:hasParticipant",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property771",
      "property1240",
      "property983",
      "property1000",
      "property1062",
      "property1436",
      "property1456",
      "property799",
      "property781",
      "property1235",
      "property1264",
      "property968",
      "property1559",
      "property1815",
      "property1225",
      "property959",
      "property1209",
      "property1673",
      "property1295",
      "property1844",
      "property1940",
      "property1422",
      "property2021",
      "property1429",
      "property1988",
      "property2038",
      "property750",
      "property2033",
      "property1229",
      "property1967",
      "property1635",
      "property1950",
      "property1450",
      "property1887",
      "property1572",
      "property1944",
      "property2025",
      "property1349",
      "property1538",
      "property1545",
      "property1506",
      "property1834",
      "property1344",
      "property1221",
      "property1324",
      "property1460",
      "property1900",
      "property2031",
      "property2037",
      "property1883",
      "property1115",
      "property1965",
      "property800",
      "property1278",
      "property1824",
      "property1939",
      "property1118",
      "property1960",
      "property1003",
      "property1569",
      "property1259",
      "property1664",
      "property1279"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2782",
    iri: "dbo:sourceElevation",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2523",
    iri: "dbo:percentageOfAreaWater",
    domain: "owl:Thing",
    range: "xds:float",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1952",
    iri: "dbo:laurenceOlivierAward",
    domain: "class540",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3198",
    iri: "dbo:member",
    domain: "class385",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1260",
    iri: "dbo:oldProvince",
    domain: "class245",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property985",
    iri: "dbo:resolution",
    comment: {
      "en": "Native Resolution"
    },
    domain: "class1",
    range: "owl:Thing",
    "superproperty": [
      "property827"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2370",
    iri: "dbo:totalDiscs",
    comment: {
      "en": "the total number of discs contained in the album"
    },
    domain: "class135",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2848",
    iri: "dbo:ko",
    domain: "class772",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3141",
    iri: "dbo:regionType",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2206",
    iri: "dbo:committee",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property765",
    iri: "dbo:isPartOfMilitaryConflict",
    domain: "class253",
    range: "class253",
    "superproperty": [
      "property1973",
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1312",
    iri: "dbo:secondPopularVote",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2025",
    iri: "dbo:mostWins",
    domain: "class794",
    range: "owl:Thing",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1548",
    iri: "dbo:highestPosition",
    domain: "owl:Thing",
    range: "class810",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2728",
    iri: "dbo:launches",
    domain: "class336",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3436",
    iri: "dbo:faaLocationIdentifier",
    domain: "class142",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property834",
    iri: "dbo:nextEvent",
    domain: "class497",
    range: "class497",
    "superproperty": [
      "property2032",
      "property782"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2433",
    iri: "dbo:numberOfGraves",
    domain: "class337",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3653",
    iri: "dbo:timeInSpace",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3323",
    iri: "dbo:production",
    domain: "class711",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1827",
    iri: "dbo:governorGeneral",
    domain: "owl:Thing",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2147",
    iri: "dbo:fareZone",
    comment: {
      "en": "The fare zone in which station is located."
    },
    domain: "class395",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1047",
    iri: "dbo:mainDomain",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property1889",
    iri: "dbo:mostPopulousCountry",
    domain: "class44",
    range: "class44",
    type: "owl:objectProperty"
  },
  {
    id: "property2036",
    iri: "dbo:binomial",
    domain: "class271",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2766",
    iri: "dbo:longtype",
    comment: {
      "en": "can be used to include more informations e.g. the name of the artist that a tribute album is in honor of"
    },
    domain: "class135",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property866",
    iri: "dbo:headAlloy",
    domain: "class397",
    range: "owl:Thing",
    "superproperty": [
      "property1045"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2426",
    iri: "dbo:temperature",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3755",
    iri: "dbo:electionDateLeader",
    comment: {
      "en": "The date that leader was elected."
    },
    domain: "class68",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3391",
    iri: "dbo:bestWsopRank",
    domain: "class437",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1828",
    iri: "dbo:winsInEurope",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1867",
    iri: "dbo:skills",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1685"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2326",
    iri: "dbo:populationRuralDensity",
    domain: "class245",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3081",
    iri: "dbo:unitedStatesNationalBridgeId",
    domain: "class749",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3504",
    iri: "dbo:rocketStages",
    comment: {
      "en": "number of stages, not including boosters"
    },
    domain: "class580",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2885",
    iri: "dbo:id",
    domain: "class740",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3341",
    iri: "dbo:MeanOfTransportation/length",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1944",
    iri: "dbo:medalist",
    domain: "class436",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3378",
    iri: "dbo:broadcastTranslator",
    domain: "class381",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3682",
    iri: "dbo:Wins",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    "subproperty": [
      "property2244",
      "property2301"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2293",
    iri: "dbo:shoreLength",
    domain: "class639",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property862",
    iri: "dbo:voiceType",
    comment: {
      "en": "voice type of a singer or an actor"
    },
    domain: "class565",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1348",
    iri: "dbo:category",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1107",
    iri: "dbo:numberOfClassrooms",
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property812"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3621",
    iri: "dbo:added",
    domain: "class97",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3677",
    iri: "dbo:Canal/maximumBoatBeam",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3289",
    iri: "dbo:musicalKey",
    domain: "class180",
    range: "xds:string",
    "superproperty": [
      "property3567"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1074",
    iri: "dbo:firstRace",
    domain: "class317",
    range: "class793",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1071",
    iri: "dbo:mediaType",
    comment: {
      "en": "Print / On-line (then binding types etc. if relevant)"
    },
    domain: "class786",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3663",
    iri: "dbo:quote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1173",
    iri: "dbo:royalAnthem",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2702",
    iri: "dbo:populationUrbanDensity",
    domain: "class245",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2562",
    iri: "dbo:bestLap",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3096",
    iri: "dbo:lastFlightStartDate",
    domain: "class221",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3321",
    iri: "dbo:postalCode",
    comment: {
      "en": "A postal code (known in various countries as a post code, postcode, or ZIP code) is a series of letters and/or digits appended to a postal address for the purpose of sorting mail."
    },
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1065",
    iri: "dbo:lastFlight",
    domain: "class221",
    range: "class185",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3366",
    iri: "dbo:partyNumber",
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2329",
    iri: "dbo:codeMemorial",
    comment: {
      "en": "Identifier for monuments of the Memorial type"
    },
    domain: "class458",
    range: "xds:string",
    "superproperty": [
      "property2145"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property1170",
    iri: "dbo:flower",
    domain: "class105",
    range: "class271",
    type: "owl:objectProperty"
  },
  {
    id: "property2203",
    iri: "dbo:activeYearsEndYearMgr",
    domain: "class654",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1092",
    iri: "dbo:wholeArea",
    domain: "class105",
    range: "class137",
    type: "owl:objectProperty"
  },
  {
    id: "property1051",
    iri: "dbo:distributingCompany",
    domain: "class153",
    range: "class711",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2416",
    iri: "dbo:functionStartYear",
    domain: "class125",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property813",
    iri: "dbo:governmentRegion",
    domain: "class206",
    range: "class245",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1468",
    iri: "dbo:politicalMajority",
    domain: "class708",
    range: "class500",
    type: "owl:objectProperty"
  },
  {
    id: "property2883",
    iri: "dbo:ncbhof",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3418",
    iri: "dbo:landingDate",
    domain: "class185",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2441",
    iri: "dbo:port2DockingDate",
    domain: "class73",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property899",
    iri: "dbo:colour",
    comment: {
      "en": "A colour represented by its entity."
    },
    domain: "owl:Thing",
    range: "class212",
    "superproperty": [
      "property827"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2449",
    iri: "dbo:definition",
    domain: "class564",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3592",
    iri: "dbo:Lake/shoreLength",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property753",
    iri: "dbo:militaryBranch",
    comment: {
      "en": "The service branch (Army, Navy, etc.) a person is part of."
    },
    domain: "class654",
    range: "class715",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2737",
    iri: "dbo:second",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1566",
    iri: "odesignp:hasLocation",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "owl:Thing",
    "subproperty": [
      "property1715",
      "property2003",
      "property1997",
      "property1005",
      "property1383",
      "property1808",
      "property1384",
      "property1198",
      "property1983",
      "property1947",
      "property1251",
      "property2026",
      "property865",
      "property1765",
      "property1729",
      "property1935",
      "property995",
      "property1244",
      "property1073",
      "property1185",
      "property1126",
      "property1674",
      "property1649",
      "property904",
      "property1029",
      "property1231",
      "property1167",
      "property1616",
      "property826",
      "property1847",
      "property913",
      "property962",
      "property1421",
      "property1360",
      "property756",
      "property1357",
      "property1600",
      "property1934",
      "property1250",
      "property1031",
      "property818",
      "property931",
      "property1313",
      "property1942",
      "property1772",
      "property872",
      "property1882",
      "property1021",
      "property1237",
      "property1365",
      "property1579",
      "property1710",
      "property1186",
      "property1936",
      "property891",
      "property1859",
      "property763",
      "property1969",
      "property1245",
      "property1614",
      "property951",
      "property1132",
      "property1144",
      "property1248",
      "property1682",
      "property1323",
      "property1855",
      "property2018",
      "property1690",
      "property1736",
      "property1541",
      "property1875",
      "property1138",
      "property831",
      "property1696",
      "property1861",
      "property1937",
      "property747",
      "property1050",
      "property1379",
      "property1375",
      "property1089",
      "property1797",
      "property758",
      "property788",
      "property1838",
      "property790",
      "property1013"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3291",
    iri: "dbo:frequency",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3012",
    iri: "dbo:capitalElevation",
    domain: "class206",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2914",
    iri: "dbo:restingDate",
    "attributes": [
      "functional"
    ],
    domain: "class654",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3477",
    iri: "dbo:numberOfSettlement",
    domain: "class566",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2116",
    iri: "dbo:lchfDraft",
    domain: "class351",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2824",
    iri: "dbo:chairmanTitle",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1781",
    iri: "dbo:rebuilder",
    domain: "class518",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3194",
    iri: "dbo:arm",
    domain: "class496",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1000",
    iri: "dbo:championInDouble",
    comment: {
      "en": "winner of a competition in the double session (as in tennis)"
    },
    domain: "class436",
    range: "class416",
    "subproperty": [
      "property1062",
      "property1436",
      "property1456"
    ],
    "superproperty": [
      "property983",
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2085",
    iri: "dbo:currentSeason",
    domain: "class673",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2727",
    iri: "dbo:icaoLocationIdentifier",
    domain: "class142",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3230",
    iri: "dbo:meaning",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1815",
    iri: "dbo:countryWithFirstSatelliteLaunched",
    domain: "class268",
    range: "class44",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2365",
    iri: "dbo:lastProMatch",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1057",
    iri: "dbo:thumbnail",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1124"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1335",
    iri: "dbo:gymApparatus",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2606",
    iri: "dbo:wikiPageInDegree",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3401",
    iri: "dbo:fees",
    domain: "class356",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1008",
    iri: "dbo:building",
    domain: "class206",
    range: "class519",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3248",
    iri: "dbo:mandate",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3402",
    iri: "dbo:logo",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2845",
    iri: "dbo:fuelConsumption",
    "attributes": [
      "functional"
    ],
    domain: "class397",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1608",
    iri: "dbo:inflow",
    domain: "class639",
    range: "class634",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1860",
    iri: "dbo:pictureDescription",
    domain: "owl:Thing",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property2208",
    iri: "dbo:Planet/temperature",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1337",
    iri: "dbo:musicians",
    domain: "class548",
    range: "class281",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3075",
    iri: "dbo:chorusCharacterInPlay",
    comment: {
      "en": "The name of the (Greek) chorus character in play."
    },
    domain: "class427",
    range: "xds:string",
    "superproperty": [
      "property2949"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2041",
    iri: "dbo:port1UndockingDate",
    domain: "class73",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3059",
    iri: "dbo:Weapon/diameter",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2714",
    iri: "dbo:bedCount",
    domain: "class273",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3297",
    iri: "dbo:numberOfParkingSpaces",
    domain: "class657",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1146",
    iri: "dbo:profession",
    domain: "class654",
    range: "owl:Thing",
    "superproperty": [
      "property1474"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property799",
    iri: "dbo:championInSingle",
    comment: {
      "en": "winner of a competition in the single session, to distinguish from the double session (as in tennis)"
    },
    domain: "class436",
    range: "class416",
    "subproperty": [
      "property781",
      "property1235"
    ],
    "superproperty": [
      "property983",
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property930",
    iri: "dbo:saint",
    domain: "class245",
    range: "class390",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1684",
    iri: "dbo:unesco",
    domain: "class105",
    range: "class245",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3450",
    iri: "dbo:appearancesInNationalTeam",
    domain: "class804",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property759",
    iri: "dbo:construction",
    domain: "class99",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1431",
    iri: "dbo:mainFamilyBranch",
    domain: "class216",
    range: "class78",
    type: "owl:objectProperty"
  },
  {
    id: "property2655",
    iri: "dbo:averageDepthQuote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1586",
    iri: "dbo:winsAtChallenges",
    domain: "class188",
    range: "owl:Thing",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1346",
    iri: "dbo:majorLake",
    domain: "class680",
    range: "owl:Thing",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1954",
    iri: "dbo:actingHeadteacher",
    domain: "class356",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2119",
    iri: "dbo:wikiPageLength",
    comment: {
      "en": "Reserved for DBpedia."
    },
    domain: "owl:Thing",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2231",
    iri: "dbo:officialSchoolColour",
    comment: {
      "en": "The official colour of the EducationalInstitution represented by the colour name (e.g.: red or green)."
    },
    domain: "class207",
    range: "xds:string",
    "superproperty": [
      "property2971"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2010",
    iri: "dbo:nerve",
    domain: "class455",
    range: "class252",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2729",
    iri: "dbo:tu",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3212",
    iri: "dbo:longDistancePisteKilometre",
    domain: "class105",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2454",
    iri: "dbo:installedCapacity",
    "attributes": [
      "functional"
    ],
    domain: "class108",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1613",
    iri: "dbo:deanery",
    comment: {
      "en": "Dioceses and parishes should know which deaneries there are"
    },
    domain: "class66",
    range: "class592",
    "superproperty": [
      "property1347"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1048",
    iri: "dbo:subsequentInfrastructure",
    domain: "class604",
    range: "class604",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2049",
    iri: "dbo:sourceConfluenceElevation",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1425",
    iri: "dbo:prospectLeague",
    domain: "class351",
    range: "class673",
    type: "owl:objectProperty"
  },
  {
    id: "property3733",
    iri: "dbo:other",
    domain: "class140",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2634",
    iri: "dbo:otherInformation",
    domain: "class708",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property939",
    iri: "dbo:administrativeCenter",
    domain: "owl:Thing",
    range: "class105",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1894",
    iri: "dbo:lounge",
    domain: "class90",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3705",
    iri: "dbo:releaseYear",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    "subproperty": [
      "property2902"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3699",
    iri: "dbo:iso6391Code",
    domain: "owl:Thing",
    range: "xds:string",
    "superproperty": [
      "property2200"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property2997",
    iri: "dbo:worldOpen",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1210",
    iri: "dbo:government",
    domain: "class206",
    range: "owl:Thing",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3740",
    iri: "dbo:medlineplus",
    domain: "class91",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3191",
    iri: "dbo:deadInFightDate",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2600",
    iri: "dbo:circle",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3372",
    iri: "dbo:launchDate",
    domain: "class185",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3664",
    iri: "dbo:penisLength",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property784",
    iri: "dbo:computingInput",
    domain: "class1",
    range: "owl:Thing",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2497",
    iri: "dbo:SpaceMission/stationVisitDuration",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2311",
    iri: "dbo:fullCompetition",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1671",
    iri: "dbo:author",
    domain: "class388",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2115",
    iri: "dbo:lawCountry",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3357",
    iri: "dbo:feat",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2760",
    iri: "dbo:ra",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3558",
    iri: "dbo:MeanOfTransportation/mass",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2675",
    iri: "dbo:comitat",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1687",
    iri: "dbo:belgiumPoliticalMajority",
    domain: "class279",
    range: "class500",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1030",
    iri: "dbo:primogenitor",
    domain: "class78",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property1588",
    iri: "dbo:entourage",
    domain: "class385",
    range: "class271",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2083",
    iri: "dbo:retentionTime",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2940",
    iri: "dbo:noteOnRestingPlace",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1630",
    iri: "dbo:actScore",
    comment: {
      "en": "most recent average ACT scores"
    },
    domain: "class356",
    range: "owl:Thing",
    "superproperty": [
      "property827"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1538",
    iri: "dbo:officialOpenedBy",
    domain: "class250",
    range: "class654",
    "superproperty": [
      "property1410"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1933",
    iri: "dbo:album",
    domain: "owl:Thing",
    range: "class135",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2088",
    iri: "dbo:bestFinish",
    domain: "class374",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2048",
    iri: "dbo:grayPage",
    comment: {
      "en": "Refers to the famous 1918 edition of Gray's Anatomy."
    },
    domain: "class455",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property997",
    iri: "dbo:movie",
    domain: "class654",
    range: "class237",
    "superproperty": [
      "property1574"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2444",
    iri: "dbo:startYear",
    domain: "owl:Thing",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property949",
    iri: "dbo:approach",
    domain: "class654",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property3545",
    iri: "dbo:AutomobileEngine/diameter",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1257",
    iri: "dbo:innervates",
    domain: "class252",
    range: "class455",
    "superproperty": [
      "property1670"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1503",
    iri: "dbo:copilote",
    domain: "class654",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property3128",
    iri: "dbo:rebuildingYear",
    domain: "class99",
    range: "xds:gYear",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1847",
    iri: "dbo:daira",
    domain: "class708",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2165",
    iri: "dbo:trackNumber",
    domain: "class590",
    range: "xds:positiveInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1263",
    iri: "dbo:instrument",
    domain: "class565",
    range: "class548",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2314",
    iri: "dbo:minimumTemperature",
    domain: "class515",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2904",
    iri: "dbo:workArea",
    domain: "class519",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2141",
    iri: "dbo:vonKlitzingConstant",
    domain: "class384",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3549",
    iri: "dbo:mass",
    domain: "owl:Thing",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2725",
    iri: "dbo:provinceIsoCode",
    domain: "class245",
    range: "xds:string",
    "superproperty": [
      "property2674"
    ],
    type: "owl:datatypeProperty"
  },
  {
    id: "property3311",
    iri: "dbo:freeLabel",
    domain: "class385",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2650",
    iri: "dbo:classes",
    domain: "class356",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2836",
    iri: "dbo:orbits",
    domain: "owl:Thing",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property819",
    iri: "dbo:style",
    domain: "class565",
    range: "owl:Thing",
    type: "owl:objectProperty"
  },
  {
    id: "property1594",
    iri: "dbo:composer",
    domain: "class388",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1323",
    iri: "dbo:restingPlace",
    domain: "class654",
    range: "class105",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2097",
    iri: "dbo:subsystem",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1419",
    iri: "dbo:format",
    domain: "owl:Thing",
    range: "owl:Thing",
    "superproperty": [
      "property1393"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2659",
    iri: "dbo:automobileModel",
    domain: "class397",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3210",
    iri: "dbo:budgetYear",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1925",
    iri: "dbo:cinematography",
    domain: "class237",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2447",
    iri: "dbo:architecturalMovement",
    domain: "class654",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1819",
    iri: "dbo:stadium",
    domain: "owl:Thing",
    range: "class681",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property824",
    iri: "dbo:poorestCountry",
    domain: "class44",
    range: "class44",
    "superproperty": [
      "property856"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2696",
    iri: "dbo:eTeatrId",
    domain: "class237",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2797",
    iri: "dbo:numberOfMunicipalities",
    domain: "class245",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3624",
    iri: "dbo:internationalPhonePrefixLabel",
    domain: "class245",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2844",
    iri: "dbo:fuelType",
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1185",
    iri: "dbo:capitalMountain",
    domain: "class206",
    range: "class327",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1554",
    iri: "dbo:emmyAward",
    domain: "class565",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3415",
    iri: "dbo:spacewalkEnd",
    domain: "class185",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2897",
    iri: "dbo:age",
    domain: "class434",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3173",
    iri: "dbo:appearancesInLeague",
    domain: "class804",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1937",
    iri: "dbo:sourceMountain",
    domain: "owl:Thing",
    range: "class327",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2720",
    iri: "dbo:lowerAge",
    domain: "class356",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2013",
    iri: "dbo:musicComposer",
    domain: "class388",
    range: "class281",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property734",
    iri: "dbo:engine",
    domain: "class811",
    range: "class397",
    "superproperty": [
      "property849"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2713",
    iri: "dbo:numberOfClubs",
    domain: "class701",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1679",
    iri: "dbo:regionalLanguage",
    domain: "class245",
    range: "class361",
    "superproperty": [
      "property1646"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property3189",
    iri: "dbo:Planet/meanTemperature",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3633",
    iri: "dbo:musicFormat",
    comment: {
      "en": "The format of the album: EP, Single etc."
    },
    domain: "class135",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2269",
    iri: "dbo:layingDown",
    domain: "class736",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1920",
    iri: "dbo:climate",
    domain: "class105",
    range: "owl:Thing",
    "superproperty": [
      "property827"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1740",
    iri: "dbo:classis",
    comment: {
      "en": "the living thing class (from the Latin \"classis\"), according to the biological taxonomy"
    },
    domain: "class271",
    range: "owl:Thing",
    "subproperty": [
      "property745"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1461",
    iri: "dbo:formerHighschool",
    domain: "class687",
    range: "class207",
    "superproperty": [
      "property1924"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2507",
    iri: "dbo:flagSize",
    domain: "class17",
    range: "xds:integer",
    type: "owl:datatypeProperty"
  },
  {
    id: "property836",
    iri: "dbo:polishFilmAward",
    domain: "class565",
    range: "class534",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property1945",
    iri: "dbo:religiousOrder",
    domain: "class233",
    range: "class454",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2229",
    iri: "dbo:elevationQuote",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property788",
    iri: "dbo:targetAirport",
    domain: "class90",
    range: "class142",
    "superproperty": [
      "property1566"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2818",
    iri: "dbo:viafId",
    comment: {
      "en": "International authority data from the Online Computer Library Center (OCLC)"
    },
    domain: "class434",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3635",
    iri: "dbo:observatory",
    comment: {
      
    },
    domain: "class206",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2972",
    iri: "dbo:dateCompleted",
    domain: "class346",
    range: "xds:date",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3174",
    iri: "dbo:shipDisplacement",
    comment: {
      "en": "A ship's displacement is its mass at any given time."
    },
    domain: "class736",
    range: "xds:double",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3143",
    iri: "dbo:collegeHof",
    domain: "class416",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1196",
    iri: "dbo:cousurper",
    domain: "class654",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property1759",
    iri: "dbo:administrator",
    domain: "class356",
    range: "class654",
    type: "owl:objectProperty"
  },
  {
    id: "property3601",
    iri: "dbo:PopulatedPlace/areaTotal",
    "attributes": [
      "external"
    ],
    domain: "owl:Thing",
    range: "rdfs:Literal",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3469",
    iri: "dbo:band",
    domain: "class496",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1280",
    iri: "dbo:formerChoreographer",
    domain: "class698",
    range: "class654",
    "superproperty": [
      "property855"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2533",
    iri: "dbo:subPrefecture",
    domain: "class105",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property1799",
    iri: "dbo:secretaryGeneral",
    domain: "class588",
    range: "class654",
    "superproperty": [
      "property1314"
    ],
    type: "owl:objectProperty"
  },
  {
    id: "property2195",
    iri: "dbo:numberOfRun",
    domain: "class654",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  },
  {
    id: "property3130",
    iri: "dbo:documentDesignation",
    domain: "owl:Thing",
    range: "xds:string",
    type: "owl:datatypeProperty"
  },
  {
    id: "property2214",
    iri: "dbo:orbitalFlights",
    domain: "class268",
    range: "xds:nonNegativeInteger",
    type: "owl:datatypeProperty"
  }
]