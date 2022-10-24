let assert = require('assert');
const cinema = require('./cinema');

describe('showMovies', () => {
    it('should return right message when array passed as argument have 0 length', () => {
        let result = cinema.showMovies([]);
        assert.equal(result, 'There are currently no movies to show.');
    })
    it('should return right message when array passed as argument have greater than 0 length', () => {
        let result = cinema.showMovies(['Godfather', 'Matrix']);
        assert.equal(result, 'Godfather, Matrix');
    })
})
describe('ticketPrice', () => {
    it('should return right price when projectionType exists in schedule', () => {
        let result = cinema.ticketPrice("Premiere");
        assert.equal(result, 12);
    })
    it('should return right price when projectionType exists in schedule', () => {
        let result = cinema.ticketPrice("Normal");
        assert.equal(result, 7.5);
    })
    it('should return right price when projectionType exists in schedule', () => {
        let result = cinema.ticketPrice("Discount");
        assert.equal(result, 5.5);
    })
    it('should throw when projectionType not existing in schedule', () => {
        assert.throws(() => cinema.ticketPrice("Something"));
    })
})
describe('swapSeatsInHall', () => {
    it('should return right message when firstPlace not integer', () => {
        let result = cinema.swapSeatsInHall('10', 20);
        assert.equal(result, "Unsuccessful change of seats in the hall.");
    })
    it('should return right message when firstPlace not integer', () => {
        let result = cinema.swapSeatsInHall(1.1, 20);
        assert.equal(result, "Unsuccessful change of seats in the hall.");
    })
    it('should return right message when firstPlace <= 0', () => {
        let result = cinema.swapSeatsInHall(-10, 20);
        assert.equal(result, "Unsuccessful change of seats in the hall.");
    })
    it('should return right message when firstPlace <= 0', () => {
        let result = cinema.swapSeatsInHall(0, 20);
        assert.equal(result, "Unsuccessful change of seats in the hall.");
    })
    it('should return right message when firstPlace > 20', () => {
        let result = cinema.swapSeatsInHall(30, 20);
        assert.equal(result, "Unsuccessful change of seats in the hall.");
    })
    it('should return right message when secondPlace not integer', () => {
        let result = cinema.swapSeatsInHall(10, '20');
        assert.equal(result, "Unsuccessful change of seats in the hall.");
    })
    it('should return right message when secondPlace not integer', () => {
        let result = cinema.swapSeatsInHall(10, 2.2);
        assert.equal(result, "Unsuccessful change of seats in the hall.");
    })
    it('should return right message when secondPlace <= 0', () => {
        let result = cinema.swapSeatsInHall(10, -20);
        assert.equal(result, "Unsuccessful change of seats in the hall.");
    })
    it('should return right message when secondPlace <= 0', () => {
        let result = cinema.swapSeatsInHall(10, 0);
        assert.equal(result, "Unsuccessful change of seats in the hall.");
    })
    it('should return right message when secondPlace > 20', () => {
        let result = cinema.swapSeatsInHall(10, 30);
        assert.equal(result, "Unsuccessful change of seats in the hall.");
    })
    it('should return right message when both places equal', () => {
        let result = cinema.swapSeatsInHall(10, 10);
        assert.equal(result, "Unsuccessful change of seats in the hall.");
    })
    it('should return right message when swap successful', () => {
        let result = cinema.swapSeatsInHall(10, 20);
        assert.equal(result, "Successful change of seats in the hall.");
    })
})