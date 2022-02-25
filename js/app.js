var mixer = mixitup('.portfolio');

//fancybox
Fancybox.bind("[data-fancybox]", {
 
});


$(document).ready(function(){
 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
})
});

// topUp 
$('.top').click (function(){
    $("html, body").animate({
      scrollTop:0
    }, 1000);
  });
  $('.top').hide();
  $(window).scroll (function(){
    let ourWindo = $(this).scrollTop();
  
    if(ourWindo>100){
      $('body').addClass('fixed');
    }else{
      $('body').removeClass('fixed');
    }
  
    if(ourWindo<500){
      $(".top").fadeOut();
    }
   else{
      $('.top').fadeIn();
    }
  
  });
  