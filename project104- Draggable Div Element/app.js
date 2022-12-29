const container = document.querySelector(".container"),
    header = container.querySelector("header");
function onDrag({ movementX, movementY }) {
    let getStyle = window.getComputedStyle(container);
    let leftVal = parseInt(getStyle.left);
    let topVal = parseInt(getStyle.top);

    container.style.left = `${leftVal + movementX}px`;
    container.style.top = `${topVal + movementY}px`;

}

header.addEventListener("mousedown", () => {
    header.classList.add("active");
    header.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", () => {
    header.classList.remove("active");
    header.removeEventListener("mousemove", onDrag);
});
