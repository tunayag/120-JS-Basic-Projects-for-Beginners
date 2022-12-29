const result = document.getElementById("result");
const guessButton = document.getElementById("guess-btn");
const restartButton = document.getElementById("restart-btn");
const guess = document.getElementById("guess");
const form = document.querySelector("form");
const guessDiv = document.querySelector(".last-guesses");

let number = Math.floor(Math.random() * 100) + 1;
let lastGuesses = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (guess.value == "" || lastGuesses.includes(guess.value)) {
        /*alert("Please enter any number!!")*/
        result.textContent = lastGuesses.includes(guess.value) ? "YOU GUESS THIS BEFORE" : "Please enter any number"
        result.style.color = "red"
        setTimeout(() => result.textContent = "", 2000)

    } else {
        result.style.color = "black";
        lastGuesses.push(guess.value);
        let diff = Math.abs(guess.value - number)
        getDiff(diff);
        printLastGuess();
    }
})

restartButton.addEventListener("click,restart")

function getDiff(diff) {
    if (diff == 0) {
        result.textContent = "CONGRATS! "
        restartButton.style.display = "block";

    }

    else if (diff < 5) result.textContent = "TOO HOT";
    else if (diff < 15) result.textContent = "HOT";
    else if (diff < 25) result.textContent = "WARM";
    else if (diff < 35) result.textContent = "GETTING WARM";
    else if (diff < 50) result.textContent = "COLD";
    else if (diff < 70) result.textContent = "TOO COLD";
    else result.textContent = "YOU'RE GONNA DIE CUZ OF COLD";

}

function printLastGuess() {
    let index = lastGuesses.length - 1;
    let li = document.createElement("li");
    li.textContent = lastGuesses[index];
    guessDiv.appendChild(li);
}

function restart() {
    restartButton.display = "none";
    result.textContent = ""
    guessDiv.textContent = ""
    form.reset();
    number = Math.floor(Math.random() * 100) + 1;
}