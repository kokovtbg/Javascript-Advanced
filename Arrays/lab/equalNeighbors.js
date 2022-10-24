function equals(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === matrix[i][j + 1] 
                && j < matrix[0].length - 1) {
                count++;
            }
        }
    }

    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (j < matrix.length - 1) {
                let string1 = matrix[j][i];
                let string2 = matrix[j + 1][i];
                if (string1 === string2) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}

equals([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);
equals([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);