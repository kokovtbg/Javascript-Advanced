function getFibonator() {
    let fiboArr = [0, 1];
    let count = 0;
    return function() {
        let sum = 0;
        if (count === 0) {
            sum = fiboArr[0] + fiboArr[1];
        } else {
            sum = fiboArr.shift() + fiboArr[0];
            fiboArr.push(sum);
        }
        
        count++;
        return sum;
    } 
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
