$('.navbar').hide();

$(window).scroll(function() {
	var bottomOfNavbar = $('.navbar').offset().top + $('.navbar').outerHeight();
	var bottomOfAbout = $('.masthead').scrollTop() + $('.masthead').innerHeight();
	if (bottomOfNavbar > bottomOfAbout) {
		$('.navbar').fadeIn(850);
	} else if (bottomOfNavbar < bottomOfAbout) {
		$('.navbar').fadeOut(850);
	}
});

/*******SCROLLING ANIMATIONS*******/
$('#about-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#about').offset().top - $('.navbar').outerHeight() + 'px'}, 'slow');
});

$('#projects-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#projects').offset().top - $('.navbar').outerHeight() + 'px'}, 'slow');
});

$('#contact-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#contact').offset().top - $('.navbar').outerHeight() + 'px'}, 'slow');
});

$('#scroll-arrow').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#about').offset().top - $('.navbar').outerHeight() + 'px'}, 'slow');
});