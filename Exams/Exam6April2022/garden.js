class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }
        let plantObj = {
            plantName: plantName,
            spaceRequired: spaceRequired,
            ripe: false,
            quantity: 0
        }
        this.plants.push(plantObj);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let desiredArr = this.plants.filter(e => e.plantName === plantName);
        if (desiredArr.length === 0) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (desiredArr[0] && desiredArr[0].ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        desiredArr[0].ripe = true;
        desiredArr[0].quantity += quantity;
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }
        return `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName) {
        let desiredArr = this.plants.filter(e => e.plantName === plantName);
        if (desiredArr.length === 0) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (desiredArr[0].ripe === false) {
            throw new CustomError(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        let index = this.plants.indexOf(desiredArr[0]);
        this.plants.splice(index, 1);
        this.spaceAvailable += desiredArr[0].spaceRequired;
        delete desiredArr[0].spaceRequired;
        delete desiredArr[0].ripe;
        this.storage.push(desiredArr[0]);
        
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let result = '';
        result += `The garden has ${this.spaceAvailable} free space left.\n`;
        result += 'Plants in the garden: ';
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
        .forEach((p, i, arr) => {
            if (i < arr.length - 1) {
                result += p.plantName + ', ';
            } else {
                result += p.plantName + '\n';
            }
        })
        if (this.storage.length === 0) {
            result += "Plants in storage: The storage is empty.";
        } else {
            result += 'Plants in storage: ';
            this.storage.forEach((p, i, arr) => {
                if (i < arr.length - 1) {
                    result += `${p.plantName} (${p.quantity}), `;
                } else {
                    result += `${p.plantName} (${p.quantity})`
                }
            });
        }
        return result;
    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('orange'));
// console.log(myGarden.generateReport());
