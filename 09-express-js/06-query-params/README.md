# query-params

## Express Application Demonstrating Query Parameters for API Routing

### Concepts Covered

- Using query parameters (`req.query`) to dynamically modify API responses.
- Filtering and sorting JSON data based on user-specified query parameters.

### Learning Objectives

- Understand how to use query parameters to customize API responses.
- Learn how to process and handle query parameters in Express.js.

### Features

- **Dynamic Sorting**: Allows sorting of terms in ascending (`asc`) or descending (`dsc`) order using a `sort` query parameter.
- **Category-Based Filtering**: Filters terms by specific categories using query parameters.
- **Specific Term Fetching**: Retrieves individual terms based on route parameters.

### API Endpoints

#### `/api/terms`
- **Description**: Returns all terms, with optional sorting or filtering by category.
- **Query Parameters**:
  - `sort=asc`: Sorts terms in ascending order.
  - `sort=dsc`: Sorts terms in descending order.
  - `category=<category>`: Filters terms by a specific category.
- **Example Requests**:
  - `/api/terms`: Returns all terms without sorting or filtering.
  - `/api/terms?sort=asc`: Returns all terms sorted in ascending order.
  - `/api/terms?sort=dsc`: Returns all terms sorted in descending order.
  - `/api/terms?category=Frontend`: Returns all terms in the "Frontend" category.

#### `/api/term/:term`
- **Description**: Fetches a specific term by name.
- **Route Parameters**:
  - `:term`: The name of the term to fetch.
- **Example Requests**:
  - `/api/term/HTML`: Returns the term object for "HTML".
  - `/api/term/CSS`: Returns the term object for "CSS".

#### `/api/categories`
- **Description**: Fetches all unique categories from the terms data.
- **Example Request**:
  - `/api/categories`: Returns a list of all unique categories.

### Directory Structure

```
├── sortData.js           # Helper function to sort JSON data
├── terms.json            # JSON file containing terms and their metadata
├── index.js              # Main application file with API routes
└── package.json          # Project metadata and dependencies
```

### Example JSON Data

For a `terms.json` file containing:
```json
[
  { "term": "HTML", "description": "A markup language.", "category": "Frontend" },
  { "term": "CSS", "description": "A stylesheet language.", "category": "Frontend" },
  { "term": "Node.js", "description": "A runtime environment.", "category": "Backend" }
]
```

### Summary

This project demonstrates how to use query parameters to customize API responses dynamically. It showcases how to sort and filter JSON data using query parameters (`req.query`) and route parameters (`req.params`).
