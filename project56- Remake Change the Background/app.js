const buttonEl = document.querySelector("button");
const charts = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"]

buttonEl.addEventListener("click", () => {
    updateBackground()
})

function updateBackground() {

    let x = "#"
    for (let i = 0; i < 6; i++) {

        const randomNumber = Math.floor(Math.random() * charts.length);
        x += charts[randomNumber];

        document.body.style.backgroundColor = x
    }

    console.log(x)
}