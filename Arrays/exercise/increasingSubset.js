function increasing(array) {
    let arrToPrint = [array.shift()];
    array.forEach(e => {
        if (e >= arrToPrint[arrToPrint.length - 1]) {
            arrToPrint.push(e);
        }
    })
    return arrToPrint;
}

increasing([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );