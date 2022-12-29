const headContainerEl = document.querySelector(".head-container");
const headButtonEl = document.querySelector(".button-head");
const bodyContainerEl = document.querySelector(".body-container");
const closeButtonEl = document.querySelector(".fa-solid");

headButtonEl.addEventListener("click", () => {
    headContainerEl.classList.add("active");
    bodyContainerEl.classList.add("active");
});

closeButtonEl.addEventListener("click", () => {
    bodyContainerEl.classList.remove("active");
    headContainerEl.classList.remove("active");
})