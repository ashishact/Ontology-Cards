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
        'lodash': '../lib/lodash/lodash',
        'jquery-ui':'../lib/jquery-ui/jquery-ui',
        'jquery-ui/core':'../lib/jquery-ui/ui/core',
        'jquery-ui/widget':'../lib/jquery-ui/ui/widget',
        'jquery-ui/mouse':'../lib/jquery-ui/ui/mouse',
        'jquery-ui/draggable':'../lib/jquery-ui/ui/draggable',
        'jquery-ui/resizable':'../lib/jquery-ui/ui/resizable',
        'main':'main'

    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});




require(['main'], function(main) {
    console.log("loading main", main);

});