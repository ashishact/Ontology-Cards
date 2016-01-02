//*
// Session runs before Durandal app starts
// it loads the iframe and starts the knockout app
// 
define(['text!frameindex.html', 'jquery', 'detect', 'jquery-ui'],  function (frameindextext, $, detect, jqueryui) {
	var session = function(){
		self = this;
		
		this.parsedHTMLRESULT = {};
		this.alreadyParsed = false;
		
		this.SEMANTICCARDS_ID = "SEMANTICCARDS-05041993";
		this.visibleElement = null;
				
		this.show = function(){
	          
	
	        //  containers
	        var _html = document.getElementsByTagName('html')[0],
	            _body = document.getElementsByTagName('body')[0];
	
	        //  check containers
	        if (_html) {}else { console.log('page is missing html element'); return; }
	        if (_body) {}else { console.log('page is missing body element'); return; }
	        


	        if(!self.alreadyParsed){
	        	self.detect_init();
	        	self.alreadyParsed = true;
	        }
	        
	        
			// var children = _body.children;
			// for (var i = 0, ii = children.length; i < ii; i++) {
			// 	var el = children[i];
			// 	el.style.originaldisplay = el.style.display;
			// 	if(el.style.originaldisplay == 'none')console.log(el);
			// 	el.style.display = 'none';				
			// };

			self.visibleElement = $("body > :visible");
			// self.visibleElement.hide("slow");
			self.visibleElement.fadeOut(300);

	
	        //  frame exists?
	        var frame_exist = document.getElementById(self.SEMANTICCARDS_ID);
	        if (frame_exist) { 
	        	// if(frame_exist.style.display==='none')frame_exist.style.display='block';
	        	// $(frame_exist).show('slide', { direction: 'up', duration: 300});
	        	$(frame_exist).fadeIn(300);
	        	return;
	        }

	
	        //  create frame
	        var _frame = document.createElement('div');
	            _frame.innerHTML = frameindextext;

	
	             
	        //  frame attributes
	        _frame.setAttribute('id', self.SEMANTICCARDS_ID);
	        //  set frame style
	        _frame.style.position = 'fixed';
	        _frame.style.width =    '100%';
	        _frame.style.height =   '100%';
	        _frame.style.top =      '0px';
	        _frame.style.left =     '0px';
	        _frame.style.zIndex=    '10000';
	        _frame.style.overflowY = 'auto';
	        
	        
	
	        //  insert frame
	        _body.appendChild(_frame);
	        // $(_frame).hide();// immediatly
	        // $(_frame).fadeIn(100);
	        // _body.style.overflow = 'hidden';

	        require(['extmain'], function(extmain){
	        	transferParsedHTMLRESULT(self.parsedHTMLRESULT);
	        	delete self.parsedHTMLRESULT;
	        });

		};
		
		this.hide = function(){
			var _log = function (_message) { if (console && console.log) { console.log('whil inject : ' + _message); } };
	   
	        //  containers
	        var _html = document.getElementsByTagName('html')[0],
	            _body = document.getElementsByTagName('body')[0];
	
	        //  check containers
	        if (_body) {}else { _log('page is missing body element'); return; }
	        if (_html) {}else { _log('page is missing html element'); return; }
	        
	  //       var children = _body.children;
			// for (var i = 0, ii = children.length; i < ii; i++) {
			// 	self.showElement(children[i]);
			// };

			// self.visibleElement.show('slow');
			self.visibleElement.fadeIn(200);
	        
	        
			var frame_exist = document.getElementById(self.SEMANTICCARDS_ID);
	        if (frame_exist) { 
	        	// frame_exist.style.display='none';
	        	// $(frame_exist).hide('slide', { direction: 'up', duration: 300 });
	        	$(frame_exist).fadeOut(300);
	        	return true;
	        }
	        else{
	        	return false;
	        }
		};

		this.detect_init = function(){
			var $detect = {
				'callbacks': {
					'finished': function (_result){
						self.parsedHTMLRESULT = _result;
						console.log("results of parsing", _result);
		                //  result to send
			                // var _result_to_send = {
			                // 	'_html':        _result._html,
			                // 	'_title':       _result._title,
			                // 	'_language':    _result._language,
			                // 	'_rtl':         _result._rtl,
			                // 	'_rtl_maybe':   _result._rtl_maybe
			                // };
			        }
			    },
		        'debug': false,
		        'window': window,
		        'jQuery': $
			};
		    //  create
		    $detect = initClearlyComponent__detect($detect);
		    $detect.start();

		}
		
		
		return self;
	};
	
	return session();
	
});