const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const stepsEl = document.querySelectorAll(".step");
const progressEl = document.querySelector(".progress-bar-front")


let currentChecked = 1

nextEl.addEventListener("click", () => {
    currentChecked++;
    console.log(currentChecked)
    if (currentChecked > stepsEl.length) {
        currentChecked = stepsEl.length;
    }

    updateStepProgress();
});

prevEl.addEventListener("click", () => {
    currentChecked--;
    if (currentChecked < 1) {
        currentChecked = 1;
    }

    updateStepProgress();
});



function updateStepProgress() {
    stepsEl.forEach((stepEl, idx) => {
        if (idx < currentChecked) {
            stepEl.classList.add("checked");
            stepEl.innerHTML = `<i class="fa-sharp fa-solid fa-check"></i> <small>${idx === 0 ? "Start" :
                idx === stepsEl.length - 1 ? "Final" : "Step" + idx}</small>    `

        } else {
            stepEl.classList.remove("checked")
            stepEl.innerHTML = `<i class="fas fa-times">`
        }
    });

    const checkedNum = document.querySelectorAll(".checked");
    progressEl.style.width = ((checkedNum.length - 1) / (stepsEl.length - 1)) * 100 + "%";

    if (currentChecked === 1) {
        prevEl.disabled = true;
    } else if (currentChecked === stepsEl.length) {
        nextEl.disabled = true;
    } else {
        prevEl.disabled = false;
        nextEl.disabled = false;
    }


}