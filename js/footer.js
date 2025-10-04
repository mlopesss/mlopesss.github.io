gsap.to(".footer-container", {
    borderRadius: "0px",
    scrollTrigger: {
        trigger: ".footer-container",
        start: "top bottom",
        end: "+=1000",
        scrub: true,
    }
});

document.querySelectorAll('.footer-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: {
                    y: target,
                    offsetY: 0
                },
                ease: 'power2.out'
            });
        }
    });
});