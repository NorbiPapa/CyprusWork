let slideIndex = 0;
let timeoutId = null;
const slides = document.querySelector(".slides");
const dots = document.getElementsByClassName("dot");




function currentSlide(index) {
  console.log("asdasdasd");
  slideIndex = index;
  showSlides();
}

function plusSlides(step) {
  slideIndex += step;
  showSlides();
}


function showSlides() {
var slidelist = document.querySelectorAll(".slide");
console.log(slidelist);
  
  if (slideIndex >= slidelist.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slidelist.length - 1;
  }
  const translateValue = -slideIndex * 50 + "%";
  console.log("0")

  for (let i=0; i < slidelist.length; i++) {
    console.log("1")
    
    slidelist[i].style.transform = "translateX(" + translateValue + ")";
  }
  
  console.log("1,5")
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
    console.log("2")
  }
  dots[slideIndex].classList.add('active');
  console.log("3")
  if (timeoutId) {
    clearTimeout(timeoutId);
    console.log("4")
  }
  timeoutId = setTimeout(function() {
    plusSlides(1);
    console.log("5")
  }, 5000); // Change image every 5 seconds
}

document.addEventListener("DOMContentLoaded",showSlides());