function spiral(m, n) {
    let cols = new Array(n);
    cols.fill(0);
    let matrix = new Array(m);
    matrix.fill(cols);
    let number = 1;
    let totalNumber = m * n;
    /* 
    [0][0]-[0][n - 1]
    [1][n - 1]-[m - 1][n - 1]
    [m - 1][n - 1]-[m - 1][0]
    [m - 1][0]-[1][0]
    [1][0]-[1][n - 2]
    */
    for (let i = 0; i < 1; i++) {
        let j = 0;
        let arrayToInsert = [];
        while (j < n) {
            arrayToInsert.push(number + i + j);
            j++;
        }
        matrix[i].splice(0, n, ...arrayToInsert);
        console.log(matrix[i]);
    }
    console.log(matrix);
}

spiral(5, 5);