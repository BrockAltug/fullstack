# PostgreSQL Schema and Data Insertion Guide

## Concepts Covered

- Database and Table Management in PostgreSQL
- Data Insertion Techniques
- Querying Data from Tables

## Learning Objectives

1. Understand how to create and manage a PostgreSQL database and its tables.
2. Learn how to insert data into tables and perform basic queries.
3. Practice safe database management by dropping existing databases when necessary.

## SQL Commands Overview

### Step 1: Drop Existing Database

To start fresh, use the command to drop the `books_db` database if it already exists. This ensures any existing `books_db` is removed, preventing conflicts when creating a new database.

### Step 2: Create a New Database

Create a new database named `books_db`. This initializes a new database called `books_db`, setting up a clean environment for your data.

### Step 3: Connect to the New Database

Connect to the newly created `books_db`. This allows you to execute commands within this specific database.

### Step 4: Create a Table for Biographies

Define a table structure for storing biographies. This command creates a `biographies` table with two columns:

- `id`: An integer column that cannot be null.
- `name`: A string column that can hold up to 100 characters and cannot be null.

### Step 5: Insert Data into the Biographies Table

Insert data into the `biographies` table. This command adds three records to the `biographies` table, specifying values for the `id` and `name` columns.

### Step 6: Query Data from the Biographies Table

Retrieve all records from the `biographies` table. This command selects and displays all data stored in the `biographies` table, allowing you to view the entries you've added.

## Summary

This guide provides a comprehensive overview of creating and managing a PostgreSQL database and table, along with inserting and querying data. By following these steps, you can effectively set up a database for managing book biographies, ensuring data integrity and accessibility. This foundational knowledge is essential for anyone looking to work with PostgreSQL in their projects
