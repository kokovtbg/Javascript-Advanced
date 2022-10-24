function tic(array) {
    let matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let winner = false;
        let x = element.split(" ")[0];
        let y = element.split(" ")[1];
        if (matrix[x][y] !== false) {
            console.log("This place is already taken. Please choose another!");
        } else {
            if (count % 2 === 0) {
                matrix[x][y] = 'X';
            } else {
                matrix[x][y] = 'O';
            }
            let gameEnded = true;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (matrix[i][j] === false) {
                        gameEnded = false;
                    }
                }
            }
            if (gameEnded) {
                console.log("The game ended! Nobody wins :(");
                break;
            }
            

            for (let i = 0; i < 3; i++) {
                let countX = 0;
                matrix[i].forEach(e => {
                    if (e === 'X') {
                        countX++;
                    }
                });
                if (countX === 3) {
                    console.log("Player X wins!");
                    winner = true;
                    break;
                }
            }
            for (let i = 0; i < 3; i++) {
                let countX = 0;
                for (let j = 0; j < 3; j++) {
                    if (matrix[j][i] === 'X') {
                        countX++;
                    }
                }
                if (countX === 3) {
                    console.log("Player X wins!");
                    winner = true;
                    break;
                }
            }
            let countX = 0;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (i === j && matrix[i][j] === 'X') {
                        countX++;
                    }
                }
            }
            if (countX === 3) {
                console.log("Player X wins!");
                winner = true;
                break;
            }
            if (matrix[0][2] === 'X' && matrix[1][1] === 'X' && matrix[2][0] === 'X') {
                console.log("Player X wins!");
                winner = true;
                break;
            }


            
            for (let i = 0; i < 3; i++) {
                let countO = 0;
                matrix[i].forEach(e => {
                    if (e === 'O') {
                        countO++;
                    }
                });
                if (countO === 3) {
                    console.log("Player O wins!");
                    winner = true;
                    break;
                }
            }
            for (let i = 0; i < 3; i++) {
                let countO = 0;
                for (let j = 0; j < 3; j++) {
                    if (matrix[j][i] === 'O') {
                        countO++;
                    }
                }
                if (countO === 3) {
                    console.log("Player O wins!");
                    winner = true;
                    break;
                }
            }
            let countO = 0;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (i === j && matrix[i][j] === 'O') {
                        countO++;
                    }
                }
            }
            if (countO === 3) {
                console.log("Player O wins!");
                winner = true;
                break;
            }
            if (matrix[0][2] === 'O' && matrix[1][1] === 'O' && matrix[2][0] === 'O') {
                console.log("Player O wins!");
                winner = true;
                break;
            }
            count++;
        }
        if (winner) {
            break;
        }
    }
    for (let i = 0; i < 3; i++) {
        console.log(matrix[i].join("\t"));
    }
}

// tic(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]
// );

// tic(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]
// );

tic(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);