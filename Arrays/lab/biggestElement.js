function biggestElement(matrix) {
    
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] > biggestNumber) {
                biggestNumber = matrix[i][j];
            }
        }
        
    }
    console.log(biggestNumber);
}

biggestElement([[20, 50, 10], [8, 33, 145]]);
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);