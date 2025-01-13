# NoSQL Virtuals

## Description

This project demonstrates the implementation of **virtuals** in Mongoose, which allow the creation of derived fields in models that are not persisted in the database but are dynamically calculated when needed. Virtuals are commonly used for computed properties, such as full names derived from separate `first` and `last` name fields.

---

## Key Concepts

1. **Virtual Properties**:

   - Virtuals are fields defined in the schema that are not stored in the database but are dynamically computed.

2. **Getter and Setter**:

   - Virtuals support getter and setter methods to derive values or modify related fields.

3. **toJSON Option**:
   - By setting the `toJSON.virtuals` option to `true`, virtuals can be included in the serialized output.

---

## Project Structure

### **Files**

1. **index.js**: Sets up the Express server and connects to the database.
2. **models/User.js**: Defines the User schema with a virtual property `fullName`.
3. **utils/data.js**: Provides helper functions to generate random names and data.
4. **controllers/userControllers.js**: Handles API logic for user data retrieval and creation.

---

## Implementation Details

### **User Model**

#### File: `models/User.js`

```javascript
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: { virtuals: true },
    id: false,
  }
);

userSchema
  .virtual("fullName")
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (v) {
    const first = v.split(" ")[0];
    const last = v.split(" ")[1];
    this.set({ first, last });
  });

const User = model("user", userSchema);

module.exports = User;
```

- **Virtual Property**:
  - `fullName` is a virtual property that combines `first` and `last` names.
  - The setter allows setting both `first` and `last` names simultaneously by providing a single `fullName` string.

### **API Endpoints**

#### File: `controllers/userControllers.js`

```javascript
const User = require("../models/User");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
```

- **Endpoints**:
  - `GET /users`: Retrieves all users with virtual properties included.
  - `GET /users/:userId`: Retrieves a single user by ID.
  - `POST /users`: Creates a new user.

---

## Usage

### **Setup**

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```

### **Endpoints**

1. **Create a User**:

   ```bash
   POST /users
   Body:
   {
     "first": "John",
     "last": "Doe",
     "age": 30
   }
   ```

2. **Retrieve All Users**:

   ```bash
   GET /users
   ```

3. **Retrieve Single User**:

   ```bash
   GET /users/:userId
   ```

4. **Full Name Virtual**:
   - The `fullName` virtual is included in all responses.

---

## Summary

This project highlights how to use **virtuals** in Mongoose to define computed properties in schemas. Virtuals provide a powerful way to dynamically calculate values, enhancing the flexibility and reusability of models.

---

## Resources

- [Mongoose Documentation: Virtuals](https://mongoosejs.com/docs/guide.html#virtuals)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
