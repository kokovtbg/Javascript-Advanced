function printArr(array, n) {
    return array.filter(function(e, i) {
        if (i % n === 0) {
            return e;
        }
    });
}

printArr(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);