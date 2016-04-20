$(document).keydown(function(e){
    var init = $('.mario').css('left');
	if(e.keyCode == 39) {
		if ($('.mario').hasClass("mario-g")) {
			$('.mario').removeClass("mario-g");
			}
			$('.mario').animate({left: '+=20'});
		}
		else if(e.keyCode == 38) {
			$('.mario')
			.animate({bottom: '+=150'}, 'slow').animate({bottom:'-=150'},'slow');
		}
		else if (e.keyCode == 37) {
            console.log(init);
            		$('.mario').addClass('mario-g');
            		$('.mario').animate({left: "-=20px"});
        	}
});
