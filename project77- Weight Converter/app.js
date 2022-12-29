const lbsEl = document.getElementById("lbs");
const kgEl = document.querySelector(".kg");
const grEl = document.querySelector(".gr");
const ozEl = document.querySelector(".oz");
const formEl = document.querySelector("form");

formEl.addEventListener("input", calculation)

function calculation(e) {
    const lbs = lbsEl.value;
    const kg = kgEl.value;
    const gr = grEl.value;
    const oz = ozEl.value;


    if (e.target.classList.contains("lbs")) {
        let x = e.target.value;

        kgEl.value = x / 2.204;
        grEl.value = (x / 2.204) * 1000;
        ozEl.value = x * 16;
    }

    if (e.target.classList.contains("kg")) {
        let x = e.target.value;

        lbsEl.value = x * 2.204;
        grEl.value = x * 1000;
        ozEl.value = x * 35.2739619;
    }
    if (e.target.classList.contains("gr")) {
        let x = e.target.value;

        kgEl.value = x / 1000;
        lbsEl.value = (x / 1000) * 2.204;
        ozEl.value = x * 0.0353;
    }
    if (e.target.classList.contains("oz")) {
        let x = e.target.value;

        kgEl.value = x / 35.2739619;
        grEl.value = (x / 35.2739619) * 1000;
        lbsEl.value = x / 16;
    }

}