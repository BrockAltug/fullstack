# Apollo Server Implementation with MongoDB

## Overview

This project demonstrates how to set up a basic **Apollo Server** with a **GraphQL API** and integrate it with a **MongoDB** database. It includes the following features:

- A `Class` model with fields like `_id`, `name`, `building`, and `creditHours`.
- GraphQL `Query` to fetch all classes from the database.

---

## Key Features

1. **GraphQL Schema**:

   - A `Class` type is defined in the schema, specifying the fields available in the database.
   - The `Query` type provides an entry point to retrieve all classes.

2. **Resolvers**:

   - Define the logic for handling the `classes` query, fetching data from the database.

3. **MongoDB Integration**:

   - A connection to MongoDB is established using `mongoose`.

4. **Express Middleware**:
   - Apollo Server is integrated with Express using `expressMiddleware` for handling GraphQL requests.

---

## Code Walkthrough

### **`schemas/typeDefs.js`**

This file defines the GraphQL schema, including the `Class` type and `Query` type.

```graphql
type Class {
  _id: ID
  name: String
  building: String
  creditHours: Int
}

type Query {
  classes: [Class]
}
```

### **`schemas/resolvers.js`**

Resolvers define the logic for handling GraphQL queries.

```javascript
const resolvers = {
  Query: {
    classes: async () => {
      return await Class.find({});
    },
  },
};

module.exports = resolvers;
```

- The `classes` resolver fetches all `Class` documents from the database using `Class.find({})`.

---

### **`config/connection.js`**

This file establishes a connection to the MongoDB database.

```javascript
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/schools-db"
);

module.exports = mongoose.connection;
```

---

### **`server.js`**

This file sets up and starts the Apollo Server with Express.

#### Key Code Sections:

```javascript
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const server = new ApolloServer({ typeDefs, resolvers });
```

- `ApolloServer`: Initializes the GraphQL API using the defined `typeDefs` and `resolvers`.

```javascript
const startApolloServer = async () => {
  await server.start();
  app.use("/graphql", expressMiddleware(server));
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
```

- **`startApolloServer`**:
  - Starts the Apollo Server.
  - Sets up the `/graphql` endpoint for handling GraphQL requests.
  - Starts the Express server on the specified port.

---

## Setup Instructions

### **1. Install Dependencies**

Run the following command to install the necessary packages:

```bash
npm install
```

### **2. Seed the Database**

Seed the MongoDB database with sample data:

```bash
npm run seed
```

### **3. Start the Server**

Start the Apollo Server:

```bash
npm start
```

### **4. Launch the Apollo Sandbox**

Open the Apollo Sandbox in your browser:

```
http://localhost:3001/graphql
```

---

## Example Query

To fetch all classes from the database, use the following query in the Apollo Sandbox:

```graphql
query GetClasses {
  classes {
    _id
    name
    building
    creditHours
  }
}
```

---

## Notes

- **MongoDB**: Ensure MongoDB is running locally or update the `MONGODB_URI` environment variable for a remote database.
- **Apollo Sandbox**: Use the `/graphql` endpoint to test GraphQL queries and mutations.

### Documentation References

- [Apollo Server Docs](https://www.apollographql.com/docs/apollo-server/getting-started)
- [Integrating with Node.js Middleware](https://www.apollographql.com/docs/apollo-server/integrations/building-integrations)
