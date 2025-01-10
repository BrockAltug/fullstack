# CS Factory vs Constructor Functions

## Concepts Covered

1. **Factory Functions**:

   - Factory functions are functions that return objects and allow the creation of multiple object instances without the use of the `new` keyword.
   - They encapsulate private state and behavior using closures.

2. **State Management**:

   - Factory functions can encapsulate state using locally scoped variables and return methods to interact with the state.

3. **Behavior Delegation**:
   - Common behaviors can be defined outside the factory function and shared among multiple instances to reduce memory usage.

---

## Code Overview

### Factory Function Implementation

```javascript
// Pass the state into our action function.
const getInformation = (state) => ({
  // Log the title and description
  information: () => console.log(state.title, state.description),
});

// Create a function.
const lesson = function () {
  // Store the locally scoped variables.
  const state = {
    title: "Module 17 - Computer Science",
    description: "CS for JS",
  };

  // Return an inner function named 'getInformation' passing the state as an argument.
  return { ...getInformation(state) };
};

// Create an instance of the lesson using the factory function
const csForJS = lesson();
csForJS.information();
```

### HTML File for Browser Console Testing

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Factory Functions</title>
  </head>
  <body>
    <p style="font-size: 50px;">Navigate to the Console in DevTools</p>
    <script src="./index.js"></script>
  </body>
</html>
```

---

## Key Points

1. **Encapsulation**:

   - Factory functions use closures to encapsulate private state and expose only necessary methods.

2. **Behavior Sharing**:

   - The `getInformation` function defines shared behavior for multiple object instances.

3. **Instance Creation**:
   - Each call to the factory function creates a new instance with its own encapsulated state.

---

## Usage

1. **Run the Code**:

   - Open the `index.html` file in your browser.
   - Navigate to the browser's DevTools Console.

2. **Expected Output**:

   - The console will log the title and description:
     ```
     Computer Science CS for JS
     ```

3. **Customization**:
   - Modify the `state` object in the `lesson` function to change the title and description.

---

## Summary

This example demonstrates the use of **Factory Functions** to encapsulate state and share behavior. It highlights the power of closures in JavaScript and provides a foundation for understanding design patterns that leverage function-based object creation.
