function solve(array) {
    let brandModel = new Map();
    array.forEach(e => {
        let [brand, model, quantity] = e.split(' \| ');
        quantity = Number(quantity);
        if (!brandModel.has(brand)) {
            brandModel.set(brand, new Map());
        }
        if (!brandModel.get(brand).has(model)) {
            brandModel.get(brand).set(model, 0);
        }
        brandModel.get(brand).set(model, brandModel.get(brand).get(model) + quantity);

    });
    let result = '';
    brandModel.forEach((v, k) => {
        result += `${k}\n`;
        v.forEach((v1, k1) => {
            result += `###${k1} -> ${v1}\n`;
        })
    });
    console.log(result);
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);