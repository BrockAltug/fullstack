# express-custom-middleware

## Using Custom Middleware in Express.js

## Concepts Covered

- Creating and using custom middleware in Express.js.
- Logging request details with a middleware function.
- Organizing routes with modular routing.

## Learning Objectives

- Learn how to create and apply custom middleware in an Express.js application.
- Understand how to modularize routes for maintainability.
- Practice implementing `GET` and `POST` routes with JSON data handling.

## Features

- **Custom Middleware**:
  - Logs the request method and path to the console for every request.
- **Modular Routing**:
  - Separates API routes for tips and feedback into dedicated route files.
- **Dynamic Data Handling**:
  - Reads from and appends data to JSON files for tips and feedback.

## Middleware: `clog`

A custom middleware function logs the method and path of incoming requests:

### Example Log Output

- `📗 GET request to /api/tips`
- `📘 POST request to /api/feedback`

### Implementation

```javascript
const clog = (req, res, next) => {
  const fgCyan = '\x1b[36m';
  switch (req.method) {
    case 'GET': {
      console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    case 'POST': {
      console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    default:
      console.log(`📙${fgCyan}${req.method} request to ${req.path}`);
  }
  next();
};
```

## API Endpoints

### `GET /api/tips`

- **Description**: Fetches all tips from `tips.json`.
- **Response Example**:
  ```json
  [
    {
      "username": "JaneDoe",
      "topic": "UI Design",
      "tip": "Use consistent spacing",
      "tip_id": "12345"
    }
  ]
  ```

### `POST /api/tips`

- **Description**: Adds a new tip to `tips.json`.
- **Request Body Example**:
  ```json
  {
    "username": "JohnDoe",
    "topic": "UX Research",
    "tip": "Test with real users"
  }
  ```
- **Response Example**:
  ```json
  "Tip added successfully"
  ```

### `GET /api/feedback`

- **Description**: Fetches all feedback from `feedback.json`.
- **Response Example**:
  ```json
  [
    {
      "email": "user@example.com",
      "feedbackType": "Bug",
      "feedback": "The submit button is not working",
      "feedback_id": "54321"
    }
  ]
  ```

### `POST /api/feedback`

- **Description**: Adds new feedback to `feedback.json`.
- **Request Body Example**:
  ```json
  {
    "email": "user@example.com",
    "feedbackType": "Feature Request",
    "feedback": "Add dark mode support"
  }
  ```
- **Response Example**:
  ```json
  {
    "status": "success",
    "body": {
      "email": "user@example.com",
      "feedbackType": "Feature Request",
      "feedback": "Add dark mode support",
      "feedback_id": "67890"
    }
  }
  ```

## Expected Behavior

1. Custom middleware logs every request to the console.
2. API routes handle data retrieval (`GET`) and data submission (`POST`) for tips and feedback.
3. JSON files (`tips.json`, `feedback.json`) are dynamically updated with new data.

## Summary

This project demonstrates the use of custom middleware in Express.js for logging and the organization of modular routes. It includes examples of `GET` and `POST` requests, with dynamic data handling for a tips and feedback API.
