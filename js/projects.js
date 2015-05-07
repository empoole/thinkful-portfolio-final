$('.info').hide();


$('#shopping-list').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	$('#info-shopping-list').position(imgOffset);
	$('#info-shopping-list').slideDown('medium');

}, function(event) {
	event.preventDefault();
	$('#info-shopping-list').slideUp('medium');
});

$('#author-quiz').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	$('#info-author-quiz').position(imgOffset);
	$('#info-author-quiz').slideDown('medium');

}, function(event) {
	event.preventDefault();
	$('#info-author-quiz').slideUp('medium');
});

$('#spotify-app').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	$('#info-spotify-app').position(imgOffset);
	$('#info-spotify-app').slideDown('medium');

}, function(event) {
	event.preventDefault();
	$('#info-spotify-app').slideUp('medium');
});

$('#stacker-AJAX').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	$('#info-stacker-AJAX').position(imgOffset);
	$('#info-stacker-AJAX').slideDown('medium');

}, function(event) {
	event.preventDefault();
	$('#info-stacker-AJAX').slideUp('medium');
});

$('#afs').hover(function(event) {
	event.preventDefault;
	var imgOffset = $(this).position();
	$('#info-afs').position(imgOffset);
	$('#info-afs').slideDown('medium');

}, function(event) {
	event.preventDefault();
	$('#info-afs').slideUp('medium');
});