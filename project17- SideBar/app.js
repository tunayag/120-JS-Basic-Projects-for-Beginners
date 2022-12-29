const bars = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closingButton = document.querySelector(".x");

bars.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

closingButton.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});