function operation(op1, op2, operator) {
    let result;
    if (operator === "+") {
        result = op1 + op2;
    } else if (operator === "-") {
        result = op1 - op2;
    } else if (operator === "*") {
        result = op1 * op2;
    } else if (operator === "/") {
        result = op1 / op2;
    } else if (operator === "%") {
        result = op1 % op2;
    } else if (operator === "**") {
        result = op1 ** op2;
    }
    console.log(result);
}

operation(5, 6, '+');
operation(3, 5.5, '*');