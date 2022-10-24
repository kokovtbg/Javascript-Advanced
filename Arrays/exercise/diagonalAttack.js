function diagonals(array) {
    let numberArr = [];
    let matrix = [[]];
    let count = 0;
    array.forEach(element => {
        element.split(" ").forEach(e => numberArr.push(e));
        matrix[count] = numberArr;
        numberArr = [];
        count++;
    });
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[i][j] = Number(matrix[i][j]);
        }
    }
    let firstSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i === j) {
                firstSum += matrix[i][j];
            }
        }
    }
    let secondSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = matrix.length - 1; j >= 0; j--) {
            if (j === matrix.length - 1 - i) {
                secondSum += matrix[i][j];
            }
        }
    }
    if (firstSum === secondSum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i !== j && j !== matrix.length - 1 - i) {
                    matrix[i][j] = firstSum;
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

diagonals(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);