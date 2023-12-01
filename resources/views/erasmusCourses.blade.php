<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Erasmus+ VET Courses</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <!--SAJTÁT IMPORT-->
    <script src="../backend/headerFooter.js"></script>
    <link rel="stylesheet" href="../backend/Design.css">
    <script type="module" src="../backend/javacourses.js"></script>
    <script src="../backend/design.js"></script>
    <!--BETŰSTÍLUSOK-->
    <div id="betustilusok"></div>

    @vite(['resources/css/app.css', 'resources/js/headerFooter.js', 'resources/js/design.js', 'resources/js/javacourses.js'])
</head>
<body>
    <header id="header">
        
    </header>
    
    <div class="container">
        <h2 class="mt-5" id="erasmusCourses">Erasmus Courses</h2>
        <div class="row mt-5">
            
            <div class="col-8">
                <p id="erasmus">Discover the Erasmus IT/Programming courses at Kleos Farm - a haven of green tranquility far removed from the distractions of urban life. Nestled in nature, this serene environment offers students a unique setting free from air, water, light, and noise pollution.
                    At Kleos Farm, IT students engage in hands-on networking challenges, while programmers craft the digital identity of the farm through website development. Beyond the tech focus, the farm is a vibrant hub of activity, teeming with animals and people alike. From collaborative projects to shared moments with the resident animals, Kleos Farm provides an immersive and holistic educational experience.
                    Join us at Kleos Farm, where innovation harmonizes with nature, offering a refreshing and enriching Erasmus adventure. Welcome to a place where IT and programming education thrive amidst the calm and vitality of rural life.</p>
            </div>

            <div class="col-4" id="circle">
                <ul>
                    <li id="erasmusli1"><p>IT Tech/Programmer</p><img src="pictures/it.png" alt="IT icon"></li>
                    <li id="erasmusli2"><p>Environment Engineer</p><img src="pictures/enviroment.png" alt="Environment icon"></li>
                    <li id="erasmusli3"><p>Chemist</p><img src="pictures/chemist.png" alt="Chemist icon"></li>
                </ul>
            </div>
        </div>
    </div>

    <footer id="footer">

    </footer>
</body>
</html>