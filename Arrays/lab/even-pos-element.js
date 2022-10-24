function evenElement(array) {
    let thingToPrint = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (i % 2 == 0) {
            thingToPrint += array[i] + " ";
        }
    }
    console.log(thingToPrint);
}

evenElement(['20', '30', '40', '50', '60']);
evenElement(['5', '10']);