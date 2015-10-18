'use strict';

var app = angular.module('angularSpaceApp', [
    'ngRoute',
	'ngMessages',
    'angularSpaceApp.controller',
	'angularSpaceApp.services',
	'angularSpaceApp.directives',
	'angularSpaceApp.filters'
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
        }).when('/clock', {
            templateUrl: 'partials/parentChildDemo.html',
            controller: 'ParentClockController'
        }).
        otherwise({
            redirectTo: '/login'
        });
    }
]);


app.run(function($rootScope) {
  // use .run to access $rootScope
  $rootScope.rootProperty = 'root scope';
})


