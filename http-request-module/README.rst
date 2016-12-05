How to use ``httpRequest`` Module
===================================

Import the module **httpRequest** and inject the service **HttpRequestService** then just call the method **request**.
The method accept the same parameters of the Angular service $http (https://docs.angularjs.org/api/ng/service/$http).

::

    angular.module("app", ['httpRequest'])
    .service("JobAppService", ['$httpParamSerializer', 'HttpRequestService', 
    function($httpParamSerializer, httpRequest){

        httpRequest.request({
            url: "/jobapp/loadJobPosition.action",
            data: $httpParamSerializer({
                position_id: position_id
            }),
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(function(){
            // good response ok
        }, function(){
            // bad response not ok
        });

    });

If the response is a json object that contains an error message, it will be saved inside the rootScope, under $rootScope.error,
so it can be used for showing the message to the user, and most important the Referred object that is returned is rejected.