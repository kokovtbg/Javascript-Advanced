function solve(array, criteria) {
    if (criteria === 'asc') {
        array = array.sort((a, b) => a - b);
    } else if (criteria === 'desc') {
        array = array.sort((a, b) => b - a);
    }
    return array;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));