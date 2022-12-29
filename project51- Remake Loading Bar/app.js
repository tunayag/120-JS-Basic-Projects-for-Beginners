const frontbarEl = document.querySelector(".front");
const percentEl = document.querySelector(".percent");


let x = 0;

updatePercent()

function updatePercent() {

    percentEl.textContent = x + "%"
    frontbarEl.style.width = x + "%"

    x++
    if (x < 101) {

        setTimeout(updatePercent, 20)
    }

}