'use strict';

var app = angular.module('angularSpaceApp', [
    'ui.router',
	'ngMessages',
    'angularSpaceApp.controller',
	'angularSpaceApp.services',
	'angularSpaceApp.directives',
	'angularSpaceApp.filters',
	'angularSpaceApp.questons'
]);



app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
		 controller: 'LoginController'
    })
	
    .state('questions', {
        url: '/questions',
        templateUrl: 'partials/questionsPage.html',
		 controller: 'QuestionsController'
    })

    .state('phones', {
        url: '/phones',
        templateUrl: 'partials/phones.html',
		 controller: 'PhonesController'
    })

    .state('phones.details', {
        url: '/:details',
        templateUrl: 'partials/phones.details.html',
        controller: function($scope, $stateParams) {
            $scope.details = $stateParams.details;
         
        }
    });
  $urlRouterProvider.otherwise('login');
})


app.run(function($rootScope) {
  // use .run to access $rootScope
  $rootScope.rootProperty = 'root scope';
})


