function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}


let assert = require('assert');


describe('test value return undefined', function () {
    it('should return value when we call outer function', function () {
        assert.equal(createCalculator().value, undefined);
    });
});
describe('add function return sum', function () {
    it('should return sum when we call add function with number', function () {
        let calc = createCalculator();
        calc.add(1);
        assert.equal(calc.get(), 1);
    });
});
describe('add function return sum', function () {
    it('should return sum when we call add function with string', function () {
        let calc = createCalculator();
        calc.add('1');
        assert.equal(calc.get(), 1);
    });
});
describe('subtract function return subtract', function () {
    it('should return subtract when we call subtract function with number', function () {
        let calc = createCalculator();
        calc.subtract(1);
        assert.equal(calc.get(), -1);
    });
});
describe('subtract function return subtract', function () {
    it('should return subtract when we call subtract function with string', function () {
        let calc = createCalculator();
        calc.subtract('1');
        assert.equal(calc.get(), -1);
    });
});
describe('get function return value', function () {
    it('should return value when we call get function', function () {
        let calc = createCalculator();
        assert.equal(calc.get(), 0);
    });
});
describe('add function return sum', function () {
    it('should return sum when we call add function with double', function () {
        let calc = createCalculator();
        calc.add(1.2);
        assert.equal(calc.get(), 1.2);
    });
});
describe('subtract function return subtract', function () {
    it('should return subtract when we call subtract function with double', function () {
        let calc = createCalculator();
        calc.subtract(1.2);
        assert.equal(calc.get(), -1.2);
    });
});
describe('add and subtract function return value', function () {
    it('should return value when we call add and subtract function', function () {
        let calc = createCalculator();
        calc.add(4);
        calc.subtract(5);
        calc.add('4');
        calc.subtract('-1');
        assert.equal(calc.get(), 4);
    });
});
describe('add function return NaN', function () {
    it('should return NaN when we call add function with string which is non-number', function () {
        let calc = createCalculator();
        calc.add('abc');
        assert.equal(calc.get(), NaN);
    });
});
describe('subtract function return NaN', function () {
    it('should return NaN when we call subtract function with string which is non-number', function () {
        let calc = createCalculator();
        calc.subtract('abc');
        assert.equal(calc.get(), NaN);
    });
});