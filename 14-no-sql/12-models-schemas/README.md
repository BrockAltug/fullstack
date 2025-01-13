# NoSQL Models and Schemas with Mongoose

## Concepts Covered

1. **Mongoose Models and Schemas**:

   - **Schema**: Defines the structure of the documents in a MongoDB collection.
   - **Model**: Provides an interface for interacting with the documents defined by the schema.

2. **Defining a Schema**:

   - Using `mongoose.Schema` to specify fields, their types, and validation rules.

3. **Creating and Querying Documents**:

   - Using `Model.create()` to insert new documents.
   - Using `Model.find()` to query documents from the database.

4. **MongoDB Integration**:
   - Using Mongoose as an Object Data Modeling (ODM) library to simplify MongoDB operations.

---

## Application Structure

### File: `server.js`

```javascript
const express = require("express");
const db = require("./config/connection");
const { Book } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/books", async (req, res) => {
  try {
    const result = await Book.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
```

### File: `models/Book.js`

```javascript
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema);

const handleError = (err) => console.error(err);

Book.create({
  title: "Diary of Anne Frank",
  author: "Anne Frank",
  publisher: "Scholastic",
  stockCount: 10,
  price: 10,
  inStock: true,
})
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));

Book.create({
  title: "Oh the Places You Will Go!",
  author: "Dr. Seuss",
})
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));

Book.create({ title: "Harold and the Purple Crayon" })
  .then((result) => console.log("Created new document", result))
  .catch((err) => handleError(err));

module.exports = Book;
```

---

## Instructions to Run

1. **Install Dependencies**:

   - Run the following command to install required packages:
     ```bash
     npm install
     ```

2. **Start the MongoDB Server**:

   - Ensure MongoDB is running on `mongodb://127.0.0.1:27017`.

3. **Run the Server**:

   - Start the application using:
     ```bash
     npm start
     ```

4. **Access the API**:
   - Use the `/books` endpoint to retrieve all books:
     ```
     GET http://localhost:3001/books
     ```

---

## Expected Behavior

- **Document Creation**:

  - Three books are created in the database when the server starts:
    - `Diary of Anne Frank`
    - `Oh the Places You Will Go!`
    - `Harold and the Purple Crayon`

- **Querying Data**:
  - The `/books` endpoint returns all documents in the `books` collection.

---

## Reflection

This application demonstrates how to define and use models and schemas with Mongoose to interact with a MongoDB database. By using schemas, we can enforce structure and validation on our data, ensuring consistency and reliability.

---

## Additional Resources

- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB Schema Design](https://www.mongodb.com/docs/manual/core/data-modeling-introduction/)
