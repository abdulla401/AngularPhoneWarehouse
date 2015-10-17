'use strict';

var app = angular.module('angularSpaceApp', [
    'ngRoute',
	'ngMessages',
    'angularSpaceAppController',
	'angularSpaceAppServices',
	'angularSpaceAppDirectives',
	'angularSpaceAppFilters'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'PhonesController'
        }). when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        }).
        otherwise({
            redirectTo: '/login'
        });
    }
]);


