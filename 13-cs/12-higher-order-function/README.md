# CS Higher Order Function

## Concepts Covered

1. **Higher-Order Functions**:

   - A higher-order function is a function that can take another function as an argument or return a function as a result.

2. **`Array.prototype.reduce()`**:

   - The `reduce` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
   - It accepts a callback function with the following arguments:
     - **Accumulator**: The accumulated result from the previous iteration.
     - **Current Value**: The current element being processed.
     - **Index**: The index of the current element.
     - **Array**: The array `reduce` was called upon.

3. **Function Reusability**:
   - The `findAverage` function demonstrates reusability by abstracting logic and passing it to the `reduce` method.

---

## Code Overview

### Finding the Average of Grades

```javascript
const grades = [56, 78, 99, 85];

// We receive the accumulator, currentValue, index, and the array from the reduce method.
function findAverage(accumulator, currentValue, index, array) {
  // Check to see if we are at the end of the given array.
  if (index === array.length - 1) {
    // Once we have reached the end of the array we divide by how many elements are in the given array.
    return (accumulator + currentValue) / array.length;
  }

  // Add the current value to our total.
  return accumulator + currentValue;
}

// Pass the 'findAverage' function into the reduce method.
let gradeAverage = grades.reduce(findAverage);

// log the 'gradeAverage' variable to see the result.
console.log(gradeAverage);
```

---

## Key Points

1. **Array of Grades**:

   - The array `grades` contains numerical grades.

2. **Reducer Function**:

   - `findAverage` calculates the average by summing all elements and dividing by the number of elements once the end of the array is reached.

3. **`reduce()` Execution**:

   - `reduce()` iterates over each element of the array and applies the `findAverage` logic.

4. **Result**:
   - The `gradeAverage` variable holds the final computed average of the grades.

---

## Usage

1. **Calculate the Average**:

   - The code calculates the average of the elements in the `grades` array using the `reduce()` method.

2. **Reusability**:

   - The `findAverage` function can be reused for similar operations on other numerical arrays.

3. **Execution**:

   - Run the `index.js` file in a Node.js environment:
     ```bash
     node index.js
     ```

4. **Output**:
   - The average of the grades is logged to the console.

---

## Expected Behavior

- **Input**: `[56, 78, 99, 85]`
- **Output**: `79.5`

---

## Summary

This project showcases the power of higher-order functions and how to use the `reduce()` method effectively for numerical computations.
