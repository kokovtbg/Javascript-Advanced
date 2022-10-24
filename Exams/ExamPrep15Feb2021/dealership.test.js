let assert = require('assert');
const dealership = require('./dealership');

describe('newCarCost', () => {
    it('returns right value when passed Audi A4 B8', () => {
        let result = dealership.newCarCost('Audi A4 B8', 30000);
        assert.equal(result, 15000);
    });
    it('returns right value when passed Audi A6 4K', () => {
        let result = dealership.newCarCost('Audi A6 4K', 30000);
        assert.equal(result, 10000);
    });
    it('returns right value when passed Audi A8 D5', () => {
        let result = dealership.newCarCost('Audi A8 D5', 30000);
        assert.equal(result, 5000);
    });
    it('returns right value when passed Audi TT 8J', () => {
        let result = dealership.newCarCost('Audi TT 8J', 30000);
        assert.equal(result, 16000);
    });
    it('returns right value when passed other than given models', () => {
        let result = dealership.newCarCost('Lada', 30000);
        assert.equal(result, 30000);
    });
})
describe('carEquipment', () => {
    it('should return right array', () => {
        let result = dealership.carEquipment(['alarm', 'tires', 'music'], [0]);
        assert.equal(result[0], 'alarm');
        assert.equal(result.length, 1);
    })
    it('should return right array', () => {
        let result = dealership.carEquipment(['alarm', 'tires', 'music'], [0, 1]);
        assert.equal(result[0], 'alarm');
        assert.equal(result[1], 'tires');
        assert.equal(result.length, 2);
    })
    it('should return right array', () => {
        let result = dealership.carEquipment(['alarm', 'tires', 'music'], [0, 1, 2]);
        assert.equal(result[0], 'alarm');
        assert.equal(result[1], 'tires');
        assert.equal(result[2], 'music')
        assert.equal(result.length, 3);
    })
})
describe('euroCategory', () => {
    it('should return right message when category >= 4', () => {
        let price = 15000;
        let expected = `We have added 5% discount to the final price: ${price - (price * 0.05)}.`;
        let result = dealership.euroCategory(5);
        assert.equal(result, expected);
    })
    it('should return right message when category >= 4', () => {
        let price = 15000;
        let expected = `We have added 5% discount to the final price: ${price - (price * 0.05)}.`;
        let result = dealership.euroCategory(4);
        assert.equal(result, expected);
    })
    it('should return right message when category < 4', () => {
        let expected = 'Your euro category is low, so there is no discount from the final price!';
        let result = dealership.euroCategory(3);
        assert.equal(result, expected);
    })
})