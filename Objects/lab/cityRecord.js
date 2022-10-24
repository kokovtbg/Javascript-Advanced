function city(name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury
    };
    return city;
}

console.log(city('Tortuga', 7000, 15000));