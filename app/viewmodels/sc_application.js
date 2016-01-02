define(['plugins/http', 'durandal/app', 'knockout', 'jquery'], function (http, app, ko, $) {
    var sc_application = {// can hold multiple frames, every frame has same data just that they can have diff view
        name: "Semanticcards",
        description: "Sementic cards application",
        frames: ko.observableArray([]),

        afterFrameAdded: function(items){

        },
        addFrame: function(frame){
            this.frames.push(frame);
        },
        createNewBindings: function(){
            sanitizeInnerHTML = function(el){
                // var nodes = $(el).childNodes;
                // for (var i = nodes.length - 1; i >= 0; i--) {
                //     if(nodes[i].nodeType == 1){
                //         if(nodes[i].childNodes.length)sanitizeInnerHTML(nodes[i]);
                //         else{
                //           $(nodes[i]).remove();
                //           console.log("nodes[i]", nodes[i]);
                //         } 
                //     }
                // };
                console.log("you changed ", el.innerHTML);
            };

            ko.bindingHandlers.sc_contenteditable = {
                init: function(element, valueAccessor, allBindingsAccessor) {
                    ko.utils.registerEventHandler(element, "blur", function() {
                        var modelValue = valueAccessor();
                        var elementValue = element.innerHTML;
                        if (ko.isWriteableObservable(modelValue)) {
                            modelValue(elementValue);
                        }
                        else { //handle non-observable one-way binding
                            var allBindings = allBindingsAccessor();
                            if (allBindings['_ko_property_writers'] && allBindings['_ko_property_writers'].htmlValue) allBindings['_ko_property_writers'].htmlValue(elementValue);
                        }
                    })
                },
                update: function(element, valueAccessor) {
                    var value = ko.utils.unwrapObservable(valueAccessor()) || "";
                    if(value == '<br>') value = '';
                    element.innerHTML = value;
                    // if($(element).childNodes)
                    sanitizeInnerHTML(element);
                }
            };


            ko.bindingHandlers.fadeVisible = {
                init: function(element, valueAccessor) {
                    // Initially set the element to be instantly visible/hidden depending on the value
                    var value = valueAccessor();
                    $(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
                },
                update: function(element, valueAccessor) {
                    // Whenever the value subsequently changes, slowly fade the element in or out
                    var value = valueAccessor();
                    ko.unwrap(value) ? $(element).fadeIn() : $(element).fadeOut();
                }
            };

            // $.sc_find_rec = function(el, cssclass){
            //     for (var i = el.children.length - 1; i >= 0; i--) {
            //         console.log(i,el.children[i]);
            //         if($(el.children[i]).hasClass(cssclass)){
            //             return el.children[i];
            //         }
            //         else{
            //             $.sc_find_rec(el.children[i], cssclass);
            //         }
            //     }
                
            // };
            
        },
        // initFeedEk: function($){
        //     $.fn.FeedEk = function (opt) {
        //         var def = $.extend({
        //             MaxCount: 5,
        //             ShowDesc: true,
        //             ShowPubDate: true,
        //             DescCharacterLimit: 0,
        //             TitleLinkTarget: "_blank",
        //             DateFormat: "",
        //             DateFormatLang:"en"
        //         }, opt);
                
        //         var id = $(this).attr("id"), i, s = "", dt;
        //         $("#" + id).empty();
        //         if (def.FeedUrl == undefined) return;       
        //         $("#" + id).append('loading');

        //         var YQLstr = 'SELECT channel.item FROM feednormalizer WHERE output="rss_2.0" AND url ="' + def.FeedUrl + '" LIMIT ' + def.MaxCount;

        //         $.ajax({
        //             url: "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(YQLstr) + "&format=json&diagnostics=false&callback=?",
        //             dataType: "json",
        //             success: function (data) {
        //                 $("#" + id).empty();
        //                 if (!(data.query.results.rss instanceof Array)) {
        //                     data.query.results.rss = [data.query.results.rss];
        //                 }
        //                 $.each(data.query.results.rss, function (e, itm) {
        //                     s += '<li><div class="itemTitle"><a href="' + itm.channel.item.link + '" target="' + def.TitleLinkTarget + '" >' + itm.channel.item.title + '</a></div>';
                            
        //                     if (def.ShowPubDate){
        //                         dt = new Date(itm.channel.item.pubDate);
        //                         s += '<div class="itemDate">';
        //                         if ($.trim(def.DateFormat).length > 0) {
        //                             try {
        //                                 moment.lang(def.DateFormatLang);
        //                                 s += moment(dt).format(def.DateFormat);
        //                             }
        //                             catch (e){s += dt.toLocaleDateString();}                            
        //                         }
        //                         else {
        //                             s += dt.toLocaleDateString();
        //                         }
        //                         s += '</div>';
        //                     }
        //                     if (def.ShowDesc) {
        //                         s += '<div class="itemContent">';
        //                          if (def.DescCharacterLimit > 0 && itm.channel.item.description.length > def.DescCharacterLimit) {
        //                             s += itm.channel.item.description.substring(0, def.DescCharacterLimit) + '...';
        //                         }
        //                         else {
        //                             s += itm.channel.item.description;
        //                          }
        //                          s += '</div>';
        //                     }
        //                 });
        //                 $("#" + id).append('<ul class="feedEkList">' + s + '</ul>');
        //             }
        //         });
        //     };
        // },
        activate: function(){
            this.addFrame({viewModel:"viewmodels/frame"});
            this.createNewBindings();
            // this.initFeedEk($);
        }

    }

    return sc_application;
});