# GitHub Issues Fetcher Script

## Overview

This project fetches a list of open issues from the `nodejs/node` repository on GitHub using the GitHub API. The script retrieves up to 10 issues at a time, sorted by their creation date, and logs the results to the console.

## Code Description

### fetch() Function

This function fetches data from the GitHub API, specifically from the issues endpoint of the `nodejs/node` repository. The following parameters are used to customize the request:

- **per_page**: Limits the number of results displayed per page. In this case, it is set to 10.
- **state**: Specifies the state of the issues to retrieve. This script fetches issues that are currently `open`.
- **sort**: Determines the criteria by which the issues are sorted. Here, it is set to sort the issues by their creation date (`created`).
- **direction**: Controls the order of the sorted issues. It is set to `desc`, meaning the most recently created issues will appear first.

### Parameter Explanation:

- **per_page**: Limits the number of results per page. Here, it’s set to 10.
- **state**: Specifies the state of the issues to fetch. The options are `open`, `closed`, or `all`. This script fetches `open` issues.
- **sort**: Specifies the criteria to sort the issues. In this script, it's set to `created`, meaning the issues are sorted by their creation date.
- **direction**: Determines the direction of the sort. `desc` displays the newest issues first.

## How It Works

1. The script sends a `GET` request to the GitHub API with the specified parameters.
2. The API returns a JSON response containing a list of issues from the `nodejs/node` repository.
3. The script converts the response into a JavaScript object and logs the data to the console for inspection.

## Usage

1. Open your browser’s console.
2. Run this script to fetch the latest 10 open issues from the `nodejs/node` repository.
3. View the fetched issues in the console.

## Summary

This script demonstrates how to use the `fetch` API to interact with the GitHub API, retrieve open issues, and process the results. It serves as a foundation for further enhancement, such as displaying the issues dynamically in a web application.
