# api-html-routes

## Express Application for Serving JSON Data via API

### Concepts Covered

- Setting up an Express.js server to handle API routes.
- Returning JSON data using `res.json()`.

### Learning Objectives

- Understand how to use Express.js to define and handle API routes.
- Learn how to use `res.json()` to send JSON responses.
- Learn how to serve JSON data from a file through a defined route.

### Features

- **JSON API Route**: Serves JSON data from a `terms.json` file.
- **Simple Root Route**: Provides a navigation message at the root URL.
- **Custom Port Configuration**: Configured to run on port `3001`.

### Expected Behavior

1. When the `npm init -y` command is run, it generates a `package.json` file.
2. When the `npm install express` command is executed, it installs the Express.js framework and lists it in the `package.json` file.
3. When the command `node index.js` is executed, the server:
   - Handles the following routes:
     - `/`: Displays a navigation message.
     - `/api`: Returns the contents of the `terms.json` file as a JSON response.
4. The server listens on port `3001` and logs the URL to access it in the console.

### Directory Structure

```
├── terms.json           # JSON file containing the data to be served
├── index.js             # Main application file
└── package.json         # Project metadata and dependencies
```

### Example JSON Response

For a `terms.json` file containing:
```json
[
  { "term": "HTML", "description": "A markup language for creating web pages." },
  { "term": "CSS", "description": "A stylesheet language for styling web pages." }
]
```

The `/api` route returns:
```json
[
  { "term": "HTML", "description": "A markup language for creating web pages." },
  { "term": "CSS", "description": "A stylesheet language for styling web pages." }
]
```

### Summary

This project demonstrates how to set up an Express.js server to handle API routes and return JSON data. It covers the basics of defining routes, using `res.json()`, and serving data from a file.
