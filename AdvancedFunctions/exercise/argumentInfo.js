function solve(...params) {
    let array = [];
    params.forEach(e => {
        console.log(typeof e + ": " + e);
        let type = typeof e;
        if (array.filter(e => e.type === type).length === 0) {
            array.push({type: type, count: 1});
        } else {
            array.filter(e => e.type === type)[0].count++;
        }
        
    });
    array.sort((a, b) => b.count - a.count)
    .forEach(e => console.log(`${e.type} = ${e.count}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });
solve('abc', 10, function () { console.log('Hello world!'); }, 20, 'asd');