const prevEl = document.querySelector(".icon p")
const nextEl = document.querySelector(".icon2 p")
const containerEl = document.querySelector(".container");
const ulEl = document.querySelector("ul");
const liEls = document.querySelectorAll("li");
let isdragging = false;

liEls.forEach((li) => {
    li.addEventListener("click", () => {
        ulEl.querySelector(".active").classList.remove("active");
        li.classList.add("active");

    })
});

function dragging(e) {

    if (!isdragging) return;
    containerEl.scrollLeft -= e.movementX;
    ulEl.classList.add("dragging")
    handleIcons();
}

function dragStop() {
    isdragging = false;
    ulEl.classList.remove("dragging")
}

function handleIcons() {
    let dragRight = containerEl.scrollWidth - containerEl.clientWidth;
    let dragLeft = containerEl.scrollLeft;
    prevEl.style.display = dragLeft > 0 ? "flex" : "none"
    nextEl.style.display = dragLeft >= dragRight ? "none" : "flex";
    console.log(dragLeft, dragRight)
}

containerEl.addEventListener("mousedown", () => isdragging = true);
containerEl.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop);

nextEl.addEventListener("click", () => {
    containerEl.scrollLeft += 50;
    handleIcons();
});

prevEl.addEventListener("click", () => {
    handleIcons();
    containerEl.scrollLeft += -50;

})