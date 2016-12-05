<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="sangah" uri="/WEB-INF/tld/sangah.tld" %>
<style>
body {
padding-top: 90px;
background-color: rgb(225, 225, 225);
}
.panel-login {
border-color: #ccc;
-webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
-moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
}
.panel-login>.panel-heading {
color: #00415d;
background-color: #fff;
border-color: #fff;
text-align:center;
}
.panel-login>.panel-heading a{
text-decoration: none;
color: #666;
font-weight: bold;
font-size: 15px;
-webkit-transition: all 0.1s linear;
-moz-transition: all 0.1s linear;
transition: all 0.1s linear;
}
.panel-login>.panel-heading a.active{
color: #029f5b;
font-size: 18px;
}
.panel-login>.panel-heading hr{
margin-top: 10px;
margin-bottom: 0px;
clear: both;
border: 0;
height: 1px;
background-image: -webkit-linear-gradient(left,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0));
background-image: -moz-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
background-image: -ms-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
}
.panel-login input[type="text"]:not(.input-sm),.panel-login input[type="email"],.panel-login input[type="password"] {
height: 45px;
font-size: 16px;
-webkit-transition: all 0.1s linear;
-moz-transition: all 0.1s linear;
transition: all 0.1s linear;
}
.panel-login input:hover,
.panel-login input:focus {
outline:none;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
}
.btn-login {
background-color: #59B2E0;
outline: none;
color: #fff;
font-size: 14px;
height: auto;
font-weight: normal;
padding: 14px 0;
text-transform: uppercase;
border-color: #59B2E6;
}
.btn-login:hover,
.btn-login:focus {
color: #fff;
background-color: #53A3CD;
border-color: #53A3CD;
}
.forgot-password {
text-decoration: underline;
color: #888;
}
.forgot-password:hover,
.forgot-password:focus {
text-decoration: underline;
color: #666;
}

.btn-register {
background-color: #1CB94E;
outline: none;
color: #fff;
font-size: 14px;
height: auto;
font-weight: normal;
padding: 14px 0;
text-transform: uppercase;
border-color: #1CB94A;
}
.btn-register:hover,
.btn-register:focus {
color: #fff;
background-color: #1CA347;
border-color: #1CA347;
}
</style>

<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-login">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xs-6">
                            <a href="#!/login" id="login-form-link" >본인확인</a>
                        </div>
                        <div class="col-xs-6">
                            <a href="#!/register" class="active" id="register-form-link">입사지원하기</a>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-12">
                            <div ng-show="$root.error" class="alert alert-danger" role="alert">{{$root.error.message}}</div>
                            
                            <form name="form" method="post" role="form" style="display: block;">
                                <div class="form-group">
                                    <label class="control-label">채용공고 선택</label>
                                    <select class="form-control" name="position_id" required
                                    ng-options="value.position_id as value.position_nm for (key, value) in $ctrl.job_positions"
                                    ng-model="user.position_id" 
                                    ng-class="form.position_id.$valid ? 'has-success' : 'has-error'">
                                    </select>
                                </div>

                                <div class="form-group has-feedback" >
                                    <label class="control-label" for="user_name"><sangah:msg id='label.0156' /></label>
                                    <input type="text" class="form-control" name="user_name" id="user_name" required placeholder="<sangah:msg id='label.0156' />" 
                                    ng-class="form.user_name.$valid ? 'has-success' : 'has-error'"
                                    ng-model="user.user_name" >
                                    <span ng-show="form.user_name.$valid" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                </div>

                                <div class="form-group has-feedback">
                                    <label class="control-label" for="email">Email</label>
                                    <div class="input-group" ng-class="form.email.$valid ? 'has-success' : 'has-error'">
                                        <span class="input-group-addon">@</span>
                                        <input type="email" class="form-control" name="email" id="email" 
                                        ng-model="user.user_no" required placeholder="Email" >
                                    </div>
                                    <span ng-show="form.email.$valid" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                </div>

                                <div class="form-group has-feedback">
                                    <label class="control-label" for="passwd"><sangah:msg id='label.0127' /></label>
                                    <input type="password" name="passwd" id="passwd" class="form-control" placeholder="<sangah:msg id='label.0127' />"
                                    ng-class="form.passwd.$valid ? 'has-success' : 'has-error'"
                                    ng-model="user.passwd" required>
                                    <span ng-show="form.passwd.$valid" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                                </div>

                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-sm-6 col-sm-offset-3">
                                            <input type="submit" id="login-submit" class="form-control btn btn-login" value="Apply"
                                            ng-click="$ctrl.register(form)">
                                        </div>
                                    </div>
                                </div>
                                <pre ng-hide="true">{{form | json}}</pre>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="panel-footer">
                    <a class="lang-sm lang-lbl" lang="ko" change-locale></a> |
                    <a class="lang-sm lang-lbl" lang="en" change-locale></a> |
                    <a class="lang-sm lang-lbl" lang="ja" change-locale></a> |
                    <a class="lang-sm lang-lbl" lang="zh" change-locale></a>
                </div>
            </div>
        </div>
    </div>
</div>
<iframe id="ifrmLogin" name="ifrmLogin" frameborder="no" scrolling="no" width="0" height="0"></iframe>