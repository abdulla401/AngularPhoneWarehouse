
angular.module("components",['backuprestore.mk-select.directive', 'backuprestore-time-duration.directive'])
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
        vm.adminUrl = "abdulla";
        vm.eldedo1 = "ha";
        vm.mobilePattern = "/\d+/";
        vm.formdisabled = true;
        vm.options = [
            {id:'x', value:"please Select"},
            {id:'ews', value:"EWS"},
            {id:'O365', value:"0365"}
        ];
        //vm.dstype = 'x';
        vm.parenter = function() {
            console.log('parent function');
        }
    }])

