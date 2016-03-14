/*
//Notes
1. Card content is still used to save content separately in a different db
*/



// var local_store = new sc_localStore();

// these prefix are needed because they are save in the same databse as all the cards
var frameviewkey_prefix = 'frameviewkey_';
var frame_config_id = 'config_frame_id';

//*****************************************
var framepouch = null;
framepouch =  PouchDB('semanticcardsDB', function(err, db){
	if(err){
		console.log(err);
	}
	else{
		framepouch = db;
	}	
});


var g_cards = null;
var g_card = null;
var g_fvids = null;
var g_card_content = null;
var g_frame_config = null;
//*****************************************

var cards = {};
var card_contents = {};
var cache_frame_config = null;

var tabIdOfSender = null;

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		// console.log(sender.tab ?
		// 	"from a content script:" + sender.tab.url :
		// 	"from the extension");
		tabIdOfSender = sender.tab.id;
	//*******************************************************
		if(request.type == 'LOAD_ALL_FROM_STORE_TO_FV'){
			console.log("logging request.msg.frameview_key", request.msg.frameview_key);
			get_frameview_full(request.msg.frameview_key, tabIdOfSender);
		}
		else if(request.type == 'SAVE_NEW_CARD_FROM_FV_TO_STORE'){

			save_new_card_from_frameview_to_store(request.msg.frameview_key, request.msg._card, tabIdOfSender);
			frameview_has_changed(request.msg.frameview_key, sender.tab);//let other tab know that this frameview has changed
		}
		else if(request.type == 'UPDATE_CARD_FROM_FV_TO_STORE'){
			update_card_from_frameview_to_store( request.msg._card, tabIdOfSender);
			frameview_has_changed(request.msg.frameview_key, sender.tab);//let other tab know that this frameview has changed
		}
		else if(request.type == 'REMOVE_CARD_FROM_STORE'){
			remove_card_from_store(request.msg.frameview_key, request.msg.id, tabIdOfSender);
			frameview_has_changed(request.msg.frameview_key, sender.tab);//let other tab know that this frameview has changed
		}

		else if(request.type == 'LOAD_FRAME_CONFIG_FROM_STORE'){
			load_frame_config_from_store(tabIdOfSender);
		}
		else if(request.type == 'SAVE_FRAME_CONFIG_TO_STORE'){
			save_frame_config_to_store(request.msg.frame_config, tabIdOfSender);
		}

		//*********************************************************
		else if(request.type == 'SEARCH_STORE'){
			search_store(request.msg, tabIdOfSender);
		}
		else if(request.type == 'MIXED_CONTENT_CALLBACK'){
			mixed_content_callback(request.msg, tabIdOfSender);
		}

		else if(request.type == 'SAVE_DATA_ELEMENT'){
			if(request.msg.id && request.msg.data){// this is pouchdb id
				save_data_element_to_pouchdb(request.msg.id, request.msg.data, tabIdOfSender);
			}
				
		}
		else if(request.type == 'GET_DATA_ELEMENT'){
			if(request.msg.id){// this is pouchdb id
				get_data_element_from_pouchdb(request.msg.id, tabIdOfSender);
			}
		}
		
		//*********************************************************

	

});

chrome.tabs.onActivated.addListener(
	function(activeInfo){
		//console.log(activeInfo);
		sendMSG_to_tab_byId({type:'UPDATE_CHANGED_FRAMES_NOW'}, activeInfo.tabId);
	}
);
function sendMSG_to_tab(_msg, tab){
	chrome.tabs.sendMessage(tab.id, _msg);
}
function sendMSG_to_tab_byId(_msg, tabId){
	chrome.tabs.sendMessage(tabId, _msg);
};

function toggleMSG(_msg){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, _msg, function(response) {
			console.log(response);
		});
	});
}
chrome.browserAction.onClicked.addListener(function(tab) { toggleMSG({type:'browser_action'}); });


function sendMSGToAll(_msg, except){
	chrome.tabs.query({},function(tabs){
		for (var i=0; i<tabs.length; ++i) {
	        if(tabs[i].id !== except.id)chrome.tabs.sendMessage(tabs[i].id, _msg);
	    }
	});
}


function frameview_has_changed(frameview_key, tab){
	var msg = {type:'FRAMEVIEW_HAS_CHANGED', frameview_key:frameview_key};
	sendMSGToAll(msg, tab);
}

