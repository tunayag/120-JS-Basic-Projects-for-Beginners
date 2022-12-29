const number1El = document.querySelector(".number1");
const number2El = document.querySelector(".number2");

window.addEventListener("mousemove", (e) => {
    number1El.textContent = e.clientX
    number2El.textContent = e.clientY
})