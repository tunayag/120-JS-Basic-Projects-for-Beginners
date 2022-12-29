const dayEl = document.querySelector(".day");
const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");


updateCountdown();


function updateCountdown() {
    const NewYearTime = new Date("Jan 1, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = NewYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute)
    const s = Math.floor((gap % minute) / second)


    dayEl.textContent = d;
    hourEl.textContent = h;
    minEl.textContent = m;
    secEl.textContent = s;
    setTimeout(updateCountdown, 1000)
}