function frameview_was_removed(frameview_key, tab){
	var msg = {type:'FRAMEVIEW_WAS_REMOVED', frameview_key:frameview_key};
	sendMSGToAll(msg, tab);
}

//**********************************************

var chromeReply = {
	send_data_element: function(id, data, tab_id){
		sendMSG_to_tab_byId({type:id, msg:{data:data}}, tab_id);
	},
	get_frameview_full: function(_cs, frameview_key, tab_id){
		sendMSG_to_tab_byId({type:'REPLYOF_LOAD_ALL_FROM_STORE_TO_FV', msg:{_cards:_cs, _fv_key:frameview_key}}, tab_id);
	},
	load_frame_config_from_store: function(frame_config, tab_id){
		sendMSG_to_tab_byId({type:'REPLYOF_LOAD_FRAME_CONFIG_FROM_STORE', msg:{frame_config:frame_config}}, tab_id);
	},
	search_store: function(search_results, tab_id){
		sendMSG_to_tab_byId({type:'REPLYOF_SEARCH_STORE', msg:{search_results: search_results}}, tab_id);
	},
	mixed_content_callback: function(json, tab_id){
		sendMSG_to_tab_byId({type:'REPLYOF_MIXED_CONTENT_CALLBACK', msg:{json: json}}, tab_id);
	}


}
//**********************************************

function load_frame_config_from_store(tab_id){

	//PouchDB
	framepouch.get(frame_config_id, function(err, doc){
		var frame_config = null;
		if(err){
			console.log('frame_config has not been created yet, you will receive a null value');
		}
		else{
			frame_config = doc.farme_config;
		}
		chromeReply.load_frame_config_from_store(frame_config, tab_id);
	});
}
function save_frame_config_to_store(frame_config, tab_id){

	//PouchDB
	framepouch.get(frame_config_id, function(err, doc){
		if(err){
			console.log('frame_config has not been created yet, I will creat one for you and update it with what you have provided');
			framepouch.put({_id:frame_config_id, frame_config: frame_config});
		}
		else{
			console.log('updating your frame_config');
			doc.farme_config = frame_config;//update
			framepouch.put(doc);//save
		}
	});
}

function get_frameview_full(frameview_key, tab_id){
	//PouchDB

	framepouch.get(frameview_key, function(err, doc){
		if(err){//may be the doc never existed
			console.log('frameview with key:', frameview_key + 'doesn\'t exists');
		}
		else{
			if(doc.fvids){
				var ids = doc.fvids;
				var _cs = {};//{'fg903hshjhsiaj-658HGH': _card1, 'hshduuey-HJJJHK:_card2'}
				console.log("no of card in this frameview should be"+ ids.length);
				framepouch.allDocs(
					{
						include_docs: true,
						keys: ids
					},
					function(err, res){
					    if(!err){
					    	res.rows.forEach(function(el){
					    		if(el.doc){
						    		var _card = el.doc.card;
						    		_cs[_card.id] = _card;
					    		}
					    			
					    	});
					    	console.log("no of card actually is"+ res.rows.length);
							chromeReply.get_frameview_full(_cs, frameview_key,  tab_id);
					    }
					    else{
					    	console.log(err);
					    }
					}
				);

			}
		}
	});
}
function get_card_from_pouchdb(id){
	var _card_ = null;
	framepouch.get(id, function(err, doc){
		if(err){
			console.log('card with id:', id + 'doesn\'t exists');
		}
		else{
			if(doc.card){
				_card_ = doc.card;
			}
				
		}
	});
	return _card_;
};
function save_data_element_to_pouchdb(id, data, tab_id){
	framepouch.get(id, function(err, doc){
		if(err){
			console.log('creating new instance');
			framepouch.put({_id:id, data:data});
		}
		else{
			console.log('creating new instance');
			doc.data = data;
			framepouch.put(doc);
		}
	});
}
function get_data_element_from_pouchdb(id, tab_id){
	framepouch.get(id, function(err, doc){
		if(err){
			console.log('no such element with id ' + id + ' exist');
			chromeReply.send_data_element(id, null, tab_id);
		}
		else{
			console.log('got you: ', id,  doc.data);
			chromeReply.send_data_element(id, doc.data, tab_id);// send even if data is not existenent			 
		}
	});
}

//************

