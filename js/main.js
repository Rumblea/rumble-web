$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    var textarea = $(".contact-textarea").offset().top;

    $(".main a").click(function(){
    	$(".html,body").animate({scrollTop:textarea},500);
    });
});
