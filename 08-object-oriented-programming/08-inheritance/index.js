// TODO: Create a class constructor named ForumItem that takes in 'authorName' and 'createdOn'.
class ForumItem {
  constructor(authorName, createdOn) {
    this.authorName = authorName;
    this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost {
  constructor(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}

// TODO: Create a new object using the Comment class constructor.

const comment01 = new Comment('John Doe', 'This is a comment.', new Date());

// TODO: Create a new object using the BlogPost class constructor.

const blogPost01 = new BlogPost('Jane Doe', 'My First Blog Post', 'This is my first blog post.', new Date());

// TODO: Log both newly created BlogPost and Comment to the console.

console.log(blogPost01);
console.log(comment01);
