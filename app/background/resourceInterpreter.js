//

	var RDF = $rdf.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
	var RDFS = $rdf.Namespace("http://www.w3.org/2000/01/rdf-schema#")
	var FOAF = $rdf.Namespace("http://xmlns.com/foaf/0.1/")
	var XSD = $rdf.Namespace("http://www.w3.org/2001/XMLSchema#")
	var DBO = $rdf.Namespace('http://dbpedia.org/ontology/')
	var DBR = $rdf.Namespace('http://dbpedia.org/resource/');


	var SCARDS = $rdf.Namespace("http://semanticcards.org/");

	var store = $rdf.graph();
	var ustore = $rdf.graph();

	var timeout = 5000;
	var fetcher = new $rdf.Fetcher(store, timeout);
	var uetcher = new $rdf.Fetcher(ustore, timeout);


	function roughSizeOfObject( object ) {

	    var objectList = [];
	    var stack = [ object ];
	    var bytes = 0;

	    while ( stack.length ) {
	        var value = stack.pop();

	        if ( typeof value === 'boolean' ) {
	            bytes += 4;
	        }
	        else if ( typeof value === 'string' ) {
	            bytes += value.length * 2;
	        }
	        else if ( typeof value === 'number' ) {
	            bytes += 8;
	        }
	        else if
	        (
	            typeof value === 'object'
	            && objectList.indexOf( value ) === -1
	        )
	        {
	            objectList.push( value );

	            for( var i in value ) {
	                stack.push( value[ i ] );
	            }
	        }
	    }
	    var kb = bytes/1024;
	    return kb;
	}
	function loadrdf(url){
		fetcher.nowOrWhenFetched(url, function(ok, body, xhr) {
		    if (!ok) {
		        console.log("Oops, something happened and couldn't fetch data");
		    } else {
		        console.log(store);
		    }
		});
	}
	var rdf = {
		filterpredicate: function(pred){
			cms = store.statementsMatching(undefined, pred, undefined);
			$.each(cms, function(i, v){
				console.log(JSON.stringify(v.subject), JSON.stringify(v.object));
			})

		},
		comments: function(){
			rdf.filterpredicate(RDFS('comment'));
		},
		types: function(){
			rdf.filterpredicate(RDF('type'));
		}
	}
	var getAbstract = function(name){
		var whois = 'PREFIX owl: <http://www.w3.org/2002/07/owl#>\
							PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
							PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\
							PREFIX foaf: <http://xmlns.com/foaf/0.1/>\
							PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\
							PREFIX dbpedia: <http://dbpedia.org/ontology/>\
							PREFIX dbpprop: <http://dbpedia.org/property/>\
							PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>'+
								'SELECT DISTINCT ?abs WHERE {\
	  								?x0 rdf:type foaf:Person.\
	  								?x0 rdfs:label "'+name+'"@en.\
	  								?x0 dbpedia-owl:abstract ?abs.\
									FILTER(!isLiteral(?abs) || lang(?abs) = "" || langMatches(lang(?abs), "EN"))\
								} LIMIT 12';
		sims(whois);
		
	}
	var getAllProps = function(title){
		var whois = 'PREFIX owl: <http://www.w3.org/2002/07/owl#>\
							PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
							PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\
							PREFIX foaf: <http://xmlns.com/foaf/0.1/>\
							PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\
							PREFIX dbpedia: <http://dbpedia.org/ontology/>\
							PREFIX dbpprop: <http://dbpedia.org/property/>\
							PREFIX dbpres: <http://dbpedia.org/resource/>\
							PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>'+
								'SELECT DISTINCT ?prop WHERE {\
	  								dbpres:'+title+' ?prop ?o\
									FILTER(!isLiteral(?o) || lang(?o) = "" || langMatches(lang(?o), "EN"))\
								}';
		sims(whois);
		
	}

	function sims(query){
		var endpoint = 'http://dbpedia.org/sparql';
		if(!query) query = "SELECT ?s WHERE {?s ?p ?o} LIMIT 10";
		var queryUrl = endpoint + "?query="+ encodeURIComponent(query) +"&format=json";
		$.ajax({
			dataType: 'json',
			url: queryUrl,
			success: function(data) {
				if(data.results){
					// console.log(JSON.stringify(data.results.bindings));
					console.log(data.results.bindings);
				}
				else console.log(data);
			}
		});
	}


	var SemanticWeb = function(){
		var self = this;

		this.context = {
			subject:null,
		}
		this.OAPI = {
			DBP_LKUP_PREFIX:1,
			DBP_LKUP_KEYWORD:2,
			DBP_SPARQL:3,
			WIKIPEDIA_PREFIX:4,
			GOOGLE_PREFIX:5,

		}
		

		this.searchDelim = '"';
		this.searchIdDelim = ' ';

		// this.queryAnswers = {};// q_id:{id:q_id, answers:[{title:'String', desc:'', thumb_source}, {}]}
		this.queryAnswers = {};//{id:q_id, answers:[$rdf.NamedNode]}

		this.queryQuestions = {};// q_id:{id:q_id, question:'what is solar system', count:1}
		this.questionSearchStringSource = '';// '"234 who is barack obama""12 why is sea not green"......'
											// id:234 => this id is question id, and even present in answer id
		
		this.predicates = [];
		this.predicatesString = '';
		this.subjects = [];
		this.subjectsString = '';


		this.createSparql = function(){
			var me = this;
			this.results = function(json){
				console.log('sparql results', json);

			}
			this.endpoint = 'http://dbpedia.org/sparql';
			this.queryEndpoint = function(query){
				if(!query || !(query.length>3))return;
				var queryUrl = me.endpoint + "?query="+ encodeURIComponent(query) +"&format=json";
				$.ajax({
					dataType: 'json',
					url: queryUrl,
					success: function(json) {
						if(json.results){
							me.results(json.results.bindings);
							console.log(json);
						}
						else console.log(json);
					}
				});
			};

			this.getEnglishAbstract = function(name){
				var qu = 'PREFIX owl: <http://www.w3.org/2002/07/owl#>\
							PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
							PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\
							PREFIX foaf: <http://xmlns.com/foaf/0.1/>\
							PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\
							PREFIX dbpedia: <http://dbpedia.org/ontology/>\
							PREFIX dbpprop: <http://dbpedia.org/property/>\
							PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>'+
								'SELECT DISTINCT ?abs WHERE {\
	  								?x0 rdf:type foaf:Person.\
	  								?x0 rdfs:label "'+name+'"@en.\
	  								?x0 dbpedia-owl:abstract ?abs.\
									FILTER(!isLiteral(?abs) || lang(?abs) = "" || langMatches(lang(?abs), "EN"))\
								} LIMIT 12';
				qu = qu.replace(/\s+/g, " ");
				me.queryEndpoint(qu);
			};

			this.getAllEnglishPredicate = function(s, q_id){// s is a $rdf Named node
				s = '<'+s.uri+'>';
				var qu = 'PREFIX owl: <http://www.w3.org/2002/07/owl#>\
							PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
							PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\
							PREFIX foaf: <http://xmlns.com/foaf/0.1/>\
							PREFIX skos: <http://www.w3.org/2004/02/skos/core#>\
							PREFIX dbpedia: <http://dbpedia.org/ontology/>\
							PREFIX dbpprop: <http://dbpedia.org/property/>\
							PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>'+
								'SELECT DISTINCT ?predicate WHERE {'+
								s+' ?predicate ?o.\
								}';
				qu = qu.replace(/\s+/g, " ");
				me.queryEndpoint(qu);
			}

			return this;
		}
		this.sparql = self.createSparql();

		this.gotNewStatements = function(statements){
			for (var i = 0; i < statements.length; i++) {
				var st = statements[i];
				console.log(st);
			}
		}
		// this.processStatementForFront = function(statements){
		// 	var results = [];
		// 	for (var i = 0; i < statements.length; i++) {
		// 		var st = statements[i];
		// 		if(st.why.uri === SCARDS('wpPrefixSearch')){
		// 			results.push({title:});
		// 		}
		// 	}
		// }
		this.processAndSendAnswers = function(tab_id, q_id){// question id
			// now nothing much
			// but later can attach more attributes 
			// like owl class and ontology info.
			answersobj = self.queryAnswers[q_id];
			if(answersobj){
				var namedNodes = answersobj.answers;
				answers__ = [];
				for (var i = 0; i < namedNodes.length; i++) {
					var ans = {};
					var s = namedNodes[i];
					self.context.subject = s;
					var o = ustore.any(s, RDFS('label'));
					if(o && o.value) ans.title = o.value;

					o = ustore.any(s, SCARDS('termDescription'));
					if(o && o.value) ans.desc = o.value;


					o = ustore.any(s, DBO('thumbnail'));
					if(o && o.uri) ans.thumb_source = o.uri;

					if(ans.title)answers__.push(ans);
				}
				console.log(answers__);
				self.sendAnswers(tab_id, answers__);
			}
				
		}
		this.onlineSearchReply = {
			gotGoogleSuggestions: function(json, q_id){
				
				if(!json.CompleteSuggestion)return;
				self.queryAnswers = [];
				$.each(json.CompleteSuggestion, function(i, item){
					var title = item.suggestion.data;
					if(title)self.queryAnswers.push({title:title, desc:''});
				});

				// self.sc_holdder_ref.emit_valid_commands_changed();
			},
			gotWikipediaSuggestions: function(json, q_id){
				// console.log(json);

				if(json.query && json.query.pages){
					var statements = [];
					var answers = [];
				    $.each(json.query.pages, function(i,item){
				    	if(item.title){
				    		var _url = self.getDbpediaUrl(item.title);
				        	var s = $rdf.sym(_url);
				        	var p = RDFS('label');
				        	var o = item.title;
				        	var w = SCARDS('wpPrefixSearch');

				        	var o_ = ustore.any(s, p);
				        	if( o_ ){// this tripple exist
				        		// may be update it
				        		// TODO
				        		// console.log('already axists', s ,p,  o);
				        	}
				        	else{
				        		statements.push( ustore.add(s, p, o, w) );
				        	}

					    	if(item.thumbnail && item.thumbnail.source){
					    		p = DBO('thumbnail');
					    		o = $rdf.sym(item.thumbnail.source);

					    		var o_ = ustore.any(s, p);
					    		if( o_ ){// this tripple exist
					    			// may be update it
					    			// TODO
					    		}
					    		else{
					    			statements.push( ustore.add(s, p, o, w) );
					    		}
					    	}

					    	if(item.terms && item.terms.description){
						    	p = SCARDS('termDescription');
						    	o = item.terms.description[0];

				        		var o_ = ustore.any(s, p);
				        		if( o_ ){// this tripple exist
				        			// may be update it
				        			// TODO
				        		}
				        		else{
				        			statements.push( ustore.add(s, p, o, w) );
				        		}
					    	}

					    	answers.push(s);
				    	}
				    });
				    self.queryAnswers[q_id] = {id:q_id, answers:answers};// answer:[NamedNode]
				    
				    self.gotNewStatements(statements);
				    self.processAndSendAnswers(tab_id, q_id);

				}
			},
			gotUmbelConcept: function(json, q_id){
				if(!json.results) return;
				console.log(json);
				self.queryAnswers = [];
				$.each(json.results, function(i, item){
				    _tok = item['pref-label'];
				    // console.log(_tok);
				    if(_tok)self.queryAnswers.push({title:_tok, desc:item.description});
				});

				// self.sc_holdder_ref.emit_valid_commands_changed();
			},
			gotDuckDuckGoSuggestions : function(json, q_id){
				if(!json.RelatedTopics.length)return;

				self.queryAnswers = [];
				$.each(json.RelatedTopics, function(i, item){
					console.log(item);
				    if(item.hasOwnProperty('Name')){
				        $.each(item.Topics, function(j, childItem){
				            var _tok = childItem.FirstURL.split('/');
				            if(_tok){
				                _tok = _tok[_tok.length-1]; //get the last value
				                _tok = _tok.split('%2').join(' ').split('2%').join(' ').split('_').join(' ').split('%').join(' ');
				            }
				            self.queryAnswers.push({title:_tok, desc:childItem.Text});
				        });
				    }
				    else {
				        var _tok = item.FirstURL.split('/');
				        if(_tok){
				            _tok = _tok[_tok.length-1]; //get the last value
				            _tok = _tok.split('%2').join(' ').split('2%').join(' ').split('_').join(' ').split('%').join(' ');
				        }
				        self.queryAnswers.push({title:_tok, desc:item.Text});
				    }

				});
				// self.sc_holdder_ref.emit_valid_commands_changed();
			},
			gotDbpediaLookupSuggestions: function(json, q_id){
				console.log(json);
				if(json.results && json.results.length){
				    $.each(json.results, function(i, item){
				        self.queryAnswers.push({title:item.label, desc:item.description});				        
				    });
				}
				// self.sc_holdder_ref.emit_valid_commands_changed();
			},
		}
		
		this.onlineSearchQuery = {
			getGoogleSuggestions: function(question, q_id){
				searchapi.getGoogleSuggestion(question, q_id, self.onlineSearchReply.gotGoogleSuggestions);
			},
			getWikipediaSuggestions: function(question, q_id){
            	searchapi.wikipedia_suggest(question, q_id, self.onlineSearchReply.gotWikipediaSuggestions);
			},
			getUmbelConcept: function(question, q_id){
				searchapi.searchUmbelConcept(question, q_id, self.onlineSearchReply.gotUmbelConcept);
			},
			getDuckDuckGoSuggestions: function(question, q_id){
				searchapi.searchDuckDuckGo(question, q_id, self.onlineSearchReply.gotDuckDuckGoSuggestions)
			},
			getDbpediaLookupSuggestions: function(question, q_id){
				searchapi.searchDbpediaLookup(question, q_id, self.onlineSearchReply.gotDbpediaLookupSuggestions)
			},
		}

		this.getDbpediaUrl = function(wikiTitleOrUrl) {
			var url = wikiTitleOrUrl;
			if (url.indexOf('wikipedia')!=-1) {
				var parts = url.split('/');
				var title = parts[parts.length-1];
				url = 'http://dbpedia.org/resource/' + title;
				return url;
			} 
			else if (url.indexOf('dbpedia.org')!=-1) {
				return url;
			} 
			else{
				url = 'http://dbpedia.org/resource/' + url.replace(/ /g, '_');
				return url;
			}
		};
		this.gotAQuestion = function(q_id, question){
			// first check if a similar question was already asked
			var qs =  self.fastStringSearch(self.questionSearchStringSource, question);
			console.log(qs);
			//qs : {results:[Strings], count:Int}
			for (var i = 0; i < qs.results.length; i++) {
				var id = qs.results[i].split(self.searchIdDelim)[0];
				// string split length is always > 0;
				if(self.queryQuestions[id]){// if the question really exist
					self.queryQuestions[id].count++;// asked again
					if(self.queryAnswers[id]) return id;// id are same for question and answer
					// question was already asked no need to search again
				}
			}
			
			self.queryQuestions[q_id] = {id:q_id, question:question.toLowerCase(), count:1};
			if(self.questionSearchStringSource.length > 20000){
				self.questionSearchStringSource = self.questionSearchStringSource.slice(10000, 20000);
				// var f = self.questionSearchStringSource.indexOf('"');
				// remove half formatted string in the pattern
				console.log('removing some sraech cache');
				// if search sting is greater than 20000 remove initial questions
			} 
			
			self.questionSearchStringSource+= self.searchDelim + q_id + self.searchIdDelim + question.toLowerCase() + self.searchDelim;//'"23 who is Isaac Newton"'
		};

		this.last_subject_query_str = '';
		this.questionFromTab = function(question, tab_id){
			// do some NER
			// question api services
			// and wait for them to respond
			
			if(question.length) {
				var analysedSentences = compendium.analyse(question);
				
				var qsearch = self.onlineSearchQuery;
				var q_id = Date.now().toString(36);// save his to ustore
				var id__ = self.gotAQuestion(q_id, question);
				if(id__){// question and answer already exists
					self.processAndSendAnswers(tab_id, id__);
					return;
				}

				var query = analysedSentences[0].raw;
				if(self.last_subject_query_str != query){
					qsearch.getWikipediaSuggestions(query, q_id);
				}
				self.last_subject_query_str = query;
					
				// qsearch.getGoogleSuggestions(question, q_id);
				// qsearch.getUmbelConcept(question, q_id);
				// qsearch.getDuckDuckGoSuggestions(question, q_id);
				// qsearch.getDbpediaLookupSuggestions(question, q_id);
				// 
				
				if(analysedSentences.length>1){
					var predicate = analysedSentences[1].raw;
					var s = self.context.subject;
					console.log('context is ', s);
					if(s)sparql.getAllEnglishPredicate(s, q_id);
				}
			}

			//by this time do 
		}


		//Answer
		this.sendAnswers = function(tab_id, answers){
			sendMSG_to_tab_byId({type:'SW:ANSWER_FROM_BACK',  msg:{answers:answers}}, tab_id);//(msg, tab_id) => msg: {type:'TYPE', msg:{data:data}}
		}

		this.fastStringSearch = function(source, term){
			var rx = new RegExp('"([^"]*'+term.toLowerCase()+'[^"]*)"','gi');
			var i = 0;
			var results = [];
			while (result = rx.exec(source)) {
				results.push(result[1]);
				console.log('match: '+ result[1]);
			    i += 1;
			    if (i >= 50)break;
			}
			return {results:results, count:i};
		}












		return this;
	}

	var SW = SemanticWeb();
	







