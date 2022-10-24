class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        if (!Number(element) && element !== 0) {
            return;
        }
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
    }
    remove(index) {
        if (index < 0 || index > this.size - 1) {
            return;
        }
        this.list.splice(index, 1);
        this.size--;
    }
    get(index) {
        return this.list[index];
    }
}

let list = new List();
for (let i = 0; i < 5; i++) {
    list.add(i);
}

list.remove(0);
console.log(list.size)