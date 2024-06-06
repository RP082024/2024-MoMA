window.onload = function () {
    setTimeout(function () {
        const image = document.getElementById('unfoldImage');
        image.style.transform = 'scaleX(1)';
    }, 3000); // 3000 milliseconds = 3 seconds

    // Toggle hamburger menu
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuItems = document.querySelector('.menu-items');
    hamburgerMenu.addEventListener('click', function () {
        menuItems.classList.toggle('show');
    });
};
