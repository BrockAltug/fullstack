# Reverse APIs with GitHub Repositories Fetcher for Netflix Organization

## Concepts Covered

- Reverse APIs: Sending requests to external servers and receiving data.
- Making API requests using multiple methods: `$.ajax()`, `fetch()`, and `XMLHttpRequest`.
- Parsing and logging data from an API response.

## Learning Objectives

- Understand how reverse APIs work by sending requests to an external server (GitHub API) and receiving data in response.
- Learn how to send API requests using three different methods: `$.ajax()`, `fetch()`, and `XMLHttpRequest`.
- Learn how to handle and parse JSON responses when using reverse APIs.

## What is a Reverse API?

- A **reverse API** allows a client (like a web browser or app) to send a request to a third-party server and receive data in return.
- In this case, the reverse API used is the GitHub API, where requests are made to GitHub’s servers to fetch data about repositories.

## Features

1. **Sending Reverse API Requests to GitHub:**

   - The script sends requests to the GitHub API to fetch a list of repositories for the `Netflix` organization.
   - This is an example of how reverse APIs allow the client to retrieve data from an external source (in this case, GitHub’s servers).

2. **AJAX Request with jQuery:**
   - Uses the jQuery `$.ajax()` method to send a request to the GitHub API and automatically parses the JSON response.
3. **Fetch API:**

   - Uses the `fetch()` method to send the same request to the GitHub API, but requires manual parsing using the `.json()` method.

4. **XMLHttpRequest:**
   - Demonstrates the use of the older `XMLHttpRequest` object for making requests to the API. The response is returned as a string and must be manually parsed with `JSON.parse()`.

## Reverse API and Parsing Details

- **$.ajax()**: Sends the request and automatically parses the JSON data, making it easier for developers to access the response from the external GitHub API.
- **fetch()**: Sends the request and requires the use of `.json()` to parse the response body. This method gives developers more control over the response handling.

- **XMLHttpRequest**: Sends the request using the legacy `XMLHttpRequest` object. The response comes back as a string and must be manually parsed using `JSON.parse()` to convert it into a usable JavaScript object or array.

## How Reverse APIs Work

1. **Client Request**: The client (your browser) sends a request to the external server (in this case, the GitHub API) via an API endpoint.
2. **Server Response**: The external server processes the request and responds with data in the specified format (JSON).
3. **Data Parsing**: The client (your browser) receives the response. Depending on the method used, the response may need to be parsed before it can be displayed or logged.

## Usage of Reverse API in this Project

1. **AJAX Request (`$.ajax()`):**

   - Sends a request to the GitHub API and logs the parsed JSON data to the console.

2. **Fetch API:**

   - Sends a request using the `fetch()` method and manually parses the response using `.json()` before logging the data.

3. **XMLHttpRequest:**
   - Sends the request using the older `XMLHttpRequest` object. The response is returned as a string and must be manually parsed before use.

## Example API Endpoint

- **Request URL**: `https://api.github.com/orgs/Netflix/repos`
  - This endpoint returns a list of repositories for the Netflix organization on GitHub.
  - The request is sent using a reverse API approach, where the browser (client) sends the request to GitHub’s servers and receives a response.

## Summary

This project showcases how to work with reverse APIs by sending requests to GitHub’s API to fetch repository data for the Netflix organization. Three different methods are used to demonstrate how reverse API requests are made: `$.ajax()`, `fetch()`, and `XMLHttpRequest`. Each method illustrates how to handle and parse responses from external servers, emphasizing the concept of reverse APIs as a way to interact with external data sources.
