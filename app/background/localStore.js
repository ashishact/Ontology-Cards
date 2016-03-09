define(['store', 'lodash'],  function (store, _) {
    var sc_localStore = function(){
        var self = this;
        this.frameview_prefix = "sc_frameview_";
        this.card_prefix = "sc_card_";
        this.card_content_prefix = "sc_content_";
        this.store = store;
        //store.clear();
        // console.log(store.getAll());
        //************************************
        this.getAll = function(){
            return store.getAll();
        }
        this.removeAll = function(){
            store.clear();
        }

        //*************************************
        this.load_card = function(id){
            var card = self.store.get(self.card_prefix + id.toString());
            return card;
        };

        this.load_cards = function(ids){
            var cards = {};
            for (var i = ids.length - 1; i >= 0; i--) {
                var card = self.store.get(self.card_prefix + ids[i].toString());
                if(card){
                    cards[ids[i]] = card;
                }
            };
            return cards; // {0:_card0, 1:_card1}
        };

        this.save_card = function(card){
            self.store.set(self.card_prefix + card.id.toString(), card);
        };

        this.save_cards = function(cards){// {0:_card0, 1:_card1}
            _.forIn(cards, function(value, key) {
                self.store.set(self.card_prefix + key.toString(), value);//key is id and value is a _card
            });
        };

        this.remove_card = function(id){
            self.store.remove(self.card_prefix + id.toString());  
        };

        this.remove_cards = function(ids){
            for (var i = ids.length - 1; i >= 0; i--) {
                self.store.remove(self.card_prefix + ids[i].toString());
            };
        };

        //*************************************

        this.load_card_content = function(id){
            var data = self.store.get(self.card_content_prefix + id.toString());
            return data;
        };
        this.load_card_contents = function(ids){
            var card_contents = [];
            for (var i = ids.length - 1; i >= 0; i--) {
                var data = self.store.get(self.card_content_prefix + ids[i].toString());
                card_contents.push(data);
            };
            return card_contents;
        };
        this.save_card_content = function(content){
            if(content.id){
                self.store.set(self.card_content_prefix + content.id.toString() , content);
            }
        };
        this.save_card_contents = function(contents){
            for (var i = datas.length - 1; i >= 0; i--) {
                self.store.set(self.card_content_prefix + contents[i].id.toString(), contents[i]);
            }
        };
        this.remove_card_content = function(id){
            self.store.remove(self.card_content_prefix + id.toString());
        };

        this.remove_card_contents = function(ids){
            for (var i = ids.length - 1; i >= 0; i--) {
                self.store.remove(self.card_content_prefix + ids[i].toString());
            }
        }

        //***************************************
        this.load_frameview_ids = function(frameview_key){
            ids = self.store.get(self.frameview_prefix+frameview_key);
            if(ids)return ids;
            else return [];
        };

        this.save_frameview_ids = function(frameview_key, ids){
            self.store.set(self.frameview_prefix+frameview_key, ids);
        };

        //*****************************************
        //@ get rid of 2 funct
        this.load_frame_view_structure = function(){
            return self.store.get('sc_frameview_structure');
        };
        this.save_frame_view_structure = function(frameview_structure){
            self.store.set('sc_frameview_structure', frameview_structure);  
        };
        //*****************************************
        this.load_frame_config = function(){
            return self.store.get('sc_frame_config');
        };
        this.save_frame_config = function(frame_config){
            self.store.set('sc_frame_config', frame_config);  
        };
        this.get_root = function(){
            return self.store.get('__root');
        }
        this.set_root = function(){
            self.store.set('__root');
        }
        //*****************************************

    };

    return sc_localStore;
});
