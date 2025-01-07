# ORM: Update and Delete Operations

## Concepts Covered

- Updating Records in a Database with Sequelize
- Deleting Records from a Database with Sequelize
- Implementing RESTful API Endpoints for Inventory Management

## Learning Objectives

1. Understand how to use Sequelize's `update` method to modify database records.
2. Learn how to delete records from a database using Sequelize's `destroy` method.
3. Implement and test RESTful API routes for updating and deleting resources.
4. Practice managing inventory dynamically with CRUD operations.

## Summary

This guide demonstrates how to implement and test API routes for updating and deleting records in a PostgreSQL database using Sequelize. These operations allow dynamic management of a bookstore's inventory.

## Routes Overview

### **PUT** `/api/books/:book_id`

- **Purpose**: Updates a book's details in the database.
- **Request**: Requires `book_id` in the URL and updated book data in the request body.
- **Response**:
  - Success: Returns a confirmation message if the update is successful.
  - Error: Returns a 404 error if the book is not found or a 500 error for other issues.

### **DELETE** `/api/books/:book_id`

- **Purpose**: Deletes a book from the database.
- **Request**: Requires `book_id` in the URL to specify which book to delete.
- **Response**:
  - Success: Returns a confirmation message if the deletion is successful.
  - Error: Returns a 404 error if the book is not found or a 500 error for other issues.

### **POST** `/api/books/seed`

- **Purpose**: Seeds the database with predefined book data for testing purposes.
- **Response**: Confirms successful seeding of the database.

## Example Usage

### Update a Book

**PUT** `/api/books/1`

**Request Body**:

```json
{
  "title": "Updated Book Title",
  "pages": 400
}
```

**Response**:

```json
{
  "message": "Book updated successfully."
}
```

### Delete a Book

**DELETE** `/api/books/1`

**Response**:

```json
{
  "message": "Book deleted successfully."
}
```

## Verification Steps

1. **Testing the PUT Route**:

   - Use Postman or cURL to send a PUT request with updated book data.
   - Verify the changes in the database.

2. **Testing the DELETE Route**:

   - Use Postman or cURL to send a DELETE request for a specific `book_id`.
   - Confirm the book is removed from the database.

3. **Testing the Seed Route**:
   - Use Postman or cURL to trigger the `POST /seed` route.
   - Verify that predefined books are added to the database.
