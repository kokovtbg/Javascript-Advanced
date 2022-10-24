function store(array) {
    let sortedProducts = [];
    for (let element of array) {
        let splittedData = element.split(" : ");
        let productName = splittedData[0];
        let productPrice = splittedData[1];
        let objectProduct = {
            name: productName,
            price: productPrice
        }
        sortedProducts.push(objectProduct);
    }
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    let result = '';
    let letters = [];
    sortedProducts.forEach(e => {
        if (letters.includes(e.name.charAt(0))) {
            result += '  ' + e.name + ': ' + e.price + '\n';
        } else {
            letters.push(e.name.charAt(0));
            result += e.name.charAt(0) + '\n  ' + e.name + ': ' + e.price + '\n';
        }
    })
    console.log(result);
}

store(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);