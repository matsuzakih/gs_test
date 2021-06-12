$(function(){

  $('.hamburger').click(function() {
    $('.hamburger').toggleClass("active");
    $('nav').slideToggle();
  });
  $('.menu-item').click(function() {
    $('.hamburger').removeClass("active");
    $('nav').slideToggle();
  });


  // トップへ戻るボタン //
  var pagetop = $('.top-btn');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });


});
