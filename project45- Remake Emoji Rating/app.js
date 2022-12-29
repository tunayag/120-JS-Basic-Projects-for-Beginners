const starsEl = document.querySelectorAll(".fa-star");
const faSharpsEl = document.querySelectorAll(".fa-sharp")


starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        updateStars(index)
    });
});

function updateStars(index) {
    starsEl.forEach((starEl, idx) => {
        if (idx < index + 1) {
            starEl.classList.add("active")
        } else {
            starEl.classList.remove("active")
        }
    });

    faSharpsEl.forEach((faSharp) => {
        faSharp.style.transform = `translateX(-${index * 100}%)`
    });
}