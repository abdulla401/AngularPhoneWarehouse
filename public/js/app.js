'use strict';

var app = angular.module('angularSpaceApp', [
    'ngRoute',
    'angularSpaceAppController',
	'angularSpaceAppServices',
	'angularSpaceAppDirectives'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'MoviesCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);


