function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let assert = require('assert');

describe('return undefined', function () {
    it('should return undefined when we pass non-string', function () {
        let result = isOddOrEven(1);
        assert.equal(result, undefined);
    });
});
describe('return odd', function () {
    it('should return odd when we pass string with odd length', function () {
        let result = isOddOrEven('abc');
        assert.equal(result, 'odd');
    });
});
describe('return even', function () {
    it('should return evn when we pass string with even length', function () {
        let result = isOddOrEven('abcd');
        assert.equal(result, 'even');
    });
});