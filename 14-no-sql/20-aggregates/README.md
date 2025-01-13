# NoSQL Aggregates

## Introduction

This project demonstrates how to use MongoDB's aggregation framework to perform complex data analysis and aggregation tasks. We use a `Book` model to explore various aggregate operations such as summing, averaging, finding maximum and minimum values, and filtering documents.

---

## Key Concepts

1. **Aggregation Framework**:

   - The aggregation framework in MongoDB processes data records and returns computed results. It is similar to SQL's `GROUP BY` clause but much more powerful.

2. **Pipeline**:

   - Aggregations are performed by creating a pipeline of stages, each stage performing an operation on the data.

3. **Common Stages**:

   - `$match`: Filters documents based on a condition.
   - `$group`: Groups documents and performs aggregate calculations like `$sum`, `$avg`, `$max`, and `$min`.

4. **Use Cases**:
   - Summing up prices of books in stock.
   - Calculating average, maximum, and minimum prices of books.

---

## Code Overview

### `server.js`

```javascript
const express = require("express");
const db = require("./config/connection");
// Require model
const { Book } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/books", async (req, res) => {
  try {
    // Using model in route
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(err);
  }
});

// Get Aggregate Functions
app.get("/books/sum-price", async (req, res) => {
  try {
    // Call aggregate() on model
    const result = await Book.aggregate([
      // Filter books that are in stock
      { $match: { inStock: true } },
      {
        $group: {
          // Group by null (no additional grouping by id)
          _id: null,
          // Sum of all prices
          sum_price: { $sum: "$price" },
          // Average of all prices
          avg_price: { $avg: "$price" },
          // Maximum price
          max_price: { $max: "$price" },
          // Minimum price
          min_price: { $min: "$price" },
        },
      },
    ]);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
```

### `models/Book.js`

```javascript
const mongoose = require("mongoose");

// Construct a new instance of the schema class
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

// Using mongoose.model() to compile a model based on the schema 'bookSchema'
const Book = mongoose.model("MyBook", bookSchema);

// Create a new instance of the model, a document
Book.create([
  { title: "Hello, World", price: 5, inStock: true },
  { title: "Hello World 2.0", price: 10, inStock: false },
  { title: "Hello, World 3,0", price: 7, inStock: true },
  { title: "Hello World 4.0", price: 20, inStock: true },
  { title: "Hello, World 5.0", price: 2, inStock: false },
  { title: "Hello World Infinity", price: 25, inStock: false },
  { title: "Hello World Infinity and Beyond", price: 4, inStock: true },
]);

module.exports = Book;
```

---

## Usage

1. **Start the Server**:

   ```bash
   npm start
   ```

2. **Endpoints**:

   - **GET `/books`**:
     Retrieves all books in the database.
   - **GET `/books/sum-price`**:
     Aggregates data for books in stock:
     - Total price (`sum_price`)
     - Average price (`avg_price`)
     - Maximum price (`max_price`)
     - Minimum price (`min_price`)

3. **Example Request**:
   - URL: `http://localhost:3001/books/sum-price`
   - Response:
     ```json
     [
       {
         "_id": null,
         "sum_price": 36,
         "avg_price": 9,
         "max_price": 20,
         "min_price": 4
       }
     ]
     ```

---

## Summary

This project demonstrates the use of MongoDB's aggregation framework to perform complex queries and data analysis. By defining aggregation pipelines, we can calculate sums, averages, and more on specific subsets of data.

---

## Resources

- [MongoDB Aggregation Framework](https://www.mongodb.com/docs/manual/aggregation/)
- [Mongoose Aggregations](https://mongoosejs.com/docs/api/aggregate.html)
- [Express.js Documentation](https://expressjs.com/)
