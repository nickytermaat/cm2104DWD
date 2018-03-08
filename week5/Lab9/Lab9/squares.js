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

		// if ($(this).hasClass("red") && !$(this).hasClass("red blue")) {
		// 	$(this).toggleClass("blue");
		// 	console.log("Red->Blue " + " changed colour " + $(this).hasClass("red blue"));
		// }
		// else if (($(this).hasClass("blue")) || ($(this).hasClass("red blue"))) {
		// 	$(this).toggleClass("green");
		// 	console.log("Blue->Green " + $(this).toggleClass("blue green"));
		// }
		// else if ($(this).hasClass("green")) {
		// 	$(this).toggleClass("red green blue");
		// 	console.log("Green-> " + $(this).toggleClass("green"));
		// }
	});
});

	// 	if ($(this).hasClass("red")) {
	// 		$(this).addClass("blue").removeClass("red");
	// 	}
	// 	else if ($(this).hasClass("blue")) {
	// 		$(this).addClass("green").removeClass("blue");
	// 	}
	// 	else if ($(this).hasClass("green")) {
	// 		$(this).addClass("red").removeClass("green");
	// 	}
	// });
