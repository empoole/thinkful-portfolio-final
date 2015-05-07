$('#contact-lightbox').hide();
$('#contact-modal').hide();

$('#open-contact-modal').click(function(event) {
	event.preventDefault();
	$('#contact-lightbox').show();
	$('#contact-modal').slideDown('meduim');

	$('#close-contact-modal').click(function(event) {
		event.preventDefault();
		$('#contact-lightbox').hide();
		$('#contact-modal').hide();
	});
});