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

Meteor.subscribe('notes');

Template.viewsNotesList.helpers({
	'notes': function(){
		// var currentUserId = Meteor.userId();
		var currentUserId = '1';
		var notes = Notes.find({ userId: currentUserId }, {sort: {updatedAt: -1}}).fetch();
		console.log('notes - '+JSON.stringify(notes));
		return notes;
	},
	'countNotes': function(){
		var currentUserId = '1';
		var countnotes = Notes.find({ userId: currentUserId }).count();
		return countnotes;
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
