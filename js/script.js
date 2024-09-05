$(document).ready(function () {
	// $(".footer-links-wrapper h3").click(function(){
	// 	// if ($(window).width() < 768) {
	// 		$(this).next('ul').slideToggle();
	// 			$(this).toggleClass('expanded');
	// 		// } else {
	// 			// $(this).next('ul').show();
	// 		// }
	// });

	if ($(window).width() <= 768) {
		$(".footer-links-wrapper").addClass("someClass");
	} else {
		$(".footer-links-wrapper").removeClass("someClass");
	}
	$(window).on("resize", function (event) {
		if ($(window).width() <= 768) {
			$(".footer-links-wrapper").addClass("someClass");
		} else {
			$(".footer-links-wrapper").removeClass("someClass");
			$(".footer-links-wrapper ul").show();
		}
	});
	// Footer collapse functionality
	$(document).on("click", ".someClass h3", function () {
		$(this).next("ul").slideToggle();
		$(this).toggleClass("expanded");
	});

	// Search bar
	$(".search-link").click(function (event) {
		event.preventDefault();
		$(".navbar-collapse.collapse").removeClass("show");
		$(".searchbox").slideToggle();
	});

	// jQuery Carousal (Leul Jun-Batch, 2023)
	const slideWidth = $(".slide").width();
	const slideDuration = 3000; // Time interval for each slide
	let isPaused = false; // pause button

	// Function to move the slides
	function moveSlides() {
		if (!isPaused) {
			$(".slides").animate(
				{
					"margin-left": -slideWidth,
				},
				2000,
				function () {
					// Move the first slide to the end
					$(".slides .slide:first").appendTo(".slides");
					// Reset the margin
					$(".slides").css("margin-left", 0);
				}
			);
		}
	}

	// Set an interval to move the slides
	setInterval(moveSlides, slideDuration);

	// pause button functionality
	$(".circle-container").on("click", function () {
		isPaused = !isPaused;

		if (isPaused) {
			$("#pause").removeClass("fa-pause");
			$("#pause").addClass("fa-play");
		} else {
			$("#pause").removeClass("fa-play");
			$("#pause").addClass("fa-pause");
		}
	});
});
