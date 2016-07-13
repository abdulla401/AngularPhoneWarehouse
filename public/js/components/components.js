angular.module("components",[])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('components', {
                url: '/components',
                templateUrl: 'js/components/components.html',
                controller: 'ComponentsController as vm'
            });
    }])
    .controller("components", ["$scope", function ($scope) {
        var vm = this;
        vm.adminUrl = "test";
    }])
