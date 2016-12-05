(function(){
    "use strict";

    angular.module("fileManager", [])
    .directive("fileManager", ['$log', function($log){
        return {
            restrict: "E",
            scope: {
                file_seq: "=fileseq"
            },
            link: function(scope, element, attrs) {
                scope.$watch('file_seq', function(value){
                    if( !value ) return;  // skip if value is blank/undefined
                    $log.log("#1111");
                    var fm = element.fileManager({
                        hide_header: true,
                        hide_webhard: true,
                        hide_downall: true,
                        single: true,
                        //url: "test/filemanager.json",
                        form: attrs.form,
                        file_seq: scope.file_seq,
                        readonly: !!attrs.readonly,
                        hide_btns: !!attrs.readonly
                    });

                });

            }
        };
    }])

    .service("FileManagerService", ['$log', '$q', '$http', function($log, $q, $http){

        var _upload = function(fm){
            var deferred = $q.defer();

            fm.cmdUpload()
            .done(function(){
                $http({
                    url: "/Core/CoreUpdate.action",
                    method: "POST",
                    data: angular.element(fm.settings.form).serialize(),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function(){
                    deferred.resolve();
                });
            });

            return deferred.promise;
        }

        return {

            upload: function(){
                
                var instances = FileManager.instances;
                var ajaxCalls = [];
                for(var p in instances){
                    if( !instances.hasOwnProperty(p) )
                        continue;
                    var fm = instances[p];

                    angular.element(fm).length
                    ajaxCalls.push( _upload(fm) );
                }
                
                return $q.all(ajaxCalls);
            }

        };
    }]);

})();