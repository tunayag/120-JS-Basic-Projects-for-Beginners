const leftArr = document.getElementById("left-arrow");
const rightArr = document.getElementById("right-arrow");
const textDiv = document.querySelector(".texts");
let index = 0;


const texts = [
    "That was so much pleasure for me using this app.",
    "Wow I highly recommend this app.",
    "I have heard about it from social media and i feel kinda lucky using this app."
]

gsap.from(".texts", .8, { y: '-100%' });

function slideRight() {
    if (index == texts.length - 1) index = 0;

    else index++;
    gsap.to(".images", .3, { x: `${-index * 100}%` })
    textDiv.textContent = texts[index];
    gsap.from(textDiv, .5, { y: -20, opacity: 0, ease: 'power3.out' })
}

function slideLeft() {
    if (index == 0) index = texts.length - 1;
    else index--;
    gsap.to(".images", .3, { x: `${-index * 100}%` })
    textDiv.textContent = texts[index];
    gsap.from(textDiv, .5, { y: -20, opacity: 0, ease: 'power3.out' })
}


leftArr.addEventListener("click", slideLeft)
rightArr.addEventListener("click", slideRight)