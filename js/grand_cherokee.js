// for hiding and showing navbar
window.onscroll = function () {
  var scrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  if (scrollPosition >= 100) {
    document.getElementById("sub_header").style.display = "flex";
  } else {
    document.getElementById("sub_header").style.display = "none";
  }
};

// for showing imgs with bg-black/60, on clicked
function showImg(id) {
  var curDetail = document.getElementById(id);
  console.log(curDetail);
  if (curDetail) {
    if (curDetail.style.display === "flex") {
      curDetail.style.display = "none";
    } else {
      curDetail.style.display = "flex";
    }
  }
}

// ! hide back when clicked once more
function hideOverlay(id) {
  var x = event.clientX;
  var y = event.clientY;

  var imageArea = document.getElementById(`${id}-fixed-img`);
  var imageAreaRect = imageArea.getBoundingClientRect();

  if (
    x >= imageAreaRect.left &&
    x <= imageAreaRect.right &&
    y >= imageAreaRect.top &&
    y <= imageAreaRect.bottom
  ) {
    return;
  }

  var overlay = document.getElementById(id);
  overlay.style.display = "none";
}

function showBottomImg(event, id) {
  var curDetail = document.getElementById(id);
  if (curDetail) {
    closeAllDetails();
    curDetail.style.display = "flex";
    event.target.style.border = "15px solid #ddd";
  }
}

function closeAllDetails() {
  var details = document.querySelectorAll(".hidden-img");
  var buttons = document.querySelectorAll(".show-img-button");
  details.forEach(function (detail, idx) {
    detail.style.display = "none";
    buttons[idx].style.border = "1px solid black";
  });
}


$('.top_button').click(function(){
   $('html, body').animate({scrollTop: '0'}, 200);
    return false;
});
