function fruitCost(fruit, quantityGrams, price) {
    let money = (price * quantityGrams / 1000).toFixed(2);
    let weight = (quantityGrams / 1000).toFixed(2);
    console.log(`I need $${money} to buy ${weight} kilograms ${fruit}.`);
}

fruitCost('orange', 2500, 1.80);
fruitCost('apple', 1563, 2.35);