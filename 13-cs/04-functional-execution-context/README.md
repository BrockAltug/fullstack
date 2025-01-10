# CS Functional Execution Context

## Concepts Covered

This project demonstrates key aspects of the **Functional Execution Context** in JavaScript.

### 1. Execution Context and Scope

- When the `avg` function is called, a **functional execution context** is created.
- Inside the `avg` function, the `sum` function creates another **functional execution context** when invoked.
- Variables like `total` are stored within the **local execution context** of the `sum` function, making them inaccessible outside of it.

### 2. Nested Functions

- The `sum` function is defined inside the `avg` function, providing **closure** over the `array` variable.
- This allows `sum` to access the `array` variable, which is defined in the **parent execution context** of `avg`.

### 3. Array Manipulation

- The program computes the **average** of an array by summing its elements in the `sum` function and dividing the result by the length of the array in the `avg` function.

---

## File Descriptions

### 1. `index.js`

The `index.js` file contains the `avg` function:

```javascript
function avg(array) {
  function sum() {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  return sum() / array.length;
}

module.exports = avg;
```

#### Key Features:

- **Nested Function**: `sum` is a function within `avg`, which allows modular logic for calculating the total of the array.
- **Scoped Variables**: The `total` variable is local to the `sum` function.
- **Modular Export**: The `avg` function is exported for use in other files.

---

### 2. `index.test.js`

The `index.test.js` file tests the functionality of the `avg` function:

```javascript
const avg = require("../index");

describe("The average function", () => {
  test("can find the average of the array", () => {
    expect(avg([10, 20, 30, 40, 50, 30])).toBe(30);
  });

  test("can find the average of the negative numbers in an array", () => {
    expect(avg([-100, -200, -300])).toBe(-200);
  });

  test("will return NaN for an empty array", () => {
    expect(avg([])).toBe(NaN);
  });
});
```

#### Key Features:

- **Unit Tests**: Uses Jest to test different scenarios, including:
  - Arrays with positive numbers.
  - Arrays with negative numbers.
  - Empty arrays (to validate edge cases).
- **Validation**: Ensures correct results and proper handling of edge cases.

---

## Testing

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the tests:
   ```bash
   npm test
   ```

### Expected Output

- The test suite verifies that the `avg` function behaves as expected for all scenarios.

---

## Key Takeaways

- Functional execution contexts are created when a function is invoked, managing variable storage and scope for the duration of the function call.
- Nested functions can access variables from their parent execution context, but not vice versa.
- Proper testing ensures the reliability of functions across different scenarios, including edge cases.

---
