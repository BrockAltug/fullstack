# CS Bubble Sort

## Concepts Covered

1. **Bubble Sort Algorithm**:

   - Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
   - The process repeats until the list is sorted.

2. **Optimized vs Forced Approach**:

   - The optimized bubble sort stops early if no swaps are made, indicating the array is already sorted.
   - The forced approach continues to iterate through the entire array regardless of whether it is sorted.

3. **Data Manipulation**:

   - Temporary storage (`tmp`) is used during swapping to preserve data integrity.

4. **Performance**:
   - Bubble sort has a worst-case and average time complexity of \(O(n^2)\), making it inefficient on large lists.

---

## Code Overview

### Optimized Bubble Sort

#### `bubble-sort.js`

```javascript
const unsortedInputArray = [];

for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

const bubbleSort = (array) => {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;

        sorted = false;
      }
    }
  }
  return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
```

### Forced Bubble Sort

#### `bubble-sort-force.js`

```javascript
const unsortedInputArray = [];

for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
```

---

## Key Points

1. **Optimized Bubble Sort**:

   - Exits the loop early if no swaps are required, saving computational resources.

2. **Forced Bubble Sort**:

   - Runs through the entire array even if it is already sorted, making it less efficient.

3. **Use Cases**:

   - Bubble sort is best used for educational purposes and small datasets.

4. **Output**:
   - Both implementations log the sorted array and a completion message.

---

## How to Run

1. **Install Node.js**:
   Ensure that Node.js is installed on your system.

2. **Run Optimized Bubble Sort**:

   ```bash
   node bubble-sort.js
   ```

3. **Run Forced Bubble Sort**:

   ```bash
   node bubble-sort-force.js
   ```

4. **Expected Output**:
   - Both scripts will log the sorted array followed by the message `DONE!`.

---

## Summary

This project demonstrates two variations of the Bubble Sort algorithm: an optimized version that detects early completion and a forced version that always completes its iterations. Both implementations showcase the fundamental principles of sorting and iterative logic, serving as a foundation for understanding more advanced sorting algorithms.
