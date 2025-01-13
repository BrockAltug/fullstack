# NoSQL Update and Delete

## Concepts Covered

1. **MongoDB Operations**:

   - Inserting documents into a collection.
   - Retrieving documents using queries.
   - Deleting documents using their unique identifiers.

2. **Express.js Integration**:

   - Using Express.js to handle HTTP requests for CRUD operations.

3. **ObjectId Class**:
   - Utilizing MongoDB's `ObjectId` class to identify and manipulate specific documents.

---

## Application Overview

This project demonstrates how to perform **Update** and **Delete** operations in a MongoDB database using **Node.js**, **Express.js**, and the MongoDB **ObjectId** class. Below is the functionality implemented:

---

### Features

1. **Insert Documents**:

   - **Route**: `POST /books`
   - **Description**: Adds a new book document to the collection.

2. **Retrieve Documents**:

   - **Route**: `GET /books`
   - **Description**: Fetches all documents from the `bookCollection`.

3. **Delete Document by ID**:
   - **Route**: `DELETE /books/:id`
   - **Description**: Deletes a document from the collection by its unique `_id`.

---

### Code Highlights

#### Insert a Document

```javascript
app.post("/books", (req, res) => {
  db.collection("bookCollection")
    .insertOne({ title: req.body.title, author: req.body.author })
    .then((results) => res.json(results))
    .catch((err) => {
      if (err) throw err;
    });
});
```

#### Retrieve All Documents

```javascript
app.get("/books", (req, res) => {
  db.collection("bookCollection")
    .find({})
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => {
      if (err) throw err;
    });
});
```

#### Delete a Document by ID

```javascript
app.delete("/books/:id", (req, res) => {
  const bookId = new ObjectId(req.params.id);

  db.collection("bookCollection")
    .deleteOne({ _id: bookId })
    .then((results) => {
      res.send(
        results.deletedCount ? "Document deleted" : "No document found!"
      );
    })
    .catch((err) => {
      if (err) throw err;
    });
});
```

---

## Getting Started

### Prerequisites

- **Node.js** installed on your local machine.
- **MongoDB** instance running locally or in the cloud.

---

### Installation

1. Clone the repository or download the source code.
2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start your MongoDB server locally or connect to a remote instance.

---

### Usage

1. **Start the Server**:

   ```bash
   node server.js
   ```

2. **Test the Endpoints**:
   - Use a tool like **Postman** or **cURL** to interact with the following routes:
     - `POST /books`: Add a new book by sending a JSON body with `title` and `author`.
     - `GET /books`: Retrieve all books in the collection.
     - `DELETE /books/:id`: Delete a book by passing its `_id` as a parameter.

---

## Example Data

### Sample POST Request Body

```json
{
  "title": "1984",
  "author": "George Orwell"
}
```

### Sample DELETE Request

```bash
DELETE /books/63e1f3d9d4e8a9e95c38f5bc
```

---

## Reflection

This project demonstrates the following:

- Using MongoDB and Express.js for building a backend API.
- Managing MongoDB `ObjectId` for specific document operations.
- Building RESTful endpoints for basic CRUD operations in a NoSQL database.

---

## Resources

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Postman](https://www.postman.com/)
