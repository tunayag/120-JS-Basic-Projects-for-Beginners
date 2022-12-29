const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");

const hourSelectEl = document.querySelector("#hour-select");
const minuteSelectEl = document.querySelector("#minute-select");
const secondSelectEl = document.querySelector("#second-select");

const buttonEl = document.querySelector("button");

const selectMenuEl = document.querySelectorAll("select");
const bodyContainerEl = document.querySelector(".body-container");

let alarmTime;
let ringTone = new Audio("./ringtone.mp3");
let isAlarmSet = true;


for (let i = 24; i > -1; i--) {
    i = i < 10 ? "0" + i : i;
    let hourMenu = `<option value="${i}">${i}</option>`
    selectMenuEl[0].firstElementChild.insertAdjacentHTML("afterend", hourMenu);
}
for (let i = 59; i > -1; i--) {
    i = i < 10 ? "0" + i : i;
    let minuteMenu = `<option value="${i}">${i}</option>`
    selectMenuEl[1].firstElementChild.insertAdjacentHTML("afterend", minuteMenu);
}
for (let i = 59; i > -1; i--) {
    i = i < 10 ? "0" + i : i;
    let secondMenu = `<option value="${i}">${i}</option>`
    selectMenuEl[2].firstElementChild.insertAdjacentHTML("afterend", secondMenu);
}

setInterval(() => {


    const sec = new Date().getSeconds();
    const min = new Date().getMinutes();
    const hr = new Date().getHours();



    hourEl.textContent = hr < 10 ? "0" + ":" + hr : hr + ":";
    minuteEl.textContent = min < 10 ? "0" + + min + ":" : min + ":";
    secondEl.textContent = sec < 10 ? "0" + sec : sec;

    if (alarmTime == `${hr}:${min}:${sec}`) {
        console.log("adsuhıjklşi")
        ringTone.play();
        ringTone.loop = true;
    }

}, 1000);


function setAlarm() {
    if (!isAlarmSet) {// if isAlarmSet is false
        alarmTime = "";
        ringTone.pause();
        buttonEl.textContent = "Set Alarm";
        bodyContainerEl.classList.remove("disable")
        return isAlarmSet = false;
    }

    let time = `${selectMenuEl[0].value}:${selectMenuEl[1].value}:${selectMenuEl[2].value}`

    if (time.includes("HOUR") || time.includes("MINUTE") || time.includes("SECOND")) {
        window.alert("ENTER ANY VALUE")
    }

    bodyContainerEl.classList.add("disable");
    buttonEl.textContent = "Clear Alarm";

    isAlarmSet = false;
    alarmTime = time;
    console.log(alarmTime)
}


buttonEl.addEventListener("click", setAlarm);

/*function tiktak() {

    let sec = new Date().getSeconds();
    let min = new Date().getMinutes();
    let hr = new Date().getHours();



    hourEl.textContent = hr < 10 ? "0" + hr : hr;
    minuteEl.textContent = min < 10 ? "0" + min : min;
    secondEl.textContent = sec < 10 ? "0" + sec : sec;

    if (alarmTime == `${hr}${min}${sec}`) {
        console.log("asmdosap")
    }
}
setInterval(tiktak, 1000);
 */