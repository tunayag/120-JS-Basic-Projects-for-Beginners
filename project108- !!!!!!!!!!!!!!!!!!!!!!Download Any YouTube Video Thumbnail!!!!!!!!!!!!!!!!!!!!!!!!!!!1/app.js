const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const formEl = document.querySelector("form");
const imageEl = document.querySelector("img");
const hiddenInputEl = document.querySelector(".hidden-input");





inputEl.addEventListener("keyup", () => {
    let url = inputEl.value;
    if (url.indexOf("https://www.youtube.com/watch?v=") != -1) {
        let id = url.split("v=")[1].substring(0, 11)
        console.log(id)
        let ytImgUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
        console.log(ytImgUrl)
        imageEl.src = ytImgUrl;
        formEl.classList.add("active")
    } else if (url.indexOf("https://youtu.be/") != -1) {
        let id = url.split("be/")[1].substring(0, 11)
        console.log(id)
        let ytImgUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
        console.log(ytImgUrl)
        imageEl.src = ytImgUrl;
        formEl.classList.add("active")
    } else if (url.match(/\.(jpe?g|png|gif|bmp|webp)$/i)) {
        imageEl.src = url;
    } else {
        imageEl.src = "";
        formEl.classList.remove("active");
    }
    hiddenInputEl.value = imageEl.src;

});



