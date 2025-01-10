# CS Quick Sort

## Concepts Covered

1. **Quick Sort Algorithm**:

   - Quick Sort is a highly efficient sorting algorithm that uses a divide-and-conquer approach.
   - It works by partitioning the array into two subsets around a pivot element, sorting the subsets recursively.

2. **Key Characteristics**:

   - The algorithm is recursive.
   - It does not require additional memory for sorting (in-place sorting).

3. **Pivot Selection**:

   - The pivot is selected randomly to avoid worst-case performance.

4. **Performance**:
   - **Best Case**: O(n log n)
   - **Worst Case**: O(n²) (if the pivot divides the array poorly)
   - **Average Case**: O(n log n)

## Code Overview

### Quick Sort Implementation

```javascript
// Create our input data
const unsortedInputArray = [];
// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

const quickSort = (array) => {
  // if input array is empty, it doesn't need to be sorted, so return it
  // this must be in place, or the recursive function calls will never end
  if (array.length <= 1) {
    return array;
  }

  // use `.slice()` to pull a single element out of the input array at random
  // this will become our pivot value, meaning we will attempt to sort the array based on a value being greater than or less than this value
  const pivot = array.splice(Math.floor(Math.random() * array.length), 1);

  // we create two empty arrays, one to be populated with all the values less than or equal to the pivot value (left), and the other to be populated with all of the values greater than the pivot (right)
  const left = [];
  const right = [];

  // loop through array and push each value into the `left` or `right` arrays based on the pivot value
  array.forEach((el) => {
    if (el <= pivot) {
      left.push(el);
    } else {
      right.push(el);
    }
  });

  // since the array will likely not be sorted the first time going through this, we recursively call the `quickSort()` function on the `left` and `right` arrays, which will then run through this process over and over again until the input array is less than `1`...indicating the initial array has been sorted and we can return it out of the function
  return quickSort(left).concat(pivot, quickSort(right));
};

const sorted = quickSort(unsortedInputArray);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");
```

## Key Points

1. **Algorithm Details**:

   - The array is recursively divided into smaller subarrays based on comparisons with a pivot value.
   - The base condition stops recursion when the array length is 1 or less.

2. **Pivot Selection**:

   - A random pivot ensures the array is evenly divided on average.

3. **Time Complexity**:

   - **Best Case**: O(n log n) - when the pivot divides the array evenly.
   - **Worst Case**: O(n²) - when the pivot divides the array poorly.
   - **Average Case**: O(n log n).

4. **Space Complexity**:
   - O(log n) due to the recursive call stack.

## How to Run

1. Save the script as `quick-sort.js` in your project folder.

2. Open your terminal and navigate to the folder containing the script.

3. Execute the script using Node.js:

   ```bash
   node quick-sort.js
   ```

4. Observe the sorted output in your terminal.

---

## Learning Objectives

- Understand the divide-and-conquer approach in sorting algorithms.
- Implement a recursive algorithm with careful handling of the base condition.
- Optimize sorting through efficient pivot selection.

## Reflection

Quick Sort is one of the fastest comparison-based sorting algorithms when implemented correctly. Understanding its mechanism not only improves your algorithmic knowledge but also provides insight into practical optimization strategies used in software development.
