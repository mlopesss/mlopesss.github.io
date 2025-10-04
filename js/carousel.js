let elements = document.querySelectorAll(".works").length;

function isDesktop() {
    const userAgent = navigator.userAgent.toLowerCase();

    // Check for common mobile device keywords
    const isMobile = /android|iphone|ipad|ipod|blackberry|windows phone|opera mini|mobile/i.test(userAgent);

    return !isMobile; // If not mobile, assume desktop
};

gsap.to(".works-element", {
    xPercent: ((elements - 1 * 101)),
    ease: "none",
    scrollTrigger: {
        trigger: ".works",
        start: "top top",
        end: () => `+=${elements * 5000}vh`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        snap: {
            snapTo: 1 / (elements - 1)
        }
    },
}
);