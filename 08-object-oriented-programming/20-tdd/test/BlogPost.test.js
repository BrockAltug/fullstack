const BlogPost = require('../lib/BlogPost.js');
const Comment = require('../lib/Comment.js');

describe('BlogPost', () => {
  // TODO: Add a comment describing this test.
  // This test checks if a new instance of BlogPost can be created successfully. 
  // It verifies that the object is an instance of the BlogPost class.
  describe('Instantiate', () => {
    it('should be an instance of BlogPost class', () => {
      const blogpost = new BlogPost();

      expect(blogpost).toBeInstanceOf(BlogPost);
    });
  });

  // TODO: Add a comment describing this test.
  // This test verifies that the BlogPost constructor correctly initializes the `authorName` property.
  // It ensures that the `authorName` passed during instantiation is properly set on the object.
  describe('Initialize authorName', () => {
    it('should set authorName properly', () => {
      const authorName = 'John Doe';
      const blogpost = new BlogPost(authorName);

      expect(blogpost.authorName).toBe(authorName);
    });
  });

  // TODO: Add a comment describing this test.
  // This test ensures that the `title` property is correctly initialized when creating a new BlogPost object.
  // It checks if the title passed as an argument matches the object's title property.
  describe('Initialize title', () => {
    it('should set title properly', () => {
      const title = 'My First Post';
      const blogpost = new BlogPost('John Doe', title);

      expect(blogpost.title).toBe(title);
    });
  });

  // TODO: Add a comment describing this test.
  // This test checks that the `text` property is set correctly when a new BlogPost is created.
  // It verifies that the content provided during instantiation is stored accurately.
  describe('Initialize text', () => {
    it('should set text properly', () => {
      const text = 'Dogs are super cute!';
      const blogpost = new BlogPost('John Doe', 'My First Post', text);

      expect(blogpost.text).toBe(text);
    });
  });

  // TODO: Add a comment describing this test.
  // This test ensures that the `createdOn` property is set correctly upon instantiation.
  // It verifies that the date passed during the BlogPost creation is correctly assigned.
  describe('Initialize createdOn', () => {
    it('should set createdOn properly', () => {
      const createdOn = '12/15/2021';
      const blogpost = new BlogPost(
        'John Doe',
        'My First Post',
        'Dogs are super cute!',
        createdOn
      );

      expect(blogpost.createdOn).toBe(createdOn);
    });
  });

  // TODO: Add a comment describing this test.
  // This test checks that the `comments` array is initialized correctly as an empty array.
  // It ensures there are no comments present when a new BlogPost object is created.
  describe('Initialize comments', () => {
    it('should create blogpost array with a length of 0', () => {
      const blogpost = new BlogPost();

      expect(blogpost.comments.length).toBe(0);
    });
  });

  // TODO: Add a comment describing this test.
  // This test verifies the functionality of the `addComment()` method.
  // It checks if a Comment object can be added to the `comments` array in BlogPost.
  describe('addComment() method', () => {
    it('should add comment to comments array', () => {
      const blogpost = new BlogPost();
      const comment = new Comment();
      blogpost.addComment(comment);

      expect(blogpost.comments[0]).toBeInstanceOf(Comment);
    });
  });

  // TODO: Add a comment describing this test.
  // This test checks the `printMetaData()` method to ensure it returns the correct string.
  // It verifies that the metadata string includes the `authorName` and `createdOn` date.
  describe('printMetaData() method', () => {
    it('should print message with data', () => {
      const blogpost = new BlogPost(
        'John Doe',
        'My First Post',
        'Dogs are super cute!',
        '12/15/2021'
      );

      expect(blogpost.printMetaData()).toBe(
        `Created by John Doe on 12/15/2021`
      );
    });
  });
});