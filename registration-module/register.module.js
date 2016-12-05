(function(){
    "use strict";

    angular.module("register", ['jobApp', 'login', 'httpRequest', 'locale'])

    .service('RegisterService', ['$log', '$httpParamSerializer', '$rootScope', 'LoginService', 'HttpRequestService',
    function($log, $httpParamSerializer, $rootScope, loginService, httpRequest ){
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
                    loginService.login(user).then(function(){
                        $rootScope.$broadcast("afterRegistrationSuccess", user);
                    });
                });
            }

        };
    }])

    .component('register', {
        templateUrl: 'commons/register.template.jsp',
        controller: ['$log', '$scope', 'RegisterService', 'JobAppService', 
        function($log, $scope, registerService, jobAppService ){
            var $ctrl = this;

            $scope.user = {
                tos_acc: "Y",  // skip terms of service page
                pubct_div: 4
            };

            $scope.$watch('user.user_no', function(nvalue, ovalue){
                // we set the email as the user name
                $scope.user.comp_email = nvalue;
            });

            jobAppService.load_positions()
            .then(function(data){
                $ctrl.job_positions = data;
            });

            this.register = function(form){
                if( form.$valid ) {  // check form validation
                    registerService.register($scope.user);
                }
            }

        }]
    });

})();