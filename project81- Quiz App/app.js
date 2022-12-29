const quizData = [
    {
        question: "Where am I from?",
        a: "Turkey",
        b: "Germany",
        c: "England",
        d: "U.S.A",
        correct: "a",
    }
    , {
        question: "How tall am I?",
        a: "6'1",
        b: "6",
        c: "6'2",
        d: "5'9",
        correct: "a",
    }
    , {
        question: "When was I born?",
        a: "1999",
        b: "1996",
        c: "1997",
        d: "1998",
        correct: "d",
    }
    , {
        question: "What is my favourite color?",
        a: "Red",
        b: "Blue",
        c: "White",
        d: "Black",
        correct: "b",
    }
]

const questionEl = document.querySelector("h1");
const TextA = document.getElementById("a-text");
const TextB = document.getElementById("b-text");
const TextC = document.getElementById("c-text");
const TextD = document.getElementById("d-text");
const SubmitButtonEl = document.querySelector("button");
const answersEl = document.querySelectorAll(".answer");
const containerEl = document.querySelector(".container")

let currentQuestion = 0;
let score = 0;
nextQuestion();

function nextQuestion() {
    const currentQuestionEl = quizData[currentQuestion];
    deSelected();
    questionEl.textContent = currentQuestionEl.question;
    TextA.textContent = currentQuestionEl.a
    TextB.textContent = currentQuestionEl.b
    TextC.textContent = currentQuestionEl.c
    TextD.textContent = currentQuestionEl.d


}

function getSelected() {

    let answer = undefined;

    answersEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
            console.log(answer)

        }
    })

    return answer;
}


function deSelected() {
    answersEl.forEach((answerEl) => {
        answerEl.checked = false;
    })
}


SubmitButtonEl.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            nextQuestion();
        } else {
            containerEl.innerHTML = `<h1>Your score is ${score}/${quizData.length}</h1>`
        }


    }
})