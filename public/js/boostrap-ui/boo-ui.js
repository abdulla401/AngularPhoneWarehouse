angular.module("bStrapModule", ['ui.bootstrap'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('bstrap', {
                url: '/bstrap',
                templateUrl: 'js/boostrap-ui/bindex.html',
                controller: 'BstrapController as bsap'
            });

    }])
    .controller("BstrapController", ["$scope", "$uibModal", "$log", function ($scope, $uibModal, $log) {
        console.log("Bstrap controller is here");
        var bsap = this;
        bsap.flag = "**-!()!-**"

        bsap.openModal = function () {
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'js/boostrap-ui/popupModal.html',
                controller: 'ModalInstanceCtrl as vm',

                resolve: {
                    items: function() {
                        return "tempples";
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
        $scope.toggleAnimation = function () {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };
}]).controller("ModalInstanceCtrl", ["$scope", "items",function($scope, items){
        var vm = this;
        var dismiss = $scope.$dismiss;
        vm.man = items;

        vm.activateTab = function (group) {
            console.log(group);
            vm.activeTab = group;
        };

          vm.cancel = function (group) {
            console.log("Cancel called");
            dismiss();
            var i = 22;
        
        };
}]);
