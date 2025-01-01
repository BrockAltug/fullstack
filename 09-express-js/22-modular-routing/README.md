# express-modular-routing

## Modular Routing in Express.js

## Concepts Covered

- Using modular routing to organize Express.js applications.
- Setting up middleware for custom route files.
- Handling dynamic API endpoints with separate route files.

## Learning Objectives

- Learn how to use `app.use()` to apply modular routes.
- Organize routes into separate files for maintainability.
- Understand how to use middleware to mount routes under a specific path.

## Features

- **Modular Routes**:
  - API routes are organized in a `routes` directory and imported into the main server file.
- **Static File Serving**:
  - Serves static assets from the `public` directory.
- **Page Navigation**:
  - Includes routes for the homepage and a feedback page.

## API Endpoints

### `/api` (Base Path for API)

- All API routes are prefixed with `/api` to separate them from other application routes.
- Custom routes (e.g., `/api/tips`) are handled in separate files within the `routes` directory.

### `GET /api/tips`

- **Description**: Fetches all tips from the database.
- **Response Example**:
  ```json
  [
    {
      "id": "1",
      "title": "Stay organized",
      "content": "Use modular routing to structure your application."
    },
    {
      "id": "2",
      "title": "Write clean code",
      "content": "Separate concerns by keeping route logic in individual files."
    }
  ]
  ```

## Directory Structure

- `routes/`: Contains all modular route files.
- `public/`: Static assets like HTML, CSS, and JavaScript files.
- `helpers/`: Utility functions such as ID generation.
- `server.js`: Main application file that imports and uses modular routes.

## Middleware Setup

1. Import custom routes into `server.js`:
   ```javascript
   const apiRoutes = require("./routes/index");
   ```

2. Apply middleware to mount API routes under `/api`:
   ```javascript
   app.use("/api", apiRoutes);
   ```

## Expected Behavior

1. The server listens on port `3001`.
2. Routes are organized into separate files for cleaner code and better maintainability.
3. The `/api` base path serves API-related routes, while other routes serve static pages.

## Summary

This project demonstrates how to use modular routing in Express.js for better application structure and maintainability. By separating API routes into their own files, you can keep your codebase organized and easier to manage.
