# Object-Relational Mapping with Validation and Unit Testing

## Overview

This project demonstrates the implementation of **Object-Relational Mapping (ORM)** with field-level validations using Sequelize. It also includes unit tests to ensure validation rules are correctly enforced when interacting with the `User` model.

---

## Key Features

1. **Field-Level Validations**:

   - Implements validation rules for the `User` model fields such as `username`, `email`, and `password`.

2. **Data Modeling**:

   - Defines a robust `User` model with Sequelize, incorporating validation logic for data integrity.

3. **Unit Testing**:

   - Tests validation rules with realistic scenarios using `Jest`.

4. **Seamless Integration with Sequelize**:
   - Simplifies database interactions with Sequelize ORM.

---

## Concepts Covered

1. **Sequelize ORM**:

   - Provides structured data modeling and validation capabilities.

2. **Validation Rules**:

   - Enforces rules for data fields such as ensuring email format, alphanumeric usernames, and password length.

3. **Unit Testing**:
   - Uses `Jest` to verify validation rules function as intended.

---

## Setup Instructions

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Set Up the Database**:

   - Configure database credentials in `config/connection.js`.
   - Run the database schema if applicable.

3. **Run Tests**:

   ```bash
   npm test
   ```

---

## Application Structure

### **Files and Functionality**

1. **`models/User.js`**:

   - Defines the `User` model with the following fields and validations:
     - `id`: Primary key, auto-incremented.
     - `username`: Non-null, alphanumeric only.
     - `email`: Non-null, unique, valid email format.
     - `password`: Non-null, minimum length of 8 characters.

2. **`tests/User.test.js`**:
   - Includes the following test cases:
     - Checks for null values in required fields.
     - Verifies that passwords meet the minimum length requirement.
     - Ensures usernames are alphanumeric.

---

## Expected Behavior

1. **Validation Rules**:

   - `username`: Must be non-null and contain only alphanumeric characters.
   - `email`: Must be non-null, unique, and follow the email format.
   - `password`: Must be non-null and at least 8 characters long.

2. **Test Cases**:

   - Ensures proper error messages for invalid or missing data.
   - Verifies correct data passes validation without errors.

---

## Example Usage

### **Validation Rules in Action**

1. **Invalid Username**:

   - Attempt to create a user with `username: "test_123"`.
   - Expected Output: Validation error for non-alphanumeric username.

2. **Short Password**:

   - Attempt to create a user with `password: "123"`.
   - Expected Output: Validation error for password length.

3. **Valid Data**:
   - Create a user with:
     ```json
     {
       "username": "testuser",
       "email": "test@example.com",
       "password": "password123"
     }
     ```
   - Expected Output: User is created successfully.

### **Running Tests**

Run:

```bash
npm test
```

Example Test Output:

```
 PASS  tests/User.test.js
  ✓ Checks for null values (20 ms)
  ✓ Checks for short passwords (10 ms)
  ✓ Checks for alphanumeric username (15 ms)
```

---

## Summary

This project highlights how to define robust data models with field-level validation and test them with unit tests. It showcases the power of Sequelize ORM for managing database interactions and Jest for ensuring reliable application behavior.
