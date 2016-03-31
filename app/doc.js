
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