let assert = require('assert');
const companyAdministration = require('./companyAdministration');

describe('hiringEmployee', () => {
    it('should return right message when position is Programmer and experience > 3', () => {
        let result = companyAdministration.hiringEmployee('Nikola', 'Programmer', 8);
        assert.equal(result, `Nikola was successfully hired for the position Programmer.`)
    })
    it('should return right message when position is Programmer and experience = 3', () => {
        let result = companyAdministration.hiringEmployee('Nikola', 'Programmer', 3);
        assert.equal(result, `Nikola was successfully hired for the position Programmer.`)
    })
    it('should return right message when position is Programmer and experience < 3', () => {
        let result = companyAdministration.hiringEmployee('Nikola', 'Programmer', 2);
        assert.equal(result, `Nikola is not approved for this position.`)
    })
    it('should throw when position not Programmer', () => {
        assert.throws(() => companyAdministration.hiringEmployee('Nikola', 'Marketing', 8));
    })
})
describe('calculateSalary', () => {
    it('should throw when type of hours not number', () => {
        assert.throws(() => companyAdministration.calculateSalary('10'));
    })
    it('should throw when hours negative', () => {
        assert.throws(() => companyAdministration.calculateSalary(-10));
    })
    it('should return rigth message when hours above 160', () => {
        let result = companyAdministration.calculateSalary(200);
        assert.equal(result, 4000);
    })
    it('should return rigth message when hours normal', () => {
        let result = companyAdministration.calculateSalary(100);
        assert.equal(result, 1500);
    })
    it('should return rigth message when hours normal and are double', () => {
        let result = companyAdministration.calculateSalary(10.5);
        assert.equal(result, 157.5);
    })
})
describe('firedEmployee', () => {
    it('should throw when employees argument not array', () => {
        assert.throws(() => companyAdministration.firedEmployee('Nikola', 1));
    })
    it('should throw when index argument not integer', () => {
        assert.throws(() => companyAdministration.firedEmployee(['Nikola'], 1.1));
    })
    it('should throw when index argument not integer', () => {
        assert.throws(() => companyAdministration.firedEmployee(['Nikola'], {}));
    })
    it('should throw when index argument negative', () => {
        assert.throws(() => companyAdministration.firedEmployee(['Nikola', 'Ivan'], -1));
    })
    it('should throw when index argument higher or equal to employees length', () => {
        assert.throws(() => companyAdministration.firedEmployee(['Nikola'], 1));
    })
    it('should return right when everything is fine', () => {
        let result = companyAdministration.firedEmployee(['Ivan', 'Georgi', 'Nikola'], 0);
        assert.equal(result, 'Georgi, Nikola');
    })
})