const mins = document.getElementById("minute");
const secs = document.getElementById("second");

const chosenMinute = document.getElementById("chosen-minute");
const chosenSecond = document.getElementById("chosen-second");

const startEl = document.getElementById("Start");
const resetEl = document.getElementById("Reset");
let stop = false;

chosenMinute.addEventListener("change", () => {
    mins.textContent = chosenMinute.value < 10 ? "0" + chosenMinute.value : chosenMinute.value;

});

chosenSecond.addEventListener("change", () => {
    secs.textContent = chosenSecond.value < 10 ? "0" + chosenSecond.value : chosenSecond.value;
});


startEl.addEventListener("click", startTimer);
resetEl.addEventListener("click", () => {
    stop = true;

    mins.textContent = "00";
    secs.textContent = "00";
    chosenMinute.value = "00";
    chosenSecond.value = "00";

})





function startTimer() {
    let m = mins.textContent;
    let s = secs.textContent;


    const interval = setInterval(() => {

        s--;
        s = s < 10 ? "0" + s : s;
        if (s == "0-1") {
            m--;
            s = 59;
            m = m < 10 ? "0" + m : m;
        }

        if ((s == 00 && m == 00) || (s == 0 && m == 0)) {

            clearInterval(interval);
            window.alert("Time is up");
            chosenMinute.value = "00"
            chosenSecond.value = "00"
        }

        if (stop) {
            clearInterval(interval);
            return;

        }

        while (startTimer.active) {
            chosenMinute.disable()
        }

        console.log(m, s)
        mins.textContent = m;
        secs.textContent = s;
    }, 1000);



}
