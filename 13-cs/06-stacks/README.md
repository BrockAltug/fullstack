# CS Stacks: Implementation and Testing

## Overview

This project demonstrates the implementation and testing of a Stack data structure in JavaScript. A stack is a linear data structure that follows the **Last In, First Out (LIFO)** principle. This project includes:

1. A `Stack` class that provides methods to:
   - Add elements to the stack (`addToStack`).
   - Remove elements from the stack (`removeFromStack`).
2. Unit tests for the `Stack` class to ensure its functionality.

---

## Project Structure

### `index.js`

This file contains the implementation of the `Stack` class, including methods for adding and removing elements.

**Key Concepts:**

- **Constructor**: Initializes the stack with an optional container array.
- **Methods**:
  - `addToStack(el)`: Adds an element to the top of the stack.
  - `removeFromStack()`: Removes the top element from the stack.

### `index.test.js`

This file contains unit tests for the `Stack` class. The tests ensure that the stack operates as expected in various scenarios.

---

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd cs-stacks
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### Running the Code

To use the `Stack` class, you can import it and create instances:

```javascript
const Stack = require("./index");

const stack = new Stack();
stack.addToStack(10);
stack.addToStack(20);
console.log(stack.removeFromStack()); // Outputs: 20
```

### Running Tests

To execute the tests, use:

```bash
npm test
```

---

## Testing Details

### Unit Tests

The `index.test.js` file includes the following tests:

1. Instantiate a stack with an empty array.
2. Instantiate a stack with an initial array.
3. Add elements to the stack.
4. Remove elements from the stack.

### Example Test

```javascript
test("can add a new element to the top of the stack", () => {
  stack.addToStack(newItem);
  expect(stack).toEqual({ container: [1, 2, 3, 4, 5] });
});
```

---

## Key Concepts

1. **LIFO Principle**:
   - The last element added to the stack is the first one removed.
2. **Push and Pop**:
   - `push()`: Adds an element to the stack.
   - `pop()`: Removes the top element from the stack.

---

## Conclusion

This project serves as a practical implementation of the Stack data structure, complete with testing to validate its functionality. It demonstrates the principles of encapsulation and modularity in JavaScript.
