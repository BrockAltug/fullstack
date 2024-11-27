# Higher-Order Functions: Grade Average Calculator

This project showcases how higher-order functions are utilized to calculate the average of grades using JavaScript's `.reduce()` method. The focus is on reusability and clean code.

## Features

- Implements a reusable `findAverage` function.
- Demonstrates the use of `.reduce()` to simplify array processing.

## Code Example

```javascript
const grades = [56, 78, 99, 85];

function findAverage(accumulator, currentValue, index, array) {
  accumulator += currentValue;
  if (index === array.length - 1) {
    return accumulator / array.length;
  }
  return accumulator;
}

let gradeAverage = grades.reduce(findAverage, 0);

console.log(gradeAverage); // Outputs: 79.5
```

## Key Concepts

- **Higher-Order Functions**: Using `.reduce()` to process arrays.
- **Reusable Callback**: The `findAverage` function is designed for flexibility and reusability.

## Expected Output

For the grades `[56, 78, 99, 85]`, the output is:

```
79.5
```
