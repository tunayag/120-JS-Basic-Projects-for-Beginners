const containerEl = document.querySelector(".container");
const kits = ["crash", "kick", "snare", "tom"];


kits.forEach((kit) => {
    const buttonEl = document.createElement("button");
    containerEl.appendChild(buttonEl);
    buttonEl.classList.add("btn");
    buttonEl.textContent = kit;
    buttonEl.style.backgroundImage = "url( /" + kit + ".png)";

    const audioEl = document.createElement("audio");
    containerEl.appendChild(audioEl);

    audioEl.src = ("/" + kit + ".mp3");
    buttonEl.addEventListener("click", () => {
        audioEl.play();
    })

    window.addEventListener("keydown", (e) => {
        if (e.key === kit.slice(0, 1)) {
            audioEl.play();
            buttonEl.style.transform = "scale(.75)";

            setTimeout(() => {
                buttonEl.style.transform = "scale(1)"
            }, 100);
        }
    })

})