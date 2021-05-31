class Story {

    #comments;
    #likes;


    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.#comments = [];
        this.#likes = [];
    }

    get likes() {
        if (this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this.#likes.length === 1) {
            return `${this.#likes[0]} likes this story!`;
        } else {
            return `${this.#likes.shift()} and ${this.#likes.length} others like this story!`;
        }
    }

    like(username) {
        if (this.#likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        } else if (username === this.creator) {
            throw new Error('You can\'t like your own story!');
        } else {
            this.#likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if (!this.#likes.includes(username)) {
            throw new Error('You can\'t dislike this story!');
        } else {
            const index = this.#likes.indexOf(username);
            if (index > -1) {
                this.#likes.splice(index, 1);
            }
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {

        if (id === undefined || this.#comments[id] === undefined) {
            if (this.#comments.length === 0) {
                const comment = {};
                comment.Id = 1;
                comment.Username = username;
                comment.Content = content;
                comment.Replies = [];
                this.#comments.push(comment);
            } else {

                const comment = {};
                comment.Id = this.#comments.length + 1;
                comment.Username = username;
                comment.Content = content;
                comment.Replies = [];
                this.#comments.push(comment);
            }
            return `${username} commented on ${this.title}`;

        } else {

            let currentComment = this.#comments[id - 1];

            const currentReply = {};

            if (currentComment.Replies.length === 0) {
                currentReply.Id = `${currentComment.Id}.${currentComment.Id}`;
            } else {

                currentReply.Id = `${currentComment.Id}.${currentComment.Replies.length + 1}`;
            }

            currentReply.Username = username;
            currentReply.Content = content;

            currentComment.Replies.push(currentReply);

            return 'You replied successfully';
        }
    }

    toString(sortingType) {

        let result = `Title: ${this.title}` + `\n` + `Creator: ${this.creator}` + `\n` + `Likes: ${this.#likes.length}` + `\n`
        + 'Comments:' + `\n`;

        if (sortingType === 'asc') {

            this.#comments.sort(function (a, b) { return a.Id - b.Id }).forEach(comment => {

                if (comment.Replies.length === 0) {

                    result += `-- ${comment.Id}. ${comment.Username}: ${comment.Content}` + `\n`;

                } else {

                    result += `-- ${comment.Id}. ${comment.Username}: ${comment.Content}` + `\n`;

                    comment.Replies.sort(function (a, b) { return a.Id.localeCompare(b.Id) }).forEach(reply => {
                        + `--- ${reply.Id}. ${reply.Username}: ${reply.Content}` + `\n`;
                    })
                }
            })

            return result;

        } else if (sortingType === 'username') {
     
            this.#comments.sort(function (a, b) { return a.Username.localeCompare(b.Username) }).forEach(comment => {

                if (comment.Replies.length === 0) {

                    result += `-- ${comment.Id}. ${comment.Username}: ${comment.Content}` + `\n`;

                } else {

                    result += `-- ${comment.Id}. ${comment.Username}: ${comment.Content}` + `\n`;

                    comment.Replies.sort(function (a, b) { return a.Username.localeCompare(b.Username) }).forEach(reply => {
                        result += `--- ${reply.Id}. ${reply.Username}: ${reply.Content}` + `\n`;
                    })
                }
            })

            return result;
        
        } else {
          
            this.#comments.sort(function (a, b) { return b.Id - a.Id }).forEach(comment => {

                if (comment.Replies.length === 0) {

                    result += `-- ${comment.Id}. ${comment.Username}: ${comment.Content}` + `\n`;

                } else {

                    result += `-- ${comment.Id}. ${comment.Username}: ${comment.Content}` + `\n`;

                    comment.Replies.sort(function (a, b) { return b.Id.localeCompare(a.Id) }).forEach(reply => {
                        result += `--- ${reply.Id}. ${reply.Username}: ${reply.Content}` + `\n`;
                    })
                }
            })

            return result;
        }
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