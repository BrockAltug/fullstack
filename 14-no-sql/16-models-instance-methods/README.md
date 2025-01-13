# NoSQL Models Instance Methods

## Overview

This guide demonstrates how to define and use **instance methods** in Mongoose schemas to add custom behavior to your MongoDB documents. Instance methods allow for reusable and document-specific operations within your database models.

---

## Key Concepts

1. **Mongoose Schema**:

   - Defines the structure and properties of documents within a MongoDB collection.

2. **Instance Methods**:

   - Custom methods added to a schema to perform operations on individual instances of a model.

3. **Creating Models**:

   - Models are created using the `mongoose.model()` method, which binds the schema to a MongoDB collection.

4. **Reusability**:
   - Instance methods can be reused across multiple instances of the same model.

---

## Code Explanation

### Schema Definition

```javascript
const mongoose = require("mongoose");

// Schemas define the shape of the documents within the collection.
const bookSchema = new mongoose.Schema({
  // Schemas define the properties of the document
  title: { type: String, required: true },
  author: String,
  price: { type: Number, required: true },
});
```

- The schema includes three fields:
  - `title` (required string)
  - `author` (optional string)
  - `price` (required number)

### Adding an Instance Method

```javascript
// Extend methods object with custom method
bookSchema.methods.getDiscount = function () {
  const discountPrice = this.price * 0.5;
  console.log(
    `The book's title is ${this.title} and the discounted price is ${discountPrice}`
  );
};
```

- `getDiscount` is a custom instance method that calculates a 50% discount on the book's price.

### Creating a Model and Using the Method

```javascript
// Create model using mongoose.model()
const Book = mongoose.model("Book", bookSchema);

// Create new instance of model
const discountedBook = new Book({
  title: "Oh the Places You Will Go!",
  price: 100,
});

// Call custom method on instance
discountedBook.getDiscount();
```

- An instance of the `Book` model is created with the `title` and `price` fields.
- The `getDiscount` method is called on the instance to calculate and log the discounted price.

---

## Usage Instructions

### Prerequisites

- Install MongoDB and start the MongoDB server.
- Install Node.js and Mongoose.

### Setup

1. **Install Dependencies**:

   ```bash
   npm install mongoose
   ```

2. **Run the Script**:
   Save the code in a file (e.g., `Book.js`) and execute it:

   ```bash
   node Book.js
   ```

3. **Expected Output**:
   ```
   The book's title is Oh the Places You Will Go! and the discounted price is 50
   ```

---

## Key Points

- Instance methods in Mongoose allow adding reusable functionality to documents.
- Methods are defined within the schema and can access document properties using `this`.
- Models created from schemas enable creating and manipulating MongoDB documents.

---

## Resources

- [Mongoose Documentation](https://mongoosejs.com/docs/index.html)
- [Instance Methods in Mongoose](https://mongoosejs.com/docs/guide.html#methods)
