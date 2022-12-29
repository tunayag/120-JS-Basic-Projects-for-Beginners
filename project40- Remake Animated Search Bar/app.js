const SearchEl = document.querySelector(".search-icon");
const BarContainerEl = document.querySelector(".bar-container");

SearchEl.addEventListener("click", function () {
    BarContainerEl.classList.toggle("active")
})