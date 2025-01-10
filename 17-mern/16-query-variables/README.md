# Query Variables with GraphQL

## Concepts Covered

1. **GraphQL Query Variables**:

   - Allow passing arguments dynamically into GraphQL queries.
   - Enable fetching data based on specific criteria such as IDs or other parameters.

2. **Dynamic Data Fetching**:

   - Use `useQuery` from Apollo Client to query GraphQL endpoints with variables.

3. **React Router Integration**:
   - Use `useParams` to retrieve route parameters and integrate them into GraphQL queries.

---

## Code Overview

### SingleThought.jsx

```javascript
// Import the `useParams()` hook from React Router
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// Import the GraphQL query
import { QUERY_SINGLE_THOUGHT } from "../utils/queries";

const SingleThought = () => {
  // Retrieve the `thoughtId` parameter from the route
  const { thoughtId } = useParams();

  // Execute the GraphQL query with the `thoughtId` as a variable
  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {thought.thoughtAuthor} <br />
        <span style={{ fontSize: "1rem" }}>
          had this thought on {thought.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            border: "2px dotted #1a1a1a",
            lineHeight: "1.5",
          }}
        >
          {thought.thoughtText}
        </blockquote>
      </div>
    </div>
  );
};

export default SingleThought;
```

### Queries.js

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

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
```

---

## Key Points

1. **Dynamic GraphQL Query**:

   - The `QUERY_SINGLE_THOUGHT` query uses a variable `$thoughtId` to fetch specific data.

2. **React Router Integration**:

   - `useParams` retrieves the `thoughtId` from the route.

3. **Apollo Client**:

   - `useQuery` integrates GraphQL queries with React components.

4. **Data Loading**:
   - The `loading` state ensures a smooth user experience while data is being fetched.

---

## Usage

1. **Setup**:

   - Ensure the server is running and includes the `/graphql` endpoint.

2. **Start Application**:

   ```bash
   npm run develop
   ```

3. **GraphQL Query Execution**:

   - Visit the GraphQL playground at `http://localhost:3001/graphql`.
   - Use the following query with a variable:

   ```graphql
   query getSingleThought($thoughtId: ID!) {
     thought(thoughtId: $thoughtId) {
       _id
       thoughtText
       thoughtAuthor
       createdAt
       comments {
         _id
         commentText
         createdAt
       }
     }
   }
   ```

   **Variables**:

   ```json
   {
     "thoughtId": "<Insert_Thought_ID_Here>"
   }
   ```

4. **Test**:
   - Navigate to the appropriate route in the application to see the dynamic data.

---

## Reflection

This example demonstrates the power of GraphQL query variables in dynamically fetching data. By integrating Apollo Client and React Router, we can efficiently handle and display targeted data in our applications.
