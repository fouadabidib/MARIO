 
	$(document).keypress(function(e){
		if(e.keyCode == 100) {

			/*var marche {
				left: "+=20px"
			} */


			$('.mario').animate({left: '+=20'});

			event.stopPropagation();
		}
	
	});
