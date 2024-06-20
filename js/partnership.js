$('.top_button').click(function(){
   $('html, body').animate({scrollTop: '0'}, 500);
    return false;
});

$('#sub_header').hide();

$(window).scroll(function () {
  if (scrollY >= 100) {
   $('#sub_header').fadeIn(500);
  } else {
    $('#sub_header').fadeOut(500);
  }
});