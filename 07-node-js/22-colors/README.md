# Console Color Formatting with `colors` NPM Package

## Concepts Covered

- Initializing a Node.js project with npm.
- Installing and using the `colors` npm package for console output formatting.
- Capturing and processing command-line arguments in Node.js.

## Learning Objectives

- Understand how to initialize a Node.js project and manage dependencies using npm.
- Learn how to install and use the `colors` npm package to add color and styling to console output.
- Capture user input via command-line arguments and dynamically format the output based on conditions.

## Features

- **NPM Initialization**: The project uses npm to create a `package.json` file and manage dependencies.
- **Console Formatting**: Uses the `colors` package to apply background colors and text styling in the terminal.
- **Dynamic Input**: Takes user input from the command line to customize the output format based on profit value.

## Expected Behavior

- When the `npm init -y` command is run, it should generate a `package.json` file.
- When the command `npm install colors` is executed, it installs the `colors` package and lists it in the `package.json` file.
- The `node_modules` folder and `package-lock.json` file will appear after package installation.
- When the command `node index.js Sally 500` is executed, it will display:

  - `My name is Sally and I made 500 dollars this quarter.`
  - The name `Sally` will be highlighted with a bright yellow background.
  - The profit `500` will be highlighted with a bright green background because the profit is greater than `0`.

- When the command `node index.js Bob -300` is executed, it will display:
  - `My name is Bob and I made -300 dollars this quarter.`
  - The name `Bob` will be highlighted with a bright yellow background.
  - The profit `-300` will be highlighted with a bright red background because the profit is less than or equal to `0`.

## Summary

This project demonstrates how to use npm for initializing a project and managing dependencies. It also shows how to use the `colors` package to format console output dynamically based on user input, providing customized styling for the name and profit values.
