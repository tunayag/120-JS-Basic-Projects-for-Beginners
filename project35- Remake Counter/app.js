const valueEl = document.getElementById("value");
const btnsEl = document.querySelectorAll(".btn");
//const dEl = document.querySelector(".decrease");

let count = 0;
/*dEl.addEventListener("click", () => {
    count--;
    
    value.textContent = count;
})*/



btnsEl.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        console.log(styles)

        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        if (count < 0) {
            valueEl.style.color = "red";
        } else if (count > 0) {
            value.style.color = "green";
        } else {
            value.style.color = "white";
        }

        value.textContent = count;
    })

});