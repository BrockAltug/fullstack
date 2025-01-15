const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  it('should throw an error when the authorName is less than 2 characters long', () => {
    expect(() => new BlogPost('A')).toThrow(
      'Author must be at least 2 characters long.'
    );
  });

  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
  it('should throw an error when the authorName contains invalid characters', () => {
    expect(() => new BlogPost('John@Doe')).toThrow(
      'Author must only contain letters, numbers, dashes, and underscores.'
    );

    expect(() => new BlogPost('Jane#123')).toThrow(
      'Author must only contain letters, numbers, dashes, and underscores.'
    );

    expect(() => new BlogPost('Tom&Jerry')).toThrow(
      'Author must only contain letters, numbers, dashes, and underscores.'
    );
  });

  it('should not throw an error when the authorName is valid', () => {
    expect(() => new BlogPost('John_Doe')).not.toThrow();
    expect(() => new BlogPost('jane-doe123')).not.toThrow();
  });
});