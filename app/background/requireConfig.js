requirejs.config({
    baseUrl :"../../app",
    paths: {
        'text': '../lib/require/text',
        'knockout': '../lib/knockout/knockout-2.3.0',
        'jquery': '../lib/jquery/jquery-1.9.1',
        'lodash': '../lib/lodash/lodash',
        'store':'../lib/store/store.min',
        'background':'background/background',
        'localstore':'background/localStore'
    }
});

// require.load = function (context, moduleName, url) {
//     var xhr;
//     xhr = new XMLHttpRequest();
//     xhr.open("GET", chrome.extension.getURL(url) + '?r=' + (new Date()).getTime(), true);
//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             eval(xhr.responseText);
//             context.completeLoad(moduleName);
//         }
//     };
//     xhr.send(null);
// };


require(['background'], function(oninject){
    var iframe = document.body.appendChild(document.createElement('iframe'));
    iframe.src = 'http://www.factbites.com';
    iframe.onload = function() {
      //console.log(iframe.contentDocument.innerHTML);
      console.log('loaded');
    };
});





