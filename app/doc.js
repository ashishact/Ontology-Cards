
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

