$(function(){

  // hoverイベント //
  $('.logo a, .artist, .n-disc a, .acco-head, .top-btn')
  .on('touchstart', function(){
    $(this).addClass('hover');
  }).on('touchend', function(){
    $(this).removeClass('hover');
  });


  // ハンバーガーメニュー //
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


  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.biography .accordion .acco-head').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.acco-inner').slideToggle();
    $(this).toggleClass("open");
    //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
    $('.biography .accordion .acco-head').not($(this)).next('.accordion .acco-inner').slideUp();
    $('.biography .accordion .acco-head').not($(this)).removeClass("open");
  });


});
