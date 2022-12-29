const colors = ["green", "red", "rgba(155,122,165)", " #8a3ab9"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    const randomNum = getRundomNum();
    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = colors[randomNum]

    console.log(randomNum)
})

function getRundomNum() {
    return Math.floor(Math.random() * colors.length);
}