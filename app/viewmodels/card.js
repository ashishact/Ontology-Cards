define(['durandal/app', 'knockout', 'jquery', 'lodash', 'card_props', 'mediawiki', 'qwest'], function (app, ko, $, _, card_props, mediawiki, qwest) {

    var card = function(){
        var self=this;
        var __card = null;
        this.id = null;
        this.sctype = 0;
        this.bind_data = {};


        this.ifcardsctype = null;
        this.wikidata = ko.observable('');

        //DEFAULT
        //observable
        this.title = ko.observable('');
        this.label = ko.observable('');
        this.abstract = ko.observable('');
        this.content = ko.observable('');
        //non - observable
        //this.webreader = '';
        this.created = Date.now();

        
        this.create_array_from_json = function(_prefix, _array, _obj){
            if(typeof(_prefix) != 'string')_prefix='';

            _.forIn(_obj, function(_v, _k){
                if(_v || _v == false){// because _v could be null
                    if(typeof(_v) == 'object'){
                        self.create_array_from_json(_prefix +_k +' / ', _array, _v);
                    }
                    else{
                        _array.push({key:_prefix + _k, value: _v})
                    }
                }
            });
        };
        this.create_card_type = function(sctype, data){
            self.ifcardsctype = sctype;


            //SUMMARY
            if(sctype == card_props.TYPE.SUMMARY){
              if(data.html && data.title){
                  return {
                    html:ko.observable(data.html),
                    title: ko.observable(data.title)
                  }
              }

            }
            //QUOTE
            else if(sctype == card_props.TYPE.QUOTE){
              if(data.quote){
                  return {
                    quote:ko.observable(data.quote)
                  }
              }
            }
            // SIMPLE_TEXT
            else if(sctype === card_props.TYPE.SIMPLE_TEXT){
                if(data.title && data.text){
                    return{
                        title:ko.observable(data.title),
                        text:ko.observable(data.text)
                    }
                }
            }

            //PERSON
            if(sctype == card_props.TYPE.PERSON){
                return {
                  name:'Sir Issac Newton',
                  image_src:'http://cdn.history.com/sites/2/2015/07/GettyImages-113494597-E.jpeg',
                  abstract:'One of the greatest scientist of all time',
                  about:'Sir Isaac Newton was an English physicist and mathematician who is widely recognised as one of the most influential scientists of all time and as a key figure in the scientific revolution',
                  source_url:'https://en.wikipedia.org/wiki/Isaac_Newton',
                  dob:'15th April'
                };    
            }

            //QUOTE
            else if(sctype == self.SCsctype.quote){
                return {
                  quote:'All things are subject to interpretation whichever interpretation prevails at a given time is a function of power and not truth',
                  by:'Friedrich Nietzsche',
                  source_url:''
                };
            }
            // ARTICLE
            else if(sctype == self.SCsctype.article){
                return {
                  title:'I feel therefore I am',
                  image_src:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF9LI23PPlCpctgxPnWyekwQrmM8j8yos_UQdQYqQVdnev-pVa',
                  abstract:'How exactly did consciousness become a problem? And why, after years off the table, is it a hot research subject now?',
                  by:'Margaret Wertheim',
                  source_url:'https://aeon.co/essays/how-and-why-exactly-did-consciousness-become-a-problem'
                };
            }
            // IMAGE
            else if(sctype == self.SCsctype.image){
                return {
                  title:'Everyday is New',
                  image_src:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwag-mgoPpd_1GWyByONbIujrLs8vcgr_76a0nBGng569Pi5rm-w',
                  abstract:'Very cute bird',
                  by:'Someone',
                  source_url:'https://encrypted-tbn3.gstatic.com'
                };
            }

            else if(sctype == self.SCsctype.simple_text){
                return {
                  title: 'I feel therefore I am'.toUpperCase(),
                  text: 'How exactly did consciousness become a problem? And why, after years off the table, is it a hot research subject now?'
                };
            }

            else if(sctype == self.SCsctype.json_editor){
                var somejson = {
                    string:'text',
                    bool:false,
                    num:23,
                    nested:{
                      string:'string',
                      bool:true
                    },
                    notdefined:null
                }
                var _array = [];
                self.create_array_from_json('', _array, somejson);
                return ko.observableArray(_array);
            }

            else if(sctype == self.SCsctype.simple_list){
                var _array = [];
                var _item = {
                  item_title: 'I feel therefore I am',
                  item_abstract: 'How exactly did consciousness become a problem? And why, after years off the table, is it a hot research subject now?'
                };
                _array.push(_item);
                _array.push(_item);
                _array.push(_item);
                _array.push(_item);

                return  {array: ko.observableArray(_array), title:'title'};
            }
        }


        // this.card_stored = ko.computed(function(){
        //   return {id:self.id, }
        // });
        
        this.card_content = {};
        // this.card_content = ko.computed(function() {
        //     return {id:self.id, title:self.title(), subtitle:self.abstract(), content:self.content()};
        // }, this);

        this.isMouseEnterCard = ko.observable(false);// if mouse is over this card


        //Settings
        this.settingsArray = ko.observableArray();
        this.settingsVisible = ko.observable(false);

        //bind_data has observables, card_content is just a json object used for storing content to database
        this.any_data_changed = true;
        this.update_card_content_from_bind_data = function(bind_data, card_content){
            _.forIn(bind_data, function(value, key){
                if(typeof(value) == 'function'){//ko observable
                    if(card_content[key] !== bind_data[key]()) self.any_data_changed = true;// checking if any data has changed from the previous values
                    card_content[key] = bind_data[key]();
                }
                else if(typeof(value) == 'object'){//could be arry or a hash
                    if(value instanceof Array){
                        if(card_content[key] !== bind_data[key]) self.any_data_changed = true;// checking if any data has changed from the previous values
                        card_content[key] = bind_data[key];
                    }
                    else{//hash object re iterate through it, as it might have ko observable inside it
                        self.update_card_content_from_bind_data(bind_data[key], card_content[key], any_data_changed);  
                    }
                }
                else{//string or number
                    if(card_content[key] !== bind_data[key] ) self.any_data_changed = true;// checking if any data has changed from the previous values
                    card_content[key] = bind_data[key];
                }
            });
        };
        this.update_bind_data_from_card_content = function(bind_data, card_content){
            //console.log('bind_data is ', bind_data, 'card_content is ', card_content);
            _.forIn(bind_data, function(value, key) {
                if(card_content[key]){//if it exists
                    if(typeof(value) == 'function'){//knockout observable
                        bind_data[key](card_content[key]);//knockout observable
                    }
                    else if(typeof(value) == 'object'){//could be arry or a hash
                        if(value instanceof Array){
                            bind_data[key] = card_content[key];
                        }
                        else{//hash object re iterate through it
                            self.update_bind_data_from_card_content(bind_data[key], card_content[key]);  
                        }
                    }
                    else{//string or number
                        bind_data[key] = card_content[key];
                    }
                }
                else{
                    console.log("raise warning why was it not saved?");
                }
                
            });

            // if(card_content.title)self.title(card_content.title);
            // if(card_content.abstract)self.subtitle(card_content.abstract);
            // if(card_content.content)self.content(card_content.content);
        };
        this.load_card_content_from_store = function(){
            //console.log("id is ", self.id);
            chrome.runtime.sendMessage(
                {
                    type:'LOAD_REQ_FROM_CARD',
                    msg:{id:self.id}
                }, 
                function(response) {
                    //console.log('trying to load card_content as', response);
                    if(response.msg && response.msg.card_content){
                        self.update_bind_data_from_card_content(self.bind_data, response.msg.card_content);
                        //console.log('card_content from store is here', response.msg.card_content);
                    }
                    else{
                        //self.load_card_content_from_wikimedia(self.bind_data.title());
                    }
                }
            );
        };
        this.load_card_content_from_wikimedia = function(title){
            var _callb = function(res) {
                self.bind_data.text(res);
                self.save_card_content_to_store();
            }
            
            
            if(/^[a-zA-Z\s]*$/.test(title)){
                //mediawiki.WD(title, _callb);//works
                //mediawiki.wikipedia_suggest(title, _callb);//works
            }
            mediawiki.WikiSum(title, _callb);


        };
        this.activate = function (activationData){
            __card = activationData;

            
            self.id = __card.id;
            self.sctype = __card.card_data.sctype;
            self.card_content.id = __card.id;// for saving in databse


            if(self.sctype == card_props.TYPE.SUMMARY){
                if(__card.card_data.parsedHTMLRESULT){
                    var res = __card.card_data.parsedHTMLRESULT;
                    self.bind_data = self.create_card_type(self.sctype, {html: res._html, title:res._title});
                    //console.log(self.bind_data.html());
                }
                //Working
	                // var callb = function(res) {
	                //     self.bind_data.html(res);
	                // }
	                //mediawiki.WD("barack obama", callb);

                // mediawiki.WD_i("unicorn", function(res) {
                //     self.bind_data.html(res);
                // });
                
            }
            else if(self.sctype == card_props.TYPE.QUOTE){
                var _q = __card.card_data.quote;
                if(_q){

                    self.bind_data = self.create_card_type(self.sctype, {quote:_q});
                }
            }
            else if(self.sctype == card_props.TYPE.SIMPLE_TEXT){
                var _t = __card.card_data.title;
                var _tx = __card.card_data.text;
                if(_t && _tx){
                    self.bind_data = self.create_card_type(self.sctype, {title:_t, text:_tx});
                    
                }
            }

            //If Settings
            if(__card.card_data.settings){
                console.log(__card);
                var con = __card.card_data.settings.config;
                var map = __card.card_data.settings.config_map;
                if(con && map && (con.length == map.length)){
                    for (var i = con.length - 1; i >= 0; i--) {
                        self.settingsArray.push({ map:map[i].replace('_',' ') , config: String(con[i]) });
                    };
                }
                self.settingsVisible(true);
            }    
            
        };
        this.send_msg_to_background = function(_type, _msg){
            chrome.runtime.sendMessage(
                {
                    type:_type,
                    msg:_msg
                }, 
                function(response) {
                }
            );
        };
        this.attached =  function(view, parent){
            self.load_card_content_from_store();
            self.title(self.title());// so that the card_contenet variable updates id value
            // self.card_content.subscribe(function(newValue){
            // });

            app.on('editing:finished').then(function(id){
                if(id === self.id){
                    self.save_card_content_to_store();
                }
            });
        };
        this.save_card_content_to_store = function(){
            //first convert all ko.observable into json
            self.update_card_content_from_bind_data(self.bind_data, self.card_content);
            
            if(self.any_data_changed){
                console.log('data actually changed');
                console.log('saving', self.bind_data.title(), self.card_content);
                
                var _type = 'SAVE_REQ_FROM_CARD';
                var _msg = {card_content:self.card_content};
                self.send_msg_to_background(_type, _msg);
                
                self.any_data_changed = false;  
            }

            else console.log('no data changed');
        };

        this.onMouseLeaveCard = function(){
            self.isMouseEnterCard(false);
            return true;
        };
        this.onMouseEnterCard = function(){
            self.isMouseEnterCard(true);
            return true;
        };
    };

    return card;
});