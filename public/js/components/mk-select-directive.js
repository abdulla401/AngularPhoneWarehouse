/**
 * Created by asyed
 */
angular.module('backuprestore.mk-select.directive', [])
    .directive('mkSelect', [function() {
        return {
            require: 'ngModel',
            restrict: 'EA',
            templateUrl: 'js/components/mk-select.tpl.html',
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
                options: '=',
                defaultText: "@",
                mkRequired: "@",
                mkMinLength: "@",
                mkMaxLength:"@",
                mkPattern:"@"
            },
            link: function($scope, $element, $attrs, ngModelCtrl) {

            }
        };
    }]);
