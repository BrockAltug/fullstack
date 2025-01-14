# MERN JWT Authentication Backend

## Overview

This project demonstrates a MERN (MongoDB, Express, React, Node.js) backend implementation with JWT (JSON Web Token) for secure user authentication and authorization. It includes queries and mutations for user management, thought posting, and comment handling.

---

## Key Features

1. **User Authentication**:

   - Register a user and return a JWT token.
   - Login a user by verifying credentials and returning a JWT token.

2. **Thought and Comment Management**:

   - Add, retrieve, and delete thoughts.
   - Add and remove comments on specific thoughts.

3. **GraphQL API**:

   - Uses GraphQL for all API interactions with queries and mutations.

4. **JWT Integration**:
   - Secures sensitive routes with JWT authentication.

---

## Concepts Covered

1. **GraphQL Queries and Mutations**:

   - Queries for retrieving users, thoughts, and comments.
   - Mutations for creating, updating, and deleting resources.

2. **JWT Authentication**:

   - Generates tokens during user registration and login.
   - Verifies tokens for secure access.

3. **MongoDB Schema Relationships**:
   - Thoughts linked to users.
   - Comments nested within thoughts.

---

## Installation and Usage

### **1. Install Dependencies**

Run the following command to install the required dependencies:

```bash
npm install
```

### **2. Start the Server**

Run the server in development mode:

```bash
npm run dev
```

Or start the server normally:

```bash
npm start
```

### **3. Test API Endpoints**

Use a tool like Postman or GraphQL Playground to test the API at the `/graphql` endpoint.

---

## Example Usage

### GraphQL Queries

- Retrieve all users:

  ```graphql
  query {
    users {
      username
      email
      thoughts {
        thoughtText
        createdAt
      }
    }
  }
  ```

- Retrieve a single thought by ID:
  ```graphql
  query {
    thought(thoughtId: "THOUGHT_ID_HERE") {
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
  ```

### GraphQL Mutations

- Add a user:

  ```graphql
  mutation {
    addUser(
      username: "newuser"
      email: "newuser@example.com"
      password: "password"
    ) {
      token
      user {
        username
        email
      }
    }
  }
  ```

- Login a user:
  ```graphql
  mutation {
    login(email: "existinguser@example.com", password: "password") {
      token
      user {
        username
        email
      }
    }
  }
  ```

---

## Summary

This project highlights the integration of JWT with a MERN stack application, showcasing secure user authentication, data querying with GraphQL, and efficient resource management. The backend can be easily extended for more features or integrated with a frontend application.

---

## Resources

- [GraphQL Documentation](https://graphql.org/)
- [JWT.io](https://jwt.io/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
