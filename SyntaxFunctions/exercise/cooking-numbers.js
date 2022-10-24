function cooking(numberString, op1, op2, op3, op4, op5) {
    let number = Number(numberString);
    for (let i = 1; i <= 5; i++) {
        let operation;
        switch (i) {
            case 1:
                operation = op1;
                break;
            case 2:
                operation = op2;
                break;
            case 3:
                operation = op3;
                break;
            case 4:
                operation = op4;
                break;
            case 5:
                operation = op5;
                break;
            default:
                break;
        }
        switch (operation) {
            case "chop":
                number = number / 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number *= 0.8;
                break;
            default:
                break;
        }
        console.log(number);
        
    }
    
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');