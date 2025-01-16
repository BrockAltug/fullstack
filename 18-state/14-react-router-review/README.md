# Overview

This project demonstrates the use of React Router, Apollo Client, and a GraphQL backend to build a MERN stack application for managing "Thoughts." Users can view a list of thoughts, navigate to a specific thought to join a discussion, and interact with the backend through GraphQL queries and mutations.

# Key Features

- Routing with `react-router-dom` to handle navigation.
- Apollo Client integration for communicating with a GraphQL API.
- MongoDB-based data management for "Thoughts" and their associated comments.
- Dynamic data fetching and rendering using GraphQL queries and React components.
- Full-stack setup with a Node.js and Express server, a MongoDB database, and a React frontend.

# Concepts Covered

- Dynamic routing with React Router v6.
- GraphQL schema and resolver setup.
- Integration of Apollo Client for data fetching.
- State management with React Context and Apollo Cache.
- Reusable UI components for displaying dynamic data.

# Installation and Usage

1. **Install MongoDB:**
   Ensure MongoDB is installed and running on your system. You can follow the [MongoDB installation guide](https://www.mongodb.com/docs/manual/installation/) if needed.

2. **Install dependencies:**

   ```bash
   npm install
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

### App Component

The `App` component provides the structure for the application, including a header, footer, and a dynamic content area managed by React Router's `<Outlet />`.

```jsx
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
```

### ThoughtList Component

The `ThoughtList` component renders a list of "Thoughts" with navigation links to each thought's discussion page.

```jsx
import { Link } from "react-router-dom";

const ThoughtList = ({ thoughts, title }) => {
  if (!thoughts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {thoughts.map((thought) => (
        <div key={thought._id} className="card mb-3">
          <h4 className="card-header bg-primary text-light p-2 m-0">
            {thought.thoughtAuthor} <br />
            <span style={{ fontSize: "1rem" }}>
              had this thought on {thought.createdAt}
            </span>
          </h4>
          <div className="card-body bg-light p-2">
            <p>{thought.thoughtText}</p>
          </div>
          <Link
            className="btn btn-primary btn-block btn-squared"
            to={`/thoughts/${thought._id}`}
          >
            Join the discussion on this thought.
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ThoughtList;
```

# Technologies Included

- **React 18**: Component-based UI library.
- **React Router v6**: Client-side routing.
- **Apollo Client**: GraphQL client for data fetching and cache management.
- **Node.js**: Backend server.
- **Express**: Middleware for creating API routes.
- **GraphQL**: Query language for APIs.
- **MongoDB**: Database for storing thoughts and comments.
- **Vite**: Development and build tool for the React frontend.

# Summary

This project combines React Router, Apollo Client, and a GraphQL backend to create a dynamic and responsive application. Users can explore and interact with thoughts while benefiting from efficient data fetching and seamless navigation.

# Resources

- [React Router Documentation](https://reactrouter.com/)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
