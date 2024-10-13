# CSS-Color

## HTML and CSS Linkage Guide

This project demonstrates how HTML elements are linked to CSS classes and IDs to style a webpage. The `index.html` file contains several sections, each of which is linked to specific classes and IDs defined in the `style.css` file.

## Files Overview

- **index.html**: The main HTML file that structures the content of the webpage.
- **style.css**: The CSS file that contains styles for the HTML elements.

## How HTML and CSS are Linked

### 1. Section 1

- **HTML**: `<section class="lesson" id="section-1">`
- **CSS**: This section is linked to:
  - `.lesson` class: Sets the width and height of the section.
  - `#section-1` ID: Applies specific background and text color styles.

### 2. Section 2

- **HTML**: `<section class="lesson section-blue">`
- **CSS**: This section is linked to:
  - `.lesson` class: Sets the width and height of the section.
  - `.section-blue` class: Applies specific background and text color styles.

### 3. Section 3

- **HTML**: `<section class="lesson section-blue">`
- **CSS**: This section is also linked to:
  - `.lesson` class: Sets the width and height of the section.
  - `.section-blue` class: Applies specific background and text color styles.

### 4. Section 4

- **HTML**: `<section>` inside a `<div class="container">`
- **CSS**: This section is inside a `div` that is linked to:
  - `.container` class: Applies background and text color styles to all content inside.

### 5. Section 5

- **HTML**: `<section>` inside a `<div class="container">`
- **CSS**: This section is also inside a `div` that is linked to:
  - `.container` class: Applies background and text color styles to all content inside.

### 6. Section 6

- **HTML**: `<section id="section-6">` inside a `<div class="container">`
- **CSS**: This section is linked to:
  - `#section-6` ID: Applies specific background and text color styles.
  - `.container` class: The section is also affected by the container's styling.

## Key Takeaways

- **Class Selectors (`.`)**: Used to apply the same style to multiple elements. In this project, `.lesson`, `.section-blue`, and `.container` are class selectors that style sections of the webpage.
- **ID Selectors (`#`)**: Used to apply a unique style to a single element. In this project, `#section-1` and `#section-6` are ID selectors that style specific sections.

## How to Use

1. Review the `index.html` file to see how each section is structured and linked to the CSS.
2. Open the `style.css` file to understand how each class and ID applies specific styles.
3. Open the `index.html` file in a web browser to see how the styles are rendered visually.

## Conclusion

Understanding how to link HTML and CSS is fundamental to creating styled web pages. This project provides a basic example of how classes and IDs are used to apply styles to different sections of a webpage.
