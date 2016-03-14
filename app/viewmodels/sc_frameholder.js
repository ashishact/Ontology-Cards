define(['plugins/http', 'durandal/app', 'knockout', 'jquery', 'card_props', 'state', 'mediawiki', 'searchapi'], function (http, app, ko, $, card_props, state, mediawiki, searchapi) {
    var sc_frameholder = function(){
        var self = this;
        this.name = "Semanticcards";
        this.description = "Sementic cards application";
        this.framesData = ko.observableArray([]);
        this.currentFrame = null;

        $commandForm = null;// focus element to focus and get cmd value
        $commandInput = null;
        $commandSuggestions = null;

        this.commandSuggestions = ko.observableArray([]);

        this.frameviews_to_update_when_tab_focused = [];//fv_key1, fv_key2, //when this tab is focused these frameview should be updated, because they have changed somewhere
                                                        // it has frameview_key collection
        this.cssColorNames = ['darkseagreen','burlywood',   'bisque', 'cadetblue', 'aquamarine','coral', 'chocolate', 'darkcyan', 'salmon', 'darkslategray', 'dimgrey', 'hotpink', 'indianred', 'khaki', 'lavenderblush', 'lightblue', 'lightcoral', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'mediumaquamarine', 'mediumvioletred', 'palegoldenrod', 'palegreen', 'sandybrown', 'tomato' ];
        this.currentColorId = 0;




        this.previousCardPosSize = {x:-2, y:0, w:2, h:2};
        /*['aliceblue',
                            'antiquewhite',
                            'aqua',
                            'aquamarine',
                            'azure',
                            'beige',
                            'bisque',
                            'black',
                            'blanchedalmond',
                            'blue',
                            'blueviolet',
                            'brown',
                            'burlywood',
                            'cadetblue',
                            'chartreuse',
                            'chocolate',
                            'coral',
                            'cornflowerblue',
                            'cornsilk',
                            'crimson',
                            'cyan',
                            'darkblue',
                            'darkcyan',
                            'darkgoldenrod',
                            'darkgray',
                            'darkgrey',
                            'darkgreen',
                            'darkkhaki',
                            'darkmagenta',
                            'darkolivegreen',
                            'darkorange',
                            'darkorchid',
                            'darkred',
                            'darksalmon',
                            'darkseagreen',
                            'darkslateblue',
                            'darkslategray',
                            'darkslategrey',
                            'darkturquoise',
                            'darkviolet',
                            'deeppink',
                            'deepskyblue',
                            'dimgray',
                            'dimgrey',
                            'dodgerblue',
                            'firebrick',
                            'floralwhite',
                            'forestgreen',
                            'fuchsia',
                            'gainsboro',
                            'ghostwhite',
                            'gold',
                            'goldenrod',
                            'gray',
                            'grey',
                            'green',
                            'greenyellow',
                            'honeydew',
                            'hotpink',
                            'indianred ',
                            'indigo ',
                            'ivory',
                            'khaki',
                            'lavender',
                            'lavenderblush',
                            'lawngreen',
                            'lemonchiffon',
                            'lightblue',
                            'lightcoral',
                            'lightcyan',
                            'lightgoldenrodyellow',
                            'lightgray',
                            'lightgrey',
                            'lightgreen',
                            'lightpink',
                            'lightsalmon',
                            'lightseagreen',
                            'lightskyblue',
                            'lightslategray',
                            'lightslategrey',
                            'lightsteelblue',
                            'lightyellow',
                            'lime',
                            'limegreen',
                            'linen',
                            'magenta',
                            'maroon',
                            'mediumaquamarine',
                            'mediumblue',
                            'mediumorchid',
                            'mediumpurple',
                            'mediumseagreen',
                            'mediumslateblue',
                            'mediumspringgreen',
                            'mediumturquoise',
                            'mediumvioletred',
                            'midnightblue',
                            'mintcream',
                            'mistyrose',
                            'moccasin',
                            'navajowhite',
                            'navy',
                            'oldlace',
                            'olive',
                            'olivedrab',
                            'orange',
                            'orangered',
                            'orchid',
                            'palegoldenrod',
                            'palegreen',
                            'paleturquoise',
                            'palevioletred',
                            'papayawhip',
                            'peachpuff',
                            'peru',
                            'pink',
                            'plum',
                            'powderblue',
                            'purple',
                            'rebeccapurple',
                            'red',
                            'rosybrown',
                            'royalblue',
                            'saddlebrown',
                            'salmon',
                            'sandybrown',
                            'seagreen',
                            'seashell',
                            'sienna',
                            'silver',
                            'skyblue',
                            'slateblue',
                            'slategray',
                            'slategrey',
                            'snow',
                            'springgreen',
                            'steelblue',
                            'tan',
                            'teal',
                            'thistle',
                            'tomato',
                            'turquoise',
                            'violet',
                            'wheat',
                            'white',
                            'whitesmoke',
                            'yellow',
                            'yellowgreen']*/

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
            return "\"\"\"\"\"\"";
        };
        this.afterFrameAdded = function(items, frameData){
            //self.currentFrame = frameData.frameModel;
            //console.log(self.currentFrame);
        };
        this.addFrame = function(frameData){

            //assign an id to each frame to be able to refer to it later on , and create uing DOM id in html
            frameData.frameID = self.framesData().length; // length of the observable , 0 for 1st
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
                    })
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
                    if(_schar.match(/^[a-zA-Z0-9 ]+/)){
                        $commandForm.show(100);
                        // $commandSuggestions.show();
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
        this.searchSubmit = function(from_el){
            var currentFrame = null;
            if(self.framesData().length){
                currentFrame = self.framesData()[0].frameModel;
            }
            else {
                self.addFrame({frameview_key:'home', title:'Home', bgColor:'darkcyan'});
                return;// return or if the command is add frame it will be added again
                    //in fact it will return in the check bellow
            }
            if(!currentFrame)return;

            var isCmd = true;// wheather its a command or search query
            if(!$commandInput) $commandInput = $('#commandInput');
            var _fullstr = $commandInput.val();
            var cmd = _fullstr;
            // commandline.value = '';
            if(cmd[0]==' ')isCmd = false;

            if(isCmd){
                var cmd = cmd.replace(/\s+/g, " ").split(" ");
                if(cmd[0] != ''){
                    if ("add".indexOf(cmd[0].toLowerCase()) === 0 ){
                        var card_ = null;
                        if(cmd.length > 1){
                            if('parent'.indexOf(cmd[1].toLowerCase()) === 0){//parent
                                if(cmd.length > 2){//parent with title
                                    var _title = cmd[2];
                                    for (var i = cmd.length - 1; i >= 3; i--) {
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
                                        model:currentFrame.defaultModel,
                                        view:currentFrame.defaultView,
                                        sctype:card_props.TYPE.SIMPLE_TEXT 
                                    }
                                    card_ = currentFrame.actions.add_new_card(_card_data);
                                    state.actions.select_this_card(state, card_);
                                }
                                else{// just parent
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
                                        model:currentFrame.defaultModel,
                                        view:currentFrame.defaultView,
                                        sctype:card_props.TYPE.SIMPLE_TEXT 
                                    }
                                    card_ = currentFrame.actions.add_new_card(_card_data);
                                    state.actions.select_this_card(state, card_);
                                }
                            }
                            else if('frame'.indexOf(cmd[1].toLowerCase()) === 0){//new frame
                                console.log("adding frame");
                                if(cmd.length > 2){//frame with frameview_key
                                    var _fv_key = cmd[2];
                                    self.addFrame({frameview_key:_fv_key, title:'Frameview', bgColor:'darkcyan'});    
                                }
                                else{
                                    self.addFrame({frameview_key:'home', title:'Home', bgColor:'darkcyan'});
                                }
                            }
                            else if(':list' === cmd[1].toLowerCase()){// a list
                                if(cmd.length > 2){
                                    var _title = cmd[2];
                                    if(cmd.length > 3){
                                        for (var i = cmd.length - 1; i >= 3; i--) {
                                            _title = _title + ' ' + cmd[i];
                                        };
                                    }

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
                                        model:currentFrame.defaultModel,
                                        view:"views/cards/todo.html",
                                        non_editable:true,
                                        sctype:card_props.TYPE.LIST
                                    }
                                    card_ = currentFrame.actions.add_new_card(_card_data);
                                    state.actions.select_this_card(state, card_);

                                }
                                else{// generate everything

                                }
                            }
                            else if(':li' === cmd[1].toLowerCase()){// a list item
                                if(cmd.length >2  && state.isany_card_selcted){
                                    var _item = _fullstr.split(':li');
                                    if(_item.length > 1){
                                        _item = _item[1];
                                        console.log(_item);
                                        var _card = state.now_selected_cards[0];
                                        if(_card.card_data.sctype === card_props.TYPE.LIST){
                                            // its a list
                                            _card.bind_data.list.unshift({text:ko.observable(_item), on:ko.observable(false)});
                                            self.currentFrame.frameModel.actions.save_card_content(_card, true);
                                        }
                                    }
                                }

                            }
                            else if(':leaf' === cmd[1].toLowerCase()){// a leaf_editor
                                
                                var _title = 'Untitled';
                                if(cmd.length > 2){
                                    _title = '';
                                    for (var i = cmd.length - 1; i >= 2; i--) {
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
                                    text:'Start writing hare',
                                }
                                var _card_data = {
                                    default_size:d_size,
                                    default_pos: d_pos,
                                    card_content: _card_content,
                                    model:currentFrame.defaultModel,
                                    view:"views/cards/leafeditor.html",
                                    sctype:card_props.TYPE.LEAF_EDITOR,
                                }
                                card_ = currentFrame.actions.add_new_card(_card_data);
                                state.actions.select_this_card(state, card_);

                            }
                            else{//card with given title
                                var _title = cmd[1];
                                for (var i = cmd.length - 1; i >= 2; i--) {
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
                                    model:currentFrame.defaultModel,
                                    view:currentFrame.defaultView,
                                    sctype:card_props.TYPE.SIMPLE_TEXT 
                                }
                                card_ = currentFrame.actions.add_new_card(_card_data);
                                state.actions.select_this_card(state, card_);
                            }
                        }
                        else{
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
                                model:currentFrame.defaultModel,
                                view:currentFrame.defaultView,
                                sctype:card_props.TYPE.SIMPLE_TEXT 
                            }
                            card_ = currentFrame.actions.add_new_card(_card_data);
                            state.actions.select_this_card(state, card_);
                        }

                        //currentFrame.start_editing_card(card_);

                        // $(card_.el).find('.title').focus();
                        // console.log('title', $.sc_find_rec(card_.el,'title'));

                    }
                    else if("remove".indexOf(cmd[0].toLowerCase()) === 0 ){
                        if(cmd.length > 1){

                        }
                        else{
                            var _cd = state.actions.get_primary_selected_card(state);
                            if(_cd){
                                self.currentFrame.frameModel.actions.remove_card(_cd, 'TEMPORARY');
                            }
                                
                        }
                    }
                    // else if ("goto".indexOf(cmd[0].toLowerCase()) === 0 ){
                    //     if(cmd.length == 2 ){
                    //         currentFrame.goto_frameview(cmd[1]);
                    //     }
                    // }
                    //clear store
                    else if ("clear".indexOf(cmd[0].toLowerCase()) === 0 && cmd.length > 1 && "store".indexOf(cmd[1]) === 0){
                        console.log('clearing store');
                        chrome.runtime.sendMessage(
                            {
                                type:'STORE_REMOVEALL'
                            }, 
                            function(response) {
                            }
                        );
                    }
                    else if ("get".indexOf(cmd[0].toLowerCase()) === 0 && cmd.length > 1 && "store".indexOf(cmd[1]) === 0 ){
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
                                        currentFrame.defaultView = "views/card.html";
                                        console.log('YOU have BOUND card', cmd[2]);

                                    }
                                    else if("ribbon".indexOf(cmd[2].toLowerCase()) ===0){
                                        currentFrame.defaultView = "views/ribbon.html";
                                        console.log('YOU have BOUND  ribbon');
                                    }
                                    else{
                                        currentFrame.defaultView = "views/cards/" + cmd[2] + ".html";
                                    }
                                }
                            }
                            else if("config".indexOf(cmd[0].toLowerCase()) ===0){

                            }
                        }
                    }
                    else if("settings".indexOf(cmd[0].toLowerCase()) === 0){
                        console.log("settings config");
                        currentFrame.actions.add_new_card({
                            title:'Settings:Config',
                            settings:{config:currentFrame.frame_config, config_map:currentFrame.frame_config_map},
                            volatile:true
                        });
                        // console.log({config:currentFrame.frame_config, config_map:currentFrame.frame_config_map});
                    }
                    else if("exit" === cmd[0].toLowerCase()){
                        self.removeCurrentFrame();
                    }
                    else if("go" === cmd[0].toLowerCase()){
                        var _cards = state.actions.get_selected_cards(state);
                        if(_cards.length)self.currentFrame.frameModel.trigger_parent(_cards[0]);
                    }
                    else if("image" === cmd[0].toLowerCase()){
                        if(cmd.length>1){
                            var img_url = "<img src=\""+  cmd[1] +"\" alt=\"Image\" style=\" \">";
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
                                model:currentFrame.defaultModel,
                                view:currentFrame.defaultView,
                                sctype:card_props.TYPE.SIMPLE_TEXT,
                            }
                            card_ = currentFrame.actions.add_new_card(_card_data);
                            state.actions.select_this_card(state, card_);

                            $commandInput.val('');
                        }
                    }
                    else if("setimage" === cmd[0].toLowerCase()){
                        if(cmd.length>1){
                            var _cs = state.actions.get_selected_cards(state);
                            if(_cs.length && _cs[0].bind_data.text){// _cs is definitely an array
                                
                                var _w = Math.round($(_cs[0].el).width())-20;
                                var img_url = "<img src=\""+  cmd[1] +"\" alt=\"Image\" style=\" width:100%;\">";
                                _cs[0].bind_data.text(img_url);
                                self.currentFrame.frameModel.actions.save_card_content(_cs[0], true);
                            }
                            
                            $commandInput.val('');
                        }
                        else{
                            http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne', { tags: 'mount ranier', tagmode: 'any', format: 'json' }, 'jsoncallback').then(function(response) {
                                console.log(response.items);
                            });
                        }
                    }
                    else if("settext" === cmd[0].toLowerCase()){
                        var _cs = state.actions.get_selected_cards(state);
                        if(_cs.length){// _cs is definitely an array
                            if(_cs[0].bind_data.text){// not everyone has text
                                _cs[0].bind_data.text(cmd.join(' ').replace('settext ', ''));
                                self.currentFrame.frameModel.actions.save_card_content(_cs[0], true);
                            }
                        }
                        
                        $commandInput.val('');
                    }
                    else if("settitle" === cmd[0].toLowerCase()){
                        var _cs = state.actions.get_selected_cards(state);
                        if(_cs.length){// _cs is definitely an array
                            _cs[0].bind_data.title(cmd.join(' ').replace('settitle ', ''));
                            self.currentFrame.frameModel.actions.save_card_content(_cs[0], true);
                        }
                        
                        $commandInput.val('');
                    }
                    else if("iframe" === cmd[0].toLowerCase()){
                        if(cmd.length>1){
                            var _iframe = "<iframe width=\"600px\" height=\"340px\" src=\""+  cmd[1] +"\"  style=\" \"></iframe>";

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
                                model:currentFrame.defaultModel,
                                view:currentFrame.defaultView,
                                sctype:card_props.TYPE.SIMPLE_TEXT,
                            }
                            card_ = currentFrame.actions.add_new_card(_card_data);
                            state.actions.select_this_card(state, card_);

                            $commandInput.val('');
                        }
                    }
                    else if(cmd[0].indexOf('http') === 0){// some url is given
                        if(cmd[0].indexOf('youtube.com') > 1){// an youtube url
                            var lnk = cmd[0].split('v=');
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
                                    model:currentFrame.defaultModel,
                                    view:currentFrame.defaultView,
                                    sctype:card_props.TYPE.SIMPLE_TEXT,
                                    non_resizable: true,
                                }

                                card_ = currentFrame.actions.add_new_card(_card_data);
                                state.actions.select_this_card(state, card_);

                                $commandInput.val('');
                            }
                        }//youtube
                        else if(cmd[0].match(/\.(jpg|png|gif|JPG)$/)) {
                            var img_url = "<img src=\""+  cmd[0] +"\" alt=\"Image\" style=\" \">";
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
                                model:currentFrame.defaultModel,
                                view:currentFrame.defaultView,
                                sctype:card_props.TYPE.SIMPLE_TEXT,
                            }
                            card_ = currentFrame.actions.add_new_card(_card_data);
                            state.actions.select_this_card(state, card_);

                            $commandInput.val('');
                        }
                    }
                }
            }// end if(isCmd)
            else{// Search
                var query = cmd.replace(/\s+/g, " ");
                console.log("Search for", query);

                var type = 'SEARCH_STORE';
                var _msg = {query:query, title_only:true, highlighting:true};
                self.send_msg_to_background(type, _msg);
            }

            // as enter was pressed, remove all characters
            $commandInput.val('');
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

                else if(request.type == 'REPLYOF_MIXED_CONTENT_CALLBACK'){
                    console.log(request.msg.json.results);
                    if(request.msg && request.msg.json){
                        if(request.msg.json.results && request.msg.json.results.length){
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
            self.updatedPreviousCardPosSize(d_pos.x, d_pos.y, d_size.w, d_size.h);//save the current setting to be used for later

            return d_pos;
        }
        // functions to be used in frame.js
        this.appActions = {
            loadFrameViewInNewFrame : function(frameview_key, card){
                self.addFrame({frameview_key:frameview_key, title:card.card_data.card_content.title, bgColor:'cadetblue'});
            },
            hideCommandForm : function(){
                $commandForm.hide(100);
            },
            showCommandForm : function(){
                $commandForm.show(100);
                // $commandSuggestions.show();
                $commandInput.focus();
            },
            focusOnCommandInput: function(){
                $commandInput.focus();
            },
            getTopFrameviewKey: function(){
                if(self.framesData().length){
                    return self.framesData()[0].frameModel.frameview.key();
                }
            }
            
                
        };

        this.keyUpTimeOutVar = null;// used bellow
        minTimeIntervalForQuery = 500; // ms
        this.commandSuggest = function(event){

            var str = $commandInput.val();
            var _callb = function(json){
                if(json.query && json.query.pages){
                    self.commandSuggestions.removeAll();//clear suggestions
                    $.each(json.query.pages, function(i,item){
                        // console.log(item);

                        var bind_data = {};
                        bind_data.title = item.title;
                        if(item.thumbnail && item.thumbnail.source)bind_data.thumb_source = item.thumbnail.source;
                        if(item.terms && item.terms.description && item.terms.description.length){
                            bind_data.desc = item.terms.description[0];
                        }else bind_data.desc = '';
                        
                        if(bind_data.title)self.commandSuggestions.unshift(bind_data);
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
                            self.commandSuggestions.removeAll();//clear suggestions

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
                                        self.commandSuggestions.unshift(bind_data);
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
                                    self.commandSuggestions.unshift(bind_data);
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
                                // console.log(item.suggestion.data);
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
                                self.commandSuggestions.unshift(bind_data);
                            });
                        });

                    }
                    
                }//enter pressed

                //realtime suggestions
                else if(str.substr(0,1) === ' '){
                    var str = str.substr(1,str.length-1);
                    // str don't contain begining space
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
                                    self.commandSuggestions.removeAll();//clear suggestions
                                    var bind_data = {};
                                    $.each(json.CompleteSuggestion, function(i, item){
                                        bind_data.title = item.suggestion.data;
                                        bind_data.desc = '';
                                        if(bind_data.title)self.commandSuggestions.unshift(bind_data);
                                        
                                    });
                                    
                                });
                            }
                            else if(str.indexOf('dbl')===0 ){
                                query = str.substr(str.indexOf(' ') ,str.length-1);
                                
                                if(query.length > 2){// atleast 3 character
                                    var prefix_url = 'http://lookup.dbpedia.org/api/search/PrefixSearch';
                                    var prefix_data = {QueryString:query};
                                    var search_url = 'http://lookup.dbpedia.org/api/search/KeywordSearch';
                                    var search_data = {QueryClass:'place', QueryString:query};

                                    if(str.substr(3,4)==='p')prefix_data.QueryClass = 'place';
                                    if(str.substr(3,4)==='P')prefix_data.QueryClass = 'person';
                                    if(str.substr(3,4)==='S')prefix_data.QueryClass = 'scientist';
                                    // var _url = 'http://lookup.dbpedia.org/api/search/KeywordSearch?QueryClass=place&QueryString='+ query;

                                    var loc_proto = window.location.protocol;
                                    console.log(loc_proto);
                                    if(loc_proto === 'https:'){
                                        var _type = 'MIXED_CONTENT_CALLBACK';
                                        var _msg = {url:'http://lookup.dbpedia.org/api/search/PrefixSearch?QueryClass=place&QueryString='+query};
                                        self.send_msg_to_background(_type, _msg);
                                    }
                                    else{// no mixed content error
                                        $.getJSON(prefix_url, prefix_data, function(json){
                                            console.log(json);
                                            if(json.results && json.results.length){
                                                self.commandSuggestions.removeAll();//clear suggestions
                                                var bind_data = {};
                                                $.each(json.results, function(i, item){
                                                    bind_data.title = item.label;
                                                    bind_data.desc = item.description;
                                                    if(bind_data.title)self.commandSuggestions.unshift(bind_data);
                                                    
                                                });
                                            }
                                            
                                        });
                                    }
                                        

                                }
                                    

                                
                            }
                            
                            
                        }
                    }, minTimeIntervalForQuery);
                }
                else{
                    if(self.framesData().length){
                        var _cm = self.framesData()[0].frameModel;
                        if('select'.indexOf(str.toLowerCase()) === 0 ){
                                _cm.show_all_card_label(true);
                        }
                        else{
                            var match = str.toLowerCase().match(/sele?c?t?(\d+)\.?(\d+)?/);
                            if(match && match.length>1){
                                ind = parseInt(match[1])-1;
                                if(ind < _cm.cards().length)state.actions.select_this_card(state, _cm.cards()[ind]);
                            }
                            if(_cm.show_all_card_label())_cm.show_all_card_label(false);
                        }
                    }
                }


            }// at least one char
            else{
                if(self.currentFrame) self.currentFrame.frameModel.show_all_card_label(false);
                
                
                self.commandSuggestions.removeAll();
            }

        };
        this.someKeyUp = function(event){
            if(event.keyCode == 27){// ESC
                // get the current frame
                if(state.isany_card_being_edited){
                    var _cfm = self.framesData()[0].frameModel;
                    if(_cfm )_cfm.state_manager.rollback();
                }
                else if(!$commandForm.is(':visible')){
                    $commandForm.show(100);
                    $commandInput.focus();
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
            else if(event.keyCode == 37  && !state.isany_card_being_edited){//LeftArrow
               if(self.currentFrame) self.currentFrame.frameModel.actions.move_selected_card_and_save({left:1});
            }
            else if(event.keyCode == 39 && !state.isany_card_being_edited){//RightArrow
               if(self.currentFrame) self.currentFrame.frameModel.actions.move_selected_card_and_save({right:1});
            }
            // else if(event.keyCode == 38){//UpArrow
            //    if(self.currentFrame) self.currentFrame.frameModel.actions.move_selected_card_and_save({up:2});
            // }
            // else if(event.keyCode == 40){//DownArrow

            //    if(self.currentFrame) self.currentFrame.frameModel.actions.move_selected_card_and_save({down:2});
            // }


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

            //************************************
            if(state.isany_card_being_edited){
                return true;
            }
            if(document.activeElement.nodeName==='INPUT' || $(document.activeElement).hasClass('sc-editable')){// editing something don't take the event
                // event is for other input elements 
            // or for sc-editable elements 
            // or commandForm is already in focus
                if(event.target.id == 'commandInput'){
                    self.commandSuggest(event);
                }
                    
                return true;
            }

            // but if no such element is being focused now
            // no where this key event is used so use it for command
            self.focus_on_command_input(event);

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