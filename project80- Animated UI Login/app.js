const loginLink = document.querySelector(".login-link");
const forgotLink = document.querySelector(".forgot-link");
const registerLink = document.querySelector(".register-link");
const loginContainer = document.querySelector(".login-container")
const registerContainer = document.querySelector(".register-container")
const forgotPasswordContainer = document.querySelector(".forgot-password-container")
const resetButton = document.querySelector(".reset-button");


registerLink.addEventListener("click", () => {
    loginContainer.style.display = "none"
    registerContainer.style.display = "flex"
})
forgotLink.addEventListener("click", () => {
    loginContainer.style.display = "none"
    forgotPasswordContainer.style.display = "flex"
})

resetButton.addEventListener("click", () => {
    forgotPasswordContainer.style.display = "none";
    loginContainer.style.display = "flex"
})