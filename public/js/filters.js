var angularSpaceAppFilters = angular.module('angularSpaceApp.filters', []);


angularSpaceAppFilters.filter("myDate", function() {
	return function(date) {
		
		return date;
		};
})