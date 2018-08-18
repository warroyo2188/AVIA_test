var $ = jQuery;

$(document).ready(function () {


  // set middle div content height as first image in row
  middleTextHeight();

  // Making header stitky
  window.onscroll = function () { headerSticky() };

  // scroll contacto to section form
  $('.go-to-contact').on('click', function (e) {
    $("html, body").stop().animate({ scrollTop: $('#contacto').offset().top }, 'slow');
  });

});

function setSwiper(slides) {
  // Swiper 
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: slides,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    loop: true
  });
}

function middleTextHeight() {
  var second_section_h = $('.second-section__left').height();
  $('.second-section__middle').height(second_section_h);

  $(window).resize(function () {
    var second_section_h = $('.second-section__left').height();
    $('.second-section__middle').height(second_section_h);
  });
}



// Get the header
var header = $("header");

// Get the offset position of the navbar
var sticky = header.offset().top;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function headerSticky() {
  if (window.pageYOffset >= sticky) {
    header.addClass("sticky");
  } else {
    header.removeClass("sticky");
  }
}