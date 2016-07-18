function MyController() {
    this.updateValue = function() {
        //this.callParent();
    }

    this.$onInit = function(){
        console.log("Init is called");
    }

}

angular.module("components").component('mkInput', {
    templateUrl: 'js/components/input/mk-input.tpl.html',
     controller: MyController,
    require: {
        model: 'ngModel',
        parentform: '^form'
    },
    bindings: {
        mkLabel: "@",
        name: "@",
        placeholder: "@",
        ngModel: "=",
        mkRequired: "@",
        mkMinlength: "@",
        mkMaxlength: "@",
        mkValidator: "@",
        mkPattern:"@",
        mkDisabled: "=",
        callParent: "&",
        mkCustomMessage: "@"
    }
});
