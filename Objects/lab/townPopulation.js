function townPopulation(array) {
    let towns = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let townName = element.split(/ <-> /)[0];
        let population = element.split(/ <-> /)[1];
        
        let city = {
            townName: townName,
            population: Number(population)
        };
        
        if (towns.length === 0) {
            towns.push(city);
            continue;
        }
        for (let j = 0; j < towns.length; j++) {
            const element = towns[j];
            if (element.townName === city.townName) {
                element.population += city.population;
                break;
            } else {
                towns.push(city);
                break;
            }
        }
    }
    towns.forEach(e => console.log(e.townName + " : " + e.population));
    
}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)