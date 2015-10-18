'use strict';
var myDebugVar;

//TODO node 2 : use the controlleras directive
var angularSpaceAppController = angular.module('angularSpaceApp.controller', [
	'angularSpaceApp.filters'
]);

angularSpaceAppController.controller('PhonesController', ['$scope', 'PhoneResource', '$timeout', 'myDateFilter',
	function($scope, PhoneResource, $timeout, myDateFilter) {
		$scope.model = {};
		$scope.model.query = "fat"
		$scope.phones = PhoneResource.query();
		$scope.$watch('query', function(oldValue, newValue) {
			console.log("Search query has changed");
			
		})

	
	}
]);



angularSpaceAppController.controller('ParentClockController', ['$scope', '$location',  '$timeout',
	function($scope, $location, $timeout){
		$scope.clock = {};	
		$scope.copyObject = $scope.clock;		
		var updateClock = function() {
			$scope.clock.now = new Date();
			$timeout(function() {
				updateClock();
			}, 1000);
		};
		updateClock();
		$scope.copy = $scope.clock.now;
	}]);


angularSpaceAppController.controller('ClockChildController', ['$scope', '$location',
	function($scope, $location){
		$scope.childClock = $scope.clock;
	}]);


angularSpaceAppController.controller('LoginController', ['$scope', '$location',
	function($scope, $location){
		$scope.signupForm = function() {
			$location.path("/home");
		}

	}]);