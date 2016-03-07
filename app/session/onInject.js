define(['sc-session'], function (session){
	
	oninject = function(){
		var self = this;
		self.keyConfig = {keyCode: 17};//Ctrl
		self.frameShown = false;
		self.popupShown = false;
		self.isKeyDown = false;
		self.keyDownTime = 0;
		self.keyUpTime = 0;
		self.keyDown=  function(event) {// actually it give events coutinously a key if pressed
			if (event.which == self.keyConfig.keyCode || event.keyCode == self.keyConfig.keyCode) {
				if(self.isKeyDown === false){
					self.keyDownTime = event.timeStamp;//@ccb
					self.isKeyDown = true;
				}
				
			}
			else{//some other key is pressed
				if(self.isKeyDown){// ctrl key is pressed & someother key is also pressed
					//may be Ctrl+S, Ctrl+A, //Dismiss this, its for some other purpose
					self.isKeyDown = false;
				}
			}
		},
		self.keyUp = function(event) {
			if (event.which == self.keyConfig.keyCode || event.keyCode == self.keyConfig.keyCode) {
				if(self.isKeyDown === true){
					self.keyUpTime = event.timeStamp;//@cc
					console.log("time dif,", Math.abs(self.keyUpTime - self.keyDownTime));
					if (Math.abs(self.keyUpTime - self.keyDownTime) < 300) {//1 second

						self.toggleSession('frameholder');
					}
					self.isKeyDown = false;
				}
			};
		};
	
		self.attachKeyHandler = function() {
			document.addEventListener('keydown', self.keyDown);
			document.addEventListener('keyup', self.keyUp);
		};
		self.start = function() {
			self.attachKeyHandler();

			chrome.runtime.onMessage.addListener(
              function(request, sender, sendResponse) {
                if(request.type == 'browser_action'){
	                self.toggleSession('frameholder');
                }
            });
		};
		self.toggleSession = function(viewString){

				if(viewString == 'frameholder'){// full frame
	                if (self.frameShown === true) {
						session.hide_frame();
						self.frameShown = false;
					} else {
						session.show_frame();
						self.frameShown = true;
					}
				}
				else if(viewString == 'popup'){//popup
					if (self.popupShown === true) {
						session.hide_popup();
						self.popupShown = false;
					} else {
						session.show_popup();
						self.popupShown = true;
					}
				}
		};
		return self;
	};
	return oninject();

});
