/* scrolling */
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();   
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 500);
  });
});

/* on off menu */
$('.on_off').on('click', function(e) {
	e.preventDefault();
 $('.submenu').toggleClass('menu_on');
});


