define(['jquery','qwest'], function ($, qwest) {
    var createapi = function(){
        var self = this;
        /* PRINCIPLES ############################################ */
        // 1. API'S URL:
        // 1a.Parts of the url:
        this.wd = "http://www.wikidata.org/w/api.php?";
        this.wp = "http://en.wikipedia.org/w/api.php?"; // list of iso-code = ? ----------------<
        this.aw = "action=wbgetentities" ; // rather wdpoint
        this.aq = "action=query" ; // ?rather wppage
        this.ts = "&sites=enwiki" ; // wd only&required. // list of wiki-code = ? --------------<
        this.t = "&titles=" // target, wd|wp
        this.i = "Dragon"; //item, wd|wp
          // i_ht = "＊～米字鍵～" ; // wdpoint|wppage -- +few data
          // i_hs = "＊～米字键～" ; // wdpoint: missing; wppage: redirect (confirmed)
          // i_ht = "中國" ; // wdpoint|wppage -- +many data
          // i_hs = "中国" ; // wdpoint: missing; wppage: redirect (idem)
        this.l  = "&languages=zh|zh-classical|zh-cn|zh-hans|zh-hant|zh-hk|zh-min-nan|zh-mo|zh-my|zh-sg|zh-tw|fr" ; // wdpoint only
        this.ps = "&props=sitelinks|labels|aliases|descriptions" ; // wdpoint only
          //sitelinks: all interwikis
          //labels: title without _(tag), for l (languages) only
          //aliases: label of redirect page
        this.p = "&prop=extracts&exintro&explaintext&exsentences=10" ; // wppage only
        this.r = "&redirects&converttitles" ; // wppage only
        this.c = "&callback=?" // wd|wp
        this.f = "&format=json" // wd|wp

        //1b. Compose your url:
        this.urlwd = this.wd+this.aw+this.ts+this.t+this.i+this.l+this.ps    +this.c+this.f; // typical wd query
        this.url   = this.wp+this.aq   +this.t+this.i     +this.p+this.r+this.c+this.f; // typical wp query
        // Examples print in console:
        console.log("1. WD: "+this.urlwd);
        console.log("2. WP: "+this.url);

        //1c. DOM injection:
        //$("body").html('<a href="'+url+'">Link</a>.<br />'+ url); //publish the url.
        // wd+i INconsistently provide variants.

        /* DEMO ################################################## */
        /* 2. TEMPLATING ***************************************** */
        // 2a. Single query :
        this.WD = function(item, callback) {
            var url = self.wp+self.aq+self.t+ item +self.p+self.r+self.f;
            //url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Stack%20Overflow";
            console.log("URL", url);
            qwest.get(url,{})
            .then(function(xhr, response) {
                    var item_id = Object.keys(response.query.pages)[0]; // THIS DO THE TRICK !
                    extract = response.query.pages[item_id].extract;
                    result = "<b>⇒</b> " + extract;
                    callback(result);
            });
        };
        this.WD_i = function (item, callback) {
            var url = self.wp+self.aq+self.t+ item +self.p+self.r+self.f;
            //url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Stack%20Overflow";
            console.log("URL", url);
            qwest.get(url,{})
            .then(function(xhr, response) {
                //console.log("response", response);
                $.each(response.query.pages, function (i, json) { // THIS DO THE TRICK !
                    sent = json.extract.toString();
                    result = "<b>En:</b> <t>" + item + "</t> <b>⇒</b> " + sent;
                    callback(result);
                    //$('#anchor2').append("<div>"+result+"</div>");// append
                });
            });
        };

    };
    var mediawiki = new createapi();
    return mediawiki;

});