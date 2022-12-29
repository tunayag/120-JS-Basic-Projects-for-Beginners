const countersEl = document.querySelectorAll(".counter");

countersEl.forEach(counterEl => {
    counterEl.textContent = "0";
    incrementCounter();


    function incrementCounter() {
        let currentNum = +counterEl.textContent;
        const dataCeil = counterEl.getAttribute("data-ceil");
        const increment = dataCeil / 15
        currentNum = Math.ceil(currentNum + increment)


        if (currentNum < dataCeil) {
            counterEl.textContent = currentNum
            setTimeout(incrementCounter, 50)

        } else {
            counterEl.textContent = dataCeil
        }


    }
});