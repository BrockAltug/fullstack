# CS Queues

## Concepts Covered

1. **Queue Data Structure**:

   - A queue is a linear data structure that follows the First In, First Out (FIFO) principle.

2. **Core Operations**:

   - **Enqueue (addToQueue)**: Adds an element to the back of the queue.
   - **Dequeue (removeFromQueue)**: Removes an element from the front of the queue.

3. **Class-Based Implementation**:

   - Encapsulates queue behavior in a class with methods for adding and removing elements.

4. **State Management**:

   - Maintains the queue's contents using an internal array.

5. **Testing**:
   - Ensures correctness of implementation through unit tests.

---

## Code Overview

### Queue Class

```javascript
class Queue {
  // default value allows queue to instantiate without an argument
  constructor(container = []) {
    this.container = container;
  }

  // adds an element to the back of the queue
  addToQueue(el) {
    return this.container.push(el);
  }

  // removes an element from the front of the queue
  removeFromQueue() {
    return this.container.shift();
  }
}

module.exports = Queue;
```

---

### Test Suite

```javascript
const Queue = require("../index");

describe("Queue class", () => {
  const inputArray = [1, 2, 3, 4];
  const queue = new Queue(inputArray);
  const newItem = 5;

  test("Can instantiate a new queue", () => {
    const queue = new Queue();
    expect(queue).toEqual({ container: [] });
  });

  test("Can instantiate a new queue with an array", () => {
    expect(queue).toEqual({ container: [1, 2, 3, 4] });
  });

  test("Can add a new item at the end of the queue", () => {
    queue.addToQueue(newItem);
    expect(queue).toEqual({ container: [1, 2, 3, 4, 5] });
  });

  test("Can remove an item from the beginning of the queue", () => {
    queue.removeFromQueue();
    expect(queue).toEqual({ container: [2, 3, 4, 5] });
  });
});
```

---

## Key Points

1. **Queue Functionality**:

   - The `Queue` class implements enqueue and dequeue operations to manipulate queue elements.

2. **Encapsulation**:

   - The queue's state is maintained privately within the `container` property.

3. **Testing**:

   - Includes test cases to validate:
     - Initialization of an empty queue.
     - Initialization with predefined elements.
     - Adding elements to the queue.
     - Removing elements from the queue.

4. **Code Readability**:
   - Each method and test case is documented to enhance understanding.

---

## Usage

1. **Queue Operations**:

   - Instantiate a queue using `new Queue()`.
   - Use `addToQueue` to add elements.
   - Use `removeFromQueue` to remove elements.

2. **Testing**:
   - Run tests using a JavaScript testing framework like Jest to ensure the queue behaves as expected.

---

## Running the Project

### Installation

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run Tests**:

   ```bash
   npm test
   ```

### Expected Behavior

1. **Initialization**:

   - A queue can be initialized empty or with predefined elements.

2. **Core Operations**:

   - Adding elements places them at the end of the queue.
   - Removing elements retrieves them from the front of the queue.

3. **Test Cases**:
   - The test suite validates the correctness of the queue implementation.
