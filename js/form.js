function clearInputs(){
	$("#contact-name").val('');
	$("#contact-email").val('');
	$("#contact-message").val('');
}


$('#contact-form').submit(function (event) {
	event.preventDefault();

	var serializedContact = $(this).serialize();

	var $inputs = $(this).find("input, select, button, textarea");

	$inputs.prop("disabled", true);

	var request = $.ajax({
		url: "/php/contact_form.php",
		type: "post",
		data: serializedContact
	});

	request.always(function () {
		$inputs.prop("disabled", false);
		clearInputs();
	});
});