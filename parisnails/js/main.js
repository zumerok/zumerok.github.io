/* scrolling */
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();   
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 500);
  });
});

/* language menu */
$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu_lang').toggleClass('menu_active');
});

$('.ru').on('click', function() {
  alert ('Учи английский язык !')
});
$('.fr').on('click', function() {
  alert ('Учи английский язык !')
});
