# Overview

This project demonstrates the implementation of GraphQL type definitions (`typeDefs`) for a MERN stack e-commerce application. The `typeDefs` define the schema for the API, including data types, queries, and mutations for managing categories, products, orders, and user accounts.

# Key Features

- Comprehensive GraphQL schema with types for `Category`, `Product`, `Order`, `User`, and `Auth`.
- Queries for retrieving data related to categories, products, users, and orders.
- Mutations for adding, updating, and managing users, products, and orders.
- Integration with a MongoDB backend to manage data persistence.

# Concepts Covered

- GraphQL type definitions for schema design.
- Query and mutation types for data retrieval and manipulation.
- Relationship mapping between types such as `Product` and `Category`.
- Secure authentication with `Auth` type and token-based login.
- Integration of schema with resolvers for API functionality.

# Installation and Usage

1. **Install MongoDB:**
   Ensure MongoDB is installed and running on your system. Refer to the [MongoDB installation guide](https://www.mongodb.com/docs/manual/installation/) for setup instructions.

2. **Install dependencies:**

   ```bash
   npm run install
   ```

3. **Seed the database:**

   ```bash
   npm run seed
   ```

4. **Run the development server:**

   ```bash
   npm run develop
   ```

5. **Build the project for production:**
   ```bash
   npm run build
   ```

# Example Usage

### GraphQL Schema

The `typeDefs` define the schema for the application, specifying types, queries, and mutations.

```graphql
type Category {
  _id: ID
  name: String
}

type Product {
  _id: ID
  name: String
  description: String
  image: String
  quantity: Int
  price: Float
  category: Category
}

type Order {
  _id: ID
  purchaseDate: String
  products: [Product]
}

type User {
  _id: ID
  firstName: String
  lastName: String
  email: String
  orders: [Order]
}

type Auth {
  token: ID
  user: User
}

type Query {
  categories: [Category]
  products(category: ID, name: String): [Product]
  product(_id: ID!): Product
  user: User
  order(_id: ID!): Order
}

type Mutation {
  addUser(
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  ): Auth
  addOrder(products: [ID]!): Order
  updateUser(
    firstName: String
    lastName: String
    email: String
    password: String
  ): User
  updateProduct(_id: ID!, quantity: Int!): Product
  login(email: String!, password: String!): Auth
}
```

# Technologies Included

- **GraphQL**: Query language for APIs.
- **Apollo Server**: Middleware for creating a GraphQL server.
- **MongoDB**: Database for storing categories, products, users, and orders.
- **Node.js**: Backend server runtime.
- **Express**: Middleware for handling API routes and GraphQL integration.
- **Bcrypt**: Library for hashing user passwords.
- **JSON Web Tokens (JWT)**: Authentication for securing user sessions.

# Summary

This project showcases a robust GraphQL schema design for an e-commerce platform. By defining types, queries, and mutations, it provides a foundation for creating a flexible and scalable API that integrates seamlessly with a MongoDB backend.

# Resources

- [GraphQL Documentation: Schema](https://graphql.org/learn/schema/)
- [Apollo Server Documentation: Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started/)
- [MongoDB Documentation: CRUD Operations](https://www.mongodb.com/docs/manual/crud/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/en/guide/routing.html)
