# NoSQL Subdoc Population

## Overview

This project demonstrates how to use **subdocument population** in MongoDB and Mongoose to model relationships between documents. Subdocuments are a powerful feature of NoSQL databases that allow embedding related data within a parent document.

---

## Key Features

1. **Subdocument Modeling**:

   - Embeds tags as subdocuments within posts.
   - Demonstrates relationships between posts and tags.

2. **Subdocument Population**:

   - Uses Mongoose's `.populate()` method to populate referenced documents.

3. **RESTful API**:
   - Provides endpoints to interact with posts and tags, including creation and retrieval.

---

## Concepts Covered

1. **Subdocument Population**:

   - Models relationships between collections by embedding subdocuments.
   - Uses Mongoose's `.populate()` to fetch and include related documents.

2. **Database Seeding**:

   - Seeds a MongoDB database with sample posts and tags.

3. **RESTful API with Express.js**:
   - Implements endpoints to demonstrate subdocument relationships.

---

## Installation and Usage

### **1. Install Dependencies**

Run the following command to install the required Node.js modules:

```bash
npm install express mongoose
```

### **2. Seed the Database and Start the Server**

Run the server to seed the database and expose the API endpoints:

```bash
node server.js
```

### **3. Test the API Endpoints**

Use a REST client like Postman or curl to interact with the API. Key endpoints include:

- **Get Posts**:

  ```bash
  GET http://localhost:3001/posts
  ```

- **Get Tags**:
  ```bash
  GET http://localhost:3001/tags
  ```

---

## Example Usage

### Sample Response for `/posts`:

```json
[
  {
    "_id": "123456789",
    "published": true,
    "tags": [
      {
        "_id": "987654321",
        "tagName": "Sample Tag",
        "color": "blue"
      }
    ],
    "text": "This is a sample post."
  }
]
```

---

## Summary

This project illustrates the use of MongoDB subdocuments and Mongoose's population feature to model and retrieve related data efficiently. The implementation provides a practical demonstration of embedding and referencing documents in NoSQL databases.

---

## Resources

- [Mongoose Population Documentation](https://mongoosejs.com/docs/populate.html)
- [MongoDB Subdocuments](https://www.mongodb.com/docs/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/)
- [Express.js Documentation](https://expressjs.com/)
