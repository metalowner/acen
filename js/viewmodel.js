function AppViewModel() {
	this.data = ko.observableArray(Practices);
	this.userName = 'Pavel Yudkevich';
	this.displayedTitle = ko.observable("");
	this.displayedDescription = ko.observable("");
	this.startLearning = function() {
		console.log(this.data()[0]);
		this.title = this.data()[0].title;
		this.description = this.data()[0].description;
		this.displayedTitle(this.title);
		this.displayedDescription(this.description);
	}
}

ko.applyBindings(new AppViewModel());