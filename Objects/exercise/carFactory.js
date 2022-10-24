function factory(requirements) {
    let car = {};
    car.model = requirements.model;
    let smallEngine = {
        power: 90,
        volume: 1800
    }
    let normalEngine = {
        power: 120,
        volume: 2400
    } 
    let monsterEngine = {
        power: 200,
        volume: 3500
    }
    if (requirements.power <= 90) {
        car.engine = smallEngine;
    } else if (requirements.power <= 120) {
        car.engine = normalEngine;
    } else {
        car.engine = monsterEngine;
    }
    switch (requirements.carriage) {
        case 'hatchback':
            car.carriage = {
                type: 'hatchback',
                color: requirements.color
            }
            break;
        case 'coupe':
            car.carriage = {
                type: 'coupe',
                color: requirements.color
            }
            break; 
    }
    car.wheels = [];
    let count = 1;
    while (count <= 4) {
        let wheelsize = requirements.wheelsize % 2 === 0 ? 
        requirements.wheelsize - 1 : requirements.wheelsize;
        car.wheels.push(wheelsize);
        count++;
    }
    return car;
}

console.log(factory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));
console.log(factory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));