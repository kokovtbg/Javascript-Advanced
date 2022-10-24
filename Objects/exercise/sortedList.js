function createSortedList() {
    let list = [];
    return {
        size: list.length,
        add: function(number) {
            list.push(number)
            list.sort((a, b) => a - b);
            this.size++;
        },
        remove: function(index) {
            if (index >= 0 && index < list.length) {
                this.size--;
                return Number(list.splice(index, 1));
            } else {
                throw 'Index invalid';
            }
        },
        get: function(index) {
            if (index >= 0 && index < list.length) {
                return Number(list.slice(index, index + 1).join(''));
            } else {
                throw 'Index invalid';
            }
        }
    }
}

let listA = createSortedList();
listA.add(5);
listA.add(6);
listA.add(7);
console.log(listA.get(1)); 
listA.remove(1);
console.log(listA.get(1));
console.log(listA.get(2));
listA.remove(3);
console.log(listA.size);
