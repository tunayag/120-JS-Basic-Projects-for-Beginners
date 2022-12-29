const monthnameEl = document.getElementById("month-name")
const yearEl = document.getElementById("year");
const daynameEl = document.getElementById("day-name");
const daynumEl = document.getElementById("day-num");

const date = new Date()

monthnameEl.textContent = date.toLocaleString("en", {
    month: "long"
}
)

daynameEl.textContent = date.toLocaleString("en", {
    weekday: "long"
})

yearEl.textContent = date.getUTCFullYear();
daynumEl.textContent = date.getDate()