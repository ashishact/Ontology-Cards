define(['knockout', 'jquery', 'mediawiki', 'searchapi'], function (ko, $, mediawiki, searchapi) {
    var sc_popup = function(){
    	var self = this;

    	self.$sc_ui = $('#SEMANTICCARDS-05041993');
    	self.$sc_ui.draggable({
    		cursor: "move",
    		containment: "window",
    		handle: '#DDrag',

    	});


    	// self.$sc_ui.resizable({
    	// });
    	
    	// this.attached = function(){
    	// };


    	self.chatElements = ko.observableArray([]);
    	self.inputSuggestions = ko.observableArray([]);

    	this.keyUpTimeOutVar = null;
    	self.onKeyUpInput = function(data, event){
    		var str = $(event.target).val();
    		var _callb = function(json){
    			if(json.query && json.query.pages){
    				self.inputSuggestions.removeAll();//clear suggestions
	    			$.each(json.query.pages, function(i,item){
		    			// console.log(item);

		    			var bind_data = {};
		    			bind_data.title = item.title;
		    			if(item.thumbnail && item.thumbnail.source)bind_data.thumb_source = item.thumbnail.source;
		    			if(item.terms && item.terms.description && item.terms.description.length){
		    				bind_data.desc = item.terms.description[0];
		    			}else bind_data.desc = '';
		    			
		    			if(bind_data.title)self.inputSuggestions.push(bind_data);
	    			});

    			}
    		}
    		if(str.length){//atleast one character exist
	    		if(event.keyCode == 13 || event.which == 13){// enter pressed

	    			var tokens = str.replace(/\s+/g, " ").split(" ");
	    			if(tokens[0]=='w'){//wikipedia search & enter

	    			}
	    			else if(tokens[0]=='d'){//'d ' -> duckDuckGo
	    				// send all tokens except the first
	    				var _query = tokens.slice();//clone
	    				_query.splice(0,1);
		    			searchapi.searchDuckDuckGo(_query, function(json){
		    				if(!json.RelatedTopics.length)return; // if no result go back
		    				self.inputSuggestions.removeAll();//clear suggestions

		    				var bind_data = {};
		    				$.each(json.RelatedTopics, function(i, item){
		    					if(item.hasOwnProperty('Name')){
		    						$.each(item.Topics, function(j, childItem){
		    							bind_data = {};
		    							var _tok = childItem.FirstURL.split('/');
		    							if(_tok){
		    								_tok = _tok[_tok.length-1]; //get the last value
		    								_tok = _tok.split('%2').join(' ').split('2%').join(' ').split('_').join(' ').split('%').join(' ');
		    							}
		    							bind_data.title = _tok;
		    							bind_data.desc = childItem.Text;
		    							self.inputSuggestions.push(bind_data);
		    						});
		    					}
		    					else {
		    						bind_data = {};
		    						var _tok = item.FirstURL.split('/');
	    							if(_tok){
	    								_tok = _tok[_tok.length-1]; //get the last value
	    								_tok = _tok.split('%2').join(' ').split('2%').join(' ').split('_').join(' ').split('%').join(' ');
	    							}
	    							bind_data.title = _tok;
		    						bind_data.desc = item.Text;
		    						self.inputSuggestions.push(bind_data);
		    					}

		    				});
		    			});
	    			}
	    			else if(tokens[0] == 'g'){// 'g ' for google suggests
	    			// else if(false){// 'g ' for google suggests
	    				var _query = tokens.slice();// clone
	    				_query.splice(0,1);// take the last one
	    				searchapi.getGoogleSuggestion(_query, function(json){
	    					$.each(json.CompleteSuggestion, function(i, item){
	    						console.log(item.suggestion.data);
	    					});
	    				});

	    			}
	    			//umbel, http only
	    			// it has more tpes of query , check each one of them
	    			// see that you take care of mixed content warning
	    			
	    			else if(tokens[0] == 'u'){// 'u ' for umbel search
	    				var _query = tokens.slice();// clone
	    				_query.splice(0,1);// take the last one
	    				searchapi.searchUmbelConcept(_query, function(json){
    						var bind_data = {};
	    					$.each(json.results, function(i, item){
	    						var _tok = item._id.split('/');
    							if(_tok){
    								_tok = _tok[_tok.length-1]; //get the last value
    								_tok = _tok.split(/(?=[A-Z])/).join(' ');// separate word based on Capital leters
    							}
    							bind_data.title = _tok;
	    						bind_data.desc = item.description;
	    						self.inputSuggestions.push(bind_data);
	    					});
	    				});

	    			}
	    			
	    		}

	    		//realtime suggestions
	    		clearTimeout(self.keyUpTimeOutVar);
	    		self.keyUpTimeOutVar = setTimeout(function(){
		    		if(str.length > 3){// 2 for 'w ' 2 for text
			    		
			    		if(str.indexOf('w ')==0){//'w ' -> wikipedia
			    			var query = str;
			    			if(str.slice)query = str.slice(2,str.length-1);
			    			else if(str.substr)query = str.substr(2,str.length-1);
			    			mediawiki.wikipedia_suggest(query, _callb);
			    		}

			    		else if(str.indexOf('g ')==0){//'g ' -> google suggestions
			    			var query = str;
			    			if(str.slice)query = str.slice(2,str.length-1);
			    			else if(str.substr)query = str.substr(2,str.length-1);

			    			searchapi.getGoogleSuggestion(query, function(json){
			    				self.inputSuggestions.removeAll();//clear suggestions
					    		var bind_data = {};
			    				$.each(json.CompleteSuggestion, function(i, item){
					    			bind_data.title = item.suggestion.data;
					    			bind_data.desc = '';
					    			if(bind_data.title)self.inputSuggestions.push(bind_data);
			    					
			    				});
				    			
			    			});
			    		}
			    		
		    		}
	    		}, 400);


    		}
    	}





   	}
   	return new sc_popup();//only one instance
});