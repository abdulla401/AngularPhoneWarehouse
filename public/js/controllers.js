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
			
		});
		
		$scope.selectItem = function(phone){
			$scope.details = "tulu";
		}

	
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
			$location.path("/phones");
		}

	}]);


angularSpaceAppController.controller('DirectivesController', ['$scope', '$location',
	function($scope, $location){
		console.log("directives controller called");
		$scope.height = 182;
		$scope.heightM2 = 155;
		$scope.signupForm = function() {
			$location.path("/phones");
		}

	}]);

angularSpaceAppController.controller('FormScopeDemoController', ['$scope', '$location',
	function($scope, $location){
		var form = this;
		form.status = "ON";
		form.data = [{
            "id": "COND_HBP",
            "name": "High blood pressure",
            "description": "a long term condition",
            "isHeader": false,
            "sortOrder": 10
        }, {
                "id": "COND_CHOL",
                "name": "High cholesterol",
                "description": "a long term condition ",
                "isHeader": false,
                "toggle": "YES",
                "sortOrder": 30
            }, {
                "id": "COND_COPD",
                "name": "COPD",
                "description": "Pulmonary diseases ",
                "isHeader": false,
                "toggle": "NO",
                "sortOrder": 40
            }, {
                "id": "COND_OTH",
                "name": "Other",
                "description": "Any Other Condition",
                "isHeader": false,
                "sortOrder": 60,
                "toggle": "YES",
            }];
		console.log("form controller called");
		$scope.signupForm = function() {
			$location.path("/phones");
		}

	}]);		