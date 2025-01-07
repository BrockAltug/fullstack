# Object-Relational Mapping with Password Hashing

## Overview

This project demonstrates the implementation of **Object-Relational Mapping (ORM)** with Sequelize, focusing on password hashing for secure user authentication. It includes a `User` model, a login route, and password hashing using `bcrypt`.

---

## Key Features

1. **Secure Password Storage**:

   - Implements password hashing using `bcrypt` to ensure user passwords are stored securely in the database.

2. **Login Authentication**:

   - Includes a `/login` route to validate user credentials by comparing hashed passwords.

3. **Data Modeling**:

   - Defines a `User` model with fields for `username`, `email`, and `password`.

4. **Seamless Integration with Sequelize**:
   - Simplifies database interactions using Sequelize ORM.

---

## Concepts Covered

1. **Sequelize ORM**:

   - Provides structured data modeling and validation capabilities.

2. **Password Hashing**:

   - Uses `bcrypt` to hash and compare passwords for secure authentication.

3. **RESTful API Design**:
   - Implements a `POST /login` route to handle user authentication.

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

4. **Test the Login Route**:

   - Use a tool like Insomnia or Postman to test the `/login` endpoint.

---

## Application Structure

### **Files and Functionality**

1. **`models/User.js`**:

   - Defines the `User` model with the following fields:
     - `id`: Primary key, auto-incremented.
     - `username`: Non-null.
     - `email`: Non-null, unique, valid email format.
     - `password`: Non-null, minimum length of 8 characters.

2. **`routes/api/userRoutes.js`**:
   - Provides a `POST /login` route for user authentication:
     - Validates the provided email and password.
     - Uses `bcrypt.compare()` to check if the entered password matches the hashed password in the database.

---

## Expected Behavior

1. **Password Hashing**:

   - User passwords are hashed before being stored in the database for enhanced security.

2. **Login Route**:
   - Validates user credentials by:
     - Checking if the email exists in the database.
     - Comparing the entered password with the hashed password.

---

## Example Usage

### **Testing the `/login` Route**

1. **Request**:

   - Endpoint: `POST /api/users/login`
   - Payload:
     ```json
     {
       "email": "test@example.com",
       "password": "password123"
     }
     ```

2. **Responses**:
   - **Success**:
     ```json
     {
       "message": "You are now logged in!"
     }
     ```
   - **Failure (Invalid Credentials)**:
     ```json
     {
       "message": "Login failed. Please try again!"
     }
     ```

---

## Summary

This project showcases secure user authentication using password hashing with `bcrypt` and Sequelize ORM. It emphasizes best practices for handling sensitive user data, ensuring that passwords are securely stored and verified during login.
