let wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to a indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "gpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
]

const blockEls = document.querySelectorAll(".block");
const infoEl = document.querySelector("#info");
const remainingEl = document.querySelector("#remaining");
const wrongLettersEl = document.querySelector("#wrong-letter");
const buttonEl = document.querySelector("button");
const gameContainer = document.querySelector(".game-container");
const inputEl = document.querySelector("input");
const writingInput = document.querySelector(".writing")

let wordEl;
let wrongLetters = [];
let correctLetters = [];
let x;
function gameInit() {
    let currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    wordEl = currentWord.word;
    infoEl.textContent = currentWord.hint;
    remainingEl.textContent = x;
    console.log(wordEl)
    x = 10; wrongLetters = []; correctLetters = [];
    let html = "";
    for (let i = 0; i < wordEl.length; i++) {
        html += `<input type="text" maxlength="1" class ="letter">`
    }

    gameContainer.innerHTML = html;

}

gameInit();

function startGame(e) {
    remainingEl.textContent = x;
    let key = e.target.value;
    if (key.match(/^[A-Za-z]+$/) && !wrongLetters.includes(`${key}`) && !correctLetters.includes(key)) {
        console.log(key)
        if (wordEl.includes(key)) {

            for (let i = 0; i < wordEl.length; i++) {
                if (wordEl[i] === key) {
                    correctLetters.push(key);
                    gameContainer.querySelectorAll("input")[i].value = key;
                }

            }

        } else {
            x--;
            wrongLetters.push(`${key}`);

        }
        wrongLettersEl.textContent = wrongLetters;
    }
    remainingEl.textContent = x;
    writingInput.value = "";

    setTimeout(() => {


        if (correctLetters.length === wordEl.length) {

            alert(`Welldone Soldier. You got the prize. The word was "${wordEl.toUpperCase()}"`);
            gameInit();
        }

        else if (x < 1) {
            alert(`You couldn't get it done. The word was "${wordEl.toUpperCase()}".`)
            for (let i = 0; i < wordEl.length; i++) {
                gameContainer.querySelectorAll("input")[i].value = wordEl[i];

            }
        }
    })

}


buttonEl.addEventListener("click", gameInit);
writingInput.addEventListener("input", startGame);
document.addEventListener("keydown", () => writingInput.focus());