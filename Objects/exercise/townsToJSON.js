function towns(array) {
    let towns = [];
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        let splittedData = element.split('\|');
        let town = splittedData[1].trim();
        let latitude = Number(Number(splittedData[2].trim()).toFixed(2));
        let longitude = Number(Number(splittedData[3].trim()).toFixed(2));
        let objectTown = {
            Town: town,
            Latitude: latitude,
            Longitude: longitude
        }
        towns.push(objectTown);
    }
    console.log(JSON.stringify(towns));
}

towns(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);

towns(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
);