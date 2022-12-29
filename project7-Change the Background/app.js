const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["red", "green", "blue", "pink", "yellow", "orange"];

button.addEventListener("click", changeBackGround);

let sıra = 0;
function changeBackGround() {
    /*const randomNumber = Math.floor(Math.random() * colors.length);
    const chosenColor = colors[randomNumber]
    console.log(randomNumber);
    body.style.background = chosenColor;*/

    const chosenColor = colors[sıra];
    sıra++;
    body.style.background = chosenColor;

    if (sıra == 6) sıra = 0;
    console.log(sıra);
}