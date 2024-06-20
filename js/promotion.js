function extendDetail(id) {
  var curDetail = document.getElementById(id);
  if (curDetail) {

    if (curDetail.style.display === "flex") {
      curDetail.style.display = "none";
    } else {

      closeAllDetails();
      curDetail.style.display = "flex";
    }
  }
}

function closeAllDetails() {
  var details = document.querySelectorAll(".detail");
  details.forEach(function (detail) {
    detail.style.display = "none";
  });
}



$('.top_button').click(function(){
   $('html, body').animate({scrollTop: '0'}, 500);
    
});




$('#sub_header').hide();

$(window).scroll(function () {
  if (scrollY >= 100) {
   $('#sub_header').fadeIn(500);
  } else {
    $('#sub_header').fadeOut(500);
  }
});


