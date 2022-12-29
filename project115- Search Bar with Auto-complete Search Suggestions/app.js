const inputEl = document.querySelector("input");
const ulEl = document.querySelector("ul");
const iEl = document.querySelector("i");
const linkEl = document.querySelector("a");

let webLink;

inputEl.addEventListener("keyup", (e) => {
    let userData = e.target.value;
    let emptyArr = [];
    if (userData) {
        iEl.onclick = () => {
            webLink = `https://www.google.com/search?q=${userData}`;
            linkEl.setAttribute("href", webLink);
            linkEl.click();
        }
        emptyArr = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });

        emptyArr = emptyArr.map((data) => {
            return data = `<li>${data}</li>`
        });
    }
    showSuggestions(emptyArr);
    let allList = ulEl.querySelectorAll("li");
    for (let index = 0; index < allList.length; index++) {
        allList[index].setAttribute("onclick", "select(this)")
    }

})

function select(element) {
    let userSelectData = element.textContent;
    console.log(userSelectData)
    inputEl.value = userSelectData;
}


function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputEl.value;
        listData = `<li>` + userValue + `</li>`
    } else {
        listData = list.join("");
    }
    ulEl.innerHTML = listData;

}