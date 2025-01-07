# ORM: Create and Read Operations

## Concepts Covered

- Creating and Reading Data Using Sequelize and Express.js
- Defining API Endpoints for CRUD Operations
- Bulk Data Creation for Seeding Databases
- Filtering and Selecting Attributes in Queries

## Learning Objectives

1. Understand how to implement Sequelize-powered routes for creating and reading data.
2. Learn how to define API endpoints that support both single and bulk data creation.
3. Explore filtering data using `where` clauses and customizing attributes with `exclude`.
4. Practice ordering query results with Sequelize's `order` property.

## Summary

This guide explains how to create and read data from a PostgreSQL database using Sequelize within an Express.js application. The implementation includes:

1. **Retrieve All Books**: An endpoint to fetch all books from the database.
2. **Retrieve by ID**: A route to find a book by its primary key.
3. **Filter by Attributes**: A route to retrieve paperbacks, excluding unnecessary fields and ordering results alphabetically by title.
4. **Single Book Creation**: An endpoint to create a single book entry with user-provided data.
5. **Bulk Book Creation**: A route to seed the database with predefined book data.

## Routes Overview

### **GET** `/`

- Retrieves all books from the database.
- Returns a JSON response with the list of books.

### **GET** `/paperbacks`

- Fetches all paperback books.
- Excludes `is_paperback` and `edition` fields from the response.
- Orders books alphabetically by `title`.

### **GET** `/:id`

- Finds a single book by its `book_id`.
- Returns a JSON response with the book details.

### **POST** `/`

- Creates a new book entry.
- Accepts user input through the request body.

### **POST** `/seed`

- Seeds the database with multiple book entries.
- Populates the database with a predefined list of books for testing.

## Verification

1. Start the server and test the routes using a tool like Postman or cURL.
2. Test data retrieval by:
   - Fetching all books (`GET /`).
   - Filtering for paperbacks (`GET /paperbacks`).
   - Fetching a specific book by ID (`GET /:id`).
3. Verify data creation:
   - Create a new book using `POST /`.
   - Seed the database with predefined books using `POST /seed`.
