//Todos
//remove event handler on detach
define(['durandal/app', 'knockout', 'jquery', 'lodash', 'card_props', 'mediawiki', 'qwest', 'state'], function (app, ko, $, _, card_props, mediawiki, qwest, state) {

    var card = function(){
        var self=this;
        var __card = null;
        this.id = null;
        this.sctype = 0;
        this.bind_data = {};
        this.isParent = false;


        this.ifcardsctype = null;

        this.optionalKeyHandler = null;
        
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
            // LEAF_EDITOR
            else if(sctype === card_props.TYPE.LEAF_EDITOR){
                if(data.title && data.text){
                    return{
                        title:ko.observable(data.title),
                        text:ko.observable(data.text)
                    }
                }
            }

            else if(sctype === card_props.TYPE.LIST){
                if(data.title && data.list){
                    var _list = [];
                    for (var i = data.list.length - 1; i >= 0; i--) {
                        _list.unshift({text: ko.observable(data.list[i].text) , on:ko.observable(data.list[i].on)});
                    }
                    return{
                        title:ko.observable(data.title),
                        list:ko.observableArray(_list)
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


        //Settings
        this.settingsArray = ko.observableArray();
        this.settingsVisible = ko.observable(false);

        
        this.load_card_content_from_wikimedia = function(title){
            // var _callb = function(res) {
            //     self.bind_data.text(res);
            // }
            
            
            // if(/^[a-zA-Z\s]*$/.test(title)){
            //     //mediawiki.WD(title, _callb);//works
            //     //mediawiki.wikipedia_suggest(title, _callb);//works
            // }
            // mediawiki.WikiSum(title, _callb);


        };
        this.activate = function (activationData){
            __card = activationData;

            
            self.id = __card.id;
            self.sctype = __card.card_data.sctype;
            self.isParent = __card.TYPE.PARENT;

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
                var _t = __card.card_data.card_content.title;
                var _tx = __card.card_data.card_content.text;
                if(_t && _tx){
                    self.bind_data = self.create_card_type(self.sctype, {title:_t, text:_tx});
                    
                }
            }

            else if(self.sctype == card_props.TYPE.LEAF_EDITOR){
                var _t = __card.card_data.card_content.title;
                var _tx = __card.card_data.card_content.text;
                if(_t && _tx){
                    self.bind_data = self.create_card_type(self.sctype, {title:_t, text:_tx});
                    
                }

            }

            else if(self.sctype == card_props.TYPE.LIST){
                var _t = __card.card_data.card_content.title;
                var _l = __card.card_data.card_content.list;
                if(_t && _l && _l.hasOwnProperty('length')){
                    self.bind_data = self.create_card_type(self.sctype, {title:_t, list:_l});
                    
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

            __card.bind_data = self.bind_data;// for reference in frame.js
            
            // self.update_bind_data_from_card_content(self.bind_data, __card.card_data.card_content);
            //^above is required if card_content comes from some other source after activation is complete
        };
        
        this.attached =  function(view, parent){
        };
       

        this.clickedOnElement = function(data, event){
            if(self.sctype == card_props.TYPE.LIST){
                if(data.on())data.on(false);
                else data.on(true);
                app.trigger('save:do_not_compare', self.id);
            }
            return true;
        };


    };

    return card;
});