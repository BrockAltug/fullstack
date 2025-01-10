# NoSQL Create and Read Operations

## Concepts Covered

1. **NoSQL and MongoDB**:

   - MongoDB is a NoSQL database that stores data in JSON-like documents with flexible schemas.

2. **MongoClient**:

   - The `MongoClient` class is used to interact with the MongoDB database.

3. **Database and Collection**:

   - A database (`inventoryDB`) is created to hold collections (`bookCollection`).
   - Collections store multiple documents.

4. **CRUD Operations**:

   - **Create**: Insert single or multiple documents into a collection.
   - **Read**: Query all documents from a collection.

5. **Express Integration**:
   - Express.js is used to handle HTTP requests for interacting with the database.

---

## Code Overview

### **Server Implementation**

#### **`server.js`**

```javascript
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;
const connectionStringURI = \`mongodb://127.0.0.1:27017\`;
const client = new MongoClient(connectionStringURI);

let db;
const dbName = 'inventoryDB';

client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);
    app.listen(port, () => {
      console.log(\`Example app listening at http://localhost:\${port}\`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

app.use(express.json());

app.post('/books', (req, res) => {
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author }
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

app.post('/books/seed', (req, res) => {
  db.collection('bookCollection').insertMany(
    [
      { "title": "Oh the Places We Will Go!" },
      { "title": "Diary of Anne Frank" }
    ]
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

app.get('/books', (req, res) => {
  db.collection('bookCollection')
    .find({})
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});
```

---

## Key Points

1. **MongoDB Connection**:

   - The `MongoClient` establishes a connection to a MongoDB instance running locally.

2. **Database Initialization**:

   - The `db` object holds the initialized database `inventoryDB`.

3. **CRUD Functionality**:

   - **POST `/books`**: Adds a single document to the `bookCollection`.
   - **POST `/books/seed`**: Inserts multiple sample documents.
   - **GET `/books`**: Retrieves all documents from the `bookCollection`.

4. **Error Handling**:
   - Handles errors during database operations using `.catch()`.

---

## Usage Instructions

### **Setup**

1. **Install Dependencies**:

   ```bash
   npm install express mongodb
   ```

2. **Start MongoDB**:

   - Ensure the MongoDB service is running locally.

3. **Run the Server**:
   ```bash
   node server.js
   ```

### **Endpoints**

1. **Add a Single Book**:

   - Method: `POST`
   - Endpoint: `/books`
   - Example Body:
     ```json
     {
       "title": "1984",
       "author": "George Orwell"
     }
     ```

2. **Seed Sample Data**:

   - Method: `POST`
   - Endpoint: `/books/seed`

3. **Fetch All Books**:
   - Method: `GET`
   - Endpoint: `/books`

---

## Example Output

### Seed Data Response:

```json
{
  "acknowledged": true,
  "insertedCount": 2,
  "insertedIds": {
    "0": "ObjectId('...')",
    "1": "ObjectId('...')"
  }
}
```

### Fetch All Books Response:

```json
[
  {
    "_id": "ObjectId('...')",
    "title": "Oh the Places We Will Go!"
  },
  {
    "_id": "ObjectId('...')",
    "title": "Diary of Anne Frank"
  }
]
```

---

## Summary

This example demonstrates how to use MongoDB to create and read documents using Node.js and Express. It provides a solid foundation for building RESTful APIs backed by a NoSQL database.
