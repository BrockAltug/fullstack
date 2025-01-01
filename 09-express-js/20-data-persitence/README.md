# express-data-persistence

## Persisting Data with File System in Express.js

## Concepts Covered

- Using Express.js to handle `GET` and `POST` requests for data.
- Persisting data by reading from and writing to a JSON file.
- Generating unique IDs for data entries using helper functions.

## Learning Objectives

- Learn how to persist data on the server using the `fs` module.
- Understand how to handle asynchronous file operations.
- Practice validating and processing request data.

## Features

- **GET Requests**:
  - Fetches all reviews stored in a JSON file.
- **POST Requests**:
  - Adds a new review and persists it to a JSON file.
  - Generates a unique ID for each review.

## API Endpoints

### `GET /api/reviews`

- **Description**: Fetches all reviews from the JSON file.
- **Response Example**:
  ```json
  "GET request received to get reviews"
  ```

### `POST /api/reviews`

- **Description**: Adds a new review to the JSON file.
- **Request Body Example**:
  ```json
  {
    "product": "Product C",
    "review": "Amazing quality!",
    "username": "JaneDoe"
  }
  ```
- **Response Example**:
  ```json
  {
    "status": "success",
    "body": {
      "product": "Product C",
      "review": "Amazing quality!",
      "username": "JaneDoe",
      "review_id": "unique-id"
    }
  }
  ```

## Expected Behavior

1. The server listens on port `3001`.
2. `GET` requests retrieve reviews stored in the `reviews.json` file.
3. `POST` requests validate incoming data, generate a unique ID, and persist the new review to the `reviews.json` file.
4. Responses include appropriate status codes (`200`, `201`, `500`).

## Data Persistence Flow

1. The `POST /api/reviews` route:
   - Reads the current data from `reviews.json`.
   - Appends the new review to the array of existing reviews.
   - Writes the updated array back to the `reviews.json` file.

2. The `GET /api/reviews` route:
   - Responds with the current data in `reviews.json`.

## Summary

This project demonstrates how to persist data in a server-side application using the Node.js `fs` module. It highlights how to handle file operations asynchronously and manage data integrity for dynamic server-side functionality.
