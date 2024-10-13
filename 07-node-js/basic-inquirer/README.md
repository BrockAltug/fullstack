# basic-inquirer

## Command-line Application with `inquirer` and `colors`

## Concepts Covered

- Initializing a Node.js project with npm.
- Installing and using `inquirer` to capture user input via the command line.
- Using the `colors` npm package to log styled and colored text to the console.

## Learning Objectives

- Understand how to initialize a project and manage dependencies using npm.
- Learn how to use the `inquirer` package to capture user input.
- Learn how to use the `colors` package to display text in different colors based on user input.

## Features

- **User Prompting**: The application prompts the user for text and color preferences.
- **Dynamic Color Logging**: Logs the input text in the color chosen by the user from a list of options.

## Expected Behavior

- When the `npm init -y` command is run, it will generate a `package.json` file.
- When the `npm install inquirer@8.2.4` command is executed, it will install the specific version of `inquirer` and list it in the `package.json` file.
- When the `npm install colors` command is executed, it will install the `colors` package and list it in the `package.json` file.
- When the command `node index.js` is executed, it will:
  1. Ask the user "What text would you like to log?"
  2. Ask the user "What color would you like to use?" with options "red", "blue", "green", "yellow", "cyan", and "magenta".
  3. Log the text in the selected color.

## Summary

This project demonstrates how to use npm to initialize a project, install dependencies, and build a command-line application that uses the `inquirer` package to capture input and the `colors` package to format and display the output in a user-selected color.
