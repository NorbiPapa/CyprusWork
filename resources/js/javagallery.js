var slideIndex = 1;
var slides, dots;
var slideTimeout;

function updateSlideDisplay() {
    slides = document.getElementsByClassName("slide");
    dots = document.getElementsByClassName("dot");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.opacity = "1";
    dots[slideIndex - 1].className += " active-dot";
}

window.showSlides = function () {
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    updateSlideDisplay();
    slideTimeout = setTimeout(showSlides, 8000); // Change image every 8 seconds
}

window.plusSlides = function (position) {
    clearTimeout(slideTimeout);
    slideIndex += position;
    if (slideIndex > slides.length) { slideIndex = 1; }
    else if (slideIndex < 1) { slideIndex = slides.length; }
    updateSlideDisplay();
    slideTimeout = setTimeout(showSlides, 8000);
}

window.currentSlide = function (index) {
    clearTimeout(slideTimeout);
    slideIndex = index;
    if (slideIndex > slides.length) { slideIndex = 1; }
    else if (slideIndex < 1) { slideIndex = slides.length; }
    updateSlideDisplay();
    slideTimeout = setTimeout(showSlides, 8000);
}

function init() {
    updateSlideDisplay(); // Initialize the first slide
    document.getElementById("prev").addEventListener('click', function() {
        plusSlides(-1);
    });
    document.getElementById("next").addEventListener('click', function() {
        plusSlides(1);
    });
}

document.addEventListener('DOMContentLoaded', init);