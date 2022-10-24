function circleArea(a) {
    let typeOfA = typeof a;
    if(typeOfA != "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfA}.`);
        return;
    }
    let area = Math.PI * a * a;
    console.log(area.toFixed(2));
}

circleArea("name");