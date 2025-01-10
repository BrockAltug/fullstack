# CS Event Delegation Handling

## Concepts Covered

1. **Event Delegation**:

   - Instead of attaching an event listener to every element, event delegation allows you to attach a single event listener to a parent element.

2. **Lexical Environment**:

   - Variables like `count` inside a function create a lexical scope that persists through closures.

3. **Closure**:

   - The `clickHandler` function demonstrates closure by maintaining a private `count` variable for each button.

4. **DOM Manipulation**:
   - Shows how to manipulate DOM elements efficiently by using JavaScript.

---

## Code Overview

### Script.js

```javascript
// Select the HTML element that we want to attach our event listener to.
const buttons = document.getElementsByTagName("button");

const clickHandler = function () {
  // Create a 'count' variable which will be a part of the clickHandler function's lexical environment.
  let count = 0;

  // Return an inner function which creates closure.
  return function () {
    // Increase the locally scoped 'count' variable by one.
    count++;
    // Use a template literal to display the 'count' variable onto the button element.
    this.textContent = `Clicks: ${count}`;
  };
};

// Instead of attaching the event listener to the container holding our buttons, we loop through our buttons and attach an event listener to each one.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clickHandler());
}
```

---

## Key Points

1. **Event Listeners**:

   - Instead of attaching listeners globally, the script attaches them individually to buttons.

2. **Closure in Action**:

   - The `clickHandler` function retains access to its `count` variable, creating a unique state for each button.

3. **Efficiency**:

   - Avoids reading and writing directly to the DOM for counting clicks, improving performance.

4. **Encapsulation**:
   - The `count` variable remains private to each button, demonstrating encapsulation using closures.

---

## Usage Instructions

### Prerequisites

- A basic understanding of JavaScript closures, lexical scoping, and DOM manipulation.

### How to Run

1. **Set Up the Project**:

   - Clone or download the repository.
   - Open the `index.html` file in a web browser.

2. **Interact with Buttons**:
   - Each button starts with "Clicks: 0".
   - Click a button to see its click count increment independently.

---

## Summary

This project demonstrates how to use closures effectively for handling individual event states. It highlights best practices for event delegation and showcases how closures can encapsulate functionality, ensuring efficient and maintainable code.
