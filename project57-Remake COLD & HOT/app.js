const ulEl = document.querySelector("ul");
const guessButton = document.querySelector(".guess");
const playAgainButton = document.querySelector(".playagain");
const inputEl = document.querySelector("input");
const formEl = document.querySelector("form");
const result = document.getElementById("result")



let number = Math.floor(Math.random() * 100);
let lastGuesses = [];

formEl.addEventListener("submit", (e) => {
    e.preventDefault()

    if (inputEl.value == "" || lastGuesses.includes(inputEl.value)) {
        result.textContent = lastGuesses.includes(inputEl.value) ? "You already guessed this number!" : "Please enter any number"
        setTimeout(() => result.textContent = "", 3000)
    } else {
        console.log(inputEl.value, number)
        lastGuesses.push(inputEl.value)

        let diff = Math.abs(inputEl.value - number);
        getDiff(diff)
        getLastGuesses()
    }
})

playAgainButton.addEventListener("click", restart)

function getDiff(diff) {
    if (diff == 0) {
        result.textContent = "Congrats. You made it!"
        inputEl.style.display = "block"
        guessButton.disabled = true;
    }

    else if (diff < 5) {
        result.textContent = "TOO HOT"
    }
    else if (diff < 15) {
        result.textContent = "HOT"
    }
    else if (diff < 30) {
        result.textContent = "WARM"
    }
    else if (diff < 50) {
        result.textContent = "COLD"
    }
    else if (diff < 70) {
        result.textContent = "Freezing"
    }


}


function getLastGuesses() {
    let index = lastGuesses.length - 1;
    let li = document.createElement("li")
    ulEl.appendChild(li);
    li.textContent = lastGuesses[index]
}



function restart() {
    formEl.reset()
    inputEl.style.display = "block"
    ulEl.textContent = ""
    result.textContent = "";
    inputEl.textContent = "";

}