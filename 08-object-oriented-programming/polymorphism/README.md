# Forum Item with MetaData Debugging

## Concepts Covered

- Class inheritance in JavaScript
- Method overriding
- Debugging JavaScript code
- Working with object-oriented principles in class hierarchies

## Learning Objectives

1. Understand how to define and use class constructors in JavaScript.
2. Learn how to implement and override methods in derived classes.
3. Debug inheritance issues related to method overriding in a class hierarchy.
4. Explore how to correctly pass and utilize inherited properties from a parent class.

## Features

- **ForumItem Class**: A base class that includes a constructor for initializing common properties (`authorName` and `createdOn`) and a `printMetaData()` method to display these details.
- **BlogPost Class**: Inherits from the `ForumItem` class and adds properties specific to a blog post such as `title` and `comments`.
- **Comment Class**: Inherits from the `ForumItem` class and overrides the `printMetaData()` method to also include the comment `text` property when printing the metadata.
- **Method Overriding**: Demonstrates how to override the `printMetaData()` method in the `Comment` class to display additional information specific to comments.

## Summary

This project focuses on debugging an issue where the `Comment` class did not display the `text` property in the `printMetaData()` function. The solution involved overriding the method from the base `ForumItem` class to include the `text` property for comments. This showcases inheritance and method overriding in JavaScript, allowing each class to customize its behavior while maintaining a shared structure.
