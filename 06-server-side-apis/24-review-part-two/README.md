# GitHub Repository and Issue Tracker

## Concepts Covered

- Fetching repository and issue data from the GitHub API.
- Handling form submission, button clicks, and URL query parameters to fetch specific repositories and issues.
- Dynamically updating the DOM to display repositories, issues, and status indicators.
- Providing user-friendly navigation between repository lists and issue details.

## Learning Objectives

- Learn how to use the GitHub API to fetch repositories and issues for a specified user or programming language.
- Understand how to capture user input via a form and handle button click events to trigger API requests.
- Learn to extract URL query parameters to fetch specific repository data.
- Dynamically create and append HTML elements to display fetched data, including repository names and issue details.

## Features

1. **Search Repositories by GitHub Username:**

   - Users can enter a GitHub username to search for that user's repositories.
   - The repositories are displayed with their names and issue status (open or no issues).

2. **Search Featured Repositories by Programming Language:**

   - Users can click buttons to search for repositories needing help with issues in specific programming languages.
   - The repositories are sorted by the number of "help-wanted" issues.

3. **View Repository Issues:**

   - Users can click on a repository to view its open issues.
   - If the repository has more than 30 issues, a warning message is displayed with a link to GitHub for more issues.

4. **Error Handling:**

   - Alerts are triggered if a GitHub username is invalid, if there's an issue with connecting to GitHub, or if a repository has no issues.

5. **Repository Display:**

   - Repositories are displayed as clickable links that lead to their specific issue page.
   - Each repository displays its name and the number of open issues (if any).

6. **Issue Display:**
   - Issues for a specific repository are displayed with their titles and types (issue or pull request).
   - Each issue is linked to the corresponding GitHub page.

## Event Handling

1. **Form Submission:**

   - When the user submits the form, the `formSubmitHandler` function captures the GitHub username and triggers `getUserRepos()` to fetch the repositories.

2. **Button Clicks:**

   - When a programming language button is clicked, the `buttonClickHandler` function captures the language and triggers `getFeaturedRepos()` to fetch the relevant repositories.

3. **URL Query Parameter Parsing:**
   - The `getRepoName()` function parses the repository name from the URL to fetch issues for the selected repository.

## API Requests and Parsing

- **getUserRepos()**:

  - Sends a `GET` request to fetch repositories for a GitHub user: `https://api.github.com/users/<username>/repos`.
  - The response is parsed and passed to the `displayRepos()` function to display the repositories.

- **getFeaturedRepos()**:

  - Sends a `GET` request to search for featured repositories by programming language: `https://api.github.com/search/repositories?q=<language>+is:featured&sort=help-wanted-issues`.
  - The response is parsed and passed to `displayRepos()` to display the repositories.

- **getRepoIssues()**:
  - Sends a `GET` request to fetch issues for a specific repository: `https://api.github.com/repos/<repo>/issues?direction=asc`.
  - The response is parsed and passed to `displayIssues()` to display the issues.

## Displaying Repositories and Issues

- **displayRepos()**:

  - Dynamically creates and appends repository elements to the DOM. Each repository is a clickable link that navigates to its issues page.
  - Displays the repository name and open issue count, if available.

- **displayIssues()**:

  - Dynamically creates and appends issue elements to the DOM. Each issue is displayed with its title and type (issue or pull request) and is linked to the corresponding GitHub page.

- **displayWarning()**:
  - Displays a message if there are more than 30 issues, linking to GitHub for the remaining issues.

## How It Works

1. **Search by GitHub Username:**

   - Users enter a GitHub username to retrieve and display the repositories for that user. Repositories are clickable and navigate to their issue lists.

2. **Search by Programming Language:**

   - Users click language buttons to retrieve and display featured repositories for a selected programming language. Repositories are clickable and lead to their issue pages.

3. **View Repository Issues:**
   - On the repository issues page, issues are displayed in ascending order. Each issue is clickable, leading to its GitHub page. If the repository has more than 30 issues, a warning is displayed with a link to GitHub.

## Summary

This project provides a user-friendly interface to search for GitHub repositories by username or programming language and view their open issues. The app makes API requests to GitHub, dynamically displays repositories and issues, and handles error cases gracefully. Users can easily navigate between repositories and issue details through clickable links and well-structured layouts.

### 06-server-side-apis/01-activities/24-stu-review-part-two
