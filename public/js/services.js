'use strict';


var angularSpaceAppServices = angular.module('angularSpaceAppServices', ['ngResource']);

angularSpaceAppServices.factory('PhoneResource', ['$resource',
    function($resource) {
        return $resource('/api/phones', {isArray: true}, {
            GETALL: {
                url: "/api/phones/search=:search&page=1&items=10",
                method: 'GET',
                params: {
                    search: "q"
                },
                isArray: true
            }

        });
    }
]);



 angularSpaceAppServices.factory("PhoneService", function($http) {
    return {
        getPhones: function(query, page) {
            //since $http.get returns a promise,
            //and promise.then() also returns a promise
            //that resolves to whatever value is returned in it's 
            //callback argument, we can return that.
            var str = '/api/phones/search=_search_&page=1&items=10';
            var url = str.replace("_search_", query)
            return $http.get(url).then(function(result) {
                return result;
            });
        }
    }
});
