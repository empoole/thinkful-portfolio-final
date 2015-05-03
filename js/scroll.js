$('#about-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#about').offset().top + 'px'}, 'slow');
});

$('#projects-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#projects').offset().top + 'px'}, 'slow');
});

$('#contact-link').click(function(event) {
	event.preventDefault();
	$('html, body').animate({scrollTop: $('#contact').offset().top + 'px'}, 'slow');
});