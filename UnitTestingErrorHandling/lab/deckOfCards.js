function printDeckOfCards(cards) {
    let cardsToPrint = [];
    createCard();
    function createCard (){
       for (let card of cards) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = ['S', 'H', 'D', 'C'];
        let face = card.substring(0, card.length - 1);
        let suit = card.substring(card.length - 1);
        let validFace = validFaces.includes(face);
        let validSuit = validSuits.includes(suit);
        if (!validFace || !validSuit) {
            console.log(`Invalid card: ${card}`);
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
        cardsToPrint.push(cardObj);
       } 
    }
    console.log(cardsToPrint.join(' '));
  }

  printDeckOfCards(['AS', '10D', 'KH', '2C']);
  printDeckOfCards(['5S', '3D', 'QD', '1C']);
  