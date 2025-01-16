# Overview

This project demonstrates the integration of JSON Web Tokens (JWT) for user authentication and authorization in a MERN stack application. Users can log in, view their profiles, and submit or comment on "thoughts." The JWT is used to manage user sessions securely, providing access to user-specific data.

# Key Features

- Secure authentication with JWT.
- Access control for user-specific pages and actions.
- Integration with Apollo Client and GraphQL for queries and mutations.
- State management using React hooks (`useState`, `useQuery`, `useMutation`).
- Dynamic updates with form handling and token-based user identification.

# Concepts Covered

- JWT for secure user authentication.
- Retrieving and decoding JWTs to access user data.
- React conditional rendering based on authentication state.
- Controlled form components for input handling.
- Integration with MongoDB for persistent data storage.

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

### CommentForm Component

The `CommentForm` component uses JWT to fetch the authenticated user's username and allow them to submit a comment.

```jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_COMMENT } from "../../utils/mutations";
import Auth from "../../utils/auth";

const CommentForm = ({ thoughtId }) => {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addComment({
        variables: {
          thoughtId,
          commentText,
          commentAuthor: Auth.getProfile().authenticatedPerson.username,
        },
      });
      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>What are your thoughts on this thought?</h4>
      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form onSubmit={handleFormSubmit}>
            <textarea
              name="commentText"
              placeholder="Add your comment..."
              value={commentText}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Add Comment</button>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;
```

# Technologies Included

- **React 18**: Component-based UI library.
- **Apollo Client**: GraphQL client for API requests.
- **GraphQL**: Query language for APIs.
- **JWT**: Secure token-based user authentication.
- **MongoDB**: Database for storing user and thought data.
- **Node.js**: Backend server.
- **Express**: Middleware for creating API routes.

# Summary

This project demonstrates how to integrate JWT authentication into a MERN stack application, enabling secure user management and dynamic content updates based on user identity. By leveraging React, GraphQL, and Apollo Client, the application provides a seamless and secure user experience.

# Resources

- [JWT Introduction and Documentation](https://jwt.io/introduction/)
- [React Documentation: Handling Events](https://reactjs.org/docs/handling-events.html)
- [Apollo Client Documentation: Authentication](https://www.apollographql.com/docs/react/networking/authentication/)
- [GraphQL Documentation: Mutations](https://graphql.org/learn/queries/#mutations)
- [MongoDB Documentation: CRUD Operations](https://www.mongodb.com/docs/manual/crud/)
