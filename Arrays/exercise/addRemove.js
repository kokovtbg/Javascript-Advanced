function addRemove(arrayCommands) {
    let array = [];
    let count = 0;
    for (let i = 0; i < arrayCommands.length; i++) {
        count++;
        if (arrayCommands[i] === 'add') {
            array.push(count);
        } else {
            array.pop(array.length - 1);
        }
    }
    array.length > 0 ? console.log(array.join('\n')) : console.log('Empty');
}

addRemove(['add', 
'add', 
'add', 
'add']
);
addRemove(['add', 
'add', 
'remove', 
'add', 
'add']
);
addRemove(['remove', 
'remove', 
'remove']
);