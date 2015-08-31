Template.viewsNotes.events({
	'submit form': function(event){
		event.preventDefault();
		var notesEditor = $('#notesEditor').val();
		console.log('notes - '+ notesEditor);
		Notes.insert({
			noteId : this._id,
			notesContent: notesEditor,
			createAt : new Date()
		});
		$('[notesContent=notesEditor]').val('');
	}
});



// Main Js file
$(document).ready(function(){

	var sideNavHeight = $(window).height();
	$('.sideNav').height(sideNavHeight);

	$('.noteEditor').height(sideNavHeight);

	$(document).height(sideNavHeight);

}, $(document).resize(function(){
	
	var sideNavHeight = $(window).height();
	$('.sideNav').height(sideNavHeight);

	$('.noteEditor').height(sideNavHeight);

})
);
