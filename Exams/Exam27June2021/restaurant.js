class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let result = [];
        for (let product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
            if (productTotalPrice <= this.budgetMoney) {
                this.budgetMoney -= productTotalPrice;
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = productQuantity;
                } else {
                    this.stockProducts[productName] += productQuantity;
                }
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
                result.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
                result.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return result.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {
                neededProducts,
                price
            }
            let countMeals = Object.keys(this.menu).length;
            if (countMeals === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }
            return `Great idea! Now with the ${meal} we have ${countMeals} meals in the menu, other ideas?`;
        }
        return `The ${meal} is already in the our menu, try something different.`;
    }

    showTheMenu() {
        let result = [];
        for (let [key, value] of Object.entries(this.menu)) {
            result.push(`${key} - $ ${value.price}`)
        }
        result.length === 0 ? result.push("Our menu is not ready yet, please come later...") : "";
        return result.join('\n');
    }

    makeTheOrder(meal) {
        let meals = Object.entries(this.menu);
        let mealInMenu;
        for (let [key, value] of meals) {
            if (key === meal) {
                mealInMenu = value;
            }
        }
        if (!mealInMenu) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        let productsQuantity = {};
        for (let product of mealInMenu.neededProducts) {
            let [nameProduct, quantity] = product.split(' ');
            quantity = Number(quantity);
            let quantityInStock = this.stockProducts[nameProduct];
            if (quantityInStock) {
                if (quantityInStock >= quantity) {
                    productsQuantity[nameProduct] = quantity;
                } else {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
                
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
        for (let [key, value] of Object.entries(productsQuantity)) {
            this.stockProducts[key] -= value;
        }
        this.budgetMoney += mealInMenu.price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${mealInMenu.price}.`;
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.makeTheOrder('Pizza'));
// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
