 
	$(document).keydown(function(e){

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
	
	});
