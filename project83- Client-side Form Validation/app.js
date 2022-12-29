const usernameInput = document.getElementById("username");
const emailElInput = document.getElementById("e-mail");
const passwordInput = document.getElementById("password");
const passwordCheckInput = document.getElementById("password-check");
const form = document.querySelector("form")
const approved = document.querySelector(".fa-circle-check")
const denied = document.querySelector(".fa-circle-exclamation")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = usernameInput.value.trim();
    const emailElValue = emailElInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const passwordCheckValue = passwordCheckInput.value.trim();



    if (usernameValue === "") {
        setErrorFor(usernameInput, "Username cannot be the blanks")
    } else {
        setSuccessFor(usernameInput)
    };


    if (emailElValue === "") {
        setErrorFor(emailElInput, "Email cannot be the blank");
    }/* else if (!isEmail(emailElInput)) {
        setErrorFor(emailElInput, 'Not a valid email');
    }*/ else {
        setSuccessFor(emailElInput);
    };



    if (passwordValue === "") {
        setErrorFor(passwordInput, "Password cannot be the blanks")
    } else {
        setSuccessFor(passwordInput)
    };

    if (passwordCheckValue === "") {
        setErrorFor(passwordCheckInput, "PasswordCheck cannot be the blanks")
    } else if (passwordValue !== passwordCheckValue) {
        setErrorFor(passwordCheckInput, "Password doesn't match")
    } else {
        setSuccessFor(passwordCheckInput)
    };




}



function setErrorFor(input, message) {
    const form = input.parentElement;
    const smallEl = form.querySelector("small");
    const denied = form.querySelector(".fa-circle-exclamation")
    denied.style = "visibility: visible"
    input.style = "border: 1px red solid"
    smallEl.innerText = message;

}

function setSuccessFor(input) {
    const form = input.parentElement;
    const approved = form.querySelector(".fa-circle-check")
    const denied = form.querySelector(".fa-circle-exclamation")
    const smallEl = form.querySelector("small");
    approved.style = "visibility: visible"
    denied.style = "visibility: hidden"
    input.style = "border: 1px green solid"
    smallEl.innerText = "";
}


function isEmail(emailElInput) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailElInput);
}





/*



const SubmitButton = document.querySelector("button");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("e-mail");
const passwordInput = document.getElementById("password");
const passwordCheckInput = document.getElementById("password-check");
const inputEls = document.querySelectorAll("input");
const errorText = document.querySelector(".error-text");
const successEls = document.querySelectorAll(".fa-circle-check");
const unsuccessEls = document.querySelectorAll(".fa-circle-exclamation");


SubmitButton.addEventListener("click", () => {

    inputEls.forEach((inputEl) => {
        if (inputEl.value === "") {
            errorText.classList.remove("hidden");
            inputEl.style = "border: 2px solid red";

            setTimeout(() => {
                errorText.textContent = "";
                inputEl.style = "border: none";
                unsuccessEls.forEach((unsuccessEl) => {
                    if (inputEl.value === "") {

                        unsuccessEl.style = "visibility: hidden"
                    }
                })

            }, 1000);

            unsuccessEls.forEach((unsuccessEl) => {
                if (inputEl.value === "") {
                    unsuccessEl.style = "visibility: visible"
                } else {
                    unsuccessEl.style = "visibility :hidden"
                }
            })

        } else {
            inputEl.style = "border: 1px green solid"
            successEls.forEach((successEl) => {
                if (!inputEl.value === "") {
                    successEl.style = "visibility: visible"
                }
            })

        }
    })
})








const SubmitButton = document.querySelector("button");
const usernameInput = document.getElementById("username");
const eMailInput = document.getElementById("e-mail");
const passwordInput = document.getElementById("password");
const passwordCheckInput = document.getElementById("password-check");
const inputEls = document.querySelectorAll("input");
const errorText = document.querySelector(".error-text");
const successEls = document.querySelectorAll(".fa-circle-check");
const unsuccessEls = document.querySelectorAll(".fa-circle-exclamation");
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(e) {
    const usernameValue = usernameInput.value.trim();
    const eMailValue = eMailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const passwordCheckValue = passwordCheckInput.value.trim();


    if (usernameValue === "") {
        errorText.classList.remove("hidden");
        errorText.textContent = "Please fill the blanks for username"
        usernameInput.style = "border: 2px red solid"

        setTimeout(() => {
            errorText.classList.add("hidden");
            usernameInput.style = "border: none"

        }, 1000);
    } else {
        usernameInput.style = "border: 2px green solid"

    }

    if (eMailValue === "") {
        errorText.classList.remove("hidden");
        errorText.textContent = "Please fill the blanks for e-mail"
        eMailInput.style = "border: 2px red solid"

        setTimeout(() => {
            errorText.classList.add("hidden");
            eMailInput.style = "border: none"

        }, 1000);
    } else {
        eMailInput.style = "border: 2px green solid"

    }

    if (passwordValue === "") {
        errorText.classList.remove("hidden");
        errorText.textContent = "Please fill the blanks for password"
        passwordInput.style = "border: 2px red solid"

        setTimeout(() => {
            errorText.classList.add("hidden");
            passwordInput.style = "border: none"

        }, 1000);
    } else {
        passwordInput.style = "border: 2px green solid"

    }

    if (passwordCheckValue === "") {
        errorText.classList.remove("hidden");
        errorText.textContent = "Please fill the blanks for passwordCheck"
        passwordCheckInput.style = "border: 2px red solid"

        setTimeout(() => {
            errorText.classList.add("hidden");
            passwordCheckInput.style = "border: none"

        }, 1000);
    } else {
        passwordCheckInput.style = "border: 2px green solid"

    }








}



function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

*/