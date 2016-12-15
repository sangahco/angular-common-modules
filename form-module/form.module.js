(function(){
    "use strict";

    angular.module("form", [])

    .directive('strToNumber', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, $el, attrs, ngModel) {
                ngModel.$parsers.push(function(value) {
                    return '' + value;
                });
                ngModel.$formatters.push(function(value) {
                    return parseFloat(value);
                });
            }
        };
    })

    .directive('dateField', ['$log', '$timeout', 
    function($log, $timeout){
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, $el, attrs, ngModel){
                var tpromise;
                ngModel.$parsers.push(function(value) {
                    if(value) {
                        value = value.replace(/(\d{4})(?:-?)(\d{2})(?:-?)(\d{2})?/, '$1-$2-$3');
                        ngModel.$setValidity('dateFormat', /^[12][90][0-9][0-9]-[01]?[0-9]-[0-3]?[0-9]$/.test(value));

                        $timeout.cancel(tpromise);
                        tpromise = $timeout(function(){
                            $el.val(value);
                        }, 500);

                        return value;
                    }
                });
            }
        };
    }])

    .directive('strToDate', function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, $el, attrs, ngModel) {
                ngModel.$parsers.push(function(value) {
                    return value.format('yyyy-MM-dd');
                });
                ngModel.$formatters.push(function(value) {
                    return new Date(value);
                });
            }
        };
    });
    
})();