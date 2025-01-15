# DayJS-Format

## Day.js Date and Time Quiz

## Concepts Covered

- Using Day.js to manipulate and format dates and times.
- Displaying answers to multiple date and time questions in different formats.
- Calculating date differences and parsing Unix timestamps with Day.js.

## Learning Objectives

- Understand how to format dates and times using the Day.js `.format()` method.
- Learn how to retrieve the current time and Unix timestamp using Day.js.
- Calculate the difference between two dates using the Day.js `.diff()` method.
- Parse and format Unix timestamps into readable date and time formats.

## Features

- **Formatted Graduation Date**: The graduation date is displayed in the format `MMM D, YYYY` (e.g., `Jun 15, 2023`).
- **Day of the Week Calculation**: The day of the week for `1/1/2027` is displayed as the full name of the weekday (e.g., `Friday`).
- **Current Time Display**: The current time is displayed in the format `hh:mm:ss A` (12-hour clock with AM/PM).
- **Current Unix Timestamp**: The current Unix timestamp is displayed, which is the number of seconds since January 1, 1970.
- **Parsing Unix Timestamp**: A Unix timestamp (`1318781876`) is parsed and displayed in a readable format `MMM D, YYYY, hh:mm:ss A`.
- **Date Difference Calculation**: The difference in days between today and May 4, 2027, is calculated and displayed.

## How It Works

1. **Graduation Date**: The script uses Day.js to format a given graduation date (`2023-06-15`) as `MMM D, YYYY` and display it.
2. **Day of the Week**: The day of the week for `1/1/2027` is calculated and displayed using the `.format('dddd')` method.
3. **Current Time**: The current time is displayed using the `.format()` method in `hh:mm:ss A` format (12-hour clock).
4. **Unix Timestamp**: The current Unix timestamp is retrieved using the `.unix()` method.
5. **Parsing Unix Timestamp**: The Unix timestamp `1318781876` is parsed using `.unix()` and formatted as `MMM D, YYYY, hh:mm:ss A`.
6. **Date Difference**: The script calculates the difference in days between today’s date and `May 4, 2027` using the `.diff()` method.

## Summary

This project demonstrates how to use Day.js to manipulate dates and times, displaying them in different formats and calculating the difference between dates. The script dynamically answers questions about dates and times, using methods from the Day.js library to format the data and display it on the page. It covers a range of operations, including formatting dates, retrieving the current time and Unix timestamp, and calculating date differences.
