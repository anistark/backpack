Template.viewsHome.helpers({
	'countNotes': function(){
		var currentUserId = '1';
		var countnotes = Notes.find({ userId: currentUserId }).count();
		return countnotes;
	}
});

Template.viewsNotes.events({
	'submit form': function(event){
		event.preventDefault();
		var notesEditor = $('#notesEditor').val();
		var notesTitle = $('#notesTitle').val();
		console.log('notes - '+ notesEditor);
		var tagSelected = [];
		tagSelected.push('tagid1');
		tagSelected.push('tagid2');
		var userId = '1';
		var randomUrl = userId+Math.random().toString(36).slice(2);
		Notes.insert({
			noteId : this._id,
			notesContent: notesEditor,
			createAt : new Date(),
			notesTitle: notesTitle,
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

Template.viewsNotes.helpers({
	'noteContent': function(){
		var notes = Notes.find({_id: Session.get('noteId')}).fetch();
		var content = notes[0].notesContent;
		console.log('content - '+ content);
		return content;
	}
});

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

Template.viewsNotesList.events({
	"click [data-action='fetch']": function (event, template) {
		// console.log(this._id);
		Session.set('noteId', this._id);
	},
	'click #notesDelete': function() {
    	Notes.remove(this._id);
  	}
});


Template.viewsNotebooks.events({
	'submit form': function(event){
		event.preventDefault();
		
	}
})
// $('#notesContainer').click(function(){
// 	console.log('in');
// });

Users = new Meteor.Collection('users');

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

