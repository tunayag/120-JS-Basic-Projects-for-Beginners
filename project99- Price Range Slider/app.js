const rangeInputEls = document.querySelectorAll(".range-input input");
const priceInputEls = document.querySelectorAll(".price-input input");
const progressEl = document.querySelector(".progress");
const minInputEl = document.querySelector("#min");
const maxInputEl = document.querySelector("#max");

let priceGap = 1000;

rangeInputEls.forEach((rangeInput) => {
    rangeInput.addEventListener("input", (e) => {
        let minValue = parseInt(rangeInputEls[0].value);
        let maxValue = parseInt(rangeInputEls[1].value);

        if (maxValue - minValue < priceGap) {

            if (e.target.className === "min") {
                rangeInputEls[0].value = maxValue - priceGap;
            } else {
                rangeInputEls[1].value = minValue + priceGap;
            }

        } else {
            minInputEl.value = minValue;
            maxInputEl.value = maxValue;
            progressEl.style.left = (minValue / rangeInputEls[0].max) * 100 + "%";
            progressEl.style.right = 100 - (maxValue / rangeInputEls[1].max) * 100 + "%";
        }

        console.log(minValue, maxValue, minInputEl.value, maxInputEl.value,)
    })

});


priceInputEls.forEach((priceInput) => {
    priceInput.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInputEls[0].value);
        let maxPrice = parseInt(priceInputEls[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInputEls[1].max) {

            if (e.target.className === "min-price") {
                rangeInputEls[0].value = minPrice;
                progressEl.style.left = (minPrice / rangeInputEls[0].max) * 100 + "%";
            } else {
                rangeInputEls[1].value = maxPrice;
                progressEl.style.right = 100 - (maxPrice / rangeInputEls[1].max) * 100 + "%";
            }

        }

    })

});

