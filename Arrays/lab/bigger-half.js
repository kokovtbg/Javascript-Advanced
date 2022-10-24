function biggerHalf(array) {
    array.sort((a, b) => a - b);
    
    let newArr = [];
    for (let i = Math.floor(array.length / 2); i < array.length; i++) {
        const element = array[i];
        newArr.push(element);
    }
    return newArr;
}

biggerHalf([4, 7, 5, 2]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);