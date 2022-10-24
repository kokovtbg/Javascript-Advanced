function lowestPrice(array) {
    let productsCitiesPrices = [];
    
    for (const element of array) {
        let splittedData = element.split(' \| ');
        let town = splittedData[0];
        let product = splittedData[1];
        let price = Number(splittedData[2]);
        let object = {
            product: product,
            town: town,
            price: price
        }
        let index;
        let priceInList;
        let haveProduct = productsCitiesPrices.some((e, i) => {
            index = i;
            priceInList = e.price;
            return e.product === product;
        });
        if (haveProduct) {
            if (price < priceInList) {
                productsCitiesPrices.splice(index, 1, object);
            }
        } else {
            productsCitiesPrices.push(object);
        }
    
    }
    
    productsCitiesPrices.forEach(e => {
        console.log(`${e.product} -> ${e.price} (${e.town})`);
    });
}

lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);