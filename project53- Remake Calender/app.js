const monthNameEl = document.querySelector(".month-name p");
const fullDateEl = document.querySelector(".month-name h4");
const daysEl = document.querySelector(".days");


const monthInx = new Date().getMonth()
const fullDate = new Date().toDateString()

const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1

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

monthNameEl.textContent = months[monthInx];
fullDateEl.textContent = fullDate;

let days = "";

for (let i = firstDay; i > 0; i--) {
    days += `<div class ="empty"></div>`
}
for (let i = 1; i <= lastDay; i++) {

    if (i === new Date().getDate()) {
        days += `<div class ="mybirthday">${i}</div>`
    } else {
        days += `<div>${i}</div>`
    }
}
daysEl.innerHTML = days

