define(['lodash'],  function (_) {

    var create_queue = function(state){
        var st = state;

        var me= this;
        this.queue = [];
        this.push = function(act){
            me.queue.push(act);
        };
        this.remove = function(act){
            _.remove(me.queue, function(a){return a.id === act.id ;});
        };
        this.pop = function(){
            me.queue.pop();
        };
        this.getlast = function(){
            return _.last(me.queue);
        };
        this.getfirst = function(){
            return _.first(me.queue);
        };
        this.create = function(opt){
            // if(opt._type === 'card:editing'){
            //     me.push({_type:'C_Edit'})
            // }
        };

    };
    var state = {
        layout_key:"grid",/*line, grid, float-grid*/
        viewframe_key:'home',
        pointer:{

            touch:{
                isdown:false,
                isup:true,
            },
            mouse:{
                exists:false,
                isleftdown:false,
                ismiddledown:false,
                isrightdown:false,
                isanydown:false,
                isanyup:true,
                iswheelmoving:false,
                x:0,
                y:0,
                last_x:0,
                last_y:0,
                last_target:null,
            },

            isdragging_any_card:false,
            isdragging_many_card:false,
            isdragging_on_background:false,

            isresizing_any_card:false,
            isresizing_any_frame:false,
            isresizing_window:false,

            hovered_on_card:null,


        },
        keyboard:{
            exists:false,
            isanykeydown:false,
            isanykeyup:true,
            downkeycode:null,
            lastupkeycode:null,
            
            ctrl_down:false,
            alt_down:false,
            shift_down:false
        },
        movable_cards:[],
        resizable_cards:[],
        static_cards:[],
        volatile_cards:[],
        window_session_only_cards:[],
        tab_session_only_cards:[],
        unsaved_temporary_cards:[],
        expanded_cards:[],



        now_moving_cards:[],
        now_resizing_cards:[],

        isany_card_being_edited:false,
        now_editing_cards:[],
        
        isany_card_expanded:false,
        now_expanded_cards:[],

        isany_card_selcted:false,
        ismany_card_selected:false,
        last_selected_card:null,
        primary_selected_card:null,
        now_selected_cards:[],
        
        actions:{
            select_this_card: function(_state, card){
                for (var i = _state.now_selected_cards.length - 1; i >= 0; i--) {
                    _state.now_selected_cards[i].isSelected(false);
                };
                _state.now_selected_cards = [];
                _state.now_selected_cards.push(card);
                _state.primary_selected_card = card;
                card.isSelected(true);
                _state.isany_card_selcted = true;
                _state.ismany_card_selcted = false;
                _state.last_selected_card = card;
            },
            get_selected_cards: function(_state){
                return _state.now_selected_cards;
            },
            get_primary_selected_card: function(_state){
                return _state.primary_selected_card;
            },
            removingThisCard: function(card, _state){
                if(card === _state.primary_selected_card){
                    _state.primary_selected_card = null;
                }
                if(card === _state.last_selected_card){
                    _state.last_selected_card = null;
                }
                _.remove(_state.now_selected_cards, function(c){ return c==card });

                if(!_state.now_selected_cards.length){
                    _state.isany_card_selcted = false;
                    _state.ismany_card_selcted = false;
                }
                
            }

        },



        issearchbar_focused:false,

        queue: new create_queue(),


    }
    return state;
});
