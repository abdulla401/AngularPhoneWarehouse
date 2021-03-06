'use strict';
console.log("tiger");
var app = angular.module('angularSpaceApp', [
    'ui.router',
	'ngMessages',
    'ngMaterial',
    'angularSpaceApp.controller',
	'angularSpaceApp.services',
	'angularSpaceApp.directives',
	'angularSpaceApp.filters',
	'angularSpaceApp.questons',
    'wizardModule',
    'formElements',
    'bStrapModule',
    'components'
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
      .state('phones.details', {
          url: '/:details',
          templateUrl: 'partials/phones.details.html',
          controller: function($scope, $stateParams) {
              $scope.details = $stateParams.details;

          }
      })
     .state('layout', {
        url: '/layout',
        templateUrl: 'partials/layout.html'
    })
     .state('directives', {
        url: '/directives',
        templateUrl: 'partials/directives.html',
        controller: 'DirectivesController'
    })
    .state('formscopedemo', {
        url: '/formscopedemo',
        templateUrl: 'partials/formscopedemo.html',
        controller: 'FormScopeDemoController',
        controllerAs: 'form',
    });


  $urlRouterProvider.otherwise('login');
})


app.run(function($rootScope) {
  // use .run to access $rootScope
  $rootScope.rootProperty = 'root scope';
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
  });
})


