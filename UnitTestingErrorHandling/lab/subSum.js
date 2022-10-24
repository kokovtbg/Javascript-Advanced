function solve(array, startIndex, endIndex) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!Number(element)) {
            return NaN;
        }
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        sum += array[i];
    }
    return sum;
}