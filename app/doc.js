
//Background MSG Pattern:
	SW:QUESTION_FROM_TAB => 
	{
		type: "SW:QUESTION_FROM_TAB",
		msg:{question:'String'}
	}

	SW:ANSWER_FROM_BACK =>
	{
		type:"SW:ANSWER_FROM_BACK",
		msg:{
			id:'im34nxls',
			answers:{
				answers:[]
			},
			source:''
		}
	}


	SUGGESTION_UI:DATA =>
	{
		title:'title with large font',// must exist
		desc:'description',// optional
		thumb_source:'image source url',//optional
	}

	AMD:DEFINITION =>
	(function () {
		    var define, exports = {};
		    if (window.define && window.define.amd) {
		        define = window.define;
		    } else {
		        exports = window;
		        define = function (name, dependencies, fn) {
		            var deps = [];
		            for (var i = 0; i < dependencies.length; i++)
		                deps.push(window[dependencies[i]]);
		            var module = fn.apply(undefined, deps);
		            if (!window[name]) window[name] = module;
		        };
		    }
	})()