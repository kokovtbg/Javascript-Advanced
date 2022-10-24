function solve(array) {
    let objectArray = [];
    let commands = {
        create: (name) => {
            let object = {name: name, properties: []};
            objectArray.push(object);
        },
        createInherit: (name, parentName) => {
            let object = {name: name, parent: parentName, properties: []}
            objectArray.push(object);
        },
        set: (name, key, value) => {
            let object = objectArray.filter(e => e.name === name)[0];
            object.properties.push(key + ':' + value);
        },
        print: (name) => {
            let result = '';
            objectArray.filter(e => e.name === name).forEach(e => {
            result += e.properties.join(',');
            let parentName = e.parent;
            if (parentName) {
                
                if (result !== '') {
                    result += ',';
                }
                
                let parentObj = objectArray.filter(e => e.name === parentName)[0];
                
                result += parentObj.properties.join(',');

                let parentParentName = parentObj.parent;
                if (parentParentName) {
                    if (result !== '') {
                        result += ',';
                    }
                    let parentParentObj = objectArray.filter(e => e.name === parentParentName)[0];
                    result += parentParentObj.properties.join(',');
                }
                
            }
            console.log(result);
        })
        } 
    }
    for (let element of array) {
        let splittedData = element.split(' ');
        if (splittedData.length === 4 && splittedData[0] === 'create') {
            let name = splittedData[1];
            let parentName = splittedData[3];
            commands.createInherit(name, parentName);
            continue;
        }
        let operation = splittedData[0];
        
        switch (operation) {
            case 'create':
                let name = splittedData[1];
                commands.create(name);
                break;
            case 'set':
                let name1 = splittedData[1];
                let key = splittedData[2];
                let value = splittedData[3];
                commands.set(name1, key, value);
                break;
            case 'print':
                let name2 = splittedData[1];
                commands.print(name2);
                break;
        }
    }
}

// solve(['create c1',
// 'create c2 inherit c1',
// 'set c1 color red',
// 'set c2 model new',
// 'print c1',
// 'print c2']);

solve(['create pesho',
'create gosho inherit pesho',
'create stamat inherit gosho',
'set pesho rank number1',
'set gosho nick goshko',
'print stamat']);