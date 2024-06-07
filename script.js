window.onload = function () {
    setTimeout(function () {
        const image = document.getElementById('unfoldImage');
        image.style.transform = 'scaleX(1)';
    }, 2000); // 2000 milliseconds = 2 seconds

    // Toggle hamburger menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuItems = document.querySelector('.menu-items');
    hamburgerMenu.addEventListener('click', function () {
        menuItems.classList.toggle('show');
    });
};


function togglePopup() {
    var popup = document.querySelector('.popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

// Close the popup if clicked outside
window.onclick = function (event) {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function (popup) {
        if (!popup.contains(event.target) && !event.target.classList.contains('info-glyph')) {
            popup.style.display = 'none';
        }
    });
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}