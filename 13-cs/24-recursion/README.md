# CS Recursion

Refer to the documentation:

[Math Is Fun: The Fibonacci Sequence](https://www.mathsisfun.com/numbers/Fibonacci-sequence.html)

## Concepts Covered

1. **Recursion**:

   - A function that calls itself to solve a smaller instance of the same problem.

2. **Fibonacci Sequence**:

   - A series of numbers where each number is the sum of the two preceding ones, typically starting with 0 and 1.

3. **Base Case**:

   - A condition to terminate the recursive calls, preventing infinite recursion.

4. **Recursive Case**:
   - The part of the function that includes the self-referential call with reduced arguments.

---

## Code Overview

### Fibonacci Function

```javascript
// The `position` parameter is what position in the Fibonacci sequence we want to find the value of
const fibonacci = (position) => {
  // Since this implementation of the algorithm excludes searching for negative positions, we check if the value of `position` is less than two.
  // If the value of `position` is 1, return 1 because it's the value at that position of the sequence.
  // If the value of `position` is 0, return 0 because it's the value at that position of the sequence.
  if (position < 2) {
    return position;
  }

  // The current value at this position is evaluated by adding the sum of the values at the two preceding positions of the sequence
  // By calling itself, we form a loop.
  // With each subsequent call smaller arguments are used until the base condition is reached
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// This will return the value of the Fibonacci sequence at the ninth position
console.log(fibonacci(9));
```

---

## Key Points

1. **Base Case**:

   - Prevents infinite recursion by checking if `position < 2`.
   - Directly returns the value for positions 0 and 1 in the Fibonacci sequence.

2. **Recursive Case**:

   - Adds the values of `fibonacci(position - 1)` and `fibonacci(position - 2)` to compute the current position's value.

3. **Time Complexity**:

   - Exponential time complexity \(O(2^n)\) due to redundant calculations in the naive implementation.

4. **Example**:
   - Input: `fibonacci(9)`
   - Output: `34` (The value of the Fibonacci sequence at position 9).

---

## Usage

1. **Run the Script**:

   - To calculate a Fibonacci number at a specific position, run:
     ```bash
     node index.js
     ```
   - Example:
     ```bash
     $ node index.js
     34
     ```

2. **Understanding Recursive Calls**:
   - Recursive calls reduce the `position` argument with each iteration until the base case is reached.

---

## Summary

This project demonstrates recursion with a classic example of the Fibonacci sequence. The function calculates the value at a given position using both a base case and a recursive case, offering an intuitive approach to understanding recursive function behavior.
