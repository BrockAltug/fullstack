# NoSQL Embedded Documents

## Overview

This project demonstrates the use of **NoSQL Embedded Documents** with MongoDB to represent one-to-one and one-to-many relationships. Embedded documents allow related data to be stored within a single document, making retrieval faster and more efficient in certain cases.

---

## Key Features

1. **One-to-One Relationships**:

   - Demonstrated by embedding a single `information` object within each book document.

2. **One-to-Many Relationships**:

   - Demonstrated by embedding an array of `authors` within each book document.

3. **Querying Embedded Documents**:
   - Uses MongoDB's dot notation to query fields within embedded documents and arrays.

---

## Concepts Covered

1. **Embedded Documents**:

   - Embedding related data inside a parent document to simplify data retrieval.

2. **Dot Notation for Queries**:

   - Accessing nested fields in MongoDB using dot notation.

3. **Efficient Querying**:
   - Querying for embedded data using conditions like `$lt` (less than) and array field matching.

---

## Installation and Setup

1. Clone the repository to your local machine.
2. Ensure MongoDB is installed and running locally on `mongodb://127.0.0.1:27017`.
3. Run the following command to install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node server.js
   ```

---

## Code Overview

### `server.js`

1. **Data Seeding**:

   - Drops any existing documents in the `authorList` collection and seeds the database with sample data containing books, authors, and book information.

2. **API Endpoints**:

   - **Get Books with Price Less Than $10**:

     - Path: `/authors/price-less-than-10`
     - Query: Fetches books with an `information.price` field less than $10.
     - Example Response:
       ```json
       [
         {
           "title": "Between the Lines",
           "authors": [
             { "name": "Jodi Picoult", "featured": true },
             { "name": "Samantha Van Leer", "featured": false }
           ],
           "information": {
             "ISBN": 9781451635751,
             "price": 5,
             "total_in_stock": 5
           }
         }
       ]
       ```

   - **Get Books with Featured Authors**:
     - Path: `/authors/featured`
     - Query: Fetches books with any author marked as `featured`.
     - Example Response:
       ```json
       [
         {
           "title": "Good Omens",
           "authors": [
             { "name": "Neil Gaiman", "featured": true },
             { "name": "Terry Pratchett", "featured": true }
           ],
           "information": {
             "ISBN": 9780425132159,
             "price": 10,
             "total_in_stock": 10
           }
         }
       ]
       ```

---

## Usage

1. Start the server and ensure MongoDB is running locally.
2. Use an API testing tool like Postman or cURL to test the following endpoints:
   - `GET /authors/price-less-than-10` - Fetches books priced below $10.
   - `GET /authors/featured` - Fetches books with featured authors.

---

## Example Queries

### Query Embedded Document Fields

- Use dot notation to query fields nested inside documents or arrays.

#### Query for Books Priced Below $10:

```javascript
db.authorList.find({ "information.price": { $lt: 10 } });
```

#### Query for Books with Featured Authors:

```javascript
db.authorList.find({ "authors.featured": true });
```

---

## Reflection

This project highlights the benefits of using embedded documents for related data, demonstrating simplified queries and efficient data retrieval. While embedding is useful for tightly coupled data, understanding when to use references versus embedding is critical for effective database design.

---

## Resources

- [MongoDB Documentation on Embedded Documents](https://www.mongodb.com/docs/manual/core/data-model-design/#embedded-data-models)
- [MongoDB Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)
