
# Jest Failing Test: Validate Class

## Concepts Covered

- **Test-Driven Development (TDD)**: Writing a failing test first to define how the code should behave before implementation.
- **Unit Testing with Jest**: Setting up a test suite to validate the behavior of a class method.
- **Password Validation Logic**: Ensuring that a method returns `false` for an empty string, simulating real-world password validation.
- **Modular Testing**: Exporting and importing JavaScript modules for isolated testing.
- **Writing Assertions in Jest**: Using `expect()` to define expected outcomes and test code behavior.

## Learning Objectives

- Learn how to write and execute failing tests using Jest to guide your development process.
- Understand the structure of unit tests and test suites in Jest, including how to group tests using `describe`.
- Write a test that validates the logic of a password validation method by checking if it returns `false` when passed an empty string.
- Implement basic password validation logic by checking the length of the input string.
- Gain confidence in using Jest for testing classes and their methods in a modular JavaScript application.

## Features

- **Failing Test Setup**: A Jest test suite is set up to run a failing test before implementing the actual functionality.
- **Password Validation**: The `Validate` class contains an `isPassword` method that returns `false` when the input is an empty string and `true` when it's a valid string.
- **Test Structure**: The test is structured using Jest's `describe` and `it` blocks to check the behavior of the `isPassword` method.
- **Assertion**: The test uses Jest's `expect()` function to assert that calling `isPassword` with an empty string returns `false`.

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

### Expected Outcome:

- Initially, if the `Validate` class is not fully implemented, the test will fail, indicating that the test is correctly checking the expected behavior.
- After implementing the correct logic in the `isPassword` method, the test will pass, confirming that the validation works as expected.

### Test Results:

#### Example of Failing Test Output:

When the test fails (before implementing the correct logic in the `isPassword` method), the output may look like this:

```bash
 FAIL  ./test/validate.test.js
  Validate
    isPassword
      ✕ should return false when passed an empty string (5ms)

  ● Validate › isPassword › should return false when passed an empty string

    expect(received).toBe(expected) // Object.is equality

    Expected: false
    Received: null

      6 |       const validator = new Validate();
      7 |       expect(validator.isPassword("")).toBe(false);
      8 |     });
```

This shows that the current implementation does not return `false` for an empty string, which is expected to fail before the method is updated.

### Example of Passing Test Output:

Once the `isPassword` method in the `Validate` class is correctly implemented to return `false` for an empty string, the test should pass, with output similar to this:

```bash
 PASS  ./test/validate.test.js
  Validate
    isPassword
      ✓ should return false when passed an empty string (2ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.5s
```

This output indicates that the test has passed, confirming that the `isPassword` method works as expected when passed an empty string.

### Example Code for Reference:

Here is the final implementation of the `Validate` class and the test:

#### `validate.js`:

```javascript
class Validate {
  isPassword(password) {
    // Returns false if the password is an empty string
    return password.length > 0;
  }
}

module.exports = Validate;
```

#### `validate.test.js`:

```javascript
const Validate = require('../validate');

describe('Validate', () => {
  describe('isPassword', () => {
    it('should return false when passed an empty string', () => {
      const validator = new Validate();
      expect(validator.isPassword("")).toBe(false);
    });
  });
});
```

These files ensure that the `Validate` class correctly handles the empty string validation and that the test suite verifies this behavior.

## Summary

This project demonstrates how to implement Test-Driven Development (TDD) using Jest. It covers writing a failing test to define the expected behavior of the `isPassword` method in the `Validate` class. The test ensures that the method returns `false` when passed an empty string, simulating basic password validation logic.

By writing a failing test first, developers can confirm that the code behaves as intended after implementing the correct logic. This project serves as a foundation for more advanced validation tests and is a practical demonstration of modular testing using Jest.

Here’s a recap of what the project covers:

1. **Test-Driven Development (TDD):** Writing tests before implementing the code ensures that the code fulfills the test requirements.
2. **Jest Test Suite:** Setting up a test suite using Jest to validate the functionality of the `Validate` class.
3. **Basic Validation Logic:** The `isPassword` method ensures that passwords are not empty by returning `false` for empty strings.
4. **Modular Code and Testing:** Demonstrating best practices for writing modular code and tests by separating the class and its test cases.
