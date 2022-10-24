function sum(n, m) {
    let firstNum = Number(n);
    let lastNum = Number(m);
    let sum = 0;
    for (let index = firstNum; index <= lastNum; index++) {
        sum += index;
    }
    console.log(sum);
}

sum("1", "5");
sum("-8", "20");