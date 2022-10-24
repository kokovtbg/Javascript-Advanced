let assert = require('assert');
const ChristmasMovies = require('./02.ChristmasMovies');

describe('buyMovie', () => {
    it('should return right message when movie bought', () => {
        let movies = new ChristmasMovies();
        assert.equal(movies.movieCollection.length, 0);
        let result = movies.buyMovie('Godfather', ['Marlon Brando', 'Al Pacino']);
        assert.equal(movies.movieCollection.length, 1);
        let expected = `You just got Godfather to your collection in which Marlon Brando, Al Pacino are taking part!`;
        assert.equal(result, expected)
    })
    it('should throw when movie exists', () => {
        let movies = new ChristmasMovies();
        movies.buyMovie('Godfather', ['Marlon Brando', 'Al Pacino']);
        let expected = /You already own Godfather in your collection!/;
        assert.throws(() => movies.buyMovie('Godfather', ['Marlon Brando', 'Al Pacino']), expected);
    })
})

describe('discardMovie', () => {
    it('should throw when movie not in collection', () => {
        let movies = new ChristmasMovies();
        assert.throws(() => movies.discardMovie('Godfather'));
    })
    it('should return right message when movie is watched', () => {
        let movies = new ChristmasMovies();
        movies.buyMovie('Godfather', ['Marlon Brando', 'Al Pacino']);
        movies.watched['Godfather'] = 1;
        assert.equal(movies.watched['Godfather'], 1);
        assert.equal(movies.movieCollection.length, 1);
        let result = movies.discardMovie('Godfather');
        assert.equal(movies['Godfather'], undefined);
        assert.equal(movies.movieCollection.length, 0);
        let expected = `You just threw away Godfather!`;
        assert.equal(result, expected);
    })
    it('should throw when movie is not watched yet', () => {
        let movies = new ChristmasMovies();
        movies.buyMovie('Godfather', ['Marlon Brando', 'Al Pacino']);
        assert.throws(() => movies.discardMovie('Godfather'));
    })
})
describe('watchMovie', () => {
    it('should add property to watched object when called for the first time and then increase it', () => {
        let movies = new ChristmasMovies();
        movies.buyMovie('Godfather', ['Marlon Brando', 'Al Pacino']);
        assert.equal(movies.watched['Godfather'], undefined);
        movies.watchMovie('Godfather');
        assert.equal(movies.watched['Godfather'], 1);
        movies.watchMovie('Godfather');
        assert.equal(movies.watched['Godfather'], 2);
    })
    it('should throw when movie not present', () => {
        let movies = new ChristmasMovies();
        assert.throws(() => movies.watchMovie('Godfather'));
    })
})
describe('favouriteMovie', () => {
    it('should return right message when watched movie', () => {
        let movies = new ChristmasMovies();
        movies.buyMovie('Godfather', ['Marlon Brando', 'Al Pacino']);
        movies.buyMovie('Homealone', ['Mccoly Colkin']);
        movies.watchMovie('Godfather');
        movies.watchMovie('Godfather');
        movies.watchMovie('Homealone');
        let result = movies.favouriteMovie();
        let expected = `Your favourite movie is Godfather and you have watched it 2 times!`
        assert.equal(result, expected);
    })
    it('should throw when movie not watched yet', () => {
        let movies = new ChristmasMovies();
        movies.buyMovie('Godfather', ['Marlon Brando', 'Al Pacino']);
        assert.throws(() => movies.favouriteMovie());
    })
})
describe('mostStarredActor', () => {
    it('should return right message when have bought movies', () => {
        let movies = new ChristmasMovies();
        movies.buyMovie('Godfather', ['Marlon Brando', 'Al Pacino']);
        movies.buyMovie('Heat', ['Al Pacino', 'Robert de Niro']);
        let result = movies.mostStarredActor();
        let expected = `The most starred actor is Al Pacino and starred in 2 movies!`;
        assert.equal(result, expected);
    })
    it('should throw when there are no movies', () => {
        let movies = new ChristmasMovies();
        assert.throws(() => movies.mostStarredActor());
    })
})