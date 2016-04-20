$(document).keydown(function(e){
	var init = $('.mario').css('left'); // Détection de la position de Mario
    if (e.keyCode == 39 && init != '1200px') {  // Conditions pour aller vers la droite
		if ($('.mario').hasClass("mario-g")) {
			$('.mario').removeClass("mario-g");
		}
		$('.mario').css('left', '+=20');
	}
	else if (e.keyCode == 38) { // Condition pour sauter
		$('.mario').animate({bottom: '+=150'}, 'slow').animate({bottom:'-=150'},'slow');
	}
	else if (e.keyCode == 37 && init > '0px') { // Conditions pour aller vers la guche
        $('.mario').addClass('mario-g');
        $('.mario').css('left',"-=20px");
    }
});
