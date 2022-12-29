const containerel = document.querySelector(".container");
const chars = ["A", "B", "C", "D", 1, 2, 3, 4, 5]


for (let index = 0; index < 12; index++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("color-container")
    containerel.appendChild(newDiv)
}

const colorContainerEls = document.querySelectorAll(".color-container")


function randomColor() {
    let code = "#"

    for (index = 0; index < 6; index++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        const color = chars[randomNum];
        code += chars[randomNum];

        document.body.style.backgroundColor = code;
    }
    return code;
}


newColor();

function newColor() {
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = newColorCode;
        console.log(newColorCode)
        colorContainerEl.textContent = newColorCode;
    });
}
console.log(colorContainerEls)
