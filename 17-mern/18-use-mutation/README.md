# MERN Use Mutation

## Concepts Covered

1. **GraphQL Mutations**:

   - A mutation allows us to modify server-side data and automatically update the cache for real-time UI updates.
   - Mutations can be combined with `refetchQueries` to ensure the UI reflects the latest data from the server.

2. **Apollo Client's `useMutation` Hook**:

   - `useMutation` is used to execute GraphQL mutations in a React component.
   - Automatically manages state for loading and errors.
   - Allows variables to be passed dynamically to the mutation.

3. **Controlled Components**:

   - The React form inputs are controlled using state.
   - Ensures form inputs are in sync with component state.

4. **Error Handling**:
   - Errors during mutation execution are captured and displayed to the user.

---

## Code Overview

### ThoughtForm Component

```javascript
import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_THOUGHT } from "../../utils/mutations";
import { QUERY_THOUGHTS } from "../../utils/queries";

const ThoughtForm = () => {
  const [formState, setFormState] = useState({
    thoughtText: "",
    thoughtAuthor: "",
  });

  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    refetchQueries: [QUERY_THOUGHTS, "getThoughts"],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addThought({ variables: { ...formState } });
      setCharacterCount(0);
      setFormState({ thoughtText: "", thoughtAuthor: "" });
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

---

## Key Features

1. **Dynamic Form State**:

   - `useState` is used to manage form data and character count.
   - Form inputs are cleared after successful submission.

2. **GraphQL Mutation**:

   - The `ADD_THOUGHT` mutation is executed using the `useMutation` hook.
   - `refetchQueries` ensures the `QUERY_THOUGHTS` query is re-fetched to update the list of thoughts.

3. **Error Handling**:

   - Displays an error message if the mutation fails.

4. **Character Count Validation**:
   - Ensures the thought text doesn't exceed 280 characters.

---

## Running the Application

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run the Application**:

   ```bash
   npm run develop
   ```

3. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3001`.

---

## Executing the Mutation in GraphQL Playground

1. **Navigate to GraphQL Playground**:

   - Open your browser and go to `http://localhost:3001/graphql`.

2. **Use the `ADD_THOUGHT` Mutation**:

   ```graphql
   mutation AddThought($thoughtText: String!, $thoughtAuthor: String!) {
     addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
       _id
       thoughtText
       thoughtAuthor
       createdAt
     }
   }
   ```

3. **Provide Query Variables**:

   ```json
   {
     "thoughtText": "This is a new thought!",
     "thoughtAuthor": "John Doe"
   }
   ```

4. **Execute the Mutation**:
   - Submit the mutation and verify the new thought is added successfully.

---

## Summary

This example demonstrates how to use Apollo Client's `useMutation` hook for executing GraphQL mutations in a MERN stack application. It includes controlled form components, real-time updates with `refetchQueries`, and error handling for a robust user experience.
