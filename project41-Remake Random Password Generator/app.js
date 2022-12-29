const alertContainerEl = document.querySelector(".alert-container");
const copyIconEl = document.querySelector(".fa-copy");
const buttonEl = document.querySelector(".button");
const inputEl = document.querySelector(".input");
const symbols = [1, 2, 3, 4, 5, "A", "B", "C", "D", "E"];



buttonEl.addEventListener("click", () => {
    createPassword();
});


function createPassword() {
    let password = "";

    for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * symbols.length);

        password += symbols[randomNum];
        console.log(randomNum)

    }
    inputEl.value = password;
    alertContainerEl.textContent = password + " copied"
}

copyIconEl.addEventListener("click", function () {
    copyPassword();

    alertContainerEl.classList.remove("active")

    setTimeout(() => {
        alertContainerEl.classList.add("active")

    }, 3000);

});

function copyPassword() {
    inputEl.select();
    navigator.clipboard.writeText(inputEl.value)
    inputEl.setSelectionRange(0, 9999);
}

