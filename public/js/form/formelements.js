angular.module("formElements",['formComponents', 'frapontillo.bootstrap-switch'])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('form-elements', {
                url: '/form-elements',
                templateUrl: 'js/form/form.html',
                controller: 'FormController as f'
            });
    }])
    .controller("FormController", ["$scope", function ($scope) {
        console.log("form controller is here --");
        var f = this;

        f.flag = "**-!(ooo)!-**";
        f.buttonSelected = false;
        f.toggleSwith = true;
        f.toggleButton = function(){
            if(!f.buttonSelected){
                f.buttonSelected = true;
            }else{
                f.buttonSelected = false;
            }

        };

        f.papa = "fas";

        $scope.mytime = new Date();

        $scope.hstep = 1;
        $scope.mstep = 15;

        $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };

        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = ! $scope.ismeridian;
        };

        $scope.update = function() {
            var d = new Date();
            d.setHours( 14 );
            d.setMinutes( 0 );
            $scope.mytime = d;
        };

        $scope.changed = function () {
            $log.log('Time changed to: ' + $scope.mytime);
        };

//         return f;


    }])
