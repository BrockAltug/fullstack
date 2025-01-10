# MERN Query Arguments

## Concepts Covered

1. **GraphQL Query Arguments**:

   - Use arguments in queries to retrieve specific records from the database.

2. **Resolvers**:

   - Define resolvers to handle queries with arguments.

3. **MongoDB Integration**:

   - Utilize Mongoose to interact with MongoDB collections.

4. **Apollo Server**:
   - Implement and serve GraphQL API using Apollo Server.

---

## Project Overview

This project demonstrates how to use GraphQL query arguments in a MERN application. Specifically, it showcases a `class` query that retrieves a single class document based on its ID.

---

## Project Setup

### Prerequisites

1. Ensure MongoDB is running on your machine or connected via a cloud service.
2. Install dependencies:
   ```bash
   npm install
   ```

---

## Code Overview

### Resolvers

```javascript
const { School, Class, Professor } = require("../models");

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate("classes").populate({
        path: "classes",
        populate: "professor",
      });
    },
    classes: async () => {
      return await Class.find({}).populate("professor");
    },
    // Define a resolver to retrieve individual classes
    class: async (parent, args) => {
      // Use the parameter to find the matching class in the collection
      return await Class.findById(args.id).populate("professor");
    },
    professors: async () => {
      return await Professor.find({}).populate("classes");
    },
  },
};

module.exports = resolvers;
```

### Server

```javascript
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use("/graphql", expressMiddleware(server));

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();
```

---

## Usage

### Starting the Server

1. Start the server:

   ```bash
   npm start
   ```

2. Open the Apollo Studio Explorer or navigate to:
   ```
   http://localhost:3001/graphql
   ```

---

## Example Query

### Query to Retrieve a Class by ID

```graphql
query {
  class(id: "64d3c1f8d1e3a2a9c1f8e7b9") {
    _id
    name
    building
    creditHours
    professor {
      name
      officeHours
    }
  }
}
```

### Expected Response

```json
{
  "data": {
    "class": {
      "_id": "64d3c1f8d1e3a2a9c1f8e7b9",
      "name": "Physics 101",
      "building": "Science Hall",
      "creditHours": 4,
      "professor": {
        "name": "Dr. John Smith",
        "officeHours": "10:00 AM - 12:00 PM"
      }
    }
  }
}
```

---

## Key Points

1. **Efficient Data Retrieval**:

   - Query arguments allow for targeted data retrieval, optimizing performance.

2. **Dynamic Queries**:

   - Easily adapt queries to specific use cases by adjusting arguments.

3. **Scalable**:
   - The approach scales well with complex GraphQL schemas and nested data.

---

## Resources

- [GraphQL Documentation](https://graphql.org/)
- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
- [Mongoose Documentation](https://mongoosejs.com/)
