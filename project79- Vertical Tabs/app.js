const buttonEls = document.querySelectorAll("button");
const textEls = document.querySelectorAll(".text");
const buttonContainerEl = document.querySelector(".button-container")
const textContainerEl = document.querySelector(".text-container")




buttonContainerEl.addEventListener("click", (e) => {
    const idEl = e.target.dataset.id

    if (idEl) {
        buttonEls.forEach((button) => {
            button.classList.remove("active")
        })

        e.target.classList.add("active");

        textEls.forEach((text) => {
            text.classList.remove("active");
        })

        const element = document.getElementById(idEl)
        element.classList.add("active")
    }

    console.log(idEl)
});