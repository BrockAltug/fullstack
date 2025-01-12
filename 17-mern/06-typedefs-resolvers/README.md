# MERN Typedefs and Resolvers

## Overview

This project demonstrates how to build and implement a GraphQL API using the MERN stack. It focuses on creating and using typedefs and resolvers for managing a relational data structure involving schools, classes, and professors.

---

## Key Features

1. **GraphQL API**:

   - Implements a GraphQL API using `ApolloServer`.
   - Defines queries to fetch data for schools, classes, and professors.

2. **Typedefs**:

   - Defines the data schema using GraphQL syntax.
   - Supports relational fields for nested queries.

3. **Resolvers**:

   - Implements resolver functions to handle GraphQL queries.
   - Uses MongoDB models to fetch data and populate nested relationships.

4. **Database Integration**:
   - Connects to a MongoDB database to store and retrieve data.
   - Supports nested population of related documents.

---

## Setup Instructions

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Start the Database**:

   - Ensure MongoDB is running on your local machine or cloud.
   - Update the connection string in the `config/connection.js` file if necessary.

3. **Start the Server**:

   ```bash
   npm run develop
   ```

4. **Access the API**:
   - Open [http://localhost:3001/graphql](http://localhost:3001/graphql) in your browser or a GraphQL client to interact with the API.

---

## Application Structure

### **Server Configuration** (`server.js`)

- Sets up the Express server.
- Integrates `ApolloServer` with typedefs and resolvers.
- Exposes a `/graphql` endpoint for API interactions.

### **Typedefs** (`schemas/typeDefs.js`)

- Defines the GraphQL schema for:
  - **School**: Includes fields like `name`, `location`, and a list of classes.
  - **Class**: Includes fields like `name`, `building`, and the professor teaching the class.
  - **Professor**: Includes fields like `name`, `officeHours`, and a list of classes.

Example:

```graphql
type School {
  _id: ID
  name: String
  location: String
  studentCount: Int
  classes: [Class]
}
```

### **Resolvers** (`schemas/resolvers.js`)

- Implements the logic for fetching data as per the GraphQL schema.
- Uses Mongoose models to query the database and populate nested relationships.

Example:

```javascript
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
    professors: async () => {
      return await Professor.find({}).populate("classes");
    },
  },
};
```

---

## Example Queries

1. **Fetch All Schools**:

   ```graphql
   query {
     schools {
       name
       location
       studentCount
       classes {
         name
         creditHours
       }
     }
   }
   ```

2. **Fetch All Classes**:

   ```graphql
   query {
     classes {
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

3. **Fetch All Professors**:
   ```graphql
   query {
     professors {
       name
       officeLocation
       classes {
         name
         building
       }
     }
   }
   ```

---

## Summary

This project demonstrates how to effectively use GraphQL typedefs and resolvers with the MERN stack to create a relational API. It covers key concepts like nested population, schema definition, and efficient querying using MongoDB and Apollo Server.

---
