// TODO: Add a comment describing what kind of function this is
// This is a constructor function that initializes a new 'BlogPost' object with properties 'authorName', 'title', 'text', 'createdOn', and an empty array for 'comments'.
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  // this is an empty array that will store comments
  this.comments = [];
  // this is a method that prints the author's name and the date the blog post was created
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
// The 'addComment' method is added to the BlogPost's prototype so that all instances of 'BlogPost' share this method, conserving memory.
BlogPost.prototype.addComment = function(comment) {
  this.comments.push(comment);
};

// this is a post object created using the 'BlogPost' constructor
const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

// this adds a comment element to the 'comments' array
post.addComment('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console
// The console will print the 'comments' array, which now contains one comment element: ['Nice post, I like it!'].
console.log(post.comments);