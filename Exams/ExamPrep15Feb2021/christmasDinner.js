class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(budget) {
        if (budget < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = budget;
    }

    shopping(product) {
        let type = product[0];
        let price = product[1];
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product");
        }
        this.budget -= price;
        this.products.push(type);
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {
        for (let product of recipe.productsList) {
            let productInArr = this.products.find(pr => pr === product);
            if (!productInArr) {
                throw new Error("We do not have this product");
            }
        }
        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let dishInArr = this.dishes.find(d => d.recipeName === dish);
        if (!dishInArr) {
            throw new Error("We do not have this dish");
        }
        let guest = Object.keys(this.guests).find(g => g === name);
        if (guest) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = [];
        for (let [name, dish] of Object.entries(this.guests)) {
            let products = this.dishes.find(d => d.recipeName === dish).productsList;
            result.push(`${name} will eat ${dish}, which consists of ${products.join(', ')}`);
        }
        return result.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

// console.log(dinner.showAttendance());

console.log(dinner.budget);
console.log(dinner.dishes);
console.log(dinner.products);
console.log(dinner.guests);
