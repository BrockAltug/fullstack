# Tech Matchup MERN App

## Overview

The **Tech Matchup MERN App** is a full-stack application that allows users to create, view, and vote on matchups between different technologies. This project demonstrates the use of the MERN stack (MongoDB, Express.js, React, Node.js) and GraphQL for building a highly interactive and efficient web application.

---

## Key Features

1. **GraphQL API**:

   - Create, read, and update data using GraphQL queries and mutations.
   - Seamless data fetching and updates with Apollo Client.

2. **Matchup Voting**:

   - Users can create matchups between two technologies.
   - Users can vote on their preferred technology in each matchup.

3. **Dynamic Frontend**:

   - React-based UI with interactive pages for home, matchup creation, and voting.

4. **Database Integration**:

   - MongoDB for storing matchup and technology data.
   - Mongoose for database modeling.

5. **Seed Data**:
   - Pre-populated database with sample technologies.

---

## Concepts Covered

1. **GraphQL Queries and Mutations**:

   - Querying data (e.g., matchups, technologies).
   - Creating and updating data (e.g., votes, matchups).

2. **React Router**:

   - Dynamic routing for seamless navigation between pages.

3. **Apollo Client**:

   - Integration of GraphQL with React for efficient data handling.

4. **Express.js**:

   - Backend server for handling GraphQL API requests.

5. **Mongoose Models**:
   - Schema design and database interactions.

---

## Installation and Usage

1. **Install Dependencies**:
   Navigate to the project directory and run:

   ```bash
   npm install
   ```

2. **Seed the Database**:
   Run the following command to populate the database with initial data:

   ```bash
   npm run seed
   ```

3. **Start the Development Server**:
   Start both the backend and frontend servers using:

   ```bash
   npm run develop
   ```

4. **Access the Application**:
   Open your web browser and go to:

   ```
   http://localhost:3000
   ```

---

## Example Usage

### Creating a Matchup

1. Go to the **Create Matchup** page.
2. Select two technologies from the dropdown menu.
3. Click the **Create Matchup!** button.

### Voting on a Matchup

1. Navigate to the **Matchup Voting** page.
2. Click the **Vote** button for your preferred technology.

---

## Technologies Included

1. **Frontend**:

   - React.js
   - Apollo Client
   - React Router

2. **Backend**:

   - Node.js
   - Express.js
   - GraphQL
   - Apollo Server

3. **Database**:

   - MongoDB
   - Mongoose

4. **Development Tools**:
   - Nodemon
   - Concurrently

---

## Summary

The **Tech Matchup MERN App** combines modern web development practices with the power of the MERN stack and GraphQL. It provides a user-friendly interface for creating and voting on matchups, while demonstrating the capabilities of a full-stack JavaScript application.

---

## Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
