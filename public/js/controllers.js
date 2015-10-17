'use strict';
var myDebugVar;

//TODO node 2 : use the controlleras directive
var angularSpaceAppController = angular.module('angularSpaceAppController', [
	'angularSpaceAppFilters'
]);

angularSpaceAppController.controller('PhonesController', ['$scope', 'PhoneResource', '$timeout', 'myDateFilter',
	function($scope, PhoneResource, $timeout, myDateFilter) {
		$scope.clock = {};
		$scope.orderProp = '';
		$scope.query = "";
		$scope.phones = PhoneResource.query();

		$scope.$watch('query', function(oldValue, newValue) {
			console.log("Search query has changed");
			
		})

		var updateClock = function() {
			$scope.clock.now = new Date();
			$timeout(function() {
				updateClock();
			}, 1000);
		};
		updateClock();
	}
]);


angularSpaceAppController.controller('LoginController', ['$scope', '$location',
	function($scope, $location){
		$scope.signupForm = function() {
			$location.path("/home");
		}

	}]);