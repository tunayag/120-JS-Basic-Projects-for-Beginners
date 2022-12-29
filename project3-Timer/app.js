const secs = document.getElementById("second");
const mins = document.getElementById("minute");

const chosensec = document.getElementById("chosen_second");
const chosenmin = document.getElementById("chosen_minute");

const Startbutton = document.getElementById("Start");
const Resetbutton = document.getElementById("Reset");

chosenmin.addEventListener("change", () => {
    mins.textContent = chosenmin.value;
});

chosensec.addEventListener("change", () => {
    secs.textContent = chosensec.value < 10 ? "0" + chosensec.value : chosensec.value;
});

let dur = false;

Startbutton.addEventListener("click", startTimer);
Resetbutton.addEventListener("click", () => {
    dur = true;
    mins.textContent = "00";
    secs.textContent = "00";
    chosenmin.value = "00";
    chosensec.value = "00";
});


function startTimer() {
    let dk = mins.textContent;
    let sn = secs.textContent;

    const interval = setInterval(() => {
        sn--;
        sn = sn < 10 ? "0" + sn : sn;
        if (sn == "0-1") {
            dk--;
            sn = 59;
        }

        if ((dk == 00 && sn == 00) || (dk == 0 && sn == 0)) {
            clearInterval(interval);
            window.alert("TIME IS UP");
            chosenmin.value = "00";
            chosensec.value = "00";
        }

        if (dur) {
            clearInterval(interval);
            return;
        }

        mins.textContent = dk;
        secs.textContent = sn;
    }, 1000);

};
