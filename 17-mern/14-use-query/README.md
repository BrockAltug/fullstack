# GraphQL Use Query

## Concepts Covered

1. **GraphQL Basics**:

   - GraphQL is a query language for APIs that allows clients to request only the data they need.

2. **Queries with Apollo Client**:

   - Apollo Client enables developers to interact with a GraphQL server in a React application.

3. **Using the `useQuery` Hook**:

   - The `useQuery` hook is used to execute GraphQL queries and retrieve data.

4. **Real-Time Loading States**:
   - Display loading indicators while fetching data from a server.

---

## Application Overview

### File Structure

1. **`pages/Home.jsx`**:

   - Uses the `useQuery` hook to fetch data and pass it to a component for rendering.

2. **`utils/queries.js`**:

   - Defines a GraphQL query to fetch thoughts data.

3. **`server.js`**:
   - Sets up an Apollo Server and connects it to the MongoDB database.

---

## Code Breakdown

### `Home.jsx`

```javascript
import { useQuery } from "@apollo/client";
import ThoughtList from "../components/ThoughtList";
import { QUERY_THOUGHTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
```

### `queries.js`

```javascript
import { gql } from "@apollo/client";

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;
```

### `server.js`

```javascript
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

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

---

## Usage Instructions

### 1. Install Dependencies

Run the following command to install required dependencies:

```bash
npm install
```

### 2. Seed the database

Use the following command to seed the database:

```bash
npm run seed
```

### 3. Start the Application

Use the following command to start the development server:

```bash
npm run develop
```

### 4. Test GraphQL Queries

1. Navigate to `http://localhost:3001/graphql` in your browser.
2. Use the following query to fetch thoughts data:

```graphql
query getThoughts {
  thoughts {
    _id
    thoughtText
    thoughtAuthor
    createdAt
  }
}
```

---

## Key Points

1. **GraphQL Query**:

   - The `QUERY_THOUGHTS` query fetches an array of thoughts with their details.

2. **Real-Time Loading State**:

   - While the data is being fetched, a loading message is displayed.

3. **Component Integration**:

   - The fetched data is passed to the `ThoughtList` component for rendering.

4. **Apollo Server**:
   - Sets up a GraphQL API endpoint at `/graphql`.

---

## Resources

- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [GraphQL Official Website](https://graphql.org/)
