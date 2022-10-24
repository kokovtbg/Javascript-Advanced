function calorie(array) {
    let object = {};
    let property;
    array.forEach((e, i) => {
        if (i % 2 === 0) {
            property = e;
            object[property] = null;
        } else {
            object[property] = Number(e);
        }
    });
    console.log(object);
}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
