# Library of Congress Search Engine

## Concepts Covered

- Fetching data from an external API (Library of Congress API).
- Handling and parsing URL query parameters.
- Dynamically creating HTML elements to display fetched data.
- Event handling in JavaScript using form submissions.
- Using Bootstrap for a simple and responsive UI.

## Learning Objectives

- Understand how to use `fetch` to retrieve data from an API.
- Parse and use URL query parameters for searches.
- Manipulate the DOM to dynamically display search results.
- Create an intuitive UI for users to interact with, including search functionality and filtering by data format.
- Build a responsive web application with Bootstrap classes and custom CSS.

## Features

1. **Search Functionality:**
   - Users can input a search query and select a format (maps, audio, photos, manuscripts, etc.).
   - Upon submission, users are redirected to a results page that fetches and displays data from the Library of Congress API.
2. **Search Results Page:**
   - Displays search results based on the query and selected format.
   - If no format is selected, the API returns results from all formats.
   - Results include titles, subjects, dates, descriptions, and a link to read more on the Library of Congress site.
3. **Reusable Search:**
   - Users can perform additional searches from the search results page without needing to go back to the homepage.
4. **Responsive Design:**
   - The app uses Bootstrap and custom CSS for a responsive layout, ensuring a consistent user experience across devices.

## Summary

This project is a simple, user-friendly web application that allows users to search the Library of Congress using a query and optional format. The search results are dynamically generated and displayed using JavaScript, and the app's interface is clean and responsive. This project demonstrates how to interact with an external API, handle query parameters, and build a user-focused search engine with dynamic content rendering.
