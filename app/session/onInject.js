define(['sc-session'], function(session){
	
	oninject = function(){
		var self = this;
		self.keyConfig = {keyCode: 17};//Ctrl
		self.frameShown = false;
		self.isKeyDown = false;
		self.keyDownTime = 0;
		self.keyUpTime = 0;
		self.keyDown=  function(event) {// actually it give events coutinously a key if pressed
			if (event.which == self.keyConfig.keyCode || event.keyCode == self.keyConfig.keyCode) {
				if(self.isKeyDown === false){
					self.keyDownTime = event.timeStamp;//@ccb
					self.isKeyDown = true;
				}
				
			};
		},
		self.keyUp = function(event) {
			if (event.which == self.keyConfig.keyCode || event.keyCode == self.keyConfig.keyCode) {
				if(self.isKeyDown === true){
					self.keyUpTime = event.timeStamp;//@cc
					console.log("time dif,", Math.abs(self.keyUpTime - self.keyDownTime));
					if (Math.abs(self.keyUpTime - self.keyDownTime) < 300) {//1 second

						if (self.frameShown === true) {
							session.hide();
							self.frameShown = false;
						} else {
							session.show();
							self.frameShown = true;
						}
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
	                if (self.frameShown === true) {
						session.hide();
						self.frameShown = false;
					} else {
						session.show();
						self.frameShown = true;
					}
                }
            });
		};
		
		return self;
	};
	return oninject();

});
