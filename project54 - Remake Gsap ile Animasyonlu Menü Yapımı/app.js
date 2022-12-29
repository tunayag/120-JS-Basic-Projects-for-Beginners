const textEl = document.querySelector(".text");
const headEl = document.querySelector(".head");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
    textEl.classList.toggle("active");
    headEl.classList.toggle("active");

})