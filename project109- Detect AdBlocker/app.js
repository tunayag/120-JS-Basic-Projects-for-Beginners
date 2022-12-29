const detect = document.querySelector("#detect");
const containerEl = document.querySelector(".container");

let adClasses = ["ad", "ads", "adsbox", "doubleclick", "ad-placement", "ad-placeholder", "adbadge", "BannerAd"];

for (let item of adClasses) {
    detect.classList.add(item)
}

let getProperty = window.getComputedStyle(detect).getPropertyValue("display");
console.log(getProperty)

if (!containerEl.classList.contains("active")) {
    getProperty == "none" ? containerEl.classList.add("active") : containerEl.classList.remove("active");
}
