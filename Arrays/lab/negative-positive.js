function negPos(array) {
    let newArr = [];
    array.forEach(e => {
        if (e < 0) {
            newArr.unshift(e);
        } else {
            newArr.push(e);
        }
    })

    newArr.forEach(element => {
        console.log(element);
    });
}

negPos([7, -2, 8, 9]);
negPos([3, -2, 0, -1]);