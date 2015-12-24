angular.module('angularSpaceApp.controller', [
	'angularSpaceApp.filters' 
])

.controller("ConceptsController", ['$scope',  'serviceExample', 'factoryExample', 'factoryExample',
            function($scope, serviceExample, factoryExample){
                $scope.serviceExample = serviceExample;
                $scope.factoryExample = factoryExample;
                $scope.tiger = "tiger";

}]);