# CS Binary Search

## Concepts Covered

1. **Binary Search**:

   - A search algorithm that finds the position of a target element within a sorted array.
   - Works by repeatedly dividing the search interval in half.

2. **Algorithm**:

   - Begin with the entire array as the search interval.
   - Compare the target element with the middle element of the array.
   - If the target matches the middle element, return the index.
   - If the target is smaller than the middle element, narrow the search interval to the left half.
   - If the target is larger, narrow the search interval to the right half.
   - Repeat until the target is found or the interval is empty.

3. **Time Complexity**:
   - **Best Case**: \(O(1)\) when the target is found at the middle.
   - **Worst Case**: \(O(\log n)\) due to halving the array with each step.

---

## Code Overview

### Binary Search Implementation

```javascript
// The array must be sorted for binary search to work.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(array, element) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === element) {
      // Return the mid value, representing the index of the found element.
      return mid;
    } else if (array[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  // Return -1 if the element is not found.
  return -1;
}

console.log(binarySearch(arr, 7));
```

---

## Key Points

1. **Sorted Array Requirement**:

   - Binary search only works on sorted arrays.
   - If the array is unsorted, sort it first using an efficient sorting algorithm.

2. **Efficiency**:

   - Efficient for large datasets due to logarithmic time complexity.
   - Performs fewer comparisons than linear search.

3. **Edge Cases**:
   - Handle cases where the array is empty or the element is not present.

---

## Tests

### Test Suite

```javascript
const binarySearch = require("../index");

test("binarySearch is a defined function", () => {
  expect(typeof binarySearch).toEqual("function");
});

test("binarySearch should return the index of the given element", () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(binarySearch(testArray, 7)).toEqual(6);
});

test("binarySearch should return -1 because 5643 is not in the array", () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(binarySearch(testArray, 5643)).toEqual(-1);
});

test("binarySearch should return the index of the given element", () => {
  let testArray = [23, 67, 98, 102, 456];
  expect(binarySearch(testArray, 102)).toEqual(3);
});
```

---

## How to Run

1. **Run the Code**:

   - Use Node.js to execute the `index.js` file.

   ```bash
   node index.js
   ```

2. **Run Tests**:
   - Use a testing framework like Jest to verify the functionality.
   ```bash
   npm test
   ```

---

## Summary

Binary search is a powerful and efficient algorithm for searching sorted arrays. This implementation demonstrates its functionality and efficiency, with accompanying tests to validate its correctness.
