let assert = require('assert');
const numberOperations = require('./numberOperations');

describe('powNumber', () => {
    it('should return true value when called', () => {
        let result = numberOperations.powNumber(2);
        assert.equal(result, 4);
    })
})
describe('numberChecker', () => {
    it('should throw when passed string instead number', () => {
        assert.throws(() => numberOperations.numberChecker('string'));
    })
    it('should return right message for number below 100', () => {
        let result = numberOperations.numberChecker(20);
        assert.equal(result, 'The number is lower than 100!');
    })
    it('should return right message when number equal to 100', () => {
        let result = numberOperations.numberChecker(100);
        assert.equal(result, 'The number is greater or equal to 100!');
    })
    it('should return right message when number greater than 100', () => {
        let result = numberOperations.numberChecker(101);
        assert.equal(result, 'The number is greater or equal to 100!');
    })
})
describe('sumArrays', () => {
    it('returns right array when called with first array smaller than second', () => {
        let resultArr = numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4]);
        assert.equal(resultArr[0], 2);
        assert.equal(resultArr[1], 4);
        assert.equal(resultArr[2], 6);
        assert.equal(resultArr[3], 4);
    })
    it('returns right array when called with first array greater than second', () => {
        let resultArr = numberOperations.sumArrays([1, 2, 3, 4], [1, 2, 3]);
        assert.equal(resultArr[0], 2);
        assert.equal(resultArr[1], 4);
        assert.equal(resultArr[2], 6);
        assert.equal(resultArr[3], 4);
    })
    it('returns right array when called with first array length equal to second arr length', () => {
        let resultArr = numberOperations.sumArrays([1, 2, 3, 4], [1, 2, 3, 4]);
        assert.equal(resultArr[0], 2);
        assert.equal(resultArr[1], 4);
        assert.equal(resultArr[2], 6);
        assert.equal(resultArr[3], 8);
    })
})