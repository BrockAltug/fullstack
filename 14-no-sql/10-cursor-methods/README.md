# NoSQL Cursor Methods

## Introduction

This project demonstrates the use of **cursor methods** in MongoDB to manage and manipulate query results effectively. Cursor methods allow you to sort, skip, and limit the data returned by MongoDB queries, making it easier to handle large datasets.

---

## Key Features

1. **Database Setup**:

   - Connects to a MongoDB instance using the `MongoClient` class.
   - Seeds a database with sample data.

2. **Cursor Methods**:

   - **`sort()`**: Orders query results based on the specified field(s).
   - **`skip()`**: Skips a specified number of documents in the result set.
   - **`limit()`**: Limits the number of documents returned.

3. **RESTful API**:
   - A single GET endpoint (`/numbers`) that demonstrates the application of cursor methods.

---

## Concepts Covered

1. **MongoDB Cursor Methods**:

   - `sort()`: Sorts the documents by a specified field (ascending or descending).
   - `skip()`: Skips a given number of documents in the result set.
   - `limit()`: Restricts the number of documents returned in the result set.

2. **Express.js for RESTful API**:

   - Provides a lightweight server to expose MongoDB operations as API endpoints.

3. **Database Seeding**:
   - Prepopulates a MongoDB collection with sample numeric data.

---

## File Overview

### **server.js**

```javascript
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

const connectionStringURI = \`mongodb://127.0.0.1:27017\`;
const client = new MongoClient(connectionStringURI);
let db;

const dbName = 'numbersDB';

const data = [
  { number: 1 },
  { number: 7 },
  { number: -3 },
  { number: 11 },
  { number: 12 },
  { number: 1000 },
  { number: 8 },
  { number: 2 },
  { number: 15 },
  { number: 4 },
  { number: 2 },
  { number: 90 },
];

async function seedDBAndStartServer() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
    db = client.db(dbName);
    await db.collection('numberList').deleteMany({});
    await db.collection('numberList').insertMany(data);

    app.listen(port, () => {
      console.log(\`Example app listening at http://localhost:\${port}\`);
    });
  } catch (err) {
    console.error('Mongo connection error: ', err.message);
  }
}
seedDBAndStartServer();

app.use(express.json());

// Get request to read all the documents in a collection
app.get('/numbers', (req, res) => {
  db.collection('numberList')
    .find()
    .sort({ number: -1 })
    .skip(5)
    .limit(5)
    .toArray()
    .then(results => res.send(results))
    .catch(err => {
      if (err) throw err;
    });
});
```

---

## Usage Instructions

### **1. Install Dependencies**

Run the following command to install the required Node.js modules:

```bash
npm install express mongodb
```

### **2. Seed the Database and Start the Server**

Start the server and seed the database with sample data:

```bash
node server.js
```

### **3. Test the Endpoint**

Use a REST client like Postman or curl to test the `/numbers` endpoint:

```bash
GET http://localhost:3001/numbers
```

Expected Behavior:

- The endpoint returns 5 documents, skipping the first 5, and sorted in descending order of the `number` field.

### Sample Response:

```json
[
  { "number": 8 },
  { "number": 7 },
  { "number": 4 },
  { "number": 2 },
  { "number": 2 }
]
```

---

## Summary

This project demonstrates the use of MongoDB's powerful cursor methods (`sort`, `skip`, and `limit`) in a Node.js application. It provides a simple example of how to manage and manipulate large datasets efficiently.

---

## Resources

- [MongoDB Cursor Documentation](https://www.mongodb.com/docs/manual/reference/method/cursor/)
- [Express.js Documentation](https://expressjs.com/)
- [Node.js MongoDB Driver](https://mongodb.github.io/node-mongodb-native/)
