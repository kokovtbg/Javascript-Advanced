function solution() {
    let initString = '';

    return {
        append: function(string) {
            initString += string;
        },
        removeStart: function(n) {
            initString = initString.substring(n);
        },
        removeEnd: function(n) {
            initString = initString.substring(0, initString.length - n);
        },
        print: function() {
            console.log(initString);
        }
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
