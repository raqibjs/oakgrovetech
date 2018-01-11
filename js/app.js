$(function () {

    $('#home-banner .flexslider').flexslider({
        animation: "fade",
        animationSpeed: 500,
        easing: "linear"
    });

    // append slider-controls in container
    $('#slider-controls .slider-control-container').append( $('.flex-control-nav') );
    $('#slider-controls .slider-control-container').append( $('.flex-direction-nav') );
    

    $('#ondeck .flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        controlNav: false,
        move: 1,
        itemWidth: 360,
        itemMargin: 10,
        minItems: 1,
        maxItems: 3
    });

    $('.main-content .flexslider').flexslider({
        animation: "slide"
    });


    //Portfolio
    var mixer = mixitup($('.portfolio-content'));


});