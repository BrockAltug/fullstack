# Command-line Portfolio Generator

## Concepts Covered

- Initializing a Node.js project with npm.
- Using `inquirer` to collect user input via the command line.
- Writing an HTML file to the file system using the built-in `fs` module.
- Using template literals to generate HTML content dynamically.

## Learning Objectives

- Understand how to initialize a project and manage dependencies using npm.
- Use the `inquirer` package to prompt the user for information.
- Generate an HTML document from user input using template literals.
- Write the HTML file to the file system.

## Features

- **User Prompting**: The application prompts the user for their name, location, bio, LinkedIn URL, and GitHub URL.
- **HTML Generation**: An HTML portfolio page is generated dynamically using the collected input.
- **CSS Styling**: The generated HTML file includes basic CSS for styling.

## Expected Behavior

- When the `npm init -y` command is run, it will generate a `package.json` file.
- When the `npm install inquirer@8.2.4` command is executed, it installs the specific version of `inquirer`.
- When the command `node index.js` is executed, the application will prompt the user for their name, location, bio, LinkedIn URL, and GitHub URL.
- The application will generate an HTML file named `portfolio.html` based on the user’s input.

## Summary

This project demonstrates how to use `inquirer` to collect user input via the command line and how to generate an HTML portfolio page from the collected information using template literals. The portfolio page is written to a file using Node.js's `fs` module.
