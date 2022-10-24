function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let assert = require('assert');

describe('return undefined', function () {
    it('should return undefined when we pass non-string as first param', function () {
        let result = lookupChar(1, 1);
        assert.equal(result, undefined);
    });
});
describe('return undefined', function () {
    it('should return undefined when we pass non-number as second param', function () {
        let result = lookupChar('abcf', '4');
        assert.equal(result, undefined);
    });
});
describe('return undefined', function () {
    it('should return undefined when we pass double as second param', function () {
        let result = lookupChar('abcf', 1.2);
        assert.equal(result, undefined);
    });
});
describe('return incorrect index', function () {
    it('should return incorrect index when we pass index greater than length', function () {
        let result = lookupChar('abcf', 4);
        assert.equal(result, "Incorrect index");
    });
});
describe('return incorrect index', function () {
    it('should return incorrect index when we pass index negative', function () {
        let result = lookupChar('abcf', -1);
        assert.equal(result, "Incorrect index");
    });
});
describe('return correct index', function () {
    it('should return correct index when we pass true values', function () {
        let result = lookupChar('abcf', 1);
        assert.equal(result, "b");
    });
});