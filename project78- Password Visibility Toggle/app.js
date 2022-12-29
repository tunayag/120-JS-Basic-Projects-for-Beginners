const passwordEl = document.getElementById("password");
const hideEl = document.querySelector(".hide");

hideEl.addEventListener("click", () => {
    if ((!passwordEl.value == "") && (hideEl.classList.contains("hide"))) {
        passwordEl.setAttribute("type", "text")
        hideEl.classList.replace("hide", "pswww")
    } else {
        passwordEl.setAttribute("type", "password")
        hideEl.classList.replace("pswww", "hide")
    }
})