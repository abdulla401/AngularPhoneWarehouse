var angularSpaceAppDirectives = angular.module('angularSpaceApp.directives', []);

angularSpaceAppDirectives.directive('imperialHeight', function() {
	return {
		restrict: 'E',
		template: '<div>\
		            <input type="text" ng-model="imperialFeets"> \
		             <input type="text" ng-model="imperialInches"/> </div>',
		require: 'ngModel',
		scope: {},
		link: function(scope, element, attrs, ngModelCtrl){
		    
		    ngModelCtrl.$formatters.push(function(modelValue) {
		        var feet = parseInt(modelValue/12/2.54);
		        var inches = modelValue%12;
		        return {
		            imperialFeets: feet,
		            imperialInches: inches
		        }
		    });
		     ngModelCtrl.$render = function() {
                scope.imperialFeets = ngModelCtrl.$viewValue.imperialFeets ;
                scope.imperialInches = ngModelCtrl.$viewValue.imperialInches ;
            };
            scope.$watch('imperialFeets + imperialInches', function() {
                ngModelCtrl.$setViewValue({ imperialFeets: scope.imperialFeets, 
                imperialInches: scope.imperialInches });
            });

              ngModelCtrl.$parsers.push(function(viewValue) {
                var ret = parseInt(viewValue.imperialFeets*12)+parseInt(viewValue.imperialInches);
                return Math.round(ret*2.54);
            });

            ngModelCtrl.$validators.feets = function(viewValue, viewValue){
               var ret =  (parseInt(viewValue.imperialFeets) > 10);
                return !ret;
            }
             ngModelCtrl.$validators.inches = function(viewValue, viewValue){
               var ret =  (parseInt(viewValue.imperialInches) > 11);
                return !ret;
            }
		}
	}
})