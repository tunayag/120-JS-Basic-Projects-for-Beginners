const spanEl = document.querySelector("span");
let count = 0;


setInterval(animation, 20);

function animation() {
    if (count == 100) {
        clearInterval()
    } else {
        count++;
        spanEl.textContent = count + "%";
    }
}