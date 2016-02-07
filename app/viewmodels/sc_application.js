define(['plugins/http', 'durandal/app', 'knockout', 'jquery'], function (http, app, ko, $) {
    var sc_application = function(){
        var self = this;
        this.name = "Semanticcards";
        this.description = "Sementic cards application";
        this.framesData = ko.observableArray([]);
        this.currentFrame = null;

        this.afterFrameAdded = function(items, frameData){
            //self.currentFrame = frameData.frameModel;
            //console.log(self.currentFrame);
        };
        this.addFrame = function(frameData){
            self.framesData.unshift(frameData);
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
                console.log("you changed ", el.innerHTML);
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
                    ko.unwrap(value) ? $(element).fadeIn() : $(element).fadeOut();
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

        this.searchSubmit = function(from_el){
            var currentFrame = null;
            if(self.framesData().length){
                currentFrame = self.framesData()[0].frameModel;
            }
            if(!currentFrame)return;

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
                                card_ = currentFrame.actions.add_new_card({parent:true, title:_title, model:currentFrame.activeModel, view:currentFrame.activeView});
                            }
                            else{// just parent
                                card_ = currentFrame.actions.add_new_card({parent:true, title:'Parent', model:currentFrame.activeModel, view:currentFrame.activeView});
                            }
                        }
                        else{//card with given title
                            var _title = cmd[1];
                            for (var i = cmd.length - 1; i >= 2; i--) {
                                _title = _title + ' ' + cmd[i];
                            };
                            card_ = currentFrame.actions.add_new_card({title:_title, model:currentFrame.activeModel, view:currentFrame.activeView});
                        }
                    }
                    else{
                        card_ = currentFrame.actions.add_new_card({title:'Card', model:currentFrame.activeModel, view:currentFrame.activeView});
                    }

                    //currentFrame.start_editing_card(card_);

                    // $(card_.el).find('.title').focus();
                    // console.log('title', $.sc_find_rec(card_.el,'title'));

                }
                else if ("goto".indexOf(cmd[0]) === 0 ){
                    if(cmd.length == 2 ){
                        currentFrame.goto_frameview(cmd[1]);
                    }
                }
                //clear store
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
            }
        };

        this.activate = function(){
            self.addFrame({frameModel:null, viewModel:"viewmodels/frame", bgColor:'darkcyan'});
            // self.addFrame({frameModel:null, viewModel:"viewmodels/frame", bgColor:'cadetblue'});
            self.createNewBindings();
        }



    }
    return new sc_application();
});