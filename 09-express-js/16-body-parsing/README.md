# express-body-parsing

## Parsing JSON and URL-Encoded Data with Express.js

## Concepts Covered

- Using Express.js middleware to parse JSON and URL-encoded data.
- Handling `GET` and `POST` requests with parsed request bodies.
- Responding to client requests based on request parameters and body data.

## Learning Objectives

- Understand how to use `express.json()` to parse JSON request bodies.
- Understand how to use `express.urlencoded()` to parse URL-encoded form data.
- Learn how to handle dynamic routes with parameters and manage data flow.

## Features

- **GET Requests**:
  - Retrieves all reviews or a specific review based on the review ID.
  - Responds with appropriate status codes for missing or invalid IDs.
- **POST Requests**:
  - Adds a new review or updates the upvote count for a review.
  - Validates the request body to ensure required data is present.

## API Endpoints

### `GET /api/reviews`

- **Description**: Fetches all reviews.
- **Response Example**:
  ```json
  [
    {
      "review_id": 1,
      "product": "Product A",
      "review": "Great product!",
      "upvotes": 5
    },
    {
      "review_id": 2,
      "product": "Product B",
      "review": "Not bad.",
      "upvotes": 2
    }
  ]
  ```

### `GET /api/reviews/:review_id`

- **Description**: Fetches a single review by its ID.
- **Response Example**:
  ```json
  {
    "review_id": 1,
    "product": "Product A",
    "review": "Great product!",
    "upvotes": 5
  }
  ```

### `POST /api/reviews`

- **Description**: Adds a new review with the request body containing `product` and `review`.
- **Request Body Example**:
  ```json
  {
    "product": "Product C",
    "review": "Amazing quality!"
  }
  ```
- **Response Example**:
  ```json
  {
    "status": "success",
    "data": {
      "product": "Product C",
      "review": "Amazing quality!"
    }
  }
  ```

### `POST /api/upvotes/:review_id`

- **Description**: Increments the upvote count for a specific review by its ID.
- **Request Body Example**:
  ```json
  {
    "upvote": true
  }
  ```
- **Response Example**:
  ```json
  "New upvote count is 6!"
  ```

## Expected Behavior

1. The server listens on port `3001`.
2. `GET` requests return reviews data or specific review details.
3. `POST` requests validate and process data in the request body.
4. Responses include appropriate status codes (e.g., `200`, `201`, `400`, `404`).

## Summary

This project demonstrates how to use Express.js middleware to parse JSON and URL-encoded data in incoming requests. It highlights best practices for handling and responding to `GET` and `POST` requests based on request parameters and body data.
