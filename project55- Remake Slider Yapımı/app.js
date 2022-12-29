const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");
const usersEl = document.querySelector(".users");
const textsEl = document.querySelector(".texts p")

const texts = [
    "I see no changes lets go to the heaven",
    "Wake up in the morning and I ask myself",
    "Is life worth living should I blast myself"
]

let x = 0;

nextEl.addEventListener("click", () => {
    x++;
    updateImage();
    clearTimeout()
});


prevEl.addEventListener("click", () => {
    x--;
    updateImage();
    clearTimeout()
});

function updateImage() {
    if (x == texts.length) {
        x = 0
    } else if (x < 0) {
        x = texts.length - 1
    }

    textsEl.textContent = texts[x]
    usersEl.style.transform = `translate(-${x * 100}%)`

}
