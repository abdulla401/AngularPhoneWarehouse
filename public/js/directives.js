'use strict';

var angularSpaceAppDirectives = angular.module('angularSpaceApp.directives', []);

angularSpaceAppDirectives.directive('neoPhoneDetails', function() {
  return {
    restrict: 'E',
     scope: {
      phone: '=phone'
    },
    template: '<div class="phone-details">  {{phone.name }}  <br/>{{phone.snippet}} </div>' 
  };
});


angularSpaceAppDirectives.directive('ensureUnique', ['$http', function($http) {
  return {
    require: 'ngModel',
    link: function(scope, ele, attrs, c) {
		console.log("link is called");
		scope.$watch(attrs.ngModel, function(newVal, oldVal) {
			if(newVal == oldVal){
				//Initialization bit
			}else{
				$http({
		          method: 'GET',
		          url: '/api/username/check/' + newVal
		        }).success(function(data, status, headers, cfg) {
					myDebugVar = c;
		          c.$setValidity('unique', data.isUnique);
				}).error(function(data, status, headers, cfg) {
		          c.$setValidity('unique', false);
				 });									
			        
							     
			  
			}
		
      });
	  // TODO: try to move the http evalutation outside wath and into evalAsync
	  scope.$evalAsync(attrs.ngModel, function(value) {
		  console.log("eval async is called " + value);
          $http({
            method: 'GET',
            url: '/api/username/check/' + value
          }).success(function(data, status, headers, cfg) {
  			myDebugVar = c;
            c.$setValidity('unique', data.isUnique);
          }).error(function(data, status, headers, cfg) {
            c.$setValidity('unique', false);
          });
	  });
	  
	  
    }
  };
}]);


