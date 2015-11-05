var angularSpaceAppQuestionsModule = angular.module('angularSpaceApp.questons', [
                                                           'angularSpaceApp.questons.directives'
                                                           ]);

angularSpaceAppQuestionsModule.controller('QuestionsController', ['$scope',  'QuestionsFactory' ,
	function($scope, QuestionsFactory) {
		$scope.model = {};
		$scope.model.showNextButton = true;
		
		$scope.model.question = QuestionsFactory.getNextQuestion();
		$scope.model.hasMoreQuestions = QuestionsFactory.hasMoreQuestions();
		$scope.model.showNextButton = $scope.model.hasMoreQuestions & $scope.model.question.validAnswer;
		
		$scope.getNext = function () {
			$scope.model.question = QuestionsFactory.getNextQuestion();
			$scope.model.hasMoreQuestions = QuestionsFactory.hasMoreQuestions();
			$scope.model.showNextButton = $scope.model.hasMoreQuestions & $scope.model.question.validAnswer;
		
		}
		$scope.model.fromDirective = function() {
			$scope.model.showNextButton = $scope.model.hasMoreQuestions & $scope.model.question.validAnswer;
		}
		 
	}
]);

angularSpaceAppQuestionsModule.factory('QuestionsFactory', ['$resource',
    function($resource) {
    	var index = 0;
		var listOfQuesitons = questions;
		 var getNextQuestion = function() { return listOfQuesitons[index++]};
		 var hasMoreQuestions = function() { 
			 return index < listOfQuesitons.length-1
		 };
		 
		 return  {some: "lovel dal11e", getNextQuestion:  getNextQuestion,  hasMoreQuestions: hasMoreQuestions}
    }
]);




var questions = [
    {
      id: "",
      text: "Do you Smoke",
      questionType: "radio",
  	choices: [ { text: "yes", value: 0, displayIndex: 1 },   { text: "no", value: 1, displayIndex: 2 }],
      errorMessage: "Choose either yes or no",
      pattern: "",
      validAnswer: false,
      answer: "-1",
      minLength: "",
      maxLength: ""
    },
    {
        id: "",
        text: "Do you Drink",
        questionType: "radio",
    	choices: [ { text: "yes", value: 0, displayIndex: 1 },   { text: "no", value: 1, displayIndex: 2 }],
        errorMessage: "Choose either yes or no",
        pattern: "",
        validAnswer: false,
        answer: "-1",
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
    answer: "",
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
    answer: "",
    minLength: "",
    maxLength: ""
  }
  
];