function diagonalSum(matrix) {
    let mainSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (i === j) {
                mainSum += matrix[i][j];
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
    console.log(mainSum + " " + secondSum);
}

diagonalSum([[20, 40], [10, 60]]);
diagonalSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);