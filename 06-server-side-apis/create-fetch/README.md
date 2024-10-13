# GitHub Repositories Fetcher

## Concepts Covered

- Using the `fetch` API to retrieve data from an external API.
- Dynamically generating HTML elements to display fetched data.
- Handling user interaction through button click events.

## Learning Objectives

- Understand how to use `fetch` to retrieve JSON data from an external API (GitHub API in this case).
- Dynamically manipulate the DOM to display a list of data (GitHub repositories).
- Add event listeners to handle user input and trigger actions (e.g., fetching data on button click).

## Features

1. **Fetch GitHub Repositories:**
   - On clicking the "Fetch Your User Repos" button, the app fetches a list of repositories for a specific GitHub user (in this example, `octocat`).
2. **Dynamic Display of Repositories:**

   - The fetched repositories are displayed as a list of links, where each list item contains the URL to the repository on GitHub.

3. **Easy User Interaction:**
   - The user only needs to click a button to trigger the API call and display the results.

## Summary

This project is a simple web application that fetches a list of repositories from the GitHub API for a given user and dynamically displays the repository URLs in an unordered list. By clicking the "Fetch Your User Repos" button, the user can trigger the API request and see the fetched data appear on the page. This project demonstrates the use of JavaScript's `fetch` API, DOM manipulation, and event handling.
