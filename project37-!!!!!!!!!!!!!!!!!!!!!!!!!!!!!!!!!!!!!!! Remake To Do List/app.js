const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList();
})
