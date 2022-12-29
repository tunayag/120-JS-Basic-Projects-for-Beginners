const inputEl = document.querySelector("input");
const totalEl = document.querySelector(".total");
const remainingEl = document.querySelector(".remaining");

inputEl.addEventListener("keyup", () => {
    updateCounter();

})

function updateCounter() {
    totalEl.textContent = inputEl.value.length;
    remainingEl.textContent = inputEl.maxLength - inputEl.value.length
    /*remainingEl.textContent = inputEl.getAttribute("maxLength") - inputEl.value.length*/
}