const form = document.querySelector("form");
const input = document.querySelector("input");
const Generatebutton = document.querySelector(".generate");
const deleteAllButton = document.querySelector(".delete-button");
const listContainer = document.querySelector(".list-container");
const error = document.querySelector(".error");
const listItem = document.querySelector(".list-item");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let editelement;
    let editFlag = false;
    if ((input.value !== "")) {
        const divEl = document.createElement("div");
        divEl.classList.add("list-item");


        divEl.innerHTML = `<div class="list-item">
        <li>${input.value}</li>
        <i class="fa-solid fa-trash" id="delete"></i>
        <i class="fa-regular fa-pen-to-square" id="edit"></i>
    </div>`

        listContainer.appendChild(divEl)


        const deleteIcon = divEl.querySelector(".fa-trash");
        const editIcon = divEl.querySelector(".fa-pen-to-square");
        const listItemEl = divEl.querySelector(".list-item");
        const liEl = divEl.querySelector("li");

        deleteIcon.addEventListener("click", () => {
            listItemEl.remove();
            input.value = "";
        })

        editIcon.addEventListener("click", () => {
            input.value = liEl.innerHTML;

        })
    }

    function getLocalStorage() {
        return localStorage.getItem("listItem")
            ? JSON.parse(localStorage.getItem("listItem"))
            : [];
    }

    function editLocalStorage(id, value) {
        let items = getLocalStorage();

        items = items.map(function (item) {
            if (item.id === id) {
                item.value = value;
            }
            return item;
        });
        localStorage.setItem("list", JSON.stringify(items));
    }

    function editItem(e) {
        const element = e.currentTarget.parentElement.parentElement;
        editelement = e.currentTarget.previousElementSibling.previousElementSibling;
        input.value = editelement.innerHTML;
        editFlag = true;
        console.log(editelement)
    }
    /*
        function addToLocalStorage(id, value) {
            const grocery = { id, value };
            let items = getLocalStorage();
            items.push(grocery);
            localStorage.setItem("list", JSON.stringify(items));
        }
    
        function getLocalStorage() {
            return localStorage.getItem("list")
                ? JSON.parse(localStorage.getItem("list"))
                : [];
        }
    
        function removeFromLocalStorage(id) {
            let items = getLocalStorage();
    
            items = items.filter(function (item) {
                if (item.id !== id) {
                    return item;
                }
            });
    
            localStorage.setItem("list", JSON.stringify(items));
        }
        function editLocalStorage(id, value) {
            let items = getLocalStorage();
    
            items = items.map(function (item) {
                if (item.id === id) {
                    item.value = value;
                }
                return item;
            });
            localStorage.setItem("list", JSON.stringify(items));
        }
    
        // SETUP LOCALSTORAGE.REMOVEITEM('LIST');
    
        // ****** setup items **********
    
        function setupItems() {
            let items = getLocalStorage();
    
            if (items.length > 0) {
                items.forEach(function (item) {
                    createListItem(item.id, item.value);
                });
                container.classList.add("show-container");
            }
        }
    */



});

