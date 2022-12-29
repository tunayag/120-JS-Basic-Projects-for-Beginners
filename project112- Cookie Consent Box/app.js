const containerEl = document.querySelector(".container")
const buttonEl = document.querySelector("#first");

buttonEl.addEventListener("click", () => {
    document.cookie = "CookieBy=TT; max - age = " + 60 * 60 * 24 * 30;
    if (document.cookie) {
        containerEl.style.display = "none"
    } else {
        alert("Cookie couldn't set")
    }
});
let check = document.cookie.indexOf("CookieBy=TT");
check = check != -1 ? containerEl.style.display = "none" : containerEl.style.display = "flex"