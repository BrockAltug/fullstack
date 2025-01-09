# CS Stacks

## Overview

This project demonstrates the implementation of a **Stack Data Structure** using JavaScript. It covers core stack operations, class-based encapsulation, and unit testing for correctness.

---

## Key Features

1. **Stack Data Structure**:

   - A stack is a linear data structure that follows the **Last In, First Out (LIFO)** principle.

2. **Core Operations**:

   - **Push**: Adds an element to the top of the stack.
   - **Pop**: Removes an element from the top of the stack.

3. **Class-Based Implementation**:

   - Encapsulates stack behavior in a class with methods for adding and removing elements.

4. **State Management**:

   - Maintains the stack's contents using an internal array.

5. **Unit Testing**:

   - Includes comprehensive test cases to validate the implementation of stack operations.

---

## Concepts Covered

1. **Encapsulation**:

   - The stack's state is maintained privately within the `container` property of the `Stack` class.

2. **Methodical Operations**:

   - Methods `addToStack` and `removeFromStack` abstract stack operations for reusability.

3. **Error Handling**:

   - Assumes `pop` on an empty stack returns `undefined` without errors.

4. **Testing with Jest**:

   - Verifies:
     - Initialization of empty and pre-filled stacks.
     - Addition and removal of elements.

---

## Setup Instructions

### **Installation**

1. **Install Dependencies**:
   ```bash
   npm install
   ```

### **Run Tests**

To ensure the stack implementation is working as intended:

```bash
npm test
```

---

## Code Overview

### **Stack Class Implementation**

```javascript
class Stack {
  // Initializes the stack with an optional array
  constructor(container = []) {
    this.container = container;
  }

  // Adds an element to the top of the stack
  addToStack(el) {
    return this.container.push(el);
  }

  // Removes an element from the top of the stack
  removeFromStack() {
    return this.container.pop();
  }
}

module.exports = Stack;
```

---

## Expected Behavior

### **Stack Operations**

1. **Initialization**:

   - Can initialize with or without an array of elements.
   - Example: `new Stack([1, 2, 3])` initializes a stack with `[1, 2, 3]`.

2. **Push**:

   - Adds a new element to the top of the stack.
   - Example:
     ```javascript
     stack.addToStack(5); // Stack becomes [1, 2, 3, 5]
     ```

3. **Pop**:
   - Removes the top element from the stack.
   - Example:
     ```javascript
     stack.removeFromStack(); // Removes 5, leaving [1, 2, 3]
     ```

---

## Testing

### **Test Suite**

The project includes unit tests to validate the stack's functionality. Example test cases:

1. **Initialization**:

   - Ensures the stack initializes correctly with or without elements.

2. **Push Operation**:

   - Tests that elements are added to the stack correctly.

3. **Pop Operation**:
   - Verifies that elements are removed from the stack and that the state updates as expected.

---

## Example Usage

### **Code Example**

```javascript
const Stack = require("./Stack");

// Initialize a new stack
const stack = new Stack([1, 2, 3]);

// Add an element to the stack
stack.addToStack(4);
console.log(stack.container); // Output: [1, 2, 3, 4]

// Remove an element from the stack
const removed = stack.removeFromStack();
console.log(removed); // Output: 4
console.log(stack.container); // Output: [1, 2, 3]
```

### **Running Tests**

Run the following command:

```bash
npm test
```

Expected Output:

```
PASS  index.test.js
✓ can instantiate a new stack with an empty array (5ms)
✓ can instantiate a new stack with an array (3ms)
✓ can add a new element to the top of the stack (4ms)
✓ can remove items from the top of the stack (2ms)
```

---

## Summary

This project demonstrates the implementation and testing of a stack data structure using JavaScript. It serves as an educational example of how to encapsulate functionality, manage state, and validate behavior through unit testing.

---
