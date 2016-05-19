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
    }]).directive("neoTimePicker", ["$filter", '$http', function ($filter, $http) {
    return {
        restrict: 'E',
        templateUrl: 'js/form/components/neo-time-picker.html',
        require: 'ngModel',
        transclude: true,
        scope: {
            label: '@'

        },
        link: function($scope, $ele, $attrs, $ngModel){
            $scope.fromHour = 4;
            $scope.hourOptions = _.range(1,13);
            $scope.minsOptions = _.range(1,61).map(function(f) { return ("0"+f).slice(-2)})
            $scope.hstep = 1;
            $scope.mstep = 1;

            //$scope.options = {
            //    hstep: [1, 2, 3],
            //    mstep: [1, 5, 10, 15, 25, 30]
            //};

            $scope.saveValue = function () {
                console.log($scope._inputModel);
                $ngModel.$setViewValue($scope._inputModel);
            }

            $scope.onTimeSelect = function(){
                console.log($scope.fromHour, $scope.fromMin, $scope.toHour, $scope.toMin);
            }
        }

    }
}])
