define(['plugins/http', 'durandal/app', 'knockout', 'jquery', 'card_props', 'state', 'mediawiki', 'searchapi'], function (http, app, ko, $, card_props, state, mediawiki, searchapi) {
    var sc_frameholder = function(){
        var self = this;
        this.name = "Semanticcards";
        this.description = "Sementic cards application";
        this.framesData = ko.observableArray([]);
        this.currentFrame = null;

        $commandForm = null;// focus element to focus and get cmd value
        $commandForm = null;
        this.commandSuggestions = ko.observableArray([]);

        this.frameviews_to_update_when_tab_focused = [];//fv_key1, fv_key2, //when this tab is focused these frameview should be updated, because they have changed somewhere
                                                        // it has frameview_key collection
        this.cssColorNames = ['darkseagreen','burlywood',   'bisque', 'cadetblue', 'aquamarine','coral', 'chocolate', 'darkcyan', 'salmon', 'darkslategray', 'dimgrey', 'hotpink', 'indianred', 'khaki', 'lavenderblush', 'lightblue', 'lightcoral', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'mediumaquamarine', 'mediumvioletred', 'palegoldenrod', 'palegreen', 'sandybrown', 'tomato' ];
        this.currentColorId = 0;
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
                        "The problem with sex in the movies is, that the popcorn usually spills.",
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
                        "I think sex is better than logic, but I can't prove it.",
                        "I drive way too fast to worry about cholesterol.",
                        "When everything's coming your way, you're in the wrong lane and going the wrong way.",
                        "If at first you don't succeed, redefine success.",
                        "If at first you don't succeed, destroy all evidence that you tried."];
        this.getRandomText = function(){
            return self.oneLiners[Math.floor(self.oneLiners.length*Math.random())];
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
            //console.log("frame added");
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
                    // if($(element).childNodes)
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
            if($commandForm && $commandInput){

                if(event && !state.keyboard.ctrl_down){
                    var _schar = String.fromCharCode(event.which);
                    if(_schar.match(/^[a-zA-Z0-9 ]+/)){
                        $commandForm.show(100);
                        $commandInput.val(_schar.toLowerCase());
                        $commandInput.focus();
                    }
                }
                
            }
            else {
                console.log('@im - how can $commandForm & $commandInput not exist');
                $commandForm = $('#commandForm');
                $commandInput = $('#commandInput');
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
            var cmd = $commandInput.val();
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
                                    var _card_data = {
                                        parent:true,
                                        title:_title,
                                        text:self.getRandomText(),
                                        model:currentFrame.activeModel,
                                        view:currentFrame.activeView,
                                        sctype:card_props.TYPE.SIMPLE_TEXT 
                                    }
                                    card_ = currentFrame.actions.add_new_card(_card_data);
                                }
                                else{// just parent
                                    var _card_data = {
                                        parent:true,
                                        title:'Parent',
                                        text:self.getRandomText(),
                                        model:currentFrame.activeModel,
                                        view:currentFrame.activeView,
                                        sctype:card_props.TYPE.SIMPLE_TEXT
                                    }
                                    card_ = currentFrame.actions.add_new_card(_card_data);
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
                            else{//card with given title
                                var _title = cmd[1];
                                for (var i = cmd.length - 1; i >= 2; i--) {
                                    _title = _title + ' ' + cmd[i];
                                };
                                var _card_data={
                                    title:_title,
                                    text:self.getRandomText(),
                                    model:currentFrame.activeModel,
                                    view:currentFrame.activeView,
                                    sctype:card_props.TYPE.SIMPLE_TEXT
                                }
                                card_ = currentFrame.actions.add_new_card(_card_data);
                            }
                        }
                        else{
                            var _card_data={
                                title:'Card',
                                text:self.getRandomText(),
                                model:currentFrame.activeModel,
                                view:currentFrame.activeView,
                                sctype:card_props.TYPE.SIMPLE_TEXT
                            }
                            card_ = currentFrame.actions.add_new_card(_card_data);
                        }

                        //currentFrame.start_editing_card(card_);

                        // $(card_.el).find('.title').focus();
                        // console.log('title', $.sc_find_rec(card_.el,'title'));

                    }
                    else if ("goto".indexOf(cmd[0].toLowerCase()) === 0 ){
                        if(cmd.length == 2 ){
                            currentFrame.goto_frameview(cmd[1]);
                        }
                    }
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
                                        currentFrame.activeView = "views/card.html";
                                        console.log('YOU have BOUND card', cmd[2]);

                                    }
                                    else if("ribbon".indexOf(cmd[2].toLowerCase()) ===0){
                                        currentFrame.activeView = "views/ribbon.html";
                                        console.log('YOU have BOUND  ribbon');
                                    }
                                    else{
                                        currentFrame.activeView = "views/cards/" + cmd[2] + ".html";
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
                    else if(cmd[0].indexOf('http') === 0){// some url is given
                        if(cmd[0].indexOf('youtube.com') > 1){// an youtube url
                            var lnk = cmd[0].split('v=');
                            if(lnk.length>1){
                                var embed_url = "<iframe width=\"680\" height=\"380\" src=\"https://www.youtube.com/embed/"+ lnk[1].replace('&', '?') +"\" frameborder=\"0\" allowfullscreen></iframe>";
                                var _card_data={
                                    title:'Untitled',
                                    text:embed_url,
                                    model:currentFrame.activeModel,
                                    view:currentFrame.activeView,
                                    sctype:card_props.TYPE.SIMPLE_TEXT,
                                    non_resizable: true,
                                    default_size:{w:6, h:6}
                                }
                                card_ = currentFrame.actions.add_new_card(_card_data);
                                $commandInput.val('');
                            }
                        }//youtube
                        else if(cmd[0].match(/\.(jpg|png|gif)$/)) {
                            var img_url = "<img src=\""+  cmd[0] +"\" alt=\"Image\" style=\" \">";
                            console.log('image found');
                            var _card_data={
                                title:'Untitled',
                                text:img_url,
                                model:currentFrame.activeModel,
                                view:currentFrame.activeView,
                                sctype:card_props.TYPE.SIMPLE_TEXT,
                                default_size:{w:3, h:3}
                            }
                            card_ = currentFrame.actions.add_new_card(_card_data);
                            $commandInput.val('');
                        }
                    }
                }
            }// end if(isCmd)
            else{// Search
                var searchStr = cmd.replace(/\s+/g, " ");
                console.log("Search for", searchStr);
            }
        };

        this.activate = function(){
            self.createNewBindings();
            if(!self.framesData().length){// add only if no ther frame exists
                self.addFrame({frameview_key:'home', title:'Home',  bgColor:'bisque'});
            }
            // self.addFrame({frameModel:null, viewModel:"viewmodels/frame", bgColor:'cadetblue'});

        };
        this.attached = function(){
            chrome.runtime.onMessage.addListener(
              function(request, sender, sendResponse) {
                if(request._type == 'FRAMEVIEW_HAS_CHANGED'){
                    var fv_key = request.frameview_key;
                    var key_list = self.frameviews_to_update_when_tab_focused;
                    if($.inArray(fv_key, key_list)<0){//fv_key doesn't exists
                        key_list.push(fv_key);
                    }
                }
                else if(request._type == 'FRAMEVIEW_WAS_REMOVED'){
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
                else if(request._type == 'UPDATE_CHANGED_FRAMES_NOW'){// this tab just got focused updated the changes in frames if any
                    self.update_changed_frames_now();
                }
            });

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
            })
        };

        // functions to be used in frame.js
        this.appActions = {
            loadFrameViewInNewFrame : function(frameview_key, card){
                self.addFrame({frameview_key:frameview_key, title:card.card_data.title, bgColor:'cadetblue'});
            },
            hideCommandForm : function(){
                $commandForm.hide(100);
            }
        };

        this.keyUpTimeOutVar = null;// used bellow
        minTimeIntervalForQuery = 250; // ms
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
                        
                    }
                }, minTimeIntervalForQuery);


            }// at least one char
            else{
                self.commandSuggestions.removeAll();
            }

        };
        this.someKeyUp = function(event){
            if(event.keyCode == 27){// ESC
                // get the current frame
                var _cf = self.framesData()[0].frameModel;
                if(_cf ){
                    _cf.state_manager.rollback();
                }
                $commandForm.show(100);
                $commandInput.focus();
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
  
        
        



    }
    return new sc_frameholder();
});