// const section = document.getElementById('a');

// let currentPos = window.pageYOffset;
// let skew = 0;
// let targetSkew = 0;
// const ease = 0.1;

// const update = () => {
//     if (window.scrollY < 2500 || window.scrollY > 9000) {
//         const newPos = window.pageYOffset;
//         const diff = newPos - currentPos;

//         targetSkew = diff * 0.05;

//         console.log(window.scrollY);

//         skew += (targetSkew - skew) * ease;

//         section.style.transform = `skewY(${skew}deg)`;

//         currentPos = newPos;

//         requestAnimationFrame(update);
//     } else {
//         const newPos = window.pageYOffset;
//         const diff = newPos - currentPos;

//         targetSkew = diff * 0.05;

//         console.log(window.scrollY);

//         skew += (targetSkew - skew) * ease;

//         section.style.transform = 'skewY(0deg)';

//         currentPos = newPos;

//         requestAnimationFrame(update);
//     }

// };

// update();