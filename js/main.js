


$(function () {
  $(".amaron-carousel").owlCarousel({
    items: 1,
    autoplay: false,
    autoplayTimeout: 2500,
    loop: true,
    autoplayHoverPause: true,
  });

  $(".multi-section-carousel").owlCarousel({
    items: 1,
    autoplay: false,
    loop: true,
  });

  $(".did-you-know-section").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 4500,
    loop: true,
    mouseDrag: false,
  });

  $("#tabs").tabs({});

  $("#accordion").accordion({
    animate: 500,
    heightStyle: "fill",
    collapsible: true,
  });

  $("#ham-accordion").accordion({
    animate: 500,
    heightStyle: "fill",
    collapsible: true,
  });

  $(".hamburger").on("click", function () {
    $(".hamburger-menu").animate({
      left: 0,
    });
  });

  $(".hamburger-close-btn").on("click", function () {
    $(".hamburger-menu").animate({
      left: "-95%",
    });
  });


    $(window).scroll(function(){
      if ($(this).scrollTop()){
          $('.header-icon').hide();
      }else {
          $('.header-icon').show()
      }
    })


  

});
