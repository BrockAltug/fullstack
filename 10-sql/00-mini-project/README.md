# SQL Mini Project: Movie Reviews API

## Overview

This project demonstrates a movie reviews API built with Express.js and PostgreSQL. It includes endpoints for creating, reading, updating, and deleting movies and reviews. The application leverages SQL for data persistence and joins to fetch related data.

---

## Key Features

### Back-End (Express.js)

1. **API Endpoints**:
   - Create, read, update, and delete movies and reviews.
   - Fetch movie reviews with movie names using SQL joins.

2. **PostgreSQL Connection**:
   - Uses the `pg` package to connect and interact with a PostgreSQL database.

3. **Express Middleware**:
   - Parses JSON and URL-encoded form data.

4. **Error Handling**:
   - Validates requests and handles errors gracefully.

### Database (PostgreSQL)

1. **Schema**:
   - Movies table with `id` and `movie_name`.
   - Reviews table with `id`, `movie_id` (foreign key), and `review`.

2. **Seeding**:
   - Populates the database with sample movies and reviews.

3. **SQL Queries**:
   - Includes complex queries using joins to retrieve related data.

---

## Database Schema

### schema.sql

```sql
DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

\c movies_db;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  movie_name VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    movie_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);
```

---

## API Endpoints

### `POST /api/new-movie`
- **Description**: Adds a new movie to the database.
- **Request Body Example**:
  ```json
  {
    "movie_name": "Inception"
  }
  ```
- **Response Example**:
  ```json
  {
    "message": "success",
    "data": {
      "movie_name": "Inception"
    }
  }
  ```

### `GET /api/movies`
- **Description**: Retrieves all movies in the database.
- **Response Example**:
  ```json
  {
    "message": "success",
    "data": [
      { "id": 1, "title": "Lion King" },
      { "id": 2, "title": "The Godfather" }
    ]
  }
  ```

### `DELETE /api/movie/:id`
- **Description**: Deletes a movie by its ID.
- **Response Example**:
  ```json
  {
    "message": "deleted",
    "changes": 1,
    "id": 1
  }
  ```

### `GET /api/movie-reviews`
- **Description**: Fetches all reviews with associated movie names.
- **Response Example**:
  ```json
  {
    "message": "success",
    "data": [
      {
        "movie": "Lion King",
        "review": "Hakuna matata"
      },
      {
        "movie": "The Godfather",
        "review": "I'm gonna make him an offer you can't refuse"
      }
    ]
  }
  ```

### `PUT /api/review/:id`
- **Description**: Updates a review by its ID.
- **Request Body Example**:
  ```json
  {
    "review": "Amazing movie with incredible acting!"
  }
  ```
- **Response Example**:
  ```json
  {
    "message": "success",
    "data": {
      "review": "Amazing movie with incredible acting!"
    },
    "changes": 1
  }
  ```

---

## Seeding the Database

### seeds.sql

```sql
INSERT INTO movies (movie_name)
VALUES ('Lion King'),
       ('The Godfather'),
       ('West Side Story'),
       ('Parasite'),
       ('The Wizard of Oz');

INSERT INTO reviews (movie_id, review)
VALUES (1, 'Zazu is underrated. Give that hornbill a sequel!'),
       (2, 'I''m gonna make him an offer you can''t refuse, watch this movie'),
       (1, 'Scar is the lion everyone loves to hate'),
       (3, 'Ten years of ballet and three years of tap to join a gang in this neighborhood'),
       (5, 'The tin man gave a metallic, hollow performance'),
       (1, 'Hakuna matata'),
       (5, 'Those flying monkeys are nightmare fuel!');
```

---

## Example SQL Query

### query.sql

```sql
SELECT movies.movie_name AS movie, reviews.review
FROM reviews
LEFT JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name;
```

---

## Expected Behavior

1. The application connects to a PostgreSQL database.
2. API endpoints allow users to create, retrieve, update, and delete movies and reviews.
3. SQL queries fetch related data using joins for enhanced functionality.

---

## Summary

This project demonstrates a robust integration of Express.js and PostgreSQL to manage movie reviews. It highlights dynamic API endpoints, SQL joins, and efficient data handling with a relational database.
