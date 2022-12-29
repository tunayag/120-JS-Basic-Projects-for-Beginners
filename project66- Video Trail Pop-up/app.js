const videoContainerEl = document.querySelector(".history-container");
const buttonEl = document.querySelector("button");
const closeEl = document.querySelector(".fa-solid")
const video = document.querySelector("video")
buttonEl.addEventListener("click", () => {
    videoContainerEl.classList.remove("active");
});

closeEl.addEventListener("click", () => {
    videoContainerEl.classList.add("active");
    video.pause();
})