const buttonEl = document.querySelector("button");
const textEl = document.querySelector("#text");
const authorEl = document.querySelector("#author");
const volumeUpEl = document.querySelector(".speech");
const copyEl = document.querySelector(".fa-copy");
const tweetEl = document.querySelector(".fa-twitter");
synth = speechSynthesis;


function randomQuote() {
    buttonEl.classList.add("loading")
    fetch("http://api.quotable.io/random").then((res) => res.json()).then((result) => {
        console.log(result)
        textEl.textContent = result.content;
        authorEl.textContent = result.author
        buttonEl.textContent = "New Quote"
        buttonEl.classList.remove("loading")
    });
}

volumeUpEl.addEventListener("click", () => {
    if (!buttonEl.classList.contains("loading")) {
        let utterance = new SpeechSynthesisUtterance(`${textEl.innerText} by ${authorEl.innerText}`);
        synth.speak(utterance);
        setInterval(() => {
            !synth.speaking ? buttonEl.classList.remove("active") : buttonEl.classList.add("active");
        }, 10);
    }
})



copyEl.addEventListener("click", () => {
    navigator.clipboard.writeText(textEl.innerText);
});

tweetEl.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${textEl.innerText}`;
    window.open(tweetUrl, "_blank");
});


buttonEl.addEventListener("click", randomQuote);