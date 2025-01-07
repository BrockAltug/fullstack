# Object-Relational Mapping with Hooks

## Overview

This project demonstrates the use of **Sequelize Hooks** to perform operations automatically before creating or updating a record. Specifically, it focuses on password hashing using `bcrypt` in the `beforeCreate` and `beforeUpdate` hooks for secure user data management.

---

## Key Features

1. **Sequelize Hooks**:

   - Utilizes `beforeCreate` and `beforeUpdate` hooks to automatically hash passwords before saving them to the database.

2. **Data Modeling**:

   - Defines a `User` model with fields for `username`, `email`, and `password`.

3. **Secure Password Storage**:

   - Ensures passwords are securely hashed using `bcrypt` during user creation or password updates.

4. **Seamless Integration with Sequelize**:
   - Automates pre-save operations with hooks to ensure data consistency and security.

---

## Concepts Covered

1. **Sequelize Hooks**:

   - Executes custom logic at specific points in the lifecycle of a model instance, such as before creation or updates.

2. **Password Hashing**:

   - Uses `bcrypt` to hash passwords before they are saved to the database.

3. **Data Validation**:
   - Validates fields such as `email` and `password` length during model initialization.

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

---

## Application Structure

### **Files and Functionality**

1. **`models/User.js`**:

   - Defines the `User` model with the following fields:

     - `id`: Primary key, auto-incremented.
     - `username`: Non-null.
     - `email`: Non-null, unique, valid email format.
     - `password`: Non-null, minimum length of 8 characters.

   - Implements Sequelize hooks:
     - `beforeCreate`: Hashes the password before creating a new user.
     - `beforeUpdate`: Hashes the password before updating it if it has changed.

---

## Expected Behavior

1. **Password Hashing**:

   - Passwords are automatically hashed before being stored in the database during user creation or updates.

2. **Update Logic**:
   - Uses the `_changed` property to determine if the `password` field has been modified before re-hashing it.

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

### **Updating a User Password**

1. **Input**:

   - Example updated user object:
     ```json
     {
       "password": "newpassword123"
     }
     ```

2. **Behavior**:
   - The password is hashed before being saved to the database if the `password` field has changed.

---

## Summary

This project demonstrates the use of Sequelize Hooks to automate operations before saving or updating data in the database. By implementing `beforeCreate` and `beforeUpdate` hooks, it ensures secure password storage with `bcrypt` and consistent data management.
