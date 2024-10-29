const express = require('express');
// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool. Read up on the benefits here: https://node-postgres.com/features/pooling
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    // TODO: Enter PostgreSQL username
    user: 'postgres',
    // TODO: Enter PostgreSQL password
    password: 'password',
    host: 'localhost',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
)

pool.connect();

let deletedRow = 2;

pool.query(`DELETE FROM favorite_books WHERE id = $1`, [1] ,(err, {rows}) => {
  if (err) {
    console.log(err);
  }
  console.log(rows);
});

// Query database
pool.query('SELECT * FROM favorite_books', function (err, {rows}) {
  console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
