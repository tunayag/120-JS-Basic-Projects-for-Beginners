const newNoteButton = document.querySelector(".new-note");

const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
    notes.forEach((note) => {
        addNewNote(note)
    })
}
newNoteButton.addEventListener("click", () => {
    addNewNote();
});



function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("container");


    note.innerHTML = `<div class="container">
            <div class="tools-container">
                <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash-can"></i>
                </div>
            <div class="text-container ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden " : ""} "></textarea>
        </div > `;

    const EditButton = note.querySelector(".fa-pen-to-square");
    const DeleteButton = note.querySelector(".fa-trash-can");
    const textContainer = note.querySelector(".text-container")
    const textArea = note.querySelector("textarea");


    textArea.value = text;

    EditButton.addEventListener("click", () => {
        textContainer.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });


    DeleteButton.addEventListener("click", () => {
        note.remove();
        updateLocalStorage();
    });

    textArea.addEventListener("input", (e) => {
        const value = e.target;
        value.style.color = "red"
        updateLocalStorage();
    })

    document.body.appendChild(note);
}


function updateLocalStorage() {
    const notesText = document.querySelectorAll("textarea");
    const notes = [];

    notesText.forEach((noteEl) => {
        notes.push(noteEl.value);

    })
    localStorage.setItem("notes", JSON.stringify(notes))

}