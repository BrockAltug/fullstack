# express-get-fetch

## Client-Side Fetching with Express.js Backend

## Concepts Covered

- Using the Fetch API to make GET requests to an Express.js backend.
- Dynamically rendering HTML elements based on API response data.

## Learning Objectives

- Understand how to set up a client-side application to fetch data from an API.
- Learn how to dynamically create and append HTML elements using JavaScript.
- Learn how to handle user interactions with event listeners.

## Features

- **GET Request**: Fetches pet data from an API endpoint (`/api/pets`).
- **Dynamic Rendering**: Creates and displays pet cards dynamically based on the API response.
- **User Interaction**: Fetches and renders pets when a button is clicked.

## API Endpoints

### `GET /api/pets`

- **Description**: Returns a JSON array of pet objects.
- **Response Example**:
  ```json
  [
    {
      "name": "Bella",
      "description": "A friendly golden retriever.",
      "image_url": "https://example.com/bella.jpg"
    },
    {
      "name": "Milo",
      "description": "A curious tabby cat.",
      "image_url": "https://example.com/milo.jpg"
    }
  ]
  ```

## Expected Behavior

1. The server listens on port `3001`.
2. When the browser navigates to [http://localhost:3001](http://localhost:3001), it displays a simple frontend.
3. Clicking the button with the ID `term-btn` triggers a `GET` request to `/api/pets`.
4. The returned pet data is dynamically rendered as cards on the page. Each card includes:
   - A title (pet name).
   - A description.
   - An image.

## Summary

This project demonstrates how to use the Fetch API to retrieve data from an Express.js backend and dynamically render it on a webpage. It showcases a complete flow from backend API setup to client-side interaction and rendering.
