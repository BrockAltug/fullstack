# Promise-Catch BlogPost Example

## Concepts Covered

- JavaScript Promises and Error Handling
- File System Operations with `fs/promises` Module
- Object-Oriented Programming with JavaScript Classes
- Regular Expressions for Input Validation
- HTML Generation and Styling

## Learning Objectives

1. Understand how to handle errors in asynchronous code using `.catch()` in a Promise chain.
2. Learn how to read and write files using the `fs/promises` module, with effective error handling.
3. Develop skills in implementing classes that encapsulate data and methods, ensuring input validation.
4. Practice dynamically generating HTML content from JavaScript objects, applying CSS for styling.

## Features

- **Asynchronous File Handling**: Reads data from a JSON file, processes it, and writes the output to an HTML file using Promises. If any error occurs, it is caught and logged.
- **Object-Oriented Design**: Utilizes a `BlogPost` class to represent a blog post with properties like `title`, `text`, `author`, and `createdOn`.
- **Dynamic HTML Generation**: Generates a complete HTML document based on the data from the `BlogPost` instance, ensuring consistent formatting and styling.
- **Error Handling**: Catches errors during file reading and writing, providing informative logs in case of failure.
- **CSS Styling**: Applies custom styles to the generated HTML, creating a clean and visually appealing layout.

## Summary

This Promise-Catch BlogPost Example project demonstrates how to handle errors in asynchronous operations using `.catch()` in JavaScript Promises. By reading and writing files with the `fs/promises` module, it illustrates the importance of robust error handling. The `BlogPost` class is used to structure and manage data, ensuring valid inputs and consistent formatting. This example emphasizes best practices in asynchronous programming, input validation, and dynamic content generation, making it a comprehensive guide for developing reliable, user-friendly web content.
