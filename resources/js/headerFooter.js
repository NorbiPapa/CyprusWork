document.addEventListener("DOMContentLoaded", () => {
    
    let headerInnerHtml = `
    <div id="topnav">
        <img src="pictures/Kleos Logo_quality-PhotoRoom.png-PhotoRoom.png" style="height: 75px;" width="75px"
            id="logo" alt="Kleos farm logo">
        <p class="ms-4">Bright Change</p>
        <div class="d-flex align-items-center justify-content-end">
            <a class="active" href="DesignExample.html">Home</a>
            <a href="/erasmusCourses">Erasmus+ VET courses</a>
            <a href="gallery.html">Gallery</a>
            <a href="aboutUs.html">About Us</a>
            <a href="#reviews">Reviews</a>
        </div>
    </div>
    `;

    let footerInnerHtml = `
        <p id="contactus">Contact Us</p>
        <p id="info">For more information about Kleos <br>
            Please contact us at <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@shipcon.eu.com" target="_blank">info@shipcon.eu.com</a></p>
        <a href="https://www.facebook.com/profile.php?id=100091936171751" target="_blank"><img
                src="pictures/facebook-icon-512x512-seb542ju.png" alt="Facebook Icon" class="sicon me-5"></a>
        <a href="https://www.instagram.com/" target="_blank"><img src="pictures/Instagram_icon.png" alt="Instagram icon"
                class="sicon"></a>
        <a href="https://twitter.com/XSocialNetworks" target="_blank"><img src="pictures/x.png" alt="X icon" class="sicon"></a>
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