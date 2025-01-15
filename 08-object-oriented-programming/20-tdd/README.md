# TDD Blog Post, Comment, and ForumItem Classes

## Concepts Covered

- Test-Driven Development (TDD) Approach
- JavaScript Class Implementation
- Regular Expressions for Input Validation
- Error Handling in JavaScript
- Writing Unit Tests with Jest for Robust Code Verification

## Learning Objectives

1. Understand the principles of Test-Driven Development (TDD) by writing tests before implementing class features.
2. Develop skills in creating JavaScript classes that encapsulate data and methods.
3. Practice error handling and input validation using regular expressions within class constructors.
4. Utilize Jest for writing and running unit tests, ensuring code reliability and correctness.

## Features

- **BlogPost Class**: Represents a blog post, including properties like `authorName`, `title`, `text`, and `createdOn`. The class includes a method to add comments and print metadata.
- **Comment Class**: Represents a comment, with properties such as `authorName`, `text`, `createdOn`, and `reaction`. It provides a method to display comment metadata.
- **ForumItem Class**: Represents a general forum item, with properties like `authorName`, `text`, and `createdOn`, and a method to print metadata.
- **Comprehensive Unit Testing**: Includes tests for each class, verifying the initialization of properties, error handling for invalid input, and proper functionality of methods like `addComment()` and `printMetaData()`.

## Summary

This project demonstrates how to build a set of JavaScript classes following a Test-Driven Development (TDD) approach. By writing tests first, it ensures that class implementations are robust, reliable, and handle both valid and invalid input gracefully. Using Jest for unit testing, the project reinforces best practices in writing testable, maintainable, and high-quality code. Through the process, it highlights the importance of TDD in modern software development, providing a clear path from requirements to implementation.
