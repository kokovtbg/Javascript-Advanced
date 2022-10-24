let assert = require('assert');
const carService = require('./03.CarService');

describe('isItExpensive', () => {
    it('should return right message for issue Engine', () => {
        let message = carService.isItExpensive('Engine');
        assert.equal(message, `The issue with the car is more severe and it will cost more money`);
    })
    it('should return right message for issue Transmission', () => {
        let message = carService.isItExpensive('Transmission');
        assert.equal(message, `The issue with the car is more severe and it will cost more money`);
    })
    it('should return right message for issue other than above', () => {
        let message = carService.isItExpensive('Glass');
        assert.equal(message, `The overall price will be a bit cheaper`);
    })
})
describe('discount', () => {
    it('should Throw when typeof numberOfParts !== number', () => {
        assert.throws(() => carService.discount('10', 10));
    })
    it('should Throw when typeof totalPrice !== number', () => {
        assert.throws(() => carService.discount(10, '10'));
    })
    it('should return right when numberOfParts > 2 && numberOfParts <= 7', () => {
        let result = carService.discount(3, 10);
        assert.equal(result, `Discount applied! You saved 1.5$`);
    })
    it('should return right when numberOfParts > 7', () => {
        let result = carService.discount(8, 10);
        assert.equal(result, `Discount applied! You saved 3$`);
    })
    it('should return right when numberOfParts <= 2', () => {
        let result = carService.discount(2, 10);
        assert.equal(result, "You cannot apply a discount");
    })
})
describe('partsToBuy', () => {
    it('should throw when partsCatalog not an array', () => {
        assert.throws(() => carService.partsToBuy(10,["blowoff valve", "injectors"]))
    })
    it('should throw when neededParts not an array', () => {
        assert.throws(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }],"blowoff valve", "injectors"))
    })
    it('should return right for true values of both arguments', () => {
        let result = carService.partsToBuy([{ part: "blowoff valve", price: 145 }], ["blowoff valve"]);
        assert.equal(result, 145);
    })
})