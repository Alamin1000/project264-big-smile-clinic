(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-close-a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.offcanvas-close').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });


  // owl-carousel
  $('.provider-slider-active').owlCarousel({
    loop:false,
    responsiveClass:true,
    nav:true,
    items:4,
    margin: 35,
    dots: false,
    dotsEach: 2,
    navText: ['<img src="images/carousel-arrow-left.svg" alt="">','<img src="images/carousel-arrow-right.svg" alt="">'],
    responsive:{
        0:{
          margin: 12,
          items:2
        },
        575:{
          margin: 15,
          items: 3
        },
        767:{
          margin: 20,
        },
        991:{
          margin: 25,
        },
        1199:{
          margin: 25,
        },
        1399:{
          margin: 25,
        },
        1699:{
          margin: 35,
      }
    }
  });
  $('.testimonial-slider-active').owlCarousel({
    loop:false,
    responsiveClass:true,
    nav:true,
    items:4,
    margin: 6,
    dots: false,
    dotsEach: 2,
    navText: ['<img src="images/carousel-arrow-left.svg" alt="">','<img src="images/carousel-arrow-right.svg" alt="">'],
    responsive:{
        0:{
          items: 2
        },
        575:{
          items: 2
        },
        767:{
          items: 3
        },
        991:{

        },
        1199:{

        },
        1399:{

        },
        1699:{

      }
    }
  });

  //magnificPopup
  $('.popup-img').magnificPopup({
    type: 'image'
  });
  $('.popup-video').magnificPopup({
  type: 'iframe'
  });
  // magnific-popup-img-gallery
  $('.album-img a').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    }
  });
  //multiple-img-gallery
  $('.image-box').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: '.img', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
  });


        

})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // nice-select
  $('.nice-select').niceSelect();

  // preloader
  $("#preloader").fadeOut(500);

})











