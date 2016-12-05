(function(){
    "use strict";

    angular.module("register", ['httpRequest', 'locale'])

    .service('RegisterService', ['$log', '$httpParamSerializer', '$rootScope', 'HttpRequestService',
    function($log, $httpParamSerializer, $rootScope, httpRequest ){
        return {

            register: function(user){
                
                httpRequest.request({
                    url: "/System/UserRegist.action?__RESPONSE_TYPE__=json",
                    data: $httpParamSerializer(user),
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function(response){
                    $rootScope.$broadcast("afterRegistrationSuccess", user);
                });
            }

        };
    }])

    .component('register', {
        // change the path to the template
        templateUrl: 'registration-module/register.template.jsp',
        controller: ['$log', '$scope', 'RegisterService', 
        function($log, $scope, registerService ){
            var $ctrl = this;

            this.register = function(form){
                if( form.$valid ) {  // check form validation
                    registerService.register($scope.user);
                }
            }

        }]
    });

})();