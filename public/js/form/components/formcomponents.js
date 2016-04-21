angular.module("formComponents",[])
    .directive("neoDsSelect", ["$filter", '$http', function ($filter, $http) {
        return {
            restrict: 'E',
            templateUrl: 'js/form/components/neo-ds-select.html',
            require: 'ngModel',
            transclude: true,
            scope: {
                label: '@'
            },
            link: function($scope, $ele, $attrs, $ngModel){
                $http.get('/api/datasources').then(function(response){
                    $scope.selectOptions = response.data;
                    console.log("DataSourcs:  ",response);
                });
                $scope.saveValue = function () {
                    console.log($scope._inputModel);
                    $ngModel.$setViewValue($scope._inputModel);
                }
            }

        }
    }]);
