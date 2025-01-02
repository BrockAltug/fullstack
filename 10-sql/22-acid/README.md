# ACID Transactions in PostgreSQL: Library Database Example

## Overview

This project demonstrates the concept of ACID transactions in PostgreSQL using a simple `library` database with `books` and `authors` tables. ACID (Atomicity, Consistency, Isolation, Durability) principles ensure reliable transactions and data integrity in relational databases. Here, we use a transaction block to guarantee that data inserts are atomic, meaning they will either complete fully or roll back entirely in case of any errors.

## Table of Contents

- [Overview](#overview)
- [Database Setup](#database-setup)
- [ACID Transaction Block](#acid-transaction-block)
- [Acceptance Criteria](#acceptance-criteria)
- [Additional Information](#additional-information)

## Database Setup

1. **Drop and Recreate the Database**: Ensures any existing `library` database is removed and recreated to start with a fresh schema.

   ```sql
   DROP DATABASE IF EXISTS library;

   -- Create a new database
   CREATE DATABASE library;

   -- Connect to the newly created database
   \c library;
   ```

2. **Define Tables**: We create `books` and `authors` tables with primary keys.

   ```sql
   DROP TABLE IF EXISTS books;
   DROP TABLE IF EXISTS authors;

   -- Create a books table
   CREATE TABLE books (
       book_id INTEGER PRIMARY KEY,
       book_name VARCHAR(255)
   );

   -- Create an authors table
   CREATE TABLE authors (
       author_id INTEGER PRIMARY KEY,
       author_name VARCHAR(255)
   );
   ```

## ACID Transaction Block

The following code snippet demonstrates an ACID-compliant transaction using PostgreSQL's `DO $$ ... END $$` block. The transaction includes `INSERT` operations for both tables, and it will roll back if any error occurs, ensuring that no partial data is inserted.

```sql
-- TODO: Add a transaction block here
DO $$
BEGIN
    INSERT INTO books (book_id, book_name)
    VALUES
        (1, 'Pride and Prejudice'),
        (2, 'To Kill a Mockingbird'),
        (3, 'The Great Gatsby');

    INSERT INTO authors (author_id, author_name)
    VALUES
        (10, 'Jane Austen'),
        (11, 'Harper Lee');

    -- Raise a notice upon successful completion
    RAISE NOTICE 'Transaction completed successfully, all records inserted.';

EXCEPTION
    WHEN OTHERS THEN
        -- Rollback on any error
        RAISE NOTICE 'Transaction failed, rolling back all changes.';
        ROLLBACK;
END $$;
```

## Acceptance Criteria

The transaction should meet the following criteria:

- **Atomicity**: The transaction is all-or-nothing. If an error occurs, all changes are rolled back.
- **Consistency**: Data integrity is maintained, as any violation will halt the transaction.
- **Isolation**: The block prevents partial changes from affecting other transactions.
- **Durability**: Once completed, the data remains in the database even if a failure occurs afterward.

## Additional Information

- **Post-Transaction Inserts**: You can perform additional insertions outside of the transaction block if required, as shown below:

  ```sql
  INSERT INTO books (book_id, book_name)
  VALUES
      (1, 'Pride and Prejudice'),
      (2, 'To Kill a Mockingbird'),
      (3, 'The Great Gatsby');

  INSERT INTO authors (author_id, author_name)
  VALUES
      (10, 'Jane Austen'),
      (11, 'Harper Lee');
  ```

This example provides a practical application of ACID principles in PostgreSQL, demonstrating how transaction blocks can be used to enforce data integrity in relational databases.
