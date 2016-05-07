var angularSpaceAppQuestionsModule = angular.module('angularSpaceApp.questons', [
                                                           'angularSpaceApp.questons.directives'
                                                           ]);

angularSpaceAppQuestionsModule.config(['$stateProvider', function($stateProvider) {
       $stateProvider
            .state('questions', {
                   url: '/questions',
                   templateUrl: 'js/question/questionsPage.html',
                 controller: 'QuestionsController'
               });
   }])

angularSpaceAppQuestionsModule.controller('QuestionsController', ['$scope',  'QuestionsFactory' ,
	function($scope, QuestionsFactory) {
		$scope.model = {};
		$scope.model.showNextButton = true;
		
		$scope.storesFound= [{"number":1629, "post_code":"WC2N 5HR","name":"5 The Strand","latitude":"51.507856520","longitude":"-0.125974454","address":"5 Strand |  Middlesex,| WC2N 5HR","distance":4.093633786765517E-5},{"number":756,"post_code":"WC2N 5HR","name":"Hitchin High St","latitude":"51.948154024","longitude":"-0.279246947","address":"7, High St, Hitchin, Hertfordshire, SG5 1BH, UK","distance":31.155577055205303},{"number":258,"post_code":"WC2N 5HR","name":"Bromsgrove High St","latitude":"52.334945673","longitude":"0.2656998733","address":"78, High Street, Bromsgrove, Worcestershire, B61 8HD, UK","distance":59.60014009142486},{"number":171,"name":"Ely Market St","latitude":"52.399613140","longitude":"0.2656998733","address":"6, Market Street, Ely, Cambridgeshire, CB7 4PB, UK","distance":63.90298554571248},{"number":5034,"name":"Spalding Hall Place","latitude":"52.787234232","longitude":"-0.152397542","address":"11-14, Hall Pl, Spalding, Lincolnshire, PE11 1SA, UK","distance":88.50245467279423},{"number":33,"name":"Melton Mowbray Cheapside","latitude":"52.764594949","longitude":"-0.887393286","address":"1-1, Cheapside, Melton Mowbray, Leicestershire, LE13 0T, UK","distance":92.74415328366834},{"number":37,"name":"Grantham High St","latitude":"52.911367226","longitude":"-0.642148268","address":"42-43, High Street, Grantham, Lincolnshire, NG31 6NE, UK","distance":99.51573979596942},{"number":23,"name":"Derby Intu Shopping Ctr","latitude":"52.920097066","longitude":"-1.473409265","address":"1, Devonshire Walk, Derby, Derbyshire, DE1 2AH, UK","distance":113.14841618416573},{"number":507,"name":"Pontefract Beastfair","latitude":"53.691304938","longitude":"-1.312721704","address":"3-5, Beastfair, Pontefract, West Yorkshire, WF8 1AL, UK","distance":159.04148664835557}];
		$scope.currentPostCode = "WC2N 5HR";
		
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




var questions = [ {
	id : "",
	text : "How Many do you Smoke",
	questionType : "checkbox",
	choices : [ {
		text : "1-4",
		value : 0,
		displayIndex : 1
		
	}, {
		text : "5-10",
		value : 1,
		displayIndex : 2
	} ,{
		text : "More than 10",
		value : 2,
		displayIndex : 3
	}
	],
	maxChoices: 2,
	maxChoiceErrorMessage: "You cannot select more than 2",
	minChoice: 1,
	minChoiceMessage: "You need to select alteast 1",
	
	
	errorMessage : "Choose either yes or no",
	pattern : "",
	validAnswer : false,
	answer : "-1",
	minLength : "",
	maxLength : ""
}, {
	id : "",
	text : "Do you Smoke",
	questionType : "radio",
	choices : [ {
		text : "yes",
		value : 0,
		displayIndex : 1
	}, {
		text : "no",
		value : 1,
		displayIndex : 2
	} ],
	errorMessage : "Choose either yes or no",
	pattern : "",
	validAnswer : false,
	answer : "-1",
	minLength : "",
	maxLength : ""
}, {
	id : "",
	text : "Do you Drink",
	questionType : "radio",
	choices : [ {
		text : "yes",
		value : 0,
		displayIndex : 1
	}, {
		text : "no",
		value : 1,
		displayIndex : 2
	} ],
	errorMessage : "Choose either yes or no",
	pattern : "",
	validAnswer : false,
	answer : "-1",
	minLength : "",
	maxLength : ""
}, {
	id : "",
	text : "what is your name",
	questionType : "text",
	choices : [],
	errorMessage : "name should be a text",
	pattern : "",
	answer : "",
	minLength : "",
	maxLength : ""
},

{
	id : "",
	text : "what is your name",
	questionType : "text",
	choices : [],
	errorMessage : "name should be a text",
	pattern : "",
	answer : "",
	minLength : "",
	maxLength : ""
}

];