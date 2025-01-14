# MERN Review and Features

## Overview

This document provides a comprehensive review of the MERN-stack implementation, covering client-side routing, API interactions, and component functionality. It highlights features such as GraphQL queries, Vite configuration, and React components for an efficient and dynamic web application.

---

## Key Features

### Client-Side Routing

- Utilizes `react-router-dom` for navigation and dynamic routing.
- Defined routes include:
  - `/` (Home Page)
  - `/thoughts/:thoughtId` (Single Thought Page)
  - Custom error handling with an `Error` component.

### GraphQL Integration

- Queries and mutations handled using Apollo Client.
- Examples include fetching thoughts and comments, adding comments, and managing API states.

### Reusable Components

- Includes modular components such as:
  - `CommentList` for displaying user comments.
  - `CommentForm` for adding new comments with validation.

### Vite Configuration

- Vite setup with a development server running on port 3000.
- Proxy configuration routes GraphQL API requests to the backend server at `http://localhost:3001`.

---

## Concepts Covered

### React Router Setup

**`main.jsx`**

- Defines the application's router using `createBrowserRouter`.
- Dynamically maps `thoughtId` for displaying individual thought pages.

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/thoughts/:thoughtId", element: <SingleThought /> },
    ],
  },
]);
```

### GraphQL Queries and Mutations

**`SingleThought.jsx`**

- Fetches data for a specific thought based on the `thoughtId` parameter.

```jsx
const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
  variables: { thoughtId },
});
```

**`CommentForm.jsx`**

- Adds comments using the `ADD_COMMENT` mutation.
- Implements character count validation for input fields.

```jsx
const [addComment] = useMutation(ADD_COMMENT);
const handleFormSubmit = async (event) => {
  event.preventDefault();
  await addComment({ variables: { thoughtId, commentText } });
};
```

---

## Installation and Usage

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Seed the Database**:

   ```bash
   npm run seed
   ```

3. **Start Development Server**:
   ```bash
   npm run develop
   ```

---

## Example Usage

### Adding a Comment

1. Navigate to `/thoughts/:thoughtId`.
2. Enter a comment in the provided text box.
3. Submit the form to add the comment, which updates dynamically.

### Viewing Comments

- Comments are displayed using the `CommentList` component, showcasing user feedback.

---

## Technologies Included

- **React**: For building dynamic user interfaces.
- **Apollo Client**: Manages GraphQL queries and mutations.
- **Express**: Backend server for handling requests and serving the client.
- **MongoDB**: NoSQL database for storing thoughts and comments.
- **Vite**: Development server and bundler for fast builds.

---

## Summary

This document provides a detailed review of a MERN-stack application, focusing on client-side routing, GraphQL integration, and reusable React components. It demonstrates an effective structure for building scalable and dynamic web applications.

---
