$('.info').hide();


$('#shopping-list').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	$('#info-shopping-list').position(imgOffset);
	$('#info-shopping-list').show();

}, function(event) {
	event.preventDefault();
	$('#info-shopping-list').hide();
});

$('#author-quiz').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	$('#info-author-quiz').position(imgOffset);
	$('#info-author-quiz').show();

}, function(event) {
	event.preventDefault();
	$('#info-author-quiz').hide();
});

$('#spotify-app').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	$('#info-spotify-app').position(imgOffset);
	$('#info-spotify-app').show();

}, function(event) {
	event.preventDefault();
	$('#info-spotify-app').hide();
});

$('#stacker-AJAX').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	$('#info-stacker-AJAX').position(imgOffset);
	$('#info-stacker-AJAX').show();

}, function(event) {
	event.preventDefault();
	$('#info-stacker-AJAX').hide();
});

$('#afs').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	$('#info-afs').position(imgOffset);
	$('#info-afs').show();

}, function(event) {
	event.preventDefault();
	$('#info-afs').hide();
});

$('#hot-or-cold').hover(function(event) {
	event.preventDefault();
	var imgOffset = $(this).position();
	$('#info-hot-or-cold').position(imgOffset);
	$('#info-hot-or-cold').show();

}, function(event) {
	event.preventDefault();
	$('#info-hot-or-cold').hide();
});