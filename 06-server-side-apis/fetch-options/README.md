# GitHub Issues Fetcher with Cache Reload

## Concepts Covered

- Fetching data from an external API (GitHub Issues API).
- Understanding and using the `cache` option in the `fetch` API to control caching behavior.
- Handling JSON responses and logging data to the console.

## Learning Objectives

- Learn how to use the `fetch` API with the `cache` option set to `reload`, ensuring the browser always fetches the latest version of the resource.
- Understand how the `reload` cache option works by fetching the resource from the remote server and updating the cache.
- Gain experience in processing and logging JSON responses returned by the GitHub API.

## Features

1. **Fetch GitHub Issues:**
   - The script fetches the latest 5 issues from the `nodejs/node` repository using the GitHub API.
2. **Cache Control with `reload`:**
   - The `cache: 'reload'` option forces the browser to bypass the cache and retrieve the resource from the server, ensuring the latest data is fetched.
3. **Console Logging of Issues:**
   - The issues fetched from the GitHub API are logged to the browser’s console for inspection.

## Summary

This project demonstrates how to use the `fetch` API to retrieve the latest issues from the GitHub API while controlling the browser's cache behavior. By using the `cache: 'reload'` option, the browser fetches the resource directly from the server, ensuring that the latest version of the data is retrieved and the cache is updated. The resulting issues are logged to the console for further inspection or use.
