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

	}
	return new searchapi();
});