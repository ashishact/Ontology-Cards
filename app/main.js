define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'gridstack'],  function (system, app, viewLocator, gridstack) {
    //>>excludeStart("build", true);
    //system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Semanticcards';

    app.configurePlugins({
        router:true,
        dialog: true,
        widget: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/sc_application', 'entrance');
    });
});