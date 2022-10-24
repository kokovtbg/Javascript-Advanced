function sorting(array) {
    let arrToPrint = [];
    array.sort((a, b) => a - b);
    while (array.length > 0) {
        arrToPrint.push(array.shift());
        arrToPrint.push(array.pop());
    }
    return arrToPrint;
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));