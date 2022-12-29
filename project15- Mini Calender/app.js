const monthEl = document.getElementById("month-name");
const dayEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();

monthEl.textContent = date.toLocaleString("en", {
    month: "long"
})

dayEl.textContent = date.toLocaleString("en", {
    weekday: "long"
})

dayNumEl.textContent = date.getDate()

yearEl.textContent = date.getFullYear()