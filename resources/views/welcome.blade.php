<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <div id="betustilusok">

        </div>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Montserrat:wght@500&family=Raleway:wght@200&display=swap" rel="stylesheet">

        <!-- Styles -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
        
        <title>Cyprus design example</title>

        @vite(['resources/css/app.css', 'resources/js/headerFooter.js', 'resources/js/design.js'])

        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0" nonce="HHAb3jrP"></script>

    </head>
     <!-- Header section placeholder for headerFooter.js -->
     <header id="header"></header>

<!-- Main content container -->
<div id="container">
    <!-- Bootstrap container for responsive layout -->
    <div class="container">
        <!-- Bootstrap row for layout -->
        <div class="row">
            <!-- Column for title and introduction text -->
            <div id="home" class="col-4 col-md-6">
                <h1 id="kleosFelirat">KLEOS</h1>
                <h2 id="mainH2">Educational <br> Model Farm</h2>
                <hr>
                <p id="mainP">Welcome to Kleos! Welcome to the school of the future! </p>
            </div>
            <!-- Column for image -->
            <div class="col-8 col-md-6">
                <img style="width: 103%; height: 102.6%;" src="{{URL('pictures/Kleo.jpg')}}" alt="Kleos Educational Model Farm">
            </div>
        </div>
    </div>
    <!-- Another row for Facebook integration and additional information -->
    <div class="row mt-3 mb-0" id="attentionPlace">
        <!-- Column for Facebook page widget -->
        <div class="col-7 d-flex justify-content-center">
            <div id="facebookBox" class="fb-page" data-href="https://www.facebook.com/profile.php?id=100091936171751" data-width="500"
                data-height="600" show-posts="true"></div>
        </div>
        <!-- Column for additional attention getter text and 'About Us' button -->
        <div class="col-3 align-items-center text-center">
            <h4 class="mb-5">Kleos Educational Model Farm is the latest innovative initiative of ShipCon, a
                self-sustainable educational farm - agricultural & animal - at the outskirts of Limassol, in the well-known area of Parekklisia.</h4>
            <button id="aboutUsButton">About Us</button>
        </div>
    </div>
</div>

<!-- Footer section placeholder for headerFooter.js -->
<footer id="footer"></footer>

</body>
</html>