# PostgreSQL Joining Tables Setup

## Concepts Covered

- SQL Joins: Combining Data from Multiple Tables
- Database and Table Management
- Inserting Seed Data into Tables

## Learning Objectives

1. Understand how to join tables in PostgreSQL to combine related data.
2. Learn how to create a database and define a table structure with foreign key relationships.
3. Practice inserting seed data into tables for testing and demonstration purposes.

## Schema Setup Instructions

### Step 1: Drop Existing Database

Start by dropping the database if it exists, and then create a new database named `books_db`. This ensures a clean environment for your data.

### Step 2: Connect to the New Database

After creating `books_db`, connect to it to execute further SQL commands.

### Step 3: Create the Book Prices Table

Define the structure of the `book_prices` table, which includes:

- `id`: A unique identifier for each book price, defined as `SERIAL PRIMARY KEY`.
- `price`: An integer representing the price of the book, which cannot be NULL.

### Step 4: Create the Favorite Books Table

Define the structure of the `favorite_books` table, which includes:

- `id`: A unique identifier for each favorite book, defined as `SERIAL PRIMARY KEY`.
- `book_name`: A string field limited to 30 characters for storing the name of the book, which cannot be NULL.
- `in_stock`: A boolean field indicating whether the book is available in stock.
- `book_price`: An integer field that refers to the price of the book.
  - This field is a foreign key referencing the `id` of the `book_prices` table, with a cascading option to set to NULL if the referenced price is deleted.

## Data Insertion Instructions

### Step 5: Insert Data into the Book Prices Table

Populate the `book_prices` table with initial price data:

- Price: 1
- Price: 2
- Price: 5
- Price: 10
- Price: 15

### Step 6: Insert Data into the Favorite Books Table

Insert initial favorite book entries into the `favorite_books` table:

- Book Name: 'The Great Gatsby', In Stock: true, Book Price: 1
- Book Name: 'Huckleberry Finn', In Stock: true, Book Price: 3
- Book Name: '100 Years of Solitude', In Stock: false, Book Price: 5
- Book Name: 'Things Fall Apart', In Stock: false, Book Price: 1
- Book Name: 'Crime and Punishment', In Stock: true, Book Price: 2
- Book Name: 'Moby Dick', In Stock: true, Book Price: 4
- Book Name: 'Decameron', In Stock: false, Book Price: 1

## Joining Tables

### Step 7: Querying Joined Data

To retrieve data from both tables, use the following SQL command to perform a join:

```sql
SELECT *
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;
```

This command selects all columns from both the favorite_books and book_prices tables where the book_price in favorite_books matches the id in book_prices.

### Summary

This guide provides a comprehensive overview of setting up a PostgreSQL database with two related tables and demonstrates how to join those tables to retrieve combined data. By following these steps, you can effectively manage book pricing and favorite book information, ensuring data integrity through foreign key relationships. Understanding how to perform joins is crucial for working with relational databases and retrieving meaningful data from multiple sources.
