<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Gallery</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <!--BETŰSTÍLUSOK-->
    <div id="betustilusok">

    </div>
    @vite(['resources/css/app.css', 'resources/js/headerFooter.js', 'resources/js/design.js', 'resources/js/javagallery.js'])
</head>
<body>
<header id="header">

</header>

<div class="container">
  <!-- Slideshow container -->
  <div class="slideshow-container">
    <!-- Full-width images with number and caption text -->
    <div class="slides">
      <div class="slide">
        <img src="pictures/Kleos_images/farm_dogs.png">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/farm_horse.png">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/goats.png">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0215.jpeg">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0217.jpeg">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0221.jpeg">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0227.jpeg">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0230.jpeg">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0232.jpeg">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0241.jpeg">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0242.jpeg">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0247.jpeg">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0306.jpeg">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0312.jpeg">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0320.jpeg">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0329.png">
      </div>
      <div class="slide">
        <img src="pictures/Kleos_images/IMG_0330.png">
      </div>

      <!-- további diák... -->
    </div>
    <!-- Next and previous buttons -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
  </div>
  <br>
  <!-- The dots/circles -->
  <div id="dotsDiv">
    <span class="dot" onclick="currentSlide(0)"></span>
    <span class="dot" onclick="currentSlide(1)"></span>
    <span class="dot" onclick="currentSlide(2)"></span>
    <span class="dot" onclick="currentSlide(3)"></span>
    <span class="dot" onclick="currentSlide(4)"></span>
    <span class="dot" onclick="currentSlide(5)"></span>
    <span class="dot" onclick="currentSlide(6)"></span>
    <span class="dot" onclick="currentSlide(7)"></span>
    <span class="dot" onclick="currentSlide(8)"></span>
    <span class="dot" onclick="currentSlide(9)"></span>
    <span class="dot" onclick="currentSlide(10)"></span>
    <span class="dot" onclick="currentSlide(11)"></span>
    <span class="dot" onclick="currentSlide(12)"></span>
    <span class="dot" onclick="currentSlide(13)"></span>
    <span class="dot" onclick="currentSlide(14)"></span>
    <span class="dot" onclick="currentSlide(15)"></span>
    <span class="dot" onclick="currentSlide(16)"></span>
  </div>
</div>


<script>
  let slideIndex = 0;
  let timeoutId = null;
  const slides = document.querySelector(".slides");
  const dots = document.getElementsByClassName("dot");

  showSlides();

  function currentSlide(index) {
    slideIndex = index;
    showSlides();
  }

  function plusSlides(step) {
    slideIndex += step;
    showSlides();
  }

  function showSlides() {
    if (slideIndex >= slides.children.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.children.length - 1;
    }

    const translateValue = -slideIndex * 50 + "%";
    slides.style.transform = "translateX(" + translateValue + ")";

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active-dot');
    }
    dots[slideIndex].classList.add('active-dot');

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function () {
      plusSlides(1);
    }, 5000); // Change image every 5 seconds
  }
</script>

<footer id="footer">

</footer>
</body>
</html>