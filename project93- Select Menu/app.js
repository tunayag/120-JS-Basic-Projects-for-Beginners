const buttonEl = document.querySelector("button");
const bodyContainerEl = document.querySelector(".body-container");
const inputEl = document.querySelector("input");
const ulEl = document.querySelector("ul");
const liEls = document.querySelectorAll("li");

buttonEl.addEventListener("click", () => {
    bodyContainerEl.classList.toggle("active");

});

let countries = ["TR",
    "LT",
    "DE",
    "USA",
    "UK",
    "ESP",
    "TR",
    "DE",
    "USA",
    "UK",
    "ESP"];
function addCountry(selectedCountry) {
    ulEl.innerHTML = "";
    countries.forEach((country) => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let liEl = `<li onclick = "updateCountry(this)" class="${isSelected}">${country}</li> `
        ulEl.insertAdjacentHTML("beforeend", liEl)
    });
}

addCountry();

function updateCountry(selectedLiEl) {
    inputEl.value = "";
    addCountry(selectedLiEl.textContent);
    buttonEl.textContent = selectedLiEl.textContent;
    bodyContainerEl.classList.remove("active")
    buttonEl.style = "background-Color: red ";
}


inputEl.addEventListener("keyup", () => {
    let arr = [];
    let searchedCountry = inputEl.value.toLowerCase();

    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchedCountry);
    }).map(data => `<li  onclick = "updateCountry(this)">${data}</li>`).join("");

    ulEl.innerHTML = arr ? arr : "Country couldn't find";
    console.log(arr)
});

