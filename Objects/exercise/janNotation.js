function notation(array) {
    let numbers = [];
    let operations = [];
    let res = [];
    let operationEnum = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    }
    for (let element of array) {
        if (Number(element)) {
            numbers.push(Number(element));
        } else {
            operations.push(element);
        }
    }
    if (numbers.length - operations.length > 1) {
        console.log('Error: too many operands!');
        return;
    } else if (numbers. length - operations.length < 1) {
        console.log('Error: not enough operands!');
        return;
    }
    
    while (operations.length > 0) {
        let operation = operations.shift();
        let numA = numbers.pop();
        let numB = numbers.pop();
        let num = operationEnum[operation](numB, numA);
        res.shift();
        res.push(num);
        numbers.push(num);
    }

    console.log(res.join(''));
}

notation([3,
    4,
    '+']);
notation([5,
    3,
    4,
    '*',
    '-']);
notation([7,
    33,
    8,
    '-']);
notation([15,
    '/']);
notation([10, 12, 13, 15, '+', '-', '*']);