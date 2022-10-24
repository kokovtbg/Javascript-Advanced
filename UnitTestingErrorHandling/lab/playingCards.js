function cards(face, suit) {
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let validSuits = ['S', 'H', 'D', 'C'];
    let validFace = validFaces.includes(face);
    let validSuit = validSuits.includes(suit);
    if (!validFace || !validSuit) {
        throw new Error;
    }
    let suitChar;
    switch (suit) {
        case 'S':
            suitChar = '\u2660';
            break;
        case 'H':
            suitChar = '\u2665';
            break;
        case 'D':
            suitChar = '\u2666';
            break;
        case 'C':
            suitChar = '\u2663';
            break;
    }
    let cardObj = {
        suit: suitChar,
        face: face,
        toString: function() {
            return this.face + this.suit;
        } 
    }
    return cardObj.toString();
}

console.log(cards('A', 'S'));
console.log(cards('10', 'H'));
console.log(cards('1', 'C'));