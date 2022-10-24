class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        //["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2"…]
        //"{type} {quantity} {price}"
        let result = new Set();
        for (let vegetable of vegetables) {
            let [type, quantity, price] = vegetable.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let vegetableInstore = this.availableProducts.find(v => v.type === type);
            if (vegetableInstore) {
                result.add(type);
                vegetableInstore.quantity += quantity;
                if (price > vegetableInstore.price) {
                    vegetableInstore.price = price;
                }
                continue;
            }
            let vegToAdd = {
                type: type,
                quantity: quantity,
                price: price
            }
            result.add(type);
            this.availableProducts.push(vegToAdd);
        }
        return 'Successfully added ' + Array.from(result).join(', ');
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let vegetable of selectedProducts) {
            let [type, quantity] = vegetable.split(' ');
            quantity = Number(quantity);
            let vegInStore = this.availableProducts.find(v => v.type === type);
            if (!vegInStore) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if (vegInStore.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            let priceToPay = vegInStore.price * quantity;
            vegInStore.quantity -= quantity;
            totalPrice += priceToPay;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let vegInStore = this.availableProducts.find(v => v.type === type);
        if (!vegInStore) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (quantity > vegInStore.quantity) {
            vegInStore.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }
        vegInStore.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        let result = [];
        result.push("Available vegetables:");
        this.availableProducts.sort((a, b) => a.price - b.price)
        .forEach(v => result.push(`${v.type}-${v.quantity}-$${v.price}`));
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n');
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
//  console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
//  console.log(vegStore.buyingVegetables(["Okra 1"]));
//  console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
//  console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
