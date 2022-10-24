function solution(string) {
    
    switch(string) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            let result = [];
            if (this.upvotes + this.downvotes > 50) {
                let upvotesToDisplay = this.upvotes;
                let downvotesToDisplay = this.downvotes;
                let numberToAdd;
                if (upvotesToDisplay > downvotesToDisplay) {
                    numberToAdd = Math.ceil(upvotesToDisplay * 0.25);
                } else {
                    numberToAdd = Math.ceil(downvotesToDisplay * 0.25);
                }
                upvotesToDisplay += numberToAdd;
                downvotesToDisplay += numberToAdd;
                result.push(upvotesToDisplay);
                result.push(downvotesToDisplay);
                result.push(upvotesToDisplay - downvotesToDisplay);
            } else {
                result.push(this.upvotes);
                result.push(this.downvotes);
                result.push(this.upvotes - this.downvotes);
            }
            let rating;
            let totalVotes = this.upvotes + this.downvotes;
            if (this.upvotes / totalVotes * 100 > 66 && totalVotes >= 10) {
                rating = 'hot';
            } else if (this.upvotes - this.downvotes >= 0 && totalVotes > 100) {
                rating = 'controversial';
            } else if (this.upvotes - this.downvotes < 0 && totalVotes >= 10) {
                rating = 'unpopular';
            } else {
                rating = 'new';
            }
            result.push(rating);
            return result;
    }

}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
console.log(score);