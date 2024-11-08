
# Express.js and PostgreSQL with dotenv Setup

## Concepts Covered
- Using dotenv for environment variable management
- Setting up an Express.js server
- Connecting to a PostgreSQL database
- Querying data from the database

## Learning Objectives
1. Understand how to use the dotenv package to manage environment variables in Node.js applications.
2. Learn how to set up an Express.js server to handle HTTP requests.
3. Practice connecting to a PostgreSQL database using the pg module.
4. Execute SQL queries to interact with the database.

## Project Setup Instructions

### Step 1: Install Required Packages
To set up the project, ensure you have Node.js installed, then install the necessary packages:
```bash
npm install express pg dotenv
```

### Step 2: Create Environment Variables
Create a `.env` file in the root directory of your project with the following variables:
```
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_DATABASE=your_database_name
DB_PORT=your_database_port
PORT=3001  # Optional, defaults to 3001 if not set
```

### Step 3: Create the Express Application
Set up your Express application in a file (e.g., `app.js` or `server.js`) with the following code:
```javascript
const express = require('express');
const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to the database
const pool = new Pool({
  user: process.env.DB_USER,           // Use DB_USER from .env
  password: process.env.DB_PASSWORD,   // Use DB_PASSWORD from .env
  host: process.env.DB_HOST,           // Use DB_HOST from .env
  database: process.env.DB_DATABASE,   // Use DB_DATABASE from .env
  port: process.env.DB_PORT            // Use DB_PORT from .env
});

pool.connect((err) => {
  if (err) {
    console.error('Failed to connect to the database:', err.stack);
  } else {
    console.log('Connected to the books_db database.');
  }
});

// Query to get the total count of rows in favorite_books grouped by in_stock
pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', (err, { rows }) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }
});

// Query to get sum, max, min, and average of quantity in favorite_books grouped by section
pool.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', (err, { rows }) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Step 4: Run the Application
To start your application, run the following command in your terminal:
```bash
node app.js
```

## Summary
This guide provides an overview of setting up an Express.js application with PostgreSQL while managing environment variables using dotenv. By following these steps, you can create a robust server capable of interacting with a PostgreSQL database, executing queries, and handling HTTP requests efficiently.
