# Object-Relational Mapping with One-to-Many Relationships

## Overview

This project demonstrates the implementation of a **One-to-Many Relationship** using Sequelize. It involves three models: `Reader`, `LibraryCard`, and `Book`. Each `Reader` has one associated `LibraryCard` and can have multiple `Books`, showcasing both one-to-one and one-to-many relationships.

---

## Key Features

1. **One-to-Many Relationship**:

   - Establishes a one-to-many association between `Reader` and `Book`.

2. **Data Modeling**:

   - Defines models for `Reader`, `LibraryCard`, and `Book` with proper foreign key references.

3. **RESTful API**:

   - Includes routes for CRUD operations on the `Reader` model with relationships handled seamlessly.

4. **Seamless Integration with Sequelize**:
   - Uses Sequelize's `hasOne`, `belongsTo`, and `hasMany` methods to define relationships.

---

## Concepts Covered

1. **One-to-Many Association**:

   - Links `Reader` and `Book` models with `foreignKey` and `onDelete` options.

2. **Data Relationships**:

   - Demonstrates how to retrieve associated data using Sequelize's `include` option for JOIN-like queries.

3. **RESTful API Design**:
   - Implements routes for CRUD operations on `Reader` and associated models.

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

1. **`models/Reader.js`**:

   - Defines the `Reader` model with fields for `id` and reader-specific details.
   - Establishes a one-to-one relationship with `LibraryCard`.
   - Establishes a one-to-many relationship with `Book`.

2. **`models/LibraryCard.js`**:

   - Defines the `LibraryCard` model with fields for `id`, `card_number` (UUID), and `reader_id` (foreign key).
   - Belongs to the `Reader` model.

3. **`models/Book.js`**:

   - Defines the `Book` model with fields for `id`, `title`, `author`, `isbn`, `pages`, `edition`, `is_paperback`, and `reader_id`.
   - Belongs to the `Reader` model.

4. **`models/index.js`**:

   - Links the `Reader`, `LibraryCard`, and `Book` models with appropriate associations:
     - `Reader.hasOne(LibraryCard)`
     - `Reader.hasMany(Book)`

5. **`routes/api/readerRoutes.js`**:
   - Provides API routes for:
     - `GET /api/readers`: Retrieves all readers with their associated library cards and books.
     - `GET /api/readers/:id`: Retrieves a single reader by ID with their associated library card and books.
     - `POST /api/readers`: Creates a new reader.
     - `DELETE /api/readers/:id`: Deletes a reader by ID.

---

## Expected Behavior

1. **One-to-Many Relationship**:

   - Each `Reader` has multiple `Books`, and deleting a `Reader` cascades to delete their associated `Books`.

2. **CRUD Operations**:

   - Supports create, read, update, and delete operations for all models.

3. **Data Retrieval**:
   - Fetches associated data using the `include` option in Sequelize queries.

---

## Example Usage

### **Creating a Reader and Associated Data**

1. **Create a Reader**:

   - Endpoint: `POST /api/readers`
   - Payload:
     ```json
     {
       "name": "Jane Doe",
       "email": "janedoe@example.com"
     }
     ```

2. **Create a Library Card**:

   - Endpoint: `POST /api/libraryCards`
   - Payload:
     ```json
     {
       "reader_id": 1
     }
     ```

3. **Create Books**:
   - Endpoint: `POST /api/books`
   - Payload for a single book:
     ```json
     {
       "title": "Book Title",
       "author": "Author Name",
       "isbn": "1234567890",
       "pages": 200,
       "edition": 1,
       "reader_id": 1
     }
     ```

### **Retrieving Readers with Books**

1. **Get All Readers**:

   - Endpoint: `GET /api/readers`
   - Response includes associated library cards and books.

2. **Get a Single Reader**:
   - Endpoint: `GET /api/readers/1`
   - Response includes the associated library card and books.

---

## Summary

This project demonstrates how to implement and utilize one-to-many relationships in Sequelize. By establishing associations and providing RESTful routes, it showcases how to manage related data effectively in a database-backed application.
