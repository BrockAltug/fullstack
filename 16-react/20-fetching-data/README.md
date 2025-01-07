# React Fetching Data from an API

## Overview

This project demonstrates how to use React to fetch data from an external API. It includes dynamic searching and displays movie details retrieved from the OMDB API. The application features a responsive UI with reusable components.

---

## Key Features

1. **Data Fetching**:

   - Uses the OMDB API to retrieve movie details dynamically based on user input.

2. **State Management**:

   - Utilizes React's `useState` hook to manage the current search term and API results.

3. **Side Effects**:

   - Employs the `useEffect` hook to trigger an initial API call upon component mount.

4. **Reusable Components**:

   - Features modular UI components, such as `Container`, `Row`, `Col`, `Card`, `SearchForm`, and `MovieDetail`.

5. **Dynamic Rendering**:
   - Dynamically updates the UI based on search results or default values.

---

## Concepts Covered

1. **useEffect Hook**:

   - Learn how to use `useEffect` to perform side effects like API calls when a component mounts.

2. **useState Hook**:

   - Manage dynamic state for search queries and fetched results.

3. **API Integration**:

   - Practice making asynchronous requests using custom utility functions.

4. **Controlled Components**:

   - Build a search form where input is fully controlled by React state.

5. **Conditional Rendering**:
   - Dynamically render movie details or fallback UI based on the availability of search results.

---

## Setup Instructions

1. **Install Dependencies**:

   - Run `npm install` to set up the project and install required dependencies.

2. **Run the Application**:

   - Start the application using:
     ```bash
     npm start
     ```

3. **View the Application**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser to use the search functionality.

---

## Expected Behavior

1. The application initially fetches and displays details for the movie "The Matrix."
2. Users can search for a movie using the search form.
3. Movie details dynamically update when a new search is performed.
4. A fallback UI is displayed if no results are available.

---

## Summary

This project highlights the use of React hooks for state and side effects. It integrates external APIs and demonstrates best practices for controlled components and dynamic rendering, providing a solid foundation for building data-driven React applications.
