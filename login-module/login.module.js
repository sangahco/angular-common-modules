(function(){
    "use strict";

    angular.module("login", ['httpRequest'])

    .service("LoginService", ['$location', '$httpParamSerializer', 'HttpRequestService',
    function($location, $httpParamSerializer, httpRequest){
        return {

            login: function(user){
                return httpRequest.request({
                    url: "/Main/Login.action?__RESPONSE_TYPE__=json",
                    method: "POST",
                    data: $httpParamSerializer( $.extend(user, {
                        forward: "/jobapp/commons/login.response.jsp"
                    })),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
            },

            logout: function(){
                return httpRequest.request({
                    url: "/logout",
                    method: "POST"
                }).then(function(){
                    $location.path('/');
                });
            }
        };
    }])

    .controller("LoginController", ['$log', '$scope', '$rootScope', 'LoginService',
    function LoginController($log, $scope, $rootScope, loginService) {
        $log.log("LoginController...");

        this.login = function(form){
            if( form.$valid ) {  // check form validation
                loginService.login($scope.user)
                .then(function(response){
                    if( !response.data.error )
                        $rootScope.$broadcast('afterLoginSuccess' );
                });
            }
        }
    }])

    .component('login', {
        // change the path to the template
        templateUrl: 'login-module/login.template.jsp',
        controller: 'LoginController'
    });

})();