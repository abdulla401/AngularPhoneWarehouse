/**
 * Created by asyed
 */
angular.module('backuprestore.mk-select.directive', [])
    .component('mkSelect', {

        templateUrl: 'js/components/select/mk-select.tpl.html',
        require: {
            model: 'ngModel',
            parentform: '^form'
        },
        controller: function() {},
        bindings: {
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
            mkMaxLength: "@",
            mkPattern: "@"
        }

    });
