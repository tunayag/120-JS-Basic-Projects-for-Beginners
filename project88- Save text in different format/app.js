const textArea = document.querySelector("textarea")
const fileNameInput = document.querySelector("#file-name")
const saveAsSelect = document.querySelector("select");
const saveButton = document.querySelector("#save-button")

saveButton.addEventListener("click", () => {
    const blob = new Blob([textArea.value], { type: saveAsSelect.value });
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click();
    console.log(blob)
});

saveAsSelect.addEventListener("change", () => {
    let selectedOption = saveAsSelect.options[saveAsSelect.selectedIndex].text;
    console.log(selectedOption.split(" ")[0])
    saveButton.textContent = `Save as ${selectedOption.split(" ")[0]} format`
})