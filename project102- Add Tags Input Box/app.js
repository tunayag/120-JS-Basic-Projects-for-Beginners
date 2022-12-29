const inputEl = document.querySelector("input");
const ulEl = document.querySelector("ul");
const buttonEl = document.querySelector("button");
const spanEl = document.querySelector("span");


let remaining = 5;
spanEl.textContent = remaining;
function addTag(e) {

    const liElements = ulEl.querySelectorAll("li")
    if (e.key == "Enter") {
        let tag = e.target.value;
        if (tag.length > 1 && !ulEl.innerHTML.includes(tag) && liElements.length <= 4) {
            console.log(tag, liElements.length)
            liEl = `<li class="asd">${tag}<i class="uit uit-multiply"></i>`
            ulEl.innerHTML += liEl;
            remaining--;
            spanEl.textContent = remaining;
            inputEl.value = "";
        } else if (liElements.length >= 4) {
            inputEl.style.pointerEvents = "none"
            inputEl.style.userSelect = "none"
            inputEl.disabled = true;
        }
        inputEl.value = "";
    }


}
inputEl.addEventListener("keyup", addTag);

buttonEl.addEventListener("click", () => {
    ulEl.innerHTML = "";
    inputEl.value = "";
    remaining = 5;
    spanEl.textContent = remaining;
});

