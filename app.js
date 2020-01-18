let cells = document.querySelectorAll('.cell');
let turnCounter = 0;
let winCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[2], cells[4], cells[6]],
    [cells[0], cells[4], cells[8]]
]

cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
        if (turnCounter % 2 === 0) {
            cell.textContent = "X";
        } else {
            cell.textContent = "O";
        }

        turnCounter++
        checkWin();
    });
});

function checkWin() {
    // length of 8
    for (let i = 0; i < winCombos.length; i++) {
        let sum = 0;
        // length of 2
        for (let j = 0; j < winCombos[i].length; j++) {
            if (winCombos[i][j].textContent === "X") {
                sum++
            }

            if (sum === 3) {
                alert("X Wins!")
                reset()
                return;
            }
        }
    }

    for (let l = 0; l < winCombos.length; l++) {
        let sum = 0;
        for (let k = 0; j < winCombos[l].length; k++) {
            if (winCombos[l][k].textContent === "O") {
                sum++
            }

            if (sum === 3) {
                alert("O Wins!")
                reset()
                return;
            }
        }
    }
}

function reset() {

    for (i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ""
        turnCounter = 0;
    }
}
