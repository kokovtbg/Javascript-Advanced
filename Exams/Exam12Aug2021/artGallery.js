class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfarticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }
        let articleInGallery = this.listOfarticles.find(a => a.articleName === articleName 
            && a.articleModel === articleModel);
        if (articleInGallery) {
            articleInGallery.quantity++;
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        }
        let article = {
            articleModel: articleModel, 
            articleName: articleName, 
            quantity: quantity
        };
        this.listOfarticles.push(article);
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        let guestInList = this.guests.find(g => g.guestName === guestName);
        if (guestInList) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points;
        switch(personality) {
            case 'Vip':
                points = 500;
                break;
            case 'Middle':
                points = 250
                break;
            default:
                points = 50;
                break;
        }
        let guest = {
            guestName: guestName, 
            points: points, 
            purchaseArticle: 0
        };
        this.guests.push(guest);
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfarticles.find(a => a.articleModel === articleModel 
            && a.articleName === articleName);
        if (!article) {
            throw new Error("This article is not found.");
        }
        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        let guest = this.guests.find(g => g.guestName === guestName);
        if (!guest) {
            return "This guest is not invited.";
        }
        let requiredPoints = this.possibleArticles[article.articleModel]; 
        if (guest.points < requiredPoints) {
            return "You need to more points to purchase the article.";
        }
        guest.points -= requiredPoints;
        article.quantity--;
        guest.purchaseArticle++;
        return `${guestName} successfully purchased the article worth ${requiredPoints} points.`;
    }

    showGalleryInfo(criteria) {
        let result = [];
        switch(criteria) {
            case 'article':
                result.push("Articles information:");
                this.listOfarticles
                .forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));
                break;
            case 'guest':
                result.push("Guests information:");
                this.guests.forEach(g => result.push(`${g.guestName} - ${g.purchaseArticle}`));
                break;
        }
        return result.join('\n');
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// console.log(artGallery.listOfarticles);

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
