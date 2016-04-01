
//Background MSG Pattern:
	SW:QUESTION_FROM_TAB => 
	{
		type: "SW:QUESTION_FROM_TAB",
		msg:{question:'String'}
	}

	SW:ANSWER_FROM_BACK =>
	{
		type:"SW:ANSWER_FROM_BACK",
		msg:{
			id:'im34nxls',
			answers:{
				answers:[]
			},
			source:''
		}
	}

	CARD:SAVING =>
	{
		'after moviing': frame.js -> actions._update_card_from_frameview_to_store() // saves card compleely
																// used for saving card x, y, w, h as it doesn't care about the content
		frame.js -> actions.save_card_content(_card, do_not_compare);// checks for card_content change and calls the above function
		update_card_content_from_frameview_to_store()
		frame.js -> actions_save_new_card_from_frameview_to_store(); //save new cards
	}

	SUGGESTION_UI:DATA =>
	{
		title:'title with large font',// must exist
		desc:'description',// optional
		thumb_source:'image source url',//optional
	}


	FRAME:FRAMEVIEW =>
	{
		type:string, (not an observable) , value:{
			'default': default frameview,
			'explore': volatile frameview, and sparql support, nothing will be saved
			'volatile': any frameview title starting with '$' is volatile and nothing will be saved
		}
	}


	AMD:DEFINITION =>
	(function () {
		    var define, exports = {};
		    if (window.define && window.define.amd) {
		        define = window.define;
		    } else {
		        exports = window;
		        define = function (name, dependencies, fn) {
		            var deps = [];
		            for (var i = 0; i < dependencies.length; i++)
		                deps.push(window[dependencies[i]]);
		            var module = fn.apply(undefined, deps);
		            if (!window[name]) window[name] = module;
		        };
		    }
	})()

	//Wikipedia get list of section
	//https://en.wikipedia.org/w/api.php?action=parse&page=Barack_Obama&prop=sections
	//and then get a section
	//http://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=Barack_Obama&rvprop=content&rvsection=15



	Questions List = [
	"When was Mozart born?",
	" What was the monetary value of the Nobel Peace Prize in 1989",
	"Who sells the most hybrid cars?",
	"Which president went to war with Mexico? ",
	" When was the internal combustion engine invented?"
	]

	Keyword Selection Algorithm
	1. Select all non-stopwords in quotations
	2. Select all NNP words in recognized named entities
	3. Select all complex nominals with their adjectival modifiers
	4. Select all other complex nominals
	5. Select all nouns with adjectival modifiers
	6. Select all other nouns
	7. Select all verbs
	8. Select the answer type word 

	Who questions can have organizations as answers
		Who sells the most hybrid cars?
	Which questions can have people as answers
		Which president went to war with Mexico? 


	// this will follow all sameAs link to get the sesults
	// preety roboust
	select ?birthDate where { 
	  ?x owl:sameAs? dbpedia:Ashok_Gehlot .
	  ?x dbpedia-owl:birthDate ?birthDate .
	}




	function findanddelete(n, id){
		delete n[id];

		for (var i = 0; i < n.length; i++) {
			findanddelete(n[i], id);
		}

		var keys = Object.keys(n);
		for (var i = 0; i < keys.length; i++) {
			findanddelete(n[keys[i]], id);
		}
		
	}


	function getbyid(n, id){
		for(var i = 0; i < n.length; i++){
			if(n[i].id == id){
			 	return n[i];
			}
		}
	}
	function getbyiri(n, iri){
		for(var i = 0; i < n.length; i++){
			if(n[i].iri == iri){
			 	return n[i];
			}
		}
	}


	function findbaseclass(cn){
		var b = [];
		for (var i = 0; i < cn.length; i++) {
			var c = cn[i];
			if(c.iri.indexOf('dbo')!=0)continue;
			if(c.superClasses){
				if(getbyid(cn, c.superClasses[0]).type);
				else continue;
			}
			if(!c.subClasses)continue;
			b.push(c.iri);
		}
		return b;
	}		

	function morethanonesuperclass(cn){
		for (var i = 0; i < cn.length; i++) {
			var c = cn[i];
			if(c.superClasses && c.superClasses.length>1){
				console.log(c.iri);
			}
		}
	}

	function getallsuperclasses(cn, iri){
		for (var i = 0; i < cn.length; i++) {
			var c = cn[i];
			console.log('before match', c.iri);
			if(c.iri === iri){
				console.log(c.iri)
				if(c.superClasses){
					for (var i = 0; i < c.superClasses.length; i++) {
						var sc = getbyid(cn, c.superClasses[i]);
						getallsuperclasses(cn, sc.iri);
					}
				}
			}
		}
	}

	function createdothirarchy(pre, n, dest){
		dest[pre] = {iri: n.name};
		if(n.children){
			for (var i = 0; i < n.children.length; i++) {
				cn = n.children[i];
				createdothirarchy(pre+'.'+i, cn, dest);
			}
		}
	}
	var dbo = {}
	createdothirarchy('0', ontology.OntologyClassHirarchy, dbo)



	function addcommenttoclass(dbo, n){
		_.forIn(dbo, function(v, k){
			var c = getbyiri(n, 'dbo:'+v.iri);
			if(c){
				if(c.comment && c.comment.en){
					dbo[k]['comment'] = c.comment.en;
				}
			}
			else{
				console.log('dbo:'+v.iri +' not found');
			}
		})
	}

	//these classes are not there in dbpedia owl 2014 class
		dbo:CardGame 
		dbo:TeamSport 
		dbo:Soccer 
		dbo:Bank 
		dbo:Caterer 
		dbo:EmployersOrganisation 
		dbo:GovernmentCabinet 
		dbo:InternationalOrganisation 
		dbo:ReligiousOrganisation 
		dbo:SportsClub 
		dbo:HockeyClub 
		dbo:ArcherPlayer 
		dbo:HighDiver 
		dbo:DTMRacer 
		dbo:WinterSportPlayer 
		dbo:Biathlete 
		dbo:BobsleighAthlete 
		dbo:CrossCountrySkier 
		dbo:NordicCombined 
		dbo:Ski_jumper 
		dbo:SpeedSkater 
		dbo:MemberResistanceMovement 
		dbo:Orphan 
		dbo:Biologist 
		dbo:BloodVessel 
		dbo:Lipid 
		dbo:Polysaccharide 
		dbo:Engine 
		dbo:RocketEngine 
		dbo:MobilePhone 
		dbo:Earthquake 
		dbo:StormSurge 
		dbo:AcademicConference 
		dbo:Attack 
		dbo:Rebellion 
		dbo:InternationalFootballLeagueEvent 
		dbo:MotorRace 
		dbo:Vodka 
		dbo:MilitaryAircraft 
		dbo:MilitaryVehicle 
		dbo:On-SiteTransportation 
		dbo:ConveyorSystem 
		dbo:Escalator 
		dbo:MovingWalkway 
		dbo:TrainCarriage 
		dbo:Tram 
		dbo:Medicine 
		dbo:Dike 
		dbo:RestArea 
		dbo:ElectricalSubstation 
		dbo:FillingStation 
		dbo:TramStation 
		dbo:ConcentrationCamp 
		dbo:Mine 
		dbo:CoalPit 
		dbo:Beach 
		dbo:Bay 
		dbo:Arrondissement 
		dbo:Canton 
		dbo:HistoricalAreaOfAuthority 
		dbo:Fiefdom 
		dbo:RouteStop 
		dbo:Cat 
		dbo:Horse 
		dbo:AcademicSubject 
		dbo:CardinalDirection 
		dbo:ArtisticGenre 
		dbo:LiteraryGenre 
		dbo:MathematicalConcept 
		dbo:PhilosophicalConcept 
		dbo:PoliticalConcept 
		dbo:ScientificConcept 
		dbo:Standard 
		dbo:TheologicalConcept 
		dbo:Article 
		dbo:Law 
		dbo:UndergroundJournal 
		dbo:Quote 
		dbo:Treaty 
		dbo:foaf:Document 
		dbo:cidoccrm:E4_Period 
		dbo:d0:Activity 
		dbo:foaf:Image 
		dbo:foaf:Person 
		dbo:geo:SpatialThing 
		dbo:gml:_Feature 
		dbo:rdf:Property 
		dbo:skos:Concept 
		dbo:skos:OrderedCollection 


	//replace  domains ranges by iri
	function replaceclasstoiri(p, c){
		for (var i = 0; i < p.length; i++) {
			if(p[i].domain){
				var d = p[i].domain;
				if(d.match(/class/)){
					var _c = getbyid(c, d);
					if(_c){
						p[i].domain = _c.iri;
					}
					else{
						console.log('domain '+ d + ' doesn\'t exist in classAttribute');
					}
				}
			}
			if(p[i].range){
				var r = p[i].range;
				if(r.match(/class/)){
					var _c = getbyid(c, r);
					if(_c){
						p[i].range = _c.iri;
					}
					else{
						console.log('range '+ r + ' doesn\'t exist in classAttribute');
					}
				}
			}
		}
	}

 	function replacesubproperybyiri(p){
 		for (var i = 0; i < p.length; i++) {
 			if(p[i].subproperty && p[i].subproperty.length){
 				var newsubprops = [];
 				for (var j = 0; j < p[i].subproperty.length; j++) {
 					prid = p[i].subproperty[j];
 					var _p = getbyid(p, prid);	
 					if(_p && _p.iri){
 						newsubprops.push(_p.iri);
 					}
 				}
 				if(newsubprops.length)p[i].newsubproperty = newsubprops;
 				else console.log('@im', p[i]);
 			}
 		}
 	}