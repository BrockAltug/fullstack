# MERN Queries: MongoDB, Express, React, Node.js

## Overview

This project demonstrates how to use **MongoDB** for database management, **Express** as the backend server, **React** for the frontend, and **Node.js** as the runtime environment. The focus is on creating, testing, and running GraphQL queries to interact with the database effectively. The project uses the MERN stack with GraphQL for querying data.

---

## Features

1. **GraphQL API**:

   - Provides an efficient and flexible way to query and mutate data.

2. **MongoDB Integration**:

   - Stores data for schools, classes, and professors with relationships between them.

3. **React Frontend**:

   - Interacts with the GraphQL API to fetch and display data dynamically.

4. **Seed Data**:
   - Predefined seed data for schools, classes, and professors.

---

## GraphQL Queries

### **1. Schools' Name, Location, and Student Count**

Fetches basic information about all schools.

**GraphQL Query**:

```graphql
query GetSchools {
  schools {
    name
    location
    studentCount
  }
}
```

---

### **2. All Class Names**

Retrieves the names of all classes available.

**GraphQL Query**:

```graphql
query GetClasses {
  classes {
    name
  }
}
```

---

### **3. Professors' Names**

Fetches the names of all professors.

**GraphQL Query**:

```graphql
query GetProfessors {
  professors {
    name
  }
}
```

---

### **4. Class Details**

Fetches each class's name, credit hours, and building number.

**GraphQL Query**:

```graphql
query GetClassDetails {
  classes {
    name
    creditHours
    building
  }
}
```

---

### **5. Professors' Names and Scores**

Fetches professors' names along with their student review scores.

**GraphQL Query**:

```graphql
query GetProfessorScores {
  professors {
    name
    studentScore
  }
}
```

---

### **6. Professor Full Details**

Fetches detailed information for each professor.

**GraphQL Query**:

```graphql
query GetProfessorDetails {
  professors {
    _id
    name
    studentScore
    officeHours
    officeLocation
  }
}
```

---

## Setup Instructions

### **1. Install Dependencies**

Run the following command to install all necessary dependencies:

```bash
npm install
```

### **2. Start MongoDB**

Ensure MongoDB is running locally:

```bash
mongod
```

### **3. Seed the Database**

Seed the database with predefined data:

```bash
node seeds/seed.js
```

### **4. Start the Server**

Start the Express server to serve the GraphQL API:

```bash
node server.js
```

### **5. Start the React Frontend**

Navigate to the frontend directory and start the React application:

```bash
npm start
```

### **6. Access GraphQL Playground**

Navigate to the GraphQL Playground at:

```
http://localhost:3001/graphql
```

---

## Testing Queries

- Use the GraphQL Playground to test the provided queries.
- Example query for testing in the Playground:
  ```graphql
  query GetSchools {
    schools {
      name
      location
      studentCount
    }
  }
  ```

---

## Summary

This project provides a foundation for integrating MongoDB, Express, React, and Node.js with GraphQL to create efficient and dynamic queries. By following the setup instructions, you can test and extend the application for more complex use cases.
