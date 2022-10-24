function names(array) {
    array.sort((a, b) => a.localeCompare(b));
    let arrToPrint = [];
    for (let i = 0; i < array.length; i++) {
        arrToPrint.push(i + 1 + "." + array[i]);
    }
    console.log(arrToPrint.join("\n"));
}

names(["John", "Bob", "Christina", "Ema"]);
names(["Nikola", "Anastasia", "nikola", "koko", "Koko"]);