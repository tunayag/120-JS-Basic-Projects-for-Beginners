const hamburgerEl = document.querySelector(".hamburger");
const sidebarEl = document.querySelector(".sidebar");
const xEl = document.querySelector(".x")

hamburgerEl.addEventListener("click", () => {
    sidebarEl.classList.toggle("show")
});

xEl.addEventListener("click", () => {
    sidebarEl.classList.remove("show")
});