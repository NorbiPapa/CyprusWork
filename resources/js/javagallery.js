var slideIndex = 0;
var slides, dots;
var slideTimeout;

function showSlides() {
  var i;
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideTimeout = setTimeout(showSlides, 8000); // Change image every 8 seconds
}

function plusSlides(position) {
  clearTimeout(slideTimeout); // Stop the automatic slideshow
  slideIndex += position;
  if (slideIndex > slides.length) {
    slideIndex = 1
  } else if (slideIndex < 1) {
    slideIndex = slides.length
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  slideTimeout = setTimeout(showSlides, 4000); // Restart the automatic slideshow
}

function currentSlide(index) {
  clearTimeout(slideTimeout); // Stop the automatic slideshow
  if (index > slides.length) {
    index = 1
  } else if (index < 1) {
    index = slides.length
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index - 1].style.display = "block";
  dots[index - 1].className += " active";
  slideTimeout = setTimeout(showSlides, 8000); // Restart the automatic slideshow
}


function init() {
  showSlides();
  document.getElementById("prev").addEventListener('click', () => {
    plusSlides(-1)
  });
  document.getElementById("next").addEventListener('click', () => {
    plusSlides(1)
  });
}

document.addEventListener('DOMContentLoaded', init)