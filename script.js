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

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("widgetCarousel");

    carousel.addEventListener("touchstart", function (event) {
        const xClick = event.touches[0].pageX;

        const handleTouchMove = function (event) {
            const xMove = event.touches[0].pageX;
            if (Math.floor(xClick - xMove) > 5) {
                $('#widgetCarousel').carousel('next');
            } else if (Math.floor(xClick - xMove) < -5) {
                $('#widgetCarousel').carousel('prev');
            }
            carousel.removeEventListener('touchmove', handleTouchMove);
        };

        carousel.addEventListener("touchmove", handleTouchMove);

        carousel.addEventListener("touchend", function () {
            carousel.removeEventListener("touchmove", handleTouchMove);
        });
    });
});


function initComparisons() {
    var x, i;
    /* Find all elements with an "overlay" class: */
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /* Once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function: */
        compareImages(x[i]);
    }
    function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        /* Get the width and height of the img element */
        w = img.offsetWidth;
        h = img.offsetHeight;
        /* Set the width of the img element to 50%: */
        img.style.width = (w / 2) + "px";
        /* Create slider: */
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /* Insert slider */
        img.parentElement.insertBefore(slider, img);
        /* Position the slider in the middle: */
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /* Execute a function when the mouse button is pressed: */
        slider.addEventListener("mousedown", slideReady);
        /* And another function when the mouse button is released: */
        window.addEventListener("mouseup", slideFinish);
        /* Or touched (for touch screens: */
        slider.addEventListener("touchstart", slideReady);
        /* And released (for touch screens: */
        window.addEventListener("touchend", slideFinish);
        function slideReady(e) {
            /* Prevent any other actions that may occur when moving over the image: */
            e.preventDefault();
            /* The slider is now clicked and ready to move: */
            clicked = 1;
            /* Execute a function when the slider is moved: */
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
            /* The slider is no longer clicked: */
            clicked = 0;
        }
        function slideMove(e) {
            var pos;
            /* If the slider is no longer clicked, exit this function: */
            if (clicked == 0) return false;
            /* Get the cursor's x position: */
            pos = getCursorPos(e)
            /* Prevent the slider from being positioned outside the image: */
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /* Execute a function that will resize the overlay image according to the cursor: */
            slide(pos);
        }
        function getCursorPos(e) {
            var a, x = 0;
            e = (e.changedTouches) ? e.changedTouches[0] : e;
            /* Get the x positions of the image: */
            a = img.getBoundingClientRect();
            /* Calculate the cursor's x coordinate, relative to the image: */
            x = e.pageX - a.left;
            /* Consider any page scrolling: */
            x = x - window.pageXOffset;
            return x;
        }
        function slide(x) {
            /* Resize the image: */
            img.style.width = x + "px";
            /* Position the slider: */
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}


