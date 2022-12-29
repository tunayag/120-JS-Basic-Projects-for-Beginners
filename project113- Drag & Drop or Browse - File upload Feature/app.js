const containerEl = document.querySelector(".container");
const buttonEl = document.querySelector("button");
const textEl = document.querySelector("#text");
const inputEl = document.querySelector("input");

let fileEl;

inputEl.addEventListener("change", function () {
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    fileEl = this.files[0];
    showTheFile();
});


containerEl.addEventListener("dragover", (e) => {
    e.preventDefault();
    textEl.textContent = "Release to Upload File"
});


containerEl.addEventListener("dragleave", () => {
    textEl.textContent = "Drag & Drop to Upload File"
});


containerEl.addEventListener("drop", (e) => {
    e.preventDefault();
    fileEl = e.dataTransfer.files[0];
    showTheFile();
});


function showTheFile() {
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
    fileType = fileEl.type;
    if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        console.log(fileReader)
        fileReader.addEventListener("load", () => {
            let fileURL = fileReader.result;
            let imgTag = `<img src= "${fileURL}" alt= "">`
            containerEl.innerHTML = imgTag;
        });
        fileReader.readAsDataURL(fileEl);
    } else {
        alert("This is not an image file. Please upload an image file.")
    }
}

buttonEl.addEventListener("click", () => inputEl.click())