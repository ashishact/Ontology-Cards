define(['plugins/http', 'durandal/app', 'knockout', 'jquery', 'card_props', 'state',  'searchapi', 'interpreter'], function (http, app, ko, $, card_props, state, searchapi, interpreter) {
    var sc_frameholder = function(){
        var self = this;
        this.name = "Semanticcards";
        this.description = "Sementic cards application";
        this.framesData = ko.observableArray([]);
        this.currentFrame = null;

        interpreter.sc_holdder_ref = this

        $commandForm = null;// focus element to focus and get cmd value
        $commandInput = null;
        $commandSuggestions = null;
        this.commandInputVal = '';
        this.commandSuggestions = ko.observableArray([]);

        this.frameviews_to_update_when_tab_focused = [];//fv_key1, fv_key2, //when this tab is focused these frameview should be updated, because they have changed somewhere
                                                        // it has frameview_key collection
        this.cssColorNames = ['darkseagreen', 'cadetblue', 'burlywood', 'coral', 'chocolate', 'darkcyan', 'salmon', 'darkslategray', 'dimgrey', 'hotpink', 'indianred', 'khaki', 'lavenderblush', 'lightblue', 'lightcoral', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'mediumaquamarine', 'mediumvioletred', 'palegoldenrod', 'palegreen', 'sandybrown', 'tomato' ];
        this.currentColorId = 0;


        this.dataDump = {};


        this.previousCardPosSize = {x:-2, y:0, w:2, h:2};

        this.selectedCommandIndex = 0;
        this.prevSelectedCommandIndex = 0;
        this.commands = [];
        this.terminalHistory = [];
        this.terminalHistoryIndex = 0;
        this.frameviewBeforeExplore = {fv_key:'home', fv_title:'Home'};
        

        this.oneLiners = ["When your only tool is a hammer, all problems start looking like nails.",
                        "99 percent of lawyers give the rest a bad name.",
                        "Artificial intelligence is no match for natural stupidity.",
                        "The last thing I want to do is insult you. But it IS on the list.",
                        "I don't have a solution, but I do admire the problem.",
                        "The only substitute for good manners is fast reflexes.",
                        "Support bacteria - they're the only culture some people have.",
                        "Letting the cat out of the bag is a whole lot easier than putting it back in.",
                        "Well, here I am! What are your other two wishes?",
                        "Sounds like its time to get that Enterprise built!",
                        "Time does'nt exist. Clocks exists.",
                        "My mind’s made up, don’t confuse me with facts.",
                        "Talk is cheap. Until you hire a lawyer.",
                        "Take my advice — I'm not using it.",
                        "I got lost in thoughts. It was unfamiliar territory.",
                        "Sure, I'd love to help you out ... now, which way did you come in?",
                        "I would like to slip into something more comfortable - like a coma.",
                        "I started with nothing, and I still have most of it.",
                        "Ever stop to think, and forget to start again?",
                        "There is no dance without the dancers.",
                        "Out of my mind. Back in five minutes.",
                        "The problem with trouble shooting is that trouble shoots back.",
                        "If you are here - who is running hell?",
                        "If nothing was learned, nothing was taught.",
                        "Very funny, Scotty. Now beam down my clothes...",
                        "The dogs bark but the caravan moves on. [Arabic saying]",
                        "Which one of these is the non-smoking lifeboat?",
                        "Treat each day as your last; one day you will be right.",
                        "Red meat is not bad for you. Fuzzy green meat is bad for you.",
                        "The early bird may get the worm, but the second mouse gets the cheese.",
                        "Isn't it scary that doctors call what they do \"practice\"?",
                        "If I want your opinion, I'll ask you to fill out the necessary forms.",
                        "Living on Earth is expensive, but it does include a free trip around the sun.",
                        "Despite the cost of living, have you noticed how popular it remains?",
                        "All power corrupts. Absolute power is pretty neat, though.",
                        "Always remember you're unique, just like everyone else.",
                        "Everybody repeat after me: 'We are all individuals.'",
                        "Confession is good for the soul, but bad for your career.",
                        "A bartender is just a pharmacist with a limited inventory.",
                        "I want patience - AND I WANT IT NOW!!!!",
                        "A day for firm decisions! Or is it?",
                        "Am I ambivalent? Well, yes and no.",
                        "Bombs don't kill people, explosions kill people.",
                        "Bureaucrats cut red tape, lengthwise.",
                        "Help stamp out, eliminate and abolish redundancy!",
                        "How many of you believe in telekinesis? Raise MY hand!",
                        "A dog has an owner. A cat has a staff.",
                        "Every organisation is perfectly designed to get the results they are getting.",
                        "Welcome to Utah: set your watch back 20 years.",
                        "Seen it all, done it all, can't remember most of it.",
                        "Under my gruff exterior lies an even gruffer interior.",
                        "Jesus loves you, it's everybody else that thinks you're an a...",
                        "A clear conscience is usually the sign of a bad memory.",
                        "To steal ideas from one person is plagiarism; to steal from many is research.",
                        "I am an agent of Satan, but my duties are largely ceremonial.",
                        "You have the capacity to learn from your mistakes, and you will learn a lot today.",
                        "Failure is not an option. It's bundled with your software.",
                        "I drive way too fast to worry about cholesterol.",
                        "When everything's coming your way, you're in the wrong lane and going the wrong way.",
                        "If at first you don't succeed, redefine success.",
                        "If at first you don't succeed, destroy all evidence that you tried."];
        this.getRandomText = function(){
            // return self.oneLiners[Math.floor(self.oneLiners.length*Math.random())];
            return " ";
        };
        this.afterFrameAdded = function(items, frameData){
            if(frameData.frameview_key === 'show_all_cards_frameview_key'){
                setTimeout(function(){
                    frameData.frameModel.actions.load_all_cards_from_store_to_frameview();
                }, 2000);
            }
        };
        this.addFrame = function(frameData){

            //assign an id to each frame to be able to refer to it later on , and create uing DOM id in html
            frameData.frameID = Date.now().toString(36);// all should have unique id
            frameData.appActions = self.appActions;
            frameData.viewModel = "viewmodels/frame";
            frameData.frameModel = null;
            frameData.bgColor = self.cssColorNames[self.currentColorId]; self.currentColorId++; if(self.currentColorId >= self.cssColorNames.length)self.currentColorId=0;
            self.framesData.unshift(frameData);                

            self.adjustCurrentFrame();

            var _fs_data = self.framesData();
            for (var i = _fs_data.length - 1; i > 2; i--) {// don't cound 0 this one was added just now
                                                // let them have same one at top
                if(_fs_data[i].frameModel.frameview.key() === frameData.frameview_key){// don't compare with 0
                    // this frame already exist
                    self.removeFrameByObject(_fs_data[i]);
                }
            };
        };

        this.createNewBindings = function(){
            sanitizeInnerHTML = function(el){
                // var nodes = $(el).childNodes;
                // for (var i = nodes.length - 1; i >= 0; i--) {
                //     if(nodes[i].nodeType == 1){
                //         if(nodes[i].childNodes.length)sanitizeInnerHTML(nodes[i]);
                //         else{
                //           $(nodes[i]).remove();
                //           console.log("nodes[i]", nodes[i]);
                //         } 
                //     }
                // };


            //Escape
                //  escape html
                //  ===========
                    var _escape_html = function (_string)
                    {
                        var _replace = { "&": "amp", '"': "quot", "<": "lt", ">": "gt" };
                        return ((_string && _string.replace) ? _string.replace(/[&"<>]/g, function (_match) { var _r = _replace[_match]; return (_r ? ("&" + _r + ";") : _match); }) : '');
                    };
                    
                
                //  escape html
                //  ===========
                    var _unescape_html = function (_string)
                    {
                        var _replace = { "amp": "&", "quot": '"', "lt": "<", "gt": ">" };
                        return ((_string && _string.replace) ? _string.replace(/[&](amp|quot|lt|gt)[;]/g, function (_match, _match_key) { var _r = _replace[_match_key]; return (_r ? _r : _match); }) : '');
                    };
                
                
                //  encode
                //  ======
                    var _encode = function (_string)
                    {
                        if (_string == '') { return 'none'; }
                        var _replace = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "*": "%2A" };
                        return ((_string && _string.replace) ? _string.replace(/[!'()*]/g, function (_match) { return _replace[_match]; }) : '');
                    };
                
                    
                //  decode
                //  ======
                    var _decode = function (_string)
                    {
                        if (_string == 'none') { return ''; }
                        return ((_string && _string.replace) ? decodeURIComponent(_string) : '');
                    };

                    if(el.innerHTML.indexOf('&lt;') === 0){
                        el.innerHTML = _unescape_html(el.innerHTML);
                    }
                    //console.log("sanitizing  ", el.innerHTML);
            };

            ko.bindingHandlers.sc_contenteditable = {
                init: function(element, valueAccessor, allBindingsAccessor) {
                    ko.utils.registerEventHandler(element, "blur", function() {
                        var modelValue = valueAccessor();
                        var elementValue = element.innerHTML;
                        if (ko.isWriteableObservable(modelValue)) {
                            modelValue(elementValue);
                        }
                        else { //handle non-observable one-way binding
                            var allBindings = allBindingsAccessor();
                            if (allBindings['_ko_property_writers'] && allBindings['_ko_property_writers'].htmlValue) allBindings['_ko_property_writers'].htmlValue(elementValue);
                        }
                    });
                },
                update: function(element, valueAccessor) {
                    var value = ko.utils.unwrapObservable(valueAccessor()) || "";
                    if(value == '<br>') value = '';
                    element.innerHTML = value;
                    sanitizeInnerHTML(element);
                }
            };


            ko.bindingHandlers.fadeVisible = {
                init: function(element, valueAccessor) {
                    // Initially set the element to be instantly visible/hidden depending on the value
                    var value = valueAccessor();
                    $(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
                },
                update: function(element, valueAccessor) {
                    // Whenever the value subsequently changes, slowly fade the element in or out
                    var value = valueAccessor();
                    // ko.unwrap(value) ? $(element).fadeIn() : $(element).fadeOut();//time delay animation
                    ko.unwrap(value) ? $(element).show() : $(element).hide();
                }
            };

            // $.sc_find_rec = function(el, cssclass){
            //     for (var i = el.children.length - 1; i >= 0; i--) {
            //         console.log(i,el.children[i]);
            //         if($(el.children[i]).hasClass(cssclass)){
            //             return el.children[i];
            //         }
            //         else{
            //             $.sc_find_rec(el.children[i], cssclass);
            //         }
            //     }
                
            // };
        };

    //Search
        this.focus_on_command_input = function(event){// !!! event can be null here
            if($commandForm && $commandInput && $commandSuggestions){

                if(event && !state.keyboard.ctrl_down){
                    var _schar = String.fromCharCode(event.which);
                    var focus = false;
                    if(event.which === 191){_schar = '/'; focus = true;}
                    if(event.which === 190){_schar = '.'; focus = true;}
                    if(event.which === 186){_schar = ';'; focus = true;}

                    if(_schar.match(/^[a-zA-Z0-9 ]+/))focus = true;

                    if(focus){
                        $commandSuggestions.show();
                        $commandInput.val(_schar.toLowerCase());
                        $commandInput.focus();
                    }
                }
            }
            else {
                console.log('@im - how can $commandForm & $commandInput not exist');
                $commandForm = $('#commandForm');
                $commandInput = $('#commandInput');
                $commandSuggestions = $('commandSuggestions');
            }
        };

        this.frameActions = {
            add_parent_with_title: function(FM, cmd){
                if(cmd.length>2){
                    var _title = cmd[2];
                    for (var i = 3; i < cmd.length; i++) {
                        _title = _title + ' ' + cmd[i];
                    };



                    var d_size = {w:2, h:2};//size of this card
                    var d_pos = self.getPrefferedPosToDisplayCard(d_size);//size will set position for next one in future

                    var _card_content = {
                        title:_title,
                        text:self.getRandomText()
                    }
                    var _card_data = {
                        parent:true,
                        default_size:d_size,
                        default_pos: d_pos,
                        card_content: _card_content,
                        model:FM.defaultModel,
                        view:FM.defaultView,
                        sctype:card_props.TYPE.SIMPLE_TEXT 
                    }
                    card_ = FM.actions.add_new_card(_card_data);
                    state.actions.select_this_card(state, card_);
                    return card_;
                }
            },
            add_parent_with_default_title: function(FM){
                var d_size = {w:2, h:2};//size of this card
                var d_pos = self.getPrefferedPosToDisplayCard(d_size);//size will set position for next one in future

                var _card_content = {
                    title:'Parent',
                    text:self.getRandomText()
                }
                var _card_data = {
                    parent:true,
                    default_size:d_size,
                    default_pos: d_pos,
                    card_content: _card_content,
                    model:FM.defaultModel,
                    view:FM.defaultView,
                    sctype:card_props.TYPE.SIMPLE_TEXT 
                }
                card_ = FM.actions.add_new_card(_card_data);
                state.actions.select_this_card(state, card_);
                return card_;
            },
            add_frame: function(frameview_key, title){
                console.log("adding frame");
                if(frameview_key){//frame with frameview_key
                    if('orphan'.indexOf(frameview_key) === 0)self.addFrame({frameview_key:'orphan_frameviewkey_', title:'ORPHAN', bgColor:'darkcyan'});    
                    else if(title) self.addFrame({frameview_key:frameview_key, title:title, bgColor:'darkcyan'});
                    else self.addFrame({frameview_key:frameview_key, title:'Frameview', bgColor:'darkcyan'});
                    
                }
                else{
                    self.addFrame({frameview_key:'home', title:'Home', bgColor:'darkcyan'});
                }
            },
            load_explore_frameview: function(FM, text){
                self.frameviewBeforeExplore = FM.getCurrentFrameviewKeyAndTitle();// {fv_key:'', fv_title:''}
                FM.load_explore_frameview(text);
            },
            unload_explore_frameview: function(FM){
                FM.goto_frameview(self.frameviewBeforeExplore.fv_key, self.frameviewBeforeExplore.fv_title);
                FM.navigation([{key:'home', title: 'Home'}, {key:self.frameviewBeforeExplore.fv_key, title: self.frameviewBeforeExplore.fv_title} ]);
                FM.actions.show_frame_hint(":)");
                // self.frameview.exploring = true; // not required , as while frameview is loaded if it has key 4explore that fv will be exploring or, not otherwise
            },
                
            add_list: function(FM, _title){
                var d_size = {w:2, h:3};//size of this card
                var d_pos = self.getPrefferedPosToDisplayCard(d_size);//size will set position for next one in future
                
                // var l1 = {text:'ashish', on:true};
                // var l2 = {text:'Sir Issac Newton', on:true};
                // var l3 = {text:'Someone else', on:false};
                var _card_content = {
                    title:_title,
                    list:[],
                }
                var _card_data = {
                    default_size:d_size,
                    default_pos: d_pos,
                    card_content: _card_content,
                    model:FM.defaultModel,
                    view:"views/cards/todo.html",
                    non_editable:true,
                    sctype:card_props.TYPE.LIST
                }
                card_ = FM.actions.add_new_card(_card_data);
                state.actions.select_this_card(state, card_);
            },
            add_list_item: function(FM, sel_card, item){
                if(sel_card && sel_card.card_data.sctype === card_props.TYPE.LIST){
                    sel_card.bind_data.list.unshift({text:ko.observable(item), on:ko.observable(false)});
                    FM.actions.save_card_content(sel_card, true);
                }
            },
            generate_card_data: function(w, h, card_content,  view, sctype){
                var d_size = {w:w, h:h};//size of this card
                var d_pos = self.getPrefferedPosToDisplayCard(d_size);//size will set position for next one in future
                
                var _card_data = {
                    default_size:d_size,
                    default_pos: d_pos,
                    card_content: card_content,
                    model:FM.defaultModel,
                    view:view,
                    sctype:sctype,
                }
                return _card_data;
            },

            add_leaf: function(FM, cmd){

                var _title = 'Untitled';
                if(cmd.length > 2){
                    _title = '';
                    for (var i = 2; i < cmd.length; i++) {
                        _title = _title + ' ' + cmd[i];
                    };
                }

                var d_size = {w:3, h:4};//size of this card
                var d_pos = self.getPrefferedPosToDisplayCard(d_size);//size will set position for next one in future
                
                // var l1 = {text:'ashish', on:true};
                // var l2 = {text:'Sir Issac Newton', on:true};
                // var l3 = {text:'Someone else', on:false};
                var _card_content = {
                    title:_title,
                    text:'Start writing here',
                }
                var _card_data = {
                    default_size:d_size,
                    default_pos: d_pos,
                    card_content: _card_content,
                    model:FM.defaultModel,
                    view:"views/cards/leafeditor.html",
                    sctype:card_props.TYPE.LEAF_EDITOR,
                }
                card_ = FM.actions.add_new_card(_card_data);
                state.actions.select_this_card(state, card_);
                return card_;
            },
            add_card_with_title: function(FM, cmd, id){
                var _title = cmd[1].length? cmd[1]:'Card';
                for (var i = 2; i < cmd.length; i++) {
                    _title = _title + ' ' + cmd[i];
                };



                var d_size = {w:2, h:2};//size of this card
                var d_pos = self.getPrefferedPosToDisplayCard(d_size);//size will set position for next one in future

                var _card_content = {
                    title:_title,
                    text:self.getRandomText()
                }
                var _card_data = {
                    default_size:d_size,
                    default_pos: d_pos,
                    card_content: _card_content,
                    model:FM.defaultModel,
                    view:FM.defaultView,
                    sctype:card_props.TYPE.SIMPLE_TEXT 
                }
                card_ = FM.actions.add_new_card(_card_data);
                state.actions.select_this_card(state, card_);
                return card_;
            },
            add_card_with_default_title: function(FM, cmd){
                var d_size = {w:2, h:2};//size of this card
                var d_pos = self.getPrefferedPosToDisplayCard(d_size);//size will set position for next one in future

                var _card_content = {
                    title:'Card',
                    text:self.getRandomText()
                }
                var _card_data = {
                    default_size:d_size,
                    default_pos: d_pos,
                    card_content: _card_content,
                    model:FM.defaultModel,
                    view:FM.defaultView,
                    sctype:card_props.TYPE.SIMPLE_TEXT 
                }
                card_ = FM.actions.add_new_card(_card_data);
                state.actions.select_this_card(state, card_);

                return card_;
            },
            add_card_with_title_and_text: function(FM, title, text){
                if(!FM) FM = self.currentFrame.frameModel;
                if(!text)text = 'no text';
                if(!title)title = 'Untitled';
                var _card_data = self.frameActions.generate_card_data(3, 5, {title:title, text:text},  FM.defaultView , FM.default_sctype);
                _card_data.volatile = true;
                _card_data.non_editable = true;

                card_ = FM.actions.add_new_card(_card_data);
                state.actions.select_this_card(state, card_);
                // return card_;
            },

            add_sw_instance_card: function(instance, dbo_class){
                FM = self.currentFrame.frameModel;
                if(dbo_class === 'dbo:Person'){
                    if(instance.htmltext){
                        instance.text = instance.htmltext;
                        delete instance.htmltext;
                        var _card_data = self.frameActions.generate_card_data(4, 5, instance, 'views/cards/infobox.html' , FM.default_sctype);                  
                    }
                    else{
                        if(!instance.abstract && instance.comment) instance.abstract = instance.comment;
                        if(!instance.depiction && instance.thumbnail) instance.depiction = instance.thumbnail;
                        var _card_data = self.frameActions.generate_card_data(3, 5, instance,  'views/cards/newton.html' , card_props.TYPE.DBO_PERSON);                        
                    }
                    _card_data.volatile = true;
                    _card_data.non_editable = true;

                    card_ = FM.actions.add_new_card(_card_data);
                    state.actions.select_this_card(state, card_);
                    state.dotcards.push(card_);
                }
                // return card_;
            },

            add_volatile_card: function(FM, cmd){
                var _card_data = self.frameActions.generate_card_data(2, 2, {title:'Volatile', text:'This card will not be saved to store'},  FM.defaultView , FM.default_sctype);
                _card_data.volatile = true;
                _card_data.non_editable = true;
                if(cmd.length > 2)_card_data.card_content.title = cmd.slice(2,cmd.length)+ ' ';

                card_ = FM.actions.add_new_card(_card_data);
                state.actions.select_this_card(state, card_);
                // return card_;
            },
            remove_card: function(FM, sel_card){
                if(sel_card){
                    FM.actions.remove_card(sel_card, 'TEMPORARY');
                }
            },
            remove_all_cards: function(FM){
                FM.actions.remove_all_cards();

            },
            copy_card: function(FM, sel_card){
                // if(sel_card && sel_card.id){
                //     var from_fv_key = FM.getCurrentFrameviewKeyAndTitle().fv_key;
                //     state.actions.set_copy_card_ids({from_fv_key:from_fv_key, ids:[sel_card.id]}, state);
                //     console.log('copied', from_fv_key);
                // }
                // 
                // above is id transfer version
                
                state.copied_card = sel_card;

            },
            save_card: function(FM, sel_card){
                if(sel_card){
                    var volatile = sel_card.TYPE.VOLATILE;// save original value
                    sel_card.TYPE.VOLATILE = false;// then we will be able to save, if it was true before
                    FM.actions.save_card_content(sel_card, true);// donot compare
                    sel_card.TYPE.VOLATILE = volatile;// restore its original value
                }
            },
            paste_card: function(FM){
                // var obj = state.actions.get_cut_or_copied_card_id(state);
                //     console.log(obj);
                // if(obj && obj.ids.length && obj.from_fv_key){
                //     var to_fv_key = FM.getCurrentFrameviewKeyAndTitle().fv_key;
                //     if(to_fv_key != obj.from_fv_key){
                //         FM.actions.transfer_cards_between_frameview( obj.ids, obj.from_fv_key, to_fv_key);
                //         FM.actions.load_cards_from_store_to_frameview(obj.ids);
                //         state.actions.set_copy_card_ids(null, _state);
                //         // removed the copied element or its possible to paste it every where
                //         // 
                //     }
                // }
                // // above is id transfer version
                // 
                if(state.copied_card) FM.actions.clone_card_and_save(state.copied_card);
            },
                    
            delete_card: function(FM, sel_card){
                    if(sel_card){
                        FM.actions.remove_card(sel_card, 'PERMANENT');
                    }
            },

            show_settings: function(FM){
                console.log("settings config");
                FM.actions.add_new_card({
                    title:'Settings:Config',
                    settings:{config:FM.frame_config, config_map:FM.frame_config_map},
                    volatile:true
                });
                // console.log({config:FM.frame_config, config_map:FM.frame_config_map});
            },
            show_all_cards: function(){
                self.addFrame({frameview_key:'show_all_cards_frameview_key', title:'All Cards', bgColor:'darkcyan'});
            },
            exit: function(){
                self.removeCurrentFrame();
            },
            trigger_selected_parent: function(FM, sel_card){
                if(sel_card)FM.trigger_parent(sel_card);
            },

            add_image_card: function(FM, src){
                if(src.length > 500)return;// don't aloow large file names
                var img_url = "<img src=\""+  src +"\" alt=\"Image\" style=\" width:100%;\">";
                console.log('image found');

                var d_size = {w:3, h:3};//size of this card
                var d_pos = self.getPrefferedPosToDisplayCard(d_size);//size will set position for next one in future

                var _card_content = {
                    title:'Untitled',
                    text:img_url,
                }
                var _card_data = {
                    default_size:d_size,
                    default_pos: d_pos,
                    card_content: _card_content,
                    model:FM.defaultModel,
                    view:FM.defaultView,
                    sctype:card_props.TYPE.SIMPLE_TEXT,
                }
                card_ = FM.actions.add_new_card(_card_data);
                state.actions.select_this_card(state, card_);

                
            },
            set_image_of_selected_card: function(FM, sel_card, src){
                if(src.length > 500)return;// don't aloow large file names
                if(sel_card && sel_card.bind_data.text){
                    var img_url = "<img src=\""+  src +"\" alt=\"Image\" style=\" width:100%;\">";
                    sel_card.bind_data.text(img_url);
                    FM.actions.save_card_content(sel_card, true);
                }
            },
            set_text_of_selected_card: function(FM, sel_card, _text){
                var _cd = sel_card;
                if(_cd){// _cs is definitely an array
                    if(_cd.bind_data.text){// not everyone has text
                        if(_text.match(/^https?:\/\//)){
                            _text = "<a  href=\"" + _text + "\" target=\"_blank\">" + _text+ "</a>";
                        }                            
                         _cd.bind_data.text(_text);
                        FM.actions.save_card_content(_cd, true);
                    }
                }
            },
            set_default_view: function(FM, text){
                var sel_id = self.selectedCommandId();
                if(sel_id > -1 && sel_id < interpreter.stringFilters.length){
                    var view_id = parseInt(interpreter.stringFilters[sel_id].view_id);
                    if(view_id != undefined && view_id > -1 && view_id < interpreter.knockoutViewList.length){
                        FM.defaultView = interpreter.knockoutViewList[view_id];
                        console.log(FM.defaultView);
                    }
                }
            },
            add_text_to_selected_card: function(FM, sel_card, _text){
                var _cd = sel_card;
                if(_cd){// _cs is definitely an array
                    if(_cd.bind_data.text){// not everyone has text
                        if(_text.match(/^https?:\/\//)){
                            _text = "<a  href=\"" + _text + "\" target=\"_blank\">" + _text+ "</a>";
                        }
                        
                        _cd.bind_data.text(_cd.bind_data.text() + "<div>"+_text+ "</div>");
                        FM.actions.save_card_content(_cd, true);
                    }
                }
            },
            add_json_to_selected_card: function(FM, sel_card, _text){
                var _cd = sel_card;
                if(_cd){// _cs is definitely an array
                    if(_cd.bind_data.text){// not everyone has text
                        try {
                            _text = "<pre>"+interpreter.preetyJson.print($.parseJSON(_text))+ "</pre>";
                        }
                        catch(err) {
                            FM.actions.show_card_hint(sel_card, "Error in json string", 2500);
                            _text = "<pre>"+ _text +"</pre>";
                        }
                        if(_cd.bind_data.text){
                            _cd.bind_data.text(_cd.bind_data.text() + _text);
                            FM.actions.save_card_content(_cd, true);
                        }
                    }
                }
            },

            direct_sparql_query: function(FM, sel_card, query){
                var endpoint = 'http://dbpedia.org/sparql';
                if(!query || query.length < 6) query = "SELECT ?s WHERE {?s ?p ?o} LIMIT 10";
                var queryUrl = endpoint + "?query="+ encodeURIComponent(query) +"&format=json";
                $.ajax({
                    dataType: 'json',
                    url: queryUrl,
                    success: function(data) {
                        if(data.results){
                            if(sel_card){
                                var text = "<pre>"+interpreter.preetyJson.print(data.results.bindings)+ "</pre>";
                                if(sel_card.bind_data.text){
                                    sel_card.bind_data.text(text);  
                                    FM.actions.save_card_content(sel_card, true);
                                }
                            }
                            else{
                                console.log(data.results.bindings);
                            }

                        }
                        else console.log(data);
                    }
                });
            }, 
                            
            set_password_for_selected_card: function(FM, sel_card, _pass){
                var _cd = sel_card;
                if(_cd && _cd.TYPE.PARENT){
                    if(_pass.length){
                        _cd.card_data.password = _pass;
                        FM.actions.save_card_content(_cd, true);
                    }
                    else{
                        delete _cd.card_data.password;
                        delete _cd.restricted;
                        FM.actions.save_card_content(_cd, true);   
                    }
                }
            },
            make_selected_card_nonremovable: function(FM, sel_card){
                if(sel_card){
                    sel_card.card_data.non_removable = true;
                    FM.actions.save_card_content(sel_card, true);  
                }
            },
            make_selected_card_removable: function(FM, sel_card){
                if(sel_card){
                    delete sel_card.card_data.non_removable;
                    FM.actions.save_card_content(sel_card, true);  
                }
            },
            set_title: function(FM, sel_card, title){
                if(sel_card){
                    sel_card.bind_data.title(title);
                    FM.actions.save_card_content(sel_card, true);
                }
            },
            add_iframe_from_src: function(FM, src){
                if(src.length>1){
                    var _iframe = "<iframe width=\"100%\" height=\"auto\" src=\""+  src +"\"  style=\" \"></iframe>";

                    var d_size = {w:6, h:6};//size of this card
                    var d_pos = self.getPrefferedPosToDisplayCard(d_size);//size will set position for next one in future

                    var _card_content = {
                        title:'Untitled',
                        text:_iframe,
                    }
                    var _card_data = {
                        default_size:d_size,
                        default_pos: d_pos,
                        card_content: _card_content,
                        model:FM.defaultModel,
                        view:FM.defaultView,
                        sctype:card_props.TYPE.SIMPLE_TEXT,
                    }
                    card_ = FM.actions.add_new_card(_card_data);
                    state.actions.select_this_card(state, card_);

                    // return card_;
                }
            },

            embed_youtube_link: function(FM, link){
                var lnk = link.split('v=');
                if(lnk.length>1){
                    var embed_url = "<iframe width=\"600\" height=\"300\" src=\"https://www.youtube.com/embed/"+ lnk[1].replace('&', '?') +"\" frameborder=\"0\" allowfullscreen></iframe>";
                    
                    var d_size = {w:6, h:5};//size of this card
                    var d_pos = self.getPrefferedPosToDisplayCard(d_size);//size will set position for next one in future

                    var _card_content = {
                        title:'Untitled',
                        text:embed_url,
                    }
                    var _card_data = {
                        default_size:d_size,
                        default_pos: d_pos,
                        card_content: _card_content,
                        model:FM.defaultModel,
                        view:FM.defaultView,
                        sctype:card_props.TYPE.SIMPLE_TEXT,
                        non_resizable: true,
                    }

                    card_ = FM.actions.add_new_card(_card_data);
                    state.actions.select_this_card(state, card_);
                    // return card_;
                }
            },
            embed_img_link: function(FM, src){
                if(src.length > 500)return;// don't aloow large file names
                var img_url = "<img src=\""+  src +"\" alt=\"Image\" style=\" width:100%;\">";
                console.log('image found');
                
                var d_size = {w:3, h:3};//size of this card
                var d_pos = self.getPrefferedPosToDisplayCard(d_size);//size will set position for next one in future

                var _card_content = {
                    title:'Untitled',
                    text:img_url,
                }
                var _card_data = {
                    default_size:d_size,
                    default_pos: d_pos,
                    card_content: _card_content,
                    model:FM.defaultModel,
                    view:FM.defaultView,
                    sctype:card_props.TYPE.SIMPLE_TEXT,
                }
                card_ = FM.actions.add_new_card(_card_data);
                state.actions.select_this_card(state, card_);
            },

            check_value: function(name, obj){
                if(obj){
                    self.frameActions.add_command({title:name+ ': True', desc:""});
                }
                else{
                    self.frameActions.add_command({title:name+ ': False', desc:""});
                }
            },
            show_value: function(name, value){
                self.frameActions.add_command({title:name+ ': ' + value.toString() , desc:""});
            },
            toggle_editable: function(FM, sel_card){
                if(sel_card){
                    if(sel_card.card_data.sctype === card_props.TYPE.LIST)return;
                    if(sel_card.TYPE.EDITABLE) {
                        sel_card.TYPE.EDITABLE = false;
                        FM.actions.show_card_hint(sel_card, "Now Not Editable");
                    }
                    else{
                        sel_card.TYPE.EDITABLE = true;
                        if(sel_card.TYPE.VOLATILE) FM.actions.show_card_hint(sel_card, "Now  Editable, but it's volatile. So it can't be saved, remove volatileness to save it");
                        else FM.actions.show_card_hint(sel_card, "Now  Editable");
                    }
                    FM.actions.save_card_content(sel_card, true);
                }
            },

            remove_volatile: function(FM, sel_card){
                if(sel_card){
                    sel_card.TYPE.VOLATILE = false;
                    FM.actions.show_card_hint(sel_card, "Now Non Volatile");
                    FM.actions.save_card_content(sel_card, true);
                }
            },

            add_command: function(cmd){
                self.commands.push(cmd);
                self.commandSuggestions.removeAll();
                self.commandSuggestions.push(cmd);
            },
            remove_commands: function(){
                self.commands = [];
                // interpreter.filteredCardTitles = [];
                // interpreter.queryQuestions = [];
                // interpreter.queryAnswers = [];
            },

            set_explore_context_in_navigation_ui : function(uiContextLabels) {
                var FM = self.currentFrame.frameModel;
                if(FM.frameview.exploring){
                    var navs = [{key:'home', title: 'Home'}, {key:'$explore', title: '$explore'} ];
                    for (var i = 0; i < uiContextLabels.length; i++) {
                        if(uiContextLabels[i].text) navs.push({key:null, title: uiContextLabels[i].text});
                    }
                    if(navs.length > 2) FM.navigation(navs);
                }
            },
            show_frame_hint : function(framehint, timeout) {
                self.currentFrame.frameModel.actions.show_frame_hint(framehint, timeout);
            },

            set_sparql_cmd_suggestions: function(c1){
                var values = self.dataDump['endpoint'];
                var curr_endpoint = '?';
                var all_possible = '';
                if(values){
                    all_possible = '<div>&nbsp;&nbsp;&nbsp;'+values.possible.join('</div><div>&nbsp;&nbsp;&nbsp;')+'</div>';
                    curr_endpoint = values.value;
                }
                else{
                    interpreter.askForValue({id:'endpoint'});
                }
                self.frameActions.add_command({title:'set sparql endpoint to: ' + "\"" + c1 + "\"", desc:'current endpoint at: '+ curr_endpoint +' <div>All possible: </div>'+ all_possible +' <div>cmd: setsparqlendpoint<div>'});
            }


        };
        this.searchSubmit = function(commit){// commit is a complete misnomer , its actauly a dom element
            if(self.framesData().length){
                FM = self.framesData()[0].frameModel;
            }
            else {
                self.addFrame({frameview_key:'home', title:'Home', bgColor:'darkcyan'});
                return;// return or if the command is add frame it will be added again
                    //in fact it will return in the check bellow
            }
            if(!FM)return;

            var exploring = FM.frameview.exploring;
            var command_str = $commandInput.val();
            self.commandInputVal = command_str;// for global use
            state.dot = (command_str.match(/\./g) || []).length;

            // command_str = command_str.replace('.','');
            if(command_str && command_str.length){
                var cmd = command_str.replace(/\s+/g, " ").split(" ");


                if(exploring){
                    if(commit){
                        if(command_str === 'exit'){
                            self.frameActions.unload_explore_frameview(FM);// loads the frameview which was there before explore frameview wa loded
                        }
                        else if(command_str === 'add frame'){
                            self.frameActions.add_frame();
                        }
                        else if(command_str === 'clear'){
                            self.remove_all_cards(FM);
                        }
                    }
                    else interpreter.explore(command_str);
                }


                else if(cmd[0].length && (cmd[0][0] != ';' )){// command
                    var ctx = {}
                    ctx.sel_card = state.actions.get_primary_selected_card(state);
                    if(ctx.sel_card){
                        ctx.isparent = (ctx.sel_card.TYPE.PARENT);
                        ctx.islist = (ctx.sel_card.card_data.sctype === card_props.TYPE.LIST);                    
                    }
                    var c0 = cmd[0].toLowerCase();
                    var c1 = cmd.length>1?cmd[1].toLowerCase():null;
                    if ('add'.indexOf(c0) === 0){
                        if(cmd.length > 1 && cmd[1].length){
                            var c1 = cmd[1].toLowerCase();
                            if( 'parent'.indexOf(c1) === 0){//parent
                                if(cmd.length > 2 && cmd[2].length){//parent with title
                                    if(!commit) self.frameActions.add_command({title:'add parent', desc:'add a card with title \"' + cmd.slice(2, cmd.length).join(' ')+ '\"' });
                                    else self.frameActions.add_parent_with_title(FM, cmd);
                                }
                                else{// just parent
                                    if(!commit) self.frameActions.add_command({title:'add parent', desc:'add a parent card named \"Parent\"'});
                                    else self.frameActions.add_parent_with_default_title(FM);
                                }
                            }
                            else if('frame'.indexOf(c1) === 0){//new frame
                                if(!commit) self.frameActions.add_command({title:'add frame', desc:''});
                                else if(cmd.length>2 && cmd[2].length > 2) self.frameActions.add_frame(cmd[2]);
                                else self.frameActions.add_frame();
                            }
                            else if('li'.indexOf(c1) === 0 && ctx.islist){// a list item
                                if(!commit) self.frameActions.add_command({title:'add list item', desc:'add a non editable list'});
                                else self.frameActions.add_list_item(FM, ctx.sel_card, cmd.slice(2,cmd.length).join(' '));
                            }
                            else if('list'.indexOf(c1) === 0){// a list
                                if(!commit) self.frameActions.add_command({title:'add list', desc:'add a non editable list'});
                                else self.frameActions.add_list(FM, cmd.slice(2,cmd.length).join(' '));
                            }
                            else if('leaf'.indexOf(c1) === 0){// a leaf_editor
                                if(!commit) self.frameActions.add_command({title:'add leaf', desc:'add the leaf edtor'});
                                else self.frameActions.add_leaf(FM, cmd);
                            }
                            else if('volatile'.indexOf(c1) === 0){
                                if(!commit) self.frameActions.add_command({title:'add volatile', desc:'add a volatile card, It will not persist'});
                                else self.frameActions.add_volatile_card(FM, cmd); // cmd not used
                            }
                            else{//card with given title
                                // if(!commit) interpreter.resolve_pattern('add', '[title]', cmd.slice(1,cmd.length).join(' '));
                                if(!commit) interpreter.getMatchedTitles('add', '[title]', cmd.slice(1,cmd.length).join(' '));
                                else {
                                    var sel_id = self.selectedCommandId();
                                    if(sel_id > -1 && sel_id < interpreter.filteredCardTitles.length){
                                        var card_id = interpreter.filteredCardTitles[sel_id].card_id;
                                        if(card_id){
                                            FM.actions.load_cards_from_store_to_frameview([card_id]);
                                        }
                                        else{// card title doesn't exist a new one will be created
                                            self.frameActions.add_card_with_title(FM, cmd);
                                        }
                                    }
                                    else{// card title doesn't exist a new one will be created
                                        self.frameActions.add_card_with_title(FM, cmd);
                                    }
                                }
                            }

                                            
                                        
                        }
                        else{
                            if(!commit) self.frameActions.add_command({title:'add *', desc:'add a card named \"Card\"'});
                            else card_ = self.frameActions.add_card_with_default_title(FM, cmd);
                        }
                    }
                    else if('save'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'save', desc:'Will save this card  (even if it is volatile)'});
                        else self.frameActions.save_card(FM, ctx.sel_card);
                    }
                    else if('remove'.indexOf(c0) === 0){
                        if(cmd.length > 1){
                            if(c1.length && 'li'.indexOf(c1) === 0 && ctx.islist){// a list item
                                if(!commit) self.frameActions.add_command({title:'remove list item', desc:'remove List item'});
                                // else self.frameActions.remove_list_item(FM, ctx.sel_card, cmd.slice(2,cmd.length).join(' '));
                            }
                        }
                        else{
                            if(!commit) self.frameActions.add_command({title:'remove', desc:'Remove selected card'});
                            else self.frameActions.remove_card(FM, ctx.sel_card);
                        }
                            
                    }
                    else if('copy'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'copy', desc:'Copy selected card'});
                        else self.frameActions.copy_card(FM, ctx.sel_card);
                    }
                    else if('clear'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'remove all cards', desc:'Volatile cards will be removed for ever- cmd:clear'});
                        else self.frameActions.remove_all_cards(FM);
                    }
                    else if('paste'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'paste', desc:'Paste copied card into frameview'});
                        else self.frameActions.paste_card(FM);
                    }
                    else if('delete'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'delete', desc:'Delete selected card, You can\'t undo this action. Write full command'});
                        else if(c0.length === 6) self.frameActions.delete_card(FM, ctx.sel_card);
                    }
                    else if('go'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'go', desc:'Enter inside this card'});
                        else self.frameActions.trigger_selected_parent(FM, ctx.sel_card);
                    } 
                    else if('image'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'image ', desc:'add an image card'});
                        else if(c1 && c1.length < 100) self.frameActions.add_image_card(FM, c1);
                    }
                    else if('setimage'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'setimage ', desc:'Set background image of this card'});
                        else if(c1 && c1.length < 100) self.frameActions.set_image_of_selected_card(FM, ctx.sel_card, c1);
                    }
                    else if('settext'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'settext ' + "\"" + cmd.slice(1, cmd.length).join(" ") + "\"", desc:'set text '});
                        else if(c1) self.frameActions.set_text_of_selected_card(FM, ctx.sel_card, cmd.slice(1, cmd.length).join(" "));
                    }
                    else if('setview'.indexOf(c0) === 0){
                        if(!commit){
                            self.frameActions.add_command({title:'set default view for this session', desc:'cmd: setview'});
                            if(c1) interpreter.getMatchedViews(c1);
                        }
                        else if(c1){
                            self.frameActions.set_default_view(FM, c1);
                        }
                    }
                    else if('setsparqlendpoint'.indexOf(c0) === 0){
                        if(!commit){
                            self.frameActions.set_sparql_cmd_suggestions(c1);
                        }
                        else if(c1){
                            interpreter.setValueRequest({id:'endpoint', value:c1});
                            delete self.dataDump['endpoint'];
                        }
                    }
                    else if('addtext'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'addtext ' + "\"" + cmd.slice(1, cmd.length).join(" ") + "\"", desc:'add text '});
                        else if(c1) self.frameActions.add_text_to_selected_card(FM, ctx.sel_card, cmd.slice(1, cmd.length).join(" "));
                    }
                    else if('addjson'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'addjson', desc:'add json ' + "\"" + cmd.slice(1, cmd.length).join(" ") + "\""});
                        else if(c1) self.frameActions.add_json_to_selected_card(FM, ctx.sel_card, cmd.slice(1, cmd.length).join(" "));
                    }
                    else if('sparql'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'SPARQL', desc:'query  :  ' + "\"" + cmd.slice(1, cmd.length).join(" ") + "\""});
                        else if(c1) self.frameActions.direct_sparql_query(FM, ctx.sel_card, cmd.slice(1, cmd.length).join(" "));
                    }
                    else if('setpassword'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'setpassword', desc:'Setpassword'});
                        else if(c1) self.frameActions.set_password_for_selected_card(FM, ctx.sel_card, c1);
                    }
                    else if("isnonremovable".indexOf(c0) === 0){
                        if(!commit) self.frameActions.check_value('isnonremovable', ctx.sel_card.card_data.non_removable);
                    }                        
                    else if("settitle".indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'settitle ' + "\"" + cmd.slice(1, cmd.length).join(" ") + "\"", desc:'Set this card\'s title to:'});
                       else if(c1) self.frameActions.set_title(FM, ctx.sel_card, cmd.slice(1, cmd.length).join(" "));
                        
                    }
                    else if('settings'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'settings', desc:'Update your settings'});
                        else self.frameActions.show_settings(FM);
                    }
                    else if('seeallcards'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'seeallcards', desc:'load alll cards in a new frameview. It will load all the cards'});
                        else self.frameActions.show_all_cards();
                    }
                    else if("iframe".indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'iframe ' + "\"" + cmd.slice(1, cmd.length).join(" ") + "\"", desc:'Add an I frame with given source url'});
                        else if(c1) self.frameActions.add_iframe_from_src(FM, c1);
                    }
                    else if("makenonremovable".indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'makenonremovable', desc:"Make this a non removable card, useful for most important tcards , so that you don\'t remove them by mistake"});
                        else self.frameActions.make_selected_card_nonremovable(FM, ctx.sel_card);
                    }
                    else if("deletenonremovable".indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'deletenonremovable', desc:"Remove non_removable when You absolutely have to remove this"});
                        else self.frameActions.make_selected_card_removable(FM, ctx.sel_card);
                    }
                    else if("explore".indexOf(c0) === 0){
                        // if(!commit) self.frameActions.add_command({title:'Explore', desc:cmd.slice(1, cmd.length).join(" ")});
                        // else interpreter.explore(cmd.slice(1, cmd.length).join(" "));
                        if(!commit){
                            if(!interpreter.queryAnswers.length) self.frameActions.add_command({title:'Explore', desc:cmd.slice(1, cmd.length).join(" ")+ '  cmd:explore'});
                            interpreter.explore(cmd.slice(1, cmd.length).join(" "));
                        } 
                        else{
                            self.frameActions.load_explore_frameview(FM, cmd.slice(1, cmd.length).join(" "));
                        }
                    } 
                    else if("$echoid".indexOf(c0) === 0){
                        if(!commit) self.frameActions.show_value('id', ctx.sel_card.id);
                    } 
                    else if("toggleeditable".indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'Toggle Editable', desc:'cmd: toggleeditable'});
                        else self.frameActions.toggle_editable(FM, ctx.sel_card);
                    } 
                    else if('exit'.indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'exit', desc:'Close all cards and frames, Just close everything and sleep'});
                        else self.frameActions.exit();
                    }
                    else if("removevolatile".indexOf(c0) === 0){
                        if(!commit) self.frameActions.add_command({title:'Remove Volatileness, to save this card', desc:'cmd: removevolatile'});
                        else self.frameActions.remove_volatile(FM, ctx.sel_card);
                    } 
                    else if(c0.indexOf('http') === 0){// some url is given
                        if(c0.indexOf('youtube.com') > 1){// an youtube url
                            if(!commit) self.frameActions.add_command({title:'embed youtube video', desc:'Embed a youtube video with url: ' + "\"" + c0 + "\""});
                            else self.frameActions.embed_youtube_link(FM, c0);
                        }//youtube

                        else if(c0.match(/\.(jpg|png|gif|JPG)$/)) {
                            if(!commit) self.frameActions.add_command({title:'embed image', desc:'Embed an image with src: ' + "\"" + c0 + "\""});
                            else self.frameActions.embed_img_link(FM, c0);
                        }
                            
                    }
                    else{// doesn't match anything
                        console.log('no match')
                        self.frameActions.remove_commands();
                        self.commandSuggestions.removeAll();
                    }

                    //Select
                    if('select'.indexOf(c0) === 0 && c0.length > 2){
                        FM.show_all_card_label(true);
                        if(!commit) self.frameActions.add_command({title:'select', desc:"Select a card by Index, eg. \'sel4\' to select card with index 4"});
                    }
                    else{
                        var match = command_str.toLowerCase().match(/sele?c?t?(\d+)\.?(\d+)?/);
                        if(match && match.length>1){
                            ind = parseInt(match[1])-1;
                            if(ind < FM.cards().length){
                                var _card = FM.cards()[ind];
                                state.actions.select_this_card(state, _card);
                                FM.actions.show_card_hint(_card, 'Selected');
                            }
                        }
                        if(FM.show_all_card_label())FM.show_all_card_label(false);
                    }
                }
                else if(cmd[0][0] == ';'){
                    var c0 = cmd[0].slice(1,cmd[0].length).toLowerCase();
                    var q = cmd.slice(1, cmd.length).join(" ");
                    interpreter.onlineCommandSearch(c0, q);
                }

                else{// search with space(" ")
                    if(!commit) self.frameActions.add_command({title:'Search', desc:'Search for anything. well, almost anything. But there is no guarantee that you will find it'});
                }

                if(commit){
                    $commandInput.val('');
                }
            }//if(cmd_str...
            else{
                // console.log('command_str', command_str);
                self.commandSuggestions.removeAll();

                if(FM.show_all_card_label())FM.show_all_card_label(false);
            }

        };
        this.updatedPreviousCardPosSize = function(x, y, w, h){
            self.previousCardPosSize.x = x;
            self.previousCardPosSize.y = y;
            self.previousCardPosSize.w = w;
            self.previousCardPosSize.h = h;
        };
        this.send_msg_to_background= function(type, msg){
            chrome.runtime.sendMessage(
                {
                    type:type,
                    msg:msg
                }
            );
        };
        this.activate = function(){
            self.createNewBindings();
            self.attachedChromeEventListener();
            self.send_msg_to_background('GET_DATA_ELEMENT', {id:'LAST_USED_FRAMEVIEW_KEY'});
            self.send_msg_to_background('GET_ALL_CARD_AND_FRAMEVIEW_TITLES', {});
            setTimeout(function(){
                if(!self.framesData().length){
                    self.on_start('home', 'Home');
                }
            }, 2000);
        };
        this.attachedChromeEventListener = function(){
            chrome.runtime.onMessage.addListener(
              function(request, sender, sendResponse) {
                if(request.type == 'FRAMEVIEW_HAS_CHANGED'){
                    var fv_key = request.frameview_key;
                    var key_list = self.frameviews_to_update_when_tab_focused;
                    if($.inArray(fv_key, key_list)<0){//fv_key doesn't exists
                        key_list.push(fv_key);
                    }
                }
                else if(request.type == 'FRAMEVIEW_WAS_REMOVED'){
                    var fs_data = self.framesData();
                    var removed_fv_key = request.frameview_key;
                    for (var i = fs_data.length - 1; i >= 0; i--) {// go through each frame
                        var curr_fv_key = fs_data[i].frameModel.frameview.key();// current frameview_key in this frame
                        if(curr_fv_key == removed_fv_key){//the removed one exist in this tab
                            
                            fs_data[i].frameModel.actions.remove_frameview_from_frame();//@? do you have to do this
                            self.framesData.remove(fs_data[i]);
                        }

                    }
                }
                else if(request.type == 'UPDATE_CHANGED_FRAMES_NOW'){// this tab just got focused updated the changes in frames if any
                    self.update_changed_frames_now();
                }


                //*****************************************************
                else if(request.type == 'REPLYOF_SEARCH_STORE'){
                    request.msg.search_results.forEach(function(obj){
                        console.log('found:', obj);
                    });
                }
                //*****************************************************
                else if(request.type == 'LAST_USED_FRAMEVIEW_KEY'){
                    if(request.msg.data && request.msg.data.fv_key && request.msg.data.fv_title){
                        self.on_start(request.msg.data.fv_key, request.msg.data.fv_title);
                    }
                    else{
                        self.on_start('home', 'Home');
                    }
                        
                }
                else if(request.type === 'REPLYOF_GET_ALL_CARD_AND_FRAMEVIEW_TITLES'){
                    if(request.msg.data && request.msg.data.card_titles && request.msg.data.frameview_titles){
                        var data = request.msg.data;
                        interpreter.on_start(data);
                    }
                    else{// request.msg.data could be null
                        // it will create and send again
                    }
                        
                }

                else if(request.type == 'REPLYOF_MIXED_CONTENT_CALLBACK'){
                    console.log(request.msg.json.results);
                    if(request.msg && request.msg.json){
                        if(request.msg.json.results && request.msg.json.results.length){
                            // self.commandSuggestions().splice(10, self.commandSuggestions().length);
                            self.commandSuggestions.removeAll();//clear suggestions
                            var bind_data = {};
                            $.each(request.msg.json.results, function(i, item){
                                bind_data.title = item.label;
                                bind_data.desc = item.description;
                                if(bind_data.title)self.commandSuggestions.unshift(bind_data);
                            });
                        }
                    }
                }
                
                //*****************************************************
                //*****************************************************
                else if(request.type == 'SW:ANSWER_FROM_BACK'){
                    if(request.msg.answers.length){
                        //request.msg.answers:{id:'im34nxls', answers:[], source:''}
                        interpreter.queryAnswers = request.msg.answers;
                        if(request.msg.uiid > -1) self.selectedCommandId(request.msg.uiid);
                        // console.log(self.selectedCommandId());
                        self.emit_valid_commands_changed();
                    }
                        
                }

                else if(request.type === 'SW:CLASS_SUGGESTIONS' || request.type === 'SW:PREDICATE_SUGGESTIONS'){
                    if(request.msg.answers.length){
                        interpreter.queryAnswers = request.msg.answers;
                        self.emit_valid_commands_changed();
                    }
                }

                else if(request.type === 'SW:CLASS_OBJECT_INSTANCES' || request.type === 'SW:CLASS_OBJECT_SUGGESTIONS'){
                    if(request.msg.answers.length){
                        if(request.msg.uiid > -1) self.selectedCommandId(request.msg.uiid);
                        interpreter.queryAnswers = request.msg.answers;
                        self.emit_valid_commands_changed();
                    }
                }

                else if(request.type === 'SW:INSTANCE_CARDS'){
                    if(request.msg.instanceCards.length){
                        var icards = request.msg.instanceCards;
                        var dbo_class = request.msg.dbo_class;
                        console.log(icards);
                        for (var i = 0; i < icards.length; i++) {
                            self.frameActions.add_sw_instance_card(icards[i], dbo_class);
                        }
                    }
                }

                else if(request.type == 'SW:UI_CONTEXT_LABEL'){
                    if(request.msg.uiContextLabels.length){
                        self.frameActions.set_explore_context_in_navigation_ui(request.msg.uiContextLabels);
                    }
                }
                else if(request.type == 'SW:UI_FRAME_HINT'){
                        self.frameActions.show_frame_hint(request.msg.framehint);
                }

                //*****************************************************
                //*****************************************************
                
                else if(request.type == 'SW:HIDDEN_WEB_ANSWERS_FACTBITES'){
                    if(request.msg.answers.length){
                        // interpreter.queryAnswers = request.msg.answers;
                        // self.emit_valid_commands_changed();

                        var answers = request.msg.answers;
                        for (var i = 0; i < answers.length; i++) {
                            self.frameActions.add_card_with_title_and_text(null , 'Factbites', answers[i].html);
                        }
                    }
                        
                }

                //*****************************************************
                //*****************************************************
                
                else if(request.type == 'SW:REPLY_OF_ASKED_VALUES'){
                    var values = request.msg.values;
                    if(values.id) self.dataDump[values.id] = values;
                    // self.frameActions.add_command({title:values.name, desc:values.value});
                    // self.emit_valid_commands_changed();
                }
                //*****************************************************
                //*****************************************************
            });
        }
        this.attached = function(){
            $commandForm = $('#commandForm');
            if(!$commandForm){
                setTimeout(function(){
                    $commandForm = $('#commandForm');
                },1000);
            }
            $commandInput = $('#commandInput');
            if(!$commandInput){
                setTimeout(function(){
                    $commandInput = $('#commandInput');
                },1000);
            }
            $commandSuggestions = $('#commandSuggestions');
            if(!$commandSuggestions){
                setTimeout(function(){
                    $commandSuggestions = $('#commandSuggestions');
                },1000);
            }

            // hide whenever out of focus
            // $commandInput.blur(function(){
            //     $commandForm.hide(100);
            // });

            // $(document).keypress(function(e) {
            //     self.someKeyPressed(e);
            //     return true;
            // });
            $(document).keyup(function(event) {
                self.someKeyUp(event);
                return true;
            });


            // to remove default behaviour of up and down array key, which make the cursor jump from one end to another
            $commandInput.keydown(function(e){
               if(e.which == 38 || e.which == 40){
                   e.preventDefault();

               }
            });

            //because keydown event was not being fired in in document event listener
            window.addEventListener('keydown', function(event){
                if(event.keyCode == 16){//shift
                    state.keyboard.shift_down = true;
                    //console.log('shift pressed');
                }
                else if(event.keyCode == 17){//ctrl
                    state.keyboard.ctrl_down = true;
                    //console.log('ctrl pressed');
                }
                else if(event.keyCode == 18){//alt
                    state.keyboard.alt_down = true;
                    //console.log('alt pressed');
                }

                    

                return true;
            });


        };
        this.on_start = function(fv_key, fv_title){
            if(!self.framesData().length){// add only if no ther frame exists
                self.addFrame({frameview_key:fv_key, title:fv_title,  bgColor:'bisque'});
            }
            // self.addFrame({frameModel:null, viewModel:"viewmodels/frame", bgColor:'cadetblue'});
        }

        this.update_changed_frames_now = function(){//every time this tab is active this is called
            var fs_data = self.framesData();
            var key_list = self.frameviews_to_update_when_tab_focused;
            for (var i = fs_data.length - 1; i >= 0; i--) {// go through each frame
                fv_key = fs_data[i].frameModel.frameview.key();// current frameview_key in this frame
                if($.inArray(fv_key, key_list)>-1){//this frameview has been changed and hence it exist in the list
                    fs_data[i].frameModel.reload_frameview();
                }

            }
            self.frameviews_to_update_when_tab_focused = [];
        };

        this.frameClicked = function(data, event){
            if($(event.target).hasClass('removeFrame')){
                self.removeFrame(data, event);
            }
        };
        this.removeFrame = function(data, event){
            var $frame = $(event.target).parent().parent().parent();
            $frame.slideToggle(100, function(){
                data.frameModel.actions.remove_frameview_from_frame();//@? do you have to do this
                self.framesData.remove(data);
                self.adjustCurrentFrame();

                data.frameModel.actions.remove_chrome_message_listener();
            })

        };
        
        this.removeCurrentFrame = function(){
            if(self.framesData().length){
                var fdata = self.framesData()[0];
                var $frame = $('#frame_root_'+ fdata.frameID);
                $frame.slideToggle(100, function(){
                    fdata.frameModel.actions.remove_frameview_from_frame();//@? do you have to do this
                    self.framesData.remove(fdata);
                
                    self.adjustCurrentFrame();
                    fdata.frameModel.actions.remove_chrome_message_listener();
                });
                
            }
        }
        this.beforeRemoveCommandSuggestions = function(elem){
            if (elem.nodeType === 1) $(elem).slideUp(function() { $(elem).remove(); });            
            console.log('adding something');
        }
        this.afterAddCommandSuggestions = function(elem) {
            if (elem.nodeType === 1) $(elem).hide().slideDown();
        }
        this.emit_valid_commands_changed=function(){

            
            if(interpreter.filteredCardTitles.length)self.commandSuggestions(interpreter.filteredCardTitles);
            else if(interpreter.stringFilters.length)self.commandSuggestions(interpreter.stringFilters);
            else if(interpreter.queryAnswers.length){
                    
                self.commandSuggestions(interpreter.queryAnswers);  
                // self.commandSuggestions().splice(nos, self.commandSuggestions().length);
            }

            self.maxSelectedCommandId = 0;
            cmds  = self.commandSuggestions();
            self.maxSelectedCommandId = 0;
            for (var i = 0; i < cmds.length; i++) {
                if(cmds[i].id)self.maxSelectedCommandId++;
            }

            // self.selectedCommandId(0);// don't do it here as message from background wil send a previously used id
                                        // instead check that that no is still valid
            if(self.selectedCommandId() < self.maxSelectedCommandId+1 && self.selectedCommandId() > -1);// +1 is necessary otherwise the last element is never selected
                                                                                                        // this is because self.maxSelectedCommandId is somehow greater than all element with ids' count
            else self.selectedCommandId(0);
            
        };
    
            
        this.removeFrameByObject = function(frameData){
            frameData.frameModel.actions.remove_frameview_from_frame();//@? do you have to do this
            self.framesData.remove(frameData);
            self.adjustCurrentFrame();
            frameData.frameModel.actions.remove_chrome_message_listener();
        }
        
        this.adjustCurrentFrame = function(){
            if(self.framesData().length)self.currentFrame = self.framesData()[0];
            else self.currentFrame = null;
        }

        //Utility
        this.getPrefferedPosToDisplayCard = function(d_size){
            var d_pos = {x:(self.previousCardPosSize.x+self.previousCardPosSize.w)%12, y:0};//to be used next time when a card is being used
                            //12 is horizontal unit size of the grid
                            // if that is changed it also has to be changed
            if(d_pos.x + d_size.w > 12) d_pos.x = 0;// 
            if(self.currentFrame.frameModel.frameview.ids.length === 0) d_pos.x = 0;

            self.updatedPreviousCardPosSize(d_pos.x, d_pos.y, d_size.w, d_size.h);//save the current setting to be used for later

            return d_pos;
        }
        // functions to be used in frame.js
        this.appActions = {
            loadFrameViewInNewFrame : function(frameview_key, card){
                self.addFrame({frameview_key:frameview_key, title:card.card_data.card_content.title, bgColor:'cadetblue'});
            },
            hidecommandSuggestions : function(){
                if($commandSuggestions.is(':visible')) $commandSuggestions.hide(100);
            },
            showcommandSuggestions : function(){
                if(!$commandSuggestions.is(':visible')) $commandSuggestions.show(100);
                $commandInput.focus();
            },
            focusOnCommandInput: function(){
                $commandInput.focus();
            },
            getTopFrameviewKey: function(){
                if(self.framesData().length){
                    return self.framesData()[0].frameModel.frameview.key();
                }
            },
            getCommandInputString: function(){
                return $commandInput.val();
            },
            setCommandInputString: function(str){
                $commandInput.val(str);
            },

            
                
        };

        this.init_app_events = function(){
            // app.on('save:save_all_card_and_frameview_titles', data).then(function(data){
            //     self.send_msg_to_background('SAVE_DATA_ELEMENT', {id:'ALL_CARD_AND_FRAMEVIEW_TITLE_LIST', data:data});
            // });
            //not  saving this anymore,  every time reloading all
        };
        this.commandSuggestionsListItemClicked = function(data, event){
            var FM = self.currentFrame.frameModel;
            if(data.id > -1) self.selectedCommandId(data.id);
            if(data.card_id){
                FM.actions.load_cards_from_store_to_frameview([data.card_id]);
            }

            
            // if(FM.frameview.exploring){
            // }
            // will hapen when not exploring with cmd:explore
            if(data.iscontext && data.id > -1){// context selectable from background
                interpreter.changeContextIndex(data.id);
            }
            var $t = $(event.target);
            if($t.attr('data-predicate') === 'true'){
                var val = $commandInput.val();
                $commandInput.val(val.replace(/\.(?=[^.]*$)\s+.*$/, '. '+$t.text()));
                if(val === $commandInput.val()){
                    //regex didn't match
                    //its a hook
                    $commandInput.val(val + '. '+$t.text());
                }
                self.searchSubmit(null);
            }

        }
        this.adjustCommandSuggestionsScroll = function(){
            var $sel_li = $commandSuggestions.find('#clitem_'+ self.selectedCommandId()).first();
            var csheight = $commandSuggestions.height();
            var litemtop = $sel_li.position()? $sel_li.position().top: 0;
            var litemheight = $sel_li.height();

            if(litemtop < 50){
                if(self.selectedCommandId() ===0){
                    $commandSuggestions.scrollTop(0);
                }
                else{
                    var scrollTop = $commandSuggestions.scrollTop();
                    newScrollTop = scrollTop + litemtop - 50;
                    if(newScrollTop>0)$commandSuggestions.scrollTop(newScrollTop);
                    // console.log(scrollTop, newScrollTop, litemtop);
                }
                    
            }
            else if(litemtop + litemheight > csheight){
                var scrollTop = $commandSuggestions.scrollTop();
                newScrollTop = scrollTop + (litemtop - csheight) + litemheight + 50;
                var maxScroll = $commandSuggestions.prop('scrollHeight');
                if(newScrollTop < maxScroll)$commandSuggestions.scrollTop(newScrollTop);
                // console.log(scrollTop, newScrollTop, litemtop);
            }
        }
        
        var last_command_val = '';
        this.selectedCommandId = ko.observable(0);
        this.maxSelectedCommandId = 0;
        this.updateTerminalHistoryIfNeeded = function(event){
                    
            if(event.keyCode == 38){// uparrow
                if(state.keyboard.ctrl_down ){
                    self.terminalHistoryIndex--;
                    if( self.terminalHistoryIndex > -1 && self.terminalHistoryIndex < self.terminalHistory.length){
                        str = self.terminalHistory[self.terminalHistoryIndex];
                        $commandInput.val(str);
                    }
                    console.log('ctrl down');
                }
                else{
                    
                    cmdlength  = self.maxSelectedCommandId;
                    var currid = self.selectedCommandId()-1;

                    if(cmdlength == 0){
                        self.selectedCommandId(0);
                    }
                    else if(currid < 0){
                        self.selectedCommandId(cmdlength);
                    }
                    else if(currid > cmdlength){
                        self.selectedCommandId(0);
                    }
                    else{
                        self.selectedCommandId(currid);
                    }

                    if(self.currentFrame.frameModel.frameview.exploring){
                        interpreter.changeContextIndex(self.selectedCommandId());
                    }
                    
                    self.adjustCommandSuggestionsScroll();
                    // console.log(cmdlength, self.selectedCommandId());
                }
            }
            else if(event.keyCode == 40){// downarrow
                if(state.keyboard.ctrl_down){
                    self.terminalHistoryIndex++;
                    if( self.terminalHistoryIndex > -1 && self.terminalHistoryIndex < self.terminalHistory.length){
                        str = self.terminalHistory[self.terminalHistoryIndex];
                        $commandInput.val(str);
                    }
                    console.log('ctrl down');
                }
                else{
                    cmdlength  = self.maxSelectedCommandId;
                    var currid = self.selectedCommandId()+1;
                    if(cmdlength == 0){
                        self.selectedCommandId(0);
                    }
                    else if(currid < 0){
                        self.selectedCommandId(cmdlength -1);
                    }
                    else if(currid > cmdlength){
                        self.selectedCommandId(0);
                    }
                    else{
                        self.selectedCommandId(currid);
                    }

                    if(self.currentFrame.frameModel.frameview.exploring){
                        interpreter.changeContextIndex(self.selectedCommandId());
                    }

                    self.adjustCommandSuggestionsScroll();
                    // console.log(cmdlength, self.selectedCommandId());
                }
            }
            else{

                var maxl = 20;
                var command_str = $commandInput.val();
                var command_str = command_str.replace(/\s+/g, " ");
                var dot = command_str.match(/\s?[\.]\s?$/);

                if(command_str != last_command_val){
                    if(dot || event.keyCode === 13){
                        if(command_str != _.last(self.terminalHistory)){
                            self.terminalHistory.push(command_str);
                            if(self.terminalHistory.length > maxl){
                                self.terminalHistory.splice(0, self.terminalHistory.length - maxl);
                            }
                        }
                    }

                    self.terminalHistoryIndex = self.terminalHistory.length;// anything other which changes the command , resets the history searching index
                }

                last_command_val = command_str;
            }
        };

        this.someKeyUp = function(event){

            if(event.keyCode == 27){// ESC
                // get the current frame
                if(state.isany_card_being_edited){
                    $commandSuggestions.show();
                    $commandInput.focus();//
                    var _cfm = self.framesData()[0].frameModel;
                    if(_cfm )_cfm.state_manager.rollback();
                }
                else if(!$commandSuggestions.is(':visible')){
                    $commandSuggestions.show(100);
                    $commandInput.select();
                }
                else if($(document.activeElement).attr('id') === "commandInput"){
                    var _cfm = self.framesData()[0].frameModel;
                    if(_cfm )_cfm.state_manager.rollback();
                    $commandInput.select();
                }
                else{
                    $commandInput.focus();
                }
            }

            if(event.keyCode == 16){//shift
                state.keyboard.shift_down = false;
                // console.log('shift pressed up');
            }
            else if(event.keyCode == 17){//ctrl
                state.keyboard.ctrl_down = false;
                // console.log('ctrl pressed up');
            }
            else if(event.keyCode == 18){//alt
                state.keyboard.alt_down = false;
                // console.log('alt pressed up');
            }

            if(state.isany_card_being_edited){
                return true;
            }

            self.updateTerminalHistoryIfNeeded(event);
            

            //************************************
            // if(document.activeElement.nodeName==='INPUT' || $(document.activeElement).hasClass('sc-editable')){// editing something don't take the event
            if(document.activeElement.nodeName==='INPUT'){// editing something don't take the event
                // event is for other input elements 
            // or for sc-editable elements 
            // or commandForm is already in focus
                if(event.target.id == 'commandInput'){
                    if(event.keyCode != 13 && (event.keyCode < 37  || event.keyCode > 40)){// if enter pressed don't remove commands
                                                                                            // as there data is needed to perform the enter command
                                                                                            // if up and down arrow are presses don't do this
                        self.frameActions.remove_commands();
                        self.searchSubmit(null);// null will only search and no action will be performed
                        self.emit_valid_commands_changed();
                    }

                }

                //****************************************************************************
                    var comm_str = $commandInput.val();
                    var dotm = comm_str.match(/\.(\.+)$/);
                    if(dotm){
                        var addtionaldotcount = dotm[1].length;
                        var diffdotcount = addtionaldotcount - state.addtionaldotcount;
                        if(diffdotcount < 0 && state.dotcards.length){
                            var FM = self.currentFrame.frameModel;
                            var oldcards = state.dotcards.splice(0, state.dotcards.length - addtionaldotcount);
                            for (var i = 0; i < oldcards.length; i++) {
                                self.frameActions.remove_card(FM, oldcards[i]);
                            }
                        }
                        state.addtionaldotcount = addtionaldotcount;
                        self.commandSuggestions.removeAll();  // self.appActions.hidecommandSuggestions();
                        self.commandSuggestions.push({desc:'\"'+self.commandInputVal+'\"', type:'CIV'});
                    }
                    else{
                        self.appActions.showcommandSuggestions();// could have been hidden 
                        
                        for (var i = 0; i < state.dotcards.length; i++) {
                            var FM = self.currentFrame.frameModel;
                            self.frameActions.remove_card(FM, state.dotcards[i]);
                        }
                        state.dotcards = [];
                        state.addtionaldotcount = 0;
                    }
                //****************************************************************************


                return true;
            }

            // but if no such element is being focused now
            // no where this key event is used so use it for command
            self.focus_on_command_input(event);

            // shouldn't trigger when cursor is at a input field
            if(event.keyCode == 37  && !state.isany_card_being_edited){//LeftArrow
               if(self.currentFrame) self.currentFrame.frameModel.actions.move_selected_card_and_save({left:1});
            }
            else if(event.keyCode == 39 && !state.isany_card_being_edited){//RightArrow
               if(self.currentFrame) self.currentFrame.frameModel.actions.move_selected_card_and_save({right:1});
            }

            //COPY, PASTE
            //************************************
            if(event.keyCode == 67  && !state.isany_card_being_edited){
                //C
                if(event.ctrlKey){
                    FM = self.currentFrame.frameModel;
                    sel_card = state.actions.get_primary_selected_card(state);
                    if(FM && sel_card) self.frameActions.copy_card(FM, sel_card);
                }
            }
            else if(event.keyCode == 86  && !state.isany_card_being_edited){
                //V
                if(event.ctrlKey){
                    FM = self.currentFrame.frameModel;
                    if(FM) self.frameActions.paste_card(FM);
                }   
            }
            
            //************************************
            

            return true;
        };
        this.send_msg_to_background= function(type, msg){
            chrome.runtime.sendMessage(
                {
                    type:type,
                    msg:msg
                }
            );
        };
  
        
        



    }
    return new sc_frameholder();
});