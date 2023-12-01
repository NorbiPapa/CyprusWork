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

    </head>
    <body class="antialiased">
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0"
            nonce="HHAb3jrP">
        </script>

        <header id="header"></header>
        
        <div class="container mt-4">
            <div class="row">
                <div id="home" class="col-4 col-md-6">
                    <h1 id="kleosFelirat">KLEOS</h1> <h2>Educational <br> Model Farm</h2>
                    <hr>
                    <p>Welcome to Kleos! Welcome to the school of the future! </p>
                </div>
                <div class="col-8 col-md-6">
                    <img style="width: 103%; height: 103%;" src="{{URL('pictures/Kleo.jpg')}}" alt="Kleos Educational Model FarmS">
                </div>
            </div>
        </div> 

        <div class="row mt-3 mb-0" id="attentionPlace">

            <div id="facebookBox" class="col-6 justify-content-center">
                <div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/profile.php?id=100091936171751" data-width="500" data-height="800" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" show-posts="true" data-show-facepile="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=640&amp;height=800&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100091936171751&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;small_header=false&amp;tabs=timeline&amp;width=500"><span style="vertical-align: bottom; width: 500px; height: 331px;"><iframe name="f72551b50ac74" width="500px" height="800px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v18.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df169bf9ce0e42%26domain%3D127.0.0.1%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252F127.0.0.1%253A5500%252Ffb3bc50fe9911c%26relation%3Dparent.parent&amp;container_width=640&amp;height=800&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100091936171751&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;small_header=false&amp;tabs=timeline&amp;width=500" style="border: none; visibility: visible; width: 500px; height: 331px;" class=""></iframe></span></div>
            </div>

            <div class="col-3">
                <h4 class="mb-5">Kleos Educational Model Farm is the latest innovative initiative of ShipCon, a self-sustainable
                    educational farm - agricultural & animal - at the outskirts of Limassol, in the well-known area of
                    Parekklisia.</h4>
                <button id="aboutUsButton">About Us</button>
            </div>
        </div>
        <footer id="footer"></footer>
    </body>
</html>