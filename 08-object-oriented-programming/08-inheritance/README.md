# Forum System

## Concepts Covered

- Object-oriented programming (OOP)
- Inheritance in JavaScript
- Class constructors
- Creating and managing comments on a blog post

## Learning Objectives

1. Understand how to define and use class constructors in JavaScript.
2. Learn how to set up inheritance between classes.
3. Explore methods to add and manage comments within a blog post object.
4. Practice creating new objects from defined classes.

## Features

- **ForumItem Class**: A base class that takes `authorName` and `createdOn` as parameters to initialize the common attributes for blog posts and comments.
- **BlogPost Class**: Inherits from the `ForumItem` class and adds specific properties like `title`, `text`, and an array to store comments. It includes a method to add comments.
- **Comment Class**: Inherits from the `ForumItem` class and represents user comments, holding `text` and `authorName`.
- **Example Usage**: Instances of both `BlogPost` and `Comment` are created and logged to the console.

## Summary

This project demonstrates basic inheritance and class structures in JavaScript by creating a simple forum system. The `ForumItem` class serves as the base, while `BlogPost` and `Comment` inherit common attributes and add their own unique properties. Objects can be created for both classes and used to simulate interactions, such as commenting on a blog post.
