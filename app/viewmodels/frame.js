
define(['plugins/http', 'durandal/app', 'knockout', 'gridstack', 'lodash', 'state', 'store', 'panzoom'],
    function (http, app, ko, gridstack, _ , state, store, panzoom) {

    var frame = function(){
        var self=this;

        //UI
            //Observables
            this.cards = ko.observableArray([]);
            this.navigation = ko.observableArray([{key:'home', title:'Home'}]);

            //Non - Observable
                    // @cbc //both are same
            $focushere = null;// focus element to focus and get cmd value
            this.searchbar = null; // complete searchbar element to blur and show when nessary
            $panzoom = null;

            //Gridstack
            $grid_stack = null;// jquery gridstack selector
            this.grid = null;// gridstack grid object
            this.manual_update = {manual:false, cardid:null};// store if card was updated by user or programatically by external data
            this.auto_position = false;

        //Viewmodels
            this.activeModel = "viewmodels/card";
            this.activeView = "views/cards/card.html";
            this._root = {max_card_id:0};// needs to be updated always

            //Frameview
            this.frameviewkey_prefix = 'frameviewkey_';
            this.frameview = {};
            this.frameview.ids = [];//array of card ids
            this.frameview.key = ko.observable('home');
            this.frameview.cards = this.cards;
            //Cache
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

                'perfect_click_max'
            ]
            this.frame_config = [
                0, {w:2, h:2}, false,     true, true, true, false, true, true,     false,  true, true,  4
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
            this.activate = function (){        
            };
            this.bindingComplete = function (view) {
            };
            this.attached = function(view, parent){
                self.on_start();
                $focushere = $('#focushere');
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
                    self.grid = $(items[1].parentNode).gridstack(//@more work -> index
                        opt
                    ).data('gridstack');
                    // jquery backup
                    if(!self.grid){
                        self.grid = $('.grid-stack').gridstack(opt).data('gridstack');
                    }
                    if(self.grid){
                        $('.grid-stack').on('change', function (event,items) {
                            _.forEach(items, function (i) {

                                var data = ko.dataFor(i.el[0]);
                                var valueChanged = false;
                                if(self.manual_update.manual === true && data.id === self.manual_update.cardid){
                                    valueChanged = data.x !== i.x || data.y !== i.y  || data.width !== i.width || data.height !== i.height ;
                                }
                                if (data.x !== i.x) {//try using this as observable instead
                                    data.x = i.x;
                                }

                                if (data.y !== i.y) {
                                    data.y = i.y;
                                }

                                if (data.width !== i.width) {
                                    data.width = i.width;
                                }

                                if (data.height !== i.height) {
                                    data.height = i.height;
                                }

                                if(self.manual_update.manual === true && data.id === self.manual_update.cardid){
                                    if(valueChanged){
                                        self.actions._update_card_from_frameview_to_store(data);
                                        self.manual_update.manual = false;
                                    }
                                }
                            });
                        });

                        $('.grid-stack').on('dragstop', function (event, ui) {
                            var card = ko.dataFor(ui.helper[0]);
                            self.manual_update.manual = true;
                            self.manual_update.cardid = card.id;
                        });


                        $('.grid-stack').on('resizestop', function (event, ui) {
                            var card = ko.dataFor(ui.helper[0]);                            
                            self.manual_update.manual = true;
                            self.manual_update.cardid = card.id;
                        });
                    }

                    $grid_stack = $('.grid-stack');
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
                self.actions._load_root();
                self.actions._load_frame_config();

                if(state.parsedHTMLRESULT){//temp get from somewhere else
                    var res = state.parsedHTMLRESULT;
                    var _view = self.activeView;
                    self.activeView = 'views/webreader.html';
                    self.actions.add_new_card({title:"Web Resources", volatile:true, parsedHTMLRESULT:res})
                    self.activeView = _view;

                }
                
                
                //self.actions.load_all_from_store_to_frameview();// it does everything -> loads all cards
                //console.log(self.navigation());


                
                $(document).keypress(function(e) {
                    self.someKeyPressed(e);
                    return true;
                });
                $(document).keyup(function(event) {
                    self.someKeyUp(event);
                    return true;
                });
            }


        //Actiosns            
            this.create_actions = function(){
                var me = this;
                //@
                this._add_new_card_from_user_to_frameview = function(x, y, width, height, CARD_TYPE, card_data){
                    var newid = self._root.max_card_id+1;
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
                        el:null
                    };
                    self.cards.push(newcard);
                    self.frameview.ids.push(newid);
                    self._root.max_card_id = newid;

                    me._save_root();

                    return newcard;
                };
                //@
                this._add_card_from_store_to_frameview = function(_card){
                    var CARD_STATE = me._create_card_state();
                    _card.STATE = CARD_STATE;
                    _card.el = null;
                    me._update_view_model_strings(_card.card_data);// change view model type before binding

                    self.cards.push(_card);
                    self.frameview.ids.push(_card.id);
                };
                //@
                this._save_new_card_from_frameview_to_store = function(card){
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
                    console.log('sending', self.frameview);
                    me._send_msg_to_background(_type, _msg);
                    
                };
                //@
                this._update_view_model_strings = function(card_data){
                    if(card_data.model);//@im check if model is valid
                    if(card_data.view)self.activeView = card_data.view;//@im check if view is valid
                }
                //@
                this._update_card_from_store_to_frameview = function(_card){
                    var card = me._get_card_byID(_card.id);
                    if(card){
                        me._update_card_in_frameview(card, _card.x, _card.y, _card.width, _card.height);
                    }
                };

                this._update_card_from_frameview_to_store = function(card){
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
                    var _msg = {frameview_key:self.frameview.key(), _card:_card};
                    me._send_msg_to_background(_type, _msg);
                };
                //@
                this._remove_card_from_frameview_only = function(card){
                    self.cards.remove(card);
                    self.grid.remove_widget(card.el);
                    _.remove(self.frameview.ids, function(i){return i === card.id});

                    //
                        // var cs = self.cards.remove( function (card) { return card.id === id; } );// returns array of removed cards
                        // if(cs.length === 1){//should always be 1 as we have unique id
                        //     self.grid.remove_widget(cs[0].el)// @should always be gridstack-item
                        // }
                        // _.remove(self.frameview.ids, function(i){return i === id});
                };
                this._remove_card_from_frameview_and_store = function(card){
                    me._remove_card_from_frameview_only(card);
                    if(card.TYPE.VOLATILE) return;//never try to removea a volatile card from store , it doesn't exists
                    var _type = 'REMOVE_CARD_FROM_STORE';
                    var _msg = {frameview_key:self.frameview.key(), id:card.id};
                    me._send_msg_to_background(_type, _msg);

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
                        }, 
                        function(response) {
                            return response;
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
                this._save_root= function(){
                    var _type = 'SAVE_ROOT';
                    chrome.runtime.sendMessage(
                        {
                            type:_type,
                            msg:{_root:self._root}
                        }, 
                        function(response) {
                        }
                    );
                };
                this._load_root= function(){
                    var _type = 'LOAD_ROOT';
                    chrome.runtime.sendMessage(
                        {
                            type:_type
                        }, 
                        function(response) {
                            var root = response.msg._root;
                            if(root){
                                _.forIn(root, function(value, key) {
                                    self._root[key] = value;
                                });
                            }
                        }
                    );
                };
                this._load_frame_config = function(){
                    var _type = 'LOAD_FRAME_CONFIG_FROM_STORE';
                    chrome.runtime.sendMessage(
                        {
                            type:_type
                        }, 
                        function(response) {
                            config = response.msg.frame_config;
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
                this.save_frame_config = function(){
                    var _type = 'SAVE_FRAME_CONFIG_TO_STORE';
                    var _msg = {frame_config:self.frame_config};
                    me._send_msg_to_background(_type, _msg);
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
                        $grid_stack.fadeIn(duration, onComplete);    
                    }
                    else{
                        $grid_stack.fadeIn(duration, function(){
                            console.log('showing gridstack again');
                        });
                    }
                };
                this.frame_animateOut = function(duration, onComplete){
                    if(onComplete){
                        $grid_stack.fadeOut(duration, onComplete);
                    }
                    else{
                        $grid_stack.fadeOut(500, function(){
                            me.remove_frameview_from_frame();
                            me.load_all_from_store_to_frameview();
                        });
                    }
                };
                this.remove_frameview_from_frame = function(){
                    //@im save if needed
                    self.frameview.ids = [];
                    self.frameview.cards.removeAll();//knockout observable
                    $(self.grid)
                    self.grid.remove_all();//gridstack
                };
                this.load_all_from_store_to_frameview = function(){
                    console.log('prev-', self.cache.keyPrev3, self.cache.keyPrev2, self.cache.keyPrev1);
                    console.log('now-', self.frameview.key());
                    
                    if(self.cache.keyPrev2 === self.frameview.key()){
                        for (var i = self.cache.cardsPrev2.length - 1; i >= 0; i--) {
                            var _c = self.cache.cardsPrev2[i]
                            me._add_card_from_store_to_frameview(_c);
                        };
                        console.log('used prev2 - with key', self.cache.keyPrev2);
                        me.frame_animateIn(500);
                        return ;
                    }
                    else if(self.cache.keyPrev3 === self.frameview.key()){
                        for (var i = self.cache.cardsPrev3.length - 1; i >= 0; i--) {
                            var _c = self.cache.cardsPrev3[i]
                            me._add_card_from_store_to_frameview(_c);
                        };
                        console.log('used prev3 - with key', self.cache.keyPrev3);
                        me.frame_animateIn(500);
                        return ;
                    }
                    //****************************
                    var _type = 'LOAD_ALL_FROM_STORE_TO_FV';
                    var _msg = {frameview_key:self.frameview.key()};
                    chrome.runtime.sendMessage(
                        {
                            type:_type,
                            msg:_msg
                        }, 
                        function(response) {
                            console.log(response);
                            if(response && response.msg && response.msg._cards){
                                var _cards = response.msg._cards;
                                var atleastonecardexist = false;
                                _.forIn(_cards, function(value, key) {
                                    me._add_card_from_store_to_frameview(value);
                                    atleastonecardexist = true;
                                });
                                if(atleastonecardexist){
                                    me.frame_animateIn(500);
                                }
                                else{
                                    me.add_new_card({title:'No cards exist', volatile:true});
                                }

                                // for (var i = _cards.length - 1; i >= 0; i--) {
                                //     me._add_card_from_store_to_frameview(_cards[i]);
                                // };
                            };

                        }
                    );
                    
                };

                this.card_set_draggable= function(card, opt){
                    me._card_set_movable(card, opt);
                };
                this.card_set_resizable= function(card, opt){
                    me._card_set_resizable(card, opt);
                };

                this.save_card=function(_card){// for external call for saving updated contents
                };
                
                this.remove_card= function(card){
                    me._remove_card_from_frameview_and_store(card);
                };
                this.add_new_card_autoposition= function(card_data){
                    var card_ = null;
                    var size = self.get_fc_value('card_default_size');
                    if(card_data.default_size){
                        size = card_data.default_size;
                    }
                    var CARD_TYPE = null;
                    if(card_data.parent){
                        var CARD_TYPE = me._create_parent_card_type();
                    }
                    else{
                        var CARD_TYPE = me._create_default_card_type();
                    }

                    if(card_data.volatile){
                        CARD_TYPE.VOLATILE = true;
                        if(card_data.settings){// settings is a volatile Card
                        }
                    }
                    card_ = me._add_new_card_from_user_to_frameview(0,0,size.w,size.h, CARD_TYPE, card_data);
                    if(!card_.TYPE.VOLATILE) me._save_new_card_from_frameview_to_store(card_);

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
                    card_data.type = 'default';
                    if(card_data.settings)card_data.type='settings';

                    if(self.get_fc_value('card_auto_position')==true){
                        self.auto_position = true;
                        card_ = me.add_new_card_autoposition(card_data);
                        self.auto_position = false;
                    }
                    else{
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
                        self.stop_editing_all();
                        somestate = false;
                    }

                    if(somestate){
                        var curr_key = self.frameview.key();
                        var dest_key = curr_key;
                        if(curr_key == 'home');
                        else{
                            var navs = self.navigation();
                            for (var i = navs.length - 1; i >= 0; i--) {
                                if(navs[i].key == curr_key){
                                    if(i > 0){// i am beyond home
                                        dest_key = navs[i-1].key;
                                    }
                                }
                            };
                            self.goto_frameview(dest_key);
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
            this.onPointerDown_background = function(i, e){
                if($(e.target).hasClass('grid-stack')){
                    //$grid_stack.panzoom('enable');
                }
                return true;
            };

            this.onPointerUp_background = function(i, e){
                if($(e.target).hasClass('grid-stack')){
                    self.stop_editing_all();
                }
                //$grid_stack.panzoom('dissable');
                return true;
            };
            
            this.left_click_on_card = function(card, target, dt, dx, dy){
                
                if($(target).hasClass('removeBtn')){
                    self.actions.remove_card(card);
                    console.log('comming');
                }// should be before or other events will fire
                else if(target.tagName == 'A'){
                    
                }
                else{
                    if(card.TYPE.PARENT){
                        self.trigger_parent(card, target, dt, dx, dy);
                    }
                    else{
                        if(card.STATE.EDITING){
                            self.maybe_stop_edit_card(card, target, dt, dx, dy);
                        }
                        else{
                            self.maybe_edit_card(card, target, dt, dx, dy);
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
                self.goto_frameview(nav.key);// no need to check if you are already in the frameview it's done in goto_frameview
            }
            this.is_perfect_click = function(dx, dy, dt, off){
                if(dx < off && dy < off) return true;//latter consider dt as well
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
                    self.stop_editing_all();
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
                state.isany_card_being_edited = true;
                state.now_editing_cards.push(card);
                //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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
                    self.stop_editing_card(card);
                }
            };
            this.stop_editing_card = function(card){
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
                if(!card.TYPE.VOLATILE)app.trigger('editing:finished', card.id);
                self.focus_on_searchbar();
            };
            this.stop_editing_all = function(){
                edcards = state.now_editing_cards;
                for (var i = edcards.length - 1; i >= 0; i--) {
                    self.stop_editing_card(edcards[i]);
                };
                state.isany_card_being_edited = false;
            };
            this.cancel_editing_card = function(){};

        // Expand & Restore while editing
            this.expand_if_not_enough_space = function(card){

                //Decide if content is not fitting properly or not
                var _should_expand = false;
                var card_px = $(window).width()/12;//12 is defined in gridstack
                var aspect_ratio = 1.5;
                // var sizeY = card.sc_signal();
                var sizeY = 300;
                console.log(sizeY);
                var h = card.height;
                var w =card.width;
                if(sizeY){
                    var dh = Math.round( (sizeY/card_px) - card.height);
                    dh = 1;
                    console.log('dh',dh);
                    if(dh > 0){// only expand, don't contract
                        // var area = (h+dh) * w;
                        // h = Math.round( Math.sqrt(area/1.5));
                        // w = Math.round( area/h );

                        h = h+dh;
                        w = w+dh;
                       
                        if(h && w)                    
                        _should_expand = true;
                    }
                }


                //After decision expand
                if(_should_expand){
                    console.log("trying");
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

        //Search
            this.show_search_bar = function(opt){
                if(!self.searchbar){
                    self.searchbar = $('#focushere');
                    if(self.searchbar.length)self.searchbar = self.searchbar[0];

                    self.searchbar.addEventListener("blur", function(){
                          console.log("disable");
                          self.show_search_bar(false);
                    });
                }
                if(self.searchbar.style){
                    if(opt){
                        self.searchbar.style.opacity = '1';
                    }
                    else{
                        self.searchbar.style.opacity = '0.25';
                    }
                }
            }
            this.focus_on_searchbar = function(){
                if(self.searchbar){
                    self.searchbar.focus();
                    self.show_search_bar(true);

                }
                else{
                  self.searchbar = $('#focushere');
                  if(self.searchbar.length)self.searchbar = self.searchbar[0];
                  self.searchbar.focus();
                  self.show_search_bar(true);

                  // self.searchbar.addEventListener("blur", function(){
                  //       console.log("disable");
                  //       self.show_search_bar(false);
                  // });

                }
            };
            this.searchSubmit = function(from_el){
                var isCmd = true;
                var commandline = $(from_el).find('#focushere')[0];
                var cmd = commandline.value;
                // commandline.value = '';
                if(cmd[0]==' ')isCmd = false;
                var cmd = cmd.replace(/\s+/g, " ").split(" ");
                if(cmd[0] != ''){
                    if ("add".indexOf(cmd[0]) === 0 ){
                        var card_ = null;
                        if(cmd.length > 1){
                            if('parent'.indexOf(cmd[1]) === 0){//parent
                                if(cmd.length > 2){//parent with title
                                    var _title = cmd[2];
                                    for (var i = cmd.length - 1; i >= 3; i--) {
                                        _title = _title + ' ' + cmd[i];
                                    };
                                    card_ = self.actions.add_new_card({parent:true, title:_title, model:self.activeModel, view:self.activeView});
                                }
                                else{// just parent
                                    card_ = self.actions.add_new_card({parent:true, title:'Parent', model:self.activeModel, view:self.activeView});
                                }
                            }
                            else{//card with given title
                                var _title = cmd[1];
                                for (var i = cmd.length - 1; i >= 2; i--) {
                                    _title = _title + ' ' + cmd[i];
                                };
                                card_ = self.actions.add_new_card({title:_title, model:self.activeModel, view:self.activeView});
                            }
                        }
                        else{
                            card_ = self.actions.add_new_card({title:'Card'});
                        }

                        //self.start_editing_card(card_);

                        // $(card_.el).find('.title').focus();
                        // console.log('title', $.sc_find_rec(card_.el,'title'));

                    }
                    else if ("goto".indexOf(cmd[0]) === 0 ){
                        if(cmd.length == 2 ){
                            self.goto_frameview(cmd[1]);
                        }
                    }
                    else if ("clear".indexOf(cmd[0]) === 0 && cmd.length > 1 && "store".indexOf(cmd[1]) === 0){
                        console.log('clearing store');
                        chrome.runtime.sendMessage(
                            {
                                type:'STORE_REMOVEALL'
                            }, 
                            function(response) {
                            }
                        );
                    }
                    else if ("get".indexOf(cmd[0]) === 0 && cmd.length > 1 && "store".indexOf(cmd[1]) === 0 ){
                        console.log('trying to get all in store');
                        chrome.runtime.sendMessage(
                            {
                                type:'STORE_GETALL'
                            }, 
                            function(response) {
                                console.log('got these from store', response);
                            }
                        );
                    }
                    
                    else if("set".indexOf(cmd[0].toLowerCase()) === 0){
                        if(cmd.length>1){
                            if("view".indexOf(cmd[1].toLowerCase()) ===0){
                                if(cmd.length > 2){
                                    if("card".indexOf(cmd[2].toLowerCase()) ===0){
                                        self.activeView = "views/card.html";
                                        console.log('YOU have BOUND card', cmd[2]);

                                    }
                                    else if("ribbon".indexOf(cmd[2].toLowerCase()) ===0){
                                        self.activeView = "views/ribbon.html";
                                        console.log('YOU have BOUND  ribbon');
                                    }
                                    else{
                                        self.activeView = "views/cards/" + cmd[2] + ".html";
                                    }
                                }
                            }
                            else if("config".indexOf(cmd[0].toLowerCase()) ===0){

                            }
                        }
                    }
                    else if("settings".indexOf(cmd[0].toLowerCase()) === 0){
                        console.log("settings config");
                        self.actions.add_new_card({
                            title:'Settings:Config',
                            settings:{config:self.frame_config, config_map:self.frame_config_map},
                            volatile:true
                        });
                        // console.log({config:self.frame_config, config_map:self.frame_config_map});
                    }
                }
            };
        
        //Frameview
            this.goto_frameview = function(frameview_key, card){
                if(self.frameview.key() === frameview_key){
                    console.log("you are already in frame " + frameview_key);
                    return;
                }
                if(state.isany_card_being_edited)self.stop_editing_all();
                //first
                self.actions.cacheIt();


                //new
                self.frameview.key(frameview_key);

                self.actions.frame_animateOut(500, function(){
                    self.actions.remove_frameview_from_frame();
                    self.actions.load_all_from_store_to_frameview();
                    console.log("here is self", self);
                });
            };
            this.trigger_parent = function(card, target, dt, dx, dy){
                if(card.TYPE.PARENT){
                    if(true && self.is_perfect_click(dx, dy, 0, 10)){

                        var _fv_key = self.frameviewkey_prefix + card.id.toString();
                        var _nav = self.navigation();
                        if(_nav.length == 1){
                            self.navigation.push({key:_fv_key, title: card.card_data.title});
                        }
                        else{
                            for (var i = _nav.length - 1; i >= 0; i--) {
                                if(_nav[i].key == self.frameview.key()){// index of current frameview
                                    if(i < _nav.length-1){
                                        if(_nav[i+1].key == _fv_key){// next navigation breadcrumb we are going to land in (if it exists)
                                            // nothing to do here
                                            // make this active
                                        }
                                        else{
                                            self.navigation.splice(i+1, _nav.length-1);
                                            self.navigation.push({key:_fv_key, title: card.card_data.title});
                                        }
                                    }
                                    else{//I am at the last breadcrumb
                                        self.navigation.push({key:_fv_key, title: card.card_data.title});
                                    }

                                    break;
                                }
                                else{
                                    // console.log('@impossible');
                                }
                            }
                        }

                        self.goto_frameview(_fv_key, card);
                    }
                }
                else{
                    console.log("not a parent type");
                }
            };
        
       //Keyboard
            this.someKeyUp = function(event){
                if(event.keyCode == 27){// ESC
                    self.state_manager.rollback();
                }
            };
            // var ena = true;
            this.someKeyPressed = function(event){
                if($(document.activeElement).hasClass('sc-editable') || document.activeElement.nodeName==='INPUT'){// editing something don't take the event
                    if(event.target.id == 'focushere'){
                        self.show_search_bar(true);
                    }
                    return;
                }
                // if(event.keyCode ==32){//SPACE+CTRL
                //     if(ena == true){
                //         self.grid.disable();
                //         $grid_stack.panzoom('enable');
                //         ena= false;
                //     }
                //     else {
                //         self.grid.enable();
                //         $grid_stack.panzoom("resetZoom");
                //         $grid_stack.panzoom('disable');
                //         ena = true;
                //     }
                // }
                if($focushere){// $focushere is an element
                    // $focushere.focus();
                    $focushere.select();
                }
                return true;
            };

        // app.on('remove:card').then(function(carddata){
        //     console.log("here is your cards",carddata);
        // });
    };

    return frame;


});