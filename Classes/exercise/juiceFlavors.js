function solve(array) {
    let juiceQuantity = new Map();
    let juiceBottle = new Map();
    array.forEach(e => {
        let [juice, quantity] = e.split(' => ');
        quantity = Number(quantity);
        if (!juiceQuantity.has(juice)) {
            juiceQuantity.set(juice, 0);
        }
        
        juiceQuantity.set(juice, juiceQuantity.get(juice) + quantity);
        
        let bottles = Math.floor(juiceQuantity.get(juice) / 1000);
        if (bottles > 0) {
            if (!juiceBottle.has(juice)) {
                juiceBottle.set(juice, 0);
            }
            juiceBottle.set(juice, juiceBottle.get(juice) + bottles);
            juiceQuantity.set(juice, juiceQuantity.get(juice) - bottles * 1000);
        }
        
    });
    juiceBottle.forEach((v, k) => console.log(k + ' => ' + v));
}

// solve(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']);

// solve(['Kiwi => 234',
// 'Pear => 2345',
// 'Watermelon => 3456',
// 'Kiwi => 4567',
// 'Pear => 5678',
// 'Watermelon => 6789']);

solve(['Kiwi => 300', 
'Kiwi => 300', 
'Orange => 200', 
'Orange => 300', 
'Orange => 500', 
'Kiwi => 300', 
'Kiwi => 200']);