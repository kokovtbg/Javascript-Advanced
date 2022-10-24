class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0; 
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || !Number.isInteger(horsepower) || horsepower < 0 
        || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }
        let car = {
            model: model,
            horsepower: horsepower,
            price: price,
            mileage: mileage
        }
        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    
    sellCar(model, desiredMileage) {
        let desiredArr = this.availableCars.filter(c => c.model === model);
        if (desiredArr.length === 0) {
            throw new Error(`${model} was not found!`);
        }
        let car = desiredArr[0];
        let soldPrice = 0;
        if (car.mileage <= desiredMileage) {
            soldPrice = car.price;
        } else if (car.mileage - desiredMileage <= 40000) {
            soldPrice = car.price * 0.95;
        } else {
            soldPrice = car.price * 0.9;
        }
        let indexCar = this.availableCars.indexOf(car);
        this.availableCars.splice(indexCar, 1);
        delete car.price;
        delete car.mileage;
        car.soldPrice = soldPrice;
        this.soldCars.push(car);
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    } 

    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars";
        }
        let result = "-Available cars:\n";
        this.availableCars.forEach((c, i, arr) => {
            if (i < arr.length - 1) {
                result += `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$\n`;
            } else {
                result += `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`;
            }
        })
        return result;
    }

    salesReport(criteria) {
        if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }
        let result = [];
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);
        switch(criteria) {
            case 'horsepower':
                this.soldCars.sort((a,b) => b.horsepower - a.horsepower)
                .forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));
                break;
            case 'model':
                this.soldCars.sort((a, b) => a.model.localeCompare(b.model))
                .forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`))
                break;
        }
        return result.join('\n');
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
