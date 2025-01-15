# GitHub Repository Issues Fetcher for Twitter Chill Repo

## Concepts Covered

- Fetching data from an external API (GitHub Issues API).
- Parsing and extracting specific data from a JSON response.
- Looping through the parsed data to log important information.
- Handling and displaying parsed data in the console.

## Learning Objectives

- Learn how to use the `fetch` API to retrieve issues from the GitHub repository `twitter/chill`.
- Understand how to parse the JSON response from the API to extract useful information such as issue URLs and user details.
- Gain experience in iterating through an array of parsed data and logging specific attributes (e.g., issue URLs and usernames).

## Features

1. **Fetch GitHub Issues:**
   - The script fetches the latest 5 issues from the `twitter/chill` repository using the GitHub API.
2. **Parsing the Response:**

   - The JSON response from the API is parsed to create a JavaScript object. The parsed data is then looped through to extract specific properties such as:
     - The URL of each issue.
     - The username of the user who created the issue.

3. **Display Parsed Issue Details in the Console:**

   - For each issue, the following information is logged to the console:
     - The issue's URL.
     - The GitHub username of the user who created the issue.

4. **Console Logging for Easy Inspection:**
   - The script formats and displays the parsed issue data (URL and user login) clearly in the console for easy inspection and debugging.

## Summary

This project demonstrates how to use the `fetch` API to retrieve and parse the latest issues from the GitHub repository `twitter/chill`. After parsing the JSON response, the script iterates over the issues and logs relevant details such as the issue URL and the username of the user who created it. This project emphasizes the importance of parsing JSON data and extracting useful information from API responses.

### 06-server-side-apis/01-activities/08-stu-parse-json
