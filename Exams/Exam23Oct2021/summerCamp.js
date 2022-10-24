class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        let participantInList = this.listOfParticipants.find(p => p.name === name);
        if (participantInList) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        let participant = {
            name: name,
            condition: condition,
            power: 100,
            wins: 0
        }
        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        let participant = this.listOfParticipants.find(p => p.name === name);
        if (!participant) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        let indexOfParticipant = this.listOfParticipants.indexOf(participant);
        this.listOfParticipants.splice(indexOfParticipant, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        switch(typeOfGame) {
            case 'WaterBalloonFights':
                let part1 = this.listOfParticipants.find(p => p.name === participant1);
                let part2 = this.listOfParticipants.find(p => p.name === participant2);
                if (!part1 || !part2) {
                    throw new Error(`Invalid entered name/s.`);
                }
                if (part1.condition !== part2.condition) {
                    throw new Error(`Choose players with equal condition.`);
                }
                if (part1.power > part2.power) {
                    part1.wins++;
                    return `The ${part1.name} is winner in the game ${typeOfGame}.`;
                } else if (part2.power > part1.power) {
                    part2.wins++;
                    return `The ${part2.name} is winner in the game ${typeOfGame}.`;
                } else {
                    return `There is no winner.`;
                }
            case 'Battleship':
                let part = this.listOfParticipants.find(p => p.name === participant1);
                if (!part) {
                    throw new Error(`Invalid entered name/s.`);
                }
                part.power += 20;
                return `The ${part.name} successfully completed the game ${typeOfGame}.`;

        }
    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        this.listOfParticipants.sort((a, b) => b.wins - a.wins)
        .forEach(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));
        return result.join('\n');
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// console.log(summerCamp.toString());
