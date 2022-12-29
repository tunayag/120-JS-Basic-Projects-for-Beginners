const containerEl = document.querySelector(".container");
const shareEl = document.querySelector(".share");

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    let x = e.offsetX;
    let y = e.offsetY;
    winWidth = window.innerWidth;
    ceWidth = containerEl.offsetWidth;
    console.log(x, winWidth, ceWidth)

    if (x > (winWidth - ceWidth - shareEl.offsetWidth)) {
        shareEl.style.left = "-100px"
    } else {
        shareEl.style.right = "-100px"
        shareEl.style.left = "";
    }

    winHeight = window.innerHeight;
    ceHeight = containerEl.offsetHeight;

    x = x > winWidth - ceWidth ? winWidth - ceWidth : x;
    y = y > winHeight - ceHeight ? winHeight - ceHeight : y;
    console.log(y, winHeight, ceHeight)
    containerEl.style.left = `${x}px`;
    containerEl.style.top = `${y}px`;
    containerEl.style.visibility = "visible"
});

document.addEventListener("click", () => {
    containerEl.style.visibility = "hidden"

})