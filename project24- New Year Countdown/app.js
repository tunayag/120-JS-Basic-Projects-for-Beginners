jconst dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2023 00:00:00").getTime();


updateCountdown();

function updateCountdown() {
    const now = new Date().getTime()
    const gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day)
    const h = Math.floor((gap % day) / hour)
    const m = Math.floor((gap % hour) / minute)
    const s = Math.floor((gap % minute) / second);

    dayEl.textContent = d;
    hourEl.textContent = h;
    minuteEl.textContent = m;
    secondEl.textContent = s;

    setTimeout(updateCountdown, 1000);

    function zero() {
        if (secondEl.textContent < 10) {
            secondEl.textContent = "0" + s
        }
        if (minuteEl.textContent < 10) {
            minuteEl.textContent = "0" + m
        }
        if (hourEl.textContent < 10) {
            hourEl.textContent = "0" + h
        }
        if (dayEl.textContent < 10) {
            dayEl.textContent = "0" + d
        };
    }

    zero()
}
