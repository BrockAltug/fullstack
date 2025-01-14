# MERN GraphQL Mutations with TypeScript

## Overview

This project demonstrates the implementation of GraphQL mutations in a MERN (MongoDB, Express, React, Node.js) stack application. It provides examples of defining, resolving, and testing GraphQL mutations for managing `School`, `Class`, and `Professor` data models.

## Key Features

- **GraphQL Type Definitions**: Clear schema design for `School`, `Class`, and `Professor` types.
- **Query Operations**: Fetch all schools, classes, or professors; retrieve a specific class by ID.
- **Mutations**:
  - Add a new school.
  - Update a class with specific details.
- **MongoDB Integration**: Schema-backed data persistence with MongoDB models.
- **Dynamic Resolvers**: Comprehensive implementation of query and mutation resolvers.

## Concepts Covered

### GraphQL Schema Design

The schema defines types and operations for the entities in the system. Here's an example of type definitions:

```graphql
type School {
  _id: ID
  name: String
  location: String
  studentCount: Int
  classes: [Class]
}

type Class {
  _id: ID
  name: String
  building: String
  creditHours: Int
  professor: Professor
}

type Professor {
  _id: ID
  name: String
  officeHours: String
  officeLocation: String
  studentScore: Float
  classes: [Class]
}

type Query {
  schools: [School]
  classes: [Class]
  professors: [Professor]
  class(id: ID!): Class
}

type Mutation {
  addSchool(name: String!, location: String!, studentCount: Int!): School
  updateClass(id: ID!, building: String!): Class
}
```

### Mutation Implementation

#### Add a School

The `addSchool` mutation allows users to create a new school entry in the database:

```javascript
addSchool: async (parent, { name, location, studentCount }) => {
  return await School.create({ name, location, studentCount });
};
```

#### Update a Class

The `updateClass` mutation modifies the `building` field of a specific class:

```javascript
updateClass: async (parent, { id, building }) => {
  return await Class.findOneAndUpdate(
    { _id: id },
    { building },
    { new: true } // Return updated class
  );
};
```

### Resolvers

Resolvers provide functionality for queries and mutations:

- Queries fetch data from the database.
- Mutations modify or add data in the database.

Example resolver for fetching all schools:

```javascript
schools: async () => {
  return await School.find({}).populate("classes").populate({
    path: "classes",
    populate: "professor",
  });
};
```

## Installation and Usage

1. Install dependencies:
   ```sh
   npm install
   ```
2. Seed the database:
   ```sh
   npm run seed
   ```
3. Start the server:
   ```sh
   npm start
   ```

## Example Usage

Run the following GraphQL query to add a school:

```graphql
mutation AddSchool {
  addSchool(name: "Tech High", location: "San Francisco", studentCount: 500) {
    _id
    name
    location
    studentCount
  }
}
```

Run the following GraphQL mutation to update a class building:

```graphql
mutation UpdateClass {
  updateClass(id: "classId123", building: "Engineering Hall") {
    _id
    name
    building
  }
}
```

## Technologies Included

- **MongoDB**: Database for managing application data.
- **Express.js**: Backend framework for routing and middleware.
- **React**: Frontend framework for building the user interface.
- **Node.js**: Runtime for executing server-side JavaScript.
- **Apollo Server**: GraphQL server implementation.

## Summary

This project serves as a foundational example of implementing and using GraphQL mutations in a MERN stack application. It demonstrates schema design, resolver logic, and the integration of MongoDB models for robust and scalable applications.

## Resources

- [GraphQL Official Documentation](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [MERN Stack Guide](https://www.mongodb.com/mern-stack)
