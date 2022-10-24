function oddPositionElements(array) {
    return array.filter((a, i) => i % 2 !== 0)
    .map(x => x * 2)
    .reverse()
    .join(" ");
}

console.log(oddPositionElements([10, 15, 20, 25]));
console.log(oddPositionElements([3, 0, 10, 4, 7, 3]));