# Queue Class Implementation

## Basic Constructor Function

The `Queue` class is implemented to model the behavior of a queue data structure using a JavaScript constructor. It initializes a container as an empty array (or with a provided array) and includes methods for adding and removing elements.

## Concepts Covered

- JavaScript Constructor Functions
- Encapsulation of Data
- Methods in Constructor Functions
- Creating and Using Objects in JavaScript
- Queue Operations (FIFO: First In, First Out)

## Learning Objectives

- Understand how to create a constructor function in JavaScript.
- Learn how to define methods within constructor functions.
- Practice implementing basic queue operations using object-oriented principles.
- Use error handling for edge cases, such as an empty queue.

## Features

- **Initialization**: The `Queue` constructor initializes a queue with an empty array or a provided array of elements.
- **`addToQueue(element)`**: Adds an element to the end of the queue.
- **`removeFromQueue()`**: Removes and returns the element at the front of the queue. Throws an error if the queue is empty.
- Includes proper error handling for removing elements from an empty queue.
- Example usage provided to demonstrate the class in action.

### Example Usage

```javascript
const Queue = require("./Queue");

// Create a new queue instance
const myQueue = new Queue([1, 2, 3]);

// Add elements to the queue
myQueue.addToQueue(4);
console.log(myQueue.container); // Output: [1, 2, 3, 4]

// Remove elements from the queue
const removedElement = myQueue.removeFromQueue();
console.log(removedElement); // Output: 1
console.log(myQueue.container); // Output: [2, 3, 4]
```

## Summary

This project demonstrates how to create a queue using a JavaScript constructor function. The `Queue` class encapsulates the queue's internal data and provides two core operations:

- Adding elements to the queue (`addToQueue`)
- Removing elements from the queue (`removeFromQueue`).

This implementation illustrates how object-oriented programming principles can be used to create efficient, reusable, and encapsulated data structures.
