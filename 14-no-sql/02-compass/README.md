# MongoDB Compass Intro

## Concepts Covered

1. **MongoDB Compass**:

   - A graphical interface to visually explore and manage your MongoDB databases.
   - Simplifies database creation, data exploration, and query execution.

2. **MongoSH**:

   - Embedded MongoDB shell for running commands directly within Compass.
   - Allows database and collection management using JavaScript-like syntax.

3. **Database Management**:

   - Creating a new database and adding collections.
   - Inserting, modifying, and exploring documents.

4. **MongoDB Document Structure**:
   - BSON format for documents (Binary JSON).
   - Automatic insertion of an `_id` field as a unique identifier for each document.

---

## Task Overview

### Steps to Complete

1. **Launch MongoDB Compass**:

   - Open Compass and click **Connect** to access the local MongoDB instance (no connection string needed).

2. **Create a Database Using MongoSH**:

   - Open the embedded MongoSH within Compass.
   - Run the following commands:
     ```javascript
     use inventoryDB
     db.bookCollection.insertOne({ title: "Introduction to MongoDB" })
     ```

3. **Verify Database Creation**:

   - Refresh Compass to see `inventoryDB` in the database list.
   - Open `inventoryDB` and verify the `bookCollection` appears.

4. **Modify the Document**:

   - In Compass, navigate to the **Documents** tab in `bookCollection`.
   - Add a new field `author` with a value, e.g., `"John Doe"`, using the **Edit** functionality.

5. **View the Updated Document**:
   - Confirm the updated document contains both the `title` and `author` fields along with the automatically inserted `_id` field.

---

## Code Overview

### MongoSH Commands

```javascript
// Use or create the database
use inventoryDB

// Insert a document into a new collection
db.bookCollection.insertOne({ title: "Introduction to MongoDB" })

// Verify the inserted document
db.bookCollection.find()

// Update the document to add an author field
db.bookCollection.updateOne(
  { title: "Introduction to MongoDB" },
  { $set: { author: "John Doe" } }
)
```

---

## Key Points

1. **Database Creation**:

   - The `use inventoryDB` command creates the database if it doesn’t already exist.

2. **Document Insertion**:

   - The `insertOne` method adds a document to a collection.
   - Automatically includes an `_id` field as a unique identifier.

3. **Document Editing**:

   - Fields can be added or updated using MongoSH or Compass's visual interface.

4. **Visual Exploration**:
   - MongoDB Compass allows you to explore databases, collections, and documents interactively.

---

## How to Run

1. **Set Up MongoDB**:

   - Ensure MongoDB is installed and running locally.
   - Use Homebrew to start MongoDB if needed:
     ```bash
     brew services start mongodb-community
     ```

2. **Launch Compass**:

   - Open MongoDB Compass and click **Connect**.

3. **Create and Modify Data**:

   - Follow the commands provided in MongoSH to create the database and collection.
   - Use Compass to modify and visually verify the data.

4. **Refresh and Explore**:
   - Refresh Compass to see your changes in the database list.
   - Navigate to `bookCollection` to view the inserted and modified document.

---

## Learning Objectives

1. Gain familiarity with MongoDB Compass for database management.
2. Understand how to create databases and collections using MongoSH.
3. Learn to insert, update, and explore documents in MongoDB.
4. Visualize and interact with data using Compass's graphical interface.

## 📝 Notes

Refer to the documentation:

[MongoDB Compass docs on Connect to MongoDB](https://docs.mongodb.com/compass/current/connect/)

[MongoDB Compass docs on Embedded MongoDB Shell](https://docs.mongodb.com/compass/current/embedded-shell/)

[MongoDB docs on Creating a MongoDB Database with the CLI (the MongoDB shell)](https://www.mongodb.com/basics/create-database)

[MongoDB docs on MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)

[MongoDB Compass docs on View Documents](https://docs.mongodb.com/compass/current/documents/view/)

[MongoDB Compass docs on Modify Documents](https://docs.mongodb.com/compass/current/documents/modify/)
