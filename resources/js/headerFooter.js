function loadLogoutButton() {
    fetch('/logout-button')
        .then(response => {
            return response.text();
        })
        .then(html => {
            document.getElementById('logout-button-placeholder').innerHTML = html;
        })
        .catch(error => console.error('Error loading logout button:', error));
}

function updateActiveNavItem() {
    // Get all nav links
    const navLinks = document.querySelectorAll('#topnav .nav-link');

    // Remove the active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Get the current URL
    const currentUrl = window.location.pathname;

    // Apply the active class to the nav link that matches the current URL
    navLinks.forEach(link => {
        console.log(link.querySelector('a').getAttribute('href'));
        console.log(currentUrl);
        if (link.querySelector('a').getAttribute('href') === currentUrl) {
            link.classList.add('active');
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    
    let headerInnerHtml = `
    <div id="topnav" class="d-flex align-items-center justify-content-between">
        <div>
            <a href="/"><img src="pictures/Kleos Logo_quality-PhotoRoom.png-PhotoRoom.png" style="height: 75px;" width="75px"
                id="logo" alt="Kleos farm logo"></a>
            <a href="/"><p class="ms-4" id="headertext">Educational Model Farm</p></a>
        </div>
        <div id="logout-button-placeholder"></div> <!-- Placeholder for logout button -->
        <div class="d-flex align-items-center justify-content-end" id="navlinks">
            <ul>
                <li class="nav-link active" id="home"><a href="/">Home</a></li>
                <li class="nav-link" id="gallery"><a href="/gallery">Gallery</a></li>
                <li class="nav-link" id="aboutus"><a href="/about-us">About Us</a></li>
                <li class="nav-link" id="reviews"><a href="/reviews">Reviews</a></li>
            </ul>
        </div>
    </div>
    `;

    let footerInnerHtml = `
    <div class="container-fluid">
        <div class="row">
            <div id="contactUsDiv" class="col-lg-5">
                <div class="row">
                    <p id="contactus">Contact Us</p>
                    <p id="info">For more information about Kleos <br>
                        Please contact us at <a id="contactEmail" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@shipcon.eu.com" target="_blank">info@shipcon.eu.com</a>
                    </p>
                </div>
                <div class="row">
                    <div class="social-links d-flex justify-content-start">
                        <a href="https://www.facebook.com/profile.php?id=100091936171751" target="_blank"><img src="pictures/facebook-icon-512x512-seb542ju.png" alt="Facebook Icon" class="sicon"></a>
                        <a href="https://www.instagram.com/shipcon.limassol/?hl=en" target="_blank"><img src="pictures/Instagram_icon.png" alt="Instagram icon" class="sicon"></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="mapouter" style="position:relative; width:100%; height:0; padding-bottom:34.50%;">
                    <div class="gmap_canvas" style="position:absolute; top:0; left:0; width:100%; height:100%;">
                        <iframe style="width: 100%; height: 100%; position: absolute;" src="https://maps.google.com/maps?q=shipcon+hq&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    let betustilusLinkek = `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Montserrat:wght@500&family=Raleway:wght@200&display=swap" rel="stylesheet">
    `

    document.getElementById("header").innerHTML = headerInnerHtml;
    document.getElementById("footer").innerHTML = footerInnerHtml;
    document.getElementById("betustilusok").innerHTML = betustilusLinkek;

    loadLogoutButton();
    updateActiveNavItem();
});
