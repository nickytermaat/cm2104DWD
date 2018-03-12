$(function(){
	// usual main starting point when web page loads

	// simple CSS class switcher
	// find all divs
	// bind to click events
	// alter the CSS of the specific clicked div element
	$("div").click(function(){
		// $(this) is a shortcut for the element we just selected
		// using $("div")

		if ($(this).hasClass("red")) {
			$(this).toggleClass("red blue");
			console.log("R - RB -> B")
		}
		else if ($(this).hasClass("blue")) {
			$(this).toggleClass("blue green");
			console.log("B - BG -> G")
		}
		else if ($(this).hasClass("green")) {
			$(this).toggleClass("green red");
			console.log("G - GR -> R")
		}
	});
});
