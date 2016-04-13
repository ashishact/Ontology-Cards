//*
// Session runs before Durandal app starts
// it loads the iframe and starts the knockout app
// 
define(['durandal/app', 'jquery',  'state'],  function (app, $, state) {
	var session = function(){
		self = this;
		
		this.parsedHTMLRESULT = {};
		this.alreadyParsed = false;
		
		this.SEMANTICCARDS_ID = "SEMANTICCARDS-05041993";
		this.visibleElement = null;

		this.scrollTop = 0;
		this.sc_ui = null;//ui wrapper for sc application
		
		this.init_ui = function(viewModelString){
	        //  containers
	        var _html = document.getElementsByTagName('html')[0],
	            _body = document.getElementsByTagName('body')[0];
	
	        //  check containers
	        if (_html) {}else { console.log('page is missing html element'); return; }
	        if (_body) {}else { console.log('page is missing body element'); return; }
			
			self.visibleElement = $("body > :visible");

	        // self.detect_init();// get text from html

        	self.sc_ui = document.createElement('div');
        	self.sc_ui.innerHTML = "<div style='width: 100%; height: 100%;' id='applicationHost'></div>";

        	self.sc_ui.setAttribute('id', self.SEMANTICCARDS_ID);
        	
        	//already in css file
        	//  set frame style
        	// self.sc_ui.style.position = 'fixed';
        	// self.sc_ui.style.overflowY = 'auto';
        	// self.sc_ui.style.overflowX = 'none';
        	// self.sc_ui.style.fontSize = '16px';
        	
        	//  insert frame
        	_body.appendChild(self.sc_ui);
        	$(self.sc_ui).fadeIn(300);

	        require(['extmain'], function(extmain){
	        	if(self.parsedHTMLRESULT){
	        		state.parsedHTMLRESULT = self.parsedHTMLRESULT;
		        	delete self.parsedHTMLRESULT;
	        	}
	        });
			
		}
		this.show_frame = function(){
	        self.scrollTop = $(window).scrollTop();
			
			if(!self.sc_ui){// not started even once
				self.init_ui();
			}

			self.visibleElement.fadeOut(300);

			// app.trigger('viewModelString:show', 'frameholder');
	        $(self.sc_ui).fadeIn(300);
		};
		
		this.hide_frame = function(){
			if(!self.sc_ui){// not started even once
				self.init_ui();
			}

			// self.visibleElement.fadeIn(200, function(){$(window).scrollTop(self.scrollTop);});
			self.visibleElement.show();
			$(window).scrollTop(self.scrollTop);
	        $(self.sc_ui).fadeOut(300);
		};

		// this.show_popup = function(){
		// 	console.log('Showing popup');

		// 	if(!self.sc_ui){// not started even once
		// 		self.init_ui();
		// 	}

	 //  		self.sc_ui.style.width =    '310px';
	 //    	self.sc_ui.style.height =   '540px';
	 //    	self.sc_ui.style.right =    '';
	 //    	self.sc_ui.style.bottom =   '';
	 //    	self.sc_ui.style.top =      '10px';
	 //    	self.sc_ui.style.left =     '10px';


		// 	// state.viewModelString = 'popup';
		// 	app.trigger('viewModelString:show', 'popup');
	 //        $(self.sc_ui).fadeIn(100);

		// };
		// this.hide_popup = function(){
		// 	console.log('Hiding popup');

		// 	if(!self.sc_ui){// not started even once
		// 		self.init_ui();
		// 	}

		// 	$(self.sc_ui).fadeOut(100);
		// };

		// this.detect_init = function(){
		// 	var $detect = {
		// 		'callbacks': {
		// 			'finished': function (_result){
		// 				self.parsedHTMLRESULT = _result;
		// 				console.log("results of parsing", _result);
		//                 //  result to send
		// 	                // var _result_to_send = {
		// 	                // 	'_html':        _result._html,
		// 	                // 	'_title':       _result._title,
		// 	                // 	'_language':    _result._language,
		// 	                // 	'_rtl':         _result._rtl,
		// 	                // 	'_rtl_maybe':   _result._rtl_maybe
		// 	                // };
		// 	        }
		// 	    },
		//         'debug': false,
		//         'window': window,
		//         'jQuery': $
		// 	};
		//     //  create
		//     $detect = htmlscrape_detect($detect);
		//     $detect.start();

		// }
		
		
		return self;
	};
	
	return session();
	
});