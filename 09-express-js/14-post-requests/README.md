# express-post-requests

## Handling POST and GET Requests with Express.js

## Concepts Covered

- Creating and handling `GET` and `POST` requests in Express.js.
- Logging incoming requests for debugging and tracking.
- Sending JSON responses to client requests.

## Learning Objectives

- Understand how to create API endpoints for both `GET` and `POST` requests.
- Learn how to log request information to the console for debugging purposes.
- Respond to API requests with JSON messages.

## Features

- **GET Requests**:
  - Retrieves reviews and upvote counts via respective endpoints.
  - Logs each request method and endpoint for debugging.
- **POST Requests**:
  - Adds reviews and upvotes via respective endpoints.
  - Logs each request method and endpoint for tracking.

## API Endpoints

### `GET /api/reviews`

- **Description**: Logs and responds to a request for reviews.
- **Response Example**:
  ```json
  "GET /api/reviews request received to get reviews"
  ```

### `POST /api/reviews`

- **Description**: Logs and responds to a request to add a review.
- **Response Example**:
  ```json
  "POST /api/reviews request received to add a review"
  ```

### `GET /api/upvotes`

- **Description**: Logs and responds to a request for the upvote count.
- **Response Example**:
  ```json
  "GET /api/upvotes request received to retrieve upvote count"
  ```

### `POST /api/upvotes`

- **Description**: Logs and responds to a request to upvote.
- **Response Example**:
  ```json
  "POST /api/upvotes request received to upvote"
  ```

## Expected Behavior

1. The server listens on port `3001`.
2. A `GET` or `POST` request to any endpoint logs the request method and endpoint to the console.
3. Each endpoint responds with a JSON message confirming the action performed.

## Summary

This project demonstrates how to create and handle `GET` and `POST` requests in Express.js. It includes examples of logging incoming requests for debugging and sending JSON responses to the client.
