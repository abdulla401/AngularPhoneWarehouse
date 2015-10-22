'use strict';

var app = angular.module('angularSpaceApp', [
    'ui.router',
	'ngMessages',
    'angularSpaceApp.controller',
	'angularSpaceApp.services',
	'angularSpaceApp.directives',
	'angularSpaceApp.filters'
]);



app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
		 controller: 'LoginController'
    })
	
    .state('phones', {
        url: '/phones',
        templateUrl: 'partials/phones.html',
		 controller: 'PhonesController'
    })

    .state('phones.item', {
        url: '/:item',
        templateUrl: 'templates/list.item.html',
        controller: function($scope, $stateParams) {
            $scope.item = $stateParams.item;
         
        }
    });
  $urlRouterProvider.otherwise('login');
})


app.run(function($rootScope) {
  // use .run to access $rootScope
  $rootScope.rootProperty = 'root scope';
})


