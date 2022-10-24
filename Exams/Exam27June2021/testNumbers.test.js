let assert = require('assert');
const testNumbers = require('./testNumbers');

describe('sumNumbers', () => {
    it('should return undefined when first argument not number', () => {
        let result = testNumbers.sumNumbers('1', 1);
        assert.equal(result, undefined);
        result = testNumbers.sumNumbers({}, 1);
        assert.equal(result, undefined);
    })
    it('should return undefined when second argument not number', () => {
        let result = testNumbers.sumNumbers(1, '1');
        assert.equal(result, undefined);
        result = testNumbers.sumNumbers(1, {});
        assert.equal(result, undefined);
    })
    it('should return right number when pass true arguments', () => {
        let result = testNumbers.sumNumbers(1, 1);
        assert.equal(result, 2.00);
        result = testNumbers.sumNumbers(1.1, 1.1);
        assert.equal(result, 2.20);
    })
})
describe('numberChecker', () => {
    it('should throw when input not a number', () => {
        assert.throws(() => testNumbers.numberChecker('string'));
    })
    it('should throw when input not a number', () => {
        assert.throws(() => testNumbers.numberChecker({}));
    })
    it('should return right message when argument number and num % 2 === 0', () => {
        let result = testNumbers.numberChecker(2);
        assert.equal(result, 'The number is even!');
    })
    it('should return right message when argument number and num % 2 !== 0', () => {
        let result = testNumbers.numberChecker(3);
        assert.equal(result, 'The number is odd!');
    })
})
describe('averageSumArray', () => {
    it('should return right number', () => {
        let result = testNumbers.averageSumArray([1,2,3]);
        assert.equal(result, 2);
    })
})