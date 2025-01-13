# NoSQL CRUD Subdoc

## Overview

This project demonstrates how to perform CRUD operations on subdocuments in MongoDB using Mongoose. It includes operations for creating, reading, updating, and deleting documents, as well as managing subdocuments such as tags within applications.

---

## Key Features

1. **CRUD Operations**:

   - Create, Read, Update, and Delete operations for applications and their associated subdocuments (tags).

2. **Subdocument Management**:

   - Demonstrates how to embed subdocuments (tags) within a parent document (application).
   - Includes methods to add and remove tags from applications.

3. **Mongoose Integration**:

   - Utilizes Mongoose models and schemas to define and interact with MongoDB documents.

4. **RESTful API**:
   - Exposes endpoints for managing applications and their tags.

---

## Concepts Covered

1. **Subdocument Operations**:

   - Embedding and managing subdocuments within parent documents.

2. **Mongoose Methods**:

   - `find()`, `findOne()`, `findOneAndUpdate()`, and `findOneAndRemove()`.
   - Using `$addToSet` and `$pull` operators for subdocument management.

3. **API Design**:
   - Implementation of RESTful API routes to handle application and tag operations.

---

## Installation and Usage

### **1. Install Dependencies**

Run the following command to install the required Node.js modules:

```bash
npm install
```

### **2. Start the Server**

Start the server using the following command:

```bash
node index.js
```

### **3. Test the Endpoints**

Use a tool like Postman or curl to test the following endpoints:

- **Get All Applications**:

  ```bash
  GET http://localhost:3001/applications
  ```

- **Get Single Application**:

  ```bash
  GET http://localhost:3001/applications/:applicationId
  ```

- **Create Application**:

  ```bash
  POST http://localhost:3001/applications
  Body: { "description": "New Application", "userId": "<userId>" }
  ```

- **Update Application**:

  ```bash
  PUT http://localhost:3001/applications/:applicationId
  Body: { "description": "Updated Application" }
  ```

- **Delete Application**:

  ```bash
  DELETE http://localhost:3001/applications/:applicationId
  ```

- **Add Tag**:

  ```bash
  POST http://localhost:3001/applications/:applicationId/tags
  Body: { "tagName": "New Tag", "color": "blue" }
  ```

- **Remove Tag**:
  ```bash
  DELETE http://localhost:3001/applications/:applicationId/tags/:tagId
  ```

---

## Summary

This project showcases CRUD operations and subdocument management in MongoDB using Mongoose. It provides a practical example of embedding and manipulating subdocuments within parent documents, along with a RESTful API for accessing and modifying data.

---

## Resources

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Express.js Documentation](https://expressjs.com/)
