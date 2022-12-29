const startbutton = document.querySelector("button");
const scoreEl = document.querySelector("span");
const heartEls = document.querySelectorAll(".heart");

let lastHeart;
let timeIsUp = false;
let score = 0

startbutton.addEventListener("click", () => {
    startGame();

    setTimeout(() => {
        timeIsUp = true;
        window.alert("Time is up!")
    }, 15000);
})


function startGame() {
    randomHeart();
}




function randomHeart() {
    const line = Math.floor(Math.random() * heartEls.length)
    const chosenHearth = heartEls[line]
    const time = Math.round(Math.random() * (2500 - 2000)) + 2000;
    chosenHearth.classList.add("chosen")

    console.log(time)

    setTimeout(() => {
        chosenHearth.classList.remove("chosen");
        if (!timeIsUp) {
            randomHeart();
        }
    }, time);


    if (lastHeart === chosenHearth) {
        return randomHeart();
    } else {
        lastHeart = chosenHearth;
    }
    return chosenHearth;


}


function peep(e) {
    if (e.target.classList.contains("chosen")) {
        score++
        e.target.classList.remove("chosen")
    }
    scoreEl.textContent = score

}

heartEls.forEach((heart) => {
    heart.addEventListener("click", peep)
})