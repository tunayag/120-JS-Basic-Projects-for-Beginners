const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
/*
function tiktak() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    hourEl.style.transform = `rotate(${hour * 30}deg)`;
    minuteEl.style.transform = `rotate(${minute * 6}deg)`;
    secondEl.style.transform = `rotate(${second * 6}deg)`;

    console.log(hour, minute, second)
}
setInterval(tiktak, 1000);
*/


function tiktak() {
    let currentDate = new Date();
    setTimeout(tiktak, 1000);
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();

    hourEl.style.transform = `rotate(${hour * 30}deg)`;
    minuteEl.style.transform = `rotate(${minute * 6}deg)`;
    secondEl.style.transform = `rotate(${second * 6}deg)`;


}
tiktak();
