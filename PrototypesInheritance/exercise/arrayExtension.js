(function solve() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    }
    Array.prototype.skip = function(n) {
        if (typeof n !== 'number') {
            return;
        }
        return this.slice(n);
    }
    Array.prototype.take = function(n) {
        if (typeof n !== 'number') {
            return;
        }
        return this.slice(0, n);
    }
    Array.prototype.sum = function() {
        let sum = 0;
        this.forEach(e => sum += e);
        return sum;
    }
    Array.prototype.average = function() {
        let avg = 0;
        this.forEach(e => avg += e);
        avg /= this.length;
        return avg;
    }
})()
