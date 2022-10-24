let assert = require('assert');
const library = require('./library');

describe('calcPriceOfBook', () => {
    it('should throw when nameOfBook !== string', () => {
        assert.throws(() => library.calcPriceOfBook(10, 1990));
    })
    it('should throw when year !== integer', () => {
        assert.throws(() => library.calcPriceOfBook('Godfather', 19.90));
    })
    it('should return right message when passed true arguuments and year <= 1980', () => {
        let result = library.calcPriceOfBook('Godfather', 1980);
        assert.equal(result, `Price of Godfather is 10.00`);
    })
    it('should return right message when passed true arguuments and year > 1980', () => {
        let result = library.calcPriceOfBook('Godfather', 1990);
        assert.equal(result, `Price of Godfather is 20.00`);
    })
})
describe('findBook', () => {
    it('should throw when bookArr is empty', () => {
        assert.throws(() => library.findBook([], 'Godfather'));
    })
    it('should return right messsage when book found', () => {
        let result = library.findBook(['Godfather'], 'Godfather');
        assert.equal(result, "We found the book you want.");
    })
    it('should return tight message when book not found', () => {
        let result = library.findBook(['Godfather'], 'Pod igoto');
        assert.equal(result, "The book you are looking for is not here!");
    })
})
describe('arrangeTheBooks', () => {
    it('should throw when countBooks not integer', () => {
        assert.throws(() => library.arrangeTheBooks(1.1));
    })
    it('should throw when countBooks < 0', () => {
        assert.throws(() => library.arrangeTheBooks(-1));
    })
    it('should return right message when availableSpace >= countBooks', () => {
        let result = library.arrangeTheBooks(20);
        assert.equal(result, "Great job, the books are arranged.");
    })
    it('should return right message when availableSpace >= countBooks', () => {
        let result = library.arrangeTheBooks(40);
        assert.equal(result, "Great job, the books are arranged.");
    })
    it('should return right message when availableSpace < countBooks', () => {
        let result = library.arrangeTheBooks(50);
        assert.equal(result, "Insufficient space, more shelves need to be purchased.");
    })
})