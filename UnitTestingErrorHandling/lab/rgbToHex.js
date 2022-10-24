function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)){
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)){
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

let assert = require('assert');

describe('red invalid', function () {
    it('should return undefined when we pass non-integer', function () {
        assert.equal(rgbToHexColor('1', 10, 10), undefined);
    });
});
describe('red invalid', function () {
    it('should return undefined when we pass non-integer', function () {
        assert.equal(rgbToHexColor(1.2, 10, 10), undefined);
    });
});
describe('red invalid', function () {
    it('should return undefined when we pass less than zero', function () {
        assert.equal(rgbToHexColor(-1, 10, 10), undefined);
    });
});
describe('red invalid', function () {
    it('should return undefined when we pass greater than 255', function () {
        assert.equal(rgbToHexColor(256, 10, 10), undefined);
    });
});
describe('green invalid', function () {
    it('should return undefined when we pass non-integer', function () {
        assert.equal(rgbToHexColor(10, '10', 10), undefined);
    });
});
describe('green invalid', function () {
    it('should return undefined when we pass non-integer', function () {
        assert.equal(rgbToHexColor(10, 1.2, 10), undefined);
    });
});
describe('green invalid', function () {
    it('should return undefined when we pass less than zero', function () {
        assert.equal(rgbToHexColor(10, -1, 10), undefined);
    });
});
describe('green invalid', function () {
    it('should return undefined when we pass greater than 255', function () {
        assert.equal(rgbToHexColor(10, 256, 10), undefined);
    });
});
describe('blue invalid', function () {
    it('should return undefined when we pass non-integer', function () {
        assert.equal(rgbToHexColor(10, 10, '10'), undefined);
    });
});
describe('blue invalid', function () {
    it('should return undefined when we pass non-integer', function () {
        assert.equal(rgbToHexColor(10, 10, 1.2), undefined);
    });
});
describe('blue invalid', function () {
    it('should return undefined when we pass less than zero', function () {
        assert.equal(rgbToHexColor(10, 10, -10), undefined);
    });
});
describe('blue invalid', function () {
    it('should return undefined when we pass greater than 255', function () {
        assert.equal(rgbToHexColor(10, 10, 256), undefined);
    });
});
describe('everything is fine', function () {
    it('should return hex value when we pass true values', function () {
        assert.equal(rgbToHexColor(10, 10, 10), '#0A0A0A');
    });
});
describe('everything is fine', function () {
    it('should return hex value when we pass true values', function () {
        assert.equal(rgbToHexColor(255, 158, 170), '#FF9EAA');
    });
});

describe('everything is fine', function () {
    it('should return hex value when we pass true values', function () {
        assert.equal(rgbToHexColor(0, 0, 0, 0), '#000000');
    });
});