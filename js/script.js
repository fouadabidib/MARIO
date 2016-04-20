$(function() {
    $('html').keydown(function(e) {
        if (e.keyCode == 37) {
            $('.mario').addClass('mario-g');
            $('.mario').animate({left: "-=20px"});
        }
    });
});