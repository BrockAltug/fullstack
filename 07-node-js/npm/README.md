# Inquirer Prompt

## Concepts Covered

- Initializing a Node.js project with npm.
- Installing and managing specific package versions using npm.
- Using the `inquirer` package to create interactive command-line prompts.

## Learning Objectives

- Understand how to initialize a project and manage dependencies with npm.
- Learn how to install a specific version of a package using npm.
- Implement a basic prompt using the `inquirer` package.

## Features

- **NPM Initialization**: The project uses npm to create a `package.json` file and manage dependencies.
- **Inquirer Prompt**: A simple command-line prompt is created using the `inquirer` package.
- **Dependency Management**: The project includes a specific version (`8.2.4`) of the `inquirer` package.

## Expected Behavior

- When the `npm init -y` command is run, it should generate a `package.json` file.
- When the command `npm install inquirer@8.2.4` is executed, it will install `inquirer` version 8.2.4 and list it in the `package.json` file.
- The `node_modules` folder and `package-lock.json` file will appear after package installation.
- When the command `node index.js` is executed, the prompt "Press ENTER to continue..." will be displayed in the console.

## Summary

This project demonstrates how to use npm for initializing a project and managing dependencies. It also shows how to use the `inquirer` package to create a simple interactive prompt for users.
