# Overview

This project demonstrates the use of Apollo Client and GraphQL to handle data mutations and queries in a React application. The application features a `ThoughtForm` component that allows users to submit "thoughts," which are stored in a MongoDB database via a GraphQL API.

# Key Features

- Apollo Client integration for managing GraphQL mutations.
- React state management with `useState` for form handling.
- Error handling during mutations.
- Controlled components for user inputs.
- Real-time updates by reloading the page after a successful mutation.

# Concepts Covered

- GraphQL mutations for data creation.
- Apollo Client hooks (`useMutation`) for interacting with GraphQL APIs.
- React state management with `useState`.
- Controlled inputs and form submission handling in React.
- MongoDB integration for persistent data storage.

# Installation and Usage

1. **Install MongoDB:**
   Ensure MongoDB is installed and running on your system. Refer to the [MongoDB installation guide](https://www.mongodb.com/docs/manual/installation/) for setup instructions.

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

### ThoughtForm Component

The `ThoughtForm` component uses `useMutation` from Apollo Client to handle GraphQL mutations for adding new thoughts.

```jsx
import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_THOUGHT } from "../../utils/mutations";

const ThoughtForm = () => {
  const [formState, setFormState] = useState({
    thoughtText: "",
    thoughtAuthor: "",
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "thoughtText" && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== "thoughtText") {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>What's on your techy mind?</h3>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? "text-danger" : ""
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="thoughtText"
            placeholder="Here's a new thought..."
            value={formState.thoughtText}
            className="form-input w-100"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="thoughtAuthor"
            placeholder="Add your name to get credit for the thought..."
            value={formState.thoughtAuthor}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Thought
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ThoughtForm;
```

# Technologies Included

- **React 18**: Component-based UI library.
- **Apollo Client**: GraphQL client for handling API requests and mutations.
- **GraphQL**: Query language for APIs.
- **MongoDB**: Database for storing thoughts and comments.
- **Node.js**: Backend server.
- **Express**: Middleware for creating API routes.

# Summary

This project provides an example of using Apollo Client and GraphQL to manage data mutations in a React application. With a robust backend powered by MongoDB and GraphQL, the application ensures efficient data handling and state management.

# Resources

- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
