define(['localstore','pouchdb', 'pouchdbSearch', 'lodash'], function (localstore, PouchDB, PouchDBSearch, _) {

var store = new localstore();
var frameviewkey_prefix = 'frameviewkey_';

//*****************************************
var framepouch = null;
var pouchsearch = PouchDB.plugin(PouchDBSearch);
framepouch =  PouchDB('semanticcardsDB', function(err, db){
	if(err){
		console.log(err);
	}
	else{
		framepouch = db;
	}	
});

// pouchsearch({query:'card'}).then(function(){
	
// })
// pouchsearch(
// 	{
// 		query:'card'
// 	},
// 	function(err, res){
// 		console.log(err, res);
// 	}
// );

//*****************************************


var _root = null;

var frameviewIds = {'home':[]};//key, ids
/*
'home': [
	
]
*/
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
			var _cards = get_frameview_full(request.msg.frameview_key);
			sendResponse({type:'REPLYOF_LOAD_ALL_FROM_STORE_TO_FV', msg:{_cards:_cards}});
		}
		else if(request.type == 'SAVE_NEW_CARD_FROM_FV_TO_STORE'){
			save_new_card_from_frameview_to_store(request.msg.frameview_key, request.msg._card);
			// sendResponse({type:'REPLYOF_SAVE_CARD_FROM_FV_TO_STORE', msg:frameview_full});
			frameview_has_changed(request.msg.frameview_key, sender.tab);//let other tab know that this frameview has changed
		}
		else if(request.type == 'UPDATE_CARD_FROM_FV_TO_STORE'){
			update_card_from_frameview_to_store(request.msg.frameview_key, request.msg._card);
			frameview_has_changed(request.msg.frameview_key, sender.tab);//let other tab know that this frameview has changed
		}
		else if(request.type == 'REMOVE_CARD_FROM_STORE'){
			remove_card_from_store(request.msg.frameview_key, request.msg.id);
			frameview_has_changed(request.msg.frameview_key, sender.tab);//let other tab know that this frameview has changed
		}

		else if(request.type == 'LOAD_FRAME_CONFIG_FROM_STORE'){
			var frame_config = load_frame_config_from_store();
			sendResponse({type:'REPLYOF_LOAD_FRAME_CONFIG_FROM_STORE', msg:{frame_config:frame_config}});
		}
		else if(request.type == 'SAVE_FRAME_CONFIG_TO_STORE'){
			save_frame_config_to_store(request.msg.frame_config);
		}

		else if(request.type == 'LOAD_ROOT'){
			load_root();
			sendResponse({type:'REPLYOF_LOAD_ROOT', msg:{_root:_root}});
		}
		else if(request.type == 'SAVE_ROOT'){
			save_root(request.msg._root);
		}

		//******************************************// from cardjs
		else if(request.type == 'SAVE_REQ_FROM_CARD'){
			save_content_req_from_card(request.msg.card_content);
		}
		else if(request.type == 'LOAD_REQ_FROM_CARD'){
			var cont = load_content_req_from_card(request.msg.id);
			sendResponse({type:'REPLYOF_LOAD_REQ_FROM_CARD', msg:{card_content:cont}});
		}
		//REMOVE_CMD_FROM_CARD - removed automaticaly when card is removed

		//***************************************
		else if(request.type == 'STORE_GETALL'){
			sendResponse(store.getAll());
		}
		else if(request.type == 'STORE_REMOVEALL'){
			store.removeAll();
		}

		//***************************************
	

});

chrome.tabs.onActivated.addListener(
	function(activeInfo){
		//console.log(activeInfo);
		sendMSG_to_tab_byId(activeInfo.tabId, {_type:'UPDATE_CHANGED_FRAMES_NOW'});
	}
);
function sendMSG_to_tab(tab, _msg){
	chrome.tabs.sendMessage(tab.id, _msg);
}
function sendMSG_to_tab_byId(tabId, _msg){
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
	var msg = {_type:'FRAMEVIEW_HAS_CHANGED', frameview_key:frameview_key};
	sendMSGToAll(msg, tab);
}

function frameview_was_removed(frameview_key, tab){
	var msg = {_type:'FRAMEVIEW_WAS_REMOVED', frameview_key:frameview_key};
	sendMSGToAll(msg, tab);
}

//**********************************************

// function get_frame_view_structure(){
// 	// server

// 	//localstore
// 	var frameview = store.load_frame_view_structure();
// 	if(frameview){
// 		return frameview;
// 	}
// 	else {
// 		return {key:'home', ids:[]};
// 	}
// }

