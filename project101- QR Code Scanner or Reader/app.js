const inputEl = document.querySelector("input");
const containerEl = document.querySelector(".container");
const bodyContainerEl = document.querySelector(".body-container");
const infoEl = document.querySelector("#info");
const errorEl = document.querySelector("#error");
const textareaEl = document.querySelector("textarea");
const copyEl = document.querySelector(".copy");
const closeEl = document.querySelector(".close");

bodyContainerEl.addEventListener("click", () => inputEl.click())

function fetchRequest(formData, fileEl) {
    bodyContainerEl.style = "pointer-events: none";
    bodyContainerEl.style.userSelect = "none";
    infoEl.textContent = "Scanning the QR Code";
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: "POST", body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data;
        infoEl.textContent = result ? "Upload QR Code to scan" : "Couldn't scan the code";
        if (!result) return;
        textareaEl.textContent = result;
        containerEl.querySelector("img").src = URL.createObjectURL(fileEl);
        console.log(result);
        containerEl.classList.add("active");
    }
    );
}

closeEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    bodyContainerEl.style = "pointer-events: all";
});

copyEl.addEventListener("click", () => {
    textareaEl.select();
    textareaEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(textareaEl.textContent);
    errorEl.style.display = "flex"
    errorEl.textContent = `Text copied!!!`
    setTimeout(() => {
        errorEl.style.display = "none"
    }, 3000);
});


inputEl.addEventListener("change", (e) => {
    let fileEl = e.target.files[0];
    let formData = new FormData();
    if (!fileEl) return;
    formData.append("file", fileEl);
    fetchRequest(formData, fileEl);
})