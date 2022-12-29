const containerEl = document.querySelector(".container");

const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {

    newImages();
});

function newImages() {
    for (let index = 0; index < 4; index++) {
        let x;
        const imgEl = document.createElement("img");
        containerEl.appendChild(imgEl);
        const randomNum = Math.floor(Math.random() * 100);
        x = randomNum;
        imgEl.src = `https://picsum.photos/200/300?random=${x}`

    }
}
