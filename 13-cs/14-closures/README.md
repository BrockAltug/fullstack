# CS Closures

## Concepts Covered

1. **Closures**:

   - A closure is a combination of a function bundled together with references to its surrounding state (the lexical environment).
   - Closures allow inner functions to access variables from the outer enclosing function, even after the outer function has finished executing.

2. **Encapsulation**:

   - Closures are often used to encapsulate private variables and create functions with private states.

3. **Practical Use**:
   - Used to maintain state, such as counters or configuration settings, across function calls without polluting the global scope.

---

## Code Overview

### Counter Function

```javascript
function counter() {
  // Create a 'count' variable inside of the outer function.
  let count = 0;

  // Return an inner function creating a closure.
  return {
    increment: function () {
      // Increment the outer function's 'count' variable by one.
      return ++count;
    },
  };
}

module.exports = counter;
```

### Test Suite

```javascript
const counter = require("../index");

test("counter is a defined function", () => {
  expect(typeof counter).toEqual("function");
});

test("counter is returning as an object", () => {
  const studentCounter = counter();
  expect(typeof studentCounter).toEqual("object");
});

test("count should equal 1", () => {
  const studentCounter = counter();
  expect(studentCounter.increment()).toEqual(1);
});

test("count should equal 2", () => {
  const studentCounter = counter();
  studentCounter.increment();
  expect(studentCounter.increment()).toEqual(2);
});

test("count should equal 5", () => {
  const studentCounter = counter();
  studentCounter.increment();
  studentCounter.increment();
  studentCounter.increment();
  studentCounter.increment();
  expect(studentCounter.increment()).toEqual(5);
});
```

---

## Key Points

1. **State Preservation**:

   - The inner function retains access to variables in the outer function, even after the outer function has returned.

2. **Encapsulation**:

   - The `count` variable is private to the `counter` function and can only be modified using the `increment` method.

3. **Reusability**:

   - Each invocation of `counter()` creates a new closure with its own `count` variable, allowing independent counters to be created.

4. **Testing**:
   - Tests ensure:
     - The `counter` function returns an object.
     - The `increment` method properly updates and returns the `count` value.

---

## Usage

1. **Instantiating a Counter**:

   - Call the `counter` function to create a new counter object:
     ```javascript
     const studentCounter = counter();
     ```

2. **Incrementing the Counter**:

   - Use the `increment` method to update and retrieve the `count`:
     ```javascript
     console.log(studentCounter.increment()); // Output: 1
     console.log(studentCounter.increment()); // Output: 2
     ```

3. **Maintaining Independent States**:

   - Each call to `counter` creates a new, independent closure:

     ```javascript
     const counterA = counter();
     const counterB = counter();

     console.log(counterA.increment()); // Output: 1
     console.log(counterB.increment()); // Output: 1
     ```

---

## How to Run

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run Tests**:

   ```bash
   npm test
   ```

3. **Experiment**:
   - Modify and run the code to explore the behavior of closures in JavaScript.

---

## Summary

This project demonstrates the concept of closures in JavaScript by implementing a simple counter. Closures allow inner functions to retain access to variables in their lexical scope, enabling encapsulation and state management. Through practical examples and testing, this project highlights the power and versatility of closures.
