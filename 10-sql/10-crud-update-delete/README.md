# SQL CRUD Operations: Update and Delete

## Overview

This project demonstrates the use of SQL to perform CRUD operations, specifically focusing on **Update** and **Delete** statements. It includes creating a database, inserting data, and updating a specific record in a table.

---

## Database Schema

### schema.sql

```sql
DROP DATABASE IF EXISTS books_db;

-- Creates the "books_db" database --
CREATE DATABASE books_db;

-- Use books_db database --
\c books_db;

CREATE TABLE fiction (
  -- Creates a numeric column called "id" which cannot contain null --
  id INTEGER NOT NULL,
  -- Creates a string column called "name" which can hold up to 100 characters and cannot contain null --
  name VARCHAR(100) NOT NULL
);
```

---

## Insert Data

### insert.sql

```sql
-- Insert multiple fiction books --
INSERT INTO fiction (id, name)
VALUES
    (001, 'To Kill a Mockingbird'),
    (002, '100 Years of Solitude'),
    (003, 'War and Peace');
```

---

## Update Data

### update.sql

```sql
-- Update fiction where id = 2 --
UPDATE fiction
SET name = 'Candide'
WHERE id = 2;
```

- **Description**: Changes the name of the book with `id = 2` from "100 Years of Solitude" to "Candide".
- **Expected Result**:
  - Before Update:
    ```
    id  | name
    ----|------------------------
    1   | To Kill a Mockingbird
    2   | 100 Years of Solitude
    3   | War and Peace
    ```
  - After Update:
    ```
    id  | name
    ----|------------------------
    1   | To Kill a Mockingbird
    2   | Candide
    3   | War and Peace
    ```

---

## Additional Notes

- Ensure that the `books_db` database is created and used before running the scripts.
- The `fiction` table must have valid IDs and names before attempting an update or delete operation.

---

## Summary

This project highlights how to create a database and table, insert initial data, and perform an update operation using SQL. It serves as a foundational example of SQL CRUD operations.
