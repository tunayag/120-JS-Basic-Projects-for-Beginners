const buttonContainerEl = document.querySelector(".button-container");
const contentEls = document.querySelectorAll(".content");
const headContainerEl = document.querySelector(".head-container");
const btnEls = document.querySelectorAll("button")


buttonContainerEl.addEventListener("click", (e) => {
    const idEl = e.target.dataset.id;

    console.log(idEl)
    if (idEl) {
        btnEls.forEach((buttonEl) => {
            buttonEl.classList.remove("active")
        })
        e.target.classList.add("active")

        contentEls.forEach((content) => {
            content.classList.remove("active")
        })

        const element = document.getElementById(idEl);
        element.classList.add("active");
    }

})


