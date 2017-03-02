$(document).bind("mobileinit", function(){
	console.log("Mobileinit called");
	$.extend(  $.mobile , {
		defaultPageTransition: 'none' 
	});
	$.mobile.defaultPageTransition = 'none';

	if (navigator.userAgent.match(/Android/)) {
			console.log("No pop (Android)");
			$.mobile.defaultDialogTransition = 'none';
	}
	else {
		$.mobile.defaultDialogTransition = 'pop';
		console.log("Pop (non Android)");
	}
});