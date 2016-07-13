angular.module("components",['backuprestore.mk-input.directive'])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('components', {
                url: '/components',
                templateUrl: 'js/components/components.html',
                controller: 'ComponentsController as vm'
            });
    }])
    .controller("ComponentsController", ["$scope", function ($scope) {
        var vm = this;
        vm.adminUrl = "test";
    }])
