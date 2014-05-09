$(document).ready(function(){

	/***
	 *
	 * Detect mobile or table
	 *
	 */
	if (navigator.userAgent.match(/BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){
		
		$("html").addClass("mobile-tablet");
		$(".helmet").find(".my-sprite").removeClass("animate");
		$(".astronaut .my-sprite").addClass("balance");
	
	} else if (navigator.userAgent.match(/Android/i)) {

		$("html").addClass("android");

	};


	/***
	 *
	 * Update some fonts on window resize
	 *
	 */
	var maxSz = 650;
	var font = 1;
	var timeout = 1000;
	var updateFontSize = function(){
 
		if ( window.innerWidth <= 580 ) {
			
			$(".dont-miss-out").css("font-size", "");

			return;
		};

		font = $('.dont-miss-out').width() / maxSz;
		font = (font * 10) / 10;

		$(".dont-miss-out").css("font-size", font + "em");

	};

	$(window).on('resize', _.throttle(updateFontSize, 400));
	updateFontSize();

	/***
	 *
	 * Set clock
	 *
	 */
	function initClock(myDate){

	    // set the date we're counting down to
	    var target_date = new Date(myDate).getTime();

	    // variables for time units
	    var days, hours, minutes, seconds;
	     

	    // update the tag with id "countdown" every 1 second
	    setInterval(function () {
	     
	        // find the amount of "seconds" between now and target
	        var current_date = new Date().getTime();
	        var seconds_left = (target_date - current_date) / 1000;
	     
	        // do some time calculations
	        days = parseInt(seconds_left / 86400);
	        seconds_left = seconds_left % 86400;
	         
	        hours = parseInt(seconds_left / 3600);
	        seconds_left = seconds_left % 3600;
	         
	        minutes = parseInt(seconds_left / 60);
	        seconds = parseInt(seconds_left % 60);
	         
	        function getPrefix(x){
	            
	            if (x < 10) {
	                x = "0" + x;
	            };

	            return x;
	        };

	        $('#countdown span.days').text( getPrefix(days) );
	        $('#countdown span.hours').text( getPrefix(hours) );
	        $('#countdown span.minutes').text( getPrefix(minutes) );
	        $('#countdown span.seconds').text( getPrefix(seconds) );

	    }, 1000);

	};

	var myDate = "31/05/2014";
	var x = myDate.split("/");
	var myDate = x[2] + "/" + x[1] + "/" + x[0];

	initClock( myDate );

	// window height fix
	var heightFix = function(){
		
		if (window.innerWidth < 580){
			return;
		};

		if (window.innerHeight < 798) {

			$('.image-container').css("margin-top", "15%");
			$('html').css('font-size', '0.9');
			$('.enter-now img').css({ width: "50%", top: "-20px" });

		} else {

			$('.image-container').css("margin-top", "");
			$('html').css('font-size', '');
			$('.enter-now img').css("width", "").css("top", "");

		};

	};

	$(window).on('resize', _.throttle(heightFix, 800) ).trigger("resize");

});