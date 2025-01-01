# express-insomnia

## Using Express.js with Insomnia for API Testing

## Concepts Covered

- Creating an Express.js server with basic routes.
- Serving JSON data through an API endpoint.
- Testing API responses using Insomnia.

## Learning Objectives

- Learn how to set up a basic Express.js server.
- Serve JSON data through a `GET` route.
- Test API endpoints with tools like Insomnia or Postman.

## Features

- **GET Route**: Serves JSON data from a local file (`repos.json`) through the `/api` endpoint.
- **HTML Endpoint**: Provides instructions at the root (`/`) endpoint with a link to the API.
- **API Testing**: API endpoints can be tested using Insomnia.

## API Endpoints

### `GET /`

- **Description**: Returns an HTML message with a link to the `/api` endpoint.
- **Response Example**:
  ```html
  Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>
  ```

### `GET /api`

- **Description**: Returns JSON data from the `repos.json` file.
- **Response Example**:
  ```json
  [
    {
      "id": 1,
      "name": "awesome-repo",
      "description": "An awesome repository for demo purposes."
    },
    {
      "id": 2,
      "name": "another-repo",
      "description": "Another repository example."
    }
  ]
  ```

## Expected Behavior

1. The server listens on port `3001`.
2. Navigating to [http://localhost:3001](http://localhost:3001) in a browser displays an HTML message with a link to the `/api` endpoint.
3. Accessing [http://localhost:3001/api](http://localhost:3001/api) directly or via Insomnia returns the JSON content of `repos.json`.

## Summary

This project demonstrates how to set up a simple API using Express.js and serve JSON data through a `GET` route. It also shows how to test the API responses using tools like Insomnia for validation.
