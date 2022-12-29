const videoEl = document.querySelector(".video");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    if (videoEl.paused) {
        videoEl.play()
        btnEl.textContent = "⏸"
    } else {
        videoEl.pause();
        btnEl.textContent = "▶"
    }
})