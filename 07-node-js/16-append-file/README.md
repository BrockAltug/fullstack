# log-commit

## Concepts Covered

- **File System Interaction**: Using Node.js's `fs` module to read and write data to files.
- **Command-Line Arguments**: Accessing user input through `process.argv` to dynamically append data to a file.
- **Error Handling**: Implementing error handling using a callback function and a ternary operator.
- **Ternary Operator**: Using a ternary operator to conditionally log success or failure messages based on the result of a file operation.

## Learning Objectives

- Understand how to use the `fs` module to append data to a file.
- Learn how to access command-line arguments using `process.argv`.
- Practice handling potential errors in file operations using callback functions.
- Implement concise error handling logic with a ternary operator.

## Features

- **Append Data to a File**: The script takes a user-provided message from the command line and appends it to `log.txt`. If the file doesn’t exist, it will be created automatically.
- **Command-Line Input**: Dynamically takes user input from the command line via `process.argv` to log different messages.
- **Error Handling**: Automatically handles errors that occur during the file append operation, logging errors to the console if necessary.

## Summary

This project demonstrates how to use Node.js's `fs` module to append data to a file using command-line input. It also showcases how to handle errors with a callback function and log success messages using a ternary operator. The script reads user input through `process.argv` and appends it to a log file, providing useful feedback based on the outcome of the operation.

### 07-node-js/01-assignments/16-stu-append-file
