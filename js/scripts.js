$(document).ready(function(){
  $('.menu-btn' ).click(function() {
    $('.responsive-menu').toggleClass('expand');
  });
  $(window).resize(function(){
    if ($(window).width() > 980){
      $('.responsive-menu').removeClass('expand');
    }
  });
});
