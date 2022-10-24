function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

let assert = require('assert');

describe('false when non-array', function () {
    it('should return false when we pass non-array', function () {
        assert.equal(isSymmetric(1, 2), false);
    });
});

describe('false when non-array', function () {
    it('should return false when we pass non-array', function () {
        assert.equal(isSymmetric([1, 2], 2), false);
    });
});

describe('true when array symmetric', function () {
    it('should return true when we pass symmetric array', function () {
        assert.equal(isSymmetric([1, 1]), true);
    });
});

describe('true when array symmetric', function () {
    it('should return true when we pass symmetric array', function () {
        assert.equal(isSymmetric([1, 1, 1]), true);
    });
});

describe('false when array non-symmetric', function () {
    it('should return false when we pass non-symmetric array', function () {
        assert.equal(isSymmetric([1, 2]), false);
    });
});

describe('false when array non-symmetric', function () {
    it('should return false when we pass non-symmetric array', function () {
        assert.equal(isSymmetric([1, 2, 3]), false);
    });
});

describe('true when array symmetric', function () {
    it('should return true when we pass symmetric array', function () {
        assert.equal(isSymmetric(["pesho", new Date(2016, 8, 15), false, new Date(2016, 8, 15), "pesho"]), true);
    });
});