# Object-Relational Mapping with SQL Literals

## Overview

This project demonstrates the use of **SQL Literals** within Sequelize to incorporate raw SQL expressions into queries. It includes routes that count specific data (e.g., short books) for readers by embedding SQL within Sequelize's `literal` function.

---

## Key Features

1. **SQL Literals**:

   - Leverages `sequelize.literal` to embed raw SQL expressions within Sequelize queries.

2. **Dynamic Data Aggregation**:

   - Calculates derived attributes such as the count of short books (100–300 pages) for each reader.

3. **RESTful API**:

   - Provides routes for CRUD operations on the `Reader` model with aggregated data.

4. **Seamless Integration with Sequelize**:
   - Combines Sequelize's ORM capabilities with the flexibility of raw SQL.

---

## Concepts Covered

1. **SQL Literals in Sequelize**:

   - Uses `sequelize.literal` to execute raw SQL directly within Sequelize queries.

2. **Dynamic Attributes**:

   - Adds computed attributes (e.g., `shortBooks`) to Sequelize model queries.

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
   - Associated with `LibraryCard` (one-to-one) and `Book` (one-to-many).

2. **`models/Book.js`**:

   - Defines the `Book` model with fields for `id`, `title`, `author`, `isbn`, `pages`, and `reader_id`.

3. **`routes/api/readerRoutes.js`**:
   - Provides API routes for:
     - `GET /api/readers`: Retrieves all readers with their associated library cards, books, and the count of short books (100–300 pages).
     - `GET /api/readers/:id`: Retrieves a single reader by ID with their associated data and short book count.
     - `POST /api/readers`: Creates a new reader.
     - `DELETE /api/readers/:id`: Deletes a reader by ID.

---

## Expected Behavior

1. **SQL Literals**:

   - Adds a computed attribute, `shortBooks`, that counts the number of short books (100–300 pages) for each reader.

2. **Data Aggregation**:

   - Dynamically calculates derived attributes using raw SQL within Sequelize queries.

3. **CRUD Operations**:
   - Supports create, read, and delete operations for the `Reader` model.

---

## Example Usage

### **Retrieving Readers with Short Book Count**

1. **Get All Readers**:

   - Endpoint: `GET /api/readers`
   - Response includes associated library cards, books, and the count of short books:
     ```json
     [
       {
         "id": 1,
         "name": "Jane Doe",
         "shortBooks": 3,
         "libraryCard": { ... },
         "books": [ ... ]
       }
     ]
     ```

2. **Get a Single Reader**:
   - Endpoint: `GET /api/readers/1`
   - Response includes the associated library card, books, and short book count:
     ```json
     {
       "id": 1,
       "name": "Jane Doe",
       "shortBooks": 3,
       "libraryCard": { ... },
       "books": [ ... ]
     }
     ```

---

## Summary

This project showcases how to use SQL Literals in Sequelize for advanced data aggregation and dynamic attributes. By combining raw SQL with Sequelize's ORM capabilities, it demonstrates how to efficiently calculate and include derived data in API responses.
