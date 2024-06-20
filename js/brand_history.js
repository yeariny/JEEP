

$('#sub_header').hide();

$(window).scroll(function () {
  if (scrollY >= 100) {
   $('#sub_header').fadeIn(500);
  } else {
    $('#sub_header').fadeOut(500);
  }
});









$('.s1940_popup').hide();
$('.s1960_popup').hide();
$('.s1980_popup').hide();
$('.s2000_popup').hide();
 $('.s1950_popup').hide();
$('.s1970_popup').hide();
$('.s1990_popup').hide();
$('.s2010_popup').hide();

$('.s1940Btn').click(function(){
    $('.s1940_popup').show(500);
//    $('.s1940').css("overflow-y", "scroll");
    $('body').css("overflow", "hidden");
    return false;
})

$('.s1940_popup').click(function(){
    $('.s1940_popup').hide(500);
    $('.s1940').css("overflow", "hidden");
    $('body').css("overflow", "auto");
})



$('.s1960Btn').click(function(){
    $('.s1960_popup').show(500);
//    $('.s1960').css("overflow-y", "scroll");
    $('body').css("overflow", "hidden");
    return false;
})

$('.s1960_popup').click(function(){
    $('.s1960_popup').hide(500);
//    $('.s1960').css("overflow", "hidden");
    $('body').css("overflow", "auto");
})


$('.s1980Btn').click(function(){
    $('.s1980_popup').show(500);
//    $('.s1980').css("overflow-y", "scroll");
    $('body').css("overflow", "hidden");
    return false;
})

$('.s1980_popup').click(function(){
    $('.s1980_popup').hide(500);
//    $('.s1980').css("overflow", "hidden");
    $('body').css("overflow", "auto");
})


$('.s2000Btn').click(function(){
    $('.s2000_popup').show(500);
//    $('.s2000').css("overflow-y", "scroll");
    $('body').css("overflow", "hidden");
    return false;
})

$('.s2000_popup').click(function(){
    $('.s2000_popup').hide(500);
//    $('.s2000').css("overflow", "hidden");
    $('body').css("overflow", "auto");
})



$('.s1950Btn').click(function(){
    $('.s1950_popup').show(500);
//    $('.s1950').css("overflow-y", "scroll");
    $('body').css("overflow", "hidden");
    return false;
})

$('.s1950_popup').click(function(){
    $('.s1950_popup').hide(500);
//    $('.s1950').css("overflow", "hidden");
    $('body').css("overflow", "auto");
})



$('.s1970Btn').click(function(){
    $('.s1970_popup').show(500);
//    $('.s1970').css("overflow-y", "scroll");
    $('body').css("overflow", "hidden");
    return false;
})

$('.s1970_popup').click(function(){
    $('.s1970_popup').hide(500);
//    $('.s1970').css("overflow", "hidden");
    $('body').css("overflow", "auto");
})


$('.s1990Btn').click(function(){
    $('.s1990_popup').show(500);
//    $('.s1990').css("overflow-y", "scroll");
    $('body').css("overflow", "hidden");
    return false;
})

$('.s1990_popup').click(function(){
    $('.s1990_popup').hide(500);
//    $('.s1990').css("overflow", "hidden");
    $('body').css("overflow", "auto");
})


$('.s2010Btn').click(function(){
    $('.s2010_popup').show(500);
//    $('.s2010').css("overflow-y", "scroll");
    $('body').css("overflow", "hidden");
    return false;
})

$('.s2010_popup').click(function(){
    $('.s2010_popup').hide(500);
//    $('.s2010').css("overflow", "hidden");
    $('body').css("overflow", "auto");
})



$('.top_button').click(function(){
   $('html, body').animate({scrollTop: '0'}, 200);
    
});



















