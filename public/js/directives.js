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