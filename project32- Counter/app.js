let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(button => {
    button.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) {
            count--;

        } else if (styles.contains("increase")) {
            count++
        } else {
            count = 0
        }

        if (count < 0) {
            value.style.color = "red";
        } else if (count > 0) {
            value.style.color = "green";
        } else {
            value.style.color = "black";
        }

        value.textContent = count;


    })

});