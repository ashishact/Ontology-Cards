var createOntology = function(){
	var self = this;

	this.searchDelim = '"';
	this.searchIdDelim = '~';


	
	this.dboClasses = {
		"0": {
	  	"iri": "owl:Thing"
		},
		"0.0": {
	  	"iri": "Activity"
		},
		"0.0.0": {
	  	"iri": "Game",
	  	"comment": "a structured activity, usually undertaken for enjoyment and sometimes used as an educational tool"
		},
		"0.0.0.0": {
	  	"iri": "BoardGame",
	  	"comment": "come from http://en.wikipedia.org/wiki/Category:Board_games"
		},
		"0.0.0.1": {
	  	"iri": "CardGame"
		},
		"0.0.1": {
	  	"iri": "Sales"
		},
		"0.0.2": {
	  	"iri": "Sport",
	  	"comment": "A sport is commonly defined as an organized, competitive, and skillful physical activity."
		},
		"0.0.2.0": {
	  	"iri": "Athletics"
		},
		"0.0.2.1": {
	  	"iri": "Boxing"
		},
		"0.0.2.1.0": {
	  	"iri": "BoxingCategory"
		},
		"0.0.2.1.1": {
	  	"iri": "BoxingStyle"
		},
		"0.0.2.2": {
	  	"iri": "HorseRiding"
		},
		"0.0.2.3": {
	  	"iri": "TeamSport"
		},
		"0.0.2.3.0": {
	  	"iri": "Soccer"
		},
		"0.1": {
	  	"iri": "Agent",
	  	"comment": "Analogous to a foaf:Agent, an agent is an entity that acts. This is intended to be the super class of Person and Organisation."
		},
		"0.1.0": {
	  	"iri": "Deity"
		},
		"0.1.1": {
	  	"iri": "Employer",
	  	"comment": "a person, business, firm, etc, that employs workers."
		},
		"0.1.2": {
	  	"iri": "Family",
	  	"comment": "A group of people related by common descent, a lineage."
		},
		"0.1.2.0": {
	  	"iri": "NobleFamily",
	  	"comment": "Family deemed to be of noble descent"
		},
		"0.1.3": {
	  	"iri": "Organisation"
		},
		"0.1.3.0": {
	  	"iri": "Broadcaster"
		},
		"0.1.3.0.0": {
	  	"iri": "BroadcastNetwork"
		},
		"0.1.3.0.1": {
	  	"iri": "RadioStation",
	  	"comment": "A radio station has one line up. For instance the radio station BBC Radio 1. Not to be confused with the broadcasting network BBC, which has many radio stations."
		},
		"0.1.3.0.2": {
	  	"iri": "TelevisionStation",
	  	"comment": "A television station has usually one line up. For instance the television station WABC-TV (or ABC 7, Channel 7). Not to be confused with the broadcasting network ABC, which has many television stations."
		},
		"0.1.3.1": {
	  	"iri": "Company"
		},
		"0.1.3.1.0": {
	  	"iri": "Airline"
		},
		"0.1.3.1.1": {
	  	"iri": "Bank"
		},
		"0.1.3.1.2": {
	  	"iri": "Brewery"
		},
		"0.1.3.1.3": {
	  	"iri": "BusCompany"
		},
		"0.1.3.1.4": {
	  	"iri": "Caterer"
		},
		"0.1.3.1.5": {
	  	"iri": "LawFirm",
	  	"comment": "A law firm is a business entity formed by one or more lawyers to engage in the practice of law. The primary service provided by a law firm is to advise clients (individuals or corporations) about their legal rights and responsibilities, and to represent their clients in civil or criminal cases, business transactions, and other matters in which legal advice and other assistance are sought."
		},
		"0.1.3.1.6": {
	  	"iri": "Publisher",
	  	"comment": "Publishing company"
		},
		"0.1.3.1.7": {
	  	"iri": "RecordLabel"
		},
		"0.1.3.1.8": {
	  	"iri": "Winery"
		},
		"0.1.3.2": {
	  	"iri": "EducationalInstitution"
		},
		"0.1.3.2.0": {
	  	"iri": "College"
		},
		"0.1.3.2.1": {
	  	"iri": "Library"
		},
		"0.1.3.2.2": {
	  	"iri": "School"
		},
		"0.1.3.2.3": {
	  	"iri": "University"
		},
		"0.1.3.3": {
	  	"iri": "EmployersOrganisation"
		},
		"0.1.3.4": {
	  	"iri": "GeopoliticalOrganisation"
		},
		"0.1.3.5": {
	  	"iri": "GovernmentAgency",
	  	"comment": "A government agency is a permanent or semi-permanent organization in the machinery of government that is responsible for the oversight and administration of specific functions, such as an intelligence agency."
		},
		"0.1.3.5.0": {
	  	"iri": "GovernmentCabinet"
		},
		"0.1.3.6": {
	  	"iri": "Group",
	  	"comment": "An (informal) group of people."
		},
		"0.1.3.6.0": {
	  	"iri": "Band"
		},
		"0.1.3.6.1": {
	  	"iri": "ComedyGroup"
		},
		"0.1.3.7": {
	  	"iri": "InternationalOrganisation"
		},
		"0.1.3.8": {
	  	"iri": "Legislature"
		},
		"0.1.3.9": {
	  	"iri": "MilitaryUnit"
		},
		"0.1.3.10": {
	  	"iri": "Non-ProfitOrganisation"
		},
		"0.1.3.10.0": {
	  	"iri": "RecordOffice"
		},
		"0.1.3.11": {
	  	"iri": "Parliament"
		},
		"0.1.3.12": {
	  	"iri": "PoliticalParty",
	  	"comment": "for example: Democratic_Party_(United_States)"
		},
		"0.1.3.13": {
	  	"iri": "PublicTransitSystem"
		},
		"0.1.3.14": {
	  	"iri": "ReligiousOrganisation"
		},
		"0.1.3.14.0": {
	  	"iri": "ClericalOrder"
		},
		"0.1.3.15": {
	  	"iri": "SambaSchool"
		},
		"0.1.3.16": {
	  	"iri": "SportsClub"
		},
		"0.1.3.16.0": {
	  	"iri": "HockeyClub"
		},
		"0.1.3.17": {
	  	"iri": "SportsLeague",
	  	"comment": "A group of sports teams or individual athletes that compete against each other in a specific sport."
		},
		"0.1.3.17.0": {
	  	"iri": "AmericanFootballLeague",
	  	"comment": "A group of sports teams that compete against each other in american football."
		},
		"0.1.3.17.1": {
	  	"iri": "AustralianFootballLeague",
	  	"comment": "A group of sports teams that compete against each other in australian football."
		},
		"0.1.3.17.2": {
	  	"iri": "AutoRacingLeague",
	  	"comment": "a group of sports teams or individual athletes that compete against each other in auto racing"
		},
		"0.1.3.17.3": {
	  	"iri": "BaseballLeague",
	  	"comment": "a group of sports teams that compete against each other in Baseball."
		},
		"0.1.3.17.4": {
	  	"iri": "BasketballLeague",
	  	"comment": "a group of sports teams that compete against each other in Basketball"
		},
		"0.1.3.17.5": {
	  	"iri": "BowlingLeague",
	  	"comment": "a group of sports teams or players that compete against each other in Bowling"
		},
		"0.1.3.17.6": {
	  	"iri": "BoxingLeague",
	  	"comment": "A group of sports teams or fighters that compete against each other in Boxing"
		},
		"0.1.3.17.7": {
	  	"iri": "CanadianFootballLeague",
	  	"comment": "A group of sports teams that compete against each other in canadian football league."
		},
		"0.1.3.17.8": {
	  	"iri": "CricketLeague",
	  	"comment": "a group of sports teams that compete against each other in Cricket"
		},
		"0.1.3.17.9": {
	  	"iri": "CurlingLeague",
	  	"comment": "a group of sports teams that compete against each other in Curling"
		},
		"0.1.3.17.10": {
	  	"iri": "CyclingLeague",
	  	"comment": "a group of sports teams that compete against each other in Cycling"
		},
		"0.1.3.17.11": {
	  	"iri": "FieldHockeyLeague",
	  	"comment": "a group of sports teams that compete against each other in Field Hockey"
		},
		"0.1.3.17.12": {
	  	"iri": "FormulaOneRacing"
		},
		"0.1.3.17.13": {
	  	"iri": "GolfLeague",
	  	"comment": "Golfplayer that compete against each other in Golf"
		},
		"0.1.3.17.14": {
	  	"iri": "HandballLeague",
	  	"comment": "a group of sports teams that compete against each other in Handball"
		},
		"0.1.3.17.15": {
	  	"iri": "IceHockeyLeague",
	  	"comment": "a group of sports teams that compete against each other in Ice Hockey."
		},
		"0.1.3.17.16": {
	  	"iri": "InlineHockeyLeague",
	  	"comment": "group of sports teams that compete against each other in Inline Hockey."
		},
		"0.1.3.17.17": {
	  	"iri": "LacrosseLeague",
	  	"comment": "a group of sports teams that compete against each other in Lacrosse."
		},
		"0.1.3.17.18": {
	  	"iri": "MixedMartialArtsLeague",
	  	"comment": "a group of sports teams that compete against each other in Mixed Martial Arts"
		},
		"0.1.3.17.19": {
	  	"iri": "MotorcycleRacingLeague",
	  	"comment": "a group of sports teams or bikerider that compete against each other in Motorcycle Racing"
		},
		"0.1.3.17.20": {
	  	"iri": "PaintballLeague",
	  	"comment": "a group of sports teams that compete against each other in Paintball"
		},
		"0.1.3.17.21": {
	  	"iri": "PoloLeague",
	  	"comment": "A group of sports teams that compete against each other in Polo."
		},
		"0.1.3.17.22": {
	  	"iri": "RadioControlledRacingLeague",
	  	"comment": "A group of sports teams or person that compete against each other in radio-controlled racing."
		},
		"0.1.3.17.23": {
	  	"iri": "RugbyLeague",
	  	"comment": "A group of sports teams that compete against each other in rugby."
		},
		"0.1.3.17.24": {
	  	"iri": "SoccerLeague",
	  	"comment": "A group of sports teams that compete against each other in soccer."
		},
		"0.1.3.17.25": {
	  	"iri": "SoftballLeague",
	  	"comment": "A group of sports teams that compete against each other in softball."
		},
		"0.1.3.17.26": {
	  	"iri": "SpeedwayLeague",
	  	"comment": "A group of sports teams that compete against each other in motorcycle speedway racing."
		},
		"0.1.3.17.27": {
	  	"iri": "TennisLeague",
	  	"comment": "A group of sports teams or person that compete against each other in tennis."
		},
		"0.1.3.17.28": {
	  	"iri": "VideogamesLeague",
	  	"comment": "A group of sports teams or person that compete against each other in videogames."
		},
		"0.1.3.17.29": {
	  	"iri": "VolleyballLeague",
	  	"comment": "A group of sports teams that compete against each other in volleyball."
		},
		"0.1.3.18": {
	  	"iri": "SportsTeam"
		},
		"0.1.3.18.0": {
	  	"iri": "AmericanFootballTeam"
		},
		"0.1.3.18.1": {
	  	"iri": "AustralianFootballTeam"
		},
		"0.1.3.18.2": {
	  	"iri": "BaseballTeam"
		},
		"0.1.3.18.3": {
	  	"iri": "BasketballTeam"
		},
		"0.1.3.18.4": {
	  	"iri": "CanadianFootballTeam"
		},
		"0.1.3.18.5": {
	  	"iri": "CricketTeam"
		},
		"0.1.3.18.6": {
	  	"iri": "CyclingTeam"
		},
		"0.1.3.18.7": {
	  	"iri": "FormulaOneTeam"
		},
		"0.1.3.18.8": {
	  	"iri": "HandballTeam"
		},
		"0.1.3.18.9": {
	  	"iri": "HockeyTeam"
		},
		"0.1.3.18.10": {
	  	"iri": "RugbyClub"
		},
		"0.1.3.18.11": {
	  	"iri": "SoccerClub"
		},
		"0.1.3.18.11.0": {
	  	"iri": "NationalSoccerClub"
		},
		"0.1.3.18.12": {
	  	"iri": "SpeedwayTeam"
		},
		"0.1.3.19": {
	  	"iri": "TermOfOffice"
		},
		"0.1.3.20": {
	  	"iri": "TradeUnion",
	  	"comment": "A trade union or labor union is an organization of workers who have banded together to achieve common goals such as better working conditions."
		},
		"0.1.4": {
	  	"iri": "Person"
		},
		"0.1.4.0": {
	  	"iri": "Ambassador",
	  	"comment": "An ambassador is the highest ranking diplomat that represents a nation and is usually accredited to a foreign sovereign or government, or to an international organization."
		},
		"0.1.4.1": {
	  	"iri": "Archeologist"
		},
		"0.1.4.2": {
	  	"iri": "Architect"
		},
		"0.1.4.3": {
	  	"iri": "Aristocrat"
		},
		"0.1.4.4": {
	  	"iri": "Artist"
		},
		"0.1.4.4.0": {
	  	"iri": "Actor",
	  	"comment": "An actor or actress is a person who acts in a dramatic production and who works in film, television, theatre, or radio in that capacity."
		},
		"0.1.4.4.0.0": {
	  	"iri": "AdultActor",
	  	"comment": "A pornographic actor or actress or a porn star is a person who performs sex acts in film, normally characterised as a pornographic film.."
		},
		"0.1.4.4.0.1": {
	  	"iri": "VoiceActor"
		},
		"0.1.4.4.1": {
	  	"iri": "Comedian"
		},
		"0.1.4.4.2": {
	  	"iri": "ComicsCreator"
		},
		"0.1.4.4.3": {
	  	"iri": "Dancer"
		},
		"0.1.4.4.4": {
	  	"iri": "FashionDesigner"
		},
		"0.1.4.4.5": {
	  	"iri": "Humorist"
		},
		"0.1.4.4.6": {
	  	"iri": "MusicalArtist"
		},
		"0.1.4.4.6.0": {
	  	"iri": "BackScene"
		},
		"0.1.4.4.6.1": {
	  	"iri": "ClassicalMusicArtist"
		},
		"0.1.4.4.6.2": {
	  	"iri": "Instrumentalist"
		},
		"0.1.4.4.6.2.0": {
	  	"iri": "Guitarist"
		},
		"0.1.4.4.6.3": {
	  	"iri": "MusicDirector",
	  	"comment": "A person who is the director of an orchestra or concert band."
		},
		"0.1.4.4.6.4": {
	  	"iri": "Singer",
	  	"comment": "a person who sings."
		},
		"0.1.4.4.7": {
	  	"iri": "Painter"
		},
		"0.1.4.4.8": {
	  	"iri": "Photographer"
		},
		"0.1.4.4.9": {
	  	"iri": "Sculptor"
		},
		"0.1.4.5": {
	  	"iri": "Astronaut"
		},
		"0.1.4.6": {
	  	"iri": "Athlete"
		},
		"0.1.4.6.0": {
	  	"iri": "ArcherPlayer"
		},
		"0.1.4.6.1": {
	  	"iri": "AthleticsPlayer"
		},
		"0.1.4.6.2": {
	  	"iri": "AustralianRulesFootballPlayer"
		},
		"0.1.4.6.3": {
	  	"iri": "BadmintonPlayer"
		},
		"0.1.4.6.4": {
	  	"iri": "BaseballPlayer"
		},
		"0.1.4.6.5": {
	  	"iri": "BasketballPlayer"
		},
		"0.1.4.6.6": {
	  	"iri": "Bodybuilder"
		},
		"0.1.4.6.7": {
	  	"iri": "Boxer"
		},
		"0.1.4.6.7.0": {
	  	"iri": "AmateurBoxer"
		},
		"0.1.4.6.8": {
	  	"iri": "BullFighter"
		},
		"0.1.4.6.9": {
	  	"iri": "Canoeist"
		},
		"0.1.4.6.10": {
	  	"iri": "ChessPlayer"
		},
		"0.1.4.6.11": {
	  	"iri": "Cricketer"
		},
		"0.1.4.6.12": {
	  	"iri": "Cyclist"
		},
		"0.1.4.6.13": {
	  	"iri": "DartsPlayer"
		},
		"0.1.4.6.14": {
	  	"iri": "Fencer"
		},
		"0.1.4.6.15": {
	  	"iri": "GaelicGamesPlayer"
		},
		"0.1.4.6.16": {
	  	"iri": "GolfPlayer"
		},
		"0.1.4.6.17": {
	  	"iri": "GridironFootballPlayer"
		},
		"0.1.4.6.17.0": {
	  	"iri": "AmericanFootballPlayer"
		},
		"0.1.4.6.17.1": {
	  	"iri": "CanadianFootballPlayer"
		},
		"0.1.4.6.18": {
	  	"iri": "Gymnast",
	  	"comment": "A gymnast is one who performs gymnastics"
		},
		"0.1.4.6.19": {
	  	"iri": "HandballPlayer"
		},
		"0.1.4.6.20": {
	  	"iri": "HighDiver"
		},
		"0.1.4.6.21": {
	  	"iri": "HorseRider"
		},
		"0.1.4.6.22": {
	  	"iri": "Jockey"
		},
		"0.1.4.6.23": {
	  	"iri": "LacrossePlayer"
		},
		"0.1.4.6.24": {
	  	"iri": "MartialArtist"
		},
		"0.1.4.6.25": {
	  	"iri": "MotorsportRacer"
		},
		"0.1.4.6.25.0": {
	  	"iri": "MotorcycleRider"
		},
		"0.1.4.6.25.0.0": {
	  	"iri": "MotocycleRacer"
		},
		"0.1.4.6.25.0.1": {
	  	"iri": "SpeedwayRider"
		},
		"0.1.4.6.25.1": {
	  	"iri": "RacingDriver"
		},
		"0.1.4.6.25.1.0": {
	  	"iri": "DTMRacer"
		},
		"0.1.4.6.25.1.1": {
	  	"iri": "FormulaOneRacer"
		},
		"0.1.4.6.25.1.2": {
	  	"iri": "NascarDriver"
		},
		"0.1.4.6.25.1.3": {
	  	"iri": "RallyDriver"
		},
		"0.1.4.6.26": {
	  	"iri": "NationalCollegiateAthleticAssociationAthlete"
		},
		"0.1.4.6.27": {
	  	"iri": "NetballPlayer"
		},
		"0.1.4.6.28": {
	  	"iri": "PokerPlayer"
		},
		"0.1.4.6.29": {
	  	"iri": "Rower"
		},
		"0.1.4.6.30": {
	  	"iri": "RugbyPlayer"
		},
		"0.1.4.6.31": {
	  	"iri": "SnookerPlayer",
	  	"comment": "An athlete that plays snooker, which is a billard derivate"
		},
		"0.1.4.6.31.0": {
	  	"iri": "SnookerChamp",
	  	"comment": "An athlete that plays snooker and won the world championship at least once"
		},
		"0.1.4.6.32": {
	  	"iri": "SoccerPlayer"
		},
		"0.1.4.6.33": {
	  	"iri": "SquashPlayer"
		},
		"0.1.4.6.34": {
	  	"iri": "Surfer"
		},
		"0.1.4.6.35": {
	  	"iri": "Swimmer",
	  	"comment": "a trained athlete who participates in swimming meets"
		},
		"0.1.4.6.36": {
	  	"iri": "TableTennisPlayer",
	  	"comment": "Athlete who plays table tennis"
		},
		"0.1.4.6.37": {
	  	"iri": "TeamMember",
	  	"comment": "A member of an athletic team."
		},
		"0.1.4.6.38": {
	  	"iri": "TennisPlayer"
		},
		"0.1.4.6.39": {
	  	"iri": "VolleyballPlayer"
		},
		"0.1.4.6.39.0": {
	  	"iri": "BeachVolleyballPlayer"
		},
		"0.1.4.6.40": {
	  	"iri": "WaterPoloPlayer"
		},
		"0.1.4.6.41": {
	  	"iri": "WinterSportPlayer"
		},
		"0.1.4.6.41.0": {
	  	"iri": "Biathlete"
		},
		"0.1.4.6.41.1": {
	  	"iri": "BobsleighAthlete"
		},
		"0.1.4.6.41.2": {
	  	"iri": "CrossCountrySkier"
		},
		"0.1.4.6.41.3": {
	  	"iri": "Curler"
		},
		"0.1.4.6.41.4": {
	  	"iri": "FigureSkater"
		},
		"0.1.4.6.41.5": {
	  	"iri": "IceHockeyPlayer"
		},
		"0.1.4.6.41.6": {
	  	"iri": "NordicCombined"
		},
		"0.1.4.6.41.7": {
	  	"iri": "Skater"
		},
		"0.1.4.6.41.8": {
	  	"iri": "Ski_jumper"
		},
		"0.1.4.6.41.9": {
	  	"iri": "Skier"
		},
		"0.1.4.6.41.10": {
	  	"iri": "SpeedSkater"
		},
		"0.1.4.6.42": {
	  	"iri": "Wrestler"
		},
		"0.1.4.6.42.0": {
	  	"iri": "SumoWrestler"
		},
		"0.1.4.7": {
	  	"iri": "BeautyQueen",
	  	"comment": "A beauty pageant titleholder"
		},
		"0.1.4.8": {
	  	"iri": "BusinessPerson"
		},
		"0.1.4.9": {
	  	"iri": "Celebrity"
		},
		"0.1.4.10": {
	  	"iri": "Chef",
	  	"comment": "a person who cooks professionally for other people"
		},
		"0.1.4.11": {
	  	"iri": "Cleric"
		},
		"0.1.4.11.0": {
	  	"iri": "Cardinal"
		},
		"0.1.4.11.1": {
	  	"iri": "ChristianBishop"
		},
		"0.1.4.11.2": {
	  	"iri": "ChristianPatriarch"
		},
		"0.1.4.11.3": {
	  	"iri": "Pope"
		},
		"0.1.4.11.4": {
	  	"iri": "Priest"
		},
		"0.1.4.11.5": {
	  	"iri": "Saint"
		},
		"0.1.4.11.6": {
	  	"iri": "Vicar"
		},
		"0.1.4.12": {
	  	"iri": "Coach"
		},
		"0.1.4.12.0": {
	  	"iri": "AmericanFootballCoach"
		},
		"0.1.4.12.1": {
	  	"iri": "CollegeCoach"
		},
		"0.1.4.12.2": {
	  	"iri": "VolleyballCoach"
		},
		"0.1.4.13": {
	  	"iri": "Criminal"
		},
		"0.1.4.13.0": {
	  	"iri": "Murderer"
		},
		"0.1.4.13.0.0": {
	  	"iri": "SerialKiller"
		},
		"0.1.4.14": {
	  	"iri": "Economist",
	  	"comment": "An economist is a professional in the social science discipline of economics."
		},
		"0.1.4.15": {
	  	"iri": "Egyptologist"
		},
		"0.1.4.16": {
	  	"iri": "Engineer"
		},
		"0.1.4.17": {
	  	"iri": "Farmer"
		},
		"0.1.4.18": {
	  	"iri": "FictionalCharacter"
		},
		"0.1.4.18.0": {
	  	"iri": "ComicsCharacter"
		},
		"0.1.4.18.0.0": {
	  	"iri": "AnimangaCharacter",
	  	"comment": "Anime/Manga character"
		},
		"0.1.4.18.1": {
	  	"iri": "DisneyCharacter"
		},
		"0.1.4.18.2": {
	  	"iri": "MythologicalFigure"
		},
		"0.1.4.18.3": {
	  	"iri": "NarutoCharacter"
		},
		"0.1.4.18.4": {
	  	"iri": "SoapCharacter"
		},
		"0.1.4.19": {
	  	"iri": "HorseTrainer"
		},
		"0.1.4.20": {
	  	"iri": "Journalist"
		},
		"0.1.4.21": {
	  	"iri": "Judge"
		},
		"0.1.4.22": {
	  	"iri": "Lawyer",
	  	"comment": "a person who is practicing law."
		},
		"0.1.4.23": {
	  	"iri": "Linguist"
		},
		"0.1.4.24": {
	  	"iri": "MemberResistanceMovement"
		},
		"0.1.4.25": {
	  	"iri": "MilitaryPerson"
		},
		"0.1.4.26": {
	  	"iri": "Model"
		},
		"0.1.4.27": {
	  	"iri": "Monarch"
		},
		"0.1.4.28": {
	  	"iri": "MovieDirector",
	  	"comment": "a person who oversees making of film."
		},
		"0.1.4.29": {
	  	"iri": "Noble"
		},
		"0.1.4.30": {
	  	"iri": "OfficeHolder"
		},
		"0.1.4.31": {
	  	"iri": "OrganisationMember",
	  	"comment": "A member of an organisation."
		},
		"0.1.4.31.0": {
	  	"iri": "SportsTeamMember",
	  	"comment": "A member of an athletic team."
		},
		"0.1.4.32": {
	  	"iri": "Orphan"
		},
		"0.1.4.33": {
	  	"iri": "Philosopher"
		},
		"0.1.4.34": {
	  	"iri": "PlayboyPlaymate"
		},
		"0.1.4.35": {
	  	"iri": "Politician"
		},
		"0.1.4.35.0": {
	  	"iri": "Chancellor"
		},
		"0.1.4.35.1": {
	  	"iri": "Congressman"
		},
		"0.1.4.35.2": {
	  	"iri": "Deputy"
		},
		"0.1.4.35.3": {
	  	"iri": "Governor"
		},
		"0.1.4.35.4": {
	  	"iri": "Lieutenant"
		},
		"0.1.4.35.5": {
	  	"iri": "Mayor"
		},
		"0.1.4.35.6": {
	  	"iri": "MemberOfParliament"
		},
		"0.1.4.35.7": {
	  	"iri": "President"
		},
		"0.1.4.35.8": {
	  	"iri": "PrimeMinister"
		},
		"0.1.4.35.9": {
	  	"iri": "Senator"
		},
		"0.1.4.35.10": {
	  	"iri": "VicePresident"
		},
		"0.1.4.35.11": {
	  	"iri": "VicePrimeMinister"
		},
		"0.1.4.36": {
	  	"iri": "PoliticianSpouse"
		},
		"0.1.4.37": {
	  	"iri": "Presenter",
	  	"comment": "TV or radio show presenter"
		},
		"0.1.4.37.0": {
	  	"iri": "RadioHost"
		},
		"0.1.4.37.1": {
	  	"iri": "TelevisionHost"
		},
		"0.1.4.38": {
	  	"iri": "Producer",
	  	"comment": "a person who manages movies or music recordings."
		},
		"0.1.4.39": {
	  	"iri": "Psychologist"
		},
		"0.1.4.40": {
	  	"iri": "Referee",
	  	"comment": "An official who watches a game or match closely to ensure that the rules are adhered to."
		},
		"0.1.4.41": {
	  	"iri": "Religious"
		},
		"0.1.4.42": {
	  	"iri": "RomanEmperor"
		},
		"0.1.4.43": {
	  	"iri": "Royalty"
		},
		"0.1.4.43.0": {
	  	"iri": "BritishRoyalty"
		},
		"0.1.4.43.0.0": {
	  	"iri": "Baronet"
		},
		"0.1.4.44": {
	  	"iri": "Scientist"
		},
		"0.1.4.44.0": {
	  	"iri": "Biologist"
		},
		"0.1.4.44.1": {
	  	"iri": "Entomologist"
		},
		"0.1.4.44.2": {
	  	"iri": "Medician"
		},
		"0.1.4.44.3": {
	  	"iri": "Professor"
		},
		"0.1.4.45": {
	  	"iri": "SportsManager",
	  	"comment": "According to the french label sub Soccer, trainership could be meant. However, here a Sportsmanager is interpreted as a member of the board of a sporting club."
		},
		"0.1.4.45.0": {
	  	"iri": "SoccerManager"
		},
		"0.1.4.46": {
	  	"iri": "TelevisionDirector",
	  	"comment": "a person who directs the activities involved in making a television program."
		},
		"0.1.4.47": {
	  	"iri": "TelevisionPersonality"
		},
		"0.1.4.47.0": {
	  	"iri": "Host"
		},
		"0.1.4.48": {
	  	"iri": "TheatreDirector",
	  	"comment": "A director in the theatre field who oversees and orchestrates the mounting of a theatre production."
		},
		"0.1.4.49": {
	  	"iri": "Writer"
		},
		"0.1.4.49.0": {
	  	"iri": "Historian"
		},
		"0.1.4.49.1": {
	  	"iri": "MusicComposer",
	  	"comment": "a person who creates music."
		},
		"0.1.4.49.2": {
	  	"iri": "PlayWright",
	  	"comment": "A person who writes dramatic literature or drama."
		},
		"0.1.4.49.3": {
	  	"iri": "Poet"
		},
		"0.1.4.49.4": {
	  	"iri": "ScreenWriter"
		},
		"0.1.4.49.5": {
	  	"iri": "SongWriter",
	  	"comment": "a person who writes songs."
		},
		"0.2": {
	  	"iri": "Altitude"
		},
		"0.3": {
	  	"iri": "AnatomicalStructure"
		},
		"0.3.0": {
	  	"iri": "Artery"
		},
		"0.3.1": {
	  	"iri": "BloodVessel"
		},
		"0.3.2": {
	  	"iri": "Bone"
		},
		"0.3.3": {
	  	"iri": "Brain"
		},
		"0.3.4": {
	  	"iri": "Embryology"
		},
		"0.3.5": {
	  	"iri": "Ligament"
		},
		"0.3.6": {
	  	"iri": "Lymph"
		},
		"0.3.7": {
	  	"iri": "Muscle"
		},
		"0.3.8": {
	  	"iri": "Nerve"
		},
		"0.3.9": {
	  	"iri": "Vein"
		},
		"0.4": {
	  	"iri": "Area"
		},
		"0.5": {
	  	"iri": "Award"
		},
		"0.5.0": {
	  	"iri": "Decoration",
	  	"comment": "An object, such as a medal or an order, that is awarded to honor the recipient ostentatiously."
		},
		"0.5.1": {
	  	"iri": "NobelPrize"
		},
		"0.6": {
	  	"iri": "Biomolecule",
	  	"comment": "equivalent to http://ccdb.ucsd.edu/NIF/BIRNLex-OBO-UBO.owl#birnlex_22."
		},
		"0.6.0": {
	  	"iri": "Enzyme"
		},
		"0.6.1": {
	  	"iri": "Gene"
		},
		"0.6.1.0": {
	  	"iri": "HumanGene"
		},
		"0.6.1.1": {
	  	"iri": "MouseGene"
		},
		"0.6.2": {
	  	"iri": "Lipid"
		},
		"0.6.3": {
	  	"iri": "Polysaccharide"
		},
		"0.6.4": {
	  	"iri": "Protein"
		},
		"0.7": {
	  	"iri": "Blazon"
		},
		"0.8": {
	  	"iri": "ChartsPlacements"
		},
		"0.9": {
	  	"iri": "ChemicalSubstance"
		},
		"0.9.0": {
	  	"iri": "ChemicalCompound"
		},
		"0.9.1": {
	  	"iri": "ChemicalElement"
		},
		"0.9.2": {
	  	"iri": "Drug"
		},
		"0.9.3": {
	  	"iri": "Mineral",
	  	"comment": "A naturally occurring solid chemical substance."
		},
		"0.10": {
	  	"iri": "Colour",
	  	"comment": "Color or colour is the visual perceptual property corresponding in humans to the categories called red, yellow, blue and others. Color derives from the spectrum of light (distribution of light energy versus wavelength) interacting in the eye with the spectral sensitivities of the light receptors."
		},
		"0.11": {
	  	"iri": "Currency"
		},
		"0.12": {
	  	"iri": "Demographics"
		},
		"0.13": {
	  	"iri": "Depth"
		},
		"0.14": {
	  	"iri": "Device"
		},
		"0.14.0": {
	  	"iri": "Camera"
		},
		"0.14.0.0": {
	  	"iri": "DigitalCamera"
		},
		"0.14.1": {
	  	"iri": "Engine"
		},
		"0.14.1.0": {
	  	"iri": "AutomobileEngine"
		},
		"0.14.1.1": {
	  	"iri": "RocketEngine"
		},
		"0.14.2": {
	  	"iri": "InformationAppliance",
	  	"comment": "An information device such as PDAs or Video game consoles, etc."
		},
		"0.14.3": {
	  	"iri": "Instrument",
	  	"comment": "Describes all musical instrument"
		},
		"0.14.3.0": {
	  	"iri": "Guitar",
	  	"comment": "Describes the guitar"
		},
		"0.14.3.1": {
	  	"iri": "Organ",
	  	"comment": "All types and sizes of organs"
		},
		"0.14.4": {
	  	"iri": "MobilePhone"
		},
		"0.14.5": {
	  	"iri": "Weapon"
		},
		"0.15": {
	  	"iri": "Diploma"
		},
		"0.16": {
	  	"iri": "Disease"
		},
		"0.17": {
	  	"iri": "ElectionDiagram"
		},
		"0.18": {
	  	"iri": "EthnicGroup"
		},
		"0.19": {
	  	"iri": "Event"
		},
		"0.19.0": {
	  	"iri": "Competition"
		},
		"0.19.0.0": {
	  	"iri": "Contest"
		},
		"0.19.1": {
	  	"iri": "LifeCycleEvent"
		},
		"0.19.1.0": {
	  	"iri": "PersonalEvent",
	  	"comment": "an event that occurs in someone's personal life"
		},
		"0.19.1.0.0": {
	  	"iri": "Birth",
	  	"comment": "someone's birth as a type of personal event"
		},
		"0.19.1.0.1": {
	  	"iri": "Death",
	  	"comment": "someone's death as a type of personal event"
		},
		"0.19.1.0.2": {
	  	"iri": "Divorce",
	  	"comment": "two people's divorce as a type of personal event"
		},
		"0.19.1.0.3": {
	  	"iri": "Marriage",
	  	"comment": "someone's marriage as a type of personal event"
		},
		"0.19.2": {
	  	"iri": "NaturalEvent"
		},
		"0.19.2.0": {
	  	"iri": "Earthquake"
		},
		"0.19.2.1": {
	  	"iri": "SolarEclipse"
		},
		"0.19.2.2": {
	  	"iri": "StormSurge"
		},
		"0.19.3": {
	  	"iri": "SocietalEvent",
	  	"comment": "an event that is clearly different from strictly personal events"
		},
		"0.19.3.0": {
	  	"iri": "AcademicConference"
		},
		"0.19.3.1": {
	  	"iri": "Attack"
		},
		"0.19.3.2": {
	  	"iri": "Convention"
		},
		"0.19.3.3": {
	  	"iri": "Election"
		},
		"0.19.3.4": {
	  	"iri": "FilmFestival"
		},
		"0.19.3.5": {
	  	"iri": "Meeting",
	  	"comment": "A regular or irregular meeting of people as an event to keep record of"
		},
		"0.19.3.6": {
	  	"iri": "MilitaryConflict"
		},
		"0.19.3.7": {
	  	"iri": "MusicFestival"
		},
		"0.19.3.8": {
	  	"iri": "Rebellion"
		},
		"0.19.3.9": {
	  	"iri": "SpaceMission"
		},
		"0.19.3.10": {
	  	"iri": "SportsEvent",
	  	"comment": "a event of competitive physical activity"
		},
		"0.19.3.10.0": {
	  	"iri": "CyclingCompetition"
		},
		"0.19.3.10.1": {
	  	"iri": "FootballMatch",
	  	"comment": "a competition between two football teams"
		},
		"0.19.3.10.2": {
	  	"iri": "GrandPrix"
		},
		"0.19.3.10.3": {
	  	"iri": "InternationalFootballLeagueEvent"
		},
		"0.19.3.10.4": {
	  	"iri": "MixedMartialArtsEvent"
		},
		"0.19.3.10.5": {
	  	"iri": "NationalFootballLeagueEvent"
		},
		"0.19.3.10.6": {
	  	"iri": "Olympics"
		},
		"0.19.3.10.6.0": {
	  	"iri": "OlympicEvent"
		},
		"0.19.3.10.7": {
	  	"iri": "Race"
		},
		"0.19.3.10.7.0": {
	  	"iri": "CyclingRace"
		},
		"0.19.3.10.7.1": {
	  	"iri": "HorseRace"
		},
		"0.19.3.10.7.2": {
	  	"iri": "MotorRace"
		},
		"0.19.3.10.8": {
	  	"iri": "Tournament"
		},
		"0.19.3.10.8.0": {
	  	"iri": "GolfTournament"
		},
		"0.19.3.10.8.1": {
	  	"iri": "SoccerTournament"
		},
		"0.19.3.10.8.2": {
	  	"iri": "TennisTournament"
		},
		"0.19.3.10.8.3": {
	  	"iri": "WomensTennisAssociationTournament"
		},
		"0.19.3.10.9": {
	  	"iri": "WrestlingEvent"
		},
		"0.20": {
	  	"iri": "Flag"
		},
		"0.21": {
	  	"iri": "Food",
	  	"comment": "Food is any eatable or drinkable substance that is normally consumed by humans."
		},
		"0.21.0": {
	  	"iri": "Beverage",
	  	"comment": "A drink, or beverage, is a liquid which is specifically prepared for human consumption."
		},
		"0.21.0.0": {
	  	"iri": "Beer"
		},
		"0.21.0.1": {
	  	"iri": "Vodka"
		},
		"0.21.0.2": {
	  	"iri": "Wine"
		},
		"0.21.0.2.0": {
	  	"iri": "ControlledDesignationOfOriginWine",
	  	"comment": "A quality assurance label for wines"
		},
		"0.21.1": {
	  	"iri": "Cheese",
	  	"comment": "A milk product prepared for human consumption"
		},
		"0.22": {
	  	"iri": "GeneLocation"
		},
		"0.22.0": {
	  	"iri": "HumanGeneLocation"
		},
		"0.22.1": {
	  	"iri": "MouseGeneLocation"
		},
		"0.23": {
	  	"iri": "GrossDomesticProduct"
		},
		"0.24": {
	  	"iri": "GrossDomesticProductPerCapita"
		},
		"0.25": {
	  	"iri": "Holiday"
		},
		"0.26": {
	  	"iri": "HumanDevelopmentIndex"
		},
		"0.27": {
	  	"iri": "Language"
		},
		"0.27.0": {
	  	"iri": "ProgrammingLanguage"
		},
		"0.28": {
	  	"iri": "List",
	  	"comment": "A general list of items."
		},
		"0.28.0": {
	  	"iri": "TrackList",
	  	"comment": "A list of music tracks, like on a CD"
		},
		"0.29": {
	  	"iri": "MeanOfTransportation"
		},
		"0.29.0": {
	  	"iri": "Aircraft"
		},
		"0.29.0.0": {
	  	"iri": "MilitaryAircraft"
		},
		"0.29.1": {
	  	"iri": "Automobile"
		},
		"0.29.2": {
	  	"iri": "Locomotive"
		},
		"0.29.3": {
	  	"iri": "MilitaryVehicle"
		},
		"0.29.4": {
	  	"iri": "Motorcycle"
		},
		"0.29.5": {
	  	"iri": "On-SiteTransportation"
		},
		"0.29.5.0": {
	  	"iri": "ConveyorSystem"
		},
		"0.29.5.1": {
	  	"iri": "Escalator"
		},
		"0.29.5.2": {
	  	"iri": "MovingWalkway"
		},
		"0.29.6": {
	  	"iri": "Rocket"
		},
		"0.29.7": {
	  	"iri": "Ship"
		},
		"0.29.8": {
	  	"iri": "SpaceShuttle"
		},
		"0.29.9": {
	  	"iri": "SpaceStation"
		},
		"0.29.10": {
	  	"iri": "Spacecraft"
		},
		"0.29.11": {
	  	"iri": "Train"
		},
		"0.29.12": {
	  	"iri": "TrainCarriage"
		},
		"0.29.13": {
	  	"iri": "Tram"
		},
		"0.30": {
	  	"iri": "Media"
		},
		"0.31": {
	  	"iri": "Medicine"
		},
		"0.32": {
	  	"iri": "Name"
		},
		"0.32.0": {
	  	"iri": "GivenName"
		},
		"0.32.1": {
	  	"iri": "Surname"
		},
		"0.33": {
	  	"iri": "PenaltyShootOut"
		},
		"0.34": {
	  	"iri": "PersonFunction"
		},
		"0.34.0": {
	  	"iri": "PoliticalFunction"
		},
		"0.34.1": {
	  	"iri": "Profession"
		},
		"0.35": {
	  	"iri": "Place",
	  	"comment": "Immobile things or locations."
		},
		"0.35.0": {
	  	"iri": "ArchitecturalStructure",
	  	"comment": "An architectural structure is a human-made, free-standing, immobile outdoor construction (http://en.wikipedia.org/wiki/Architectural_structure)."
		},
		"0.35.0.0": {
	  	"iri": "AmusementParkAttraction"
		},
		"0.35.0.0.0": {
	  	"iri": "RollerCoaster"
		},
		"0.35.0.0.1": {
	  	"iri": "WaterRide"
		},
		"0.35.0.1": {
	  	"iri": "Arena"
		},
		"0.35.0.2": {
	  	"iri": "Building",
	  	"comment": "Building is defined as a Civil Engineering structure such as a house, worship center, factory etc. that has a foundation, wall, roof etc. that protect human being and their properties from direct harsh effect of weather like rain, wind, sun etc. (http://en.wikipedia.org/wiki/Building)."
		},
		"0.35.0.2.0": {
	  	"iri": "Casino",
	  	"comment": "In modern English, a casino is a facility which houses and accommodates certain types of gambling activities."
		},
		"0.35.0.2.1": {
	  	"iri": "Castle",
	  	"comment": "Castles often are, but need not be a military structure. They can serve for status, pleasure and hunt as well."
		},
		"0.35.0.2.2": {
	  	"iri": "Factory",
	  	"comment": "A factory (previously manufactory) or manufacturing plant is an industrial site, usually consisting of buildings and machinery, or more commonly a complex having several buildings, where workers manufacture goods or operate machines processing one product into another."
		},
		"0.35.0.2.3": {
	  	"iri": "HistoricBuilding"
		},
		"0.35.0.2.4": {
	  	"iri": "Hospital"
		},
		"0.35.0.2.5": {
	  	"iri": "Hotel"
		},
		"0.35.0.2.6": {
	  	"iri": "Museum"
		},
		"0.35.0.2.7": {
	  	"iri": "Prison"
		},
		"0.35.0.2.8": {
	  	"iri": "ReligiousBuilding",
	  	"comment": "An establishment or her location where a group of people (a congregation) comes to perform acts of religious study, honor, or devotion."
		},
		"0.35.0.2.8.0": {
	  	"iri": "Abbey",
	  	"comment": "An abbey is a Catholic monastery or convent, under the authority of an Abbot or an Abbess, who serves as the spiritual father or mother of the community."
		},
		"0.35.0.2.8.1": {
	  	"iri": "Church",
	  	"comment": "This is used for church buildings, not any other meaning of church."
		},
		"0.35.0.2.8.2": {
	  	"iri": "Monastery",
	  	"comment": "Monastery denotes the building, or complex of buildings, comprising the domestic quarters and workplace(s) of monastics, whether monks or nuns, and whether living in community or alone (hermits). The monastery generally includes a place reserved for prayer which may be a chapel, church or temple, and may also serve as an oratory. (http://en.wikipedia.org/wiki/Monastery)."
		},
		"0.35.0.2.8.3": {
	  	"iri": "Mosque",
	  	"comment": "A mosque, sometimes spelt mosk, is a place of worship for followers of Islam."
		},
		"0.35.0.2.8.4": {
	  	"iri": "Synagogue",
	  	"comment": "A synagogue, sometimes spelt synagog, is a Jewish or Samaritan house of prayer."
		},
		"0.35.0.2.8.5": {
	  	"iri": "Temple"
		},
		"0.35.0.2.9": {
	  	"iri": "Restaurant"
		},
		"0.35.0.2.10": {
	  	"iri": "ShoppingMall"
		},
		"0.35.0.2.11": {
	  	"iri": "Skyscraper"
		},
		"0.35.0.3": {
	  	"iri": "Gate",
	  	"comment": "Gate is defined as a built structure marking the entrance to a building or an estate."
		},
		"0.35.0.4": {
	  	"iri": "Infrastructure"
		},
		"0.35.0.4.0": {
	  	"iri": "Airport"
		},
		"0.35.0.4.1": {
	  	"iri": "Dam",
	  	"comment": "A dam is part of a landscape infrastructure, like waterworks (canals) or roads, much more than a building, though, of course, it has been built, too."
		},
		"0.35.0.4.2": {
	  	"iri": "Dike"
		},
		"0.35.0.4.3": {
	  	"iri": "LaunchPad"
		},
		"0.35.0.4.4": {
	  	"iri": "Lock"
		},
		"0.35.0.4.5": {
	  	"iri": "Port",
	  	"comment": "a location on a coast or shore containing one or more harbors where ships can dock and transfer people or cargo to or from land."
		},
		"0.35.0.4.6": {
	  	"iri": "PowerStation"
		},
		"0.35.0.4.6.0": {
	  	"iri": "NuclearPowerStation"
		},
		"0.35.0.4.7": {
	  	"iri": "RestArea"
		},
		"0.35.0.4.8": {
	  	"iri": "RouteOfTransportation"
		},
		"0.35.0.4.8.0": {
	  	"iri": "Bridge"
		},
		"0.35.0.4.8.1": {
	  	"iri": "RailwayLine",
	  	"comment": "A railway line is a transport service by trains that pull passengers or freight provided by an organization. Not to be mistaken for railway track, which is the structure consisting of the rails. Wikipedia do not clearly differentiate between both, so there is one infobox describing tracks and lines."
		},
		"0.35.0.4.8.2": {
	  	"iri": "RailwayTunnel"
		},
		"0.35.0.4.8.3": {
	  	"iri": "Road"
		},
		"0.35.0.4.8.4": {
	  	"iri": "RoadJunction"
		},
		"0.35.0.4.8.5": {
	  	"iri": "RoadTunnel"
		},
		"0.35.0.4.8.6": {
	  	"iri": "WaterwayTunnel"
		},
		"0.35.0.4.9": {
	  	"iri": "Station",
	  	"comment": "Public transport station (eg. railway station, metro station, bus station)."
		},
		"0.35.0.4.9.0": {
	  	"iri": "ElectricalSubstation"
		},
		"0.35.0.4.9.1": {
	  	"iri": "FillingStation"
		},
		"0.35.0.4.9.2": {
	  	"iri": "MetroStation"
		},
		"0.35.0.4.9.3": {
	  	"iri": "RailwayStation"
		},
		"0.35.0.4.9.4": {
	  	"iri": "TramStation"
		},
		"0.35.0.5": {
	  	"iri": "MilitaryStructure",
	  	"comment": "A military structure such as a Castle, Fortress, Wall, etc."
		},
		"0.35.0.6": {
	  	"iri": "Mill",
	  	"comment": "a unit operation designed to break a solid material into smaller pieces"
		},
		"0.35.0.6.0": {
	  	"iri": "Treadmill",
	  	"comment": "A mill driven by the tractive power of horses, donkeys or even people"
		},
		"0.35.0.6.1": {
	  	"iri": "Watermill",
	  	"comment": "A watermill is a structure that uses a water wheel or turbine to drive a mechanical process such as flour, lumber or textile production, or metal shaping (rolling, grinding or wire drawing)"
		},
		"0.35.0.6.2": {
	  	"iri": "WindMotor",
	  	"comment": "A wind-driven turbine that adapts itself to wind direction and to wind-force. Is considered to be a class in its own, despite the wind as common factor with Windmill."
		},
		"0.35.0.6.3": {
	  	"iri": "Windmill",
	  	"comment": "A windmill is a machine that converts the energy of wind into rotational energy by means of vanes called sails"
		},
		"0.35.0.7": {
	  	"iri": "Pyramid",
	  	"comment": "a structure whose shape is roughly that of a pyramid in the geometric sense."
		},
		"0.35.0.8": {
	  	"iri": "Shrine"
		},
		"0.35.0.9": {
	  	"iri": "SportFacility"
		},
		"0.35.0.9.0": {
	  	"iri": "CricketGround"
		},
		"0.35.0.9.1": {
	  	"iri": "GolfCourse"
		},
		"0.35.0.9.2": {
	  	"iri": "RaceTrack"
		},
		"0.35.0.9.2.0": {
	  	"iri": "Racecourse",
	  	"comment": "A racecourse is an alternate term for a horse racing track, found in countries such as the United Kingdom, Australia, Hong Kong, and the United Arab Emirates."
		},
		"0.35.0.9.3": {
	  	"iri": "SkiArea"
		},
		"0.35.0.9.3.0": {
	  	"iri": "SkiResort"
		},
		"0.35.0.9.4": {
	  	"iri": "Stadium"
		},
		"0.35.0.10": {
	  	"iri": "Square"
		},
		"0.35.0.11": {
	  	"iri": "Tower",
	  	"comment": "A Tower is a kind of structure (not necessarily a building) that is higher than the rest"
		},
		"0.35.0.11.0": {
	  	"iri": "Lighthouse"
		},
		"0.35.0.11.1": {
	  	"iri": "WaterTower",
	  	"comment": "a construction designed to store larger quantities of water at a place of some elevation in order to keep pressure on the water provision system"
		},
		"0.35.0.12": {
	  	"iri": "Tunnel",
	  	"comment": "A tunnel may be for foot or vehicular road traffic, for rail traffic, or for a canal. Some tunnels are aqueducts to supply water for consumption or for hydroelectric stations or are sewers (http://en.wikipedia.org/wiki/Tunnel)."
		},
		"0.35.0.13": {
	  	"iri": "Venue"
		},
		"0.35.0.13.0": {
	  	"iri": "Theatre",
	  	"comment": "A theater or theatre (also a playhouse) is a structure where theatrical works or plays are performed or other performances such as musical concerts may be produced."
		},
		"0.35.0.14": {
	  	"iri": "Zoo"
		},
		"0.35.1": {
	  	"iri": "CelestialBody"
		},
		"0.35.1.0": {
	  	"iri": "Asteroid"
		},
		"0.35.1.1": {
	  	"iri": "Constellation"
		},
		"0.35.1.2": {
	  	"iri": "Galaxy"
		},
		"0.35.1.3": {
	  	"iri": "Planet"
		},
		"0.35.1.4": {
	  	"iri": "Satellite",
	  	"comment": "An astronomic object orbiting around a planet or star. Definition partly derived from http://www.ontotext.com/proton/protonext# (and thus WordNet 1.7)."
		},
		"0.35.1.4.0": {
	  	"iri": "ArtificialSatellite",
	  	"comment": "In the context of spaceflight, an artificial satellite is an artificial object which has been intentionally placed into orbit."
		},
		"0.35.1.5": {
	  	"iri": "Star"
		},
		"0.35.1.5.0": {
	  	"iri": "BrownDwarf"
		},
		"0.35.1.6": {
	  	"iri": "Swarm"
		},
		"0.35.1.6.0": {
	  	"iri": "Globularswarm"
		},
		"0.35.1.6.1": {
	  	"iri": "Openswarm"
		},
		"0.35.2": {
	  	"iri": "Cemetery",
	  	"comment": "An abbey is a Catholic monastery or convent, under the authority of an Abbot or an Abbess, who serves as the spiritual father or mother of the community."
		},
		"0.35.3": {
	  	"iri": "ConcentrationCamp"
		},
		"0.35.4": {
	  	"iri": "CountrySeat",
	  	"comment": "A country seat is a rural patch of land owned by a land owner."
		},
		"0.35.5": {
	  	"iri": "Garden",
	  	"comment": "A garden is a planned space, usually outdoors, set aside for the display, cultivation, and enjoyment of plants and other forms of nature. (http://en.wikipedia.org/wiki/Garden)"
		},
		"0.35.6": {
	  	"iri": "HistoricPlace"
		},
		"0.35.7": {
	  	"iri": "Mine"
		},
		"0.35.7.0": {
	  	"iri": "CoalPit"
		},
		"0.35.8": {
	  	"iri": "Monument",
	  	"comment": "A type of structure (a statue or an art object) created to commemorate a person or important event, not necessarily of a catastrophic nature."
		},
		"0.35.8.0": {
	  	"iri": "GraveMonument",
	  	"comment": "A monument erected on a tomb, or a memorial stone."
		},
		"0.35.8.1": {
	  	"iri": "Memorial",
	  	"comment": "A monument erected to commemorate a person, an event and/or group. In the case of a person, this might be a grave or tomb."
		},
		"0.35.9": {
	  	"iri": "NaturalPlace",
	  	"comment": "The natural place encompasses all places occurring naturally in universe."
		},
		"0.35.9.0": {
	  	"iri": "Archipelago"
		},
		"0.35.9.1": {
	  	"iri": "Beach"
		},
		"0.35.9.2": {
	  	"iri": "BodyOfWater"
		},
		"0.35.9.2.0": {
	  	"iri": "Bay"
		},
		"0.35.9.2.1": {
	  	"iri": "Lake"
		},
		"0.35.9.2.2": {
	  	"iri": "Ocean",
	  	"comment": "A body of saline water that composes much of a planet's hydrosphere."
		},
		"0.35.9.2.3": {
	  	"iri": "Sea"
		},
		"0.35.9.2.4": {
	  	"iri": "Stream",
	  	"comment": "a flowing body of water with a current, confined within a bed and stream banks"
		},
		"0.35.9.2.4.0": {
	  	"iri": "Canal",
	  	"comment": "a man-made channel for water"
		},
		"0.35.9.2.4.1": {
	  	"iri": "River",
	  	"comment": "a large natural stream"
		},
		"0.35.9.3": {
	  	"iri": "Cave"
		},
		"0.35.9.4": {
	  	"iri": "Crater"
		},
		"0.35.9.4.0": {
	  	"iri": "LunarCrater"
		},
		"0.35.9.5": {
	  	"iri": "Desert",
	  	"comment": "A barren area of land where little precipitation occurs."
		},
		"0.35.9.6": {
	  	"iri": "Glacier"
		},
		"0.35.9.7": {
	  	"iri": "HotSpring"
		},
		"0.35.9.8": {
	  	"iri": "Mountain"
		},
		"0.35.9.9": {
	  	"iri": "MountainPass",
	  	"comment": "a path that allows the crossing of a mountain chain. It is usually a saddle point in between two areas of higher elevation"
		},
		"0.35.9.10": {
	  	"iri": "MountainRange",
	  	"comment": "a chain of mountains bordered by highlands or separated from other mountains by passes or valleys."
		},
		"0.35.9.11": {
	  	"iri": "Valley",
	  	"comment": "a depression with predominant extent in one direction"
		},
		"0.35.9.12": {
	  	"iri": "Volcano",
	  	"comment": "A volcano is currently subclass of naturalplace, but it might also be considered a mountain."
		},
		"0.35.10": {
	  	"iri": "Park",
	  	"comment": "A park is an area of open space provided for recreational use. http://en.wikipedia.org/wiki/Park"
		},
		"0.35.11": {
	  	"iri": "PopulatedPlace"
		},
		"0.35.11.0": {
	  	"iri": "Agglomeration"
		},
		"0.35.11.1": {
	  	"iri": "Community"
		},
		"0.35.11.2": {
	  	"iri": "Continent"
		},
		"0.35.11.3": {
	  	"iri": "Country"
		},
		"0.35.11.3.0": {
	  	"iri": "HistoricalCountry",
	  	"comment": "A place which used to be a country."
		},
		"0.35.11.4": {
	  	"iri": "GatedCommunity"
		},
		"0.35.11.5": {
	  	"iri": "Intercommunality"
		},
		"0.35.11.6": {
	  	"iri": "Island"
		},
		"0.35.11.6.0": {
	  	"iri": "Atoll"
		},
		"0.35.11.7": {
	  	"iri": "Locality"
		},
		"0.35.11.8": {
	  	"iri": "Region"
		},
		"0.35.11.8.0": {
	  	"iri": "AdministrativeRegion",
	  	"comment": "A PopulatedPlace under the jurisdiction of an administrative body. This body may administer either a whole region or one or more adjacent Settlements (town administration)"
		},
		"0.35.11.8.0.0": {
	  	"iri": "ClericalAdministrativeRegion",
	  	"comment": "An administrative body governing some territorial unity, in this case a clerical administrative body"
		},
		"0.35.11.8.0.0.0": {
	  	"iri": "Deanery",
	  	"comment": "The intermediate level of a clerical administrative body between parish and diocese"
		},
		"0.35.11.8.0.0.1": {
	  	"iri": "Diocese",
	  	"comment": "District or see under the supervision of a bishop."
		},
		"0.35.11.8.0.0.2": {
	  	"iri": "Parish",
	  	"comment": "The smallest unit of a clerical administrative body"
		},
		"0.35.11.8.0.1": {
	  	"iri": "GovernmentalAdministrativeRegion",
	  	"comment": "An administrative body governing some territorial unity, in this case a governmental administrative body"
		},
		"0.35.11.8.0.1.0": {
	  	"iri": "Arrondissement"
		},
		"0.35.11.8.0.1.1": {
	  	"iri": "Canton"
		},
		"0.35.11.8.0.1.2": {
	  	"iri": "Department"
		},
		"0.35.11.8.0.1.2.0": {
	  	"iri": "OverseasDepartment"
		},
		"0.35.11.8.0.1.3": {
	  	"iri": "District"
		},
		"0.35.11.8.0.1.3.0": {
	  	"iri": "HistoricalDistrict",
	  	"comment": "a place which used to be a district."
		},
		"0.35.11.8.0.1.4": {
	  	"iri": "DistrictWaterBoard",
	  	"comment": "Conservancy, governmental agency dedicated to surface water management"
		},
		"0.35.11.8.0.1.5": {
	  	"iri": "MicroRegion",
	  	"comment": "A microregion is a - mainy statistical - region in Brazil, at an administrative level between a meso-region and a community"
		},
		"0.35.11.8.0.1.6": {
	  	"iri": "Municipality",
	  	"comment": "An administrative body governing a territorial unity on the lower level, administering one or a few more settlements"
		},
		"0.35.11.8.0.1.6.0": {
	  	"iri": "FormerMunicipality",
	  	"comment": "A municipality that has ceased to exist, and most of the time got incorporated (wholesale or partly) into another municipality"
		},
		"0.35.11.8.0.1.7": {
	  	"iri": "Prefecture"
		},
		"0.35.11.8.0.1.8": {
	  	"iri": "Province",
	  	"comment": "An administrative body governing a territorial unity on the intermediate level, between local and national level"
		},
		"0.35.11.8.0.1.8.0": {
	  	"iri": "HistoricalProvince",
	  	"comment": "A place which used to be a province."
		},
		"0.35.11.8.0.1.9": {
	  	"iri": "Regency"
		},
		"0.35.11.8.0.1.10": {
	  	"iri": "SubMunicipality",
	  	"comment": "An administrative body governing a territorial unity on the lowest level, administering part of a municipality"
		},
		"0.35.11.8.0.2": {
	  	"iri": "HistoricalAreaOfAuthority"
		},
		"0.35.11.8.0.2.0": {
	  	"iri": "Fiefdom"
		},
		"0.35.11.8.1": {
	  	"iri": "HistoricalRegion",
	  	"comment": "a place which used to be a region."
		},
		"0.35.11.8.2": {
	  	"iri": "NaturalRegion"
		},
		"0.35.11.9": {
	  	"iri": "Settlement"
		},
		"0.35.11.9.0": {
	  	"iri": "City",
	  	"comment": "a relatively large and permanent settlement, particularly a large urban settlement"
		},
		"0.35.11.9.0.0": {
	  	"iri": "Capital",
	  	"comment": "A municipality enjoying primary status in a state, country, province, or other region as its seat of government."
		},
		"0.35.11.9.0.1": {
	  	"iri": "CapitalOfRegion",
	  	"comment": "seat of a first order administration division."
		},
		"0.35.11.9.1": {
	  	"iri": "CityDistrict",
	  	"comment": "District, borough, area or neighbourhood in a city or town"
		},
		"0.35.11.9.2": {
	  	"iri": "HistoricalSettlement",
	  	"comment": "A place which used to be a city or town or village."
		},
		"0.35.11.9.3": {
	  	"iri": "Town",
	  	"comment": "a settlement ranging from a few hundred to several thousand (occasionally hundreds of thousands). The precise meaning varies between countries and is not always a matter of legal definition. Usually, a town is thought of as larger than a village but smaller than a city, though there are exceptions to this rule."
		},
		"0.35.11.9.4": {
	  	"iri": "Village",
	  	"comment": "a clustered human settlement or community, usually smaller a town"
		},
		"0.35.11.10": {
	  	"iri": "State"
		},
		"0.35.11.11": {
	  	"iri": "Street",
	  	"comment": "A Street is different from a Road in as far as the infrastructure aspect is much less important here. A Street is a social and architectural ensemble much more than the connection between two geographic points."
		},
		"0.35.11.12": {
	  	"iri": "Territory"
		},
		"0.35.11.12.0": {
	  	"iri": "OldTerritory"
		},
		"0.35.12": {
	  	"iri": "ProtectedArea",
	  	"comment": "This class should be used for protected nature. For enclosed neighbourhoods there is now class GatedCommunity"
		},
		"0.35.13": {
	  	"iri": "SiteOfSpecialScientificInterest",
	  	"comment": "A Site of Special Scientific Interest (SSSI) is a conservation designation denoting a protected area in the United Kingdom. SSSIs are the basic building block of site-based nature conservation legislation and most other legal nature/geological conservation designations in Great Britain are based upon them, including National Nature Reserves, Ramsar Sites, Special Protection Areas, and Special Areas of Conservation."
		},
		"0.35.14": {
	  	"iri": "WineRegion"
		},
		"0.35.15": {
	  	"iri": "WorldHeritageSite",
	  	"comment": "A UNESCO World Heritage Site is a site (such as a forest, mountain, lake, desert, monument, building, complex, or city) that is on the list that is maintained by the international World Heritage Programme administered by the UNESCO World Heritage Committee, composed of 21 state parties which are elected by their General Assembly for a four-year term. A World Heritage Site is a place of either cultural or physical significance."
		},
		"0.36": {
	  	"iri": "Polyhedron"
		},
		"0.37": {
	  	"iri": "Population"
		},
		"0.38": {
	  	"iri": "PublicService"
		},
		"0.39": {
	  	"iri": "RouteStop"
		},
		"0.40": {
	  	"iri": "Species"
		},
		"0.40.0": {
	  	"iri": "Archaea"
		},
		"0.40.1": {
	  	"iri": "Bacteria"
		},
		"0.40.2": {
	  	"iri": "Eukaryote"
		},
		"0.40.2.0": {
	  	"iri": "Animal"
		},
		"0.40.2.0.0": {
	  	"iri": "Amphibian"
		},
		"0.40.2.0.1": {
	  	"iri": "Arachnid"
		},
		"0.40.2.0.2": {
	  	"iri": "Bird"
		},
		"0.40.2.0.3": {
	  	"iri": "Crustacean"
		},
		"0.40.2.0.4": {
	  	"iri": "Fish"
		},
		"0.40.2.0.5": {
	  	"iri": "Insect"
		},
		"0.40.2.0.6": {
	  	"iri": "Mammal"
		},
		"0.40.2.0.6.0": {
	  	"iri": "Cat"
		},
		"0.40.2.0.6.1": {
	  	"iri": "Dog"
		},
		"0.40.2.0.6.2": {
	  	"iri": "Horse"
		},
		"0.40.2.0.6.2.0": {
	  	"iri": "RaceHorse"
		},
		"0.40.2.0.7": {
	  	"iri": "Mollusca"
		},
		"0.40.2.0.8": {
	  	"iri": "Reptile"
		},
		"0.40.2.1": {
	  	"iri": "Fungus"
		},
		"0.40.2.2": {
	  	"iri": "Plant"
		},
		"0.40.2.2.0": {
	  	"iri": "ClubMoss"
		},
		"0.40.2.2.1": {
	  	"iri": "Conifer"
		},
		"0.40.2.2.2": {
	  	"iri": "CultivatedVariety",
	  	"comment": "A cultivar is a plant or grouping of plants selected for desirable characteristics that can be maintained by propagation. A plant whose origin or selection is primarily due to intentional human activity."
		},
		"0.40.2.2.3": {
	  	"iri": "Cycad"
		},
		"0.40.2.2.4": {
	  	"iri": "Fern"
		},
		"0.40.2.2.5": {
	  	"iri": "FloweringPlant"
		},
		"0.40.2.2.5.0": {
	  	"iri": "Grape"
		},
		"0.40.2.2.6": {
	  	"iri": "Ginkgo"
		},
		"0.40.2.2.7": {
	  	"iri": "Gnetophytes"
		},
		"0.40.2.2.8": {
	  	"iri": "GreenAlga"
		},
		"0.40.2.2.9": {
	  	"iri": "Moss"
		},
		"0.41": {
	  	"iri": "SportCompetitionResult"
		},
		"0.41.0": {
	  	"iri": "OlympicResult"
		},
		"0.41.1": {
	  	"iri": "SnookerWorldRanking",
	  	"comment": "The official world ranking in snooker for a certain year/season"
		},
		"0.42": {
	  	"iri": "SportsSeason"
		},
		"0.42.0": {
	  	"iri": "MotorsportSeason"
		},
		"0.42.1": {
	  	"iri": "SportsTeamSeason",
	  	"comment": "A season for a particular sports team (as opposed to the season for the entire league that the team is in)"
		},
		"0.42.1.0": {
	  	"iri": "BaseballSeason"
		},
		"0.42.1.1": {
	  	"iri": "FootballLeagueSeason"
		},
		"0.42.1.1.0": {
	  	"iri": "NationalFootballLeagueSeason"
		},
		"0.42.1.2": {
	  	"iri": "NCAATeamSeason"
		},
		"0.42.1.3": {
	  	"iri": "SoccerClubSeason"
		},
		"0.42.1.4": {
	  	"iri": "SoccerLeagueSeason"
		},
		"0.43": {
	  	"iri": "Statistic"
		},
		"0.44": {
	  	"iri": "TimePeriod"
		},
		"0.44.0": {
	  	"iri": "CareerStation",
	  	"comment": "this class marks a career step in the life of a person, e.g. a soccer player, holding information on the time span, matches and goals he or she achieved at a certain club"
		},
		"0.44.1": {
	  	"iri": "GeologicalPeriod"
		},
		"0.44.2": {
	  	"iri": "HistoricalPeriod",
	  	"comment": "A historical Period should be linked to a Place by way of the property dct:spatial (already defined)"
		},
		"0.44.3": {
	  	"iri": "PeriodOfArtisticStyle"
		},
		"0.44.4": {
	  	"iri": "PrehistoricalPeriod"
		},
		"0.44.5": {
	  	"iri": "ProtohistoricalPeriod"
		},
		"0.44.6": {
	  	"iri": "Year"
		},
		"0.44.7": {
	  	"iri": "YearInSpaceflight"
		},
		"0.45": {
	  	"iri": "TopicalConcept"
		},
		"0.45.0": {
	  	"iri": "AcademicSubject"
		},
		"0.45.1": {
	  	"iri": "CardinalDirection"
		},
		"0.45.2": {
	  	"iri": "Fashion",
	  	"comment": "A type or code of dressing, according to the standards of the time or individual design."
		},
		"0.45.3": {
	  	"iri": "Genre"
		},
		"0.45.3.0": {
	  	"iri": "ArtisticGenre"
		},
		"0.45.3.1": {
	  	"iri": "LiteraryGenre"
		},
		"0.45.3.2": {
	  	"iri": "MovieGenre"
		},
		"0.45.3.3": {
	  	"iri": "MusicGenre"
		},
		"0.45.4": {
	  	"iri": "Ideology",
	  	"comment": "for example: Progressivism_in_the_United_States, Classical_liberalism"
		},
		"0.45.5": {
	  	"iri": "MathematicalConcept"
		},
		"0.45.6": {
	  	"iri": "PhilosophicalConcept"
		},
		"0.45.7": {
	  	"iri": "PoliticalConcept"
		},
		"0.45.8": {
	  	"iri": "ScientificConcept"
		},
		"0.45.9": {
	  	"iri": "Standard"
		},
		"0.45.10": {
	  	"iri": "SystemOfLaw",
	  	"comment": "a system of legislation, either national or international"
		},
		"0.45.11": {
	  	"iri": "Tax"
		},
		"0.45.12": {
	  	"iri": "Taxon",
	  	"comment": "a category within a classification system for Species"
		},
		"0.45.13": {
	  	"iri": "TheologicalConcept"
		},
		"0.45.13.0": {
	  	"iri": "ChristianDoctrine"
		},
		"0.45.14": {
	  	"iri": "Type",
	  	"comment": "a category within a classification system"
		},
		"0.45.14.0": {
	  	"iri": "DocumentType",
	  	"comment": "type of document (official, informal etc.)"
		},
		"0.45.14.1": {
	  	"iri": "GovernmentType",
	  	"comment": "a form of government"
		},
		"0.46": {
	  	"iri": "UnitOfWork",
	  	"comment": "This class is meant to convey the notion of an amount work to be done. It is different from Activity in that it has a definite end and is being measured.\""
		},
		"0.46.0": {
	  	"iri": "Case",
	  	"comment": "A case is the total of work done to prepare for an administrative or business decision. As a rule, a case is reflected in a set of documents."
		},
		"0.46.0.0": {
	  	"iri": "LegalCase"
		},
		"0.46.0.0.0": {
	  	"iri": "SupremeCourtOfTheUnitedStatesCase"
		},
		"0.46.1": {
	  	"iri": "Project",
	  	"comment": "A project is a temporary endeavor undertaken to achieve defined objectives."
		},
		"0.46.1.0": {
	  	"iri": "ResearchProject",
	  	"comment": "A research project is a scientific investigation, usually using scientific methods, to achieve defined objectives."
		},
		"0.47": {
	  	"iri": "Unknown"
		},
		"0.48": {
	  	"iri": "Work"
		},
		"0.48.0": {
	  	"iri": "Artwork",
	  	"comment": "A work of art, artwork, art piece, or art object is an aesthetic item or artistic creation."
		},
		"0.48.0.0": {
	  	"iri": "Painting",
	  	"comment": "Describes a painting to assign picture entries in wikipedia to artists."
		},
		"0.48.0.1": {
	  	"iri": "Sculpture",
	  	"comment": "Sculpture is three-dimensional artwork created by shaping or combining hard materials, typically stone such as marble, metal, glass, or wood, or plastic materials such as clay, textiles, polymers and softer metals."
		},
		"0.48.1": {
	  	"iri": "Cartoon"
		},
		"0.48.1.0": {
	  	"iri": "Anime",
	  	"comment": "A style of animation originating in Japan"
		},
		"0.48.1.1": {
	  	"iri": "HollywoodCartoon"
		},
		"0.48.2": {
	  	"iri": "CollectionOfValuables",
	  	"comment": "Collection of valuables is a collection considered to be a work in itself)"
		},
		"0.48.2.0": {
	  	"iri": "Archive",
	  	"comment": "Collection of documents pertaining to a person or organisation."
		},
		"0.48.3": {
	  	"iri": "Database"
		},
		"0.48.3.0": {
	  	"iri": "BiologicalDatabase"
		},
		"0.48.4": {
	  	"iri": "Document",
	  	"comment": "Any document"
		},
		"0.48.4.0": {
	  	"iri": "File",
	  	"comment": "A document with a filename"
		},
		"0.48.4.1": {
	  	"iri": "Image",
	  	"comment": "A document that contains a visual image"
		},
		"0.48.4.1.0": {
	  	"iri": "MovingImage",
	  	"comment": "A visual document that is intended to be animated; equivalent to http://purl.org/dc/dcmitype/MovingImage"
		},
		"0.48.4.1.1": {
	  	"iri": "StillImage",
	  	"comment": "A visual document that is not intended to be animated; equivalent to http://purl.org/dc/dcmitype/StillImage"
		},
		"0.48.4.2": {
	  	"iri": "Sound",
	  	"comment": "An audio document intended to be listened to; equivalent to http://purl.org/dc/dcmitype/Sound"
		},
		"0.48.5": {
	  	"iri": "Film"
		},
		"0.48.6": {
	  	"iri": "LineOfFashion",
	  	"comment": "A coherent type of clothing or dressing following a particular fashion"
		},
		"0.48.7": {
	  	"iri": "MusicalWork"
		},
		"0.48.7.0": {
	  	"iri": "Album"
		},
		"0.48.7.1": {
	  	"iri": "ArtistDiscography"
		},
		"0.48.7.2": {
	  	"iri": "ClassicalMusicComposition"
		},
		"0.48.7.3": {
	  	"iri": "Musical"
		},
		"0.48.7.4": {
	  	"iri": "NationalAnthem",
	  	"comment": "Patriotic musical composition which is the offcial national song."
		},
		"0.48.7.5": {
	  	"iri": "Opera"
		},
		"0.48.7.6": {
	  	"iri": "Single",
	  	"comment": "In music, a single or record single is a type of release, typically a recording of fewer tracks than an LP or a CD."
		},
		"0.48.7.7": {
	  	"iri": "Song"
		},
		"0.48.7.7.0": {
	  	"iri": "EurovisionSongContestEntry"
		},
		"0.48.8": {
	  	"iri": "RadioProgram"
		},
		"0.48.9": {
	  	"iri": "Software"
		},
		"0.48.9.0": {
	  	"iri": "VideoGame",
	  	"comment": "A video game is an electronic game that involves interaction with a user interface to generate visual feedback on a video device."
		},
		"0.48.10": {
	  	"iri": "TelevisionEpisode",
	  	"comment": "A television episode is a part of serial television program."
		},
		"0.48.11": {
	  	"iri": "TelevisionSeason"
		},
		"0.48.12": {
	  	"iri": "TelevisionShow"
		},
		"0.48.13": {
	  	"iri": "Website"
		},
		"0.48.14": {
	  	"iri": "WrittenWork",
	  	"comment": "Written work is any text written to read it (e.g.: books, newspaper, articles)"
		},
		"0.48.14.0": {
	  	"iri": "Annotation"
		},
		"0.48.14.0.0": {
	  	"iri": "Reference",
	  	"comment": "Reference to the book or movie the subject is referred to"
		},
		"0.48.14.1": {
	  	"iri": "Article"
		},
		"0.48.14.2": {
	  	"iri": "Book"
		},
		"0.48.14.2.0": {
	  	"iri": "Novel",
	  	"comment": "A book of long narrative in literary prose"
		},
		"0.48.14.2.0.0": {
	  	"iri": "LightNovel",
	  	"comment": "A style of Japanese novel"
		},
		"0.48.14.3": {
	  	"iri": "Comic"
		},
		"0.48.14.3.0": {
	  	"iri": "ComicStrip"
		},
		"0.48.14.3.1": {
	  	"iri": "Manga",
	  	"comment": "Manga are comics created in Japan"
		},
		"0.48.14.3.2": {
	  	"iri": "Manhua",
	  	"comment": "Comics originally produced in China"
		},
		"0.48.14.3.3": {
	  	"iri": "Manhwa",
	  	"comment": "Korean term for comics and print cartoons"
		},
		"0.48.14.4": {
	  	"iri": "Drama"
		},
		"0.48.14.5": {
	  	"iri": "Law"
		},
		"0.48.14.6": {
	  	"iri": "Letter",
	  	"comment": "A letter from the alphabet."
		},
		"0.48.14.7": {
	  	"iri": "MultiVolumePublication"
		},
		"0.48.14.8": {
	  	"iri": "PeriodicalLiterature",
	  	"comment": "Periodical literature (also called a periodical publication or simply a periodical) is a published work that appears in a new edition on a regular schedule. The most familiar examples are the newspaper, often published daily, or weekly; or the magazine, typically published weekly, monthly or as a quarterly. Other examples would be a newsletter, a literary journal or learned journal, or a yearbook."
		},
		"0.48.14.8.0": {
	  	"iri": "AcademicJournal",
	  	"comment": "An academic journal is a mostly peer-reviewed periodical in which scholarship relating to a particular academic discipline is published. Academic journals serve as forums for the introduction and presentation for scrutiny of new research, and the critique of existing research. Content typically takes the form of articles presenting original research, review articles, and book reviews."
		},
		"0.48.14.8.1": {
	  	"iri": "Magazine",
	  	"comment": "Magazines, periodicals, glossies or serials are publications, generally published on a regular schedule, containing a variety of articles. They are generally financed by advertising, by a purchase price, by pre-paid magazine subscriptions, or all three."
		},
		"0.48.14.8.2": {
	  	"iri": "Newspaper",
	  	"comment": "A newspaper is a regularly scheduled publication containing news of current events, informative articles, diverse features and advertising. It usually is printed on relatively inexpensive, low-grade paper such as newsprint."
		},
		"0.48.14.8.3": {
	  	"iri": "UndergroundJournal"
		},
		"0.48.14.9": {
	  	"iri": "Play",
	  	"comment": "A play is a form of literature written by a playwright, usually consisting of scripted dialogue between characters, intended for theatrical performance rather than just reading."
		},
		"0.48.14.10": {
	  	"iri": "Poem"
		},
		"0.48.14.11": {
	  	"iri": "Quote"
		},
		"0.48.14.12": {
	  	"iri": "Resume",
	  	"comment": "A Resume describes a persons work experience and skill set."
		},
		"0.48.14.13": {
	  	"iri": "StatedResolution",
	  	"comment": "A Resolution describes a formal statement adopted by a meeting or convention."
		},
		"0.48.14.14": {
	  	"iri": "Treaty"
		},
		"0.48.15": {
	  	"iri": "foaf:Document"
		},
		"0.49": {
	  	"iri": "cidoccrm:E4_Period"
		},
		"0.50": {
	  	"iri": "d0:Activity"
		},
		"0.51": {
	  	"iri": "foaf:Image"
		},
		"0.52": {
	  	"iri": "foaf:Person"
		},
		"0.53": {
	  	"iri": "geo:SpatialThing"
		},
		"0.54": {
	  	"iri": "gml:_Feature"
		},
		"0.55": {
	  	"iri": "rdf:Property"
		},
		"0.56": {
	  	"iri": "skos:Concept"
		},
		"0.57": {
	  	"iri": "skos:OrderedCollection"
		}
	}
	this.dboProperty = {
		"dbo:brand": {
		  "range": "dbo:TelevisionShow",
		  "domain": "dbo:WrestlingEvent",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:pastMember": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:freeFlightTime": {
		  "range": "xds:double",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:apskritis": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:sessionNumber": {
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:cost": {
		  "range": "xds:double",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:soccerLeaguePromoted": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:SoccerLeagueSeason",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:hairColor": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:tie": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Boxer"
		},
		"dbo:otherFamilyBranch": {
		  "range": "dbo:Family",
		  "domain": "dbo:NobleFamily"
		},
		"dbo:officerInCharge": {
		  "range": "dbo:Person",
		  "domain": "dbo:University",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:achievement": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:latestPreviewDate": {
		  "range": "xds:date",
		  "domain": "dbo:Software"
		},
		"dbo:votesAgainst": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:StatedResolution"
		},
		"dbo:highestRegion": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:alemmanicName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:note": {
		  "range": "xds:string",
		  "domain": "dbo:AutomobileEngine"
		},
		"dbo:scotishName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:Planet/meanRadius": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:manufacturer": {
		  "range": "dbo:Organisation",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:endYearOfSales": {
		  "range": "xds:gYear",
		  "domain": "dbo:Sales"
		},
		"dbo:Galaxy/volume": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:imageFlag": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:impactFactor": {
		  "comment": "The impact factor, often abbreviated IF, is a measure reflecting the average number of citations to articles published in science and social science journals.",
		  "range": "xds:double",
		  "domain": "dbo:AcademicJournal"
		},
		"dbo:millSpan": {
		  "range": "xds:double",
		  "domain": "dbo:Mill"
		},
		"dbo:topSpeed": {
		  "range": "xds:double",
		  "domain": "owl:Thing",
		  "functional": true
		},
		"dbo:service": {
		  "range": "owl:Thing",
		  "domain": "dbo:Company",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:wilaya": {
		  "range": "dbo:Place",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:gaudiAward": {
		  "comment": "Awards of the Catalan Academy of Cinema",
		  "range": "dbo:Award",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:numberOfMembersAsOf": {
		  "range": "xds:date",
		  "domain": "dbo:PoliticalParty"
		},
		"dbo:giniCoefficientAsOf": {
		  "range": "xds:date",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:accessDate": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:ceo": {
		  "range": "dbo:Person",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:cemetery": {
		  "range": "dbo:Cemetery",
		  "domain": "dbo:ReligiousBuilding"
		},
		"dbo:giniCoefficient": {
		  "comment": "is a measure of the inequality of a distribution. It is commonly used as a measure of inequality of income or wealth.",
		  "range": "xds:float",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:currentProduction": {
		  "comment": "The current production running in the theatre.",
		  "range": "owl:Thing",
		  "domain": "dbo:Theatre",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:activity": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:registration": {
		  "range": "xds:string",
		  "domain": "dbo:Company"
		},
		"dbo:Galaxy/density": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:visitorsPercentageChange": {
		  "comment": "Percentage increase or decrease.",
		  "range": "xds:double",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:frazioni": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:aircraftBomber": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:widthQuote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:PopulatedPlace/populationMetroDensity": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:nflSeason": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:britishOpen": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:leadership": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:requirement": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:capitalPlace": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:notableFeatures": {
		  "range": "xds:string",
		  "domain": "dbo:Galaxy"
		},
		"dbo:sharingOut": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:date": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:lowestPosition": {
		  "range": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:Spacecraft/cargoFuel": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:wheelbase": {
		  "range": "xds:double",
		  "domain": "dbo:Automobile",
		  "functional": true
		},
		"dbo:publisher": {
		  "range": "dbo:Company",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:playerStatus": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:goalsInNationalTeam": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SoccerPlayer"
		},
		"dbo:numberOfLaunches": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:MeanOfTransportation"
		},
		"dbo:speedLimit": {
		  "range": "xds:double",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:features": {
		  "range": "dbo:Work",
		  "domain": "dbo:ArchitecturalStructure",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:informationName": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:surfaceArea": {
		  "range": "xds:double",
		  "domain": "dbo:Planet"
		},
		"dbo:geolocDual": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:defeat": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Boxer"
		},
		"dbo:filmPolskiId": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:identificationSymbol": {
		  "range": "xds:string",
		  "domain": "dbo:MilitaryUnit"
		},
		"dbo:imageSize": {
		  "comment": "the image size expressed in pixels",
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:populationDate": {
		  "range": "xds:date",
		  "domain": "dbo:Place"
		},
		"dbo:circumcised": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:associationOfLocalGovernment": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:limit": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:fuelTypeName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:seniunija": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:infantMortality": {
		  "range": "xds:float",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:maximumArea": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:topic": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:dockedTime": {
		  "range": "xds:double",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:population": {
		  "range": "dbo:Population",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:foresterDistrict": {
		  "range": "owl:Thing",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:numberOfRestaurants": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Hotel"
		},
		"dbo:catholicPercentage": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:scotsName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:mgiid": {
		  "comment": "Mouse Genomic Informatics ID",
		  "range": "xds:string",
		  "domain": "dbo:Biomolecule"
		},
		"dbo:nationalRanking": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:School"
		},
		"dbo:connotation": {
		  "comment": "A meaning of a word or phrase that is suggested or implied, as opposed to a denotation, or literal meaning.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:leftChild": {
		  "range": "dbo:Island",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:nearTo"
		  ]
		},
		"dbo:sicilianName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:type": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:fuelCapacity": {
		  "range": "xds:double",
		  "domain": "dbo:Automobile",
		  "functional": true
		},
		"dbo:number": {
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:SpaceMission/missionDuration": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:previousName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:meshId": {
		  "range": "xds:string",
		  "domain": "dbo:Disease"
		},
		"dbo:anniversary": {
		  "range": "xds:date",
		  "domain": "dbo:MilitaryUnit"
		},
		"dbo:wife": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person"
		},
		"dbo:Spacecraft/apoapsis": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:heightAttack": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:wimbledonMixed": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:Stream/maximumDischarge": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:irishName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:blueSkiPisteNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:sourceConfluence": {
		  "range": "owl:Thing",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:minimumInclination": {
		  "range": "xds:float",
		  "domain": "dbo:LaunchPad"
		},
		"dbo:formerName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:wikiPageWikiLink": {
		  "comment": "Reserved for DBpedia.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:associatedWith"
		  ]
		},
		"dbo:subMunicipalityType": {
		  "range": "xds:string",
		  "domain": "dbo:SubMunicipality"
		},
		"dbo:dateLastUpdated": {
		  "range": "xds:date",
		  "domain": "dbo:Document"
		},
		"dbo:originalStartPoint": {
		  "range": "dbo:Place",
		  "domain": "dbo:Canal",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:agglomerationPopulationTotal": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:wikiPageDisambiguates": {
		  "comment": "Reserved for DBpedia.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:grossDomesticProductPerPeople": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:tag": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:valvetrain": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:developer": {
		  "range": "dbo:Agent",
		  "domain": "dbo:UnitOfWork",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:sourcePosition": {
		  "range": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"odesignp:isClassifiedBy": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:biome",
		    "dbo:bloodType",
		    "dbo:boilerPressure",
		    "dbo:buildingType",
		    "dbo:category",
		    "dbo:class",
		    "dbo:engineType",
		    "dbo:format",
		    "dbo:gender",
		    "dbo:genre",
		    "dbo:governmentType",
		    "dbo:humanDevelopmentIndexRankingCategory",
		    "dbo:industry",
		    "dbo:legalForm",
		    "dbo:literaryGenre",
		    "dbo:mediaType",
		    "dbo:millType",
		    "dbo:museumType",
		    "dbo:musicType",
		    "dbo:nisCode",
		    "dbo:nrhpType",
		    "dbo:orogeny",
		    "dbo:powerType",
		    "dbo:programmeFormat",
		    "dbo:rocketFunction",
		    "dbo:satScore",
		    "dbo:silCode",
		    "dbo:simcCode",
		    "dbo:spurType",
		    "dbo:terytCode",
		    "dbo:type",
		    "dbo:typeOfElectrification",
		    "dbo:voiceType",
		    "dbo:webcast"
		  ]
		},
		"dbo:discovery": {
		  "range": "xds:string",
		  "domain": "dbo:Island"
		},
		"dbo:assetUnderManagement": {
		  "range": "xds:double",
		  "domain": "dbo:Company"
		},
		"dbo:soccerTournamentOpeningSeason": {
		  "range": "dbo:SoccerTournament",
		  "domain": "dbo:SoccerTournament",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:specialist": {
		  "range": "xds:string",
		  "domain": "dbo:School"
		},
		"dbo:channel": {
		  "range": "dbo:Broadcaster",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:identifiedBy": {
		  "comment": "An identifier used to identify this thing.",
		  "range": "xds:string",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:documentNumber",
		    "dbo:hasNationalArchivesIdentifier"
		  ]
		},
		"dbo:victory": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:showJudge": {
		  "range": "dbo:Person",
		  "domain": "dbo:TelevisionShow",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:buildingEndYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:firstProMatch": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:speciality": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:jointCommunity": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:SpaceMission/stationEvaDuration": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:mouthCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:ncaaSeason": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:routeDirection": {
		  "comment": "The general direction of the route (eg. North-South).",
		  "range": "xds:string",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:electionMajority": {
		  "comment": "number of votes the office holder attained",
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:area": {
		  "comment": "The area of a owl:Thing in square metre.",
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:spacewalkBegin": {
		  "range": "xds:date",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:shoeSize": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:dbnlCodeDutch": {
		  "comment": "identifier in Dutch digital library (dbnl)",
		  "range": "xds:string",
		  "domain": "dbo:Writer"
		},
		"dbo:PopulatedPlace/populationUrbanDensity": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:abbeychurchBlessing": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:derivative": {
		  "range": "dbo:MusicGenre",
		  "domain": "dbo:MusicGenre",
		  "superproperty": [
		    "odesignp:specializes"
		  ]
		},
		"dbo:statValue": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:nameAsOf": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:congressionalDistrict": {
		  "range": "owl:Thing",
		  "domain": "dbo:AdministrativeRegion",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:lastElectionDate": {
		  "comment": "The last election date for the house.",
		  "range": "xds:date",
		  "domain": "dbo:Legislature"
		},
		"dbo:currentRecord": {
		  "range": "xds:string",
		  "domain": "dbo:CollegeCoach"
		},
		"dbo:senator": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "dbo:MemberOfParliament",
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:basedOn": {
		  "range": "dbo:Work",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:constellation": {
		  "range": "owl:Thing",
		  "domain": "dbo:Galaxy",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:disciple": {
		  "comment": "A person who learns from another, especially one who then teaches others..",
		  "range": "dbo:Artist",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:educationPlace": {
		  "range": "dbo:Place",
		  "domain": "dbo:Person"
		},
		"dbo:jutsu": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:fileSize": {
		  "comment": "size of a file or software",
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:foalDate": {
		  "range": "xds:date",
		  "domain": "dbo:Animal",
		  "functional": true
		},
		"dbo:waistSize": {
		  "range": "xds:double",
		  "domain": "dbo:Person"
		},
		"dbo:umbrellaTitle": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:groupCommemorated": {
		  "comment": "Designates the category of people commemorated by a monument",
		  "range": "xds:string",
		  "domain": "dbo:Monument"
		},
		"dbo:bronzeMedalSingle": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:averageAnnualGeneration": {
		  "range": "xds:double",
		  "domain": "dbo:PowerStation",
		  "functional": true
		},
		"dbo:shipLaunch": {
		  "range": "xds:date",
		  "domain": "dbo:Ship"
		},
		"dbo:breeder": {
		  "range": "dbo:Person",
		  "domain": "dbo:Animal",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:stateDelegate": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:europeanChampionship": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:AutomobileEngine/displacement": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:genomeDB": {
		  "comment": "the edition of the database used (i.e. hg19)",
		  "range": "xds:string",
		  "domain": "dbo:GeneLocation"
		},
		"dbo:managerClub": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:SoccerPlayer",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:SpaceMission/lunarSurfaceTime": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:costumeDesigner": {
		  "comment": "the person who is responsible for the film costume design",
		  "range": "dbo:Person",
		  "domain": "dbo:Film",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:phonePrefixName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:analogChannel": {
		  "range": "xds:string",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:yearElevationIntoNobility": {
		  "range": "xds:string",
		  "domain": "dbo:NobleFamily"
		},
		"dbo:mouthRegion": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:teamTitle": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:alternativeName": {
		  "comment": "Alternative naming of anything not being a Person (for which case foaf:nick should be used).",
		  "range": "xds:string",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:alias"
		  ]
		},
		"dbo:numberOfSeatsInParliament": {
		  "comment": "number of seats in House of Commons-like parliaments",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PoliticalParty"
		},
		"dbo:routeNumber": {
		  "comment": "The number of the route.",
		  "range": "xds:string",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:finalLostSingle": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:owningCompany": {
		  "range": "dbo:Company",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:declination": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Constellation"
		},
		"dbo:volume": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfDistrict": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Department"
		},
		"dbo:wins": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Athlete"
		},
		"dbo:amateurNoContest": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Boxer"
		},
		"dbo:longDistancePisteNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:centuryBreaks": {
		  "comment": "number of breaks with 100 points and more",
		  "range": "xds:integer",
		  "domain": "dbo:SnookerPlayer"
		},
		"dbo:badGuy": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:sourceConfluenceCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:acquirementDate": {
		  "range": "xds:date",
		  "domain": "dbo:Ship"
		},
		"dbo:SpaceMission/cmpEvaDuration": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:absoluteMagnitude": {
		  "range": "xds:double",
		  "domain": "dbo:CelestialBody"
		},
		"dbo:managerYears": {
		  "range": "xds:date",
		  "domain": "dbo:SoccerPlayer"
		},
		"dbo:filmRuntime": {
		  "range": "xds:double",
		  "domain": "dbo:Film"
		},
		"dbo:geneLocation": {
		  "range": "dbo:GeneLocation",
		  "domain": "dbo:Gene",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:Canal/originalMaximumBoatLength": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:casSupplemental": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:timeZone": {
		  "range": "owl:Thing",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:volcanicType": {
		  "range": "xds:string",
		  "domain": "dbo:Island"
		},
		"dbo:restingPlacePosition": {
		  "range": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:land": {
		  "range": "dbo:Place",
		  "domain": "dbo:Place"
		},
		"dbo:percentage": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:gameModus": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:genus": {
		  "comment": "A rank in the classification of organisms, below family and above species; a taxon at that rank",
		  "range": "owl:Thing",
		  "domain": "dbo:Species",
		  "superproperty": [
		    "odesignp:specializes"
		  ]
		},
		"dbo:commissionerDate": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:activeYearsStartYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:seasonManager": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:lastFlightEndDate": {
		  "range": "xds:date",
		  "domain": "dbo:SpaceShuttle"
		},
		"dbo:army": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:presidentRegionalCouncilMandate": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:arabicName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:rector": {
		  "range": "dbo:Person",
		  "domain": "dbo:EducationalInstitution",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:vehiclesPerDay": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:istat": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:lake": {
		  "range": "dbo:BodyOfWater",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:nearTo"
		  ]
		},
		"dbo:dissolved": {
		  "range": "xds:date",
		  "domain": "dbo:SoccerClub"
		},
		"dbo:hasVariant": {
		  "comment": "variant or variation, for example all variations of a color",
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isSpecializedBy"
		  ]
		},
		"dbo:editorTitle": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:friend": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person"
		},
		"dbo:Canal/maximumBoatLength": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfHouses": {
		  "comment": "Count of the houses in the Protected Area",
		  "range": "xds:string",
		  "domain": "dbo:ProtectedArea"
		},
		"dbo:numberOfSilverMedalsWon": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SportCompetitionResult"
		},
		"dbo:shoots": {
		  "range": "xds:string",
		  "domain": "dbo:IceHockeyPlayer"
		},
		"dbo:height": {
		  "range": "xds:double",
		  "domain": "owl:Thing",
		  "functional": true
		},
		"dbo:alpsSupergroup": {
		  "comment": "the Alps supergroup to which the mountain belongs, according to the SOIUSA classification",
		  "range": "dbo:MountainRange",
		  "domain": "dbo:Mountain",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:localization": {
		  "range": "xds:string",
		  "domain": "dbo:Island"
		},
		"dbo:class": {
		  "range": "owl:Thing",
		  "domain": "dbo:MeanOfTransportation",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:firstLaunch": {
		  "range": "xds:date",
		  "domain": "dbo:YearInSpaceflight"
		},
		"dbo:Planet/density": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:countryOrigin": {
		  "range": "dbo:Country",
		  "domain": "dbo:Rocket",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:person": {
		  "range": "dbo:Person",
		  "domain": "dbo:PersonFunction",
		  "superproperty": [
		    "odesignp:isRoleOf"
		  ]
		},
		"dbo:missions": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SpaceShuttle"
		},
		"dbo:originalTitle": {
		  "comment": "The original title of the work, most of the time in the original language as well",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:rankAgreement": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:modelEndDate": {
		  "range": "xds:date",
		  "domain": "dbo:MeanOfTransportation"
		},
		"dbo:language": {
		  "range": "dbo:Language",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:originalLanguage"
		  ],
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:numberOfSportsEvents": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:creativeDirector": {
		  "range": "dbo:Person",
		  "domain": "dbo:TelevisionShow",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:populationAsOf": {
		  "range": "xds:date",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:rolandGarrosSingle": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:Stream/discharge": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:distanceToEdinburgh": {
		  "range": "xds:double",
		  "domain": "dbo:Settlement"
		},
		"dbo:frenchName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:AutomobileEngine/length": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:personFunction": {
		  "range": "dbo:PersonFunction",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasRole"
		  ]
		},
		"dbo:filmFareAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:lethalOnRabbits": {
		  "range": "xds:string",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:buriedPlace": {
		  "comment": "The place where the person has been buried.",
		  "range": "dbo:Place",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:ranking": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:School"
		},
		"dbo:numberOfRockets": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Aircraft"
		},
		"dbo:capacity": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SoccerClub"
		},
		"dbo:sportGoverningBody": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:imposedDanseCompetition": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:shareDate": {
		  "range": "xds:gYearMonth",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:port2UndockingDate": {
		  "range": "xds:date",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:genre": {
		  "comment": "The genre of the thing (music group, film, etc.)",
		  "range": "dbo:Genre",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:literaryGenre"
		  ],
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:mouthPosition": {
		  "range": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:hometown": {
		  "range": "dbo:Settlement",
		  "domain": "dbo:Agent",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:effectiveRadiatedPower": {
		  "range": "xds:double",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:humanDevelopmentIndexRankingCategory": {
		  "range": "owl:Thing",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:pisciculturalPopulation": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:firstDriverTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:projectBudgetFunding": {
		  "comment": "The part of the project budget that is funded by the Organistaions given in the \"FundedBy\" property.",
		  "range": "xds:double",
		  "domain": "dbo:ResearchProject"
		},
		"dbo:administrativeHeadCity": {
		  "comment": "city where stand the administrative power",
		  "range": "dbo:City",
		  "domain": "dbo:PopulatedPlace",
		  "subproperty": [
		    "dbo:capital"
		  ]
		},
		"dbo:championInMixedDouble": {
		  "comment": "winner of a competition in the mixed double session (as in tennis)",
		  "range": "dbo:Athlete",
		  "domain": "dbo:SportsEvent",
		  "superproperty": [
		    "dbo:championInDouble",
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:politicalLeader": {
		  "range": "dbo:PersonFunction",
		  "domain": "dbo:Place"
		},
		"dbo:championInSingleFemale": {
		  "comment": "winner of a competition in the single female session, to distinguish from the double session (as in tennis)",
		  "range": "dbo:Athlete",
		  "domain": "dbo:SportsEvent",
		  "superproperty": [
		    "dbo:championInSingle",
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:endOccupation": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:winterTemperature": {
		  "range": "xds:double",
		  "domain": "dbo:Settlement"
		},
		"dbo:isCityState": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:callsignMeaning": {
		  "comment": "The out written call sign.",
		  "range": "xds:string",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:callSign": {
		  "comment": "A call sign is not the name of a broadcaster! In broadcasting and radio communications, a call sign (also known as a call name or call letters, or abbreviated as a call) is a unique designation for a transmitting station.",
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:totalTravellers": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:YearInSpaceflight"
		},
		"dbo:rotationPeriod": {
		  "range": "xds:double",
		  "domain": "dbo:Planet"
		},
		"dbo:maoriName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:sizeBlazon": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:hipSize": {
		  "range": "xds:double",
		  "domain": "dbo:Person"
		},
		"dbo:firstAscent": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfAlbums": {
		  "comment": "the total number of albums released by the musical artist",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:MusicalArtist"
		},
		"dbo:allcinemaId": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:retirementDate": {
		  "range": "xds:date",
		  "domain": "dbo:Person",
		  "functional": true
		},
		"dbo:usedInWar": {
		  "comment": "wars that were typical for the usage of a weapon",
		  "range": "dbo:MilitaryConflict",
		  "domain": "dbo:Weapon",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:floorArea": {
		  "range": "xds:double",
		  "domain": "dbo:Building"
		},
		"dbo:yearOfElectrification": {
		  "comment": "Year station was electrified, if not previously at date of opening.",
		  "range": "xds:gYear",
		  "domain": "dbo:Station"
		},
		"dbo:serviceStartDate": {
		  "range": "xds:date",
		  "domain": "dbo:MilitaryPerson"
		},
		"dbo:iftaAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Actor",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:veneratedIn": {
		  "range": "dbo:Organisation",
		  "domain": "dbo:Saint",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:numberOfIsland": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:openingDate": {
		  "range": "xds:date",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:time": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:sameName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:designCompany": {
		  "range": "dbo:Company",
		  "domain": "dbo:MeanOfTransportation",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:draftTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:ableToGrind": {
		  "range": "xds:string",
		  "domain": "dbo:Mill"
		},
		"dbo:maximumTemperature": {
		  "range": "xds:double",
		  "domain": "dbo:Planet"
		},
		"dbo:thirdDriverCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:amateurYear": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:scale": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:superTribus": {
		  "range": "dbo:Species",
		  "domain": "dbo:Species",
		  "superproperty": [
		    "dbo:Tribus"
		  ]
		},
		"dbo:membershipAsOf": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:lastSeason": {
		  "range": "xds:date",
		  "domain": "dbo:FormulaOneRacer"
		},
		"dbo:populationPctWomen": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:nationalAffiliation": {
		  "range": "owl:Thing",
		  "domain": "dbo:PoliticalParty",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:eptFinalTable": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PokerPlayer"
		},
		"dbo:notableIdea": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:discharge": {
		  "range": "xds:double",
		  "domain": "dbo:MeanOfTransportation"
		},
		"dbo:zipCode": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace",
		  "functional": true
		},
		"dbo:nationalFilmAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Actor",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:productionStartDate": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:dutchName": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:bridgeCarries": {
		  "comment": "Type of vehicles the bridge carries.",
		  "range": "xds:string",
		  "domain": "dbo:Bridge"
		},
		"dbo:projectParticipant": {
		  "comment": "A participating organisation of the project.",
		  "range": "dbo:Organisation",
		  "domain": "dbo:ResearchProject",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:citizenship": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:majorityLeader": {
		  "comment": "number of office holder",
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:genereviewsname": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:carNumber": {
		  "range": "xds:integer",
		  "domain": "dbo:FormulaOneRacer"
		},
		"dbo:aircraftInterceptor": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:currentStatus": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:booster": {
		  "range": "dbo:Rocket",
		  "domain": "dbo:SpaceMission",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:percentageFat": {
		  "comment": "how much fat (in relative terms) does this unity of food contain",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Cheese"
		},
		"dbo:commandStructure": {
		  "range": "dbo:MilitaryUnit",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:largestCity": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:geolocDepartment": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:ward": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:skiLift": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:quotation": {
		  "comment": "A quotation is the repetition of one expression as part of another one, particularly when the quoted expression is well-known or explicitly attributed by citation to its original source.",
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:Galaxy/maximumTemperature": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:redSkiPisteNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:militaryRank": {
		  "comment": "The highest rank achieved by a person.",
		  "range": "owl:Thing",
		  "domain": "dbo:MilitaryPerson",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:purchasingPowerParityRank": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:promotion": {
		  "range": "owl:Thing",
		  "domain": "dbo:WrestlingEvent",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:lchfDraftYear": {
		  "range": "xds:string",
		  "domain": "dbo:IceHockeyPlayer"
		},
		"dbo:GrandPrix/course": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:orderDate": {
		  "range": "xds:date",
		  "domain": "dbo:Ship"
		},
		"dbo:numberOfPads": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:LaunchPad"
		},
		"dbo:Planet/apoapsis": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:firstPopularVote": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:highestPoint": {
		  "range": "dbo:Place",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:totalTracks": {
		  "comment": "the total number of tracks contained in the album",
		  "range": "xds:integer",
		  "domain": "dbo:Album"
		},
		"dbo:frequentlyUpdated": {
		  "range": "xds:string",
		  "domain": "dbo:Software"
		},
		"dbo:Planet/periapsis": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:meetingBuilding": {
		  "range": "dbo:Building",
		  "domain": "dbo:Legislature",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:oversight": {
		  "range": "xds:string",
		  "domain": "dbo:School"
		},
		"dbo:Canal/originalMaximumBoatBeam": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:dateBudget": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:wsopItm": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PokerPlayer"
		},
		"dbo:currentPartner": {
		  "range": "dbo:Person",
		  "domain": "dbo:FigureSkater",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:depth": {
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:activeYearsEndDate": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfParticipatingFemaleAthletes": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Olympics"
		},
		"dbo:numberOfPostgraduateStudents": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:University"
		},
		"dbo:activeYearsStartDateMgr": {
		  "range": "xds:date",
		  "domain": "dbo:Person"
		},
		"dbo:largestSettlement": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:firstOwner": {
		  "range": "dbo:Agent",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:nutsCode": {
		  "comment": "Nomenclature of Territorial Units for Statistics (NUTS) is a geocode  standard for referencing the subdivisions of countries  for statistical purposes. The standard is developed and regulated by the European Union, and thus only covers the member states of the EU in detail.",
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:associatedRocket": {
		  "range": "dbo:Rocket",
		  "domain": "dbo:LaunchPad",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:aircraftPatrol": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:internationalPhonePrefix": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:visitorsPerDay": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:skiTow": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:eloRecord": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:ChessPlayer"
		},
		"dbo:uses": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:playRole"
		  ],
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:davisCup": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:currentTeamManager": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Person"
		},
		"dbo:presidentRegionalCouncil": {
		  "range": "dbo:Person",
		  "domain": "dbo:TermOfOffice",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:livingPlace": {
		  "range": "dbo:Place",
		  "domain": "dbo:Person"
		},
		"dbo:splitFromParty": {
		  "range": "dbo:PoliticalParty",
		  "domain": "dbo:PoliticalParty",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:managementCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:hsvCoordinateValue": {
		  "range": "xds:integer",
		  "domain": "dbo:Colour"
		},
		"dbo:series": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:penaltiesTeamB": {
		  "range": "xds:string",
		  "domain": "dbo:PenaltyShootOut"
		},
		"dbo:winterAppearances": {
		  "range": "dbo:OlympicResult",
		  "domain": "dbo:OlympicResult",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:deliveryDate": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:dateAct": {
		  "range": "xds:date",
		  "domain": "dbo:Canal"
		},
		"dbo:penaltiesTeamA": {
		  "range": "xds:string",
		  "domain": "dbo:PenaltyShootOut"
		},
		"dbo:metropolitanBorough": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:description": {
		  "comment": "Short description of a person",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:refcul": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:spokenIn": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Language",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:fight": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Boxer"
		},
		"dbo:mouthElevation": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:scottishName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:registryNumber": {
		  "comment": "Identification of the registry a document is in",
		  "range": "xds:string",
		  "domain": "dbo:Document"
		},
		"dbo:hraState": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:clothSize": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:satScore": {
		  "comment": "most recent average SAT scores",
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:gameEngine": {
		  "range": "owl:Thing",
		  "domain": "dbo:VideoGame",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:elementAbove": {
		  "comment": "element placed above to current element in table of D.I.Mendeleev",
		  "range": "dbo:ChemicalSubstance",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:industry": {
		  "range": "owl:Thing",
		  "domain": "dbo:Company",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:dec": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:dfE": {
		  "comment": "Department for Education (UK) number of a school in England or Wales",
		  "range": "owl:Thing",
		  "domain": "dbo:School"
		},
		"dbo:naacpImageAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Actor",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:lastAirDate": {
		  "comment": "The date on which the broadcaster made its last broadcast.",
		  "range": "xds:date",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:lunarOrbitTime": {
		  "range": "xds:double",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:otherWins": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SnookerPlayer",
		  "superproperty": [
		    "dbo:Wins"
		  ]
		},
		"dbo:horseRidingDiscipline": {
		  "range": "dbo:HorseRiding",
		  "domain": "dbo:Athlete"
		},
		"dbo:numberOfEpisodes": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:TelevisionShow"
		},
		"dbo:wingArea": {
		  "range": "xds:double",
		  "domain": "dbo:Aircraft"
		},
		"dbo:theology": {
		  "range": "xds:string",
		  "domain": "dbo:ChristianDoctrine"
		},
		"dbo:affiliation": {
		  "range": "dbo:Organisation",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:Galaxy/meanRadius": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:olympicGamesSilver": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:ladinName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:stylisticOrigin": {
		  "range": "dbo:MusicGenre",
		  "domain": "dbo:MusicGenre",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:dateUnveiled": {
		  "comment": "Designates the unveiling date",
		  "range": "xds:date",
		  "domain": "dbo:Monument"
		},
		"dbo:startReign": {
		  "range": "http://www.w3.org/2004/02/skos/core#Concept",
		  "domain": "dbo:Person"
		},
		"dbo:closingYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:aircraftHelicopterObservation": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:titleDouble": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:component": {
		  "range": "dbo:AnatomicalStructure",
		  "domain": "dbo:Brain",
		  "superproperty": [
		    "odesignp:hasComponent"
		  ]
		},
		"odesignp:hasSetting": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:careerStation",
		    "dbo:managementPosition",
		    "dbo:sales",
		    "dbo:season",
		    "dbo:selection",
		    "dbo:termPeriod"
		  ]
		},
		"dbo:Weapon/length": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:specialTrial": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:bronzeMedalMixed": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:facultySize": {
		  "comment": "number of faculty members",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:EducationalInstitution"
		},
		"dbo:highestPlace": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:firstLaunchRocket": {
		  "range": "dbo:Rocket",
		  "domain": "dbo:LaunchPad",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:firstDriver": {
		  "range": "dbo:Person",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:office": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:dcc": {
		  "comment": "The Dewey Decimal Classification is a proprietary system of library classification developed by Melvil Dewey in 1876.",
		  "range": "xds:string",
		  "domain": "dbo:Book"
		},
		"dbo:raceTrack": {
		  "range": "dbo:RaceTrack",
		  "domain": "dbo:SportsEvent",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:portrayer": {
		  "range": "owl:Thing",
		  "domain": "dbo:FictionalCharacter",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:politicalFunction": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:orderInOffice": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:trustee": {
		  "range": "dbo:Person",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:gaelicName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:municipalityRenamedTo": {
		  "range": "xds:string",
		  "domain": "dbo:Municipality"
		},
		"dbo:reffBourgmestre": {
		  "range": "dbo:Person",
		  "domain": "dbo:Settlement"
		},
		"dbo:power": {
		  "range": "xds:string",
		  "domain": "dbo:FictionalCharacter"
		},
		"dbo:tournamentOfChampions": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:rebuildingDate": {
		  "range": "xds:date",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:millsCodeNLVerdwenen": {
		  "range": "xds:string",
		  "domain": "dbo:Mill"
		},
		"dbo:causalties": {
		  "range": "xds:string",
		  "domain": "dbo:MilitaryConflict"
		},
		"dbo:countryWithFirstAstronaut": {
		  "range": "dbo:Country",
		  "domain": "dbo:YearInSpaceflight",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:sourceState": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:grindingCapability": {
		  "comment": "grinding capability for Mills",
		  "range": "xds:string",
		  "domain": "dbo:Mill"
		},
		"dbo:numberOfBronzeMedalsWon": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SportCompetitionResult"
		},
		"dbo:artificialSnowArea": {
		  "range": "xds:float",
		  "domain": "dbo:Place"
		},
		"dbo:vicePrimeMinister": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:dissolutionYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:relation": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:sales": {
		  "comment": "This property holds an intermediate node of the type Sales.",
		  "range": "dbo:Sales",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasSetting"
		  ]
		},
		"dbo:coverArtist": {
		  "comment": "Cover artist",
		  "range": "dbo:Person",
		  "domain": "dbo:Book",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:ofsCode": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "dbo:isoCode"
		  ]
		},
		"dbo:licenceLetter": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:grammyAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:latestReleaseVersion": {
		  "range": "xds:string",
		  "domain": "dbo:Software"
		},
		"dbo:highestBreak": {
		  "range": "xds:integer",
		  "domain": "dbo:SnookerPlayer"
		},
		"dbo:bowlRecord": {
		  "range": "xds:string",
		  "domain": "dbo:CollegeCoach"
		},
		"dbo:mouthState": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:activeYear": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:sport": {
		  "range": "dbo:Sport",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:startOccupation": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:leaderParty": {
		  "range": "owl:Thing",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:locusSupplementaryData": {
		  "range": "xds:string",
		  "domain": "dbo:Protein"
		},
		"dbo:giniCoefficientRanking": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:order": {
		  "range": "owl:Thing",
		  "domain": "dbo:Species",
		  "superproperty": [
		    "odesignp:isSpecializedBy"
		  ]
		},
		"dbo:draftYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:reservations": {
		  "comment": "Are reservations required for the establishment or event?",
		  "range": "xds:boolean",
		  "domain": "dbo:Restaurant"
		},
		"dbo:dam": {
		  "range": "dbo:Animal",
		  "domain": "dbo:Animal",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:mainspan": {
		  "range": "xds:double",
		  "domain": "dbo:Bridge"
		},
		"dbo:choreographer": {
		  "range": "dbo:Person",
		  "domain": "dbo:FigureSkater",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:day": {
		  "range": "xds:date",
		  "domain": "dbo:Settlement"
		},
		"dbo:virtualChannel": {
		  "range": "xds:string",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:matchPoint": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:lowestState": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:biome": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:feature": {
		  "range": "xds:string",
		  "domain": "dbo:FictionalCharacter"
		},
		"dbo:crewMember": {
		  "range": "dbo:Astronaut",
		  "domain": "dbo:SpaceMission",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:tamazightName": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:ulanId": {
		  "comment": "ULAN is an online database using a controlled vocabulary currently containing around 293,000 names and other information about artists. Names in ULAN may include given names, pseudonyms, variant spellings, names in multiple languages, and names that have changed over time (e.g., married names).",
		  "range": "xds:string",
		  "domain": "dbo:Artist"
		},
		"dbo:musicBy": {
		  "range": "dbo:Person",
		  "domain": "dbo:Musical",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:aircraftHelicopterUtility": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:programmeFormat": {
		  "comment": "The programming format describes the overall content broadcast on a radio or television station.",
		  "range": "owl:Thing",
		  "domain": "dbo:Broadcaster",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:teachingStaff": {
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:asiaChampionship": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:originalLanguage": {
		  "comment": "The original language of the work.",
		  "range": "dbo:Language",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "dbo:language",
		    "odesignp:isExpressedBy"
		  ]
		},
		"dbo:managerTitle": {
		  "range": "xds:string",
		  "domain": "dbo:SoccerClub"
		},
		"dbo:numberOfCantons": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:millsCodeBE": {
		  "comment": "mills code from the Belgian database on mills",
		  "range": "xds:string",
		  "domain": "dbo:Mill"
		},
		"dbo:tournamentRecord": {
		  "range": "xds:string",
		  "domain": "dbo:CollegeCoach"
		},
		"dbo:largestMetro": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:mastersWins": {
		  "range": "http://www.w3.org/2004/02/skos/core#Concept",
		  "domain": "dbo:Person"
		},
		"dbo:backhand": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:winsAtMajors": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:sequenceNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Installment"
		},
		"dbo:buildingStartYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:bnfId": {
		  "comment": "Authority data of people listed in the general catalogue of the National Library of France",
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:averageDepth": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:painter": {
		  "range": "dbo:Person",
		  "domain": "dbo:Artwork",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:releaseDate": {
		  "range": "xds:date",
		  "domain": "dbo:Work",
		  "subproperty": [
		    "dbo:premiereDate"
		  ]
		},
		"dbo:nisCode": {
		  "comment": "Indexing code used by the Belgium National Statistical Institute to identify populated places.",
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:governmentPlace": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:careerPoints": {
		  "range": "xds:integer",
		  "domain": "dbo:FormulaOneRacer"
		},
		"dbo:orientation": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:firstLaunchDate": {
		  "range": "xds:date",
		  "domain": "dbo:LaunchPad"
		},
		"dbo:signName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:principalEngineer": {
		  "range": "dbo:Person",
		  "domain": "dbo:Canal",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:dubber": {
		  "comment": "the person who dubs another person e.g. an actor or a fictional character in movies",
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:primaryFuelType": {
		  "range": "owl:Thing",
		  "domain": "dbo:PowerStation"
		},
		"dbo:atcSuffix": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:wikiPageEditLink": {
		  "comment": "Reserved for DBpedia.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:quebecerTitle": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:populationPlace": {
		  "comment": "a place were members of an ethnic group are living",
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:EthnicGroup",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:torchBearer": {
		  "range": "dbo:Person",
		  "domain": "dbo:Olympics",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:prominence": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfSpeakers": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Language"
		},
		"dbo:cargoFuel": {
		  "range": "xds:double",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:satellite": {
		  "range": "xds:string",
		  "domain": "dbo:Planet"
		},
		"dbo:patron": {
		  "range": "dbo:Person",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:lastLaunchRocket": {
		  "range": "dbo:Rocket",
		  "domain": "dbo:LaunchPad",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:spokesperson": {
		  "range": "dbo:Person",
		  "domain": "dbo:PoliticalParty",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:schoolCode": {
		  "range": "xds:string",
		  "domain": "dbo:School"
		},
		"dbo:onChromosome": {
		  "comment": "the number corresponding to the chromosome on which the gene is located",
		  "range": "xds:integer",
		  "domain": "dbo:GeneLocation"
		},
		"dbo:demolitionDate": {
		  "comment": "The date the building was demolished.",
		  "range": "xds:date",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:webcast": {
		  "comment": "The URL to the webcast of the Thing.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:averageClassSize": {
		  "range": "xds:float",
		  "domain": "dbo:School"
		},
		"dbo:foot": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:destructionDate": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:allegiance": {
		  "comment": "The country or other power the person served. Multiple countries may be indicated together with the corresponding dates. This field should not be used to indicate a particular service branch, which is better indicated by the branch field.",
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:executiveProducer": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:operatingSystem": {
		  "range": "owl:Thing",
		  "domain": "dbo:Software",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:numberOfOrbits": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:proSince": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:rank": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:programCost": {
		  "range": "xds:double",
		  "domain": "dbo:Aircraft"
		},
		"dbo:source": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:hasJunctionWith": {
		  "range": "dbo:Canal",
		  "domain": "dbo:Canal",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:historicalMap": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:altitude": {
		  "range": "dbo:Altitude",
		  "domain": "dbo:Place"
		},
		"dbo:wordBefore": {
		  "range": "xds:string",
		  "domain": "dbo:Country"
		},
		"dbo:otherLanguage": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:superFamily": {
		  "range": "dbo:Taxon",
		  "domain": "dbo:Species"
		},
		"dbo:chEBI": {
		  "comment": "A unique identifier for the drug in the Chemical Entities of Biological Interest (ChEBI) ontology",
		  "range": "xds:string",
		  "domain": "dbo:Drug"
		},
		"dbo:wikiPageRedirects": {
		  "comment": "Reserved for DBpedia.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:designer": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:outskirts": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:firstPublicationDate": {
		  "comment": "Date of the first publication.",
		  "range": "xds:date",
		  "domain": "dbo:WrittenWork"
		},
		"dbo:vein": {
		  "range": "dbo:Vein",
		  "domain": "dbo:AnatomicalStructure",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:probowlPick": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:documentNumber": {
		  "comment": "Identification a document within a particular registry",
		  "range": "xds:string",
		  "domain": "dbo:Document",
		  "superproperty": [
		    "dbo:identifiedBy"
		  ]
		},
		"dbo:Spacecraft/cargoGas": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:GeopoliticalOrganisation/areaMetro": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:beatifiedDate": {
		  "range": "xds:date",
		  "domain": "dbo:Saint"
		},
		"dbo:lieutenancy": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:head": {
		  "range": "dbo:Person",
		  "domain": "dbo:EducationalInstitution",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:hasNationalArchivesIdentifier": {
		  "comment": "The National Archives Identifier (http://www.archives.gov/research/search/help/search-tips.html#descriptionid)",
		  "range": "xds:string",
		  "domain": "dbo:Document",
		  "superproperty": [
		    "dbo:identifiedBy"
		  ]
		},
		"dbo:retired": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:student": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:departmentCode": {
		  "range": "xds:string",
		  "domain": "dbo:Municipality"
		},
		"dbo:honours": {
		  "range": "owl:Thing",
		  "domain": "dbo:Agent",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:maximumBoatBeam": {
		  "range": "xds:double",
		  "domain": "dbo:Canal"
		},
		"dbo:mountainRange": {
		  "range": "dbo:MountainRange",
		  "domain": "dbo:Mountain",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:coemperor": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person"
		},
		"dbo:assembly": {
		  "range": "owl:Thing",
		  "domain": "dbo:MeanOfTransportation"
		},
		"dbo:code": {
		  "range": "xds:string",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:codeMunicipalMonument",
		    "dbo:codeNationalMonument",
		    "dbo:codeProvincialMonument",
		    "dbo:codeStockExchange"
		  ]
		},
		"dbo:coastLength": {
		  "range": "xds:float",
		  "domain": "dbo:Place"
		},
		"dbo:contractAward": {
		  "range": "xds:date",
		  "domain": "dbo:SpaceShuttle"
		},
		"dbo:seniority": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:isoCodeRegion": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:deadInFightPlace": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:wimbledonDouble": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:numberOfReactors": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:NuclearPowerStation"
		},
		"dbo:fcRuns": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Cricketer"
		},
		"dbo:tradeMark": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:freeProgCompetition": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:computingMedia": {
		  "range": "owl:Thing",
		  "domain": "dbo:Software",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:agglomerationDemographics": {
		  "range": "dbo:Demographics",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:brainInfoNumber": {
		  "range": "xds:string",
		  "domain": "dbo:Brain"
		},
		"dbo:politicalSeats": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Settlement"
		},
		"dbo:iso6392Code": {
		  "range": "xds:string",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "dbo:LanguageCode"
		  ]
		},
		"dbo:numberOfLanes": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:canonizedPlace": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Saint",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:luxembourgishName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:discipline": {
		  "range": "owl:Thing",
		  "domain": "dbo:Agent",
		  "superproperty": [
		    "odesignp:isDescribedBy"
		  ]
		},
		"dbo:codeDistrict": {
		  "range": "xds:string",
		  "domain": "dbo:CityDistrict"
		},
		"dbo:surfaceFormOccurrenceOffset": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:reopeningDate": {
		  "comment": "Date of reopening the architectural structure.",
		  "range": "xds:date",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:relatedMeanOfTransportation": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MeanOfTransportation",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:variantOf": {
		  "comment": "variant or variation of something, for example the variant of a car",
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:soccerLeagueRelegated": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:SoccerLeagueSeason",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:competitionTitle": {
		  "range": "dbo:SportsEvent",
		  "domain": "dbo:Person"
		},
		"dbo:alpsSection": {
		  "comment": "the Alps section to which the mountain belongs, according to the SOIUSA classification",
		  "range": "dbo:MountainRange",
		  "domain": "dbo:Mountain",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:almaMater": {
		  "comment": "schools that they attended",
		  "range": "dbo:EducationalInstitution",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:participant": {
		  "range": "xds:string",
		  "domain": "dbo:Event"
		},
		"dbo:wikiPageOutDegree": {
		  "comment": "Reserved for DBpedia.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:startDate": {
		  "comment": "The start date of the event.",
		  "range": "xds:date",
		  "domain": "dbo:Event"
		},
		"dbo:waterPercentage": {
		  "range": "xds:float",
		  "domain": "dbo:Place"
		},
		"dbo:numberOfCanton": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Department"
		},
		"odesignp:isAbout": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:academicDiscipline",
		    "dbo:nonFictionSubject"
		  ]
		},
		"dbo:previousPopulationTotal": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:groundsForLiquidation": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:updated": {
		  "comment": "The last update date of a resource",
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:railwayRollingStock": {
		  "range": "owl:Thing",
		  "domain": "dbo:RouteOfTransportation",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:Weapon/height": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:mayorMandate": {
		  "range": "xds:string",
		  "domain": "dbo:Mayor"
		},
		"dbo:inchi": {
		  "range": "xds:string",
		  "domain": "dbo:ChemicalCompound"
		},
		"dbo:alpsSubgroup": {
		  "comment": "the Alps subgroup to which the mountain belongs, according to the SOIUSA classification",
		  "range": "dbo:MountainRange",
		  "domain": "dbo:Mountain",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:ensembl": {
		  "range": "xds:string",
		  "domain": "dbo:Biomolecule"
		},
		"dbo:biggestCity": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Place"
		},
		"dbo:missionDuration": {
		  "range": "xds:double",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:nationalTeamMatchPoint": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:coProducer": {
		  "range": "dbo:Person",
		  "domain": "dbo:TelevisionShow",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:memberOfParliament": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:writer": {
		  "range": "dbo:Person",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:wikiPageModified": {
		  "comment": "Reserved for DBpedia ''''''",
		  "range": "xds:dateTime",
		  "domain": "owl:Thing"
		},
		"dbo:territory": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:MilitaryConflict",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:territory1": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:AdministrativeRegion",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:lastPosition": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:FormulaOneRacer"
		},
		"dbo:khlDraft": {
		  "range": "xds:string",
		  "domain": "dbo:IceHockeyPlayer"
		},
		"dbo:buildingType": {
		  "comment": "Type is too general. We should be able to distinguish types of music from types of architecture",
		  "range": "owl:Thing",
		  "domain": "dbo:Building",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:extinctionDate": {
		  "range": "xds:date",
		  "domain": "dbo:Organisation"
		},
		"dbo:training": {
		  "range": "dbo:EducationalInstitution",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:afiAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:launchVehicle": {
		  "range": "owl:Thing",
		  "domain": "dbo:SpaceMission",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:discoverer": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:supply": {
		  "range": "dbo:Place",
		  "domain": "dbo:Place"
		},
		"dbo:lcc": {
		  "comment": "The Library of Congress Classification (LCC) is a system of library classification developed by the Library of Congress.",
		  "range": "xds:string",
		  "domain": "dbo:WrittenWork"
		},
		"dbo:availableSmartCard": {
		  "comment": "Smartcard for fare payment system for public transit systems that are or will be available at the station.",
		  "range": "owl:Thing",
		  "domain": "dbo:Station",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:bestRankDouble": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:apcPresident": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:discovered": {
		  "range": "xds:date",
		  "domain": "dbo:Planet"
		},
		"dbo:pubchem": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:magazine": {
		  "range": "dbo:Magazine",
		  "domain": "dbo:WrittenWork",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:worldTournamentGold": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:material": {
		  "range": "xds:string",
		  "domain": "dbo:Island"
		},
		"dbo:orthologousGene": {
		  "range": "dbo:Gene",
		  "domain": "dbo:Gene",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:appointer": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:volumes": {
		  "range": "dbo:WrittenWork",
		  "domain": "dbo:MultiVolumePublication",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:loadLimit": {
		  "comment": "Load limit of the bridge.",
		  "range": "xds:double",
		  "domain": "dbo:Bridge"
		},
		"dbo:ngcName": {
		  "comment": "Name for NGC objects",
		  "range": "xds:string",
		  "domain": "dbo:CelestialBody"
		},
		"dbo:Distance": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:distanceToCapital"
		  ]
		},
		"dbo:previousPopulation": {
		  "range": "dbo:Population",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:rightChild": {
		  "range": "dbo:Island",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:greenSkiPisteNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:otherActivity": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:soccerTournamentClosingSeason": {
		  "range": "dbo:SoccerTournament",
		  "domain": "dbo:SoccerTournament",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:urbanArea": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:supplies": {
		  "range": "dbo:AnatomicalStructure",
		  "domain": "dbo:Artery",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:numberOfTeams": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SportsLeague"
		},
		"dbo:cpu": {
		  "range": "owl:Thing",
		  "domain": "dbo:Software",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:ethnicGroupsInYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:leftTributary": {
		  "range": "dbo:River",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:heir": {
		  "range": "dbo:Person",
		  "domain": "dbo:Monarch",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:englishName": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:house": {
		  "range": "dbo:Legislature",
		  "domain": "dbo:Legislature",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:SpaceShuttle/distance": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:lowest": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:school": {
		  "comment": "school a person goes or went to",
		  "range": "dbo:EducationalInstitution",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:affair": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:nlaId": {
		  "comment": "NLA Trove\u2019s People and Organisation view allows the discovery of biographical and other contextual information about people and organisations. Search also available via VIAF.",
		  "range": "xds:string",
		  "domain": "dbo:Agent"
		},
		"dbo:classification": {
		  "range": "xds:string",
		  "domain": "dbo:Instrument"
		},
		"dbo:tenant": {
		  "range": "dbo:Organisation",
		  "domain": "dbo:Building",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:division": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:dischargeAverage": {
		  "range": "xds:double",
		  "domain": "dbo:MeanOfTransportation"
		},
		"dbo:crosses": {
		  "range": "dbo:River",
		  "domain": "dbo:Bridge",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:aircraftHelicopterCargo": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:deathCause": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:third": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:minimumDischarge": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:minimumElevation": {
		  "comment": "minimum elevation above the sea level",
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:illustrator": {
		  "comment": "Illustrator (where used throughout and a major feature)",
		  "range": "dbo:Person",
		  "domain": "dbo:Book",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:uRN": {
		  "comment": "DfE unique reference number of a school in England or Wales",
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:isExpressedBy"
		  ]
		},
		"dbo:neighbourRegion": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:annualTemperature": {
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:personName": {
		  "range": "xds:string",
		  "domain": "dbo:PersonFunction"
		},
		"dbo:maintainedBy": {
		  "range": "owl:Thing",
		  "domain": "dbo:ArchitecturalStructure",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:freeDanseScore": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:birthDate": {
		  "range": "xds:date",
		  "domain": "dbo:Person",
		  "functional": true
		},
		"dbo:otherSportsExperience": {
		  "range": "dbo:Athletics",
		  "domain": "dbo:Athlete"
		},
		"dbo:creationChristianBishop": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:projectReferenceID": {
		  "comment": "The reference identification of the project.",
		  "range": "xds:string",
		  "domain": "dbo:ResearchProject"
		},
		"dbo:lunarEvaTime": {
		  "range": "xds:double",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:agglomerationArea": {
		  "range": "dbo:Area",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:winsAtPGA": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:sibling": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:governor": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:SpaceMission/mass": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:operatingIncome": {
		  "range": "xds:double",
		  "domain": "dbo:Company",
		  "functional": true
		},
		"dbo:isPartOfWineRegion": {
		  "range": "dbo:WineRegion",
		  "domain": "dbo:WineRegion",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:shipDraft": {
		  "comment": "The draft (or draught) of a ship's hull is the vertical distance between the waterline and the bottom of the hull (keel), with the thickness of the hull included; in the case of not being included the draft outline would be obtained.",
		  "range": "xds:double",
		  "domain": "dbo:Ship"
		},
		"dbo:startPoint": {
		  "range": "dbo:Place",
		  "domain": "dbo:Canal",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:olympicGames": {
		  "range": "dbo:Tournament",
		  "domain": "dbo:Person"
		},
		"dbo:commune": {
		  "range": "dbo:Settlement",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:blazonCaption": {
		  "range": "xds:string",
		  "domain": "dbo:Blazon"
		},
		"dbo:blazon": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfCountry": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Continent"
		},
		"dbo:visitorStatisticsAsOf": {
		  "comment": "Year visitor information was gathered.",
		  "range": "xds:gYear",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:lastFamilyMember": {
		  "range": "dbo:Person",
		  "domain": "dbo:Family"
		},
		"dbo:subsequentWork": {
		  "range": "dbo:Work",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:skiPisteNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:intercommunality": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:automobilePlatform": {
		  "range": "dbo:Automobile",
		  "domain": "dbo:Automobile",
		  "superproperty": [
		    "odesignp:hasComponent"
		  ]
		},
		"dbo:thumbnailCaption": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:makeupArtist": {
		  "comment": "the person who is responsible for the actors makeup",
		  "range": "dbo:Person",
		  "domain": "dbo:Film",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:numberOfVehicles": {
		  "comment": "Number of vehicles used in the transit system.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PublicTransitSystem"
		},
		"odesignp:nearTo": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:adjacentSettlement",
		    "dbo:lake",
		    "dbo:leftChild",
		    "dbo:nearestCity",
		    "dbo:neighboringMunicipality",
		    "dbo:river",
		    "dbo:sea",
		    "dbo:sourceConfluenceMountain"
		  ]
		},
		"dbo:founder": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:Person/height": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:eptTitle": {
		  "range": "xds:string",
		  "domain": "dbo:PokerPlayer"
		},
		"dbo:playRole": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "dbo:uses",
		    "odesignp:hasRole"
		  ]
		},
		"dbo:drugbank": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:fullScore": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:molecularWeight": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:Spacecraft/port1DockedTime": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:rightTributary": {
		  "range": "dbo:River",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:sharingOutPopulationName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:hubAirport": {
		  "range": "dbo:Airport",
		  "domain": "dbo:Airline",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:worstDefeat": {
		  "range": "xds:string",
		  "domain": "dbo:SoccerClub"
		},
		"dbo:screenActorsGuildAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Actor",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:playingTime": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:management": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:firstFlightEndDate": {
		  "range": "xds:date",
		  "domain": "dbo:SpaceShuttle"
		},
		"dbo:arrondissement": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:isil": {
		  "range": "xds:string",
		  "domain": "dbo:Library"
		},
		"dbo:inseeCode": {
		  "comment": "numerical indexing code used by the French National Institute for Statistics and Economic Studies (INSEE) to identify various entities",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "dbo:codeSettlement"
		  ]
		},
		"dbo:academyAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:populationYear": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:grandsire": {
		  "range": "dbo:Animal",
		  "domain": "dbo:Animal",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:impactFactorAsOf": {
		  "comment": "Census year of the imapct factor.",
		  "range": "xds:gYear",
		  "domain": "dbo:AcademicJournal"
		},
		"dbo:blockAlloy": {
		  "range": "owl:Thing",
		  "domain": "dbo:AutomobileEngine",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:elo": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:ChessPlayer"
		},
		"dbo:detectionMethod": {
		  "range": "xds:string",
		  "domain": "dbo:Planet"
		},
		"dbo:formerBandMember": {
		  "comment": "A former member of the band.",
		  "range": "dbo:Person",
		  "domain": "dbo:Band",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:militaryUnitSize": {
		  "comment": "the size of the military unit",
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:alpsMajorSector": {
		  "comment": "the Alps major sector to which the mountain belongs, according to the SOIUSA classification",
		  "range": "dbo:MountainRange",
		  "domain": "dbo:Mountain",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:areaMetro": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:detractor": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person"
		},
		"dbo:highestMountain": {
		  "range": "dbo:Mountain",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:numberOfMinistries": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Country"
		},
		"dbo:beatifiedPlace": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Saint",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:curator": {
		  "range": "dbo:Person",
		  "domain": "dbo:Museum",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:simcCode": {
		  "comment": "indexing code used by the Polish National Official Register of the Territorial Division of the Country (TERYT) to identify various entities",
		  "range": "owl:Thing",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:tvShow": {
		  "range": "dbo:TelevisionShow",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:Planet/volume": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:religion": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:conceptualizes"
		  ]
		},
		"dbo:filename": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:winsAtJapan": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:carcinogen": {
		  "range": "xds:string",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:currency": {
		  "range": "dbo:Currency",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:landPercentage": {
		  "range": "xds:float",
		  "domain": "dbo:Place"
		},
		"dbo:polePosition": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:jurisdiction": {
		  "comment": "Jurisdiction is the practical authority granted to a formally constituted legal body or to a political leader to deal with and make pronouncements on legal matters and, by implication, to administer justice within a defined area of responsibility.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:firstOlympicEvent": {
		  "range": "dbo:OlympicEvent",
		  "domain": "dbo:Sport",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:AutomobileEngine/powerOutput": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:pole": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:dorlandsSuffix": {
		  "range": "xds:string",
		  "domain": "dbo:AnatomicalStructure"
		},
		"dbo:hasInput": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:nrhpReferenceNumber": {
		  "range": "xds:string",
		  "domain": "dbo:HistoricPlace"
		},
		"dbo:genereviewsid": {
		  "range": "xds:string",
		  "domain": "dbo:Disease"
		},
		"dbo:militaryCommand": {
		  "comment": "For persons who are notable as commanding officers, the units they commanded. Dates should be given if multiple notable commands were held.",
		  "range": "xds:string",
		  "domain": "dbo:MilitaryPerson"
		},
		"dbo:viceLeaderParty": {
		  "range": "dbo:PoliticalParty",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:bicycleInformation": {
		  "comment": "Information on station's bicycle facilities.",
		  "range": "xds:string",
		  "domain": "dbo:Station"
		},
		"dbo:alpsMainPart": {
		  "comment": "the Alps main part to which the mountain belongs, according to the SOIUSA classification",
		  "range": "dbo:MountainRange",
		  "domain": "dbo:Mountain",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:tattoo": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:landtagMandate": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:emedicineSubject": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:majorityFloorLeader": {
		  "comment": "number of office holder",
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:pastor": {
		  "range": "dbo:Person",
		  "domain": "dbo:HistoricBuilding",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:typeOfElectrification": {
		  "comment": "Electrification system (e.g. Third rail, Overhead catenary).",
		  "range": "owl:Thing",
		  "domain": "dbo:RouteOfTransportation",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:publicationDate": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:captureDate": {
		  "range": "xds:date",
		  "domain": "dbo:Ship"
		},
		"dbo:numberOfSeasons": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:TelevisionShow"
		},
		"dbo:conflict": {
		  "range": "dbo:MilitaryConflict",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfParticipatingNations": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Olympics"
		},
		"dbo:vehicleCode": {
		  "comment": "Region related vehicle code on the vehicle plates.",
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:ruralMunicipality": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Road",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:temple": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:thirdTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:managementPlace": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:orbitalInclination": {
		  "range": "xds:float",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:touristicSite": {
		  "range": "dbo:Place",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:college": {
		  "range": "dbo:EducationalInstitution",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:usopenWins": {
		  "range": "http://www.w3.org/2004/02/skos/core#Concept",
		  "domain": "dbo:Person"
		},
		"dbo:lastLaunch": {
		  "range": "xds:date",
		  "domain": "dbo:YearInSpaceflight"
		},
		"dbo:olympicGamesGold": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:numberOfPlatformLevels": {
		  "comment": "Number of levels of platforms at the station.",
		  "range": "xds:integer",
		  "domain": "dbo:Station"
		},
		"dbo:inclination": {
		  "range": "xds:float",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:officialLanguage": {
		  "range": "dbo:Language",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:location": {
		  "comment": "The location of the thing.",
		  "range": "dbo:Place",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:locationCity",
		    "dbo:locationCountry"
		  ],
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:numberOfStaff": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Organisation"
		},
		"dbo:mvp": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"odesignp:hasPart": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:cluster",
		    "dbo:committeeInLegislature",
		    "dbo:commune",
		    "dbo:constellation",
		    "dbo:features",
		    "dbo:film",
		    "dbo:frazioni",
		    "dbo:ingredient",
		    "dbo:largestCity",
		    "dbo:largestCountry",
		    "dbo:largestSettlement",
		    "dbo:mainOrgan",
		    "dbo:majorIsland",
		    "dbo:mostDownPoint",
		    "dbo:openingTheme",
		    "dbo:part",
		    "dbo:politicGovernmentDepartment",
		    "dbo:politicalPartyInLegislature",
		    "dbo:politicalPartyOfLeader",
		    "dbo:poorestCountry",
		    "dbo:raceTrack",
		    "dbo:smallestCountry",
		    "dbo:subdivisionName",
		    "dbo:subprefecture",
		    "dbo:subregion",
		    "dbo:touristicSite",
		    "dbo:unesco",
		    "dbo:youthWing"
		  ]
		},
		"dbo:formerTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:gameArtist": {
		  "comment": "A game artist is an artist who creates art for one or more types of games. Game artists are responsible for all of the aspects of game development that call for visual art.",
		  "range": "dbo:Person",
		  "domain": "dbo:VideoGame",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:barangays": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:Tribus": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:subTribus",
		    "dbo:superTribus"
		  ]
		},
		"dbo:background": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:blazonRatio": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfIslands": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Island"
		},
		"odesignp:associatedWith": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:related",
		    "dbo:wikiPageWikiLink"
		  ]
		},
		"dbo:largestWin": {
		  "range": "xds:string",
		  "domain": "dbo:SoccerClub"
		},
		"dbo:aircraftFighter": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:sourceDistrict": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:occitanName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:usOpenSingle": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:kabyleName": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:silCode": {
		  "range": "owl:Thing",
		  "domain": "dbo:Language",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:populationTotalRanking": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:casualties": {
		  "range": "xds:integer",
		  "domain": "dbo:MilitaryConflict"
		},
		"dbo:AutomobileEngine/torqueOutput": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:homeArena": {
		  "range": "dbo:Arena",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:stationVisitDuration": {
		  "range": "xds:double",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:canton": {
		  "range": "dbo:Settlement",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:provost": {
		  "range": "dbo:Person",
		  "domain": "dbo:University",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:redline": {
		  "range": "xds:double",
		  "domain": "dbo:AutomobileEngine",
		  "functional": true
		},
		"dbo:wavelength": {
		  "range": "xds:double",
		  "domain": "dbo:Colour"
		},
		"dbo:satellitesDeployed": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SpaceShuttle"
		},
		"dbo:homeColourHexCode": {
		  "comment": "A colour represented by its hex code (e.g.: #FF0000 or #40E0D0).",
		  "range": "xds:string",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "dbo:colourHexCode"
		  ]
		},
		"dbo:drainsTo": {
		  "range": "dbo:AnatomicalStructure",
		  "domain": "dbo:AnatomicalStructure",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:Building/floorArea": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:politicGovernmentDepartment": {
		  "range": "owl:Thing",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "dbo:Department",
		    "odesignp:hasPart"
		  ]
		},
		"dbo:associatedAct": {
		  "range": "dbo:Artist",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:silverMedalMixed": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:MeanOfTransportation/height": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfTracks": {
		  "comment": "Number of tracks of a railway or railway station.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Infrastructure"
		},
		"dbo:legalArticle": {
		  "comment": "article in code book or statute book referred to in this legal case",
		  "range": "xds:string",
		  "domain": "dbo:LegalCase"
		},
		"dbo:clubsRecordGoalscorer": {
		  "range": "dbo:Person",
		  "domain": "dbo:SoccerClub",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:aircraftHelicopterMultirole": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:lowestPlace": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:child": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:notifyDate": {
		  "range": "xds:date",
		  "domain": "dbo:SiteOfSpecialScientificInterest"
		},
		"dbo:activeYearsStartDate": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:runwayWidth": {
		  "range": "xds:double",
		  "domain": "dbo:Airport"
		},
		"dbo:selectionYear": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:lchfDraftTeam": {
		  "range": "dbo:HockeyTeam",
		  "domain": "dbo:IceHockeyPlayer"
		},
		"dbo:radio": {
		  "range": "dbo:RadioStation",
		  "domain": "dbo:Person"
		},
		"dbo:period": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:startWqs": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:headOfFamily": {
		  "range": "dbo:Person",
		  "domain": "dbo:Family"
		},
		"dbo:security": {
		  "comment": "Safety precautions that are used in the building.",
		  "range": "xds:string",
		  "domain": "dbo:Building"
		},
		"dbo:codeStockExchange": {
		  "range": "xds:string",
		  "domain": "dbo:Company",
		  "superproperty": [
		    "dbo:code"
		  ]
		},
		"dbo:pistonStroke": {
		  "range": "xds:double",
		  "domain": "dbo:AutomobileEngine"
		},
		"dbo:mayorCouncillor": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:certification": {
		  "range": "xds:string",
		  "domain": "dbo:Single"
		},
		"dbo:capitalRegion": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:fate": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:moldavianName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:algerianName": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:agglomeration": {
		  "range": "dbo:Agglomeration",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:arielAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Actor",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:dateOfAbandonment": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:imdbId": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:shareSource": {
		  "range": "xds:string",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:buildingEndDate": {
		  "range": "xds:date",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:meshNumber": {
		  "range": "xds:string",
		  "domain": "dbo:AnatomicalStructure"
		},
		"odesignp:hasCommonBoundary": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:border",
		    "dbo:branchFrom",
		    "dbo:branchTo",
		    "dbo:drainsFrom",
		    "dbo:drainsTo",
		    "dbo:endPoint",
		    "dbo:hasJunctionWith",
		    "dbo:inflow",
		    "dbo:innervates",
		    "dbo:leftTributary",
		    "dbo:lymph",
		    "dbo:meetingRoad",
		    "dbo:origin",
		    "dbo:originalEndPoint",
		    "dbo:originalStartPoint",
		    "dbo:outflow",
		    "dbo:provides",
		    "dbo:rightChild",
		    "dbo:rightTributary",
		    "dbo:riverBranch",
		    "dbo:riverBranchOf",
		    "dbo:riverMouth",
		    "dbo:routeEnd",
		    "dbo:routeEndLocation",
		    "dbo:routeJunction",
		    "dbo:routeStart",
		    "dbo:routeStartLocation",
		    "dbo:source",
		    "dbo:sourceConfluence",
		    "dbo:spurOf",
		    "dbo:startPoint",
		    "dbo:vein",
		    "dbo:waterwayThroughTunnel"
		  ]
		},
		"dbo:beltwayCity": {
		  "range": "dbo:City",
		  "domain": "dbo:Road",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:colorChart": {
		  "range": "xds:string",
		  "domain": "dbo:FictionalCharacter"
		},
		"dbo:diocese": {
		  "comment": "A religious administrative body above the parish level",
		  "range": "dbo:Diocese",
		  "domain": "dbo:Parish",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:diocese1": {
		  "comment": "A religious administrative body above the parish level",
		  "range": "dbo:Diocese",
		  "domain": "dbo:Deanery",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:campusSize": {
		  "range": "xds:double",
		  "domain": "dbo:School"
		},
		"dbo:establishment": {
		  "range": "xds:integer",
		  "domain": "dbo:ChristianDoctrine"
		},
		"dbo:reignName": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:settlement": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:aircraftHelicopterTransport": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:wikiPageExtracted": {
		  "comment": "Date a page was extracted ''''''",
		  "range": "xds:dateTime",
		  "domain": "owl:Thing"
		},
		"dbo:wikiPageID": {
		  "comment": "Reserved for DBpedia.",
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:commandant": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "dbo:keyPerson",
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:historicalRegion": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:measurements": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:shareOfAudience": {
		  "range": "xds:float",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:LanguageCode": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:alliance": {
		  "range": "owl:Thing",
		  "domain": "dbo:Airline",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:nflTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete"
		},
		"dbo:fundedBy": {
		  "comment": "A organisation financing the research project.",
		  "range": "dbo:Organisation",
		  "domain": "dbo:ResearchProject",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:twinCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:Country",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:populationUrban": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:lccn": {
		  "comment": "The Library of Congress Control Number or LCCN is a serially based system of numbering cataloging records in the Library of Congress in the United States. It has nothing to do with the contents of any book, and should not be confused with Library of Congress Classification.",
		  "range": "xds:string",
		  "domain": "dbo:WrittenWork"
		},
		"dbo:continent": {
		  "comment": "links a country to the continent it belongs",
		  "range": "dbo:Continent",
		  "domain": "dbo:Country",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:alpsGroup": {
		  "comment": "the Alps group to which the mountain belongs, according to the SOIUSA classification",
		  "range": "dbo:MountainRange",
		  "domain": "dbo:Mountain",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:filmAudioType": {
		  "comment": "specifies the audio type of the film i.e. 'sound' or 'silent'",
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:flagCaption": {
		  "range": "xds:string",
		  "domain": "dbo:Flag"
		},
		"dbo:isHandicappedAccessible": {
		  "comment": "True if the station is handicapped accessible.",
		  "range": "xds:boolean",
		  "domain": "dbo:Station"
		},
		"dbo:runwaySurface": {
		  "range": "xds:string",
		  "domain": "dbo:Airport"
		},
		"dbo:kanjiName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:route": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:grossDomesticProduct": {
		  "range": "dbo:GrossDomesticProduct",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:bustSize": {
		  "range": "xds:double",
		  "domain": "dbo:Person"
		},
		"dbo:numberOfPlayers": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Activity"
		},
		"dbo:casNumber": {
		  "range": "xds:string",
		  "domain": "dbo:ChemicalCompound"
		},
		"dbo:initiallyUsedFor": {
		  "comment": "Initial use of the architectural structure.",
		  "range": "xds:string",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:bigPoolRecord": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:athletics": {
		  "range": "owl:Thing",
		  "domain": "dbo:University",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:capitalCoordinates": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:formerBroadcastNetwork": {
		  "comment": "A former parent broadcast network to which the broadcaster once belonged.",
		  "range": "dbo:BroadcastNetwork",
		  "domain": "dbo:Broadcaster",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:populationMetro": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:min": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:olympicOathSwornByJudge": {
		  "range": "dbo:Person",
		  "domain": "dbo:Olympics",
		  "superproperty": [
		    "dbo:olympicOathSwornBy",
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:touaregName": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:governmentMountain": {
		  "range": "dbo:Mountain",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:currentWorldChampion": {
		  "range": "dbo:Agent",
		  "domain": "dbo:Sport",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:winsAtLPGA": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:refseq": {
		  "range": "xds:string",
		  "domain": "dbo:Protein"
		},
		"dbo:topLevelDomain": {
		  "range": "xds:string",
		  "domain": "dbo:Country"
		},
		"dbo:bioavailability": {
		  "comment": "\"The rate and extent to which the active ingredient or active moiety is absorbed from a drug product and becomes available at the site of action. For drug products that are not intended to be absorbed into the bloodstream, bioavailability may be assessed by measurements intended to reflect the rate and extent to which the active ingredient or active moiety becomes available at the site of action (21CFR320.1).\"",
		  "range": "xds:float",
		  "domain": "dbo:Drug"
		},
		"dbo:numberOfStars": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Constellation"
		},
		"dbo:otherParty": {
		  "range": "dbo:PoliticalParty",
		  "domain": "dbo:OfficeHolder",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:owner": {
		  "range": "dbo:Agent",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:projectBudgetTotal": {
		  "comment": "The total budget of the research project.",
		  "range": "xds:double",
		  "domain": "dbo:ResearchProject"
		},
		"dbo:provinceLink": {
		  "range": "dbo:Province",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:lowestPoint": {
		  "range": "dbo:Place",
		  "domain": "dbo:Settlement"
		},
		"dbo:sublimationPoint": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:crew": {
		  "range": "dbo:SpaceMission",
		  "domain": "dbo:Spacecraft",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:solventWithBadSolubility": {
		  "range": "dbo:ChemicalSubstance",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:Spacecraft/periapsis": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:aspectRatio": {
		  "range": "owl:Thing",
		  "domain": "dbo:Software",
		  "superproperty": [
		    "odesignp:hasQuality"
		  ]
		},
		"dbo:billed": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Wrestler",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:eruptionYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:Volcano"
		},
		"dbo:command": {
		  "range": "xds:string",
		  "domain": "dbo:MilitaryPerson"
		},
		"dbo:successfulLaunches": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:bestRankSingle": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:fansgroup": {
		  "range": "xds:string",
		  "domain": "dbo:SoccerClub"
		},
		"dbo:escapeVelocity": {
		  "range": "xds:double",
		  "domain": "dbo:Planet"
		},
		"dbo:amateurTie": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Boxer"
		},
		"dbo:leadYear": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:city": {
		  "range": "dbo:City",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:reopened": {
		  "range": "xds:date",
		  "domain": "dbo:School"
		},
		"dbo:averageSpeed": {
		  "comment": "The average speed of a thing.",
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:heightAboveAverageTerrain": {
		  "range": "xds:double",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:graySubject": {
		  "comment": "Refers to the famous 1918 edition of Gray's Anatomy.",
		  "range": "xds:positiveInteger",
		  "domain": "dbo:AnatomicalStructure"
		},
		"dbo:provides": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:lastLaunchDate": {
		  "range": "xds:date",
		  "domain": "dbo:LaunchPad"
		},
		"dbo:knownFor": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:isDescribedBy"
		  ]
		},
		"dbo:review": {
		  "range": "xds:anyURI",
		  "domain": "dbo:Album"
		},
		"dbo:linguisticsTradition": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:aircraftTransport": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:firstPublisher": {
		  "range": "dbo:Company",
		  "domain": "dbo:WrittenWork"
		},
		"dbo:compiler": {
		  "comment": "For compilation albums: the person or entity responsible for selecting the album's track listing.",
		  "range": "dbo:Person",
		  "domain": "dbo:Album",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:sharingOutPopulation": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:ibdbId": {
		  "comment": "The Internet Broadway Database ID (IBDB ID) from ibdb.com.",
		  "range": "xds:string",
		  "domain": "dbo:Play"
		},
		"odesignp:isLocationOf": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:addressInRoad",
		    "dbo:animal",
		    "dbo:building",
		    "dbo:capital",
		    "dbo:enshrinedDeity",
		    "dbo:ethnicGroup",
		    "dbo:growingGrape",
		    "dbo:highestMountain",
		    "dbo:highestPlace",
		    "dbo:highestPosition",
		    "dbo:highestRegion",
		    "dbo:highestState",
		    "dbo:island",
		    "dbo:largestMetro",
		    "dbo:lowestMountain",
		    "dbo:lowestPlace",
		    "dbo:lowestPosition",
		    "dbo:lowestRegion",
		    "dbo:majorLake",
		    "dbo:majorVolcano",
		    "dbo:nerve",
		    "dbo:plant",
		    "dbo:principalArea",
		    "dbo:regionalLanguage",
		    "dbo:varietals",
		    "dbo:wineProduced"
		  ]
		},
		"dbo:neighbourConstellations": {
		  "range": "xds:string",
		  "domain": "dbo:Constellation"
		},
		"dbo:dateOfBurial": {
		  "range": "xds:date",
		  "domain": "dbo:Person"
		},
		"dbo:penaltyScore": {
		  "range": "xds:integer",
		  "domain": "dbo:PenaltyShootOut"
		},
		"dbo:issn": {
		  "comment": "International Standard Serial Number (ISSN)",
		  "range": "xds:string",
		  "domain": "dbo:PeriodicalLiterature"
		},
		"dbo:ridId": {
		  "comment": "An identifying system for scientific authors. The system was introduced in January 2008 by Thomson Reuters. The combined use of the Digital Object Identifier with the ResearcherID allows for a unique association of authors and scientific articles.",
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:filmColourType": {
		  "comment": "specifies the colour type of the film i.e. 'colour' or 'b/w'",
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:amateurVictory": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Boxer"
		},
		"dbo:sixthFormStudents": {
		  "range": "xds:string",
		  "domain": "dbo:School"
		},
		"dbo:settingOfPlay": {
		  "comment": "The places and time where the play takes place.",
		  "range": "xds:string",
		  "domain": "dbo:Play"
		},
		"dbo:maidenFlight": {
		  "comment": "date of maiden flight",
		  "range": "xds:date",
		  "domain": "dbo:Rocket"
		},
		"dbo:animal": {
		  "range": "dbo:Animal",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:nationalTournamentBronze": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:spacecraft": {
		  "range": "dbo:Spacecraft",
		  "domain": "dbo:SpaceMission",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:solubility": {
		  "range": "xds:integer",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:modelEndYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:MeanOfTransportation"
		},
		"dbo:usk": {
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:meltingPoint": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:games": {
		  "range": "xds:string",
		  "domain": "dbo:OlympicResult"
		},
		"dbo:acceleration": {
		  "range": "xds:double",
		  "domain": "dbo:AutomobileEngine",
		  "functional": true
		},
		"dbo:dist_ly": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:kindOfRock": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:show": {
		  "range": "dbo:TelevisionShow",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:stockExchange": {
		  "range": "xds:string",
		  "domain": "dbo:Company"
		},
		"dbo:crest": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:event": {
		  "range": "dbo:Event",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:mood": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:icd9": {
		  "range": "xds:string",
		  "domain": "dbo:Disease"
		},
		"dbo:layout": {
		  "range": "owl:Thing",
		  "domain": "dbo:Automobile",
		  "superproperty": [
		    "odesignp:hasQuality"
		  ]
		},
		"dbo:tuition": {
		  "range": "xds:double",
		  "domain": "dbo:School"
		},
		"dbo:numberOfEmployees": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Organisation"
		},
		"dbo:outflow": {
		  "range": "dbo:River",
		  "domain": "dbo:Lake",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:seiyu": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person"
		},
		"dbo:wikiPageRevisionID": {
		  "comment": "Reserved for DBpedia.",
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:prefix": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:comic": {
		  "range": "dbo:Comic",
		  "domain": "dbo:FictionalCharacter",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:landtag": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:value": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:name": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:messierName",
		    "dbo:ngcName"
		  ]
		},
		"dbo:activeYearsEndYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:tvComId": {
		  "range": "xds:integer",
		  "domain": "dbo:TelevisionShow"
		},
		"dbo:map": {
		  "comment": "A map of the place.",
		  "range": "owl:Thing",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:algerianSettlementName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:AutomobileEngine/co2Emission": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:max": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:areaUrban": {
		  "range": "xds:double",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:dynasty": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:maximumDepthQuote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:publication": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:co2Emission": {
		  "range": "xds:double",
		  "domain": "dbo:AutomobileEngine",
		  "functional": true
		},
		"dbo:dist_pc": {
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:projectType": {
		  "comment": "The type of the research project. Mostly used for the funding schemes of the European Union, for instance: Specific Targeted Research Projects (STREP), Network of Excellence (NoE) or Integrated Project.",
		  "range": "xds:string",
		  "domain": "dbo:ResearchProject"
		},
		"dbo:geology": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:notableWork": {
		  "range": "dbo:Work",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:websiteLabel": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:worldChampionTitleYear": {
		  "comment": "can be one or several years",
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:father": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:populationPctMen": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:recommissioningDate": {
		  "range": "xds:date",
		  "domain": "dbo:Ship"
		},
		"dbo:rankArea": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:ascent": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:sportSpecialty": {
		  "comment": "the sport specialty the athlete practices, e.g. 'Ring' for a men's artistic gymnastics athlete",
		  "range": "dbo:Sport",
		  "domain": "dbo:Athlete",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:goldenGlobeAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:crews": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SpaceShuttle"
		},
		"dbo:length": {
		  "range": "xds:double",
		  "domain": "owl:Thing",
		  "functional": true
		},
		"dbo:aircraftType": {
		  "range": "xds:string",
		  "domain": "dbo:Aircraft"
		},
		"dbo:generalManager": {
		  "range": "dbo:Person",
		  "domain": "dbo:SportsTeam",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:handedness": {
		  "comment": "an attribute of humans defined by their unequal distribution of fine motor skill between the left and right hands.",
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasQuality"
		  ]
		},
		"dbo:continentalTournament": {
		  "range": "dbo:Tournament",
		  "domain": "dbo:Person"
		},
		"dbo:openingYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:popularVote": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Election"
		},
		"dbo:cmykCoordinateYellow": {
		  "range": "xds:integer",
		  "domain": "dbo:Colour"
		},
		"dbo:recordDate": {
		  "range": "xds:date",
		  "domain": "dbo:MusicalWork"
		},
		"dbo:usingCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:Currency",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:county": {
		  "comment": "The county where the thing is located.",
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:currentCity": {
		  "range": "dbo:City",
		  "domain": "owl:Thing"
		},
		"dbo:organ": {
		  "comment": "Name and/or description of the organ",
		  "range": "dbo:Organ",
		  "domain": "dbo:ReligiousBuilding"
		},
		"dbo:smiles": {
		  "comment": "The Simplified Molecular-Input Line-Entry System or SMILES is a specification in form of a line notation for describing the structure of chemical molecules using short ASCII strings.",
		  "range": "xds:string",
		  "domain": "dbo:ChemicalCompound"
		},
		"dbo:numberOfArrondissement": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Department"
		},
		"dbo:currentMember": {
		  "range": "dbo:Person",
		  "domain": "dbo:SportsTeam",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:trainerClub": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:SoccerPlayer",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:kindOfCriminal": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:SpaceMission/distanceTraveled": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:Planet/minimumTemperature": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:regionalPrefecture": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:march": {
		  "range": "dbo:MusicalWork",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:lymph": {
		  "range": "dbo:Lymph",
		  "domain": "dbo:AnatomicalStructure",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:firstDriverCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:broadcastNetwork": {
		  "comment": "The parent broadcast network to which the broadcaster belongs.",
		  "range": "dbo:BroadcastNetwork",
		  "domain": "dbo:Broadcaster",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:fileURL": {
		  "range": "dbo:File",
		  "domain": "dbo:File"
		},
		"dbo:numberOfAcademicStaff": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:EducationalInstitution"
		},
		"dbo:startWct": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:soccerTournamentTopScorer": {
		  "range": "dbo:SoccerPlayer",
		  "domain": "dbo:SoccerTournament",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:flagBearer": {
		  "range": "dbo:Person",
		  "domain": "dbo:OlympicResult",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:spouseName": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:usOpenDouble": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:mouthDistrict": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:information": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:ethnicity": {
		  "range": "dbo:EthnicGroup",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:flashPoint": {
		  "comment": "lowest temperature at which a substance can vaporize and start burning",
		  "range": "xds:integer",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:unitCost": {
		  "range": "xds:double",
		  "domain": "dbo:Aircraft"
		},
		"dbo:formerPartner": {
		  "range": "dbo:Person",
		  "domain": "dbo:FigureSkater",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:numberOfPiersInWater": {
		  "comment": "Number of piers standing in a river or other water in normal conditions.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Bridge"
		},
		"dbo:blackSkiPisteNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:Automobile/fuelCapacity": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:aircraftElectronic": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:chef": {
		  "range": "dbo:Person",
		  "domain": "dbo:Restaurant",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:wikiPageCharacterSize": {
		  "comment": "Needs to be removed, left at the moment to not break DBpedia Live",
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:trainer": {
		  "range": "dbo:Person",
		  "domain": "dbo:Athlete",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:distanceTraveled": {
		  "range": "xds:double",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:administrativeCollectivity": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:Infrastructure/length": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:sizeMap": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:bestYearWsop": {
		  "range": "xds:gYear",
		  "domain": "dbo:PokerPlayer"
		},
		"dbo:closingDate": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:codeBook": {
		  "comment": "code book or statute book referred to in this legal case",
		  "range": "xds:string",
		  "domain": "dbo:LegalCase"
		},
		"dbo:rankingsDoubles": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:TennisPlayer"
		},
		"dbo:port1DockingDate": {
		  "range": "xds:date",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:enemy": {
		  "range": "dbo:Species",
		  "domain": "dbo:FictionalCharacter",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:maximumAreaQuote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:media": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:episodeNumber": {
		  "comment": "The episode number of the TelevisionEpisode.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:TelevisionEpisode"
		},
		"dbo:coachingRecord": {
		  "range": "xds:string",
		  "domain": "dbo:CollegeCoach"
		},
		"dbo:seasonNumber": {
		  "comment": "The season number to which the TelevisionEpisode belongs.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:TelevisionEpisode"
		},
		"dbo:mayorTitle": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:AutomobileEngine/height": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:servingTemperature": {
		  "comment": "Serving temperature for the food (e.g.: hot, cold, warm or room temperature).",
		  "range": "xds:string",
		  "domain": "dbo:Food"
		},
		"dbo:distanceToDublin": {
		  "range": "xds:double",
		  "domain": "dbo:Settlement"
		},
		"dbo:dateConstruction": {
		  "range": "xds:date",
		  "domain": "dbo:Canal"
		},
		"dbo:artery": {
		  "range": "dbo:Artery",
		  "domain": "dbo:AnatomicalStructure",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:subClassis": {
		  "comment": "a subdivision within a Species classis",
		  "range": "owl:Thing",
		  "domain": "dbo:Species",
		  "superproperty": [
		    "dbo:classis"
		  ]
		},
		"dbo:handisport": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:powerOutput": {
		  "range": "xds:double",
		  "domain": "dbo:AutomobileEngine",
		  "functional": true
		},
		"dbo:representative": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:presentName": {
		  "range": "xds:string",
		  "domain": "dbo:FormerMunicipality"
		},
		"dbo:worldTournament": {
		  "range": "dbo:Tournament",
		  "domain": "dbo:Person"
		},
		"odesignp:hasRole": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:occupation",
		    "dbo:personFunction",
		    "dbo:playRole",
		    "dbo:profession"
		  ]
		},
		"dbo:subregion": {
		  "range": "dbo:Place",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:emedicineTopic": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:musicType": {
		  "comment": "Type is too general. We should be able to distinguish types of music from types of architecture",
		  "range": "owl:Thing",
		  "domain": "dbo:MusicalWork",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:powerType": {
		  "range": "owl:Thing",
		  "domain": "dbo:MeanOfTransportation",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:tree": {
		  "range": "dbo:Species",
		  "domain": "dbo:Place"
		},
		"dbo:Spacecraft/freeFlightTime": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfWineries": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:WineRegion"
		},
		"dbo:serviceNumber": {
		  "comment": "The service number held by the individual during military service.",
		  "range": "xds:string",
		  "domain": "dbo:MilitaryPerson"
		},
		"dbo:numberOfDistricts": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Regency"
		},
		"dbo:activeYears": {
		  "range": "http://www.w3.org/2004/02/skos/core#Concept",
		  "domain": "dbo:Person"
		},
		"dbo:doctoralAdvisor": {
		  "range": "dbo:Person",
		  "domain": "dbo:Scientist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:citySince": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:average": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:alpsSoiusaCode": {
		  "comment": "the Alps SOIUSA code corresponding to the mountain, according to the SOIUSA classification",
		  "range": "xds:string",
		  "domain": "dbo:Mountain"
		},
		"dbo:atcSupplemental": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:stateOfOriginPoint": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Athlete"
		},
		"dbo:noContest": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Boxer"
		},
		"dbo:PopulatedPlace/areaUrban": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfVillages": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:District"
		},
		"dbo:maxApparentMagnitude": {
		  "range": "xds:double",
		  "domain": "dbo:CelestialBody"
		},
		"dbo:numberOfUndergraduateStudents": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:EducationalInstitution"
		},
		"dbo:Person/weight": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:supplementalDraftRound": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:commandModule": {
		  "range": "xds:string",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:firstWinner": {
		  "range": "dbo:Person",
		  "domain": "dbo:Race",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:coden": {
		  "comment": "CODEN is a six character, alphanumeric bibliographic code, that provides concise, unique and unambiguous identification of the titles of serials and non-serial publications from all subject areas.",
		  "range": "xds:string",
		  "domain": "dbo:WrittenWork"
		},
		"dbo:battle": {
		  "range": "dbo:MilitaryConflict",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:collectionSize": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasRegion"
		  ]
		},
		"dbo:distanceToDouglas": {
		  "range": "xds:double",
		  "domain": "dbo:Settlement"
		},
		"dbo:emblem": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:governorate": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:crownDependency": {
		  "range": "xds:string",
		  "domain": "dbo:City"
		},
		"dbo:digitalChannel": {
		  "range": "xds:string",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:olivierAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Comedian",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:engineer": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:coordinates": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:olympicGamesBronze": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:introduced": {
		  "range": "xds:date",
		  "domain": "dbo:Beverage"
		},
		"dbo:associate": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:yearOfConstruction": {
		  "comment": "The year in which construction of the Place was finished.",
		  "range": "xds:gYear",
		  "domain": "dbo:Place"
		},
		"dbo:uciCode": {
		  "comment": "Official UCI code for cycling teams",
		  "range": "xds:string",
		  "domain": "dbo:CyclingTeam"
		},
		"dbo:space": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Building"
		},
		"dbo:endCareer": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:federation": {
		  "range": "dbo:Organisation",
		  "domain": "dbo:Person"
		},
		"dbo:subprefecture": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Department",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:ekatteCode": {
		  "comment": "Indexing code used by the Bulgarian National Statistical Institute to identify populated places",
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:debutTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:redLongDistancePisteNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:isPartOfRoute": {
		  "comment": "Name of another route from which the route is part of. Infobox property values are mostly given as plain text, therefore range is xsd:string.",
		  "range": "xds:string",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:technique": {
		  "range": "xds:string",
		  "domain": "dbo:Painting"
		},
		"dbo:totalMass": {
		  "range": "xds:double",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:belgiumMergedSettlement": {
		  "range": "dbo:BelgiumSettlement",
		  "domain": "dbo:BelgiumSettlement",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:Weapon/width": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:timeshiftChannel": {
		  "range": "xds:string",
		  "domain": "dbo:TelevisionStation"
		},
		"dbo:numberOfEntrances": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Cave"
		},
		"dbo:sourceRegion": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:related": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:associatedWith"
		  ]
		},
		"dbo:elevation": {
		  "comment": "average elevation above the sea level",
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:originalMaximumBoatBeam": {
		  "range": "xds:double",
		  "domain": "dbo:Canal"
		},
		"dbo:belgiumReffBourgmestre": {
		  "range": "dbo:Person",
		  "domain": "dbo:BelgiumSettlement",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:decideDate": {
		  "range": "xds:date",
		  "domain": "dbo:SupremeCourtOfTheUnitedStatesCase"
		},
		"dbo:chaouiName": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:proYear": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:stateOfOriginTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete"
		},
		"dbo:originalDanseScore": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:demolitionYear": {
		  "comment": "The year the building was demolished.",
		  "range": "xds:gYear",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:capitalPosition": {
		  "range": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:foundation": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:oldTeamCoached": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete"
		},
		"dbo:termOfOffice": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:awayColourHexCode": {
		  "comment": "A colour represented by its hex code (e.g.: #FF0000 or #40E0D0).",
		  "range": "xds:string",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "dbo:colourHexCode"
		  ]
		},
		"dbo:protestantPercentage": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:nationalTopographicSystemMapNumber": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:wineRegion": {
		  "range": "dbo:WineRegion",
		  "domain": "dbo:Grape",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:credit": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:influenced": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:usurper": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person"
		},
		"dbo:causedBy": {
		  "range": "owl:Thing",
		  "domain": "dbo:Event",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:shape": {
		  "range": "dbo:Community",
		  "domain": "dbo:Intercommunality",
		  "superproperty": [
		    "odesignp:hasQuality"
		  ]
		},
		"dbo:railGauge": {
		  "range": "xds:double",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:approximateCalories": {
		  "comment": "Approximate calories per serving.",
		  "range": "xds:double",
		  "domain": "dbo:Food"
		},
		"dbo:project": {
		  "range": "dbo:Project",
		  "domain": "dbo:Person"
		},
		"dbo:dissolutionDate": {
		  "range": "xds:date",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:boxerCategory": {
		  "range": "dbo:BoxingCategory",
		  "domain": "dbo:Boxer"
		},
		"dbo:Spacecraft/dryCargo": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:precursor": {
		  "range": "dbo:Embryology",
		  "domain": "dbo:AnatomicalStructure",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:locationCity": {
		  "comment": "City the thing is located.",
		  "range": "dbo:City",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "dbo:location",
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:upperAge": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:School"
		},
		"dbo:eruption": {
		  "range": "xds:string",
		  "domain": "dbo:Island"
		},
		"dbo:numberOfLiveAlbums": {
		  "comment": "the number of live albums released by the musical artist",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:MusicalArtist"
		},
		"dbo:bodyStyle": {
		  "range": "owl:Thing",
		  "domain": "dbo:Automobile",
		  "superproperty": [
		    "odesignp:isDescribedBy"
		  ]
		},
		"dbo:setDesigner": {
		  "comment": "the person who is responsible for the film set design",
		  "range": "dbo:Person",
		  "domain": "dbo:Film",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:firstPublicationYear": {
		  "comment": "Year of the first publication.",
		  "range": "xds:gYear",
		  "domain": "dbo:PeriodicalLiterature"
		},
		"dbo:teamManager": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Person"
		},
		"dbo:lowestRegion": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:hsvCoordinateSaturation": {
		  "range": "xds:integer",
		  "domain": "dbo:Colour"
		},
		"dbo:projectCoordinator": {
		  "comment": "The coordinating organisation of the project.",
		  "range": "dbo:Organisation",
		  "domain": "dbo:ResearchProject",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:ingredient": {
		  "comment": "An ingredient is a substance that forms part of a mixture (in a general sense). Here it is used in the context of recipes that specify which ingredients are used to prepare a specific dish or drink.",
		  "range": "owl:Thing",
		  "domain": "dbo:Food",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:productionEndYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:battleHonours": {
		  "range": "xds:string",
		  "domain": "dbo:MilitaryUnit"
		},
		"dbo:occupation": {
		  "range": "dbo:PersonFunction",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasRole"
		  ]
		},
		"dbo:iobdbId": {
		  "comment": "Lortel Archives Internet Off-Broadway database \"show id\" from lortel.org.",
		  "range": "xds:string",
		  "domain": "dbo:Play"
		},
		"dbo:races": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:FormulaOneRacer"
		},
		"dbo:depths": {
		  "range": "dbo:Depth",
		  "domain": "dbo:Place"
		},
		"dbo:bSide": {
		  "range": "xds:string",
		  "domain": "dbo:Single"
		},
		"dbo:coronationDate": {
		  "range": "xds:date",
		  "domain": "dbo:Royalty"
		},
		"dbo:iso6393Code": {
		  "range": "xds:string",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "dbo:LanguageCode"
		  ]
		},
		"dbo:center": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:creator": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:systemRequirements": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfParticipatingMaleAthletes": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Olympics"
		},
		"dbo:lieutenant": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:certificationDate": {
		  "range": "xds:date",
		  "domain": "dbo:Single"
		},
		"dbo:deathYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:Person",
		  "functional": true
		},
		"dbo:weddingParentsDate": {
		  "range": "xds:date",
		  "domain": "dbo:Person"
		},
		"dbo:lowestMountain": {
		  "range": "dbo:Mountain",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:continentalTournamentSilver": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"odesignp:hasMember": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:associatedMusicalArtist",
		    "dbo:bandMember",
		    "dbo:currentMember",
		    "dbo:currentTeamMember",
		    "dbo:formerBandMember",
		    "dbo:memberOfParliament",
		    "dbo:organisationMember",
		    "dbo:pastMember",
		    "dbo:playerInTeam",
		    "dbo:religiousHead",
		    "dbo:teachingStaff",
		    "dbo:televisionSeries",
		    "dbo:volumes"
		  ]
		},
		"dbo:extinctionYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:Organisation"
		},
		"dbo:fighter": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:watershed": {
		  "range": "xds:double",
		  "domain": "dbo:Stream"
		},
		"dbo:predecessor": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:geminiAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Actor",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:managerYearsEndYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:notSolubleIn": {
		  "range": "dbo:ChemicalSubstance",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:leaderTitle": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:reopeningYear": {
		  "comment": "Year of reopening the architectural structure.",
		  "range": "xds:gYear",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:ratio": {
		  "range": "xds:string",
		  "domain": "dbo:School"
		},
		"dbo:rankPopulation": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:juniorTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete"
		},
		"dbo:war": {
		  "range": "xds:string",
		  "domain": "dbo:MilitaryPerson"
		},
		"dbo:codeLandRegistry": {
		  "comment": "Land Registry code designating a parcel of land",
		  "range": "xds:string",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "dbo:Code"
		  ]
		},
		"dbo:formationYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:Organisation"
		},
		"dbo:spike": {
		  "range": "xds:string",
		  "domain": "dbo:VolleyballPlayer"
		},
		"dbo:lccnId": {
		  "comment": "Library of Congress Control Number",
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:numberOfVolunteers": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Organisation"
		},
		"dbo:startYearOfInsertion": {
		  "range": "xds:gYear",
		  "domain": "dbo:AutomobileEngine"
		},
		"dbo:maxAbsoluteMagnitude": {
		  "range": "xds:double",
		  "domain": "dbo:CelestialBody"
		},
		"dbo:organisationMember": {
		  "comment": "Identify the members of an organisation.",
		  "range": "dbo:OrganisationMember",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:status": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:otherName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfPeopleLicensed": {
		  "comment": "nombre de personnes ayant une license pour pratiquer cette activit\u00e9",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Activity"
		},
		"dbo:wikiPageExternalLink": {
		  "comment": "Reserved for DBpedia.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:formerCallsign": {
		  "range": "xds:string",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:lunarModule": {
		  "range": "xds:string",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:dateExtended": {
		  "range": "xds:date",
		  "domain": "dbo:Canal"
		},
		"dbo:guest": {
		  "range": "dbo:Person",
		  "domain": "dbo:TelevisionEpisode",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:sizeThumbnail": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:militaryGovernment": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:kindOfCriminalAction": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:apoapsis": {
		  "range": "xds:double",
		  "domain": "dbo:CelestialBody"
		},
		"dbo:periapsis": {
		  "range": "xds:double",
		  "domain": "dbo:CelestialBody"
		},
		"dbo:richestCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:Country"
		},
		"dbo:maidenFlightRocket": {
		  "range": "dbo:Rocket",
		  "domain": "dbo:YearInSpaceflight",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:mayor": {
		  "range": "dbo:Mayor",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:committeeInLegislature": {
		  "comment": "Committee in the legislature (eg.: Committee on Economic and Monetary Affairs of the European Parliament).",
		  "range": "owl:Thing",
		  "domain": "dbo:Legislature",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:finalPublicationYear": {
		  "comment": "Year of the final publication.",
		  "range": "xds:gYear",
		  "domain": "dbo:PeriodicalLiterature"
		},
		"dbo:refseqmrna": {
		  "range": "xds:string",
		  "domain": "dbo:Biomolecule"
		},
		"dbo:firstAirDate": {
		  "comment": "The date on which regular broadcasts began.",
		  "range": "xds:date",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:custodian": {
		  "range": "dbo:Person",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:photographer": {
		  "range": "dbo:Person",
		  "domain": "dbo:TelevisionEpisode",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:birthYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:Person",
		  "functional": true
		},
		"dbo:locality": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:managementPosition": {
		  "range": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasSetting"
		  ]
		},
		"dbo:watercourse": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:stationStructure": {
		  "comment": "Type of station structure (underground, at-grade, or elevated).",
		  "range": "xds:string",
		  "domain": "dbo:Station"
		},
		"dbo:ithfDate": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:sourceConfluencePlace": {
		  "range": "dbo:Place",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:Galaxy/mass": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:mother": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:areaTotalRanking": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:bandMember": {
		  "comment": "A member of the band.",
		  "range": "dbo:Person",
		  "domain": "dbo:Band",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:film": {
		  "range": "dbo:Film",
		  "domain": "dbo:FilmFestival",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:locatedInArea": {
		  "range": "dbo:Place",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:localizationThumbnailCaption": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"odesignp:unifies": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:relatedFunctions",
		    "dbo:relatedPlaces"
		  ]
		},
		"dbo:littlePoolRecord": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:argueDate": {
		  "range": "xds:date",
		  "domain": "dbo:SupremeCourtOfTheUnitedStatesCase"
		},
		"dbo:PopulatedPlace/area": {
		  "comment": "The area of a owl:Thing in square metre.",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:specialEffects": {
		  "comment": "the person who is responsible for the film special effects",
		  "range": "dbo:Person",
		  "domain": "dbo:Film",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:countryRank": {
		  "comment": "Place of the building in the list of the highest buildings in the country",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Skyscraper"
		},
		"dbo:campus": {
		  "range": "owl:Thing",
		  "domain": "dbo:University",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:clothingSize": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:atcPrefix": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:retiredRocket": {
		  "range": "dbo:Rocket",
		  "domain": "dbo:YearInSpaceflight",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:opponents": {
		  "comment": "\"opponent in a military conflict, an organisation, country, or group of countries. \"",
		  "range": "owl:Thing",
		  "domain": "dbo:MilitaryConflict",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:perCapitaIncome": {
		  "range": "xds:double",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:PopulatedPlace/areaMetro": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:commissioningDate": {
		  "range": "xds:date",
		  "domain": "dbo:Ship"
		},
		"dbo:numberOfStudioAlbums": {
		  "comment": "the number of studio albums released by the musical artist",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:MusicalArtist"
		},
		"odesignp:conceptualizes": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:ideology",
		    "dbo:mainInterest",
		    "dbo:religion"
		  ]
		},
		"dbo:daylightSavingTimeZone": {
		  "range": "owl:Thing",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:displacement": {
		  "range": "xds:double",
		  "domain": "dbo:AutomobileEngine",
		  "functional": true
		},
		"dbo:Department": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:politicGovernmentDepartment"
		  ]
		},
		"dbo:demographics": {
		  "range": "dbo:Demographics",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:sisterCollege": {
		  "range": "dbo:College",
		  "domain": "dbo:College",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:dressCode": {
		  "comment": "The recommended dress code for an establishment or event.",
		  "range": "xds:string",
		  "domain": "dbo:Restaurant"
		},
		"dbo:v_hb": {
		  "range": "xds:integer",
		  "domain": "dbo:Globularswarm"
		},
		"dbo:numberOfLocations": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Organisation"
		},
		"dbo:filmVersion": {
		  "range": "dbo:Film",
		  "domain": "dbo:WrittenWork"
		},
		"dbo:Galaxy/surfaceArea": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfVisitorsAsOf": {
		  "comment": "The year in which number of visitors occurred.",
		  "range": "xds:gYear",
		  "domain": "dbo:HistoricPlace"
		},
		"dbo:hairColour": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:rightAscension": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Constellation"
		},
		"dbo:routeEndDirection": {
		  "comment": "End of the route. The opposite of OntologyProperty:routeStartDirection.",
		  "range": "xds:string",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:disbanded": {
		  "range": "xds:date",
		  "domain": "dbo:MilitaryUnit"
		},
		"dbo:landingSite": {
		  "range": "xds:string",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:riverBranchOf": {
		  "range": "dbo:River",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:fastestLap": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:FormulaOneRacer"
		},
		"dbo:aircraftTrainer": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:pgaWins": {
		  "range": "http://www.w3.org/2004/02/skos/core#Concept",
		  "domain": "dbo:Person"
		},
		"dbo:phylum": {
		  "comment": "A rank in the classification of organisms, below kingdom and above class; also called a division, especially in describing plants; a taxon at that rank.",
		  "range": "owl:Thing",
		  "domain": "dbo:Species",
		  "superproperty": [
		    "odesignp:isSpecializedBy"
		  ]
		},
		"dbo:associatedMusicalArtist": {
		  "range": "dbo:MusicalArtist",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:settlementAttached": {
		  "range": "dbo:Place",
		  "domain": "owl:Thing"
		},
		"dbo:launchSite": {
		  "range": "dbo:Building",
		  "domain": "dbo:SpaceMission",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:employersCelebration": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:orbitalEccentricity": {
		  "range": "xds:float",
		  "domain": "dbo:CelestialBody"
		},
		"dbo:parliamentaryGroup": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:nndbId": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:youthWing": {
		  "range": "owl:Thing",
		  "domain": "dbo:PoliticalParty",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:lunarSurfaceTime": {
		  "range": "xds:double",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:taxon": {
		  "range": "dbo:Taxon",
		  "domain": "dbo:Species"
		},
		"dbo:numberOfCompetitors": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:OlympicResult"
		},
		"dbo:solicitorGeneral": {
		  "comment": "high-ranking solicitor",
		  "range": "dbo:Person",
		  "domain": "dbo:LegalCase",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:rolandGarrosDouble": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:numberOfGoals": {
		  "range": "xds:string",
		  "domain": "dbo:CareerStation"
		},
		"dbo:growingGrape": {
		  "range": "dbo:Grape",
		  "domain": "dbo:WineRegion",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:distributor": {
		  "range": "dbo:Organisation",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:serviceEndYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:MilitaryPerson"
		},
		"dbo:created": {
		  "range": "dbo:Work",
		  "domain": "dbo:Person"
		},
		"dbo:decoration": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:chiefEditor": {
		  "range": "dbo:Person",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:abstensions": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:StatedResolution"
		},
		"dbo:summerTemperature": {
		  "range": "xds:double",
		  "domain": "dbo:Settlement"
		},
		"odesignp:follows": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:previousEvent",
		    "dbo:previousMission"
		  ]
		},
		"dbo:statisticLabel": {
		  "range": "owl:Thing",
		  "domain": "dbo:BaseballPlayer"
		},
		"dbo:successor": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:mainIsland": {
		  "range": "dbo:Place",
		  "domain": "dbo:Place"
		},
		"dbo:namedAfter": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:spurType": {
		  "range": "owl:Thing",
		  "domain": "dbo:Road",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:judge": {
		  "comment": "leading judge",
		  "range": "dbo:Judge",
		  "domain": "dbo:LegalCase",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:isbn": {
		  "comment": "The International Standard Book Number (ISBN) is a unique numeric commercial book identifier based upon the 9-digit Standard Book Numbering (SBN) code.",
		  "range": "xds:string",
		  "domain": "dbo:Book"
		},
		"dbo:catch": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:marketCapitalisation": {
		  "range": "xds:double",
		  "domain": "dbo:Company",
		  "functional": true
		},
		"dbo:censusYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:nationalOlympicCommittee": {
		  "range": "owl:Thing",
		  "domain": "dbo:OlympicResult",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:mayorArticle": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:product": {
		  "range": "owl:Thing",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:atPage": {
		  "comment": "Page # where the referenced resource is to be found in the source document",
		  "range": "xds:string",
		  "domain": "dbo:Reference"
		},
		"dbo:dateClosed": {
		  "range": "xds:date",
		  "domain": "dbo:Canal"
		},
		"dbo:branchTo": {
		  "range": "dbo:AnatomicalStructure",
		  "domain": "dbo:AnatomicalStructure",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:formerChannel": {
		  "range": "xds:string",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:finalFlight": {
		  "comment": "date of final flight",
		  "range": "xds:date",
		  "domain": "dbo:Rocket"
		},
		"dbo:aircraftUser": {
		  "range": "dbo:Organisation",
		  "domain": "dbo:Aircraft",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:orbitalPeriod": {
		  "range": "xds:double",
		  "domain": "dbo:Planet"
		},
		"dbo:picture": {
		  "comment": "A picture of a thing.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:concretelyExpresses"
		  ]
		},
		"dbo:lessPopulousCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:Country",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:runwayDesignation": {
		  "range": "xds:string",
		  "domain": "dbo:Airport"
		},
		"dbo:presentMunicipality": {
		  "range": "dbo:Municipality",
		  "domain": "dbo:FormerMunicipality"
		},
		"dbo:foundingYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:typeCoordinate": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:templeYear": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:openAccessContent": {
		  "comment": "Availability of open access content.",
		  "range": "xds:string",
		  "domain": "dbo:PeriodicalLiterature"
		},
		"dbo:era": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isDescribedBy"
		  ]
		},
		"dbo:collection": {
		  "range": "xds:string",
		  "domain": "dbo:Museum"
		},
		"dbo:mainCharacter": {
		  "range": "dbo:Person",
		  "domain": "dbo:Work"
		},
		"dbo:budget": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:bloodGroup": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:starRating": {
		  "range": "xds:float",
		  "domain": "dbo:Hotel"
		},
		"dbo:demonym": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:nationalChampionship": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:ageRange": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:School"
		},
		"dbo:notes": {
		  "comment": "additional notes that better describe the entity.",
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:circulation": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:WrittenWork"
		},
		"dbo:Spacecraft/port2DockedTime": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:politicalPartyInLegislature": {
		  "comment": "Political party in the legislature (eg.: European People's Party in the European Parliament).",
		  "range": "dbo:PoliticalParty",
		  "domain": "dbo:Legislature",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:monarch": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"odesignp:precedes": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:followingEvent",
		    "dbo:nextEvent",
		    "dbo:nextMission"
		  ]
		},
		"dbo:routeEnd": {
		  "comment": "End of the route. This is where the route ends and, for U.S. roads, is either at the northern terminus or eastern terminus.",
		  "range": "dbo:RouteOfTransportation",
		  "domain": "dbo:RouteOfTransportation",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:bpnId": {
		  "comment": "Dutch project with material for 40,000 digitized biographies, including former colonies of the Netherlands.",
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:employer": {
		  "range": "dbo:Organisation",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:oclc": {
		  "comment": "Online Computer Library Center number",
		  "range": "xds:string",
		  "domain": "dbo:WrittenWork"
		},
		"dbo:broadcastStationClass": {
		  "range": "xds:string",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:prefect": {
		  "range": "dbo:Person",
		  "domain": "dbo:Politician",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"http://www.w3.org/1999/02/22-rdf-syntax-ns#type": {
		  "range": "http://dbpedia.org/ontology/",
		  "domain": "http://purl.org/vocommons/voaf#Vocabulary"
		},
		"dbo:purchasingPowerParityYear": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:output": {
		  "range": "xds:float",
		  "domain": "dbo:Place"
		},
		"dbo:jockey": {
		  "range": "dbo:Jockey",
		  "domain": "dbo:RaceHorse",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:free": {
		  "range": "xds:string",
		  "domain": "dbo:FictionalCharacter"
		},
		"dbo:connectsReferencedTo": {
		  "comment": "connects a referenced resource to another resource",
		  "range": "owl:Thing",
		  "domain": "dbo:Reference"
		},
		"dbo:contractor": {
		  "range": "dbo:Company",
		  "domain": "dbo:Skyscraper",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:amateurKo": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Boxer"
		},
		"dbo:languageFamily": {
		  "range": "owl:Thing",
		  "domain": "dbo:Language",
		  "superproperty": [
		    "odesignp:specializes"
		  ]
		},
		"dbo:flagLink": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfLawyers": {
		  "comment": "Number of lawyers or attorneys in the company.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:LawFirm"
		},
		"dbo:parliamentType": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"odesignp:hasConstituent": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:constructionMaterial",
		    "dbo:headAlloy",
		    "dbo:structuralSystem"
		  ]
		},
		"dbo:piercing": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:parish": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:primate": {
		  "range": "xds:string",
		  "domain": "dbo:ChristianDoctrine"
		},
		"dbo:broadcastArea": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Broadcaster",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:board": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:japanName": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:politicalPartyOfLeader": {
		  "comment": "The Political party of leader.",
		  "range": "dbo:PoliticalParty",
		  "domain": "dbo:Legislature",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:gnisCode": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:provCode": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:minorityLeader": {
		  "comment": "number of office holder",
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:generationUnits": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:flyingHours": {
		  "range": "xds:double",
		  "domain": "dbo:MilitaryUnit"
		},
		"dbo:picturesCommonsCategory": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:GrandPrix/distance": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:collectivityMinority": {
		  "range": "owl:Thing",
		  "domain": "dbo:Settlement"
		},
		"dbo:floorCount": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:Building"
		},
		"dbo:width": {
		  "range": "xds:double",
		  "domain": "owl:Thing",
		  "functional": true
		},
		"dbo:placeOfBurial": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Monarch",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:mainInterest": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:conceptualizes"
		  ]
		},
		"dbo:income": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:typeOfGrain": {
		  "range": "xds:string",
		  "domain": "dbo:Food"
		},
		"dbo:aitaCode": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:winsAtProTournaments": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:canonizedDate": {
		  "range": "xds:date",
		  "domain": "dbo:Saint"
		},
		"dbo:meetingCity": {
		  "range": "dbo:Settlement",
		  "domain": "dbo:Legislature",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:secondDriverCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:taste": {
		  "range": "xds:string",
		  "domain": "dbo:Food"
		},
		"dbo:province": {
		  "range": "dbo:Province",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:AutomobileEngine/cylinderBore": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:functionEndDate": {
		  "range": "xds:date",
		  "domain": "dbo:PersonFunction"
		},
		"dbo:lethalOnMice": {
		  "range": "xds:string",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:premiereYear": {
		  "comment": "Year the play was first performed.",
		  "range": "xds:gYear",
		  "domain": "dbo:Play",
		  "superproperty": [
		    "dbo:releaseYear"
		  ]
		},
		"dbo:incumbent": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:canonizedBy": {
		  "range": "dbo:Person",
		  "domain": "dbo:Saint",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:grossDomesticProductPurchasingPowerParityPerCapita": {
		  "range": "dbo:GrossDomesticProductPerCapita",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:routeStartLocation": {
		  "comment": "The start location of the route.",
		  "range": "dbo:Place",
		  "domain": "dbo:RouteOfTransportation",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:finalLostTeam": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:beatifiedBy": {
		  "range": "dbo:Person",
		  "domain": "dbo:Saint",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:productionCompany": {
		  "comment": "the company that produced the work e.g. Film, MusicalWork, Software",
		  "range": "dbo:Company",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:parentCompany": {
		  "range": "dbo:Company",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:mount": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:address": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:einecsNumber": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:presidentGeneralCouncil": {
		  "range": "dbo:Person",
		  "domain": "dbo:TermOfOffice",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:nationalTournament": {
		  "range": "dbo:Tournament",
		  "domain": "dbo:Person"
		},
		"dbo:oilSystem": {
		  "range": "owl:Thing",
		  "domain": "dbo:AutomobileEngine",
		  "superproperty": [
		    "odesignp:hasComponent"
		  ]
		},
		"dbo:artPatron": {
		  "comment": "An influential, wealthy person who supported an artist, craftsman, a scholar or a noble.. See also",
		  "range": "dbo:Artist",
		  "domain": "dbo:Agent",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:icaoAirlineCode": {
		  "comment": "ICAO designation for airline companies",
		  "range": "xds:string",
		  "domain": "dbo:Airline"
		},
		"dbo:poleDriver": {
		  "range": "dbo:Person",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:amsterdamCode": {
		  "range": "xds:string",
		  "domain": "dbo:Municipality"
		},
		"dbo:eptItm": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PokerPlayer"
		},
		"dbo:numberOfOffices": {
		  "comment": "Number of the company's offices.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:LawFirm"
		},
		"dbo:topFloorHeight": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Skyscraper"
		},
		"dbo:spouse": {
		  "comment": "the person they are married to",
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:originalDanseCompetition": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:firstMention": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:majorIsland": {
		  "range": "dbo:Island",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:gnl": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:Status": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:protectionStatus"
		  ]
		},
		"dbo:viceLeader": {
		  "range": "dbo:Person",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:throwingSide": {
		  "range": "xds:string",
		  "domain": "dbo:BaseballPlayer"
		},
		"dbo:eyeColour": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:victoryPercentageAsMgr": {
		  "range": "xds:double",
		  "domain": "dbo:Person"
		},
		"dbo:finnishName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:youthYears": {
		  "range": "xds:gYear",
		  "domain": "dbo:SoccerPlayer"
		},
		"dbo:passengersPerDay": {
		  "comment": "Number of passengers per day.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Infrastructure"
		},
		"dbo:principal": {
		  "range": "dbo:Person",
		  "domain": "dbo:EducationalInstitution",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:governmentPosition": {
		  "range": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:numberOfDoctoralStudents": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:University"
		},
		"dbo:areaOfCatchmentQuote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:operator": {
		  "range": "dbo:Organisation",
		  "domain": "dbo:Infrastructure",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:subdivisionLink": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:regency": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:launchPad": {
		  "range": "dbo:LaunchPad",
		  "domain": "dbo:SpaceMission",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"odesignp:isRoleOf": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:person"
		  ]
		},
		"dbo:AutomobileEngine/acceleration": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:academicAdvisor": {
		  "range": "dbo:Person",
		  "domain": "dbo:Scientist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:primeMinister": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:nssdcId": {
		  "range": "xds:string",
		  "domain": "dbo:SpaceStation"
		},
		"odesignp:isSpecializedBy": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:cultivatedVariety",
		    "dbo:hasVariant",
		    "dbo:hybrid",
		    "dbo:musicSubgenre",
		    "dbo:order",
		    "dbo:phylum"
		  ]
		},
		"dbo:architecturalStyle": {
		  "range": "owl:Thing",
		  "domain": "dbo:ArchitecturalStructure",
		  "superproperty": [
		    "odesignp:isDescribedBy"
		  ]
		},
		"dbo:capacityFactor": {
		  "range": "xds:float",
		  "domain": "dbo:PowerStation"
		},
		"dbo:flag": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:cmykCoordinateBlack": {
		  "range": "xds:integer",
		  "domain": "dbo:Colour"
		},
		"dbo:Galaxy/minimumTemperature": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:mozabiteName": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:leagueManager": {
		  "range": "dbo:SportsLeague",
		  "domain": "dbo:Person"
		},
		"dbo:Spacecraft/totalCargo": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:percentageAlcohol": {
		  "comment": "percentage of alcohol present in a beverage",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Beverage"
		},
		"dbo:cargoGas": {
		  "range": "xds:double",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:mostPopulatedCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:Country"
		},
		"dbo:numberOfRooms": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Hotel"
		},
		"dbo:numberOfBombs": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Aircraft"
		},
		"dbo:hasChannel": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:foundingDate": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:nextMission": {
		  "range": "dbo:SpaceMission",
		  "domain": "dbo:SpaceMission",
		  "superproperty": [
		    "dbo:followedBy",
		    "odesignp:precedes"
		  ]
		},
		"dbo:boilingPoint": {
		  "range": "xds:double",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:trainerYears": {
		  "range": "xds:gYear",
		  "domain": "dbo:SoccerPlayer"
		},
		"dbo:assets": {
		  "comment": "Assets and liabilities are part of a companis balance sheet. In financial accounting, assets are economic resources. Anything tangible or intangible that is capable of being owned or controlled to produce value and that is held to have positive economic value is considered an asset.",
		  "range": "xds:double",
		  "domain": "dbo:Company"
		},
		"dbo:suborbitalFlights": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:YearInSpaceflight"
		},
		"dbo:causeOfDeath": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:solventWithGoodSolubility": {
		  "range": "dbo:ChemicalSubstance",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:populationDensity": {
		  "range": "xds:double",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:residence": {
		  "comment": "Place of residence of a person.",
		  "range": "dbo:Place",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:comparable": {
		  "comment": "similar, unrelated rockets",
		  "range": "dbo:Rocket",
		  "domain": "dbo:Rocket",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:phonePrefixLabel": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:otherAppearances": {
		  "range": "dbo:OlympicResult",
		  "domain": "dbo:OlympicResult",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:governmentType": {
		  "comment": "broadly, the type of structure of its government",
		  "range": "dbo:GovernmentType",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:sire": {
		  "range": "dbo:Animal",
		  "domain": "dbo:Animal",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:highestState": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:areaOfCatchment": {
		  "range": "xds:double",
		  "domain": "dbo:Lake"
		},
		"dbo:mergedIntoParty": {
		  "range": "dbo:PoliticalParty",
		  "domain": "dbo:PoliticalParty",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:iso31661Code": {
		  "comment": "defines codes for the names of countries, dependent territories, and special areas of geographical interest",
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:areaRank": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:strength": {
		  "range": "xds:string",
		  "domain": "dbo:MilitaryConflict"
		},
		"dbo:Rocket/mass": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:highwaySystem": {
		  "comment": "the highway system that a route is part of",
		  "range": "owl:Thing",
		  "domain": "dbo:Road",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:capital": {
		  "range": "dbo:City",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "dbo:administrativeHeadCity",
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:mukhtar": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:maximumInclination": {
		  "range": "xds:float",
		  "domain": "dbo:LaunchPad"
		},
		"dbo:significantBuilding": {
		  "range": "dbo:Building",
		  "domain": "dbo:Architect",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:internationalAffiliation": {
		  "range": "owl:Thing",
		  "domain": "dbo:PoliticalParty",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:Work/runtime": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:associateEditor": {
		  "range": "dbo:Person",
		  "domain": "dbo:Newspaper",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:hairs": {
		  "range": "xds:string",
		  "domain": "dbo:FictionalCharacter"
		},
		"dbo:wptFinalTable": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PokerPlayer"
		},
		"dbo:dutchCOROPCode": {
		  "range": "xds:string",
		  "domain": "dbo:Region"
		},
		"dbo:dutchRKDCode": {
		  "range": "xds:string",
		  "domain": "dbo:Artist"
		},
		"dbo:world": {
		  "range": "http://www.w3.org/2004/02/skos/core#Concept",
		  "domain": "dbo:Person"
		},
		"dbo:previousEditor": {
		  "range": "dbo:Person",
		  "domain": "dbo:Magazine",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:chaplain": {
		  "range": "dbo:Person",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:capitalDistrict": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:swimmingStyle": {
		  "range": "xds:string",
		  "domain": "dbo:Swimmer"
		},
		"dbo:championInSingleMale": {
		  "comment": "winner of a competition in the single male session, to distinguish from the double session (as in tennis)",
		  "range": "dbo:Athlete",
		  "domain": "dbo:SportsEvent",
		  "superproperty": [
		    "dbo:championInSingle",
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:originalName": {
		  "comment": "The original name of the entity, e.g. film, settlement, etc.",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:transmission": {
		  "range": "xds:string",
		  "domain": "dbo:Automobile"
		},
		"dbo:epoch": {
		  "comment": "moment in time used as a referrence point for some time-vaying astronomical quantity",
		  "range": "xds:string",
		  "domain": "dbo:Planet"
		},
		"dbo:dateUse": {
		  "range": "xds:date",
		  "domain": "dbo:Canal"
		},
		"dbo:previousEntity": {
		  "range": "dbo:Place",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:millsCodeNLWindmotoren": {
		  "range": "xds:string",
		  "domain": "dbo:Mill"
		},
		"dbo:isPartOfAnatomicalStructure": {
		  "range": "dbo:AnatomicalStructure",
		  "domain": "dbo:Brain",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:childOrganisation": {
		  "range": "dbo:Organisation",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:musicalBand": {
		  "range": "dbo:Band",
		  "domain": "dbo:Single",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:cityLink": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:leader": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:frontierLength": {
		  "range": "xds:float",
		  "domain": "dbo:Place"
		},
		"dbo:areaWater": {
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:originalEndPoint": {
		  "range": "dbo:Place",
		  "domain": "dbo:Canal",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:albedo": {
		  "comment": "reflection coefficient",
		  "range": "xds:double",
		  "domain": "dbo:Planet"
		},
		"dbo:countySeat": {
		  "range": "owl:Thing",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:codeMunicipalMonument": {
		  "comment": "Code assigned to (Dutch) monuments at the municipal level, deemed to be of local value",
		  "range": "xds:string",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "dbo:code"
		  ]
		},
		"dbo:executiveHeadteacher": {
		  "range": "dbo:Person",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:sourceConfluenceMountain": {
		  "range": "dbo:Mountain",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:nearTo"
		  ]
		},
		"dbo:religiousHead": {
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:iataLocationIdentifier": {
		  "range": "xds:string",
		  "domain": "dbo:Infrastructure"
		},
		"dbo:codeNationalMonument": {
		  "comment": "Code assigned to (Dutch) monuments at the national level, deemed to be of national value",
		  "range": "xds:string",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "dbo:code"
		  ]
		},
		"dbo:winsAtJLPGA": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:endPoint": {
		  "range": "dbo:Place",
		  "domain": "dbo:Canal",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:hybrid": {
		  "comment": "Plants from which another plant (or cultivar) has been developed from",
		  "range": "dbo:Plant",
		  "domain": "dbo:Plant",
		  "superproperty": [
		    "odesignp:isSpecializedBy"
		  ]
		},
		"dbo:consecration": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"odesignp:overlaps": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:musicFusionGenre"
		  ]
		},
		"dbo:headteacher": {
		  "range": "dbo:Person",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:broadcastRepeater": {
		  "range": "xds:string",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:mergerDate": {
		  "range": "xds:date",
		  "domain": "dbo:Place"
		},
		"dbo:routeEndLocation": {
		  "comment": "The end location of the route.",
		  "range": "dbo:Place",
		  "domain": "dbo:RouteOfTransportation",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:binomialAuthority": {
		  "range": "owl:Thing",
		  "domain": "dbo:Species",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:boilerPressure": {
		  "range": "owl:Thing",
		  "domain": "dbo:Locomotive",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:italianName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:activeYearsStartYearMgr": {
		  "range": "xds:gYear",
		  "domain": "dbo:Person"
		},
		"dbo:plays": {
		  "range": "xds:string",
		  "domain": "dbo:TennisPlayer"
		},
		"dbo:subdivisions": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:cmykCoordinateMagenta": {
		  "range": "xds:integer",
		  "domain": "dbo:Colour"
		},
		"dbo:role": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:soccerLeagueSeason": {
		  "range": "dbo:SoccerLeagueSeason",
		  "domain": "dbo:SoccerLeagueSeason",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:lyrics": {
		  "range": "dbo:Person",
		  "domain": "dbo:Musical",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:cmpEvaDuration": {
		  "range": "xds:double",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:managingEditor": {
		  "range": "dbo:Person",
		  "domain": "dbo:Newspaper",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:recordedIn": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:MusicalWork",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:perCapitaIncomeRank": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:aircraftHelicopterAttack": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:goalsInLeague": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SoccerPlayer"
		},
		"dbo:continentRank": {
		  "comment": "Place of the building in the list of the highest buildings in the continent",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Skyscraper"
		},
		"dbo:secondCommander": {
		  "range": "dbo:Person",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:mouthPlace": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:numberOfVolumes": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:WrittenWork"
		},
		"dbo:mostDownPoint": {
		  "range": "dbo:Place",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:hand": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:nextEntity": {
		  "range": "dbo:Place",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:family": {
		  "range": "dbo:Species",
		  "domain": "dbo:Species",
		  "superproperty": [
		    "odesignp:specializes"
		  ]
		},
		"dbo:foundationDate": {
		  "range": "xds:date",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:sourceCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:Stream",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:projectKeyword": {
		  "comment": "A key word of the project.",
		  "range": "xds:string",
		  "domain": "dbo:Project"
		},
		"dbo:associatedBand": {
		  "range": "dbo:Band",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:massif": {
		  "range": "dbo:Place",
		  "domain": "dbo:SkiResort",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:nationalTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:port2DockedTime": {
		  "range": "xds:double",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:squadNumber": {
		  "comment": "The number that an athlete wears in a team sport.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SportsTeamMember"
		},
		"dbo:tessitura": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:externalOrnament": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:finalLost": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Athlete"
		},
		"dbo:currentLeague": {
		  "range": "dbo:SportsLeague",
		  "domain": "dbo:Athlete"
		},
		"dbo:recentWinner": {
		  "range": "dbo:Person",
		  "domain": "dbo:Race",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:footedness": {
		  "comment": "a preference to put one's left or right foot forward in surfing, wakeboarding, skateboarding, wakeskating, snowboarding and mountainboarding. The term is sometimes applied to the foot a footballer uses to kick.",
		  "range": "dbo:Person",
		  "domain": "dbo:Sport"
		},
		"dbo:builder": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:headLabel": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:statisticValue": {
		  "range": "xds:float",
		  "domain": "dbo:BaseballPlayer"
		},
		"dbo:Stream/dischargeAverage": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:canBaggageChecked": {
		  "comment": "Whether bags can be checked.",
		  "range": "xds:boolean",
		  "domain": "dbo:Station"
		},
		"dbo:museum": {
		  "range": "dbo:Museum",
		  "domain": "dbo:Artwork",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:internationally": {
		  "range": "xds:boolean",
		  "domain": "dbo:Company"
		},
		"dbo:mission": {
		  "range": "dbo:SpaceMission",
		  "domain": "dbo:Aircraft",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:originalMaximumBoatLength": {
		  "range": "xds:double",
		  "domain": "dbo:Canal"
		},
		"dbo:hopmanCup": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:teamCoached": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete"
		},
		"dbo:wikiPageRevisionLink": {
		  "comment": "Reserved for DBpedia.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:familyMember": {
		  "range": "dbo:Person",
		  "domain": "dbo:Family"
		},
		"dbo:vicePresident": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:draft": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:access": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:ChemicalSubstance/density": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:addressInRoad": {
		  "comment": "A building, organisation or other thing that is located in the road.",
		  "range": "owl:Thing",
		  "domain": "dbo:Road",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:cityType": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:origo": {
		  "range": "dbo:AnatomicalStructure",
		  "domain": "dbo:Muscle"
		},
		"dbo:radius_ly": {
		  "range": "xds:integer",
		  "domain": "dbo:Globularswarm"
		},
		"dbo:lastAppearance": {
		  "range": "owl:Thing",
		  "domain": "dbo:FictionalCharacter",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:issDockings": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SpaceShuttle"
		},
		"dbo:viceChancellor": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"odesignp:hasComponent": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:automobilePlatform",
		    "dbo:boiler",
		    "dbo:component",
		    "dbo:engine",
		    "dbo:fuelSystem",
		    "dbo:oilSystem"
		  ]
		},
		"dbo:coachSeason": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:aSide": {
		  "range": "xds:string",
		  "domain": "dbo:Single"
		},
		"dbo:numberOfGoldMedalsWon": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SportCompetitionResult"
		},
		"odesignp:isExpressedBy": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:denomination",
		    "dbo:localizationThumbnail",
		    "dbo:originalLanguage",
		    "dbo:programmingLanguage",
		    "dbo:thumbnail",
		    "dbo:uRN"
		  ]
		},
		"dbo:europeanAffiliation": {
		  "range": "owl:Thing",
		  "domain": "dbo:PoliticalParty",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:australiaOpenMixed": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:rocketFunction": {
		  "comment": "purpose of the rocket",
		  "range": "owl:Thing",
		  "domain": "dbo:Rocket",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:demographicsAsOf": {
		  "range": "xds:date",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:plant": {
		  "range": "dbo:Plant",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:placeOfWorship": {
		  "comment": "A religious administrative body needs to know which places of worship it",
		  "range": "dbo:Church",
		  "domain": "dbo:ClericalAdministrativeRegion",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:notableWine": {
		  "range": "owl:Thing",
		  "domain": "dbo:Grape",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:Planet/surfaceArea": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:headChef": {
		  "range": "dbo:Person",
		  "domain": "dbo:Restaurant",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:discontinued": {
		  "range": "xds:date",
		  "domain": "dbo:Beverage"
		},
		"dbo:followedBy": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:nextEvent",
		    "dbo:nextMission"
		  ]
		},
		"dbo:amateurFight": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Boxer"
		},
		"dbo:firstWin": {
		  "range": "dbo:GrandPrix",
		  "domain": "dbo:FormulaOneRacer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:cluster": {
		  "range": "owl:Thing",
		  "domain": "dbo:Galaxy",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:country": {
		  "comment": "The country where the thing is located.",
		  "range": "dbo:Country",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:humanDevelopmentIndexRank": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:projectObjective": {
		  "comment": "A defined objective of the project.",
		  "range": "xds:string",
		  "domain": "dbo:Project"
		},
		"dbo:heritageRegister": {
		  "comment": "registered in a heritage register : inventory of cultural properties, natural and man-made, tangible and intangible, movable and immovable, that are deemed to be of sufficient heritage value to be separately identified and recorded.",
		  "range": "owl:Thing",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:revenue": {
		  "range": "xds:double",
		  "domain": "dbo:Organisation"
		},
		"dbo:licenceNumber": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:bronzeMedalDouble": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:expedition": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:otherOccupation": {
		  "range": "dbo:PersonFunction",
		  "domain": "dbo:Person"
		},
		"dbo:tonyAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:fuel": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:ons": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:maximumElevation": {
		  "comment": "maximum elevation above the sea level",
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:iihfHof": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:autonomy": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:SpaceShuttle/timeInSpace": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:archipelago": {
		  "range": "owl:Thing",
		  "domain": "dbo:Atoll",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:leaderFunction": {
		  "range": "dbo:PersonFunction",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:shipCrew": {
		  "range": "dbo:Person",
		  "domain": "dbo:Ship",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:notableStudent": {
		  "range": "dbo:Person",
		  "domain": "dbo:Scientist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:neighbourhood": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:cornishName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:oldcode": {
		  "range": "xds:string",
		  "domain": "dbo:OlympicResult"
		},
		"dbo:AutomobileEngine/width": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:structuralSystem": {
		  "range": "owl:Thing",
		  "domain": "dbo:Building",
		  "superproperty": [
		    "odesignp:hasConstituent"
		  ]
		},
		"dbo:party": {
		  "range": "dbo:PoliticalParty",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:priceMoney": {
		  "range": "xds:double",
		  "domain": "dbo:SnookerPlayer"
		},
		"dbo:unknownOutcomes": {
		  "comment": "number of launches with unknown outcomes (or in progress)",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Rocket"
		},
		"dbo:nationalYears": {
		  "range": "xds:gYear",
		  "domain": "dbo:SoccerPlayer"
		},
		"dbo:launch": {
		  "range": "xds:date",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:winsAtLAGT": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:areaCode": {
		  "comment": "Area code for telephone numbers.",
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:crewSize": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:goldMedalist": {
		  "range": "dbo:Person",
		  "domain": "dbo:SportsEvent",
		  "superproperty": [
		    "dbo:Medalist",
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:silverMedalDouble": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:size_v": {
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:ColourName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:officialSchoolColour"
		  ]
		},
		"dbo:rating": {
		  "range": "xds:float",
		  "domain": "owl:Thing"
		},
		"dbo:otherFunction": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:danseScore": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:numberOfMatches": {
		  "range": "xds:integer",
		  "domain": "dbo:CareerStation"
		},
		"dbo:managementRegion": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:commander": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:presenter": {
		  "range": "dbo:Person",
		  "domain": "dbo:TelevisionShow",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:snowParkNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:border": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:Automobile/wheelbase": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:jureLanguage": {
		  "range": "dbo:Language",
		  "domain": "owl:Thing"
		},
		"dbo:riverMouth": {
		  "range": "dbo:BodyOfWater",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:lunarLandingSite": {
		  "range": "xds:string",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:winsAtAsia": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:productionEndDate": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:School/campusSize": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:bourgmestre": {
		  "range": "dbo:Person",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:grades": {
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:fdaUniiCode": {
		  "comment": "FDA Unique Ingredient Identifier (UNII) code for a DBpedia Drug",
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:disappearanceDate": {
		  "range": "xds:date",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:electionDate": {
		  "range": "xds:date",
		  "domain": "dbo:Person"
		},
		"dbo:alumni": {
		  "range": "dbo:Person",
		  "domain": "dbo:EducationalInstitution",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:model": {
		  "range": "xds:string",
		  "domain": "dbo:Sales"
		},
		"dbo:schoolPatron": {
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:proTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete"
		},
		"dbo:wimbledonSingle": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:trackLength": {
		  "comment": "Length of the track. Wikipedians usually do not differentiate between track length and line lenght.",
		  "range": "xds:double",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:voltageOfElectrification": {
		  "comment": "Voltage of the electrification system.",
		  "range": "xds:double",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:currentlyUsedFor": {
		  "comment": "Current use of the architectural structure, if it is currently being used as anything other than its original purpose.",
		  "range": "xds:string",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:interest": {
		  "range": "xds:string",
		  "domain": "dbo:SiteOfSpecialScientificInterest"
		},
		"dbo:termPeriod": {
		  "range": "dbo:TimePeriod",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasSetting"
		  ]
		},
		"dbo:ecNumber": {
		  "range": "xds:string",
		  "domain": "dbo:Biomolecule"
		},
		"dbo:subtitle": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:nationality": {
		  "range": "dbo:Country",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:railwayLineUsingTunnel": {
		  "comment": "Railway line that is using the tunnel.",
		  "range": "owl:Thing",
		  "domain": "dbo:RailwayTunnel",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:director": {
		  "comment": "A film director is a person who directs the making of a film.",
		  "range": "dbo:Person",
		  "domain": "dbo:Film",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:previousInfrastructure": {
		  "range": "dbo:Infrastructure",
		  "domain": "dbo:Infrastructure",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:hasAbsorbedMunicipality": {
		  "range": "dbo:FormerMunicipality",
		  "domain": "dbo:Municipality"
		},
		"dbo:drama": {
		  "range": "dbo:Drama",
		  "domain": "dbo:FictionalCharacter",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:chromosome": {
		  "range": "xds:string",
		  "domain": "dbo:Protein"
		},
		"dbo:modelStartDate": {
		  "range": "xds:date",
		  "domain": "dbo:MeanOfTransportation"
		},
		"dbo:numberOfNewlyIntroducedSports": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Olympics"
		},
		"dbo:numberBuilt": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Aircraft"
		},
		"dbo:endYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:chairman": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:grossDomesticProductNominalPerCapita": {
		  "range": "dbo:GrossDomesticProductPerCapita",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:award": {
		  "range": "dbo:Award",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:Weapon/weight": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:managementElevation": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:overallRecord": {
		  "range": "xds:string",
		  "domain": "dbo:CollegeCoach"
		},
		"dbo:mythology": {
		  "range": "owl:Thing",
		  "domain": "dbo:MythologicalFigure"
		},
		"dbo:khlDraftTeam": {
		  "range": "dbo:HockeyTeam",
		  "domain": "dbo:IceHockeyPlayer"
		},
		"dbo:rival": {
		  "range": "dbo:School",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:council": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:alternativeTitle": {
		  "comment": "The alternative title attributed to a work",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:Software/fileSize": {
		  "comment": "size of a file or software",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:arrestDate": {
		  "range": "xds:date",
		  "domain": "dbo:Person"
		},
		"dbo:areaDate": {
		  "range": "xds:date",
		  "domain": "dbo:Place"
		},
		"dbo:fauna": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:movement": {
		  "comment": "artistic movement or school with which artist is associated",
		  "range": "owl:Thing",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:juniorSeason": {
		  "range": "owl:Thing",
		  "domain": "dbo:Agent"
		},
		"dbo:relatedPlaces": {
		  "comment": "This property is to accommodate the list field that contains a list of, e.g., monuments in the same town",
		  "range": "dbo:List",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:unifies"
		  ]
		},
		"dbo:MeanOfTransportation/weight": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:iafdId": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:previousMission": {
		  "range": "dbo:SpaceMission",
		  "domain": "dbo:SpaceMission",
		  "superproperty": [
		    "odesignp:follows"
		  ]
		},
		"dbo:torqueOutput": {
		  "range": "xds:double",
		  "domain": "dbo:AutomobileEngine",
		  "functional": true
		},
		"dbo:facilityId": {
		  "range": "xds:integer",
		  "domain": "dbo:RadioStation"
		},
		"dbo:organSystem": {
		  "comment": "the organ system that a anatomical structure belongs to",
		  "range": "dbo:AnatomicalStructure",
		  "domain": "dbo:AnatomicalStructure",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:podiums": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:FormulaOneRacer"
		},
		"dbo:typeOfYeast": {
		  "range": "xds:string",
		  "domain": "dbo:Food"
		},
		"dbo:municipalityAbsorbedBy": {
		  "range": "dbo:Municipality",
		  "domain": "dbo:FormerMunicipality"
		},
		"dbo:foundingPerson": {
		  "range": "dbo:Person",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"odesignp:isDescribedBy": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:architecturalStyle",
		    "dbo:astrologicalSign",
		    "dbo:bodyStyle",
		    "dbo:discipline",
		    "dbo:era",
		    "dbo:field",
		    "dbo:knownFor",
		    "dbo:license",
		    "dbo:skills"
		  ]
		},
		"dbo:nationalTournamentGold": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:skiPisteKilometre": {
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:militaryFunction": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:oldName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:finalLostDouble": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:astrologicalSign": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:isDescribedBy"
		  ]
		},
		"dbo:decommissioningDate": {
		  "range": "xds:date",
		  "domain": "dbo:Ship"
		},
		"dbo:killedBy": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:team": {
		  "range": "dbo:SportsTeam",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:distanceLaps": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:GrandPrix"
		},
		"dbo:worldTeamCup": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:Code": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:codeLandRegistry",
		    "dbo:codeMemorial",
		    "dbo:dutchMIPCode"
		  ]
		},
		"dbo:configuration": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:patronSaint": {
		  "range": "dbo:Person",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:particularSign": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:languageCode": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:ideology": {
		  "range": "dbo:Ideology",
		  "domain": "dbo:Agent",
		  "superproperty": [
		    "odesignp:conceptualizes"
		  ]
		},
		"dbo:uniprot": {
		  "range": "xds:string",
		  "domain": "dbo:Biomolecule"
		},
		"dbo:numberOfLaps": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:FormulaOneRacing"
		},
		"dbo:meshName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:symbol": {
		  "comment": "HUGO Gene Symbol",
		  "range": "xds:string",
		  "domain": "dbo:Biomolecule"
		},
		"dbo:shortProgScore": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:agglomerationPopulationYear": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:freeScoreCompetition": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:sourceConfluenceState": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:stationEvaDuration": {
		  "range": "xds:double",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:serviceModule": {
		  "range": "xds:string",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:bronzeMedalist": {
		  "range": "dbo:Person",
		  "domain": "dbo:SportsEvent",
		  "superproperty": [
		    "dbo:Medalist",
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:lastPublicationDate": {
		  "comment": "Date of the last publication.",
		  "range": "xds:date",
		  "domain": "dbo:WrittenWork"
		},
		"dbo:ascentDate": {
		  "range": "xds:gYear",
		  "domain": "dbo:Mountain"
		},
		"dbo:river": {
		  "range": "dbo:River",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:nearTo"
		  ]
		},
		"dbo:rankingsSingles": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:TennisPlayer"
		},
		"dbo:laterality": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:sisterNewspaper": {
		  "range": "dbo:Newspaper",
		  "domain": "dbo:Newspaper",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"odesignp:isPartOf": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:archipelago",
		    "dbo:battle",
		    "dbo:congressionalDistrict",
		    "dbo:continent",
		    "dbo:councilArea",
		    "dbo:daylightSavingTimeZone",
		    "dbo:deanery",
		    "dbo:department",
		    "dbo:diocese",
		    "dbo:district",
		    "dbo:division",
		    "dbo:educationSystem",
		    "dbo:federalState",
		    "dbo:foresterDistrict",
		    "dbo:geolocDepartment",
		    "dbo:governmentRegion",
		    "dbo:highwaySystem",
		    "dbo:intercommunality",
		    "dbo:isPartOfAnatomicalStructure",
		    "dbo:isPartOfMilitaryConflict",
		    "dbo:isPartOfWineRegion",
		    "dbo:jointCommunity",
		    "dbo:jurisdiction",
		    "dbo:lieutenancyArea",
		    "dbo:lowestState",
		    "dbo:metropolitanBorough",
		    "dbo:mountainRange",
		    "dbo:municipality",
		    "dbo:oldDistrict",
		    "dbo:oldProvince",
		    "dbo:organSystem",
		    "dbo:parish",
		    "dbo:prefecture",
		    "dbo:province",
		    "dbo:provinceLink",
		    "dbo:sheading",
		    "dbo:sovereignCountry"
		  ]
		},
		"dbo:newspaper": {
		  "range": "dbo:PeriodicalLiterature",
		  "domain": "dbo:Person"
		},
		"dbo:majorVolcano": {
		  "range": "owl:Thing",
		  "domain": "dbo:NaturalPlace",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:selibrId": {
		  "comment": "Authority data from the National Library of Sweden",
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:secondDriver": {
		  "range": "dbo:Person",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:AutomobileEngine/pistonStroke": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:waterwayThroughTunnel": {
		  "comment": "Waterway that goes through the tunnel.",
		  "range": "owl:Thing",
		  "domain": "dbo:WaterwayTunnel",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:decay": {
		  "range": "xds:date",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:humanDevelopmentIndex": {
		  "comment": "a composite statistic used to rank countries by level of \"human development\"",
		  "range": "dbo:HumanDevelopmentIndex",
		  "domain": "dbo:PopulatedPlace"
		},
		"odesignp:sameSettingAs": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:administrativeCenter",
		    "dbo:alongside",
		    "dbo:apcPresident",
		    "dbo:appointer",
		    "dbo:artPatron",
		    "dbo:athletics",
		    "dbo:authority",
		    "dbo:belgiumMergedSettlement",
		    "dbo:belgiumPoliticalMajority",
		    "dbo:belgiumReffBourgmestre",
		    "dbo:binomial",
		    "dbo:binomialAuthority",
		    "dbo:bourgmestre",
		    "dbo:causedBy",
		    "dbo:ceremonialCounty",
		    "dbo:chairLabel",
		    "dbo:child",
		    "dbo:childOrganisation",
		    "dbo:cinematography",
		    "dbo:citizenship",
		    "dbo:college",
		    "dbo:comic",
		    "dbo:commandant",
		    "dbo:company",
		    "dbo:comparable",
		    "dbo:connotation",
		    "dbo:construction",
		    "dbo:currency",
		    "dbo:dam",
		    "dbo:damsire",
		    "dbo:delegateMayor",
		    "dbo:disciple",
		    "dbo:education",
		    "dbo:elementAbove",
		    "dbo:entourage",
		    "dbo:father",
		    "dbo:firstOwner",
		    "dbo:firstPopularVote",
		    "dbo:founder",
		    "dbo:fuel",
		    "dbo:generalManager",
		    "dbo:government",
		    "dbo:governmentCountry",
		    "dbo:governmentMountain",
		    "dbo:governmentPlace",
		    "dbo:governmentPosition",
		    "dbo:grades",
		    "dbo:grandsire",
		    "dbo:heir",
		    "dbo:highestPoint",
		    "dbo:homeArena",
		    "dbo:homeStadium",
		    "dbo:honours",
		    "dbo:house",
		    "dbo:incumbent",
		    "dbo:influencedBy",
		    "dbo:keyPerson",
		    "dbo:landeshauptmann",
		    "dbo:languageRegulator",
		    "dbo:leader",
		    "dbo:league",
		    "dbo:lessPopulatedCountry",
		    "dbo:lessPopulousCountry",
		    "dbo:localAuthority",
		    "dbo:lounge",
		    "dbo:magazine",
		    "dbo:majorShrine",
		    "dbo:management",
		    "dbo:managementCountry",
		    "dbo:managementMountain",
		    "dbo:managementPlace",
		    "dbo:managementRegion",
		    "dbo:monarch",
		    "dbo:mother",
		    "dbo:namedAfter",
		    "dbo:nextEntity",
		    "dbo:nominee",
		    "dbo:organisation",
		    "dbo:orthologousGene",
		    "dbo:otherAppearances",
		    "dbo:owner",
		    "dbo:owningCompany",
		    "dbo:owningOrganisation",
		    "dbo:parent",
		    "dbo:parentCompany",
		    "dbo:parentMountainPeak",
		    "dbo:parentOrganisation",
		    "dbo:partner",
		    "dbo:pastor",
		    "dbo:patent",
		    "dbo:patron",
		    "dbo:patronSaint",
		    "dbo:placeOfWorship",
		    "dbo:precursor",
		    "dbo:predecessor",
		    "dbo:prefect",
		    "dbo:president",
		    "dbo:presidentGeneralCouncil",
		    "dbo:presidentRegionalCouncil",
		    "dbo:previousEditor",
		    "dbo:previousEntity",
		    "dbo:previousInfrastructure",
		    "dbo:previousWork",
		    "dbo:primeMinister",
		    "dbo:principal",
		    "dbo:provost",
		    "dbo:rector",
		    "dbo:regency",
		    "dbo:relatedMeanOfTransportation",
		    "dbo:relation",
		    "dbo:relative",
		    "dbo:religiousHeadLabel",
		    "dbo:religiousOrder",
		    "dbo:royalAnthem",
		    "dbo:runningMate",
		    "dbo:saint",
		    "dbo:schoolBoard",
		    "dbo:schoolPatron",
		    "dbo:secondCommander",
		    "dbo:secondLeader",
		    "dbo:secondPopularVote",
		    "dbo:secretaryGeneral",
		    "dbo:senator",
		    "dbo:service",
		    "dbo:servingRailwayLine",
		    "dbo:sibling",
		    "dbo:similar",
		    "dbo:sire",
		    "dbo:sisterCollege",
		    "dbo:sisterNewspaper",
		    "dbo:sisterStation",
		    "dbo:soccerLeagueSeason",
		    "dbo:soccerTournamentClosingSeason",
		    "dbo:soccerTournamentOpeningSeason",
		    "dbo:soccerTournamentThisSeason",
		    "dbo:splitFromParty",
		    "dbo:spokesperson",
		    "dbo:sportGoverningBody",
		    "dbo:spouse",
		    "dbo:stadium",
		    "dbo:starring",
		    "dbo:stateDelegate",
		    "dbo:storyEditor",
		    "dbo:stylisticOrigin",
		    "dbo:subsequentInfrastructure",
		    "dbo:subsequentWork",
		    "dbo:subsidiary",
		    "dbo:successor",
		    "dbo:summerAppearances",
		    "dbo:superintendent",
		    "dbo:tenant",
		    "dbo:thirdCommander",
		    "dbo:timeZone",
		    "dbo:tradeMark",
		    "dbo:trustee",
		    "dbo:twinCity",
		    "dbo:twinCountry",
		    "dbo:unitaryAuthority",
		    "dbo:usingCountry",
		    "dbo:variantOf",
		    "dbo:vehicle",
		    "dbo:veneratedIn",
		    "dbo:viceChancellor",
		    "dbo:viceLeader",
		    "dbo:viceLeaderParty",
		    "dbo:vicePresident",
		    "dbo:vicePrimeMinister",
		    "dbo:vicePrincipal",
		    "dbo:vicePrincipalLabel",
		    "dbo:voice",
		    "dbo:winterAppearances"
		  ]
		},
		"dbo:mainOrgan": {
		  "range": "owl:Thing",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:passengersUsedSystem": {
		  "comment": "System the passengers are using (from which the passenger statistics are).",
		  "range": "xds:string",
		  "domain": "dbo:Station"
		},
		"dbo:cmykCoordinateCyanic": {
		  "range": "xds:integer",
		  "domain": "dbo:Colour"
		},
		"dbo:hof": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:dateAgreement": {
		  "range": "xds:date",
		  "domain": "dbo:Place"
		},
		"dbo:railwayPlatforms": {
		  "comment": "Information on the type of platform(s) at the station.",
		  "range": "xds:string",
		  "domain": "dbo:Station"
		},
		"dbo:winsAtAlpg": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:codeProvincialMonument": {
		  "comment": "Code assigned to (Dutch) monuments at the provincial level, mostly for monuments in the countryside, or for waterworks",
		  "range": "xds:string",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "dbo:code"
		  ]
		},
		"dbo:ncaaTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete"
		},
		"dbo:announcedFrom": {
		  "range": "dbo:Place",
		  "domain": "dbo:Person"
		},
		"dbo:refpol": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:associateStar": {
		  "range": "dbo:Constellation",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:wptItm": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PokerPlayer"
		},
		"dbo:tribus": {
		  "range": "dbo:Species",
		  "domain": "dbo:Species"
		},
		"dbo:branchFrom": {
		  "range": "dbo:AnatomicalStructure",
		  "domain": "dbo:AnatomicalStructure",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:formationDate": {
		  "range": "xds:date",
		  "domain": "dbo:Organisation"
		},
		"dbo:numberOfOfficials": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:OlympicResult"
		},
		"odesignp:concretelyExpresses": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:picture"
		  ]
		},
		"dbo:creationYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:omim": {
		  "range": "xds:integer",
		  "domain": "dbo:Biomolecule"
		},
		"dbo:previousWork": {
		  "range": "dbo:Work",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:drainsFrom": {
		  "range": "dbo:AnatomicalStructure",
		  "domain": "dbo:AnatomicalStructure",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:senior": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:victoryAsMgr": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:regionalCouncil": {
		  "range": "dbo:TermOfOffice",
		  "domain": "dbo:Agent"
		},
		"dbo:scene": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:ccaState": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:selection": {
		  "comment": "when (or in which project) the person was selected to train as an astronaut",
		  "range": "owl:Thing",
		  "domain": "dbo:Astronaut",
		  "superproperty": [
		    "odesignp:hasSetting"
		  ]
		},
		"dbo:titleSingle": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:collaboration": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person"
		},
		"dbo:eventDate": {
		  "range": "xds:date",
		  "domain": "dbo:Place"
		},
		"dbo:isPeerReviewed": {
		  "comment": "In academia peer review is often used to determine an academic papers suitability for publication.",
		  "range": "xds:boolean",
		  "domain": "dbo:AcademicJournal"
		},
		"dbo:derivedWord": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:patent": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:landArea": {
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:firstFlight": {
		  "range": "dbo:SpaceMission",
		  "domain": "dbo:SpaceShuttle",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:soccerTournamentMostSteady": {
		  "range": "dbo:SoccerClub",
		  "domain": "dbo:SoccerTournament",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:localizationThumbnail": {
		  "range": "owl:Thing",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isExpressedBy"
		  ]
		},
		"dbo:rgbCoordinateGreen": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Colour"
		},
		"dbo:follows": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:synonym": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:hallOfFame": {
		  "range": "xds:string",
		  "domain": "dbo:IceHockeyPlayer"
		},
		"dbo:leaderName": {
		  "range": "dbo:Person",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:protectionStatus": {
		  "comment": "The sort of status that is granted to a protected Building or Monument. This is not about being protected or not, this is about the nature of the protection regime. E.g., in the Netherlands the protection status 'rijksmonument' points to more elaborate protection than other statuses.",
		  "range": "xds:string",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "dbo:Status"
		  ]
		},
		"dbo:literaryGenre": {
		  "comment": "A literary genre is a category of literary composition. Genres may be determined by literary technique, tone, content, or even (as in the case of fiction) length.",
		  "range": "owl:Thing",
		  "domain": "dbo:WrittenWork",
		  "superproperty": [
		    "dbo:genre",
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:diameter": {
		  "range": "xds:double",
		  "domain": "owl:Thing",
		  "functional": true
		},
		"dbo:policeName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:mentor": {
		  "comment": "A wise and trusted counselor or teacher",
		  "range": "dbo:Artist",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:homeport": {
		  "range": "dbo:Place",
		  "domain": "dbo:Ship",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:firstAscentPerson": {
		  "range": "dbo:Person",
		  "domain": "dbo:Mountain",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:damsire": {
		  "range": "dbo:Animal",
		  "domain": "dbo:Animal",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:freeProgScore": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:district": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:equity": {
		  "range": "xds:double",
		  "domain": "dbo:Company"
		},
		"dbo:numberOfMembers": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Legislature"
		},
		"dbo:headquarter": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:Planet/maximumTemperature": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:artisticFunction": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:majorShrine": {
		  "range": "owl:Thing",
		  "domain": "dbo:Saint",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:boxerStyle": {
		  "range": "dbo:BoxingStyle",
		  "domain": "dbo:Boxer"
		},
		"dbo:leadTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete"
		},
		"dbo:teamPoint": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Athlete"
		},
		"dbo:range": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:place": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:MilitaryConflict",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:conservationStatus": {
		  "range": "xds:string",
		  "domain": "dbo:Species"
		},
		"dbo:currencyCode": {
		  "comment": "ISO 4217 currency designators.",
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:visitorsTotal": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:sovereignCountry": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:careerStation": {
		  "comment": "this property links to a step in the career of a person, e.g. a soccer player, holding information on the time span, matches and goals he or she achieved at a club.",
		  "range": "dbo:CareerStation",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasSetting"
		  ]
		},
		"dbo:names": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:rolandGarrosMixed": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:endowment": {
		  "range": "xds:double",
		  "domain": "dbo:Organisation"
		},
		"dbo:domain": {
		  "range": "owl:Thing",
		  "domain": "dbo:Species",
		  "superproperty": [
		    "odesignp:specializes"
		  ]
		},
		"dbo:case": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:cosparId": {
		  "comment": "Described at http://en.wikipedia.org/wiki/International_Designator",
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:fastestDriver": {
		  "range": "dbo:Person",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:engineType": {
		  "range": "owl:Thing",
		  "domain": "dbo:MeanOfTransportation",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:icdo": {
		  "range": "xds:string",
		  "domain": "dbo:Disease"
		},
		"dbo:Spacecraft/cargoWater": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:failedLaunches": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:origin": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:individualisedGnd": {
		  "comment": "GND (Gemeinsame Normdatei) is an international authority file for the organisation of personal names, subject headings and corporate bodies from catalogues. It is used mainly for documentation in libraries and archives. The GND is managed by the German National Library in cooperation with various library networks. The GND falls under the Creative Commons Zero(CC0) license.",
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:sardinianName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:latestReleaseDate": {
		  "range": "xds:date",
		  "domain": "dbo:Software",
		  "functional": true
		},
		"dbo:deathDate": {
		  "range": "xds:date",
		  "domain": "dbo:Person",
		  "functional": true
		},
		"dbo:PopulatedPlace/populationDensity": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:draftRound": {
		  "range": "xds:string",
		  "domain": "dbo:GridironFootballPlayer"
		},
		"dbo:deathAge": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:denomination": {
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:isExpressedBy"
		  ]
		},
		"dbo:vicePrincipalLabel": {
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:riverBranch": {
		  "range": "dbo:River",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:motto": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfCountries": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:AdministrativeRegion"
		},
		"dbo:municipality": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:sportDiscipline": {
		  "comment": "the sport discipline the athlete practices, e.g. Diving, or that a board member of a sporting club is focussing at",
		  "range": "dbo:Sport",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:flagBorder": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:distributingLabel": {
		  "range": "dbo:RecordLabel",
		  "domain": "dbo:RecordLabel",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:thirdDriver": {
		  "range": "dbo:Person",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:criteria": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:supplementalDraftYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:GridironFootballPlayer"
		},
		"dbo:nobelLaureates": {
		  "range": "dbo:Person",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:localPhonePrefix": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:landskap": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:worldTournamentSilver": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:partialFailedLaunches": {
		  "comment": "total number of launches resulting in partial failure",
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfCapitalDeputies": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:depthQuote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:giniCoefficientCategory": {
		  "range": "owl:Thing",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:education": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:functionStartDate": {
		  "range": "xds:date",
		  "domain": "dbo:PersonFunction"
		},
		"dbo:numberOfVineyards": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:WineRegion"
		},
		"dbo:militaryUnit": {
		  "comment": "For persons who are not notable as commanding officers, the unit (company, battalion, regiment, etc.) in which they served.",
		  "range": "dbo:MilitaryUnit",
		  "domain": "dbo:MilitaryPerson",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:titleLanguage": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:deFactoLanguage": {
		  "range": "dbo:Language",
		  "domain": "owl:Thing"
		},
		"dbo:keyPerson": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:commandant"
		  ],
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:fileExtension": {
		  "range": "xds:string",
		  "domain": "dbo:File"
		},
		"dbo:cityRank": {
		  "comment": "Place of the building in the list of the highest buildings in the city",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Skyscraper"
		},
		"dbo:amateurDefeat": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Boxer"
		},
		"dbo:numberOfCounties": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:abstract": {
		  "comment": "Reserved for DBpedia.",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfIntercommunality": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Department"
		},
		"dbo:museumType": {
		  "comment": "This property has been added  because 'buildingType' is much more about the place, whereas 'museumType' is about the way the place is being (or:was) used",
		  "range": "owl:Thing",
		  "domain": "dbo:Museum",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:port1": {
		  "comment": "first docking port of a spacecraft",
		  "range": "owl:Thing",
		  "domain": "dbo:Spacecraft",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:playerInTeam": {
		  "comment": "A person playing for the sports team.",
		  "range": "dbo:Person",
		  "domain": "dbo:SportsTeam",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:port2": {
		  "comment": "second docking port of a spacecraft",
		  "range": "owl:Thing",
		  "domain": "dbo:Spacecraft",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:fastestDriverTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:nflCode": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:statisticYear": {
		  "range": "xds:date",
		  "domain": "dbo:BaseballPlayer"
		},
		"dbo:maximumDischarge": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:abbeychurchBlessingCharge": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"odesignp:coparticipatesWith": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:academicAdvisor",
		    "dbo:academyAward",
		    "dbo:actingHeadteacher",
		    "dbo:administrativeCollectivity",
		    "dbo:affiliation",
		    "dbo:afiAward",
		    "dbo:aircraftAttack",
		    "dbo:aircraftBomber",
		    "dbo:aircraftElectronic",
		    "dbo:aircraftFighter",
		    "dbo:aircraftHelicopter",
		    "dbo:aircraftHelicopterAttack",
		    "dbo:aircraftHelicopterCargo",
		    "dbo:aircraftHelicopterMultirole",
		    "dbo:aircraftHelicopterObservation",
		    "dbo:aircraftHelicopterTransport",
		    "dbo:aircraftHelicopterUtility",
		    "dbo:aircraftInterceptor",
		    "dbo:aircraftPatrol",
		    "dbo:aircraftRecon",
		    "dbo:aircraftTrainer",
		    "dbo:aircraftTransport",
		    "dbo:aircraftUser",
		    "dbo:album",
		    "dbo:almaMater",
		    "dbo:alumni",
		    "dbo:americanComedyAward",
		    "dbo:animator",
		    "dbo:anthem",
		    "dbo:architect",
		    "dbo:architectualBureau",
		    "dbo:arielAward",
		    "dbo:artery",
		    "dbo:artist",
		    "dbo:assistantPrincipal",
		    "dbo:associate",
		    "dbo:associateEditor",
		    "dbo:associatedAct",
		    "dbo:associatedRocket",
		    "dbo:associationOfLocalGovernment",
		    "dbo:author",
		    "dbo:availableSmartCard",
		    "dbo:award",
		    "dbo:baftaAward",
		    "dbo:basedOn",
		    "dbo:beatifiedBy",
		    "dbo:beatifiedPlace",
		    "dbo:billed",
		    "dbo:blockAlloy",
		    "dbo:brand",
		    "dbo:breeder",
		    "dbo:britishComedyAwards",
		    "dbo:builder",
		    "dbo:canonizedBy",
		    "dbo:canonizedPlace",
		    "dbo:ceo",
		    "dbo:cesarAward",
		    "dbo:chairman",
		    "dbo:chairperson",
		    "dbo:chancellor",
		    "dbo:channel",
		    "dbo:chaplain",
		    "dbo:chef",
		    "dbo:chiefEditor",
		    "dbo:choreographer",
		    "dbo:clubsRecordGoalscorer",
		    "dbo:coExecutiveProducer",
		    "dbo:coProducer",
		    "dbo:coach",
		    "dbo:coachedTeam",
		    "dbo:commandStructure",
		    "dbo:commander",
		    "dbo:compiler",
		    "dbo:composer",
		    "dbo:computingInput",
		    "dbo:computingMedia",
		    "dbo:computingPlatform",
		    "dbo:contractor",
		    "dbo:coolingSystem",
		    "dbo:costumeDesigner",
		    "dbo:countryOrigin",
		    "dbo:coverArtist",
		    "dbo:cpu",
		    "dbo:creativeDirector",
		    "dbo:creator",
		    "dbo:creatorOfDish",
		    "dbo:crew",
		    "dbo:curator",
		    "dbo:currentPartner",
		    "dbo:currentProduction",
		    "dbo:custodian",
		    "dbo:dean",
		    "dbo:deathCause",
		    "dbo:deputy",
		    "dbo:designCompany",
		    "dbo:designer",
		    "dbo:destination",
		    "dbo:developer",
		    "dbo:director",
		    "dbo:discoverer",
		    "dbo:distributingCompany",
		    "dbo:distributingLabel",
		    "dbo:distributor",
		    "dbo:doctoralAdvisor",
		    "dbo:doctoralStudent",
		    "dbo:dubber",
		    "dbo:editing",
		    "dbo:editor",
		    "dbo:emmyAward",
		    "dbo:endingTheme",
		    "dbo:enemy",
		    "dbo:engineer",
		    "dbo:executiveHeadteacher",
		    "dbo:executiveProducer",
		    "dbo:explorer",
		    "dbo:filmFareAward",
		    "dbo:firstAscentPerson",
		    "dbo:firstLaunchRocket",
		    "dbo:firstLeader",
		    "dbo:flagBearer",
		    "dbo:formerChoreographer",
		    "dbo:formerCoach",
		    "dbo:formerPartner",
		    "dbo:foundedBy",
		    "dbo:foundingPerson",
		    "dbo:fourthCommander",
		    "dbo:gameArtist",
		    "dbo:gameEngine",
		    "dbo:gaudiAward",
		    "dbo:geminiAward",
		    "dbo:goldenCalfAward",
		    "dbo:goldenGlobeAward",
		    "dbo:goldenRaspberryAward",
		    "dbo:governingBody",
		    "dbo:governor",
		    "dbo:governorGeneral",
		    "dbo:goyaAward",
		    "dbo:grammyAward",
		    "dbo:ground",
		    "dbo:head",
		    "dbo:headChef",
		    "dbo:headteacher",
		    "dbo:highschool",
		    "dbo:iftaAward",
		    "dbo:illustrator",
		    "dbo:influenced",
		    "dbo:instrument",
		    "dbo:jockey",
		    "dbo:language",
		    "dbo:lastLaunchRocket",
		    "dbo:laurenceOlivierAward",
		    "dbo:leaderFunction",
		    "dbo:leaderName",
		    "dbo:leaderParty",
		    "dbo:lieutenant",
		    "dbo:lyrics",
		    "dbo:maintainedBy",
		    "dbo:manager",
		    "dbo:managerClub",
		    "dbo:managingEditor",
		    "dbo:manufacturer",
		    "dbo:march",
		    "dbo:mayor",
		    "dbo:mentor",
		    "dbo:mergedIntoParty",
		    "dbo:musicBy",
		    "dbo:musicComposer",
		    "dbo:musicalArtist",
		    "dbo:musicalBand",
		    "dbo:musicians",
		    "dbo:naacpImageAward",
		    "dbo:narrator",
		    "dbo:nationalFilmAward",
		    "dbo:nobelLaureates",
		    "dbo:notableCommander",
		    "dbo:notableIdea",
		    "dbo:notableStudent",
		    "dbo:notableWine",
		    "dbo:notableWork",
		    "dbo:officerInCharge",
		    "dbo:officialLanguage",
		    "dbo:olivierAward",
		    "dbo:operatedBy",
		    "dbo:operator",
		    "dbo:opponent",
		    "dbo:painter",
		    "dbo:peabodyAward",
		    "dbo:performer",
		    "dbo:photographer",
		    "dbo:polishFilmAward",
		    "dbo:portrayer",
		    "dbo:premierePlace",
		    "dbo:principalEngineer",
		    "dbo:producer",
		    "dbo:produces",
		    "dbo:product",
		    "dbo:productionCompany",
		    "dbo:promotion",
		    "dbo:publisher",
		    "dbo:raceHorse",
		    "dbo:railwayLineUsingTunnel",
		    "dbo:railwayRollingStock",
		    "dbo:rebuilder",
		    "dbo:recordLabel",
		    "dbo:recordedIn",
		    "dbo:regionServed",
		    "dbo:rival",
		    "dbo:rocket",
		    "dbo:school",
		    "dbo:screenActorsGuildAward",
		    "dbo:setDesigner",
		    "dbo:shipCrew",
		    "dbo:significantBuilding",
		    "dbo:significantDesign",
		    "dbo:significantProject",
		    "dbo:specialEffects",
		    "dbo:sportCountry",
		    "dbo:student",
		    "dbo:supplies",
		    "dbo:tonyAward",
		    "dbo:trainer",
		    "dbo:trainerClub",
		    "dbo:training",
		    "dbo:translator",
		    "dbo:university",
		    "dbo:writer"
		  ]
		},
		"dbo:reign": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:wsopWinYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:PokerPlayer"
		},
		"dbo:Medalist": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:bronzeMedalist",
		    "dbo:goldMedalist",
		    "dbo:silverMedalist"
		  ]
		},
		"dbo:SpaceMission/lunarSampleMass": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:sharingOutPopulationYear": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:company": {
		  "range": "dbo:Organisation",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:producer": {
		  "comment": "The producer of the creative work.",
		  "range": "dbo:Agent",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:produces": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:codeSettlement": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement",
		  "subproperty": [
		    "dbo:inseeCode"
		  ]
		},
		"dbo:academicDiscipline": {
		  "comment": "An academic discipline, or field of study, is a branch of knowledge that is taught and researched at the college or university level. Disciplines are defined (in part), and recognized by the academic journals in which research is published, and the learned societies and academic departments or faculties to which their practitioners belong.",
		  "range": "owl:Thing",
		  "domain": "dbo:AcademicJournal",
		  "superproperty": [
		    "odesignp:isAbout"
		  ]
		},
		"dbo:maximumDepth": {
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:dean": {
		  "range": "dbo:Person",
		  "domain": "dbo:EducationalInstitution",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:minority": {
		  "range": "dbo:Group",
		  "domain": "dbo:Settlement"
		},
		"dbo:escalafon": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:eyes": {
		  "range": "xds:string",
		  "domain": "dbo:FictionalCharacter"
		},
		"dbo:birthSign": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:titleDate": {
		  "range": "xds:date",
		  "domain": "dbo:Person"
		},
		"dbo:followingEvent": {
		  "range": "dbo:Event",
		  "domain": "dbo:Event",
		  "superproperty": [
		    "odesignp:precedes"
		  ]
		},
		"dbo:garrison": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:AutomobileEngine/topSpeed": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:reportingMark": {
		  "comment": "A reporting mark is a two-, three-, or four-letter alphabetic code used to identify owners or lessees of rolling stock and other equipment used on the North American railroad network.",
		  "range": "xds:string",
		  "domain": "dbo:PublicTransitSystem"
		},
		"dbo:brainInfoType": {
		  "range": "xds:string",
		  "domain": "dbo:Brain"
		},
		"dbo:manager": {
		  "range": "dbo:Person",
		  "domain": "dbo:SportsTeam",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:nationalSelection": {
		  "range": "owl:Thing",
		  "domain": "dbo:Agent"
		},
		"dbo:distanceToBelfast": {
		  "range": "xds:double",
		  "domain": "dbo:Settlement"
		},
		"dbo:neighboringMunicipality": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:nearTo"
		  ]
		},
		"dbo:lessPopulatedCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:Country",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:openingTheme": {
		  "range": "dbo:Work",
		  "domain": "dbo:TelevisionShow",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:winsAtNWIDE": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:volcanicActivity": {
		  "range": "xds:string",
		  "domain": "dbo:Island"
		},
		"dbo:lowerEarthOrbitPayload": {
		  "comment": "Payload mass in a typical Low Earth orbit",
		  "range": "xds:double",
		  "domain": "dbo:Rocket"
		},
		"dbo:wineProduced": {
		  "range": "owl:Thing",
		  "domain": "dbo:WineRegion",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:coastLine": {
		  "range": "xds:double",
		  "domain": "dbo:Settlement"
		},
		"dbo:competition": {
		  "range": "dbo:Event",
		  "domain": "dbo:SportCompetitionResult",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:soccerTournamentMostSuccesfull": {
		  "range": "dbo:SoccerClub",
		  "domain": "dbo:SoccerTournament",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:baftaAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:novel": {
		  "range": "dbo:Novel",
		  "domain": "dbo:FictionalCharacter",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:port1DockedTime": {
		  "range": "xds:double",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:deme": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:distanceToLondon": {
		  "range": "xds:double",
		  "domain": "dbo:Settlement"
		},
		"dbo:refseqprotein": {
		  "range": "xds:string",
		  "domain": "dbo:Biomolecule"
		},
		"dbo:noteOnPlaceOfBurial": {
		  "range": "xds:string",
		  "domain": "dbo:MilitaryPerson"
		},
		"dbo:nationalTournamentSilver": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:visitorsPerYear": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:iupacName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:totalPopulation": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:EthnicGroup"
		},
		"dbo:communityIsoCode": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "dbo:isoCode"
		  ]
		},
		"dbo:ChemicalSubstance/meltingPoint": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:ChemicalSubstance/boilingPoint": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:serviceEndDate": {
		  "range": "xds:date",
		  "domain": "dbo:MilitaryPerson"
		},
		"dbo:oldDistrict": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:editing": {
		  "range": "dbo:Person",
		  "domain": "dbo:Film",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:sharingOutArea": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:britishWins": {
		  "range": "http://www.w3.org/2004/02/skos/core#Concept",
		  "domain": "dbo:Person"
		},
		"dbo:endangeredSince": {
		  "range": "xds:date",
		  "domain": "dbo:Place"
		},
		"dbo:qatarClassic": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:Galaxy/meanTemperature": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:formerCoach": {
		  "range": "dbo:Person",
		  "domain": "dbo:FigureSkater",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:meanRadius": {
		  "range": "xds:double",
		  "domain": "dbo:Planet"
		},
		"dbo:numberOfProfessionals": {
		  "comment": "number of people who earns his living from a specified activity.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Activity"
		},
		"dbo:Galaxy/periapsis": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:programmingLanguage": {
		  "range": "owl:Thing",
		  "domain": "dbo:Software",
		  "superproperty": [
		    "odesignp:isExpressedBy"
		  ]
		},
		"dbo:musicalArtist": {
		  "range": "dbo:MusicalArtist",
		  "domain": "dbo:Single",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:finalPublicationDate": {
		  "comment": "Date of the final publication.",
		  "range": "xds:date",
		  "domain": "dbo:PeriodicalLiterature"
		},
		"dbo:episode": {
		  "range": "xds:string",
		  "domain": "dbo:FictionalCharacter"
		},
		"dbo:destination": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Airline",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:targetSpaceStation": {
		  "range": "dbo:SpaceStation",
		  "domain": "dbo:Spacecraft",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:cashPrice": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:votesFor": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:StatedResolution"
		},
		"dbo:europeanUnionEntranceDate": {
		  "range": "xds:date",
		  "domain": "dbo:Country"
		},
		"dbo:closingFilm": {
		  "range": "dbo:Film",
		  "domain": "dbo:FilmFestival",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:minorityFloorLeader": {
		  "comment": "number of office holder",
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:wingspan": {
		  "range": "xds:double",
		  "domain": "dbo:Aircraft"
		},
		"dbo:blackLongDistancePisteNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:activeYearsEndDateMgr": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:messierName": {
		  "comment": "Name for Messier objects",
		  "range": "xds:string",
		  "domain": "dbo:CelestialBody"
		},
		"dbo:distanceToCharingCross": {
		  "range": "xds:double",
		  "domain": "dbo:Settlement"
		},
		"dbo:silverMedalist": {
		  "range": "dbo:Person",
		  "domain": "dbo:SportsEvent",
		  "superproperty": [
		    "dbo:Medalist",
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:gridReference": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:phonePrefix": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:routeTypeAbbreviation": {
		  "comment": "The route type abbreviation (eg.: I for Interstate, M for Motorway or NJ for New Jersey Route).",
		  "range": "xds:string",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:bodyDiscovered": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:goldMedalMixed": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:kindOfCoordinate": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:Spacecraft/totalMass": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:doctoralStudent": {
		  "range": "dbo:Person",
		  "domain": "dbo:Scientist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:winsAtSun": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:currentRank": {
		  "range": "xds:integer",
		  "domain": "dbo:SnookerPlayer"
		},
		"dbo:imposedDanseScore": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:mapDescription": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:peopleName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:isniId": {
		  "comment": "ISNI is a method for uniquely identifying the public identities of contributors to media content such as books, TV programmes, and newspaper articles.",
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:pluviometry": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:endYearOfInsertion": {
		  "range": "xds:gYear",
		  "domain": "dbo:AutomobileEngine"
		},
		"dbo:areaLand": {
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:netIncome": {
		  "range": "xds:double",
		  "domain": "dbo:Company",
		  "functional": true
		},
		"dbo:otherChannel": {
		  "range": "xds:string",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:avifaunaPopulation": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:numberOfFilms": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:AdultActor"
		},
		"dbo:Galaxy/temperature": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:duration": {
		  "comment": "The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format",
		  "range": "xds:double",
		  "domain": "dbo:Event"
		},
		"dbo:numberOfPeopleAttending": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Event"
		},
		"dbo:orcidId": {
		  "comment": "Authority data on researchers, academics, etc. The ID range has been defined as a subset of the forthcoming ISNI range.",
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:hasNaturalBust": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:suppreddedDate": {
		  "range": "xds:date",
		  "domain": "dbo:Saint"
		},
		"dbo:administrativeDistrict": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Settlement"
		},
		"dbo:iucnCategory": {
		  "range": "xds:string",
		  "domain": "dbo:ProtectedArea"
		},
		"dbo:MeanOfTransportation/width": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:bibsysId": {
		  "comment": "BIBSYS is a supplier of library and information systems for all Norwegian university Libraries, the National Library of Norway, college libraries, and a number of research libraries and institutions.",
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:municipalityType": {
		  "range": "xds:string",
		  "domain": "dbo:Municipality"
		},
		"dbo:Lake/volume": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:statusManager": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:ethnicGroup": {
		  "range": "dbo:EthnicGroup",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:deputy": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:areaRural": {
		  "range": "xds:double",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:Drug/boilingPoint": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:juniorYearsStartYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:Person"
		},
		"dbo:depictionDescription": {
		  "comment": "This property can be used to map image captions from Infoboxes",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:setupTime": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"odesignp:hasRegion": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:collectionSize",
		    "dbo:numberOfClassrooms"
		  ]
		},
		"dbo:olympicOathSwornByAthlete": {
		  "range": "dbo:Person",
		  "domain": "dbo:Olympics",
		  "superproperty": [
		    "dbo:olympicOathSwornBy",
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:millsCodeDutch": {
		  "range": "xds:string",
		  "domain": "dbo:Mill"
		},
		"dbo:roofHeight": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Skyscraper"
		},
		"dbo:landeshauptmann": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:illiteracy": {
		  "range": "xds:float",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:signature": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:otherMedia": {
		  "range": "dbo:PeriodicalLiterature",
		  "domain": "dbo:Person"
		},
		"dbo:pictureFormat": {
		  "range": "owl:Thing",
		  "domain": "dbo:Broadcaster",
		  "superproperty": [
		    "odesignp:hasQuality"
		  ]
		},
		"dbo:wsopWristband": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PokerPlayer"
		},
		"dbo:relief": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:shuttle": {
		  "range": "dbo:SpaceShuttle",
		  "domain": "dbo:SpaceMission",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:Astronaut/timeInSpace": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:starring": {
		  "range": "dbo:Actor",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:winsAtOtherTournaments": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:goldenCalfAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Actor",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:departmentPosition": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:similar": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:wikiPageInterLanguageLink": {
		  "comment": "Reserved for DBpedia.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:unlcCode": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:chancellor": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:attorneyGeneral": {
		  "comment": "Public attorney",
		  "range": "dbo:Person",
		  "domain": "dbo:LegalCase",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:volcanoId": {
		  "range": "xds:string",
		  "domain": "dbo:Island"
		},
		"dbo:explorer": {
		  "range": "owl:Thing",
		  "domain": "dbo:Galaxy",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:alias": {
		  "range": "xds:string",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "dbo:alternativeName"
		  ]
		},
		"dbo:linkedTo": {
		  "range": "dbo:Place",
		  "domain": "dbo:SkiResort",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:selectionPoint": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Athlete"
		},
		"dbo:shipBeam": {
		  "comment": "The beam of a ship is its width at the widest point.",
		  "range": "xds:double",
		  "domain": "dbo:Ship"
		},
		"dbo:delegation": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:systemOfLaw": {
		  "comment": "A referral to the relevant system of law",
		  "range": "dbo:SystemOfLaw",
		  "domain": "dbo:LegalCase",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:existence": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:debut": {
		  "range": "xds:date",
		  "domain": "dbo:Wrestler"
		},
		"dbo:gun": {
		  "range": "xds:string",
		  "domain": "dbo:Aircraft"
		},
		"dbo:poleDriverTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:winsAtLET": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:portfolio": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:colourHexCode": {
		  "comment": "A colour represented by its hex code (e.g.: #FF0000 or #40E0D0).",
		  "range": "xds:string",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:awayColourHexCode",
		    "dbo:homeColourHexCode"
		  ]
		},
		"dbo:idNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:federalState": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:reference": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:routeJunction": {
		  "comment": "A junction or cross to another route.",
		  "range": "dbo:RouteOfTransportation",
		  "domain": "dbo:RouteOfTransportation",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:cannonNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:undraftedYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:GridironFootballPlayer"
		},
		"dbo:AutomobileEngine/weight": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:commissioner": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:locationIdentifier": {
		  "range": "xds:string",
		  "domain": "dbo:Airport"
		},
		"dbo:takePlace": {
		  "range": "dbo:Place",
		  "domain": "owl:Thing"
		},
		"dbo:homeStadium": {
		  "range": "dbo:Stadium",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:significantDesign": {
		  "range": "owl:Thing",
		  "domain": "dbo:Architect",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:aircraftAttack": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:municipalityCode": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:servingRailwayLine": {
		  "comment": "Railway services that serve the station.",
		  "range": "owl:Thing",
		  "domain": "dbo:Station",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:blueLongDistancePisteNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:opponent": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:gross": {
		  "range": "xds:double",
		  "domain": "dbo:Film"
		},
		"dbo:architect": {
		  "range": "dbo:Architect",
		  "domain": "dbo:ArchitecturalStructure",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:computingPlatform": {
		  "comment": "some sort of hardware architecture or software framework, that allows this software to run",
		  "range": "owl:Thing",
		  "domain": "dbo:Software",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:soccerTournamentThisSeason": {
		  "range": "dbo:SoccerTournament",
		  "domain": "dbo:SoccerTournament",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:introductionDate": {
		  "range": "xds:date",
		  "domain": "dbo:MeanOfTransportation"
		},
		"dbo:egafdId": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:highestPointIsland": {
		  "range": "xds:string",
		  "domain": "dbo:Island"
		},
		"dbo:grossDomesticProductAsOf": {
		  "range": "xds:date",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:legislativePeriodName": {
		  "comment": "The term of the on-going session (e.g.: \"40th Canadian Parliament\").",
		  "range": "xds:string",
		  "domain": "dbo:Legislature"
		},
		"dbo:premiereDate": {
		  "comment": "Date the play was first performed.",
		  "range": "xds:date",
		  "domain": "dbo:Play",
		  "superproperty": [
		    "dbo:releaseDate"
		  ]
		},
		"dbo:elevatorCount": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Building"
		},
		"dbo:position": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:vehicle": {
		  "comment": "vehicle that uses a specific automobile platform",
		  "range": "dbo:Automobile",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:relatedFunctions": {
		  "comment": "This property is to accommodate the list field that contains a list of related personFunctions a person holds or has held",
		  "range": "dbo:List",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:unifies"
		  ]
		},
		"dbo:listItemOf": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:conservationStatusSystem": {
		  "range": "xds:string",
		  "domain": "dbo:Species"
		},
		"dbo:landRegistryCode": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:draftLeague": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:endReign": {
		  "range": "http://www.w3.org/2004/02/skos/core#Concept",
		  "domain": "dbo:Person"
		},
		"dbo:creatorOfDish": {
		  "comment": "The person that creates (invents) the food (eg. Caesar Cardini is the creator of the Caesar salad).",
		  "range": "dbo:Person",
		  "domain": "dbo:Food",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:chain": {
		  "comment": "The chain of Hotels this instance is associated with.",
		  "range": "dbo:Company",
		  "domain": "dbo:Hotel",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:lengthReference": {
		  "range": "xds:string",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:authorityMandate": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:mirDockings": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SpaceShuttle"
		},
		"dbo:season": {
		  "range": "owl:Thing",
		  "domain": "dbo:Agent",
		  "superproperty": [
		    "odesignp:hasSetting"
		  ]
		},
		"dbo:coachedTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:CollegeCoach",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:subsystemLink": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:greekName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:continentalTournamentBronze": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:producedBy": {
		  "range": "dbo:Company",
		  "domain": "dbo:Film"
		},
		"dbo:pdb": {
		  "range": "xds:string",
		  "domain": "dbo:Protein"
		},
		"dbo:usSales": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Sales"
		},
		"dbo:careerPrizeMoney": {
		  "range": "xds:double",
		  "domain": "dbo:TennisPlayer"
		},
		"dbo:twinCity": {
		  "range": "dbo:Settlement",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:ist": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:GeopoliticalOrganisation/populationDensity": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:blazonLink": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:teamName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:frioulanName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:frequencyOfPublication": {
		  "comment": "The frequency of periodical publication (eg. Weekly, Bimonthly).",
		  "range": "xds:string",
		  "domain": "dbo:PeriodicalLiterature"
		},
		"dbo:start": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:characterInPlay": {
		  "comment": "Name of a character in play.",
		  "range": "xds:string",
		  "domain": "dbo:Play",
		  "subproperty": [
		    "dbo:chorusCharacterInPlay",
		    "dbo:muteCharacterInPlay"
		  ]
		},
		"dbo:nonFictionSubject": {
		  "comment": "The subject of a non-fiction book (e.g.: History, Biography, Cookbook, Climate change, ...).",
		  "range": "owl:Thing",
		  "domain": "dbo:Book",
		  "superproperty": [
		    "odesignp:isAbout"
		  ]
		},
		"dbo:mouthMountain": {
		  "range": "dbo:Mountain",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:pronunciation": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:governmentElevation": {
		  "range": "xds:double",
		  "domain": "dbo:Island"
		},
		"dbo:sharingOutName": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Settlement"
		},
		"dbo:density": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:otherFuelType": {
		  "range": "owl:Thing",
		  "domain": "dbo:PowerStation"
		},
		"dbo:climbUpNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:lunarSampleMass": {
		  "range": "xds:double",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:nrhpType": {
		  "comment": "Type of historic place as defined by the US National Park Service. For instance National Historic Landmark, National Monument or National Battlefield.",
		  "range": "owl:Thing",
		  "domain": "dbo:HistoricPlace",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:owningOrganisation": {
		  "range": "dbo:Organisation",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:goldMedalSingle": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:danseCompetition": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:constructionMaterial": {
		  "comment": "Construction material (eg. concrete, steel, iron, stone, brick, wood).",
		  "range": "owl:Thing",
		  "domain": "dbo:ArchitecturalStructure",
		  "superproperty": [
		    "odesignp:hasConstituent"
		  ]
		},
		"dbo:locationCountry": {
		  "comment": "Country the thing is located.",
		  "range": "dbo:Country",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "dbo:location",
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:olympicOathSwornBy": {
		  "range": "dbo:Person",
		  "domain": "dbo:Olympics",
		  "subproperty": [
		    "dbo:olympicOathSwornByAthlete",
		    "dbo:olympicOathSwornByJudge"
		  ],
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:otherServingLines": {
		  "comment": "Connecting services that serve the station such as bus, etc.",
		  "range": "xds:string",
		  "domain": "dbo:Station"
		},
		"dbo:namedByLanguage": {
		  "range": "dbo:Place",
		  "domain": "dbo:Place"
		},
		"dbo:taoiseach": {
		  "comment": "head of government of Ireland",
		  "range": "dbo:Person",
		  "domain": "owl:Thing"
		},
		"dbo:towerHeight": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:Building"
		},
		"dbo:nationalTeamYear": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:musicFusionGenre": {
		  "range": "dbo:MusicGenre",
		  "domain": "dbo:MusicGenre",
		  "superproperty": [
		    "odesignp:overlaps"
		  ]
		},
		"dbo:sisterStation": {
		  "range": "dbo:Broadcaster",
		  "domain": "dbo:Broadcaster",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:olympicGamesWins": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:amateurTitle": {
		  "range": "xds:string",
		  "domain": "dbo:Boxer"
		},
		"dbo:australiaOpenSingle": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:dorlandsPrefix": {
		  "range": "xds:string",
		  "domain": "dbo:AnatomicalStructure"
		},
		"dbo:state": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:numberOfSpans": {
		  "comment": "Number of spans or arches.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Bridge"
		},
		"dbo:albumRuntime": {
		  "range": "xds:double",
		  "domain": "dbo:Album"
		},
		"dbo:version": {
		  "range": "owl:Thing",
		  "domain": "dbo:MeanOfTransportation"
		},
		"dbo:numberOfVisitors": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:storyEditor": {
		  "range": "dbo:Person",
		  "domain": "dbo:TelevisionShow",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:fedCup": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:firstAppearance": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:parentOrganisation": {
		  "range": "dbo:Organisation",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:circuitLength": {
		  "range": "xds:double",
		  "domain": "dbo:FormulaOneRacing"
		},
		"dbo:managerYearsStartYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:mbaId": {
		  "comment": "MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public.",
		  "range": "xds:string",
		  "domain": "dbo:Artist"
		},
		"dbo:cesarAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:sourcePlace": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:jstor": {
		  "comment": "JSTOR number (short for Journal Storage) is a United States-based online system number for archiving academic journals.",
		  "range": "xds:string",
		  "domain": "dbo:AcademicJournal"
		},
		"dbo:startYearOfSales": {
		  "range": "xds:gYear",
		  "domain": "dbo:Sales"
		},
		"dbo:nonProfessionalCareer": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:populationTotal": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:kingdom": {
		  "comment": "In biology, kingdom (Latin: regnum, pl. regna) is a taxonomic rank, which is either the highest rank or in the more recent three-domain system, the rank below domain.",
		  "range": "owl:Thing",
		  "domain": "dbo:Species",
		  "superproperty": [
		    "odesignp:specializes"
		  ]
		},
		"dbo:bgafdId": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:manxName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:raceHorse": {
		  "range": "dbo:RaceHorse",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:course": {
		  "range": "xds:double",
		  "domain": "dbo:GrandPrix"
		},
		"dbo:fourthCommander": {
		  "range": "dbo:Person",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:thirdCommander": {
		  "range": "dbo:Person",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:smallestCountry": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:agency": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:procedure": {
		  "comment": "The name designating a formal collection of steps to be taken to complete the case",
		  "range": "xds:string",
		  "domain": "dbo:Case"
		},
		"dbo:geneLocationEnd": {
		  "comment": "the end of the gene",
		  "range": "xds:integer",
		  "domain": "dbo:GeneLocation"
		},
		"dbo:stateOfOriginYear": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:administrativeStatus": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:australiaOpenDouble": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:subdivision": {
		  "range": "dbo:Place",
		  "domain": "dbo:Place"
		},
		"dbo:borough": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:waterArea": {
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:water": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:lahHof": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:productionStartYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:salary": {
		  "range": "xds:double",
		  "domain": "dbo:Person"
		},
		"dbo:modelStartYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:MeanOfTransportation"
		},
		"dbo:lethalOnChickens": {
		  "range": "xds:string",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:subFamily": {
		  "range": "dbo:Taxon",
		  "domain": "dbo:Species"
		},
		"dbo:meanTemperature": {
		  "range": "xds:double",
		  "domain": "dbo:Planet"
		},
		"dbo:anthem": {
		  "range": "dbo:Work",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:millType": {
		  "range": "owl:Thing",
		  "domain": "dbo:Mill",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:councilArea": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:birthName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:firstFlightStartDate": {
		  "range": "xds:date",
		  "domain": "dbo:SpaceShuttle"
		},
		"dbo:numberOfSeats": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:MeanOfTransportation"
		},
		"dbo:Planet/mass": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:schoolBoard": {
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:parliament": {
		  "range": "dbo:Organisation",
		  "domain": "dbo:Place"
		},
		"dbo:iataAirlineCode": {
		  "comment": "IATA designation for airline companies",
		  "range": "xds:string",
		  "domain": "dbo:Airline"
		},
		"dbo:amgid": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:island": {
		  "range": "dbo:Island",
		  "domain": "dbo:Lake",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:educationSystem": {
		  "range": "owl:Thing",
		  "domain": "dbo:EducationalInstitution",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:muteCharacterInPlay": {
		  "comment": "Name of a mute character in play.",
		  "range": "xds:string",
		  "domain": "dbo:Play",
		  "superproperty": [
		    "dbo:characterInPlay"
		  ]
		},
		"dbo:completionDate": {
		  "range": "xds:date",
		  "domain": "dbo:Work"
		},
		"dbo:work": {
		  "range": "xds:string",
		  "domain": "dbo:FictionalCharacter"
		},
		"dbo:inn": {
		  "comment": "International Nonproprietary Name given to a pharmaceutical substance",
		  "range": "xds:string",
		  "domain": "dbo:ChemicalCompound"
		},
		"dbo:humanDevelopmentIndexAsOf": {
		  "range": "xds:date",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:juniorYearsEndYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:Person"
		},
		"dbo:subjectOfPlay": {
		  "comment": "The overall subject matter dealt with by the play.",
		  "range": "xds:string",
		  "domain": "dbo:Play"
		},
		"dbo:lunarRover": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:SpaceMission",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:publiclyAccessible": {
		  "comment": "describes in what way this site is accessible for public",
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:speaker": {
		  "comment": "number of office holder",
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:block": {
		  "range": "xds:string",
		  "domain": "dbo:VolleyballPlayer"
		},
		"dbo:continentalTournamentGold": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:coach": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:geneLocationStart": {
		  "comment": "the start of the gene coordinates",
		  "range": "xds:integer",
		  "domain": "dbo:GeneLocation"
		},
		"dbo:heisman": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:aircraftHelicopter": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:goldMedalDouble": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:areaQuote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:germanName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"odesignp:hasQuality": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:actScore",
		    "dbo:aspectRatio",
		    "dbo:climate",
		    "dbo:colour",
		    "dbo:complexion",
		    "dbo:handedness",
		    "dbo:layout",
		    "dbo:pictureFormat",
		    "dbo:resolution",
		    "dbo:sexualOrientation",
		    "dbo:shape"
		  ]
		},
		"dbo:statusYear": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:campusType": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:weapon": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:victim": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:soccerTournamentLastChampion": {
		  "range": "dbo:SoccerClub",
		  "domain": "dbo:SoccerTournament",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:superintendent": {
		  "range": "dbo:Person",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:battingSide": {
		  "range": "xds:string",
		  "domain": "dbo:BaseballPlayer"
		},
		"dbo:highestBuildingInYear": {
		  "range": "xds:date",
		  "domain": "dbo:Skyscraper"
		},
		"dbo:alongside": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:editor": {
		  "range": "dbo:Agent",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:arberishtName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfCollectionItems": {
		  "comment": "Indication as to the size of the collection of this library",
		  "range": "xds:integer",
		  "domain": "dbo:Library"
		},
		"dbo:typeOfStorage": {
		  "range": "xds:string",
		  "domain": "dbo:Food"
		},
		"dbo:tamazightSettlementName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:philosophicalSchool": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:significantProject": {
		  "comment": "A siginificant artifact constructed by the person.",
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:commonName": {
		  "comment": "The common name of an entity. Frequently, foaf:name is used for all of the different names of a person; this property just defines the most commonly used name.",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:president": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:tempPlace": {
		  "range": "xds:string",
		  "domain": "dbo:ChartsPlacements"
		},
		"dbo:eyeColor": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:amateurTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete"
		},
		"dbo:combatant": {
		  "range": "xds:string",
		  "domain": "dbo:MilitaryConflict"
		},
		"dbo:refgen": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:refgeo": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:networth": {
		  "range": "xds:double",
		  "domain": "dbo:Person"
		},
		"dbo:functionEndYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:PersonFunction"
		},
		"dbo:minimumAreaQuote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:weight": {
		  "range": "xds:double",
		  "domain": "owl:Thing",
		  "functional": true
		},
		"dbo:ordination": {
		  "range": "xds:date",
		  "domain": "dbo:Priest"
		},
		"dbo:utcOffset": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:winsAtChampionships": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:influencedBy": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:secondPlace": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:barPassRate": {
		  "range": "xds:float",
		  "domain": "dbo:School"
		},
		"dbo:openingFilm": {
		  "range": "dbo:Film",
		  "domain": "dbo:FilmFestival",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:welshName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:endingTheme": {
		  "range": "dbo:Work",
		  "domain": "dbo:TelevisionShow",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:Galaxy/apoapsis": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:maidenVoyage": {
		  "range": "xds:date",
		  "domain": "dbo:Ship"
		},
		"dbo:lastRace": {
		  "range": "dbo:GrandPrix",
		  "domain": "dbo:FormulaOneRacer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:coalition": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:shortProgCompetition": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:hgncid": {
		  "range": "xds:string",
		  "domain": "dbo:Biomolecule"
		},
		"dbo:flora": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:passengersPerYear": {
		  "comment": "Number of passengers per year.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Infrastructure"
		},
		"dbo:architectualBureau": {
		  "range": "dbo:Company",
		  "domain": "dbo:ArchitecturalStructure",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:belgiumPoliticalSeats": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:BelgiumSettlement"
		},
		"dbo:ceeb": {
		  "range": "xds:string",
		  "domain": "dbo:School"
		},
		"dbo:prefaceBy": {
		  "range": "dbo:Person",
		  "domain": "dbo:WrittenWork"
		},
		"dbo:musicSubgenre": {
		  "range": "dbo:MusicGenre",
		  "domain": "dbo:MusicGenre",
		  "superproperty": [
		    "odesignp:isSpecializedBy"
		  ]
		},
		"dbo:parkingInformation": {
		  "comment": "Information on station's parking facilities.",
		  "range": "xds:string",
		  "domain": "dbo:Station"
		},
		"dbo:poleDriverCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:delegateMayor": {
		  "range": "dbo:Person",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:sheading": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:MeanOfTransportation/diameter": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:formula": {
		  "range": "xds:string",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:geologicPeriod": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:subsidiary": {
		  "range": "dbo:Company",
		  "domain": "dbo:Company",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:winsAtSenEuro": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:species": {
		  "range": "owl:Thing",
		  "domain": "dbo:Species",
		  "superproperty": [
		    "odesignp:specializes"
		  ]
		},
		"dbo:goyaAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:countryWithFirstSpaceflight": {
		  "range": "dbo:Country",
		  "domain": "dbo:YearInSpaceflight",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:routeStart": {
		  "comment": "Start of the route. This is where the route begins and, for U.S. roads, is either at the southern terminus or western terminus.",
		  "range": "dbo:RouteOfTransportation",
		  "domain": "dbo:RouteOfTransportation",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:kinOfLanguage": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:abbreviation": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:sizeLogo": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:shoot": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:year": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:heightAgainst": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:firstGame": {
		  "range": "xds:string",
		  "domain": "dbo:SoccerClub"
		},
		"dbo:assistantPrincipal": {
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:Stream/watershed": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:established": {
		  "range": "xds:string",
		  "domain": "dbo:ChristianDoctrine"
		},
		"dbo:distanceToCardiff": {
		  "range": "xds:double",
		  "domain": "dbo:Settlement"
		},
		"dbo:sexualOrientation": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasQuality"
		  ]
		},
		"dbo:winsAtKLPGA": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:generalCouncil": {
		  "range": "dbo:TermOfOffice",
		  "domain": "dbo:Agent"
		},
		"dbo:wikiPageHistoryLink": {
		  "comment": "Reserved for DBpedia.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:colourName": {
		  "comment": "A colour represented by a string holding its name (e.g.: red or green).",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:homage": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:narrator": {
		  "range": "dbo:Person",
		  "domain": "dbo:Film",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:complexion": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasQuality"
		  ]
		},
		"dbo:Lake/areaOfCatchment": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:solventWithMediocreSolubility": {
		  "range": "dbo:ChemicalSubstance",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:mainIslands": {
		  "range": "xds:string",
		  "domain": "dbo:Island"
		},
		"dbo:projectStartDate": {
		  "comment": "The start date of the project.",
		  "range": "xds:date",
		  "domain": "dbo:Project"
		},
		"dbo:linkedSpace": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:fuelSystem": {
		  "range": "owl:Thing",
		  "domain": "dbo:AutomobileEngine",
		  "superproperty": [
		    "odesignp:hasComponent"
		  ]
		},
		"dbo:distanceToCapital": {
		  "range": "xds:double",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "dbo:Distance"
		  ]
		},
		"dbo:thirdPlace": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:eurobabeIndexId": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:purchasingPowerParity": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:regime": {
		  "range": "xds:string",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:dryCargo": {
		  "range": "xds:double",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:purpose": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:prefecture": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Department",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:cyclistGenre": {
		  "range": "owl:Thing",
		  "domain": "dbo:Athlete"
		},
		"dbo:lethalOnRats": {
		  "range": "xds:string",
		  "domain": "dbo:ChemicalSubstance"
		},
		"dbo:closed": {
		  "range": "xds:date",
		  "domain": "dbo:EducationalInstitution"
		},
		"dbo:espnId": {
		  "range": "xds:integer",
		  "domain": "dbo:Athlete"
		},
		"dbo:icd10": {
		  "range": "xds:string",
		  "domain": "dbo:Disease"
		},
		"dbo:nameDay": {
		  "range": "xds:date",
		  "domain": "dbo:GivenName"
		},
		"dbo:schoolNumber": {
		  "range": "xds:string",
		  "domain": "dbo:School"
		},
		"dbo:chairLabel": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:forces": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:diploma": {
		  "range": "dbo:Diploma",
		  "domain": "dbo:Person"
		},
		"dbo:believers": {
		  "range": "xds:string",
		  "domain": "dbo:ChristianDoctrine"
		},
		"dbo:Galaxy/averageSpeed": {
		  "comment": "The average speed of a thing.",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:prospectTeam": {
		  "range": "dbo:HockeyTeam",
		  "domain": "dbo:IceHockeyPlayer",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:tennisSurfaceType": {
		  "comment": "There are five types of court surface used in professional play. Each surface is different in the speed and height of the bounce of the ball.",
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:grave": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:unitaryAuthority": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:whaDraftYear": {
		  "range": "xds:date",
		  "domain": "dbo:IceHockeyPlayer"
		},
		"dbo:frozen": {
		  "range": "xds:string",
		  "domain": "dbo:Lake"
		},
		"dbo:worldTournamentBronze": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:title": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:seatNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:SpaceMission/lunarEvaTime": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfSports": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:rankInFinalMedalCount": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:OlympicResult"
		},
		"dbo:rgbCoordinateRed": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Colour"
		},
		"dbo:digitalSubChannel": {
		  "range": "xds:string",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:airportUsing": {
		  "range": "xds:string",
		  "domain": "dbo:Airport"
		},
		"dbo:frenchNickname": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:licensee": {
		  "comment": "Identify which company or entity holds the licence (mostly string are used in Wikipedia, therefore range is xsd:sting).",
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:statName": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfDependency": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Continent"
		},
		"dbo:vicePrincipal": {
		  "range": "dbo:Person",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:agencyStationCode": {
		  "comment": "Agency station code (used on tickets/reservations, etc.).",
		  "range": "xds:string",
		  "domain": "dbo:Station"
		},
		"dbo:region": {
		  "comment": "The regin where the thing is located or is connected to.",
		  "range": "dbo:Place",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:runwayLength": {
		  "range": "xds:double",
		  "domain": "dbo:Airport"
		},
		"dbo:statistic": {
		  "range": "owl:Thing",
		  "domain": "dbo:Statistic"
		},
		"dbo:siren": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:zdb": {
		  "comment": "Identifier for serial titles. More precise than issn",
		  "range": "xds:string",
		  "domain": "dbo:PeriodicalLiterature"
		},
		"dbo:pseudonym": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:testaverage": {
		  "range": "xds:float",
		  "domain": "dbo:School"
		},
		"dbo:youthClub": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:mapCaption": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:staff": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:EducationalInstitution"
		},
		"odesignp:isSettingFor": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:attorneyGeneral",
		    "dbo:fundedBy",
		    "dbo:judge",
		    "dbo:projectCoordinator",
		    "dbo:projectParticipant",
		    "dbo:retiredRocket",
		    "dbo:soccerLeaguePromoted",
		    "dbo:soccerLeagueRelegated",
		    "dbo:soccerLeagueWinner",
		    "dbo:soccerTournamentLastChampion",
		    "dbo:soccerTournamentMostSteady",
		    "dbo:soccerTournamentMostSuccesfull",
		    "dbo:solicitorGeneral",
		    "dbo:systemOfLaw",
		    "dbo:team"
		  ]
		},
		"dbo:meetingRoad": {
		  "comment": "A road that crosses another road at the junction.",
		  "range": "dbo:Road",
		  "domain": "dbo:RoadJunction",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:areaTotal": {
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:cuisine": {
		  "range": "xds:string",
		  "domain": "dbo:Restaurant"
		},
		"dbo:minimumArea": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:coachClub": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete"
		},
		"dbo:lifeExpectancy": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:calabrianName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:offeredClasses": {
		  "range": "xds:string",
		  "domain": "dbo:School"
		},
		"dbo:legalForm": {
		  "comment": "There are many types of business entity defined in the legal systems of various countries. These include corporations, cooperatives, partnerships, sole traders, limited liability company and other specialized types of organization.",
		  "range": "owl:Thing",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:agglomerationPopulation": {
		  "range": "dbo:Population",
		  "domain": "dbo:Settlement"
		},
		"dbo:lieutenancyArea": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:okatoCode": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:rocket": {
		  "range": "dbo:Rocket",
		  "domain": "dbo:Spacecraft",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:americanComedyAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Comedian",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:spurOf": {
		  "range": "dbo:Road",
		  "domain": "dbo:Road",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:populationMetroDensity": {
		  "range": "xds:double",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:championships": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:FormulaOneRacer"
		},
		"dbo:languageRegulator": {
		  "range": "dbo:Language",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:toll": {
		  "range": "xds:double",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:different": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:fastestDriverCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:numberOfParticipatingAthletes": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Olympics"
		},
		"dbo:license": {
		  "range": "owl:Thing",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:isDescribedBy"
		  ]
		},
		"dbo:winsAtAus": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:podium": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:defeatAsMgr": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:gagaouze": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:equipment": {
		  "range": "owl:Thing",
		  "domain": "dbo:Activity",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:governmentCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:prefectMandate": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:numberOfGraduateStudents": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:EducationalInstitution"
		},
		"dbo:Stream/minimumDischarge": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:legalArrondissement": {
		  "range": "xds:string",
		  "domain": "dbo:BelgiumSettlement"
		},
		"dbo:champion": {
		  "comment": "winner of a competition",
		  "range": "dbo:Athlete",
		  "domain": "dbo:SportsEvent",
		  "subproperty": [
		    "dbo:championInDouble",
		    "dbo:championInSingle"
		  ],
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:localAuthority": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:subdivisionName": {
		  "range": "dbo:Place",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:circuitName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:musicBand": {
		  "range": "dbo:Band",
		  "domain": "dbo:MusicalArtist"
		},
		"dbo:productionYears": {
		  "range": "xds:date",
		  "domain": "dbo:Aircraft"
		},
		"dbo:greenLongDistancePisteNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:managerSeason": {
		  "range": "owl:Thing",
		  "domain": "dbo:Agent"
		},
		"dbo:maximumBoatLength": {
		  "range": "xds:double",
		  "domain": "dbo:Canal"
		},
		"dbo:boiler": {
		  "range": "owl:Thing",
		  "domain": "dbo:Locomotive",
		  "superproperty": [
		    "odesignp:hasComponent"
		  ]
		},
		"dbo:ceremonialCounty": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:terytCode": {
		  "comment": "indexing code used by the Polish National Official Register of the Territorial Division of the Country (TERYT) to identify various entities",
		  "range": "owl:Thing",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:countryWithFirstSatellite": {
		  "range": "dbo:Country",
		  "domain": "dbo:YearInSpaceflight",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:colonialName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:totalCargo": {
		  "range": "xds:double",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:affiliate": {
		  "range": "xds:string",
		  "domain": "dbo:FictionalCharacter"
		},
		"dbo:projectEndDate": {
		  "comment": "The end date of the project.",
		  "range": "xds:date",
		  "domain": "dbo:Project"
		},
		"dbo:perCapitaIncomeAsOf": {
		  "range": "xds:date",
		  "domain": "dbo:PopulatedPlace"
		},
		"odesignp:isParticipantIn": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:competition",
		    "dbo:drama",
		    "dbo:firstFlight",
		    "dbo:firstOlympicEvent",
		    "dbo:firstRace",
		    "dbo:firstWin",
		    "dbo:lastAppearance",
		    "dbo:lastFlight",
		    "dbo:lastRace",
		    "dbo:lastWin",
		    "dbo:mission",
		    "dbo:movie",
		    "dbo:novel",
		    "dbo:race",
		    "dbo:series",
		    "dbo:show",
		    "dbo:sport",
		    "dbo:sportDiscipline",
		    "dbo:sportSpecialty",
		    "dbo:tvShow",
		    "dbo:usedInWar",
		    "dbo:uses",
		    "dbo:winsAtAlpg",
		    "dbo:winsAtAsia",
		    "dbo:winsAtAus",
		    "dbo:winsAtChallenges",
		    "dbo:winsAtChampionships",
		    "dbo:winsAtJLPGA",
		    "dbo:winsAtJapan",
		    "dbo:winsAtKLPGA",
		    "dbo:winsAtLAGT",
		    "dbo:winsAtLET",
		    "dbo:winsAtLPGA",
		    "dbo:winsAtMajors",
		    "dbo:winsAtNWIDE",
		    "dbo:winsAtOtherTournaments",
		    "dbo:winsAtPGA",
		    "dbo:winsAtProTournaments",
		    "dbo:winsAtSenEuro",
		    "dbo:winsAtSun",
		    "dbo:winsInEurope"
		  ]
		},
		"dbo:entrezgene": {
		  "range": "xds:string",
		  "domain": "dbo:Biomolecule"
		},
		"dbo:race": {
		  "range": "dbo:Race",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:sentence": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:Spacecraft/dockedTime": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"odesignp:isMemberOf": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:alliance",
		    "dbo:associateStar",
		    "dbo:associatedBand",
		    "dbo:board",
		    "dbo:broadcastNetwork",
		    "dbo:chain",
		    "dbo:club",
		    "dbo:debutTeam",
		    "dbo:draftTeam",
		    "dbo:employer",
		    "dbo:ethnicity",
		    "dbo:europeanParliamentGroup",
		    "dbo:formerBroadcastNetwork",
		    "dbo:formerHighschool",
		    "dbo:formerTeam",
		    "dbo:heritageRegister",
		    "dbo:institution",
		    "dbo:internationalAffiliation",
		    "dbo:listItemOf",
		    "dbo:militaryBranch",
		    "dbo:militaryRank",
		    "dbo:militaryUnit",
		    "dbo:movement",
		    "dbo:nationalTeam",
		    "dbo:network",
		    "dbo:otherParty",
		    "dbo:party",
		    "dbo:philosophicalSchool",
		    "dbo:prospectTeam",
		    "dbo:whaDraftTeam",
		    "dbo:youthClub"
		  ]
		},
		"dbo:Galaxy/orbitalPeriod": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:populationTotalReference": {
		  "range": "owl:Thing",
		  "domain": "dbo:Settlement"
		},
		"dbo:totalLaunches": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:authorityTitle": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:racketCatching": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:previousEvent": {
		  "range": "dbo:Event",
		  "domain": "dbo:Event",
		  "superproperty": [
		    "odesignp:follows"
		  ]
		},
		"dbo:televisionSeries": {
		  "range": "dbo:TelevisionShow",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:goldenRaspberryAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Actor",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:championInDoubleFemale": {
		  "comment": "winner of a competition in the female double session (as in tennis)",
		  "range": "dbo:Athlete",
		  "domain": "dbo:SportsEvent",
		  "superproperty": [
		    "dbo:championInDouble",
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:stateOfOrigin": {
		  "range": "dbo:Country",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:proPeriod": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:hsvCoordinateHue": {
		  "range": "xds:integer",
		  "domain": "dbo:Colour"
		},
		"dbo:Drug/meltingPoint": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:capitalCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:nominee": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:notableCommander": {
		  "range": "dbo:Person",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:startCareer": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:individualisedPnd": {
		  "comment": "PND (Personennamendatei) data about a person. PND is published by the German National Library. For each person there is a record with her/his name, birth and occupation connected with a unique identifier, the PND number.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:restoreDate": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:gender": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:slogan": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:adjacentSettlement": {
		  "range": "dbo:Settlement",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:nearTo"
		  ]
		},
		"dbo:populationRural": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:sourceConfluencePosition": {
		  "range": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:bloodType": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:aircraftRecon": {
		  "range": "dbo:MeanOfTransportation",
		  "domain": "dbo:MilitaryUnit",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:pccSecretary": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:athleticsDiscipline": {
		  "range": "dbo:Athletics",
		  "domain": "dbo:Athlete"
		},
		"dbo:cylinderBore": {
		  "range": "xds:double",
		  "domain": "dbo:AutomobileEngine"
		},
		"dbo:institution": {
		  "range": "dbo:Organisation",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:result": {
		  "range": "xds:string",
		  "domain": "dbo:MilitaryConflict"
		},
		"dbo:inCemetery": {
		  "range": "dbo:Cemetery",
		  "domain": "dbo:GraveMonument"
		},
		"dbo:atRowNumber": {
		  "comment": "Row # where the referenced resource is to be found in the source file",
		  "range": "xds:string",
		  "domain": "dbo:Reference"
		},
		"dbo:volumeQuote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:foundedBy": {
		  "comment": "Identifies the founder of the described entity. This can be a person or a organisation for instance.",
		  "range": "dbo:Agent",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:feastDay": {
		  "range": "xds:date",
		  "domain": "dbo:Saint"
		},
		"dbo:month": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:varietals": {
		  "range": "owl:Thing",
		  "domain": "dbo:WineRegion",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:principalArea": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:comment": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:cylinderCount": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Locomotive"
		},
		"dbo:performer": {
		  "range": "dbo:Person",
		  "domain": "dbo:FictionalCharacter",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:britishComedyAwards": {
		  "range": "dbo:Award",
		  "domain": "dbo:Comedian",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:nation": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:relative": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:millsCodeNL": {
		  "comment": "mills code from the central Dutch database on mills",
		  "range": "xds:string",
		  "domain": "dbo:Mill"
		},
		"dbo:endDate": {
		  "comment": "The end date of the event.",
		  "range": "xds:date",
		  "domain": "dbo:Event"
		},
		"dbo:recordLabel": {
		  "range": "dbo:RecordLabel",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:numberOfSuites": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Hotel"
		},
		"dbo:highestRank": {
		  "range": "xds:integer",
		  "domain": "dbo:SnookerPlayer"
		},
		"dbo:officialName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:parentMountainPeak": {
		  "range": "dbo:Mountain",
		  "domain": "dbo:Mountain",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:populationQuote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:translator": {
		  "comment": "Translator(s), if original not in English",
		  "range": "dbo:Person",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:historicalName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:touaregSettlementName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:operatedBy": {
		  "comment": "Organisation or city who is the operator of the ArchitecturalStructure. Not to confuse with maintainer or the owner.",
		  "range": "owl:Thing",
		  "domain": "dbo:ArchitecturalStructure",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:religiousHeadLabel": {
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:areaOfSearch": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:SiteOfSpecialScientificInterest",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:mascot": {
		  "comment": "something, especially a person or animal, used to symbolize a sports team, company, organization or other group.",
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:lastWin": {
		  "range": "dbo:GrandPrix",
		  "domain": "dbo:FormulaOneRacer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:secondLeader": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:regionServed": {
		  "range": "dbo:Place",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:fibahof": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:numberOfCity": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Continent"
		},
		"dbo:numberOfNeighbourhood": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:enshrinedDeity": {
		  "range": "dbo:Deity",
		  "domain": "dbo:Shrine",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:isPartOf": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:isPartOfRoute"
		  ]
		},
		"dbo:Rocket/lowerEarthOrbitPayload": {
		  "comment": "Payload mass in a typical Low Earth orbit",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:surfaceGravity": {
		  "range": "xds:double",
		  "domain": "dbo:Planet"
		},
		"dbo:SpaceMission/lunarOrbitTime": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:network": {
		  "range": "dbo:Broadcaster",
		  "domain": "dbo:Broadcaster",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:rebuildDate": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:championInDoubleMale": {
		  "comment": "winner of a competition in the male double session (as in tennis)",
		  "range": "dbo:Athlete",
		  "domain": "dbo:SportsEvent",
		  "superproperty": [
		    "dbo:championInDouble",
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:coExecutiveProducer": {
		  "range": "dbo:Person",
		  "domain": "dbo:TelevisionShow",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:numberOfStateDeputies": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:part": {
		  "range": "dbo:Place",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:secondTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:GrandPrix",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:seatingCapacity": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Building"
		},
		"dbo:whaDraftTeam": {
		  "range": "dbo:HockeyTeam",
		  "domain": "dbo:IceHockeyPlayer",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:partner": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:filmNumber": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:animator": {
		  "range": "dbo:Agent",
		  "domain": "dbo:Cartoon",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:europeanParliamentGroup": {
		  "range": "owl:Thing",
		  "domain": "dbo:PoliticalParty",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:parent": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:draftPosition": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Athlete"
		},
		"dbo:unicode": {
		  "range": "xds:string",
		  "domain": "dbo:Letter"
		},
		"dbo:afdbId": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:hasSurfaceForm": {
		  "comment": "Reserved for DBpedia.",
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:lineLength": {
		  "comment": "Length of the line. Wikipedians usually do not differentiate between track length and line lenght.",
		  "range": "xds:double",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:sea": {
		  "range": "dbo:Sea",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:nearTo"
		  ]
		},
		"dbo:university": {
		  "comment": "university a person goes or went to.",
		  "range": "dbo:EducationalInstitution",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:coolingSystem": {
		  "range": "owl:Thing",
		  "domain": "dbo:AutomobileEngine",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:playerSeason": {
		  "range": "owl:Thing",
		  "domain": "dbo:Agent"
		},
		"dbo:peabodyAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Comedian",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:governingBody": {
		  "comment": "Body that owns/operates the Place.",
		  "range": "dbo:Organisation",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:membership": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:league": {
		  "range": "dbo:SportsLeague",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:serviceStartYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:MilitaryPerson"
		},
		"dbo:diseasesdb": {
		  "range": "xds:string",
		  "domain": "dbo:Disease"
		},
		"dbo:numberOfStations": {
		  "comment": "Number of stations or stops.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:sex": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:wineYear": {
		  "range": "xds:date",
		  "domain": "dbo:WineRegion"
		},
		"dbo:LunarCrater/diameter": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:authority": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:usOpenMixed": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:SpaceStation/volume": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:contest": {
		  "range": "dbo:Contest",
		  "domain": "dbo:Person"
		},
		"dbo:latestPreviewVersion": {
		  "range": "xds:string",
		  "domain": "dbo:Software"
		},
		"dbo:shoeNumber": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:Person"
		},
		"dbo:sportsFunction": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:originallyUsedFor": {
		  "comment": "Original use of the architectural structure, if it is currently being used as anything other than its original purpose.",
		  "range": "xds:string",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:raceLength": {
		  "range": "xds:double",
		  "domain": "dbo:FormulaOneRacing"
		},
		"dbo:cargoWater": {
		  "range": "xds:double",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:Type": {
		  "comment": "a category within a classification system",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:musicalKey"
		  ]
		},
		"dbo:sourceConfluenceRegion": {
		  "range": "dbo:Place",
		  "domain": "dbo:River",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:unloCode": {
		  "comment": "UN/LOCODE, the United Nations Code for Trade and Transport Locations, is a geographic coding scheme developed and maintained by United Nations Economic Commission for Europe (UNECE), a unit of the United Nations. UN/LOCODE assigns codes to locations used in trade and transport  with functions such as seaports, rail and road terminals, airports, post offices and border crossing points.",
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:silverMedalSingle": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:compressionRatio": {
		  "range": "xds:string",
		  "domain": "dbo:AutomobileEngine"
		},
		"dbo:voice": {
		  "range": "dbo:Person",
		  "domain": "dbo:TelevisionShow",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:voice1": {
		  "range": "dbo:Person",
		  "domain": "dbo:FictionalCharacter",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:scientificName": {
		  "range": "xds:string",
		  "domain": "dbo:Species"
		},
		"dbo:currentTeamMember": {
		  "comment": "A current member of an athletic team.",
		  "range": "dbo:TeamMember",
		  "domain": "dbo:SportsTeam",
		  "superproperty": [
		    "odesignp:hasMember"
		  ]
		},
		"dbo:summerAppearances": {
		  "range": "dbo:OlympicResult",
		  "domain": "dbo:OlympicResult",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:numberOfLines": {
		  "comment": "Number of lines in the transit system.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PublicTransitSystem"
		},
		"dbo:currentTeam": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete"
		},
		"dbo:chairperson": {
		  "range": "dbo:Person",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:translatedMotto": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:presidentGeneralCouncilMandate": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:bioclimate": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:subjectTerm": {
		  "comment": "The subject as a term, possibly a term from a formal classification",
		  "range": "xds:string",
		  "domain": "dbo:Work"
		},
		"dbo:raceWins": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:alpsSubsection": {
		  "comment": "the Alps subsection to which the mountain belongs, according to the SOIUSA classification",
		  "range": "dbo:MountainRange",
		  "domain": "dbo:Mountain",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:rankingWins": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SnookerPlayer",
		  "superproperty": [
		    "dbo:Wins"
		  ]
		},
		"dbo:convictionDate": {
		  "range": "xds:date",
		  "domain": "dbo:Person"
		},
		"dbo:firstBroadcast": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:distance": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:fipsCode": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:christeningDate": {
		  "range": "xds:date",
		  "domain": "dbo:Ship"
		},
		"dbo:mergedSettlement": {
		  "range": "dbo:Settlement",
		  "domain": "dbo:Settlement"
		},
		"dbo:ruling": {
		  "comment": "Ruling referred to in this legal case",
		  "range": "xds:string",
		  "domain": "dbo:LegalCase"
		},
		"dbo:rgbCoordinateBlue": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Colour"
		},
		"odesignp:specializes": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:derivative",
		    "dbo:domain",
		    "dbo:family",
		    "dbo:genus",
		    "dbo:kingdom",
		    "dbo:languageFamily",
		    "dbo:species"
		  ]
		},
		"dbo:superbowlWin": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:previousDemographics": {
		  "range": "dbo:Demographics",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:regionLink": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:numberOfCrew": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:MeanOfTransportation"
		},
		"dbo:highschool": {
		  "range": "dbo:School",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:birthPlace": {
		  "comment": "where the person was born",
		  "range": "dbo:Place",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:cableCar": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Place"
		},
		"dbo:buildingStartDate": {
		  "range": "xds:date",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:numberOfFederalDeputies": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:floodingDate": {
		  "range": "xds:date",
		  "domain": "owl:Thing"
		},
		"dbo:firstAscentYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:Mountain"
		},
		"dbo:ground": {
		  "range": "dbo:Place",
		  "domain": "dbo:SoccerClub",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:firstLeader": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:runtime": {
		  "range": "xds:double",
		  "domain": "dbo:Work"
		},
		"dbo:artist": {
		  "comment": "The performer or creator of the musical work.",
		  "range": "dbo:Agent",
		  "domain": "dbo:MusicalWork",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:subTribus": {
		  "range": "dbo:Species",
		  "domain": "dbo:Species",
		  "superproperty": [
		    "dbo:Tribus"
		  ]
		},
		"dbo:apparentMagnitude": {
		  "range": "xds:double",
		  "domain": "dbo:Planet"
		},
		"dbo:cultivatedVariety": {
		  "comment": "Name of the cultivar (cultivated variety)",
		  "range": "dbo:CultivatedVariety",
		  "domain": "dbo:Plant",
		  "superproperty": [
		    "odesignp:isSpecializedBy"
		  ]
		},
		"dbo:deathPlace": {
		  "comment": "the place where they died",
		  "range": "dbo:Place",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:numberOfTerritories": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:AdministrativeRegion"
		},
		"dbo:cyrilliqueName": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:isoCode": {
		  "range": "xds:string",
		  "domain": "dbo:Place",
		  "subproperty": [
		    "dbo:communityIsoCode",
		    "dbo:ofsCode",
		    "dbo:provinceIsoCode"
		  ]
		},
		"dbo:firstPlace": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:years": {
		  "range": "xds:gYear",
		  "domain": "dbo:SoccerPlayer"
		},
		"dbo:airDate": {
		  "range": "xds:date",
		  "domain": "dbo:RadioStation"
		},
		"dbo:Planet/averageSpeed": {
		  "comment": "The average speed of a thing.",
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:soccerLeagueWinner": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:SoccerLeagueSeason",
		  "superproperty": [
		    "odesignp:isSettingFor"
		  ]
		},
		"dbo:managementMountain": {
		  "range": "dbo:Mountain",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:licenceNumberLabel": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:mayorFunction": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:foundationPlace": {
		  "range": "dbo:City",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:grossDomesticProductRank": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:field": {
		  "range": "owl:Thing",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:isDescribedBy"
		  ]
		},
		"dbo:largestCountry": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:longName": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:khlDraftYear": {
		  "range": "xds:string",
		  "domain": "dbo:IceHockeyPlayer"
		},
		"dbo:premierePlace": {
		  "comment": "The theatre and/or city the play was first performed in.",
		  "range": "owl:Thing",
		  "domain": "dbo:Play",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:numberOfStudents": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:EducationalInstitution"
		},
		"dbo:mainBuilding": {
		  "range": "xds:string",
		  "domain": "dbo:Shrine"
		},
		"dbo:lengthQuote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:orogeny": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:dutchMIPCode": {
		  "comment": "The Dutch MIP project was meant to take stock of all kinds of monuments",
		  "range": "xds:string",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "dbo:Code"
		  ]
		},
		"dbo:numberOfTurns": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:RaceTrack"
		},
		"dbo:numberOfPages": {
		  "comment": "The books number of pages.",
		  "range": "xds:positiveInteger",
		  "domain": "dbo:Book"
		},
		"dbo:routeStartDirection": {
		  "comment": "End of the route. For U.S. roads, this should be either \"South\" or \"West\" per the standards set by the U.S. Roads project.",
		  "range": "xds:string",
		  "domain": "dbo:RouteOfTransportation"
		},
		"dbo:MemberOfParliament": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:senator"
		  ]
		},
		"dbo:chiefPlace": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:sportCountry": {
		  "comment": "The country, for which the athlete is participating in championships",
		  "range": "dbo:Country",
		  "domain": "dbo:Athlete",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:nearestCity": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:nearTo"
		  ]
		},
		"dbo:organisation": {
		  "range": "dbo:Organisation",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:teamSize": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:club": {
		  "range": "dbo:SportsTeam",
		  "domain": "dbo:Athlete",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:bird": {
		  "range": "dbo:Species",
		  "domain": "dbo:Place"
		},
		"dbo:wptTitle": {
		  "range": "xds:string",
		  "domain": "dbo:PokerPlayer"
		},
		"dbo:runningMate": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:poles": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:FormulaOneRacer"
		},
		"dbo:populationPctChildren": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:department": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:draftPick": {
		  "range": "xds:string",
		  "domain": "dbo:GridironFootballPlayer"
		},
		"dbo:Planet/orbitalPeriod": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:whaDraft": {
		  "range": "xds:string",
		  "domain": "dbo:IceHockeyPlayer"
		},
		"dbo:fc": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Cricketer"
		},
		"dbo:landingVehicle": {
		  "range": "dbo:SpaceMission",
		  "domain": "dbo:SpaceMission",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"odesignp:hasParticipant": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:booster",
		    "dbo:bronzeMedalist",
		    "dbo:champion",
		    "dbo:championInDouble",
		    "dbo:championInDoubleFemale",
		    "dbo:championInDoubleMale",
		    "dbo:championInMixedDouble",
		    "dbo:championInSingle",
		    "dbo:championInSingleFemale",
		    "dbo:championInSingleMale",
		    "dbo:closingFilm",
		    "dbo:countryWithFirstAstronaut",
		    "dbo:countryWithFirstSatellite",
		    "dbo:countryWithFirstSatelliteLaunched",
		    "dbo:countryWithFirstSpaceflight",
		    "dbo:crewMember",
		    "dbo:currentWorldChampion",
		    "dbo:equipment",
		    "dbo:event",
		    "dbo:fastestDriver",
		    "dbo:fastestDriverCountry",
		    "dbo:fastestDriverTeam",
		    "dbo:firstDriver",
		    "dbo:firstDriverCountry",
		    "dbo:firstDriverTeam",
		    "dbo:firstWinner",
		    "dbo:goldMedalist",
		    "dbo:guest",
		    "dbo:landingVehicle",
		    "dbo:launchPad",
		    "dbo:launchSite",
		    "dbo:launchVehicle",
		    "dbo:lunarRover",
		    "dbo:maidenFlightRocket",
		    "dbo:makeupArtist",
		    "dbo:medalist",
		    "dbo:mostWins",
		    "dbo:nationalOlympicCommittee",
		    "dbo:officialOpenedBy",
		    "dbo:olympicOathSwornBy",
		    "dbo:olympicOathSwornByAthlete",
		    "dbo:olympicOathSwornByJudge",
		    "dbo:openingFilm",
		    "dbo:operatingSystem",
		    "dbo:opponents",
		    "dbo:poleDriver",
		    "dbo:poleDriverCountry",
		    "dbo:poleDriverTeam",
		    "dbo:presenter",
		    "dbo:recentWinner",
		    "dbo:secondDriver",
		    "dbo:secondDriverCountry",
		    "dbo:secondTeam",
		    "dbo:showJudge",
		    "dbo:shuttle",
		    "dbo:silverMedalist",
		    "dbo:soccerTournamentTopScorer",
		    "dbo:spacecraft",
		    "dbo:territory",
		    "dbo:thirdDriver",
		    "dbo:thirdDriverCountry",
		    "dbo:thirdTeam",
		    "dbo:torchBearer"
		  ]
		},
		"dbo:sourceElevation": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:percentageOfAreaWater": {
		  "range": "xds:float",
		  "domain": "owl:Thing"
		},
		"dbo:laurenceOlivierAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Actor",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:member": {
		  "range": "xds:string",
		  "domain": "dbo:FictionalCharacter"
		},
		"dbo:oldProvince": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:resolution": {
		  "comment": "Native Resolution",
		  "range": "owl:Thing",
		  "domain": "dbo:Software",
		  "superproperty": [
		    "odesignp:hasQuality"
		  ]
		},
		"dbo:totalDiscs": {
		  "comment": "the total number of discs contained in the album",
		  "range": "xds:integer",
		  "domain": "dbo:Album"
		},
		"dbo:ko": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Boxer"
		},
		"dbo:regionType": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:committee": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:isPartOfMilitaryConflict": {
		  "range": "dbo:MilitaryConflict",
		  "domain": "dbo:MilitaryConflict",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:secondPopularVote": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:mostWins": {
		  "range": "owl:Thing",
		  "domain": "dbo:Race",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:highestPosition": {
		  "range": "http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:launches": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:LaunchPad"
		},
		"dbo:faaLocationIdentifier": {
		  "range": "xds:string",
		  "domain": "dbo:Airport"
		},
		"dbo:nextEvent": {
		  "range": "dbo:Event",
		  "domain": "dbo:Event",
		  "superproperty": [
		    "dbo:followedBy",
		    "odesignp:precedes"
		  ]
		},
		"dbo:numberOfGraves": {
		  "range": "xds:string",
		  "domain": "dbo:Cemetery"
		},
		"dbo:timeInSpace": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:production": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Company"
		},
		"dbo:governorGeneral": {
		  "range": "dbo:Person",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:fareZone": {
		  "comment": "The fare zone in which station is located.",
		  "range": "xds:string",
		  "domain": "dbo:Station"
		},
		"dbo:mainDomain": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:mostPopulousCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:Country"
		},
		"dbo:binomial": {
		  "range": "owl:Thing",
		  "domain": "dbo:Species",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:longtype": {
		  "comment": "can be used to include more informations e.g. the name of the artist that a tribute album is in honor of",
		  "range": "xds:string",
		  "domain": "dbo:Album"
		},
		"dbo:headAlloy": {
		  "range": "owl:Thing",
		  "domain": "dbo:AutomobileEngine",
		  "superproperty": [
		    "odesignp:hasConstituent"
		  ]
		},
		"dbo:temperature": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:electionDateLeader": {
		  "comment": "The date that leader was elected.",
		  "range": "xds:date",
		  "domain": "dbo:Legislature"
		},
		"dbo:bestWsopRank": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PokerPlayer"
		},
		"dbo:winsInEurope": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:skills": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isDescribedBy"
		  ]
		},
		"dbo:populationRuralDensity": {
		  "range": "xds:double",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:unitedStatesNationalBridgeId": {
		  "range": "xds:string",
		  "domain": "dbo:Bridge"
		},
		"dbo:rocketStages": {
		  "comment": "number of stages, not including boosters",
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Rocket"
		},
		"dbo:id": {
		  "range": "xds:string",
		  "domain": "dbo:WorldHeritageSite"
		},
		"dbo:MeanOfTransportation/length": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:medalist": {
		  "range": "dbo:Person",
		  "domain": "dbo:SportsEvent",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:broadcastTranslator": {
		  "range": "xds:string",
		  "domain": "dbo:Broadcaster"
		},
		"dbo:Wins": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:otherWins",
		    "dbo:rankingWins"
		  ]
		},
		"dbo:shoreLength": {
		  "range": "xds:double",
		  "domain": "dbo:Lake"
		},
		"dbo:voiceType": {
		  "comment": "voice type of a singer or an actor",
		  "range": "owl:Thing",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:category": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:numberOfClassrooms": {
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:hasRegion"
		  ]
		},
		"dbo:added": {
		  "range": "xds:date",
		  "domain": "dbo:HistoricPlace"
		},
		"dbo:Canal/maximumBoatBeam": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:musicalKey": {
		  "range": "xds:string",
		  "domain": "dbo:MusicalWork",
		  "superproperty": [
		    "dbo:Type"
		  ]
		},
		"dbo:firstRace": {
		  "range": "dbo:GrandPrix",
		  "domain": "dbo:FormulaOneRacer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:mediaType": {
		  "comment": "Print / On-line (then binding types etc. if relevant)",
		  "range": "owl:Thing",
		  "domain": "dbo:Book",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:quote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:royalAnthem": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:populationUrbanDensity": {
		  "range": "xds:double",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:bestLap": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:lastFlightStartDate": {
		  "range": "xds:date",
		  "domain": "dbo:SpaceShuttle"
		},
		"dbo:postalCode": {
		  "comment": "A postal code (known in various countries as a post code, postcode, or ZIP code) is a series of letters and/or digits appended to a postal address for the purpose of sorting mail.",
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:lastFlight": {
		  "range": "dbo:SpaceMission",
		  "domain": "dbo:SpaceShuttle",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:partyNumber": {
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:codeMemorial": {
		  "comment": "Identifier for monuments of the Memorial type",
		  "range": "xds:string",
		  "domain": "dbo:Memorial",
		  "superproperty": [
		    "dbo:Code"
		  ]
		},
		"dbo:flower": {
		  "range": "dbo:Species",
		  "domain": "dbo:Place"
		},
		"dbo:activeYearsEndYearMgr": {
		  "range": "xds:gYear",
		  "domain": "dbo:Person"
		},
		"dbo:wholeArea": {
		  "range": "dbo:Area",
		  "domain": "dbo:Place"
		},
		"dbo:distributingCompany": {
		  "range": "dbo:Company",
		  "domain": "dbo:RecordLabel",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:functionStartYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:PersonFunction"
		},
		"dbo:governmentRegion": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:politicalMajority": {
		  "range": "dbo:PoliticalParty",
		  "domain": "dbo:Settlement"
		},
		"dbo:ncbhof": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:landingDate": {
		  "range": "xds:date",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:port2DockingDate": {
		  "range": "xds:date",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:colour": {
		  "comment": "A colour represented by its entity.",
		  "range": "dbo:Colour",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasQuality"
		  ]
		},
		"dbo:definition": {
		  "range": "xds:string",
		  "domain": "dbo:Galaxy"
		},
		"dbo:Lake/shoreLength": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:militaryBranch": {
		  "comment": "The service branch (Army, Navy, etc.) a person is part of.",
		  "range": "dbo:MilitaryUnit",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:second": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"odesignp:hasLocation": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:alpsGroup",
		    "dbo:alpsMainPart",
		    "dbo:alpsMajorSector",
		    "dbo:alpsSection",
		    "dbo:alpsSubgroup",
		    "dbo:alpsSubsection",
		    "dbo:alpsSupergroup",
		    "dbo:areaOfSearch",
		    "dbo:arrondissement",
		    "dbo:beltwayCity",
		    "dbo:birthPlace",
		    "dbo:bodyDiscovered",
		    "dbo:borough",
		    "dbo:broadcastArea",
		    "dbo:buriedPlace",
		    "dbo:campus",
		    "dbo:canton",
		    "dbo:capitalCountry",
		    "dbo:capitalDistrict",
		    "dbo:capitalMountain",
		    "dbo:capitalPlace",
		    "dbo:capitalPosition",
		    "dbo:capitalRegion",
		    "dbo:chiefPlace",
		    "dbo:city",
		    "dbo:country",
		    "dbo:county",
		    "dbo:countySeat",
		    "dbo:crosses",
		    "dbo:daira",
		    "dbo:deathPlace",
		    "dbo:europeanAffiliation",
		    "dbo:foundationPlace",
		    "dbo:garrison",
		    "dbo:geneLocation",
		    "dbo:headquarter",
		    "dbo:homeport",
		    "dbo:hometown",
		    "dbo:hubAirport",
		    "dbo:linkedTo",
		    "dbo:locatedInArea",
		    "dbo:location",
		    "dbo:locationCity",
		    "dbo:locationCountry",
		    "dbo:map",
		    "dbo:massif",
		    "dbo:meetingBuilding",
		    "dbo:meetingCity",
		    "dbo:mouthCountry",
		    "dbo:mouthDistrict",
		    "dbo:mouthMountain",
		    "dbo:mouthPlace",
		    "dbo:mouthPosition",
		    "dbo:mouthRegion",
		    "dbo:mouthState",
		    "dbo:museum",
		    "dbo:nationalAffiliation",
		    "dbo:nationality",
		    "dbo:place",
		    "dbo:placeOfBurial",
		    "dbo:populationPlace",
		    "dbo:port1",
		    "dbo:port2",
		    "dbo:region",
		    "dbo:residence",
		    "dbo:restingPlace",
		    "dbo:restingPlacePosition",
		    "dbo:ruralMunicipality",
		    "dbo:settlement",
		    "dbo:sourceConfluenceCountry",
		    "dbo:sourceConfluencePlace",
		    "dbo:sourceConfluencePosition",
		    "dbo:sourceConfluenceRegion",
		    "dbo:sourceConfluenceState",
		    "dbo:sourceCountry",
		    "dbo:sourceDistrict",
		    "dbo:sourceMountain",
		    "dbo:sourcePlace",
		    "dbo:sourcePosition",
		    "dbo:sourceRegion",
		    "dbo:sourceState",
		    "dbo:spokenIn",
		    "dbo:state",
		    "dbo:stateOfOrigin",
		    "dbo:targetAirport",
		    "dbo:targetSpaceStation",
		    "dbo:wilaya",
		    "dbo:wineRegion"
		  ]
		},
		"dbo:frequency": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:capitalElevation": {
		  "range": "xds:double",
		  "domain": "dbo:Island"
		},
		"dbo:restingDate": {
		  "range": "xds:date",
		  "domain": "dbo:Person",
		  "functional": true
		},
		"dbo:numberOfSettlement": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Department"
		},
		"dbo:lchfDraft": {
		  "range": "xds:string",
		  "domain": "dbo:IceHockeyPlayer"
		},
		"dbo:chairmanTitle": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:rebuilder": {
		  "range": "owl:Thing",
		  "domain": "dbo:MeanOfTransportation",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:arm": {
		  "range": "xds:string",
		  "domain": "dbo:Protein"
		},
		"dbo:championInDouble": {
		  "comment": "winner of a competition in the double session (as in tennis)",
		  "range": "dbo:Athlete",
		  "domain": "dbo:SportsEvent",
		  "subproperty": [
		    "dbo:championInDoubleFemale",
		    "dbo:championInDoubleMale",
		    "dbo:championInMixedDouble"
		  ],
		  "superproperty": [
		    "dbo:champion",
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:currentSeason": {
		  "range": "xds:string",
		  "domain": "dbo:SportsLeague"
		},
		"dbo:icaoLocationIdentifier": {
		  "range": "xds:string",
		  "domain": "dbo:Airport"
		},
		"dbo:meaning": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:countryWithFirstSatelliteLaunched": {
		  "range": "dbo:Country",
		  "domain": "dbo:YearInSpaceflight",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:lastProMatch": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:thumbnail": {
		  "comment": "Reserved for DBpedia.",
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isExpressedBy"
		  ]
		},
		"dbo:gymApparatus": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:wikiPageInDegree": {
		  "comment": "Reserved for DBpedia.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:fees": {
		  "range": "xds:double",
		  "domain": "dbo:School"
		},
		"dbo:building": {
		  "range": "dbo:Building",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:mandate": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:logo": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:fuelConsumption": {
		  "range": "xds:string",
		  "domain": "dbo:AutomobileEngine",
		  "functional": true
		},
		"dbo:inflow": {
		  "range": "dbo:River",
		  "domain": "dbo:Lake",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:pictureDescription": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing"
		},
		"dbo:Planet/temperature": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:musicians": {
		  "range": "dbo:MusicalArtist",
		  "domain": "dbo:Instrument",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:chorusCharacterInPlay": {
		  "comment": "The name of the (Greek) chorus character in play.",
		  "range": "xds:string",
		  "domain": "dbo:Play",
		  "superproperty": [
		    "dbo:characterInPlay"
		  ]
		},
		"dbo:port1UndockingDate": {
		  "range": "xds:date",
		  "domain": "dbo:Spacecraft"
		},
		"dbo:Weapon/diameter": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:bedCount": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Hospital"
		},
		"dbo:numberOfParkingSpaces": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Hotel"
		},
		"dbo:profession": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasRole"
		  ]
		},
		"dbo:championInSingle": {
		  "comment": "winner of a competition in the single session, to distinguish from the double session (as in tennis)",
		  "range": "dbo:Athlete",
		  "domain": "dbo:SportsEvent",
		  "subproperty": [
		    "dbo:championInSingleFemale",
		    "dbo:championInSingleMale"
		  ],
		  "superproperty": [
		    "dbo:champion",
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:saint": {
		  "range": "dbo:Saint",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:unesco": {
		  "range": "dbo:PopulatedPlace",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:appearancesInNationalTeam": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SoccerPlayer"
		},
		"dbo:construction": {
		  "range": "owl:Thing",
		  "domain": "dbo:ArchitecturalStructure",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:mainFamilyBranch": {
		  "range": "dbo:Family",
		  "domain": "dbo:NobleFamily"
		},
		"dbo:averageDepthQuote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:winsAtChallenges": {
		  "range": "owl:Thing",
		  "domain": "dbo:GolfPlayer",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:majorLake": {
		  "range": "owl:Thing",
		  "domain": "dbo:NaturalPlace",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:actingHeadteacher": {
		  "range": "dbo:Person",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:wikiPageLength": {
		  "comment": "Reserved for DBpedia.",
		  "range": "xds:nonNegativeInteger",
		  "domain": "owl:Thing"
		},
		"dbo:officialSchoolColour": {
		  "comment": "The official colour of the EducationalInstitution represented by the colour name (e.g.: red or green).",
		  "range": "xds:string",
		  "domain": "dbo:EducationalInstitution",
		  "superproperty": [
		    "dbo:ColourName"
		  ]
		},
		"dbo:nerve": {
		  "range": "dbo:Nerve",
		  "domain": "dbo:AnatomicalStructure",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:tu": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:longDistancePisteKilometre": {
		  "range": "xds:double",
		  "domain": "dbo:Place"
		},
		"dbo:installedCapacity": {
		  "range": "xds:double",
		  "domain": "dbo:PowerStation",
		  "functional": true
		},
		"dbo:deanery": {
		  "comment": "Dioceses and parishes should know which deaneries there are",
		  "range": "dbo:Deanery",
		  "domain": "dbo:Diocese",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:deanery1": {
		  "comment": "Dioceses and parishes should know which deaneries there are",
		  "range": "dbo:Deanery",
		  "domain": "dbo:Parish",
		  "superproperty": [
		    "odesignp:isPartOf"
		  ]
		},
		"dbo:subsequentInfrastructure": {
		  "range": "dbo:Infrastructure",
		  "domain": "dbo:Infrastructure",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:sourceConfluenceElevation": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:prospectLeague": {
		  "range": "dbo:SportsLeague",
		  "domain": "dbo:IceHockeyPlayer"
		},
		"dbo:other": {
		  "range": "xds:integer",
		  "domain": "dbo:University"
		},
		"dbo:otherInformation": {
		  "range": "xds:string",
		  "domain": "dbo:Settlement"
		},
		"dbo:administrativeCenter": {
		  "range": "dbo:Place",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:lounge": {
		  "range": "owl:Thing",
		  "domain": "dbo:Airline",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:releaseYear": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing",
		  "subproperty": [
		    "dbo:premiereYear"
		  ]
		},
		"dbo:iso6391Code": {
		  "range": "xds:string",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "dbo:LanguageCode"
		  ]
		},
		"dbo:worldOpen": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:government": {
		  "range": "owl:Thing",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:medlineplus": {
		  "range": "xds:string",
		  "domain": "dbo:Disease"
		},
		"dbo:deadInFightDate": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:circle": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:launchDate": {
		  "range": "xds:date",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:penisLength": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:computingInput": {
		  "range": "owl:Thing",
		  "domain": "dbo:Software",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:SpaceMission/stationVisitDuration": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:fullCompetition": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:author": {
		  "range": "dbo:Person",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:lawCountry": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:feat": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:ra": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:MeanOfTransportation/mass": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:comitat": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:belgiumPoliticalMajority": {
		  "range": "dbo:PoliticalParty",
		  "domain": "dbo:BelgiumSettlement",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:primogenitor": {
		  "range": "dbo:Person",
		  "domain": "dbo:Family"
		},
		"dbo:entourage": {
		  "range": "dbo:Species",
		  "domain": "dbo:FictionalCharacter",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:retentionTime": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:noteOnRestingPlace": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:actScore": {
		  "comment": "most recent average ACT scores",
		  "range": "owl:Thing",
		  "domain": "dbo:School",
		  "superproperty": [
		    "odesignp:hasQuality"
		  ]
		},
		"dbo:officialOpenedBy": {
		  "range": "dbo:Person",
		  "domain": "dbo:Olympics",
		  "superproperty": [
		    "odesignp:hasParticipant"
		  ]
		},
		"dbo:album": {
		  "range": "dbo:Album",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:bestFinish": {
		  "range": "xds:string",
		  "domain": "dbo:SnookerPlayer"
		},
		"dbo:grayPage": {
		  "comment": "Refers to the famous 1918 edition of Gray's Anatomy.",
		  "range": "xds:positiveInteger",
		  "domain": "dbo:AnatomicalStructure"
		},
		"dbo:movie": {
		  "range": "dbo:Film",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:isParticipantIn"
		  ]
		},
		"dbo:startYear": {
		  "range": "xds:gYear",
		  "domain": "owl:Thing"
		},
		"dbo:approach": {
		  "range": "owl:Thing",
		  "domain": "dbo:Person"
		},
		"dbo:AutomobileEngine/diameter": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:innervates": {
		  "range": "dbo:AnatomicalStructure",
		  "domain": "dbo:Nerve",
		  "superproperty": [
		    "odesignp:hasCommonBoundary"
		  ]
		},
		"dbo:copilote": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person"
		},
		"dbo:rebuildingYear": {
		  "range": "xds:gYear",
		  "domain": "dbo:ArchitecturalStructure"
		},
		"dbo:daira": {
		  "range": "dbo:Place",
		  "domain": "dbo:Settlement",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:trackNumber": {
		  "range": "xds:positiveInteger",
		  "domain": "dbo:Song"
		},
		"dbo:instrument": {
		  "range": "dbo:Instrument",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:minimumTemperature": {
		  "range": "xds:double",
		  "domain": "dbo:Planet"
		},
		"dbo:workArea": {
		  "range": "xds:double",
		  "domain": "dbo:Building"
		},
		"dbo:vonKlitzingConstant": {
		  "range": "xds:double",
		  "domain": "dbo:CelestialBody"
		},
		"dbo:mass": {
		  "range": "xds:double",
		  "domain": "owl:Thing"
		},
		"dbo:provinceIsoCode": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "dbo:isoCode"
		  ]
		},
		"dbo:freeLabel": {
		  "range": "xds:string",
		  "domain": "dbo:FictionalCharacter"
		},
		"dbo:classes": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:School"
		},
		"dbo:orbits": {
		  "range": "xds:integer",
		  "domain": "owl:Thing"
		},
		"dbo:style": {
		  "range": "owl:Thing",
		  "domain": "dbo:Artist"
		},
		"dbo:composer": {
		  "range": "dbo:Person",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:restingPlace": {
		  "range": "dbo:Place",
		  "domain": "dbo:Person",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:subsystem": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:format": {
		  "range": "owl:Thing",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:isClassifiedBy"
		  ]
		},
		"dbo:automobileModel": {
		  "range": "xds:string",
		  "domain": "dbo:AutomobileEngine"
		},
		"dbo:budgetYear": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:cinematography": {
		  "range": "dbo:Person",
		  "domain": "dbo:Film",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:architecturalMovement": {
		  "range": "xds:string",
		  "domain": "dbo:Person"
		},
		"dbo:stadium": {
		  "range": "dbo:Stadium",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:poorestCountry": {
		  "range": "dbo:Country",
		  "domain": "dbo:Country",
		  "superproperty": [
		    "odesignp:hasPart"
		  ]
		},
		"dbo:eTeatrId": {
		  "range": "xds:string",
		  "domain": "dbo:Film"
		},
		"dbo:numberOfMunicipalities": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:internationalPhonePrefixLabel": {
		  "range": "xds:string",
		  "domain": "dbo:PopulatedPlace"
		},
		"dbo:fuelType": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:capitalMountain": {
		  "range": "dbo:Mountain",
		  "domain": "dbo:Island",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:emmyAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:spacewalkEnd": {
		  "range": "xds:date",
		  "domain": "dbo:SpaceMission"
		},
		"dbo:age": {
		  "range": "xds:integer",
		  "domain": "dbo:Agent"
		},
		"dbo:appearancesInLeague": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:SoccerPlayer"
		},
		"dbo:sourceMountain": {
		  "range": "dbo:Mountain",
		  "domain": "owl:Thing",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:lowerAge": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:School"
		},
		"dbo:musicComposer": {
		  "range": "dbo:MusicalArtist",
		  "domain": "dbo:Work",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:engine": {
		  "range": "dbo:AutomobileEngine",
		  "domain": "dbo:Automobile",
		  "superproperty": [
		    "odesignp:hasComponent"
		  ]
		},
		"dbo:numberOfClubs": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Activity"
		},
		"dbo:regionalLanguage": {
		  "range": "dbo:Language",
		  "domain": "dbo:PopulatedPlace",
		  "superproperty": [
		    "odesignp:isLocationOf"
		  ]
		},
		"dbo:Planet/meanTemperature": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:musicFormat": {
		  "comment": "The format of the album: EP, Single etc.",
		  "range": "xds:string",
		  "domain": "dbo:Album"
		},
		"dbo:layingDown": {
		  "range": "xds:date",
		  "domain": "dbo:Ship"
		},
		"dbo:climate": {
		  "range": "owl:Thing",
		  "domain": "dbo:Place",
		  "superproperty": [
		    "odesignp:hasQuality"
		  ]
		},
		"dbo:classis": {
		  "comment": "the living thing class (from the Latin \"classis\"), according to the biological taxonomy",
		  "range": "owl:Thing",
		  "domain": "dbo:Species",
		  "subproperty": [
		    "dbo:subClassis"
		  ]
		},
		"dbo:formerHighschool": {
		  "range": "dbo:EducationalInstitution",
		  "domain": "dbo:NationalCollegiateAthleticAssociationAthlete",
		  "superproperty": [
		    "odesignp:isMemberOf"
		  ]
		},
		"dbo:flagSize": {
		  "range": "xds:integer",
		  "domain": "dbo:Flag"
		},
		"dbo:polishFilmAward": {
		  "range": "dbo:Award",
		  "domain": "dbo:Artist",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:religiousOrder": {
		  "range": "dbo:ClericalOrder",
		  "domain": "dbo:Monastery",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:elevationQuote": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:targetAirport": {
		  "range": "dbo:Airport",
		  "domain": "dbo:Airline",
		  "superproperty": [
		    "odesignp:hasLocation"
		  ]
		},
		"dbo:viafId": {
		  "comment": "International authority data from the Online Computer Library Center (OCLC)",
		  "range": "xds:string",
		  "domain": "dbo:Agent"
		},
		"dbo:observatory": {
		  "range": "xds:string",
		  "domain": "dbo:Island"
		},
		"dbo:dateCompleted": {
		  "range": "xds:date",
		  "domain": "dbo:Canal"
		},
		"dbo:shipDisplacement": {
		  "comment": "A ship's displacement is its mass at any given time.",
		  "range": "xds:double",
		  "domain": "dbo:Ship"
		},
		"dbo:collegeHof": {
		  "range": "xds:string",
		  "domain": "dbo:Athlete"
		},
		"dbo:cousurper": {
		  "range": "dbo:Person",
		  "domain": "dbo:Person"
		},
		"dbo:administrator": {
		  "range": "dbo:Person",
		  "domain": "dbo:School"
		},
		"dbo:PopulatedPlace/areaTotal": {
		  "range": "rdfs:Literal",
		  "domain": "owl:Thing"
		},
		"dbo:band": {
		  "range": "xds:string",
		  "domain": "dbo:Protein"
		},
		"dbo:formerChoreographer": {
		  "range": "dbo:Person",
		  "domain": "dbo:FigureSkater",
		  "superproperty": [
		    "odesignp:coparticipatesWith"
		  ]
		},
		"dbo:subPrefecture": {
		  "range": "xds:string",
		  "domain": "dbo:Place"
		},
		"dbo:secretaryGeneral": {
		  "range": "dbo:Person",
		  "domain": "dbo:Organisation",
		  "superproperty": [
		    "odesignp:sameSettingAs"
		  ]
		},
		"dbo:numberOfRun": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:Person"
		},
		"dbo:documentDesignation": {
		  "range": "xds:string",
		  "domain": "owl:Thing"
		},
		"dbo:orbitalFlights": {
		  "range": "xds:nonNegativeInteger",
		  "domain": "dbo:YearInSpaceflight"
		}
	}
	// this.dboNonURIProperty = [{"domain":"dbo:Continent","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Country","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:ElectionDiagram","range":"dbo:Election","type":"rdfs:SubClassOf"},{"domain":"dbo:Agglomeration","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:TimePeriod","range":"dbo:Person","type":"owl:disjointWith"},{"domain":"dbo:UnitOfWork","range":"dbo:Person","type":"owl:disjointWith"},{"domain":"dbo:Event","range":"dbo:Person","type":"owl:disjointWith"},{"domain":"dbo:Tower","range":"dbo:Person","type":"owl:disjointWith"},{"domain":"dbo:HumanGene","range":"dbo:Gene","type":"rdfs:SubClassOf"},{"domain":"dbo:MouseGene","range":"dbo:Gene","type":"rdfs:SubClassOf"},{"domain":"dbo:PeriodOfArtisticStyle","range":"dbo:Person","type":"owl:disjointWith"},{"domain":"dbo:HistoricalPeriod","range":"dbo:Person","type":"owl:disjointWith"},{"domain":"dbo:Building","range":"dbo:Person","type":"owl:disjointWith"},{"domain":"dbo:Mountain","range":"dbo:Person","type":"owl:disjointWith"},{"domain":"dbo:GeologicalPeriod","range":"dbo:Person","type":"owl:disjointWith"},{"domain":"dbo:TheatreDirector","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Gate","range":"dbo:Person","type":"owl:disjointWith"},{"domain":"dbo:MeanOfTransportation","range":"dbo:Person","type":"owl:disjointWith"},{"domain":"dbo:TelevisionDirector","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:TelevisionPersonality","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:SportsManager","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:PlayboyPlaymate","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Psychologist","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Referee","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Presenter","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Producer","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Royalty","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Scientist","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Religious","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:RomanEmperor","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Politician","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:PoliticianSpouse","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Lawyer","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Linguist","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:MovieDirector","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:MythologicalFigure","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Model","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Monarch","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:OrganisationMember","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Philosopher","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Noble","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:OfficeHolder","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:MilitaryPerson","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Egyptologist","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Criminal","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Economist","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Farmer","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:FictionalCharacter","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Employer","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Engineer","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Journalist","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Judge","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Historian","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:HorseTrainer","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Astronaut","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Athlete","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Aristocrat","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Artist","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Bullfighter","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:BusinessPerson","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:BeautyQueen","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Cleric","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Coach","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Celebrity","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Chef","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:VoiceActor","range":"dbo:Actor","type":"rdfs:SubClassOf"},{"domain":"dbo:AnimangaCharacter","range":"dbo:ComicsCharacter","type":"rdfs:SubClassOf"},{"domain":"dbo:Guitarist","range":"dbo:Instrumentalist","type":"rdfs:SubClassOf"},{"domain":"dbo:AdultActor","range":"dbo:Actor","type":"rdfs:SubClassOf"},{"domain":"dbo:Canal","range":"dbo:Stream","type":"rdfs:SubClassOf"},{"domain":"dbo:River","range":"dbo:Stream","type":"rdfs:SubClassOf"},{"domain":"dbo:MovieGenre","range":"dbo:Genre","type":"rdfs:SubClassOf"},{"domain":"dbo:Archeologist","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Architect","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:MusicGenre","range":"dbo:Genre","type":"rdfs:SubClassOf"},{"domain":"dbo:Ambassador","range":"dbo:Person","type":"rdfs:SubClassOf"},{"domain":"dbo:Intercommunality","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Island","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Department","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:GatedCommunity","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Locality","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Prefecture","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Region","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Street","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Territory","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Settlement","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:State","range":"dbo:PopulatedPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Swarm","range":"odesignp:Configuration","type":"rdfs:SubClassOf"},{"domain":"dbo:GraveMonument","range":"dbo:Monument","type":"rdfs:SubClassOf"},{"domain":"dbo:Memorial","range":"dbo:Monument","type":"rdfs:SubClassOf"},{"domain":"dbo:DigitalCamera","range":"dbo:Camera","type":"rdfs:SubClassOf"},{"domain":"dbo:GolfTournament","range":"dbo:Tournament","type":"rdfs:SubClassOf"},{"domain":"dbo:WomensTennisAssociationTournament","range":"dbo:Tournament","type":"rdfs:SubClassOf"},{"domain":"dbo:BiologicalDatabase","range":"dbo:Database","type":"rdfs:SubClassOf"},{"domain":"dbo:SoccerTournament","range":"dbo:Tournament","type":"rdfs:SubClassOf"},{"domain":"dbo:TennisTournament","range":"dbo:Tournament","type":"rdfs:SubClassOf"},{"domain":"dbo:TelevisionHost","range":"dbo:Presenter","type":"rdfs:SubClassOf"},{"domain":"dbo:Beverage","range":"dbo:Food","type":"rdfs:SubClassOf"},{"domain":"dbo:Biomolecule","range":"odesignp:BiologicalObject","type":"rdfs:SubClassOf"},{"domain":"dbo:RadioHost","range":"dbo:Presenter","type":"rdfs:SubClassOf"},{"domain":"dbo:Cheese","range":"dbo:Food","type":"rdfs:SubClassOf"},{"domain":"dbo:RecordOffice","range":"dbo:Non-ProfitOrganisation","type":"rdfs:SubClassOf"},{"domain":"dbo:Deity","range":"dbo:Agent","type":"rdfs:SubClassOf"},{"domain":"dbo:Person","range":"dbo:Agent","type":"rdfs:SubClassOf"},{"domain":"dbo:Place","range":"dbo:Agent","type":"owl:disjointWith"},{"domain":"dbo:Family","range":"dbo:Agent","type":"rdfs:SubClassOf"},{"domain":"dbo:Organisation","range":"dbo:Agent","type":"rdfs:SubClassOf"},{"domain":"dbo:LifeCycleEvent","range":"dbo:Event","type":"rdfs:SubClassOf"},{"domain":"dbo:NaturalEvent","range":"dbo:Event","type":"rdfs:SubClassOf"},{"domain":"dbo:AmericanFootballPlayer","range":"dbo:GridironFootballPlayer","type":"rdfs:SubClassOf"},{"domain":"dbo:CanadianFootballPlayer","range":"dbo:GridironFootballPlayer","type":"rdfs:SubClassOf"},{"domain":"dbo:HumanGeneLocation","range":"dbo:GeneLocation","type":"rdfs:SubClassOf"},{"domain":"dbo:SocietalEvent","range":"dbo:Event","type":"rdfs:SubClassOf"},{"domain":"dbo:PolishKing","range":"dbo:Royalty","type":"rdfs:SubClassOf"},{"domain":"dbo:AnatomicalStructure","range":"odesignp:BiologicalObject","type":"rdfs:SubClassOf"},{"domain":"dbo:MouseGeneLocation","range":"dbo:GeneLocation","type":"rdfs:SubClassOf"},{"domain":"dbo:BritishRoyalty","range":"dbo:Royalty","type":"rdfs:SubClassOf"},{"domain":"dbo:Openswarm","range":"dbo:Swarm","type":"rdfs:SubClassOf"},{"domain":"dbo:SumoWrestler","range":"dbo:Wrestler","type":"rdfs:SubClassOf"},{"domain":"dbo:Globularswarm","range":"dbo:Swarm","type":"rdfs:SubClassOf"},{"domain":"dbo:RadioStation","range":"dbo:Broadcaster","type":"rdfs:SubClassOf"},{"domain":"dbo:BroadcastNetwork","range":"dbo:Broadcaster","type":"rdfs:SubClassOf"},{"domain":"dbo:Painting","range":"dbo:Artwork","type":"rdfs:SubClassOf"},{"domain":"dbo:TelevisionStation","range":"dbo:Broadcaster","type":"rdfs:SubClassOf"},{"domain":"dbo:RoadJunction","range":"dbo:RouteOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:RoadTunnel","range":"dbo:RouteOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:RailwayTunnel","range":"dbo:RouteOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:Road","range":"dbo:RouteOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:WaterwayTunnel","range":"dbo:RouteOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:Aircraft","range":"dbo:MeanOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:Bridge","range":"dbo:RouteOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:RailwayLine","range":"dbo:RouteOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:Mineral","range":"dbo:ChemicalSubstance","type":"rdfs:SubClassOf"},{"domain":"dbo:Species","range":"odesignp:Organism","type":"rdfs:SubClassOf"},{"domain":"dbo:Muscle","range":"dbo:AnatomicalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Nerve","range":"dbo:AnatomicalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Ligament","range":"dbo:AnatomicalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Lymph","range":"dbo:AnatomicalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:ChemicalElement","range":"dbo:ChemicalSubstance","type":"rdfs:SubClassOf"},{"domain":"dbo:Vein","range":"dbo:AnatomicalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:ChemicalCompound","range":"dbo:ChemicalSubstance","type":"rdfs:SubClassOf"},{"domain":"dbo:Brain","range":"dbo:AnatomicalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Embryology","range":"dbo:AnatomicalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Bone","range":"dbo:AnatomicalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:AmateurBoxer","range":"dbo:Boxer","type":"rdfs:SubClassOf"},{"domain":"dbo:Year","range":"odesignp:TimeInterval","type":"rdfs:SubClassOf"},{"domain":"dbo:OlympicEvent","range":"dbo:Olympics","type":"rdfs:SubClassOf"},{"domain":"dbo:NuclearPowerStation","range":"dbo:PowerStation","type":"rdfs:SubClassOf"},{"domain":"dbo:Holiday","range":"odesignp:TimeInterval","type":"rdfs:SubClassOf"},{"domain":"dbo:Group","range":"schema:Organization","type":"rdfs:SubClassOf"},{"domain":"dbo:Artery","range":"dbo:AnatomicalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:NationalSoccerClub","range":"dbo:SoccerClub","type":"rdfs:SubClassOf"},{"domain":"dbo:Atoll","range":"dbo:Island","type":"rdfs:SubClassOf"},{"domain":"dbo:EurovisionSongContestEntry","range":"dbo:Song","type":"rdfs:SubClassOf"},{"domain":"dbo:HistoricalPeriod","range":"dbo:PrehistoricalPeriod","type":"owl:disjointWith"},{"domain":"dbo:ClericalAdministrativeRegion","range":"dbo:AdministrativeRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:GovernmentalAdministrativeRegion","range":"dbo:AdministrativeRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:Fashion","range":"dbo:TopicalConcept","type":"rdfs:SubClassOf"},{"domain":"dbo:Genre","range":"dbo:TopicalConcept","type":"rdfs:SubClassOf"},{"domain":"dbo:MeanOfTransportation","range":"odesignp:DesignedArtifact","type":"rdfs:SubClassOf"},{"domain":"dbo:ChristianDoctrine","range":"dbo:TopicalConcept","type":"rdfs:SubClassOf"},{"domain":"dbo:Taxon","range":"dbo:TopicalConcept","type":"rdfs:SubClassOf"},{"domain":"dbo:Type","range":"dbo:TopicalConcept","type":"rdfs:SubClassOf"},{"domain":"dbo:Ideology","range":"dbo:TopicalConcept","type":"rdfs:SubClassOf"},{"domain":"dbo:SystemOfLaw","range":"dbo:TopicalConcept","type":"rdfs:SubClassOf"},{"domain":"dbo:Device","range":"odesignp:DesignedArtifact","type":"rdfs:SubClassOf"},{"domain":"dbo:PoliticalFunction","range":"dbo:PersonFunction","type":"rdfs:SubClassOf"},{"domain":"dbo:Profession","range":"dbo:PersonFunction","type":"rdfs:SubClassOf"},{"domain":"dbo:Professor","range":"dbo:Scientist","type":"rdfs:SubClassOf"},{"domain":"dbo:MusicalArtist","range":"odesignp:NaturalPerson","type":"rdfs:SubClassOf"},{"domain":"dbo:Entomologist","range":"dbo:Scientist","type":"rdfs:SubClassOf"},{"domain":"dbo:Medician","range":"dbo:Scientist","type":"rdfs:SubClassOf"},{"domain":"dbo:Work","range":"dbo:wgs84_pos:SpatialThing","type":"owl:disjointWith"},{"domain":"dbo:Organisation","range":"dbo:wgs84_pos:SpatialThing","type":"owl:disjointWith"},{"domain":"dbo:Guitar","range":"dbo:Instrument","type":"rdfs:SubClassOf"},{"domain":"dbo:Organ","range":"dbo:Instrument","type":"rdfs:SubClassOf"},{"domain":"dbo:ChristianBishop","range":"dbo:Cleric","type":"rdfs:SubClassOf"},{"domain":"dbo:ChristianPatriarch","range":"dbo:Cleric","type":"rdfs:SubClassOf"},{"domain":"dbo:University","range":"dbo:EducationalInstitution","type":"rdfs:SubClassOf"},{"domain":"dbo:Cardinal","range":"dbo:Cleric","type":"rdfs:SubClassOf"},{"domain":"dbo:Priest","range":"dbo:Cleric","type":"rdfs:SubClassOf"},{"domain":"dbo:Saint","range":"dbo:Cleric","type":"rdfs:SubClassOf"},{"domain":"dbo:Pope","range":"dbo:Cleric","type":"rdfs:SubClassOf"},{"domain":"dbo:Monastery","range":"http://www.ontologydesignpatterns.org/ont/d0.owl#Location","type":"rdfs:SubClassOf"},{"domain":"dbo:Place","range":"http://www.ontologydesignpatterns.org/ont/d0.owl#Location","type":"rdfs:SubClassOf"},{"domain":"dbo:Vicar","range":"dbo:Cleric","type":"rdfs:SubClassOf"},{"domain":"dbo:GeneLocation","range":"http://www.ontologydesignpatterns.org/ont/d0.owl#Location","type":"rdfs:SubClassOf"},{"domain":"dbo:Watermill","range":"dbo:Mill","type":"rdfs:SubClassOf"},{"domain":"dbo:WindMotor","range":"dbo:Mill","type":"rdfs:SubClassOf"},{"domain":"dbo:BoardGame","range":"dbo:Game","type":"rdfs:SubClassOf"},{"domain":"dbo:Treadmill","range":"dbo:Mill","type":"rdfs:SubClassOf"},{"domain":"dbo:Windmill","range":"dbo:Mill","type":"rdfs:SubClassOf"},{"domain":"dbo:Reference","range":"dbo:Annotation","type":"rdfs:SubClassOf"},{"domain":"dbo:PersonalEvent","range":"dbo:LifeCycleEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:Library","range":"dbo:EducationalInstitution","type":"rdfs:SubClassOf"},{"domain":"dbo:School","range":"dbo:EducationalInstitution","type":"rdfs:SubClassOf"},{"domain":"dbo:College","range":"dbo:EducationalInstitution","type":"rdfs:SubClassOf"},{"domain":"dbo:LunarCrater","range":"dbo:Crater","type":"rdfs:SubClassOf"},{"domain":"dbo:Game","range":"dbo:Activity","type":"rdfs:SubClassOf"},{"domain":"dbo:Sculpture","range":"dbo:Artwork","type":"rdfs:SubClassOf"},{"domain":"dbo:Person","range":"dbo:Activity","type":"owl:disjointWith"},{"domain":"dbo:Sport","range":"dbo:Activity","type":"rdfs:SubClassOf"},{"domain":"dbo:Airport","range":"dbo:Infrastructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Dog","range":"dbo:Mammal","type":"rdfs:SubClassOf"},{"domain":"dbo:SportsTeamSeason","range":"dbo:SportsSeason","type":"rdfs:SubClassOf"},{"domain":"dbo:Fish","range":"dbo:Mammal","type":"owl:disjointWith"},{"domain":"dbo:RaceHorse","range":"dbo:Mammal","type":"rdfs:SubClassOf"},{"domain":"dbo:Person","range":"dbo:Plant","type":"owl:disjointWith"},{"domain":"dbo:Moss","range":"dbo:Plant","type":"rdfs:SubClassOf"},{"domain":"dbo:MotorsportSeason","range":"dbo:SportsSeason","type":"rdfs:SubClassOf"},{"domain":"dbo:HistoricalProvince","range":"dbo:Province","type":"rdfs:SubClassOf"},{"domain":"dbo:GreenAlga","range":"dbo:Plant","type":"rdfs:SubClassOf"},{"domain":"dbo:SoccerManager","range":"dbo:SportsManager","type":"rdfs:SubClassOf"},{"domain":"dbo:Station","range":"dbo:Infrastructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Camera","range":"dbo:Device","type":"rdfs:SubClassOf"},{"domain":"dbo:AutomobileEngine","range":"dbo:Device","type":"rdfs:SubClassOf"},{"domain":"dbo:Port","range":"dbo:Infrastructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Lock","range":"dbo:Infrastructure","type":"rdfs:SubClassOf"},{"domain":"dbo:RouteOfTransportation","range":"dbo:Infrastructure","type":"rdfs:SubClassOf"},{"domain":"dbo:PowerStation","range":"dbo:Infrastructure","type":"rdfs:SubClassOf"},{"domain":"dbo:LaunchPad","range":"dbo:Infrastructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Dam","range":"dbo:Infrastructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Gnetophytes","range":"dbo:Plant","type":"rdfs:SubClassOf"},{"domain":"dbo:Ginkgo","range":"dbo:Plant","type":"rdfs:SubClassOf"},{"domain":"dbo:Cycad","range":"dbo:Plant","type":"rdfs:SubClassOf"},{"domain":"dbo:CultivatedVariety","range":"dbo:Plant","type":"rdfs:SubClassOf"},{"domain":"dbo:FloweringPlant","range":"dbo:Plant","type":"rdfs:SubClassOf"},{"domain":"dbo:Fern","range":"dbo:Plant","type":"rdfs:SubClassOf"},{"domain":"dbo:PublicServiceOutput","range":"dbo:PublicService","type":"rdfs:SubClassOf"},{"domain":"dbo:PublicServiceInput","range":"dbo:PublicService","type":"rdfs:SubClassOf"},{"domain":"dbo:Conifer","range":"dbo:Plant","type":"rdfs:SubClassOf"},{"domain":"dbo:ClubMoss","range":"dbo:Plant","type":"rdfs:SubClassOf"},{"domain":"dbo:Sculptor","range":"dbo:Artist","type":"rdfs:SubClassOf"},{"domain":"dbo:Writer","range":"dbo:Artist","type":"rdfs:SubClassOf"},{"domain":"dbo:Painter","range":"dbo:Artist","type":"rdfs:SubClassOf"},{"domain":"dbo:Photographer","range":"dbo:Artist","type":"rdfs:SubClassOf"},{"domain":"dbo:Lake","range":"dbo:BodyOfWater","type":"rdfs:SubClassOf"},{"domain":"dbo:Ocean","range":"dbo:BodyOfWater","type":"rdfs:SubClassOf"},{"domain":"dbo:Sea","range":"dbo:BodyOfWater","type":"rdfs:SubClassOf"},{"domain":"dbo:MusicGenre","range":"odesignp:Concept","type":"rdfs:SubClassOf"},{"domain":"dbo:TopicalConcept","range":"odesignp:Concept","type":"rdfs:SubClassOf"},{"domain":"dbo:Stream","range":"dbo:BodyOfWater","type":"rdfs:SubClassOf"},{"domain":"dbo:GovernmentType","range":"odesignp:Concept","type":"rdfs:SubClassOf"},{"domain":"dbo:YearInSpaceflight","range":"dbo:TimePeriod","type":"rdfs:SubClassOf"},{"domain":"dbo:Actor","range":"dbo:Artist","type":"rdfs:SubClassOf"},{"domain":"dbo:Comedian","range":"dbo:Artist","type":"rdfs:SubClassOf"},{"domain":"dbo:ComicsCreator","range":"dbo:Artist","type":"rdfs:SubClassOf"},{"domain":"dbo:Humorist","range":"dbo:Artist","type":"rdfs:SubClassOf"},{"domain":"dbo:MusicalArtist","range":"dbo:Artist","type":"rdfs:SubClassOf"},{"domain":"dbo:Dancer","range":"dbo:Artist","type":"rdfs:SubClassOf"},{"domain":"dbo:FashionDesigner","range":"dbo:Artist","type":"rdfs:SubClassOf"},{"domain":"dbo:Wine","range":"dbo:Beverage","type":"rdfs:SubClassOf"},{"domain":"dbo:Death","range":"dbo:PersonalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:Birth","range":"dbo:PersonalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:Deanery","range":"dbo:ClericalAdministrativeRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:Diocese","range":"dbo:ClericalAdministrativeRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:CollegeCoach","range":"dbo:Coach","type":"rdfs:SubClassOf"},{"domain":"dbo:VolleyballCoach","range":"dbo:Coach","type":"rdfs:SubClassOf"},{"domain":"dbo:HistoricalPeriod","range":"dbo:TimePeriod","type":"rdfs:SubClassOf"},{"domain":"dbo:Parish","range":"dbo:ClericalAdministrativeRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:GeologicalPeriod","range":"dbo:TimePeriod","type":"rdfs:SubClassOf"},{"domain":"dbo:ProtohistoricalPeriod","range":"dbo:TimePeriod","type":"rdfs:SubClassOf"},{"domain":"dbo:Year","range":"dbo:TimePeriod","type":"rdfs:SubClassOf"},{"domain":"dbo:PeriodOfArtisticStyle","range":"dbo:TimePeriod","type":"rdfs:SubClassOf"},{"domain":"dbo:PrehistoricalPeriod","range":"dbo:TimePeriod","type":"rdfs:SubClassOf"},{"domain":"dbo:CricketGround","range":"dbo:SportFacility","type":"rdfs:SubClassOf"},{"domain":"dbo:Plant","range":"dbo:Eukaryote","type":"rdfs:SubClassOf"},{"domain":"dbo:GolfCourse","range":"dbo:SportFacility","type":"rdfs:SubClassOf"},{"domain":"dbo:Marriage","range":"dbo:PersonalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:Divorce","range":"dbo:PersonalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:Fungus","range":"dbo:Eukaryote","type":"rdfs:SubClassOf"},{"domain":"dbo:Animal","range":"dbo:Eukaryote","type":"rdfs:SubClassOf"},{"domain":"dbo:Stadium","range":"dbo:SportFacility","type":"rdfs:SubClassOf"},{"domain":"dbo:RaceTrack","range":"dbo:SportFacility","type":"rdfs:SubClassOf"},{"domain":"dbo:Brewery","range":"dbo:Company","type":"rdfs:SubClassOf"},{"domain":"dbo:Airline","range":"dbo:Company","type":"rdfs:SubClassOf"},{"domain":"dbo:Ship","range":"dbo:MeanOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:SpaceShuttle","range":"dbo:MeanOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:Motorcycle","range":"dbo:MeanOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:Rocket","range":"dbo:MeanOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:Train","range":"dbo:MeanOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:SpaceStation","range":"dbo:MeanOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:Spacecraft","range":"dbo:MeanOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:BrownDwarf","range":"dbo:Star","type":"rdfs:SubClassOf"},{"domain":"dbo:AmericanFootballCoach","range":"dbo:Coach","type":"rdfs:SubClassOf"},{"domain":"dbo:Fish","range":"dbo:Dog","type":"owl:disjointWith"},{"domain":"dbo:Novel","range":"dbo:Book","type":"rdfs:SubClassOf"},{"domain":"dbo:Winery","range":"dbo:Company","type":"rdfs:SubClassOf"},{"domain":"dbo:LawFirm","range":"dbo:Company","type":"rdfs:SubClassOf"},{"domain":"dbo:BusCompany","range":"dbo:Company","type":"rdfs:SubClassOf"},{"domain":"dbo:RecordLabel","range":"dbo:Company","type":"rdfs:SubClassOf"},{"domain":"dbo:Publisher","range":"dbo:Company","type":"rdfs:SubClassOf"},{"domain":"dbo:BasketballTeam","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:Automobile","range":"dbo:MeanOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:SpeedwayTeam","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:Locomotive","range":"dbo:MeanOfTransportation","type":"rdfs:SubClassOf"},{"domain":"dbo:HockeyTeam","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:HandballTeam","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:SoccerClub","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:RugbyClub","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:CricketTeam","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:CanadianFootballTeam","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:FormulaOneTeam","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:CyclingTeam","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:Image","range":"dbo:Document","type":"rdfs:SubClassOf"},{"domain":"dbo:File","range":"dbo:Document","type":"rdfs:SubClassOf"},{"domain":"dbo:Contest","range":"dbo:Competition","type":"rdfs:SubClassOf"},{"domain":"dbo:LegalCase","range":"dbo:Case","type":"rdfs:SubClassOf"},{"domain":"dbo:Beer","range":"dbo:Beverage","type":"rdfs:SubClassOf"},{"domain":"dbo:Theatre","range":"dbo:Venue","type":"rdfs:SubClassOf"},{"domain":"dbo:Person","range":"dbo:ProtohistoricalPeriod","type":"owl:disjointWith"},{"domain":"dbo:Sound","range":"dbo:Document","type":"rdfs:SubClassOf"},{"domain":"dbo:NobelPrize","range":"dbo:Award","type":"rdfs:SubClassOf"},{"domain":"dbo:Decoration","range":"dbo:Award","type":"rdfs:SubClassOf"},{"domain":"dbo:CyclingCompetition","range":"dbo:SportsEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:UnitOfWork","range":"odesignp:Situation","type":"rdfs:SubClassOf"},{"domain":"dbo:FootballMatch","range":"dbo:SportsEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:Disease","range":"odesignp:Situation","type":"rdfs:SubClassOf"},{"domain":"dbo:CareerStation","range":"odesignp:Situation","type":"rdfs:SubClassOf"},{"domain":"dbo:Sales","range":"odesignp:Situation","type":"rdfs:SubClassOf"},{"domain":"dbo:LegalCase","range":"odesignp:Situation","type":"rdfs:SubClassOf"},{"domain":"dbo:InformationAppliance","range":"dbo:Device","type":"rdfs:SubClassOf"},{"domain":"dbo:Weapon","range":"dbo:Device","type":"rdfs:SubClassOf"},{"domain":"dbo:Instrument","range":"dbo:Device","type":"rdfs:SubClassOf"},{"domain":"dbo:BaseballTeam","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:AustralianFootballTeam","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:Tournament","range":"dbo:SportsEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:Race","range":"dbo:SportsEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:AmericanFootballTeam","range":"dbo:SportsTeam","type":"rdfs:SubClassOf"},{"domain":"dbo:WrestlingEvent","range":"dbo:SportsEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:MixedMartialArtsEvent","range":"dbo:SportsEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:GrandPrix","range":"dbo:SportsEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:Olympics","range":"dbo:SportsEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:NationalFootballLeagueEvent","range":"dbo:SportsEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:GovernmentType","range":"dbo:Type","type":"rdfs:SubClassOf"},{"domain":"dbo:RollerCoaster","range":"dbo:AmusementParkAttraction","type":"rdfs:SubClassOf"},{"domain":"dbo:RallyDriver","range":"dbo:RacingDriver","type":"rdfs:SubClassOf"},{"domain":"dbo:DocumentType","range":"dbo:Type","type":"rdfs:SubClassOf"},{"domain":"dbo:PenaltyShootOut","range":"odesignp:Event","type":"rdfs:SubClassOf"},{"domain":"dbo:WaterRide","range":"dbo:AmusementParkAttraction","type":"rdfs:SubClassOf"},{"domain":"dbo:Listen","range":"odesignp:Event","type":"rdfs:SubClassOf"},{"domain":"dbo:MotocycleRacer","range":"dbo:RacingDriver","type":"rdfs:SubClassOf"},{"domain":"dbo:NascarDriver","range":"dbo:RacingDriver","type":"rdfs:SubClassOf"},{"domain":"dbo:FormulaOneRacer","range":"dbo:RacingDriver","type":"rdfs:SubClassOf"},{"domain":"dbo:Deputy","range":"dbo:Politician","type":"rdfs:SubClassOf"},{"domain":"dbo:President","range":"dbo:Politician","type":"rdfs:SubClassOf"},{"domain":"dbo:PrimeMinister","range":"dbo:Politician","type":"rdfs:SubClassOf"},{"domain":"dbo:Mayor","range":"dbo:Politician","type":"rdfs:SubClassOf"},{"domain":"dbo:MemberOfParliament","range":"dbo:Politician","type":"rdfs:SubClassOf"},{"domain":"dbo:VicePrimeMinister","range":"dbo:Politician","type":"rdfs:SubClassOf"},{"domain":"dbo:Project","range":"odesignp:PlanExecution","type":"rdfs:SubClassOf"},{"domain":"dbo:Senator","range":"dbo:Politician","type":"rdfs:SubClassOf"},{"domain":"dbo:VicePresident","range":"dbo:Politician","type":"rdfs:SubClassOf"},{"domain":"dbo:Governor","range":"dbo:Politician","type":"rdfs:SubClassOf"},{"domain":"dbo:Lieutenant","range":"dbo:Politician","type":"rdfs:SubClassOf"},{"domain":"dbo:CelestialBody","range":"odesignp:PhysicalBody","type":"rdfs:SubClassOf"},{"domain":"dbo:Municipality","range":"dbo:GovernmentalAdministrativeRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:Province","range":"dbo:GovernmentalAdministrativeRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:DistrictWaterBoard","range":"dbo:GovernmentalAdministrativeRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:MicroRegion","range":"dbo:GovernmentalAdministrativeRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:Chancellor","range":"dbo:Politician","type":"rdfs:SubClassOf"},{"domain":"dbo:Congressman","range":"dbo:Politician","type":"rdfs:SubClassOf"},{"domain":"dbo:Regency","range":"dbo:GovernmentalAdministrativeRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:SubMunicipality","range":"dbo:GovernmentalAdministrativeRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:District","range":"dbo:GovernmentalAdministrativeRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:FilmFestival","range":"dbo:SocietalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:Convention","range":"dbo:SocietalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:Election","range":"dbo:SocietalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:MusicFestival","range":"dbo:SocietalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:SpaceMission","range":"dbo:SocietalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:Meeting","range":"dbo:SocietalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:MilitaryConflict","range":"dbo:SocietalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:WaterTower","range":"dbo:Tower","type":"rdfs:SubClassOf"},{"domain":"dbo:SportsEvent","range":"dbo:SocietalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:Lighthouse","range":"dbo:Tower","type":"rdfs:SubClassOf"},{"domain":"dbo:Album","range":"dbo:MusicalWork","type":"rdfs:SubClassOf"},{"domain":"dbo:ArtistDiscography","range":"dbo:MusicalWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Band","range":"schema:MusicGroup","type":"rdfs:SubClassOf"},{"domain":"dbo:MusicalArtist","range":"schema:MusicGroup","type":"rdfs:SubClassOf"},{"domain":"dbo:NationalAnthem","range":"dbo:MusicalWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Opera","range":"dbo:MusicalWork","type":"rdfs:SubClassOf"},{"domain":"dbo:ClassicalMusicComposition","range":"dbo:MusicalWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Baronet","range":"dbo:BritishRoyalty","type":"rdfs:SubClassOf"},{"domain":"dbo:ArtificialSatellite","range":"dbo:Satellite","type":"rdfs:SubClassOf"},{"domain":"dbo:Single","range":"dbo:MusicalWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Song","range":"dbo:MusicalWork","type":"rdfs:SubClassOf"},{"domain":"dbo:PersonFunction","range":"odesignp:Role","type":"rdfs:SubClassOf"},{"domain":"dbo:SnookerWorldRanking","range":"odesignp:Role","type":"rdfs:SubClassOf"},{"domain":"dbo:Reptile","range":"dbo:Animal","type":"rdfs:SubClassOf"},{"domain":"dbo:Unknown","range":"odesignp:Entity","type":"rdfs:SubClassOf"},{"domain":"dbo:ControlledDesignationOfOriginWine","range":"dbo:Wine","type":"rdfs:SubClassOf"},{"domain":"dbo:ResearchProject","range":"dbo:Project","type":"rdfs:SubClassOf"},{"domain":"dbo:LightNovel","range":"dbo:Novel","type":"rdfs:SubClassOf"},{"domain":"dbo:RacingDriver","range":"dbo:MotorsportRacer","type":"rdfs:SubClassOf"},{"domain":"dbo:BackScene","range":"dbo:MusicalArtist","type":"rdfs:SubClassOf"},{"domain":"dbo:PublicService","range":"http://dbpedia.org/ontology/","type":"rdfs:SubClassOf"},{"domain":"dbo:MotorcycleRider","range":"dbo:MotorsportRacer","type":"rdfs:SubClassOf"},{"domain":"dbo:Manhwa","range":"dbo:Comics","type":"rdfs:SubClassOf"},{"domain":"dbo:Amphibian","range":"dbo:Animal","type":"rdfs:SubClassOf"},{"domain":"dbo:Manga","range":"dbo:Comics","type":"rdfs:SubClassOf"},{"domain":"dbo:Manhua","range":"dbo:Comics","type":"rdfs:SubClassOf"},{"domain":"dbo:Arachnid","range":"dbo:Animal","type":"rdfs:SubClassOf"},{"domain":"dbo:Bird","range":"dbo:Animal","type":"rdfs:SubClassOf"},{"domain":"dbo:Crustacean","range":"dbo:Animal","type":"rdfs:SubClassOf"},{"domain":"dbo:Mammal","range":"dbo:Animal","type":"rdfs:SubClassOf"},{"domain":"dbo:Mollusca","range":"dbo:Animal","type":"rdfs:SubClassOf"},{"domain":"dbo:Fish","range":"dbo:Animal","type":"rdfs:SubClassOf"},{"domain":"dbo:Insect","range":"dbo:Animal","type":"rdfs:SubClassOf"},{"domain":"dbo:Tunnel","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Venue","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Square","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Tower","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Zoo","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:ProgrammingLanguage","range":"dbo:Software","type":"rdfs:SubClassOf"},{"domain":"dbo:VideoGame","range":"dbo:Software","type":"rdfs:SubClassOf"},{"domain":"dbo:TrackList","range":"dbo:List","type":"rdfs:SubClassOf"},{"domain":"dbo:ComicStrip","range":"dbo:Comics","type":"rdfs:SubClassOf"},{"domain":"dbo:Murderer","range":"dbo:Criminal","type":"rdfs:SubClassOf"},{"domain":"dbo:SerialKiller","range":"dbo:Criminal","type":"rdfs:SubClassOf"},{"domain":"dbo:Arena","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Building","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:SoccerLeagueSeason","range":"dbo:SportsTeamSeason","type":"rdfs:SubClassOf"},{"domain":"dbo:AmusementParkAttraction","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:MilitaryStructure","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Gate","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Infrastructure","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Pyramid","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Shrine","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:Mill","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:NoteworthyPartOfBuilding","range":"dbo:ArchitecturalStructure","type":"rdfs:SubClassOf"},{"domain":"dbo:TelevisionSeason","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:TelevisionShow","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:Software","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:TelevisionEpisode","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:BaseballSeason","range":"dbo:SportsTeamSeason","type":"rdfs:SubClassOf"},{"domain":"dbo:Website","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:WrittenWork","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:NCAATeamSeason","range":"dbo:SportsTeamSeason","type":"rdfs:SubClassOf"},{"domain":"dbo:SoccerClubSeason","range":"dbo:SportsTeamSeason","type":"rdfs:SubClassOf"},{"domain":"dbo:FootballLeagueSeason","range":"dbo:SportsTeamSeason","type":"rdfs:SubClassOf"},{"domain":"dbo:Musical","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:Cartoon","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:CollectionOfValuables","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:Artwork","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:Film","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:LineOfFashion","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:Database","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:Document","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:MusicalWork","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:RadioProgram","range":"dbo:Work","type":"rdfs:SubClassOf"},{"domain":"dbo:HistoricalDistrict","range":"dbo:District","type":"rdfs:SubClassOf"},{"domain":"dbo:Church","range":"dbo:ReligiousBuilding","type":"rdfs:SubClassOf"},{"domain":"dbo:NationalFootballLeagueSeason","range":"dbo:FootballLeagueSeason","type":"rdfs:SubClassOf"},{"domain":"dbo:Casino","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:Temple","range":"dbo:ReligiousBuilding","type":"rdfs:SubClassOf"},{"domain":"dbo:EthnicGroup","range":"odesignp:Collective","type":"rdfs:SubClassOf"},{"domain":"dbo:HistoricBuilding","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:Hospital","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:Castle","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:Factory","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:Mosque","range":"dbo:ReligiousBuilding","type":"rdfs:SubClassOf"},{"domain":"dbo:Synagogue","range":"dbo:ReligiousBuilding","type":"rdfs:SubClassOf"},{"domain":"dbo:Drama","range":"dbo:WrittenWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Installment","range":"dbo:WrittenWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Poem","range":"dbo:WrittenWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Resume","range":"dbo:WrittenWork","type":"rdfs:SubClassOf"},{"domain":"dbo:PeriodicalLiterature","range":"dbo:WrittenWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Play","range":"dbo:WrittenWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Ideology","range":"http://www.ontologydesignpatterns.org/ont/d0.owl#CognitiveEntity","type":"rdfs:SubClassOf"},{"domain":"dbo:SnookerChamp","range":"dbo:SnookerPlayer","type":"rdfs:SubClassOf"},{"domain":"dbo:StatedResolution","range":"dbo:WrittenWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Band","range":"odesignp:SocialPerson","type":"rdfs:SubClassOf"},{"domain":"dbo:MultiVolumePublication","range":"dbo:WrittenWork","type":"rdfs:SubClassOf"},{"domain":"dbo:MusicDirector","range":"dbo:MusicalArtist","type":"rdfs:SubClassOf"},{"domain":"dbo:ClassicalMusicArtist","range":"dbo:MusicalArtist","type":"rdfs:SubClassOf"},{"domain":"dbo:Instrumentalist","range":"dbo:MusicalArtist","type":"rdfs:SubClassOf"},{"domain":"dbo:Capital","range":"dbo:City","type":"rdfs:SubClassOf"},{"domain":"dbo:CapitalOfRegion","range":"dbo:City","type":"rdfs:SubClassOf"},{"domain":"dbo:Singer","range":"dbo:MusicalArtist","type":"rdfs:SubClassOf"},{"domain":"dbo:Colour","range":"odesignp:Quality","type":"rdfs:SubClassOf"},{"domain":"dbo:Comic","range":"dbo:WrittenWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Comics","range":"dbo:WrittenWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Annotation","range":"dbo:WrittenWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Book","range":"dbo:WrittenWork","type":"rdfs:SubClassOf"},{"domain":"dbo:GolfPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:FigureSkater","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:GaelicGamesPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:HandballPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:HorseRider","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:GridironFootballPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Gymnast","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:LacrossePlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:MartialArtist","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:IceHockeyPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Jockey","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Boxer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:BullFighter","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:BasketballPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Bodybuilder","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:ChessPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Cricketer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Canoeist","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:DartsPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Fencer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Curler","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Cyclist","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Drug","range":"odesignp:FunctionalSubstance","type":"rdfs:SubClassOf"},{"domain":"dbo:Food","range":"odesignp:FunctionalSubstance","type":"rdfs:SubClassOf"},{"domain":"dbo:SpeedwayRider","range":"dbo:MotorcycleRider","type":"rdfs:SubClassOf"},{"domain":"dbo:SupremeCourtOfTheUnitedStatesCase","range":"dbo:LegalCase","type":"rdfs:SubClassOf"},{"domain":"dbo:MovingImage","range":"dbo:Image","type":"rdfs:SubClassOf"},{"domain":"dbo:StillImage","range":"dbo:Image","type":"rdfs:SubClassOf"},{"domain":"dbo:BadmintonPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:BaseballPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:AthleticsPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:AustralianRulesFootballPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:SiteOfSpecialScientificInterest","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:SkiArea","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:PopulatedPlace","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:ProtectedArea","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:SkiResort","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:SportFacility","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:WineRegion","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:Case","range":"dbo:UnitOfWork","type":"rdfs:SubClassOf"},{"domain":"dbo:Project","range":"dbo:UnitOfWork","type":"rdfs:SubClassOf"},{"domain":"dbo:WorldHeritageSite","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:Community","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:CountrySeat","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:ArchitecturalStructure","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:Cemetery","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:Monastery","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:Garden","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:HistoricPlace","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:NaturalPlace","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:Park","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:Monument","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:Mountain","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:ScreenWriter","range":"dbo:Writer","type":"rdfs:SubClassOf"},{"domain":"dbo:SongWriter","range":"dbo:Writer","type":"rdfs:SubClassOf"},{"domain":"dbo:PlayWright","range":"dbo:Writer","type":"rdfs:SubClassOf"},{"domain":"dbo:Poet","range":"dbo:Writer","type":"rdfs:SubClassOf"},{"domain":"dbo:Constellation","range":"dbo:CelestialBody","type":"rdfs:SubClassOf"},{"domain":"dbo:Galaxy","range":"dbo:CelestialBody","type":"rdfs:SubClassOf"},{"domain":"dbo:Host","range":"dbo:TelevisionPersonality","type":"rdfs:SubClassOf"},{"domain":"dbo:Asteroid","range":"dbo:CelestialBody","type":"rdfs:SubClassOf"},{"domain":"dbo:Star","range":"dbo:CelestialBody","type":"rdfs:SubClassOf"},{"domain":"dbo:Abbey","range":"dbo:Place","type":"rdfs:SubClassOf"},{"domain":"dbo:Planet","range":"dbo:CelestialBody","type":"rdfs:SubClassOf"},{"domain":"dbo:Bacteria","range":"dbo:Species","type":"rdfs:SubClassOf"},{"domain":"dbo:CityDistrict","range":"dbo:Settlement","type":"rdfs:SubClassOf"},{"domain":"dbo:HistoricalSettlement","range":"dbo:Settlement","type":"rdfs:SubClassOf"},{"domain":"dbo:SolarEclipse","range":"dbo:NaturalEvent","type":"rdfs:SubClassOf"},{"domain":"dbo:City","range":"dbo:Settlement","type":"rdfs:SubClassOf"},{"domain":"dbo:List","range":"odesignp:Collection","type":"rdfs:SubClassOf"},{"domain":"dbo:Archaea","range":"dbo:Species","type":"rdfs:SubClassOf"},{"domain":"dbo:Town","range":"dbo:Settlement","type":"rdfs:SubClassOf"},{"domain":"dbo:Village","range":"dbo:Settlement","type":"rdfs:SubClassOf"},{"domain":"dbo:Eukaryote","range":"dbo:Species","type":"rdfs:SubClassOf"},{"domain":"dbo:MusicComposer","range":"dbo:Writer","type":"rdfs:SubClassOf"},{"domain":"dbo:OverseasDepartment","range":"dbo:Department","type":"rdfs:SubClassOf"},{"domain":"dbo:Museum","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:Prison","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:Hotel","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:Library","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:ShoppingMall","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:Skyscraper","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:ReligiousBuilding","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:Restaurant","range":"dbo:Building","type":"rdfs:SubClassOf"},{"domain":"dbo:Currency","range":"odesignp:UnitOfMeasure","type":"rdfs:SubClassOf"},{"domain":"dbo:Surfer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:MotorsportRacer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:NationalCollegiateAthleticAssociationAthlete","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:RugbyPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Skater","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:PokerPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Rower","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:SoccerPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:SquashPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Skier","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:SnookerPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:NetballPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:BoxingCategory","range":"dbo:Boxing","type":"rdfs:SubClassOf"},{"domain":"dbo:BoxingStyle","range":"dbo:Boxing","type":"rdfs:SubClassOf"},{"domain":"dbo:PublicService","range":"odesignp:Description","type":"rdfs:SubClassOf"},{"domain":"dbo:Tax","range":"odesignp:Description","type":"rdfs:SubClassOf"},{"domain":"dbo:HorseRace","range":"dbo:Race","type":"rdfs:SubClassOf"},{"domain":"dbo:Award","range":"odesignp:Description","type":"rdfs:SubClassOf"},{"domain":"dbo:FilmFestival","range":"schema:Festival","type":"rdfs:SubClassOf"},{"domain":"dbo:MusicFestival","range":"schema:Festival","type":"rdfs:SubClassOf"},{"domain":"dbo:AcademicJournal","range":"dbo:PeriodicalLiterature","type":"rdfs:SubClassOf"},{"domain":"dbo:CyclingRace","range":"dbo:Race","type":"rdfs:SubClassOf"},{"domain":"dbo:Anime","range":"dbo:Cartoon","type":"rdfs:SubClassOf"},{"domain":"dbo:HollywoodCartoon","range":"dbo:Cartoon","type":"rdfs:SubClassOf"},{"domain":"dbo:TableTennisPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:TeamMember","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Swimmer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:WaterPoloPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:Wrestler","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:TennisPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:VolleyballPlayer","range":"dbo:Athlete","type":"rdfs:SubClassOf"},{"domain":"dbo:SpeedwayLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:TennisLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:LacrosseLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:IceHockeyLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:InlineHockeyLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:PaintballLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:PoloLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:MixedMartialArtsLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:MotorcycleRacingLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:SoccerLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:SoftballLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:RadioControlledRacingLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:RugbyLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:BoxingLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:CanadianFootballLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:BasketballLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:BowlingLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:CurlingLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:CyclingLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:CricketLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:GolfLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:HandballLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:FieldHockeyLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:FormulaOneRacing","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:TermOfOffice","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:TradeUnion","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:SportsLeague","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:SportsTeam","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:FormerMunicipality","range":"dbo:Municipality","type":"rdfs:SubClassOf"},{"domain":"dbo:Archive","range":"dbo:CollectionOfValuables","type":"rdfs:SubClassOf"},{"domain":"dbo:AutoRacingLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:BaseballLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:AmericanFootballLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:AustralianFootballLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:GovernmentAgency","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:Group","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:EducationalInstitution","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:GeopoliticalOrganisation","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:Legislature","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:MilitaryUnit","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:Non-ProfitOrganisation","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:PublicTransitSystem","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:SambaSchool","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:Parliament","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:PoliticalParty","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:Gene","range":"dbo:Biomolecule","type":"rdfs:SubClassOf"},{"domain":"dbo:Protein","range":"dbo:Biomolecule","type":"rdfs:SubClassOf"},{"domain":"dbo:Polyhedron","range":"odesignp:SpaceRegion","type":"rdfs:SubClassOf"},{"domain":"dbo:Enzyme","range":"dbo:Biomolecule","type":"rdfs:SubClassOf"},{"domain":"dbo:Band","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:HistoricalCountry","range":"dbo:Country","type":"rdfs:SubClassOf"},{"domain":"dbo:SportsTeamMember","range":"dbo:OrganisationMember","type":"rdfs:SubClassOf"},{"domain":"dbo:ComedyGroup","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:Company","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:Broadcaster","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:ClericalOrder","range":"dbo:Organisation","type":"rdfs:SubClassOf"},{"domain":"dbo:Volcano","range":"dbo:NaturalPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:GivenName","range":"dbo:Name","type":"rdfs:SubClassOf"},{"domain":"dbo:MountainRange","range":"dbo:NaturalPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Valley","range":"dbo:NaturalPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Racecourse","range":"dbo:RaceTrack","type":"rdfs:SubClassOf"},{"domain":"dbo:Athletics","range":"dbo:Sport","type":"rdfs:SubClassOf"},{"domain":"dbo:Surname","range":"dbo:Name","type":"rdfs:SubClassOf"},{"domain":"dbo:OldTerritory","range":"dbo:Territory","type":"rdfs:SubClassOf"},{"domain":"dbo:HorseRiding","range":"dbo:Sport","type":"rdfs:SubClassOf"},{"domain":"dbo:Grape","range":"dbo:FloweringPlant","type":"rdfs:SubClassOf"},{"domain":"dbo:Boxing","range":"dbo:Sport","type":"rdfs:SubClassOf"},{"domain":"dbo:HotSpring","range":"dbo:NaturalPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Archipelago","range":"dbo:NaturalPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:BodyOfWater","range":"dbo:NaturalPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Magazine","range":"dbo:PeriodicalLiterature","type":"rdfs:SubClassOf"},{"domain":"dbo:Newspaper","range":"dbo:PeriodicalLiterature","type":"rdfs:SubClassOf"},{"domain":"dbo:Desert","range":"dbo:NaturalPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Glacier","range":"dbo:NaturalPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Cave","range":"dbo:NaturalPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Crater","range":"dbo:NaturalPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:Mountain","range":"dbo:NaturalPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:MountainPass","range":"dbo:NaturalPlace","type":"rdfs:SubClassOf"},{"domain":"dbo:HistoricalRegion","range":"dbo:Region","type":"rdfs:SubClassOf"},{"domain":"dbo:NaturalRegion","range":"dbo:Region","type":"rdfs:SubClassOf"},{"domain":"dbo:Automobile","range":"schema:Product","type":"rdfs:SubClassOf"},{"domain":"dbo:Instrument","range":"schema:Product","type":"rdfs:SubClassOf"},{"domain":"dbo:BeachVolleyballPlayer","range":"dbo:VolleyballPlayer","type":"rdfs:SubClassOf"},{"domain":"dbo:Aircraft","range":"schema:Product","type":"rdfs:SubClassOf"},{"domain":"dbo:Weapon","range":"schema:Product","type":"rdfs:SubClassOf"},{"domain":"dbo:AdministrativeRegion","range":"dbo:Region","type":"rdfs:SubClassOf"},{"domain":"dbo:Locomotive","range":"schema:Product","type":"rdfs:SubClassOf"},{"domain":"dbo:Ship","range":"schema:Product","type":"rdfs:SubClassOf"},{"domain":"dbo:OlympicResult","range":"dbo:SportCompetitionResult","type":"rdfs:SubClassOf"},{"domain":"dbo:MetroStation","range":"dbo:Station","type":"rdfs:SubClassOf"},{"domain":"dbo:RailwayStation","range":"dbo:Station","type":"rdfs:SubClassOf"},{"domain":"dbo:Language","range":"odesignp:InformationEntity","type":"rdfs:SubClassOf"},{"domain":"dbo:Letter","range":"odesignp:InformationEntity","type":"rdfs:SubClassOf"},{"domain":"dbo:Imdb","range":"odesignp:InformationEntity","type":"rdfs:SubClassOf"},{"domain":"dbo:SportCompetitionResult","range":"odesignp:InformationEntity","type":"rdfs:SubClassOf"},{"domain":"dbo:Work","range":"odesignp:InformationEntity","type":"rdfs:SubClassOf"},{"domain":"dbo:Name","range":"odesignp:InformationEntity","type":"rdfs:SubClassOf"},{"domain":"dbo:ProgrammingLanguage","range":"odesignp:InformationEntity","type":"rdfs:SubClassOf"},{"domain":"dbo:Blazon","range":"odesignp:InformationEntity","type":"rdfs:SubClassOf"},{"domain":"dbo:Flag","range":"odesignp:InformationEntity","type":"rdfs:SubClassOf"},{"domain":"dbo:SoapCharacter","range":"dbo:FictionalCharacter","type":"rdfs:SubClassOf"},{"domain":"dbo:Database","range":"odesignp:InformationObject","type":"rdfs:SubClassOf"},{"domain":"dbo:VideogamesLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:VolleyballLeague","range":"dbo:SportsLeague","type":"rdfs:SubClassOf"},{"domain":"dbo:DisneyCharacter","range":"dbo:FictionalCharacter","type":"rdfs:SubClassOf"},{"domain":"dbo:NarutoCharacter","range":"dbo:FictionalCharacter","type":"rdfs:SubClassOf"},{"domain":"dbo:NobleFamily","range":"dbo:Family","type":"rdfs:SubClassOf"},{"domain":"dbo:ComicsCharacter","range":"dbo:FictionalCharacter","type":"rdfs:SubClassOf"}];
	
	this.dboClassesString = '';
	this.dboPropertyString = '';

	console.log("Preparing string source at : ", Date.now());
	_.forIn(self.dboClasses, function(v, k){
		if(v.iri.indexOf('dbo:')==0){
			self.dboClassesString+= self.searchDelim + k + self.searchIdDelim + v.iri + self.searchDelim;
		}
		else{
			self.dboClassesString+= self.searchDelim + k + self.searchIdDelim + 'dbo:'+ v.iri + self.searchDelim;
		}
	});
	var allClassKeys = Object.keys(self.dboClasses);
	function findclasskeybyiri(iri){
		for (var i = 0; i < allClassKeys.length; i++) {
			var k = allClassKeys[i];
			var v = self.dboClasses[k];
			if(v.iri === iri){
				return k;
			}
		}
		console.log('iri not found in obj', iri);
	}

	_.forIn(self.dboProperty, function(v, k){
		var domain = v.domain;
		if(domain && domain.indexOf('dbo:')==0){
			var iri = domain.substr(4, domain.length);// class don\'t have dbo prefix , as that is the default'
			var key = findclasskeybyiri(iri);
			if(key)domain = key;
		}
		var range = v.range;
		if(range && range.indexOf('dbo:')==0){
			var iri = range.substr(4, range.length);// class don\'t have dbo prefix , as that is the default'
			var key = findclasskeybyiri(iri);
			if(key) range = key;
		}
		self.dboPropertyString+= self.searchDelim + domain + self.searchIdDelim + k + self.searchIdDelim + range + self.searchDelim;
		
	})
	delete allClassKeys;
	console.log("Finished preparing string source at : ", Date.now());


	this.getMatchedProperties = function(term, domain){
		var idselector = '[^"]*';
		if(domain){
			var dotsplit = domain.split('.');
			if(dotsplit.length>1){
				idselectors = [];
				var length = dotsplit.length;// array length will change on the way
				for (var i = 0; i < length; i++) {
					idselectors.push(dotsplit.join('\\.'));
					console.log(dotsplit);
					dotsplit.pop();
				}
				idselector = '('+idselectors.join('|')+')';
				console.log(idselector);
			}
			else console.log(domain);
		}
		var rx = new RegExp('"('+idselector+'~dbo:[^"]*'+term+'[^"]*)"','gi');
		console.log(rx);
		var results = [];
		var i = 0;
		while (result = rx.exec(self.dboPropertyString)) {
			results.push(result[1]);
			console.log(result);
			i+=1;
		    if (i >= 50)break;
		}
		return results;
	}
	this.getMatchedClasses = function(term){
		var rx = new RegExp('"([^"]*dbo:[^"]*'+term+'[^"]*)"','gi');
		var results = [];
		var i = 0;
		while (result = rx.exec(self.dboClassesString)) {
			results.push(result[1]);
			i+=1;
		    if (i >= 50)break;
		}
		return results;
	}
	

	return this;
}

var ontology = createOntology();

