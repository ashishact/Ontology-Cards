define(['durandal/app', 'lodash', 'state', 'bloodhound', 'searchapi', 'mediawiki'],  function (app, _, state, Bloodhound, searchapi, mediawiki) {
	// interpretes intention from string 
	function unique() {
	    var a = [];
	    var l = this.length;
	    for(var i=0; i<l; i++) {
	      for(var j=i+1; j<l; j++) {
	        // If this[i] is found later in the array
	        if (this[i] === this[j])
	          j = ++i;
	      }
	      a.push(this[i]);
	    }
	    return a;
	  };

	interpreter = function(){
		var self = this;
		this.sc_holdder_ref = null;

		
		this.cardTitleSearchEngine = null;
		this.frameviewSearchEngine = null;

		this.currentPrefix = '';
		this.filteredCardTitles = [];
		this.filteredFrameviewTitles = [];
		this.titleContextPrefix = '';

		this.sc_data_space = {
			card_titles : [{id:'test', title:'Test'}],
			frameview_titles : [{id:'home', title:'Home'}],
			thisframeview_ids:[],
			last_cmds : [],
			last_searches : [],
			successivepartialmatch_cmds : [],
			exactmatch_cmds : [],
		}

		this.preetyJson = {
			replacer: function(match, pIndent, pKey, pVal, pEnd) {
				var key = '<span class=json-key>';
				var val = '<span class=json-value>';
				var str = '<span class=json-string>';
				var r = pIndent || '';
				if (pKey)
					r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
				if (pVal)
					r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
				return r + (pEnd || '');
			},
			print: function(obj) {
				var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
				return JSON.stringify(obj, null, 3)
					.replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
					.replace(/</g, '&lt;').replace(/>/g, '&gt;')
					.replace(jsonLine, self.preetyJson.replacer);
			}
		};

		this.cardTitleIfNotFound = '_Card_';
		this.searchTitles = function(search_str){
			self.cardTitleIfNotFound = search_str;
			if(self.cardTitleSearchEngine){
				self.filteredCardTitles = [];
				self.cardTitleSearchEngine.search(search_str, self.resurltOfSearchCardTitles);
			}
		}
		this.resurltOfSearchCardTitles = function(datum){
			self.filteredCardTitles = [];
			for(var i = 0; i < datum.length; i++){
				if(self.titleContextPrefix === '[thisframeview.title]'){
					if(_.find(self.sc_data_space.thisframeview_ids , function(e){return e === datum[i].id})){
						self.filteredCardTitles.push({id:datum[i].id, title:self.currentPrefix + " " + datum[i].title, desc:''});
					}
				}
				else{
					self.filteredCardTitles.push({id:datum[i].id, title:self.currentPrefix + " " + datum[i].title, desc:''});
				}
					
			}
			if(!datum.length){
				self.filteredCardTitles.push({title:self.currentPrefix + " " + self.cardTitleIfNotFound , desc:'add a card named \"' + self.cardTitleIfNotFound + '\"'});
			}
			self.sc_holdder_ref.emit_valid_commands_changed();
		};

		this.on_card_content_updated = function(card){
			if(card.TYPE.VOLATILE)return;
			self.updateCardTitleSearchIndex(card.id, card.card_data.card_content.title, 'update');

			// var obj = _.find(self.sc_data_space.card_titles, function(v){return v.id === card.id});
			// if(obj.title != card.card_data.card_content.title){
				// obj.title = card.title;
				// if(self.cardTitleSearchEngine)self.cardTitleSearchEngine.initialize(true);
				
			// }
		};

		this.on_card_removed_from_frameview = function(card_id){
			// _.remove(self.sc_data_space.thisframeview_ids, function(id){return id === card_id});
		};

		this.on_card_deleted_from_store = function(id){
			console.log('removing here as well');
			// _.remove(self.sc_data_space.card_titles, function(ct){return ct.id === id});
			// if(self.cardTitleSearchEngine) self.cardTitleSearchEngine.initialize(true);
			self.updateCardTitleSearchIndex(id, '', 'remove');
		};
		this.init_app_events = function(){
			app.on('frameview:loded_with_ids').then(function(ids){
			     // self.sc_data_space.thisframeview_ids = ids;
			});
			app.on('frameview:updated_with_ids').then(function(ids){// same as above but triggered when few cards are lodede from store rather than the whole frameview 
			     // self.sc_data_space.thisframeview_ids = ids;
			});

			app.on('card:new_card_added_from_user_to_frameview').then(function(card){
				if(card.TYPE.VOLATILE)return;
				// var obj = {id: card.id, title:card.card_data.card_content.title.replace(/<[^>]*>/g, "")};
				// self.sc_data_space.card_titles.push(obj);
				// if(self.cardTitleSearchEngine)self.cardTitleSearchEngine.add([obj]);
				self.updateCardTitleSearchIndex(card.id, card.card_data.card_content.title, 'insert');
			});

			app.on('card:card_content_updated').then(self.on_card_content_updated);
			// app.on('card:removed_from_frameview').then(self.on_card_removed_from_frameview);
			// removed is called for each card removed from frameview
			// no need to listen it both remove and delete
			// removed is called for Volatile and non volatile cards
			// delete is called for only non volatile card
			// anyway volatile card list is not inserted in bloodhound
			app.on('card:deleted_from_store').then(on_card_deleted_from_store);


		}
		this.searchFrameviews = function(search_str){
			if(self.frameviewSearchEngine){
				self.frameviewSearchEngine.search(search_str, self.resurltOfSearchFrameviewTitles);
			}
		}

		this.resurltOfSearchFrameviewTitles = function(datum){
			console.log('result of search frameview', datum);
		}

		this.resolve_pattern = function(prefix, atomic_pattern, str){
			self.currentPrefix = prefix;
			self.titleContextPrefix = atomic_pattern;
			if(atomic_pattern === '[title]'){
				self.searchTitles(str);
			}
			else if(atomic_pattern === '[thisframeview.title]'){
				self.searchTitles(str);
			}
		}

		//******************************************************
		//ONLINE COMMAND SEARCH
		//******************************************************

		this.queryAnswers = [];
		this.queryQuestions = [];
		this.onlineSearchReply = {
			gotGoogleSuggestions: function(json){
				
				if(!json.CompleteSuggestion)return;

				self.queryAnswers = [];
				$.each(json.CompleteSuggestion, function(i, item){
					var title = item.suggestion? item.suggestion.data: '';
					if(title)self.queryAnswers.push({title:title, desc:''});
				});

				self.sc_holdder_ref.emit_valid_commands_changed();
			},
			gotWikipediaSuggestions: function(json){
				console.log(json);
					self.queryAnswers = [];
				if(json.query && json.query.pages){
				    $.each(json.query.pages, function(i,item){
				        var bind_data = {};
				        bind_data.title = item.title;
				        if(item.thumbnail && item.thumbnail.source)bind_data.thumb_source = item.thumbnail.source;
				        if(item.terms && item.terms.description && item.terms.description.length){
				            bind_data.desc = item.terms.description[0];
				        }else bind_data.desc = '';
				        
				        if(bind_data.title)self.queryAnswers.push(bind_data);
				    });

				    self.sc_holdder_ref.emit_valid_commands_changed();

				}
			},
			gotUmbelConcept: function(json){
				if(!json.results) return;
				console.log(json);
				self.queryAnswers = [];
				$.each(json.results, function(i, item){
				    _tok = item['pref-label'];

				    var classes = [];
				    var labels = [];// finding dublicates
				    if(item.type instanceof Array){
					    for (var i = 0; i < item.type.length; i++) {
					    	var l = _.last(item.type[i].split('/'));// http://www.w3.org/2002/07/owl#Thing
					    	if(labels.indexOf(l)>-1) continue;
					    	if(l.length>2)labels.push(l);
					    	if(l.length>2)classes.push({label:l});
					    }
				    }
				    else if(item.type && item.type.length){
					    var l = _.last(item.type[i].split('/'));
					    if(l.length>2)classes.push({label:l});
				    }
				    	
				    if(_tok)self.queryAnswers.push({title:_tok, desc:item.description, classes:classes});
				    	

				});

				self.sc_holdder_ref.emit_valid_commands_changed();
			},
			gotDuckDuckGoSuggestions : function(json){
				if(!json.RelatedTopics.length)return;
				console.log(json);

				self.queryAnswers = [];
				$.each(json.RelatedTopics, function(i, item){
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
				self.sc_holdder_ref.emit_valid_commands_changed();
			},
			gotDbpediaLookupSuggestions: function(json){
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
				
				self.sc_holdder_ref.emit_valid_commands_changed();
			}
		}


		this.onlineSearchQuery = {
			getGoogleSuggestions: function(query){
				searchapi.getGoogleSuggestion(query, self.onlineSearchReply.gotGoogleSuggestions);
			},
			getWikipediaSuggestions: function(query){
            	searchapi.wikipedia_suggest(query, self.onlineSearchReply.gotWikipediaSuggestions);
			},
			getUmbelConcept: function(query){
				searchapi.searchUmbelConcept(query, self.onlineSearchReply.gotUmbelConcept);
			},
			getDuckDuckGoSuggestions: function(query){
				searchapi.searchDuckDuckGo(query, self.onlineSearchReply.gotDuckDuckGoSuggestions);
			},
			getDbpediaLookupSuggestions: function(query){
				searchapi.searchDbpediaLookup(query, self.onlineSearchReply.gotDbpediaLookupSuggestions);
			},
			getMedlinePlusSuggestions: function(query){
				searchapi.searchMedlinePlusSuggestions(query, self.onlineSearchReply.gotMedlinePlusSuggestions);
			},
		}
		
		keyUpTimeOutVar = null;// used for timer event
		last_query_str = '';

		this.onlineCommandSearch = function(cmd, query){
			if(last_query_str === query)return;
			var qsearch = self.onlineSearchQuery;
			if(cmd.length){

				function timeOutFunction(){
					if('wikipedia'.indexOf(cmd) === 0){
						self.queryQuestions.push({title:'wikipedia', desc:''});
						if(query.length) qsearch.getWikipediaSuggestions(query);
					}
					else if('google'.indexOf(cmd) === 0){
						self.queryQuestions.push({title:'google result', desc:''});
						if(query.length) qsearch.getGoogleSuggestions(query);
					}
					else if('umbel'.indexOf(cmd) === 0){
						self.queryQuestions.push({title:'umbel', desc:''});
						if(query.length>2) qsearch.getUmbelConcept(query);
					}
					else if('duckduckgo'.indexOf(cmd) === 0){
						self.queryQuestions.push({title:'duckduckgo', desc:''});
						if(query.length>2) qsearch.getDuckDuckGoSuggestions(query);
					}
					else if('dbpedialookup'.indexOf(cmd) === 0){
						self.queryQuestions.push({title:'dbpedia', desc:''});
						if(query.length>3) qsearch.getDbpediaLookupSuggestions(query);
					}
					else if('medlineplus'.indexOf(cmd) === 0){
						self.queryQuestions.push({title:'medline plus', desc:'cmd:medlineplus'});
						if(query.length>3) qsearch.getMedlinePlusSuggestions(query);
					}
				}
				clearTimeout(keyUpTimeOutVar);
				keyUpTimeOutVar = setTimeout(timeOutFunction, 500);
				last_query_str = query;

			}
		}

		this.keyUpTimeOutVar = null;// used for timer event
		minTimeIntervalForQuery = 100; // ms
		this.last_query_str = '';

		this.explore = function(query){
			if(self.last_query_str === query)return;

			clearTimeout(self.keyUpTimeOutVar);
			var timeOutFunction = function(){
				self.send_msg_to_background("SW:QUESTION_FROM_TAB", {question:query});
			}
			self.keyUpTimeOutVar = setTimeout(timeOutFunction, minTimeIntervalForQuery);
			self.last_query_str = query;
		}


		//******************************************************
		//******************************************************
		this.RDF_MSG_TYPE = {
			LOAD_FROM_URL:1,
			CLEAR_DOCUMENT:2,
			GET_ANY:3,
			GET_THE:4,
			GET_MANY:5,
			S_MATCHING:6,
			ADD:7,
			REMOVE:8,
			GET_ALL_S:9,
			GET_ALL_P:10,
			GET_ALL_O:11,
		};

		this.rdfstore = {
			load_rdf_from_url: function(url){
				self.send_msg_to_background();
			},
		}
		this.send_msg_to_background= function(type, msg){
		    chrome.runtime.sendMessage(
		        {
		            type:type,
		            msg:msg
		        }
		    );
		};

		this.on_start = function(stored_data){
			self.init_app_events();

			if(stored_data.card_titles && stored_data.card_titles.length){
				for (var i = stored_data.card_titles.length - 1; i >= 0; i--) {
					// remove html encoding from string
					stored_data.card_titles[i].title  = stored_data.card_titles[i].title.replace(/<[^>]*>/g, "");
					self.updateCardTitleSearchIndex(stored_data.card_titles[i].id, stored_data.card_titles[i].title, 'insert');
				}
				// self.sc_data_space.card_titles = stored_data.card_titles;
			}

			if(stored_data.frameview_titles && stored_data.frameview_titles.length){
				for (var i = stored_data.frameview_titles.length - 1; i >= 0; i--) {
					// remove html encoding from string
					stored_data.frameview_titles[i].title  = stored_data.frameview_titles[i].title.replace(/<[^>]*>/g, "");
				}
				// self.sc_data_space.frameview_titles = stored_data.frameview_titles;
			}

			// if(stored_data.thisframeview_ids){
			// 	self.sc_data_space.thisframeview_ids = stored_data.thisframeview_ids;
			// }

			// if(self.cardTitleSearchEngine){
			// 	self.cardTitleSearchEngine.clear();
			// 	self.cardTitleSearchEngine = null;
			// }
			// if(self.frameviewSearchEngine){
			// 	self.frameviewSearchEngine.clear();
			// 	self.frameviewSearchEngine = null;
			// }

			// self.cardTitleSearchEngine = new Bloodhound({
			//     local: self.sc_data_space.card_titles,
			//     identify: function(obj) { return obj.id; },
			//     queryTokenizer: Bloodhound.tokenizers.whitespace,
			//     datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
			// });
			 	
			// self.frameviewSearchEngine = new Bloodhound({
			//     local: self.sc_data_space.frameview_titles,
			//     identify: function(obj) { return obj.id; },
			//     queryTokenizer: Bloodhound.tokenizers.whitespace,
			//     datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
			// });

		};

		this.getMatchedTitles = function(pre, ctx, query){
			self.filteredCardTitles = [];
			res = self.fastStringSearch(self.cardTitleSearchStringSource, query);
			for (var i = 0; i < res.results.length; i++) {
				var _t = res.results[i].split(self.searchIdDelim)[1];
				var _id = res.results[i].split(self.searchIdDelim)[0];
				self.filteredCardTitles.push({id:_id, title:pre + " " + _t, desc:''});
			}
			if(!res.count) self.filteredCardTitles.push({title:pre + " Card", desc:''});

		}

		this.updateCardTitleSearchIndex = function(id, title, mode){
			if(mode === 'insert')
				self.cardTitleSearchStringSource+= self.searchDelim + id + self.searchIdDelim + title.replace(/<[^>]*>/g, "") + self.searchDelim;
			else if(mode === 'remove'){
				var res = self.fastStringSearch(self.cardTitleSearchStringSource, id);
				if(res.results.length){
					title = res.results[0].split(self.searchIdDelim)[1];
					self.cardTitleSearchStringSource = self.cardTitleSearchStringSource.replace(self.searchDelim + id + self.searchIdDelim + title + self.searchDelim,'');
				}
			}
			else if(mode === 'update'){
				var res = self.fastStringSearch(self.cardTitleSearchStringSource, id);
				if(res.results.length){
					var str = res.results[0];
					self.cardTitleSearchStringSource = self.cardTitleSearchStringSource.replace(str, id + self.searchIdDelim + title.replace(/<[^>]*>/g, ""));
				}
			}
					
		}
			
		this.cardTitleSearchStringSource = '';
		this.searchDelim = '"';
		this.searchIdDelim = '~';
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

		// at last singletons

		return self;// return an object instead of the function to make it singleton
	}

	return interpreter();
});