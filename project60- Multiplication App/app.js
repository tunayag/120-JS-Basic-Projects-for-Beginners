const scoreEl = document.querySelector(".score");
const formEl = document.querySelector(".form")
const inputEl = document.querySelector(".input")
const questionEl = document.querySelector(".h2");
const resetEl = document.querySelector(".reset")

let score = JSON.parse(localStorage.getItem("score"))

const number1 = Math.ceil(Math.random() * 10)
const correctAnswer = number1 * number1;

resetEl.addEventListener("click", () => {
    score = 0;

})
questionEl.textContent = `What is ${number1} multiply by ${number1}`

if (!score) {
    score = 0;
}

scoreEl.textContent = `${score}`


formEl.addEventListener("submit", () => {
    const userAnswer = +inputEl.value;
    if (userAnswer === correctAnswer) {
        score++;
        updateLocalStorage()
        console.log(userAnswer, correctAnswer, score, number1)
    } else {
        score--;
        updateLocalStorage()
        console.log(userAnswer, correctAnswer, score, number1)
    }

});


function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}
