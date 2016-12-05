How to use ``login`` Module
=============================


Provide the service methods for log in and log out the user

The LoginController log the user in and if the action is successful it broadcasts the event **afterLoginSuccess**.

So if you want to add some action after the login action just do the following in your module::

    angular.module("myModule", ['login'])

    // my controller
    .controller("LoginHandlerController", ['$scope', function($scope){

        // my handler
        $scope.$on('afterLoginSuccess', function(){
            // do something here after login
        });

    }]);

and in your page (login page) put the controller so it can start listening the event::

    <div ng-hide="true" ng-controller="LoginHandlerController"></div>

In this way as soon as the user log in, you can redirect him to another page.


.. important:: Remember to import the module **login**.
