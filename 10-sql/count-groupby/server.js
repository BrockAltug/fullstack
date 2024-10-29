const express = require('express');
const { Pool } = require('pg');
require('dotenv').config(); // load environment variables

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool({
  user: process.env.DB_USER,           // use DB_USER from .env
  password: process.env.DB_PASSWORD,   // use DB_PASSWORD from .env
  host: process.env.DB_HOST,           // use DB_HOST from .env
  database: process.env.DB_DATABASE,   // use DB_DATABASE from .env
});

pool.connect((err) => {
  if (err) {
    console.error('Failed to connect to the database:', err.stack);
  } else {
    console.log('Connected to the books_db database.');
  }
});

// this is a query to get the total count of rows in favorite_books grouped by in_stock
pool.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', (err, { rows }) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }
});

// this is a query to get sum, max, min, and average of quantity in favorite_books grouped by section
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

// this is the port that the server is listening on
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});