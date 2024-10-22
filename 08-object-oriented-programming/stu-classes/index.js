// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
    constructor(authorName, title, text, createdOn) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.createdOn = createdOn;
        // TODO: Give BlogPost a property called 'comments' that is set to an empty array.
        this.comments = [];
    }
    // TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.
    printMetaData() {
        console.log(`Created by ${this.authorName} on ${this.createdOn}`);
    }
    // TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
    addComment(comment) {
        this.comments.push(comment);
    }
}

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', and 'createdOn'.
class Comment {
    constructor(authorName, text, createdOn) {
        this.authorName = authorName;
        this.text = text;
        this.createdOn = createdOn;
    }
    // TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) with (text)'.
    printMetaData() {
    console.log(`Created by ${this.authorName} on ${this.createdOn} with ${this.text}`);
    }
}

// TODO: Create a new object using the Comment class constructor.
const newComment = new Comment('John Doe', 'This is a comment', '2021-09-01');

// TODO: Create a new object using the BlogPost class constructor.
const newBlogPost = new BlogPost('Jane Doe', 'This is a title', 'This is the text', '2021-09-01');

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
newBlogPost.addComment(newComment);

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
newBlogPost.printMetaData();
newComment.printMetaData();

