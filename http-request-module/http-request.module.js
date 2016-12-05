(function(){
    "use strict";

    angular.module("httpRequest", [])

    .service("HttpRequestService", ['$log', '$q', '$rootScope', '$http', 
    function($log, $q, $rootScope, $http){

        return {
            request: function(opts){
                var deferred = $q.defer();

                $http(opts).then(function(response){
                    $rootScope.error = null;
                    if( response.data.error ) 
                    {
                        $rootScope.error = response.data.error;
                        deferred.reject(response);
                    } 
                    else 
                    {
                        deferred.resolve(response);
                    }
                });

                return deferred.promise;
            }
        }
    }]);

})();