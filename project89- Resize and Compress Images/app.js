const imageContainer = document.querySelector(".image-container");
const widthInput = document.querySelector("#width-input");
const heightInput = document.querySelector("#height-input");
const downloadButton = document.querySelector("button");
const uploadInput = imageContainer.querySelector("input")
const image = document.querySelector("img")
const bodyContainer = document.querySelector(".body-container")
const uploadText = document.getElementById("upload");
const uploadIcon = document.querySelector("i");
const ratioQualityContainer = document.querySelector(".ratio-quality");
const ratioInput = document.querySelector(".ratio input");
const qualityInput = document.querySelector("#quality");
const buttonContainer = document.querySelector(".button-container");
const Container = document.querySelector(".container");

let ogImageRatio;


function loadFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    image.src = URL.createObjectURL(file);
    image.style = "display: block";

    image.addEventListener("load", () => {
        widthInput.value = image.naturalWidth
        heightInput.value = image.naturalHeight
        ogImageRatio = image.naturalWidth / image.naturalHeight
        uploadIcon.style = "display:none";
        uploadText.style = "display:none";

    })
    bodyContainer.classList.add("active")
    ratioQualityContainer.classList.add("active")
    buttonContainer.classList.add("active");
    Container.classList.add("active");
    imageContainer.classList.add("active");

};

widthInput.addEventListener("input", () => {
    const height = ratioInput.checked ? widthInput.value / ogImageRatio : heightInput.value;
    heightInput.value = Math.floor(height);

});

heightInput.addEventListener("input", () => {
    const width = ratioInput.checked ? heightInput.value * ogImageRatio : widthInput.value;
    widthInput.value = Math.floor(width);
});



function downloadImage() {
    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    const ctx = canvas.getContext("2d");

    const imgQuality = qualityInput.checked ? 0.7 : 1.0;

    canvas.width = widthInput.value;
    canvas.height = heightInput.value;

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    a.href = canvas.toDataURL("image/jpeg", imgQuality)
    a.download = new Date().getTime();
    a.click();
};


downloadButton.addEventListener("click", downloadImage);
uploadInput.addEventListener("change", loadFile);
imageContainer.addEventListener("click", () => uploadInput.click());