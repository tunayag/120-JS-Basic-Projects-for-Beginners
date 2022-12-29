const menuHeadEl = document.querySelector(".menu-head");
const menuBodyEl = document.querySelector(".menu-body");
const liEls = document.querySelectorAll(".menu-body li");
const pEl = document.querySelector(".menu-head p")

menuHeadEl.addEventListener("click", () => {
    menuBodyEl.classList.toggle("hide");
    menuHeadEl.classList.toggle("rotate");
});

liEls.forEach(liEl => {
    liEl.addEventListener("click", () => {
        pEl.innerHTML = liEl.innerHTML;
        menuBodyEl.classList.add("hide");
        menuHeadEl.classList.toggle("rotate")

    })
});
