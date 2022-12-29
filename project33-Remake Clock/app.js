const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function tiktak() {
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();


    hourEl.style.transform = `rotate(${hour * 30}deg)`;
    minuteEl.style.transform = `rotate(${minute * 6}deg)`;
    secondEl.style.transform = `rotate(${second * 6}deg)`;
}

setInterval(tiktak, 1000);