How to use ``locale`` Module
=============================

Import the module::

    angular.module("myModule", ['locale']);

and on the page put the following elements::

    <link rel="stylesheet" href="css/languages.min.css?ver=1" type="text/css" />

    <div class="panel-footer">
        <a class="lang-sm lang-lbl" lang="ko" change-locale></a> |
        <a class="lang-sm lang-lbl" lang="en" change-locale></a> |
        <a class="lang-sm lang-lbl" lang="ja" change-locale></a> |
        <a class="lang-sm lang-lbl" lang="zh" change-locale></a>
    </div>

The important things here are the attribute **change-locale** and the attribute **lang**.

.. note:: The css is not required if you don't want to use the flags icon.

    ::

        <div class="panel-footer">
            <a lang="ko" change-locale>Korean</a> |
            <a lang="en" change-locale>English</a> |
            <a lang="ja" change-locale>Japanese</a> |
            <a lang="zh" change-locale>Chinese</a>
        </div>