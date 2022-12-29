const billEl = document.querySelector(".bill-input");
const tipEl = document.getElementById("rate");
const calculateButtonEl = document.querySelector("button");
const tipAmountEl = document.getElementById("tip-amount");
const totalBillEl = document.getElementById("total-bill");
const errorText = document.querySelector("h3");


calculate();
function calculate() {
    const bill = billEl.value;
    const tip = tipEl.value;
    const tipAmount = bill * tip;
    const totalAmount = Number(bill) + (bill * tip);
    console.log(bill, typeof bill)
    tipAmountEl.textContent = tipAmount;
    totalBillEl.textContent = totalAmount;

    if (bill == "" || tip == "") {
        errorText.textContent = "Please enter the number!!"
        tipAmountEl.textContent = ""
        totalBillEl.textContent = ""

        setTimeout(() => {
            errorText.textContent = ""
        }, 3000);
    }
    if ((!bill == "") && (tip == 0)) {
        totalBillEl.value = 0;
        errorText.textContent = "Please select the tip rate!!";
        setTimeout(() => {
            errorText.textContent = ""
        }, 3000);
    }
    if (!bill == "" && !tip == "") {

        tipAmountEl.textContent = tipAmount;
        totalBillEl.textContent = totalAmount;
        errorText.textContent = "";
    }
}

calculateButtonEl.addEventListener("click", () => {
    calculate();


})