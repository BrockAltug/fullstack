# NoSQL Sub Documents

## Description

This project demonstrates the use of **NoSQL subdocuments** in a MongoDB database using Mongoose. Subdocuments allow the embedding of related data within a single document, enabling efficient data modeling for hierarchical data structures. In this example, the `Library` model contains embedded `Book` subdocuments.

---

## Key Features

1. **Subdocuments**:

   - Demonstrates embedding child documents (`Book`) into a parent document (`Library`).

2. **Schemas**:

   - Uses separate schemas for parent and subdocuments to define the shape and validation rules for the data.

3. **Mongoose Models**:

   - Implements the `Library` model for working with parent documents that contain embedded `Book` subdocuments.

4. **CRUD Operations**:
   - Retrieves all parent documents (`Library`) containing subdocuments (`Book`) using `Library.find()`.

---

## Project Structure

- **`server.js`**:
  - Sets up an Express server and defines a route to retrieve all libraries and their books.
- **`models/Library.js`**:
  - Defines the schemas and models for the parent (`Library`) and child (`Book`) documents.

---

## Code Overview

### Library Model (`models/Library.js`)

Defines the parent `Library` schema and the embedded `Book` subdocument schema.

```javascript
const mongoose = require("mongoose");

// Define schema for subdocuments
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
});

// Define schema for parent documents
const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  books: [bookSchema], // Embeds subdocuments as an array
  lastAccessed: { type: Date, default: Date.now },
});

const Library = mongoose.model("Library", librarySchema);

// Example: Creating a library document with embedded books
const bookData = [
  { title: "Diary of Anne Frank", price: 10 },
  { title: "One Thousand Years of Solitude", price: 20 },
  { title: "History of Hogwarts", price: 5 },
];

Library.create({ name: "Books", books: bookData })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

module.exports = Library;
```

### Server File (`server.js`)

Sets up the server and defines a route to fetch all libraries and their books.

```javascript
const express = require("express");
const db = require("./config/connection");
const { Library } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route to retrieve all libraries
app.get("/books", async (req, res) => {
  try {
    const result = await Library.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
```

---

## Installation

1. Clone the repository and navigate to the project directory.
2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the MongoDB server locally.
4. Seed the database by running the application.

---

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Retrieve all libraries and their books using the following endpoint:

   - **GET** `/books`

   Example response:

   ```json
   [
     {
       "_id": "64b6f123abc456",
       "name": "Books",
       "books": [
         { "title": "Diary of Anne Frank", "price": 10 },
         { "title": "One Thousand Years of Solitude", "price": 20 },
         { "title": "History of Hogwarts", "price": 5 }
       ],
       "lastAccessed": "2025-01-10T12:00:00Z"
     }
   ]
   ```

---

## Summary

This project highlights the power of MongoDB subdocuments for modeling hierarchical data structures. By embedding subdocuments, developers can maintain a logical and efficient structure for related data.

---

## Resources

- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- [MongoDB Documentation](https://www.mongodb.com/docs/manual/)
- [Subdocuments in Mongoose](https://mongoosejs.com/docs/subdocs.html)
