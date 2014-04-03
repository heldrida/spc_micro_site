$(document).ready(function(){

	/***
	 *
	 * Update some fonts on window resize
	 *
	 */
	var maxSz = 650;
	var font = 1;
	var timeout = 1000;
	var updateFontSize = function(){

		if ( window.innerWidth >= maxSz ) {
			return;
		};

		font = $('.dont-miss-out').width() / maxSz;
		font = Math.round(font * 10) / 10;

		$(".dont-miss-out").css("font-size", font + "em");

	};

	$(window).on('resize', _.throttle(updateFontSize, 400));

	/***
	 *
	 *	Update the sprite image width
	 *
	 */
	 $(window).on('resize', function(){

		if ( window.innerWidth >= maxSz ) {
			return;
		};

		originalW = 18490;
		originalH = 383;
		ratio = $('.helmet').width() / maxSz;

		newSize = originalW/ratio + "px" + " " + originalH/ratio + "px";

	 	$(".my-sprite").css("background-size", newSize);

	 });

});