class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let setPlayers = new Set();
        footballPlayers.forEach(p => {
            let [name, age, playerValue] = p.split('/');
            let playerInArr = this.invitedPlayers.find(p => p.name === name);    
            if (playerInArr) {
                if (playerValue > playerInArr.playerValue) {
                    playerInArr.playerValue = playerValue;
                    setPlayers.add(name);
                }
            } else {
                let player = {
                    name: name,
                    age: age,
                    playerValue: playerValue
                }
                this.invitedPlayers.push(player);
                setPlayers.add(name);
            }
        });
        return `You successfully invite ${Array.from(setPlayers).join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        let player = this.invitedPlayers.find(p => p.name === name);
        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (playerOffer < player.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player.playerValue - playerOffer} million more are needed to sign the contract!`);
        }
        player.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let player = this.invitedPlayers.find(p => p.name === name);
        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (player.age < age) {
            let difference = age - player.age;
            if (difference < 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }
        return `${name} is above age limit!`;
    }

    transferWindowResult() {
        let result = [];
        result.push("Players list:");
        this.invitedPlayers
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(p => result.push(`Player ${p.name}-${p.playerValue}`));
        return result.join('\n');
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
//  console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
