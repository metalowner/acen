function AppViewModel() {
	var self = this;
	this.displayedMessage = ko.observable("");
	this.answer = ko.observable("");
	this.displayedMessage(BotMessages[0]);
	this.displayedQuestion = ko.observable("");
	this.displayedQuestion(Questions[0].questionDescription);
	this.questionHeader = ko.observable("");
	this.questionHeader(Questions[0].questionTitle);
	
	this.submitAnswer = function() {
		if ($("#botInsights").is(':hidden') === false) {
				clearBotInsights();
			}
		checkBotVisibility();
		checkBotInsights();
		displayBotInsights();
		self.displayedMessage("מצאתי בתשובה שלך את הערכים הבאים:");
		$("#questionBox").hide();
		$("#userProfile").show();
		$("#derp").show();
	};

	this.hideBotFunction = function() {
		$("#botMessanger").hide();
		$("#derp").hide();
	}

	this.displayQuestionsBox = function() {
		if ($("#questionBox").is(':hidden') === true) {
			$("#questionBox").show();
			$("#userProfile").hide();
		} else {
			$("#questionBox").hide();
		}
	};

	this.displayProfile = function() {
		if ($("#userProfile").is(':hidden') === true) {
			$("#userProfile").show();
			$("#questionBox").hide();
		} else {
			$("#userProfile").hide();
		}
	};

	this.nextQuestion = function() {
		this.displayedQuestion(Questions[1].questionDescription);
		this.questionHeader(Questions[1].questionTitle);
		checkBotInsights();
		clearBotInsights();
	};

	this.previousQuestion = function() {
		this.displayedQuestion(Questions[0].questionDescription);
		this.questionHeader(Questions[0].questionTitle);
		checkBotInsights();
		clearBotInsights();
	};

	this.mainValue = ko.observable("");
	this.mainValueSelected = ko.observable("");
	this.otherValues = ko.observableArray([]);
	this.selectedOtherValues = ko.observableArray([]);
	this.formattedValue = ko.observable("");
	this.newValue = ko.observable("");
	this.userMainGoal = ko.observable("");
	
	this.addNewValue = function() {

    };
	
	this.selectMainValue = function() {
		self.mainValueSelected(self.mainValue());
	};
 
    self.addValue = function() {
        self.selectedOtherValues.push(this);
    };

    self.addPersonalValue = function() {
    	$("#botInsights").append('<input id="newValueInput" data-bind="textInput: newValue"><br><button data-bind="click: addNewValue">שלח</button>');
    };

	function checkBotInsights() {
		if (botTempData !== null) {
			var formattedMainValue = botTempData.mainValue;
			self.mainValue(formattedMainValue);
			var otherValuesArray = botTempData.otherValues;
			otherValuesArray.forEach(function(data) {
				self.otherValues.push(data);
			});
		}
	}

	function displayBotInsights() {
		if ($("#botInsights").is(':hidden') === true) {
				$("#botInsights").show();
			}
	}

	function clearBotInsights() {
		$("#botInsights").hide();
		self.otherValues = [];
	}

	function checkBotVisibility() {
		if ($("#botMessanger").is(':hidden') === true) {
			$("#botMessanger").show();
			$("#derp").show();
		}
	}

	$("#answerBox").focus(function() {
		$("#botMessanger").hide();
		$("#derp").hide();
	});
}

ko.applyBindings(new AppViewModel());

function toggleMenu(x) {
    x.classList.toggle("change");
    if ($("#profileDisplayButton").is(':hidden') === true) {
    	$("#profileDisplayButton").show();
    	$("#questionsDisplayButton").show();
    	$("#appName").hide();
    } else {
    	$("#profileDisplayButton").hide();
    	$("#questionsDisplayButton").hide();
    	$("#appName").show();
    }
}