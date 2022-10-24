class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike");
        }
        let diff = this.resources - time * 10;
        if (diff < 0) {
            return "You don't have enough resources to complete the hike";
        }
        this.resources -= time * 10;
        let objHike = {
            peak: peak, 
            time: time, 
            difficultyevel: difficultyevel
        }
        this.listOfHikes.push(objHike);
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        this.resources += time * 10;
        if (this.resources > 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        return `You have rested for ${time} hours and gained ${time*10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }
        switch (criteria) {
            case 'hard':
                let bestHard = this.listOfHikes
                .filter(e => e.difficultyevel === 'hard')
                .sort((a, b) => b.time - a.time)[0];
                if (bestHard === undefined) {
                    return `${this.username} has not done any ${criteria} hiking yet`;
                }
                return `${this.username}'s best ${criteria} hike is ${bestHard.peak} peak, for ${bestHard.time} hours`;
            
            case 'easy':
                let bestEasy = this.listOfHikes
                .filter(e => e.difficultyevel === 'easy')
                .sort((a, b) => b.time - a.time)[0];
                if (bestEasy === undefined) {
                    return `${this.username} has not done any ${criteria} hiking yet`;
                }
                return `${this.username}'s best ${criteria} hike is ${bestEasy.peak} peak, for ${bestEasy.time} hours`;
            
            case 'all':
                let result = "All hiking records:\n";
                this.listOfHikes.forEach((e, i, arr) => {
                    if (i < arr.length - 1) {
                        result += `${this.username} hiked ${e.peak} for ${e.time} hours\n`;
                    } else {
                        result += `${this.username} hiked ${e.peak} for ${e.time} hours`;
                    }
                } );
                return result;
        }
    }
}

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.rest(4));
console.log(user.rest(5));
