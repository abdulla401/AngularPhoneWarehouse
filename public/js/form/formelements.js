angular.module("formElements",['formComponents'])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('form-elements', {
                url: '/form-elements',
                templateUrl: 'js/form/form.html',
                controller: 'FormController as f'
            });
    }])
    .controller("FormController", ["$scope", function ($scope) {
        console.log("form controller is here");
        var f = this;
        f.flag = "**-!()!-**"
        
    }])
