$('.navbar').hide();

$(window).scroll(function() {
	var bottomOfNavbar = $('.navbar').offset().top + $('.navbar').outerHeight();
	var topOfAbout = $('.masthead').scrollTop() + $('.masthead').innerHeight();
	if (bottomOfNavbar >= topOfAbout) {
		$('.navbar').fadeIn('medium');
	} else if (bottomOfNavbar < topOfAbout) {
		$('.navbar').fadeOut('medium');
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