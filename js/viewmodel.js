function AppViewModel() {
	var self = this;
	this.displayedMessage = ko.observable("");
	this.answer = ko.observable("");
	this.displayedMessage(BotMessages[0]);
	this.displayedQuestion = ko.observable("");
	this.displayedQuestion(Questions[0].questionDescription);
	this.questionHeader = ko.observable("");
	this.questionHeader(Questions[0].questionTitle);
	this.submitFunction = function() {};
	this.nextQuestion = function() {
		this.displayedQuestion(Questions[1].questionDescription);
		this.questionHeader(Questions[1].questionTitle);
	};
	this.previousQuestion = function() {
		this.displayedQuestion(Questions[0].questionDescription);
		this.questionHeader(Questions[0].questionTitle);
	};
}

ko.applyBindings(new AppViewModel());