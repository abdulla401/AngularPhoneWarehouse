var angularSpaceAppQuestionsDirectivesModule = angular.module('angularSpaceApp.questons.directives', []);

angularSpaceAppQuestionsDirectivesModule.directive("questionText" , function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'partials/directive/textQuestion.html'
  };
});

angularSpaceAppQuestionsDirectivesModule.directive("questionRadio" , function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
    	question: "=q",
    	updatedParent: "&m"
    },
    controller: ['$scope', function($scope) {
    	$scope.validateAnswer = function() {
    		$scope.question.validAnswer = true;
    		$scope.updatedParent();
    		}
    	$scope.saveAnswer = function() {
    		alert("This is the time to answer the question");
    	}
    ;
    }],
    templateUrl: 'partials/directive/optionQuestion.html'
  };
});

angularSpaceAppQuestionsDirectivesModule.directive("questionCheckbox" , function() {
	  return {
	    restrict: 'E',
	    transclude: true,
	    scope: {
	    	question: "=q",
	    	updatedParent: "&m"
	    },
	    controller: ['$scope', function($scope) {
	    	$scope.validateAnswer = function() {
	    		$scope.question.validAnswer = true;
	    		$scope.updatedParent();
	    		}
	    	$scope.saveAnswer = function() {
	    		alert("This is the time to answer the question");
	    	}
	    ;
	    }],
	    templateUrl: 'partials/directive/checkboxQuestion.html'
	  };
	});