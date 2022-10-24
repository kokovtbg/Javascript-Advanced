function solution() {
    let microelements = [];
    microelements.push({name: "protein", quantity: 0});
    microelements.push({name: "carbohydrate", quantity: 0});
    microelements.push({name: "fat", quantity: 0});
    microelements.push({name: "flavour", quantity: 0});

    let recipes = [];
    recipes.push({name: 'apple', 
    ingredients: [
        {name: 'carbohydrate', quantity: 1}, 
        {name: 'flavour', quantity: 2}
    ]});
    recipes.push({name: 'lemonade', 
    ingredients: [
        {name: 'carbohydrate', quantity: 10}, 
        {name: 'flavour', quantity: 20}
    ]});
    recipes.push({name: 'burger', 
    ingredients: [
        {name: 'carbohydrate', quantity: 5}, 
        {name: 'fat', quantity: 7}, 
        {name: 'flavour', quantity: 3}
    ]});
    recipes.push({name: 'eggs', 
    ingredients: [
        {name: 'protein', quantity: 5}, 
        {name: 'fat', quantity: 1}, 
        {name: 'flavour', quantity:1}
    ]});
    recipes.push({name: 'turkey', 
    ingredients: [
        {name: 'protein', quantity: 10}, 
        {name: 'carbohydrate', quantity: 10}, 
        {name: 'fat', quantity: 10}, 
        {name: 'flavour', quantity: 10}
    ]});

    return function(string) {
        let result = '';
        let splittedData = string.split(' ');
        let operation = splittedData[0];
        switch (operation) {
            case 'restock':
                let microelement = splittedData[1];
                let quantity = Number(splittedData[2]);
                microelements
                .filter(e => e.name === microelement)
                .forEach(e => e.quantity += quantity);
                result = 'Success';
                break;
            case 'prepare':
                let recipe = splittedData[1];
                let quantityRecipe = splittedData[2];
                
                result = manipulate(recipes, recipe, quantityRecipe);
                break;
            case 'report':
                let midRes = ''
                microelements.forEach((m, i) => {
                    let sep = i === microelements.length - 1 ? '' : ' ';
                    midRes += m.name + '=' + m.quantity + sep;
                })
                result = midRes;
                break;
        }
        function manipulate(recipes, recipe, quantityRecipe) {
            
            for (let rec of recipes) {
                if (rec.name === recipe) {
                    let ingredients = rec.ingredients;
                    for (let ing of ingredients) {
                        for (let i = 0; i < microelements.length; i++) {
                            let microEl = microelements[i];
                            if (microEl.name === ing.name) {
                                microEl.quantity -= quantityRecipe * ing.quantity;
                            }

                            if (microEl.quantity < 0) {
                            
                                for (let j = i; j >= 0; j--) {
                                    microelements[j].quantity += quantityRecipe * ing.quantity;
                                }
                                
                                
                                return `Error: not enough ${microEl.name} in stock`;
    
                            }
                        }
                    }
                }
            }
            return 'Success';
        }

        return result;
    }
}

let manager = solution (); 
// console.log (manager ("restock flavour 50")); // Success 
// console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 

// console.log(manager('restock flavour 50')); 
// console.log(manager('prepare lemonade 4'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));

console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));
