    
    define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'gridstack', 'state'],  function (system, app, viewLocator, gridstack, state) {
        // >>excludeStart("build", true);
        // system.debug(true);
        // >>excludeEnd("build");

        
        if(document.title.length){
            app.title = "@Semanticcards " + document.title;
        }
        else{
            app.title = 'Semanticcards';
        }
            // document.getElementById('SEMANTICCARDS-05041993').style.backgroundColor='#1b1b1b';
        
        
    

        // app.configurePlugins({
        //     router:true,
        //     dialog: true,
        //     widget: true
        // });

        app.start().then(function() {
            //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
            //Look for partial views in a 'views' folder in the root.
            viewLocator.useConvention();

            //Show the app by setting the root view model for our application with a transition.
            // app.setRoot('viewmodels/sc_application');
            app.setRoot('viewmodels/sc_frameholder', 'entrance');
        });
    });