function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}

let assert = require('assert');

describe('sum', function () {
    it('should return 6 when we pass arr [1,2,3]', function () {
        assert.equal(sum([1, 2, 3]), 6);
    });
});
