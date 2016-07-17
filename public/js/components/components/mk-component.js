function MyController() {
    this.updateValue = function() {
        //this.callParent();
    }

    this.$onInit = function(){
        console.log("Init is called");
    }

}

angular.module("components").component('mkComp', {
    templateUrl: 'js/components/components/mk-components.tpl.html',
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
        callParent: "&"
    }
});
