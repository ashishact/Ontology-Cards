define(['durandal/app', 'lodash', 'state', 'bloodhound', 'searchapi', 'mediawiki'],  function (app, _, state, Bloodhound, searchapi, mediawiki) {
	// interpretes intention from string 
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

		this.cardTitleIfNotFound = '_Card_';
		this.searchTitles = function(search_str){
			self.cardTitleIfNotFound = search_str;
			if(self.cardTitleSearchEngine){
				self.filteredCardTitles = [];
				self.cardTitleSearchEngine.search(search_str, self.resurltOfSearchCardTitles);
			}
		}
		this.resurltOfSearchCardTitles = function(datum){
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
			var obj = _.find(self.sc_data_space.card_titles, function(v){return v.id === card.id});
			if(obj.title != card.card_data.card_content.title){
				obj.title = card.title;
				if(self.cardTitleSearchEngine)self.cardTitleSearchEngine.initialize(true);
			}
		};

		this.on_card_removed_from_frameview = function(card_id){
			_.remove(self.sc_data_space.thisframeview_ids, function(id){return id === card_id});
		};

		this.on_card_deleted_from_store = function(id){
			console.log('removing here as well');
			_.remove(self.sc_data_space.card_titles, function(ct){return ct.id === id});
			if(self.cardTitleSearchEngine) self.cardTitleSearchEngine.initialize(true);
		};
		this.init_app_events = function(){
			app.on('frameview:loded_with_ids').then(function(ids){
			     self.sc_data_space.thisframeview_ids = ids;
			});
			app.on('frameview:updated_with_ids').then(function(ids){// same as above but triggered when few cards are lodede from store rather than the whole frameview 
			     self.sc_data_space.thisframeview_ids = ids;
			});

			app.on('card:new_card_added_from_user_to_frameview').then(function(card){
				var obj = {id: card.id, title:card.card_data.card_content.title};
				self.sc_data_space.card_titles.push(obj);
				if(self.cardTitleSearchEngine)self.cardTitleSearchEngine.add([obj]);
			});

			app.on('card:card_content_updated').then(self.on_card_content_updated);
			app.on('card:removed_from_frameview').then(self.on_card_removed_from_frameview);
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
					var title = item.suggestion.data;
					if(title)self.queryAnswers.push({title:title, desc:''});
				});

				self.sc_holdder_ref.emit_valid_commands_changed();
			},
			gotWikipediaSuggestions: function(json){
				if(json.query && json.query.pages){
					self.queryAnswers = [];
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
				    // console.log(_tok);
				    if(_tok)self.queryAnswers.push({title:_tok, desc:item.description});
				});

				self.sc_holdder_ref.emit_valid_commands_changed();
			},
			gotDuckDuckGoSuggestions : function(json){
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
				self.sc_holdder_ref.emit_valid_commands_changed();
			},
		}


		this.onlineSearchQuery = {
			getGoogleSuggestions: function(query){
				searchapi.getGoogleSuggestion(query, self.onlineSearchReply.gotGoogleSuggestions);
			},
			getWikipediaSuggestions: function(query){
            	mediawiki.wikipedia_suggest(query, self.onlineSearchReply.gotWikipediaSuggestions);
			},
			getUmbelConcept: function(query){
				searchapi.searchUmbelConcept(query, self.onlineSearchReply.gotUmbelConcept);
			},
			getDuckDuckGoSuggestions: function(query){
				searchapi.searchDuckDuckGo(query, self.onlineSearchReply.gotDuckDuckGoSuggestions)
			}
		}
		this.keyUpTimeOutVar = null;// used for timer event
		minTimeIntervalForQuery = 400; // ms
		this.last_query_str = '';
		this.onlineCommandSearch = function(cmd, query){
			if(self.last_query_str === query)return;
			
			var qsearch = self.onlineSearchQuery;
			clearTimeout(self.keyUpTimeOutVar);

			var timeOutFunction = function(){
				if(cmd.length){
					console.log('came');
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
						if(query.length) qsearch.getUmbelConcept(query);
					}
					else if('duckduckgo'.indexOf(cmd) === 0){
						self.queryQuestions.push({title:'duckduckgo', desc:''});
						if(query.length) qsearch.getDuckDuckGoSuggestions(query);
					}
				}
			}

			self.keyUpTimeOutVar = setTimeout(timeOutFunction, minTimeIntervalForQuery);
			self.last_query_str = query;
		}


		//******************************************************
		//******************************************************
		
		// this.commandSuggest = function(event){

		//     var str = $commandInput.val();
		//     var _callb = function(json){
		//         if(json.query && json.query.pages){
		//             self.commandSuggestions.removeAll();//clear suggestions
		//             $.each(json.query.pages, function(i,item){
		//                 console.log(item);

		//                 var bind_data = {};
		//                 bind_data.title = item.title;
		//                 if(item.thumbnail && item.thumbnail.source)bind_data.thumb_source = item.thumbnail.source;
		//                 if(item.terms && item.terms.description && item.terms.description.length){
		//                     bind_data.desc = item.terms.description[0];
		//                 }else bind_data.desc = '';
		                
		//                 if(bind_data.title)self.commandSuggestions.unshift(bind_data);
		//             });

		//         }
		//     }
		//     if(str.length){//atleast one character exist
		//         if(event.keyCode == 13 || event.which == 13){// enter pressed

		//             var tokens = str.replace(/\s+/g, " ").split(" ");
		//             if(tokens[0]=='w'){//wikipedia search & enter

		//             }
		//             else if(tokens[0]=='d'){//'d ' -> duckDuckGo
		//                 // send all tokens except the first
		//                 var _query = tokens.slice();//clone
		//                 _query.splice(0,1);
		//                 searchapi.searchDuckDuckGo(_query, function(json){
		//                     if(!json.RelatedTopics.length)return; // if no result go back
		//                     self.commandSuggestions.removeAll();//clear suggestions

		//                     var bind_data = {};
		//                     $.each(json.RelatedTopics, function(i, item){
		//                         if(item.hasOwnProperty('Name')){
		//                             $.each(item.Topics, function(j, childItem){
		//                                 bind_data = {};
		//                                 var _tok = childItem.FirstURL.split('/');
		//                                 if(_tok){
		//                                     _tok = _tok[_tok.length-1]; //get the last value
		//                                     _tok = _tok.split('%2').join(' ').split('2%').join(' ').split('_').join(' ').split('%').join(' ');
		//                                 }
		//                                 bind_data.title = _tok;
		//                                 bind_data.desc = childItem.Text;
		//                                 self.commandSuggestions.unshift(bind_data);
		//                             });
		//                         }
		//                         else {
		//                             bind_data = {};
		//                             var _tok = item.FirstURL.split('/');
		//                             if(_tok){
		//                                 _tok = _tok[_tok.length-1]; //get the last value
		//                                 _tok = _tok.split('%2').join(' ').split('2%').join(' ').split('_').join(' ').split('%').join(' ');
		//                             }
		//                             bind_data.title = _tok;
		//                             bind_data.desc = item.Text;
		//                             self.commandSuggestions.unshift(bind_data);
		//                         }

		//                     });
		//                 });
		//             }
		//             else if(tokens[0] == 'g'){// 'g ' for google suggests
		//             // else if(false){// 'g ' for google suggests
		//                 var _query = tokens.slice();// clone
		//                 _query.splice(0,1);// take the last one
		//                 searchapi.getGoogleSuggestion(_query, function(json){
		//                     $.each(json.CompleteSuggestion, function(i, item){
		//                         // console.log(item.suggestion.data);
		//                     });
		//                 });

		//             }
		//             //umbel, http only
		//             // it has more tpes of query , check each one of them
		//             // see that you take care of mixed content warning
		            
		//             else if(tokens[0] == 'u'){// 'u ' for umbel search
		//                 var _query = tokens.slice();// clone
		//                 _query.splice(0,1);// take the last one
		//                 searchapi.searchUmbelConcept(_query, function(json){
		//                     var bind_data = {};
		//                     $.each(json.results, function(i, item){
		//                         var _tok = item._id.split('/');
		//                         if(_tok){
		//                             _tok = _tok[_tok.length-1]; //get the last value
		//                             _tok = _tok.split(/(?=[A-Z])/).join(' ');// separate word based on Capital leters
		//                         }
		//                         bind_data.title = _tok;
		//                         bind_data.desc = item.description;
		//                         self.commandSuggestions.unshift(bind_data);
		//                     });
		//                 });

		//             }
		            
		//         }//enter pressed

		//         //realtime suggestions
		//         else if(str.substr(0,1) === ' '){
		//             var str = str.substr(1,str.length-1);
		//             // str don't contain begining space
		//             clearTimeout(self.keyUpTimeOutVar);
		//             var searchSuggestionFunction = function(){
		//                 if(str.length > 3){// 2 for 'w ' 2 for text
		                    
		//                     if(str.indexOf('w ')==0){//'w ' -> wikipedia
		//                         var query = str;
		//                         if(str.slice)query = str.slice(2,str.length-1);
		//                         else if(str.substr)query = str.substr(2,str.length-1);
		//                         mediawiki.wikipedia_suggest(query, _callb);
		//                     }

		//                     else if(str.indexOf('g ')==0){//'g ' -> google suggestions
		//                         var query = str;
		//                         if(str.slice)query = str.slice(2,str.length-1);
		//                         else if(str.substr)query = str.substr(2,str.length-1);

		//                         searchapi.getGoogleSuggestion(query, function(json){
		//                             self.commandSuggestions.removeAll();//clear suggestions
		//                             var bind_data = {};
		//                             $.each(json.CompleteSuggestion, function(i, item){
		//                                 bind_data.title = item.suggestion.data;
		//                                 bind_data.desc = '';
		//                                 if(bind_data.title)self.commandSuggestions.unshift(bind_data);
		                                
		//                             });
		                            
		//                         });
		//                     }
		//                     else if(str.indexOf('dbl')===0 ){
		//                         query = str.substr(str.indexOf(' ') ,str.length-1);
		                        
		//                         if(query.length > 2){// atleast 3 character
		//                             var prefix_url = 'http://lookup.dbpedia.org/api/search/PrefixSearch';
		//                             var prefix_data = {QueryString:query};
		//                             var search_url = 'http://lookup.dbpedia.org/api/search/KeywordSearch';
		//                             var search_data = {QueryClass:'place', QueryString:query};

		//                             if(str.substr(3,4)==='p')prefix_data.QueryClass = 'place';
		//                             if(str.substr(3,4)==='P')prefix_data.QueryClass = 'person';
		//                             if(str.substr(3,4)==='S')prefix_data.QueryClass = 'scientist';
		//                             // var _url = 'http://lookup.dbpedia.org/api/search/KeywordSearch?QueryClass=place&QueryString='+ query;

		//                             var loc_proto = window.location.protocol;
		//                             console.log(loc_proto);
		//                             if(loc_proto === 'https:'){
		//                                 var _type = 'MIXED_CONTENT_CALLBACK';
		//                                 var _msg = {url:'http://lookup.dbpedia.org/api/search/PrefixSearch?QueryClass=place&QueryString='+query};
		//                                 self.send_msg_to_background(_type, _msg);
		//                             }
		//                             else{// no mixed content error
		//                                 $.getJSON(prefix_url, prefix_data, function(json){
		//                                     console.log(json);
		//                                     if(json.results && json.results.length){
		//                                         self.commandSuggestions.removeAll();//clear suggestions
		//                                         var bind_data = {};
		//                                         $.each(json.results, function(i, item){
		//                                             bind_data.title = item.label;
		//                                             bind_data.desc = item.description;
		//                                             if(bind_data.title)self.commandSuggestions.unshift(bind_data);
		                                            
		//                                         });
		//                                     }
		                                    
		//                                 });
		//                             }
		//                         }                                    
		//                     }
		//                 }
		//             }

		//             self.keyUpTimeOutVar = setTimeout(searchSuggestionFunction, minTimeIntervalForQuery);
		//         }
		//         else{
		//             if(self.framesData().length){
		//                 var _cm = self.framesData()[0].frameModel;
		//                 if('select'.indexOf(str.toLowerCase()) === 0 ){
		//                         _cm.show_all_card_label(true);
		//                 }
		//                 else{
		//                     var match = str.toLowerCase().match(/sele?c?t?(\d+)\.?(\d+)?/);
		//                     if(match && match.length>1){
		//                         ind = parseInt(match[1])-1;
		//                         if(ind < _cm.cards().length)state.actions.select_this_card(state, _cm.cards()[ind]);
		//                     }
		//                     if(_cm.show_all_card_label())_cm.show_all_card_label(false);
		//                 }
		//             }
		//         }


		//     }// at least one char
		//     else{
		//         if(self.currentFrame) self.currentFrame.frameModel.show_all_card_label(false);
		        
		        
		//         self.commandSuggestions.removeAll();
		//     }

		// };

		//******************************************************
		//******************************************************


		this.on_start = function(stored_data){
			console.log(stored_data.card_titles.length);
			self.init_app_events();

			console.log(self.prefixPattern);
			if(stored_data.card_titles && stored_data.card_titles.length){
				self.sc_data_space.card_titles = stored_data.card_titles;
			}
			if(stored_data.frameview_titles && stored_data.frameview_titles.length){
				self.sc_data_space.frameview_titles = stored_data.frameview_titles;
			}
			if(stored_data.thisframeview_ids){
				self.sc_data_space.thisframeview_ids = stored_data.thisframeview_ids;
			}

			if(self.cardTitleSearchEngine){
				self.cardTitleSearchEngine.clear();
				self.cardTitleSearchEngine = null;
			}
			if(self.frameviewSearchEngine){
				self.frameviewSearchEngine.clear();
				self.frameviewSearchEngine = null;
			}

			self.cardTitleSearchEngine = new Bloodhound({
			    local: self.sc_data_space.card_titles,
			    identify: function(obj) { return obj.id; },
			    queryTokenizer: Bloodhound.tokenizers.whitespace,
			    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
			});
			 	
			self.frameviewSearchEngine = new Bloodhound({
			    local: self.sc_data_space.frameview_titles,
			    identify: function(obj) { return obj.id; },
			    queryTokenizer: Bloodhound.tokenizers.whitespace,
			    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
			});

		}

		// at last singletons

		return self;// return an object instead of the function to make it singleton
	}

	return interpreter();
});