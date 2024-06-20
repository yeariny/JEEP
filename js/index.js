let nth = 0; 
let pos = 0; 
const MAX = $('article').length -1;


$(window).on('wheel',function(parameter){
   if (parameter.originalEvent.deltaY > 0){
     
    if(nth >= MAX) return;
         nth++;
       
   } else{
       if(nth <= 0) return;
       nth--;
        };
    pos = nth * $(window).height();
    $('html,body').animate({
        scrollTop:pos
    },500);
    
    console.log(parameter.originalEvent.deltaY);
    console.log('nth =',nth);
});











const imgBoxPOS = $(".textboxR").offset();
//const imgBoxTOP = $(".textboxR").offset().top;
//const imgBoxTOPR1 = $(".textboxR1").offset().top;
//const imgBoxTOPL_1 = $(".textboxL_1").offset().top;
//const imgBoxTOPL_2 = $(".textboxL_2").offset().top;
//const imgBoxTOPL = $(".textboxL_2").offset().top;
const imgBoxTOPL_3 = $(".textboxL_3").offset().top;


console.log(imgBoxTOPL_3);

//그랜드체로키L
$(window).scroll(function () {
  if (scrollY >= 500 && scrollY <= 1500) {
   $('.textboxR').addClass('active');
  } else {
    $('.textboxR').removeClass('active');
  }
});

//그랜드체로키
$(window).scroll(function () {
  if (scrollY >= 1600 && scrollY <= 2600) {
   $('.textboxL_1').addClass('active');
  } else {
    $('.textboxL_1').removeClass('active');
  }
});

//그랜드체로키4xe
$(window).scroll(function () {
  if (scrollY >= 2700 && scrollY <= 3700) {
   $('.textboxL_2').addClass('active');
  } else {
    $('.textboxL_2').removeClass('active');
  }
});



//랭글러
$(window).scroll(function () {
  if (scrollY >= 3800 && scrollY <= 4400) {
   $('.textboxL').addClass('active');
  } else {
    $('.textboxL').removeClass('active');
  }
});


//랭글러4xe
$(window).scroll(function () {
  if (scrollY >= 4600 && scrollY <= 5400) {
   $('.textboxR1').addClass('active');
  } else {
    $('.textboxR1').removeClass('active');
  }
});


//그래디에이터

$(window).scroll(function () {
  if (scrollY >= 5500 ) {
   $('.textboxL_3').addClass('active');
  } else {
    $('.textboxL_3').removeClass('active');
  }
});
