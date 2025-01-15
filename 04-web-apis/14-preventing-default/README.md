# Preventing-Default

# Tip Calculator Application

## Concepts Covered

- JavaScript form handling with event listeners.
- Preventing default form submission behavior with `event.preventDefault()`.
- Calculating tips and updating the total amount dynamically.

## Learning Objectives

- Implement event listeners to handle form submissions.
- Use `event.preventDefault()` to control the behavior of a form submission.
- Calculate and display a tip amount based on user input.
- Dynamically update the total bill amount after including the tip.

## Features

- **Tip Calculation:** The application calculates the tip amount based on the total bill and the tip percentage entered by the user.
- **Total Update:** After calculating the tip, the application updates and displays the new total amount.
- **Form Handling:** The form submission is controlled using `event.preventDefault()` to prevent the default action and allow for custom calculations.

## Code Overview

- **Event Listeners:** The `submitEl.addEventListener('click', addTip);` handles the click event on the submit button.
- **Form Submission Control:** `event.preventDefault();` is used within the `addTip` function to prevent the default form submission behavior, allowing for custom processing.
- **Tip and Total Calculation:** The `calculateTip()` function computes the tip based on the provided percentage, and `calculateTotal()` updates the total amount to include the tip.

## Summary

Simple tip calculator that demonstrates how to handle form submissions with JavaScript. It includes features like preventing the default form behavior, calculating tips, and dynamically updating the total bill amount. This is a practical example of using JavaScript to enhance user interactions on a webpage.
