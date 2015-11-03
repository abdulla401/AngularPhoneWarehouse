

var angularSpaceAppQuestionsModule = angular.module('angularSpaceApp.questons', []);

angularSpaceAppQuestionsModule.controller('QuestionsController', ['$scope',  'QuestionsFactory' ,
	function($scope, QuestionsFactory) {
		$scope.model = {};
		$scope.model.question = QuestionsFactory.getNextQuestion();
		$scope.getNext = function () {
			$scope.model.question = QuestionsFactory.getNextQuestion();
			$scope.hasMoreQuestions = QuestionsFactory.hasMoreQuestions();
		}

		 
	}
]);

angularSpaceAppQuestionsModule.factory('QuestionsFactory', ['$resource',
    function($resource) {
    	var index = 0;
		var listOfQuesitons = questions;
		 var getNextQuestion = function() { return listOfQuesitons[index++]};
		 var hasMoreQuestions = function() { return index > listOfQuesitons.length-1};
		 return  {some: "lovel dal11e", getNextQuestion:  getNextQuestion,  hasMoreQuestions: hasMoreQuestions}
    }
]);

angularSpaceAppQuestionsModule.directive("questionText" , function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'partials/directive/textQuestion.html'
  };
});

angularSpaceAppQuestionsModule.directive("questionOption" , function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'partials/directive/optionQuestion.html'
  };
});


var questions = [
  {
    id: "",
    text: "what is your name",
    questionType: "text",
    choices: [],
    errorMessage: "name should be a text",
    pattern: "",
    minLength: "",
    maxLength: ""
  },
  {
    id: "",
    text: "Do you Smoke",
    questionType: "radio",
	choices: { "yes": true, "no": false },
    errorMessage: "Choose either yes or no",
    pattern: "",
    minLength: "",
    maxLength: ""
  },
  {
    id: "",
    text: "what is your name",
    questionType: "text",
    choices: [],
    errorMessage: "name should be a text",
    pattern: "",
    minLength: "",
    maxLength: ""
  }
  
];