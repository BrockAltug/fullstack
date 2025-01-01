# express-post-fetch

## Implementing POST and GET Requests with Fetch and Express.js

## Concepts Covered

- Using Express.js to handle `GET` and `POST` requests.
- Creating dynamic endpoints for retrieving and updating reviews.
- Utilizing the Fetch API for client-side interaction with the backend.

## Learning Objectives

- Learn how to set up API endpoints for creating and retrieving reviews.
- Understand how to process and validate data from client requests.
- Learn to use Fetch API for POST and GET requests from the client side.

## Features

- **GET Requests**:
  - Retrieves all reviews or a specific review based on the review ID.
  - Provides upvote counts for specific reviews.
- **POST Requests**:
  - Adds a new review with product, review, and username fields.
  - Increments upvote counts for specific reviews.
- **Dynamic IDs**:
  - Uses a helper method to generate unique review IDs.

## API Endpoints

### `GET /api/reviews`

- **Description**: Fetches all reviews.
- **Response Example**:
  ```json
  [
    {
      "review_id": "12345",
      "product": "Product A",
      "review": "Great product!",
      "username": "JohnDoe",
      "upvotes": 10
    }
  ]
  ```

### `GET /api/reviews/:review_id`

- **Description**: Fetches a single review by its ID.
- **Response Example**:
  ```json
  {
    "review_id": "12345",
    "product": "Product A",
    "review": "Great product!",
    "username": "JohnDoe",
    "upvotes": 10
  }
  ```

### `POST /api/reviews`

- **Description**: Adds a new review.
- **Request Body Example**:
  ```json
  {
    "product": "Product B",
    "review": "Excellent quality!",
    "username": "JaneDoe"
  }
  ```
- **Response Example**:
  ```json
  {
    "status": "success",
    "body": {
      "review_id": "67890",
      "product": "Product B",
      "review": "Excellent quality!",
      "username": "JaneDoe",
      "upvotes": 45
    }
  }
  ```

### `GET /api/upvotes/:review_id`

- **Description**: Retrieves the upvote count for a specific review.
- **Response Example**:
  ```json
  {
    "message": "The review with ID 12345 has 10 upvotes",
    "upvotes": 10
  }
  ```

### `POST /api/upvotes/:review_id`

- **Description**: Increments the upvote count for a specific review.
- **Request Body Example**:
  ```json
  {
    "upvote": true
  }
  ```
- **Response Example**:
  ```json
  "New upvote count is 11!"
  ```

## Expected Behavior

1. The server listens on port `3001`.
2. `GET` requests retrieve reviews or upvote details.
3. `POST` requests validate and process new reviews or upvote actions.
4. Responses include appropriate status codes (e.g., `200`, `201`, `400`, `404`).

## Summary

This project demonstrates how to create and handle dynamic API endpoints using Express.js and process client requests using the Fetch API. It includes examples for adding reviews, retrieving reviews, and managing upvotes.
