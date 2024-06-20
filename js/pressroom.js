//$('.bottom_article').hide();

$('.a1').click(function(){
    $('.aside1 .bottom_article').toggleClass('active');
    $('.arrow1').toggleClass('active');
    return false;
})
$('.a2').click(function(){
    $('.aside2 .bottom_article').toggleClass('active');
    $('.arrow2').toggleClass('active');
    return false;
})
$('.a3').click(function(){
    $('.aside3 .bottom_article').toggleClass('active');
    $('.arrow3').toggleClass('active');
    return false;
})
$('.a4').click(function(){
    $('.aside4 .bottom_article').toggleClass('active');
    $('.arrow4').toggleClass('active');
    return false;
})
$('.a5').click(function(){
    $('.aside5 .bottom_article').toggleClass('active');
    $('.arrow5').toggleClass('active');
    return false;
})


$('.top_button').click(function(){
   $('html, body').animate({scrollTop: '0'}, 200);
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
