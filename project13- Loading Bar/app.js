const counterEl = document.querySelector(".counter")
const barEl = document.querySelector(".loading-bar-front")

let idx = 0;

updateNum();

function updateNum() {
    counterEl.textContent = idx + "%"
    barEl.style.width = idx + "%"
    idx++
    if (idx < 101) {
        setTimeout(updateNum, 23)
    }
}
