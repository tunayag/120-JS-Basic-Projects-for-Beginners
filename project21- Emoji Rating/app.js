const starsEl = document.querySelectorAll(".fa-star");

starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        updateRating(index);
    });
})

function updateRating(index) {
    starsEl.forEach((starEl, idx) => {
        if (idx < index + 1) {
            starEl.classList.add("active");
        } else {
            starEl.classList.remove("active");
        }
    });
}