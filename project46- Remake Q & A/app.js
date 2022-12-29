const questionsEl = document.querySelectorAll(".question");

questionsEl.forEach((questions) => {
    const btn = questions.querySelector(".questionBtn");

    btn.addEventListener("click", () => {
        questions.classList.toggle("show-text")
    })
});
