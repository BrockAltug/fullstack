# 404 Error Redirect with Fetch

## Overview

This project demonstrates how to handle a failed `fetch()` request and redirect users to a custom 404 error page if the requested resource is not found. When a `fetch()` request results in a 404 status, the script automatically redirects the user to a `404.html` page, ensuring a graceful experience for users when encountering broken or unavailable links.

### Functionality

1. **API Call**: The script sends a `fetch()` request to a non-existent API endpoint (`https://api.github.com/unicorns`).
2. **Error Handling**:

   - If the response status is `404` (indicating the resource was not found), the script uses `document.location.replace()` to redirect the user to a custom `404.html` page.
   - If the request is successful and no error occurs, the script proceeds to parse the response as JSON.

3. **Redirection**:
   - The script checks the status of the response from the API.
   - If the status is `404`, the user is redirected to the custom error page (`404.html`).
4. **404 Error Page**:
   - The `404.html` page is a simple HTML document that informs users that the requested resource was not found, and provides an error message.

### API and Redirection Details

- **Request URL**: `'https://api.github.com/unicorns'` (a deliberately invalid endpoint to simulate a 404 error).
- **Redirection URL**: `'./404.html'` (the custom error page the user is redirected to when a 404 occurs).

## How It Works

1. The script sends a `fetch()` request to an invalid URL (`https://api.github.com/unicorns`).
2. When the API returns a `404` status code, the script redirects the user to a custom error page (`404.html`) using `document.location.replace()`.
3. If the API request is successful (not applicable here since it's an invalid URL), the response would be processed as JSON.

## Usage

1. Open the webpage containing this script.
2. The script attempts to fetch data from the invalid API endpoint.
3. When the fetch results in a `404` error, the user is redirected to the `404.html` page.

## Custom 404 Page

The `404.html` page displays the following:

- A message informing the user that a `404` error has occurred.
- An indication that the requested resource could not be found.

## Summary

This project provides an example of how to handle API errors gracefully by redirecting users to a custom 404 error page when a resource is not found. The implementation ensures that broken API calls or missing resources do not result in a poor user experience.
