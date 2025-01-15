# Event-Bubbling

# Carousel Navigation with JavaScript

## Overview

A simple image carousel using JavaScript. The carousel allows users to navigate through a series of images using "Next" and "Previous" buttons, and also click on the carousel to be redirected to the current image's URL.

## Concepts Covered

- DOM Manipulation with `querySelector`
- Event Handling in JavaScript
- Carousel Navigation Logic
- Using `stopPropagation` to Control Event Flow

## Explanation

### 1. **Selecting Elements with `querySelector`**

- **`const carousel = document.querySelector('.carouselbox');`**
  - Selects the element with the class `.carouselbox` from the document.
- **`const next = carousel.querySelector('.next');`**
  - Selects the element with the class `.next` that is a child of `.carouselbox`.
- **`const prev = carousel.querySelector('.prev');`**
  - Selects the element with the class `.prev` that is a child of `.carouselbox`.

### 2. **Navigating Through Images**

- **`navigate(direction)` function**
  - Updates the `index` based on the direction parameter (1 for next, -1 for previous).
  - Ensures the index wraps around if it goes out of bounds (negative or beyond the last image).
  - Updates the background image of the carousel to reflect the current image.

### 3. **Event Listeners**

- **Carousel Click Event**

  - **`carousel.addEventListener('click', function () {...});`**
  - Redirects the user to the current image's URL when the carousel is clicked.

- **Next Button Click Event**

  - **`next.addEventListener('click', function (event) {...});`**
  - Moves to the next image in the carousel.
  - **`event.stopPropagation();`** is used to prevent the click event from bubbling up to the carousel's click event listener, avoiding unintended redirections.

- **Previous Button Click Event**
  - **`prev.addEventListener('click', function (event) {...});`**
  - Moves to the previous image in the carousel.
  - **`event.stopPropagation();`** is used similarly to prevent unintended behavior by stopping the event propagation.
