function smallestTwoNums(array) {
    array.sort((a, b) => a - b);
    let arrToPrint = [];
    arrToPrint.push(array.shift());
    arrToPrint.push(array.shift());
    console.log(arrToPrint.join(" "));
}

smallestTwoNums([30, 15, 50, 5]);