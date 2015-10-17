'use strict';

var angularSpaceAppDirectives = angular.module('angularSpaceAppDirectives', []);

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
      scope.$watch(attrs.ngModel, function(newVal, oldVal) {
        $http({
          method: 'GET',
          url: '/api/username/check/' + newVal
        }).success(function(data, status, headers, cfg) {
          c.$setValidity('unique', data.isUnique);
        }).error(function(data, status, headers, cfg) {
          c.$setValidity('unique', false);
        });
      });
    }
  };
}]);