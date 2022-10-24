let assert = require('assert');
const bookSelection = require('./bookSelection');

describe('isGenreSuitable', () => {
    it('should return right message when age <= 12 and genre Thriller', () => {
        let result = bookSelection.isGenreSuitable('Thriller', 10);
        assert.equal(result, `Books with Thriller genre are not suitable for kids at 10 age`);
    })
    it('should return right message when age <= 12 and genre not Thriller nor Horror', () => {
        let result = bookSelection.isGenreSuitable('Drama', 10);
        assert.equal(result, `Those books are suitable`);
    })
    it('should return right message when age > 12 and genre random', () => {
        let result = bookSelection.isGenreSuitable('Drama', 13);
        assert.equal(result, `Those books are suitable`);
    })
})
describe('isItAffordable', () => {
    it('should throw when type of price not number', () => {
        assert.throws(() => bookSelection.isItAffordable('10', 10));
    });
    it('should throw when type of budget not number', () => {
        assert.throws(() => bookSelection.isItAffordable(10, '10'));
    });
    it('should return right message when budget less than price', () => {
        let result = bookSelection.isItAffordable(10, 5);
        assert.equal(result, "You don't have enough money");
    });
    it('should return right message when budget greater than price', () => {
        let result = bookSelection.isItAffordable(10, 15);
        assert.equal(result, `Book bought. You have 5$ left`);
    });
})
describe('suitableTitles', () => {
    it('should throw when first argument not array', () => {
        assert.throws(() => bookSelection.suitableTitles('Text', 'Text'));
    });
    it('should throw when second argument not string', () => {
        assert.throws(() => bookSelection.suitableTitles(['Text'], 10));
    });
    it('should return right title when arguments are what should be', () => {
        let result = bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller');
        assert.equal(result[0], "The Da Vinci Code");
    });
    it('should return empty array when arguments are what should be but there is no match', () => {
        let result = bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Horror" }], 'Thriller');
        assert.equal(result.length, 0);
    });
})