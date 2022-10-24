function validityChecker(x1, y1, x2, y2) {
    calculate(x1, y1, 0, 0);
    calculate(x2, y2, 0, 0);
    calculate(x1, y1, x2, y2);

    function calculate(x1, y1, x2, y2) {
        let comparison = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        let comparisonString = comparison.toString();
        if (comparisonString.includes(".")) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);