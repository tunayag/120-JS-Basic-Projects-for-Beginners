const videoPlayer = document.querySelector(".video-player")
const video = document.querySelector(".gym-video")
const playButton = document.querySelector(".play-button")

playButton.addEventListener("click", (e) => {
    if (video.paused) {
        video.play()
        e.target.textContent = "⏸"
    } else {
        video.pause()
        e.target.textContent = "▶"
    }
})

/*const btn = document.querySelector(".btn");
const video = document.querySelector(".gym-video");

function playvid() {
    video.play();
};


btn.addEventListener("click", playvid);

/*
function pauseVid() {
    video.pause();
};


btn.addEventListener("click", pauseVid);*/