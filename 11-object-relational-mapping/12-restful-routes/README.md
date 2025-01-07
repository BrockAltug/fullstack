# Object-Relational Mapping with RESTful Routes

## Overview

This project demonstrates the implementation of **Object-Relational Mapping (ORM)** using Sequelize with **async/await** for database operations. It includes model definitions, database seeding, and RESTful API routes for interacting with user-related data.

---

## Key Features

1. **Async/Await for Database Operations**:

   - Utilizes `async/await` for clean and readable asynchronous code when performing database tasks like querying, updating, and deleting.

2. **RESTful API Routes**:

   - Includes `GET`, `POST`, `PUT`, and `DELETE` routes for managing user data.

3. **Seamless Integration with Sequelize**:

   - Simplifies database interactions using Sequelize ORM, providing an abstraction over raw SQL queries.

4. **Dynamic Database Seeding**:
   - Populates the database with sample user data for testing and development.

---

## Concepts Covered

1. **Async/Await**:

   - Streamlines handling of asynchronous code, ensuring better readability and maintainability.

2. **Sequelize ORM**:

   - Defines and manages models, relationships, and database queries with Sequelize.

3. **RESTful API Design**:

   - Implements standard API routes for CRUD operations using Express.js.

4. **Data Modeling**:
   - Demonstrates the definition of Sequelize models with fields, data types, and associations.

---

## Setup Instructions

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Set Up the Database**:

   - Ensure your database credentials are correctly configured in `config/connection.js`.
   - Run the database schema:
     ```bash
     psql -U <username> -d <database_name> -f db/schema.sql
     ```

3. **Seed the Database**:

   ```bash
   node seeds/seed.js
   ```

4. **Start the Application**:

   ```bash
   npm start
   ```

5. **Interact with the API**:
   - Use a tool like Insomnia or Postman to test the API endpoints.

---

## Application Structure

### **Files and Functionality**

1. **`models/User.js`**:

   - Defines the `User` model with fields such as `id`, `username`, `email`, and `password`.

2. **`routes/api/userRoutes.js`**:

   - Provides API routes for:
     - `GET /api/users/:id`: Fetches a user by ID.
     - `POST /api/users`: Creates a new user.
     - `PUT /api/users/:id`: Updates a user by ID.
     - `DELETE /api/users/:id`: Deletes a user by ID.

3. **`seeds/userData.json`**:

   - Contains sample user data for database seeding.

4. **`seeds/seed.js`**:

   - Seeds the database with sample data for testing.

5. **`db/schema.sql`**:
   - Defines the database schema for users, posts, and comments.

---

## Expected Behavior

1. **Database Seeding**:

   - Seeds the database with user data from `userData.json`.

2. **API Endpoints**:

   - `GET /api/users/:id`: Retrieves a user by their ID.
   - `POST /api/users`: Creates a new user with provided data.
   - `PUT /api/users/:id`: Updates a user's details by their ID.
   - `DELETE /api/users/:id`: Deletes a user by their ID.

3. **Async/Await**:
   - Ensures smooth handling of asynchronous database operations.

---

## Example Usage

### **Seeding the Database**

Run:

```bash
npm run seed
```

Expected Output:

```
Database seeded successfully
```

### **API Request Examples**

1. **Create a User**:

   - Endpoint: `POST /api/users`
   - Payload:
     ```json
     {
       "username": "newuser",
       "email": "newuser@example.com",
       "password": "password123"
     }
     ```

2. **Get a User by ID**:

   - Endpoint: `GET /api/users/1`
   - Replace `1` with an existing user ID.

3. **Update a User**:

   - Endpoint: `PUT /api/users/1`
   - Payload:
     ```json
     {
       "username": "updateduser",
       "email": "updateduser@example.com",
       "password": "newpassword123"
     }
     ```

4. **Delete a User**:
   - Endpoint: `DELETE /api/users/1`
   - Replace `1` with the ID of the user to delete.

---

## Summary

This project demonstrates the use of Sequelize ORM and async/await to create a database-backed application with RESTful routes. It serves as a practical example of managing data models, seeding databases, and building APIs with enhanced readability and maintainability.
