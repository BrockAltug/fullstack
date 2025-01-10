# CS Linear Search

## Concepts Covered

1. **Linear Search Algorithm**:

   - Linear search is a basic algorithm for finding an element in an array.
   - It traverses the array sequentially and compares each element with the target value.

2. **Use Cases**:

   - Used when the dataset is small or unsorted.
   - Provides a straightforward approach to search for single or multiple occurrences of an element.

3. **Function Variants**:

   - **`linearSearch`**:
     - Finds the first occurrence of an element in an array and returns its index.
     - Returns `-1` if the element is not found.
   - **`linearSearchMultipleElements`**:
     - Finds all occurrences of an element in an array and returns an array of indexes.
     - Returns `"Not found"` if no occurrences are found.

4. **Testing**:
   - Validates the correctness of the linear search functions through unit tests.

---

## Code Overview

### Linear Search Functions

#### `linearSearch`

```javascript
const linearSearch = (array, element) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }
  return -1;
};
```

#### `linearSearchMultipleElements`

```javascript
const linearSearchMultipleElements = (array, element) => {
  const elemIndexes = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      elemIndexes.push(index);
    }
  }
  return elemIndexes.length === 0 ? "Not found" : elemIndexes;
};
```

### Test Suite

```javascript
const { linearSearch, linearSearchMultipleElements } = require("../index");

test("linearSearch is a defined function", () => {
  expect(typeof linearSearch).toEqual("function");
});

test("linearSearch should return 6", () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(linearSearch(testArray, 7)).toEqual(6);
});

test("linearSearch should return -1 because 5643 is not in the array", () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(linearSearch(testArray, 5643)).toEqual(-1);
});

test("linearSearchMultipleElements should return not found", () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(linearSearchMultipleElements(testArray, 21)).toEqual("Not found");
});

test("linearSearchMultipleElements should return [6, 9]", () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];
  expect(linearSearchMultipleElements(testArray, 7)).toEqual([6, 9]);
});
```

---

## Key Points

1. **Single Occurrence Search**:

   - `linearSearch` identifies the first matching index or returns `-1` if not found.

2. **Multiple Occurrences Search**:

   - `linearSearchMultipleElements` finds all indexes where the element occurs or indicates absence with `"Not found"`.

3. **Performance**:

   - Time complexity: `O(n)` for both functions.
   - Space complexity: `O(1)` for `linearSearch`, `O(k)` for `linearSearchMultipleElements` where `k` is the number of occurrences.

4. **Testing**:
   - Includes various test cases to validate functionality and edge cases.

---

## Usage

1. **Run the Functions**:

   - Use `linearSearch` to find the first occurrence of an element.
   - Use `linearSearchMultipleElements` to find all occurrences of an element.

2. **Run Tests**:
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the test suite:
     ```bash
     npm test
     ```

---

## Example Output

### **Single Occurrence Search**

Input:

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(linearSearch(arr, 7));
```

Output:

```
6
```

### **Multiple Occurrences Search**

Input:

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];
console.log(linearSearchMultipleElements(arr, 7));
```

Output:

```
[6, 9]
```

---

## Summary

This project demonstrates the implementation of linear search algorithms with functions for single and multiple occurrences of elements. It provides insight into fundamental searching techniques and validates functionality through comprehensive testing.
