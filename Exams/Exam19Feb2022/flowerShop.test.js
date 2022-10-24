let assert = require('assert');
const flowerShop = require('./flowerShop');

describe('calcPriceOfFlowers', () => {
    it('should throw when type of flower not string', () => {
        assert.throws(() => flowerShop.calcPriceOfFlowers(100, 100, 100));
    })
    it('should throw when price not integer', () => {
        assert.throws(() => flowerShop.calcPriceOfFlowers('rose', 10.1, 100));
    })
    it('should throw when quantity not integer', () => {
        assert.throws(() => flowerShop.calcPriceOfFlowers('rose', 10, 10.1));
    })
    it('should return right message for true parameters', () => {
        let result = flowerShop.calcPriceOfFlowers('rose', 10, 10);
        assert.equal(result, `You need $100.00 to buy rose!`);
    })
})
describe('checkFlowersAvailable', () => {
    it('should return right message when flower found in garden', () => {
        let result = flowerShop.checkFlowersAvailable('rose', ['rose', 'tulip']);
        assert.equal(result, `The rose are available!`);
    })
    it('should return right message when flower not found in garden', () => {
        let result = flowerShop.checkFlowersAvailable('rose', ['tulip']);
        assert.equal(result, `The rose are sold! You need to purchase more!`);
    })
})
describe('sellFlowers', () => {
    it('should throw when garden is not an array', () => {
        assert.throws(() => flowerShop.sellFlowers('rose', 10));
    })
    it('should throw when space is not an integer', () => {
        assert.throws(() => flowerShop.sellFlowers(['rose'], 1.1));
    })
    it('should throw when space negative', () => {
        assert.throws(() => flowerShop.sellFlowers(['rose'], -10));
    })
    it('should throw when space >= gardenArr.length', () => {
        assert.throws(() => flowerShop.sellFlowers(['rose'], 2));
    })
    it('should return right array when all is fine', () => {
        let result = flowerShop.sellFlowers(['rose', 'tulip'], 1);
        assert.equal(result, 'rose')
    })
})