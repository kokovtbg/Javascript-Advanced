function solve(array) {
    let list = [];
    let commands = {
        add: (string) => list.push(string),
        remove: (string) => {
            while (list.indexOf(string) !== -1) {
                list.splice(list.indexOf(string), 1);
            }
        },
        print: () => console.log(list.join(',')) 
    };
    for (let element of array) {
        let [command, value] = element.split(' ');
        switch (command) {
            case 'add':
                commands.add(value);
                break;
            case 'remove':
                commands.remove(value);
                break;
            case 'print':
                commands.print();
                break;
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);