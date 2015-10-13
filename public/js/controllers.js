'use strict';
var tigers;

//TODO node 2 : use the controlleras directive
var angularSpaceAppController = angular.module('angularSpaceAppController', []);

angularSpaceAppController.controller('MoviesCtrl', ['$scope', 'PhoneResource',
    function($scope, PhoneResource) {
        $scope.orderProp = 'title';
        $scope.query = "";
        $scope.phones = PhoneResource.query();
	}
     
       
]);