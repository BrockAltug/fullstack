# Parameterized Queries with Express.js and PostgreSQL

## Concepts Covered

- Using Parameterized Queries to Prevent SQL Injection
- Setting Up an Express.js Server
- Managing PostgreSQL Connections with a Connection Pool

## Learning Objectives

1. Understand the importance of using parameterized queries for database operations to enhance security.
2. Learn how to set up an Express.js server that interacts with a PostgreSQL database.
3. Practice connecting to a PostgreSQL database using a connection pool for efficient resource management.

## Project Setup Instructions

### Step 1: Install Required Packages

Ensure you have Node.js installed, then install the necessary packages:

```bash
npm install express pg
```

### Step 2: Set Up Your Express Application

Create your Express application in a file (e.g., `app.js`) with the following code:

```javascript
const express = require("express");
const { Pool } = require("pg");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    user: "postgres", // Enter your PostgreSQL username
    password: "password", // Enter your PostgreSQL password
    host: "localhost",
    database: "books_db",
  },
  console.log(`Connected to the books_db database.`)
);

pool.connect();

let deletedRow = 2;

// Use a parameterized query to delete a row from the favorite_books table
pool.query(`DELETE FROM favorite_books WHERE id = $1`, [1], (err, { rows }) => {
  if (err) {
    console.log(err);
  }
  console.log(rows);
});

// Query database for all favorite books
pool.query("SELECT * FROM favorite_books", (err, { rows }) => {
  console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Step 3: Run the Application

To start your application, run the following command in your terminal:

```bash
node app.js
```

## Summary

This guide provides an overview of using parameterized queries with Express.js and PostgreSQL to safely interact with a database. By following these steps, you can create a robust server capable of executing secure SQL operations while managing resources efficiently with connection pooling. Understanding parameterized queries is essential for preventing SQL injection attacks and ensuring the integrity of your data interactions.
