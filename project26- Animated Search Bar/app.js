const searchBarContainerEl = document.querySelector(".search-bar-container");
const searchEl = document.querySelector(".search-icon");
const micEl = document.querySelector(".mic-icon");

searchEl.addEventListener("click", () => {
    searchBarContainerEl.classList.toggle("active");
})

