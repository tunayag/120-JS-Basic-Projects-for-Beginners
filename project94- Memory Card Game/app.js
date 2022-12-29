const liEls = document.querySelectorAll("li");
const spanEl = document.querySelector("#time-left");
const step = document.querySelector("#step");

let cardOne, cardTwo;
let disabled = false;
let matchedCards = 0;
let x;
let stepEl = 1;

function timer(timerSec) {
    clearInterval(x)
    x = setInterval(() => {
        if (timerSec > 0) {
            timerSec--;
            return spanEl.textContent = timerSec;
        }

        clearInterval(x);
        alert("TIME IS UP")
        shuffleCards();

    }, 1000);

}


function flipTheCard(e) {
    let clickedCard = e.target;
    step.textContent = stepEl;
    stepEl++;
    console.log(stepEl)
    if (clickedCard !== cardOne && !disabled) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disabled = true;
        let cardOneImg = cardOne.querySelector("img").src;
        let cardTwoImg = cardTwo.querySelector("img").src;
        matchCards(cardOneImg, cardTwoImg);
    }

}

function matchCards(img1, img2) {


    if (img1 === img2) {
        matchedCards++;
        if (matchedCards == 8) {
            setTimeout(() => {
                alert("WELDONE SIR. YOU MADE IT WELL");
                return shuffleCards();
            }, 500);
        }
        cardOne.removeEventListener("click", flipTheCard)
        cardTwo.removeEventListener("click", flipTheCard)
        cardOne = cardTwo = "";
        return disabled = false;
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");

    }, 100);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disabled = false;
    }, 1000);
    setTimeout(() => {
    }, 1000);


}


function shuffleCards() {
    timer(60)
    matchedCards = 0;
    cardOne = cardTwo = "";

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    liEls.forEach((li, index) => {
        li.classList.remove("flip");
        let imgTag = li.querySelector("img");
        imgTag.src = `./img-${arr[index]}.png`
        li.addEventListener("click", flipTheCard)
    })



}

shuffleCards();

liEls.forEach((li) => {
    li.addEventListener("click", flipTheCard)
})