const inputEl = document.querySelector("input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBackground();
function updateBackground() {

    if (inputEl.checked) {
        bodyEl.style.backgroundColor = "black"
    } else {
        bodyEl.style.backgroundColor = "white"
    }
}

inputEl.addEventListener("input", () => {
    updateBackground();
    updateLocalStorage();
})

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}
console.log(inputEl.checked)