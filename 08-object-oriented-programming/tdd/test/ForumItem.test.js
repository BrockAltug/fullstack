const ForumItem = require('../lib/ForumItem.js');

describe('ForumItem', () => {
  // Add a comment describing this test.
  // This test checks if a new instance of ForumItem can be created successfully.
  // It verifies that the object is an instance of the ForumItem class.
  describe('Instantiate', () => {
    it('should be an instance of ForumItem class', () => {
      const forumitem = new ForumItem();

      expect(forumitem).toBeInstanceOf(ForumItem);
    });
  });

  // Add a comment describing this test.
  // This test verifies that the ForumItem constructor correctly initializes the `authorName` property.
  // It ensures that the `authorName` passed during instantiation is properly set on the object.
  describe('Initialize authorName', () => {
    it('should set authorName properly', () => {
      const authorName = 'Jack Doe';
      const forumitem = new ForumItem(authorName);

      expect(forumitem.authorName).toBe(authorName);
    });
  });

  // Add a comment describing this test.
  // This test ensures that the `text` property is correctly initialized when creating a new ForumItem object.
  // It checks if the text passed as an argument matches the object's text property.
  describe('Initialize text', () => {
    it('should set text properly', () => {
      const text = 'This is some random text';
      const forumitem = new ForumItem('Jack Doe', text);

      expect(forumitem.text).toBe(text);
    });
  });

  // Add a comment describing this test.
  // This test checks that the `createdOn` property is set correctly when a new ForumItem is created.
  // It verifies that the date passed during instantiation is accurately assigned.
  describe('Initialize createdOn', () => {
    it('should set createdOn properly', () => {
      const createdOn = '12/15/2021';
      const forumitem = new ForumItem(
        'Jack Doe',
        'This is some random text',
        createdOn
      );

      expect(forumitem.createdOn).toBe(createdOn);
    });
  });

  // Add a comment describing this test.
  // This test checks the `printMetaData()` method to ensure it returns the correct string.
  // It verifies that the metadata string includes the `authorName` and `createdOn` date.
  describe('printMetaData() method', () => {
    it('should print message with data', () => {
      const forumitem = new ForumItem(
        'Jack Doe',
        'This is some random text',
        '12/15/2021'
      );

      expect(forumitem.printMetaData()).toBe(
        `Created by Jack Doe on 12/15/2021`
      );
    });
  });
});