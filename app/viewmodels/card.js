define(['durandal/app', 'knockout', 'jquery', 'lodash', 'card_props', 'mediawiki', 'qwest'], function (app, ko, $, _, card_props, mediawiki, qwest) {

    var card = function(){
        var self=this;
        var __card = null;
        this.id = null;
        this.sctype = 0;

        this.bind_data = null;
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
                if(data.text){
                    return{
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

        this.card_content = ko.computed(function() {
            return {id:self.id, title:self.title(), subtitle:self.abstract(), content:self.content()};
        }, this);

        this.isMouseEnterCard = ko.observable(false);// if mouse is over this card


        //Settings
        this.settingsArray = ko.observableArray();
        this.settingsVisible = ko.observable(false);

        this.update_card_content = function(card_content){
            if(card_content.title)self.title(card_content.title);
            if(card_content.abstract)self.subtitle(card_content.abstract);
            if(card_content.content)self.content(card_content.content);
        };
        this.load_card_content_from_store = function(){
            chrome.runtime.sendMessage(
                {
                    type:'LOAD_REQ_FROM_CARD',
                    msg:{id:self.id}
                }, 
                function(response) {
                    if(response.msg && response.msg.card_content){
                        self.update_card_content(response.msg.card_content);
                    }
                }
            );
        };
        this.activate = function (activationData){
            __card = activationData;

            
            self.id = __card.id;
            self.sctype = __card.card_data.sctype;


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
                if(_t){
                    self.bind_data = self.create_card_type(self.sctype, {text:_t});
                    // $.get('http://numbersapi.com/random/trivia', function(d){
                    //     self.bind_data.text(d);
                    // })
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
        this.send_msg_to_background = function(sctype, _msg){
            chrome.runtime.sendMessage(
                {
                    type:sctype,
                    msg:_msg
                }, 
                function(response) {
                }
            );
        };
        this.attached =  function(view, parent){
            self.load_card_content_from_store();
            self.title(self.title());// so that thee card_contenet variable updates id value
            self.card_content.subscribe(function(newValue){
            });

            app.on('editing:finished').then(function(id){
                if(id === self.id){
                    console.log('saving card data with id ', id);

                    var sctype = 'SAVE_REQ_FROM_CARD';
                    var _msg = {card_content:self.card_content()};
                    self.send_msg_to_background(sctype, _msg);
                }
            });
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