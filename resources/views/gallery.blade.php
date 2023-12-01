<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Gallery</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <!--SAJTÁT IMPORT-->
    <script src="../backend/headerFooter.js"></script>
    <link rel="stylesheet" href="../backend/Design.css">
    <script src="../backend/design.js"></script>
    <script src="../backend/javagallery.js"></script>
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
          <div class="mySlides fade">
    
            <img src="pictures/Kleos_images/greenleaves.jpeg">
            <div class="text">Caption Text</div>
          </div>
    
          <div class="mySlides fade">
    
            <img src="pictures/Kleos_images/vegtables.jpeg">
            <div class="text">Caption Two</div>
          </div>
    
          <div class="mySlides fade">
    
            <img src="pictures/Kleos_images/greenfruit.jpeg">
            <div class="text">Caption Three</div>
          </div>
    
          <div class="mySlides fade">
    
            <img src="pictures/Kleos_images/greenfruitdiff.jpeg">
            <div class="text">Caption Three</div>
          </div>
    
          <div class="mySlides fade">
    
            <img src="pictures/Kleos_images/redleaves.jpeg">
            <div class="text">Caption Three</div>
          </div>
    
          <div class="mySlides fade">
    
            <img src="pictures/Kleos_images/uglyflower.jpeg">
            <div class="text">Caption Three</div>
          </div>
    
          <div class="mySlides fade">
    
            <img src="pictures/Kleos_images/purpleflower.jpeg">
            <div class="text">Caption Three</div>
          </div>
    
          <div class="mySlides fade">
    
            <img src="pictures/Kleos_images/redandwhite.jpeg">
            <div class="text">Caption Three</div>
          </div>
    
          <div class="mySlides fade">
    
            <img src="pictures/Kleos_images/redflowers.jpeg">
            <div class="text">Caption Three</div>
          </div>
    
          <div class="mySlides fade">
    
            <img src="pictures/Kleos_images/whiteflowers.jpeg">
            <div class="text">Caption Three</div>
          </div>
    
          <!-- Next and previous buttons -->
          <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
          <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>
    
        <!-- The dots/circles -->
        <div style="text-align:center">
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
        </div>
      </div>

    <footer id="footer">

    </footer>
</body>
</html>