# Object-Relational Mapping with Instance Methods

## Overview

This project demonstrates the use of **Instance Methods** in Sequelize for enhanced model functionality. The `User` model includes a custom instance method, `checkPassword()`, to securely validate user credentials during login. Additional routes are provided to handle CRUD operations for the `User` model.

---

## Key Features

1. **Instance Methods**:

   - Implements a custom method, `checkPassword()`, in the `User` model to validate user passwords.

2. **Secure Password Handling**:

   - Uses `bcrypt` for hashing passwords and comparing them securely during authentication.

3. **RESTful API**:

   - Includes routes for creating, retrieving, updating, and logging in users.

4. **Seamless Integration with Sequelize**:
   - Extends Sequelize's `Model` class for enhanced functionality.

---

## Concepts Covered

1. **Instance Methods**:

   - Adds custom methods to Sequelize models to encapsulate specific logic, such as password validation.

2. **Password Hashing**:

   - Uses `bcrypt` to hash and compare passwords for secure user authentication.

3. **RESTful API Design**:
   - Implements routes for CRUD operations and user login using `Express.js`.

---

## Setup Instructions

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Set Up the Database**:

   - Configure database credentials in `config/connection.js`.
   - Run the database schema if applicable.

3. **Run the Application**:

   ```bash
   npm start
   ```

4. **Test the Endpoints**:

   - Use a tool like Insomnia or Postman to test the API endpoints.

---

## Application Structure

### **Files and Functionality**

1. **`models/User.js`**:

   - Defines the `User` model with the following fields:
     - `id`: Primary key, auto-incremented.
     - `username`: Non-null.
     - `email`: Non-null, unique, valid email format.
     - `password`: Non-null, minimum length of 8 characters.
   - Includes an instance method, `checkPassword()`, for password validation.
   - Uses hooks to hash passwords before creating or updating a user.

2. **`routes/api/userRoutes.js`**:
   - Provides API routes for:
     - `GET /api/users/:id`: Retrieves a user by ID.
     - `POST /api/users`: Creates a new user.
     - `POST /api/users/login`: Authenticates a user using `checkPassword()`.
     - `PUT /api/users/:id`: Updates user details.

---

## Expected Behavior

1. **Instance Method**:

   - `checkPassword()`: Compares a plain-text password with the hashed password stored in the database.

2. **Password Hashing**:

   - Passwords are hashed before being stored in the database using Sequelize hooks.

3. **Login Validation**:
   - Validates user credentials during login with the `checkPassword()` instance method.

---

## Example Usage

### **Creating a User**

1. **Input**:

   - Example user object:
     ```json
     {
       "username": "newuser",
       "email": "newuser@example.com",
       "password": "password123"
     }
     ```

2. **Output**:
   - User is created successfully with the password securely hashed.

### **User Login**

1. **Input**:

   - Example login payload:
     ```json
     {
       "email": "newuser@example.com",
       "password": "password123"
     }
     ```

2. **Behavior**:

   - If credentials are valid, the `checkPassword()` instance method validates the password, and the user is logged in successfully.

3. **Responses**:
   - **Success**:
     ```json
     {
       "user": {
         "id": 1,
         "username": "newuser",
         "email": "newuser@example.com"
       },
       "message": "You are now logged in!"
     }
     ```
   - **Failure**:
     ```json
     {
       "message": "Incorrect email or password, please try again"
     }
     ```

---

## Summary

This project highlights the power of Sequelize's Instance Methods to encapsulate specific logic within models. By implementing the `checkPassword()` method, it ensures secure and efficient user authentication. The project also demonstrates how to integrate Sequelize hooks for secure password management.
