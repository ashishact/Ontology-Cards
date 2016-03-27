
	define(['jquery','qwest', 'xml2json'], function ($, qwest, xml2json) {
		var searchapi = function(){
			this.searchDuckDuckGo = function(query, callback){			
				
				if(query instanceof Array){
					query = query.join('+');
				}
				else{
					query = query.replace(/\s+/g, " ").split(" ").join('+');
				}

	            
				var _url = 'http://api.duckduckgo.com/?q='+ query + '&format=json&pretty=1';
				$.getJSON(_url ,function(data) {
					if(callback && typeof(callback) == 'function')callback(data);
					console.log(data);
				});
			};

			this.getGoogleSuggestion = function(query, callback){
				if(query instanceof Array){
					query = query.join('%20');
				}
				else{
					query = query.replace(/\s+/g, " ").split(" ").join('%20');
				}
				// var _url = 'http://google.com/complete/search?output=toolbar&q=theoric';// http only
				var _url = 'https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=' + query;// https works
				$.get(_url ,function(data) {// getJSOn can't be used because this gives xml by default in chrome
					if(callback && typeof(callback) == 'function')callback( $.xml2json(data) );
					else console.log($.xml2json(data));
				});

			};

			this.searchUmbelConcept = function(concept, callback){
				if(concept instanceof Array){
					concept = concept.join('%20');
				}
				else{
					concept = concept.replace(/\s+/g, " ").split(" ").join('%20');
				}
				_url = 'http://umbel.org/ws/search/' + concept;
				console.log(_url);
				$.get(_url, function(json){
					if(callback && typeof(callback) == 'function')callback(json);
					else console.log(json);
				});
			};

			this.wikipedia_suggest = function(query, callback){
			    var searchq = query.split(' ').join('%20');
			    var _url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&version=2&generator=prefixsearch&gpssearch=' + searchq + '&gpslimit=6&prop=pageimages%7Cpageterms&piprop=thumbnail&pithumbsize=50&pilimit=10&redirects=&wbptterms=description';
			    // var _url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&version=2&generator=prefixsearch&gpssearch=' + searchq + '&gpslimit=6&prop=pageimages%7Cpageterms&piprop=thumbnail&pithumbsize=50&prop=info&inprop=url&pilimit=10&redirects=&wbptterms=description';

			    $.getJSON(_url ,function(data) {
			        if(callback){
			            callback(data);
			        }
			        else{
			            $.each(data.query.pages, function(i, item) {
			                console.log(item);
			            });
			        }
			    });

			};
			this.searchDbpediaLookup = function(query, callback){
				if(query.length){

					prefix_data = {};
					match = query.match(/:(\w*)\s(.*)/);
					if(match){// eg ;dbpedialookup :Person Isaac Newton
						prefix_data.QueryClass = match[1];
						prefix_data.QueryString = match[2];
					}
					else{
						prefix_data.QueryString = query; 
					}

					if(prefix_data.QueryString.length < 3)return;
				    var prefix_url = 'http://lookup.dbpedia.org/api/search/PrefixSearch';

				    
				    var search_url = 'http://lookup.dbpedia.org/api/search/KeywordSearch';
				    var search_data = {QueryClass:'place', QueryString:query};

				    // if(str.substr(3,4)==='p')prefix_data.QueryClass = 'Place';
				    // if(str.substr(3,4)==='P')prefix_data.QueryClass = 'Person';
				    // if(str.substr(3,4)==='S')prefix_data.QueryClass = 'Scientist';
				    // var _url = 'http://lookup.dbpedia.org/api/search/KeywordSearch?QueryClass=place&QueryString='+ query;

				    $.getJSON(prefix_url, prefix_data, function(json){
						if(typeof(callback) == 'function'){
							callback(json);
						}
						else console.log(json);
				    });
				} 
			}
			this.searchMedlinePlusSuggestions = function(query, callback){
				var url =  'https://wsearch.nlm.nih.gov/ws/query?db=healthTopics&term='+query;+'&retmax=5';
				$.get(url ,function(data) {// getJSOn can't be used because this gives xml by default in chrome
					if(callback && typeof(callback) == 'function')callback( $.xml2json(data) );
					else console.log($.xml2json(data));
				});
			}


		}
		return new searchapi();
	});

