let assert = require('assert');
const PaymentPackage = require('./paymentPackage');


describe('test constructor', () => {
    it('should return right values', () => {
        let package = new PaymentPackage('Nikola', 100);
        assert.equal(package._name, 'Nikola');
        assert.equal(package._value, 100);
        assert.equal(package._VAT, 20);
        assert.equal(package._active, true);
    })
})
describe('set name', () => {
    it('should throw when type not string', () => {
        try {
            new PaymentPackage(100, 100)
        } catch (err) {
            assert.equal(err.message, 'Name must be a non-empty string');
        }
    })
    it('should throw when name empty string', () => {
        try {
            new PaymentPackage('', 100)
        } catch (err) {
            assert.equal(err.message, 'Name must be a non-empty string');
        }
    })
    it('should return right when name is real', () => {
        let package = new PaymentPackage('Nikola', 100);
        let name = package.name;
        assert.equal(name, 'Nikola');
    })
})
describe('set value', () => {
    it('should throw when type not number', () => {
        try {
            new PaymentPackage('Nikola', '100');
        } catch (err) {
            assert.equal(err.message, 'Value must be a non-negative number');
        }
    })
    it('should throw when value negative', () => {
        try {
            new PaymentPackage('Nikola', -100)
        } catch (err) {
            assert.equal(err.message, 'Value must be a non-negative number');
        }
    })
    it('should return right when value is what we need', () => {
        let package = new PaymentPackage('Nikola', 100);
        let value = package.value;
        assert.equal(value, 100);
    })
    it('should return right when value is zero', () => {
        let package = new PaymentPackage('Nikola', 100);
        package.value = 0;
        assert.equal(package.value, 0);
    })
})
describe('set VAT', () => {
    it('should throw when type not number', () => {
        try {
            let package = new PaymentPackage('Nikola', 100);
            package.VAT = '100';
        } catch (err) {
            assert.equal(err.message, 'VAT must be a non-negative number');
        }
    })
    it('should throw when value negative', () => {
        try {
            let package = new PaymentPackage('Nikola', 100);
            package.VAT = -100;
        } catch (err) {
            assert.equal(err.message, 'VAT must be a non-negative number');
        }
    })
    it('should return right when value is what we need', () => {
        let package = new PaymentPackage('Nikola', 100);
        package.VAT = 100;
        assert.equal(package.VAT, 100);
    })
})
describe('set active', () => {
    it('should throw when type not boolean', () => {
        try {
            let package = new PaymentPackage('Nikola', 100);
            package.active = 'active';
        } catch (err) {
            assert.equal(err.message, 'Active status must be a boolean');
        }
    })
    it('should return right when value is what we need', () => {
        let package = new PaymentPackage('Nikola', 100);
        package.active = false;
        assert.equal(package.active, false);
    })
})
describe('toString test', () => {
    it('should return right with active profile', () => {
        let package = new PaymentPackage('Nikola', 100);
        let packToString = package.toString();
        assert.equal(packToString, 'Package: Nikola\n' + 
        '- Value (excl. VAT): 100\n' + '- Value (VAT 20%): 120')
    })
    it('should return right with inactive profile', () => {
        let package = new PaymentPackage('Nikola', 100);
        package.active = false;
        let packToString = package.toString();
        assert.equal(packToString, 'Package: Nikola (inactive)\n' + 
        '- Value (excl. VAT): 100\n' + '- Value (VAT 20%): 120')
    })
})