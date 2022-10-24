function construction(worker) {
    let weight = worker.weight;
    let experience = worker.experience;
    let levelOfHydrated = worker.levelOfHydrated;
    let dizziness = worker.dizziness;

    if (dizziness === true) {
        levelOfHydrated += 0.1 * weight * experience;
        dizziness = false;
        worker.levelOfHydrated = levelOfHydrated;
        worker.dizziness = false;
    }

    return worker;
}

console.log(construction({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
));
console.log(construction({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
));