function gcd(num1, num2) {
    let gcdNum = 1;
    if (num1 > num2) {
        for (let i = num2; i > 1; i--) {
            if (num1 % i == 0 && num2 % i == 0) {
                gcdNum = i;
            }
        }
    } else {
        for (let i = num1; i > 1; i--) {
            if (num1 % i == 0 && num2 % i == 0) {
                gcdNum = i;
            }
        }
    }
    console.log(gcdNum);
}

gcd(15, 5);
gcd(2154, 458);
gcd(15, 1);
gcd(5, 15);
gcd(458, 2154);