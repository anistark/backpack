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
<<<<<<< HEAD
			noteId : this._id,
			notesContent: notesEditor,
			createAt : new Date()
=======
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
>>>>>>> 5898293af700d5aa9642a26abbd94c1cad78c246
		});
		$('[notesContent=notesEditor]').val('');
	}
});

<<<<<<< HEAD
=======
Meteor.subscribe('notes');

Template.viewsNotesList.helpers({
	'notes': function(){
		// var currentUserId = Meteor.userId();
		var currentUserId = '1';
		var notes = Notes.find({ userId: currentUserId }, {sort: {updatedAt: -1}}).fetch();
		return notes;
	},
	'countNotes': function(){
		var currentUserId = '1';
		var countnotes = Notes.find({ userId: currentUserId }).count();
		return countnotes;
	}
});

$('#notesContainer').click(function(){
	console.log('in');
});
>>>>>>> 5898293af700d5aa9642a26abbd94c1cad78c246


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

