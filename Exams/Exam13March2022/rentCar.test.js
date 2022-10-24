let assert = require('assert');
const { should } = require('chai');
const rentCar = require('./rentCar');

describe('searchCar', () => {
    it('should return right message when both arguments right and there is a match', () => {
        let result = rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'BMW');
        assert.equal(result, `There is 1 car of model BMW in the catalog!`);
    });
    it('should throw when both arguments right and there is no match', () => {
        assert.throws(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Lada'));
    });
    it('should throw when first argument not array', () => {
        assert.throws(() => rentCar.searchCar("Volkswagen", 'Lada'));
    });
    it('should throw when second argument not string', () => {
        assert.throws(() => rentCar.searchCar(["Volkswagen"], 10));
    });
})
describe('calculatePriceOfCar', () => {
    it('should return right message when both arguments right and model is in catalogue', () => {
        let result = rentCar.calculatePriceOfCar('Toyota', 10);
        assert.equal(result, `You choose Toyota and it will cost $400!`);
    });
    it('should throw when both arguments right and model is not in catalogue', () => {
        assert.throws(() => rentCar.calculatePriceOfCar('Lada', 10));
    });
    it('should throw when first argument not string', () => {
        assert.throws(() => rentCar.calculatePriceOfCar(100, 10));
    })
    it('should throw when second argument not integer', () => {
        assert.throws(() => rentCar.calculatePriceOfCar('Lada', 1.1));
    })
    it('should throw when second argument not number at all', () => {
        assert.throws(() => rentCar.calculatePriceOfCar('Lada', '10'));
    })
})
describe('checkBudget', () => {
    it('should throw when costPerDay not integer', () => {
        assert.throws(() => rentCar.checkBudget(1.1, 10, 10));
    })
    it('should throw when costPerDay not number at all', () => {
        assert.throws(() => rentCar.checkBudget('10', 10, 10));
    })
    it('should throw when days not integer', () => {
        assert.throws(() => rentCar.checkBudget(10, 1.1, 10));
    })
    it('should throw when days not number at all', () => {
        assert.throws(() => rentCar.checkBudget(10, '10', 10));
    })
    it('should throw when budget not integer', () => {
        assert.throws(() => rentCar.checkBudget(10, 11, 1.1));
    })
    it('should throw when budget not number at all', () => {
        assert.throws(() => rentCar.checkBudget(10, 11, '10'));
    })
    it('should return right message when all arguments right and cost <= budget', () => {
        let result = rentCar.checkBudget(10, 10, 200);
        assert.equal(result, `You rent a car!`)
    })
    it('should return right message when all arguments right and cost > budget', () => {
        let result = rentCar.checkBudget(10, 10, 50);
        assert.equal(result, 'You need a bigger budget!')
    })
})