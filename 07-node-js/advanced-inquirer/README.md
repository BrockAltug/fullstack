# Command-line Application with `inquirer` and File Writing

## Concepts Covered

- Initializing a Node.js project with npm.
- Installing and using `inquirer` to capture user input via the command line.
- Using `colors` to style prompts with bright magenta text.
- Writing user responses to a file using Node.js's built-in `fs` module.

## Learning Objectives

- Understand how to initialize a project and manage dependencies using npm.
- Learn how to use the `inquirer` package to capture user input.
- Apply the `colors` package to format prompts with color.
- Write user responses to a file in Node.js using the `fs` module.

## Features

- **User Prompting**: The application prompts the user for their name, known languages, and preferred communication method.
- **Bright Magenta Formatting**: Each question is displayed in bright magenta using the `colors` package.
- **Response File Writing**: The user’s input is saved to a file named `responses.txt`.

## Expected Behavior

- When the `npm init -y` command is run, it will generate a `package.json` file.
- When the `npm install inquirer@8.2.4` command is executed, it installs the `inquirer` package.
- When the `npm install colors` command is executed, it installs the `colors` package.
- When the command `node index.js` is executed, it will:
  1. Ask the user "What is your name?" in bright magenta.
  2. Ask the user "What languages do you know?" in bright magenta.
  3. Ask the user "What is your preferred method of communication?" in bright magenta.
  4. Save the responses to a file named `responses.txt`.

## Summary

This project demonstrates how to use npm to initialize a project, install dependencies, and build a command-line application that captures user input using `inquirer`, formats questions with `colors`, and writes the responses to a file using the `fs` module.
