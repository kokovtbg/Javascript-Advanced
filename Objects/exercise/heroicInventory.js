function heroic(array) {
    let heroicArray = [];
    for (data of array) {
        let splittedData = data.split(" / ");
        let heroName = splittedData[0];
        let heroLevel = Number(splittedData[1]);
        let items = splittedData[2] ? splittedData[2].split(", ") : [];
        let heroObject = {
            name: heroName,
            level: heroLevel,
            items: items
        }
        heroicArray.push(heroObject);
    }
    console.log(JSON.stringify(heroicArray));
}

heroic(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);

heroic(['Jake / 1000 / Gauss, HolidayGrenade']);

heroic(['Jake / 1000']);;