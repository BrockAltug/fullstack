# NoSQL CRUD with Mongoose

## Key Concepts

1. **CRUD Operations with Mongoose**:

   - Mongoose simplifies working with MongoDB by providing a schema-based solution for modeling application data.

2. **Core Methods**:

   - **Create**: Add new documents to a MongoDB collection.
   - **Read**: Query and retrieve documents.
   - **Update**: Modify existing documents.
   - **Delete**: Remove documents from a collection.

3. **Express Routes**:

   - Each route performs a specific operation on the database using Mongoose methods.

4. **Data Validation**:
   - Mongoose schemas validate the structure and content of data before saving to MongoDB.

---

## Code Overview

### `server.js`

```javascript
const express = require("express");
const db = require("./config/connection");
// Require model
const { Genre } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a new document
app.post("/genres", (req, res) => {
  const newGenre = new Genre({ name: req.body.name });
  newGenre.save();
  if (newGenre) {
    res.status(200).json(newGenre);
  } else {
    console.log("Uh Oh, something went wrong");
    res.status(500).json({ message: "something went wrong" });
  }
});

// Find all documents
app.get("/genres", async (req, res) => {
  try {
    const result = await Genre.find({});
    res.status(200).json(result);
  } catch (err) {
    console.log("Uh Oh, something went wrong");
    res.status(500).json({ message: "something went wrong" });
  }
});

// Find a single document by name
app.get("/genres/:name", async (req, res) => {
  try {
    const result = await Genre.findOne({ name: req.params.name });
    res.status(200).json(result);
  } catch (err) {
    console.log("Uh Oh, something went wrong");
    res.status(500).json({ message: "something went wrong" });
  }
});

// Delete a document by name
app.delete("/genres/:name", async (req, res) => {
  try {
    const result = await Genre.findOneAndDelete({ name: req.params.name });
    res.status(200).json(result);
    console.log(`Deleted: ${result}`);
  } catch (err) {
    console.log("Uh Oh, something went wrong");
    res.status(500).json({ message: "something went wrong" });
  }
});

// Update a document by name
app.put("/genres/:name", async (req, res) => {
  try {
    const result = await Genre.findOneAndUpdate(
      { name: req.params.name },
      { name: req.body.name },
      { new: true }
    );
    res.status(200).json(result);
    console.log(`Updated: ${result}`);
  } catch (err) {
    console.log("Uh Oh, something went wrong");
    res.status(500).json({ message: "something went wrong" });
  }
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
```

---

## Key Features

1. **CRUD Functionality**:

   - `POST /genres`: Create a new genre.
   - `GET /genres`: Retrieve all genres.
   - `GET /genres/:name`: Retrieve a specific genre by name.
   - `PUT /genres/:name`: Update a genre's name.
   - `DELETE /genres/:name`: Delete a genre by name.

2. **Mongoose Integration**:

   - Simplifies MongoDB interaction with a schema-based approach.
   - Includes methods like `find()`, `findOne()`, `findOneAndUpdate()`, and `findOneAndDelete()`.

3. **Real-Time Updates**:
   - The server listens for changes and updates the database accordingly.

---

## Usage

1. **Setup**:

   - Ensure MongoDB is running locally or provide a connection string in `config/connection.js`.

2. **Run the Server**:

   ```bash
   npm start
   ```

3. **API Endpoints**:
   - Create a genre:
     ```bash
     curl -X POST -H "Content-Type: application/json" -d '{"name":"Action"}' http://localhost:3001/genres
     ```
   - Retrieve all genres:
     ```bash
     curl http://localhost:3001/genres
     ```
   - Retrieve a genre by name:
     ```bash
     curl http://localhost:3001/genres/Action
     ```
   - Update a genre:
     ```bash
     curl -X PUT -H "Content-Type: application/json" -d '{"name":"Adventure"}' http://localhost:3001/genres/Action
     ```
   - Delete a genre:
     ```bash
     curl -X DELETE http://localhost:3001/genres/Adventure
     ```

---

## Reflection

This project demonstrates the power and simplicity of Mongoose when performing CRUD operations in a NoSQL database. It highlights how to efficiently manage data structures, validate data, and build APIs.

---

## Resources

- [Mongoose Documentation](https://mongoosejs.com/docs/)
