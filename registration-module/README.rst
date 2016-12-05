How to use ``register`` Module
===============================


Provide the service methods for register a new user

The Controller/Service provide the method **register** that call our PMIS registration service 
and if the action is successful it broadcasts the event **afterRegistrationSuccess**.

So if you want to add some action after the registration process just do the following in your module::

    angular.module("myModule", ['register'])

    // my controller
    .controller("MyHandlerController", ['$scope', function($scope){

        // my handler
        $scope.$on('afterRegistrationSuccess', function(){
            // do something here after registration
        });

    }]);

and in your page put the controller so it can start listening the event::

    <div ng-hide="true" ng-controller="MyHandlerController"></div>

In this way as soon as the registration is complete, you can redirect the user to another page.


.. important:: Remember to import the module **register**.
