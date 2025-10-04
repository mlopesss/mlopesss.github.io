const cursorDot = document.querySelector("[data-cursor-dot]")

function isDesktop() {
    const userAgent = navigator.userAgent.toLowerCase();

    // Check for common mobile device keywords
    const isMobile = /android|iphone|ipad|ipod|blackberry|windows phone|opera mini|mobile/i.test(userAgent);

    return !isMobile; // If not mobile, assume desktop
}

window.addEventListener("mousemove", function (e) {
    if (isDesktop()) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.display = 'block';

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorDot.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 1000, fill: "forwards" });
    }

    else {
        cursorDot.style.display = 'none';
    }
});