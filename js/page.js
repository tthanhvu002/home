$(document).ready(function(){
    AOS.init();
    $('.slider-container').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        //autoplaySpeed: 1000,
        dots: true,
        infinite: true, 
        vertical: true
    });
    
  });