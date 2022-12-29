const textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", (e) => {
    textarea.style.height = `auto`;
    let scrollHeightEl = e.target.scrollHeight;
    console.log(scrollHeightEl)

    textarea.style.height = `${scrollHeightEl}px`;
});