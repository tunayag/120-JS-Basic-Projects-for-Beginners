const containerEl = document.querySelector(".container");
const videoEl = document.querySelector(".video");

let videoHeight = videoEl.offsetHeight;
containerEl.style.height = videoHeight + "px";
console.log(videoHeight + "px")

window.addEventListener("scroll", () => {
    if (window.scrollY > videoHeight) {
        videoEl.classList.add("active")
    } else {
        videoEl.classList.remove("active")
    }
});