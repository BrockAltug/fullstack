# GitHub Repository Finder

## Concepts Covered

- Fetching data from the GitHub API to retrieve user repositories and featured repositories by programming language.
- Handling form submission and button click events to trigger API requests.
- Dynamically updating the DOM to display repositories and their statuses.

## Learning Objectives

- Learn how to use the `fetch` API to make requests to the GitHub API for both user-specific repositories and featured repositories based on a programming language.
- Understand how to capture user input via a form and handle button click events.
- Dynamically create and append HTML elements to display API response data, including repository names and their issue status.

## Features

1. **Search Repositories by GitHub Username:**
   - Users can enter a GitHub username in a form to search for and display that user's repositories.
   - If the username is valid, the repositories are fetched from GitHub and displayed. If not, an error alert is shown.
2. **Search Featured Repositories by Language:**

   - Users can click on buttons corresponding to specific programming languages (e.g., JavaScript, Python) to fetch and display featured repositories that need help with issues.
   - The repositories are sorted by the number of help-wanted issues.

3. **Error Handling:**

   - Alerts are triggered if the GitHub username is invalid or if there is an issue connecting to the GitHub API.

4. **Repository Display:**
   - The fetched repositories are displayed with the following information:
     - Repository name (`<github-username>/<repo-name>` format).
     - Open issues count: A red icon if the repository has open issues, and a green checkmark if no issues exist.

## Event Handling

1. **Form Submission:**
   - When the user submits the form, the `formSubmitHandler` function is triggered. It fetches the repositories for the entered GitHub username by calling the `getUserRepos()` function.
2. **Button Clicks:**
   - When a programming language button is clicked, the `buttonClickHandler` function is triggered. It fetches featured repositories for the selected language by calling the `getFeaturedRepos()` function.

## API Requests and Parsing

- **getUserRepos()**:

  - Sends a `GET` request to the GitHub API for the entered user's repositories: `https://api.github.com/users/<username>/repos`.
  - The response is parsed using `.json()` and passed to the `displayRepos()` function to dynamically display the repositories.

- **getFeaturedRepos()**:
  - Sends a `GET` request to the GitHub API to search for featured repositories by programming language: `https://api.github.com/search/repositories?q=<language>+is:featured&sort=help-wanted-issues`.
  - The response is parsed and passed to `displayRepos()` to display the repositories.

## Displaying Repositories

- **displayRepos()**:
  - Dynamically creates and appends HTML elements to display the repository name and its open issue count.
  - If no repositories are found, a message is displayed in the container.

## How It Works

1. **Search by GitHub Username:**

   - User enters a GitHub username in the form and submits it.
   - The `formSubmitHandler` function captures the input and calls `getUserRepos()` to fetch the user's repositories.
   - The repositories are displayed, showing the repository name and the number of open issues, if any.

2. **Search by Programming Language:**
   - User clicks a programming language button.
   - The `buttonClickHandler` function captures the language from the button’s `data-language` attribute and calls `getFeaturedRepos()` to fetch featured repositories for that language.
   - The repositories are displayed in the same format.

## Summary

This project allows users to search for GitHub repositories either by entering a username or selecting a programming language. The app dynamically fetches and displays repositories using the GitHub API, showing the repository names and issue statuses. The project emphasizes API requests, DOM manipulation, and event handling in JavaScript.
