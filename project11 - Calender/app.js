const monthEl = document.querySelector(".date h1");
const monthInx = new Date().getMonth();

const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 0).getDay();

console.log(firstDay)


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

console.log(months[monthInx])

monthEl.textContent = months[monthInx];
fullDateEl.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="today">${i}</div>`
    } else {
        days += `<div>${i}</div>`;
    }
}

daysEl.innerHTML = days;