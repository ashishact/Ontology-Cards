
	
var SEARCH_API = function(){
	this.searchDuckDuckGo = function(query, q_id, callback){			
		
		if(query instanceof Array){
			query = query.join('+');
		}
		else{
			query = query.replace(/\s+/g, " ").split(" ").join('+');
		}

        
		var _url = 'http://api.duckduckgo.com/?q='+ query + '&format=json&pretty=1';
		$.getJSON(_url ,function(data) {
			if(callback && typeof(callback) == 'function')callback(data, q_id);
			console.log(data);
		});
	};

	this.getGoogleSuggestion = function(query, q_id, callback){
		if(query instanceof Array){
			query = query.join('%20');
		}
		else{
			query = query.replace(/\s+/g, " ").split(" ").join('%20');
		}
		// var _url = 'http://google.com/complete/search?output=toolbar&q=theoric';// http only
		var _url = 'https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=' + query;// https works
		$.get(_url ,function(data) {// getJSOn can't be used because this gives xml by default in chrome
			if(callback && typeof(callback) == 'function')callback( $.xml2json(data) , q_id);
			else console.log($.xml2json(data));
		});

	};

	this.searchUmbelConcept = function(concept, q_id, callback){
		if(concept instanceof Array){
			concept = concept.join('%20');
		}
		else{
			concept = concept.replace(/\s+/g, " ").split(" ").join('%20');
		}
		_url = 'http://umbel.org/ws/search/' + concept;
		console.log(_url);
		$.get(_url, function(json){
			if(callback && typeof(callback) == 'function')callback(json, q_id);
			else console.log(json);
		});
	};

	this.wikipedia_suggest = function(query, q_id, callback){
	    var searchq = query.split(' ').join('%20');
	    var _url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&version=2&generator=prefixsearch&gpssearch=' + searchq + '&gpslimit=10&prop=pageimages%7Cpageterms&piprop=thumbnail&pithumbsize=50&pilimit=10&redirects=&wbptterms=description';
	    // var _url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&version=2&generator=prefixsearch&gpssearch=' + searchq + '&gpslimit=6&prop=pageimages%7Cpageterms&piprop=thumbnail&pithumbsize=50&prop=info&inprop=url&pilimit=10&redirects=&wbptterms=description';

	    $.getJSON(_url ,function(data) {
	        if(callback){
	            callback(data, q_id);
	        }
	        else{
	            $.each(data.query.pages, function(i, item) {
	                console.log(item);
	            });
	        }
	    });

	};
	this.wikipedia_shortdescriptions_and_thumbnails = function(titles, a_id, callback){
		var limit = titles.length;
		titles = titles.join('|');
		var _url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&version=2&titles='+titles+'&prop=pageimages%7Cpageterms&piprop=thumbnail&pithumbsize=50&pilimit='+limit;// this limits is required to get all images
		$.getJSON(_url ,function(data) {
		    if(callback){
		        callback(data, a_id);
		    }
		    else{
		        $.each(data.query.pages, function(i, item) {
		            console.log(item);
		        });
		    }
		});
	}
	this.searchDbpediaLookup = function(query, q_id, callback){
		if(query.length){
		    var prefix_url = 'http://lookup.dbpedia.org/api/search/PrefixSearch';
		    var prefix_data = {QueryString:query};
		    
		    var search_url = 'http://lookup.dbpedia.org/api/search/KeywordSearch';
		    var search_data = {QueryClass:'place', QueryString:query};

		    // if(str.substr(3,4)==='p')prefix_data.QueryClass = 'Place';
		    // if(str.substr(3,4)==='P')prefix_data.QueryClass = 'Person';
		    // if(str.substr(3,4)==='S')prefix_data.QueryClass = 'Scientist';
		    // var _url = 'http://lookup.dbpedia.org/api/search/KeywordSearch?QueryClass=place&QueryString='+ query;

		    $.getJSON(prefix_url, prefix_data, function(json){
				if(typeof(callback) == 'function'){
					callback(json, q_id);
				}
				else console.log(json);
		    });
		} 
	};
	this.searchMedlinePlusSuggestions = function(query, callback){
		var url =  'https://wsearch.nlm.nih.gov/ws/query?db=healthTopics&term='+query;+'&retmax=5';
		$.get(url ,function(data) {// getJSOn can't be used because this gives xml by default in chrome
			if(callback && typeof(callback) == 'function')callback( $.xml2json(data) );
			else console.log($.xml2json(data));
		});
	}


	return this;
};

var searchapi = SEARCH_API();
		

