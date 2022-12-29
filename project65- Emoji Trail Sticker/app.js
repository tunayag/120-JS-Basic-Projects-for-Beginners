const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
    console.log("moved")
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    const spanEl = document.createElement("span");
    spanEl.classList.add("image-container")
    bodyEl.appendChild(spanEl);

    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";


    setTimeout(() => {
        spanEl.remove();
    }, 1000)
})