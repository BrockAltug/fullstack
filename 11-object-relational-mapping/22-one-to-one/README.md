# Object-Relational Mapping with One-to-One Relationships

## Overview

This project demonstrates the implementation of a **One-to-One Relationship** using Sequelize. It involves two models, `Reader` and `LibraryCard`, where each `Reader` has one associated `LibraryCard`, and each `LibraryCard` belongs to one `Reader`.

---

## Key Features

1. **One-to-One Relationship**:

   - Establishes a one-to-one association between `Reader` and `LibraryCard`.

2. **Data Modeling**:

   - Defines models for `Reader` and `LibraryCard` with proper foreign key references.

3. **RESTful API**:

   - Includes routes for CRUD operations on both models with relationships handled seamlessly.

4. **Seamless Integration with Sequelize**:
   - Uses Sequelize's `hasOne` and `belongsTo` methods to define the relationship.

---

## Concepts Covered

1. **One-to-One Association**:

   - Links `Reader` and `LibraryCard` models with `foreignKey` and `onDelete` options.

2. **Data Relationships**:

   - Demonstrates how to retrieve associated data using Sequelize's `include` option for JOIN-like queries.

3. **RESTful API Design**:
   - Implements routes for CRUD operations on `Reader` and `LibraryCard` with relationship-aware functionality.

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

2. **`models/LibraryCard.js`**:

   - Defines the `LibraryCard` model with fields for `id`, `card_number` (UUID), and `reader_id` (foreign key).
   - Belongs to the `Reader` model.

3. **`models/index.js`**:

   - Links the `Reader` and `LibraryCard` models with a one-to-one association.

4. **`routes/api/libraryCardRoutes.js`**:

   - Provides API routes for:
     - `GET /api/libraryCards`: Retrieves all library cards with associated readers.
     - `GET /api/libraryCards/:id`: Retrieves a single library card by ID with its associated reader.
     - `POST /api/libraryCards`: Creates a new library card for a specified reader.
     - `DELETE /api/libraryCards/:id`: Deletes a library card by ID.

5. **`routes/api/readerRoutes.js`**:
   - Provides API routes for:
     - `GET /api/readers`: Retrieves all readers with their associated library cards.
     - `GET /api/readers/:id`: Retrieves a single reader by ID with their associated library card.
     - `POST /api/readers`: Creates a new reader.
     - `DELETE /api/readers/:id`: Deletes a reader by ID.

---

## Expected Behavior

1. **One-to-One Relationship**:

   - Each `Reader` has one `LibraryCard`, and deleting a `Reader` cascades to delete their associated `LibraryCard`.

2. **CRUD Operations**:

   - Supports create, read, update, and delete operations for both models.

3. **Data Retrieval**:
   - Fetches associated data using the `include` option in Sequelize queries.

---

## Example Usage

### **Creating a Reader and Library Card**

1. **Create a Reader**:

   - Endpoint: `POST /api/readers`
   - Payload:
     ```json
     {
       "name": "John Doe",
       "email": "johndoe@example.com"
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

### **Retrieving Readers with Library Cards**

1. **Get All Readers**:

   - Endpoint: `GET /api/readers`
   - Response includes associated library cards.

2. **Get a Single Reader**:
   - Endpoint: `GET /api/readers/1`
   - Response includes the associated library card.

---

## Summary

This project showcases how to implement and utilize a one-to-one relationship in Sequelize. By establishing associations and providing RESTful routes, it demonstrates how to manage related data effectively in a database-backed application.
