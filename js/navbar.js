const navbar = document.getElementById('navbar');
const hamburgerMenu = document.getElementById('hamburger-menu')
const navOffsetOverlay = document.getElementById('nav-offset-overlay')

function openNavbar(element) {
    element.classList.toggle('active');
    navbar.classList.toggle('active');

    if (navbar.classList.contains('active')) {
        navOffsetOverlay.style.opacity = '0.5';
        navOffsetOverlay.style.visibility = 'visible';
    }

    else {
        navOffsetOverlay.style.opacity = '0';
        navOffsetOverlay.style.visibility = 'hidden';
    }
}

document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        navOffsetOverlay.style.opacity = '0';
        navOffsetOverlay.style.visibility = 'hidden';

        hamburgerMenu.classList.toggle('active');
        navbar.classList.remove('active');

        const targetId = this.getAttribute('href'); // ex: "#sec2"
        const target = document.querySelector(targetId);

        if (target) {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: {
                    y: target,
                    offsetY: 0 // ajuste se tiver header fixo
                },
                ease: 'power2.out'
            });
        }
    });
});

document.addEventListener('click', function (event) {
    if (!navbar.contains(event.target) && !hamburgerMenu.contains(event.target) && navbar.classList.contains('active')) {
        navOffsetOverlay.style.opacity = '0';
        navOffsetOverlay.style.visibility = 'hidden';

        hamburgerMenu.classList.remove('active');
        navbar.classList.remove('active');

    }
});