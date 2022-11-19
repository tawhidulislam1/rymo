$(document).ready(function () {
  $(window).scroll(function () {
      this.scrollY >100 ? $(".nav").addClass("sticky") : $(".nav").removeClass("sticky")
  })   
});



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  
  
  // sidebar submenu open close js code
  let laptopArrow = document.querySelector(".laptop-arrow");
  laptopArrow.onclick = function() {
   navLinks.classList.toggle("show1");
  }
//   let moreArrow = document.querySelector(".more-arrow");
//   moreArrow.onclick = function() {
//    navLinks.classList.toggle("show2");
//   }
  let mobileArrow = document.querySelector(".mobile-arrow");
  mobileArrow.onclick = function() {
   navLinks.classList.toggle("show2");
  }
  let acArrow = document.querySelector(".ac-arrow");
  acArrow.onclick = function() {
   navLinks.classList.toggle("show3");
  }
  
  