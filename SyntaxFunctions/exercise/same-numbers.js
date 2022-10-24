function sameNum(number) {
    let sameNumbers = true;
    let sum = 0;
    let numberAsString = number.toString();
    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString.charAt(i));
        let char = numberAsString.charAt(i);
        if (char != numberAsString.charAt(i + 1) && i < numberAsString.length - 1) {
            sameNumbers = false;
        }
    }
    console.log(sameNumbers);
    console.log(sum);
}

sameNum(2222222);
sameNum(1234);