# Bootstrap-Utilities

## Bootstrap Utilities for Centered Form

## Concepts Covered

- Using Bootstrap utility classes to center content both horizontally and vertically.
- Applying background colors and text colors using Bootstrap.
- Creating a responsive layout without writing custom CSS.

## Learning Objectives

- Understand how to utilize Bootstrap's utility classes for layout and styling.
- Learn to create a fully centered form on a page using flex properties.
- Gain familiarity with responsive design techniques in Bootstrap.

## Features

- The main content (form) is centered horizontally and vertically on the page using Bootstrap flex utilities.
- The background color of the page is set to dark.
- The form background is white, providing contrast against the dark page.
- The header text color is white, ensuring visibility on the dark background.

## Bootstrap Utility Classes Used

- **`vh-100`**: Sets the height of an element to 100% of the viewport height. In this context, it makes the outer `<div>` take the full height of the page.
- **`bg-dark`**: Applies a dark background color to the element. This is used to set the page's background to a dark color.

- **`d-flex`**: Applies the CSS display property `flex` to the element, making it a flex container. This enables the use of flexbox properties like alignment and justification.

- **`justify-content-center`**: Centers the flex items (content inside the flex container) horizontally within the container.

- **`align-items-center`**: Centers the flex items vertically within the container.

- **`w-100`**: Sets the width of an element to 100%. Here, it ensures the content inside the `<section>` takes the full width of its container.

- **`col-10`**: Sets the column width to span 10 out of 12 grid columns on extra small devices (default Bootstrap grid system).

- **`col-md-6`**: Sets the column width to span 6 out of 12 grid columns on medium devices (≥768px).

- **`col-lg-5`**: Sets the column width to span 5 out of 12 grid columns on large devices (≥992px).

- **`text-center`**: Centers the text horizontally within its container.

- **`text-white`**: Applies a white color to the text, making it visible against the dark background.

- **`bg-white`**: Applies a white background color to the element. This is used to set the form's background color to white.

- **`rounded`**: Adds rounded corners to the element, enhancing its visual appearance.

- **`p-4`**: Adds padding around the element (1.5rem by default in Bootstrap).

- **`my-4`**: Adds margin on the y-axis (top and bottom) of the element (1.5rem by default in Bootstrap).

- **`form-control`**: Applies consistent styling to form inputs, such as `input` and `select`, to ensure a unified appearance.

- **`form-check`**: Applies styling to checkboxes or radio buttons, ensuring they align properly with their labels.

- **`btn`**: A base class for styling buttons.

- **`btn-success`**: Adds a green background color to the button, indicating a successful or positive action.

- **`w-100` (for button)**: Ensures the button takes the full width of its container.

## Summary

This exercise demonstrates how to effectively use Bootstrap's utility classes to create a visually appealing and fully responsive layout. By leveraging built-in classes, developers can quickly style and align content without the need for custom CSS, improving productivity and consistency across projects.
