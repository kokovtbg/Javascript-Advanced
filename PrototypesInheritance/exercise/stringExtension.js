(function solve() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str.trim() + ' ' + this.toString();
        }
        return this.toString();
    }
    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return this.toString() + ' ' + str.trim();
        }
        return this.toString();
    }
    String.prototype.isEmpty = function() {
        if (this.length === 0) {
            return true;
        }
        return false;
    }
    String.prototype.truncate = function(n) {
        if (this.length <= n) {
            return this.toString();
        }
        let arr = this.split(' ');
        if (arr.length !== 1) {
            let string = '';
            let arrFinal = [];
            for (let i = 0; i < arr.length; i++) {
                string += arr[i];
                let newString = string + '...';
                if (newString.length <= n) {
                    arrFinal.push(newString);
                }
                if (i < arr.length - 1) {
                    string += ' ';
                }
                
            }
            return arrFinal[arrFinal.length - 1] ? arrFinal[arrFinal.length - 1] 
            : this.substring(0, n - 3) + '...';
        }
        if (n < 4) {
            return '.'.repeat(n);
        }
        return this.substring(0, n - 3) + '...';
    }
    String.format = function(str, ...params) {
        let lastIndex = str.lastIndexOf('{');
        let lastNumber = Number(str.charAt(lastIndex + 1));
        let numberNeeded = lastNumber > params.length - 1 ? params.length - 1 : lastNumber;
        for (let i = 0; i <= numberNeeded; i++) {
            let index = str.indexOf(i) - 1;
            str = str.substring(0, index) + params[i] + str.substring(index + 3);
        }
        return str;
    }
})()


// let string = 'my string';
// string = string.ensureStart('my');
// console.log(string);
// string = string.ensureStart('hello');
// console.log(string);
// string = string.truncate(16);
// console.log(string);
// string = string.truncate(14);
// console.log(string);
// string = string.truncate(8);
// console.log(string);
// string = string.truncate(4);
// console.log(string);
// string = string.truncate(2);
// console.log(string);
// string = String.format('The {0} {1} fox',
//   'quick', 'brown');
// console.log(string);
// string = String.format('jumps {0} {1}',
//   'dog');
// console.log(string);

// let testString = 'the {0} brown {1} jumps over the {2} dog';
// testString = String.format(testString, 'quick', 'fox', 'lazy', 'bananas');
// console.log(testString);

let stringOne = 'Hello there';
stringOne = stringOne.truncate(5);
console.log(stringOne);