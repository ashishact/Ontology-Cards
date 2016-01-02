requirejs.config({
    baseUrl :"app",
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-2.3.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1',
        'gridstack': '../lib/gridstack/dist/gridstack',
        'panzoom':'../lib/panzoom/jquery.panzoom.min',
        'lodash': '../lib/lodash/lodash',
        'jquery-ui':'../lib/jquery-ui/jquery-ui',
        'jquery-ui/core':'../lib/jquery-ui/ui/core',
        'jquery-ui/widget':'../lib/jquery-ui/ui/widget',
        'jquery-ui/mouse':'../lib/jquery-ui/ui/mouse',
        'jquery-ui/draggable':'../lib/jquery-ui/ui/draggable',
        'jquery-ui/resizable':'../lib/jquery-ui/ui/resizable',
        'store':'../lib/store/store.min',
        'sc-localstore':'session/sc_localStore',
        'extmain':'extmain',
        'sc-oninject':'session/onInject',
        'sc-session':'session/session',
        'state':'session/state',
        'detect':'../lib/htmlscrape/detect'

    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});

require.load = function (context, moduleName, url) {
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.open("GET", chrome.extension.getURL(url) + '?r=' + (new Date()).getTime(), true);
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
            eval(xhr.responseText);
            context.completeLoad(moduleName);
        }
    };
    xhr.send(null);
};
// do whatever is necessary after code is injected
require(['sc-oninject'], function(oninject){
	oninject.start();
});





