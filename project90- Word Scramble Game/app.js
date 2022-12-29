let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]

const mixWordEl = document.querySelector("#mix-word")
const descriptionEl = document.querySelector("#description")
const secondEl = document.querySelector("#second");
const inputEl = document.querySelector("input");
const refreshEl = document.querySelector("#refresh-button");
const checkEl = document.querySelector("#check-button");

let correctWord;
let timerEl;
function timer(timerSec) {
    clearInterval(timerEl);

    timerEl = setInterval(() => {
        if (timerSec > 0) {
            console.log(timerSec)
            timerSec--;
            return secondEl.innerText = timerSec;
        }


        clearInterval(timerEl);
        alert("DONE!!!!");
        inputEl.value = "";
        randomWord();

    }, 1000);

}


function randomWord() {
    timer(15);
    const randomNum = Math.floor(Math.random() * words.length)
    let wordEl = words[randomNum];
    let splitWord = wordEl.word.split("");


    for (let i = words.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [splitWord[i], splitWord[j]] = [splitWord[j], splitWord[i]]
    }

    correctWord = wordEl.word.toLowerCase();
    mixWordEl.textContent = splitWord.join(" ").toUpperCase();
    descriptionEl.textContent = wordEl.hint;
    console.log(correctWord)
    inputEl.setAttribute("maxlength", correctWord.length);

}
randomWord();

function checkWord() {

    let word = inputEl.value.toLocaleLowerCase();
    if (!word)/* if(word === "") */ return alert("Please enter a valid word")
    if (word !== correctWord) {
        return alert("Opps.It's not the correct word we're looking for.")
    }
    if (word === correctWord) {
        alert(`Yes. ${word.toUpperCase()} is the correct answer. CONGRATULATIONS!!!`)
        inputEl.value = "";
    }
    randomWord();
}

refreshEl.addEventListener("click", randomWord);
checkEl.addEventListener("click", checkWord);