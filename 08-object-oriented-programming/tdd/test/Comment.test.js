const Comment = require('../lib/Comment.js');

describe('Comment', () => {
  // TODO: Add a comment describing this test.
  // This test checks if a new instance of Comment can be created successfully.
  // It verifies that the object is an instance of the Comment class.
  describe('Instantiate', () => {
    it('should be an instance of Comment class', () => {
      const comment = new Comment();

      expect(comment).toBeInstanceOf(Comment);
    });
  });

  // TODO: Add a comment describing this test.
  // This test verifies that the Comment constructor correctly initializes the `authorName` property.
  // It ensures that the `authorName` passed during instantiation is properly set on the object.
  describe('Initialize authorName', () => {
    it('should set authorName properly', () => {
      const authorName = 'Jane Doe';
      const comment = new Comment(authorName);

      expect(comment.authorName).toBe(authorName);
    });
  });

  // TODO: Add a comment describing this test.
  // This test ensures that the `text` property is correctly initialized when creating a new Comment object.
  // It checks if the text passed as an argument matches the object's text property.
  describe('Initialize text', () => {
    it('should set text properly', () => {
      const text = 'This post is super cool!';
      const comment = new Comment('Jane Doe', text);

      expect(comment.text).toBe(text);
    });
  });

  // TODO: Add a comment describing this test.
  // This test checks that the `createdOn` property is set correctly when a new Comment is created.
  // It verifies that the date passed during instantiation is accurately assigned.
  describe('Initialize createdOn', () => {
    it('should set createdOn properly', () => {
      const createdOn = '12/15/2021';
      const comment = new Comment(
        'Jane Doe',
        'This post is super cool!',
        createdOn
      );

      expect(comment.createdOn).toBe(createdOn);
    });
  });

  // TODO: Add a comment describing this test.
  // This test ensures that the `reaction` property is set correctly when creating a new Comment.
  // It checks if the reaction emoji passed as an argument matches the object's reaction property.
  describe('Initialize reaction', () => {
    it('should set reaction properly', () => {
      const reaction = '🐶';
      const comment = new Comment(
        'Jane Doe',
        'This post is super cool!',
        '12/15/2021',
        reaction
      );

      expect(comment.reaction).toBe(reaction);
    });
  });

  // TODO: Add a comment describing this test.
  // This test checks the `printMetaData()` method to ensure it returns the correct string.
  // It verifies that the metadata string includes the `authorName`, `createdOn` date, and the `reaction` emoji.
  describe('printMetaData() method', () => {
    it('should print message with data', () => {
      const comment = new Comment(
        'Jane Doe',
        'This post is super cool!',
        '12/15/2021',
        '🐶'
      );

      expect(comment.printMetaData()).toBe(
        `Created by Jane Doe on 12/15/2021 🐶`
      );
    });
  });
});