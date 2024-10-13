## Command-line Argument Logging Application

## Concepts Covered

- **Command-line Arguments**: Using `process.argv` to capture input from the command line in a Node.js application.
- **File Writing**: Utilizing the Node.js `fs` module to write and append data to a file (`log.txt`).
- **Input Validation**: Checking whether the correct number of arguments are provided before proceeding with an operation.
- **Addition Operation**: Summing two command-line arguments and logging the result.

## Learning Objectives

- Learn how to handle command-line arguments using `process.argv` in Node.js.
- Understand the process of writing data to a file using the `fs` module.
- Practice input validation by ensuring the correct number of arguments are passed to the function.
- Learn how to append results or error messages to a log file.

## Features

- **Addition Operation**: Accepts two arguments via the command line, converts them into integers, adds them, and logs the result to a file.
- **Error Handling**: If fewer than two arguments are provided, the application logs an error message to `log.txt`.
- **Logging to File**: Appends both successful operations and error messages to a log file (`log.txt`) in the root directory.

## Summary

This application demonstrates how to capture and validate command-line arguments in Node.js and log outputs to a file. Using the `fs` module, the program writes either the result of an addition operation or an error message to `log.txt`. This exercise helps build foundational knowledge of file handling, input validation, and basic arithmetic operations in a command-line environment.
