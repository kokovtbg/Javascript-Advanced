function magic(matrix) {
    let allSumEqual = true;
    let firstRowSum = 0;
    matrix[0].forEach(e => firstRowSum += e);
    let otherSum = 0;
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            otherSum += matrix[i][j];
        }
        if (otherSum !== firstRowSum) {
            allSumEqual = false;
            console.log(allSumEqual);
            return;
        }
        otherSum = 0;
    }

    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            otherSum += matrix[j][i];
        }
        if (otherSum !== firstRowSum) {
            allSumEqual = false;
            console.log(allSumEqual);
            return;
        }
        otherSum = 0;
    }

    console.log(allSumEqual);
}

magic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );
magic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );