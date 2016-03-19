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
        'lodash': '../lib/lodash/lodash.min',
        'jquery-ui':'../lib/jquery-ui/jquery-ui',
        'xml2json':'../lib/jqueryplugins/xml2json',
        'store':'../lib/store/store.min',
        'sc-localstore':'session/sc_localStore',
        'extmain':'extmain',
        'sc-oninject':'session/onInject',
        'sc-session':'session/session',
        'state':'session/state',
        'detect':'../lib/htmlscrape/detect',
        'card_props':'viewmodels/card_props',
        'mediawiki':'data/mediawiki',
        'searchapi':'data/searchapi',
        'qwest':'../lib/qwest/qwest.min',
        'bloodhound':'temporalcontextmachine/bloodhound',
        'interpreter':'temporalcontextmachine/interpreter',

    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    },
    map: {
        '*': {
            'jquery-ui/core':'jquery-ui',
            'jquery-ui/widget':'jquery-ui',
            'jquery-ui/mouse':'jquery-ui',
            'jquery-ui/draggable':'jquery-ui',
            'jquery-ui/resizable':'jquery-ui',
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

var gg = function(l){console.log(l)};

//Personal work
console.warn('Remove youtube deleter');
var _elm = document.getElementById('feed-main-what_to_watch');
if(_elm)_elm.parentNode.removeChild(_elm);






