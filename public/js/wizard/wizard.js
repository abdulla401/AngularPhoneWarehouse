angular.module("wizardModule",[])
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('wizard', {
                url: '/wizard',
                templateUrl: 'js/wizard/wizard.html',
                controller: 'WizardController as wiz'
            })
            .state('wizard.page1', {
                url: '/page1',
                templateUrl: 'js/wizard/page1.html'
            })
            .state('wizard.page2', {
                url: '/page2',
                templateUrl: 'js/wizard/page2.html'
            })
            .state('wizard.page3', {
                url: '/page3',
                templateUrl: 'js/wizard/page3.html'
            })
    }])
    .controller("WizardController", ["$scope", function ($scope) {
        console.log("wizard controller is here");
        var wiz = this;
        wiz.flag = "**-!()!-**"
    }])
