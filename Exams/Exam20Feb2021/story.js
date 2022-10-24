class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (this.creator === username) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        this._likes = this._likes.filter(u => u !== username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (id === undefined || !this._comments.find(c => c.id === id)) {
            let comment = {
                id: this._comments.length + 1,
                username: username,
                content: content,
                replies: []
            }
            this._comments.push(comment);
            return `${username} commented on ${this.title}`;
        }
        let commentToBeReplied = this._comments.find(c => c.id === id);
        let reply = {
            id: commentToBeReplied.id + '.' + (commentToBeReplied.replies.length + 1),
            username: username,
            content: content
        }
        commentToBeReplied.replies.push(reply);
        return "You replied successfully";
    }

    toString(sortingType) {
        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push(`Comments:`);
        switch (sortingType) {
            case 'asc':
                this._comments.sort((a, b) => a.id - b.id)
                    .forEach(c => {
                        result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
                        c.replies.sort((a, b) => a.id.localeCompare(b.id))
                            .forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`));
                    });
                break;
            case 'desc':
                this._comments.sort((a, b) => b.id - a.id)
                    .forEach(c => {
                        result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
                        c.replies.sort((a, b) => b.id.localeCompare(a.id))
                            .forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`));
                    });
                break;
            case 'username':
                this._comments.sort((a, b) => a.username.localeCompare(b.username))
                    .forEach(c => {
                        result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
                        c.replies.sort((a, b) => a.username.localeCompare(b.username))
                            .forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`));
                    });
                break;
        }
        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

