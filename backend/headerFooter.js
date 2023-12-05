document.addEventListener("DOMContentLoaded", () => {

    let headerInnerHtml = `
    <div id="topnav">
        <div>
            <img src="../images/Kleos Logo_quality-PhotoRoom.png-PhotoRoom.png" id="logo" alt="Kleos farm logo">
            <p>Educational Model Farm</p>
        </div>

        <ul>
            <li class="nav-link active"><a href="DesignExample.html">Home</a></li>
            <li class="nav-link"><a href="gallery.html">Gallery</a></li>
            <li class="nav-link"><a href="aboutUs.html">About Us</a></li>
            <li class="nav-link"><a href="reviews.html">Reviews</a></li>
        </ul>
    </div>
    `;

    let footerInnerHtml = `
    <div class="row w-100">
        <div class="col-4">
            <p id="contactus">Contact Us</p>
            <p id="info">For more information about Kleos <br>
                Please contact us at <a id="contactEmail" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@shipcon.eu.com" target="_blank">info@shipcon.eu.com</a></p>
        </div>
        <div class="col-6 d-flex justify-content-center align-items-center p-0">
            <div class="mapouter" style="position:relative; width:100%; height:0; padding-bottom:33.25%;">
                <div class="gmap_canvas" style="position:absolute; top:0; left:0; width:100%; height:100%;">
                    <iframe style="width: 100%; height: 100%; position: absolute;" src="https://maps.google.com/maps?q=shipcon+hq&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
            </div>
        </div>
        <div class="col-2 d-flex justify-content-end align-items-end">
            <div class="social-links">
                <a href="https://www.facebook.com/profile.php?id=100091936171751" target="_blank"><img
                        src="../images/facebook-icon-512x512-seb542ju.png" alt="Facebook Icon" class="sicon"></a>
                <a href="https://www.instagram.com/" target="_blank"><img src="../images/Instagram_icon.png" alt="Instagram icon"
                        class="sicon"></a>
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

});