$('#about-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#about').offset().top - $('.header').outerHeight() + 'px'}, 'slow');
});

$('#projects-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#projects').offset().top - $('.header').outerHeight() + 'px'}, 'slow');
});

$('#contact-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#contact').offset().top - $('.header').outerHeight() + 'px'}, 'slow');
});