/* Activador de jQuery */
$(document).ready(function(){
    $('.slick-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        arrows: true,
        fade: true,
        pauseOnHover: false
    });
});