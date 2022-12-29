const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl => {
    counterEl.textContent = "0";
    updateCounter();


    function updateCounter() {
        let currentNumber = +counterEl.textContent;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 15
        currentNumber = Math.ceil(currentNumber + increment)

        if (currentNumber < dataCeil) {
            counterEl.textContent = currentNumber
            setTimeout(updateCounter, 50)
        } else {
            counterEl.textContent = dataCeil
        }
    }
});