# Object-Relational Mapping with Async/Await

## Overview

This project demonstrates the implementation of **Object-Relational Mapping (ORM)** using Sequelize with **async/await** for database operations. It includes examples of model definitions, database seeding, and API routes for interacting with the data.

---

## Key Features

1. **Async/Await for Database Operations**:

   - Uses `async/await` for cleaner, more readable code when performing asynchronous tasks like database syncing, data insertion, and querying.

2. **Dynamic Database Seeding**:

   - Seeds the database with sample data for `Book` and `Library` models using `bulkCreate`.

3. **RESTful Routes**:

   - Supports `PUT` and `DELETE` operations for updating and deleting books in the database.

4. **Seamless Integration with Sequelize**:
   - Defines and interacts with models using Sequelize's powerful ORM features.

---

## Concepts Covered

1. **Async/Await**:

   - Simplifies handling of asynchronous code, ensuring easier readability and maintenance.

2. **Sequelize ORM**:

   - Provides an abstraction layer for database interactions, reducing the need for raw SQL queries.

3. **RESTful API Design**:

   - Implements API routes for updating and deleting resources using Express.js.

4. **Data Modeling**:
   - Demonstrates how to define models with fields, data types, and options in Sequelize.

---

## Setup Instructions

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Set Up the Database**:

   - Ensure your database credentials are configured in `config/connection.js`.
   - Run the database schema:
     ```bash
     psql -U <username> -d <database_name> -f db/schema.sql
     ```

3. **Seed the Database**:

   ```bash
   node seeds/bookSeeds.js
   ```

4. **Start the Application**:

   ```bash
   npm start
   ```

5. **Interact with the API**:
   - Use a tool like Postman to test the API endpoints.

---

## Application Structure

### **Files and Functionality**

1. **`models/Book.js`**:

   - Defines the `Book` model with fields such as `title`, `author`, `isbn`, and more.

2. **`models/Library.js`**:

   - Defines the `Library` model with fields like `name`, `location`, and `book_capacity`.

3. **`seeds/bookSeeds.js`**:

   - Seeds the database with sample data for books and libraries using `bulkCreate`.

4. **`routes/api/bookRoutes.js`**:
   - Provides `PUT` and `DELETE` routes for updating and deleting books by `book_id`.

---

## Expected Behavior

1. **Database Seeding**:

   - Runs `seeds/bookSeeds.js` to populate the database with sample data.

2. **API Endpoints**:

   - `PUT /api/books/:book_id`: Updates a book's details based on its ID.
   - `DELETE /api/books/:book_id`: Deletes a book based on its ID.

3. **Async/Await**:
   - Ensures promises are handled cleanly and sequentially during database operations.

---

## Example Usage

### **Seeding the Database**

Run:

```bash
npm run seed
```

Expected Output:

```
All Seeds Planted
```

### **API Request Examples**

1. **Update a Book**:

   - Endpoint: `PUT /api/books/:book_id`
   - Payload:
     ```json
     {
       "title": "Updated Book Title",
       "author": "Updated Author",
       "isbn": "1234567890123",
       "pages": 300,
       "edition": 2,
       "is_paperback": true
     }
     ```

2. **Delete a Book**:
   - Endpoint: `DELETE /api/books/:book_id`

---

## Summary

This project demonstrates a modern approach to building database-backed applications using Sequelize ORM and async/await. It serves as a practical example of managing data models, seeding databases, and building RESTful APIs with enhanced readability and maintainability.
