function sequence(n, k) {
    let array = [1];
    for (let i = 1; i < n; i++) {

        let element = 0;
        for (let j = k; j > 0; j--) {
            if (i - j >= 0) {
                element += array[i - j];
            } 
        }
        
        array.push(element);
    }
    return array;
}

sequence(6, 3);
sequence(8, 2);