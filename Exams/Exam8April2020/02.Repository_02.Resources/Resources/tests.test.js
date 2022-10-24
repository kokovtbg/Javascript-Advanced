let { Repository } = require("./solution.js");
let assert = require('assert');

describe("get count", function () {
    it("returns data size", function () {
        let repo = new Repository('name');
        assert.equal(repo.count, 0);
    });
});
describe('add', () => {
    it('should throw when !entity.hasOwnProperty', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        assert.throws(() => repo.add({age: 20}));
    })
    it('should throw when entity property is of different type', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        assert.throws(() => repo.add({name: 20, age: 20}));
    })
    it('should throw when entity property is of different type', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        assert.throws(() => repo.add({name: 'Ivan', age: '29'}));
    })
    it('should return right id when added successfully', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        let result = repo.add({name: 'Nikola', age: 20});
        assert.equal(result, 0);
    })
});
describe('getId', () => {
    it('should throw when id is not in database', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        assert.throws(() => repo.getId(1));
    })
    it('should return entity when id is present', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        repo.add({name: 'Nikola', age: 20});
        let resultName = repo.getId(0).name;
        let resultAge = repo.getId(0).age;
        assert.equal(resultName, 'Nikola');
        assert.equal(resultAge, 20);
    })
})
describe('update', () => {
    it('should throw when id is not present', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        assert.throws(() => repo.update(1, {name: 'Nikola', age: 20}))
    })

    it('should throw when !entity.hasOwnProperty', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        repo.add({name: 'Ivan', age: 20});
        assert.throws(() => repo.update(0, {age: 20}));
    })
    it('should throw when entity property is of different type', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        repo.add({name: 'Ivan', age: 20});
        assert.throws(() => repo.update(0, {name: 20, age: 20}));
    })
    it('should throw when entity property is of different type', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        repo.add({name: 'Ivan', age: 20});
        assert.throws(() => repo.update(0, {name: 'Ivan', age: '29'}));
    })


    it('should update when id exists', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        repo.add({name: 'Nikola', age: 20});
        let resultName = repo.getId(0).name;
        let resultAge = repo.getId(0).age;
        assert.equal(resultName, 'Nikola');
        assert.equal(resultAge, 20);
        repo.update(0, {name: 'Ivan', age: 30});
        resultName = repo.getId(0).name;
        resultAge = repo.getId(0).age;
        assert.equal(resultAge, 30);
        assert.equal(resultName, 'Ivan');
    })
})
describe('del', () => {
    it('should throw when id not present', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        assert.throws(() => repo.del(0));
    })
    it('should delete', () => {
        let repo = new Repository({name: 'string', age: 'number'});
        repo.add({name: 'Nikola', age: 20});
        assert.equal(repo.count, 1);
        repo.del(0);
        assert.equal(repo.count, 0);
    })
})