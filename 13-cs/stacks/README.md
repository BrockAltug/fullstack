# Stack Class Implementation

## Basic Constructor Function

The `Stack` class is implemented to model the behavior of a stack data structure using a JavaScript constructor. It initializes a container as an empty array (or with a provided array) and includes methods for adding and removing elements.

## Concepts Covered

- JavaScript Constructor Functions
- Encapsulation of Data
- Methods in Constructor Functions
- Creating and Using Objects in JavaScript
- Stack Operations (LIFO: Last In, First Out)

## Learning Objectives

- Understand how to create a constructor function in JavaScript.
- Learn how to define methods within constructor functions.
- Practice implementing basic stack operations using object-oriented principles.
- Use error handling for edge cases, such as an empty stack.

## Features

- **Initialization**: The `Stack` constructor initializes a stack with an empty array or a provided array of elements.
- **`addToStack(element)`**: Adds an element to the top of the stack.
- **`removeFromStack()`**: Removes and returns the element at the top of the stack. Throws an error if the stack is empty.
- Includes proper error handling for removing elements from an empty stack.
- Example usage provided to demonstrate the class in action.

### Example Usage

```javascript
const Stack = require("./Stack");

// Create a new stack instance
const myStack = new Stack([1, 2, 3]);

// Add elements to the stack
myStack.addToStack(4);
console.log(myStack.container); // Output: [1, 2, 3, 4]

// Remove elements from the stack
const removedElement = myStack.removeFromStack();
console.log(removedElement); // Output: 4
console.log(myStack.container); // Output: [1, 2, 3]
```

## Summary

This project demonstrates how to create a stack using a JavaScript constructor function. The `Stack` class encapsulates the stack's internal data and provides two core operations:

- Adding elements to the stack (`addToStack`)
- Removing elements from the stack (`removeFromStack`).

This implementation illustrates how object-oriented programming principles can be used to create efficient, reusable, and encapsulated data structures.
