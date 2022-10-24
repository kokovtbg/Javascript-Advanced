let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let assert = require('assert');

describe('addFive return undefined', function () {
    it('should return undefined when we pass non-number', function () {
        let result = mathEnforcer.addFive('5');
        assert.equal(result, undefined);
    });
});
describe('addFive return result', function () {
    it('should return result when we pass positive number', function () {
        let result = mathEnforcer.addFive(5);
        assert.equal(result, 10);
    });
});
describe('addFive return result', function () {
    it('should return result when we pass negative number', function () {
        let result = mathEnforcer.addFive(-5);
        assert.equal(result, 0);
    });
});
describe('addFive return result', function () {
    it('should return result when we pass floating point number', function () {
        let result = mathEnforcer.addFive(5.5);
        assert.equal(result, 10.5);
    });
});
describe('subtractTen return undefined', function () {
    it('should return undefined when we pass non-number', function () {
        let result = mathEnforcer.subtractTen('5');
        assert.equal(result, undefined);
    });
});
describe('subtractTen return result', function () {
    it('should return result when we pass positive number', function () {
        let result = mathEnforcer.subtractTen(5);
        assert.equal(result, -5);
    });
});
describe('subtractTen return result', function () {
    it('should return result when we pass negative number', function () {
        let result = mathEnforcer.subtractTen(-5);
        assert.equal(result, -15);
    });
});
describe('subtractTen return result', function () {
    it('should return result when we pass floating point number', function () {
        let result = mathEnforcer.subtractTen(5.5);
        assert.equal(result, -4.5);
    });
});
describe('sum return undefined', function () {
    it('should return undefined when we pass non-number as first param', function () {
        let result = mathEnforcer.sum('5', 5);
        assert.equal(result, undefined);
    });
});
describe('sum return undefined', function () {
    it('should return undefined when we pass non-number as second param', function () {
        let result = mathEnforcer.sum(5, '5');
        assert.equal(result, undefined);
    });
});
describe('sum return result', function () {
    it('should return result when we pass two positive numbers', function () {
        let result = mathEnforcer.sum(5, 5);
        assert.equal(result, 10);
    });
});
describe('sum return result', function () {
    it('should return result when we pass two negative numbers', function () {
        let result = mathEnforcer.sum(-5, -5);
        assert.equal(result, -10);
    });
});
describe('sum return result', function () {
    it('should return result when we pass two floating point numbers', function () {
        let result = mathEnforcer.sum(5.5, 5.5);
        assert.equal(result, 11);
    });
});