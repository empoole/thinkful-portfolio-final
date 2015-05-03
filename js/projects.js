$('.info').hide();

$('#shopping-list').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	console.log(imgOffset);
	$('#info-shopping-list').position(imgOffset);
	$('#info-shopping-list').show();

}, function(event) {
	event.preventDefault();
	$('#info-shopping-list').hide();
});

$('#author-quiz').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	console.log(imgOffset);
	$('#info-author-quiz').position(imgOffset);
	$('#info-author-quiz').show();

}, function(event) {
	event.preventDefault();
	$('#info-author-quiz').hide();
});

$('#spotify-app').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	console.log(imgOffset);
	$('#info-spotify-app').position(imgOffset);
	$('#info-spotify-app').show();

}, function(event) {
	event.preventDefault();
	$('#info-spotify-app').hide();
});

$('#stacker-AJAX').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	console.log(imgOffset);
	$('#info-stacker-AJAX').position(imgOffset);
	$('#info-stacker-AJAX').show();

}, function(event) {
	event.preventDefault();
	$('#info-stacker-AJAX').hide();
});

$('#landing-page-clone').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	console.log(imgOffset);
	$('#info-landing-page').position(imgOffset);
	$('#info-landing-page').show();

}, function(event) {
	event.preventDefault();
	$('#info-landing-page').hide();
});