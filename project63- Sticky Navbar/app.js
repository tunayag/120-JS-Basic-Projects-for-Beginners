const headEl = document.querySelector(".head");
const textContainerEl = document.querySelector(".text");
window.addEventListener("scroll", () => {

    if (window.scrollY > textContainerEl.offsetTop - headEl.offsetHeight - 100) {
        headEl.classList.add("active");
    } else {
        headEl.classList.remove("active");
    }
})