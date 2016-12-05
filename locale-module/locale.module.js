(function(){
    "use strict";

    var app = angular.module("locale", ['httpRequest']);

    app.directive("changeLocale", ['HttpRequestService', '$window', function(httpRequest, $window){
        return {
            restrict: "A",
            link: function(scope, $el, attrs, ngModel) {
                $el.on('click', function(){
                    httpRequest.request({
                        url: "/Common/LocaleChange.action?sLocale=" + attrs.lang
                    }).then(function(){
                        $window.location.reload();
                    });
                });
            }
        };
    }]);

})();