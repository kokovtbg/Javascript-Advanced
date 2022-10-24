let assert = require('assert');
const exp = require('constants');
const chooseYourCar = require('./chooseYourCar');

describe('choosingType', () => {
    it('should throw when year < 1900', () => {
        assert.throws(() => chooseYourCar.choosingType('bus', 'red', 1889));
    })
    it('should throw when year > 2022', () => {
        assert.throws(() => chooseYourCar.choosingType('bus', 'red', 2023));
    })
    it('should return right message when type Sedan and year >= 2010', () => {
        let result = chooseYourCar.choosingType('Sedan', 'red', 2010);
        let expected = `This red Sedan meets the requirements, that you have.`;
        assert.equal(result, expected);
        result = chooseYourCar.choosingType('Sedan', 'red', 2020);
        assert.equal(result, expected);
    })
    it('should return right message when type Sedan and year < 2010', () => {
        let result = chooseYourCar.choosingType('Sedan', 'red', 2009);
        let expected = `This Sedan is too old for you, especially with that red color.`;
        assert.equal(result, expected);
        result = chooseYourCar.choosingType('Sedan', 'red', 1999);
        assert.equal(result, expected);
    })
    it('should throw when type not Sedan', () => {
        assert.throws(() => chooseYourCar.choosingType('bus', 'red', 2020));
    })
})
describe('brandName', () => {
    it('should throw when brands is not an array', () => {
        assert.throws(() => chooseYourCar.brandName('Audi', 0));
    })
    it('should throw when brandIndex not Integer', () => {
        assert.throws(() => chooseYourCar.brandName(['Audi', 'BMW'], 1.1));
    })
    it('should throw when brandIndex < 0', () => {
        assert.throws(() => chooseYourCar.brandName(['Audi', 'BMW'], -1));
    })
    it('should throw when brandIndex >= brands.length', () => {
        assert.throws(() => chooseYourCar.brandName(['Audi', 'BMW'], 2));
    })
    it('should return right message', () => {
        let result = chooseYourCar.brandName(['Audi', 'BMW'], 1);
        let expected = 'Audi';
        assert.equal(result, expected);
        result = chooseYourCar.brandName(['Audi', 'BMW', 'Lada'], 1);
        expected = 'Audi, Lada';
        assert.equal(result, expected);
    })
})
describe('carFuelConsumption', () => {
    it('should throw when distanceInKilometers not number', () => {
        assert.throws(() => chooseYourCar.carFuelConsumption('10', 10));
    })
    it('should throw when distanceInKilometers <= 0', () => {
        assert.throws(() => chooseYourCar.carFuelConsumption(0, 10));
        assert.throws(() => chooseYourCar.carFuelConsumption(-10, 10));
    })
    
    it('should throw when consumptedFuelInLiters not number', () => {
        assert.throws(() => chooseYourCar.carFuelConsumption(10, '10'));
    })
    it('should throw when consumptedFuelInLiters <= 0', () => {
        assert.throws(() => chooseYourCar.carFuelConsumption(10, 0));
        assert.throws(() => chooseYourCar.carFuelConsumption(10, -10));
    })

    it('should return right message litersPerHundredKm <= 7', () => {
        let result = chooseYourCar.carFuelConsumption(100, 7);
        let expected = `The car is efficient enough, it burns 7.00 liters/100 km.`;
        assert.equal(result, expected);
        result = chooseYourCar.carFuelConsumption(100, 6);
        expected = `The car is efficient enough, it burns 6.00 liters/100 km.`;
        assert.equal(result, expected);  
    })
    it('should return right message when litersPerHundredKm > 7', () => {
        let result = chooseYourCar.carFuelConsumption(10, 7);
        let expected = `The car burns too much fuel - 70.00 liters!`;
        assert.equal(result, expected);
    })
})
