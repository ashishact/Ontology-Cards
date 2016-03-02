define(['durandal/app', 'knockout', 'jquery', 'state'], function (app, ko, $, state) {
    var sc_application = function(){
    	var self = this;
        this.frameholderViewModel = ko.observable('');
    	this.popupViewModel = ko.observable('viewmodels/sc_popup');

        this.frameholderShown = ko.observable(true);
        this.popupShown = ko.observable(true);

        self.$sc_ui = $('#SEMANTICCARDS-05041993');

        app.on('viewModelString:show').then(function(str){
                self.showView(str);
                console.log('showing');
        });

        this.showView = function(vm){
            if(vm == 'frameholder'){
                if(self.frameholderViewModel().length){//observable exist // already created
                }
                else{// not created yet , create
                    self.createView(vm);
                }
                self.frameholderShown(true);
                self.popupShown(false);// hide popup
                self.$sc_ui.draggable('disable');
                
            }
            else if(vm == 'popup'){
                if(self.popupViewModel().length){//observable exist // already created
                }
                else{// not created yet , create
                    self.createView(vm);
                }
                self.popupShown(true);
                self.frameholderShown(false);//hide frameholder
                self.$sc_ui.draggable('enable');
            }
        };

    	this.createView = function(vm){
            console.log('creating again');

    		if(vm == 'frameholder'){
    			self.frameholderViewModel('viewmodels/sc_frameholder');
                self.frameholderShown(true);
    		}
    		else if(vm == 'popup'){
    			self.popupViewModel('viewmodels/sc_popup');
                self.popupShown(true);
    		}
    	};
   	}
   	return new sc_application();
});