Template.viewsNotes.events({
	'submit form': function(event){
		event.preventDefault();
		var notesEditor = $('#notesEditor').val();
		console.log('notes - '+ notesEditor);
		var tagSelected = [];
		tagSelected.push('tagid1');
		tagSelected.push('tagid2');
		var userId = '1';
		var randomUrl = userId+Math.random().toString(36).slice(2);
		Notes.insert({
			notesTitle: 'Title',
			notesContent: notesEditor,
			userId: userId,
			notebookId: '123',
			tags: tagSelected,
			createdAt: new Date(),
			updatedAt: new Date(),
			noteUrl: randomUrl,
			favourites: 1,
			permissions: '0',
			lastEditedBy: userId
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
