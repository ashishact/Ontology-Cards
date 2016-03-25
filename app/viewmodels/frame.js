/*//TODOS
1. add card.isSelected and card.isMouseHovered to card.STATE instead
*/

define(['plugins/http', 'durandal/app', 'knockout', 'gridstack', 'lodash', 'state', 'store', 'panzoom', 'card_props'],
    function (http, app, ko, gridstack, _ , state, store, panzoom, card_props) {

    var frame = function(){
        var self=this;

        
        //UI
            this.frameID = null;
            this.appActions = null;
            //Observables
            this.cards = ko.observableArray([]);
            this.navigation = ko.observableArray([{key:'home', title:'Home'}]);

            //Non - Observable
                    // @cbc //both are same
            //this.searchbar = null; // complete searchbar element to blur and show when nessary
            $panzoom = null;
            this.all_cards_in_frame_loaded = false;
            this.show_additional_card_menu = ko.observable(false);
            this.show_all_card_label = ko.observable(false);
            this.card_label_text = ko.observable('V:Selected');
            var card_hint_timer = null;
            this.frame_message_text = ko.observable(':)');
            var frame_hint_timer = null;
            this.chromeMessageListener = null;

            //Gridstack
            $grid_stack = null;// jquery gridstack selector
            this.grid = null;// gridstack grid object
            this.auto_position = false;//used in knockout data-bind for auto position of cards

        //Viewmodels
            this.activeModel = "viewmodels/card";
            this.activeView = "views/cards/default.html";

            this.defaultModel = "viewmodels/card";
            this.defaultView = "views/cards/default.html";
            this.default_sctype = card_props.TYPE.SIMPLE_TEXT;
            

            //Frameview (Currently loaded)
            this.frameviewkey_prefix = 'frameviewkey_';
            this.frameview = {};
            this.frameview.ids = [];//array of card ids
            // not that this array is not saved to store
            // as there it will have VOLITILE and NON VOLATILE cards 
            // it is just a container , so don't store this
            // instead update frameview ids in the background whenever any card is saved, if needed
            this.frameview.key = ko.observable('home');
            this.frameview.title = ko.observable('Home');
            this.frameview.cards = this.cards;
            this.frameview.type = 'default';//not observable, value=> default, volatile
            this.frameview.exploring = false;// if exploring

            this.orphan_frameviewkey = 'orphan_frameviewkey_';
            //Cache
            //
            this.cache = {keyPrev1:null, keyPrev2:null, keyPrev3:null, cardsPrev1:[], cardsPrev2:[], cardsPrev3:[] };            

        // Configs
            this.frame_config_map = [
                'max_card_id',
                'card_default_size',
                'card_auto_position',

                'edit_one_at_a_time',
                'expand_one_at_a_time',
                'expand_when_editing',
                'edit_on_sc_editable',
                'edit_on_perfect_click',
                'stop_draggable_when_editing',
                'stop_resizable_when_editing',

                'stop_edit_on_perfect_click',
                'donnot_stop_edit_on_sc_editable',
                'stop_edit_only_when_clicked_outside',

                'perfect_click_max'
            ]
            this.frame_config = [
                0, {w:2, h:2}, false,     true, true, true, false, true, true,     false,  true, true, true,  0
            ];
            this.get_fc_value = function(key){
                for (var i = self.frame_config_map.length - 1; i >= 0; i--) {
                    var _k = self.frame_config_map[i]
                    if(_k === key){
                        if(self.frame_config.length>i)return self.frame_config[i];
                        else console.log('@im');
                    }
                };
            }

            
        //Lifecycle Activity
            // activationDat is currentFrame from sc_application 
            // by doing currentFrame = self sc_application will be able to acess all the frame functions like "addNewCard"
            this.activate = function (activationData){
                activationData.frameModel = self;// so that sc_application can acess all the function in this.actions
                self.frameID = activationData.frameID; // get its unique to acess value from database 
                self.appActions = activationData.appActions;// use functions within this object to call application functions
                self.frameview.key(activationData.frameview_key);
                self.frameview.title(activationData.title);
                    // frametype decides wheatheer to do a semantic explore or just creat notes and edit
                if(activationData.frameview_key != 'home'){// if the frmeview requested is not 'home' 
                    self.navigation.push({key:activationData.frameview_key, title:activationData.title});
                }
                
                if(activationData.title.indexOf('$') === 0){// 
                    self.frameview.type = 'volatile';
                }
                if(activationData.frameview_key === '$explore'){
                    self.frameview.exploring = true;
                }
            };
            this.bindingComplete = function (view) {
            };
            this.attached = function(view, parent){
                self.actions.init_chrome_message_listener();// attach message listener from background
                
                app.on('save:do_not_compare').then(function(object){
                        if(typeof(object) === 'string'){
                            var _cd = state.actions.get_primary_selected_card(state);
                            if(_cd)self.actions.save_card_content(_cd, true);
                        }
                        else{
                        }
                });

                $('#frame_top_bar_'+ self.frameID).on('dblclick', function(event){
                    self.toggle_hide_frame_on_dbl_click(event);
                });

                self.on_start();
            };
            this.afterAddWidget = function (items){
                if (self.grid === null) {
                    var opt = {
                        auto: false,
                        float:false,
                        animate:true,
                        resizable: {
                            handles: 'se, sw'
                        }
                    };
                    //@rem - to update css when changing to gridstack.min version

                    self.grid = $(items[1].parentNode).gridstack(//@more work -> index
                        opt
                    ).data('gridstack');
                    // jquery backup
                    if(!self.grid){
                        self.grid = $('#'+'gstack_'+self.frameID).gridstack(opt).data('gridstack');
                    }
                    if(self.grid){
                        $('#'+'gstack_'+self.frameID).on('change', function (event,items) {
                            if(self.all_cards_in_frame_loaded){// if all cards are not loaded yet don't update their position as hey are overriding one another
                                                                // start updating their position when all cards are loaded
                                _.forEach(items, function (i) {

                                    var data = ko.dataFor(i.el[0]);
                                    var valueChanged = false;
                                    valueChanged = data.x !== i.x || data.y !== i.y  || data.width !== i.width || data.height !== i.height ;
                                    
                                    if (data.x !== i.x) {//try using this as observable instead
                                        data.x = i.x;
                                    }

                                    if (data.y !== i.y) {
                                        // console.log('from ' , data.y, '-> ', i.y);
                                        data.y = i.y;
                                    }

                                    if (data.width !== i.width) {
                                        data.width = i.width;
                                    }

                                    if (data.height !== i.height) {
                                        data.height = i.height;
                                    }
                                    
                                    if(valueChanged){
                                        self.actions._update_card_from_frameview_to_store(data);
                                    }

                                });
                                
                            }
                        });

                        //editing follows the same
                    }

                    $grid_stack = $('#'+'gstack_'+self.frameID);
                    // $panzoom = $grid_stack.panzoom();
                    // $grid_stack.panzoom('disable');

                    // $panzoom.parent().on('mousewheel.focal', function( e ) {
                    //     e.preventDefault();
                    //     var delta = e.delta || e.originalEvent.wheelDelta;
                    //     var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
                    //     $panzoom.panzoom('zoom', zoomOut, {
                    //     increment: 0.1,
                    //     animate: true,
                    //     maxScale:3,
                    //     focal: e
                    //   });
                    //     return true;
                    // });
                            
                }

                if(self.grid !== null){
                    var item = _.find(items, function (i) { return i.nodeType == 1; });
                    self.grid.add_widget(item);
                    var last_card = _.last(self.cards());
                    last_card.el = item;
                    if(last_card.card_data.non_resizable) $(last_card.el).attr('data-gs-no-resize',true);


                    // ko.utils.domNodeDisposal.addDisposeCallback(item, function () {
                    //     self.grid.remove_widget(item);
                    // });
                }

            };
            //this.canDeactivate = function () {
                //     //the router's activator calls this function to see if it can leave the screen
                //     return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
                // };
     
            this.on_start = function(){
                self.actions._load_frame_config();

                //if(state.parsedHTMLRESULT){//temp get from somewhere else
                if(false){// no doing the summary for now
                    var res = state.parsedHTMLRESULT;
                    var _pview = self.activeView;
                    self.activeView = 'views/cards/summary.html';
                    var card_data = {title:"Web Resources", volatile:true, parsedHTMLRESULT:res, sctype:card_props.TYPE.SUMMARY, non_editable:false};
                    //var card_data = {sctype:card_props.TYPE.QUOTE, quote:'This is a quote'};
                    var card_ = self.actions.add_new_card(card_data);
                    self.activeView = _pview;
                }
                
                
                self.actions.load_all_from_store_to_frameview();// it does everything -> loads all cards


                
                

                self.show_search_bar(false);
            }


        //Actiosns            
            this.create_actions = function(){
                var me = this;
                //@
                this.init_chrome_message_listener = function(){
                    self.chromeMessageListener = function(request) {
                        console.log(request.type);
                        if(request.type === 'REPLYOF_LOAD_ALL_FROM_STORE_TO_FV'){
                            var fv_key = request.msg._fv_key;
                            if(fv_key === self.frameview.key() && self.all_cards_in_frame_loaded===false){// this message is only for one specific frameview
                                var _cards = request.msg._cards;
                                var atleastonecardexist = false;
                                _.forIn(_cards, function(value, key) {
                                    me._add_card_from_store_to_frameview(value);
                                    atleastonecardexist = true;
                                });
                                if(atleastonecardexist){
                                    //me.frame_animateIn(500);
                                }
                                else{
                                    //me.add_new_card({title:'No cards exist', volatile:true});
                                }

                                //card positions are messed up sort it out
                                me._update_all_card_in_frameview();
                                self.all_cards_in_frame_loaded = true;
                                
                                if(self.frameview.type === 'volatile'){

                                }
                                else{
                                    var _obj = self.getCurrentFrameviewKeyAndTitle();                            
                                    me._send_msg_to_background('SAVE_DATA_ELEMENT', {id:'LAST_USED_FRAMEVIEW_KEY', data:{fv_key: _obj.fv_key, fv_title: _obj.fv_title}});
                                    app.trigger('frameview:loded_with_ids', self.frameview.ids);
                                }
                                    
                            }

                        }
                        else if(request.type === 'REPLYOF_LOAD_FRAME_CONFIG_FROM_STORE'){
                            config = request.msg.frame_config;
                            if(config){
                                if(config.length === self.frame_config.length){
                                    self.frame_config = config;
                                }
                                else {
                                    console.log('@im');
                                    me.save_frame_config();
                                }
                            }
                            else{
                                me.save_frame_config();
                            }
                        }
                        else if(request.type === 'REPLYOF_LOAD_CARDS_FROM_STORE'){
                            var fv_key = request.msg.fv_key;
                            console.log(fv_key, self.frameview.key());
                            if(fv_key === self.frameview.key()){
                                var cards = request.msg.cards;
                                for(var i = 0; i < cards.length; i++){
                                    cards[i].TYPE.VOLATILE = true;
                                    cards[i].y = 0;
                                    me._add_card_from_store_to_frameview(cards[i]);
                                }
                                app.trigger('frameview:updated_with_ids', self.frameview.ids);
                            }
                        }

                        else if(request.type === 'REPLYOF_LOAD_ALL_CARDS_FROM_STORE'){
                            var fv_key = request.msg.fv_key;
                            if(fv_key === self.frameview.key()){
                                var cards = request.msg.cards;
                                for(var i = 0; i < cards.length; i++){
                                    cards[i].TYPE.VOLATILE = true;
                                    cards[i].TYPE.EDITABLE = false;
                                    //don't save this or it will persist
                                    me._add_card_from_store_to_frameview(cards[i]);
                                }
                                // app.trigger('frameview:updated_with_ids', self.frameview.ids);
                            }
                                
                        }
                    }
                    chrome.runtime.onMessage.addListener(self.chromeMessageListener);
                                

                };
                this.remove_chrome_message_listener = function(){
                    chrome.runtime.onMessage.removeListener(self.chromeMessageListener);
                }
                this._add_new_card_from_user_to_frameview = function(x, y, width, height, CARD_TYPE, card_data){
                    var newid = 'c-' + Date.now().toString(36) + '-' + (Math.random()).toString(36).split('.').pop();
                    var CARD_STATE = me._create_card_state();
                    me._update_view_model_strings(card_data);// change view model type before binding
                    var newcard = {
                        id:newid,
                        x:x,
                        y:y,
                        width:width,
                        height:height,
                        card_data:card_data,
                        TYPE:CARD_TYPE,
                        STATE:CARD_STATE,
                        el:null,
                        isMouseHovered: ko.observable(false),
                        isSelected: ko.observable(false),
                    };
                    self.cards.push(newcard);
                    // is it ok to add volatile cards to frameview key ? YES, because this frameviewkey is never saved
                    // // when a card is saved that card's id is saved to frameview in tthe background , without ever saving this array
                    self.frameview.ids.push(newid);
                    
                    app.trigger('card:new_card_added_from_user_to_frameview', newcard);

                    return newcard;
                };
                //@
                this._add_card_from_store_to_frameview = function(_card){
                    // can safely add VOLITILE cards as it is just temporary datas
                    // 
                    var CARD_STATE = me._create_card_state();
                    _card.STATE = CARD_STATE;
                    _card.el = null;
                    _card.isMouseHovered = ko.observable(false);
                    _card.isSelected = ko.observable(false);

                    me._update_view_model_strings(_card.card_data);// change view model type before binding
                    self.cards.push(_card);// by pushing ko creates new card
                    self.frameview.ids.push(_card.id);



                    //Somehow card positions are not correct
                    //me._update_card_in_frameview(_card, _card.x, _card.y, _card.width, _card.height);
                };
                //@
                this._save_new_card_from_frameview_to_store = function(card){
                    if(self.frameview.type === 'volatile'){
                        console.log(self.frameview.type);
                        self.actions.show_frame_hint('This is a volatile frameview cards will not be saved here',2000);
                        return;
                    }
                    var _card = {
                        id:card.id,
                        x:card.x,
                        y:card.y,
                        width:card.width,
                        height:card.height,
                        card_data:card.card_data,
                        TYPE:card.TYPE
                    };
                    var _type = 'SAVE_NEW_CARD_FROM_FV_TO_STORE';
                    var _msg = {frameview_key:self.frameview.key(), _card:_card};
                    me._send_msg_to_background(_type, _msg);
                    
                };
                //@
                this._reset_view_model_string = function(){
                    self.activeModel = "viewmodels/card";
                    self.activeView = "views/cards/default.html";
                }
                this._update_view_model_strings = function(card_data){
                    
                    if(card_data.model);//@im check if model is valid
                    if(card_data.view)self.activeView = card_data.view;//@im check if view is valid
                    //if(card_data.view == "views/cards/simpletext.html"){
                      //  self.activeView = "views/cards/default.html";
                    //}
                }
                //@
                this.any_data_changed = false;
                this.findDifferences = function(objectA, objectB) {
                   var propertyChanges = [];
                   var objectGraphPath = ["this"];
                   (function(a, b) {
                      if(a.constructor == Array) {
                         // BIG assumptions here: That both arrays are same length, that
                         // the members of those arrays are _essentially_ the same, and 
                         // that those array members are in the same order...
                         for(var i = 0; i < a.length; i++) {
                            objectGraphPath.push("[" + i.toString() + "]");
                            arguments.callee(a[i], b[i]);
                            objectGraphPath.pop();
                         }
                      } else if(a.constructor == Object || (a.constructor != Number && 
                                a.constructor != String && a.constructor != Date && 
                                a.constructor != RegExp && a.constructor != Function &&
                                a.constructor != Boolean)) {
                         // we can safely assume that the objects have the 
                         // same property lists, else why compare them?
                         for(var property in a) {
                            objectGraphPath.push(("." + property));
                            if(a[property].constructor != Function) {
                               arguments.callee(a[property], b[property]);
                            }
                            objectGraphPath.pop();
                         }
                      } else if(a.constructor != Function) { // filter out functions
                         if(a != b) {
                            propertyChanges.push({ "Property": objectGraphPath.join(""), "ObjectA": a, "ObjectB": b });
                         }
                      }
                   })(objectA, objectB);
                   return propertyChanges;
                }

                this.update_card_content_from_bind_data = function(bind_data, card_content, do_not_compare){
                    var _js = ko.toJS(bind_data);
                    console.log(_js);
                    if(do_not_compare){// comparision is creating error if both obj don't have same no of object in arry aor do not have same keys
                        me.any_data_changed = true;
                    }
                    else{
                        var changes = me.findDifferences(_js, card_content);
                        if(changes.length) me.any_data_changed = true;
                    }

                    _.forIn(_js, function(value, key){// clone it
                        card_content[key] = value;
                    });
                }

                // this.update_card_content_from_bind_data = function(bind_data, card_content){
                //     _.forIn(bind_data, function(value, key){
                //         if(typeof(value) == 'function'){//ko observable
                //             if(card_content[key] !== bind_data[key]()) me.any_data_changed = true;// checking if any data has changed from the previous values
                //             card_content[key] = bind_data[key]();
                //         }
                //         else if(typeof(value) == 'object'){//could be arry or a hash
                //             if(value instanceof Array){
                //                 if(card_content[key] !== bind_data[key]) me.any_data_changed = true;// checking if any data has changed from the previous values
                //                 card_content[key] = bind_data[key];
                //             }
                //             else{//hash object re iterate through it, as it might have ko observable inside it
                //                 me.update_card_content_from_bind_data(bind_data[key], card_content[key], any_data_changed);  
                //             }
                //         }
                //         else{//string or number
                //             if(card_content[key] !== bind_data[key] ) me.any_data_changed = true;// checking if any data has changed from the previous values
                //             card_content[key] = bind_data[key];
                //         }
                //     });
                // };
                // this.update_bind_data_from_card_content = function(bind_data, card_content){
                //     _.forIn(bind_data, function(value, key) {
                //         if(card_content[key]){//if it exists
                //             if(typeof(value) == 'function'){//knockout observable
                //                 bind_data[key](card_content[key]);//knockout observable
                //             }
                //             else if(typeof(value) == 'object'){//could be arry or a hash
                //                 if(value instanceof Array){
                //                     bind_data[key] = card_content[key];
                //                 }
                //                 else{//hash object re iterate through it
                //                     me.update_bind_data_from_card_content(bind_data[key], card_content[key]);  
                //                 }
                //             }
                //             else{//string or number
                //                 bind_data[key] = card_content[key];
                //             }
                //         }
                //         else{
                //             console.log("raise warning why was it not saved?");
                //         }
                        
                //     });
                // };

                this._update_card_from_store_to_frameview = function(_card){// most prob.. not be useful 
                                                                            // as single card will not be updated from store
                    var card = me._get_card_byID(_card.id);
                    if(card){
                        me._update_card_in_frameview(card, _card.x, _card.y, _card.width, _card.height);
                    }

                    // change observable from json received from database
                    // never use this instead reload the whole card so card_content will be properly mapped to bind_data
                    //me.update_bind_data_from_card_content(card.bind_data, _card.card_data.card_content);
                };
                this.update_card_content_from_frameview_to_store = function(card, do_not_compare){// saves card content
                    //update all observable to json in card_data.card_content
                    me.any_data_changed = false;//below line may toggle this
                    var _do_not_compare = false; if(do_not_compare)_do_not_compare = true;
                    me.update_card_content_from_bind_data(card.bind_data, card.card_data.card_content, _do_not_compare);
                    console.log('check');
                    if(me.any_data_changed){
                        console.log('changed');
                        me._update_card_from_frameview_to_store(card);
                        app.trigger('card:card_content_updated', card);
                    }
                };
                this._update_card_from_frameview_to_store = function(card){
                    if(self.frameview.type ==='volatile' || card.TYPE.VOLATILE){ return;}

                    var _card = {
                        id:card.id,
                        x:card.x,
                        y:card.y,
                        width:card.width,
                        height:card.height,
                        card_data:card.card_data,
                        TYPE:card.TYPE
                    };
                    var _type = 'UPDATE_CARD_FROM_FV_TO_STORE';
                    var _msg = {frameview_key:self.frameview.key(), _card:_card};//fv is necessary to keep track of which fv have changed
                    me._send_msg_to_background(_type, _msg);
                };
                this.add_cardid_to_frameview_and_save = function(frameview_key, card_id){

                };
                //@
                this._remove_card_from_frameview_only = function(card){
                    self.cards.remove(card);
                    self.grid.remove_widget(card.el);
                    _.remove(self.frameview.ids, function(i){return i === card.id});

                    app.trigger('card:removed_from_frameview', card.id);
                    //
                        // var cs = self.cards.remove( function (card) { return card.id === id; } );// returns array of removed cards
                        // if(cs.length === 1){//should always be 1 as we have unique id
                        //     self.grid.remove_widget(cs[0].el)// @should always be gridstack-item
                        // }
                        // _.remove(self.frameview.ids, function(i){return i === id});
                };
                this._remove_card_from_frameview_and_store = function(card){
                    me._remove_card_from_frameview_only(card);
                    if(card.TYPE.VOLATILE || card.card_data.non_removable) return;//never try to removea a volatile card from store , it doesn't exists or probably don't wnt to be saved; or a non_removale card because it you never want to;
                    console.log("Removing Card, make card non removable to keep for ever");
                    var _type = 'REMOVE_CARD_FROM_STORE';
                    var _msg = {frameview_key:self.frameview.key(), id:card.id};
                    me._send_msg_to_background(_type, _msg);
                    app.trigger('card:deleted_from_store', card.id);
                    

                };
                //@
                this._get_card_byID = function(id){
                    for (var i = self.cards.length - 1; i >= 0; i--) {
                        card = self.cards[i];
                        if(card.id === id){
                            return card;
                        }
                    };
                    return false;
                };
                //@
                this._update_card_in_frameview= function(card, x, y, w, h){
                    self.grid.update(card.el, x, y, w, h);
                };
                this._update_all_card_in_frameview = function(){
                    
                    var allcards_ = self.cards();
                    for (var i = allcards_.length - 1; i >= 0; i--) {
                        var c = allcards_[i];
                        me._update_card_in_frameview(c, c.x, c.y, c.width, c.height);
                        
                        if(i === allcards_.length-1)state.actions.select_this_card(state, allcards_[i]);// select lastly added card
                    };
                };
               
                this._card_set_movable= function(card, opt){// opt = true, false
                    self.grid.movable(card.el, opt);
                };
                this._card_set_resizable= function(card, opt){// opt = true, false
                    self.grid.resizable(card.el, opt);
                };
                //@
                this._send_msg_to_background= function(type, msg){
                    chrome.runtime.sendMessage(
                        {
                            type:type,
                            msg:msg
                        }
                    );
                };
                //@
                this._create_card_state= function(){
                    var STATE = {
                        EDITING:false,
                        EXPANDED:false,
                        DATA_LOADED:false,
                        SAVED:true
                    }
                    return STATE;
                };
                //@
                this._create_card_type= function(type_array){
                    var CARD_TYPE = {
                        PARENT:false,
                        EDITABLE:false,
                        RESIZABLE:false,
                        MOVABLE:false,
                        DRAGGABLE:false,
                        EXPANDABLE:false,
                        VOLATILE:false,
                        TAB_SESSION_ONLY:false,
                        WINDOW_SESSION_ONLY:false,
                    };

                    for (var i = type_array.length - 1; i >= 0; i--) {
                        type = type_array[i];
                        if(typeof(type)==='string' && CARD_TYPE[type]!== undefined){
                            CARD_TYPE[type.toUpperCase()] = true;
                        }
                    };

                    return CARD_TYPE;
                };


                this._create_default_card_type= function(){
                    return me._create_card_type(['EDITABLE', 'RESIZABLE', 'MOVABLE', 'DRAGGABLE', 'EXPANDABLE']);
                };
                this._create_parent_card_type= function(){
                    return me._create_card_type(['EDITABLE' , 'MOVABLE', 'DRAGGABLE', 'PARENT']);
                };
                this._create_non_editable_card_type = function(){
                    return me._create_card_type(['MOVABLE', 'DRAGGABLE' , 'EXPANDABLE']);
                };
                
                this.save_frame_config = function(){
                    var _type = 'SAVE_FRAME_CONFIG_TO_STORE';
                    var _msg = {frame_config:self.frame_config};
                    me._send_msg_to_background(_type, _msg);
                };
                this._load_frame_config = function(){
                    var _type = 'LOAD_FRAME_CONFIG_FROM_STORE';
                    chrome.runtime.sendMessage(
                        {
                            type:_type
                        }
                    );

                };
                this.generate_ucard_from_card = function(card){
                    var _card = {
                        id:card.id,
                        x:card.x,
                        y:card.y,
                        width:card.width,
                        height:card.height,
                        card_data:card.card_data,
                        TYPE:card.TYPE
                    };

                    return _card;
                };
                
                this.cacheIt = function(){
                    var _ca = self.cache;
                    if(_ca.keyPrev2){
                        _ca.keyPrev3 = _ca.keyPrev2;
                        _ca.cardsPrev3 = _ca.cardsPrev2;
                    }
                    if(_ca.keyPrev1){
                        _ca.keyPrev2 = _ca.keyPrev1;
                        _ca.cardsPrev2 = _ca.cardsPrev1;
                    }
                    _ca.keyPrev1 = self.frameview.key();
                    _ca.cardsPrev1 = [];
                    for (var i = self.frameview.cards().length - 1; i >= 0; i--) {
                        _card = self.actions.generate_ucard_from_card(self.frameview.cards()[i]);
                        _ca.cardsPrev1.push(_card);
                    };
                };
                this.frame_animateIn = function(duration, onComplete){
                    if(onComplete){
                        // $grid_stack.fadeIn(duration, onComplete); 
                        $grid_stack.slideToggle(duration, onComplete);
                    }
                    else{
                        $grid_stack.slideToggle(duration, function(){
                            console.log('showing gridstack again');
                        });
                    }
                };
                this.frame_animateOut = function(duration, onComplete){
                    if(onComplete){
                        // $grid_stack.fadeOut(duration, onComplete);
                        $grid_stack.slideToggle(duration, onComplete);
                    }
                    else{
                        $grid_stack.slideToggle(2000, function(){
                            me.remove_frameview_from_frame();
                            me.load_all_from_store_to_frameview();
                        });
                    }
                };
                this.remove_frameview_from_frame = function(){
                    //@im save if needed
                    self.frameview.ids = [];
                    self.frameview.cards.removeAll();//knockout observable
                    if(self.grid){// its possible that there is no grid item added yet , so self.grid will be null;
                        self.grid.remove_all();//gridstack
                    }

                };
                this.load_all_from_store_to_frameview = function(){
                    var _type = 'LOAD_ALL_FROM_STORE_TO_FV';
                    var _msg = {frameview_key:self.frameview.key()};
                    console.log("LOADING FRAMEVIEW_KEY", self.frameview.title());
                    self.all_cards_in_frame_loaded = false;
                    chrome.runtime.sendMessage(
                        {
                            type:_type,
                            msg:_msg
                        }
                    );
                };
                this.load_cards_from_store_to_frameview = function(ids){
                    for (var i = ids.length - 1; i >= 0; i--) {
                        var id = ids[i];
                        var current_fv_ids = self.frameview.ids;
                        _.remove(ids, function(id){// remove id which are currently already existing in this frameview
                            return _.find(current_fv_ids, function(__id){return __id === id})
                        });
                    }
                    if(ids.length){// could have been remove above
                        var _type = 'LOAD_CARDS_FROM_STORE';
                        var _msg = {ids:ids, frameview_key:self.frameview.key()};// frameview key will be used to chen if this frameview asked for it
                                                                                // otherwise not required
                        chrome.runtime.sendMessage(
                            {
                                type:_type,
                                msg:_msg
                            }
                        );
                    }
                };
                this.load_all_cards_from_store_to_frameview = function(){
                    var _type = 'LOAD_ALL_CARDS_FROM_STORE';
                    var _msg = {frameview_key:self.frameview.key()};// frameview key will be used to chen if this frameview asked for it
                                                                    // otherwise not required
                    chrome.runtime.sendMessage(
                        {
                            type:_type,
                            msg:_msg
                        }
                    );
                }

                this.transfer_cards_between_frameview = function(ids, from_fv_key, to_fv_key){
                    //[id1, id2, id3] , from_fv_key, to_fv_key
                    //
                    if(from_fv_key === to_fv_key)return;

                    var _type = 'TRANSFER_CARDS_BETWEEN_FRAMEVIEW';
                    var _msg = {ids:ids, from_fv_key: from_fv_key, to_fv_key:to_fv_key };
                    chrome.runtime.sendMessage(
                        {
                            type:_type,
                            msg:_msg
                        }
                    );  
                };
                this.show_card_hint = function(str, timeout){
                    self.card_label_text(str);
                    if(timeout){
                        clearTimeout(card_hint_timer);
                        card_hint_timer = setTimeout(function(){
                            self.card_label_text('Selected');
                        }, timeout);
                    }
                        
                };
                this.show_frame_hint = function(str, timeout){
                    self.frame_message_text(str);
                    if(timeout){
                        clearTimeout(frame_hint_timer);
                        frame_hint_timer = setTimeout(function(){
                            self.frame_message_text(':)');
                        }, timeout);
                    }
                        
                };
                this.clone_card_and_save = function(card){
                    //if this card itself is a clone
                    //you will be creating clone of a clone
                    //and when its a parent card, cloned id will not work
                    var new_card_data = _.clone(card.card_data);
                    if(card.card_data.cloned_from_id){// it is already clone of something else
                        new_card_data.cloned_from_id = card.card_data.cloned_from_id;// get the original id
                    }
                    else{
                        new_card_data.cloned_from_id = card.id;
                    }
                    me.add_new_card(new_card_data);
                }

                this.card_set_draggable= function(card, opt){
                    me._card_set_movable(card, opt);
                };
                this.card_set_resizable= function(card, opt){
                    me._card_set_resizable(card, opt);
                };

                this.save_card_content=function(_card, do_not_compare){
                    // do_not compare when data is added or removed 
                    if(self.frameview.type === 'volatile'){
                        me.show_frame_hint("This is a volatile frameview. Cards won\'t be saved here", 2000);
                        return;
                    }

                    // saves everything but before doing that it updates content;
                    var _do_not_compare = false; if(do_not_compare)_do_not_compare = true;
                    me.update_card_content_from_frameview_to_store(_card, _do_not_compare);
                };
                
                this.remove_card= function(card, status){
                    state.actions.removingThisCard(card, state);
                    if(status === 'PERMANENT') me._remove_card_from_frameview_and_store(card);
                    else if(status === 'TEMPORARY') me._remove_card_from_frameview_only(card);
                };
                this.add_new_card_autoposition= function(card_data){
                    var card_ = null;
                    var size = self.get_fc_value('card_default_size');
                    var pos = {x:0, y:0};
                    if(card_data.default_size){
                        size = card_data.default_size;
                    }
                    if(card_data.default_pos){
                        pos = card_data.default_pos;
                    }
                    var CARD_TYPE = null;
                    if(card_data.parent){
                        CARD_TYPE = me._create_parent_card_type();
                    }
                    else{
                        if(card_data.non_editable){
                            CARD_TYPE = me._create_non_editable_card_type();
                        }
                        else {
                            CARD_TYPE = me._create_default_card_type();
                        }
                    }

                    if(card_data.volatile){
                        CARD_TYPE.VOLATILE = true;
                        if(card_data.settings){// settings is a volatile Card
                        }
                    }
                    card_ = me._add_new_card_from_user_to_frameview(pos.x, pos.y, size.w,size.h, CARD_TYPE, card_data);
                    if(!card_.TYPE.VOLATILE) me._save_new_card_from_frameview_to_store(card_);

                    //After card created
                    // some initialisation can only be done after card is created so:)
                    if(card_data.non_resizable){// most of the cards are resizable so this is specia
                        me._card_set_resizable(card_ , false);
                    }

                    return card_;
                };
                this.add_new_card_top_left= function(card_data){
                    var card_ = null;
                    var x = 0;
                    var y = 0;
                    var size = self.get_fc_value('card_default_size');
                    if(card_data.default_size){//@me
                        size = card_data.default_size;
                    }
                    var CARD_TYPE = me._create_default_card_type();
                    card_ = me._add_new_card_from_user_to_frameview(x,y,size.x,size.y,CARD_TYPE, card_data);
                    if(!card_.TYPE.VOLATILE)me._save_new_card_from_frameview_to_store(card_);

                    return card_;
                };
                this.add_new_card= function(card_data){// decides on config option what to do
                    var card_ = null;

                    if(self.get_fc_value('card_auto_position')==true){
                        console.log('auto p true');
                        self.auto_position = true;
                        card_ = me.add_new_card_autoposition(card_data);
                        self.auto_position = false;// set default to false so that stored card from store are positioned in their given position and not in 0,0
                    }
                    else{
                        console.log('auto p false');
                        card_ = me.add_new_card_autoposition(card_data);
                    }
                    return card_;
                };
                this.add_card_top_right= function(){};
                this.add_card_bottom_left= function(){};
                this.add_card_bottom_right= function(){};
                this.add_card_centre= function(){};
                this.add_card_above_search_bar= function(){};
                this.add_card_to_frameview= function(){};
                this.add_cards_to_frameview= function(){};
                
                this.card_resize_to= function(card, w, h){
                    self.grid.resize(card.el, w, h);
                };

                this.expand_card= function(card, x, y, w, h){
                    card.original_x = card.x;
                    card.original_y = card.y;
                    card.original_width = card.width;
                    card.original_height = card.height;

                    me._update_card_in_frameview(card, x, y, w, h);
                };
                this.restore_expanded_card= function(card){
                    if(card.original_x && card.original_y && card.original_width && card.original_height){
                        me._update_card_in_frameview(card, card.original_x, card.original_y, card.original_width, card.original_height);
                    }
                    else if((card.original_x==0 || card.original_y==0) && card.original_width && card.original_height){
                        me._update_card_in_frameview(card, card.original_x, card.original_y, card.original_width, card.original_height);
                    }
                };

                this.move_selected_card_and_save = function(opt){
                    var card_ = state.actions.get_primary_selected_card(state);
                    if(opt.left && Math.round(card_.x-opt.left) >= 0){
                        me._update_card_in_frameview(card_, Math.round(card_.x-opt.left) , card_.y, card_.width, card_.height);
                        me._update_card_from_frameview_to_store(card_);
                    }
                    else if(opt.right && Math.round(card_.x+opt.right) <= 12){// width is not considered here
                        me._update_card_in_frameview(card_, Math.round(card_.x+opt.right) , card_.y, card_.width, card_.height);
                        me._update_card_from_frameview_to_store(card_);
                    }
                    else if(opt.up && Math.round(card_.y-opt.up) >= 0){
                        me._update_card_in_frameview(card_, card_.x, Math.round(card_.y-opt.up), card_.width, card_.height);
                        me._update_card_from_frameview_to_store(card_);
                    }
                    else if(opt.down){
                        me._update_card_in_frameview(card_, card_.x, Math.round(card_.y+opt.down), card_.width, card_.height);
                        me._update_card_from_frameview_to_store(card_);
                    }
                }

                this.load_card_from_tab_cache= function(){};
                this.load_card_from_background_cache= function(){};
                this.save_card_for_tab_session= function(){};
                this.save_card_for_browser_session= function(){};
                this.save_card_to_local_store= function(){};
                this.save_card_to_background_cache= function(){};
                this.save_card_to_server= function(){};
                this.remove_card_permanently= function(){};
            };
            this.actions = new self.create_actions();

        // States
            this.state_manager = {
                rollback:function(){
                    // var st = state.queue.getlast();

                    // if(st){
                        
                    // }

                    var somestate = true;
                    if(state.isany_card_being_edited){
                        // self.stop_editing_all('CANCELED');
                        self.stop_editing_all('EDITING_FINISHED');
                        somestate = false;
                    }

                    if(somestate){
                        var curr_key = self.frameview.key();
                        var curr_title = self.frameview.title();
                        var dest_key = curr_key;
                        var dest_title = curr_title;
                        if(curr_title.length && curr_title[0] === '$'){
                            self.actions.show_frame_hint('This is a root frame. ESC won\'t take you back', 3000);
                            return;
                        }
                        if(curr_key == 'home');
                        else{
                            var navs = self.navigation();
                            for (var i = navs.length - 1; i >= 0; i--) {
                                if(navs[i].key == curr_key){
                                    if(i > 0){// i am beyond home
                                        dest_key = navs[i-1].key;
                                        dest_title = navs[i-1].title;
                                    }
                                }
                            };
                            self.goto_frameview(dest_key, dest_title);
                        }
                    }
                },
                add_state: function(st){
                    state.queue.push(st);
                },
                pop: function(){
                    state.queue.pop();
                },
            };
        //Utility
            this.getCurrentFrameviewKeyAndTitle = function(){
                return {fv_key:self.frameview.key(), fv_title:self.frameview.title()};
            }
        // Pointer
            this.onMouseDown = function(data, event){// on card
                self.mouseFixWhich(event);//so that crossbrowser 
                state.pointer.mouse.isanydown = true;
                if(event.which === 1){
                    state.pointer.mouse.isleftdown = true;
                }
                else if(event.which === 2){
                    state.pointer.mouse.ismiddledown = true;
                }
                else if(event.which === 3){
                    state.pointer.mouse.isrightdown = true;
                }

                state.pointer.mouse.last_x = event.screenX;
                state.pointer.mouse.last_y = event.screenY;

                // $grid_stack.panzoom('disable');
                return true // bubble

                //remove //************************************************
                // if(event.which != 1){// 1 for left
                    // return true;// bubble
                // }
                // only left click works
                // self.mouseProps.isDown = true;
                // self.mouseProps.lastX = event.screenX;
                // self.mouseProps.lastY = event.screenY;

                // return true;// bubble
            };
            this.onMouseUp = function(card, event){
                self.mouseFixWhich(event);//so that crossbrowser 
                state.pointer.last_target = event.target;

                var x = event.screenX;
                var y = event.screenY;
                var lx = state.pointer.mouse.last_x;
                var ly = state.pointer.mouse.last_y;
                if(!lx)lx=0;if(!ly)lx=0;// idon't know if they can be null
                var dx = Math.abs(x-lx);
                var dy = Math.abs(y-ly);
                if(event.which === 1){
                    self.left_click_on_card(card, event.target, null, dx, dy);
                }
                else if(event.which === 2){
                    self.right_click_on_card(card, event.target, null, dx, dy);
                }
                else if(event.which === 3){
                    self.middle_click_on_card(card, event.target, null, dx, dy);   
                }

                
                //---------------end------------//
                state.pointer.mouse.isanyup = true;
                if(event.which === 1){
                    state.pointer.mouse.isleftdown = false;
                }
                else if(event.which === 2){
                    state.pointer.mouse.ismiddledown = false;
                }
                else if(event.which === 3){
                    state.pointer.mouse.isrightdown = false;
                }
                state.pointer.mouse.isdown_on_background = false;

                // $grid_stack.panzoom('enable');

                return true; // bubble
            };
            this.onMouseLeaveCard = function(card, event){
                card.isMouseHovered(false);
                self.show_additional_card_menu(false);
                return true;
            };
            this.onMouseEnterCard = function(card, event){
                card.isMouseHovered(true);
                return true;
            };
            this.onPointerDown_background = function(i, e){
                if($(e.target).hasClass('grid-stack')){
                    //$grid_stack.panzoom('enable');
                }
                return true;
            };

            this.onPointerUp_background = function(i, e){
                if(!state.isany_card_being_edited)self.appActions.hidecommandSuggestions();// remove searchbar and suggestion when clicked on background
                
                if($(e.target).hasClass('grid-stack')){
                    self.stop_editing_all('EDITING_FINISHED');
                }
                //$grid_stack.panzoom('dissable');
                
                return true;
            };
            
            this.left_click_on_card = function(card, target, dt, dx, dy){
                self.show_additional_card_menu(false);
                if(!card.STATE.EDITING)self.card_label_text('Selected');

                state.actions.select_this_card(state, card);// give state as a self ref
                
                if($(target).hasClass('removeCardBtn')){
                    if(state.keyboard.ctrl_down){
                        self.actions.remove_card(card, 'PERMANENT');
                    }
                    else{
                        self.actions.remove_card(card, 'TEMPORARY');
                    }
                        
                }// should be before or other events will fire
                else if($(target).hasClass('cardMenuIcon')) {
                    self.show_additional_card_menu(true);
                    if($(target).hasClass('cardMenuEditIcon')){
                        if(card.TYPE.EDITABLE){// why give a edit option if the card is not editable at all ???
                            if(card.STATE.EDITING);// already editing
                            else{
                                self.start_editing_card(card);
                                self.show_additional_card_menu(false);
                                $(card.el).find('.sc-editable').first().focus();
                            }
                        }
                        else{
                            self.actions.show_card_hint('this card is not editable');
                        }
                    }
                    else if($(target).hasClass('cardMenuTrashIcon')){
                        self.actions.remove_card(card, 'PERMANENT');
                    }
                    else if($(target).hasClass('cardMenuCutIcon')){
                        // self.actions.remove_card(card, 'TEMPORARY');
                        state.cut_or_copied_cards = [card];
                        self.show_additional_card_menu(false);
                    }
                    else if($(target).hasClass('cardMenuPasteIcon')){
                        self.show_additional_card_menu(false);
                        var _cd = state.actions.get_cut_or_copied_card(state);
                        if(_cd){
                            var _fv_key = self.frameviewkey_prefix + card.id;
                            self.actions.add_cardid_to_frameview_and_save(_fv_key, _cd.id);
                            // the above func is not implemented yet
                            //TODO
                        }
                    }
                }
                else if(target.nodeName === 'A' && state.keyboard.ctrl_down){
                    // link to somewhere
                }
                else{
                    if(card.TYPE.PARENT && !card.STATE.EDITING){// don't go to child if editing
                        self.trigger_parent(card, target, dt, dx, dy);
                    }
                    else{
                        if(card.TYPE.EDITABLE){
                            if(card.STATE.EDITING){
                                if(self.get_fc_value('stop_edit_only_when_clicked_outside') == true){
                                }
                                else self.maybe_stop_edit_card(card, target, dt, dx, dy);
                            }
                            else{
                                self.maybe_edit_card(card, target, dt, dx, dy);
                            }
                        }
                        else{// this card may not be editable but there could be a card which is being edited when clicked on this card
                            if(self.is_perfect_click(dx, dy, dt, self.get_fc_value('perfect_click_max')))self.actions.show_card_hint('This card is not Editable');
                            if(state.isany_card_being_edited){// may be you were editing something else
                                self.stop_editing_all('EDITING_FINISHED');
                            }
                        }
                    }
                }
            };

            this.right_click_on_card = function(card, target, dt, dx, dy){
                //open menu
            };
            this.middle_click_on_card = function(card, target, dt, dx, dy){};
            this.mouseFixWhich= function (e) {// crossbrowser because IE cause problems
                if (!e.which && e.button) {
                    if (e.button & 1) e.which = 1;      // Left
                    else if (e.button & 4) e.which = 2; // Middle
                    else if (e.button & 2) e.which = 3; // Right
                }
            };
            this.clicked_on_breadcrumb = function(nav){
                self.goto_frameview(nav.key, nav.title);// no need to check if you are already in the frameview it's done in goto_frameview
            }
            this.is_perfect_click = function(dx, dy, dt, off){
                if(dx <= off && dy <= off) return true;//latter consider dt as well
                return false;
            };
            this.is_sc_editable = function(target){
                return $(target).hasClass("sc-editable");  
            };

        // Edit Card
            this.maybe_edit_card = function(card, target, dt, dx, dy){
                var edit = false;
                if(self.get_fc_value('edit_on_perfect_click') == true){// edit only when mouse down and mouse up happeded at one place
                    var max_dist = self.get_fc_value('perfect_click_max');
                    var is_perfect_click = self.is_perfect_click(dx, dy, dt, max_dist);// with some offset// 2 here
                    if(is_perfect_click){
                        if(self.get_fc_value('edit_on_sc_editable') == true){// edit only if clicked on sc_editable element
                            var is_sc_editable = self.is_sc_editable(target);
                            if(is_sc_editable){
                                edit = true;
                            }
                            else{
                                // don't edit
                            }
                        }
                        else{//edit even if you are not in a sc_editable click, // but with a perfect click
                            edit = true
                        }
                    }
                    else{
                        //don't edit
                    }
                }
                else{// edit even if it is not a perfect click
                    if(conf_ce.edit_on_sc_editable){// edit only if clicked on sc_editable element
                        var is_sc_editable = self.is_sc_editable(target);
                        if(is_sc_editable){
                            edit = true;
                        }
                    }
                    else{// edit even if not a perfect click or not a sc_editable
                        //@me not needed
                    }
                }

                if(edit){
                    self.start_editing_card(card);// have to edit no matter what/ even if that means stop others  
                }
            };
            
            this.start_editing_card = function(card){
                // if editing any
                if(self.get_fc_value('edit_one_at_a_time') == true){// edit one at a time, lets see
                    self.stop_editing_all('CANCELED');
                }

                // if should expand
                if(self.get_fc_value('expand_when_editing') == true){
                    self.expand_if_not_enough_space(card);// expand if needed only
                }
                if(self.get_fc_value('stop_draggable_when_editing') == true){
                    self.actions.card_set_draggable(card, false);// stop draggable
                }
                if(false){
                    self.actions.card_set_resizable(card, false);   
                }
                /*before*/
                card.STATE.EDITING = true;
                /*after*/

                //state ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                // focus only if clicked on a sc-editable
                // last target could ...
                if(state.pointer.last_target && self.is_sc_editable(state.pointer.last_target) )state.pointer.last_target.focus();
                else $(card.el).find('.sc-editable').first().focus();
                state.isany_card_being_edited = true;
                state.now_editing_cards.push(card);
                //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                //Hacks
                self.card_label_text('Editing');
                //card.isSelected(false);// to switch off selection uis
                // remember to make it true at stop_edit
            };
            this.maybe_stop_edit_card = function(card, target, dt, dx, dy){
                var stop_edit = false;

                if(self.get_fc_value('stop_edit_on_perfect_click') == true){
                    var max_dist = self.get_fc_value('perfect_click_max');
                    var is_perfect_click = self.is_perfect_click(dx, dy, dt, max_dist);// with some offset// 2 here
                    if(is_perfect_click){// good to go
                        if(self.get_fc_value('donnot_stop_edit_on_sc_editable') == true){
                            var is_sc_editable = self.is_sc_editable(target);
                            if(is_sc_editable){
                                target.focus();
                            }
                            else{
                                stop_edit = true;
                            }
                        }
                        else{// i can stop editing even if i have not clicked on sc_editable// but as long as it is a perfect click
                            stop_edit = true;
                        }
                    }
                    else{
                        //don't stop editing. // it's not a perfect click
                    }
                }
                else{// just stop editing if when ever card state is EDITING and clicked anywhere
                    stop_edit = true;
                }

                if(stop_edit){// decided
                    self.stop_editing_card(card, 'EDITING_FINISHED');
                }
            };
            this.stop_editing_card = function(card, reason){
                if(self.get_fc_value('expand_when_editing') == true){// may be it is expanded
                    self.restore_expand_if_done(card);
                }
                if(self.get_fc_value('stop_draggable_when_editing') == true){// drag was dissabled
                    self.actions.card_set_draggable(card, true);//start draggable again
                }
                if(false){
                    self.actions.card_set_resizable(card, true);//start resizable again
                }

                /*before*/
                card.STATE.EDITING = false;
                /*after*/

                //state ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                if(self.get_fc_value('edit_one_at_a_time') == true){
                    state.isany_card_being_edited = false;
                    state.now_editing_cards = [];
                }
                else{
                    _.remove(state.now_editing_cards, function(i){ return i.id == card.id});
                    if(state.now_editing_cards.length){// more than one being edited
                        //state.isany_card_being_edited = true;
                    }
                }
                //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                if(self.frameview.type === 'volatile'){
                    self.actions.show_frame_hint("This is a volatile frameview, Cards won\'t be saved here", 2000);
                    return;
                }
                else if(!card.TYPE.VOLATILE && reason=='EDITING_FINISHED'){
                    // app.trigger('editing:finished', card.id);// saves card_content in card.js
                    // self.actions._update_card_from_frameview_to_store(card);// saves card, along with card_data here
                    self.actions.update_card_content_from_frameview_to_store(card);
                    //this in turn saves card datas as well
                    
                    self.actions.show_card_hint('Saved');
                    
                }
                else{
                    self.card_label_text('Selected');
                }

                //card.isSelected(true);// it was selected but this variable was set to false to remove ui clutterness when editing
                self.appActions.showcommandSuggestions();// to go out of focus of editing
            };
            this.stop_editing_all = function(reason){
                edcards = state.now_editing_cards;
                for (var i = edcards.length - 1; i >= 0; i--) {
                    self.stop_editing_card(edcards[i], reason);
                };
                state.isany_card_being_edited = false;
            };
            this.cancel_editing_card = function(){};

        // Expand & Restore while editing
            this.expand_if_not_enough_space = function(card){

                //Decide if content is not fitting properly or not
                var _should_expand = false;
                var card_px = $(window).width()/12;//12 is defined in gridstack
                // var aspect_ratio = 1.5;

                var card_parent_el = $('#card_'+card.id);
                var content_size = {w:0, h:0};
                card_parent_el.children().each(function(i, el){
                    content_size.h+= $(el).outerHeight(true);// true to include margin// this el has margin of 20 on both side
                    // content_size.w+= $(el).width();
                });
                // console.log('parent:', card_parent_el.height());
                // console.log('child: ', content_size.h);
            
                var h = card.height;
                var w =card.width;
                
                var dh = Math.ceil( (content_size.h/card_px) - card.height);

                // var dh = 0;
                // if(h<4) dh = Math.ceil( (content_size.h/card_px) - card.height);// for small h dh ceil is good
                // else dh = Math.round( (content_size.h/card_px) - card.height);
                
                // var dw = Math.ceil( (content_size.w/card_px) - card.width);
                
                console.log('h', h, 'dh',dh);
                if(dh > 0){// only expand, don't contract
                    // var area = (h+dh) * w;
                    // h = Math.round( Math.sqrt(area/1.5));
                    // w = Math.round( area/h );

                    h = h+dh;
                    w = w+1;
                   
                    if(h>1 && w>1)_should_expand = true;
                }

                //After decision expand
                if(_should_expand){
                    // console.log("trying to expand");
                    self.actions.expand_card(card, card.x, card.y, w, h);
                    card.STATE.EXPANDED = true;

                    //state^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    state.isany_card_expanded = true;
                    state.now_expanded_cards.push(card);
                    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                }
            };
            this.restore_expand_if_done = function(card){
                if(card.STATE.EXPANDED == true){
                    self.actions.restore_expanded_card(card);
                    card.STATE.EXPANDED = false;

                    //state ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    if(self.get_fc_value('expand_one_at_a_time') == true){
                        state.isany_card_expanded = false;
                        state.now_expanded_cards = [];
                    }
                    else{
                        _.remove(state.now_expanded_cards, function(i){ return i.id == card.id})
                        if(state.now_expanded_cards.length){// more than one being expanded
                            //state.isany_card_expanded= true;
                        }
                    }
                    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

                }
            }

        
        //Frameview
            this.goto_frameview = function(frameview_key, title){
                if(self.frameview.key() === frameview_key){
                    console.log("you are already in frame " + frameview_key);
                    return;
                }
                if(state.isany_card_being_edited)self.stop_editing_all('CANCELED');

                //first
                //self.actions.cacheIt();
                //caching doesn't do good now because , we have multiple frame and they are caching separately , so when one frme is updated other frames don't get it
                // cache should be universal

                //new
                self.frameview.key(frameview_key);
                self.frameview.title(title);
                self.frameview.type = (title.indexOf('$') === 0)? 'volatile': 'default';
                self.frameview.exploring = (frameview_key === '$explore')? true: false;

                
                self.actions.remove_frameview_from_frame();
                self.actions.load_all_from_store_to_frameview();
                

                // self.actions.frame_animateOut(2000, function(){
                //     self.actions.remove_frameview_from_frame();
                //     self.actions.load_all_from_store_to_frameview();
                // });
            };
            this.reload_frameview = function(){//just reload this frameview/ its being changed somewhere
                console.log('forcefully reloading this frame, key: -', self.frameview.key());
                self.all_cards_in_frame_loaded = false;// so that onchange event are not passed to other tabs
                self.actions.remove_frameview_from_frame();
                self.actions.load_all_from_store_to_frameview();
            };
            this.load_explore_frameview = function(query){
                self.navigation([{key:'home', title: 'Home'}, {key:'$explore', title: '$explore'} ]);
                self.actions.show_frame_hint("No card will be saved here, type a query in the search bar");
                self.frameview.exploring = true;
                self.goto_frameview('$explore', '$explore');
            }
            this.trigger_parent = function(card, target, dt, dx, dy){
                if(card.TYPE.PARENT && card.card_data.password){
                    card.restricted = true;
                    var pass = self.appActions.getCommandInputString();
                    if(pass === card.card_data.password){
                        delete card.restricted;
                        self.card_label_text('Selected');
                        self.appActions.setCommandInputString('');
                    }
                    else{
                        self.card_label_text('Password Protected');
                        setTimeout(function(){self.card_label_text('Selected');}, 1000)
                    }
                }

                if(card.TYPE.PARENT && !card.restricted){
                    // Breadcrumb Manipulation
                    var _fv_key = self.frameviewkey_prefix + card.id;
                    if(card.card_data.cloned_from_id){// its own childframeview doesn't exist
                                                        // it's a cloned card , so go to the original card's Child frameview
                        _fv_key = self.frameviewkey_prefix + card.card_data.cloned_from_id;
                    }
                    var _nav = self.navigation();
                    
                    if(!dx){// didn't come here from mouse event
                        if(_nav.length == 1){// Only home
                            self.navigation.push({key:_fv_key, title: card.card_data.card_content.title});
                        }
                        else{
                            for (var i = _nav.length - 1; i >= 0; i--) {
                                if(_nav[i].key == self.frameview.key()){// index of current frameview
                                    if(i < _nav.length-1){// I am before last breadcrumb
                                        if(_nav[i+1].key == _fv_key){// next navigation breadcrumb we are going to land in (if it exists)
                                            // nothing to do here
                                            // make this active
                                        }
                                        else{
                                            self.navigation.splice(i+1, _nav.length-1);//remove all after i+1, note splice 2nd argument is how many element to remove, if that no is greater than available it removes until the end
                                            self.navigation.push({key:_fv_key, title: card.card_data.card_content.title});
                                        }
                                    }
                                    else{//I am at the last breadcrumb
                                        self.navigation.push({key:_fv_key, title: card.card_data.card_content.title});
                                    }
                                    break;
                                }
                            }
                        }
                        self.goto_frameview(_fv_key, card.card_data.card_content.title);
                    }
                    else if(true && self.is_perfect_click(dx, dy, 0, 0)){

                        if(_nav.length == 1){// Only home
                            self.navigation.push({key:_fv_key, title: card.card_data.card_content.title});
                        }
                        else{
                            for (var i = _nav.length - 1; i >= 0; i--) {
                                if(_nav[i].key == self.frameview.key()){// index of current frameview
                                    if(i < _nav.length-1){// I am before last breadcrumb
                                        if(_nav[i+1].key == _fv_key){// next navigation breadcrumb we are going to land in (if it exists)
                                            // nothing to do here
                                            // make this active
                                        }
                                        else{
                                            self.navigation.splice(i+1, _nav.length-1);//remove all after i+1, note splice 2nd argument is how many element to remove, if that no is greater than available it removes until the end
                                            self.navigation.push({key:_fv_key, title: card.card_data.card_content.title});
                                        }
                                    }
                                    else{//I am at the last breadcrumb
                                        self.navigation.push({key:_fv_key, title: card.card_data.card_content.title});
                                    }

                                    break;
                                }
                                else{
                                    // console.log('@impossible');
                                    // someone will definitely match
                                }
                            }
                        }


                        //Triggering Parent
                        self.goto_frameview(_fv_key, card.card_data.card_content.title);
                    }
                }
                else{
                    console.log("@im , not a parent type");
                }
            };
            this.open_in_new_frame = function(frameview_key, card){
                self.appActions.loadFrameViewInNewFrame(frameview_key, card);
            };
            this.toggle_hide_frame = function(data, event){
                var $frame_content = $(event.target).parent().parent().siblings();
                
                if($frame_content.first().is(':visible')){
                    $(event.target).addClass('fa-rotate-90');
                }
                else {
                    $(event.target).removeClass('fa-rotate-90');
                }

                $frame_content.slideToggle(100);
                self.appActions.showcommandSuggestions();
            };

            this.toggle_hide_frame_on_dbl_click = function(event){
                var _id =  $(event.target).attr('id');
                if(_id && _id.indexOf('frame_top_bar_') === 0);
                else return;
                var $frame_content = $(event.target).siblings();
                
                if($frame_content.first().is(':visible')){
                    $(event.target).find('._toggle_frame').addClass('fa-rotate-90');
                }
                else {
                    $(event.target).find('._toggle_frame').removeClass('fa-rotate-90');
                }

                $frame_content.slideToggle(100);
                self.appActions.showcommandSuggestions();
            };
            this.close_frame = function(data, event){
                // called in UI
            };
        
       //Keyboard
            

    };

    return frame;


});