function load_root(){
	if(_root);
	else{
		_root = store.get_root();
	}
	if(_root)console.log(_root);
}
function save_root(root){
	_root = root
	if(true){
		store.set_root(root);
	}
	if(_root)console.log(_root);
}
function load_frame_config_from_store(){
	//server

	//localstore
	var frame_config = cache_frame_config; 
	if(!frame_config){
		cache_frame_config = store.load_frame_config();
	}
	return cache_frame_config;// can be null
}
function save_frame_config_to_store(frame_config){
	cache_frame_config = frame_config;
	if(true){
		store.save_frame_config(frame_config);
	}
}

function get_frameview_full(frameview_key){
	var ids = [];
	var _cs = {};
	
	if(!frameviewIds.hasOwnProperty(frameview_key)){// key not present
		console.log('nothing so');
		ids = store.load_frameview_ids(frameview_key);
		frameviewIds[frameview_key] = ids;
		_cs = store.load_cards(ids);
		_.forIn(_cs, function(value, key) {
		    cards[key] = value;
		});
	}
	else{
		if(!frameviewIds[frameview_key].length){//frameview key present , but has no ids
			ids = store.load_frameview_ids(frameview_key);
			frameviewIds[frameview_key] = ids;
			_cs = store.load_cards(ids);
			_.forIn(_cs, function(value, key) {
			    cards[key] = value;
			});
		}
		else{
			ids = frameviewIds[frameview_key];
			for (var i = ids.length - 1; i >= 0; i--) {
				_cs[ids[i]] = cards[ids[i]];
			};
		}

	}

	return _cs;
}

//************

function save_new_card_from_frameview_to_store(frameview_key, _card){
	// determine by frameviewkey
	if(!frameviewIds.hasOwnProperty(frameview_key))frameviewIds[frameview_key] = [];//array of ids of cards, which belong to this frameview
	frameviewIds[frameview_key].push(_card.id);
	cards[_card.id] = _card;
	console.log("saving", _card);
	store.save_frameview_ids(frameview_key, frameviewIds[frameview_key]);
	store.save_card(_card);


	// framepouch.get(frameview_key, function(err, doc){
	// 	if(err){//may be the doc never existed
	// 		framepouch.put({_id:frameview_key, fvids:frameviewIds[frameview_key]});
	// 	}
	// 	else{
	// 		console.log(doc);
	// 		doc.fvids = frameviewIds[frameview_key];
	// 		framepouch.put(doc);
	// 	}
	// });
	
	// framepouch.put({_id:_card.id, card:_card});

	// framepouch.allDocs({include_docs: true}, function(err, res){
	//     if(!err){
	//     	res.rows.forEach(function(el){
	//     		console.log('saved: ', el.doc);
	//     	})
	//     }
	// });

	// framepouch.search({
	//     query: 'card',
	//     fields: ['title', 'text'],
	//     include_docs: true,
	//     highlighting: true
 //  	}, function(err, res){
 //  		console.log('search resu', res);
 //  	});

};

function update_card_from_frameview_to_store(frameview_key, _card){
	cards[_card.id] = _card;
	if(true)store.save_card(_card);
}
function remove_card_from_store(frameview_key, id){
	var ids = frameviewIds[frameview_key];

	if(cards[id].TYPE && cards[id].TYPE.PARENT){// if parent there is a frameview associated with this// remove that
		var childFrameview_key = frameviewkey_prefix+id.toString();//id is already a string
		remove_frameview_from_store(childFrameview_key);
	}

	_.remove(ids, function(v){return v == id;});// remove the card from ids
	delete cards[id];// remove from card itself

	store.remove_card(id);
	remove_content_req_from_card(id);// remove content associated
	if(ids.length){// if ids has no id don't save
					//  most probably it's a child frameview , and was removed completely
		store.save_frameview_ids(frameview_key, ids);
	}
}

function remove_frameview_from_store(frameview_key){
	console.log('removing frameview '+frameview_key);
	var ids = frameviewIds[frameview_key];
	if(!ids)return;// frameview ids don't exists. may be it belongs to a prent which never had a frameview created
	for (var i = ids.length - 1; i >= 0; i--) {
		remove_card_from_store(frameview_key, ids[i]);
	};

	// remove frame from every tab
	frameview_was_removed(frameview_key,{id:null});//id is null so that message is send to all tabs / no tab is left
}


//***********************************
function load_content_req_from_card(_id){
	var _cont = card_contents[_id];
	if(!_cont) {
		_cont = store.load_card_content(_id);
		card_contents[_id] = _cont;
	}
	return _cont;// could be null or undefined
}

function save_content_req_from_card(_content){
	card_contents[_content.id] = _content;
	if(true) {// check when to save and when to not //@todo
		store.save_card_content(_content);
	}
}

function remove_content_req_from_card(id){
	delete card_contents[id];
	store.remove_card_content(id);
}


//***********************************















});