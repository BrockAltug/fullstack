# basic-express-setup

## Express Application for Serving Static Files and Handling Routes

### Concepts Covered

- Setting up an Express.js project to handle HTTP requests.
- Serving static files from a designated directory.
- Defining routes to serve HTML files dynamically using `path`.

### Learning Objectives

- Understand how to initialize a Node.js project and manage dependencies using npm.
- Learn how to set up an Express.js server to serve static files and define basic routes.
- Learn how to use the `path` module to resolve file paths.

### Features

- **Static File Serving**: Serves HTML files and other assets from a `public` directory.
- **Dynamic Routing**: Provides custom routes to serve specific HTML files.
- **Custom Port Configuration**: Configured to run on port `3001` (default) but can be adjusted as needed.

### Expected Behavior

1. When the `npm init -y` command is run, it generates a `package.json` file.
2. When the `npm install express` command is executed, it installs the Express.js framework and lists it in the `package.json` file.
3. When the command `node index.js` is executed, the server:
   - Serves static files from the `public` directory.
   - Handles the following routes:
     - `/`: Displays a message with navigation instructions.
     - `/send`: Serves the `send.html` file from the `public` directory.
     - `/paths`: Serves the `paths.html` file from the `public` directory.
4. The server listens on port `3001` and logs the URL to access it in the console.

### Directory Structure

```
├── public/
│   ├── send.html         # HTML file served at /send
│   └── paths.html        # HTML file served at /paths
├── index.js              # Main application file
└── package.json          # Project metadata and dependencies
```

### Summary

This project demonstrates how to use Express.js to build a basic server that serves static files and handles custom routes. It covers key Express.js concepts such as static file serving, routing, and dynamic port configuration.
