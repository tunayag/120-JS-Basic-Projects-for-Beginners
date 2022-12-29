const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");


btnEl.addEventListener("click", () => {
    createPassword();
})

function createPassword() {
    const chars = "0123456789qwert"
    const passwordLength = 14;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNum, randomNum + 1)
    }


    inputEl.value = password;

    alertContainerEl.textContent = password + " copied!"

}


copyIconEl.addEventListener("click", () => {
    copyPassword();
    if (inputEl.value) {
        alertContainerEl.classList.remove("active")

        setTimeout(() => {
            alertContainerEl.classList.add("active")
        }, 3000);
    }

})



function copyPassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);

}