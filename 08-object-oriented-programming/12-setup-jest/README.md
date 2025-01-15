# Jest Setup

## Concepts Covered

- **Installation of Jest**: Installing Jest locally as a development dependency using npm.
- **Test-Driven Development (TDD)**: Writing unit tests to verify the functionality of code.
- **Unit Testing Fundamentals**: Creating test suites and test cases using `describe` and `it` blocks.
- **Assertions with Jest**: Using `expect()` to define expected outcomes and validate code behavior.
- **Module Exports/Imports**: Understanding how to export and import functions for testing across files.
- **Test Execution and Output**: Running tests from the command line with `npm run test` and interpreting Jest's output.

## Learning Objectives

- **Set up a Testing Environment**: Learn how to install and configure Jest for testing JavaScript code in a Node.js project.
- **Write and Structure Unit Tests**: Understand how to structure test cases and suites, and write clear, concise tests using Jest.
- **Automate Testing**: Learn how to run all tests automatically from the command line and get immediate feedback on the test results.
- **Understand the Role of `package.json`**: Explore how the `package.json` file is used to manage project dependencies and scripts, including how to add a test script for Jest.
- **Manage Dependencies with `package-lock.json`**: Gain an understanding of how the `package-lock.json` file ensures consistent dependency versions across environments.
- **Interpret Jest Output**: Analyze test results, understand how to debug failing tests, and learn how to use `jest --verbose` for more detailed output.

## Features

- **Jest Unit Testing**: The project is configured to run unit tests using Jest, ensuring functionality with minimal setup effort.
- **Arithmetic Sum Function**: A simple arithmetic function (`sum`) that takes two numbers and returns their sum is used as the subject of testing.
- **Test Coverage for Basic Operations**: The test suite covers a fundamental operation—addition—providing a solid foundation for understanding how Jest works.
- **Modular Testing**: Demonstrates how to test modular JavaScript code by exporting and importing functions.
- **Custom Scripts**: The `package.json` file includes a custom test script (`npm run test`) to easily execute the Jest test runner.
- **Cross-Platform Compatibility**: The setup works across different operating systems, ensuring that tests can be run consistently in various environments.

## How to Run the Tests

### Prerequisites:

- Make sure Node.js and npm are installed on your machine.
- Jest should be installed as a development dependency in the project. If not, install it using the following command:

  ```bash
  npm install --save-dev jest
  ```

### Steps to Run:

1. **Install dependencies**:

   If you're running the project for the first time, install all necessary dependencies by running the following command:

   ```bash
   npm install
   ```

2. **Run the tests**:

   Once the dependencies are installed, execute the test suite by running:

   ```bash
   npm run test
   ```

## Summary

This project showcases the process of setting up Jest for unit testing in a Node.js environment. By writing a test for a simple arithmetic function, developers can gain hands-on experience with Test-Driven Development (TDD) and build confidence in the correctness of their code. The project illustrates how to install Jest, create test suites, write assertions, and automate test execution using npm scripts. Additionally, it provides insight into managing dependencies through `package.json` and `package-lock.json`, ensuring that every team member or CI/CD pipeline runs the exact same version of the test dependencies.

This setup serves as a foundation for more complex testing scenarios, allowing developers to expand their test coverage to ensure their applications work as expected in all situations.
