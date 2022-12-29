const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const formEl = document.querySelector("form");
buttonEl.addEventListener("click", (e) => {
    e.preventDefault();
    fetchFile(inputEl.value);
    buttonEl.textContent = "File downloading...";
});

function fetchFile(url) {
    //fetching file & returning response as blob
    fetch(url).then(res => res.blob()).then(file => {
        // URL.createObjURL creates a url of passed object
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl; // passing tempUrl as href value of <a> tag
        // passing filename as download value of <a> tag
        aTag.download = tempUrl.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag); // adding <a> tag inside body
        aTag.click(); // clicking <a> tag so the file download
        aTag.remove();
    });
}

formEl.addEventListener("submit", fetchFile(tempUrl/* OR "url"*/));