const resultEl = document.querySelector(".result");
const blockEls = document.querySelectorAll(".block");

let player = "X";
let gameOver = false;
let winner;



function startGame() {
    resultEl.textContent = `${player}'s Turn!`

    blockEls.forEach(block => {
        block.addEventListener("click", () => chooseArea(block))
    });
}

startGame();

function chooseArea(block) {
    if (block.textContent === "") {
        block.textContent = player;
        nextPlayer()
    } else {
        resultEl.textContent = "Hey. It's not empty!"
    }

    checkWin();
    checkTie();

    if (gameOver) {
        resultEl.textContent = `The game is over Ms. Hutson, ${winner} Won`
        blockEls.forEach(block => block.style.pointerEvents = 'none');
    }

}



function nextPlayer() {
    if (player === "X") {
        player = "O";
        resultEl.textContent = `${player}'s Turn!`
        return;
    } else if (player === "O")
        player = "X"
    resultEl.textContent = `${player}'s Turn!`
}




function checkWin() {
    checkRows();
    checkColumns();
    checkDiagonals();
}




function checkTie() {
    const values = [];
    blockEls.forEach(block => values.push(block.textContent))
    if (!values.includes("")) {
        playerText.textContent = "Tie!!";
        blockEls.forEach(block => block.style.pointerEvents = "none");
    }
}










function checkRows() {
    let row1 = blockEls[0].textContent == blockEls[1].textContent && blockEls[0].textContent == blockEls[2].textContent && blockEls[0].textContent !== ""
    let row2 = blockEls[3].textContent == blockEls[4].textContent && blockEls[3].textContent == blockEls[5].textContent && blockEls[3].textContent !== ""
    let row3 = blockEls[6].textContent == blockEls[7].textContent && blockEls[6].textContent == blockEls[8].textContent && blockEls[6].textContent !== ""
    if (row1 || row2 || row3) {
        gameOver = true
    }
    if (row1) return winner = blockEls[0].textContent
    if (row2) return winner = blockEls[3].textContent
    if (row3) return winner = blockEls[6].textContent

}

function checkColumns() {
    let col1 = blockEls[0].textContent == blockEls[3].textContent && blockEls[0].textContent == blockEls[6].textContent && blockEls[0].textContent !== ""
    let col2 = blockEls[1].textContent == blockEls[4].textContent && blockEls[1].textContent == blockEls[7].textContent && blockEls[1].textContent !== ""
    let col3 = blockEls[2].textContent == blockEls[5].textContent && blockEls[2].textContent == blockEls[8].textContent && blockEls[2].textContent !== ""

    if (col1 || col2 || col3) {
        gameOver = true
    }
    if (col1) return winner = blockEls[0].textContent
    if (col2) return winner = blockEls[1].textContent
    if (col3) return winner = blockEls[2].textContent




}

function checkDiagonals() {
    let dia1 = blockEls[0].textContent == blockEls[4].textContent && blockEls[0].textContent == blockEls[8].textContent && blockEls[0].textContent !== ""
    let dia2 = blockEls[2].textContent == blockEls[4].textContent && blockEls[2].textContent == blockEls[6].textContent && blockEls[2].textContent !== ""

    if (dia1 || dia2) {
        gameOver = true
    }
    if (dia1) return winner = blockEls[0].textContent
    if (dia2) return winner = blockEls[2].textContent

}
