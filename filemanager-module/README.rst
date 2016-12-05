How To Use ``fileManager`` module
==================================

This module is for using our jquery plugin 'FileManager' inside AngularJS applications.

Just put a tag like the following where need it in the html paga::

    <file-manager resize style="height: 65px;display:block;" 
    data-form="#form1" 
    data-fileseq="$ctrl.file_seq" 
    data-ng-readonly="false"></file-manager>

    <form id="form1"></form>

On javascript just import the module **fileManager** 
and inject the **FileManagerService** into the service or controller and call the **upload** function::

    angular.module("app", ['fileManager'])
    .service("JobAppViewService", ['FileManagerService', function(fileManagerService){
        fileManagerService.upload()
    });

The **upload** function return a deferred object so it can be used pretty much like how we are used to::

    .service("JobAppViewService", ['FileManagerService', function(fileManagerService){
        fileManagerService.upload().then(function(){
            // do something after
        });
    });

Make sure you put the ``form`` tag too, with the correct id. Doesn't matter the location.

data-form
    Is the id of the form that will be used to save the files

data.fileseq
    It's the file_seq used to load and save the edms files.
    You can use an expression to dinamically bind the value or pass the value directly.

data-ng-readonly
    You can use this attribute to put the file manager in readonly mode. The value have to be boolean,
    it accept expression and string value (true/false)