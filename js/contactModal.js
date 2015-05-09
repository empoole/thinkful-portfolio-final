$('#contact-lightbox').hide();

$('#open-contact-modal').click(function(event) {
	event.preventDefault();
	$('#contact-lightbox').show();

	$('#close-contact-modal').click(function(event) {
		event.preventDefault();
		$('#contact-lightbox').hide();
	});
});