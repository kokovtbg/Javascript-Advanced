function agg(elements) {
    let sum = 0;
    let sum1 = 0;
    let concat = "";

    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        sum += element;
        sum1 += 1/element;
        concat += element.toString();
    }

    console.log(sum);
    console.log(sum1);
    console.log(concat);
}

agg([1, 2, 3]);
agg([2, 4, 8, 16]);