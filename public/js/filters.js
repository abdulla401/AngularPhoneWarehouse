var angularSpaceAppFilters = angular.module('angularSpaceAppFilters', []);


angularSpaceAppFilters.filter("myDate", function() {
	return function(date) {
		
		return date;
		};
})