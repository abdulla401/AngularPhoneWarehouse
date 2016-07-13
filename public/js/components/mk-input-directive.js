/**
 * Created by asyed
 */
angular.module('backuprestore.mk-input.directive', [])
    .directive('mkInput', [function() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/components/mk-input.tpl.html',
            scope: {
                ngModel: "=",
                label: "@",
                name: "@",
                placeholder: "@",
                labelClasses: "@",
                inputControlClasses: "@",
                checkboxDesc: '@',
                checkboxDescClass: '@',
                buttonOnClick: '&',
                mkRequired: "@",
                mkMinLength: "@",
                mkMaxLength:"@",
                mkPattern:"@",
                externalMessage: "@"
            },
            link: function($scope, $element, $attrs, ngModelCtrl) {
                    $scope.mkChange = function(){
                        console.log("The value has changed");
                    }
            }
        };
    }]);
