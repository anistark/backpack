Router.map(function () {

	// Home page
	this.route('home', {
		name: 'home',
		path: '/',
		template: 'views/home'
	});
	
	// Add new Notes
	this.route('notes/add', {
		path: 'notes/add',
		template: 'views/notes'
	});

});

