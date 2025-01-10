# CS Merge Sort

## Concepts Covered

1. **Merge Sort Algorithm**:

   - A recursive divide-and-conquer algorithm used to sort an array.
   - Splits the array into smaller subarrays, sorts them, and merges them back together.

2. **Merge Arrays**:

   - Combines two sorted arrays into one sorted array.

3. **Efficiency**:
   - Merge sort has a time complexity of O(n log n) and is stable and efficient for large datasets.

---

## Code Overview

### Merge Arrays Function

```javascript
const mergeArrays = (leftArray, rightArray) => {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      resultArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
};
```

### Merge Sort Function

```javascript
const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return mergeArrays(mergeSort(left), mergeSort(right));
};
```

### Main Execution

```javascript
const unsortedInputArray = [];
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

const sorted = mergeSort(unsortedInputArray);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
```

---

## Key Points

1. **Merge Sort Functionality**:

   - The array is recursively divided into halves until each subarray has only one element.
   - The `mergeArrays` function combines the sorted subarrays into a single sorted array.

2. **Edge Case Handling**:

   - If the array length is less than or equal to 1, it is returned as-is.

3. **Performance**:

   - Merge sort is efficient for large datasets and guarantees O(n log n) time complexity.

4. **Scalability**:
   - Suitable for applications requiring stable and predictable sorting performance.

---

## Example Usage

### Input

```javascript
const unsortedInputArray = [38, 27, 43, 3, 9, 82, 10];
```

### Output

```bash
Post Sort: 3, 9, 10, 27, 38, 43, 82
DONE!
```

---

## How to Run

1. **Create the Script**:

   - Save the provided code as `merge-sort.js` in your project directory.

2. **Execute the Script**:

   - Run the script using Node.js:
     ```bash
     node merge-sort.js
     ```

3. **Observe the Output**:
   - The sorted array will be displayed in the terminal along with the "DONE!" message.

---

## Learning Objectives

- Understand the divide-and-conquer strategy of merge sort.
- Implement and optimize recursive algorithms.
- Learn how to merge two sorted arrays efficiently.

---

## Reflection

Merge sort demonstrates the power of recursion and is an essential algorithm in computer science. Its predictable performance makes it a preferred choice for many large-scale applications. By understanding merge sort, you gain insight into efficient problem-solving strategies.
