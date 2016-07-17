var INTEGER_REGEXP = /^\-?4\d+$/;
angular.module("components").directive('mkValidators', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, elm, attr, ctrl) {
            if (!ctrl) return;
            attr.$observe('mkValidators', function (validators) {
                console.log("validators", validators);
                if (validators.indexOf("integer") > -1) {
                    ctrl.$validators[validators] = function (modelValue, viewValue) {
                        return ctrl.$isEmpty(viewValue) || INTEGER_REGEXP.test(viewValue);
                    };
                }
            });
        }
    };

})
