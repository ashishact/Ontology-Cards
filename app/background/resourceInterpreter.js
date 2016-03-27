//

	var RDF = $rdf.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
	var RDFS = $rdf.Namespace("http://www.w3.org/2000/01/rdf-schema#")
	var FOAF = $rdf.Namespace("http://xmlns.com/foaf/0.1/")
	var XSD = $rdf.Namespace("http://www.w3.org/2001/XMLSchema#")
	var DBO = $rdf.Namespace('http://dbpedia.org/ontology/')
	var DBR = $rdf.Namespace('http://dbpedia.org/resource/');


	var SCARDS = $rdf.Namespace("http://semanticcards.org/");

	var store = $rdf.graph();// used to load complete rdf graph
	var ustore = $rdf.graph();// used to store important tripple for user
	var sstore = $rdf.graph();//used for suggestions

//******************************
//******************************
//******************************
//
	var tripplestore = new Triplestore();
	tripplestore.setMapping("foaf", "http://xmlns.com/foaf/0.1/");

	var timeout = 5000;
	var fetcher = new $rdf.Fetcher(store, timeout);
	var ufetcher = new $rdf.Fetcher(ustore, timeout);
	var sfetcher = new $rdf.Fetcher(sstore, timeout);


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

		
		this.tokenStrings = [];
		this.rootToken = '';// token is a list of words here 
		//__________________________________________________
		// => => => 				}						|
		// => => => =>				}						|
		// => => => => => 			} Prev Context stacks 	|
		// => => => => => => 	 	}						|
		// => => => => => => => 	}						|
		// 													|
		// => => => => => => => => 	} contextStack 			|
		// 						|							|
		// 						|							|
		// 						|_____ Current Context 		|
		//													|
		//__________________________________________________|								
		
		

		this.OAPI = {
			DBP_LKUP_PREFIX:1,
			DBP_LKUP_KEYWORD:2,
			DBP_SPARQL:3,
			WIKIPEDIA_PREFIX:4,
			GOOGLE_PREFIX:5,
		}
		
		this.tab_id = 0;

		this.searchDelim = '"';
		this.searchIdDelim = '~';

		// this.queryAnswers = {};// term_id:{id:term_id, answers:[{title:'String', desc:'', thumb_source}, {}]}
		this.queryAnswers = {};//{id:term_id, answers:[$rdf.NamedNode]}

		this.queryQuestions = {};// term_id:{id:term_id, question:'what is solar system', count:1}
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
				if(json.head && json.head.vars && json.head.vars.length){
					if(json.head.vars.length == 1){
						// only one variable asked
						var variable = json.head.vars[0];
						if(variable.indexOf('allPredicate') > -1){
							var sparqlid = variable.split('allPredicate')[1];// id to determine who made this sparql call
							if(json.results.bindings && json.results.bindings.length){
								var res = json.results.bindings;
								var predicatesUri = [];
								for (var i = 0; i < res.length; i++) {
									var predicate = res[i][variable].value;
									predicatesUri.push(predicate);
								}
								console.log('calling back with sparql results for all predicates');
								self.prepareContextStack({sparqlid:sparqlid, predicates: predicatesUri, type:'allPredicate'})
							}
							else{
								console.log('0 results from sparql');
								self.prepareContextStack({sparqlid:sparqlid, predicates: [], type:'allPredicate', status:'zeroresults'})
							}
						}
						if(variable.indexOf('object') > -1){
							var sparqlid = variable.split('object')[1];// id to determine who made this sparql call
							if(json.results.bindings && json.results.bindings.length){
								var res = json.results.bindings;
								var objs = [];
								for (var i = 0; i < res.length; i++) {
									objs.push(res[i][variable]);
								}
								console.log('calling back with sparql results for objects');
								self.prepareContextStack({sparqlid:sparqlid, objs:objs, type:'object'})
							}
						}
						else{
							console.log('0 results from sparql');
							self.prepareContextStack({sparqlid:sparqlid, obj:{}, type:'object', status:'zeroresults'})
						}
						
					}
				}
						

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
							me.results(json);
							// console.log(json);
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

			this.getAllEnglishPredicate = function(s, id){// s is a $rdf Named node
				s = '<'+s+'>';
				var qu = 'SELECT DISTINCT ?allPredicate'+id+' WHERE {'+s+' ?allPredicate'+id+' ?o.} LIMIT 200';
				console.log(qu);
				me.queryEndpoint(qu);
			};

			this.getObject = function(s, p, id){
				s = '<'+s+'>';
				p = '<'+p+'>';
				o = '?object'+id;
				var qu = 'SELECT DISTINCT ?object'+id+' WHERE {'+s+' '+p+' '+o+'. FILTER(!isLiteral('+o+') || lang('+o+') = "" || langMatches(lang('+o+'), "EN")) } LIMIT 50';
				console.log(qu);
				me.queryEndpoint(qu);

			}

			return this;
		}
		this.sparql = self.createSparql();

		this.gotAllPredicates = function(predicatesUri, predicateNameArray){
			self.context.predicates = predicatesUri;
			for (var i = 0; i < predicateNameArray.length; i++) {
				var name = predicateNameArray[i];
				self.context.predicateSearchString+= self.searchDelim + i + self.searchIdDelim + name + self.searchDelim;
			}
		};
				
		this.gotNewStatements = function(statements){
			// var answers = [];
			// var uniqueNode = [];
			// if(answer_type === 'subject suggestions'){

			// }
			for (var i = 0; i < statements.length; i++) {
				var st = statements[i];
				var o_ = sstore.any(st.s, st.p);
	        	if( o_ ){// this tripple exist
	        		// may be update it
	        		// TODO
	        		console.log('alr exi');
	        	}
	        	else{
	        		sstore.add(st.s, st.p, st.o, st.w);
	        	}
			}

		};
	

		this.processAndSendAnswers = function(){

			var answers = [];
			var cs = self.contextStack;

			for (var i = 0; i < cs.length; i++) {
				var ans = {};
				var ctx = cs[i];

				var ppredicate = ctx.parentPredicate;
				if(ppredicate){
					var match = ppredicate.match(/.+[\/#](.+)$/);
					if(match)answers.push({desc:'<a href=\''+ppredicate+'\' target=\'_blank\' title=\''+ppredicate+'\'>'+match[1]+'</a><i style=\'margin-left:10px;\' class=\"fa fa-arrow-down\"></i>'});
				}


				var lastContext = (cs.length-1 === i);
				var subjects = [];
				if(lastContext){
					if(ctx.subjects) subjects = ctx.subjects;
				}
				else{
					if(ctx.subject) subjects = [ctx.subject];
				}

				for (var j = 0; j < subjects.length; j++) {
					ans = {};
					var s = subjects[j];
					if(s){
						var isuri = (s.match(/^https?:\/\//));
						var isdbr = (s.match(/http:\/\/dbpedia\.org\/resource\//));
						var isimg = (s.match(/\.(jpg|png|gif|svg|JPG)$/));
						var isdbpthumb = (s.match(/\.(jpg|png|gif|svg|JPG)\?width=/));
						
						if(isuri)
							$s = $rdf.sym(s);
						else $s = null;


						if(isuri){
							if(isdbpthumb){
								ans.desc = '<img style=\'width:50%;\' src=\''+s+'\'>';
							}
							else if(isimg){
								ans.desc = '<img style=\'width:50%;\' src=\''+s+'\'>';
							}
							else if(isdbr){
								var o = sstore.any($s, RDFS('label'));
								if(o && o.value && j==0) ans.title = o.value + ' (Context)';
								else if(o && o.value) ans.title = o.value+ ' (Suggestions)';
								else{
									m = s.match(/.+[\/#](.+)$/);
									if(m){
										ans.title = m[1].replace('_', ' ');
									}
									else{
										ans.title = s;
									}
								}
								

								o = sstore.any($s, SCARDS('termDescription'));
								if(o && o.value) ans.desc = o.value;


								o = sstore.any($s, DBO('thumbnail'));
								if(o && o.uri) ans.thumb_source = o.uri;

							}
							else{
								m = s.match(/.+[\/#](.+)$/);
								if(m){
									ans.title = m[1].replace('_', ' ');
								}
								else{
									ans.title = s;
								}
							}
						}
						else if(typeof(s) === 'string'){
							ans.title = s;
						}
					}
					else{
						ans.desc = 'subject or object doesn\'t exist!!!!!';
					}
						
					answers.push(ans);
				}

				if(ctx.object){// probably its not a resources , but a string or value
					ans.desc = ctx.object;
					answers.push(ans);
				}

			}

			if(termSuggestions.length)answers.push({desc:'<div style=\'width:500px; opacity:0.6; border-width:2px;\' class=\'hline\'></div>'});

			for (var i = 0; i < termSuggestions.length; i++) {
				var s = termSuggestions[i];

				if(typeof(s)==='string'){
					var isuri = (s.match(/^https?:\/\//));
					var isdbr = (s.match(/http:\/\/dbpedia\.org\/resource\//));
				}
					
				
				// if(isuri)
				// 	$s = $rdf.sym(s);


				// if($s){//namedNode
				// 	var ans = {}
				// 	var o = sstore.any($s, RDFS('label'));
				// 	if(o && o.value) ans.title = o.value + '(suggestion)';
				// 	else ans.title = s.uri;

				// 	o = sstore.any($s, SCARDS('termDescription'));
				// 	if(o && o.value) ans.desc = o.value;


				// 	// o = sstore.any($s, DBO('thumbnail'));
				// 	// if(o && o.uri) ans.thumb_source = o.uri;

				// 	if(ans.title)answers.push(ans);
				// }
				
				if(s.desc){// predicate suggestion as desc
					answers.push(s);
				}
			}
			

			self.sendAnswers(answers);

		};

		this.onlineSearchReply = {
			gotGoogleSuggestions: function(json, term_id){
				
				if(!json.CompleteSuggestion)return;
				self.queryAnswers = [];
				$.each(json.CompleteSuggestion, function(i, item){
					var title = item.suggestion.data;
					if(title)self.queryAnswers.push({title:title, desc:''});
				});

				// self.sc_holdder_ref.emit_valid_commands_changed();
			},
			gotWikipediaSuggestions: function(json, term_id){
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

				        	statements.push({s:s, p:p, o:o, w:w});

					    	if(item.thumbnail && item.thumbnail.source){
					    		p = DBO('thumbnail');
					    		o = $rdf.sym(item.thumbnail.source);
				        		statements.push({s:s, p:p, o:o, w:w});
					    	}

					    	if(item.terms && item.terms.description){
						    	p = SCARDS('termDescription');
						    	o = item.terms.description[0];
				        		statements.push({s:s, p:p, o:o, w:w});
					    	}
					    	answers.push(s);
				    	}
				    });
				    self.gotNewStatements(statements);
				    self.queryAnswers[term_id] = {id:term_id, answers:answers, type: 'subject suggestions'};// answer:[NamedNode], type:'subject suggestions'
				    self.prepareContextStack();
				}
			},
			gotUmbelConcept: function(json, term_id){
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
			gotDuckDuckGoSuggestions : function(json, term_id){
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

			gotDbpediaLookupSuggestions: function(json, term_id){
				console.log(json);
				self.queryAnswers = [];
				if(json.results && json.results.length){
				    $.each(json.results, function(i, item){
				    	var classes = [];
				    	var labels = [];// finding dublicates
				    	for (var i = 0; i < item.classes.length; i++) {
				    		var l = _.last(item.classes[i].label.split('/'));// http://www.w3.org/2002/07/owl#Thing
				    		if(labels.indexOf(l)>-1) continue;

				    		labels.push(l);
				    		classes.push({label:l});
				    	}

				        self.queryAnswers.push({title:item.label, desc:item.description, classes:classes});
				    });
				}
				self.sc_holdder_ref.emit_valid_commands_changed();
			},

			gotMedlinePlusSuggestions: function(json){
				if(!json)return;

				if(json.spellingCorrection){
					self.queryAnswers = [];
					self.queryAnswers.push({title:json.term + " not found", desc:'Search for '+ json.spellingCorrection+' instead'});
					self.sc_holdder_ref.emit_valid_commands_changed();
					return;
				}

				if(!json.list || !json.list.document || !json.list.document.length)return;
				// console.log(json);

				self.queryAnswers = [];
				for (var i = 0; i < json.list.document.length; i++) {
					var conts = json.list.document[i].content;
					var bind_data = {classes:[]};
					for (var j = 0; j < conts.length; j++) {
						var name = conts[j].name;
						if(name === 'title'){
							bind_data.title = conts[j].text.replace(/<[^>]*>/g, "");
						}
						// else if(name === 'snippet'){
						else if(name === 'FullSummary'){
							// bind_data.desc = conts[j].text.replace(/<[^>]*>/g, "");
							bind_data.desc = conts[j].text.replace(/<p>/g, '<p style=\'margin-bottom:10px;\'>');
						}
						else if(name === 'groupName'){
							bind_data.classes.push({label:conts[j].text.replace(/<[^>]*>/g, "")});
						}
					}
					console.log(bind_data);
					self.queryAnswers.push(bind_data);
				}
				
				// self.sc_holdder_ref.emit_valid_commands_changed();
			},
		}
		
		this.onlineSearchQuery = {
			getGoogleSuggestions: function(question, term_id){
				searchapi.getGoogleSuggestion(question, term_id, self.onlineSearchReply.gotGoogleSuggestions);
			},
			getWikipediaSuggestions: function(question, term_id){
            	searchapi.wikipedia_suggest(question, term_id, self.onlineSearchReply.gotWikipediaSuggestions);
			},
			getUmbelConcept: function(question, term_id){
				searchapi.searchUmbelConcept(question, term_id, self.onlineSearchReply.gotUmbelConcept);
			},
			getDuckDuckGoSuggestions: function(question, term_id){
				searchapi.searchDuckDuckGo(question, term_id, self.onlineSearchReply.gotDuckDuckGoSuggestions)
			},
			getDbpediaLookupSuggestions: function(question, term_id){
				searchapi.searchDbpediaLookup(question, term_id, self.onlineSearchReply.gotDbpediaLookupSuggestions)
			},
			getMedlinePlusSuggestions: function(query, term_id){
				searchapi.searchMedlinePlusSuggestions(query, self.onlineSearchReply.gotMedlinePlusSuggestions);
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
		this.removeQuestions =  function(){
			console.warn('complete TODO, Remove Questions');
		};

		this.ALL_PREDICATES_URI = 'http://semanticcards.org/allPredicates';

		this.uriToPredicateNames = {};
		this.contextStack = [];//{subject, parentPredicate, childPredicate, }
		this.termSuggestions = [];
		this.objectSuggestions = [];
		this.maxSparqlQuery = 10;
		this.noOfSparqlQueryMade = 0;
		var countLoop = 0;
		this.sfind = function(st,str){
			ss = st.each();
			for(var i =0; i < ss.length; i++){
				if(!ss[i]) continue;
				var val = ss[i].uri? ss[i].uri: ss[i].value;
				if(val.indexOf(str) > -1){
					var statement = st.statementsMatching(ss[i], undefined , undefined);
					console.log('subject',i, statement);
				}; 
				ps = st.each(ss[i]); 
				for(var j = 0; j < ps.length; j++){
					if(!ps[j]) continue;
					var val = ps[j].uri? ps[j].uri: ps[j].value;
					if(val.indexOf(str) > -1){
						var statement = st.statementsMatching(ss[i], ps[j], undefined);
						console.log('predicate', i, j, statement);
					}
				}
			}
		};
		this.sany = function(st,str, pos){
			ss = st.each();
			for(var i = 0; i < ss.length; i++){
				if(!ss[i]) continue;
				var val = ss[i].uri? ss[i].uri: ss[i].value;
				if(val.indexOf(str) > -1 && pos == 1){
					var statement = st.statementsMatching(ss[i], undefined , undefined);
					console.log('subject',i);
					return statement;
				}; 
				ps = st.each(ss[i]); 
				if(i == 2){
					for(var j = 0; j < ps.length; j++){
						if(!ps[j]) continue;
						var val = ps[j].uri? ps[j].uri: ps[j].value;
						if(val.indexOf(str) > -1){
							var statement = st.statementsMatching(ss[i], ps[j], undefined);
							console.log('predicate', i, j);
							return statement;
						}
					}
				}
					
			}
		};

		this.prepareContextStack = function(param){
			countLoop++;

			for (var i = 0; i < self.tokenStrings.length; i++) {
				if(self.contextStack[i].built)continue;// stack already filled previously
				
				var tokenStr = self.tokenStrings[i];
				var lastToken = (i === tokenStrings.length-1);

				if(i === 0){
					var qsearch = self.onlineSearchQuery;
					var term_id = Date.now().toString(36) + '0';// save his to ustore
					var qanswer = self.gotATermToken(term_id, tokenStr, 'subject');
					if(qanswer){// question and answer already exists
														//namedNodes
						self.contextStack[i].subjects = [];
						for (var j = 0; j < qanswer.answers.length; j++) {
							self.contextStack[i].subjects.push(qanswer.answers[j].uri);
						}
						self.contextStack[i].subject = qanswer.answers[0].uri;//TODO, for now only 0th
						self.contextStack[i].built = true;

					}
					else{
						qsearch.getWikipediaSuggestions(tokenStr, term_id);
						// qsearch.getGoogleSuggestions(question, term_id);
						// qsearch.getUmbelConcept(question, term_id);
						// qsearch.getDuckDuckGoSuggestions(question, term_id);
						// qsearch.getDbpediaLookupSuggestions(question, term_id);
						
						return;// important, as query are async . this function will be called again when data is available 
					}
				}
				else{
					var ps = self.contextStack[i-1].subject;
					var isuri = (ps.match(/^https?:\/\//));
					if(!ps || !isuri){
						console.log('Subject is not defined for context', i-1, '  ' +self.contextStack[i-1]);
						return;
					}
					else{
						console.log(' now start working with context', i);
						if(param){// result from sparql query 
							console.log('got a param in context ', param,  i);
							if(param.sparqlid === self.contextStack[i].sparqlid){// this is for me(i)
								console.log('this sparqlid is for me', i);
								delete self.contextStack[i].sparqlid;

								if(param.type === 'allPredicate'){
									if(param.status === 'zeroresults'){
										self.contextStack[i].object = '0 Results';
										self.contextStack[i].built = true;// no need to come to this index again
									}
									else{
										console.log('got all predicates from sparql for ', ps);

										// first remove all predicates for ps; and add the new ones from sparql results
										tripplestore.set(ps, self.ALL_PREDICATES_URI, param.predicates);//o is an arry of predicates URI
										
										self.contextStack[i].parentPredicates = [];// list of all matched predicates for a given tokenStr
										predicateLabels = [];
										for (var j = 0; j < param.predicates.length; j++) {
											var p = param.predicates[j];
											match = p.match(/.+[\/#](.+)$/);
											if(match){
												if(match[1].toLowerCase().indexOf(tokenStr.toLowerCase()) > -1){// matched the last part of the URI
													self.contextStack[i].parentPredicates.push(p);// don't save lable. as we have to refer to full uri
													if(lastToken) predicateLabels.push({desc:'<a href=\''+p+'\' target=\'_blank\' title=\''+p+'\'>'+match[1]+'</a>'});
												}
											}
										}

										if(self.contextStack[i].parentPredicates.length){// atleast one matched
											// set the selected predicate, here its is the first one
											self.contextStack[i].parentPredicate = self.contextStack[i].parentPredicates[0]; 
										}
										// console.log('stringMatchedPredicate', stringMatchedPredicate);
									
										if(self.contextStack[i].parentPredicate){
											// if(!lastToken){// dont get for last token , it will incur lot of bandwidth as the user is typing 
															// once the user presses a dot// a random lastToken will be inserted to the  list and will then fetch the objects
												
												var p = self.contextStack[i].parentPredicate;
												if(self.maxSparqlQuery - self.noOfSparqlQueryMade > 0){
													var sparqlid = self.contextStack[i].sparqlid = Date.now().toString(36);
													console.log('_________________  Getting Object  _______________param')
													self.sparql.getObject(ps, p, sparqlid);
													self.noOfSparqlQueryMade++;

													return;// will come here again
												}
												else{
													console.warn('Why sparql query exceded max limit');
												}
											// }
										}
										
										if(lastToken){
											if(!predicateLabels.length){
												// what the user has written has not matched with any predicate 
												// suggest a new one here
												for (var j = 0; j < param.predicates.length; j++) {
													var p = param.predicates[j];
													match = p.match(/.+[\/#](.+)$/);
													if(match){
														predicateLabels.push({desc:'<a href=\''+p+'\' target=\'_blank\' title=\''+p+'\'>'+match[1]+'</a>'});// if match it will have two values
													}
												}
											}
											self.termSuggestions = _.sortBy(predicateLabels, 'desc');
										}
									}
								}

								else if(param.type === 'object'){
									if(param.objs){
										console.log(param.objs);	
										if(param.status === 'zeroresults'){
											self.contextStack[i].object = '0 Results';
											self.contextStack[i].built = true;// no need to come to this index again
										}
										else{
											var ps = self.contextStack[i-1].subject;
											var p = self.contextStack[i].parentPredicate;// it must exist , as this call was made for this p
											// remove dublicates
											// first remove all from this subject, property => objects
											tripplestore.remove(ps, p);// removes all objects

											self.contextStack[i].subjects = [];// all objects from: ps => p
											for (var j = 0; j < param.objs.length; j++) {
												var obj = param.objs[j];
												if(obj.value.length){
													tripplestore.add(ps, p, obj.value);
													self.contextStack[i].subjects.push(obj.value);
												}
											}
											if(self.contextStack[i].subjects.length){
												self.contextStack[i].subject = self.contextStack[i].subjects[0];// selected subjects out of many
											}
											self.contextStack[i].built = true;
										}
									}
								}
							}
							else{
								if(self.contextStack[i].sparqlid)console.log(' sparql id doesn\'t match, but exist');
							}
						}
						else{// when comming with param there is no need to check this// as with the above if (param) => everything is done to get the object for this context
							console.log('No param', i);	

							var predicateLabels = [];
							var predicates = tripplestore.getValues(ps, self.ALL_PREDICATES_URI);
							// which is [[p1, p2, p3....]]
							if(predicates.length) predicates = predicates[0];
							else{
								console.log('all predicate list not found');
							}
							if(predicates.length > 2){
								self.contextStack[i].parentPredicates = [];// list of all matched predicates for a given tokenStr
								for (var j = 0; j < predicates.length; j++) {
									p = predicates[j];
									match = p.match(/.+[\/#](.+)$/);
									if(match && match[1].toLowerCase().indexOf(tokenStr.toLowerCase()) > -1){// matched the last part of the URI
										self.contextStack[i].parentPredicates.push(p);// insert the whole URI
										if(lastToken) predicateLabels.push({desc:'<a href=\''+p+'\' target=\'_blank\' title=\''+p+'\'>'+match[1]+'</a>'});
									}
								}

								if(self.contextStack[i].parentPredicates.length){// atleast one matched
									self.contextStack[i].parentPredicate = self.contextStack[i].parentPredicates[0]; // select one 
									var p = self.contextStack[i].parentPredicate;
									console.log('showing results for predicate ' + p);

									var objects = tripplestore.getValues(ps, p);
									// console.log(objects, j);
									self.contextStack[i].subjects = [];

									if(objects.length){// atleast one object exists
										for (var j = 0; j < objects.length; j++) {
											var o = objects[j];
											self.contextStack[i].subjects.push(o);
										}
										self.contextStack[i].subject = self.contextStack[i].subjects[0];// selected subjects out of many
									}
									else{
										// if(!lastToken){// dont get for last token , it will incur lot of bandwidth as the user is typing 
														// once the user presses a dot// a random lastToken will be inserted to the  list and will then fetch the objects
											console.log(ps, p , 'Object doesn\'t exits', j);
											if(self.maxSparqlQuery - self.noOfSparqlQueryMade > 0){
												var sparqlid = self.contextStack[i].sparqlid = Date.now().toString(36);
												console.log('_________________  Getting Object  _______________no param')
												self.sparql.getObject(ps, p, sparqlid);
												self.noOfSparqlQueryMade++;
												
												return;// will come here again
											}
											else{
												console.warn('Why sparql query exceded max limit');
											}
										// }
									}
									self.contextStack[i].built = true;// if it came till here then , it must be done
								}		

								if(lastToken){
									if(!predicateLabels.length){
										// what the user has written has not matched with any predicate 
										// suggest a new one here
										for (var j = 0; j < predicates.length; j++) {
											var p = predicates[j];
											match = p.match(/.+[\/#](.+)$/);
											if(match){
												predicateLabels.push({desc:'<a href=\''+p+'\' target=\'_blank\' title=\''+p+'\'>'+match[1]+'</a>'});// if match it will have two values
											}
										}
									}
									self.termSuggestions = _.sortBy(predicateLabels, 'desc');
								}
							}
							else{
								console.log(ps, 'doesnot have enough predicates');
								if(self.maxSparqlQuery - self.noOfSparqlQueryMade > 0){
									self.contextStack[i].sparqlid = Date.now().toString(36);
									console.log("---------------Getting All Predicate---------- for " + i);
									sparql.getAllEnglishPredicate(ps, self.contextStack[i].sparqlid);
									self.noOfSparqlQueryMade++;

									return;
								}
								else{
									console.warn('Why sparql query exceded max limit');
								}
							}
						}
					}
				}

				if(lastToken){// every part of the stack is filled now
					console.log(self.contextStack);
					self.processAndSendAnswers();
					console.log('came inside function, prepare  context ' + countLoop+ ' times' );
					countLoop=0;
				}
			}
		}
	
		this.gotAPredicateToken = function(subject_index, str){

		};

		this.gotATermToken = function(term_id, question, question_type){
			// first check if a similar question was already asked
			var qs =  self.fastStringSearch(self.questionSearchStringSource, question);
			// console.log(qs);
			//qs : {results:[Strings], count:Int}
			for (var i = 0; i < qs.results.length; i++) {
				var id = qs.results[i].split(self.searchIdDelim)[0];
				// string split length is always > 0;
				if(self.queryQuestions[id]){// if the question really exist
					self.queryQuestions[id].count++;// asked again
					if(self.queryAnswers[id]) return self.queryAnswers[id];// id are same for question and answer
					// question was already asked no need to search again
				}
			}
			
			self.queryQuestions[term_id] = {id:term_id, question:question, type:question_type, count:1};
			if(self.questionSearchStringSource.length > 2000){
				self.removeQuestions();
				self.questionSearchStringSource = self.questionSearchStringSource.slice(10000, 20000);
				// var f = self.questionSearchStringSource.indexOf('"');
				// remove half formatted string in the pattern
				console.log('removing some sreach cache');
				// if search sting is greater than 20000 remove initial questions
			}
			
			self.questionSearchStringSource+= self.searchDelim + term_id + self.searchIdDelim + question.toLowerCase() + self.searchDelim;//'"23 who is Isaac Newton"'
		};

		this.last_subject_query_str = '';
		this.questionFromTab = function(question, tab_id){
			self.tab_id = tab_id;
			// do some NER
			// question api services
			// and wait for them to respond
			
			if(question.length > 3) {// no special meaning
				self.tokenStrings = [];
				var analysedSentences = compendium.analyse(question);
				
				self.tokenChainIndex = analysedSentences.length-1;
				for (var i = 0; i < analysedSentences.length; i++) {
					var tok = analysedSentences[i].raw;
					self.tokenStrings.push(tok.replace(/[\.?]/, ''));
				}
				self.rootToken = tokenStrings[0];// @asume length is > 1
				var lastToken = tokenStrings[self.tokenChainIndex];

				var termended = question.match(/[\.?]+[\s]*$/);// compendiun will take only valid sentences ; but we need full stops and ? marks to say that it ended
				// note that this will only match for last sentence
				if(termended) tokenStrings.push('shdkhskdhsk');// this will search for all matches for the next possible predicates
				
				self.contextStack = [];
				self.termSuggestions = [];
				self.maxSparqlQuery = self.tokenStrings.length*2;// one for predicate one for object
				self.noOfSparqlQueryMade = 0;//init
				for (var i = 0; i < self.tokenStrings.length; i++) {
					self.contextStack.push({});
				}

				console.log('\n ------------------START---------------------------\n\n')
				self.prepareContextStack();
				
			}

			//by this time do 
		}


		//Answer
		this.sendAnswers = function(answers){
			sendMSG_to_tab_byId({type:'SW:ANSWER_FROM_BACK',  msg:{answers:answers}}, self.tab_id);//(msg, tab_id) => msg: {type:'TYPE', msg:{data:data}}

		}

		this.fastStringSearch = function(source, term){
			var rx = new RegExp('"([^"]*'+term+'[^"]*)"','gi');
			var i = 0;
			var results = [];
			while (result = rx.exec(source)) {
				results.push(result[1]);
				// console.log('match: '+ result[1]);
			    i += 1;
			    if (i >= 50)break;
			}
			return {results:results, count:i};
		}












		return this;
	}

	var SW = SemanticWeb();
	