function save_new_card_from_frameview_to_store(frameview_key, _card, tab_id){
	//PouchDB
	sendMSG_to_tab_byId({type:'all people'}, tab_id);
	//first save the new card
	framepouch.put({_id:_card.id, card:_card});

	//then update current framview
	framepouch.get(frameview_key, function(err, doc){
		if(err){//may be the doc never existed
			//create new frameview
			// add this cards id to its fvids list
			framepouch.put({_id:frameview_key, fvids:[_card.id] });
		}
		else{
			//add the new cards id to current frameview's id list
			doc.fvids.push(_card.id);
			//and then save
			framepouch.put(doc);
		}
	});


	

	//Search highlighting & with doc
		// framepouch.search(
		// 	{
		//     	query: 'secret',
		//     	fields: ['card.card_data.title', 'card.card_data.text'],
		// 	    include_docs: true,
		// 	    highlighting: true
		//   	},
		//   	function (err, res) {
		//   		if(err){
		//   			console.log(err);
		//   		}
		//   		else{
		//   			res.rows.forEach(function(obj, i){
		//   				console.log('search result->', obj.doc, '\nhighlighting +>', obj.highlighting);
		//   			})

		//   		}
		  			
		// 	}
		// );

};

function search_store(msg, tab_id){
	if(!msg.query)return;
	
	var _field = ['card.card_data.card_content.title', 'card.card_data.card_content.text'];
	var _highlighting = false;
	var _include_docs = false;

	if(msg.title_only)_fields = ['card.card_data.card_content.title'];
	if(msg.highlighting) _highlighting = true;
	if(msg.include_docs) _include_docs = true;
	
	framepouch.search(
		{
	    	query: msg.query,
	    	fields: _fields,
		    highlighting: _highlighting,
		    include_docs: _include_docs
	  	},
	  	function (err, res) {
	  		if(err){
	  			console.log(err);
	  		}
	  		else{
	  			var search_results = [];
	  			res.rows.forEach(function(obj, i){
	  				search_results.push({id:obj.id});
	  				console.log(obj.id);
	  				if(obj.doc)console.log('search result->', obj.doc);
	  				if(obj.highlighting)console.log('obj.highlighting=>', obj.highlighting);
	  			})
	  			chromeReply.search_store(search_results, tab_id);
	  		}
	  			
		}
	);
}

function update_card_from_frameview_to_store(_card, tab_id){

	//PouchDB
	framepouch.get(_card.id, function(err, doc){
		if(err){//@impossible I am updating it so it must already exit in the db
			framepouch.put({ _id:_card.id, card:_card });
		}
		else{
			//update
			doc.card = _card;
			//and then save
			framepouch.put(doc);
		}
	});

}

function remove_card_from_store(frameview_key, id, tab_id){

	//PouchDb
	framepouch.get(id, function(err, doc){
		if(err){//@impossible I am removing it so it must already exit in the db
			console.log('trying to remove , what doesn\'t exits');
		}
		else{
			//if it is a parent first deal with the child frameview
			if(doc.card.TYPE && doc.card.TYPE.PARENT){
				var childFrameview_key = frameviewkey_prefix+id;// its the frameview_key for the child frameview assosiated with this card
				remove_frameview_from_store(childFrameview_key);
			}
			//after removing its child frameview recurcively // or if no such thing exists
			//remove card from db
			framepouch.remove(doc);
		}
	});
	//After the card and all its child frameview are removed from db

	//update current frameview , by removing this card id from its list of ids
	framepouch.get(frameview_key, function(err, doc){
		if(err){//may be the doc never existed
			console.log('frameview with key' + frameview_key + 'doesn\'t exists');
		}
		else{
			_.remove(doc.fvids, function(v){return v == id;});// remove the card id  from fvids
			framepouch.put(doc);
		}
	});

}

function remove_frameview_from_store(frameview_key){

	console.log('removing frameview '+frameview_key);

	//PouchDB
	framepouch.get(frameview_key, function(err, doc){
		if(err){//may be this key belongs to a parent which never had a frameview created// @pos
			console.log('frameview with key' + frameview_key + 'doesn\'t exists');
		}
		else{
			var ids = doc.fvids;
			//remove all card in this frameview
			for (var i = ids.length - 1; i >= 0; i--) {
				remove_card_from_store(frameview_key, ids[i]);
				// this will take care of doing recurcive deletion
			};
		}
	});

	// remove frame from every tab
	// sending from here because this request will not be made from front end
	frameview_was_removed(frameview_key,{id:null});//id is null so that message is send to all tabs / no tab is left
}

//***********************************

function mixed_content_callback(msg, tab_id){
	$.getJSON(msg.url, function(json){
		chromeReply.mixed_content_callback(json, tab_id);
	});
}
