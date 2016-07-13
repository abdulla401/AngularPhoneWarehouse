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
                mkPattern:"@"
            },
            link: function($scope, $element, $attrs, ngModelCtrl) {

            }
        };
    }]);
