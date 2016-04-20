$(document).keydown(function(e){
	var init = $('.mario').css('left');
    if (e.keyCode == 39 && init != '1200px') {
		if ($('.mario').hasClass("mario-g")) {
			$('.mario').removeClass("mario-g");
		}
		$('.mario').css('left', '+=20');
	}
	else if (e.keyCode == 38) {
		$('.mario').animate({bottom: '+=150'}, 'slow').animate({bottom:'-=150'},'slow');
	}
	else if (e.keyCode == 37 && init > '0px') {
        $('.mario').addClass('mario-g');
        $('.mario').css('left',"-=20px");
    }
});
