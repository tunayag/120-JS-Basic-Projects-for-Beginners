let user = navigator.userAgent;
console.log(user)
let browser;
if (user.match(/edg/i)) {
    browser = "edge";
} else if (user.match(/chrome|chromium|crios/i)) {
    browser = "chrome";
} else {
    alert("Couldn't find")
};

const logos = document.querySelector(`.img-container .${browser}`)
console.log(browser)

logos.style.opacity = "1";
logos.style.color = "red";