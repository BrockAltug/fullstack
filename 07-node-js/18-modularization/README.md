# Basic Math Operations CLI

## Concepts Covered

- Importing and using external modules in Node.js.
- Handling command-line arguments using `process.argv`.
- Using switch statements for control flow.
- Basic error handling for division by zero.

## Learning Objectives

- Understand how to build a simple command-line interface (CLI) in Node.js.
- Learn how to capture and parse user inputs from the command line.
- Implement basic math operations using modular JavaScript.
- Handle potential errors (e.g., division by zero) in a user-friendly way.

## Features

- **Sum**: Adds two numbers.
- **Difference**: Subtracts the second number from the first.
- **Product**: Multiplies two numbers.
- **Quotient**: Divides the first number by the second (with division by zero error handling).
- Uses command-line inputs for dynamic operations.
- Modular design for reusability of the math functions.

## Expected Behavior

- When the command `node index.js sum 3 4` is run, the output should be `7`.
- When the command `node index.js difference 3 4` is run, the output should be `-1`.
- When the command `node index.js product 3 4` is run, the output should be `12`.
- When the command `node index.js quotient 3 4` is run, the output should be `0.75`.
- If the second number is `0` for the `quotient` operation, an error message (`Error: Cannot divide by zero`) will be displayed.

## Summary

This project demonstrates the use of Node.js to create a basic math operations CLI tool. The code captures command-line arguments to perform simple arithmetic operations (addition, subtraction, multiplication, and division). By modularizing the math functions, the project ensures clean, maintainable code.
