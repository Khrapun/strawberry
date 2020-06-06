$(document).ready(function(){
    $("#menu").on("click",'a[href*="#"]', function (event) {
        var id  = $(this).attr('href') 
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
});

$(document).ready(function(){
    $("#call-back").on("click",'a[href*="#"]', function (event) {
        var id  = $(this).attr('href') 
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
});

$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
})
