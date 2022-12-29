const textEl = document.querySelector(".text");
const spanCloseEl = document.querySelector("span");
const buttonEl = document.querySelector("button");
const containerEl = document.querySelector(".container");


buttonEl.addEventListener("click", () => {

    textEl.classList.add("active");
    containerEl.classList.add("active");

});

spanCloseEl.addEventListener("click", () => {

    textEl.classList.remove("active");
    containerEl.classList.remove("active");
});

textEl.addEventListener("click", () => {

    textEl.classList.remove("active");
    containerEl.classList.remove("active");
});

