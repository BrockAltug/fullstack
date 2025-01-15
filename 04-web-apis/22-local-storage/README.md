# Local-Storage

## Overview

How to create a basic user registration form using JavaScript. The form captures a user's email and password, validates the inputs, stores the data in `localStorage`, and displays the last registered user on the page. This project is ideal for learning about DOM manipulation, event handling, and using `localStorage` in JavaScript.

## Key Features

- **Input Validation:** Ensures that both the email and password fields are not left blank before submitting the form.
- **Local Storage:** Stores the user's email and password in the browser's `localStorage`.
- **Rendering Data:** Retrieves and displays the last registered user's details from `localStorage` when the page loads.

## JavaScript Functionality

### 1. **Element Selection**

- **`const emailInput = document.querySelector('#email');`**
  - Selects the email input field by its ID.
- **`const passwordInput = document.querySelector('#password');`**
  - Selects the password input field by its ID.
- **`const signUpButton = document.querySelector('#sign-up');`**
  - Selects the sign-up button by its ID.
- **`const msgDiv = document.querySelector('#msg');`**
  - Selects the message display div by its ID.
- **`const userEmailSpan = document.querySelector('#user-email');`**
  - Selects the span element for displaying the user's email.
- **`const userPasswordSpan = document.querySelector('#user-password');`**
  - Selects the span element for displaying the user's password.

### 2. **Input Validation and Message Display**

- **`displayMessage(type, message)` function:**
  - Displays a message in the `msgDiv` with a specific type (`'error'` or `'success'`).
  - **Learning Point:** Understand how to dynamically update the DOM to provide user feedback.

### 3. **Saving and Retrieving Data**

- **`renderLastRegistered()` function:**

  - Retrieves the last registered email and password from `localStorage`.
  - Updates the page to show the stored email and password.
  - **Learning Point:** Learn how to persist data in the browser using `localStorage` and how to retrieve and render this data when needed.

- **Event Listener on `signUpButton`:**
  - Prevents the default form submission behavior using `event.preventDefault()`.
  - Validates the input fields and, if valid, stores the data in `localStorage`.
  - Calls `renderLastRegistered()` to update the displayed user information.
  - **Learning Point:** Practice adding event listeners, performing input validation, and managing form data.

### 4. **Storing and Displaying the Last Registered User**

- **Storing Data:**
  - The user's email and password are saved using `localStorage.setItem('email', email)` and `localStorage.setItem('password', password)`.
- **Displaying Data:**
  - The stored email and password are retrieved with `localStorage.getItem('email')` and `localStorage.getItem('password')` and displayed on the page.

## Learning Outcomes

- Gain experience with DOM manipulation using `querySelector`.
- Learn to handle user input and validate form fields.
- Understand how to use `localStorage` to persist data in the browser.
- Practice providing dynamic user feedback based on form submissions.
