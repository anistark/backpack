// Main Js file
$(document).ready(function(){
	var sideNavHeight = $(window).height();
	$('.sideNav').height(sideNavHeight);
}, $(document).resize(function(){
	var sideNavHeight = $(window).height();
	$('.sideNav').height(sideNavHeight);
})
);
