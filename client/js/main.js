// Main Js file
$(document).ready(function(){
	var sideNavHeight = $(window).height();
	$('.sideNav').height(sideNavHeight);

	$('.noteEditor').height(sideNavHeight);

}, $(document).resize(function(){
	
	var sideNavHeight = $(window).height();
	$('.sideNav').height(sideNavHeight);

	$('.noteEditor').height(sideNavHeight);

})
);
