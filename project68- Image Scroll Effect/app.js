const headContainerEl = document.querySelector(".head-container");

window.addEventListener("scroll", () => {
    updateImage();
    console.log(window.pageYOffset)
});

function updateImage() {
    headContainerEl.style.opacity = 1 - window.pageYOffset / 1000
}