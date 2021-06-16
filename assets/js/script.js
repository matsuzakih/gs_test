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
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });


});
